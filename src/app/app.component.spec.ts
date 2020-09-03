import {AppComponent} from './app.component';

describe('AppComponent', () => {
  it('Should contain fartrip-ui title', () => {
    const component = new AppComponent();

    expect(component.title).toBe('fartrip-ui');
  });
});
