"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/docs/[[...slug]]/page",{

/***/ "(app-client)/./data/index.tsx":
/*!************************!*\
  !*** ./data/index.tsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"product\": function() { return /* binding */ product; }\n/* harmony export */ });\nconst product = {\n    \"name\": \"Iron dagger\",\n    \"sku\": \"00090616\",\n    \"active\": true,\n    \"purchase_options\": {\n        \"standard\": {\n            \"active\": true,\n            \"price\": 10,\n            \"sale_price\": null,\n            \"sale\": false,\n            \"prices\": []\n        },\n        \"subscription\": {\n            \"active\": true,\n            \"plans\": [\n                {\n                    \"name\": \"Monthly\",\n                    \"description\": \"1 dagger/month\",\n                    \"price\": 9,\n                    \"billing_schedule\": {\n                        \"interval\": \"monthly\",\n                        \"interval_count\": 1,\n                        \"limit\": null,\n                        \"trial_days\": 14\n                    },\n                    \"id\": \"627c6f180d375a001296b593\",\n                    \"active\": true\n                }\n            ]\n        }\n    },\n    \"variable\": true,\n    \"description\": \"<h3>Damage: 7</h3><h3>Weight: 8</h3><h3>Health: 98</h3><h3>Speed: 1.4</h3><h3>Reach: 0.6</h3>\",\n    \"tags\": [],\n    \"meta_title\": null,\n    \"meta_description\": null,\n    \"slug\": \"iron-dagger\",\n    \"attributes\": {\n        \"blade\": \"\",\n        \"dagger\": \"\",\n        \"type\": [\n            \"Fine\",\n            \"Rusty\"\n        ]\n    },\n    \"delivery\": \"shipment\",\n    \"bundle\": null,\n    \"price\": 10,\n    \"stock_tracking\": false,\n    \"options\": [\n        {\n            \"id\": \"627c6e36e80393798c171670\",\n            \"name\": \"Quality\",\n            \"active\": true,\n            \"input_type\": \"select\",\n            \"variant\": true,\n            \"description\": null,\n            \"required\": true,\n            \"attribute_id\": \"type\",\n            \"values\": [\n                {\n                    \"id\": \"627c6f18e80393798c171673\",\n                    \"name\": \"Fine\",\n                    \"price\": null,\n                    \"shipment_weight\": null,\n                    \"description\": \"A better-than-usual iron dagger\"\n                },\n                {\n                    \"id\": \"627c6f18e80393798c171674\",\n                    \"name\": \"Rusty\",\n                    \"price\": 0,\n                    \"shipment_weight\": null,\n                    \"description\": \"This dagger's seen better days\"\n                }\n            ]\n        },\n        {\n            \"id\": \"627c6e36e80393798c171670\",\n            \"name\": \"Quality\",\n            \"active\": true,\n            \"input_type\": \"select\",\n            \"variant\": true,\n            \"description\": null,\n            \"required\": true,\n            \"attribute_id\": \"type\",\n            \"values\": [\n                {\n                    \"id\": \"627c6f18e80393798c171673\",\n                    \"name\": \"Fine\",\n                    \"price\": null,\n                    \"shipment_weight\": null,\n                    \"description\": \"A better-than-usual iron dagger\"\n                },\n                {\n                    \"id\": \"627c6f18e80393798c171674\",\n                    \"name\": \"Rusty\",\n                    \"price\": 0,\n                    \"shipment_weight\": null,\n                    \"description\": \"This dagger's seen better days\"\n                }\n            ]\n        }\n    ],\n    \"currency\": \"USD\",\n    \"sale\": false,\n    \"sale_price\": null,\n    \"prices\": [],\n    \"type\": \"standard\",\n    \"tax_class\": \"standard\",\n    \"date_created\": \"2022-05-12T02:21:12.534Z\",\n    \"stock_status\": null,\n    \"date_updated\": \"2022-05-12T02:37:45.666Z\",\n    \"category_index\": {\n        \"sort\": {\n            \"627c6db5632818001272f8ed\": 0,\n            \"627c6dc30d375a001296a8b7\": 0\n        },\n        \"id\": [\n            \"627c6db5632818001272f8ed\",\n            \"627c6dc30d375a001296a8b7\"\n        ]\n    },\n    \"cross_sells\": [],\n    \"up_sells\": [\n        {\n            \"id\": \"627c7225e80393798c17167b\",\n            \"product_id\": \"627c715e632818001274ebd8\"\n        }\n    ],\n    \"id\": \"627c6f180d375a001296b580\"\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vZGF0YS9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFPLE1BQU1BLFVBQVU7SUFDckIsUUFBUTtJQUNSLE9BQU87SUFDUCxVQUFVLElBQUk7SUFDZCxvQkFBb0I7UUFDbEIsWUFBWTtZQUNWLFVBQVUsSUFBSTtZQUNkLFNBQVM7WUFDVCxjQUFjLElBQUk7WUFDbEIsUUFBUSxLQUFLO1lBQ2IsVUFBVSxFQUFFO1FBQ2Q7UUFDQSxnQkFBZ0I7WUFDZCxVQUFVLElBQUk7WUFDZCxTQUFTO2dCQUNQO29CQUNFLFFBQVE7b0JBQ1IsZUFBZTtvQkFDZixTQUFTO29CQUNULG9CQUFvQjt3QkFDbEIsWUFBWTt3QkFDWixrQkFBa0I7d0JBQ2xCLFNBQVMsSUFBSTt3QkFDYixjQUFjO29CQUNoQjtvQkFDQSxNQUFNO29CQUNOLFVBQVUsSUFBSTtnQkFDaEI7YUFDRDtRQUNIO0lBQ0Y7SUFDQSxZQUFZLElBQUk7SUFDaEIsZUFBZTtJQUNmLFFBQVEsRUFBRTtJQUNWLGNBQWMsSUFBSTtJQUNsQixvQkFBb0IsSUFBSTtJQUN4QixRQUFRO0lBQ1IsY0FBYztRQUNaLFNBQVM7UUFDVCxVQUFVO1FBQ1YsUUFBUTtZQUNOO1lBQ0E7U0FDRDtJQUNIO0lBQ0EsWUFBWTtJQUNaLFVBQVUsSUFBSTtJQUNkLFNBQVM7SUFDVCxrQkFBa0IsS0FBSztJQUN2QixXQUFXO1FBQ1Q7WUFDRSxNQUFNO1lBQ04sUUFBUTtZQUNSLFVBQVUsSUFBSTtZQUNkLGNBQWM7WUFDZCxXQUFXLElBQUk7WUFDZixlQUFlLElBQUk7WUFDbkIsWUFBWSxJQUFJO1lBQ2hCLGdCQUFnQjtZQUNoQixVQUFVO2dCQUNSO29CQUNFLE1BQU07b0JBQ04sUUFBUTtvQkFDUixTQUFTLElBQUk7b0JBQ2IsbUJBQW1CLElBQUk7b0JBQ3ZCLGVBQWU7Z0JBQ2pCO2dCQUNBO29CQUNFLE1BQU07b0JBQ04sUUFBUTtvQkFDUixTQUFTO29CQUNULG1CQUFtQixJQUFJO29CQUN2QixlQUFlO2dCQUNqQjthQUNEO1FBRUg7UUFDQTtZQUNFLE1BQU07WUFDTixRQUFRO1lBQ1IsVUFBVSxJQUFJO1lBQ2QsY0FBYztZQUNkLFdBQVcsSUFBSTtZQUNmLGVBQWUsSUFBSTtZQUNuQixZQUFZLElBQUk7WUFDaEIsZ0JBQWdCO1lBQ2hCLFVBQVU7Z0JBQ1I7b0JBQ0UsTUFBTTtvQkFDTixRQUFRO29CQUNSLFNBQVMsSUFBSTtvQkFDYixtQkFBbUIsSUFBSTtvQkFDdkIsZUFBZTtnQkFDakI7Z0JBQ0E7b0JBQ0UsTUFBTTtvQkFDTixRQUFRO29CQUNSLFNBQVM7b0JBQ1QsbUJBQW1CLElBQUk7b0JBQ3ZCLGVBQWU7Z0JBQ2pCO2FBQ0Q7UUFFSDtLQUVEO0lBQ0QsWUFBWTtJQUNaLFFBQVEsS0FBSztJQUNiLGNBQWMsSUFBSTtJQUNsQixVQUFVLEVBQUU7SUFDWixRQUFRO0lBQ1IsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixnQkFBZ0IsSUFBSTtJQUNwQixnQkFBZ0I7SUFDaEIsa0JBQWtCO1FBQ2hCLFFBQVE7WUFDTiw0QkFBNEI7WUFDNUIsNEJBQTRCO1FBQzlCO1FBQ0EsTUFBTTtZQUNKO1lBQ0E7U0FDRDtJQUNIO0lBQ0EsZUFBZSxFQUFFO0lBQ2pCLFlBQVk7UUFDVjtZQUNFLE1BQU07WUFDTixjQUFjO1FBQ2hCO0tBQ0Q7SUFDSCxNQUFNO0FBQ04sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9kYXRhL2luZGV4LnRzeD8zYjM0Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBwcm9kdWN0ID0ge1xuICBcIm5hbWVcIjogXCJJcm9uIGRhZ2dlclwiLFxuICBcInNrdVwiOiBcIjAwMDkwNjE2XCIsXG4gIFwiYWN0aXZlXCI6IHRydWUsXG4gIFwicHVyY2hhc2Vfb3B0aW9uc1wiOiB7XG4gICAgXCJzdGFuZGFyZFwiOiB7XG4gICAgICBcImFjdGl2ZVwiOiB0cnVlLFxuICAgICAgXCJwcmljZVwiOiAxMCxcbiAgICAgIFwic2FsZV9wcmljZVwiOiBudWxsLFxuICAgICAgXCJzYWxlXCI6IGZhbHNlLFxuICAgICAgXCJwcmljZXNcIjogW11cbiAgICB9LFxuICAgIFwic3Vic2NyaXB0aW9uXCI6IHtcbiAgICAgIFwiYWN0aXZlXCI6IHRydWUsXG4gICAgICBcInBsYW5zXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwibmFtZVwiOiBcIk1vbnRobHlcIixcbiAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiMSBkYWdnZXIvbW9udGhcIixcbiAgICAgICAgICBcInByaWNlXCI6IDksXG4gICAgICAgICAgXCJiaWxsaW5nX3NjaGVkdWxlXCI6IHtcbiAgICAgICAgICAgIFwiaW50ZXJ2YWxcIjogXCJtb250aGx5XCIsXG4gICAgICAgICAgICBcImludGVydmFsX2NvdW50XCI6IDEsXG4gICAgICAgICAgICBcImxpbWl0XCI6IG51bGwsXG4gICAgICAgICAgICBcInRyaWFsX2RheXNcIjogMTRcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiaWRcIjogXCI2MjdjNmYxODBkMzc1YTAwMTI5NmI1OTNcIixcbiAgICAgICAgICBcImFjdGl2ZVwiOiB0cnVlXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwidmFyaWFibGVcIjogdHJ1ZSxcbiAgXCJkZXNjcmlwdGlvblwiOiBcIjxoMz5EYW1hZ2U6IDc8L2gzPjxoMz5XZWlnaHQ6IDg8L2gzPjxoMz5IZWFsdGg6IDk4PC9oMz48aDM+U3BlZWQ6IDEuNDwvaDM+PGgzPlJlYWNoOiAwLjY8L2gzPlwiLFxuICBcInRhZ3NcIjogW10sXG4gIFwibWV0YV90aXRsZVwiOiBudWxsLFxuICBcIm1ldGFfZGVzY3JpcHRpb25cIjogbnVsbCxcbiAgXCJzbHVnXCI6IFwiaXJvbi1kYWdnZXJcIixcbiAgXCJhdHRyaWJ1dGVzXCI6IHtcbiAgICBcImJsYWRlXCI6IFwiXCIsXG4gICAgXCJkYWdnZXJcIjogXCJcIixcbiAgICBcInR5cGVcIjogW1xuICAgICAgXCJGaW5lXCIsXG4gICAgICBcIlJ1c3R5XCJcbiAgICBdXG4gIH0sXG4gIFwiZGVsaXZlcnlcIjogXCJzaGlwbWVudFwiLFxuICBcImJ1bmRsZVwiOiBudWxsLFxuICBcInByaWNlXCI6IDEwLFxuICBcInN0b2NrX3RyYWNraW5nXCI6IGZhbHNlLFxuICBcIm9wdGlvbnNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRcIjogXCI2MjdjNmUzNmU4MDM5Mzc5OGMxNzE2NzBcIixcbiAgICAgIFwibmFtZVwiOiBcIlF1YWxpdHlcIixcbiAgICAgIFwiYWN0aXZlXCI6IHRydWUsXG4gICAgICBcImlucHV0X3R5cGVcIjogXCJzZWxlY3RcIixcbiAgICAgIFwidmFyaWFudFwiOiB0cnVlLFxuICAgICAgXCJkZXNjcmlwdGlvblwiOiBudWxsLFxuICAgICAgXCJyZXF1aXJlZFwiOiB0cnVlLFxuICAgICAgXCJhdHRyaWJ1dGVfaWRcIjogXCJ0eXBlXCIsXG4gICAgICBcInZhbHVlc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IFwiNjI3YzZmMThlODAzOTM3OThjMTcxNjczXCIsXG4gICAgICAgICAgXCJuYW1lXCI6IFwiRmluZVwiLFxuICAgICAgICAgIFwicHJpY2VcIjogbnVsbCxcbiAgICAgICAgICBcInNoaXBtZW50X3dlaWdodFwiOiBudWxsLFxuICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJBIGJldHRlci10aGFuLXVzdWFsIGlyb24gZGFnZ2VyXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogXCI2MjdjNmYxOGU4MDM5Mzc5OGMxNzE2NzRcIixcbiAgICAgICAgICBcIm5hbWVcIjogXCJSdXN0eVwiLFxuICAgICAgICAgIFwicHJpY2VcIjogMCxcbiAgICAgICAgICBcInNoaXBtZW50X3dlaWdodFwiOiBudWxsLFxuICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJUaGlzIGRhZ2dlcidzIHNlZW4gYmV0dGVyIGRheXNcIlxuICAgICAgICB9XG4gICAgICBdLFxuXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IFwiNjI3YzZlMzZlODAzOTM3OThjMTcxNjcwXCIsXG4gICAgICBcIm5hbWVcIjogXCJRdWFsaXR5XCIsXG4gICAgICBcImFjdGl2ZVwiOiB0cnVlLFxuICAgICAgXCJpbnB1dF90eXBlXCI6IFwic2VsZWN0XCIsXG4gICAgICBcInZhcmlhbnRcIjogdHJ1ZSxcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogbnVsbCxcbiAgICAgIFwicmVxdWlyZWRcIjogdHJ1ZSxcbiAgICAgIFwiYXR0cmlidXRlX2lkXCI6IFwidHlwZVwiLFxuICAgICAgXCJ2YWx1ZXNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiBcIjYyN2M2ZjE4ZTgwMzkzNzk4YzE3MTY3M1wiLFxuICAgICAgICAgIFwibmFtZVwiOiBcIkZpbmVcIixcbiAgICAgICAgICBcInByaWNlXCI6IG51bGwsXG4gICAgICAgICAgXCJzaGlwbWVudF93ZWlnaHRcIjogbnVsbCxcbiAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQSBiZXR0ZXItdGhhbi11c3VhbCBpcm9uIGRhZ2dlclwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IFwiNjI3YzZmMThlODAzOTM3OThjMTcxNjc0XCIsXG4gICAgICAgICAgXCJuYW1lXCI6IFwiUnVzdHlcIixcbiAgICAgICAgICBcInByaWNlXCI6IDAsXG4gICAgICAgICAgXCJzaGlwbWVudF93ZWlnaHRcIjogbnVsbCxcbiAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiVGhpcyBkYWdnZXIncyBzZWVuIGJldHRlciBkYXlzXCJcbiAgICAgICAgfVxuICAgICAgXSxcblxuICAgIH1cblxuICBdLFxuICBcImN1cnJlbmN5XCI6IFwiVVNEXCIsXG4gIFwic2FsZVwiOiBmYWxzZSxcbiAgXCJzYWxlX3ByaWNlXCI6IG51bGwsXG4gIFwicHJpY2VzXCI6IFtdLFxuICBcInR5cGVcIjogXCJzdGFuZGFyZFwiLFxuICBcInRheF9jbGFzc1wiOiBcInN0YW5kYXJkXCIsXG4gIFwiZGF0ZV9jcmVhdGVkXCI6IFwiMjAyMi0wNS0xMlQwMjoyMToxMi41MzRaXCIsXG4gIFwic3RvY2tfc3RhdHVzXCI6IG51bGwsXG4gIFwiZGF0ZV91cGRhdGVkXCI6IFwiMjAyMi0wNS0xMlQwMjozNzo0NS42NjZaXCIsXG4gIFwiY2F0ZWdvcnlfaW5kZXhcIjoge1xuICAgIFwic29ydFwiOiB7XG4gICAgICBcIjYyN2M2ZGI1NjMyODE4MDAxMjcyZjhlZFwiOiAwLFxuICAgICAgXCI2MjdjNmRjMzBkMzc1YTAwMTI5NmE4YjdcIjogMFxuICAgIH0sXG4gICAgXCJpZFwiOiBbXG4gICAgICBcIjYyN2M2ZGI1NjMyODE4MDAxMjcyZjhlZFwiLFxuICAgICAgXCI2MjdjNmRjMzBkMzc1YTAwMTI5NmE4YjdcIlxuICAgIF1cbiAgfSxcbiAgXCJjcm9zc19zZWxsc1wiOiBbXSxcbiAgXCJ1cF9zZWxsc1wiOiBbXG4gICAge1xuICAgICAgXCJpZFwiOiBcIjYyN2M3MjI1ZTgwMzkzNzk4YzE3MTY3YlwiLFxuICAgICAgXCJwcm9kdWN0X2lkXCI6IFwiNjI3YzcxNWU2MzI4MTgwMDEyNzRlYmQ4XCJcbiAgICB9XG4gIF0sXG5cImlkXCI6IFwiNjI3YzZmMTgwZDM3NWEwMDEyOTZiNTgwXCJcbn0iXSwibmFtZXMiOlsicHJvZHVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./data/index.tsx\n"));

/***/ })

});