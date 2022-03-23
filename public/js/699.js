"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[699],{5173:(e,s,t)=>{t.d(s,{Z:()=>l});const i={props:["progressText","currentStep"],computed:{totalSteps:function(){return this.progressText.length},classObject:function(){return{"form-progress_steps_3":3===this.totalSteps,"form-progress_steps_more-3":this.totalSteps>3}}}};const l=(0,t(1900).Z)(i,(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"form-progress",class:e.classObject},e._l(e.progressText,(function(s,i){return t("p",{key:s,staticClass:"form-progress__item",class:{"form-progress__item_active":e.currentStep>=i+1}},[t("span",[e._v(e._s(s))])])})),0)}),[],!1,null,null,null).exports},2699:(e,s,t)=>{t.r(s),t.d(s,{default:()=>f});var i=t(5173);const l={data:function(){return{fields:{name:"",lastname:"",postcode:"",city:"",street:"",house:"",email:"",phone:"",company:"",upload_file:null},fieldsGroupName:"generalData"}},computed:{fileName:function(){return this.fields.upload_file&&this.fields.upload_file.name||"UPLOAD FILE"}},methods:{processFile:function(e){this.fields.upload_file=e.target.files[0]},formHandler:function(){this.$store.commit("stepsForms/setData",{key:this.fieldsGroupName,data:this.fields}),this.$store.commit("stepsForms/nextStep")}}};var r=t(1900);const a=(0,r.Z)(l,(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("form",{staticClass:"steps-form__form",on:{submit:function(s){return s.preventDefault(),e.formHandler.apply(null,arguments)}}},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-xl-7"},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-md-6 mt-4"},[t("form-field",{attrs:{label:"Vorname*",type:"text",required:"",placeholder:"Vorname*"},model:{value:e.fields.name,callback:function(s){e.$set(e.fields,"name",s)},expression:"fields.name"}})],1),e._v(" "),t("div",{staticClass:"col-md-6 mt-4"},[t("form-field",{attrs:{label:"Nachname*",type:"text",required:"",placeholder:"Nachname*"},model:{value:e.fields.lastname,callback:function(s){e.$set(e.fields,"lastname",s)},expression:"fields.lastname"}})],1),e._v(" "),t("div",{staticClass:"col-md-6 mt-4"},[t("form-field",{attrs:{label:"PLZ*",type:"number",required:"",placeholder:"PLZ*"},model:{value:e.fields.postcode,callback:function(s){e.$set(e.fields,"postcode",s)},expression:"fields.postcode"}})],1),e._v(" "),t("div",{staticClass:"col-md-6 mt-4"},[t("form-field",{attrs:{label:"Ort*",type:"text",required:"",placeholder:"Ort*"},model:{value:e.fields.city,callback:function(s){e.$set(e.fields,"city",s)},expression:"fields.city"}})],1),e._v(" "),t("div",{staticClass:"col-md-6 mt-4"},[t("form-field",{attrs:{label:"Strasse*",type:"text",required:"",placeholder:"Strasse*"},model:{value:e.fields.street,callback:function(s){e.$set(e.fields,"street",s)},expression:"fields.street"}})],1),e._v(" "),t("div",{staticClass:"col-md-6 mt-4"},[t("form-field",{attrs:{label:"Hausnummer*",type:"text",required:"",placeholder:"Hausnummer*"},model:{value:e.fields.house,callback:function(s){e.$set(e.fields,"house",s)},expression:"fields.house"}})],1),e._v(" "),t("div",{staticClass:"col-md-6 mt-4"},[t("form-field",{attrs:{label:"E-Mail*",type:"email",required:"",placeholder:"E-Mail*"},model:{value:e.fields.email,callback:function(s){e.$set(e.fields,"email",s)},expression:"fields.email"}})],1),e._v(" "),t("div",{staticClass:"col-md-6 mt-4"},[t("form-field",{attrs:{label:"Telefon*",type:"tel",required:"",placeholder:"Telefon*"},model:{value:e.fields.phone,callback:function(s){e.$set(e.fields,"phone",s)},expression:"fields.phone"}})],1),e._v(" "),t("div",{staticClass:"col-md-6 mt-4"},[t("form-field",{attrs:{label:"Unternehmen*",type:"text",required:"",placeholder:"Unternehmen*"},model:{value:e.fields.company,callback:function(s){e.$set(e.fields,"company",s)},expression:"fields.company"}})],1),e._v(" "),t("div",{staticClass:"col-md-6 mt-4 d-flex align-items-end"},[t("label",{staticClass:"form-file"},[t("input",{attrs:{type:"file"},on:{change:function(s){return e.processFile(s)}}}),e._v(" "),t("p",{staticClass:"form-file__label"},[e._v(e._s(e.fileName))])])]),e._v(" "),e._m(0)])])])])}),[function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"col-md-6 mt-4"},[t("button",{staticClass:"btn btn_width_max"},[e._v("Starten Sie Ihre Problemitgliedschaft")])])}],!1,null,null,null).exports;const o={data:function(){return{fields:{password:"",password_confirmation:"","types_of_jobs[]":[]},fieldsGroupName:"profile",isSended:!1}},computed:{isSelectedCheckboxes:function(){return!!this.fields["types_of_jobs[]"].length},isMatchPasswords:function(){return this.fields.password===this.fields.password_confirmation},typesJobs:function(){return this.$store.state.typesJobs}},methods:{formHandler:function(){this.isSended=!0,this.isMatchPasswords&&this.isSelectedCheckboxes&&(this.$store.commit("stepsForms/setData",{key:this.fieldsGroupName,data:this.fields}),this.$store.commit("stepsForms/nextStep"))}}};const n=(0,r.Z)(o,(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("form",{staticClass:"steps-form__form",on:{submit:function(s){return s.preventDefault(),e.formHandler.apply(null,arguments)},input:function(s){e.isSended=!1}}},[t("div",{staticClass:"row mt-5"},[t("div",{staticClass:"col-xl-7"},[t("button",{staticClass:"btn btn_theme_gray",attrs:{type:"button"},on:{click:function(s){return e.$store.commit("stepsForms/prevStep")}}},[e._v("\n                Zurück\n            ")]),e._v(" "),t("div",{staticClass:"row mt-2"},[t("div",{staticClass:"col-md-6 mt-4"},[t("form-field",{attrs:{label:"Passwort*",type:"password",minlength:"8",required:"",placeholder:"Passwort*"},model:{value:e.fields.password,callback:function(s){e.$set(e.fields,"password",s)},expression:"fields.password"}})],1),e._v(" "),t("div",{staticClass:"col-md-6 mt-4"},[t("form-field",{attrs:{label:"Passwort bestätigen*",type:"password",minlength:"8",required:"",placeholder:"Passwort bestätigen*"},model:{value:e.fields.password_confirmation,callback:function(s){e.$set(e.fields,"password_confirmation",s)},expression:"fields.password_confirmation"}})],1)]),e._v(" "),t("p",{directives:[{name:"show",rawName:"v-show",value:!e.isMatchPasswords&&e.isSended,expression:"!isMatchPasswords && isSended"}],staticClass:"text-danger mt-3"},[e._v("Das Passwort ist zu kurz")]),e._v(" "),t("h5",{staticClass:"mt-5"},[e._v("Ich wünsche Anfragen für folgende Arbeiten*:")]),e._v(" "),t("div",{staticClass:"row"},e._l(e.typesJobs,(function(s){return t("div",{key:s.id,staticClass:"col-md-4 mt-4"},[t("form-checkbox",{attrs:{val:s.id,label:s.name},model:{value:e.fields["types_of_jobs[]"],callback:function(s){e.$set(e.fields,"types_of_jobs[]",s)},expression:"fields['types_of_jobs[]']"}})],1)})),0),e._v(" "),t("p",{directives:[{name:"show",rawName:"v-show",value:!e.isSelectedCheckboxes&&e.isSended,expression:"!isSelectedCheckboxes && isSended"}],staticClass:"text-danger mt-3"},[e._v("Bitte wählen Sie etwas aus der Liste aus!")]),e._v(" "),t("button",{staticClass:"btn mt-4"},[e._v("Ausgefullt")])])])])}),[],!1,null,null,null).exports;const c={data:function(){return{fields:{"regions_ids[]":[]},fieldsGroupName:"regions",isSended:!1}},computed:{isSelectedCheckboxes:function(){return!!this.fields["regions_ids[]"].length},regions:function(){return this.$store.state.regions}},methods:{selectAll:function(){this.fields["regions_ids[]"]=[],this.fields["regions_ids[]"]=this.regions.map((function(e){return e.id}))},formHandler:function(){this.isSended=!0,this.isSelectedCheckboxes&&(this.$store.commit("stepsForms/setData",{key:this.fieldsGroupName,data:this.fields}),this.$store.dispatch("stepsForms/sendData"))}}};const d=(0,r.Z)(c,(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("form",{staticClass:"steps-form__form",on:{submit:function(s){return s.preventDefault(),e.formHandler.apply(null,arguments)},input:function(s){e.isSended=!1}}},[t("div",{staticClass:"row mt-5"},[t("div",{staticClass:"col-xl-8"},[t("button",{staticClass:"btn btn_theme_gray",attrs:{type:"button"},on:{click:function(s){return e.$store.commit("stepsForms/prevStep")}}},[e._v("\n                Zurück\n            ")]),e._v(" "),t("h5",{staticClass:"mt-5"},[e._v("Wählen Sie Ihre Gebiete*:")]),e._v(" "),t("div",{staticClass:"row"},e._l(e.regions,(function(s){return t("div",{key:s.id,staticClass:"col-md-4 mt-4"},[t("form-checkbox",{attrs:{val:s.id,label:s.name},model:{value:e.fields["regions_ids[]"],callback:function(s){e.$set(e.fields,"regions_ids[]",s)},expression:"fields['regions_ids[]']"}})],1)})),0),e._v(" "),t("p",{directives:[{name:"show",rawName:"v-show",value:!e.isSelectedCheckboxes&&e.isSended,expression:"!isSelectedCheckboxes && isSended"}],staticClass:"text-danger mt-3"},[e._v("Bitte wählen Sie etwas aus der Liste aus!")]),e._v(" "),t("div",{staticClass:"d-flex mt-4"},[t("button",{staticClass:"btn",attrs:{type:"button"},on:{click:e.selectAll}},[e._v("\n                    Alle wählen!\n                ")]),e._v(" "),t("button",{staticClass:"btn mx-4"},[e._v("Bereit!")])])])])])}),[],!1,null,null,null).exports,m={data:function(){return{progressText:["Allgemeine Daten","Profil","Region"]}},computed:{currentStep:function(){return this.$store.state.stepsForms.currentStep}},mounted:function(){this.$store.dispatch("stepsForms/getTypeJobs"),this.$store.dispatch("stepsForms/getRegions"),this.$store.commit("stepsForms/setUrlHandler","/partner-werden")},components:{FormProgress:i.Z,GeneralData:a,Profile:n,Regions:d}};const f=(0,r.Z)(m,(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",[t("form-progress",{staticClass:"mt-5",attrs:{"progress-text":e.progressText,"current-step":e.currentStep}}),e._v(" "),t("general-data",{directives:[{name:"show",rawName:"v-show",value:1===e.currentStep,expression:"currentStep === 1"}]}),e._v(" "),t("profile",{directives:[{name:"show",rawName:"v-show",value:2===e.currentStep,expression:"currentStep === 2"}]}),e._v(" "),t("regions",{directives:[{name:"show",rawName:"v-show",value:3===e.currentStep,expression:"currentStep === 3"}]})],1)}),[],!1,null,null,null).exports}}]);