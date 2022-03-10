"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["users"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/users/ChangePasswordForm.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/users/ChangePasswordForm.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_utils_bus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/utils/bus */ "./resources/js/utils/bus.js");
/* harmony import */ var models_components_Form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! models/components/Form */ "./resources/js/models/components/Form.js");
/* harmony import */ var utils_prompts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! utils/prompts */ "./resources/js/utils/prompts.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'ChangePasswordForm',
  computed: {
    isCurrentUser: function isCurrentUser() {
      return this.currentUserId == this.form.id;
    }
  },
  data: function data() {
    return {
      showModal: false,
      clearModal: true,
      form: new models_components_Form__WEBPACK_IMPORTED_MODULE_2__["default"]({
        id: 0,
        current_password: "",
        password: "",
        password_confirmation: ""
      })
    };
  },
  methods: {
    initialize: function initialize(userId) {
      this.form.reset();
      this.form.id = userId;
      this.$refs.modal.open();
    },
    clearErrors: function clearErrors() {
      this.$refs.current_password ? this.$refs.current_password.clearError() : "";
      this.$refs.password.clearError();
      this.$refs.password_confirmation.clearError();
    },
    onHide: function onHide() {
      this.$refs.modal.close();
      this.form.reset();
      this.clearErrors();
    },
    save: function save() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var isConfirmed, url;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0,utils_prompts__WEBPACK_IMPORTED_MODULE_3__.confirm)("Are you sure you want to change this users' password?");

              case 2:
                isConfirmed = _context.sent.value;

                if (isConfirmed) {
                  _context.next = 5;
                  break;
                }

                return _context.abrupt("return");

              case 5:
                url = route('api.users.update-password', _this.form.id);

                _this.form.send("patch", url).then(function (response) {
                  return _this.saved(response);
                })["catch"](function (error) {
                  return _this.saveFailed(error);
                });

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    saved: function saved(response) {
      (0,utils_prompts__WEBPACK_IMPORTED_MODULE_3__.promptSuccess)(response.data.message);
      this.onHide();
    },
    saveFailed: function saveFailed(error) {
      var userId = this.form.id;
      this.form.reset();
      this.form.id = userId;
      (0,utils_prompts__WEBPACK_IMPORTED_MODULE_3__.promptFormErrors)(this.$refs, error);
    }
  },
  props: {
    currentUserId: Number
  },
  mounted: function mounted() {
    src_utils_bus__WEBPACK_IMPORTED_MODULE_1__.bus.$on("users.show-change-password", this.initialize);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/users/CreateUserForm.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/users/CreateUserForm.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_utils_bus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/utils/bus */ "./resources/js/utils/bus.js");
/* harmony import */ var models_components_Form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! models/components/Form */ "./resources/js/models/components/Form.js");
/* harmony import */ var utils_prompts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! utils/prompts */ "./resources/js/utils/prompts.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'CreateUserForm',
  data: function data() {
    return {
      modalShown: false,
      form: new models_components_Form__WEBPACK_IMPORTED_MODULE_2__["default"]({
        email: '',
        name: '',
        password: '',
        password_confirmation: '',
        type: ''
      })
    };
  },
  methods: {
    initialize: function initialize() {
      this.form.reset();
      this.form.type = this.type;
    },
    close: function close() {
      this.form.reset();
      this.$refs.modal.close();
    },
    show: function show(user) {
      this.initialize(user);
      this.modalShown = true;
    },
    save: function save() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var isConfirmed;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                setTimeout(function () {
                  return document.activeElement.blur();
                }, 200);
                _context.next = 3;
                return (0,utils_prompts__WEBPACK_IMPORTED_MODULE_3__.confirm)("Are you sure you want to save this data?", "");

              case 3:
                isConfirmed = _context.sent.value;

                if (isConfirmed) {
                  _context.next = 6;
                  break;
                }

                return _context.abrupt("return");

              case 6:
                _this.form.send("post", route('api.users.store')).then(function (response) {
                  return _this.saved(response);
                })["catch"](function (error) {
                  return _this.failedToSave(error);
                });

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    saved: function saved(response) {
      (0,utils_prompts__WEBPACK_IMPORTED_MODULE_3__.promptSuccess)(response.data.message);
      this.close();
      this.$emit("created");
    },
    failedToSave: function failedToSave(error) {
      (0,utils_prompts__WEBPACK_IMPORTED_MODULE_3__.promptFormErrors)(this.$refs, error);
      this.form.password = "";
      this.form.password_confirmation = "";
    }
  },
  props: {
    title: String,
    type: String
  },
  mounted: function mounted() {
    src_utils_bus__WEBPACK_IMPORTED_MODULE_1__.bus.$on("users.show-create", this.show);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/users/UserForm.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/users/UserForm.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_utils_bus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/utils/bus */ "./resources/js/utils/bus.js");
/* harmony import */ var models_components_Form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! models/components/Form */ "./resources/js/models/components/Form.js");
/* harmony import */ var utils_prompts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! utils/prompts */ "./resources/js/utils/prompts.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'UserForm',
  data: function data() {
    return {
      modalShown: false,
      editable: false,
      form: new models_components_Form__WEBPACK_IMPORTED_MODULE_2__["default"]({
        id: '',
        email: '',
        name: ''
      })
    };
  },
  methods: {
    initialize: function initialize(user) {
      this.form.id = user.id;
      this.form.email = user.email;
      this.form.name = user.name;
    },
    show: function show(user) {
      this.initialize(user);
      this.$refs.modal.open();
      this.editable = false;
    },
    toggleEdit: function toggleEdit() {
      (this.editable = !this.editable) ? this.form.commit() : this.form.reset();
    },
    save: function save() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var isConfirmed;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0,utils_prompts__WEBPACK_IMPORTED_MODULE_3__.confirm)("Are you sure you want to edit this data?", "");

              case 2:
                isConfirmed = _context.sent.value;

                if (isConfirmed) {
                  _context.next = 5;
                  break;
                }

                return _context.abrupt("return");

              case 5:
                _this.form.send("put", route('api.users.update', _this.form.id)).then(function (response) {
                  return _this.saved(response);
                })["catch"](function (error) {
                  return _this.failedToSave(error);
                });

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    saved: function saved(response) {
      (0,utils_prompts__WEBPACK_IMPORTED_MODULE_3__.promptSuccess)(response.data.message);
      this.editable = false;
      this.$emit("updated", this.form);
    },
    failedToSave: function failedToSave(error) {
      (0,utils_prompts__WEBPACK_IMPORTED_MODULE_3__.promptFormErrors)(this.$refs, error);
    }
  },
  props: {
    title: String
  },
  mounted: function mounted() {
    src_utils_bus__WEBPACK_IMPORTED_MODULE_1__.bus.$on("users.show-profile", this.show);
  }
});

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

/***/ "./resources/js/pages/users/ChangePasswordForm.vue":
/*!*********************************************************!*\
  !*** ./resources/js/pages/users/ChangePasswordForm.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ChangePasswordForm_vue_vue_type_template_id_2d6e42bf___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChangePasswordForm.vue?vue&type=template&id=2d6e42bf& */ "./resources/js/pages/users/ChangePasswordForm.vue?vue&type=template&id=2d6e42bf&");
/* harmony import */ var _ChangePasswordForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChangePasswordForm.vue?vue&type=script&lang=js& */ "./resources/js/pages/users/ChangePasswordForm.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ChangePasswordForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ChangePasswordForm_vue_vue_type_template_id_2d6e42bf___WEBPACK_IMPORTED_MODULE_0__.render,
  _ChangePasswordForm_vue_vue_type_template_id_2d6e42bf___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/users/ChangePasswordForm.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/users/CreateUserForm.vue":
/*!*****************************************************!*\
  !*** ./resources/js/pages/users/CreateUserForm.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CreateUserForm_vue_vue_type_template_id_1fb9598a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CreateUserForm.vue?vue&type=template&id=1fb9598a& */ "./resources/js/pages/users/CreateUserForm.vue?vue&type=template&id=1fb9598a&");
/* harmony import */ var _CreateUserForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CreateUserForm.vue?vue&type=script&lang=js& */ "./resources/js/pages/users/CreateUserForm.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CreateUserForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CreateUserForm_vue_vue_type_template_id_1fb9598a___WEBPACK_IMPORTED_MODULE_0__.render,
  _CreateUserForm_vue_vue_type_template_id_1fb9598a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/users/CreateUserForm.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/users/UserForm.vue":
/*!***********************************************!*\
  !*** ./resources/js/pages/users/UserForm.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UserForm_vue_vue_type_template_id_179f3a1f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserForm.vue?vue&type=template&id=179f3a1f& */ "./resources/js/pages/users/UserForm.vue?vue&type=template&id=179f3a1f&");
/* harmony import */ var _UserForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserForm.vue?vue&type=script&lang=js& */ "./resources/js/pages/users/UserForm.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UserForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserForm_vue_vue_type_template_id_179f3a1f___WEBPACK_IMPORTED_MODULE_0__.render,
  _UserForm_vue_vue_type_template_id_179f3a1f___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/users/UserForm.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/users/ChangePasswordForm.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/pages/users/ChangePasswordForm.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChangePasswordForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ChangePasswordForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/users/ChangePasswordForm.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChangePasswordForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/users/CreateUserForm.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/pages/users/CreateUserForm.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateUserForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CreateUserForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/users/CreateUserForm.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateUserForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/users/UserForm.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/pages/users/UserForm.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/users/UserForm.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/users/ChangePasswordForm.vue?vue&type=template&id=2d6e42bf&":
/*!****************************************************************************************!*\
  !*** ./resources/js/pages/users/ChangePasswordForm.vue?vue&type=template&id=2d6e42bf& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChangePasswordForm_vue_vue_type_template_id_2d6e42bf___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChangePasswordForm_vue_vue_type_template_id_2d6e42bf___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChangePasswordForm_vue_vue_type_template_id_2d6e42bf___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ChangePasswordForm.vue?vue&type=template&id=2d6e42bf& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/users/ChangePasswordForm.vue?vue&type=template&id=2d6e42bf&");


/***/ }),

/***/ "./resources/js/pages/users/CreateUserForm.vue?vue&type=template&id=1fb9598a&":
/*!************************************************************************************!*\
  !*** ./resources/js/pages/users/CreateUserForm.vue?vue&type=template&id=1fb9598a& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateUserForm_vue_vue_type_template_id_1fb9598a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateUserForm_vue_vue_type_template_id_1fb9598a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateUserForm_vue_vue_type_template_id_1fb9598a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CreateUserForm.vue?vue&type=template&id=1fb9598a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/users/CreateUserForm.vue?vue&type=template&id=1fb9598a&");


/***/ }),

/***/ "./resources/js/pages/users/UserForm.vue?vue&type=template&id=179f3a1f&":
/*!******************************************************************************!*\
  !*** ./resources/js/pages/users/UserForm.vue?vue&type=template&id=179f3a1f& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserForm_vue_vue_type_template_id_179f3a1f___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserForm_vue_vue_type_template_id_179f3a1f___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserForm_vue_vue_type_template_id_179f3a1f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserForm.vue?vue&type=template&id=179f3a1f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/users/UserForm.vue?vue&type=template&id=179f3a1f&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/users/ChangePasswordForm.vue?vue&type=template&id=2d6e42bf&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/users/ChangePasswordForm.vue?vue&type=template&id=2d6e42bf& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "inline-block" },
    [
      _c(
        "modal",
        {
          ref: "modal",
          attrs: { title: "Change Password" },
          on: { hidden: _vm.onHide },
          model: {
            value: _vm.showModal,
            callback: function ($$v) {
              _vm.showModal = $$v
            },
            expression: "showModal",
          },
        },
        [
          _c(
            "form",
            {
              staticClass: "row text-left",
              on: {
                submit: function ($event) {
                  $event.preventDefault()
                },
              },
            },
            [
              _c(
                "div",
                { staticClass: "col-lg-12" },
                [
                  _vm.isCurrentUser
                    ? _c("form-input", {
                        ref: "current_password",
                        attrs: {
                          placeholder: "Current password",
                          label: "Current password",
                          type: "password",
                        },
                        model: {
                          value: _vm.form.current_password,
                          callback: function ($$v) {
                            _vm.$set(_vm.form, "current_password", $$v)
                          },
                          expression: "form.current_password",
                        },
                      })
                    : _vm._e(),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-lg-12" },
                [
                  _c("form-input", {
                    ref: "password",
                    attrs: {
                      placeholder: "New password",
                      label: "New password",
                      type: "password",
                    },
                    model: {
                      value: _vm.form.password,
                      callback: function ($$v) {
                        _vm.$set(_vm.form, "password", $$v)
                      },
                      expression: "form.password",
                    },
                  }),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-lg-12" },
                [
                  _c("form-input", {
                    ref: "password_confirmation",
                    attrs: {
                      placeholder: "Confirm password",
                      label: "Confirm password",
                      type: "password",
                    },
                    model: {
                      value: _vm.form.password_confirmation,
                      callback: function ($$v) {
                        _vm.$set(_vm.form, "password_confirmation", $$v)
                      },
                      expression: "form.password_confirmation",
                    },
                  }),
                ],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "col-lg-12" }, [
                !_vm.form.isRequesting
                  ? _c(
                      "button",
                      {
                        staticClass:
                          "btn btn-warning btn-rounded long float-right",
                        attrs: { type: "submit" },
                        on: { click: _vm.save },
                      },
                      [
                        _c("i", { staticClass: "fa fa-save mr-1" }),
                        _vm._v(" Save\n                "),
                      ]
                    )
                  : _c(
                      "button",
                      {
                        staticClass:
                          "disabled btn btn-warning btn-rounded long float-right",
                        attrs: { disabled: "" },
                      },
                      [
                        _c("i", { staticClass: "fa fa-spinner fa-spin mr-2" }),
                        _vm._v(" Please wait\n                "),
                      ]
                    ),
              ]),
            ]
          ),
        ]
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/users/CreateUserForm.vue?vue&type=template&id=1fb9598a&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/users/CreateUserForm.vue?vue&type=template&id=1fb9598a& ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "modal",
    {
      ref: "modal",
      attrs: { title: _vm.title, small: false },
      on: {
        hidden: function ($event) {
          _vm.modalShown = false
        },
      },
      model: {
        value: _vm.modalShown,
        callback: function ($$v) {
          _vm.modalShown = $$v
        },
        expression: "modalShown",
      },
    },
    [
      _c(
        "form",
        {
          staticClass: "text-left pt-4 pb-4 container",
          on: {
            submit: function ($event) {
              $event.preventDefault()
              return _vm.save.apply(null, arguments)
            },
          },
        },
        [
          _c("div", { staticClass: "row" }, [
            _c(
              "div",
              { staticClass: "col-sm-12" },
              [
                _c("form-input", {
                  ref: "email",
                  attrs: { label: "Email", placeholder: "Email" },
                  model: {
                    value: _vm.form.email,
                    callback: function ($$v) {
                      _vm.$set(_vm.form, "email", $$v)
                    },
                    expression: "form.email",
                  },
                }),
                _vm._v(" "),
                _c("form-input", {
                  ref: "name",
                  attrs: { label: "Name", placeholder: "Name" },
                  model: {
                    value: _vm.form.name,
                    callback: function ($$v) {
                      _vm.$set(_vm.form, "name", $$v)
                    },
                    expression: "form.name",
                  },
                }),
                _vm._v(" "),
                _c("form-input", {
                  ref: "password",
                  attrs: {
                    label: "Password",
                    placeholder: "Password",
                    type: "password",
                  },
                  model: {
                    value: _vm.form.password,
                    callback: function ($$v) {
                      _vm.$set(_vm.form, "password", $$v)
                    },
                    expression: "form.password",
                  },
                }),
                _vm._v(" "),
                _c("form-input", {
                  ref: "password_confirmation",
                  attrs: {
                    label: "Password Confirmation",
                    placeholder: "Password Confirmation",
                    type: "password",
                  },
                  model: {
                    value: _vm.form.password_confirmation,
                    callback: function ($$v) {
                      _vm.$set(_vm.form, "password_confirmation", $$v)
                    },
                    expression: "form.password_confirmation",
                  },
                }),
              ],
              1
            ),
            _vm._v(" "),
            _c("div", { staticClass: "col-sm-12" }, [
              !_vm.form.isRequesting
                ? _c(
                    "button",
                    {
                      staticClass:
                        "btn btn-warning btn-rounded long float-right",
                      attrs: { type: "submit" },
                    },
                    [
                      _c("i", { staticClass: "fa fa-save mr-1" }),
                      _vm._v(" Save\n                "),
                    ]
                  )
                : _c(
                    "button",
                    {
                      staticClass:
                        "disabled btn btn-warning btn-rounded long float-right",
                      attrs: { disabled: "" },
                    },
                    [
                      _c("i", { staticClass: "fas fa-spin fa-spinner mr-2" }),
                      _vm._v(" Please wait\n                "),
                    ]
                  ),
            ]),
          ]),
        ]
      ),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/users/UserForm.vue?vue&type=template&id=179f3a1f&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/users/UserForm.vue?vue&type=template&id=179f3a1f& ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "modal",
    {
      ref: "modal",
      attrs: { title: _vm.title, small: false },
      on: {
        hidden: function ($event) {
          _vm.modalShown = false
        },
      },
      model: {
        value: _vm.modalShown,
        callback: function ($$v) {
          _vm.modalShown = $$v
        },
        expression: "modalShown",
      },
    },
    [
      _c("div", { staticClass: "mt-1" }, [
        !_vm.editable
          ? _c(
              "div",
              {
                staticClass: "btn btn-link btn-sm text-blue float-right",
                on: { click: _vm.toggleEdit },
              },
              [
                _c("i", { staticClass: "fa fa-edit" }),
                _vm._v(" Edit\n        "),
              ]
            )
          : _vm._e(),
        _vm._v(" "),
        _vm.editable && !_vm.form.isRequesting
          ? _c(
              "div",
              {
                staticClass: "btn btn-link btn-sm text-danger float-right",
                on: { click: _vm.toggleEdit },
              },
              [
                _c("i", { staticClass: "fa fa-ban" }),
                _vm._v(" Cancel\n        "),
              ]
            )
          : _vm._e(),
      ]),
      _vm._v(" "),
      _vm.editable
        ? _c(
            "form",
            {
              staticClass: "text-left pt-4 pb-4 container",
              on: {
                submit: function ($event) {
                  $event.preventDefault()
                  return _vm.save.apply(null, arguments)
                },
              },
            },
            [
              _c("div", { staticClass: "row" }, [
                _c(
                  "div",
                  { staticClass: "col-sm-12" },
                  [
                    _c("form-input", {
                      ref: "email",
                      attrs: { label: "Email", placeholder: "Email" },
                      model: {
                        value: _vm.form.email,
                        callback: function ($$v) {
                          _vm.$set(_vm.form, "email", $$v)
                        },
                        expression: "form.email",
                      },
                    }),
                    _vm._v(" "),
                    _c("form-input", {
                      ref: "name",
                      attrs: { label: "Name", placeholder: "Name" },
                      model: {
                        value: _vm.form.name,
                        callback: function ($$v) {
                          _vm.$set(_vm.form, "name", $$v)
                        },
                        expression: "form.name",
                      },
                    }),
                  ],
                  1
                ),
                _vm._v(" "),
                _c("div", { staticClass: "col-sm-12" }, [
                  !_vm.form.isRequesting
                    ? _c(
                        "button",
                        {
                          staticClass:
                            "btn btn-warning btn-rounded long float-right",
                          attrs: { type: "submit" },
                        },
                        [
                          _c("i", { staticClass: "fa fa-save mr-1" }),
                          _vm._v(" Save\n                "),
                        ]
                      )
                    : _c(
                        "button",
                        {
                          staticClass:
                            "disabled btn btn-warning btn-rounded long float-right",
                          attrs: { disabled: "" },
                        },
                        [
                          _c("i", {
                            staticClass: "fas fa-spin fa-spinner mr-2",
                          }),
                          _vm._v(" Please wait\n                "),
                        ]
                      ),
                ]),
              ]),
            ]
          )
        : _c(
            "div",
            { staticClass: "text-left pt-4 pb-4" },
            [
              _c("labeled-data", {
                attrs: { label: "Email", value: _vm.form.email },
              }),
              _vm._v(" "),
              _c("labeled-data", {
                attrs: { label: "Name", value: _vm.form.name },
              }),
            ],
            1
          ),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);