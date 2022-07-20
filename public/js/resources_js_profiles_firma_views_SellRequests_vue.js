"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_profiles_firma_views_SellRequests_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Card.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Card.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _OfferCompanies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OfferCompanies */ "./resources/js/components/OfferCompanies.vue");
/* harmony import */ var _OfferDetailsTransfer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OfferDetailsTransfer */ "./resources/js/components/OfferDetailsTransfer.vue");
/* harmony import */ var _OfferDetailsCleaning__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OfferDetailsCleaning */ "./resources/js/components/OfferDetailsCleaning.vue");
/* harmony import */ var _OfferDetailsTransferCleaning__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./OfferDetailsTransferCleaning */ "./resources/js/components/OfferDetailsTransferCleaning.vue");
/* harmony import */ var _OfferDetailsFlexble__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./OfferDetailsFlexble */ "./resources/js/components/OfferDetailsFlexble.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ['data', 'typeJobId', 'isShowBtnDownload', 'isShowBtnCancel', 'isShowBtnAdd'],
  data: function data() {
    return {
      isShowDetails: false,
      isShowCompanies: false
    };
  },
  computed: {
    userAuth: function userAuth() {
      return document.querySelector('body').dataset.userAuth;
    },
    isClient: function isClient() {
      return this.userAuth === 'client';
    },
    isPartner: function isPartner() {
      return this.userAuth === 'partner';
    },
    offerDesc: function offerDesc() {
      var str = '';

      if (this.typeJobId == 1) {
        str += this.data.additional_info.from.rooms + ' ' + this.trans('room');
        str += ', ' + this.data.additional_info.from.floor + ' ' + this.trans('form-labels.floor');
      }

      if (this.typeJobId == 2) {
        str += this.data.additional_info.cleaning, str += ', ' + this.data.additional_info.windows + ' ' + this.trans('form-labels.windows'), str += ', ' + this.data.additional_info.shower_wc + ' ' + this.trans('form-labels.shower_wc'), str += ', ' + this.data.additional_info.bath_wc + ' ' + this.trans('form-labels.bath_wc'), str += ', ' + this.data.additional_info.wc + ' ' + this.trans('form-labels.wc');
      }

      if (this.typeJobId == 3) {
        str += this.data.additional_info.from.rooms + ' ' + this.trans('room');
        str += ', ' + this.data.additional_info.from.floor + ' ' + this.trans('form-labels.floor');
        str += ', ' + this.data.additional_info.cleaning + ' ' + this.trans('form-labels.cleaning'), str += ', ' + this.data.additional_info.windows + ' ' + this.trans('form-labels.windows'), str += ', ' + this.data.additional_info.shower_wc + ' ' + this.trans('form-labels.shower_wc'), str += ', ' + this.data.additional_info.bath_wc + ' ' + this.trans('form-labels.bath_wc'), str += ', ' + this.data.additional_info.wc + ' ' + this.trans('form-labels.wc');
      }

      if (this.typeJobId == 4 || this.typeJobId == 5 || this.typeJobId == 6 || this.typeJobId == 7 || this.typeJobId == 8 || this.typeJobId == 9) {
        str += this.data.additional_info.work_should_be_done.join(', ');

        if (this.typeJobId == 5) {
          str += ', ' + this.data.additional_info.square;
        }
      }

      return str;
    },
    offerDirection: function offerDirection() {
      var str = '';

      if (this.typeJobId == 1 || this.typeJobId == 3) {
        str = this.data.region_from + ' > ' + this.data.region_to;
      }

      if (this.typeJobId == 2 || this.typeJobId == 4 || this.typeJobId == 5 || this.typeJobId == 6 || this.typeJobId == 7 || this.typeJobId == 8 || this.typeJobId == 9) {
        str = this.data.region_from;
      }

      return str;
    },
    offerType: function offerType() {
      switch (this.typeJobId) {
        case 1:
          return 'umzug';

        case 2:
          return 'reinigung';

        case 3:
          return 'umzug_und_reinigung';

        case 4:
          return 'maler';

        case 5:
          return 'bodenleger';

        case 6:
          return 'heizung';

        case 7:
          return 'elektriker';

        case 8:
          return 'gartner';

        case 9:
          return 'schreiner';
      }
    }
  },
  components: {
    OfferCompanies: _OfferCompanies__WEBPACK_IMPORTED_MODULE_0__["default"],
    OfferDetailsTransfer: _OfferDetailsTransfer__WEBPACK_IMPORTED_MODULE_1__["default"],
    OfferDetailsCleaning: _OfferDetailsCleaning__WEBPACK_IMPORTED_MODULE_2__["default"],
    OfferDetailsTransferCleaning: _OfferDetailsTransferCleaning__WEBPACK_IMPORTED_MODULE_3__["default"],
    OfferDetailsFlexble: _OfferDetailsFlexble__WEBPACK_IMPORTED_MODULE_4__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/OfferCompanies.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/OfferCompanies.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['data', 'offerId', 'isShowBtnAcceptCompany', 'isPerformed']
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/OfferDetailsCleaning.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/OfferDetailsCleaning.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['data']
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/OfferDetailsFlexble.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/OfferDetailsFlexble.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['data']
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/OfferDetailsTransfer.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/OfferDetailsTransfer.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['data']
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/OfferDetailsTransferCleaning.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/OfferDetailsTransferCleaning.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
//
//
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
  props: ['data']
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/profiles/firma/views/SellRequests.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/profiles/firma/views/SellRequests.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_Card_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../components/Card.vue */ "./resources/js/components/Card.vue");
//
//
//
//
//
//
//
//
//
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
      cards: []
    };
  },
  computed: {
    requestsText: function requestsText() {
      switch (this.$route.params.requests) {
        case 'verkaufe':
          return this.trans('requests-selling');

        case 'kaufe':
          return this.trans('requests-bought');
      }
    },
    requestsStatus: function requestsStatus() {
      switch (this.$route.params.requests) {
        case 'verkaufe':
          return 'resell';

        case 'kaufe':
          return 'resell-accepted';
      }
    },
    isShowBtnCancel: function isShowBtnCancel() {
      return this.requestsStatus === 'resell';
    },
    isShowBtnDownload: function isShowBtnDownload() {
      return this.requestsStatus === 'resell-accepted';
    }
  },
  methods: {
    acceptCompany: function acceptCompany(data) {
      var _this = this;

      axios.put("/api/front/partner/proposals/choose-performer/".concat(data.proposalId), {
        user_id: data.userId
      }).then(function (dataStatus) {
        if (dataStatus.data.status) {
          _this.cards.filter(function (i) {
            return i.id === data.proposalId;
          })[0].performed = true;
        }
      });
    },
    deleteOffer: function deleteOffer(id) {
      var _this2 = this;

      var isConfirm = confirm('Sind Sie sicher, dass Sie den Auftrag löschen wollen?');

      if (isConfirm) {
        axios["delete"]("/api/front/partner/proposals/delete/".concat(id)).then(function () {
          _this2.cards = _this2.cards.filter(function (i) {
            return i.id != id;
          });
        });
      }
    }
  },
  mounted: function mounted() {
    var _this3 = this;

    axios.get('/api/front/partner/proposals', {
      params: {
        status: this.requestsStatus
      }
    }).then(function (_ref) {
      var data = _ref.data;
      _this3.cards = data.data;
    });
  },
  components: {
    Card: _components_Card_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./resources/js/components/Card.vue":
/*!******************************************!*\
  !*** ./resources/js/components/Card.vue ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Card_vue_vue_type_template_id_b9bc2c0a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Card.vue?vue&type=template&id=b9bc2c0a& */ "./resources/js/components/Card.vue?vue&type=template&id=b9bc2c0a&");
/* harmony import */ var _Card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Card.vue?vue&type=script&lang=js& */ "./resources/js/components/Card.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Card_vue_vue_type_template_id_b9bc2c0a___WEBPACK_IMPORTED_MODULE_0__.render,
  _Card_vue_vue_type_template_id_b9bc2c0a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Card.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/OfferCompanies.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/OfferCompanies.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _OfferCompanies_vue_vue_type_template_id_a86c9aec___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OfferCompanies.vue?vue&type=template&id=a86c9aec& */ "./resources/js/components/OfferCompanies.vue?vue&type=template&id=a86c9aec&");
/* harmony import */ var _OfferCompanies_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OfferCompanies.vue?vue&type=script&lang=js& */ "./resources/js/components/OfferCompanies.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _OfferCompanies_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _OfferCompanies_vue_vue_type_template_id_a86c9aec___WEBPACK_IMPORTED_MODULE_0__.render,
  _OfferCompanies_vue_vue_type_template_id_a86c9aec___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/OfferCompanies.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/OfferDetailsCleaning.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/OfferDetailsCleaning.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _OfferDetailsCleaning_vue_vue_type_template_id_083fee6c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OfferDetailsCleaning.vue?vue&type=template&id=083fee6c& */ "./resources/js/components/OfferDetailsCleaning.vue?vue&type=template&id=083fee6c&");
/* harmony import */ var _OfferDetailsCleaning_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OfferDetailsCleaning.vue?vue&type=script&lang=js& */ "./resources/js/components/OfferDetailsCleaning.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _OfferDetailsCleaning_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _OfferDetailsCleaning_vue_vue_type_template_id_083fee6c___WEBPACK_IMPORTED_MODULE_0__.render,
  _OfferDetailsCleaning_vue_vue_type_template_id_083fee6c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/OfferDetailsCleaning.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/OfferDetailsFlexble.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/OfferDetailsFlexble.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _OfferDetailsFlexble_vue_vue_type_template_id_11200b81___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OfferDetailsFlexble.vue?vue&type=template&id=11200b81& */ "./resources/js/components/OfferDetailsFlexble.vue?vue&type=template&id=11200b81&");
/* harmony import */ var _OfferDetailsFlexble_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OfferDetailsFlexble.vue?vue&type=script&lang=js& */ "./resources/js/components/OfferDetailsFlexble.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _OfferDetailsFlexble_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _OfferDetailsFlexble_vue_vue_type_template_id_11200b81___WEBPACK_IMPORTED_MODULE_0__.render,
  _OfferDetailsFlexble_vue_vue_type_template_id_11200b81___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/OfferDetailsFlexble.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/OfferDetailsTransfer.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/OfferDetailsTransfer.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _OfferDetailsTransfer_vue_vue_type_template_id_0c4ea6bc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OfferDetailsTransfer.vue?vue&type=template&id=0c4ea6bc& */ "./resources/js/components/OfferDetailsTransfer.vue?vue&type=template&id=0c4ea6bc&");
/* harmony import */ var _OfferDetailsTransfer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OfferDetailsTransfer.vue?vue&type=script&lang=js& */ "./resources/js/components/OfferDetailsTransfer.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _OfferDetailsTransfer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _OfferDetailsTransfer_vue_vue_type_template_id_0c4ea6bc___WEBPACK_IMPORTED_MODULE_0__.render,
  _OfferDetailsTransfer_vue_vue_type_template_id_0c4ea6bc___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/OfferDetailsTransfer.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/OfferDetailsTransferCleaning.vue":
/*!******************************************************************!*\
  !*** ./resources/js/components/OfferDetailsTransferCleaning.vue ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _OfferDetailsTransferCleaning_vue_vue_type_template_id_722bc355___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OfferDetailsTransferCleaning.vue?vue&type=template&id=722bc355& */ "./resources/js/components/OfferDetailsTransferCleaning.vue?vue&type=template&id=722bc355&");
/* harmony import */ var _OfferDetailsTransferCleaning_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OfferDetailsTransferCleaning.vue?vue&type=script&lang=js& */ "./resources/js/components/OfferDetailsTransferCleaning.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _OfferDetailsTransferCleaning_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _OfferDetailsTransferCleaning_vue_vue_type_template_id_722bc355___WEBPACK_IMPORTED_MODULE_0__.render,
  _OfferDetailsTransferCleaning_vue_vue_type_template_id_722bc355___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/OfferDetailsTransferCleaning.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/profiles/firma/views/SellRequests.vue":
/*!************************************************************!*\
  !*** ./resources/js/profiles/firma/views/SellRequests.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SellRequests_vue_vue_type_template_id_2e270efa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SellRequests.vue?vue&type=template&id=2e270efa& */ "./resources/js/profiles/firma/views/SellRequests.vue?vue&type=template&id=2e270efa&");
/* harmony import */ var _SellRequests_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SellRequests.vue?vue&type=script&lang=js& */ "./resources/js/profiles/firma/views/SellRequests.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SellRequests_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SellRequests_vue_vue_type_template_id_2e270efa___WEBPACK_IMPORTED_MODULE_0__.render,
  _SellRequests_vue_vue_type_template_id_2e270efa___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/profiles/firma/views/SellRequests.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Card.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/components/Card.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Card.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Card.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/OfferCompanies.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/OfferCompanies.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OfferCompanies_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./OfferCompanies.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/OfferCompanies.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OfferCompanies_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/OfferDetailsCleaning.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/OfferDetailsCleaning.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OfferDetailsCleaning_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./OfferDetailsCleaning.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/OfferDetailsCleaning.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OfferDetailsCleaning_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/OfferDetailsFlexble.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/OfferDetailsFlexble.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OfferDetailsFlexble_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./OfferDetailsFlexble.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/OfferDetailsFlexble.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OfferDetailsFlexble_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/OfferDetailsTransfer.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/OfferDetailsTransfer.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OfferDetailsTransfer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./OfferDetailsTransfer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/OfferDetailsTransfer.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OfferDetailsTransfer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/OfferDetailsTransferCleaning.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/OfferDetailsTransferCleaning.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OfferDetailsTransferCleaning_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./OfferDetailsTransferCleaning.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/OfferDetailsTransferCleaning.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OfferDetailsTransferCleaning_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/profiles/firma/views/SellRequests.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/profiles/firma/views/SellRequests.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SellRequests_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SellRequests.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/profiles/firma/views/SellRequests.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SellRequests_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Card.vue?vue&type=template&id=b9bc2c0a&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/Card.vue?vue&type=template&id=b9bc2c0a& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_template_id_b9bc2c0a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_template_id_b9bc2c0a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_template_id_b9bc2c0a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Card.vue?vue&type=template&id=b9bc2c0a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Card.vue?vue&type=template&id=b9bc2c0a&");


/***/ }),

/***/ "./resources/js/components/OfferCompanies.vue?vue&type=template&id=a86c9aec&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/OfferCompanies.vue?vue&type=template&id=a86c9aec& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OfferCompanies_vue_vue_type_template_id_a86c9aec___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OfferCompanies_vue_vue_type_template_id_a86c9aec___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OfferCompanies_vue_vue_type_template_id_a86c9aec___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./OfferCompanies.vue?vue&type=template&id=a86c9aec& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/OfferCompanies.vue?vue&type=template&id=a86c9aec&");


/***/ }),

/***/ "./resources/js/components/OfferDetailsCleaning.vue?vue&type=template&id=083fee6c&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/OfferDetailsCleaning.vue?vue&type=template&id=083fee6c& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OfferDetailsCleaning_vue_vue_type_template_id_083fee6c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OfferDetailsCleaning_vue_vue_type_template_id_083fee6c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OfferDetailsCleaning_vue_vue_type_template_id_083fee6c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./OfferDetailsCleaning.vue?vue&type=template&id=083fee6c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/OfferDetailsCleaning.vue?vue&type=template&id=083fee6c&");


/***/ }),

/***/ "./resources/js/components/OfferDetailsFlexble.vue?vue&type=template&id=11200b81&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/OfferDetailsFlexble.vue?vue&type=template&id=11200b81& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OfferDetailsFlexble_vue_vue_type_template_id_11200b81___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OfferDetailsFlexble_vue_vue_type_template_id_11200b81___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OfferDetailsFlexble_vue_vue_type_template_id_11200b81___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./OfferDetailsFlexble.vue?vue&type=template&id=11200b81& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/OfferDetailsFlexble.vue?vue&type=template&id=11200b81&");


/***/ }),

/***/ "./resources/js/components/OfferDetailsTransfer.vue?vue&type=template&id=0c4ea6bc&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/OfferDetailsTransfer.vue?vue&type=template&id=0c4ea6bc& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OfferDetailsTransfer_vue_vue_type_template_id_0c4ea6bc___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OfferDetailsTransfer_vue_vue_type_template_id_0c4ea6bc___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OfferDetailsTransfer_vue_vue_type_template_id_0c4ea6bc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./OfferDetailsTransfer.vue?vue&type=template&id=0c4ea6bc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/OfferDetailsTransfer.vue?vue&type=template&id=0c4ea6bc&");


/***/ }),

/***/ "./resources/js/components/OfferDetailsTransferCleaning.vue?vue&type=template&id=722bc355&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/OfferDetailsTransferCleaning.vue?vue&type=template&id=722bc355& ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OfferDetailsTransferCleaning_vue_vue_type_template_id_722bc355___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OfferDetailsTransferCleaning_vue_vue_type_template_id_722bc355___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OfferDetailsTransferCleaning_vue_vue_type_template_id_722bc355___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./OfferDetailsTransferCleaning.vue?vue&type=template&id=722bc355& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/OfferDetailsTransferCleaning.vue?vue&type=template&id=722bc355&");


/***/ }),

/***/ "./resources/js/profiles/firma/views/SellRequests.vue?vue&type=template&id=2e270efa&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/profiles/firma/views/SellRequests.vue?vue&type=template&id=2e270efa& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SellRequests_vue_vue_type_template_id_2e270efa___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SellRequests_vue_vue_type_template_id_2e270efa___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SellRequests_vue_vue_type_template_id_2e270efa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SellRequests.vue?vue&type=template&id=2e270efa& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/profiles/firma/views/SellRequests.vue?vue&type=template&id=2e270efa&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Card.vue?vue&type=template&id=b9bc2c0a&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Card.vue?vue&type=template&id=b9bc2c0a& ***!
  \****************************************************************************************************************************************************************************************************************/
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
    {
      staticClass: "offer",
      class: {
        offer_open_details: _vm.isShowDetails,
        offer_open_companies: _vm.isShowCompanies,
        offer_performed: _vm.data.performed,
      },
    },
    [
      _c("p", { staticClass: "offer__date mb-1" }, [
        _vm._v(_vm._s(_vm.data.created_at)),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "offer__header" }, [
        _vm.isClient
          ? _c("h4", { staticClass: "offer__direction" }, [
              _vm._v(
                "\n            " + _vm._s(_vm.offerDirection) + "\n        "
              ),
            ])
          : _vm._e(),
        _vm._v(" "),
        _vm.isPartner
          ? _c("h4", { staticClass: "offer__type" }, [
              _vm._v(_vm._s(_vm.trans(_vm.offerType))),
            ])
          : _vm._e(),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass: "offer__btn-details btn",
            attrs: { type: "button" },
            on: {
              click: function ($event) {
                _vm.isShowDetails = !_vm.isShowDetails
              },
            },
          },
          [
            _vm._v(
              "\n            " +
                _vm._s(_vm.trans("request-details")) +
                "\n        "
            ),
          ]
        ),
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "offer__body" },
        [
          _vm.isClient
            ? _c("p", { staticClass: "offer__desc" }, [
                _vm._v(_vm._s(_vm.offerDesc)),
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.isPartner
            ? _c("h4", [_vm._v(_vm._s(_vm.offerDirection))])
            : _vm._e(),
          _vm._v(" "),
          _vm.data.price
            ? _c(
                "p",
                { staticClass: "mt-2", staticStyle: { color: "#1072D8" } },
                [
                  _c("strong", [
                    _vm._v(
                      _vm._s(_vm.trans("price")) +
                        " " +
                        _vm._s(_vm.data.price) +
                        " €"
                    ),
                  ]),
                ]
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.isPartner &&
          _vm.data.responded_partners &&
          _vm.data.responded_partners.length
            ? _c(
                "button",
                {
                  staticClass: "offer__btn-companies mt-2",
                  attrs: { type: "button" },
                  on: {
                    click: function ($event) {
                      _vm.isShowCompanies = !_vm.isShowCompanies
                    },
                  },
                },
                [
                  _vm._v(
                    "\n            " +
                      _vm._s(_vm.trans("suggested-companies")) +
                      "\n        "
                  ),
                ]
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.data.responded_partners && _vm.data.responded_partners.length
            ? _c("offer-companies", {
                attrs: {
                  data: _vm.data.responded_partners,
                  "offer-id": _vm.data.id,
                  "is-show-btn-accept-company": true,
                  "is-performed": _vm.data.performed,
                },
                on: {
                  acceptCompany: function ($event) {
                    return _vm.$emit("acceptCompany", {
                      proposalId: _vm.data.id,
                      userId: $event,
                    })
                  },
                },
              })
            : _vm._e(),
          _vm._v(" "),
          _vm.typeJobId == 1
            ? _c("offer-details-transfer", { attrs: { data: _vm.data } })
            : _vm._e(),
          _vm._v(" "),
          _vm.typeJobId == 2
            ? _c("offer-details-cleaning", { attrs: { data: _vm.data } })
            : _vm._e(),
          _vm._v(" "),
          _vm.typeJobId == 3
            ? _c("offer-details-transfer-cleaning", {
                attrs: { data: _vm.data },
              })
            : _vm._e(),
          _vm._v(" "),
          _vm.typeJobId == 4 ||
          _vm.typeJobId == 5 ||
          _vm.typeJobId == 6 ||
          _vm.typeJobId == 7 ||
          _vm.typeJobId == 8 ||
          _vm.typeJobId == 9
            ? _c("offer-details-flexble", { attrs: { data: _vm.data } })
            : _vm._e(),
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "offer__footer" }, [
        _vm.isClient && _vm.data.responded_partners.length
          ? _c(
              "button",
              {
                staticClass: "offer__btn-companies",
                attrs: { type: "button" },
                on: {
                  click: function ($event) {
                    _vm.isShowCompanies = !_vm.isShowCompanies
                  },
                },
              },
              [
                _vm._v(
                  "\n            " +
                    _vm._s(_vm.trans("suggested-companies")) +
                    "\n        "
                ),
              ]
            )
          : _vm._e(),
        _vm._v(" "),
        _vm.isPartner
          ? _c("p", { staticClass: "offer__desc" }, [
              _vm._v(_vm._s(_vm.offerDesc)),
            ])
          : _vm._e(),
        _vm._v(" "),
        _c("div", { staticClass: "offer__actions" }, [
          _vm.isShowBtnAdd
            ? _c(
                "button",
                {
                  staticClass: "offer__accept",
                  attrs: { type: "button" },
                  on: {
                    click: function ($event) {
                      return _vm.$emit("addOffer", _vm.data.id)
                    },
                  },
                },
                [
                  _vm._v(
                    "\n                " +
                      _vm._s(_vm.trans("accept")) +
                      "\n            "
                  ),
                ]
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.isShowBtnDownload
            ? _c(
                "a",
                {
                  staticClass: "offer__download",
                  attrs: {
                    href: "/proposals/download/" + _vm.data.id,
                    download: "",
                  },
                },
                [
                  _vm._v(
                    "\n                " +
                      _vm._s(_vm.trans("download")) +
                      "\n            "
                  ),
                ]
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.isClient
            ? _c(
                "a",
                {
                  staticClass: "offer__edit",
                  attrs: {
                    href: "/proposal/edit/" + _vm.data.id + "#section-steps",
                    type: "button",
                  },
                },
                [
                  _vm._v(
                    "\n                " +
                      _vm._s(_vm.trans("edit")) +
                      "\n            "
                  ),
                ]
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.isShowBtnCancel && !_vm.data.performed
            ? _c(
                "button",
                {
                  staticClass: "offer__cancel",
                  attrs: { type: "button" },
                  on: {
                    click: function ($event) {
                      return _vm.$emit("deleteOffer", _vm.data.id)
                    },
                  },
                },
                [
                  _vm._v(
                    "\n                " +
                      _vm._s(_vm.trans("reject")) +
                      "\n            "
                  ),
                ]
              )
            : _vm._e(),
        ]),
      ]),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/OfferCompanies.vue?vue&type=template&id=a86c9aec&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/OfferCompanies.vue?vue&type=template&id=a86c9aec& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "offer-companies" },
    _vm._l(_vm.data, function (company) {
      return _c("div", { key: company.company, staticClass: "offer-company" }, [
        _c("div", { staticClass: "offer-company__header" }, [
          _c("img", {
            staticClass: "offer-company__logo",
            attrs: {
              src: company.avatar || "/images/default-avatar.webp",
              alt: "",
            },
          }),
          _vm._v(" "),
          _c("div", { staticClass: "d-flex flex-column" }, [
            _vm.isShowBtnAcceptCompany && !_vm.isPerformed
              ? _c(
                  "button",
                  {
                    staticClass: "offer__accept mb-2",
                    attrs: { type: "button" },
                    on: {
                      click: function ($event) {
                        return _vm.$emit("acceptCompany", company.id)
                      },
                    },
                  },
                  [
                    _vm._v(
                      "\n                    " +
                        _vm._s(_vm.trans("accept")) +
                        "\n                "
                    ),
                  ]
                )
              : _vm._e(),
            _vm._v(" "),
            _c(
              "a",
              {
                staticClass: "offer-company__link",
                attrs: {
                  href:
                    "/firmenprofil/" + company.profile_slug + "/" + _vm.offerId,
                },
              },
              [
                _vm._v(
                  "\n                    " +
                    _vm._s(_vm.trans("show-profile")) +
                    "\n                "
                ),
              ]
            ),
          ]),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "offer-company__body" }, [
          _c("div", { staticClass: "offer-company__col" }, [
            _c("p", { staticClass: "offer-company__desc" }, [
              _vm._v(_vm._s(company.company)),
            ]),
            _vm._v(" "),
            _c("p", { staticClass: "offer-company__location" }, [
              _vm._v(_vm._s(company.city) + ", " + _vm._s(company.street)),
            ]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "offer-company__col" }, [
            _c("p", [
              _c(
                "a",
                {
                  staticClass: "offer-company__phone",
                  attrs: { href: "tel:" + company.phone.replace(/\D/g, "") },
                },
                [
                  _vm._v(
                    "\n                        " +
                      _vm._s(company.phone) +
                      "\n                    "
                  ),
                ]
              ),
            ]),
            _vm._v(" "),
            _c("p", [
              _c(
                "a",
                {
                  staticClass: "offer-company__email",
                  attrs: { href: "mailto:" + company.email },
                },
                [
                  _vm._v(
                    "\n                        " +
                      _vm._s(company.email) +
                      "\n                    "
                  ),
                ]
              ),
            ]),
          ]),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "offer-company__footer" }, [
          _c("div", {
            class:
              "rating rating_fullness_" +
              company.rating_avg +
              " offer-company__rating",
          }),
          _vm._v(" "),
          _c("p", { staticClass: "offer-company__count-rating" }, [
            _vm._v(
              _vm._s(company.star_count) + " " + _vm._s(_vm.trans("reviews"))
            ),
          ]),
        ]),
      ])
    }),
    0
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/OfferDetailsCleaning.vue?vue&type=template&id=083fee6c&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/OfferDetailsCleaning.vue?vue&type=template&id=083fee6c& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "offer-details" },
    [
      _c("div", { staticClass: "offer-details__item" }, [
        _c("p", { staticClass: "offer-details__title" }, [
          _vm._v(_vm._s(_vm.trans("address"))),
        ]),
        _vm._v(" "),
        _c("p", { staticClass: "offer-details__txt" }, [
          _vm._v(
            "\n            " +
              _vm._s(_vm.data.additional_info.street) +
              " " +
              _vm._s(_vm.data.additional_info.number) +
              ", \n            " +
              _vm._s(_vm.data.additional_info.zip) +
              ", \n            " +
              _vm._s(_vm.data.additional_info.city) +
              "\n        "
          ),
        ]),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "offer-details__item" }, [
        _c("p", { staticClass: "offer-details__title" }, [
          _vm._v(_vm._s(_vm.trans("term"))),
        ]),
        _vm._v(" "),
        _c("p", { staticClass: "offer-details__txt" }, [
          _vm._v(_vm._s(_vm.data.date_start)),
        ]),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "offer-details__item" }, [
        _c("p", { staticClass: "offer-details__title" }, [
          _vm._v(_vm._s(_vm.trans("form-labels.dayrange"))),
        ]),
        _vm._v(" "),
        _c("p", { staticClass: "offer-details__txt" }, [
          _vm._v(
            "\n            " +
              _vm._s(_vm.data.additional_info.dayrange) +
              "\n        "
          ),
        ]),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "offer-details__item" }, [
        _c("p", { staticClass: "offer-details__title" }, [
          _vm._v(_vm._s(_vm.trans("house"))),
        ]),
        _vm._v(" "),
        _c("p", { staticClass: "offer-details__txt" }, [
          _vm._v(
            "\n            " +
              _vm._s(_vm.data.additional_info.house_type) +
              ", \n            " +
              _vm._s(_vm.data.additional_info.square) +
              " m2, \n            " +
              _vm._s(_vm.data.additional_info.rooms) +
              " " +
              _vm._s(_vm.trans("room")) +
              ", \n            " +
              _vm._s(_vm.data.additional_info.floor) +
              " " +
              _vm._s(_vm.trans("form-labels.floor")) +
              ", \n            " +
              _vm._s(_vm.data.additional_info.lift) +
              "\n        "
          ),
        ]),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "offer-details__item" }, [
        _c("p", { staticClass: "offer-details__title" }, [
          _vm._v(_vm._s(_vm.trans("form-labels.soil_type"))),
        ]),
        _vm._v(" "),
        _c("p", { staticClass: "offer-details__txt" }, [
          _vm._v(_vm._s(_vm.data.additional_info.soil_type)),
        ]),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "offer-details__item" }, [
        _c("p", { staticClass: "offer-details__title" }, [
          _vm._v(_vm._s(_vm.trans("form-labels.window_size"))),
        ]),
        _vm._v(" "),
        _c("p", { staticClass: "offer-details__txt" }, [
          _vm._v(_vm._s(_vm.data.additional_info.window_size)),
        ]),
      ]),
      _vm._v(" "),
      _vm.data.additional_info.other
        ? _c("div", { staticClass: "offer-details__item" }, [
            _c("p", { staticClass: "offer-details__title" }, [
              _vm._v(_vm._s(_vm.trans("form-labels.other"))),
            ]),
            _vm._v(" "),
            _c("p", { staticClass: "offer-details__txt" }, [
              _vm._v(
                "\n            " +
                  _vm._s(_vm.data.additional_info.other.join(", ")) +
                  "\n        "
              ),
            ]),
          ])
        : _vm._e(),
      _vm._v(" "),
      _c("div", { staticClass: "offer-details__item" }, [
        _c("p", { staticClass: "offer-details__title" }, [
          _vm._v(_vm._s(_vm.trans("form-labels.description"))),
        ]),
        _vm._v(" "),
        _c("p", { staticClass: "offer-details__txt" }, [
          _vm._v(
            "\n            " + _vm._s(_vm.data.description) + "\n        "
          ),
        ]),
      ]),
      _vm._v(" "),
      _vm.data.client
        ? [
            _c("div", { staticClass: "offer-details__item" }, [
              _c("p", { staticClass: "offer-details__title" }, [
                _vm._v(_vm._s(_vm.trans("contact-data"))),
              ]),
              _vm._v(" "),
              _c("p", { staticClass: "offer-details__txt" }, [
                _vm._v(
                  "\n                " +
                    _vm._s(_vm.data.client.name) +
                    " " +
                    _vm._s(_vm.data.client.lastname) +
                    ", \n                " +
                    _vm._s(_vm.trans("form-labels.phone")) +
                    " " +
                    _vm._s(_vm.data.client.phone) +
                    ", \n                " +
                    _vm._s(_vm.data.client.email) +
                    "\n            "
                ),
              ]),
            ]),
            _vm._v(" "),
            _vm.data.client.availability
              ? _c("div", { staticClass: "offer-details__item" }, [
                  _c("p", { staticClass: "offer-details__title" }, [
                    _vm._v(_vm._s(_vm.trans("form-labels.availability"))),
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "offer-details__txt" }, [
                    _vm._v(
                      "\n                " +
                        _vm._s(_vm.data.client.availability) +
                        "\n            "
                    ),
                  ]),
                ])
              : _vm._e(),
          ]
        : _vm._e(),
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/OfferDetailsFlexble.vue?vue&type=template&id=11200b81&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/OfferDetailsFlexble.vue?vue&type=template&id=11200b81& ***!
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
    { staticClass: "offer-details" },
    [
      _c("div", { staticClass: "offer-details__item" }, [
        _c("p", { staticClass: "offer-details__title" }, [
          _vm._v(_vm._s(_vm.trans("address"))),
        ]),
        _vm._v(" "),
        _c("p", { staticClass: "offer-details__txt" }, [
          _vm._v(
            "\n            " +
              _vm._s(_vm.data.additional_info.street) +
              " " +
              _vm._s(_vm.data.additional_info.number) +
              ", \n            " +
              _vm._s(_vm.data.additional_info.zip) +
              ", \n            " +
              _vm._s(_vm.data.additional_info.city) +
              "\n        "
          ),
        ]),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "offer-details__item" }, [
        _c("p", { staticClass: "offer-details__title" }, [
          _vm._v(_vm._s(_vm.trans("term"))),
        ]),
        _vm._v(" "),
        _c("p", { staticClass: "offer-details__txt" }, [
          _vm._v(_vm._s(_vm.data.date_start)),
        ]),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "offer-details__item" }, [
        _c("p", { staticClass: "offer-details__title" }, [
          _vm._v(_vm._s(_vm.trans("form-labels.dayrange"))),
        ]),
        _vm._v(" "),
        _c("p", { staticClass: "offer-details__txt" }, [
          _vm._v(
            "\n            " +
              _vm._s(_vm.data.additional_info.dayrange) +
              "\n        "
          ),
        ]),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "offer-details__item" }, [
        _c("p", { staticClass: "offer-details__title" }, [
          _vm._v(_vm._s(_vm.trans("form-labels.description"))),
        ]),
        _vm._v(" "),
        _c("p", { staticClass: "offer-details__txt" }, [
          _vm._v(
            "\n            " + _vm._s(_vm.data.description) + "\n        "
          ),
        ]),
      ]),
      _vm._v(" "),
      _vm.data.client
        ? [
            _c("div", { staticClass: "offer-details__item" }, [
              _c("p", { staticClass: "offer-details__title" }, [
                _vm._v(_vm._s(_vm.trans("contact-data"))),
              ]),
              _vm._v(" "),
              _c("p", { staticClass: "offer-details__txt" }, [
                _vm._v(
                  "\n                " +
                    _vm._s(_vm.data.client.name) +
                    " " +
                    _vm._s(_vm.data.client.lastname) +
                    ", \n                " +
                    _vm._s(_vm.trans("form-labels.phone")) +
                    " " +
                    _vm._s(_vm.data.client.phone) +
                    ", \n                " +
                    _vm._s(_vm.data.client.email) +
                    "\n            "
                ),
              ]),
            ]),
            _vm._v(" "),
            _vm.data.client.availability
              ? _c("div", { staticClass: "offer-details__item" }, [
                  _c("p", { staticClass: "offer-details__title" }, [
                    _vm._v(_vm._s(_vm.trans("form-labels.availability"))),
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "offer-details__txt" }, [
                    _vm._v(
                      "\n                " +
                        _vm._s(_vm.data.client.availability) +
                        "\n            "
                    ),
                  ]),
                ])
              : _vm._e(),
          ]
        : _vm._e(),
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/OfferDetailsTransfer.vue?vue&type=template&id=0c4ea6bc&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/OfferDetailsTransfer.vue?vue&type=template&id=0c4ea6bc& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "offer-details" },
    [
      _c("div", { staticClass: "offer-details__item" }, [
        _c("p", { staticClass: "offer-details__title" }, [
          _vm._v(_vm._s(_vm.trans("address"))),
        ]),
        _vm._v(" "),
        _c("p", { staticClass: "offer-details__txt" }, [
          _vm._v(
            "\n            " +
              _vm._s(_vm.data.additional_info.from.street) +
              " " +
              _vm._s(_vm.data.additional_info.from.number) +
              ", \n            " +
              _vm._s(_vm.data.additional_info.from.zip) +
              ", \n            " +
              _vm._s(_vm.data.additional_info.from.city) +
              "."
          ),
          _c("br"),
          _vm._v(
            "\n            Nach " +
              _vm._s(_vm.data.additional_info.to.street) +
              " " +
              _vm._s(_vm.data.additional_info.to.number) +
              ", \n            " +
              _vm._s(_vm.data.additional_info.to.zip) +
              ", \n            " +
              _vm._s(_vm.data.additional_info.to.city) +
              ".\n        "
          ),
        ]),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "offer-details__item" }, [
        _c("p", { staticClass: "offer-details__title" }, [
          _vm._v(_vm._s(_vm.trans("term"))),
        ]),
        _vm._v(" "),
        _c("p", { staticClass: "offer-details__txt" }, [
          _vm._v(_vm._s(_vm.data.date_start)),
        ]),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "offer-details__item" }, [
        _c("p", { staticClass: "offer-details__title" }, [
          _vm._v(_vm._s(_vm.trans("abstract"))),
        ]),
        _vm._v(" "),
        _c("p", { staticClass: "offer-details__txt" }, [
          _vm._v(
            "\n            " +
              _vm._s(_vm.data.additional_info.from.house_type) +
              ", \n            " +
              _vm._s(_vm.data.additional_info.from.square) +
              " m2, \n            " +
              _vm._s(_vm.data.additional_info.from.rooms) +
              " " +
              _vm._s(_vm.trans("room")) +
              ", \n            " +
              _vm._s(_vm.data.additional_info.from.floor) +
              " " +
              _vm._s(_vm.trans("form-labels.floor")) +
              ", \n            " +
              _vm._s(_vm.data.additional_info.from.lift) +
              "\n        "
          ),
        ]),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "offer-details__item" }, [
        _c("p", { staticClass: "offer-details__title" }, [
          _vm._v(_vm._s(_vm.trans("indent"))),
        ]),
        _vm._v(" "),
        _c("p", { staticClass: "offer-details__txt" }, [
          _vm._v(
            "\n            " +
              _vm._s(_vm.data.additional_info.to.house_type) +
              ", \n            " +
              _vm._s(_vm.data.additional_info.to.square) +
              " m2, \n            " +
              _vm._s(_vm.data.additional_info.to.floor) +
              " " +
              _vm._s(_vm.trans("form-labels.floor")) +
              ", \n            " +
              _vm._s(_vm.data.additional_info.to.lift) +
              "\n        "
          ),
        ]),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "offer-details__item" }, [
        _c("p", { staticClass: "offer-details__title" }, [
          _vm._v(_vm._s(_vm.trans("form-labels.dayrange"))),
        ]),
        _vm._v(" "),
        _c("p", { staticClass: "offer-details__txt" }, [
          _vm._v(
            "\n            " +
              _vm._s(_vm.data.additional_info.from.dayrange) +
              "\n        "
          ),
        ]),
      ]),
      _vm._v(" "),
      _vm.data.additional_info.from.other
        ? _c("div", { staticClass: "offer-details__item" }, [
            _c("p", { staticClass: "offer-details__title" }, [
              _vm._v(_vm._s(_vm.trans("form-labels.other"))),
            ]),
            _vm._v(" "),
            _c("p", { staticClass: "offer-details__txt" }, [
              _vm._v(
                "\n            " +
                  _vm._s(_vm.data.additional_info.from.other.join(", ")) +
                  "\n        "
              ),
            ]),
          ])
        : _vm._e(),
      _vm._v(" "),
      _c("div", { staticClass: "offer-details__item" }, [
        _c("p", { staticClass: "offer-details__title" }, [
          _vm._v(_vm._s(_vm.trans("form-labels.description"))),
        ]),
        _vm._v(" "),
        _c("p", { staticClass: "offer-details__txt" }, [
          _vm._v(
            "\n            " + _vm._s(_vm.data.description) + "\n        "
          ),
        ]),
      ]),
      _vm._v(" "),
      _vm.data.client
        ? [
            _c("div", { staticClass: "offer-details__item" }, [
              _c("p", { staticClass: "offer-details__title" }, [
                _vm._v(_vm._s(_vm.trans("contact-data"))),
              ]),
              _vm._v(" "),
              _c("p", { staticClass: "offer-details__txt" }, [
                _vm._v(
                  "\n                " +
                    _vm._s(_vm.data.client.name) +
                    " " +
                    _vm._s(_vm.data.client.lastname) +
                    ", \n                " +
                    _vm._s(_vm.trans("form-labels.phone")) +
                    " " +
                    _vm._s(_vm.data.client.phone) +
                    ", \n                " +
                    _vm._s(_vm.data.client.email) +
                    "\n            "
                ),
              ]),
            ]),
            _vm._v(" "),
            _vm.data.client.availability
              ? _c("div", { staticClass: "offer-details__item" }, [
                  _c("p", { staticClass: "offer-details__title" }, [
                    _vm._v(_vm._s(_vm.trans("form-labels.availability"))),
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "offer-details__txt" }, [
                    _vm._v(
                      "\n                " +
                        _vm._s(_vm.data.client.availability) +
                        "\n            "
                    ),
                  ]),
                ])
              : _vm._e(),
          ]
        : _vm._e(),
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/OfferDetailsTransferCleaning.vue?vue&type=template&id=722bc355&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/OfferDetailsTransferCleaning.vue?vue&type=template&id=722bc355& ***!
  \****************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "offer-details" },
    [
      _c("div", { staticClass: "offer-details__item" }, [
        _c("p", { staticClass: "offer-details__title" }, [
          _vm._v(_vm._s(_vm.trans("address"))),
        ]),
        _vm._v(" "),
        _c("p", { staticClass: "offer-details__txt" }, [
          _vm._v(
            "\n            " +
              _vm._s(_vm.data.additional_info.from.street) +
              " " +
              _vm._s(_vm.data.additional_info.from.number) +
              ", \n            " +
              _vm._s(_vm.data.additional_info.from.zip) +
              ", \n            " +
              _vm._s(_vm.data.additional_info.from.city) +
              "."
          ),
          _c("br"),
          _vm._v(
            "\n            Nach " +
              _vm._s(_vm.data.additional_info.to.street) +
              " " +
              _vm._s(_vm.data.additional_info.to.number) +
              ", \n            " +
              _vm._s(_vm.data.additional_info.to.zip) +
              ", \n            " +
              _vm._s(_vm.data.additional_info.to.city) +
              ".\n        "
          ),
        ]),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "offer-details__item" }, [
        _c("p", { staticClass: "offer-details__title" }, [
          _vm._v(_vm._s(_vm.trans("term"))),
        ]),
        _vm._v(" "),
        _c("p", { staticClass: "offer-details__txt" }, [
          _vm._v(_vm._s(_vm.data.date_start)),
        ]),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "offer-details__item" }, [
        _c("p", { staticClass: "offer-details__title" }, [
          _vm._v(_vm._s(_vm.trans("form-labels.dayrange"))),
        ]),
        _vm._v(" "),
        _c("p", { staticClass: "offer-details__txt" }, [
          _vm._v(
            "\n            " +
              _vm._s(_vm.data.additional_info.from.dayrange) +
              "\n        "
          ),
        ]),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "offer-details__item" }, [
        _c("p", { staticClass: "offer-details__title" }, [
          _vm._v(_vm._s(_vm.trans("abstract"))),
        ]),
        _vm._v(" "),
        _c("p", { staticClass: "offer-details__txt" }, [
          _vm._v(
            "\n            " +
              _vm._s(_vm.data.additional_info.from.house_type) +
              ", \n            " +
              _vm._s(_vm.data.additional_info.from.square) +
              " m2, \n            " +
              _vm._s(_vm.data.additional_info.from.rooms) +
              " " +
              _vm._s(_vm.trans("room")) +
              ", \n            " +
              _vm._s(_vm.data.additional_info.from.floor) +
              " " +
              _vm._s(_vm.trans("form-labels.floor")) +
              ", \n            " +
              _vm._s(_vm.data.additional_info.from.lift) +
              "\n        "
          ),
        ]),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "offer-details__item" }, [
        _c("p", { staticClass: "offer-details__title" }, [
          _vm._v(_vm._s(_vm.trans("indent"))),
        ]),
        _vm._v(" "),
        _c("p", { staticClass: "offer-details__txt" }, [
          _vm._v(
            "\n            " +
              _vm._s(_vm.data.additional_info.to.house_type) +
              ", \n            " +
              _vm._s(_vm.data.additional_info.to.square) +
              " m2, \n            " +
              _vm._s(_vm.data.additional_info.to.floor) +
              " " +
              _vm._s(_vm.trans("form-labels.floor")) +
              ", \n            " +
              _vm._s(_vm.data.additional_info.to.lift) +
              "\n        "
          ),
        ]),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "offer-details__item" }, [
        _c("p", { staticClass: "offer-details__title" }, [
          _vm._v(_vm._s(_vm.trans("form-labels.soil_type"))),
        ]),
        _vm._v(" "),
        _c("p", { staticClass: "offer-details__txt" }, [
          _vm._v(_vm._s(_vm.data.additional_info.soil_type)),
        ]),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "offer-details__item" }, [
        _c("p", { staticClass: "offer-details__title" }, [
          _vm._v(_vm._s(_vm.trans("form-labels.window_size"))),
        ]),
        _vm._v(" "),
        _c("p", { staticClass: "offer-details__txt" }, [
          _vm._v(_vm._s(_vm.data.additional_info.window_size)),
        ]),
      ]),
      _vm._v(" "),
      _vm.data.additional_info.from.other
        ? _c("div", { staticClass: "offer-details__item" }, [
            _c("p", { staticClass: "offer-details__title" }, [
              _vm._v(_vm._s(_vm.trans("form-labels.other"))),
            ]),
            _vm._v(" "),
            _c("p", { staticClass: "offer-details__txt" }, [
              _vm._v(
                "\n            " +
                  _vm._s(_vm.data.additional_info.from.other.join(", ")) +
                  "\n        "
              ),
            ]),
          ])
        : _vm._e(),
      _vm._v(" "),
      _c("div", { staticClass: "offer-details__item" }, [
        _c("p", { staticClass: "offer-details__title" }, [
          _vm._v(_vm._s(_vm.trans("form-labels.description"))),
        ]),
        _vm._v(" "),
        _c("p", { staticClass: "offer-details__txt" }, [
          _vm._v(
            "\n            " + _vm._s(_vm.data.description) + "\n        "
          ),
        ]),
      ]),
      _vm._v(" "),
      [
        _c("div", { staticClass: "offer-details__item" }, [
          _c("p", { staticClass: "offer-details__title" }, [
            _vm._v(_vm._s(_vm.trans("contact-data"))),
          ]),
          _vm._v(" "),
          _c("p", { staticClass: "offer-details__txt" }, [
            _vm._v(
              "\n                " +
                _vm._s(_vm.data.client.name) +
                " " +
                _vm._s(_vm.data.client.lastname) +
                ", \n                " +
                _vm._s(_vm.trans("form-labels.phone")) +
                " " +
                _vm._s(_vm.data.client.phone) +
                ", \n                " +
                _vm._s(_vm.data.client.email) +
                "\n            "
            ),
          ]),
        ]),
        _vm._v(" "),
        _vm.data.client.availability
          ? _c("div", { staticClass: "offer-details__item" }, [
              _c("p", { staticClass: "offer-details__title" }, [
                _vm._v(_vm._s(_vm.trans("form-labels.availability"))),
              ]),
              _vm._v(" "),
              _c("p", { staticClass: "offer-details__txt" }, [
                _vm._v(
                  "\n                " +
                    _vm._s(_vm.data.client.availability) +
                    "\n            "
                ),
              ]),
            ])
          : _vm._e(),
      ],
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/profiles/firma/views/SellRequests.vue?vue&type=template&id=2e270efa&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/profiles/firma/views/SellRequests.vue?vue&type=template&id=2e270efa& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
    _c("h4", { staticClass: "d-block d-lg-none mb-3" }, [
      _vm._v(_vm._s(_vm.requestsText)),
    ]),
    _vm._v(" "),
    _c(
      "div",
      _vm._l(_vm.cards, function (card) {
        return _c("card", {
          key: card.id,
          staticClass: "mb-4",
          attrs: {
            data: card,
            "type-job-id": card.type_job_id,
            "is-show-btn-cancel": _vm.isShowBtnCancel,
            "is-show-btn-download": _vm.isShowBtnDownload,
          },
          on: {
            acceptCompany: _vm.acceptCompany,
            deleteOffer: _vm.deleteOffer,
          },
        })
      }),
      1
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);