(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-05903106"],{2806:function(e,t,a){"use strict";a("50b1")},"50b1":function(e,t,a){},a55b:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"page-register"},[a("div",{staticClass:"min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"},[a("div",{staticClass:"max-w-md w-full space-y-8"},[e._m(0),a("form",{staticClass:"mt-8 space-y-6"},[a("input",{attrs:{type:"hidden",name:"remember",value:"true"}}),a("div",{staticClass:"rounded-md shadow-sm -space-y-px"},[a("div",[a("label",{staticClass:"sr-only",attrs:{for:"email"}},[e._v("Email address")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"input rounded-t-md",attrs:{id:"email",name:"email",type:"email",autocomplete:"email",placeholder:"Email address"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),e._m(1)]),a("div",[a("button",{staticClass:"signin",attrs:{type:"button"},on:{click:function(t){return t.preventDefault(),e.login.apply(null,arguments)}}},[e._v("Sign in")])]),e.user.err?a("div",{staticClass:"mt-4 bg-red-500 bg-opacity-10 text-red-500 p-2 rounded text-center"},[e._v(e._s(e.user.err))]):e._e()]),a("hr"),e._m(2)])])])},r=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h2",{staticClass:"mt-6 text-center text-3xl font-extrabold text-white"},[e._v("Đăng nhập với tài khoản")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("label",{staticClass:"sr-only",attrs:{for:"password"}},[e._v("Password")]),a("input",{staticClass:"input rounded-b-md bg-gray-300",attrs:{id:"password",name:"password",type:"password",autocomplete:"current-password",placeholder:"Password",disabled:""}})])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"clearfix text-gray-500 px-5"},[a("p",[e._v("Account demo")]),a("ul",{staticClass:"list-disc pl-5"},[a("li",[e._v("Shanna@melissa.tv")]),a("li",[e._v("Nathan@yesenia.net")]),a("li",[e._v("Julianne.OConner@kory.org")])])])}],n=a("1da1"),i=a("5530"),l=(a("96cf"),a("b0c0"),a("2f62")),c={name:"Login",data:function(){return{email:"Sincere@april.biz",user:{}}},methods:Object(i["a"])(Object(i["a"])({},Object(l["d"])(["setUserLogin"])),{},{login:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e,t.next=3,a.$store.dispatch("fetchUserByEmail",a.email).then((function(e){a.user=e})).catch((function(){a.user={err:"Tài khoản không tồn tại"}}));case 3:a.user.err||(e.setUserLogin(a.user),localStorage.setItem("name",a.user.name),localStorage.setItem("id",a.user.id),a.$router.push({name:"Home"}));case 4:case"end":return t.stop()}}),t)})))()}})},o=c,u=(a("2806"),a("2877")),d=Object(u["a"])(o,s,r,!1,null,"744a0cb5",null);t["default"]=d.exports}}]);
//# sourceMappingURL=chunk-05903106.5d5a65b5.js.map