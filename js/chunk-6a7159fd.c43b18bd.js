(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6a7159fd"],{"0725":function(t,e,s){},"0a03":function(t,e,s){},"37d3":function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.post!={}?s("div",{staticClass:"page-post-detail"},[s("TransitionFade",[t.post.error?s("div",{staticClass:"container mx-auto"},[s("AlertError",[s("p",{staticClass:"text-center text-xl"},[t._v(t._s(t.post.error))])])],1):s("div",{staticClass:"container mx-auto"},[s("PostDetail",{attrs:{title:t.post.title,body:t.post.body,user:t.user}}),s("CommentContainer",{attrs:{comments:t.comments}})],1)])],1):t._e()},a=[],r=s("1da1"),i=(s("96cf"),s("d3b7"),s("3ca3"),s("ddb0"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"post-detail mb-5"},[s("h2",{staticClass:"text-3xl text-yellow-600 mb-5 font-extrabold"},[t._v(t._s(t._f("capitalize")(t.title)))]),s("div",{staticClass:"info"},[t.user?s("p",[s("span",{staticClass:"pr-2 opacity-75"},[t._v("Tác giả:")]),s("router-link",{staticClass:"text-gray-300 hover:text-green-500 transition-all",attrs:{tag:"a",to:"/author/"+t.user.id}},[t._v(t._s(t.user.name))])],1):t._e()]),s("hr",{staticClass:"line"}),s("div",{staticClass:"post-content",domProps:{innerHTML:t._s(t.body)}}),s("hr",{staticClass:"line"})])}),o=[],c={props:{title:{type:String,default:""},body:{type:String,default:""},user:{type:Object,default:function(){return{id:0,name:"",email:""}}}}},l=c,u=(s("c863"),s("2877")),m=Object(u["a"])(l,i,o,!1,null,"735bd3ec",null),d=m.exports,p=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.comments?s("div",{staticClass:"clearfix"},[s("p",{staticClass:"text-xl mb-2"},[t._v("Comments")]),t._l(t.comments,(function(t){return s("div",{key:t.id},[s("CommentItem",{attrs:{comment:t}})],1)}))],2):t._e()},f=[],C=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"comment"},[s("div",{staticClass:"flex"},[t._m(0),s("div",{staticClass:"flex-grow"},[s("p",{staticClass:"font-semibold text-purple-600 mb-1"},[t._v(t._s(t.comment.email))]),s("div",{staticClass:"clearfix",domProps:{innerHTML:t._s(t.comment.body)}})])])])},v=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col pr-4"},[s("span",{staticClass:"avatar"})])}],_={Name:"CommentItem",parent:"CommentContainer",props:{comment:{type:Object,default:function(){return{postId:null,id:null,name:"",email:"",body:""}}}}},b=_,x=(s("bc20"),Object(u["a"])(b,C,v,!1,null,"b4442624",null)),h=x.exports,y={Name:"CommentContainer",props:{comments:{type:Array,default:null}},components:{CommentItem:h}},g=y,w=Object(u["a"])(g,p,f,!1,null,null,null),$=w.exports,k=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"alert alert-error"},[s("div",{staticClass:"clearfix"},[t._t("default")],2),s("div",{staticClass:"text-center"},[s("router-link",{staticClass:"link",attrs:{to:"/"}},[t._v("Về trang chủ")])],1)])},j=[],E=(s("e242"),{}),O=Object(u["a"])(E,k,j,!1,null,"7d6d3799",null),I=O.exports,P={data:function(){return{post:{},user:null,comments:null}},components:{PostDetail:d,CommentContainer:$,AlertError:I},created:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return s=t,e.next=3,t.$store.dispatch("fetchPostById",t.$route.params.id).then((function(t){s.post=t})).catch((function(t){s.post=t}));case 3:if(s.post.error){e.next=6;break}return e.next=6,Promise.all([t.$store.dispatch("fetchUser",s.post.userId),t.$store.dispatch("fetchComments",s.post.id)]).then((function(t){s.user=t[0],s.comments=t[1]}));case 6:case"end":return e.stop()}}),e)})))()}},T=P,A=Object(u["a"])(T,n,a,!1,null,"1e536f60",null);e["default"]=A.exports},bc20:function(t,e,s){"use strict";s("0a03")},c863:function(t,e,s){"use strict";s("cb2f")},cb2f:function(t,e,s){},e242:function(t,e,s){"use strict";s("0725")}}]);
//# sourceMappingURL=chunk-6a7159fd.c43b18bd.js.map