(self.webpackChunk=self.webpackChunk||[]).push([[919],{7757:(t,e,i)=>{t.exports=i(5666)},5666:t=>{var e=function(t){"use strict";var e,i=Object.prototype,a=i.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},n=o.iterator||"@@iterator",r=o.asyncIterator||"@@asyncIterator",l=o.toStringTag||"@@toStringTag";function s(t,e,i){return Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,i){return t[e]=i}}function d(t,e,i,a){var o=e&&e.prototype instanceof p?e:p,n=Object.create(o.prototype),r=new F(a||[]);return n._invoke=function(t,e,i){var a=f;return function(o,n){if(a===v)throw new Error("Generator is already running");if(a===m){if("throw"===o)throw n;return S()}for(i.method=o,i.arg=n;;){var r=i.delegate;if(r){var l=$(r,i);if(l){if(l===_)continue;return l}}if("next"===i.method)i.sent=i._sent=i.arg;else if("throw"===i.method){if(a===f)throw a=m,i.arg;i.dispatchException(i.arg)}else"return"===i.method&&i.abrupt("return",i.arg);a=v;var s=c(t,e,i);if("normal"===s.type){if(a=i.done?m:u,s.arg===_)continue;return{value:s.arg,done:i.done}}"throw"===s.type&&(a=m,i.method="throw",i.arg=s.arg)}}}(t,i,r),n}function c(t,e,i){try{return{type:"normal",arg:t.call(e,i)}}catch(t){return{type:"throw",arg:t}}}t.wrap=d;var f="suspendedStart",u="suspendedYield",v="executing",m="completed",_={};function p(){}function h(){}function g(){}var y={};s(y,n,(function(){return this}));var b=Object.getPrototypeOf,w=b&&b(b(N([])));w&&w!==i&&a.call(w,n)&&(y=w);var x=g.prototype=p.prototype=Object.create(y);function C(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,e){function i(o,n,r,l){var s=c(t[o],t,n);if("throw"!==s.type){var d=s.arg,f=d.value;return f&&"object"==typeof f&&a.call(f,"__await")?e.resolve(f.__await).then((function(t){i("next",t,r,l)}),(function(t){i("throw",t,r,l)})):e.resolve(f).then((function(t){d.value=t,r(d)}),(function(t){return i("throw",t,r,l)}))}l(s.arg)}var o;this._invoke=function(t,a){function n(){return new e((function(e,o){i(t,a,e,o)}))}return o=o?o.then(n,n):n()}}function $(t,i){var a=t.iterator[i.method];if(a===e){if(i.delegate=null,"throw"===i.method){if(t.iterator.return&&(i.method="return",i.arg=e,$(t,i),"throw"===i.method))return _;i.method="throw",i.arg=new TypeError("The iterator does not provide a 'throw' method")}return _}var o=c(a,t.iterator,i.arg);if("throw"===o.type)return i.method="throw",i.arg=o.arg,i.delegate=null,_;var n=o.arg;return n?n.done?(i[t.resultName]=n.value,i.next=t.nextLoc,"return"!==i.method&&(i.method="next",i.arg=e),i.delegate=null,_):n:(i.method="throw",i.arg=new TypeError("iterator result is not an object"),i.delegate=null,_)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function F(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function N(t){if(t){var i=t[n];if(i)return i.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,r=function i(){for(;++o<t.length;)if(a.call(t,o))return i.value=t[o],i.done=!1,i;return i.value=e,i.done=!0,i};return r.next=r}}return{next:S}}function S(){return{value:e,done:!0}}return h.prototype=g,s(x,"constructor",g),s(g,"constructor",h),h.displayName=s(g,l,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,s(t,l,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},C(k.prototype),s(k.prototype,r,(function(){return this})),t.AsyncIterator=k,t.async=function(e,i,a,o,n){void 0===n&&(n=Promise);var r=new k(d(e,i,a,o),n);return t.isGeneratorFunction(i)?r:r.next().then((function(t){return t.done?t.value:r.next()}))},C(x),s(x,l,"Generator"),s(x,n,(function(){return this})),s(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var i in t)e.push(i);return e.reverse(),function i(){for(;e.length;){var a=e.pop();if(a in t)return i.value=a,i.done=!1,i}return i.done=!0,i}},t.values=N,F.prototype={constructor:F,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(L),!t)for(var i in this)"t"===i.charAt(0)&&a.call(this,i)&&!isNaN(+i.slice(1))&&(this[i]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var i=this;function o(a,o){return l.type="throw",l.arg=t,i.next=a,o&&(i.method="next",i.arg=e),!!o}for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n],l=r.completion;if("root"===r.tryLoc)return o("end");if(r.tryLoc<=this.prev){var s=a.call(r,"catchLoc"),d=a.call(r,"finallyLoc");if(s&&d){if(this.prev<r.catchLoc)return o(r.catchLoc,!0);if(this.prev<r.finallyLoc)return o(r.finallyLoc)}else if(s){if(this.prev<r.catchLoc)return o(r.catchLoc,!0)}else{if(!d)throw new Error("try statement without catch or finally");if(this.prev<r.finallyLoc)return o(r.finallyLoc)}}}},abrupt:function(t,e){for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i];if(o.tryLoc<=this.prev&&a.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var n=o;break}}n&&("break"===t||"continue"===t)&&n.tryLoc<=e&&e<=n.finallyLoc&&(n=null);var r=n?n.completion:{};return r.type=t,r.arg=e,n?(this.method="next",this.next=n.finallyLoc,_):this.complete(r)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),_},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var i=this.tryEntries[e];if(i.finallyLoc===t)return this.complete(i.completion,i.afterLoc),L(i),_}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var i=this.tryEntries[e];if(i.tryLoc===t){var a=i.completion;if("throw"===a.type){var o=a.arg;L(i)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,i,a){return this.delegate={iterator:N(t),resultName:i,nextLoc:a},"next"===this.method&&(this.arg=e),_}},t}(t.exports);try{regeneratorRuntime=e}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=e:Function("r","regeneratorRuntime = r")(e)}},64:(t,e,i)=>{"use strict";i.d(e,{Z:()=>l});var a=i(7757),o=i.n(a);function n(t,e,i,a,o,n,r){try{var l=t[n](r),s=l.value}catch(t){return void i(t)}l.done?e(s):Promise.resolve(s).then(a,o)}const r={data:function(){return{fields:{"client[gender]":"Herr","client[name]":"","client[lastname]":"","client[phone]":"","client[email]":"","client[availability]":""},fieldsGroupName:"contact",isSended:!1}},computed:{isHasEmail:function(){return this.$store.state.stepsForms.isHasEmail}},methods:{formHandler:function(){var t,e=this;return(t=o().mark((function t(){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("stepsForms/checkEmail",{email:e.fields["client[email]"]});case 2:if(e.isSended=!0,!e.isHasEmail){t.next=5;break}return t.abrupt("return");case 5:e.$store.commit("stepsForms/setData",{key:e.fieldsGroupName,data:e.fields}),e.$store.dispatch("stepsForms/sendData");case 7:case"end":return t.stop()}}),t)})),function(){var e=this,i=arguments;return new Promise((function(a,o){var r=t.apply(e,i);function l(t){n(r,a,o,l,s,"next",t)}function s(t){n(r,a,o,l,s,"throw",t)}l(void 0)}))})()}}};const l=(0,i(1900).Z)(r,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("form",{staticClass:"steps-form__form",on:{submit:function(e){return e.preventDefault(),t.formHandler.apply(null,arguments)},input:function(e){t.isSended=!1}}},[i("div",{staticClass:"row mt-5"},[i("div",{staticClass:"col-xl-8"},[i("button",{staticClass:"btn btn_theme_gray",attrs:{type:"button"},on:{click:function(e){return t.$store.commit("stepsForms/prevStep")}}},[t._v("\n                Zurück\n            ")]),t._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-6 mt-4"},[i("div",{staticClass:"form-field"},[i("p",{staticClass:"form-field__label"},[t._v("Anrede*")]),t._v(" "),i("select",{directives:[{name:"model",rawName:"v-model",value:t.fields["client[gender]"],expression:"fields['client[gender]']"}],attrs:{required:""},on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.fields,"client[gender]",e.target.multiple?i:i[0])}}},[i("option",{attrs:{value:"Herr"}},[t._v("Herr")]),t._v(" "),i("option",{attrs:{value:"Frau"}},[t._v("Frau")])])])]),t._v(" "),i("div",{staticClass:"col-md-6 mt-4"},[i("form-field",{attrs:{label:"Vorname*",type:"text",required:"",placeholder:"Vorname*"},model:{value:t.fields["client[name]"],callback:function(e){t.$set(t.fields,"client[name]",e)},expression:"fields['client[name]']"}})],1),t._v(" "),i("div",{staticClass:"col-md-6 mt-4"},[i("form-field",{attrs:{label:"Nachname*",type:"text",required:"",placeholder:"Nachname*"},model:{value:t.fields["client[lastname]"],callback:function(e){t.$set(t.fields,"client[lastname]",e)},expression:"fields['client[lastname]']"}})],1),t._v(" "),i("div",{staticClass:"col-md-6 mt-4"},[i("form-field",{attrs:{label:"Telefon*",type:"tel",placeholder:"Telefon*"},model:{value:t.fields["client[phone]"],callback:function(e){t.$set(t.fields,"client[phone]",e)},expression:"fields['client[phone]']"}})],1),t._v(" "),i("div",{staticClass:"col-md-6 mt-4"},[i("form-field",{attrs:{label:"E-Mail*",type:"email",required:"",placeholder:"E-Mail*"},model:{value:t.fields["client[email]"],callback:function(e){t.$set(t.fields,"client[email]",e)},expression:"fields['client[email]']"}}),t._v(" "),i("p",{directives:[{name:"show",rawName:"v-show",value:t.isHasEmail&&t.isSended,expression:"isHasEmail && isSended"}],staticClass:"text-danger mt-3"},[t._v("E-Mail existiert bereits!")])],1),t._v(" "),i("div",{staticClass:"col-md-6 mt-4"},[i("form-field",{attrs:{label:"Erreichbarkeit*",type:"text",required:"",placeholder:"Erreichbarkeit*"},model:{value:t.fields["client[availability]"],callback:function(e){t.$set(t.fields,"client[availability]",e)},expression:"fields['client[availability]']"}})],1)]),t._v(" "),i("button",{staticClass:"btn mt-5"},[t._v("Weiter")])])])])}),[],!1,null,null,null).exports},5173:(t,e,i)=>{"use strict";i.d(e,{Z:()=>o});const a={props:["progressText","currentStep"],computed:{totalSteps:function(){return this.progressText.length},classObject:function(){return{"form-progress_steps_3":3===this.totalSteps,"form-progress_steps_more-3":this.totalSteps>3}}}};const o=(0,i(1900).Z)(a,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"form-progress",class:t.classObject},t._l(t.progressText,(function(e,a){return i("p",{key:e,staticClass:"form-progress__item",class:{"form-progress__item_active":t.currentStep>=a+1}},[i("span",[t._v(t._s(e))])])})),0)}),[],!1,null,null,null).exports},8919:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>f});var a=i(5173),o=i(64);const n={data:function(){return{fields:{"additional_info[zip]":"","additional_info[city]":"","additional_info[street]":"","additional_info[cleaning]":"","proposal[region_id]":"","additional_info[number]":"","proposal[date_start]":"","additional_info[dayrange]":"Nicht Flexibel","additional_info[house_type]":"Mehrfamilienhaus","additional_info[lift]":"Kein Lift","additional_info[floor]":"","additional_info[rooms]":"","additional_info[square]":"","additional_info[other][]":[],"proposal[description]":"","proposal[type_job_id]":"2",_token:""},fieldsGroupName:"cleaning",date:new Date}},computed:{regions:function(){return this.$store.state.stepsForms.regions},csrfToken:function(){return document.querySelector('meta[name="csrf-token"]').content},initialData:function(){return this.$store.state.stepsForms.initialData}},watch:{date:function(){this.updateDate()},initialData:function(t){this.fields["additional_info[zip]"]=t.additional_info.zip,this.fields["additional_info[city]"]=t.additional_info.city,this.fields["additional_info[street]"]=t.additional_info.street,this.fields["additional_info[cleaning]"]=t.additional_info.cleaning,this.fields["proposal[region_id]"]=t.region_id,this.fields["additional_info[number]"]=t.additional_info.number,this.date=this.globalGetDate(t.date_start),this.fields["additional_info[dayrange]"]=t.additional_info.dayrange,this.fields["additional_info[house_type]"]=t.additional_info.house_type,this.fields["additional_info[lift]"]=t.additional_info.lift,this.fields["additional_info[floor]"]=t.additional_info.floor,this.fields["additional_info[rooms]"]=t.additional_info.rooms,this.fields["additional_info[square]"]=t.additional_info.square,this.fields["additional_info[other][]"]=t.additional_info.other,this.fields["proposal[description]"]=t.description,this.fields._method="PUT"}},mounted:function(){this.updateDate(),this.$route.query.zip&&(this.fields["additional_info[zip]"]=this.$route.query.zip)},methods:{updateDate:function(){var t=this;setTimeout((function(){t.fields["proposal[date_start]"]=t.$refs.datePicker.text}))},formHandler:function(){this.fields._token=this.csrfToken,this.$store.commit("stepsForms/setData",{key:this.fieldsGroupName,data:this.fields}),this.$store.commit("stepsForms/nextStep")}}};var r=i(1900);const l=(0,r.Z)(n,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("form",{staticClass:"steps-form__form",on:{submit:function(e){return e.preventDefault(),t.formHandler.apply(null,arguments)}}},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-xl-8"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-6 mt-4"},[i("div",{staticClass:"form-field"},[i("p",{staticClass:"form-field__label"},[t._v("Reinigungstyp*")]),t._v(" "),i("select",{directives:[{name:"model",rawName:"v-model",value:t.fields["additional_info[cleaning]"],expression:"fields['additional_info[cleaning]']"}],attrs:{required:""},on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.fields,"additional_info[cleaning]",e.target.multiple?i:i[0])}}},[i("option",{attrs:{value:"Umzugsreinigung"}},[t._v("Umzugsreinigung")]),t._v(" "),i("option",{attrs:{value:"Fensterreinigung"}},[t._v("Fensterreinigung")]),t._v(" "),i("option",{attrs:{value:"Bodenreinigung"}},[t._v("Bodenreinigung")]),t._v(" "),i("option",{attrs:{value:"Baureinigung"}},[t._v("Baureinigung")]),t._v(" "),i("option",{attrs:{value:"Büroreinigung"}},[t._v("Büroreinigung")]),t._v(" "),i("option",{attrs:{value:"Unterhaltsreinigung"}},[t._v("Unterhaltsreinigung")])])])]),t._v(" "),i("div",{staticClass:"col-md-6 mt-4"},[i("div",{staticClass:"form-field"},[i("p",{staticClass:"form-field__label"},[t._v("Region*")]),t._v(" "),i("select",{directives:[{name:"model",rawName:"v-model",value:t.fields["proposal[region_id]"],expression:"fields['proposal[region_id]']"}],attrs:{required:""},on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.fields,"proposal[region_id]",e.target.multiple?i:i[0])}}},t._l(t.regions,(function(e){return i("option",{key:e.id,domProps:{value:e.id}},[t._v("\n                                "+t._s(e.name)+"\n                            ")])})),0)])]),t._v(" "),i("div",{staticClass:"col-md-6 mt-4"},[i("form-field",{attrs:{label:"PLZ*",type:"number",required:"",placeholder:"PLZ*"},model:{value:t.fields["additional_info[zip]"],callback:function(e){t.$set(t.fields,"additional_info[zip]",e)},expression:"fields['additional_info[zip]']"}})],1),t._v(" "),i("div",{staticClass:"col-md-6 mt-4"},[i("form-field",{attrs:{label:"Ort*",type:"text",required:"",placeholder:"Ort*"},model:{value:t.fields["additional_info[city]"],callback:function(e){t.$set(t.fields,"additional_info[city]",e)},expression:"fields['additional_info[city]']"}})],1),t._v(" "),i("div",{staticClass:"col-md-6 mt-4"},[i("form-field",{attrs:{label:"Strasse*",type:"text",required:"",placeholder:"Strasse*"},model:{value:t.fields["additional_info[street]"],callback:function(e){t.$set(t.fields,"additional_info[street]",e)},expression:"fields['additional_info[street]']"}})],1),t._v(" "),i("div",{staticClass:"col-md-6 mt-4"},[i("form-field",{attrs:{label:"Nr",type:"text",placeholder:"Nr"},model:{value:t.fields["additional_info[number]"],callback:function(e){t.$set(t.fields,"additional_info[number]",e)},expression:"fields['additional_info[number]']"}})],1),t._v(" "),i("div",{staticClass:"col-md-6 mt-4"},[i("div",{staticClass:"form-field"},[i("p",{staticClass:"form-field__label"},[t._v("Auftragsdatum*")]),t._v(" "),i("date-picker",{ref:"datePicker",attrs:{clearable:!1,format:"DD.MM.YYYY"},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}})],1)])]),t._v(" "),i("h5",{staticClass:"mt-5"},[t._v("Ich wünsche Anfragen für folgende Arbeiten:")]),t._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-6 mt-4"},[i("form-radio",{attrs:{val:"Nicht Flexibel",label:"Nicht Flexibel"},model:{value:t.fields["additional_info[dayrange]"],callback:function(e){t.$set(t.fields,"additional_info[dayrange]",e)},expression:"fields['additional_info[dayrange]']"}})],1),t._v(" "),i("div",{staticClass:"col-md-6 mt-4"},[i("form-radio",{attrs:{val:"+/- 1 Tag",label:"+/- 1 Tag"},model:{value:t.fields["additional_info[dayrange]"],callback:function(e){t.$set(t.fields,"additional_info[dayrange]",e)},expression:"fields['additional_info[dayrange]']"}})],1),t._v(" "),i("div",{staticClass:"col-md-6 mt-4"},[i("form-radio",{attrs:{val:"+/- 2 Tagen",label:"+/- 2 Tagen"},model:{value:t.fields["additional_info[dayrange]"],callback:function(e){t.$set(t.fields,"additional_info[dayrange]",e)},expression:"fields['additional_info[dayrange]']"}})],1),t._v(" "),i("div",{staticClass:"col-md-6 mt-4"},[i("form-radio",{attrs:{val:"+/- 3 Tagen",label:"+/- 3 Tagen"},model:{value:t.fields["additional_info[dayrange]"],callback:function(e){t.$set(t.fields,"additional_info[dayrange]",e)},expression:"fields['additional_info[dayrange]']"}})],1)]),t._v(" "),i("h5",{staticClass:"mt-5"},[t._v("Haustyp")]),t._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-6 mt-4"},[i("form-radio",{attrs:{val:"Mehrfamilienhaus",label:"Mehrfamilienhaus"},model:{value:t.fields["additional_info[house_type]"],callback:function(e){t.$set(t.fields,"additional_info[house_type]",e)},expression:"fields['additional_info[house_type]']"}})],1),t._v(" "),i("div",{staticClass:"col-md-6 mt-4"},[i("form-radio",{attrs:{val:"Einfamilienhaus",label:"Einfamilienhaus"},model:{value:t.fields["additional_info[house_type]"],callback:function(e){t.$set(t.fields,"additional_info[house_type]",e)},expression:"fields['additional_info[house_type]']"}})],1)]),t._v(" "),i("h5",{staticClass:"mt-5"},[t._v("Lift")]),t._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-6 mt-4"},[i("form-radio",{attrs:{val:"Kein Lift",label:"Kein Lift"},model:{value:t.fields["additional_info[lift]"],callback:function(e){t.$set(t.fields,"additional_info[lift]",e)},expression:"fields['additional_info[lift]']"}})],1),t._v(" "),i("div",{staticClass:"col-md-6 mt-4"},[i("form-radio",{attrs:{val:"Mit Lift",label:"Mit Lift"},model:{value:t.fields["additional_info[lift]"],callback:function(e){t.$set(t.fields,"additional_info[lift]",e)},expression:"fields['additional_info[lift]']"}})],1)]),t._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-6 mt-4"},[i("form-field",{attrs:{label:"Stock*",type:"text",required:"",placeholder:"Stock*"},model:{value:t.fields["additional_info[floor]"],callback:function(e){t.$set(t.fields,"additional_info[floor]",e)},expression:"fields['additional_info[floor]']"}})],1),t._v(" "),i("div",{staticClass:"col-md-6 mt-4"},[i("form-field",{attrs:{label:"Anzahl der Zimmer*",type:"text",required:"",placeholder:"Anzahl der Zimmer*"},model:{value:t.fields["additional_info[rooms]"],callback:function(e){t.$set(t.fields,"additional_info[rooms]",e)},expression:"fields['additional_info[rooms]']"}})],1),t._v(" "),i("div",{staticClass:"col-md-6 mt-4"},[i("form-field",{attrs:{label:"Fläche in m2*",type:"text",required:"",placeholder:"Fläche in m2*"},model:{value:t.fields["additional_info[square]"],callback:function(e){t.$set(t.fields,"additional_info[square]",e)},expression:"fields['additional_info[square]']"}})],1)]),t._v(" "),i("h5",{staticClass:"mt-5"},[t._v("Andere Info")]),t._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-6 mt-4"},[i("form-checkbox",{attrs:{val:"Keller",label:"Keller"},model:{value:t.fields["additional_info[other][]"],callback:function(e){t.$set(t.fields,"additional_info[other][]",e)},expression:"fields['additional_info[other][]']"}})],1),t._v(" "),i("div",{staticClass:"col-md-6 mt-4"},[i("form-checkbox",{attrs:{val:"Klavier",label:"Klavier"},model:{value:t.fields["additional_info[other][]"],callback:function(e){t.$set(t.fields,"additional_info[other][]",e)},expression:"fields['additional_info[other][]']"}})],1),t._v(" "),i("div",{staticClass:"col-md-6 mt-4"},[i("form-checkbox",{attrs:{val:"Estrich",label:"Estrich"},model:{value:t.fields["additional_info[other][]"],callback:function(e){t.$set(t.fields,"additional_info[other][]",e)},expression:"fields['additional_info[other][]']"}})],1),t._v(" "),i("div",{staticClass:"col-md-6 mt-4"},[i("form-checkbox",{attrs:{val:"Garage",label:"Garage"},model:{value:t.fields["additional_info[other][]"],callback:function(e){t.$set(t.fields,"additional_info[other][]",e)},expression:"fields['additional_info[other][]']"}})],1),t._v(" "),i("div",{staticClass:"col-md-6 mt-4"},[i("form-checkbox",{attrs:{val:"Flügel",label:"Flügel"},model:{value:t.fields["additional_info[other][]"],callback:function(e){t.$set(t.fields,"additional_info[other][]",e)},expression:"fields['additional_info[other][]']"}})],1),t._v(" "),i("div",{staticClass:"col-md-6 mt-4"},[i("form-checkbox",{attrs:{val:"Lagerung",label:"Lagerung"},model:{value:t.fields["additional_info[other][]"],callback:function(e){t.$set(t.fields,"additional_info[other][]",e)},expression:"fields['additional_info[other][]']"}})],1),t._v(" "),i("div",{staticClass:"col-md-6 mt-4"},[i("form-checkbox",{attrs:{val:"Demontage / Montage",label:"Demontage / Montage"},model:{value:t.fields["additional_info[other][]"],callback:function(e){t.$set(t.fields,"additional_info[other][]",e)},expression:"fields['additional_info[other][]']"}})],1)]),t._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"col-12 mt-4"},[i("div",{staticClass:"form-field"},[i("p",{staticClass:"form-field__label"},[t._v("Bemerkungen")]),t._v(" "),i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.fields["proposal[description]"],expression:"fields['proposal[description]']"}],attrs:{placeholder:"Bemerkungen"},domProps:{value:t.fields["proposal[description]"]},on:{input:function(e){e.target.composing||t.$set(t.fields,"proposal[description]",e.target.value)}}})])])]),t._v(" "),i("button",{staticClass:"btn mt-5"},[t._v("Weiter")])])])])}),[],!1,null,null,null).exports;const s={data:function(){return{fields:{"additional_info[windows]":"","additional_info[shower_wc]":"","additional_info[bath_wc]":"","additional_info[wc]":"","additional_info[soil_type]":"","additional_info[window_size]":""},fieldsGroupName:"number"}},computed:{isAuth:function(){return"true"==document.querySelector("body").dataset.isAuth},initialData:function(){return this.$store.state.stepsForms.initialData}},watch:{initialData:function(t){this.fields["additional_info[windows]"]=t.additional_info.windows,this.fields["additional_info[shower_wc]"]=t.additional_info.shower_wc,this.fields["additional_info[bath_wc]"]=t.additional_info.bath_wc,this.fields["additional_info[wc]"]=t.additional_info.wc,this.fields["additional_info[soil_type]"]=t.additional_info.soil_type,this.fields["additional_info[window_size]"]=t.additional_info.window_size}},methods:{formHandler:function(){this.$store.commit("stepsForms/setData",{key:this.fieldsGroupName,data:this.fields}),this.isAuth?this.$store.dispatch("stepsForms/sendData"):this.$store.commit("stepsForms/nextStep")}}};const d=(0,r.Z)(s,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("form",{staticClass:"steps-form__form",on:{submit:function(e){return e.preventDefault(),t.formHandler.apply(null,arguments)}}},[i("div",{staticClass:"row mt-5"},[i("div",{staticClass:"col-xl-8"},[i("button",{staticClass:"btn btn_theme_gray",attrs:{type:"button"},on:{click:function(e){return t.$store.commit("stepsForms/prevStep")}}},[t._v("\n                Zurück\n            ")]),t._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-6 mt-4"},[i("div",{staticClass:"form-field"},[i("p",{staticClass:"form-field__label"},[t._v("Fenster")]),t._v(" "),i("select",{directives:[{name:"model",rawName:"v-model",value:t.fields["additional_info[windows]"],expression:"fields['additional_info[windows]']"}],on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.fields,"additional_info[windows]",e.target.multiple?i:i[0])}}},[i("option",{attrs:{value:""}},[t._v("-")]),t._v(" "),i("option",{attrs:{value:"1"}},[t._v("1")]),t._v(" "),i("option",{attrs:{value:"2"}},[t._v("2")]),t._v(" "),i("option",{attrs:{value:"3"}},[t._v("3")]),t._v(" "),i("option",{attrs:{value:"4"}},[t._v("4")]),t._v(" "),i("option",{attrs:{value:"5-7"}},[t._v("5-7")]),t._v(" "),i("option",{attrs:{value:"8-10"}},[t._v("8-10")]),t._v(" "),i("option",{attrs:{value:"11-15"}},[t._v("11-15")]),t._v(" "),i("option",{attrs:{value:"16-20"}},[t._v("16-20")]),t._v(" "),i("option",{attrs:{value:"21-30"}},[t._v("21-30")]),t._v(" "),i("option",{attrs:{value:"31-50"}},[t._v("31-50")]),t._v(" "),i("option",{attrs:{value:"50+"}},[t._v("mehr als 50")])])])]),t._v(" "),i("div",{staticClass:"col-md-6 mt-4"},[i("div",{staticClass:"form-field"},[i("p",{staticClass:"form-field__label"},[t._v("Dusche /WC ")]),t._v(" "),i("select",{directives:[{name:"model",rawName:"v-model",value:t.fields["additional_info[shower_wc]"],expression:"fields['additional_info[shower_wc]']"}],on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.fields,"additional_info[shower_wc]",e.target.multiple?i:i[0])}}},[i("option",{attrs:{value:""}},[t._v("-")]),t._v(" "),i("option",{attrs:{value:"1"}},[t._v("1")]),t._v(" "),i("option",{attrs:{value:"2"}},[t._v("2")]),t._v(" "),i("option",{attrs:{value:"3"}},[t._v("3")]),t._v(" "),i("option",{attrs:{value:"4"}},[t._v("4")]),t._v(" "),i("option",{attrs:{value:"5"}},[t._v("5")]),t._v(" "),i("option",{attrs:{value:"6"}},[t._v("6")])])])]),t._v(" "),i("div",{staticClass:"col-md-6 mt-4"},[i("div",{staticClass:"form-field"},[i("p",{staticClass:"form-field__label"},[t._v("BAD / WC *")]),t._v(" "),i("select",{directives:[{name:"model",rawName:"v-model",value:t.fields["additional_info[bath_wc]"],expression:"fields['additional_info[bath_wc]']"}],on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.fields,"additional_info[bath_wc]",e.target.multiple?i:i[0])}}},[i("option",{attrs:{value:""}},[t._v("-")]),t._v(" "),i("option",{attrs:{value:"1"}},[t._v("1")]),t._v(" "),i("option",{attrs:{value:"2"}},[t._v("2")]),t._v(" "),i("option",{attrs:{value:"3"}},[t._v("3")]),t._v(" "),i("option",{attrs:{value:"4"}},[t._v("4")]),t._v(" "),i("option",{attrs:{value:"5"}},[t._v("5")]),t._v(" "),i("option",{attrs:{value:"6"}},[t._v("6")])])])]),t._v(" "),i("div",{staticClass:"col-md-6 mt-4"},[i("div",{staticClass:"form-field"},[i("p",{staticClass:"form-field__label"},[t._v("WC * ")]),t._v(" "),i("select",{directives:[{name:"model",rawName:"v-model",value:t.fields["additional_info[wc]"],expression:"fields['additional_info[wc]']"}],on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.fields,"additional_info[wc]",e.target.multiple?i:i[0])}}},[i("option",{attrs:{value:""}},[t._v("-")]),t._v(" "),i("option",{attrs:{value:"1"}},[t._v("1")]),t._v(" "),i("option",{attrs:{value:"2"}},[t._v("2")]),t._v(" "),i("option",{attrs:{value:"3"}},[t._v("3")]),t._v(" "),i("option",{attrs:{value:"4"}},[t._v("4")]),t._v(" "),i("option",{attrs:{value:"5"}},[t._v("5")]),t._v(" "),i("option",{attrs:{value:"6"}},[t._v("6")])])])]),t._v(" "),i("div",{staticClass:"col-md-6 mt-4"},[i("div",{staticClass:"form-field"},[i("p",{staticClass:"form-field__label"},[t._v("Bodentyp*")]),t._v(" "),i("select",{directives:[{name:"model",rawName:"v-model",value:t.fields["additional_info[soil_type]"],expression:"fields['additional_info[soil_type]']"}],on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.fields,"additional_info[soil_type]",e.target.multiple?i:i[0])}}},[i("option",{attrs:{value:""}},[t._v("-")]),t._v(" "),i("option",{attrs:{value:"Parkett"}},[t._v("Parkett")]),t._v(" "),i("option",{attrs:{value:"Laminat"}},[t._v("Laminat")]),t._v(" "),i("option",{attrs:{value:"Linoleum"}},[t._v("Linoleum")]),t._v(" "),i("option",{attrs:{value:"Teppich"}},[t._v("Teppich")]),t._v(" "),i("option",{attrs:{value:"Plättli"}},[t._v("Plättli")]),t._v(" "),i("option",{attrs:{value:"Diverse"}},[t._v("Diverse")])])])]),t._v(" "),i("div",{staticClass:"col-md-6 mt-4"},[i("div",{staticClass:"form-field"},[i("p",{staticClass:"form-field__label"},[t._v("Fenstergrösse *")]),t._v(" "),i("select",{directives:[{name:"model",rawName:"v-model",value:t.fields["additional_info[window_size]"],expression:"fields['additional_info[window_size]']"}],on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.fields,"additional_info[window_size]",e.target.multiple?i:i[0])}}},[i("option",{attrs:{value:""}},[t._v("-")]),t._v(" "),i("option",{attrs:{value:"Höhe 120cm Breite 60cm"}},[t._v("Höhe 120cm Breite 60cm")]),t._v(" "),i("option",{attrs:{value:"Höhe 120cm Breite 100cm"}},[t._v("Höhe 120cm Breite 100cm")]),t._v(" "),i("option",{attrs:{value:"Höhe 200cm Breite 60cm"}},[t._v("Höhe 200cm Breite 60cm")]),t._v(" "),i("option",{attrs:{value:"Höhe 200cm Breite 100cm"}},[t._v("Höhe 200cm Breite 100cm")]),t._v(" "),i("option",{attrs:{value:"Höhe 200cm Breite 180cm"}},[t._v("Höhe 200cm Breite 180cm")])])])])]),t._v(" "),i("button",{staticClass:"btn mt-5"},[t._v("Weiter")])])])])}),[],!1,null,null,null).exports,c={props:["urlHandler"],data:function(){return{}},computed:{currentStep:function(){return this.$store.state.stepsForms.currentStep},progressText:function(){return this.isAuth?["Reinigung","Anzahl"]:["Reinigung","Anzahl","Kontakt"]},isAuth:function(){return"true"==document.querySelector("body").dataset.isAuth}},mounted:function(){this.$store.dispatch("stepsForms/getRegions"),this.$store.commit("stepsForms/setUrlHandler",this.urlHandler);var t=this.$route.path.replace(/[^0-9]/g,"");this.isAuth&&t&&this.$store.dispatch("stepsForms/getClientValues",t)},components:{FormProgress:a.Z,Cleaning:l,Number:d,Contact:o.Z}};const f=(0,r.Z)(c,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("form-progress",{staticClass:"mt-5",attrs:{"progress-text":t.progressText,"current-step":t.currentStep}}),t._v(" "),i("cleaning",{directives:[{name:"show",rawName:"v-show",value:1===t.currentStep,expression:"currentStep === 1"}]}),t._v(" "),i("number",{directives:[{name:"show",rawName:"v-show",value:2===t.currentStep,expression:"currentStep === 2"}]}),t._v(" "),i("contact",{directives:[{name:"show",rawName:"v-show",value:3===t.currentStep,expression:"currentStep === 3"}]})],1)}),[],!1,null,null,null).exports}}]);