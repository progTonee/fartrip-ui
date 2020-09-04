import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-settings',
  templateUrl: './employee-settings.component.html',
  styleUrls: ['./employee-settings.component.scss']
})
export class EmployeeSettingsComponent implements OnInit {
  settingsTabs: any[];

  constructor() {
    this.settingsTabs = [
      { label: 'General Info', path: '/employee/settings/profile' },
      { label: 'Comments', path: '/employee/settings/comments' }
    ];
  }

  ngOnInit(): void {}

}
