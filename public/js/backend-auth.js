"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["backend-auth"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/auth/LoginForm.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/auth/LoginForm.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var models_components_Form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! models/components/Form */ "./resources/js/models/components/Form.js");
/* harmony import */ var utils_prompts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! utils/prompts */ "./resources/js/utils/prompts.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'LoginForm',
  data: function data() {
    return {
      form: new models_components_Form__WEBPACK_IMPORTED_MODULE_0__["default"]({
        email: '',
        password: '',
        remember: false
      })
    };
  },
  methods: {
    clearPassword: function clearPassword() {
      return this.form.password = '';
    },
    signIn: function signIn(event) {
      var _this = this;

      event.preventDefault();
      this.form.send("post", route('api.auth.login')).then(function (response) {
        return _this.signInSucceeded(response);
      })["catch"](function (error) {
        return _this.signInFailed(error);
      });
    },
    signInSucceeded: function signInSucceeded(response) {
      location.reload();
    },
    signInFailed: function signInFailed(error) {
      (0,utils_prompts__WEBPACK_IMPORTED_MODULE_1__.promptFormErrors)(this.$refs, error);
      this.clearPassword();
    }
  }
});

/***/ }),

/***/ "./resources/js/models/components/Error.js":
/*!*************************************************!*\
  !*** ./resources/js/models/components/Error.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Error)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Error = /*#__PURE__*/function () {
  function Error() {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

    _classCallCheck(this, Error);

    this.value = value;
  }

  _createClass(Error, [{
    key: "isEmpty",
    value: function isEmpty() {
      if (typeof this.value === "string") {
        return this.value.trim().length == 0;
      } else if (Array.isArray(this.value)) {
        return this.value.length == 0;
      }

      return this.value == null;
    }
  }, {
    key: "setValue",
    value: function setValue(value) {
      this.value = value;
    }
  }, {
    key: "getMessage",
    value: function getMessage() {
      return Array.isArray(this.value) ? this.value[0] : this.value;
    }
  }, {
    key: "clear",
    value: function clear() {
      this.value = null;
    }
  }]);

  return Error;
}();



/***/ }),

/***/ "./resources/js/models/components/Form.js":
/*!************************************************!*\
  !*** ./resources/js/models/components/Form.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Form)
/* harmony export */ });
/* harmony import */ var utils_network__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! utils/network */ "./resources/js/utils/network.js");
var _excluded = ["originalData"];

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }



var Form = /*#__PURE__*/function () {
  function Form(data) {
    _classCallCheck(this, Form);

    this.isRequesting = false;
    this.mapData(data);
  }

  _createClass(Form, [{
    key: "mapData",
    value: function mapData(data) {
      var originalData = data.originalData,
          props = _objectWithoutProperties(data, _excluded);

      this.commitedData = _objectSpread({}, props);
      this.reset();
    }
  }, {
    key: "getProtectedKeys",
    value: function getProtectedKeys() {
      return ["commitedData", "isRequesting"];
    }
  }, {
    key: "isKeyProtected",
    value: function isKeyProtected(key) {
      return this.getProtectedKeys().includes(key);
    }
  }, {
    key: "commit",
    value: function commit() {
      var _this = this;

      Object.keys(this.commitedData).forEach(function (key) {
        if (_this.isKeyProtected(key)) {
          return;
        } else if (_this[key] instanceof Form) {
          _this.commitedData[key] = new Form(_this[key].getData());
        } else if (Array.isArray(_this[key])) {
          _this.commitedData[key] = JSON.parse(JSON.stringify(_this[key]));
        } else if (_typeof(_this[key]) === "object" && _this[key] !== null && _this[key] !== undefined) {
          _this.commitedData[key] = JSON.parse(JSON.stringify(_this[key]));
        } else {
          _this.commitedData[key] = _this[key];
        }
      });
    }
  }, {
    key: "reset",
    value: function reset() {
      var _this2 = this;

      Object.keys(this.commitedData).forEach(function (key) {
        if (_this2.isKeyProtected(key)) {
          return;
        } else if (_this2.commitedData[key] instanceof Form) {
          _this2[key] = new Form(_this2.commitedData[key].getData());
        } else if (Array.isArray(_this2.commitedData[key])) {
          _this2[key] = JSON.parse(JSON.stringify(_this2.commitedData[key]));
        } else if (_typeof(_this2.commitedData[key]) === "object" && _this2.commitedData[key] !== null && _this2.commitedData[key] !== undefined) {
          _this2[key] = JSON.parse(JSON.stringify(_this2.commitedData[key]));
          ;
        } else {
          _this2[key] = _this2.commitedData[key];
        }
      });
    }
  }, {
    key: "getData",
    value: function getData() {
      var _this3 = this;

      var data = {};
      Object.keys(this.commitedData).forEach(function (key) {
        return data[key] = _this3[key];
      });
      return data;
    }
  }, {
    key: "send",
    value: function send(method, url, config) {
      var _this4 = this;

      for (var _len = arguments.length, options = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
        options[_key - 3] = arguments[_key];
      }

      config = _objectSpread({
        data: this.getData()
      }, config);
      return new Promise(function (resolve, reject) {
        _this4.isRequesting = true;

        utils_network__WEBPACK_IMPORTED_MODULE_0__.send.apply(void 0, [method, url, config].concat(options)).then(resolve)["catch"](reject)["finally"](function () {
          return _this4.isRequesting = false;
        });
      });
    }
  }]);

  return Form;
}();



/***/ }),

/***/ "./resources/js/utils/network.js":
/*!***************************************!*\
  !*** ./resources/js/utils/network.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "destroy": () => (/* binding */ destroy),
/* harmony export */   "get": () => (/* binding */ get),
/* harmony export */   "patch": () => (/* binding */ patch),
/* harmony export */   "post": () => (/* binding */ post),
/* harmony export */   "put": () => (/* binding */ put),
/* harmony export */   "send": () => (/* binding */ send)
/* harmony export */ });
function get(url, config) {
  for (var _len = arguments.length, options = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    options[_key - 2] = arguments[_key];
  }

  return send("get", url, config, options);
}
function post(url, config) {
  for (var _len2 = arguments.length, options = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
    options[_key2 - 2] = arguments[_key2];
  }

  return send("post", url, config, options);
}
function put(url, config) {
  for (var _len3 = arguments.length, options = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
    options[_key3 - 2] = arguments[_key3];
  }

  return send("put", url, config, options);
}
function patch(url, config) {
  for (var _len4 = arguments.length, options = new Array(_len4 > 2 ? _len4 - 2 : 0), _key4 = 2; _key4 < _len4; _key4++) {
    options[_key4 - 2] = arguments[_key4];
  }

  return send("patch", url, config, options);
}
function destroy(url, config) {
  for (var _len5 = arguments.length, options = new Array(_len5 > 2 ? _len5 - 2 : 0), _key5 = 2; _key5 < _len5; _key5++) {
    options[_key5 - 2] = arguments[_key5];
  }

  return send("delete", url, config, options);
}
function send(method, url, config) {
  var request = Object.assign({}, config, {
    method: method,
    url: url,
    config: config
  });
  return axios(request);
}

/***/ }),

/***/ "./resources/js/utils/prompts.js":
/*!***************************************!*\
  !*** ./resources/js/utils/prompts.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "confirm": () => (/* binding */ confirm),
/* harmony export */   "promptErrors": () => (/* binding */ promptErrors),
/* harmony export */   "promptFormErrors": () => (/* binding */ promptFormErrors),
/* harmony export */   "promptSuccess": () => (/* binding */ promptSuccess),
/* harmony export */   "refreshOrRedirect": () => (/* binding */ refreshOrRedirect)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var _redirects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./redirects */ "./resources/js/utils/redirects.js");
/* harmony import */ var models_components_Error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! models/components/Error */ "./resources/js/models/components/Error.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }





function swal() {
  return vue__WEBPACK_IMPORTED_MODULE_2__["default"].swal.apply(vue__WEBPACK_IMPORTED_MODULE_2__["default"], arguments);
}

;
function confirm(title) {
  var text = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'question';
  var buttons = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  buttons = buttons || {
    confirm: "Yes",
    cancel: "No"
  };
  return swal({
    type: type,
    title: title,
    text: text,
    confirmButtonText: buttons.confirm,
    cancelButtonText: buttons.cancel,
    showCancelButton: true
  });
}
function promptSuccess(message) {
  var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "Success";
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  if (_typeof(message) === "object") {
    title = message.title;
    message = message.message;
  }

  return swal(_objectSpread(_objectSpread({}, options), {}, {
    type: "success",
    title: title,
    text: message,
    confirmButtonText: 'Okay'
  }));
}
function promptFormErrors(refs, error) {
  var log = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  if (window.debug_log_enabled === true || window.debug_log_enabled === "true" || log) console.log(error);
  var data = error.response.data;
  promptErrors(data.message);
  if (!data.errors) return;

  for (var key in data.errors) {
    if (!refs[key]) continue;
    var field = Array.isArray(refs[key]) ? refs[key][0] : refs[key];
    field.error instanceof models_components_Error__WEBPACK_IMPORTED_MODULE_1__["default"] ? field.error.setValue(data.errors[key]) : field.error = new models_components_Error__WEBPACK_IMPORTED_MODULE_1__["default"](data.errors[key]);
  }
}
function promptErrors(message) {
  var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "Something went wrong";

  if (_typeof(message) === "object") {
    title = message.title;
    message = message.message;
  }

  return swal({
    type: "error",
    title: title,
    text: message,
    confirmButtonText: 'Okay'
  });
}
function refreshOrRedirect(title, text, route) {
  var type = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";
  var button = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
  button = button || {
    confirm: 'Yes',
    cancel: 'No'
  };
  return swal({
    type: type,
    title: title,
    text: text,
    showCancelButton: true,
    confirmButtonText: button.confirm,
    cancelButtonText: button.cancel,
    allowOutsideClick: false
  }).then(function (response) {
    return response.value ? (0,_redirects__WEBPACK_IMPORTED_MODULE_0__.reload)() : (0,_redirects__WEBPACK_IMPORTED_MODULE_0__.redirect)(route);
  });
}

/***/ }),

/***/ "./resources/js/utils/redirects.js":
/*!*****************************************!*\
  !*** ./resources/js/utils/redirects.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "redirect": () => (/* binding */ redirect),
/* harmony export */   "reload": () => (/* binding */ reload)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function reload() {
  var timeout = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  setTimeout(function () {
    return location.reload();
  }, timeout);
}
function redirect(link) {
  var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  link = _typeof(link) === "object" ? route(link.name, link.params || {}) : link;
  timeout ? setTimeout(function () {
    return location.href = link;
  }, timeout) : location.href = link;
}

/***/ }),

/***/ "./resources/js/pages/auth/LoginForm.vue":
/*!***********************************************!*\
  !*** ./resources/js/pages/auth/LoginForm.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _LoginForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LoginForm.vue?vue&type=script&lang=js& */ "./resources/js/pages/auth/LoginForm.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns
;



/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _LoginForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/auth/LoginForm.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/auth/LoginForm.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/pages/auth/LoginForm.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./LoginForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/auth/LoginForm.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ })

}]);