"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/template",{

/***/ "(app-pages-browser)/./src/contexts/UserContext.tsx":
/*!**************************************!*\
  !*** ./src/contexts/UserContext.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   NavigationProvider: function() { return /* binding */ NavigationProvider; },\n/* harmony export */   useNavigation: function() { return /* binding */ useNavigation; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n// context/NavigationContext.tsx\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n// コンテクストのデフォルト値を設定（適切なデフォルト値を提供）\nconst NavigationContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({\n    isOpen: false,\n    toggleNavigation: ()=>{}\n});\nconst useNavigation = ()=>{\n    _s();\n    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(NavigationContext);\n    if (!context) throw new Error(\"useNavigation must be used within a NavigationProvider\");\n    return context;\n};\n_s(useNavigation, \"b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=\");\nconst NavigationProvider = (param)=>{\n    let { children } = param;\n    _s1();\n    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const toggleNavigation = ()=>{\n        setIsOpen(!isOpen);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavigationContext.Provider, {\n        value: {\n            isOpen,\n            toggleNavigation\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\rintaro\\\\Desktop\\\\Vscode\\\\OutputSNS\\\\src\\\\contexts\\\\UserContext.tsx\",\n        lineNumber: 32,\n        columnNumber: 9\n    }, undefined);\n};\n_s1(NavigationProvider, \"+sus0Lb0ewKHdwiUhiTAJFoFyQ0=\");\n_c = NavigationProvider;\nvar _c;\n$RefreshReg$(_c, \"NavigationProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb250ZXh0cy9Vc2VyQ29udGV4dC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFFQSxnQ0FBZ0M7OztBQUM4QztBQVE5RSxpQ0FBaUM7QUFDakMsTUFBTUksa0NBQW9CSCxvREFBYUEsQ0FBK0I7SUFDbEVJLFFBQVE7SUFDUkMsa0JBQWtCLEtBQU87QUFDN0I7QUFFTyxNQUFNQyxnQkFBZ0I7O0lBQ3pCLE1BQU1DLFVBQVVOLGlEQUFVQSxDQUFDRTtJQUMzQixJQUFJLENBQUNJLFNBQVMsTUFBTSxJQUFJQyxNQUFNO0lBQzlCLE9BQU9EO0FBQ1gsRUFBRTtHQUpXRDtBQU1OLE1BQU1HLHFCQUFxQjtRQUFDLEVBQUVDLFFBQVEsRUFBMkI7O0lBQ3BFLE1BQU0sQ0FBQ04sUUFBUU8sVUFBVSxHQUFHVCwrQ0FBUUEsQ0FBQztJQUVyQyxNQUFNRyxtQkFBbUI7UUFDckJNLFVBQVUsQ0FBQ1A7SUFDZjtJQUVBLHFCQUNJLDhEQUFDRCxrQkFBa0JTLFFBQVE7UUFBQ0MsT0FBTztZQUFFVDtZQUFRQztRQUFpQjtrQkFDekRLOzs7Ozs7QUFHYixFQUFFO0lBWldEO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb250ZXh0cy9Vc2VyQ29udGV4dC50c3g/NWVlMSJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbi8vIGNvbnRleHQvTmF2aWdhdGlvbkNvbnRleHQudHN4XHJcbmltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VTdGF0ZSwgUmVhY3ROb2RlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuLy8g44Kz44Oz44OG44Kv44K544OI44Gu5Z6L44KS5a6a576pXHJcbmludGVyZmFjZSBOYXZpZ2F0aW9uQ29udGV4dFR5cGUge1xyXG4gICAgaXNPcGVuOiBib29sZWFuO1xyXG4gICAgdG9nZ2xlTmF2aWdhdGlvbjogKCkgPT4gdm9pZDtcclxufVxyXG5cclxuLy8g44Kz44Oz44OG44Kv44K544OI44Gu44OH44OV44Kp44Or44OI5YCk44KS6Kit5a6a77yI6YGp5YiH44Gq44OH44OV44Kp44Or44OI5YCk44KS5o+Q5L6b77yJXHJcbmNvbnN0IE5hdmlnYXRpb25Db250ZXh0ID0gY3JlYXRlQ29udGV4dDxOYXZpZ2F0aW9uQ29udGV4dFR5cGUgfCBudWxsPih7XHJcbiAgICBpc09wZW46IGZhbHNlLFxyXG4gICAgdG9nZ2xlTmF2aWdhdGlvbjogKCkgPT4ge31cclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlTmF2aWdhdGlvbiA9ICgpID0+IHtcclxuICAgIGNvbnN0IGNvbnRleHQgPSB1c2VDb250ZXh0KE5hdmlnYXRpb25Db250ZXh0KTtcclxuICAgIGlmICghY29udGV4dCkgdGhyb3cgbmV3IEVycm9yKCd1c2VOYXZpZ2F0aW9uIG11c3QgYmUgdXNlZCB3aXRoaW4gYSBOYXZpZ2F0aW9uUHJvdmlkZXInKTtcclxuICAgIHJldHVybiBjb250ZXh0O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IE5hdmlnYXRpb25Qcm92aWRlciA9ICh7IGNoaWxkcmVuIH06IHsgY2hpbGRyZW46IFJlYWN0Tm9kZSB9KSA9PiB7XHJcbiAgICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgXHJcbiAgICBjb25zdCB0b2dnbGVOYXZpZ2F0aW9uID0gKCkgPT4ge1xyXG4gICAgICAgIHNldElzT3BlbighaXNPcGVuKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TmF2aWdhdGlvbkNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgaXNPcGVuLCB0b2dnbGVOYXZpZ2F0aW9uIH19PlxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9OYXZpZ2F0aW9uQ29udGV4dC5Qcm92aWRlcj5cclxuICAgICk7XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJOYXZpZ2F0aW9uQ29udGV4dCIsImlzT3BlbiIsInRvZ2dsZU5hdmlnYXRpb24iLCJ1c2VOYXZpZ2F0aW9uIiwiY29udGV4dCIsIkVycm9yIiwiTmF2aWdhdGlvblByb3ZpZGVyIiwiY2hpbGRyZW4iLCJzZXRJc09wZW4iLCJQcm92aWRlciIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/contexts/UserContext.tsx\n"));

/***/ })

});