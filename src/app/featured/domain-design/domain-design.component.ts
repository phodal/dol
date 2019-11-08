import {
  ChangeDetectorRef,
  Component,
  ElementRef, HostListener,
  Input,
  OnInit,
  QueryList,
  TemplateRef,
  ViewChild, ViewChildren,
  ViewContainerRef
} from '@angular/core';
import { ResizeEvent } from 'angular-resizable-element';
import { DragulaService } from 'ng2-dragula';
import Mousetrap from 'mousetrap';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { fromEvent, Subscription } from 'rxjs';
import { filter, take } from 'rxjs/operators';
import shortid from 'shortid';

@Component({
  selector: 'app-domain-design',
  templateUrl: './domain-design.component.html',
  styleUrls: ['./domain-design.component.scss']
})
export class DomainDesignComponent implements OnInit {
  @ViewChild('domainObjectMenu', null) userMenu: TemplateRef<any>;
  overlayRef: OverlayRef | null;
  sub: Subscription;

  constructor(private dragulaService: DragulaService,
              private cd: ChangeDetectorRef,
              private overlay: Overlay,
              private eRef: ElementRef,
              private viewContainerRef: ViewContainerRef
  ) {
    this.dragulaService.createGroup('PARENT', {
      direction: 'vertical',
      removeOnSpill: true,
      moves: (el, source, handle) => handle.className === 'group-handle'
    });

    this.bindKeyboardEvent();
  }

  newDomainGroup: DomainObject[] = [];

  @Input()
  domainDesignData: DomainObject[][] = [[]];

  private changeHistory: any[] = [];
  @ViewChildren('txtArea') textAreas: QueryList<ElementRef>;
  private lastElement: ValueObject;
  createItemModel: string;
  createStatus: ValueObject = {name: ''};

  ngOnInit() {
    const testData: DomainObject[] = [
      {
        isRoot: true,
        isEntity: true,
        name: '订单',
        valueObjects: [
          {name: '订单ID'},
          {name: '币种'},
          {name: '汇率'},
          {name: '总价'},
          {name: '总数'},
          {name: '收货信息'},
          {name: '订单状态'},
          {name: '支付信息'},
        ]
      },
      {
        isRoot: true,
        isEntity: true,
        name: '订单项',
        valueObjects: [
          {name: '订单项ID'},
          {name: '订单ID'},
          {name: '单价'},
          {name: '小计'},
          {name: '数量'},
          {name: '快照ID'},
          {name: '配货单ID'},
          {name: '出库单ID'},
          {name: '发库单ID'},
        ]
      }
    ];

    for (const domainData of testData) {
      domainData.id = shortid.generate();
      for (const vo of domainData.valueObjects) {
        vo.id = shortid.generate();
      }
    }

    this.domainDesignData = [testData];
  }

  @HostListener('document:click', ['$event'])
  handleOutsideClick(event: MouseEvent) {

  }

  changeAggregateModel($event) {
    console.log(this.domainDesignData);
  }

  onRightClick($event) {
    $event.preventDefault();
    alert('onRightClick');
  }

  onResizeEnd($event: ResizeEvent) {

  }

  private bindKeyboardEvent() {
    const that = this;
    Mousetrap.bind(['command+z', 'ctrl+z'], () => {
      if (that.changeHistory.length < 1) {
        return;
      }
      that.domainDesignData = that.changeHistory.pop();
      that.cd.detectChanges();
      return true;
    });
  }

  openContext($event: MouseEvent, group: DomainObject) {
    $event.preventDefault();
    this.close();
    const positionStrategy = this.overlay.position()
      .flexibleConnectedTo({
        x: $event.x, y: $event.y
      })
      .withPositions([
        {
          originX: 'end',
          originY: 'bottom',
          overlayX: 'end',
          overlayY: 'top',
        }
      ]);

    this.overlayRef = this.overlay.create({
      positionStrategy,
      scrollStrategy: this.overlay.scrollStrategies.close()
    });

    this.overlayRef.attach(new TemplatePortal(this.userMenu, this.viewContainerRef, {
      $implicit: group
    }));

    this.sub = fromEvent<MouseEvent>(document, 'click')
      .pipe(
        filter(event => {
          const clickTarget = event.target as HTMLElement;
          return !!this.overlayRef && !this.overlayRef.overlayElement.contains(clickTarget);
        }),
        take(1)
      ).subscribe(() => this.close());
  }

  close() {
    // tslint:disable-next-line:no-unused-expression
    this.sub && this.sub.unsubscribe();
    if (this.overlayRef) {
      this.overlayRef.dispose();
      this.overlayRef = null;
    }
  }

  deleteDomain(domain) {

  }

  enableEdit(x: ValueObject) {
    if (this.lastElement) {
      this.lastElement.editable = false;
    }

    x.editable = true;
    this.lastElement = x;

    setTimeout(() => {
      this.textAreas.toArray()[0].nativeElement.focus();
    });
  }

  onTextareaEnter(x: ValueObject) {
    x.editable = false;
  }

  mergeGroup($event) {
    this.newDomainGroup = [];
    this.domainDesignData.push($event);
    this.cd.detectChanges();
  }

  addItem(valueObjects: ValueObject[]) {
    valueObjects.push({
      name: this.createItemModel
    });
    this.createItemModel = "";
  }
}
