"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[777],{6699:(t,e,i)=>{i.r(e),i.d(e,{default:()=>o});const n={data:function(){return{prefix:"/benutzerkonto",menu:[{text:"Persönliche Daten",to:"/personliche-daten",submenu:[{text:"Info",to:"/info"},{text:"Passwort ändern",to:"/passwort-andern"}]},{text:"Umzug",to:"/umzug"},{text:"Reinigung",to:"/reinigung"},{text:"Umzug + Reinigung",to:"/umzug-und-reinigung"},{text:"Maler/Gipser",to:"/maler"},{text:"Bodenleger",to:"/bodenleger"},{text:"Heizungsanbieter",to:"/heizung"},{text:"Elektriker",to:"/elektriker"},{text:"Gärtner",to:"/gartner"},{text:"Schreiner",to:"/schreiner"}]}}};var s=i(1900);const r={data:function(){return{isShowSidebarMob:!1}},components:{Sidebar:(0,s.Z)(n,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"profile-sidebar"},t._l(t.menu,(function(e){return i("div",{key:e.to,staticClass:"profile-sidebar__item",class:{"profile-sidebar__item_has-sublist":e.submenu,"profile-sidebar__item_active":t.$route.path.includes(e.to)}},[e.submenu?[i("a",{staticClass:"profile-sidebar__link",attrs:{href:"#"}},[t._v("\n                "+t._s(e.text)+"\n            ")])]:[i("span",{on:{click:function(i){return t.$emit("clickToLink",e.text)}}},[i("router-link",{staticClass:"profile-sidebar__link",attrs:{"active-class":"profile-sidebar__link_active",to:{path:t.prefix+e.to,query:e.query}}},[t._v("\n                    "+t._s(e.text)+"\n                ")])],1)],t._v(" "),e.submenu?i("ul",{staticClass:"profile-sidebar__sublist"},t._l(e.submenu,(function(n){return i("li",{key:n.to,staticClass:"profile-sidebar__subitem",on:{click:function(e){return t.$emit("clickToLink",n.text)}}},[i("router-link",{staticClass:"profile-sidebar__sublink",attrs:{"active-class":"profile-sidebar__sublink_active",to:t.prefix+e.to+n.to}},[t._v("\n                    "+t._s(n.text)+"\n                ")])],1)})),0):t._e()],2)})),0)}),[],!1,null,null,null).exports}};const o=(0,s.Z)(r,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"row"},[i("div",{staticClass:"col-lg-4 mt-2 mt-lg-4"},[i("sidebar",{class:{"d-none d-lg-block":!t.isShowSidebarMob},on:{clickToLink:function(e){t.isShowSidebarMob=!1}}})],1),t._v(" "),i("div",{staticClass:"col-lg-8 mt-2 mt-lg-4"},[i("div",{staticClass:"profile-info",class:{"d-none d-lg-block":t.isShowSidebarMob}},[i("button",{staticClass:"btn btn_theme_gray mb-4 d-block d-lg-none mb-4",on:{click:function(e){t.isShowSidebarMob=!0}}},[t._v("\n                Zurück\n            ")]),t._v(" "),i("router-view",{key:t.$route.path})],1)])])}),[],!1,null,null,null).exports}}]);