/* Your Code Here */
function createEmployeeRecord([firstName, familyName, title, payPerHour]){
let empObj = {
    firstName: firstName,
    familyName: familyName,
    title: title,
    payPerHour: payPerHour,
    timeInEvents: [],
    timeOutEvents: [],
}
return empObj
}

function createEmployeeRecords(records) {
    return records.map(createEmployeeRecord)
}

function createTimeInEvent(timeStamp){
    let [date, hour] = timeStamp.split(" ")
    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date,
    })
    return this
    

}

function createTimeOutEvent(timeStamp) {
    let [date, hour] = timeStamp.split(" ")
    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date,
    })
    return this
}


function hoursWorkedOnDate(date) {
    const timeIn  = this.timeInEvents.find((day) => date === day.date)
    const timeOut = this.timeOutEvents.find((day)=> date === day.date)
    return (timeOut.hour - timeIn.hour) / 100; 
}


function wagesEarnedOnDate (date) {
const totalPay = hoursWorkedOnDate.call(this, date) * this.payPerHour
return totalPay

}

function findEmployeeByFirstName(srcArr, firstName) {
  let employee =  srcArr.find(index => index.firstName === firstName)
  return employee
}
/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */




const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function calculatePayroll(employeeArr) {
 const totalPayRoll =  employeeArr.reduce((prevValue, currentValue) => {
    return prevValue + allWagesFor.call(currentValue)},0
    )

 return totalPayRoll
}