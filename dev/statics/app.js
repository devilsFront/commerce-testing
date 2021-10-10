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
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/scripts/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/scripts/app.js":
/*!*******************************!*\
  !*** ./assets/scripts/app.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (document.querySelector('[data-element= "header"]')) {
  setTimeout(headerInit, 0);
}

var pathStatics = '/statics';
var pathImg = "".concat(pathStatics, "/img/");

function headerInit() {
  var headerBurger = document.querySelector('[data-element= "header__burger"]');
  var header = document.querySelector('[data-element= "header"]');
  var headerLogo = header.querySelector('[data-element= "header__logo-image"]');
  var headerMobileLogo = header.querySelector('[data-element= "header__logo-source"]');
  headerBurger.addEventListener('click', toggleMenu);

  function toggleMenu() {
    header.classList.toggle('mobile-menu_active');
    header.classList.remove('header_white');
    headerLogo.src = "".concat(pathImg, "header/logo.svg");
    headerMobileLogo.srcset = "".concat(pathImg, "header/mobile-logo.svg");

    if (headerWhite) {
      header.classList.add('header_fixed');
      changeMenuPosition();
    } else {
      changeMenuColor();
    }
  }

  window.addEventListener('resize', resizeWindow);

  function resizeWindow() {
    if (document.documentElement.clientWidth > 900 && header.classList.contains('mobile-menu_active')) {
      header.classList.remove('mobile-menu_active');

      if (headerWhite) {
        header.classList.add('header_fixed');
        changeMenuPosition();
      } else {
        changeMenuColor();
      }
    }
  }

  var headerWhite;

  if (header.classList.contains('header_white')) {
    window.addEventListener('scroll', changeMenuPosition);
    headerWhite = true;
  } else {
    window.addEventListener('scroll', changeMenuColor);
    headerWhite = false;
    changeMenuColor();
  }

  function changeMenuPosition() {
    if (!header.classList.contains('mobile-menu_active')) {
      if (pageYOffset > 0) {
        header.classList.add('header_white', 'header_fixed');
        headerLogo.src = "".concat(pathImg, "header/logo-black.svg");
        headerMobileLogo.srcset = "".concat(pathImg, "header/mobile-logo-black.svg");
      } else {
        headerLogo.src = "".concat(pathImg, "header/logo-black.svg");
        headerMobileLogo.srcset = "".concat(pathImg, "header/mobile-logo-black.svg");
        header.classList.remove('header_fixed');
        header.classList.add('header_white');
      }
    }
  }

  function changeMenuColor() {
    if (!header.classList.contains('mobile-menu_active')) {
      if (pageYOffset > 0) {
        header.classList.add('header_white');
        headerLogo.src = "".concat(pathImg, "header/logo-black.svg");
        headerMobileLogo.srcset = "".concat(pathImg, "header/mobile-logo-black.svg");
      } else {
        header.classList.remove('header_white');
        headerLogo.src = "".concat(pathImg, "header/logo.svg");
        headerMobileLogo.srcset = "".concat(pathImg, "header/mobile-logo.svg");
      }
    }
  }

  ymaps.ready(init);

  function init() {
    var myMap = new ymaps.Map("map", {
      center: [53.199999, 50.122031],
      zoom: 7
    });
  }
}

/***/ })

/******/ });
//# sourceMappingURL=app.js.map