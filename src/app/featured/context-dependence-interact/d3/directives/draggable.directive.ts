import { Directive, Input, ElementRef, OnInit } from '@angular/core';
import { Node, ForceDirectedGraph } from '../models';
import { D3Service } from '../d3.service';

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[draggableNode]'
})
export class DraggableDirective implements OnInit {
    @Input('draggableNode') draggableNode: Node;
    @Input('draggableInGraph') draggableInGraph: ForceDirectedGraph;

    constructor(private d3Service: D3Service, private elementRef: ElementRef) { }

    ngOnInit() {
        this.d3Service.applyDraggableBehaviour(this.elementRef.nativeElement, this.draggableNode, this.draggableInGraph);
    }
}
