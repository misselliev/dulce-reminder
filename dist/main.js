/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("document.addEventListener('DOMContentLoaded', function () {\n  var elems = document.querySelectorAll('.sidenav');\n  var instances = M.Sidenav.init(elems, {});\n});\n\nwindow.onload = function () {\n  var container = document.getElementById('main');\n  var btnCont = Object.assign(document.createElement('div'), {\n    className: 'container btn-cont'\n  }, {\n    id: 'btn-container'\n  });\n  var btn_create = Object.assign(document.createElement('button'), {\n    className: 'btn'\n  }, {\n    id: 'btn-create'\n  }, {\n    innerText: 'Create Task'\n  });\n  var btn_clear = Object.assign(document.createElement('button'), {\n    className: 'btn'\n  }, {\n    id: 'btn-clear'\n  }, {\n    innerText: 'Clear List'\n  });\n  var listCont = Object.assign(document.createElement('div'), {\n    className: 'container'\n  }, {\n    id: 'list-container'\n  });\n  var listUl = Object.assign(document.createElement('ul'), {\n    id: 'list-ul'\n  });\n  container.appendChild(btnCont);\n  btnCont.appendChild(btn_create);\n  btnCont.appendChild(btn_clear);\n  container.appendChild(listCont);\n  listCont.appendChild(listUl);\n  btn_create.addEventListener('click', storeData);\n  btn_clear.addEventListener('click', clearData);\n};\n\nvar counter = 0;\nvar todolist = [];\n\nfunction storeData() {\n  var input = document.getElementById('todo').value;\n  localStorage.setItem(counter, input);\n  console.log('storing your data...');\n  todolist.push(input);\n  console.log(todolist);\n  displayData(todolist);\n  counter += 1;\n}\n\nfunction displayData(todolist) {\n  console.log('displaying your to-dos...');\n  var list = document.getElementById('list-ul');\n  list.style = 'border: solid 1px pink';\n\n  for (var i = 0; i < localStorage.length; i++) {\n    var text = localStorage.getItem(i);\n    var item = \"<li>\".concat(text, \"</li>\");\n    item.style = 'margin-right: 10px;';\n    list.insertAdjacentHTML('beforeend', item);\n  }\n}\n\nfunction clearData() {\n  console.log('cleaning time!');\n  todolist = [];\n  localStorage.clear();\n}\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ })

/******/ });