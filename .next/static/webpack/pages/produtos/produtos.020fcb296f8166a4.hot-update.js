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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ produtosPagina; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Card */ \"./src/components/Card.tsx\");\n/* harmony import */ var _components_Topo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Topo */ \"./src/components/Topo.tsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction calcDesc(v, d) {\n    return v - d;\n}\nfunction calcDesc2(v, d) {\n    return v - d / 2;\n}\nconst produtos = [\n    {\n        id: 1,\n        produto: \"Mouse\",\n        valor: 49.90,\n        desconto: 0,\n        disponivel: true\n    },\n    {\n        id: 2,\n        produto: \"Teclado\",\n        valor: 69.90,\n        desconto: 5,\n        disponivel: true\n    },\n    {\n        id: 3,\n        produto: \"Monitor\",\n        valor: 499.90,\n        desconto: 50,\n        disponivel: true\n    },\n    {\n        id: 4,\n        produto: \"CPU\",\n        valor: 1449.90,\n        desconto: 100,\n        disponivel: true\n    },\n    {\n        id: 5,\n        produto: \"CX.Som\",\n        valor: 39.90,\n        desconto: 0,\n        disponivel: true\n    }\n];\nfunction produtosPagina() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    // const nome = router.query.nome;\n    // const curso = router.query.curso;\n    const { nome, curso } = router.query;\n    console.log(nome);\n    console.log(curso);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Topo__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\lucas\\\\OneDrive\\\\Documentos\\\\estudos\\\\curso_react+nextJS\\\\arquivos\\\\React-NextJS\\\\projeto1\\\\src\\\\pages\\\\produtos\\\\produtos.tsx\",\n                lineNumber: 60,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex gap-3 justify-center\",\n                children: produtos.map((e)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Card__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        produto: e.produto,\n                        valor: e.valor,\n                        desconto: e.desconto,\n                        funcao: calcDesc\n                    }, e.id, false, {\n                        fileName: \"C:\\\\Users\\\\lucas\\\\OneDrive\\\\Documentos\\\\estudos\\\\curso_react+nextJS\\\\arquivos\\\\React-NextJS\\\\projeto1\\\\src\\\\pages\\\\produtos\\\\produtos.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 25\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\lucas\\\\OneDrive\\\\Documentos\\\\estudos\\\\curso_react+nextJS\\\\arquivos\\\\React-NextJS\\\\projeto1\\\\src\\\\pages\\\\produtos\\\\produtos.tsx\",\n                lineNumber: 61,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\lucas\\\\OneDrive\\\\Documentos\\\\estudos\\\\curso_react+nextJS\\\\arquivos\\\\React-NextJS\\\\projeto1\\\\src\\\\pages\\\\produtos\\\\produtos.tsx\",\n        lineNumber: 59,\n        columnNumber: 9\n    }, this);\n}\n_s(produtosPagina, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcHJvZHV0b3MvcHJvZHV0b3MudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFxQztBQUNBO0FBQ0c7QUFFeEMsU0FBU0csU0FBU0MsQ0FBUyxFQUFFQyxDQUFTO0lBQ2xDLE9BQU9ELElBQUlDO0FBQ2Y7QUFFQSxTQUFTQyxVQUFVRixDQUFTLEVBQUVDLENBQVM7SUFDbkMsT0FBT0QsSUFBS0MsSUFBSTtBQUNwQjtBQUVBLE1BQU1FLFdBQVc7SUFDYjtRQUNJQyxJQUFHO1FBQ0hDLFNBQVM7UUFDVEMsT0FBTztRQUNQQyxVQUFVO1FBQ1ZDLFlBQVk7SUFDaEI7SUFDQTtRQUNJSixJQUFHO1FBQ0hDLFNBQVM7UUFDVEMsT0FBTztRQUNQQyxVQUFVO1FBQ1ZDLFlBQVk7SUFDaEI7SUFDQTtRQUNJSixJQUFHO1FBQ0hDLFNBQVM7UUFDVEMsT0FBTztRQUNQQyxVQUFVO1FBQ1ZDLFlBQVk7SUFDaEI7SUFDQTtRQUNJSixJQUFHO1FBQ0hDLFNBQVM7UUFDVEMsT0FBTztRQUNQQyxVQUFVO1FBQ1ZDLFlBQVk7SUFDaEI7SUFDQTtRQUNJSixJQUFHO1FBQ0hDLFNBQVM7UUFDVEMsT0FBTztRQUNQQyxVQUFVO1FBQ1ZDLFlBQVk7SUFDaEI7Q0FDSDtBQUVjLFNBQVNDOztJQUNwQixNQUFNQyxTQUFTWixzREFBU0E7SUFDeEIsa0NBQWtDO0lBQ2xDLG9DQUFvQztJQUNwQyxNQUFNLEVBQUNhLElBQUksRUFBQ0MsS0FBSyxFQUFDLEdBQUdGLE9BQU9HLEtBQUs7SUFDakNDLFFBQVFDLEdBQUcsQ0FBQ0o7SUFDWkcsUUFBUUMsR0FBRyxDQUFDSDtJQUNaLHFCQUNJLDhEQUFDSTs7MEJBQ0csOERBQUNuQix3REFBSUE7Ozs7OzBCQUNMLDhEQUFDbUI7Z0JBQUlDLFdBQVU7MEJBRVZkLFNBQVNlLEdBQUcsQ0FBQyxDQUFDQztvQkFDWCxxQkFDSSw4REFBQ3ZCLHdEQUFJQTt3QkFBWVMsU0FBU2MsRUFBRWQsT0FBTzt3QkFBRUMsT0FBT2EsRUFBRWIsS0FBSzt3QkFBRUMsVUFBVVksRUFBRVosUUFBUTt3QkFBRWEsUUFBUXJCO3VCQUF4RW9CLEVBQUVmLEVBQUU7Ozs7O2dCQUd2Qjs7Ozs7Ozs7Ozs7O0FBSWhCO0dBckJ3Qks7O1FBQ0xYLGtEQUFTQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvcHJvZHV0b3MvcHJvZHV0b3MudHN4P2VlNzIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENhcmQgZnJvbSBcIkAvY29tcG9uZW50cy9DYXJkXCI7XHJcbmltcG9ydCBUb3BvIGZyb20gXCJAL2NvbXBvbmVudHMvVG9wb1wiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmZ1bmN0aW9uIGNhbGNEZXNjKHY6IG51bWJlciwgZDogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4gdiAtIGQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNhbGNEZXNjMih2OiBudW1iZXIsIGQ6IG51bWJlcikge1xyXG4gICAgcmV0dXJuIHYgLSAoZCAvIDIpO1xyXG59XHJcblxyXG5jb25zdCBwcm9kdXRvcyA9IFtcclxuICAgIHsgICBcclxuICAgICAgICBpZDoxLFxyXG4gICAgICAgIHByb2R1dG86IFwiTW91c2VcIixcclxuICAgICAgICB2YWxvcjogNDkuOTAsXHJcbiAgICAgICAgZGVzY29udG86IDAsXHJcbiAgICAgICAgZGlzcG9uaXZlbDogdHJ1ZVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDoyLFxyXG4gICAgICAgIHByb2R1dG86IFwiVGVjbGFkb1wiLFxyXG4gICAgICAgIHZhbG9yOiA2OS45MCxcclxuICAgICAgICBkZXNjb250bzogNSxcclxuICAgICAgICBkaXNwb25pdmVsOiB0cnVlXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOjMsXHJcbiAgICAgICAgcHJvZHV0bzogXCJNb25pdG9yXCIsXHJcbiAgICAgICAgdmFsb3I6IDQ5OS45MCxcclxuICAgICAgICBkZXNjb250bzogNTAsXHJcbiAgICAgICAgZGlzcG9uaXZlbDogdHJ1ZVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDo0LFxyXG4gICAgICAgIHByb2R1dG86IFwiQ1BVXCIsXHJcbiAgICAgICAgdmFsb3I6IDE0NDkuOTAsXHJcbiAgICAgICAgZGVzY29udG86IDEwMCxcclxuICAgICAgICBkaXNwb25pdmVsOiB0cnVlXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOjUsXHJcbiAgICAgICAgcHJvZHV0bzogXCJDWC5Tb21cIixcclxuICAgICAgICB2YWxvcjogMzkuOTAsXHJcbiAgICAgICAgZGVzY29udG86IDAsXHJcbiAgICAgICAgZGlzcG9uaXZlbDogdHJ1ZSxcclxuICAgIH1cclxuXVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJvZHV0b3NQYWdpbmEoKSB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIC8vIGNvbnN0IG5vbWUgPSByb3V0ZXIucXVlcnkubm9tZTtcclxuICAgIC8vIGNvbnN0IGN1cnNvID0gcm91dGVyLnF1ZXJ5LmN1cnNvO1xyXG4gICAgY29uc3Qge25vbWUsY3Vyc299ID0gcm91dGVyLnF1ZXJ5XHJcbiAgICBjb25zb2xlLmxvZyhub21lKVxyXG4gICAgY29uc29sZS5sb2coY3Vyc28pXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxUb3BvIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtMyBqdXN0aWZ5LWNlbnRlclwiPlxyXG5cclxuICAgICAgICAgICAgICAgIHtwcm9kdXRvcy5tYXAoKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZCBrZXk9e2UuaWR9IHByb2R1dG89e2UucHJvZHV0b30gdmFsb3I9e2UudmFsb3J9IGRlc2NvbnRvPXtlLmRlc2NvbnRvfSBmdW5jYW89e2NhbGNEZXNjfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuIl0sIm5hbWVzIjpbIkNhcmQiLCJUb3BvIiwidXNlUm91dGVyIiwiY2FsY0Rlc2MiLCJ2IiwiZCIsImNhbGNEZXNjMiIsInByb2R1dG9zIiwiaWQiLCJwcm9kdXRvIiwidmFsb3IiLCJkZXNjb250byIsImRpc3Bvbml2ZWwiLCJwcm9kdXRvc1BhZ2luYSIsInJvdXRlciIsIm5vbWUiLCJjdXJzbyIsInF1ZXJ5IiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsImUiLCJmdW5jYW8iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/produtos/produtos.tsx\n"));

/***/ })

});