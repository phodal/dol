import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { ResizeEvent } from 'angular-resizable-element';
import { DragulaService } from 'ng2-dragula';
import Mousetrap from 'mousetrap';

@Component({
  selector: 'app-domain-design',
  templateUrl: './domain-design.component.html',
  styleUrls: ['./domain-design.component.scss']
})
export class DomainDesignComponent implements OnInit {

  constructor(private dragulaService: DragulaService, private cd: ChangeDetectorRef) {
    this.dragulaService.createGroup('PARENT', {
      direction: 'vertical',
      moves: (el, source, handle) => handle.className === 'group-handle'
    });

    this.bindKeyboardEvent();
  }

  @Input()
  domainDesignData: DomainObject[] = [
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

  private changeHistory: any[] = [];

  ngOnInit() {
  }

  changeAggregateModel() {
    this.changeHistory.push(this.domainDesignData);
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
}
