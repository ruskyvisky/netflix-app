"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nasync function getServerSideProps(context) {\n    const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.getSession)(context);\n    if (!session) {\n        return {\n            redirect: {\n                destination: \"/auth\",\n                permanent: false\n            }\n        };\n    }\n    return {};\n}\nfunction Home() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-3xl font-bold underline\",\n                children: \"Main Page\"\n            }, void 0, false, {\n                fileName: \"F:\\\\Projelerim(Numan)\\\\netflix-app\\\\pages\\\\index.tsx\",\n                lineNumber: 22,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.signOut)()\n            }, void 0, false, {\n                fileName: \"F:\\\\Projelerim(Numan)\\\\netflix-app\\\\pages\\\\index.tsx\",\n                lineNumber: 26,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNzRDtBQUkvQyxlQUFnQkUsbUJBQW9CQyxPQUF5QixFQUFDO0lBQ3JFLE1BQU1DLFVBQVUsTUFBTUosMkRBQVVBLENBQUNHO0lBRWpDLElBQUssQ0FBQ0MsU0FBUTtRQUNaLE9BQU87WUFDTEMsVUFBVTtnQkFDUkMsYUFBYTtnQkFDYkMsV0FBVyxLQUFLO1lBQ2xCO1FBQ0Y7SUFDRixDQUFDO0lBQ0QsT0FBTyxDQUFFO0FBQ1QsQ0FBQztBQUNjLFNBQVNDLE9BQU87SUFDN0IscUJBQ0U7OzBCQUNBLDhEQUFDQztnQkFBR0MsV0FBVTswQkFBK0I7Ozs7OzswQkFJN0MsOERBQUNDO2dCQUFPQyxTQUNOLElBQU1YLHdEQUFPQTs7Ozs7Ozs7QUFJbkIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25ldGZsaXgtYXBwLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFBhZ2VDb250ZXh0IH0gZnJvbSAnbmV4dCdcbmltcG9ydCB7IGdldFNlc3Npb24gLCAgc2lnbk91dH0gZnJvbSAnbmV4dC1hdXRoL3JlYWN0J1xuXG5cblxuZXhwb3J0IGFzeW5jICBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoIGNvbnRleHQgOiBOZXh0UGFnZUNvbnRleHQpe1xuY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oY29udGV4dClcblxuaWYgKCAhc2Vzc2lvbil7XG4gIHJldHVybiB7XG4gICAgcmVkaXJlY3Q6IHtcbiAgICAgIGRlc3RpbmF0aW9uOiAnL2F1dGgnLFxuICAgICAgcGVybWFuZW50OiBmYWxzZSxcbiAgICB9XG4gIH1cbn1cbnJldHVybiB7IH1cbn1cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkIHVuZGVybGluZVwiPlxuICAgICAgTWFpbiBQYWdlIFxuICAgIDwvaDE+XG5cbiAgICA8YnV0dG9uIG9uQ2xpY2s9e1xuICAgICAgKCkgPT4gc2lnbk91dCgpXG4gICAgfT48L2J1dHRvbj5cbiAgICA8Lz5cbiAgKVxufVxuIl0sIm5hbWVzIjpbImdldFNlc3Npb24iLCJzaWduT3V0IiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiY29udGV4dCIsInNlc3Npb24iLCJyZWRpcmVjdCIsImRlc3RpbmF0aW9uIiwicGVybWFuZW50IiwiSG9tZSIsImgxIiwiY2xhc3NOYW1lIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();