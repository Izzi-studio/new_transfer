"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_profiles_firma_index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/profiles/firma/Sidebar.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/profiles/firma/Sidebar.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
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
  computed: {
    menu: function menu() {
      return [{
        text: this.trans('personal-data'),
        submenu: [{
          text: this.trans('info'),
          to: {
            name: 'personalData_firma'
          }
        }, {
          text: this.trans('change-password'),
          to: {
            name: 'changePassword_firma'
          }
        }]
      }, {
        text: this.trans('requests'),
        submenu: [{
          text: this.trans('request-new'),
          to: {
            params: {
              requests: 'offene'
            },
            name: 'requests_firma'
          }
        }, {
          text: this.trans('request-accepted'),
          to: {
            params: {
              requests: 'angenommene'
            },
            name: 'requests_firma'
          }
        }, {
          text: this.trans('request-reject'),
          to: {
            params: {
              requests: 'abgesagte'
            },
            name: 'requests_firma'
          }
        }]
      }, {
        text: this.trans('requests-from-companies'),
        submenu: [{
          text: this.trans('requests-selling'),
          to: {
            params: {
              requests: 'verkaufe'
            },
            name: 'sellRequests_firma'
          }
        }, {
          text: this.trans('requests-bought'),
          to: {
            params: {
              requests: 'kaufe'
            },
            name: 'sellRequests_firma'
          }
        }, {
          text: this.trans('request-sell'),
          to: {
            name: 'sellList_firma'
          }
        }, {
          text: this.trans('requests-trade'),
          href: this.$store.state.additionalInfo.resellUrl
        }]
      }, {
        text: this.trans('requests-completed'),
        to: {
          name: 'reviews_firma'
        }
      }, {
        text: this.trans('top-up-bill'),
        to: {
          name: 'payment_firma'
        }
      }, {
        text: this.trans('price'),
        to: {
          name: 'prices_firma'
        }
      }];
    },
    allProposals: function allProposals() {
      return this.$store.state.profile.allProposals;
    },
    newProposals: function newProposals() {
      return this.$store.state.profile.newProposals;
    },
    currentComponentName: function currentComponentName() {
      return this.$route.name;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/profiles/firma/index.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/profiles/firma/index.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sidebar */ "./resources/js/profiles/firma/Sidebar.vue");
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
  props: ['additionalInfo', 'localize'],
  data: function data() {
    return {
      isShowSidebarMob: false
    };
  },
  mounted: function mounted() {
    this.$store.dispatch('profile/getProposalsCounts');
    this.$store.commit('setAdditionalInfo', JSON.parse(this.additionalInfo));
    this.$store.commit('setLocalize', JSON.parse(this.localize));
  },
  components: {
    Sidebar: _Sidebar__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./resources/js/profiles/firma/Sidebar.vue":
/*!*************************************************!*\
  !*** ./resources/js/profiles/firma/Sidebar.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Sidebar_vue_vue_type_template_id_29b65fae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sidebar.vue?vue&type=template&id=29b65fae& */ "./resources/js/profiles/firma/Sidebar.vue?vue&type=template&id=29b65fae&");
/* harmony import */ var _Sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sidebar.vue?vue&type=script&lang=js& */ "./resources/js/profiles/firma/Sidebar.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Sidebar_vue_vue_type_template_id_29b65fae___WEBPACK_IMPORTED_MODULE_0__.render,
  _Sidebar_vue_vue_type_template_id_29b65fae___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/profiles/firma/Sidebar.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/profiles/firma/index.vue":
/*!***********************************************!*\
  !*** ./resources/js/profiles/firma/index.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_22d0abff___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=22d0abff& */ "./resources/js/profiles/firma/index.vue?vue&type=template&id=22d0abff&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/profiles/firma/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_22d0abff___WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_22d0abff___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/profiles/firma/index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/profiles/firma/Sidebar.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/profiles/firma/Sidebar.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Sidebar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/profiles/firma/Sidebar.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/profiles/firma/index.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/profiles/firma/index.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/profiles/firma/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/profiles/firma/Sidebar.vue?vue&type=template&id=29b65fae&":
/*!********************************************************************************!*\
  !*** ./resources/js/profiles/firma/Sidebar.vue?vue&type=template&id=29b65fae& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_template_id_29b65fae___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_template_id_29b65fae___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_template_id_29b65fae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Sidebar.vue?vue&type=template&id=29b65fae& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/profiles/firma/Sidebar.vue?vue&type=template&id=29b65fae&");


/***/ }),

/***/ "./resources/js/profiles/firma/index.vue?vue&type=template&id=22d0abff&":
/*!******************************************************************************!*\
  !*** ./resources/js/profiles/firma/index.vue?vue&type=template&id=22d0abff& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_22d0abff___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_22d0abff___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_22d0abff___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=22d0abff& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/profiles/firma/index.vue?vue&type=template&id=22d0abff&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/profiles/firma/Sidebar.vue?vue&type=template&id=29b65fae&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/profiles/firma/Sidebar.vue?vue&type=template&id=29b65fae& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
    { staticClass: "profile-sidebar" },
    _vm._l(_vm.menu, function (menuItem) {
      return _c(
        "div",
        {
          key: menuItem.text,
          staticClass: "profile-sidebar__item",
          class: {
            "profile-sidebar__item_has-sublist": menuItem.submenu,
            "profile-sidebar__item_active":
              menuItem.submenu &&
              menuItem.submenu
                .map(function (i) {
                  return i.to && i.to.name
                })
                .includes(_vm.currentComponentName),
          },
        },
        [
          menuItem.submenu
            ? [
                _c(
                  "a",
                  {
                    staticClass: "profile-sidebar__link",
                    attrs: { href: "#" },
                  },
                  [
                    _vm._v(
                      "\n                " +
                        _vm._s(menuItem.text) +
                        "\n                "
                    ),
                    menuItem.text == "Anfragen" && _vm.allProposals
                      ? [
                          _vm._v(
                            "\n                    " +
                              _vm._s("(" + _vm.allProposals + ")") +
                              "\n                    "
                          ),
                          _vm.newProposals
                            ? _c("span", { staticClass: "ms-auto me-3" }, [
                                _vm._v("+" + _vm._s(_vm.newProposals)),
                              ])
                            : _vm._e(),
                        ]
                      : _vm._e(),
                  ],
                  2
                ),
              ]
            : [
                _c(
                  "span",
                  {
                    on: {
                      click: function ($event) {
                        return _vm.$emit("clickToLink")
                      },
                    },
                  },
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "profile-sidebar__link",
                        attrs: {
                          "active-class": "profile-sidebar__link_active",
                          to: menuItem.to,
                        },
                      },
                      [
                        _vm._v(
                          "\n                    " +
                            _vm._s(menuItem.text) +
                            "\n                "
                        ),
                      ]
                    ),
                  ],
                  1
                ),
              ],
          _vm._v(" "),
          menuItem.submenu
            ? _c(
                "ul",
                { staticClass: "profile-sidebar__sublist" },
                _vm._l(menuItem.submenu, function (subItem) {
                  return _c(
                    "li",
                    {
                      key: subItem.text,
                      staticClass: "profile-sidebar__subitem",
                      on: {
                        click: function ($event) {
                          return _vm.$emit("clickToLink")
                        },
                      },
                    },
                    [
                      subItem.to
                        ? _c(
                            "router-link",
                            {
                              staticClass: "profile-sidebar__sublink",
                              attrs: {
                                "active-class":
                                  "profile-sidebar__sublink_active",
                                to: subItem.to,
                                exact: "",
                              },
                            },
                            [
                              _vm._v(
                                "\n                    " +
                                  _vm._s(subItem.text) +
                                  "\n                "
                              ),
                            ]
                          )
                        : _c(
                            "a",
                            {
                              staticClass: "profile-sidebar__sublink",
                              attrs: { href: subItem.href },
                            },
                            [
                              _vm._v(
                                "\n                    " +
                                  _vm._s(subItem.text) +
                                  "\n                "
                              ),
                            ]
                          ),
                    ],
                    1
                  )
                }),
                0
              )
            : _vm._e(),
        ],
        2
      )
    }),
    0
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/profiles/firma/index.vue?vue&type=template&id=22d0abff&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/profiles/firma/index.vue?vue&type=template&id=22d0abff& ***!
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
  return _c("div", [
    _c("div", { staticClass: "profile__header" }, [
      _c("h1", { staticClass: "section-title" }, [
        _vm._v(_vm._s(_vm.trans("my-bill"))),
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "profile__bill" }, [_vm._v("CHF: 00.00")]),
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row mt-4" }, [
      _c(
        "div",
        { staticClass: "col-lg-4 mt-2 mt-lg-4" },
        [
          _c("sidebar", {
            class: { "d-none d-lg-block": !_vm.isShowSidebarMob },
            on: {
              clickToLink: function ($event) {
                _vm.isShowSidebarMob = false
              },
            },
          }),
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "col-lg-8 mt-2 mt-lg-4" }, [
        _c(
          "div",
          {
            staticClass: "profile-info",
            class: { "d-none d-lg-block": _vm.isShowSidebarMob },
          },
          [
            _c(
              "button",
              {
                staticClass: "btn btn_theme_gray mb-4 d-block d-lg-none mb-4",
                on: {
                  click: function ($event) {
                    _vm.isShowSidebarMob = true
                  },
                },
              },
              [_vm._v("\n                    Zur??ck\n                ")]
            ),
            _vm._v(" "),
            _c("router-view", { key: _vm.$route.path }),
          ],
          1
        ),
      ]),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);