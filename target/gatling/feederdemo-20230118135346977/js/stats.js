var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "6",
        "ok": "6",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "147",
        "ok": "147",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1211",
        "ok": "1211",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "675",
        "ok": "675",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "496",
        "ok": "496",
        "ko": "-"
    },
    "percentiles1": {
        "total": "673",
        "ok": "673",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1149",
        "ok": "1149",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1196",
        "ok": "1196",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1208",
        "ok": "1208",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 3,
    "percentage": 50
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 2,
    "percentage": 33
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1,
    "percentage": 17
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2",
        "ok": "2",
        "ko": "-"
    }
},
contents: {
"req_goto-home-page-66b3a": {
        type: "REQUEST",
        name: "Goto Home Page",
path: "Goto Home Page",
pathFormatted: "req_goto-home-page-66b3a",
stats: {
    "name": "Goto Home Page",
    "numberOfRequests": {
        "total": "3",
        "ok": "3",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "1149",
        "ok": "1149",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1211",
        "ok": "1211",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1170",
        "ok": "1170",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "29",
        "ok": "29",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1149",
        "ok": "1149",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1180",
        "ok": "1180",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1205",
        "ok": "1205",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1210",
        "ok": "1210",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 2,
    "percentage": 67
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1,
    "percentage": 33
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1",
        "ok": "1",
        "ko": "-"
    }
}
    },"req_goto-home-page--f77fe": {
        type: "REQUEST",
        name: "Goto Home Page Redirect 1",
path: "Goto Home Page Redirect 1",
pathFormatted: "req_goto-home-page--f77fe",
stats: {
    "name": "Goto Home Page Redirect 1",
    "numberOfRequests": {
        "total": "3",
        "ok": "3",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "147",
        "ok": "147",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "197",
        "ok": "197",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "180",
        "ok": "180",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "23",
        "ok": "23",
        "ko": "-"
    },
    "percentiles1": {
        "total": "196",
        "ok": "196",
        "ko": "-"
    },
    "percentiles2": {
        "total": "197",
        "ok": "197",
        "ko": "-"
    },
    "percentiles3": {
        "total": "197",
        "ok": "197",
        "ko": "-"
    },
    "percentiles4": {
        "total": "197",
        "ok": "197",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 3,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1",
        "ok": "1",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
