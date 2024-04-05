export const scheduleSelector ={
    leftSideEmployeeButtonSelector: () => { return 'button > .fa-user-circle + span'},
    navBarScheduleSelector: () => { return 'a[routerlink="/schedulingTab"]'},
    timelineDayTabVisibilitySelector: () => { return '[name="day_tab"]'},
    actionButtonDropDownSelector: () => { return 'button:has-text("Actions")'},
    selectAddUnAssignedJob: () => { return 'a:has-text("Add unassigned Job")'},
    navBarVerifyOfAddUnAssignedJob: () => { return 'h4:has-text("Add New Job")'},
    clickCustomerBox: () => { return '#partservsearch'},
    selectCustomerInAddUnassignedJob: () => { return 'b:has-text("Complete Air& Heat inc")'},
    addJobDescription: () => { return '[placeholder="Job Description"]'},
    addJobNumber: () => { return '#jobNumber'},
    selectEmployee: () => { return 'a:has-text("Employee(s) (0)")'},
    AddCrewTitleVerify: () => { return 'label:has-text("Add Crew")'},
    clickOnAddCrewBox: () => { return '[class="curlabel form-control"]'},
    clickOnCrewBoxFilter: () => { return '[placeholder="Filter"]'},
    SearchedCrewMemberByName: () => { return 'label:has-text("[10] Muhammad Usman")'},
    clickOnDispatchNow: () => { return 'button:has-text("Dispatch Now")'}
}