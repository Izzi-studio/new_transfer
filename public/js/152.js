(self.webpackChunk=self.webpackChunk||[]).push([[152],{757:(e,t,r)=>{e.exports=r(666)},666:e=>{var t=function(e){"use strict";var t,r=Object.prototype,i=r.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",a=n.asyncIterator||"@@asyncIterator",s=n.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(e){l=function(e,t,r){return e[t]=r}}function c(e,t,r,i){var n=t&&t.prototype instanceof v?t:v,o=Object.create(n.prototype),a=new L(i||[]);return o._invoke=function(e,t,r){var i=u;return function(n,o){if(i===m)throw new Error("Generator is already running");if(i===p){if("throw"===n)throw o;return F()}for(r.method=n,r.arg=o;;){var a=r.delegate;if(a){var s=S(a,r);if(s){if(s===h)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(i===u)throw i=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);i=m;var l=d(e,t,r);if("normal"===l.type){if(i=r.done?p:f,l.arg===h)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(i=p,r.method="throw",r.arg=l.arg)}}}(e,r,a),o}function d(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=c;var u="suspendedStart",f="suspendedYield",m="executing",p="completed",h={};function v(){}function _(){}function b(){}var g={};l(g,o,(function(){return this}));var y=Object.getPrototypeOf,w=y&&y(y(N([])));w&&w!==r&&i.call(w,o)&&(g=w);var x=b.prototype=v.prototype=Object.create(g);function k(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function C(e,t){function r(n,o,a,s){var l=d(e[n],e,o);if("throw"!==l.type){var c=l.arg,u=c.value;return u&&"object"==typeof u&&i.call(u,"__await")?t.resolve(u.__await).then((function(e){r("next",e,a,s)}),(function(e){r("throw",e,a,s)})):t.resolve(u).then((function(e){c.value=e,a(c)}),(function(e){return r("throw",e,a,s)}))}s(l.arg)}var n;this._invoke=function(e,i){function o(){return new t((function(t,n){r(e,i,t,n)}))}return n=n?n.then(o,o):o()}}function S(e,r){var i=e.iterator[r.method];if(i===t){if(r.delegate=null,"throw"===r.method){if(e.iterator.return&&(r.method="return",r.arg=t,S(e,r),"throw"===r.method))return h;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var n=d(i,e.iterator,r.arg);if("throw"===n.type)return r.method="throw",r.arg=n.arg,r.delegate=null,h;var o=n.arg;return o?o.done?(r[e.resultName]=o.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,h):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,h)}function $(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function E(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function L(e){this.tryEntries=[{tryLoc:"root"}],e.forEach($,this),this.reset(!0)}function N(e){if(e){var r=e[o];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,a=function r(){for(;++n<e.length;)if(i.call(e,n))return r.value=e[n],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}return{next:F}}function F(){return{value:t,done:!0}}return _.prototype=b,l(x,"constructor",b),l(b,"constructor",_),_.displayName=l(b,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===_||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,b):(e.__proto__=b,l(e,s,"GeneratorFunction")),e.prototype=Object.create(x),e},e.awrap=function(e){return{__await:e}},k(C.prototype),l(C.prototype,a,(function(){return this})),e.AsyncIterator=C,e.async=function(t,r,i,n,o){void 0===o&&(o=Promise);var a=new C(c(t,r,i,n),o);return e.isGeneratorFunction(r)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},k(x),l(x,s,"Generator"),l(x,o,(function(){return this})),l(x,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var i=t.pop();if(i in e)return r.value=i,r.done=!1,r}return r.done=!0,r}},e.values=N,L.prototype={constructor:L,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(E),!e)for(var r in this)"t"===r.charAt(0)&&i.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function n(i,n){return s.type="throw",s.arg=e,r.next=i,n&&(r.method="next",r.arg=t),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var l=i.call(a,"catchLoc"),c=i.call(a,"finallyLoc");if(l&&c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,h):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),h},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),E(r),h}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var i=r.completion;if("throw"===i.type){var n=i.arg;E(r)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,i){return this.delegate={iterator:N(e),resultName:r,nextLoc:i},"next"===this.method&&(this.arg=t),h}},e}(e.exports);try{regeneratorRuntime=t}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=t:Function("r","regeneratorRuntime = r")(t)}},64:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var i=r(757),n=r.n(i);function o(e,t,r,i,n,o,a){try{var s=e[o](a),l=s.value}catch(e){return void r(e)}s.done?t(l):Promise.resolve(l).then(i,n)}const a={data:function(){return{fields:{"client[gender]":"Herr","client[name]":"","client[lastname]":"","client[phone]":"","client[email]":"","client[availability]":""},fieldsGroupName:"contact",isSended:!1}},computed:{isHasEmail:function(){return this.$store.state.stepsForms.isHasEmail}},methods:{formHandler:function(){var e,t=this;return(e=n().mark((function e(){return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("stepsForms/checkEmail",{email:t.fields["client[email]"]});case 2:if(t.isSended=!0,!t.isHasEmail){e.next=5;break}return e.abrupt("return");case 5:t.$store.commit("stepsForms/setData",{key:t.fieldsGroupName,data:t.fields}),t.$store.dispatch("stepsForms/sendData");case 7:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(i,n){var a=e.apply(t,r);function s(e){o(a,i,n,s,l,"next",e)}function l(e){o(a,i,n,s,l,"throw",e)}s(void 0)}))})()}}};const s=(0,r(900).Z)(a,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("form",{staticClass:"steps-form__form",on:{submit:function(t){return t.preventDefault(),e.formHandler.apply(null,arguments)},input:function(t){e.isSended=!1}}},[r("div",{staticClass:"row mt-5"},[r("div",{staticClass:"col-xl-8"},[r("button",{staticClass:"btn btn_theme_gray",attrs:{type:"button"},on:{click:function(t){return e.$store.commit("stepsForms/prevStep")}}},[e._v("\n                Zurück\n            ")]),e._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-6 mt-4"},[r("div",{staticClass:"form-field"},[r("p",{staticClass:"form-field__label"},[e._v("Anrede*")]),e._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:e.fields["client[gender]"],expression:"fields['client[gender]']"}],attrs:{required:""},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.fields,"client[gender]",t.target.multiple?r:r[0])}}},[r("option",{attrs:{value:"Herr"}},[e._v("Herr")]),e._v(" "),r("option",{attrs:{value:"Frau"}},[e._v("Frau")])])])]),e._v(" "),r("div",{staticClass:"col-md-6 mt-4"},[r("form-field",{attrs:{label:"Vorname*",type:"text",required:"",placeholder:"Vorname*"},model:{value:e.fields["client[name]"],callback:function(t){e.$set(e.fields,"client[name]",t)},expression:"fields['client[name]']"}})],1),e._v(" "),r("div",{staticClass:"col-md-6 mt-4"},[r("form-field",{attrs:{label:"Nachname*",type:"text",required:"",placeholder:"Nachname*"},model:{value:e.fields["client[lastname]"],callback:function(t){e.$set(e.fields,"client[lastname]",t)},expression:"fields['client[lastname]']"}})],1),e._v(" "),r("div",{staticClass:"col-md-6 mt-4"},[r("form-field",{attrs:{label:"Telefon*",type:"tel",placeholder:"Telefon*"},model:{value:e.fields["client[phone]"],callback:function(t){e.$set(e.fields,"client[phone]",t)},expression:"fields['client[phone]']"}})],1),e._v(" "),r("div",{staticClass:"col-md-6 mt-4"},[r("form-field",{attrs:{label:"E-Mail*",type:"email",required:"",placeholder:"E-Mail*"},model:{value:e.fields["client[email]"],callback:function(t){e.$set(e.fields,"client[email]",t)},expression:"fields['client[email]']"}}),e._v(" "),r("p",{directives:[{name:"show",rawName:"v-show",value:e.isHasEmail&&e.isSended,expression:"isHasEmail && isSended"}],staticClass:"text-danger mt-3"},[e._v("E-Mail existiert bereits!")])],1),e._v(" "),r("div",{staticClass:"col-md-6 mt-4"},[r("form-field",{attrs:{label:"Erreichbarkeit*",type:"text",required:"",placeholder:"Erreichbarkeit*"},model:{value:e.fields["client[availability]"],callback:function(t){e.$set(e.fields,"client[availability]",t)},expression:"fields['client[availability]']"}})],1)]),e._v(" "),r("button",{staticClass:"btn mt-5"},[e._v("Weiter")])])])])}),[],!1,null,null,null).exports},173:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});const i={props:["progressText","currentStep"],computed:{totalSteps:function(){return this.progressText.length},classObject:function(){return{"form-progress_steps_3":3===this.totalSteps,"form-progress_steps_more-3":this.totalSteps>3}}}};const n=(0,r(900).Z)(i,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"form-progress",class:e.classObject},e._l(e.progressText,(function(t,i){return r("p",{key:t,staticClass:"form-progress__item",class:{"form-progress__item_active":e.currentStep>=i+1}},[r("span",[e._v(e._s(t))])])})),0)}),[],!1,null,null,null).exports},152:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>c});var i=r(173),n=r(64);const o={data:function(){return{fields:{"additional_info[zip]":"","additional_info[city]":"","additional_info[street]":"","proposal[region_id]":"","additional_info[number]":"","additional_info[work_should_be_done]":[],"proposal[date_start]":"","additional_info[dayrange]":"Nicht Flexibel","proposal[description]":"","proposal[type_job_id]":"9",_token:""},isSended:!1,fieldsGroupName:"from",date:new Date}},computed:{regions:function(){return this.$store.state.stepsForms.regions},csrfToken:function(){return document.querySelector('meta[name="csrf-token"]').content},isSelectedCheckboxes:function(){return!!this.fields["additional_info[work_should_be_done]"].length}},watch:{date:function(){this.updateDate()}},mounted:function(){this.updateDate()},methods:{updateDate:function(){var e=this;setTimeout((function(){e.fields["proposal[date_start]"]=e.$refs.datePicker.text}))},formHandler:function(){this.isSended=!0,this.isSelectedCheckboxes&&(this.$store.commit("stepsForms/setData",{key:this.fieldsGroupName,data:this.fields}),this.isAuth?this.$store.dispatch("stepsForms/sendData"):this.$store.commit("stepsForms/nextStep"))}}};var a=r(900);const s=(0,a.Z)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("form",{staticClass:"steps-form__form",on:{submit:function(t){return t.preventDefault(),e.formHandler.apply(null,arguments)},input:function(t){e.isSended=!1}}},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-xl-8"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-6 mt-4"},[r("div",{staticClass:"form-field"},[r("p",{staticClass:"form-field__label"},[e._v("Region*")]),e._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:e.fields["proposal[region_id]"],expression:"fields['proposal[region_id]']"}],attrs:{required:""},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.fields,"proposal[region_id]",t.target.multiple?r:r[0])}}},e._l(e.regions,(function(t){return r("option",{key:t.id,domProps:{value:t.id}},[e._v("\n                                "+e._s(t.name)+"\n                            ")])})),0)])]),e._v(" "),r("div",{staticClass:"col-md-6 mt-4"},[r("form-field",{attrs:{label:"PLZ*",type:"number",required:"",placeholder:"PLZ*"},model:{value:e.fields["additional_info[zip]"],callback:function(t){e.$set(e.fields,"additional_info[zip]",t)},expression:"fields['additional_info[zip]']"}})],1),e._v(" "),r("div",{staticClass:"col-md-6 mt-4"},[r("form-field",{attrs:{label:"Ort*",type:"text",required:"",placeholder:"Ort*"},model:{value:e.fields["additional_info[city]"],callback:function(t){e.$set(e.fields,"additional_info[city]",t)},expression:"fields['additional_info[city]']"}})],1),e._v(" "),r("div",{staticClass:"col-md-6 mt-4"},[r("form-field",{attrs:{label:"Strasse*",type:"text",required:"",placeholder:"Strasse*"},model:{value:e.fields["additional_info[street]"],callback:function(t){e.$set(e.fields,"additional_info[street]",t)},expression:"fields['additional_info[street]']"}})],1),e._v(" "),r("div",{staticClass:"col-md-6 mt-4"},[r("form-field",{attrs:{label:"Nr",type:"text",placeholder:"Nr"},model:{value:e.fields["additional_info[number]"],callback:function(t){e.$set(e.fields,"additional_info[number]",t)},expression:"fields['additional_info[number]']"}})],1),e._v(" "),r("div",{staticClass:"col-md-6 mt-4"},[r("div",{staticClass:"form-field"},[r("p",{staticClass:"form-field__label"},[e._v("Auftragsdatum*")]),e._v(" "),r("date-picker",{ref:"datePicker",attrs:{clearable:!1,format:"DD.MM.YYYY"},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}})],1)])]),e._v(" "),r("h5",{staticClass:"mt-5"},[e._v("Was soll gemacht werden?")]),e._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-6 mt-4"},[r("form-checkbox",{attrs:{val:"Möbel",label:"Möbel"},model:{value:e.fields["additional_info[work_should_be_done]"],callback:function(t){e.$set(e.fields,"additional_info[work_should_be_done]",t)},expression:"fields['additional_info[work_should_be_done]']"}})],1),e._v(" "),r("div",{staticClass:"col-md-6 mt-4"},[r("form-checkbox",{attrs:{val:"Haustüre",label:"Haustüre"},model:{value:e.fields["additional_info[work_should_be_done]"],callback:function(t){e.$set(e.fields,"additional_info[work_should_be_done]",t)},expression:"fields['additional_info[work_should_be_done]']"}})],1),e._v(" "),r("div",{staticClass:"col-md-6 mt-4"},[r("form-checkbox",{attrs:{val:"Decke",label:"Decke"},model:{value:e.fields["additional_info[work_should_be_done]"],callback:function(t){e.$set(e.fields,"additional_info[work_should_be_done]",t)},expression:"fields['additional_info[work_should_be_done]']"}})],1),e._v(" "),r("div",{staticClass:"col-md-6 mt-4"},[r("form-checkbox",{attrs:{val:"Zimmertüre",label:"Zimmertüre"},model:{value:e.fields["additional_info[work_should_be_done]"],callback:function(t){e.$set(e.fields,"additional_info[work_should_be_done]",t)},expression:"fields['additional_info[work_should_be_done]']"}})],1),e._v(" "),r("div",{staticClass:"col-md-6 mt-4"},[r("form-checkbox",{attrs:{val:"Küche",label:"Küche"},model:{value:e.fields["additional_info[work_should_be_done]"],callback:function(t){e.$set(e.fields,"additional_info[work_should_be_done]",t)},expression:"fields['additional_info[work_should_be_done]']"}})],1),e._v(" "),r("div",{staticClass:"col-md-6 mt-4"},[r("form-checkbox",{attrs:{val:"Weitere",label:"Weitere"},model:{value:e.fields["additional_info[work_should_be_done]"],callback:function(t){e.$set(e.fields,"additional_info[work_should_be_done]",t)},expression:"fields['additional_info[work_should_be_done]']"}})],1)]),e._v(" "),r("p",{directives:[{name:"show",rawName:"v-show",value:!e.isSelectedCheckboxes&&e.isSended,expression:"!isSelectedCheckboxes && isSended"}],staticClass:"text-danger mt-3"},[e._v("Bitte wählen Sie etwas aus der Liste aus!")]),e._v(" "),r("h5",{staticClass:"mt-5"},[e._v("Flexibilität")]),e._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-6 mt-4"},[r("form-radio",{attrs:{val:"Nicht Flexibel",label:"Nicht Flexibel"},model:{value:e.fields["additional_info[dayrange]"],callback:function(t){e.$set(e.fields,"additional_info[dayrange]",t)},expression:"fields['additional_info[dayrange]']"}})],1),e._v(" "),r("div",{staticClass:"col-md-6 mt-4"},[r("form-radio",{attrs:{val:"+/- 1 Tag",label:"+/- 1 Tag"},model:{value:e.fields["additional_info[dayrange]"],callback:function(t){e.$set(e.fields,"additional_info[dayrange]",t)},expression:"fields['additional_info[dayrange]']"}})],1),e._v(" "),r("div",{staticClass:"col-md-6 mt-4"},[r("form-radio",{attrs:{val:"+/- 2 Tagen",label:"+/- 2 Tagen"},model:{value:e.fields["additional_info[dayrange]"],callback:function(t){e.$set(e.fields,"additional_info[dayrange]",t)},expression:"fields['additional_info[dayrange]']"}})],1),e._v(" "),r("div",{staticClass:"col-md-6 mt-4"},[r("form-radio",{attrs:{val:"+/- 3 Tagen",label:"+/- 3 Tagen"},model:{value:e.fields["additional_info[dayrange]"],callback:function(t){e.$set(e.fields,"additional_info[dayrange]",t)},expression:"fields['additional_info[dayrange]']"}})],1)]),e._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-12 mt-4"},[r("div",{staticClass:"form-field"},[r("p",{staticClass:"form-field__label"},[e._v("Bemerkungen")]),e._v(" "),r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.fields["proposal[description]"],expression:"fields['proposal[description]']"}],attrs:{placeholder:"Bemerkungen"},domProps:{value:e.fields["proposal[description]"]},on:{input:function(t){t.target.composing||e.$set(e.fields,"proposal[description]",t.target.value)}}})])])]),e._v(" "),r("button",{staticClass:"btn mt-5"},[e._v("Weiter")])])])])}),[],!1,null,null,null).exports,l={props:["urlHandler"],data:function(){return{}},computed:{currentStep:function(){return this.$store.state.stepsForms.currentStep},progressText:function(){return this.isAuth?["Beschreibung der Arbeit"]:["Beschreibung der Arbeit","Kontakt"]},isAuth:function(){return"true"==document.querySelector("body").dataset.isAuth}},mounted:function(){this.$store.dispatch("stepsForms/getRegions"),this.$store.commit("stepsForms/setUrlHandler",this.urlHandler)},components:{FormProgress:i.Z,Contact:n.Z,DescWork:s}};const c=(0,a.Z)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e.progressText.length>1?r("form-progress",{staticClass:"mt-5",attrs:{"progress-text":e.progressText,"current-step":e.currentStep}}):e._e(),e._v(" "),r("desc-work",{directives:[{name:"show",rawName:"v-show",value:1===e.currentStep,expression:"currentStep === 1"}]}),e._v(" "),r("contact",{directives:[{name:"show",rawName:"v-show",value:2===e.currentStep,expression:"currentStep === 2"}]})],1)}),[],!1,null,null,null).exports}}]);