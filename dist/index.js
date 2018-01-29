(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["react-amplitude"] = factory();
	else
		root["react-amplitude"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _console = __webpack_require__(1);

var _debug = false; /**
                     * React Amplitude Analytics
                     *
                     * @package react-amplitude
                     * @author  Rory Garand <rory@mettleup.com>
                     */

var Amplitude = {
  initialize: function initialize(amplitudeTrackingCode) {
    if (!amplitudeTrackingCode) {
      (0, _console.warn)('amplitudeTrackingCode is required in initialize()');
      return;
    }

    (function (e, t) {
      var n = e.amplitude || { _q: [], _iq: {} };var r = t.createElement("script");r.type = "text/javascript";
      r.async = true;r.src = "https://d24n15hnbwhuhn.cloudfront.net/libs/amplitude-3.0.1-min.gz.js";
      r.onload = function () {
        e.amplitude.runQueuedFunctions();
      };var i = t.getElementsByTagName("script")[0];
      i.parentNode.insertBefore(r, i);function s(e, t) {
        e.prototype[t] = function () {
          this._q.push([t].concat(Array.prototype.slice.call(arguments, 0)));
          return this;
        };
      }var o = function o() {
        this._q = [];return this;
      };var a = ["add", "append", "clearAll", "prepend", "set", "setOnce", "unset"];
      for (var u = 0; u < a.length; u++) {
        s(o, a[u]);
      }n.Identify = o;var c = function c() {
        this._q = [];return this;
      };var p = ["setProductId", "setQuantity", "setPrice", "setRevenueType", "setEventProperties"];
      for (var l = 0; l < p.length; l++) {
        s(c, p[l]);
      }n.Revenue = c;var d = ["init", "logEvent", "logRevenue", "setUserId", "setUserProperties", "setOptOut", "setVersionName", "setDomain", "setDeviceId", "setGlobalUserProperties", "identify", "clearUserProperties", "setGroup", "logRevenueV2", "regenerateDeviceId"];
      function v(e) {
        function t(t) {
          e[t] = function () {
            e._q.push([t].concat(Array.prototype.slice.call(arguments, 0)));
          };
        }for (var n = 0; n < d.length; n++) {
          t(d[n]);
        }
      }v(n);n.getInstance = function (e) {
        e = (!e || e.length === 0 ? "$default_instance" : e).toLowerCase();
        if (!n._iq.hasOwnProperty(e)) {
          n._iq[e] = { _q: [] };v(n._iq[e]);
        }return n._iq[e];
      };e.amplitude = n;
    })(window, document);

    amplitude.getInstance().init(amplitudeTrackingCode);
  },

  /**
   * amplitude:
   * Returns the original Amplitude object.
   */
  amplitude: function (_amplitude) {
    function amplitude() {
      return _amplitude.apply(this, arguments);
    }

    amplitude.toString = function () {
      return _amplitude.toString();
    };

    return amplitude;
  }(function () {
    if (arguments.length > 0) {
      amplitude.apply(this, arguments);
      if (_debug) {
        (0, _console.log)('called amplitude(\'arguments\');');
        (0, _console.log)('with arguments: ' + JSON.stringify([].slice.apply(arguments)));
      }
      return;
    }

    return amplitude;
  }),

  /**
   * event:
   * Event tracking
   * @param eventName {String} required
   * @param eventProperties {Object} optional
   */
  event: function event(eventName, eventProperties) {
    if (!eventName) {
      (0, _console.warn)('event name is required');
      return;
    }

    amplitude.getInstance().logEvent(eventName, eventProperties);
  },

  /**
   * resetUserId:
   *
   */
  resetUserId: function resetUserId() {
    amplitude.getInstance().setUserId(null);
    amplitude.getInstance().regenerateDeviceId();
  },

  /**
   * setUserId:
   *
   * @param userID {String} required
   */
  setUserId: function setUserId(userID) {
    if (!userID) {
      (0, _console.warn)('userID is required');
      return;
    }

    amplitude.getInstance().setUserId(userID);
  },

  /**
   * setUserProperties:
   *
   * @userProps userProps {Object} required
   */
  setUserProperties: function setUserProperties(userProps) {
    if (!userProps) {
      (0, _console.warn)('userProps are required');
      return;
    }

    amplitude.getInstance().setUserProperties(userProps);
  }
};

exports.default = Amplitude;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.log = log;
exports.warn = warn;
function log(message) {
	console.info("[react-amplitude] " + message);
}

function warn(message) {
	console.warn("[react-amplitude] " + message);
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(0);


/***/ })
/******/ ]);
});
//# sourceMappingURL=index.js.map