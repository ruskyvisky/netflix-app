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

/***/ "./hooks/useCurrentUser.ts":
/*!*********************************!*\
  !*** ./hooks/useCurrentUser.ts ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swr */ \"swr\");\n/* harmony import */ var _lib_fetcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/fetcher */ \"./lib/fetcher.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_0__, _lib_fetcher__WEBPACK_IMPORTED_MODULE_1__]);\n([swr__WEBPACK_IMPORTED_MODULE_0__, _lib_fetcher__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\nconst useCurrentUser = ()=>{\n    const { data , error , isLoading , mutate  } = (0,swr__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"/api/current\", _lib_fetcher__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n    return {\n        data,\n        error,\n        isLoading,\n        mutate\n    };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useCurrentUser);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob29rcy91c2VDdXJyZW50VXNlci50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBeUI7QUFDWTtBQUdyQyxNQUFNRSxpQkFBaUIsSUFBTTtJQUV6QixNQUFNLEVBQUNDLEtBQUksRUFBQ0MsTUFBSyxFQUFHQyxVQUFTLEVBQUdDLE9BQU0sRUFBQyxHQUFHTiwrQ0FBTUEsQ0FBQyxnQkFBZ0JDLG9EQUFPQTtJQUV4RSxPQUFPO1FBQ0hFO1FBQUtDO1FBQU1DO1FBQVVDO0lBQ3pCO0FBQ0o7QUFFQSxpRUFBZUosY0FBY0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL25ldGZsaXgtYXBwLy4vaG9va3MvdXNlQ3VycmVudFVzZXIudHM/NDdmNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXNlU3dyIGZyb20gJ3N3cic7XHJcbmltcG9ydCAgZmV0Y2hlciBmcm9tICdAL2xpYi9mZXRjaGVyJztcclxuXHJcblxyXG5jb25zdCB1c2VDdXJyZW50VXNlciA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCB7ZGF0YSxlcnJvciAsIGlzTG9hZGluZyAsIG11dGF0ZX0gPSB1c2VTd3IoJy9hcGkvY3VycmVudCcsIGZldGNoZXIpXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBkYXRhLGVycm9yLGlzTG9hZGluZyxtdXRhdGVcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlQ3VycmVudFVzZXIiXSwibmFtZXMiOlsidXNlU3dyIiwiZmV0Y2hlciIsInVzZUN1cnJlbnRVc2VyIiwiZGF0YSIsImVycm9yIiwiaXNMb2FkaW5nIiwibXV0YXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./hooks/useCurrentUser.ts\n");

/***/ }),

/***/ "./lib/fetcher.ts":
/*!************************!*\
  !*** ./lib/fetcher.ts ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);\naxios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst fetcher = (url)=>axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(url).then((res)=>res.data);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetcher);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvZmV0Y2hlci50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUEwQjtBQUUxQixNQUFNQyxVQUFVLENBQUNDLE1BQWdCRixpREFBUyxDQUFDRSxLQUFLRSxJQUFJLENBQUMsQ0FBQ0MsTUFBUUEsSUFBSUMsSUFBSTtBQUV0RSxpRUFBZUwsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25ldGZsaXgtYXBwLy4vbGliL2ZldGNoZXIudHM/ZmIyMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuY29uc3QgZmV0Y2hlciA9ICh1cmw6IHN0cmluZykgPT4gYXhpb3MuZ2V0KHVybCkudGhlbigocmVzKSA9PiByZXMuZGF0YSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmZXRjaGVyOyJdLCJuYW1lcyI6WyJheGlvcyIsImZldGNoZXIiLCJ1cmwiLCJnZXQiLCJ0aGVuIiwicmVzIiwiZGF0YSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/fetcher.ts\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_useCurrentUser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useCurrentUser */ \"./hooks/useCurrentUser.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_useCurrentUser__WEBPACK_IMPORTED_MODULE_2__]);\n_hooks_useCurrentUser__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nasync function getServerSideProps(context) {\n    const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.getSession)(context);\n    if (!session) {\n        return {\n            redirect: {\n                destination: \"/auth\",\n                permanent: false\n            }\n        };\n    }\n    return {\n        props: {}\n    };\n}\nfunction Home() {\n    const { data: user  } = (0,_hooks_useCurrentUser__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-3xl font-bold underline\",\n                children: \"Main Page\"\n            }, void 0, false, {\n                fileName: \"F:\\\\Projelerim(Numan)\\\\netflix-app\\\\pages\\\\index.tsx\",\n                lineNumber: 25,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Logged in as : \",\n                    user?.name,\n                    \" \"\n                ]\n            }, void 0, true, {\n                fileName: \"F:\\\\Projelerim(Numan)\\\\netflix-app\\\\pages\\\\index.tsx\",\n                lineNumber: 28,\n                columnNumber: 1\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"h-10 w-full bg-white\",\n                onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.signOut)(),\n                children: \"\\xc7ık kanka burdan\"\n            }, void 0, false, {\n                fileName: \"F:\\\\Projelerim(Numan)\\\\netflix-app\\\\pages\\\\index.tsx\",\n                lineNumber: 29,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDc0Q7QUFDRjtBQUc3QyxlQUFnQkcsbUJBQW9CQyxPQUF5QixFQUFDO0lBQ3JFLE1BQU1DLFVBQVUsTUFBTUwsMkRBQVVBLENBQUNJO0lBRWpDLElBQUssQ0FBQ0MsU0FBUTtRQUNaLE9BQU87WUFDTEMsVUFBVTtnQkFDUkMsYUFBYTtnQkFDYkMsV0FBVyxLQUFLO1lBQ2xCO1FBQ0Y7SUFDRixDQUFDO0lBQ0QsT0FBTztRQUNMQyxPQUFPLENBQUU7SUFDWDtBQUNBLENBQUM7QUFDYyxTQUFTQyxPQUFPO0lBQzdCLE1BQU0sRUFBRUMsTUFBTUMsS0FBSSxFQUFFLEdBQUdWLGlFQUFjQTtJQUNyQyxxQkFDRTs7MEJBQ0EsOERBQUNXO2dCQUFHQyxXQUFVOzBCQUErQjs7Ozs7OzBCQUdqRCw4REFBQ0M7O29CQUFFO29CQUFnQkgsTUFBTUk7b0JBQUs7Ozs7Ozs7MEJBQzFCLDhEQUFDQztnQkFBT0gsV0FBVTtnQkFBdUJJLFNBQ3ZDLElBQU1qQix3REFBT0E7MEJBQ2I7Ozs7Ozs7O0FBR04sQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25ldGZsaXgtYXBwLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFBhZ2VDb250ZXh0IH0gZnJvbSAnbmV4dCdcbmltcG9ydCB7IGdldFNlc3Npb24gLCAgc2lnbk91dH0gZnJvbSAnbmV4dC1hdXRoL3JlYWN0J1xuaW1wb3J0IHVzZUN1cnJlbnRVc2VyIGZyb20gJy4uL2hvb2tzL3VzZUN1cnJlbnRVc2VyJ1xuXG5cbmV4cG9ydCBhc3luYyAgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCBjb250ZXh0IDogTmV4dFBhZ2VDb250ZXh0KXtcbmNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKGNvbnRleHQpXG5cbmlmICggIXNlc3Npb24pe1xuICByZXR1cm4ge1xuICAgIHJlZGlyZWN0OiB7XG4gICAgICBkZXN0aW5hdGlvbjogJy9hdXRoJyxcbiAgICAgIHBlcm1hbmVudDogZmFsc2UsXG4gICAgfVxuICB9XG59XG5yZXR1cm4geyBcbiAgcHJvcHM6IHsgfVxufVxufVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgeyBkYXRhOiB1c2VyIH0gPSB1c2VDdXJyZW50VXNlcigpXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkIHVuZGVybGluZVwiPlxuICAgICAgTWFpbiBQYWdlIFxuICAgIDwvaDE+XG48cD5Mb2dnZWQgaW4gYXMgOiB7dXNlcj8ubmFtZX0gPC9wPlxuICAgIDxidXR0b24gY2xhc3NOYW1lPSdoLTEwIHctZnVsbCBiZy13aGl0ZScgb25DbGljaz17XG4gICAgICAoKSA9PiBzaWduT3V0KClcbiAgICB9PsOHxLFrIGthbmthIGJ1cmRhbjwvYnV0dG9uPlxuICAgIDwvPlxuICApXG59XG4iXSwibmFtZXMiOlsiZ2V0U2Vzc2lvbiIsInNpZ25PdXQiLCJ1c2VDdXJyZW50VXNlciIsImdldFNlcnZlclNpZGVQcm9wcyIsImNvbnRleHQiLCJzZXNzaW9uIiwicmVkaXJlY3QiLCJkZXN0aW5hdGlvbiIsInBlcm1hbmVudCIsInByb3BzIiwiSG9tZSIsImRhdGEiLCJ1c2VyIiwiaDEiLCJjbGFzc05hbWUiLCJwIiwibmFtZSIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

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

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ "swr":
/*!**********************!*\
  !*** external "swr" ***!
  \**********************/
/***/ ((module) => {

module.exports = import("swr");;

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