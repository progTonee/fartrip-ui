import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employer-settings',
  templateUrl: './employer-settings.component.html',
  styleUrls: ['./employer-settings.component.scss']
})
export class EmployerSettingsComponent implements OnInit {
  settingsTabs: any[];

  constructor() {
    this.settingsTabs = [
      { label: 'General Info', path: '/employee/settings/profile' },
      { label: 'Comments', path: '/employee/settings/comments' }
    ];
  }

  ngOnInit(): void {}

}
