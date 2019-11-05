import { Component, Input, OnInit } from '@angular/core';
import shortid from 'shortid';

@Component({
  selector: 'app-domain-design',
  templateUrl: './domain-design.component.html',
  styleUrls: ['./domain-design.component.scss']
})
export class DomainDesignComponent implements OnInit {

  constructor() {
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

  dragableDesignData: any[] = [];

  private convertDomainDataToDragular(domainDesignData: DomainObject[]) {
    for (const aggregateData of domainDesignData) {
      const parentId = shortid.generate();
      this.dragableDesignData.push({
        id: parentId,
        name: aggregateData.name,
        children: [],
        type: 'entity',
        aggregate: true
      });
      for (const vo of aggregateData.valueObjects) {
        this.dragableDesignData.push({
          id: shortid.generate(),
          name: vo.name,
          parentId,
          type: 'vo'
        });
      }
    }
  }

  ngOnInit() {
    this.convertDomainDataToDragular(this.domainDesignData);
  }

  changeAggregateModel($event: any[]) {

  }
}
