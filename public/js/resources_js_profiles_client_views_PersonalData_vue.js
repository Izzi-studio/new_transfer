"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_profiles_client_views_PersonalData_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/profiles/client/views/PersonalData.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/profiles/client/views/PersonalData.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
      fields: null,
      avatarUrl: '',
      isUpdate: false
    };
  },
  methods: {
    formHandler: function formHandler() {
      var _this = this;

      this.isUpdate = true;
      var formData = new FormData();

      for (var key in this.fields) {
        if (key === 'avatar') {
          if (!this.fields[key]) continue;
        }

        formData.append(key, this.fields[key]);
      }

      formData.append('_method', 'PUT');
      axios({
        method: "POST",
        url: '/api/front/client',
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data"
        }
      }).then(function () {
        _this.isUpdate = false;
        toastr.success("Informationen aktualisiert");
      });
    },
    updateAvatar: function updateAvatar(e) {
      this.fields.avatar = e.target.files[0];
      this.avatarUrl = URL.createObjectURL(e.target.files[0]);
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    axios.get('/api/front/client').then(function (_ref) {
      var data = _ref.data;
      _this2.fields = data.data;

      if (_this2.fields.avatar) {
        _this2.avatarUrl = _this2.fields.avatar;
      } else {
        _this2.avatarUrl = '/images/default-avatar.png';
      }

      _this2.fields.avatar = "";
      toastr.success("Informationen geladen");
    });
  }
});

/***/ }),

/***/ "./resources/js/profiles/client/views/PersonalData.vue":
/*!*************************************************************!*\
  !*** ./resources/js/profiles/client/views/PersonalData.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PersonalData_vue_vue_type_template_id_5c84c508___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PersonalData.vue?vue&type=template&id=5c84c508& */ "./resources/js/profiles/client/views/PersonalData.vue?vue&type=template&id=5c84c508&");
/* harmony import */ var _PersonalData_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PersonalData.vue?vue&type=script&lang=js& */ "./resources/js/profiles/client/views/PersonalData.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PersonalData_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PersonalData_vue_vue_type_template_id_5c84c508___WEBPACK_IMPORTED_MODULE_0__.render,
  _PersonalData_vue_vue_type_template_id_5c84c508___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/profiles/client/views/PersonalData.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/profiles/client/views/PersonalData.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/profiles/client/views/PersonalData.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PersonalData_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PersonalData.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/profiles/client/views/PersonalData.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PersonalData_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/profiles/client/views/PersonalData.vue?vue&type=template&id=5c84c508&":
/*!********************************************************************************************!*\
  !*** ./resources/js/profiles/client/views/PersonalData.vue?vue&type=template&id=5c84c508& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PersonalData_vue_vue_type_template_id_5c84c508___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PersonalData_vue_vue_type_template_id_5c84c508___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PersonalData_vue_vue_type_template_id_5c84c508___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PersonalData.vue?vue&type=template&id=5c84c508& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/profiles/client/views/PersonalData.vue?vue&type=template&id=5c84c508&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/profiles/client/views/PersonalData.vue?vue&type=template&id=5c84c508&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/profiles/client/views/PersonalData.vue?vue&type=template&id=5c84c508& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
  return _vm.fields
    ? _c(
        "form",
        {
          class: { "opacity-50 pe-none": _vm.isUpdate },
          on: {
            submit: function ($event) {
              $event.preventDefault()
              return _vm.formHandler.apply(null, arguments)
            },
          },
        },
        [
          _c("h4", { staticClass: "d-block d-lg-none mb-3" }, [_vm._v("Info")]),
          _vm._v(" "),
          _c("label", { staticClass: "form-photo" }, [
            _c("input", {
              attrs: { type: "file", accept: "image/*" },
              on: { change: _vm.updateAvatar },
            }),
            _vm._v(" "),
            _c("img", {
              staticClass: "form-photo__img",
              attrs: { src: _vm.avatarUrl, alt: "" },
            }),
            _vm._v(" "),
            _c("p", { staticClass: "form-photo__label" }, [
              _vm._v("FOTO ÄNDERN"),
            ]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c(
              "div",
              { staticClass: "col-sm-6 mt-4" },
              [
                _c("form-field", {
                  attrs: {
                    label: "Vorname*",
                    type: "text",
                    required: "",
                    placeholder: "Ort*",
                  },
                  model: {
                    value: _vm.fields.name,
                    callback: function ($$v) {
                      _vm.$set(_vm.fields, "name", $$v)
                    },
                    expression: "fields.name",
                  },
                }),
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-sm-6 mt-4" },
              [
                _c("form-field", {
                  attrs: {
                    label: "Nachname*",
                    type: "text",
                    required: "",
                    placeholder: "Nachname*",
                  },
                  model: {
                    value: _vm.fields.lastname,
                    callback: function ($$v) {
                      _vm.$set(_vm.fields, "lastname", $$v)
                    },
                    expression: "fields.lastname",
                  },
                }),
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-sm-6 mt-4" },
              [
                _c("form-field", {
                  attrs: {
                    label: "Telefon*",
                    type: "text",
                    required: "",
                    placeholder: "Telefon*",
                  },
                  model: {
                    value: _vm.fields.phone,
                    callback: function ($$v) {
                      _vm.$set(_vm.fields, "phone", $$v)
                    },
                    expression: "fields.phone",
                  },
                }),
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-sm-6 mt-4" },
              [
                _c("form-field", {
                  attrs: {
                    label: "Erreichbarkeit*",
                    type: "text",
                    required: "",
                    placeholder: "Erreichbarkeit*",
                  },
                  model: {
                    value: _vm.fields.availability,
                    callback: function ($$v) {
                      _vm.$set(_vm.fields, "availability", $$v)
                    },
                    expression: "fields.availability",
                  },
                }),
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
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);