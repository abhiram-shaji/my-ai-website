"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/personalized/[id]/page",{

/***/ "(app-pages-browser)/./src/app/personalized/[id]/page.tsx":
/*!********************************************!*\
  !*** ./src/app/personalized/[id]/page.tsx ***!
  \********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ PersonalizedPage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _components_ui_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/card */ \"(app-pages-browser)/./src/components/ui/card.tsx\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./src/components/ui/button.tsx\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ \"(app-pages-browser)/./node_modules/next/dist/client/components/noop-head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction PersonalizedPage() {\n    _s();\n    const { id } = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useParams)(); // Ensure id is a string\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"PersonalizedPage.useEffect\": ()=>{\n            if (!id) return;\n            const fetchWebsiteContent = {\n                \"PersonalizedPage.useEffect.fetchWebsiteContent\": async ()=>{\n                    setLoading(true);\n                    const response = await fetch(\"/api/generate\", {\n                        method: \"POST\",\n                        headers: {\n                            \"Content-Type\": \"application/json\"\n                        },\n                        body: JSON.stringify({\n                            platform: \"Google\",\n                            product: id\n                        })\n                    });\n                    const result = await response.json();\n                    //  Improved function to remove extra quotes at the start AND end\n                    const cleanText = {\n                        \"PersonalizedPage.useEffect.fetchWebsiteContent.cleanText\": (text)=>(text === null || text === void 0 ? void 0 : text.replace(/^[\"'\\n]+|[\"'\\n]+$/g, \"\") // Removes leading & trailing quotes/newlines\n                            .replace(/^Website Title:\\s*|^Headline:\\s*|^Description:\\s*/g, \"\") // Removes unwanted prefixes\n                            .trim()) || \"Error generating content.\"\n                    }[\"PersonalizedPage.useEffect.fetchWebsiteContent.cleanText\"];\n                    setData({\n                        title: cleanText(result.title),\n                        headline: cleanText(result.headline),\n                        description: cleanText(result.description),\n                        image: result.image || \"https://via.placeholder.com/600x400.png?text=Error+Fetching+Image\"\n                    });\n                    setLoading(false);\n                }\n            }[\"PersonalizedPage.useEffect.fetchWebsiteContent\"];\n            fetchWebsiteContent();\n        }\n    }[\"PersonalizedPage.useEffect\"], [\n        id\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_5___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: (data === null || data === void 0 ? void 0 : data.title) || \"Loading...\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\abhir\\\\OneDrive\\\\Documents\\\\GitHub\\\\my-ai-website\\\\my-ai-website\\\\src\\\\app\\\\personalized\\\\[id]\\\\page.tsx\",\n                    lineNumber: 51,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\abhir\\\\OneDrive\\\\Documents\\\\GitHub\\\\my-ai-website\\\\my-ai-website\\\\src\\\\app\\\\personalized\\\\[id]\\\\page.tsx\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_3__.Card, {\n                    className: \"w-full max-w-2xl shadow-lg\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"p-6 flex flex-col items-center\",\n                        children: loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-xl font-bold\",\n                            children: \"Generating Content...\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\abhir\\\\OneDrive\\\\Documents\\\\GitHub\\\\my-ai-website\\\\my-ai-website\\\\src\\\\app\\\\personalized\\\\[id]\\\\page.tsx\",\n                            lineNumber: 58,\n                            columnNumber: 15\n                        }, this) : data ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \"text-2xl font-bold text-blue-600\",\n                                    children: data.headline\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\abhir\\\\OneDrive\\\\Documents\\\\GitHub\\\\my-ai-website\\\\my-ai-website\\\\src\\\\app\\\\personalized\\\\[id]\\\\page.tsx\",\n                                    lineNumber: 62,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"mt-2 text-gray-600\",\n                                    children: data.description\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\abhir\\\\OneDrive\\\\Documents\\\\GitHub\\\\my-ai-website\\\\my-ai-website\\\\src\\\\app\\\\personalized\\\\[id]\\\\page.tsx\",\n                                    lineNumber: 65,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: data.image,\n                                    alt: id,\n                                    className: \"mt-4 w-full max-w-md rounded-lg shadow\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\abhir\\\\OneDrive\\\\Documents\\\\GitHub\\\\my-ai-website\\\\my-ai-website\\\\src\\\\app\\\\personalized\\\\[id]\\\\page.tsx\",\n                                    lineNumber: 68,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                    className: \"mt-4\",\n                                    onClick: ()=>window.location.href = \"/personalized\",\n                                    children: \"Generate New\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\abhir\\\\OneDrive\\\\Documents\\\\GitHub\\\\my-ai-website\\\\my-ai-website\\\\src\\\\app\\\\personalized\\\\[id]\\\\page.tsx\",\n                                    lineNumber: 71,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-xl font-bold\",\n                            children: \"No Data Found\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\abhir\\\\OneDrive\\\\Documents\\\\GitHub\\\\my-ai-website\\\\my-ai-website\\\\src\\\\app\\\\personalized\\\\[id]\\\\page.tsx\",\n                            lineNumber: 76,\n                            columnNumber: 15\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\abhir\\\\OneDrive\\\\Documents\\\\GitHub\\\\my-ai-website\\\\my-ai-website\\\\src\\\\app\\\\personalized\\\\[id]\\\\page.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\abhir\\\\OneDrive\\\\Documents\\\\GitHub\\\\my-ai-website\\\\my-ai-website\\\\src\\\\app\\\\personalized\\\\[id]\\\\page.tsx\",\n                    lineNumber: 55,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\abhir\\\\OneDrive\\\\Documents\\\\GitHub\\\\my-ai-website\\\\my-ai-website\\\\src\\\\app\\\\personalized\\\\[id]\\\\page.tsx\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(PersonalizedPage, \"2sxqUyf+BfhpoOJLKCBhA8p6SGA=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useParams\n    ];\n});\n_c = PersonalizedPage;\nvar _c;\n$RefreshReg$(_c, \"PersonalizedPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGVyc29uYWxpemVkL1tpZF0vcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFFNEM7QUFDQTtBQUNBO0FBQ0k7QUFDbkI7QUFFZCxTQUFTTTs7SUFDdEIsTUFBTSxFQUFFQyxFQUFFLEVBQUUsR0FBR0wsMERBQVNBLElBQXNCLHdCQUF3QjtJQUN0RSxNQUFNLENBQUNNLE1BQU1DLFFBQVEsR0FBR1IsK0NBQVFBLENBQWlGO0lBQ2pILE1BQU0sQ0FBQ1MsU0FBU0MsV0FBVyxHQUFHViwrQ0FBUUEsQ0FBQztJQUV2Q0QsZ0RBQVNBO3NDQUFDO1lBQ1IsSUFBSSxDQUFDTyxJQUFJO1lBRVQsTUFBTUs7a0VBQXNCO29CQUMxQkQsV0FBVztvQkFDWCxNQUFNRSxXQUFXLE1BQU1DLE1BQU8saUJBQWdCO3dCQUM1Q0MsUUFBUTt3QkFDUkMsU0FBUzs0QkFBRSxnQkFBZ0I7d0JBQW1CO3dCQUM5Q0MsTUFBTUMsS0FBS0MsU0FBUyxDQUFDOzRCQUFFQyxVQUFVOzRCQUFVQyxTQUFTZDt3QkFBRztvQkFDekQ7b0JBRUEsTUFBTWUsU0FBUyxNQUFNVCxTQUFTVSxJQUFJO29CQUVuQyxpRUFBaUU7b0JBQ3RFLE1BQU1DO29GQUFZLENBQUNDLE9BQ2ZBLENBQUFBLGlCQUFBQSwyQkFBQUEsS0FBTUMsT0FBTyxDQUFDLHNCQUFzQixJQUFJLDZDQUE2Qzs2QkFDaEZBLE9BQU8sQ0FBQyxzREFBc0QsSUFBSSw0QkFBNEI7NkJBQzlGQyxJQUFJLE9BQU07O29CQUdibEIsUUFBUTt3QkFDTm1CLE9BQU9KLFVBQVVGLE9BQU9NLEtBQUs7d0JBQzdCQyxVQUFVTCxVQUFVRixPQUFPTyxRQUFRO3dCQUNuQ0MsYUFBYU4sVUFBVUYsT0FBT1EsV0FBVzt3QkFDekNDLE9BQU9ULE9BQU9TLEtBQUssSUFBSTtvQkFDekI7b0JBRUFwQixXQUFXO2dCQUNiOztZQUVBQztRQUNGO3FDQUFHO1FBQUNMO0tBQUc7SUFFUCxxQkFDRTs7MEJBRUUsOERBQUNGLGtEQUFJQTswQkFDSCw0RUFBQ3VCOzhCQUFPcEIsQ0FBQUEsaUJBQUFBLDJCQUFBQSxLQUFNb0IsS0FBSyxLQUFJOzs7Ozs7Ozs7OzswQkFHekIsOERBQUNJO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDOUIscURBQUlBO29CQUFDOEIsV0FBVTs4QkFDZCw0RUFBQ0Q7d0JBQUlDLFdBQVU7a0NBQ1p2Qix3QkFDQyw4REFBQ3dCOzRCQUFHRCxXQUFVO3NDQUFvQjs7Ozs7bUNBQ2hDekIscUJBQ0Y7OzhDQUVFLDhEQUFDMEI7b0NBQUdELFdBQVU7OENBQW9DekIsS0FBS3FCLFFBQVE7Ozs7Ozs4Q0FHL0QsOERBQUNNO29DQUFFRixXQUFVOzhDQUFzQnpCLEtBQUtzQixXQUFXOzs7Ozs7OENBR25ELDhEQUFDTTtvQ0FBSUMsS0FBSzdCLEtBQUt1QixLQUFLO29DQUFFTyxLQUFLL0I7b0NBQUkwQixXQUFVOzs7Ozs7OENBR3pDLDhEQUFDN0IseURBQU1BO29DQUFDNkIsV0FBVTtvQ0FBT00sU0FBUyxJQUFNQyxPQUFPQyxRQUFRLENBQUNDLElBQUksR0FBRzs4Q0FBaUI7Ozs7Ozs7eURBS2xGLDhEQUFDUjs0QkFBR0QsV0FBVTtzQ0FBb0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT2hEO0dBMUV3QjNCOztRQUNQSixzREFBU0E7OztLQURGSSIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxhYmhpclxcT25lRHJpdmVcXERvY3VtZW50c1xcR2l0SHViXFxteS1haS13ZWJzaXRlXFxteS1haS13ZWJzaXRlXFxzcmNcXGFwcFxccGVyc29uYWxpemVkXFxbaWRdXFxwYWdlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUGFyYW1zIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xyXG5pbXBvcnQgeyBDYXJkIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9jYXJkXCI7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvYnV0dG9uXCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBlcnNvbmFsaXplZFBhZ2UoKSB7XHJcbiAgY29uc3QgeyBpZCB9ID0gdXNlUGFyYW1zKCkgYXMgeyBpZDogc3RyaW5nIH07IC8vIEVuc3VyZSBpZCBpcyBhIHN0cmluZ1xyXG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlPHsgdGl0bGU6IHN0cmluZzsgaGVhZGxpbmU6IHN0cmluZzsgZGVzY3JpcHRpb246IHN0cmluZzsgaW1hZ2U6IHN0cmluZyB9IHwgbnVsbD4obnVsbCk7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIWlkKSByZXR1cm47XHJcblxyXG4gICAgY29uc3QgZmV0Y2hXZWJzaXRlQ29udGVudCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgL2FwaS9nZW5lcmF0ZWAsIHtcclxuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHBsYXRmb3JtOiBcIkdvb2dsZVwiLCBwcm9kdWN0OiBpZCB9KSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gICAgIC8vICBJbXByb3ZlZCBmdW5jdGlvbiB0byByZW1vdmUgZXh0cmEgcXVvdGVzIGF0IHRoZSBzdGFydCBBTkQgZW5kXHJcbmNvbnN0IGNsZWFuVGV4dCA9ICh0ZXh0OiBzdHJpbmcpID0+XHJcbiAgICB0ZXh0Py5yZXBsYWNlKC9eW1wiJ1xcbl0rfFtcIidcXG5dKyQvZywgXCJcIikgLy8gUmVtb3ZlcyBsZWFkaW5nICYgdHJhaWxpbmcgcXVvdGVzL25ld2xpbmVzXHJcbiAgICAgICAgLnJlcGxhY2UoL15XZWJzaXRlIFRpdGxlOlxccyp8XkhlYWRsaW5lOlxccyp8XkRlc2NyaXB0aW9uOlxccyovZywgXCJcIikgLy8gUmVtb3ZlcyB1bndhbnRlZCBwcmVmaXhlc1xyXG4gICAgICAgIC50cmltKCkgfHwgXCJFcnJvciBnZW5lcmF0aW5nIGNvbnRlbnQuXCI7XHJcbiAgXHJcblxyXG4gICAgICBzZXREYXRhKHtcclxuICAgICAgICB0aXRsZTogY2xlYW5UZXh0KHJlc3VsdC50aXRsZSksXHJcbiAgICAgICAgaGVhZGxpbmU6IGNsZWFuVGV4dChyZXN1bHQuaGVhZGxpbmUpLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBjbGVhblRleHQocmVzdWx0LmRlc2NyaXB0aW9uKSxcclxuICAgICAgICBpbWFnZTogcmVzdWx0LmltYWdlIHx8IFwiaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzYwMHg0MDAucG5nP3RleHQ9RXJyb3IrRmV0Y2hpbmcrSW1hZ2VcIixcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH07XHJcblxyXG4gICAgZmV0Y2hXZWJzaXRlQ29udGVudCgpO1xyXG4gIH0sIFtpZF0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgey8qICBTZXQgVGFiIFRpdGxlICovfVxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+e2RhdGE/LnRpdGxlIHx8IFwiTG9hZGluZy4uLlwifTwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbWluLWgtc2NyZWVuIGJnLWdyYXktMTAwIHAtNlwiPlxyXG4gICAgICAgIDxDYXJkIGNsYXNzTmFtZT1cInctZnVsbCBtYXgtdy0yeGwgc2hhZG93LWxnXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNiBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICB7bG9hZGluZyA/IChcclxuICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWJvbGRcIj5HZW5lcmF0aW5nIENvbnRlbnQuLi48L2gxPlxyXG4gICAgICAgICAgICApIDogZGF0YSA/IChcclxuICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgey8qICBIZWFkbGluZSBhcyBoMSAoTm8gZXh0cmEgcXVvdGVzKSAqL31cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgdGV4dC1ibHVlLTYwMFwiPntkYXRhLmhlYWRsaW5lfTwvaDE+XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIERlc2NyaXB0aW9uIChObyBleHRyYSBxdW90ZXMpICovfVxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQtMiB0ZXh0LWdyYXktNjAwXCI+e2RhdGEuZGVzY3JpcHRpb259PC9wPlxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiBJbWFnZSAqL31cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtkYXRhLmltYWdlfSBhbHQ9e2lkfSBjbGFzc05hbWU9XCJtdC00IHctZnVsbCBtYXgtdy1tZCByb3VuZGVkLWxnIHNoYWRvd1wiIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIEdlbmVyYXRlIE5ldyBCdXR0b24gKi99XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cIm10LTRcIiBvbkNsaWNrPXsoKSA9PiB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL3BlcnNvbmFsaXplZFwifT5cclxuICAgICAgICAgICAgICAgICAgR2VuZXJhdGUgTmV3XHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWJvbGRcIj5ObyBEYXRhIEZvdW5kPC9oMT5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvQ2FyZD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVBhcmFtcyIsIkNhcmQiLCJCdXR0b24iLCJIZWFkIiwiUGVyc29uYWxpemVkUGFnZSIsImlkIiwiZGF0YSIsInNldERhdGEiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImZldGNoV2Vic2l0ZUNvbnRlbnQiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicGxhdGZvcm0iLCJwcm9kdWN0IiwicmVzdWx0IiwianNvbiIsImNsZWFuVGV4dCIsInRleHQiLCJyZXBsYWNlIiwidHJpbSIsInRpdGxlIiwiaGVhZGxpbmUiLCJkZXNjcmlwdGlvbiIsImltYWdlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJwIiwiaW1nIiwic3JjIiwiYWx0Iiwib25DbGljayIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/personalized/[id]/page.tsx\n"));

/***/ })

});