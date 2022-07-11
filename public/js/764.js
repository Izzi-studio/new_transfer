"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[764],{4764:(t,s,e)=>{e.r(s),e.d(s,{default:()=>n});const a={computed:{menu:function(){return[{text:this.trans("personal-data"),submenu:[{text:this.trans("info"),to:{name:"personalData_firma"}},{text:this.trans("change-password"),to:{name:"changePassword_firma"}}]},{text:this.trans("requests"),submenu:[{text:this.trans("request-new"),to:{params:{requests:"offene"},name:"requests_firma"}},{text:this.trans("request-accepted"),to:{params:{requests:"angenommene"},name:"requests_firma"}},{text:this.trans("request-reject"),to:{params:{requests:"abgesagte"},name:"requests_firma"}}]},{text:this.trans("requests-from-companies"),submenu:[{text:this.trans("requests-selling"),to:{params:{requests:"verkaufe"},name:"sellRequests_firma"}},{text:this.trans("requests-bought"),to:{params:{requests:"kaufe"},name:"sellRequests_firma"}},{text:this.trans("request-sell"),to:{name:"sellList_firma"}},{text:this.trans("requests-trade"),href:this.$store.state.additionalInfo.resellUrl}]},{text:this.trans("requests-completed"),to:{name:"reviews_firma"}},{text:this.trans("top-up-bill"),to:{name:"payment_firma"}},{text:this.trans("price"),to:{name:"prices_firma"}}]},allProposals:function(){return this.$store.state.profile.allProposals},newProposals:function(){return this.$store.state.profile.newProposals},currentComponentName:function(){return this.$route.name}}};var i=e(1900);const r={props:["additionalInfo","localize"],data:function(){return{isShowSidebarMob:!1}},mounted:function(){this.$store.dispatch("profile/getProposalsCounts"),this.$store.commit("setAdditionalInfo",JSON.parse(this.additionalInfo)),this.$store.commit("setLocalize",JSON.parse(this.localize))},components:{Sidebar:(0,i.Z)(a,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"profile-sidebar"},t._l(t.menu,(function(s){return e("div",{key:s.text,staticClass:"profile-sidebar__item",class:{"profile-sidebar__item_has-sublist":s.submenu,"profile-sidebar__item_active":s.submenu&&s.submenu.map((function(t){return t.to&&t.to.name})).includes(t.currentComponentName)}},[s.submenu?[e("a",{staticClass:"profile-sidebar__link",attrs:{href:"#"}},[t._v("\n                "+t._s(s.text)+"\n                "),"Anfragen"==s.text&&t.allProposals?[t._v("\n                    "+t._s("("+t.allProposals+")")+"\n                    "),t.newProposals?e("span",{staticClass:"ms-auto me-3"},[t._v("+"+t._s(t.newProposals))]):t._e()]:t._e()],2)]:[e("span",{on:{click:function(s){return t.$emit("clickToLink")}}},[e("router-link",{staticClass:"profile-sidebar__link",attrs:{"active-class":"profile-sidebar__link_active",to:s.to}},[t._v("\n                    "+t._s(s.text)+"\n                ")])],1)],t._v(" "),s.submenu?e("ul",{staticClass:"profile-sidebar__sublist"},t._l(s.submenu,(function(s){return e("li",{key:s.text,staticClass:"profile-sidebar__subitem",on:{click:function(s){return t.$emit("clickToLink")}}},[s.to?e("router-link",{staticClass:"profile-sidebar__sublink",attrs:{"active-class":"profile-sidebar__sublink_active",to:s.to,exact:""}},[t._v("\n                    "+t._s(s.text)+"\n                ")]):e("a",{staticClass:"profile-sidebar__sublink",attrs:{href:s.href}},[t._v("\n                    "+t._s(s.text)+"\n                ")])],1)})),0):t._e()],2)})),0)}),[],!1,null,null,null).exports}};const n=(0,i.Z)(r,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("div",{staticClass:"profile__header"},[e("h1",{staticClass:"section-title"},[t._v(t._s(t.trans("my-bill")))]),t._v(" "),e("p",{staticClass:"profile__bill"},[t._v("CHF: 00.00")])]),t._v(" "),e("div",{staticClass:"row mt-4"},[e("div",{staticClass:"col-lg-4 mt-2 mt-lg-4"},[e("sidebar",{class:{"d-none d-lg-block":!t.isShowSidebarMob},on:{clickToLink:function(s){t.isShowSidebarMob=!1}}})],1),t._v(" "),e("div",{staticClass:"col-lg-8 mt-2 mt-lg-4"},[e("div",{staticClass:"profile-info",class:{"d-none d-lg-block":t.isShowSidebarMob}},[e("button",{staticClass:"btn btn_theme_gray mb-4 d-block d-lg-none mb-4",on:{click:function(s){t.isShowSidebarMob=!0}}},[t._v("\n                    Zurück\n                ")]),t._v(" "),e("router-view",{key:t.$route.path})],1)])])])}),[],!1,null,null,null).exports}}]);