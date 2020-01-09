

function example() {

var tasks = [
{"startDate":new Date("2015/01/01 00:00:00"),"endDate":new Date("2015/01/02 00:00:00"),"taskName":"story1","status":"RUNNING"},
{"startDate":new Date("2015/01/02 00:00:00"),"endDate":new Date("2015/01/03 00:00:00"),"taskName":"story2","status":"RUNNING"},
{"startDate":new Date("2015/01/03 00:00:00"),"endDate":new Date("2015/01/04 00:00:00"),"taskName":"story3","status":"RUNNING"},
{"startDate":new Date("2015/01/04 00:00:00"),"endDate":new Date("2015/01/05 00:00:00"),"taskName":"story4","status":"RUNNING"},
{"startDate":new Date("2015/01/05 00:00:00"),"endDate":new Date("2015/01/06 00:00:00"),"taskName":"story5","status":"RUNNING"},
{"startDate":new Date("2015/01/06 00:00:00"),"endDate":new Date("2015/01/07 00:00:00"),"taskName":"story6","status":"RUNNING"},
{"startDate":new Date("2015/01/07 00:00:00"),"endDate":new Date("2015/01/08 00:00:00"),"taskName":"story7","status":"RUNNING"},
{"startDate":new Date("2015/01/08 00:00:00"),"endDate":new Date("2015/01/09 00:00:00"),"taskName":"story8","status":"RUNNING"},
{"startDate":new Date("2015/01/09 00:00:00"),"endDate":new Date("2015/01/10 00:00:00"),"taskName":"story9","status":"RUNNING"},
{"startDate":new Date("2015/01/10 00:00:00"),"endDate":new Date("2015/01/11 00:00:00"),"taskName":"story10","status":"RUNNING"},
];

var taskStatus = {
    "SUCCEEDED" : "bar",
    "FAILED" : "bar-failed",
    "RUNNING" : "bar-running",
    "KILLED" : "bar-killed"
};

var taskNames = [ "story1","story2","story3","story4","story5","story6","story7","story8","story9","story10" ];

tasks.sort(function(a, b) {
    return a.endDate - b.endDate;
});
var maxDate = tasks[tasks.length - 1].endDate;
tasks.sort(function(a, b) {
    return a.startDate - b.startDate;
});
var minDate = tasks[0].startDate;

var format = "%H";

var gantt = d3.gantt().taskTypes(taskNames).taskStatus(taskStatus).tickFormat(format);
gantt(tasks);

};
