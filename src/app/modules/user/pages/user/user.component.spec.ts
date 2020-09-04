import { UserComponent } from './user.component';

describe('UserComponent', () => {

  it('Should contains "Drivers" and "Orders history" tabs', () => {
    const userTabsLabels = ['Drivers', 'Orders history'];
    const userTabsPaths = ['drivers', 'orders-history'];
    const component = new UserComponent(null);
    const componentTabs = component.userTabs;

    componentTabs.forEach(tab => {
      expect(userTabsLabels.includes(tab.label)).toBeTruthy();
      expect(userTabsPaths.includes(tab.path)).toBeTruthy();
    });
  });

});
