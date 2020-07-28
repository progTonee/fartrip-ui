import { Injectable } from '@angular/core';

declare const ol: any;

@Injectable({
  providedIn: 'root'
})
export class MapService {
  latitude = 52.424198;
  longitude = 30.989594;
  map: any;

  constructor() {}

  setMap(): void {
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

  etCenter() {
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
          name: 'Null Island',
          population: 2000,
          rainfall: 500
        })]
      }),
      style: new ol.style.Style({
        // tslint:disable-next-line: no-redundant-jsdoc
        image: new ol.style.Icon(/** @type {olx.style.IconOptions} */ ({
          opacity: 1,
          src: '../../../../assets/location-icon.png',
        }))
      })
    });

    this.map.addLayer(vectorLayer);
  }
}
