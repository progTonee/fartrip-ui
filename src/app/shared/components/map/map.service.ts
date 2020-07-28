import { Injectable } from '@angular/core';
import { icon, latLng, marker, polyline, tileLayer } from 'leaflet';

@Injectable({
  providedIn: 'root'
})
export class MapService {
  options: any;

  constructor() {}

  setMapOptions(routePoints: any[]): void {
    this.options = {
      layers: [
        this.getStreetMaps(),
        this.getRoute(routePoints),
        this.getStartPathPointMarker(routePoints[0]),
        this.getEndPathPointMarker(routePoints[routePoints.length - 1])
      ],
      zoom: 14,
      center: latLng([routePoints[0][0], routePoints[0][1]])
    };
  }

  getMapOptions(): void {
    return this.options;
  }

  getRoute(routePoints: any[]): any {
    return polyline(routePoints);
  }

  private getStreetMaps(): any {
    return tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      detectRetina: true,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });
  }

  private getStartPathPointMarker(startMarkerPoints: any[]): any {
    return marker([startMarkerPoints[0], startMarkerPoints[1]], {
      icon: icon({
        iconSize: [25, 41],
        iconAnchor: [13, 41],
        iconUrl: 'leaflet/marker-icon.png',
        shadowUrl: 'leaflet/marker-shadow.png'
      })
    });
  }

  private getEndPathPointMarker(endMarkerPoints: any[]): any {
    return marker([endMarkerPoints[0], endMarkerPoints[1]], {
      icon: icon({
        iconSize: [25, 41],
        iconAnchor: [13, 41],
        iconUrl: 'leaflet/marker-icon.png',
        iconRetinaUrl: 'leaflet/marker-icon-2x.png',
        shadowUrl: 'leaflet/marker-shadow.png'
      })
    });
  }
}
