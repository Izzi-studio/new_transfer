(self.webpackChunk=self.webpackChunk||[]).push([[857],{7757:(t,e,i)=>{t.exports=i(5666)},5666:t=>{var e=function(t){"use strict";var e,i=Object.prototype,r=i.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},n=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function l(t,e,i){return Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,i){return t[e]=i}}function d(t,e,i,r){var o=e&&e.prototype instanceof v?e:v,n=Object.create(o.prototype),a=new L(r||[]);return n._invoke=function(t,e,i){var r=u;return function(o,n){if(r===p)throw new Error("Generator is already running");if(r===m){if("throw"===o)throw n;return N()}for(i.method=o,i.arg=n;;){var a=i.delegate;if(a){var s=$(a,i);if(s){if(s===h)continue;return s}}if("next"===i.method)i.sent=i._sent=i.arg;else if("throw"===i.method){if(r===u)throw r=m,i.arg;i.dispatchException(i.arg)}else"return"===i.method&&i.abrupt("return",i.arg);r=p;var l=c(t,e,i);if("normal"===l.type){if(r=i.done?m:f,l.arg===h)continue;return{value:l.arg,done:i.done}}"throw"===l.type&&(r=m,i.method="throw",i.arg=l.arg)}}}(t,i,a),n}function c(t,e,i){try{return{type:"normal",arg:t.call(e,i)}}catch(t){return{type:"throw",arg:t}}}t.wrap=d;var u="suspendedStart",f="suspendedYield",p="executing",m="completed",h={};function v(){}function _(){}function b(){}var y={};l(y,n,(function(){return this}));var g=Object.getPrototypeOf,w=g&&g(g(F([])));w&&w!==i&&r.call(w,n)&&(y=w);var x=b.prototype=v.prototype=Object.create(y);function k(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function C(t,e){function i(o,n,a,s){var l=c(t[o],t,n);if("throw"!==l.type){var d=l.arg,u=d.value;return u&&"object"==typeof u&&r.call(u,"__await")?e.resolve(u.__await).then((function(t){i("next",t,a,s)}),(function(t){i("throw",t,a,s)})):e.resolve(u).then((function(t){d.value=t,a(d)}),(function(t){return i("throw",t,a,s)}))}s(l.arg)}var o;this._invoke=function(t,r){function n(){return new e((function(e,o){i(t,r,e,o)}))}return o=o?o.then(n,n):n()}}function $(t,i){var r=t.iterator[i.method];if(r===e){if(i.delegate=null,"throw"===i.method){if(t.iterator.return&&(i.method="return",i.arg=e,$(t,i),"throw"===i.method))return h;i.method="throw",i.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var o=c(r,t.iterator,i.arg);if("throw"===o.type)return i.method="throw",i.arg=o.arg,i.delegate=null,h;var n=o.arg;return n?n.done?(i[t.resultName]=n.value,i.next=t.nextLoc,"return"!==i.method&&(i.method="next",i.arg=e),i.delegate=null,h):n:(i.method="throw",i.arg=new TypeError("iterator result is not an object"),i.delegate=null,h)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function F(t){if(t){var i=t[n];if(i)return i.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function i(){for(;++o<t.length;)if(r.call(t,o))return i.value=t[o],i.done=!1,i;return i.value=e,i.done=!0,i};return a.next=a}}return{next:N}}function N(){return{value:e,done:!0}}return _.prototype=b,l(x,"constructor",b),l(b,"constructor",_),_.displayName=l(b,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===_||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,l(t,s,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},k(C.prototype),l(C.prototype,a,(function(){return this})),t.AsyncIterator=C,t.async=function(e,i,r,o,n){void 0===n&&(n=Promise);var a=new C(d(e,i,r,o),n);return t.isGeneratorFunction(i)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},k(x),l(x,s,"Generator"),l(x,n,(function(){return this})),l(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var i in t)e.push(i);return e.reverse(),function i(){for(;e.length;){var r=e.pop();if(r in t)return i.value=r,i.done=!1,i}return i.done=!0,i}},t.values=F,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(E),!t)for(var i in this)"t"===i.charAt(0)&&r.call(this,i)&&!isNaN(+i.slice(1))&&(this[i]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var i=this;function o(r,o){return s.type="throw",s.arg=t,i.next=r,o&&(i.method="next",i.arg=e),!!o}for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n],s=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var l=r.call(a,"catchLoc"),d=r.call(a,"finallyLoc");if(l&&d){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!d)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var n=o;break}}n&&("break"===t||"continue"===t)&&n.tryLoc<=e&&e<=n.finallyLoc&&(n=null);var a=n?n.completion:{};return a.type=t,a.arg=e,n?(this.method="next",this.next=n.finallyLoc,h):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var i=this.tryEntries[e];if(i.finallyLoc===t)return this.complete(i.completion,i.afterLoc),E(i),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var i=this.tryEntries[e];if(i.tryLoc===t){var r=i.completion;if("throw"===r.type){var o=r.arg;E(i)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,i,r){return this.delegate={iterator:F(t),resultName:i,nextLoc:r},"next"===this.method&&(this.arg=e),h}},t}(t.exports);try{regeneratorRuntime=e}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=e:Function("r","regeneratorRuntime = r")(e)}},64:(t,e,i)=>{"use strict";i.d(e,{Z:()=>s});var r=i(7757),o=i.n(r);function n(t,e,i,r,o,n,a){try{var s=t[n](a),l=s.value}catch(t){return void i(t)}s.done?e(l):Promise.resolve(l).then(r,o)}const a={data:function(){return{fields:{"client[gender]":"Herr","client[name]":"","client[lastname]":"","client[phone]":"","client[email]":"","client[availability]":""},fieldsGroupName:"contact",isSended:!1}},computed:{isHasEmail:function(){return this.$store.state.stepsForms.isHasEmail}},methods:{formHandler:function(){var t,e=this;return(t=o().mark((function t(){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("stepsForms/checkEmail",{email:e.fields["client[email]"]});case 2:if(e.isSended=!0,!e.isHasEmail){t.next=5;break}return t.abrupt("return");case 5:e.$store.commit("stepsForms/setData",{key:e.fieldsGroupName,data:e.fields}),e.$store.dispatch("stepsForms/sendData");case 7:case"end":return t.stop()}}),t)})),function(){var e=this,i=arguments;return new Promise((function(r,o){var a=t.apply(e,i);function s(t){n(a,r,o,s,l,"next",t)}function l(t){n(a,r,o,s,l,"throw",t)}s(void 0)}))})()}}};const s=(0,i(1900).Z)(a,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("form",{staticClass:"steps-form__form",on:{submit:function(e){return e.preventDefault(),t.formHandler.apply(null,arguments)},input:function(e){t.isSended=!1}}},[i("div",{staticClass:"row mt-5"},[i("div",{staticClass:"col-xl-8"},[i("button",{staticClass:"btn btn_theme_gray",attrs:{type:"button"},on:{click:function(e){return t.$store.commit("stepsForms/prevStep")}}},[t._v("\n                Zurück\n            ")]),t._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-6 mt-4"},[i("div",{staticClass:"form-field"},[i("p",{staticClass:"form-field__label"},[t._v("Anrede*")]),t._v(" "),i("select",{directives:[{name:"model",rawName:"v-model",value:t.fields["client[gender]"],expression:"fields['client[gender]']"}],attrs:{required:""},on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.fields,"client[gender]",e.target.multiple?i:i[0])}}},[i("option",{attrs:{value:"Herr"}},[t._v("Herr")]),t._v(" "),i("option",{attrs:{value:"Frau"}},[t._v("Frau")])])])]),t._v(" "),i("div",{staticClass:"col-md-6 mt-4"},[i("form-field",{attrs:{label:"Vorname*",type:"text",required:"",placeholder:"Vorname*"},model:{value:t.fields["client[name]"],callback:function(e){t.$set(t.fields,"client[name]",e)},expression:"fields['client[name]']"}})],1),t._v(" "),i("div",{staticClass:"col-md-6 mt-4"},[i("form-field",{attrs:{label:"Nachname*",type:"text",required:"",placeholder:"Nachname*"},model:{value:t.fields["client[lastname]"],callback:function(e){t.$set(t.fields,"client[lastname]",e)},expression:"fields['client[lastname]']"}})],1),t._v(" "),i("div",{staticClass:"col-md-6 mt-4"},[i("form-field",{attrs:{label:"Telefon*",type:"tel",placeholder:"Telefon*"},model:{value:t.fields["client[phone]"],callback:function(e){t.$set(t.fields,"client[phone]",e)},expression:"fields['client[phone]']"}})],1),t._v(" "),i("div",{staticClass:"col-md-6 mt-4"},[i("form-field",{attrs:{label:"E-Mail*",type:"email",required:"",placeholder:"E-Mail*"},model:{value:t.fields["client[email]"],callback:function(e){t.$set(t.fields,"client[email]",e)},expression:"fields['client[email]']"}}),t._v(" "),i("p",{directives:[{name:"show",rawName:"v-show",value:t.isHasEmail&&t.isSended,expression:"isHasEmail && isSended"}],staticClass:"text-danger mt-3"},[t._v("E-Mail existiert bereits!")])],1),t._v(" "),i("div",{staticClass:"col-md-6 mt-4"},[i("form-field",{attrs:{label:"Erreichbarkeit*",type:"text",required:"",placeholder:"Erreichbarkeit*"},model:{value:t.fields["client[availability]"],callback:function(e){t.$set(t.fields,"client[availability]",e)},expression:"fields['client[availability]']"}})],1)]),t._v(" "),i("button",{staticClass:"btn mt-5"},[t._v("Weiter")])])])])}),[],!1,null,null,null).exports},5173:(t,e,i)=>{"use strict";i.d(e,{Z:()=>o});const r={props:["progressText","currentStep"],computed:{totalSteps:function(){return this.progressText.length},classObject:function(){return{"form-progress_steps_3":3===this.totalSteps,"form-progress_steps_more-3":this.totalSteps>3}}}};const o=(0,i(1900).Z)(r,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"form-progress",class:t.classObject},t._l(t.progressText,(function(e,r){return i("p",{key:e,staticClass:"form-progress__item",class:{"form-progress__item_active":t.currentStep>=r+1}},[i("span",[t._v(t._s(e))])])})),0)}),[],!1,null,null,null).exports},5857:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>d});var r=i(5173),o=i(64);const n={data:function(){return{fields:{"additional_info[zip]":"","additional_info[city]":"","additional_info[street]":"","proposal[region_id]":"","additional_info[number]":"","additional_info[work_should_be_done][]":[],"proposal[date_start]":"","additional_info[dayrange]":"Nicht Flexibel","proposal[description]":"","proposal[type_job_id]":"5","additional_info[square]":"",_token:""},isSended:!1,fieldsGroupName:"desc-work",date:new Date}},computed:{regions:function(){return this.$store.state.stepsForms.regions},csrfToken:function(){return document.querySelector('meta[name="csrf-token"]').content},isSelectedCheckboxes:function(){return!!this.fields["additional_info[work_should_be_done][]"].length},isAuth:function(){return"true"==document.querySelector("body").dataset.isAuth},initialData:function(){return this.$store.state.stepsForms.initialData}},watch:{date:function(){this.updateDate()},initialData:function(t){this.fields["additional_info[zip]"]=t.additional_info.zip,this.fields["additional_info[city]"]=t.additional_info.city,this.fields["additional_info[street]"]=t.additional_info.street,this.fields["additional_info[square]"]=t.additional_info.square,this.fields["proposal[region_id]"]=t.region_id,this.fields["additional_info[number]"]=t.additional_info.number,this.fields["additional_info[work_should_be_done][]"]=t.additional_info.work_should_be_done,this.date=this.globalGetDate(t.date_start),this.fields["additional_info[dayrange]"]=t.additional_info.dayrange,this.fields["proposal[description]"]=t.description,this.fields._method="PUT"}},mounted:function(){this.updateDate(),this.$route.query.zip&&(this.fields["additional_info[zip]"]=this.$route.query.zip)},methods:{updateDate:function(){var t=this;setTimeout((function(){t.fields["proposal[date_start]"]=t.$refs.datePicker.text}))},formHandler:function(){this.isSended=!0,this.isSelectedCheckboxes&&(this.$store.commit("stepsForms/setData",{key:this.fieldsGroupName,data:this.fields}),this.isAuth?this.$store.dispatch("stepsForms/sendData"):this.$store.commit("stepsForms/nextStep"))}}};var a=i(1900);const s=(0,a.Z)(n,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("form",{staticClass:"steps-form__form",on:{submit:function(e){return e.preventDefault(),t.formHandler.apply(null,arguments)},input:function(e){t.isSended=!1}}},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-xl-8"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-6 mt-4"},[i("div",{staticClass:"form-field"},[i("p",{staticClass:"form-field__label"},[t._v("Region*")]),t._v(" "),i("select",{directives:[{name:"model",rawName:"v-model",value:t.fields["proposal[region_id]"],expression:"fields['proposal[region_id]']"}],attrs:{required:""},on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.fields,"proposal[region_id]",e.target.multiple?i:i[0])}}},t._l(t.regions,(function(e){return i("option",{key:e.id,domProps:{value:e.id}},[t._v("\n                                "+t._s(e.name)+"\n                            ")])})),0)])]),t._v(" "),i("div",{staticClass:"col-md-6 mt-4"},[i("form-field",{attrs:{label:"PLZ*",type:"number",required:"",placeholder:"PLZ*"},model:{value:t.fields["additional_info[zip]"],callback:function(e){t.$set(t.fields,"additional_info[zip]",e)},expression:"fields['additional_info[zip]']"}})],1),t._v(" "),i("div",{staticClass:"col-md-6 mt-4"},[i("form-field",{attrs:{label:"Ort*",type:"text",required:"",placeholder:"Ort*"},model:{value:t.fields["additional_info[city]"],callback:function(e){t.$set(t.fields,"additional_info[city]",e)},expression:"fields['additional_info[city]']"}})],1),t._v(" "),i("div",{staticClass:"col-md-6 mt-4"},[i("form-field",{attrs:{label:"Strasse*",type:"text",required:"",placeholder:"Strasse*"},model:{value:t.fields["additional_info[street]"],callback:function(e){t.$set(t.fields,"additional_info[street]",e)},expression:"fields['additional_info[street]']"}})],1),t._v(" "),i("div",{staticClass:"col-md-6 mt-4"},[i("form-field",{attrs:{label:"Nr",type:"text",placeholder:"Nr"},model:{value:t.fields["additional_info[number]"],callback:function(e){t.$set(t.fields,"additional_info[number]",e)},expression:"fields['additional_info[number]']"}})],1),t._v(" "),i("div",{staticClass:"col-md-6 mt-4"},[i("div",{staticClass:"form-field"},[i("p",{staticClass:"form-field__label"},[t._v("Auftragsdatum*")]),t._v(" "),i("date-picker",{ref:"datePicker",attrs:{clearable:!1,format:"DD.MM.YYYY"},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}})],1)])]),t._v(" "),i("h5",{staticClass:"mt-5"},[t._v("Was soll verlegt werden?")]),t._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-6 mt-4"},[i("form-checkbox",{attrs:{val:"Laminat",label:"Laminat"},model:{value:t.fields["additional_info[work_should_be_done][]"],callback:function(e){t.$set(t.fields,"additional_info[work_should_be_done][]",e)},expression:"fields['additional_info[work_should_be_done][]']"}})],1),t._v(" "),i("div",{staticClass:"col-md-6 mt-4"},[i("form-checkbox",{attrs:{val:"Vinyl",label:"Vinyl"},model:{value:t.fields["additional_info[work_should_be_done][]"],callback:function(e){t.$set(t.fields,"additional_info[work_should_be_done][]",e)},expression:"fields['additional_info[work_should_be_done][]']"}})],1),t._v(" "),i("div",{staticClass:"col-md-6 mt-4"},[i("form-checkbox",{attrs:{val:"Parkett",label:"Parkett"},model:{value:t.fields["additional_info[work_should_be_done][]"],callback:function(e){t.$set(t.fields,"additional_info[work_should_be_done][]",e)},expression:"fields['additional_info[work_should_be_done][]']"}})],1),t._v(" "),i("div",{staticClass:"col-md-6 mt-4"},[i("form-checkbox",{attrs:{val:"Kork",label:"Kork"},model:{value:t.fields["additional_info[work_should_be_done][]"],callback:function(e){t.$set(t.fields,"additional_info[work_should_be_done][]",e)},expression:"fields['additional_info[work_should_be_done][]']"}})],1),t._v(" "),i("div",{staticClass:"col-md-6 mt-4"},[i("form-checkbox",{attrs:{val:"Teppich",label:"Teppich"},model:{value:t.fields["additional_info[work_should_be_done][]"],callback:function(e){t.$set(t.fields,"additional_info[work_should_be_done][]",e)},expression:"fields['additional_info[work_should_be_done][]']"}})],1),t._v(" "),i("div",{staticClass:"col-md-6 mt-4"},[i("form-checkbox",{attrs:{val:"Weitere",label:"Weitere"},model:{value:t.fields["additional_info[work_should_be_done][]"],callback:function(e){t.$set(t.fields,"additional_info[work_should_be_done][]",e)},expression:"fields['additional_info[work_should_be_done][]']"}})],1)]),t._v(" "),i("p",{directives:[{name:"show",rawName:"v-show",value:!t.isSelectedCheckboxes&&t.isSended,expression:"!isSelectedCheckboxes && isSended"}],staticClass:"text-danger mt-3"},[t._v("Bitte wählen Sie etwas aus der Liste aus!")]),t._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-6 mt-4"},[i("div",{staticClass:"form-field"},[i("p",{staticClass:"form-field__label"},[t._v("Wieviel Fläche soll verlegt werden?*")]),t._v(" "),i("select",{directives:[{name:"model",rawName:"v-model",value:t.fields["additional_info[square]"],expression:"fields['additional_info[square]']"}],attrs:{required:""},on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.fields,"additional_info[square]",e.target.multiple?i:i[0])}}},[i("option",{attrs:{value:"<30m²"}},[t._v(" <30m² ")]),t._v(" "),i("option",{attrs:{value:"30-50m²"}},[t._v(" 30-50m² ")]),t._v(" "),i("option",{attrs:{value:"50-80m²"}},[t._v(" 50-80m² ")]),t._v(" "),i("option",{attrs:{value:"80-120m²"}},[t._v(" 80-120m² ")]),t._v(" "),i("option",{attrs:{value:"120-160m²"}},[t._v(" 120-160m² ")]),t._v(" "),i("option",{attrs:{value:"160-200m²"}},[t._v(" 160-200m² ")]),t._v(" "),i("option",{attrs:{value:">200m²"}},[t._v(" >200m² ")])])])])]),t._v(" "),i("h5",{staticClass:"mt-5"},[t._v("Flexibilität")]),t._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-6 mt-4"},[i("form-radio",{attrs:{val:"Nicht Flexibel",label:"Nicht Flexibel"},model:{value:t.fields["additional_info[dayrange]"],callback:function(e){t.$set(t.fields,"additional_info[dayrange]",e)},expression:"fields['additional_info[dayrange]']"}})],1),t._v(" "),i("div",{staticClass:"col-md-6 mt-4"},[i("form-radio",{attrs:{val:"+/- 1 Tag",label:"+/- 1 Tag"},model:{value:t.fields["additional_info[dayrange]"],callback:function(e){t.$set(t.fields,"additional_info[dayrange]",e)},expression:"fields['additional_info[dayrange]']"}})],1),t._v(" "),i("div",{staticClass:"col-md-6 mt-4"},[i("form-radio",{attrs:{val:"+/- 2 Tagen",label:"+/- 2 Tagen"},model:{value:t.fields["additional_info[dayrange]"],callback:function(e){t.$set(t.fields,"additional_info[dayrange]",e)},expression:"fields['additional_info[dayrange]']"}})],1),t._v(" "),i("div",{staticClass:"col-md-6 mt-4"},[i("form-radio",{attrs:{val:"+/- 3 Tagen",label:"+/- 3 Tagen"},model:{value:t.fields["additional_info[dayrange]"],callback:function(e){t.$set(t.fields,"additional_info[dayrange]",e)},expression:"fields['additional_info[dayrange]']"}})],1)]),t._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"col-12 mt-4"},[i("div",{staticClass:"form-field"},[i("p",{staticClass:"form-field__label"},[t._v("Bemerkungen")]),t._v(" "),i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.fields["proposal[description]"],expression:"fields['proposal[description]']"}],attrs:{placeholder:"Bemerkungen"},domProps:{value:t.fields["proposal[description]"]},on:{input:function(e){e.target.composing||t.$set(t.fields,"proposal[description]",e.target.value)}}})])])]),t._v(" "),i("button",{staticClass:"btn mt-5"},[t._v("Weiter")])])])])}),[],!1,null,null,null).exports,l={props:["urlHandler"],data:function(){return{}},computed:{currentStep:function(){return this.$store.state.stepsForms.currentStep},progressText:function(){return this.isAuth?["Beschreibung der Arbeit"]:["Beschreibung der Arbeit","Kontakt"]},isAuth:function(){return"true"==document.querySelector("body").dataset.isAuth}},mounted:function(){this.$store.dispatch("stepsForms/getRegions"),this.$store.commit("stepsForms/setUrlHandler",this.urlHandler);var t=this.$route.path.replace(/[^0-9]/g,"");this.isAuth&&t&&this.$store.dispatch("stepsForms/getClientValues",t)},components:{FormProgress:r.Z,Contact:o.Z,DescWork:s}};const d=(0,a.Z)(l,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t.progressText.length>1?i("form-progress",{staticClass:"mt-5",attrs:{"progress-text":t.progressText,"current-step":t.currentStep}}):t._e(),t._v(" "),i("desc-work",{directives:[{name:"show",rawName:"v-show",value:1===t.currentStep,expression:"currentStep === 1"}]}),t._v(" "),i("contact",{directives:[{name:"show",rawName:"v-show",value:2===t.currentStep,expression:"currentStep === 2"}]})],1)}),[],!1,null,null,null).exports}}]);