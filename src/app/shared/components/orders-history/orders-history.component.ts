import { Component, OnInit } from '@angular/core';
import { OrdersHistoryService } from './orders-history.service';
import { Order } from 'src/app/core/models/order';

declare const ol: any;

@Component({
  selector: 'app-orders-history',
  templateUrl: './orders-history.component.html',
  styleUrls: ['./orders-history.component.scss']
})
export class OrdersHistoryComponent implements OnInit {
  latitude = 18.5204;
  longitude = 73.8567;

  map: any;

  constructor(private ordersHistoryService: OrdersHistoryService) {}

  ngOnInit(): void {
    this.map = new ol.Map({
      target: 'map',
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM()
        })
      ],
      view: new ol.View({
        center: ol.proj.fromLonLat([this.longitude, this.latitude]),
        zoom: 12
      })
    });
    this.addPoint(this.latitude, this.longitude);
  }

  setCenter() {
    const view = this.map.getView();
    view.setCenter(ol.proj.fromLonLat([this.longitude, this.latitude]));
    view.addMarker(ol.proj.fromLonLat([this.longitude, this.latitude]));
    view.setZoom(12);
  }

  addPoint(lat: number, lng: number) {
    const vectorLayer = new ol.layer.Vector({
      source: new ol.source.Vector({
        features: [new ol.Feature({
          geometry: new ol.geom.Point(ol.proj.transform([lng, lat], 'EPSG:4326', 'EPSG:3857')),
        })]
      }),
      style: new ol.style.Style({
        image: new ol.style.Icon({
          anchor: [0.5, 0.5],
          anchorXUnits: 'fraction',
          anchorYUnits: 'fraction',
          src: 'assets/img/my-icon.png'
        })
      })
    });
    this.map.addLayer(vectorLayer);
  }

  getOrdersHistoryData(): Order[] {
    return this.ordersHistoryService.getOrdersHistoryData();
  }

  getOrdersHistoryColumns(): string[] {
    return this.ordersHistoryService.getOrdersHistoryColumns();
  }

}
