(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-edce7336"],{1511:function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"page-user"},[e("div",{staticClass:"container mx-auto"},[e("div",{staticClass:"clearfix mb-5"},[e("small",{staticClass:"text-gray-400"},[t._v("Xin chào,")]),e("h2",{staticClass:"mb-6 text-3xl font-extrabold"},[t._v(t._s(t.userLogin.name))])]),e("div",{staticClass:"clearfix"},[e("h3",{staticClass:"text-2xl font-bold pb-2 mb-5 border-b"},[t._v("Danh sách bài viết của bạn")]),t.posts.error?e("div",{staticClass:"clearfix"},[e("div",{staticClass:"text-center text-red-700 bg-red-100 p-4 rounded"},[e("p",{staticClass:"font-semibold text-md"},[t._v(t._s(t.posts.error))])])]):e("div",{staticClass:"clearfix"},[e("table",{staticClass:"table-post min-w-full divide-y divide-gray-200"},[t._m(0),e("tbody",t._l(t.posts,(function(s){return e("tr",{key:s.id},[e("td",{staticClass:"text-center"},[t._v(t._s(s.id))]),e("td",[e("router-link",{staticClass:"hover:opacity-75 transition-opacity",attrs:{to:"/user/post/"+s.id,tag:"a"}},[t._v(t._s(s.title))])],1),e("td",[e("div",{staticClass:"flex justify-end items-center"},[e("div",{staticClass:"col-auto"},[e("router-link",{staticClass:"p-1 text-green-400 hover:opacity-75",attrs:{to:"/post/"+s.id}},[e("small",[t._v("Xem")])])],1),t._m(1,!0),e("div",{staticClass:"col-auto"},[e("router-link",{staticClass:"p-1 text-yellow-400 hover:opacity-75",attrs:{to:"/user/post/"+s.id}},[e("small",[t._v("Sửa")])])],1),t._m(2,!0),e("div",{staticClass:"col-auto"},[e("button",{staticClass:"p-1 text-red-400 hover:opacity-75",on:{click:function(e){return t.deletePost(s.id)}}},[e("small",[t._v("Xóa")])])])])])])})),0)])])])])])},i=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("thead",{staticClass:"bg-gray-50 bg-opacity-10 text-white"},[e("tr",{staticClass:"text-white border-0"},[e("th",{staticClass:"text-white w-10 text-center",attrs:{scope:"col"}},[t._v("#")]),e("th",{staticClass:"text-white",attrs:{scope:"col"}},[t._v("Tiêu đề")]),e("th",{staticClass:"text-white",attrs:{scope:"col"}})])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"col-py-2 opacity-20"},[e("small",[t._v("|")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"col-py-2 opacity-20"},[e("small",[t._v("|")])])}],c=e("5530"),o=e("1da1"),n=(e("96cf"),e("2f62")),r=e("cfed"),l={data:function(){return{posts:{}}},components:{PostListView:r["a"]},created:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function s(){var e;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return e=t,s.next=3,e.fetchPostByUserId().then((function(t){e.posts=t})).catch((function(t){e.posts=t}));case 3:case"end":return s.stop()}}),s)})))()},computed:Object(c["a"])({},Object(n["e"])(["userLogin"])),methods:Object(c["a"])(Object(c["a"])({},Object(n["b"])(["fetchPostByUserId"])),{},{deletePost:function(t){confirm("Bạn có chắc là muốn xóa bài viêt #".concat(t))&&this.$store.dispatch("deletingPost",t).then((function(){alert("Bạn đã xóa thành công bài viết #".concat(t))})).catch((function(t){console.log(t)}))}})},d=l,u=(e("2fb1"),e("2877")),f=Object(u["a"])(d,a,i,!1,null,"1e326eb2",null);s["default"]=f.exports},"2fb1":function(t,s,e){"use strict";e("5f4f")},"5f4f":function(t,s,e){}}]);
//# sourceMappingURL=chunk-edce7336.49bc6299.js.map