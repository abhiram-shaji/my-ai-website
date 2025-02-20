"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/page.tsx":
/*!**************************!*\
  !*** ./src/app/page.tsx ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ PersonalizedPage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ui_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/card */ \"(app-pages-browser)/./src/components/ui/card.tsx\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./src/components/ui/button.tsx\");\n/* harmony import */ var _components_ui_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ui/input */ \"(app-pages-browser)/./src/components/ui/input.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction PersonalizedPage() {\n    _s();\n    const [platform, setPlatform] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"Google\");\n    const [product, setProduct] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"AI Marketing Tool\");\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const fetchWebsiteContent = async ()=>{\n        setLoading(true);\n        const response = await fetch(\"/api/website-content\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                platform,\n                product\n            })\n        });\n        const result = await response.json();\n        setData(result);\n        setLoading(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_2__.Card, {\n            className: \"w-full max-w-2xl shadow-lg\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"p-6 flex flex-col items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-2xl font-bold mb-4\",\n                        children: \"Generate AI Website Content\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\abhir\\\\OneDrive\\\\Documents\\\\GitHub\\\\my-ai-website\\\\my-ai-website\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex gap-2 w-full\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_4__.Input, {\n                                placeholder: \"Platform (e.g., Google)\",\n                                value: platform,\n                                onChange: (e)=>setPlatform(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\abhir\\\\OneDrive\\\\Documents\\\\GitHub\\\\my-ai-website\\\\my-ai-website\\\\src\\\\app\\\\page.tsx\",\n                                lineNumber: 33,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_4__.Input, {\n                                placeholder: \"Product (e.g., AI Tool)\",\n                                value: product,\n                                onChange: (e)=>setProduct(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\abhir\\\\OneDrive\\\\Documents\\\\GitHub\\\\my-ai-website\\\\my-ai-website\\\\src\\\\app\\\\page.tsx\",\n                                lineNumber: 34,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\abhir\\\\OneDrive\\\\Documents\\\\GitHub\\\\my-ai-website\\\\my-ai-website\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                        className: \"mt-4 w-full\",\n                        onClick: fetchWebsiteContent,\n                        disabled: loading,\n                        children: loading ? \"Generating...\" : \"Generate\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\abhir\\\\OneDrive\\\\Documents\\\\GitHub\\\\my-ai-website\\\\my-ai-website\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 11\n                    }, this),\n                    data && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-6 text-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-xl font-semibold\",\n                                children: data.title\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\abhir\\\\OneDrive\\\\Documents\\\\GitHub\\\\my-ai-website\\\\my-ai-website\\\\src\\\\app\\\\page.tsx\",\n                                lineNumber: 43,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-gray-600\",\n                                children: data.headline\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\abhir\\\\OneDrive\\\\Documents\\\\GitHub\\\\my-ai-website\\\\my-ai-website\\\\src\\\\app\\\\page.tsx\",\n                                lineNumber: 44,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"mt-2 text-gray-500\",\n                                children: data.description\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\abhir\\\\OneDrive\\\\Documents\\\\GitHub\\\\my-ai-website\\\\my-ai-website\\\\src\\\\app\\\\page.tsx\",\n                                lineNumber: 45,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: data.image,\n                                alt: \"Generated\",\n                                className: \"mt-4 w-full max-w-md rounded-lg shadow\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\abhir\\\\OneDrive\\\\Documents\\\\GitHub\\\\my-ai-website\\\\my-ai-website\\\\src\\\\app\\\\page.tsx\",\n                                lineNumber: 46,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\abhir\\\\OneDrive\\\\Documents\\\\GitHub\\\\my-ai-website\\\\my-ai-website\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\abhir\\\\OneDrive\\\\Documents\\\\GitHub\\\\my-ai-website\\\\my-ai-website\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 29,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\abhir\\\\OneDrive\\\\Documents\\\\GitHub\\\\my-ai-website\\\\my-ai-website\\\\src\\\\app\\\\page.tsx\",\n            lineNumber: 28,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\abhir\\\\OneDrive\\\\Documents\\\\GitHub\\\\my-ai-website\\\\my-ai-website\\\\src\\\\app\\\\page.tsx\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, this);\n}\n_s(PersonalizedPage, \"1hOOuYv/VCW+cKNhcdBAN6vnMvs=\");\n_c = PersonalizedPage;\nvar _c;\n$RefreshReg$(_c, \"PersonalizedPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBRWlDO0FBQ1c7QUFDSTtBQUNGO0FBRS9CLFNBQVNJOztJQUN0QixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR04sK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDTyxTQUFTQyxXQUFXLEdBQUdSLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU0sQ0FBQ1MsTUFBTUMsUUFBUSxHQUFHViwrQ0FBUUEsQ0FBaUY7SUFDakgsTUFBTSxDQUFDVyxTQUFTQyxXQUFXLEdBQUdaLCtDQUFRQSxDQUFDO0lBRXZDLE1BQU1hLHNCQUFzQjtRQUMxQkQsV0FBVztRQUNYLE1BQU1FLFdBQVcsTUFBTUMsTUFBTSx3QkFBd0I7WUFDbkRDLFFBQVE7WUFDUkMsU0FBUztnQkFBRSxnQkFBZ0I7WUFBbUI7WUFDOUNDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQztnQkFBRWY7Z0JBQVVFO1lBQVE7UUFDM0M7UUFDQSxNQUFNYyxTQUFTLE1BQU1QLFNBQVNRLElBQUk7UUFDbENaLFFBQVFXO1FBQ1JULFdBQVc7SUFDYjtJQUVBLHFCQUNFLDhEQUFDVztRQUFJQyxXQUFVO2tCQUNiLDRFQUFDdkIscURBQUlBO1lBQUN1QixXQUFVO3NCQUNkLDRFQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNDO3dCQUFHRCxXQUFVO2tDQUEwQjs7Ozs7O2tDQUV4Qyw4REFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDckIsdURBQUtBO2dDQUFDdUIsYUFBWTtnQ0FBMEJDLE9BQU90QjtnQ0FBVXVCLFVBQVUsQ0FBQ0MsSUFBTXZCLFlBQVl1QixFQUFFQyxNQUFNLENBQUNILEtBQUs7Ozs7OzswQ0FDekcsOERBQUN4Qix1REFBS0E7Z0NBQUN1QixhQUFZO2dDQUEwQkMsT0FBT3BCO2dDQUFTcUIsVUFBVSxDQUFDQyxJQUFNckIsV0FBV3FCLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSzs7Ozs7Ozs7Ozs7O2tDQUd6Ryw4REFBQ3pCLHlEQUFNQTt3QkFBQ3NCLFdBQVU7d0JBQWNPLFNBQVNsQjt3QkFBcUJtQixVQUFVckI7a0NBQ3JFQSxVQUFVLGtCQUFrQjs7Ozs7O29CQUc5QkYsc0JBQ0MsOERBQUNjO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ1M7Z0NBQUdULFdBQVU7MENBQXlCZixLQUFLeUIsS0FBSzs7Ozs7OzBDQUNqRCw4REFBQ0M7Z0NBQUVYLFdBQVU7MENBQWlCZixLQUFLMkIsUUFBUTs7Ozs7OzBDQUMzQyw4REFBQ0Q7Z0NBQUVYLFdBQVU7MENBQXNCZixLQUFLNEIsV0FBVzs7Ozs7OzBDQUNuRCw4REFBQ0M7Z0NBQUlDLEtBQUs5QixLQUFLK0IsS0FBSztnQ0FBRUMsS0FBSTtnQ0FBWWpCLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPOUQ7R0E3Q3dCcEI7S0FBQUEiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcYWJoaXJcXE9uZURyaXZlXFxEb2N1bWVudHNcXEdpdEh1YlxcbXktYWktd2Vic2l0ZVxcbXktYWktd2Vic2l0ZVxcc3JjXFxhcHBcXHBhZ2UudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQ2FyZCB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvY2FyZFwiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9idXR0b25cIjtcbmltcG9ydCB7IElucHV0IH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9pbnB1dFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQZXJzb25hbGl6ZWRQYWdlKCkge1xuICBjb25zdCBbcGxhdGZvcm0sIHNldFBsYXRmb3JtXSA9IHVzZVN0YXRlKFwiR29vZ2xlXCIpO1xuICBjb25zdCBbcHJvZHVjdCwgc2V0UHJvZHVjdF0gPSB1c2VTdGF0ZShcIkFJIE1hcmtldGluZyBUb29sXCIpO1xuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZTx7IHRpdGxlOiBzdHJpbmc7IGhlYWRsaW5lOiBzdHJpbmc7IGRlc2NyaXB0aW9uOiBzdHJpbmc7IGltYWdlOiBzdHJpbmcgfSB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgZmV0Y2hXZWJzaXRlQ29udGVudCA9IGFzeW5jICgpID0+IHtcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCIvYXBpL3dlYnNpdGUtY29udGVudFwiLCB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBwbGF0Zm9ybSwgcHJvZHVjdCB9KSxcbiAgICB9KTtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgc2V0RGF0YShyZXN1bHQpO1xuICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBtaW4taC1zY3JlZW4gYmctZ3JheS0xMDAgcC02XCI+XG4gICAgICA8Q2FyZCBjbGFzc05hbWU9XCJ3LWZ1bGwgbWF4LXctMnhsIHNoYWRvdy1sZ1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNiBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgbWItNFwiPkdlbmVyYXRlIEFJIFdlYnNpdGUgQ29udGVudDwvaDE+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTIgdy1mdWxsXCI+XG4gICAgICAgICAgICA8SW5wdXQgcGxhY2Vob2xkZXI9XCJQbGF0Zm9ybSAoZS5nLiwgR29vZ2xlKVwiIHZhbHVlPXtwbGF0Zm9ybX0gb25DaGFuZ2U9eyhlKSA9PiBzZXRQbGF0Zm9ybShlLnRhcmdldC52YWx1ZSl9IC8+XG4gICAgICAgICAgICA8SW5wdXQgcGxhY2Vob2xkZXI9XCJQcm9kdWN0IChlLmcuLCBBSSBUb29sKVwiIHZhbHVlPXtwcm9kdWN0fSBvbkNoYW5nZT17KGUpID0+IHNldFByb2R1Y3QoZS50YXJnZXQudmFsdWUpfSAvPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJtdC00IHctZnVsbFwiIG9uQ2xpY2s9e2ZldGNoV2Vic2l0ZUNvbnRlbnR9IGRpc2FibGVkPXtsb2FkaW5nfT5cbiAgICAgICAgICAgIHtsb2FkaW5nID8gXCJHZW5lcmF0aW5nLi4uXCIgOiBcIkdlbmVyYXRlXCJ9XG4gICAgICAgICAgPC9CdXR0b24+XG5cbiAgICAgICAgICB7ZGF0YSAmJiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTYgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1zZW1pYm9sZFwiPntkYXRhLnRpdGxlfTwvaDI+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDBcIj57ZGF0YS5oZWFkbGluZX08L3A+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTIgdGV4dC1ncmF5LTUwMFwiPntkYXRhLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgICAgPGltZyBzcmM9e2RhdGEuaW1hZ2V9IGFsdD1cIkdlbmVyYXRlZFwiIGNsYXNzTmFtZT1cIm10LTQgdy1mdWxsIG1heC13LW1kIHJvdW5kZWQtbGcgc2hhZG93XCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9DYXJkPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiQ2FyZCIsIkJ1dHRvbiIsIklucHV0IiwiUGVyc29uYWxpemVkUGFnZSIsInBsYXRmb3JtIiwic2V0UGxhdGZvcm0iLCJwcm9kdWN0Iiwic2V0UHJvZHVjdCIsImRhdGEiLCJzZXREYXRhIiwibG9hZGluZyIsInNldExvYWRpbmciLCJmZXRjaFdlYnNpdGVDb250ZW50IiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInJlc3VsdCIsImpzb24iLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJvbkNsaWNrIiwiZGlzYWJsZWQiLCJoMiIsInRpdGxlIiwicCIsImhlYWRsaW5lIiwiZGVzY3JpcHRpb24iLCJpbWciLCJzcmMiLCJpbWFnZSIsImFsdCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/components/ui/input.tsx":
/*!*************************************!*\
  !*** ./src/components/ui/input.tsx ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Input: () => (/* binding */ Input)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/utils */ \"(app-pages-browser)/./src/lib/utils.ts\");\n\n\n\nconst Input = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(_c = (param, ref)=>{\n    let { className, type, ...props } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n        type: type,\n        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)(\"flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm\", className),\n        ref: ref,\n        ...props\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\abhir\\\\OneDrive\\\\Documents\\\\GitHub\\\\my-ai-website\\\\my-ai-website\\\\src\\\\components\\\\ui\\\\input.tsx\",\n        lineNumber: 8,\n        columnNumber: 7\n    }, undefined);\n});\n_c1 = Input;\nInput.displayName = \"Input\";\n\nvar _c, _c1;\n$RefreshReg$(_c, \"Input$React.forwardRef\");\n$RefreshReg$(_c1, \"Input\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3VpL2lucHV0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBOEI7QUFFRTtBQUVoQyxNQUFNRSxzQkFBUUYsNkNBQWdCLE1BQzVCLFFBQWdDSTtRQUEvQixFQUFFQyxTQUFTLEVBQUVDLElBQUksRUFBRSxHQUFHQyxPQUFPO0lBQzVCLHFCQUNFLDhEQUFDQztRQUNDRixNQUFNQTtRQUNORCxXQUFXSiw4Q0FBRUEsQ0FDWCwyV0FDQUk7UUFFRkQsS0FBS0E7UUFDSixHQUFHRyxLQUFLOzs7Ozs7QUFHZjs7QUFFRkwsTUFBTU8sV0FBVyxHQUFHO0FBRUoiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcYWJoaXJcXE9uZURyaXZlXFxEb2N1bWVudHNcXEdpdEh1YlxcbXktYWktd2Vic2l0ZVxcbXktYWktd2Vic2l0ZVxcc3JjXFxjb21wb25lbnRzXFx1aVxcaW5wdXQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiXG5cbmltcG9ydCB7IGNuIH0gZnJvbSBcIkAvbGliL3V0aWxzXCJcblxuY29uc3QgSW5wdXQgPSBSZWFjdC5mb3J3YXJkUmVmPEhUTUxJbnB1dEVsZW1lbnQsIFJlYWN0LkNvbXBvbmVudFByb3BzPFwiaW5wdXRcIj4+KFxuICAoeyBjbGFzc05hbWUsIHR5cGUsIC4uLnByb3BzIH0sIHJlZikgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8aW5wdXRcbiAgICAgICAgdHlwZT17dHlwZX1cbiAgICAgICAgY2xhc3NOYW1lPXtjbihcbiAgICAgICAgICBcImZsZXggaC05IHctZnVsbCByb3VuZGVkLW1kIGJvcmRlciBib3JkZXItaW5wdXQgYmctdHJhbnNwYXJlbnQgcHgtMyBweS0xIHRleHQtYmFzZSBzaGFkb3ctc20gdHJhbnNpdGlvbi1jb2xvcnMgZmlsZTpib3JkZXItMCBmaWxlOmJnLXRyYW5zcGFyZW50IGZpbGU6dGV4dC1zbSBmaWxlOmZvbnQtbWVkaXVtIGZpbGU6dGV4dC1mb3JlZ3JvdW5kIHBsYWNlaG9sZGVyOnRleHQtbXV0ZWQtZm9yZWdyb3VuZCBmb2N1cy12aXNpYmxlOm91dGxpbmUtbm9uZSBmb2N1cy12aXNpYmxlOnJpbmctMSBmb2N1cy12aXNpYmxlOnJpbmctcmluZyBkaXNhYmxlZDpjdXJzb3Itbm90LWFsbG93ZWQgZGlzYWJsZWQ6b3BhY2l0eS01MCBtZDp0ZXh0LXNtXCIsXG4gICAgICAgICAgY2xhc3NOYW1lXG4gICAgICAgICl9XG4gICAgICAgIHJlZj17cmVmfVxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAvPlxuICAgIClcbiAgfVxuKVxuSW5wdXQuZGlzcGxheU5hbWUgPSBcIklucHV0XCJcblxuZXhwb3J0IHsgSW5wdXQgfVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiY24iLCJJbnB1dCIsImZvcndhcmRSZWYiLCJyZWYiLCJjbGFzc05hbWUiLCJ0eXBlIiwicHJvcHMiLCJpbnB1dCIsImRpc3BsYXlOYW1lIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/ui/input.tsx\n"));

/***/ })

});