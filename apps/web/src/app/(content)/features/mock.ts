import * as assertions from "@openstatus/assertions";

export const mockResponseData = {
  timing: {
    dnsStart: 1720297250262,
    dnsDone: 1720297250290,
    connectStart: 1720297250290,
    connectDone: 1720297250291,
    tlsHandshakeStart: 1720297250291,
    tlsHandshakeDone: 1720297250300,
    firstByteStart: 1720297250300,
    firstByteDone: 1720297250635,
    transferStart: 1720297250635,
    transferDone: 1720297250635,
  },
  headers: {
    Age: "0",
    "Cache-Control": "private, no-cache, no-store, max-age=0, must-revalidate",
    "Content-Type": "text/html; charset=utf-8",
    Date: "Sat, 06 Jul 2024 20:20:50 GMT",
    Server: "Vercel",
    "Strict-Transport-Security": "max-age=63072000",
    Vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch",
    "X-Matched-Path": "/",
    "X-Powered-By": "Next.js",
    "X-Vercel-Cache": "MISS",
    "X-Vercel-Execution-Region": "fra1",
    "X-Vercel-Id": "bom1::fra1::nj6b8-1720297250301-a7b4ff53baa9",
  },
  status: 200,
  message: null,
  assertions: assertions.deserialize(
    '[{"version":"v1","type":"header","compare":"eq","key":"Server","target":"Vercel"}]',
  ),
};

export const mockTrackerData = [
  { day: "2024-07-07T00:00:00.000Z", count: 3944, ok: 3944 },
  { day: "2024-07-06T00:00:00.000Z", count: 4692, ok: 4692 },
  { day: "2024-07-05T00:00:00.000Z", count: 4737, ok: 4737 },
  { day: "2024-07-04T00:00:00.000Z", count: 4862, ok: 4862 },
  { day: "2024-07-03T00:00:00.000Z", count: 1958, ok: 1958 },
  { day: "2024-07-02T00:00:00.000Z", count: 1152, ok: 1152 },
  { day: "2024-07-01T00:00:00.000Z", count: 1152, ok: 1152 },
  { day: "2024-06-30T00:00:00.000Z", count: 1152, ok: 1152 },
  { day: "2024-06-29T00:00:00.000Z", count: 1152, ok: 1152 },
  { day: "2024-06-28T00:00:00.000Z", count: 1128, ok: 1128 },
  { day: "2024-06-27T00:00:00.000Z", count: 1144, ok: 1144 },
  { day: "2024-06-26T00:00:00.000Z", count: 1148, ok: 1148 },
  { day: "2024-06-25T00:00:00.000Z", count: 1152, ok: 1152 },
  { day: "2024-06-24T00:00:00.000Z", count: 1151, ok: 1151 },
  { day: "2024-06-23T00:00:00.000Z", count: 1152, ok: 1152 },
  { day: "2024-06-22T00:00:00.000Z", count: 1152, ok: 1152 },
  { day: "2024-06-21T00:00:00.000Z", count: 1152, ok: 1152 },
  { day: "2024-06-20T00:00:00.000Z", count: 1152, ok: 1151 },
  { day: "2024-06-19T00:00:00.000Z", count: 1064, ok: 1064 },
  { day: "2024-06-18T00:00:00.000Z", count: 864, ok: 864 },
  { day: "2024-06-17T00:00:00.000Z", count: 864, ok: 864 },
  { day: "2024-06-16T00:00:00.000Z", count: 864, ok: 864 },
  { day: "2024-06-15T00:00:00.000Z", count: 864, ok: 864 },
  { day: "2024-06-14T00:00:00.000Z", count: 864, ok: 864 },
  { day: "2024-06-13T00:00:00.000Z", count: 864, ok: 864 },
  { day: "2024-06-12T00:00:00.000Z", count: 863, ok: 863 },
  { day: "2024-06-11T00:00:00.000Z", count: 864, ok: 864 },
  { day: "2024-06-10T00:00:00.000Z", count: 864, ok: 864 },
  { day: "2024-06-09T00:00:00.000Z", count: 1320, ok: 1320 },
  { day: "2024-06-08T00:00:00.000Z", count: 864, ok: 864 },
  { day: "2024-06-07T00:00:00.000Z", count: 864, ok: 864 },
  { day: "2024-06-06T00:00:00.000Z", count: 864, ok: 864 },
  { day: "2024-06-05T00:00:00.000Z", count: 864, ok: 864 },
  { day: "2024-06-04T00:00:00.000Z", count: 864, ok: 864 },
  { day: "2024-06-03T00:00:00.000Z", count: 864, ok: 864 },
  { day: "2024-06-02T00:00:00.000Z", count: 864, ok: 864 },
  { day: "2024-06-01T00:00:00.000Z", count: 864, ok: 864 },
  { day: "2024-05-31T00:00:00.000Z", count: 860, ok: 860 },
  { day: "2024-05-30T00:00:00.000Z", count: 858, ok: 858 },
  { day: "2024-05-29T00:00:00.000Z", count: 864, ok: 864 },
  { day: "2024-05-28T00:00:00.000Z", count: 864, ok: 864 },
  { day: "2024-05-27T00:00:00.000Z", count: 864, ok: 864 },
  { day: "2024-05-26T00:00:00.000Z", count: 864, ok: 864 },
  { day: "2024-05-25T00:00:00.000Z", count: 864, ok: 864 },
  { day: "2024-05-24T00:00:00.000Z", count: 864, ok: 864 },
];

export const mockChartData = {
  data: [
    {
      timestamp: "Jul 5, 23:00",
      lhr: 991,
      phx: 1870,
      gig: 1088,
      sjc: 658,
      mia: 808,
      dfw: 2403,
      gru: 857,
      gdl: 1043,
      qro: 1183,
      syd: 715,
      jnb: 496,
      yyz: 877,
      mad: 886,
      ams: 562,
      iad: 2311,
      scl: 992,
      fra: 939,
      den: 645,
      ord: 2455,
      hkg: 2082,
      cdg: 984,
      arn: 1179,
      sea: 914,
      sin: 970,
      yul: 677,
      atl: 1083,
      bos: 2061,
      bog: 902,
      eze: 1031,
      ewr: 965,
      otp: 1077,
      bom: 1609,
      waw: 2227,
      lax: 743,
    },
    {
      timestamp: "Jul 6, 00:00",
      hkg: 792,
      cdg: 741,
      den: 744,
      ord: 1001,
      fra: 917,
      sea: 1053,
      sin: 845,
      arn: 955,
      bos: 687,
      bog: 562,
      atl: 764,
      yul: 695,
      lax: 651,
      otp: 599,
      bom: 790,
      waw: 669,
      eze: 789,
      ewr: 614,
      sjc: 707,
      mia: 1146,
      gig: 936,
      lhr: 992,
      phx: 623,
      gdl: 1137,
      qro: 925,
      dfw: 1153,
      gru: 620,
      jnb: 537,
      syd: 703,
      scl: 750,
      iad: 310,
      ams: 580,
      mad: 829,
      yyz: 811,
    },
    {
      timestamp: "Jul 6, 01:00",
      lax: 1386,
      waw: 494,
      bom: 1632,
      otp: 687,
      ewr: 1053,
      eze: 1570,
      bog: 1699,
      bos: 1144,
      atl: 1478,
      yul: 1390,
      sin: 1820,
      sea: 1807,
      arn: 1586,
      cdg: 667,
      hkg: 763,
      ord: 1672,
      den: 924,
      fra: 497,
      scl: 888,
      iad: 702,
      mad: 817,
      ams: 1258,
      yyz: 1768,
      jnb: 496,
      syd: 880,
      qro: 1148,
      gdl: 1568,
      gru: 860,
      dfw: 1578,
      mia: 1564,
      sjc: 1680,
      gig: 1364,
      phx: 788,
      lhr: 778,
    },
    {
      timestamp: "Jul 6, 02:00",
      ord: 1854,
      den: 1543,
      fra: 555,
      cdg: 662,
      hkg: 1066,
      arn: 906,
      sin: 944,
      sea: 1666,
      atl: 950,
      yul: 734,
      bog: 1057,
      bos: 795,
      waw: 542,
      otp: 621,
      bom: 774,
      ewr: 662,
      eze: 888,
      lax: 946,
      gig: 854,
      phx: 822,
      lhr: 780,
      mia: 702,
      sjc: 604,
      gru: 835,
      dfw: 1080,
      qro: 842,
      gdl: 1580,
      jnb: 554,
      syd: 754,
      mad: 756,
      ams: 518,
      yyz: 1058,
      scl: 982,
      iad: 946,
    },
    {
      timestamp: "Jul 6, 03:00",
      bos: 1076,
      bog: 1106,
      atl: 872,
      yul: 825,
      lax: 958,
      otp: 616,
      bom: 844,
      waw: 586,
      eze: 898,
      ewr: 1097,
      hkg: 678,
      cdg: 700,
      den: 766,
      ord: 784,
      fra: 682,
      sea: 983,
      sin: 824,
      arn: 734,
      jnb: 467,
      syd: 1010,
      scl: 780,
      iad: 990,
      mad: 832,
      ams: 547,
      yyz: 816,
      sjc: 972,
      mia: 826,
      gig: 966,
      lhr: 784,
      phx: 554,
      gdl: 990,
      qro: 1012,
      dfw: 1066,
      gru: 848,
    },
    {
      timestamp: "Jul 6, 04:00",
      syd: 1142,
      jnb: 508,
      yyz: 864,
      ams: 412,
      mad: 642,
      iad: 884,
      scl: 866,
      lhr: 797,
      phx: 901,
      gig: 794,
      sjc: 1398,
      mia: 546,
      dfw: 1114,
      gru: 620,
      gdl: 650,
      qro: 1684,
      yul: 760,
      atl: 870,
      bos: 686,
      bog: 868,
      eze: 1065,
      ewr: 854,
      otp: 770,
      bom: 1491,
      waw: 678,
      lax: 846,
      fra: 541,
      den: 1314,
      ord: 714,
      hkg: 1028,
      cdg: 556,
      arn: 1472,
      sea: 1027,
      sin: 1592,
    },
    {
      timestamp: "Jul 6, 05:00",
      gru: 660,
      dfw: 1060,
      qro: 1102,
      gdl: 1650,
      phx: 1502,
      lhr: 706,
      gig: 765,
      mia: 741,
      sjc: 880,
      yyz: 928,
      mad: 622,
      ams: 620,
      iad: 928,
      scl: 942,
      syd: 1692,
      jnb: 480,
      arn: 784,
      sin: 1226,
      sea: 914,
      fra: 512,
      ord: 962,
      den: 1683,
      cdg: 457,
      hkg: 1032,
      ewr: 1740,
      eze: 790,
      waw: 586,
      bom: 1131,
      otp: 724,
      lax: 1774,
      yul: 1366,
      atl: 692,
      bog: 856,
      bos: 1666,
    },
    {
      timestamp: "Jul 6, 06:00",
      iad: 762,
      scl: 802,
      yyz: 1014,
      ams: 644,
      mad: 650,
      syd: 1220,
      jnb: 456,
      gdl: 1072,
      qro: 746,
      dfw: 916,
      gru: 720,
      mia: 597,
      sjc: 594,
      lhr: 908,
      phx: 810,
      gig: 674,
      lax: 1406,
      eze: 918,
      ewr: 582,
      bom: 862,
      otp: 582,
      waw: 498,
      bos: 840,
      bog: 972,
      yul: 524,
      atl: 788,
      sin: 982,
      sea: 1035,
      arn: 1486,
      hkg: 1238,
      cdg: 714,
      fra: 420,
      den: 962,
      ord: 828,
    },
    {
      timestamp: "Jul 6, 07:00",
      syd: 1133,
      jnb: 515,
      yyz: 744,
      ams: 750,
      mad: 716,
      iad: 790,
      scl: 781,
      phx: 944,
      lhr: 746,
      gig: 816,
      mia: 622,
      sjc: 597,
      gru: 667,
      dfw: 896,
      qro: 928,
      gdl: 832,
      yul: 594,
      atl: 668,
      bog: 678,
      bos: 642,
      ewr: 664,
      eze: 638,
      waw: 711,
      otp: 765,
      bom: 685,
      lax: 865,
      fra: 624,
      ord: 645,
      den: 1426,
      cdg: 672,
      hkg: 1026,
      arn: 971,
      sin: 1018,
      sea: 976,
    },
    {
      timestamp: "Jul 6, 08:00",
      sjc: 927,
      mia: 700,
      gig: 1416,
      lhr: 754,
      phx: 584,
      gdl: 1022,
      qro: 880,
      dfw: 811,
      gru: 522,
      jnb: 498,
      syd: 716,
      scl: 826,
      iad: 940,
      ams: 550,
      mad: 621,
      yyz: 718,
      hkg: 1240,
      cdg: 656,
      den: 631,
      ord: 837,
      fra: 554,
      sea: 1008,
      sin: 1014,
      arn: 1148,
      bos: 687,
      bog: 779,
      atl: 832,
      yul: 514,
      lax: 888,
      otp: 748,
      bom: 756,
      waw: 674,
      eze: 576,
      ewr: 600,
    },
    {
      timestamp: "Jul 6, 09:00",
      sea: 921,
      sin: 1022,
      arn: 1199,
      hkg: 1161,
      cdg: 574,
      den: 627,
      ord: 767,
      fra: 536,
      lax: 497,
      bom: 1151,
      otp: 2027,
      waw: 963,
      eze: 2208,
      ewr: 841,
      bos: 623,
      bog: 2252,
      atl: 660,
      yul: 626,
      gdl: 753,
      qro: 2429,
      dfw: 2695,
      gru: 504,
      sjc: 2272,
      mia: 628,
      gig: 655,
      lhr: 784,
      phx: 1087,
      scl: 930,
      iad: 700,
      ams: 602,
      mad: 881,
      yyz: 898,
      jnb: 427,
      syd: 1237,
    },
    {
      timestamp: "Jul 6, 10:00",
      cdg: 919,
      hkg: 1140,
      fra: 648,
      ord: 696,
      den: 771,
      sin: 929,
      sea: 978,
      arn: 1283,
      bog: 693,
      bos: 938,
      yul: 822,
      atl: 741,
      lax: 867,
      ewr: 667,
      eze: 697,
      waw: 1059,
      bom: 882,
      otp: 1144,
      mia: 710,
      sjc: 834,
      phx: 692,
      lhr: 1039,
      gig: 562,
      qro: 1184,
      gdl: 763,
      gru: 559,
      dfw: 1017,
      syd: 1211,
      jnb: 540,
      iad: 903,
      scl: 698,
      yyz: 2359,
      ams: 882,
      mad: 652,
    },
    {
      timestamp: "Jul 6, 11:00",
      mia: 478,
      sjc: 746,
      gig: 695,
      lhr: 873,
      phx: 654,
      gdl: 1040,
      qro: 818,
      dfw: 771,
      gru: 488,
      jnb: 621,
      syd: 1641,
      scl: 832,
      iad: 902,
      ams: 970,
      mad: 651,
      yyz: 858,
      hkg: 1218,
      cdg: 534,
      den: 670,
      ord: 820,
      fra: 582,
      sin: 1031,
      sea: 953,
      arn: 1214,
      bos: 670,
      bog: 1596,
      atl: 572,
      yul: 530,
      lax: 766,
      bom: 730,
      otp: 577,
      waw: 406,
      eze: 888,
      ewr: 544,
    },
    {
      timestamp: "Jul 6, 12:00",
      syd: 1056,
      jnb: 474,
      yyz: 1458,
      ams: 946,
      mad: 1626,
      iad: 942,
      scl: 678,
      phx: 1514,
      lhr: 786,
      gig: 610,
      sjc: 1358,
      mia: 547,
      gru: 542,
      dfw: 936,
      qro: 946,
      gdl: 1024,
      yul: 1455,
      atl: 535,
      bog: 794,
      bos: 756,
      ewr: 877,
      eze: 639,
      waw: 609,
      bom: 1004,
      otp: 724,
      lax: 713,
      fra: 848,
      ord: 1636,
      den: 856,
      cdg: 1002,
      hkg: 1106,
      arn: 1200,
      sea: 952,
      sin: 1027,
    },
    {
      timestamp: "Jul 6, 13:00",
      ewr: 1450,
      eze: 748,
      waw: 900,
      otp: 1000,
      bom: 878,
      lax: 694,
      yul: 752,
      atl: 672,
      bog: 851,
      bos: 679,
      arn: 1143,
      sea: 1073,
      sin: 1085,
      fra: 940,
      ord: 954,
      den: 1604,
      cdg: 781,
      hkg: 1078,
      yyz: 719,
      ams: 702,
      mad: 951,
      iad: 1329,
      scl: 830,
      syd: 1702,
      jnb: 794,
      gru: 530,
      dfw: 931,
      qro: 979,
      gdl: 1704,
      phx: 1432,
      lhr: 633,
      gig: 635,
      sjc: 784,
      mia: 1532,
    },
    {
      timestamp: "Jul 6, 14:00",
      cdg: 704,
      hkg: 1144,
      fra: 392,
      ord: 663,
      den: 705,
      sea: 974,
      sin: 1066,
      arn: 1201,
      bog: 714,
      bos: 686,
      yul: 682,
      atl: 630,
      lax: 682,
      ewr: 1177,
      eze: 636,
      waw: 476,
      otp: 818,
      bom: 1000,
      sjc: 740,
      mia: 754,
      phx: 1424,
      lhr: 872,
      gig: 578,
      qro: 1008,
      gdl: 854,
      gru: 614,
      dfw: 906,
      syd: 921,
      jnb: 712,
      iad: 910,
      scl: 718,
      yyz: 886,
      mad: 693,
      ams: 788,
    },
    {
      timestamp: "Jul 6, 15:00",
      arn: 1198,
      sea: 1036,
      sin: 1271,
      fra: 986,
      den: 966,
      ord: 768,
      hkg: 1188,
      cdg: 740,
      eze: 661,
      ewr: 572,
      bom: 822,
      otp: 796,
      waw: 896,
      lax: 602,
      yul: 824,
      atl: 950,
      bos: 703,
      bog: 1102,
      dfw: 1038,
      gru: 814,
      gdl: 1122,
      qro: 1032,
      lhr: 897,
      phx: 1506,
      gig: 836,
      sjc: 638,
      mia: 958,
      yyz: 878,
      mad: 588,
      ams: 526,
      iad: 794,
      scl: 760,
      syd: 847,
      jnb: 754,
    },
    {
      timestamp: "Jul 6, 16:00",
      bos: 876,
      bog: 974,
      atl: 854,
      yul: 623,
      lax: 775,
      bom: 1265,
      otp: 880,
      waw: 666,
      eze: 614,
      ewr: 620,
      hkg: 1216,
      cdg: 704,
      den: 808,
      ord: 948,
      fra: 682,
      sin: 1112,
      sea: 1044,
      arn: 1179,
      jnb: 690,
      syd: 812,
      scl: 700,
      iad: 1136,
      mad: 796,
      ams: 848,
      yyz: 655,
      mia: 652,
      sjc: 576,
      gig: 660,
      lhr: 744,
      phx: 919,
      gdl: 1658,
      qro: 1036,
      dfw: 781,
      gru: 660,
    },
    {
      timestamp: "Jul 6, 17:00",
      sea: 1016,
      sin: 1122,
      arn: 1180,
      cdg: 674,
      hkg: 1090,
      ord: 950,
      den: 610,
      fra: 778,
      lax: 714,
      waw: 713,
      otp: 911,
      bom: 911,
      ewr: 902,
      eze: 654,
      bog: 935,
      bos: 868,
      atl: 818,
      yul: 625,
      qro: 1102,
      gdl: 1818,
      gru: 610,
      dfw: 880,
      sjc: 758,
      mia: 738,
      gig: 724,
      phx: 1568,
      lhr: 870,
      scl: 1643,
      iad: 1038,
      ams: 312,
      mad: 646,
      yyz: 978,
      jnb: 598,
      syd: 700,
    },
    {
      timestamp: "Jul 6, 18:00",
      gru: 827,
      dfw: 1083,
      qro: 704,
      gdl: 740,
      phx: 750,
      lhr: 916,
      gig: 533,
      sjc: 738,
      mia: 778,
      yyz: 1141,
      mad: 794,
      ams: 730,
      iad: 598,
      scl: 702,
      syd: 714,
      jnb: 608,
      arn: 1198,
      sea: 1006,
      sin: 1140,
      fra: 644,
      ord: 762,
      den: 1090,
      cdg: 667,
      hkg: 1179,
      ewr: 442,
      eze: 648,
      waw: 826,
      bom: 906,
      otp: 570,
      lax: 616,
      yul: 760,
      atl: 748,
      bog: 832,
      bos: 577,
    },
    {
      timestamp: "Jul 6, 19:00",
      ams: 596,
      mad: 946,
      yyz: 1022,
      scl: 932,
      iad: 948,
      jnb: 660,
      syd: 512,
      gru: 692,
      dfw: 930,
      qro: 942,
      gdl: 1192,
      gig: 856,
      phx: 732,
      lhr: 908,
      sjc: 1424,
      mia: 784,
      waw: 824,
      bom: 894,
      otp: 925,
      ewr: 671,
      eze: 614,
      lax: 600,
      atl: 764,
      yul: 692,
      bog: 860,
      bos: 884,
      arn: 1181,
      sea: 1051,
      sin: 1144,
      ord: 704,
      den: 963,
      fra: 768,
      cdg: 812,
      hkg: 1148,
    },
    {
      timestamp: "Jul 6, 20:00",
      arn: 1154,
      sin: 910,
      sea: 996,
      fra: 849,
      den: 692,
      ord: 918,
      hkg: 1009,
      cdg: 857,
      eze: 710,
      ewr: 508,
      otp: 535,
      bom: 939,
      waw: 1037,
      lax: 838,
      yul: 721,
      atl: 706,
      bos: 644,
      bog: 1550,
      dfw: 1158,
      gru: 504,
      gdl: 1247,
      qro: 1030,
      lhr: 991,
      phx: 662,
      gig: 1118,
      mia: 767,
      sjc: 565,
      yyz: 831,
      mad: 676,
      ams: 786,
      iad: 674,
      scl: 855,
      syd: 680,
      jnb: 798,
    },
    {
      timestamp: "Jul 6, 21:00",
      bom: 929,
      otp: 644,
      waw: 789,
      eze: 764,
      ewr: 846,
      lax: 952,
      atl: 802,
      yul: 656,
      bos: 867,
      bog: 937,
      arn: 1238,
      sin: 896,
      sea: 978,
      den: 902,
      ord: 1058,
      fra: 890,
      hkg: 840,
      cdg: 558,
      ams: 722,
      mad: 1050,
      yyz: 810,
      scl: 870,
      iad: 878,
      jnb: 926,
      syd: 670,
      dfw: 1068,
      gru: 856,
      gdl: 1814,
      qro: 1642,
      gig: 856,
      lhr: 884,
      phx: 810,
      mia: 1553,
      sjc: 896,
    },
    {
      timestamp: "Jul 6, 22:00",
      iad: 762,
      scl: 768,
      yyz: 888,
      ams: 568,
      mad: 772,
      syd: 708,
      jnb: 520,
      gdl: 902,
      qro: 935,
      dfw: 941,
      gru: 924,
      mia: 846,
      sjc: 1512,
      lhr: 906,
      phx: 1016,
      gig: 805,
      lax: 520,
      eze: 764,
      ewr: 402,
      bom: 892,
      otp: 766,
      waw: 716,
      bos: 814,
      bog: 1193,
      yul: 668,
      atl: 1036,
      sin: 872,
      sea: 1157,
      arn: 1104,
      hkg: 920,
      cdg: 690,
      fra: 622,
      den: 769,
      ord: 1066,
    },
    {
      timestamp: "Jul 6, 23:00",
      gdl: 2533,
      qro: 2260,
      dfw: 2435,
      gru: 1060,
      mia: 2234,
      sjc: 987,
      gig: 832,
      lhr: 927,
      phx: 2214,
      scl: 2293,
      iad: 1032,
      mad: 872,
      ams: 850,
      yyz: 1206,
      jnb: 682,
      syd: 853,
      sin: 2429,
      sea: 1041,
      arn: 1176,
      hkg: 1077,
      cdg: 740,
      den: 1074,
      ord: 1074,
      fra: 448,
      lax: 2146,
      otp: 857,
      bom: 615,
      waw: 713,
      eze: 514,
      ewr: 797,
      bos: 924,
      bog: 895,
      atl: 1008,
      yul: 414,
    },
  ],
  regions: ["ams", "gru", "iad", "jnb", "syd", "hkg"],
};

export const maintenanceData = {
  id: 0,
  from: new Date("2024-07-09T21:02:43.000Z"),
  to: new Date("2024-07-09T21:05:43.000Z"),
  title: "Maintenance",
  message:
    "We are performing maintenance on our environment. Services and projects may be unavailable for a few minutes.",
  createdAt: null,
  updatedAt: null,
  workspaceId: null,
  pageId: null,
  monitors: undefined,
};

export const statusReportData = {
  report: {
    id: 0,
    status: "resolved" as const,
    title: "Downtime",
    workspaceId: 1,
    createdAt: new Date("2024-07-09T21:22:43.000Z"),
    updatedAt: new Date("2024-07-09T21:23:17.000Z"),
    statusReportUpdates: [
      {
        id: 3,
        status: "resolved" as const,
        date: new Date("2024-07-09T21:59:23.000Z"),
        message:
          "The database server has been successfully restarted and data integrity has been verified. All affected systems are now operational. We are currently monitoring the systems closely to ensure stability and to confirm that there are no further issues.",
        statusReportId: 1,
        createdAt: new Date("2024-07-09T21:59:23.000Z"),
        updatedAt: new Date("2024-07-09T21:59:23.000Z"),
      },
      {
        id: 2,
        status: "identified" as const,
        date: new Date("2024-07-09T21:44:03.000Z"),
        message:
          "The issue has been identified as a database server failure. Our team is working to restart the server and check data integrity. We will provide an estimated time for resolution shortly.",
        statusReportId: 1,
        createdAt: new Date("2024-07-09T21:23:12.000Z"),
        updatedAt: new Date("2024-07-09T21:23:12.000Z"),
      },
      {
        id: 1,
        status: "investigating" as const,
        date: new Date("2024-07-09T21:21:23.000Z"),
        message:
          "An unexpected outage occurred affecting the website, customer portal, and internal email systems. Our team is currently investigating the issue to determine the cause and restore services as quickly as possible. Further updates will be provided as soon as more information is available.",
        statusReportId: 1,
        createdAt: new Date("2024-07-09T21:22:43.000Z"),
        updatedAt: new Date("2024-07-09T21:22:43.000Z"),
      },
    ],
    monitorsToStatusReports: [],
  },
  monitors: [],
};
