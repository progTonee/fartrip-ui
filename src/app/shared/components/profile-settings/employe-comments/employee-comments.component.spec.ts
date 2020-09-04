class EmployeeCommentsService {
  private leaveCommentOpen = false;

  isLeaveCommentOpen(): boolean {
    return this.leaveCommentOpen;
  }

  setCommentOpen(leaveCommentOpenFlag: boolean): void {
    this.leaveCommentOpen = leaveCommentOpenFlag;
  }
}

class EmployeeCommentsComponent {

  constructor(private employerCommentService: EmployeeCommentsService) {}

  onCancelCommentClick(): void {
    this.employerCommentService.setCommentOpen(false);
  }
}

class EmployeeComponent {

  constructor(private employeeCommentsService: EmployeeCommentsService) {}

  onAddCommentClick(): void {
    this.employeeCommentsService.setCommentOpen(true);
  }
}

describe('EmployeeCommentsComponent', () => {

  it('Should correctly switch on adding comments flag', () => {
    const employerCommentsService = new EmployeeCommentsService();
    const component = new EmployeeComponent(employerCommentsService);

    expect(employerCommentsService.isLeaveCommentOpen()).toBeFalsy();
    component.onAddCommentClick();
    expect(employerCommentsService.isLeaveCommentOpen()).toBeTruthy();
  });

  it('Should correctly switch off adding comments flag', () => {
    const employeeCommentsService = new EmployeeCommentsService();
    const component = new EmployeeCommentsComponent(employeeCommentsService);

    employeeCommentsService.setCommentOpen(true);
    expect(employeeCommentsService.isLeaveCommentOpen()).toBeTruthy();
    component.onCancelCommentClick();
    expect(employeeCommentsService.isLeaveCommentOpen()).toBeFalsy();
  });

});
