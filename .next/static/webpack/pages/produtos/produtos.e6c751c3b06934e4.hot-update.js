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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ produtosPagina; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Card */ \"./src/components/Card.tsx\");\n/* harmony import */ var _components_Topo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Topo */ \"./src/components/Topo.tsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction calcDesc(v, d) {\n    return v - d;\n}\nfunction calcDesc2(v, d) {\n    return v - d / 2;\n}\nconst produtos = [\n    {\n        id: 1,\n        produto: \"Mouse\",\n        valor: 49.90,\n        desconto: 0,\n        disponivel: true\n    },\n    {\n        id: 2,\n        produto: \"Teclado\",\n        valor: 69.90,\n        desconto: 5,\n        disponivel: true\n    },\n    {\n        id: 3,\n        produto: \"Monitor\",\n        valor: 499.90,\n        desconto: 50,\n        disponivel: true\n    },\n    {\n        id: 4,\n        produto: \"CPU\",\n        valor: 1449.90,\n        desconto: 100,\n        disponivel: true\n    },\n    {\n        id: 5,\n        produto: \"CX.Som\",\n        valor: 39.90,\n        desconto: 0,\n        disponivel: true\n    }\n];\nfunction produtosPagina() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const nome = router.query.nome;\n    const curso = router.query.curso;\n    console.log(parametros);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Topo__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\lucas\\\\OneDrive\\\\Documentos\\\\estudos\\\\curso_react+nextJS\\\\arquivos\\\\React-NextJS\\\\projeto1\\\\src\\\\pages\\\\produtos\\\\produtos.tsx\",\n                lineNumber: 58,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex gap-3 justify-center\",\n                children: produtos.map((e)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Card__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        produto: e.produto,\n                        valor: e.valor,\n                        desconto: e.desconto,\n                        funcao: calcDesc\n                    }, e.id, false, {\n                        fileName: \"C:\\\\Users\\\\lucas\\\\OneDrive\\\\Documentos\\\\estudos\\\\curso_react+nextJS\\\\arquivos\\\\React-NextJS\\\\projeto1\\\\src\\\\pages\\\\produtos\\\\produtos.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 25\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\lucas\\\\OneDrive\\\\Documentos\\\\estudos\\\\curso_react+nextJS\\\\arquivos\\\\React-NextJS\\\\projeto1\\\\src\\\\pages\\\\produtos\\\\produtos.tsx\",\n                lineNumber: 59,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\lucas\\\\OneDrive\\\\Documentos\\\\estudos\\\\curso_react+nextJS\\\\arquivos\\\\React-NextJS\\\\projeto1\\\\src\\\\pages\\\\produtos\\\\produtos.tsx\",\n        lineNumber: 57,\n        columnNumber: 9\n    }, this);\n}\n_s(produtosPagina, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcHJvZHV0b3MvcHJvZHV0b3MudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFxQztBQUNBO0FBQ0c7QUFFeEMsU0FBU0csU0FBU0MsQ0FBUyxFQUFFQyxDQUFTO0lBQ2xDLE9BQU9ELElBQUlDO0FBQ2Y7QUFFQSxTQUFTQyxVQUFVRixDQUFTLEVBQUVDLENBQVM7SUFDbkMsT0FBT0QsSUFBS0MsSUFBSTtBQUNwQjtBQUVBLE1BQU1FLFdBQVc7SUFDYjtRQUNJQyxJQUFHO1FBQ0hDLFNBQVM7UUFDVEMsT0FBTztRQUNQQyxVQUFVO1FBQ1ZDLFlBQVk7SUFDaEI7SUFDQTtRQUNJSixJQUFHO1FBQ0hDLFNBQVM7UUFDVEMsT0FBTztRQUNQQyxVQUFVO1FBQ1ZDLFlBQVk7SUFDaEI7SUFDQTtRQUNJSixJQUFHO1FBQ0hDLFNBQVM7UUFDVEMsT0FBTztRQUNQQyxVQUFVO1FBQ1ZDLFlBQVk7SUFDaEI7SUFDQTtRQUNJSixJQUFHO1FBQ0hDLFNBQVM7UUFDVEMsT0FBTztRQUNQQyxVQUFVO1FBQ1ZDLFlBQVk7SUFDaEI7SUFDQTtRQUNJSixJQUFHO1FBQ0hDLFNBQVM7UUFDVEMsT0FBTztRQUNQQyxVQUFVO1FBQ1ZDLFlBQVk7SUFDaEI7Q0FDSDtBQUVjLFNBQVNDOztJQUNwQixNQUFNQyxTQUFTWixzREFBU0E7SUFDeEIsTUFBTWEsT0FBT0QsT0FBT0UsS0FBSyxDQUFDRCxJQUFJO0lBQzlCLE1BQU1FLFFBQVFILE9BQU9FLEtBQUssQ0FBQ0MsS0FBSztJQUNoQ0MsUUFBUUMsR0FBRyxDQUFDQztJQUNaLHFCQUNJLDhEQUFDQzs7MEJBQ0csOERBQUNwQix3REFBSUE7Ozs7OzBCQUNMLDhEQUFDb0I7Z0JBQUlDLFdBQVU7MEJBRVZmLFNBQVNnQixHQUFHLENBQUMsQ0FBQ0M7b0JBQ1gscUJBQ0ksOERBQUN4Qix3REFBSUE7d0JBQVlTLFNBQVNlLEVBQUVmLE9BQU87d0JBQUVDLE9BQU9jLEVBQUVkLEtBQUs7d0JBQUVDLFVBQVVhLEVBQUViLFFBQVE7d0JBQUVjLFFBQVF0Qjt1QkFBeEVxQixFQUFFaEIsRUFBRTs7Ozs7Z0JBRXZCOzs7Ozs7Ozs7Ozs7QUFJaEI7R0FsQndCSzs7UUFDTFgsa0RBQVNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9wcm9kdXRvcy9wcm9kdXRvcy50c3g/ZWU3MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2FyZCBmcm9tIFwiQC9jb21wb25lbnRzL0NhcmRcIjtcclxuaW1wb3J0IFRvcG8gZnJvbSBcIkAvY29tcG9uZW50cy9Ub3BvXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuZnVuY3Rpb24gY2FsY0Rlc2ModjogbnVtYmVyLCBkOiBudW1iZXIpIHtcclxuICAgIHJldHVybiB2IC0gZDtcclxufVxyXG5cclxuZnVuY3Rpb24gY2FsY0Rlc2MyKHY6IG51bWJlciwgZDogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4gdiAtIChkIC8gMik7XHJcbn1cclxuXHJcbmNvbnN0IHByb2R1dG9zID0gW1xyXG4gICAgeyAgIFxyXG4gICAgICAgIGlkOjEsXHJcbiAgICAgICAgcHJvZHV0bzogXCJNb3VzZVwiLFxyXG4gICAgICAgIHZhbG9yOiA0OS45MCxcclxuICAgICAgICBkZXNjb250bzogMCxcclxuICAgICAgICBkaXNwb25pdmVsOiB0cnVlXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOjIsXHJcbiAgICAgICAgcHJvZHV0bzogXCJUZWNsYWRvXCIsXHJcbiAgICAgICAgdmFsb3I6IDY5LjkwLFxyXG4gICAgICAgIGRlc2NvbnRvOiA1LFxyXG4gICAgICAgIGRpc3Bvbml2ZWw6IHRydWVcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6MyxcclxuICAgICAgICBwcm9kdXRvOiBcIk1vbml0b3JcIixcclxuICAgICAgICB2YWxvcjogNDk5LjkwLFxyXG4gICAgICAgIGRlc2NvbnRvOiA1MCxcclxuICAgICAgICBkaXNwb25pdmVsOiB0cnVlXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOjQsXHJcbiAgICAgICAgcHJvZHV0bzogXCJDUFVcIixcclxuICAgICAgICB2YWxvcjogMTQ0OS45MCxcclxuICAgICAgICBkZXNjb250bzogMTAwLFxyXG4gICAgICAgIGRpc3Bvbml2ZWw6IHRydWVcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6NSxcclxuICAgICAgICBwcm9kdXRvOiBcIkNYLlNvbVwiLFxyXG4gICAgICAgIHZhbG9yOiAzOS45MCxcclxuICAgICAgICBkZXNjb250bzogMCxcclxuICAgICAgICBkaXNwb25pdmVsOiB0cnVlLFxyXG4gICAgfVxyXG5dXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcm9kdXRvc1BhZ2luYSgpIHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3Qgbm9tZSA9IHJvdXRlci5xdWVyeS5ub21lO1xyXG4gICAgY29uc3QgY3Vyc28gPSByb3V0ZXIucXVlcnkuY3Vyc287XHJcbiAgICBjb25zb2xlLmxvZyhwYXJhbWV0cm9zKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8VG9wbyAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTMganVzdGlmeS1jZW50ZXJcIj5cclxuXHJcbiAgICAgICAgICAgICAgICB7cHJvZHV0b3MubWFwKChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQga2V5PXtlLmlkfSBwcm9kdXRvPXtlLnByb2R1dG99IHZhbG9yPXtlLnZhbG9yfSBkZXNjb250bz17ZS5kZXNjb250b30gZnVuY2FvPXtjYWxjRGVzY30gLz5cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuIl0sIm5hbWVzIjpbIkNhcmQiLCJUb3BvIiwidXNlUm91dGVyIiwiY2FsY0Rlc2MiLCJ2IiwiZCIsImNhbGNEZXNjMiIsInByb2R1dG9zIiwiaWQiLCJwcm9kdXRvIiwidmFsb3IiLCJkZXNjb250byIsImRpc3Bvbml2ZWwiLCJwcm9kdXRvc1BhZ2luYSIsInJvdXRlciIsIm5vbWUiLCJxdWVyeSIsImN1cnNvIiwiY29uc29sZSIsImxvZyIsInBhcmFtZXRyb3MiLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJlIiwiZnVuY2FvIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/produtos/produtos.tsx\n"));

/***/ })

});