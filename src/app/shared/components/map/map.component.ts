import { Component, OnInit, Input } from '@angular/core';
import { MapService } from './map.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  @Input() routePoints: any[];

  constructor(private mapService: MapService) {}

  ngOnInit(): void {
    this.mapService.setMapOptions(this.routePoints);
  }

  getMapOptions(): any {
    return this.mapService.getMapOptions();
  }
}
