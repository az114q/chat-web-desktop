import { Component, OnInit } from '@angular/core';
declare var BMap;
@Component({
  selector: 'app-map',
  templateUrl: 'map.component.html',
  styleUrls: ['map.component.less']
})

export class MapComponent implements OnInit {
  visible = false;
  constructor() { }

  ngOnInit() {
    this.initMap();
  }
  initMap() {
    const map = new BMap.Map('allmap');    // 创建Map实例
    map.centerAndZoom(new BMap.Point(121.5695264366, 29.8230114577), 15);  // 初始化地图,设置中心点坐标和地图级别
    // 添加地图类型控件
    map.addControl(new BMap.NavigationControl());
    map.addControl(new BMap.ScaleControl());
    map.addControl(new BMap.OverviewMapControl());
    map.addControl(new BMap.MapTypeControl());
    map.setCurrentCity('宁波市');          // 设置地图显示的城市 此项是必须设置的
    map.enableScrollWheelZoom(true);     // 开启鼠标滚轮缩放
  }
  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }
}
