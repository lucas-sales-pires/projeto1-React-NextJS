"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/produtos/produtos",{

/***/ "./src/pages/produtos/produtos.tsx":
/*!*****************************************!*\
  !*** ./src/pages/produtos/produtos.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ produtosPagina; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Card */ \"./src/components/Card.tsx\");\n/* harmony import */ var _components_Topo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Topo */ \"./src/components/Topo.tsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction calcDesc(v, d) {\n    return v - d;\n}\nfunction calcDesc2(v, d) {\n    return v - d / 2;\n}\nconst produtos = [\n    {\n        id: 1,\n        produto: \"Mouse\",\n        valor: 49.90,\n        desconto: 0,\n        disponivel: true\n    },\n    {\n        produto: \"Teclado\",\n        valor: 69.90,\n        desconto: 5,\n        disponivel: true\n    },\n    {\n        produto: \"Monitor\",\n        valor: 499.90,\n        desconto: 50,\n        disponivel: true\n    },\n    {\n        produto: \"CPU\",\n        valor: 1449.90,\n        desconto: 100,\n        disponivel: true\n    },\n    {\n        produto: \"CX.Som\",\n        valor: 39.90,\n        desconto: 0,\n        disponivel: true\n    }\n];\nfunction produtosPagina() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const parametros = router.query;\n    console.log(parametros);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Topo__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\lucas\\\\OneDrive\\\\Documentos\\\\estudos\\\\curso_react+nextJS\\\\arquivos\\\\React-NextJS\\\\projeto1\\\\src\\\\pages\\\\produtos\\\\produtos.tsx\",\n                lineNumber: 54,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex gap-3 justify-center\",\n                children: produtos.map((e)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Card__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        produto: e.produto,\n                        valor: e.valor,\n                        desconto: e.desconto,\n                        funcao: calcDesc\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\lucas\\\\OneDrive\\\\Documentos\\\\estudos\\\\curso_react+nextJS\\\\arquivos\\\\React-NextJS\\\\projeto1\\\\src\\\\pages\\\\produtos\\\\produtos.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 25\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\lucas\\\\OneDrive\\\\Documentos\\\\estudos\\\\curso_react+nextJS\\\\arquivos\\\\React-NextJS\\\\projeto1\\\\src\\\\pages\\\\produtos\\\\produtos.tsx\",\n                lineNumber: 55,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\lucas\\\\OneDrive\\\\Documentos\\\\estudos\\\\curso_react+nextJS\\\\arquivos\\\\React-NextJS\\\\projeto1\\\\src\\\\pages\\\\produtos\\\\produtos.tsx\",\n        lineNumber: 53,\n        columnNumber: 9\n    }, this);\n}\n_s(produtosPagina, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcHJvZHV0b3MvcHJvZHV0b3MudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFxQztBQUNBO0FBQ0c7QUFFeEMsU0FBU0csU0FBU0MsQ0FBUyxFQUFFQyxDQUFTO0lBQ2xDLE9BQU9ELElBQUlDO0FBQ2Y7QUFFQSxTQUFTQyxVQUFVRixDQUFTLEVBQUVDLENBQVM7SUFDbkMsT0FBT0QsSUFBS0MsSUFBSTtBQUNwQjtBQUVBLE1BQU1FLFdBQVc7SUFDYjtRQUNJQyxJQUFHO1FBQ0hDLFNBQVM7UUFDVEMsT0FBTztRQUNQQyxVQUFVO1FBQ1ZDLFlBQVk7SUFDaEI7SUFDQTtRQUVJSCxTQUFTO1FBQ1RDLE9BQU87UUFDUEMsVUFBVTtRQUNWQyxZQUFZO0lBQ2hCO0lBQ0E7UUFDSUgsU0FBUztRQUNUQyxPQUFPO1FBQ1BDLFVBQVU7UUFDVkMsWUFBWTtJQUNoQjtJQUNBO1FBQ0lILFNBQVM7UUFDVEMsT0FBTztRQUNQQyxVQUFVO1FBQ1ZDLFlBQVk7SUFDaEI7SUFDQTtRQUNJSCxTQUFTO1FBQ1RDLE9BQU87UUFDUEMsVUFBVTtRQUNWQyxZQUFZO0lBQ2hCO0NBQ0g7QUFFYyxTQUFTQzs7SUFDcEIsTUFBTUMsU0FBU1osc0RBQVNBO0lBQ3hCLE1BQU1hLGFBQWFELE9BQU9FLEtBQUs7SUFDL0JDLFFBQVFDLEdBQUcsQ0FBQ0g7SUFDWixxQkFDSSw4REFBQ0k7OzBCQUNHLDhEQUFDbEIsd0RBQUlBOzs7OzswQkFDTCw4REFBQ2tCO2dCQUFJQyxXQUFVOzBCQUVWYixTQUFTYyxHQUFHLENBQUMsQ0FBQ0M7b0JBQ1gscUJBQ0ksOERBQUN0Qix3REFBSUE7d0JBQUNTLFNBQVNhLEVBQUViLE9BQU87d0JBQUVDLE9BQU9ZLEVBQUVaLEtBQUs7d0JBQUVDLFVBQVVXLEVBQUVYLFFBQVE7d0JBQUVZLFFBQVFwQjs7Ozs7O2dCQUVoRjs7Ozs7Ozs7Ozs7O0FBSWhCO0dBakJ3QlU7O1FBQ0xYLGtEQUFTQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvcHJvZHV0b3MvcHJvZHV0b3MudHN4P2VlNzIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENhcmQgZnJvbSBcIkAvY29tcG9uZW50cy9DYXJkXCI7XHJcbmltcG9ydCBUb3BvIGZyb20gXCJAL2NvbXBvbmVudHMvVG9wb1wiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmZ1bmN0aW9uIGNhbGNEZXNjKHY6IG51bWJlciwgZDogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4gdiAtIGQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNhbGNEZXNjMih2OiBudW1iZXIsIGQ6IG51bWJlcikge1xyXG4gICAgcmV0dXJuIHYgLSAoZCAvIDIpO1xyXG59XHJcblxyXG5jb25zdCBwcm9kdXRvcyA9IFtcclxuICAgIHsgICBcclxuICAgICAgICBpZDoxLFxyXG4gICAgICAgIHByb2R1dG86IFwiTW91c2VcIixcclxuICAgICAgICB2YWxvcjogNDkuOTAsXHJcbiAgICAgICAgZGVzY29udG86IDAsXHJcbiAgICAgICAgZGlzcG9uaXZlbDogdHJ1ZVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcclxuICAgICAgICBwcm9kdXRvOiBcIlRlY2xhZG9cIixcclxuICAgICAgICB2YWxvcjogNjkuOTAsXHJcbiAgICAgICAgZGVzY29udG86IDUsXHJcbiAgICAgICAgZGlzcG9uaXZlbDogdHJ1ZVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBwcm9kdXRvOiBcIk1vbml0b3JcIixcclxuICAgICAgICB2YWxvcjogNDk5LjkwLFxyXG4gICAgICAgIGRlc2NvbnRvOiA1MCxcclxuICAgICAgICBkaXNwb25pdmVsOiB0cnVlXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHByb2R1dG86IFwiQ1BVXCIsXHJcbiAgICAgICAgdmFsb3I6IDE0NDkuOTAsXHJcbiAgICAgICAgZGVzY29udG86IDEwMCxcclxuICAgICAgICBkaXNwb25pdmVsOiB0cnVlXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHByb2R1dG86IFwiQ1guU29tXCIsXHJcbiAgICAgICAgdmFsb3I6IDM5LjkwLFxyXG4gICAgICAgIGRlc2NvbnRvOiAwLFxyXG4gICAgICAgIGRpc3Bvbml2ZWw6IHRydWUsXHJcbiAgICB9XHJcbl1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByb2R1dG9zUGFnaW5hKCkge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCBwYXJhbWV0cm9zID0gcm91dGVyLnF1ZXJ5O1xyXG4gICAgY29uc29sZS5sb2cocGFyYW1ldHJvcylcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPFRvcG8gLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC0zIGp1c3RpZnktY2VudGVyXCI+XHJcblxyXG4gICAgICAgICAgICAgICAge3Byb2R1dG9zLm1hcCgoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkIHByb2R1dG89e2UucHJvZHV0b30gdmFsb3I9e2UudmFsb3J9IGRlc2NvbnRvPXtlLmRlc2NvbnRvfSBmdW5jYW89e2NhbGNEZXNjfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4iXSwibmFtZXMiOlsiQ2FyZCIsIlRvcG8iLCJ1c2VSb3V0ZXIiLCJjYWxjRGVzYyIsInYiLCJkIiwiY2FsY0Rlc2MyIiwicHJvZHV0b3MiLCJpZCIsInByb2R1dG8iLCJ2YWxvciIsImRlc2NvbnRvIiwiZGlzcG9uaXZlbCIsInByb2R1dG9zUGFnaW5hIiwicm91dGVyIiwicGFyYW1ldHJvcyIsInF1ZXJ5IiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsImUiLCJmdW5jYW8iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/produtos/produtos.tsx\n"));

/***/ })

});