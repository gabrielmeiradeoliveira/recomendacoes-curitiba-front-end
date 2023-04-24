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

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nfunction Home() {\n    function handleSubmit(e) {\n        //Evita o recarregamento da página quando o form é enviado.\n        e.preventDefault();\n        //Lê e manipula os dados do form.\n        const form = e.target;\n        const formData = new FormData(form);\n        //Envia os dados para uma API\n        fetch(\"/endereco-da-API\", {\n            method: form.method,\n            body: formData\n        });\n        //Transforma os dados do form em JSON\n        const formJson = Object.fromEntries(formData.entries());\n        console.log(formJson);\n    }\n    const pesquisaTextAreaId = (0,react__WEBPACK_IMPORTED_MODULE_2__.useId)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Procuritiba\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Matheus\\\\Documents\\\\projects\\\\procuritiba\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Encontre o rol\\xea ideal para voc\\xea!\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Matheus\\\\Documents\\\\projects\\\\procuritiba\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Matheus\\\\Documents\\\\projects\\\\procuritiba\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Matheus\\\\Documents\\\\projects\\\\procuritiba\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Matheus\\\\Documents\\\\projects\\\\procuritiba\\\\src\\\\pages\\\\index.js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                method: \"post\",\n                onSubmit: handleSubmit,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"form-items-container\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            htmlFor: pesquisaTextAreaId,\n                            children: \"Quais os requisitos para o rol\\xea de hoje?\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Matheus\\\\Documents\\\\projects\\\\procuritiba\\\\src\\\\pages\\\\index.js\",\n                            lineNumber: 38,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                            id: pesquisaTextAreaId,\n                            name: \"userRoleDetails\",\n                            rows: 4,\n                            cols: 40\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Matheus\\\\Documents\\\\projects\\\\procuritiba\\\\src\\\\pages\\\\index.js\",\n                            lineNumber: 41,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            children: \"pesquisar\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Matheus\\\\Documents\\\\projects\\\\procuritiba\\\\src\\\\pages\\\\index.js\",\n                            lineNumber: 48,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Matheus\\\\Documents\\\\projects\\\\procuritiba\\\\src\\\\pages\\\\index.js\",\n                    lineNumber: 37,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Matheus\\\\Documents\\\\projects\\\\procuritiba\\\\src\\\\pages\\\\index.js\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFJTUE7QUFKc0I7QUFFRTtBQUlmLFNBQVNHLE9BQU87SUFFN0IsU0FBU0MsYUFBYUMsQ0FBQyxFQUFFO1FBQ3ZCLDJEQUEyRDtRQUMzREEsRUFBRUMsY0FBYztRQUVoQixpQ0FBaUM7UUFDakMsTUFBTUMsT0FBT0YsRUFBRUcsTUFBTTtRQUNyQixNQUFNQyxXQUFXLElBQUlDLFNBQVNIO1FBRTlCLDZCQUE2QjtRQUM3QkksTUFBTSxvQkFBb0I7WUFBRUMsUUFBUUwsS0FBS0ssTUFBTTtZQUFFQyxNQUFNSjtRQUFTO1FBRWhFLHFDQUFxQztRQUNyQyxNQUFNSyxXQUFXQyxPQUFPQyxXQUFXLENBQUNQLFNBQVNRLE9BQU87UUFDcERDLFFBQVFDLEdBQUcsQ0FBQ0w7SUFDZDtJQUVBLE1BQU1NLHFCQUFxQmxCLDRDQUFLQTtJQUVoQyxxQkFDRTs7MEJBQ0UsOERBQUNELGtEQUFJQTs7a0NBQ0gsOERBQUNvQjtrQ0FBTTs7Ozs7O2tDQUNQLDhEQUFDQzt3QkFBS0MsTUFBSzt3QkFBY0MsU0FBUTs7Ozs7O2tDQUNqQyw4REFBQ0Y7d0JBQUtDLE1BQUs7d0JBQVdDLFNBQVE7Ozs7OztrQ0FDOUIsOERBQUNDO3dCQUFLQyxLQUFJO3dCQUFPQyxNQUFLOzs7Ozs7Ozs7Ozs7MEJBR3hCLDhEQUFDcEI7Z0JBQUtLLFFBQU87Z0JBQU9nQixVQUFVeEI7MEJBQzVCLDRFQUFDeUI7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDQzs0QkFBTUMsU0FBU1o7c0NBQW9COzs7Ozs7c0NBR3BDLDhEQUFDYTs0QkFDQ0MsSUFBSWQ7NEJBQ0pHLE1BQUs7NEJBQ0xZLE1BQU07NEJBQ05DLE1BQU07Ozs7OztzQ0FHUiw4REFBQ0M7NEJBQU9DLE1BQUs7c0NBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLaEMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2N1cml0aWJhLy4vc3JjL3BhZ2VzL2luZGV4LmpzPzQwODAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHsgSW50ZXIgfSBmcm9tICduZXh0L2ZvbnQvZ29vZ2xlJ1xuaW1wb3J0IHsgdXNlSWQgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IGludGVyID0gSW50ZXIoeyBzdWJzZXRzOiBbJ2xhdGluJ10gfSlcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcblxuICBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoZSkge1xuICAgIC8vRXZpdGEgbyByZWNhcnJlZ2FtZW50byBkYSBww6FnaW5hIHF1YW5kbyBvIGZvcm0gw6kgZW52aWFkby5cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAvL0zDqiBlIG1hbmlwdWxhIG9zIGRhZG9zIGRvIGZvcm0uXG4gICAgY29uc3QgZm9ybSA9IGUudGFyZ2V0O1xuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGZvcm0pO1xuXG4gICAgLy9FbnZpYSBvcyBkYWRvcyBwYXJhIHVtYSBBUElcbiAgICBmZXRjaCgnL2VuZGVyZWNvLWRhLUFQSScsIHsgbWV0aG9kOiBmb3JtLm1ldGhvZCwgYm9keTogZm9ybURhdGEgfSk7XG5cbiAgICAvL1RyYW5zZm9ybWEgb3MgZGFkb3MgZG8gZm9ybSBlbSBKU09OXG4gICAgY29uc3QgZm9ybUpzb24gPSBPYmplY3QuZnJvbUVudHJpZXMoZm9ybURhdGEuZW50cmllcygpKTtcbiAgICBjb25zb2xlLmxvZyhmb3JtSnNvbik7XG4gIH1cblxuICBjb25zdCBwZXNxdWlzYVRleHRBcmVhSWQgPSB1c2VJZCgpO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+UHJvY3VyaXRpYmE8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiRW5jb250cmUgbyByb2zDqiBpZGVhbCBwYXJhIHZvY8OqIVwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIFxuICAgICAgPGZvcm0gbWV0aG9kPVwicG9zdFwiIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0taXRlbXMtY29udGFpbmVyXCI+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9e3Blc3F1aXNhVGV4dEFyZWFJZH0+XG4gICAgICAgICAgICBRdWFpcyBvcyByZXF1aXNpdG9zIHBhcmEgbyByb2zDqiBkZSBob2plP1xuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICBpZD17cGVzcXVpc2FUZXh0QXJlYUlkfVxuICAgICAgICAgICAgbmFtZT1cInVzZXJSb2xlRGV0YWlsc1wiXG4gICAgICAgICAgICByb3dzPXs0fVxuICAgICAgICAgICAgY29scz17NDB9XG4gICAgICAgICAgLz4gICAgICBcbiAgICAgICAgICBcbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5wZXNxdWlzYXI8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Zvcm0+XG4gICAgPC8+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJpbnRlciIsIkhlYWQiLCJ1c2VJZCIsIkhvbWUiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJmb3JtIiwidGFyZ2V0IiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsImZvcm1Kc29uIiwiT2JqZWN0IiwiZnJvbUVudHJpZXMiLCJlbnRyaWVzIiwiY29uc29sZSIsImxvZyIsInBlc3F1aXNhVGV4dEFyZWFJZCIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibGluayIsInJlbCIsImhyZWYiLCJvblN1Ym1pdCIsImRpdiIsImNsYXNzTmFtZSIsImxhYmVsIiwiaHRtbEZvciIsInRleHRhcmVhIiwiaWQiLCJyb3dzIiwiY29scyIsImJ1dHRvbiIsInR5cGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.js\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

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
var __webpack_exports__ = (__webpack_exec__("./src/pages/index.js"));
module.exports = __webpack_exports__;

})();