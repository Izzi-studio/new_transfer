"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_profiles_client_views_ChangePassword_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/profiles/client/views/ChangePassword.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/profiles/client/views/ChangePassword.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
  data: function data() {
    return {
      fields: {
        currentPassword: '',
        newPassword: '',
        repeatPassword: ''
      },
      isSended: false,
      isUpdate: false
    };
  },
  computed: {
    isMatchPasswords: function isMatchPasswords() {
      return this.fields.newPassword === this.fields.repeatPassword;
    }
  },
  methods: {
    formHandler: function formHandler() {
      var _this = this;

      if (!this.isMatchPasswords) return;
      this.isSended = true;
      this.isUpdate = true;
      var formData = new FormData();
      formData.append('old_password', this.fields.currentPassword);
      formData.append('password', this.fields.newPassword);
      formData.append('password_confirmation', this.fields.repeatPassword);
      formData.append('_method', 'PUT');
      axios({
        method: "POST",
        url: '/api/front/client/password/update',
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data"
        }
      }).then(function () {
        _this.isUpdate = false;
        toastr.success("Informationen aktualisiert");
      })["catch"](function (_ref) {
        var response = _ref.response;
        _this.isUpdate = false;
        toastr.error(response.data.old_password_err || 'Etwas ist schief gelaufen');
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/profiles/client/views/ChangePassword.vue":
/*!***************************************************************!*\
  !*** ./resources/js/profiles/client/views/ChangePassword.vue ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ChangePassword_vue_vue_type_template_id_044d0369___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChangePassword.vue?vue&type=template&id=044d0369& */ "./resources/js/profiles/client/views/ChangePassword.vue?vue&type=template&id=044d0369&");
/* harmony import */ var _ChangePassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChangePassword.vue?vue&type=script&lang=js& */ "./resources/js/profiles/client/views/ChangePassword.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ChangePassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ChangePassword_vue_vue_type_template_id_044d0369___WEBPACK_IMPORTED_MODULE_0__.render,
  _ChangePassword_vue_vue_type_template_id_044d0369___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/profiles/client/views/ChangePassword.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/profiles/client/views/ChangePassword.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/profiles/client/views/ChangePassword.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChangePassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ChangePassword.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/profiles/client/views/ChangePassword.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChangePassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/profiles/client/views/ChangePassword.vue?vue&type=template&id=044d0369&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/profiles/client/views/ChangePassword.vue?vue&type=template&id=044d0369& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChangePassword_vue_vue_type_template_id_044d0369___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChangePassword_vue_vue_type_template_id_044d0369___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChangePassword_vue_vue_type_template_id_044d0369___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ChangePassword.vue?vue&type=template&id=044d0369& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/profiles/client/views/ChangePassword.vue?vue&type=template&id=044d0369&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/profiles/client/views/ChangePassword.vue?vue&type=template&id=044d0369&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/profiles/client/views/ChangePassword.vue?vue&type=template&id=044d0369& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
    "form",
    {
      class: { "opacity-50 pe-none": _vm.isUpdate },
      on: {
        submit: function ($event) {
          $event.preventDefault()
          return _vm.formHandler.apply(null, arguments)
        },
        input: function ($event) {
          _vm.isSended = false
        },
      },
    },
    [
      _c("h4", { staticClass: "d-block d-lg-none mb-3" }, [
        _vm._v("Passwort ändern"),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c(
          "div",
          { staticClass: "col-lg-5" },
          [
            _c("form-field", {
              attrs: {
                label: "Altes Password*",
                type: "password",
                minlength: "8",
                required: "",
                placeholder: "Altes Password*",
              },
              model: {
                value: _vm.fields.currentPassword,
                callback: function ($$v) {
                  _vm.$set(_vm.fields, "currentPassword", $$v)
                },
                expression: "fields.currentPassword",
              },
            }),
            _vm._v(" "),
            _c("form-field", {
              staticClass: "mt-4",
              attrs: {
                label: "Neues Password*",
                type: "password",
                minlength: "8",
                required: "",
                placeholder: "Neues Password*",
              },
              model: {
                value: _vm.fields.newPassword,
                callback: function ($$v) {
                  _vm.$set(_vm.fields, "newPassword", $$v)
                },
                expression: "fields.newPassword",
              },
            }),
            _vm._v(" "),
            _c("form-field", {
              staticClass: "mt-4",
              attrs: {
                label: "Passwort bestätigen*",
                type: "password",
                minlength: "8",
                required: "",
                placeholder: "Passwort bestätigen*",
              },
              model: {
                value: _vm.fields.repeatPassword,
                callback: function ($$v) {
                  _vm.$set(_vm.fields, "repeatPassword", $$v)
                },
                expression: "fields.repeatPassword",
              },
            }),
            _vm._v(" "),
            _c(
              "p",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: !_vm.isMatchPasswords && _vm.isSended,
                    expression: "!isMatchPasswords && isSended",
                  },
                ],
                staticClass: "text-danger mt-3",
              },
              [_vm._v("Das Passwort ist zu kurz")]
            ),
          ],
          1
        ),
      ]),
      _vm._v(" "),
      _c("input", {
        staticClass: "mt-4",
        attrs: { type: "submit", value: "Speichern" },
      }),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);