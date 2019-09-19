/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let createEmployeeRecord = 
    function (employeeArr) {
        const firstNameStr = employeeArr[0];
        const familyNameStr = employeeArr[1];
        const titleStr = employeeArr[2];
        const payRateNum = employeeArr[3];
        const employee = {
            firstName: firstNameStr,
            familyName: familyNameStr,
            title: titleStr,
            payPerHour: payRateNum,
            timeInEvents: [],
            timeOutEvents: []
        };
        return employee;
    }

let createEmployees = function(employeeArrArr) {
    const employeeArr = employeeArrArr.map(
        employeeArr => createEmployeeRecord(employeeArr));
    return employeeArr;
};

let createTimeInEvent = function(dateTimeStr) {
    const dateTimeArr = dateTimeStr.split(" ");
    const dateStr = dateTimeArr[0];
    const timeInt = parseInt(dateTimeArr[1]);
    const timeInEvent = {
        type: "TimeIn",
        hour: timeInt,
        date: dateStr
    };
    this.timeInEvents.push(timeInEvent);
    return this;
};

let createTimeOutEvent = function(dateTimeStr) {
    const dateTimeArr = dateTimeStr.split(" ");
    const dateStr = dateTimeArr[0];
    const timeInt = parseInt(dateTimeArr[1]);
    const timeOutEvent = {
        type: "TimeOut",
        hour: timeInt,
        date: dateStr
    };
    this.timeOutEvents.push(timeOutEvent);
    return this;
};

let hoursWorkedOnDate = function(dateStr) {
    const hourIn = this.timeInEvents.find(event => event.date == dateStr).hour;
    const hourOut = this.timeOutEvents.find(event => event.date == dateStr).hour;
    const hoursWorked = (hourOut - hourIn)/100;
    return hoursWorked;
};

let wagesEarnedOnDate = function(dateStr) {
    const hoursWorked = hoursWorkedOnDate.call(this, dateStr);
    const wagesEarned = hoursWorked * this.payPerHour;
    return wagesEarned;
};

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
};

let calculatePayroll = function(employeesArr) {
    const payroll = employeesArr.reduce((total, employee) => {
        return total + allWagesFor.call(employee)
    }, 0);
    return payroll;
};

let findEmployeebyFirstName = function(srcArray, firstName) {
    const employee = srcArray.find(employee => {
        return employee.firstName == firstName
    });
    return employee;
};

let createEmployeeRecords = function(src) {
  return src.map(row => createEmployeeRecord(row));
};