"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_profiles_firma_views_Requests_vue"],{

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
        str += this.data.additional_info.from.rooms + ' Zimmer';
        str += ', ' + this.data.additional_info.from.floor + ' Stock';
      }

      if (this.typeJobId == 2) {
        str += this.data.additional_info.cleaning, str += ', ' + this.data.additional_info.windows + ' Fenster', str += ', ' + (this.data.additional_info.shower_wc || '-'), str += ', ' + (this.data.additional_info.bath_wc || '-'), str += ', ' + (this.data.additional_info.wc || '-');
      }

      if (this.typeJobId == 3) {
        str += this.data.additional_info.from.rooms + ' Zimmer';
        str += ', ' + this.data.additional_info.from.floor + ' Stock';
        str += ', ' + this.data.additional_info.cleaning, str += ', ' + this.data.additional_info.windows + ' Fenster', str += ', ' + (this.data.additional_info.shower_wc || '-'), str += ', ' + (this.data.additional_info.bath_wc || '-'), str += ', ' + (this.data.additional_info.wc || '-');
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
          return 'Umzug';

        case 2:
          return 'Reinigung';

        case 3:
          return 'Umzug und Reinigun';

        case 4:
          return 'Maler';

        case 5:
          return 'Bodenleger';

        case 6:
          return 'Heizung';

        case 7:
          return 'Elektriker';

        case 8:
          return 'Gartner';

        case 9:
          return 'Schreiner';
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['data', 'offerId']
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['data']
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ProfileSearch.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ProfileSearch.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      fields: {
        year: '',
        month: '',
        search: ''
      }
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/profiles/firma/views/Requests.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/profiles/firma/views/Requests.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_ProfileSearch_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../components/ProfileSearch.vue */ "./resources/js/components/ProfileSearch.vue");
/* harmony import */ var _components_Card_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/Card.vue */ "./resources/js/components/Card.vue");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//
//
//
//
//
//
//
//
//
//
//
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
      cards: [],
      searchFields: null
    };
  },
  computed: {
    requestsText: function requestsText() {
      switch (this.$route.params.requests) {
        case 'offene':
          return 'Offene';

        case 'angenommene':
          return 'Angenommene';

        case 'abgesagte':
          return 'Abgesagte';

        case 'verkaufe':
          return 'Ich verkaufe';

        case 'kaufe':
          return 'Ich kaufe';
      }
    },
    requestsStatus: function requestsStatus() {
      switch (this.$route.params.requests) {
        case 'offene':
          return 'new';

        case 'angenommene':
          return 'accepted';

        case 'abgesagte':
          return 'rejected';

        case 'verkaufe':
          return 'resell';
      }
    },
    isShowBtnDownload: function isShowBtnDownload() {
      return this.requestsStatus === 'accepted';
    },
    isShowBtnCancel: function isShowBtnCancel() {
      return this.requestsStatus === 'new';
    },
    isShowBtnAdd: function isShowBtnAdd() {
      return this.requestsStatus === 'new';
    },
    formattedCards: function formattedCards() {
      var _this = this;

      if (!this.searchFields) return this.cards;

      var arr = _toConsumableArray(this.cards);

      if (this.searchFields.search.trim().length) {
        var searchFormatted = this.searchFields.search.trim().toLowerCase();
        arr = arr.filter(function (i) {
          if (i.region_from && i.region_to) {
            var text = i.region_from.trim().toLowerCase() + ' > ' + i.region_to.trim().toLowerCase();

            if (text.includes(searchFormatted)) {
              return true;
            }
          }

          if (i.region_from) {
            var _text = i.region_from.trim().toLowerCase();

            if (_text.includes(searchFormatted)) {
              return true;
            }
          }

          return false;
        });
      }

      if (this.searchFields.year) {
        arr = arr.filter(function (i) {
          var date = _this.globalGetDate(i.date_start);

          if (date.getFullYear() == _this.searchFields.year) {
            return true;
          }

          return false;
        });
      }

      if (this.searchFields.month) {
        arr = arr.filter(function (i) {
          var date = _this.globalGetDate(i.date_start);

          if (date.getMonth() + 1 == _this.searchFields.month) {
            return true;
          }

          return false;
        });
      }

      return arr;
    }
  },
  methods: {
    formSearch: function formSearch(fields) {
      this.searchFields = _objectSpread({}, fields);
    },
    addOffer: function addOffer(id) {
      var _this2 = this;

      axios.post("/api/front/partner/proposals/process/".concat(id, "?action=accepted"), {
        _method: 'PUT'
      }).then(function (_ref) {
        var data = _ref.data;

        if (data.data.result) {
          _this2.cards = _this2.cards.filter(function (i) {
            return i.id != id;
          });

          _this2.$store.dispatch('profile/getProposalsCounts');
        }
      });
    },
    deleteOffer: function deleteOffer(id) {
      var _this3 = this;

      var isConfirm = confirm('Sind Sie sicher, dass Sie den Auftrag löschen wollen?');

      if (isConfirm) {
        axios.post("/api/front/partner/proposals/process/".concat(id, "?action=rejected"), {
          _method: 'PUT'
        }).then(function (_ref2) {
          var data = _ref2.data;

          if (data.data.result) {
            _this3.cards = _this3.cards.filter(function (i) {
              return i.id != id;
            });

            _this3.$store.dispatch('profile/getProposalsCounts');
          }
        });
      }
    }
  },
  mounted: function mounted() {
    var _this4 = this;

    axios.get('/api/front/partner/proposals', {
      params: {
        status: this.requestsStatus
      }
    }).then(function (_ref3) {
      var data = _ref3.data;
      _this4.cards = data.data;
    });
  },
  components: {
    ProfileSearch: _components_ProfileSearch_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    Card: _components_Card_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
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

/***/ "./resources/js/components/ProfileSearch.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/ProfileSearch.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ProfileSearch_vue_vue_type_template_id_8056d854___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProfileSearch.vue?vue&type=template&id=8056d854& */ "./resources/js/components/ProfileSearch.vue?vue&type=template&id=8056d854&");
/* harmony import */ var _ProfileSearch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProfileSearch.vue?vue&type=script&lang=js& */ "./resources/js/components/ProfileSearch.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProfileSearch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProfileSearch_vue_vue_type_template_id_8056d854___WEBPACK_IMPORTED_MODULE_0__.render,
  _ProfileSearch_vue_vue_type_template_id_8056d854___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ProfileSearch.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/profiles/firma/views/Requests.vue":
/*!********************************************************!*\
  !*** ./resources/js/profiles/firma/views/Requests.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Requests_vue_vue_type_template_id_2b8366f0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Requests.vue?vue&type=template&id=2b8366f0& */ "./resources/js/profiles/firma/views/Requests.vue?vue&type=template&id=2b8366f0&");
/* harmony import */ var _Requests_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Requests.vue?vue&type=script&lang=js& */ "./resources/js/profiles/firma/views/Requests.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Requests_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Requests_vue_vue_type_template_id_2b8366f0___WEBPACK_IMPORTED_MODULE_0__.render,
  _Requests_vue_vue_type_template_id_2b8366f0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/profiles/firma/views/Requests.vue"
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

/***/ "./resources/js/components/ProfileSearch.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/ProfileSearch.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileSearch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProfileSearch.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ProfileSearch.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileSearch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/profiles/firma/views/Requests.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/profiles/firma/views/Requests.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Requests_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Requests.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/profiles/firma/views/Requests.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Requests_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

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

/***/ "./resources/js/components/ProfileSearch.vue?vue&type=template&id=8056d854&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/ProfileSearch.vue?vue&type=template&id=8056d854& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileSearch_vue_vue_type_template_id_8056d854___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileSearch_vue_vue_type_template_id_8056d854___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileSearch_vue_vue_type_template_id_8056d854___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProfileSearch.vue?vue&type=template&id=8056d854& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ProfileSearch.vue?vue&type=template&id=8056d854&");


/***/ }),

/***/ "./resources/js/profiles/firma/views/Requests.vue?vue&type=template&id=2b8366f0&":
/*!***************************************************************************************!*\
  !*** ./resources/js/profiles/firma/views/Requests.vue?vue&type=template&id=2b8366f0& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Requests_vue_vue_type_template_id_2b8366f0___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Requests_vue_vue_type_template_id_2b8366f0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Requests_vue_vue_type_template_id_2b8366f0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Requests.vue?vue&type=template&id=2b8366f0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/profiles/firma/views/Requests.vue?vue&type=template&id=2b8366f0&");


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
              _vm._v(_vm._s(_vm.offerType)),
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
          [_vm._v("\n            Anfrage Details\n        ")]
        ),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "offer__body" }, [
        _vm.isClient
          ? _c("p", { staticClass: "offer__desc" }, [
              _vm._v(_vm._s(_vm.offerDesc)),
            ])
          : _vm._e(),
        _vm._v(" "),
        _vm.isPartner
          ? _c("h4", [_vm._v(_vm._s(_vm.offerDirection))])
          : _vm._e(),
      ]),
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
              [_vm._v("\n            Vorgeschlagene Unternehmen\n        ")]
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
                [_vm._v("\n                Akzeptieren\n            ")]
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
                [_vm._v("\n                Download\n            ")]
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.isClient
            ? _c(
                "a",
                {
                  staticClass: "offer__edit",
                  attrs: {
                    href: "/proposal/edit/" + _vm.data.id,
                    type: "button",
                  },
                },
                [_vm._v("\n                Bearbeiten\n            ")]
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.isShowBtnCancel
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
                [_vm._v("\n                Ablehnen\n            ")]
              )
            : _vm._e(),
        ]),
      ]),
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
        ? _c("offer-details-transfer-cleaning", { attrs: { data: _vm.data } })
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
      _vm._v(" "),
      _vm.isClient && _vm.data.responded_partners.length
        ? _c("offer-companies", {
            attrs: {
              data: _vm.data.responded_partners,
              "offer-id": _vm.data.id,
            },
          })
        : _vm._e(),
      _vm._v(" "),
      _vm.data.price
        ? _c("p", { staticClass: "mt-2", staticStyle: { color: "#1072D8" } }, [
            _c("strong", [_vm._v("Preise " + _vm._s(_vm.data.price) + " €")]),
          ])
        : _vm._e(),
    ],
    1
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
              src: company.avatar || "/images/default-avatar.png",
              alt: "",
            },
          }),
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
            [_vm._v("\n                Profil anzeigen\n            ")]
          ),
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
            _vm._v(_vm._s(company.star_count) + " Bewertungen"),
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
  return _c("div", { staticClass: "offer-details" }, [
    _c("div", { staticClass: "offer-details__item" }, [
      _c("p", { staticClass: "offer-details__title" }, [_vm._v("Adresse")]),
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
      _c("p", { staticClass: "offer-details__title" }, [_vm._v("Termine")]),
      _vm._v(" "),
      _c("p", { staticClass: "offer-details__txt" }, [
        _vm._v(_vm._s(_vm.data.date_start)),
      ]),
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "offer-details__item" }, [
      _c("p", { staticClass: "offer-details__title" }, [_vm._v("Flexibel")]),
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
      _c("p", { staticClass: "offer-details__title" }, [_vm._v("Haus")]),
      _vm._v(" "),
      _c("p", { staticClass: "offer-details__txt" }, [
        _vm._v(
          "\n            " +
            _vm._s(_vm.data.additional_info.house_type) +
            ", \n            " +
            _vm._s(_vm.data.additional_info.square) +
            " m2, \n            " +
            _vm._s(_vm.data.additional_info.rooms) +
            " Zimmer, \n            " +
            _vm._s(_vm.data.additional_info.floor) +
            " Stock, \n            " +
            _vm._s(_vm.data.additional_info.lift) +
            "\n        "
        ),
      ]),
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "offer-details__item" }, [
      _c("p", { staticClass: "offer-details__title" }, [_vm._v("Bodentyp")]),
      _vm._v(" "),
      _c("p", { staticClass: "offer-details__txt" }, [
        _vm._v(_vm._s(_vm.data.additional_info.soil_type)),
      ]),
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "offer-details__item" }, [
      _c("p", { staticClass: "offer-details__title" }, [
        _vm._v("Fenstergröße"),
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
            _vm._v("Andere Info"),
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
      _c("p", { staticClass: "offer-details__title" }, [_vm._v("Bemerkungen")]),
      _vm._v(" "),
      _c("p", { staticClass: "offer-details__txt" }, [
        _vm._v("\n            " + _vm._s(_vm.data.description) + "\n        "),
      ]),
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "offer-details__item" }, [
      _c("p", { staticClass: "offer-details__title" }, [
        _vm._v("Kontaktdaten"),
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "offer-details__txt" }, [
        _vm._v(
          "\n            " +
            _vm._s(_vm.data.client.name) +
            " " +
            _vm._s(_vm.data.client.lastname) +
            ", \n            Telefon " +
            _vm._s(_vm.data.client.phone) +
            ", \n            " +
            _vm._s(_vm.data.client.email) +
            "\n        "
        ),
      ]),
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "offer-details__item" }, [
      _c("p", { staticClass: "offer-details__title" }, [
        _vm._v("Erreichbarkeit"),
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "offer-details__txt" }, [
        _vm._v(
          "\n            " + _vm._s(_vm.data.client.availability) + "\n        "
        ),
      ]),
    ]),
  ])
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
  return _c("div", { staticClass: "offer-details" }, [
    _c("div", { staticClass: "offer-details__item" }, [
      _c("p", { staticClass: "offer-details__title" }, [_vm._v("Adresse")]),
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
      _c("p", { staticClass: "offer-details__title" }, [_vm._v("Termine")]),
      _vm._v(" "),
      _c("p", { staticClass: "offer-details__txt" }, [
        _vm._v(_vm._s(_vm.data.date_start)),
      ]),
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "offer-details__item" }, [
      _c("p", { staticClass: "offer-details__title" }, [_vm._v("Flexibel")]),
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
      _c("p", { staticClass: "offer-details__title" }, [_vm._v("Bemerkungen")]),
      _vm._v(" "),
      _c("p", { staticClass: "offer-details__txt" }, [
        _vm._v("\n            " + _vm._s(_vm.data.description) + "\n        "),
      ]),
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "offer-details__item" }, [
      _c("p", { staticClass: "offer-details__title" }, [
        _vm._v("Kontaktdaten"),
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "offer-details__txt" }, [
        _vm._v(
          "\n            " +
            _vm._s(_vm.data.client.name) +
            " " +
            _vm._s(_vm.data.client.lastname) +
            ", \n            Telefon " +
            _vm._s(_vm.data.client.phone) +
            ", \n            " +
            _vm._s(_vm.data.client.email) +
            "\n        "
        ),
      ]),
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "offer-details__item" }, [
      _c("p", { staticClass: "offer-details__title" }, [
        _vm._v("Erreichbarkeit"),
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "offer-details__txt" }, [
        _vm._v(
          "\n            " + _vm._s(_vm.data.client.availability) + "\n        "
        ),
      ]),
    ]),
  ])
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
  return _c("div", { staticClass: "offer-details" }, [
    _c("div", { staticClass: "offer-details__item" }, [
      _c("p", { staticClass: "offer-details__title" }, [_vm._v("Adresse")]),
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
      _c("p", { staticClass: "offer-details__title" }, [_vm._v("Termine")]),
      _vm._v(" "),
      _c("p", { staticClass: "offer-details__txt" }, [
        _vm._v(_vm._s(_vm.data.date_start)),
      ]),
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "offer-details__item" }, [
      _c("p", { staticClass: "offer-details__title" }, [_vm._v("Auszug")]),
      _vm._v(" "),
      _c("p", { staticClass: "offer-details__txt" }, [
        _vm._v(
          "\n            " +
            _vm._s(_vm.data.additional_info.from.house_type) +
            ", \n            " +
            _vm._s(_vm.data.additional_info.from.square) +
            " m2, \n            " +
            _vm._s(_vm.data.additional_info.from.rooms) +
            " Zimmer, \n            " +
            _vm._s(_vm.data.additional_info.from.floor) +
            " Stock, \n            " +
            _vm._s(_vm.data.additional_info.from.lift) +
            "\n        "
        ),
      ]),
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "offer-details__item" }, [
      _c("p", { staticClass: "offer-details__title" }, [_vm._v("Einzug")]),
      _vm._v(" "),
      _c("p", { staticClass: "offer-details__txt" }, [
        _vm._v(
          "\n            " +
            _vm._s(_vm.data.additional_info.to.house_type) +
            ", \n            " +
            _vm._s(_vm.data.additional_info.to.square) +
            " m2, \n            " +
            _vm._s(_vm.data.additional_info.to.floor) +
            " Stock, \n            " +
            _vm._s(_vm.data.additional_info.to.lift) +
            "\n        "
        ),
      ]),
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "offer-details__item" }, [
      _c("p", { staticClass: "offer-details__title" }, [_vm._v("Flexibel")]),
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
            _vm._v("Andere Info"),
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
      _c("p", { staticClass: "offer-details__title" }, [_vm._v("Bemerkungen")]),
      _vm._v(" "),
      _c("p", { staticClass: "offer-details__txt" }, [
        _vm._v("\n            " + _vm._s(_vm.data.description) + "\n        "),
      ]),
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "offer-details__item" }, [
      _c("p", { staticClass: "offer-details__title" }, [
        _vm._v("Kontaktdaten"),
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "offer-details__txt" }, [
        _vm._v(
          "\n            " +
            _vm._s(_vm.data.client.name) +
            " " +
            _vm._s(_vm.data.client.lastname) +
            ", \n            Telefon " +
            _vm._s(_vm.data.client.phone) +
            ", \n            " +
            _vm._s(_vm.data.client.email) +
            "\n        "
        ),
      ]),
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "offer-details__item" }, [
      _c("p", { staticClass: "offer-details__title" }, [
        _vm._v("Erreichbarkeit"),
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "offer-details__txt" }, [
        _vm._v(
          "\n            " + _vm._s(_vm.data.client.availability) + "\n        "
        ),
      ]),
    ]),
  ])
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
  return _c("div", { staticClass: "offer-details" }, [
    _c("div", { staticClass: "offer-details__item" }, [
      _c("p", { staticClass: "offer-details__title" }, [_vm._v("Adresse")]),
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
      _c("p", { staticClass: "offer-details__title" }, [_vm._v("Termine")]),
      _vm._v(" "),
      _c("p", { staticClass: "offer-details__txt" }, [
        _vm._v(_vm._s(_vm.data.date_start)),
      ]),
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "offer-details__item" }, [
      _c("p", { staticClass: "offer-details__title" }, [_vm._v("Flexibel")]),
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
      _c("p", { staticClass: "offer-details__title" }, [_vm._v("Auszug")]),
      _vm._v(" "),
      _c("p", { staticClass: "offer-details__txt" }, [
        _vm._v(
          "\n            " +
            _vm._s(_vm.data.additional_info.from.house_type) +
            ", \n            " +
            _vm._s(_vm.data.additional_info.from.square) +
            " m2, \n            " +
            _vm._s(_vm.data.additional_info.from.rooms) +
            " Zimmer, \n            " +
            _vm._s(_vm.data.additional_info.from.floor) +
            " Stock, \n            " +
            _vm._s(_vm.data.additional_info.from.lift) +
            "\n        "
        ),
      ]),
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "offer-details__item" }, [
      _c("p", { staticClass: "offer-details__title" }, [_vm._v("Einzug")]),
      _vm._v(" "),
      _c("p", { staticClass: "offer-details__txt" }, [
        _vm._v(
          "\n            " +
            _vm._s(_vm.data.additional_info.to.house_type) +
            ", \n            " +
            _vm._s(_vm.data.additional_info.to.square) +
            " m2, \n            " +
            _vm._s(_vm.data.additional_info.to.floor) +
            " Stock, \n            " +
            _vm._s(_vm.data.additional_info.to.lift) +
            "\n        "
        ),
      ]),
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "offer-details__item" }, [
      _c("p", { staticClass: "offer-details__title" }, [_vm._v("Bodentyp")]),
      _vm._v(" "),
      _c("p", { staticClass: "offer-details__txt" }, [
        _vm._v(_vm._s(_vm.data.additional_info.soil_type)),
      ]),
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "offer-details__item" }, [
      _c("p", { staticClass: "offer-details__title" }, [
        _vm._v("Fenstergröße"),
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
            _vm._v("Andere Info"),
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
      _c("p", { staticClass: "offer-details__title" }, [_vm._v("Bemerkungen")]),
      _vm._v(" "),
      _c("p", { staticClass: "offer-details__txt" }, [
        _vm._v("\n            " + _vm._s(_vm.data.description) + "\n        "),
      ]),
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "offer-details__item" }, [
      _c("p", { staticClass: "offer-details__title" }, [
        _vm._v("Kontaktdaten"),
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "offer-details__txt" }, [
        _vm._v(
          "\n            " +
            _vm._s(_vm.data.client.name) +
            " " +
            _vm._s(_vm.data.client.lastname) +
            ", \n            Telefon " +
            _vm._s(_vm.data.client.phone) +
            ", \n            " +
            _vm._s(_vm.data.client.email) +
            "\n        "
        ),
      ]),
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "offer-details__item" }, [
      _c("p", { staticClass: "offer-details__title" }, [
        _vm._v("Erreichbarkeit"),
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "offer-details__txt" }, [
        _vm._v(
          "\n            " + _vm._s(_vm.data.client.availability) + "\n        "
        ),
      ]),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ProfileSearch.vue?vue&type=template&id=8056d854&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ProfileSearch.vue?vue&type=template&id=8056d854& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
      staticClass: "profile-search",
      on: {
        submit: function ($event) {
          $event.preventDefault()
          return _vm.$emit("search", _vm.fields)
        },
      },
    },
    [
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.fields.search,
            expression: "fields.search",
          },
        ],
        attrs: { type: "text", placeholder: "Suchen" },
        domProps: { value: _vm.fields.search },
        on: {
          input: function ($event) {
            if ($event.target.composing) {
              return
            }
            _vm.$set(_vm.fields, "search", $event.target.value)
          },
        },
      }),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-md-4 mt-4" }, [
          _c(
            "select",
            {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.fields.year,
                  expression: "fields.year",
                },
              ],
              on: {
                change: function ($event) {
                  var $$selectedVal = Array.prototype.filter
                    .call($event.target.options, function (o) {
                      return o.selected
                    })
                    .map(function (o) {
                      var val = "_value" in o ? o._value : o.value
                      return val
                    })
                  _vm.$set(
                    _vm.fields,
                    "year",
                    $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                  )
                },
              },
            },
            [
              _c("option", { attrs: { value: "", selected: "" } }, [
                _vm._v("Jahr wählen"),
              ]),
              _vm._v(" "),
              _c("option", { domProps: { value: new Date().getFullYear() } }, [
                _vm._v(_vm._s(new Date().getFullYear())),
              ]),
              _vm._v(" "),
              _c(
                "option",
                { domProps: { value: new Date().getFullYear() + 1 } },
                [_vm._v(_vm._s(new Date().getFullYear() + 1))]
              ),
              _vm._v(" "),
              _c(
                "option",
                { domProps: { value: new Date().getFullYear() + 2 } },
                [_vm._v(_vm._s(new Date().getFullYear() + 2))]
              ),
            ]
          ),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-4 mt-4" }, [
          _c(
            "select",
            {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.fields.month,
                  expression: "fields.month",
                },
              ],
              on: {
                change: function ($event) {
                  var $$selectedVal = Array.prototype.filter
                    .call($event.target.options, function (o) {
                      return o.selected
                    })
                    .map(function (o) {
                      var val = "_value" in o ? o._value : o.value
                      return val
                    })
                  _vm.$set(
                    _vm.fields,
                    "month",
                    $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                  )
                },
              },
            },
            [
              _c("option", { attrs: { value: "", selected: "" } }, [
                _vm._v("Monat wählen"),
              ]),
              _vm._v(" "),
              _c("option", { attrs: { value: "1" } }, [_vm._v("Januar")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "2" } }, [_vm._v("Februar")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "3" } }, [_vm._v("März")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "4" } }, [_vm._v("April")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "5" } }, [_vm._v("Mai")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "6" } }, [_vm._v("Juni")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "7" } }, [_vm._v("Juli")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "8" } }, [_vm._v("August")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "9" } }, [_vm._v("September")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "10" } }, [_vm._v("Oktober")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "11" } }, [_vm._v("November")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "12" } }, [_vm._v("Dezember")]),
            ]
          ),
        ]),
        _vm._v(" "),
        _vm._m(0),
      ]),
    ]
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "col-md-4 mt-4 d-flex justify-content-end" },
      [_c("input", { attrs: { type: "submit", value: "Suchen" } })]
    )
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/profiles/firma/views/Requests.vue?vue&type=template&id=2b8366f0&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/profiles/firma/views/Requests.vue?vue&type=template&id=2b8366f0& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
    [
      _c("h4", { staticClass: "d-block d-lg-none mb-3" }, [
        _vm._v(_vm._s(_vm.requestsText)),
      ]),
      _vm._v(" "),
      _c("profile-search", { on: { search: _vm.formSearch } }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "mt-5" },
        _vm._l(_vm.formattedCards, function (card) {
          return _c("card", {
            key: card.id,
            staticClass: "mt-4",
            attrs: {
              data: card,
              "type-job-id": card.type_job_id,
              "is-show-btn-download": _vm.isShowBtnDownload,
              "is-show-btn-cancel": _vm.isShowBtnCancel,
              "is-show-btn-add": _vm.isShowBtnAdd,
            },
            on: { deleteOffer: _vm.deleteOffer, addOffer: _vm.addOffer },
          })
        }),
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);