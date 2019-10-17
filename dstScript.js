function currentDate() {
    var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    var current = new Date();
    var currentMonth = monthNames[current.getMonth()];
    var currentDay = dayNames[current.getDay()];
    var currentDate = current.getDate();
    var currentYear = current.getFullYear();

    document.getElementById('currentDate').innerHTML = currentDay + ", " + currentDate + " " + currentMonth + " " + currentYear
    document.getElementById('yearInput').defaultValue = currentYear
}

function currentDstStatus() {
    var dst_date = new Date();
    var dst_month = dst_date.getMonth();
    var dst_dom = dst_date.getDate(); //Day of Month
    var dst_dow = dst_date.getDay() + 1; //Day of Week, one added to make even with var dom

    var dst_full_months = (dst_month > 9 && dst_month < 3) ? true: false; //Full months of November through March are always DST
    var first_week = dst_dom <= 7 ? true : false; //True means it's still first week of month
    var first_sunday = (!first_week && dst_dow < dst_dom) ? true : false; //First Sunday of first week of month has passed
    var first_sunday_april = (dst_month == 3 && first_sunday) ? true: false; //Month is April and first Sunday has passed
    var first_sunday_october = (dst_month == 9 && first_sunday) ? true : false; //Month is October and first Sunday has passed

    var dst = (dst_full_months == "true") || ((!first_sunday_april) && (first_sunday_october)) ? "is" : "is not"; //If months are November through March OR it is before first Sunday of April and after first Sunday of October
    
    document.getElementById('currentDstStatus').innerHTML = dst
    
    if(dst === "is not") {
        document.getElementById('currentDstContainer').style.backgroundColor="#ff6961";
    }
    else {
        document.getElementById('currentDstContainer').style.backgroundColor="#77dd77";
    }
}

function dstStartDate() {
    var dstStartDt = new Date();
        dstStartDt.setFullYear(document.getElementById('yearInput').value);
        dstStartDt.setMonth(9);
        dstStartDt.setDate(1);
    var dstStartDtDOW = dstStartDt.getDay();
    var dstStartActualDate = (dstStartDtDOW > 0) ? (8 - dstStartDtDOW) : 1;
    dstStartDt.setDate(dstStartActualDate);

    var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    var startDay = dayNames[dstStartDt.getDay()];
    var startDate = dstStartDt.getDate();
    var startMonth = monthNames[dstStartDt.getMonth()];
    var startYear = dstStartDt.getFullYear();
    
    var currentDate = new Date();
    var pastStartDt = (dstStartDt < currentDate) ? "started":"starts";
    
    document.getElementById('dstStartDay').innerHTML = startDay
    document.getElementById('dstStartDate').innerHTML = startDate
    document.getElementById('dstStartMonth').innerHTML = startMonth
    document.getElementById('dstStartYear').innerHTML = startYear
    document.getElementById('dstStartPast').innerHTML = pastStartDt
}

function dstEndDate() {
    var dstEndDt = new Date();
    dstEndDt.setFullYear(document.getElementById('yearInput').value);
    dstEndDt.setMonth(3);
    dstEndDt.setDate(1);
    var dstEndDtDOW = dstEndDt.getDay();
    var dstEndActualDate = (dstEndDtDOW > 0) ? (8 - dstEndDtDOW) : 1;
    dstEndDt.setDate(dstEndActualDate);

    var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    var endDay = dayNames[dstEndDt.getDay()];
    var endDate = dstEndDt.getDate();
    var endMonth = monthNames[dstEndDt.getMonth()];
    var endYear = dstEndDt.getFullYear();

    var currentDate = new Date();
    var pastEndDt = (dstEndDt < currentDate) ? "ended":"ends";
   
    document.getElementById('dstEndDay').innerHTML = endDay
    document.getElementById('dstEndDate').innerHTML = endDate
    document.getElementById('dstEndMonth').innerHTML = endMonth
    document.getElementById('dstEndYear').innerHTML = endYear
    document.getElementById('dstEndPast').innerHTML = pastEndDt
}
