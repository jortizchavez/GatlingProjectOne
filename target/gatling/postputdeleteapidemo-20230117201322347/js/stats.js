var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "10",
        "ok": "5",
        "ko": "5"
    },
    "minResponseTime": {
        "total": "452",
        "ok": "452",
        "ko": "458"
    },
    "maxResponseTime": {
        "total": "1008",
        "ok": "983",
        "ko": "1008"
    },
    "meanResponseTime": {
        "total": "596",
        "ok": "592",
        "ko": "601"
    },
    "standardDeviation": {
        "total": "203",
        "ok": "198",
        "ko": "208"
    },
    "percentiles1": {
        "total": "506",
        "ok": "524",
        "ko": "487"
    },
    "percentiles2": {
        "total": "566",
        "ok": "534",
        "ko": "577"
    },
    "percentiles3": {
        "total": "997",
        "ok": "893",
        "ko": "922"
    },
    "percentiles4": {
        "total": "1006",
        "ok": "965",
        "ko": "991"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 4,
    "percentage": 40
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1,
    "percentage": 10
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 5,
    "percentage": 50
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.667",
        "ok": "0.833",
        "ko": "0.833"
    }
},
contents: {
"req_update-user-a0386": {
        type: "REQUEST",
        name: "update user",
path: "update user",
pathFormatted: "req_update-user-a0386",
stats: {
    "name": "update user",
    "numberOfRequests": {
        "total": "5",
        "ok": "5",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "452",
        "ok": "452",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "983",
        "ok": "983",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "592",
        "ok": "592",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "198",
        "ok": "198",
        "ko": "-"
    },
    "percentiles1": {
        "total": "524",
        "ok": "524",
        "ko": "-"
    },
    "percentiles2": {
        "total": "534",
        "ok": "534",
        "ko": "-"
    },
    "percentiles3": {
        "total": "893",
        "ok": "893",
        "ko": "-"
    },
    "percentiles4": {
        "total": "965",
        "ok": "965",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 4,
    "percentage": 80
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1,
    "percentage": 20
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
        "total": "0.833",
        "ok": "0.833",
        "ko": "-"
    }
}
    },"req_create-user-req-048f5": {
        type: "REQUEST",
        name: "create user req",
path: "create user req",
pathFormatted: "req_create-user-req-048f5",
stats: {
    "name": "create user req",
    "numberOfRequests": {
        "total": "5",
        "ok": "0",
        "ko": "5"
    },
    "minResponseTime": {
        "total": "458",
        "ok": "-",
        "ko": "458"
    },
    "maxResponseTime": {
        "total": "1008",
        "ok": "-",
        "ko": "1008"
    },
    "meanResponseTime": {
        "total": "601",
        "ok": "-",
        "ko": "601"
    },
    "standardDeviation": {
        "total": "208",
        "ok": "-",
        "ko": "208"
    },
    "percentiles1": {
        "total": "487",
        "ok": "-",
        "ko": "487"
    },
    "percentiles2": {
        "total": "577",
        "ok": "-",
        "ko": "577"
    },
    "percentiles3": {
        "total": "922",
        "ok": "-",
        "ko": "922"
    },
    "percentiles4": {
        "total": "991",
        "ok": "-",
        "ko": "991"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
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
    "count": 5,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.833",
        "ok": "-",
        "ko": "0.833"
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
