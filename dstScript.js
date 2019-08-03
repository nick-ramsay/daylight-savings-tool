var dstStartDt = new Date();
    dstStartDt.setMonth(3);
    dstStartDt.setFullYear(2018);
    dstStartDt.setDate(1);
var dstStartDOW = dstStartDt.getDay();
var dstStartDiff = 7 - dstStartDOW;
var dstStartDOMZero = dstStartDt.getDate();
var dstStartDOM = dstStartDt.getDate()+dstStartDiff;
var dstStartDt = (dstStartDOW !== 0) ? dstStartDt.setDate(dstStartDOM):dstStartDt.setDate(dstStartDOMZero);
document.write(dstStartDt);

