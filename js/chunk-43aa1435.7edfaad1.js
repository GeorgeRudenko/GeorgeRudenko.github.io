(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-43aa1435"],{"057f":function(t,e,r){var n=r("fc6a"),c=r("241c").f,o={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],i=function(t){try{return c(t)}catch(e){return a.slice()}};t.exports.f=function(t){return a&&"[object Window]"==o.call(t)?i(t):c(n(t))}},"13d6":function(t,e,r){"use strict";r("2974")},"159b":function(t,e,r){var n=r("da84"),c=r("fdbc"),o=r("17c2"),a=r("9112");for(var i in c){var u=n[i],s=u&&u.prototype;if(s&&s.forEach!==o)try{a(s,"forEach",o)}catch(b){s.forEach=o}}},"17c2":function(t,e,r){"use strict";var n=r("b727").forEach,c=r("a640"),o=c("forEach");t.exports=o?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},2974:function(t,e,r){},"43ca":function(t,e,r){"use strict";r("59a3")},"59a3":function(t,e,r){},"746f":function(t,e,r){var n=r("428f"),c=r("5135"),o=r("e538"),a=r("9bf2").f;t.exports=function(t){var e=n.Symbol||(n.Symbol={});c(e,t)||a(e,t,{value:o.f(t)})}},"82ab":function(t,e,r){},8418:function(t,e,r){"use strict";var n=r("c04e"),c=r("9bf2"),o=r("5c6c");t.exports=function(t,e,r){var a=n(e);a in t?c.f(t,a,o(0,r)):t[a]=r}},"8a48":function(t,e,r){"use strict";r("ff46")},"9deb":function(t,e,r){"use strict";var n=r("7a23"),c=Object(n["E"])("data-v-4946ab19");Object(n["s"])("data-v-4946ab19");var o={class:"content_header"},a={key:0,class:"prev_link"},i={class:"title"},u={key:1,class:"control_wrapper"},s=Object(n["g"])("button",{class:"button"},"⋯",-1);Object(n["q"])();var b=c((function(t,e,r,c,b,f){var d=Object(n["w"])("svgWrapper");return Object(n["p"])(),Object(n["d"])("div",o,[""!==t.prevLink?(Object(n["p"])(),Object(n["d"])("button",a,[Object(n["g"])(d,{class:"icon",icon:"arrow"})])):Object(n["e"])("",!0),Object(n["g"])("h4",i,Object(n["y"])(t.title),1),!0===t.controlPanel?(Object(n["p"])(),Object(n["d"])("div",u,[s])):Object(n["e"])("",!0)])})),f=r("d247"),d=Object(n["h"])({name:"Header",components:{svgWrapper:f["a"]},props:{title:{type:String,required:!0},prevLink:{type:String,required:!1,default:""},controlPanel:{type:Boolean,required:!1,default:!1}}});r("8a48");d.render=b,d.__scopeId="data-v-4946ab19";e["a"]=d},a4d3:function(t,e,r){"use strict";var n=r("23e7"),c=r("da84"),o=r("d066"),a=r("c430"),i=r("83ab"),u=r("4930"),s=r("fdbf"),b=r("d039"),f=r("5135"),d=r("e8b5"),l=r("861d"),p=r("825a"),O=r("7b0b"),g=r("fc6a"),j=r("c04e"),v=r("5c6c"),y=r("7c73"),h=r("df75"),m=r("241c"),w=r("057f"),P=r("7418"),k=r("06cf"),C=r("9bf2"),_=r("d1e7"),S=r("9112"),E=r("6eeb"),L=r("5692"),q=r("f772"),A=r("d012"),T=r("90e3"),D=r("b622"),F=r("e538"),N=r("746f"),W=r("d44e"),I=r("69f3"),x=r("b727").forEach,B=q("hidden"),G="Symbol",J="prototype",H=D("toPrimitive"),Q=I.set,U=I.getterFor(G),z=Object[J],K=c.Symbol,M=o("JSON","stringify"),R=k.f,V=C.f,X=w.f,Y=_.f,Z=L("symbols"),$=L("op-symbols"),tt=L("string-to-symbol-registry"),et=L("symbol-to-string-registry"),rt=L("wks"),nt=c.QObject,ct=!nt||!nt[J]||!nt[J].findChild,ot=i&&b((function(){return 7!=y(V({},"a",{get:function(){return V(this,"a",{value:7}).a}})).a}))?function(t,e,r){var n=R(z,e);n&&delete z[e],V(t,e,r),n&&t!==z&&V(z,e,n)}:V,at=function(t,e){var r=Z[t]=y(K[J]);return Q(r,{type:G,tag:t,description:e}),i||(r.description=e),r},it=s?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof K},ut=function(t,e,r){t===z&&ut($,e,r),p(t);var n=j(e,!0);return p(r),f(Z,n)?(r.enumerable?(f(t,B)&&t[B][n]&&(t[B][n]=!1),r=y(r,{enumerable:v(0,!1)})):(f(t,B)||V(t,B,v(1,{})),t[B][n]=!0),ot(t,n,r)):V(t,n,r)},st=function(t,e){p(t);var r=g(e),n=h(r).concat(pt(r));return x(n,(function(e){i&&!ft.call(r,e)||ut(t,e,r[e])})),t},bt=function(t,e){return void 0===e?y(t):st(y(t),e)},ft=function(t){var e=j(t,!0),r=Y.call(this,e);return!(this===z&&f(Z,e)&&!f($,e))&&(!(r||!f(this,e)||!f(Z,e)||f(this,B)&&this[B][e])||r)},dt=function(t,e){var r=g(t),n=j(e,!0);if(r!==z||!f(Z,n)||f($,n)){var c=R(r,n);return!c||!f(Z,n)||f(r,B)&&r[B][n]||(c.enumerable=!0),c}},lt=function(t){var e=X(g(t)),r=[];return x(e,(function(t){f(Z,t)||f(A,t)||r.push(t)})),r},pt=function(t){var e=t===z,r=X(e?$:g(t)),n=[];return x(r,(function(t){!f(Z,t)||e&&!f(z,t)||n.push(Z[t])})),n};if(u||(K=function(){if(this instanceof K)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=T(t),r=function(t){this===z&&r.call($,t),f(this,B)&&f(this[B],e)&&(this[B][e]=!1),ot(this,e,v(1,t))};return i&&ct&&ot(z,e,{configurable:!0,set:r}),at(e,t)},E(K[J],"toString",(function(){return U(this).tag})),E(K,"withoutSetter",(function(t){return at(T(t),t)})),_.f=ft,C.f=ut,k.f=dt,m.f=w.f=lt,P.f=pt,F.f=function(t){return at(D(t),t)},i&&(V(K[J],"description",{configurable:!0,get:function(){return U(this).description}}),a||E(z,"propertyIsEnumerable",ft,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!u,sham:!u},{Symbol:K}),x(h(rt),(function(t){N(t)})),n({target:G,stat:!0,forced:!u},{for:function(t){var e=String(t);if(f(tt,e))return tt[e];var r=K(e);return tt[e]=r,et[r]=e,r},keyFor:function(t){if(!it(t))throw TypeError(t+" is not a symbol");if(f(et,t))return et[t]},useSetter:function(){ct=!0},useSimple:function(){ct=!1}}),n({target:"Object",stat:!0,forced:!u,sham:!i},{create:bt,defineProperty:ut,defineProperties:st,getOwnPropertyDescriptor:dt}),n({target:"Object",stat:!0,forced:!u},{getOwnPropertyNames:lt,getOwnPropertySymbols:pt}),n({target:"Object",stat:!0,forced:b((function(){P.f(1)}))},{getOwnPropertySymbols:function(t){return P.f(O(t))}}),M){var Ot=!u||b((function(){var t=K();return"[null]"!=M([t])||"{}"!=M({a:t})||"{}"!=M(Object(t))}));n({target:"JSON",stat:!0,forced:Ot},{stringify:function(t,e,r){var n,c=[t],o=1;while(arguments.length>o)c.push(arguments[o++]);if(n=e,(l(e)||void 0!==t)&&!it(t))return d(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!it(e))return e}),c[1]=e,M.apply(null,c)}})}K[J][H]||S(K[J],H,K[J].valueOf),W(K,G),A[B]=!0},a640:function(t,e,r){"use strict";var n=r("d039");t.exports=function(t,e){var r=[][t];return!!r&&n((function(){r.call(null,e||function(){throw 1},1)}))}},b0c0:function(t,e,r){var n=r("83ab"),c=r("9bf2").f,o=Function.prototype,a=o.toString,i=/^\s*function ([^ (]*)/,u="name";n&&!(u in o)&&c(o,u,{configurable:!0,get:function(){try{return a.call(this).match(i)[1]}catch(t){return""}}})},b64b:function(t,e,r){var n=r("23e7"),c=r("7b0b"),o=r("df75"),a=r("d039"),i=a((function(){o(1)}));n({target:"Object",stat:!0,forced:i},{keys:function(t){return o(c(t))}})},bee8:function(t,e,r){},bf5e:function(t,e,r){"use strict";r.r(e);var n=r("7a23"),c={id:"content"};function o(t,e,r,o,a,i){var u=Object(n["w"])("PageHeader"),s=Object(n["w"])("ChildPageControl"),b=Object(n["w"])("CategoriesWrapper");return Object(n["p"])(),Object(n["d"])("div",c,[Object(n["g"])(u,{title:"Categories","control-panel":!0}),Object(n["g"])(s,{links:t.childPages},null,8,["links"]),Object(n["g"])(b,{categories:t.categories},null,8,["categories"])])}var a=r("5502"),i=r("6c02"),u=r("acac"),s=r("9deb"),b=r("e379"),f=Object(n["E"])("data-v-fb2b1c7e");Object(n["s"])("data-v-fb2b1c7e");var d={class:"categories_wrapper"};Object(n["q"])();var l=f((function(t,e,r,c,o,a){var i=Object(n["w"])("Category"),u=Object(n["w"])("AddNewCategory");return Object(n["p"])(),Object(n["d"])("div",d,[(Object(n["p"])(!0),Object(n["d"])(n["a"],null,Object(n["v"])(t.categories,(function(t,e){return Object(n["p"])(),Object(n["d"])(i,{key:e,category:t},null,8,["category"])})),128)),Object(n["g"])(u)])})),p=Object(n["E"])("data-v-ad0230b2");Object(n["s"])("data-v-ad0230b2");var O={class:"header"},g={class:"footer"},j={class:"data_wrapper"},v={key:0,class:"done"},y={key:1,class:"done"},h={key:2,class:"done"};Object(n["q"])();var m=p((function(t,e,r,c,o,a){var i=Object(n["w"])("svgWrapper"),u=Object(n["w"])("router-link");return Object(n["p"])(),Object(n["d"])("div",{class:["category_wrapper",t.category.color]},[Object(n["g"])("div",O,[Object(n["g"])(u,{class:"preview_icon bg_color",to:"/categories/".concat(t.category.id)},{default:p((function(){return[Object(n["g"])(i,{class:"icon fill_color",icon:t.category.icon},null,8,["icon"])]})),_:1},8,["to"]),Object(n["g"])("div",{class:["favourite_icon",{empty:!1===t.category.is_favourite}],onClick:e[1]||(e[1]=Object(n["D"])((function(e){return t.toggleFavourite()}),["prevent"]))},[t.category.is_favourite?(Object(n["p"])(),Object(n["d"])(i,{key:0,class:"icon",icon:"favourite"})):(Object(n["p"])(),Object(n["d"])(i,{key:1,class:"icon",icon:"favouriteEmpty"}))],2)]),Object(n["g"])("div",g,[Object(n["g"])("div",j,[Object(n["g"])(u,{class:"title",to:"/categories/".concat(t.category.id)},{default:p((function(){return[Object(n["f"])(Object(n["y"])(t.category.title),1)]})),_:1},8,["to"]),t.todosLength>0&&t.todosLength>t.completedTodosLength?(Object(n["p"])(),Object(n["d"])("span",v,Object(n["y"])(t.completedTodosLength)+"/"+Object(n["y"])(t.todosLength)+" done",1)):t.todosLength>0&&t.todosLength===t.completedTodosLength?(Object(n["p"])(),Object(n["d"])("span",y,"All done!")):0===t.todosLength?(Object(n["p"])(),Object(n["d"])("span",h,"Empty :(")):Object(n["e"])("",!0)])])],2)})),w=(r("b64b"),r("a4d3"),r("4de4"),r("e439"),r("159b"),r("dbb4"),r("ade3"));function P(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function k(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?P(Object(r),!0).forEach((function(e){Object(w["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):P(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var C=r("7bdc"),_=r("d247"),S=Object(n["h"])({name:"Category",components:{svgWrapper:_["a"]},props:{category:{type:Object,required:!0}},setup:function(t){var e=Object(a["b"])(),r=Object(n["b"])((function(){return t.category})),c=Object(n["b"])((function(){return t.category.is_favourite})),o=Object(n["b"])((function(){return e.getters[C["b"].GetAllTodosByCategory](r.value.id).length})),i=Object(n["b"])((function(){return e.getters[C["b"].GetCompletedTodosByCategory](r.value.id).length})),s=Object(n["b"])((function(){return e.getters[C["b"].GetChildCompletedTodosByCategory](r.value.id).length})),b=Object(n["b"])((function(){return i.value+s.value})),f=function(){var t=k(k({},r.value),{},{is_favourite:!c.value});e.dispatch(u["a"].UpdateCategoryFavourite,t)};return{todosLength:o,completedTodosLength:b,toggleFavourite:f}}});r("13d6");S.render=m,S.__scopeId="data-v-ad0230b2";var E=S,L=Object(n["E"])("data-v-7b6cb16e");Object(n["s"])("data-v-7b6cb16e");var q={class:"add_new_category"},A=Object(n["g"])("button",{class:"control"},"+",-1);Object(n["q"])();var T=L((function(t,e,r,c,o,a){return Object(n["p"])(),Object(n["d"])("div",q,[A])})),D=Object(n["h"])({name:"AddNewCategory"});r("eaa1");D.render=T,D.__scopeId="data-v-7b6cb16e";var F=D,N=Object(n["h"])({name:"CategoriesWrapper",components:{Category:E,AddNewCategory:F},props:{categories:{type:Array,required:!0}}});r("43ca");N.render=l,N.__scopeId="data-v-fb2b1c7e";var W=N,I=Object(n["h"])({name:"Categories",components:{PageHeader:s["a"],ChildPageControl:b["a"],CategoriesWrapper:W},setup:function(){var t=Object(i["c"])(),e=Object(a["b"])(),r=[{to:"/categories",name:"All Categories"},{to:"/categories?key=favourites",name:"Favourites"}],c=Object(n["b"])((function(){return t.query.key})),o=Object(n["b"])((function(){return t.fullPath})),s=Object(n["b"])((function(){return"favourites"===c.value?u["c"].Favourites:u["c"].All})),b=Object(n["b"])((function(){return e.getters[u["b"].GetCategories](s.value)}));return{childPages:r,routeCurrentPath:o,categories:b}}});I.render=o;e["default"]=I},d9d4:function(t,e,r){"use strict";r("82ab")},dbb4:function(t,e,r){var n=r("23e7"),c=r("83ab"),o=r("56ef"),a=r("fc6a"),i=r("06cf"),u=r("8418");n({target:"Object",stat:!0,sham:!c},{getOwnPropertyDescriptors:function(t){var e,r,n=a(t),c=i.f,s=o(n),b={},f=0;while(s.length>f)r=c(n,e=s[f++]),void 0!==r&&u(b,e,r);return b}})},e379:function(t,e,r){"use strict";r("b0c0");var n=r("7a23"),c=Object(n["E"])("data-v-c39fe73e");Object(n["s"])("data-v-c39fe73e");var o={key:0,class:"page_control"};Object(n["q"])();var a=c((function(t,e,r,a,i,u){var s=Object(n["w"])("router-link");return t.links.length>0?(Object(n["p"])(),Object(n["d"])("div",o,[(Object(n["p"])(!0),Object(n["d"])(n["a"],null,Object(n["v"])(t.links,(function(e,r){return Object(n["p"])(),Object(n["d"])(s,{class:["child_link",{active:e.to===t.routeCurrentPath}],key:r,to:e.to},{default:c((function(){return[Object(n["f"])(Object(n["y"])(e.name),1)]})),_:2},1032,["to","class"])})),128))])):Object(n["e"])("",!0)})),i=r("6c02"),u=Object(n["h"])({name:"ChildPageControl",props:{links:{type:Array,required:!1,default:function(){return[]}}},setup:function(){var t=Object(i["c"])(),e=Object(n["b"])((function(){return t.fullPath}));return{routeCurrentPath:e}}});r("d9d4");u.render=a,u.__scopeId="data-v-c39fe73e";e["a"]=u},e439:function(t,e,r){var n=r("23e7"),c=r("d039"),o=r("fc6a"),a=r("06cf").f,i=r("83ab"),u=c((function(){a(1)})),s=!i||u;n({target:"Object",stat:!0,forced:s,sham:!i},{getOwnPropertyDescriptor:function(t,e){return a(o(t),e)}})},e538:function(t,e,r){var n=r("b622");e.f=n},eaa1:function(t,e,r){"use strict";r("bee8")},ff46:function(t,e,r){}}]);
//# sourceMappingURL=chunk-43aa1435.7edfaad1.js.map