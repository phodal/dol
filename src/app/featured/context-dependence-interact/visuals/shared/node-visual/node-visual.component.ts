import { Component, Input } from '@angular/core';
import { Node } from '../../../d3';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[nodeVisual]',
  template: `
    <svg:g [attr.transform]="'translate(' + node.x + ',' + node.y + ')'">
      <svg:rect
          class="node"
          [attr.fill]="node.color"
          [attr.x]="-node.width/2"
          [attr.y]="-node.height/2"
          [attr.width]="node.width"
          [attr.height]="node.height"
          >
      </svg:rect>
      <svg:text
          class="node-name"
          [attr.font-size]="node.fontSize">
        {{node.id}}
      </svg:text>
    </svg:g>
  `,
  styleUrls: ['./node-visual.component.css']
})
export class NodeVisualComponent {
  @Input('nodeVisual') node: Node;
}
