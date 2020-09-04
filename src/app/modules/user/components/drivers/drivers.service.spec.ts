import {DriversService} from './drivers.service';

describe('DriversService', () => {

  it('Should return correct table column headers', () => {
    const tableColumns = ['image', 'name', 'status', 'action'];
    const driversService = new DriversService(null);
    const returnedTableColumns = driversService.getDriversDisplayedColumns();

    returnedTableColumns.forEach(column => expect(tableColumns.includes(column)).toBeTruthy());
  });

});
