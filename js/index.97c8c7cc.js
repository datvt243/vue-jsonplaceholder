(function(t){function e(e){for(var r,o,c=e[0],i=e[1],u=e[2],l=0,f=[];l<c.length;l++)o=c[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);p&&p(e);while(f.length)f.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],r=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(r=!1)}r&&(s.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},o={index:0},a={index:0},s=[];function c(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"1ef88b9c","chunk-05903106":"5d5a65b5","chunk-2d0e95df":"7e2654be","chunk-4eef20e6":"f07f51ab","chunk-6a7159fd":"c43b18bd","chunk-e8d74de0":"eaa85e59","chunk-edce7336":"49bc6299"}[t]+".js"}function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n={"chunk-05903106":1,"chunk-4eef20e6":1,"chunk-6a7159fd":1,"chunk-e8d74de0":1,"chunk-edce7336":1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=new Promise((function(e,n){for(var r="css/"+({about:"about"}[t]||t)+"."+{about:"31d6cfe0","chunk-05903106":"58bd4f3e","chunk-2d0e95df":"31d6cfe0","chunk-4eef20e6":"0c83c9e1","chunk-6a7159fd":"8ba8b87f","chunk-e8d74de0":"34dd996f","chunk-edce7336":"1d278571"}[t]+".css",a=i.p+r,s=document.getElementsByTagName("link"),c=0;c<s.length;c++){var u=s[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===a))return e()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){u=f[c],l=u.getAttribute("data-href");if(l===r||l===a)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var r=e&&e.target&&e.target.src||a,s=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=r,delete o[t],p.parentNode.removeChild(p),n(s)},p.href=a;var d=document.getElementsByTagName("head")[0];d.appendChild(p)})).then((function(){o[t]=0})));var r=a[t];if(0!==r)if(r)e.push(r[2]);else{var s=new Promise((function(e,n){r=a[t]=[e,n]}));e.push(r[2]=s);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=c(t);var f=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(p);var n=a[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",f.name="ChunkLoadError",f.type=r,f.request=o,n[1](f)}a[t]=void 0}};var p=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/vue-jsonplaceholder/",i.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var f=0;f<u.length;f++)e(u[f]);var p=l;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"06da":function(t,e,n){},"0fe7":function(t,e,n){"use strict";n("4628")},"1a9a":function(t,e,n){"use strict";n("06da")},"3a62":function(t,e,n){},4628:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("4de4"),n("d3b7"),n("25f0"),n("fb6a");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-container bg-dark text-white"},[n("div",{staticClass:"flex flex-col min-h-screen"},[n("Header",[n("NavMenu",{staticClass:"mx-auto"})],1),n("main",{staticClass:"main-container flex-grow py-5"},[n("TransitionFade",[n("router-view")],1)],1),n("Footer")],1)])},a=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mr-auto",attrs:{id:"nav"}},[n("div",{staticClass:"flex justify-between"},[n("div",{staticClass:"col-auto"},[n("ul",{staticClass:"flex font-semibold"},[n("li",{staticClass:"pr-6"},[n("router-link",{staticClass:"uppercase",attrs:{to:"/"}},[t._v("Bài Viết")])],1),n("li",{staticClass:"pr-6"},[n("router-link",{staticClass:"uppercase",attrs:{to:"/about"}},[t._v("Về chúng tôi")])],1)])]),n("div",{staticClass:"col-auto"},[t.userLogin.id?n("div",[n("ul",{staticClass:"flex font-semibold"},[n("li",[n("router-link",{staticClass:"uppercase text-green-500",attrs:{to:"/user/post/0"}},[t._v("Thêm bài mới")])],1)])]):t._e()])])])},c=[],i=n("5530"),u=n("2f62"),l={computed:Object(i["a"])({},Object(u["e"])(["userLogin"]))},f=l,p=n("2877"),d=Object(p["a"])(f,s,c,!1,null,null,null),h=d.exports,m=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},v=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"footer-container mt-6"},[n("div",{staticClass:"container mx-auto py-3 border-t border-opacity-10"},[n("p",{staticClass:"text-center"},[n("small",[t._v("Copyright © 2021")])])])])}],b={},g=Object(p["a"])(b,m,v,!1,null,null,null),y=g.exports,x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"header-container"},[n("div",{staticClass:"header-top py-4"},[n("div",{staticClass:"container mx-auto"},[n("div",{staticClass:"flex justify-between items-center"},[t._m(0),n("div",{staticClass:"col pl-4"},[t.getUserLogin.id?n("div",[n("div",{staticClass:"flex justify-end items-center"},[n("div",{staticClass:"col-auto"},[n("p",{staticClass:"text-right"},[n("small",{staticClass:"pr-1"},[t._v("Hello,")]),n("router-link",{staticClass:"font-semibold text-yellow-500 hover:text-purple-700 transition-all",attrs:{to:"/user"}},[t._v(t._s(t.getUserLogin.name))])],1)]),n("div",{staticClass:"col-auto px-2"},[t._v("|")]),n("div",{staticClass:"col-auto"},[n("button",{staticClass:"px-2 py-2 rounded underline text-yellow-500 hover:opacity-70 transition-opacity",on:{click:function(e){return e.preventDefault(),t.logout.apply(null,arguments)}}},[n("small",[t._v("Logout")])])])])]):n("p",[n("router-link",{attrs:{to:"/login"}},[t._v("Đăng nhập")])],1)])])])]),n("div",{staticClass:"header-bottom bg-white bg-opacity-10 py-3"},[n("div",{staticClass:"container mx-auto"},[t._t("default")],2)])])},j=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-auto"},[r("h1",{staticClass:"uppercase font-bold flex items-center"},[r("span",[r("img",{attrs:{src:n("cf05"),alt:"Vuejs",width:"35"}})]),r("span",{staticClass:"pl-2"},[t._v("Vuejs jsonplaceholder")])])])}],C={Name:"Header",computed:Object(i["a"])({},Object(u["c"])(["getUserLogin"])),methods:Object(i["a"])(Object(i["a"])({},Object(u["d"])(["setUserLogin"])),{},{logout:function(){var t=this;localStorage.getItem("name")&&localStorage.getItem("id")&&(localStorage.removeItem("name"),localStorage.removeItem("id"),t.setUserLogin({name:"",id:""}),t.$router.push({name:"Home"}))}})},w=C,_=Object(p["a"])(w,x,j,!1,null,null,null),k=_.exports,P={name:"App",components:{NavMenu:h,Footer:y,Header:k}},O=P,L=Object(p["a"])(O,o,a,!1,null,null,null),E=L.exports,S=(n("3ca3"),n("ddb0"),n("8c4f")),T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container mx-auto"},[n("div",{staticClass:"clearfix"},[n("BaseHeading",{attrs:{level:2}},[t._v("Danh sách bài viết")]),n("PostListView",{attrs:{posts:t.getPosts}})],1)])},I=[],$=n("1da1"),U=(n("96cf"),n("cfed")),R={name:"Home",components:{PostListView:U["a"]},created:function(){var t=this;return Object($["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.getPosts){e.next=3;break}return e.next=3,t.$store.dispatch("fetchPostsAll");case 3:case"end":return e.stop()}}),e)})))()},computed:Object(i["a"])({},Object(u["c"])(["getPosts"]))},A=R,B=Object(p["a"])(A,T,I,!1,null,null,null),H=B.exports;r["a"].use(S["a"]);var N=[{path:"/",name:"Home",component:H},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/login",name:"Login",component:function(){return n.e("chunk-05903106").then(n.bind(null,"a55b"))}},{path:"/user",name:"User",component:function(){return n.e("chunk-edce7336").then(n.bind(null,"1511"))}},{path:"/user/post/:id",name:"UserPost",component:function(){return n.e("chunk-4eef20e6").then(n.bind(null,"e1c2"))}},{path:"/post/:id",name:"Post",component:function(){return n.e("chunk-6a7159fd").then(n.bind(null,"37d3"))}},{path:"/author/:id",name:"Auhtor",component:function(){return n.e("chunk-e8d74de0").then(n.bind(null,"9411"))}},{path:"*",name:"404",component:function(){return n.e("chunk-2d0e95df").then(n.bind(null,"8cdb"))}}],F=new S["a"]({mode:"history",base:"/vue-jsonplaceholder/",routes:N}),M=F,V={api:"https://jsonplaceholder.typicode.com",posts:null,post:{},userLogin:{name:"",id:""}},D={getPosts:function(t){return t.posts},getPost:function(t){return t.post},getUserLogin:function(t){return t.userLogin}},J=(n("b0c0"),{setPosts:function(t,e){t.posts=e},setPost:function(t,e){t.post=e},setUserLogin:function(t,e){t.userLogin.name=e.name,t.userLogin.id=e.id}}),K=(n("d81d"),n("99af"),n("e9c4"),{fetchPostsByQuery:function(t,e){return new Promise((function(t,n){fetch(e).then((function(t){return 200===t.status?t.json():void n({error:"Không tìm thấy bài viết"})})).then((function(e){e.map((function(t){t.user={email:""}})),t(e)})).catch((function(){return n({error:"Lỗi kết nối"})}))}))},fetchPostsAll:function(t){return Object($["a"])(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,r=null,e.next=4,fetch("https://jsonplaceholder.typicode.com/posts").then((function(t){return t.json()})).then(function(){var t=Object($["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e,t.next=3,Promise.all(r.map(function(){var t=Object($["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://jsonplaceholder.typicode.com/users/".concat(e.userId)).then((function(t){return t.json()})).then((function(t){e.user={id:t.id,name:t.name}})).catch((function(t){console.log(t)}));case 2:return t.abrupt("return",e);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()));case 3:r=t.sent,n("setPosts",r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){return console.log(t)}));case 4:case"end":return e.stop()}}),e)})))()},fetchPostById:function(t,e){return new Promise((function(t,n){fetch("https://jsonplaceholder.typicode.com/posts/".concat(e)).then((function(t){return 200===t.status?t.json():void n({error:"Không tìm thấy bài viết"})})).then(function(){var e=Object($["a"])(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/users/".concat(n.userId)).then((function(t){return t.json()})).then((function(t){n.user={id:t.id,name:t.name}})).catch((function(t){console.log(t)}));case 2:t(n);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(){return n({error:"Lỗi kết nối"})}))}))},fetchPostByUserId:function(t){var e=t.state,n=t.dispatch,r="".concat(e.api,"/posts?userId=").concat(e.userLogin.id);return n("fetchPostsByQuery",r)},fetchPostByUser:function(t,e){return Object($["a"])(regeneratorRuntime.mark((function n(){var r,o,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=t.state,o=t.dispatch,a="".concat(r.api,"/posts?userId=").concat(e),n.abrupt("return",o("fetchPostsByQuery",a));case 3:case"end":return n.stop()}}),n)})))()},fetchUser:function(t,e){return Object($["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://jsonplaceholder.typicode.com/users/".concat(e)).then((function(t){return t.json()})).then((function(t){n=t})).catch((function(t){return console.log(t)}));case 2:return t.abrupt("return",n);case 3:case"end":return t.stop()}}),t)})))()},fetchComments:function(t,e){return Object($["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://jsonplaceholder.typicode.com/posts/".concat(e,"/comments")).then((function(t){return t.json()})).then((function(t){n=t})).catch((function(t){return console.log(t)}));case 2:return t.abrupt("return",n);case 3:case"end":return t.stop()}}),t)})))()},fetchUserByEmail:function(t,e){return new Promise((function(t,n){fetch("https://jsonplaceholder.typicode.com/users?email=".concat(e)).then((function(t){if(200===t.status)return t.json();n({err:"Tài khoản không tồn tại"})})).then((function(e){var n={name:e[0].name,id:e[0].id};t(n)})).catch((function(t){n({err:t})}))}))},creatingPost:function(t,e){var n=t.state,r="".concat(n.api,"/posts");return new Promise((function(t,n){fetch(r,{method:"POST",body:JSON.stringify(e),headers:{"Content-type":"application/json; charset=UTF-8"}}).then((function(t){return t.json()})).then((function(e){return t(e)})).catch((function(t){return n(t)}))}))},deletingPost:function(t,e){var n=t.state,r="".concat(n.api,"/posts/").concat(e);return new Promise((function(t,e){fetch(r,{method:"DELETE"}).then((function(n){200===n.status?t(n):e("Đã xảy ra lỗi")})).catch((function(t){return e(t)}))}))},updatingPost:function(t,e,n){var r=t.state,o="".concat(r.api,"/posts/").concat(e);return new Promise((function(t,e){fetch(o,{method:"PATCH",body:JSON.stringify(n),headers:{"Content-type":"application/json; charset=UTF-8"}}).then((function(t){return t.json()})).then((function(e){return t(e)})).catch((function(t){return e(t)}))}))}});r["a"].use(u["a"]);var Q,q,z=new u["a"].Store({state:V,getters:D,mutations:J,actions:K,modules:{}}),G=(n("3a62"),n("a9e3"),{render:function(t){return t("h"+this.level,{class:"text-2xl font-extrabold uppercase pb-2 mb-5 border-b"},this.$slots.default)},props:{level:{type:Number,default:1}}}),W=G,X=Object(p["a"])(W,Q,q,!1,null,null,null),Y=X.exports,Z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("input",{domProps:{value:t.value},on:{input:function(e){return t.$emit("input",e.target.value)}}})},tt=[],et={props:{value:{type:[String,Number],default:""}}},nt=et,rt=(n("0fe7"),Object(p["a"])(nt,Z,tt,!1,null,"1445ca4b",null)),ot=rt.exports,at=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("textarea",{domProps:{value:t.value},on:{input:function(e){return t.$emit("input",e.target.value)}}})},st=[],ct={props:{value:{type:String,default:""}}},it=ct,ut=(n("b3ce"),Object(p["a"])(it,at,st,!1,null,"2adf6936",null)),lt=ut.exports,ft=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"fade",mode:"out-in"}},[t._t("default")],2)},pt=[],dt={name:"TransitionFade"},ht=dt,mt=(n("d816"),Object(p["a"])(ht,ft,pt,!1,null,"6bfbbbcc",null)),vt=mt.exports;r["a"].component("BaseHeading",Y),r["a"].component("BaseInput",ot),r["a"].component("BaseTextarea",lt),r["a"].component("TransitionFade",vt),r["a"].config.productionTip=!1,r["a"].filter("capitalize",(function(t){return t?(t=t.toString(),t.charAt(0).toUpperCase()+t.slice(1)):""})),new r["a"]({router:M,store:z,render:function(t){return t(E)},mounted:function(){var t=this;if(localStorage.getItem("name")&&localStorage.getItem("id")){var e=localStorage.getItem("name"),n=localStorage.getItem("id");t.$store.commit("setUserLogin",{name:e,id:n})}}}).$mount("#app")},"660f":function(t,e,n){},b3ce:function(t,e,n){"use strict";n("bc2f")},bc2f:function(t,e,n){},cf05:function(t,e,n){t.exports=n.p+"img/logo.82b9c7a5.png"},cfed:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"post-grid"},[n("ul",{staticClass:"grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"},t._l(t.posts,(function(t){return n("li",{key:t.id},[n("PostItem",{attrs:{post:t}})],1)})),0)])},o=[],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"post-item h-full",attrs:{"data-id":t.post.id}},[n("router-link",{staticClass:"block p-4 h-full bg-blue-50 bg-opacity-10 rounded-md hover:bg-blue-100 hover:bg-opacity-20 transition-all",attrs:{to:"/post/"+t.post.id}},[n("div",{staticClass:"flex flex-col h-full"},[n("h2",{staticClass:"text-xl mb-2 text-yellow-600"},[n("span",{staticClass:"ellipsis"},[t._v(t._s(t._f("capitalize")(t.post.title)))])]),n("div",{staticClass:"content flex-grow"},[n("div",{staticClass:"ellipsis",domProps:{innerHTML:t._s(t.post.body)}})]),""!=t.post.user.email?n("div",{staticClass:"footer pt-2 border-t-2 border-white mt-3"},[n("p",{staticClass:"mb-0"},[n("small",{staticClass:"pr-1"},[t._v("Author:")]),n("small",{staticClass:"opacity-90"},[t._v(t._s(t.post.user.name))])])]):t._e()])])],1)},s=[],c={props:{post:{type:Object,default:function(){return{userId:0,id:0,title:"",body:"",user:{email:""}}}}}},i=c,u=(n("1a9a"),n("2877")),l=Object(u["a"])(i,a,s,!1,null,"4ecd7188",null),f=l.exports,p={props:{posts:{type:[Array,Object]}},components:{PostItem:f}},d=p,h=Object(u["a"])(d,r,o,!1,null,null,null);e["a"]=h.exports},d816:function(t,e,n){"use strict";n("660f")}});
//# sourceMappingURL=index.97c8c7cc.js.map