(this.webpackJsonprecipal=this.webpackJsonprecipal||[]).push([[0],{45:function(e,t,c){},58:function(e,t,c){"use strict";c.r(t);var n=c(2),s=c(28),r=c.n(s),a=(c(41),c(42),c(45),c(4)),l=c(20),i=c(5),o=c(7),j=c(11),b=c(60),m=window.location.hostname,u=b.a.create({baseURL:"http://".concat(m,":").concat(4e3,"/api"),headers:{"Content-Type":"application/json"}}),d=function(e,t,c,n,s,r){return u.post("/register",{username:e,firstname:t,lastname:c,email:n,mobilenumber:s,password:r})},h=function(e,t){return u.post("/login",{username:e,password:t})},O=function(e,t,c){u.get("/recipes/".concat(e,"/").concat(t)).then((function(e){c(e.data)})).catch((function(e){console.log(e)}))},x=function(e,t){return u.post("/users/".concat(e,"/favorites"),{recipeId:t})},p=function(e,t){return u.delete("/users/".concat(e,"/favorites/").concat(t))},f=function(){var e=Object(j.a)(Object(o.a)().mark((function e(t,c){var n,s;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=".concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:s=e.sent,c(s.meals[0]);case 7:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}(),v=function(){var e=Object(j.a)(Object(o.a)().mark((function e(){var t,c;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.themealdb.com/api/json/v1/1/random.php");case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,window.location.replace("/recipe/".concat(c.meals[0].idMeal));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=function(){var e=Object(j.a)(Object(o.a)().mark((function e(t){var c,n;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list");case 2:return c=e.sent,e.next=5,c.json();case 5:n=e.sent,t(n.meals);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=Object(j.a)(Object(o.a)().mark((function e(t){var c,n;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.themealdb.com/api/json/v1/1/list.php?c=list");case 2:return c=e.sent,e.next=5,c.json();case 5:n=e.sent,t(n.meals);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=c(0),y=function(e){var t=e.isLoggedIn,c=e.handleLogout,n=e.user;return Object(w.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-dark sticky-top primarybbcolor",style:{textAlign:"center"},children:[Object(w.jsx)("a",{className:"navbar-brand",href:"/",children:"Flavor Finds"}),Object(w.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#collapsibleNavbar",children:Object(w.jsx)("span",{className:"navbar-toggler-icon"})}),Object(w.jsx)("div",{className:"collapse navbar-collapse",id:"collapsibleNavbar",children:Object(w.jsxs)("div",{className:"navbar-nav",children:[t?Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)("a",{className:"nav-item nav-link",href:"/favorites",children:"Favorites"}),Object(w.jsxs)("a",{className:"nav-item nav-link",href:"/profile",children:[n.firstname," (",n.username,")"]})]}):null,t?Object(w.jsx)("button",{className:"nav-item btn btn-danger",onClick:c,children:"Log Out"}):Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)("a",{className:"nav-item nav-link",href:"/login",children:"Login"}),Object(w.jsx)("a",{className:"nav-item nav-link",href:"/register",children:"Register"})]})]})})]})},k=function(){return Object(w.jsx)("div",{className:"footer-copyright text-center py-3 fixed-bottom primarybbcolor",children:Object(w.jsx)("div",{className:"primarycolor2",children:"Demo"})})},I=c(17),F=c(29),S=["children","isLoggedIn"],L=function(e){var t=e.children,c=e.isLoggedIn,n=Object(F.a)(e,S);return Object(w.jsx)(i.b,Object(I.a)(Object(I.a)({},n),{},{render:function(e){var n=e.location;return c?t:Object(w.jsx)(i.a,{to:{pathname:"/login",state:{from:n}}})}}))};var M=function(e){var t=Object(n.useState)(""),c=Object(a.a)(t,2),s=c[0],r=c[1];return Object(w.jsxs)("form",{onSubmit:function(t){t.preventDefault(),function(e,t){fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=".concat(e)).then((function(e){return e.json()})).then((function(e){t(e.meals)})).catch((function(e){return console.error(e)}))}(s,e.setSearchResults)},className:"input-group mb-3",children:[Object(w.jsx)("input",{type:"text",value:s,onChange:function(e){r(e.target.value)},placeholder:"Search for recipes",className:"form-control",style:{borderRadius:"8px 0 0 8px"}}),Object(w.jsx)("div",{className:"input-group-append",children:Object(w.jsx)("button",{type:"submit",className:"btn btn-outline-light",children:"Search"})})]})},C=function(e){var t=e.user,c=Object(n.useState)([]),s=Object(a.a)(c,2),r=s[0],l=s[1];return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)("div",{className:"row mb-5",children:Object(w.jsxs)("div",{className:"col-sm-12 primarycolor",children:[Object(w.jsx)("h1",{className:"pb-2 mt-4 mb-2 border-bottom",children:"Home"}),Object(w.jsxs)("p",{className:"lead",children:["Welcome, ",t.firstname,". (",t.username,")"]})]})}),Object(w.jsx)(M,{setSearchResults:l}),Object(w.jsx)("div",{className:"row my-5 primarycolor",children:r&&r.map((function(e){return Object(w.jsx)("div",{className:"col-sm-3",children:Object(w.jsxs)("a",{href:"/recipe/".concat(e.idMeal),children:[Object(w.jsx)("h5",{className:"primarycolor",style:{textAlign:"center"},children:e.strMeal}),Object(w.jsxs)("div",{className:"fakeimg",children:[Object(w.jsx)("img",{src:e.strMealThumb,alt:e.strMeal,className:"shadow"}),Object(w.jsx)("div",{className:"overlay",children:Object(w.jsx)("div",{className:"text"})})]},e.idMeal)]})})}))}),Object(w.jsx)("div",{className:"row mb-5",children:Object(w.jsxs)("div",{className:"col-sm-12",children:[Object(w.jsx)("button",{type:"button",className:"btn btn-outline-light btn-block",onClick:function(){window.location.replace("/search")},children:"Advanced Search"}),Object(w.jsx)("button",{type:"button",className:"btn btn-outline-light btn-block",onClick:v,children:"Random Recipe"})]})})]})},q=function(e){var t=e.setIsLoggedIn,c=function(){var e=Object(j.a)(Object(o.a)().mark((function e(c){var n,s,r;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c.preventDefault(),n=c.target.elements,s=n.username,r=n.password,h(s.value,r.value).then((function(e){t(!0),localStorage.setItem("token",e.data.token),localStorage.setItem("userId",e.data.id),window.location.replace("/")})).catch((function(e){alert(e)}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)("div",{className:"row mb-5",children:Object(w.jsx)("div",{className:"col-sm-12 primarycolor",children:Object(w.jsx)("h1",{children:"Login"})})}),Object(w.jsx)("div",{className:"row mb-5",children:Object(w.jsx)("div",{className:"col-sm-12 primarycolor",children:Object(w.jsxs)("form",{onSubmit:c,children:[Object(w.jsxs)("div",{className:"form-group",children:[Object(w.jsx)("label",{htmlFor:"username",children:"Username:"}),Object(w.jsx)("input",{type:"text",id:"username",name:"username",className:"form-control",required:!0})]}),Object(w.jsxs)("div",{className:"form-group",children:[Object(w.jsx)("label",{htmlFor:"password",children:"Password:"}),Object(w.jsx)("input",{type:"password",id:"password",name:"password",className:"form-control",required:!0})]}),Object(w.jsxs)("div",{className:"text-right",children:[Object(w.jsx)("button",{type:"submit",className:"btn btn-outline-light",children:"Login"}),Object(w.jsx)("br",{}),Object(w.jsx)("br",{}),Object(w.jsx)("a",{href:"/register",className:"primarycolor",style:{textDecoration:"underline"},children:"Don't have an account? Register"})]})]})})})]})},E=function(){var e=function(){var e=Object(j.a)(Object(o.a)().mark((function e(t){var c,n,s,r,a,l,i;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),c=t.target.elements,n=c.username,s=c.firstname,r=c.lastname,a=c.email,l=c.mobilenumber,i=c.password,d(n.value,s.value,r.value,a.value,l.value,i.value).then((function(e){alert("User ".concat(n.value," has been registered successfully. You may now log in.")),window.location.replace("/")})).catch((function(e){alert(e)}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)("div",{className:"row mb-5",children:Object(w.jsx)("div",{className:"col-sm-12 primarycolor",children:Object(w.jsx)("h1",{children:"Register"})})}),Object(w.jsx)("div",{className:"row mb-5",children:Object(w.jsx)("div",{className:"col-sm-12 primarycolor",children:Object(w.jsxs)("form",{onSubmit:e,children:[Object(w.jsxs)("div",{className:"form-group",children:[Object(w.jsx)("label",{htmlFor:"username",children:"Username:"}),Object(w.jsx)("input",{type:"text",id:"username",name:"username",className:"form-control",required:!0})]}),Object(w.jsxs)("div",{className:"form-group",children:[Object(w.jsx)("label",{htmlFor:"firstname",children:"First Name:"}),Object(w.jsx)("input",{type:"text",id:"firstname",name:"firstname",className:"form-control",required:!0})]}),Object(w.jsxs)("div",{className:"form-group",children:[Object(w.jsx)("label",{htmlFor:"lastname",children:"Last Name:"}),Object(w.jsx)("input",{type:"text",id:"lastname",name:"lastname",className:"form-control",required:!0})]}),Object(w.jsxs)("div",{className:"form-group",children:[Object(w.jsx)("label",{htmlFor:"email",children:"Email:"}),Object(w.jsx)("input",{type:"email",id:"email",name:"email",className:"form-control",required:!0})]}),Object(w.jsxs)("div",{className:"form-group",children:[Object(w.jsx)("label",{htmlFor:"phone_number",children:"Mobile Number:"}),Object(w.jsx)("input",{type:"tel",id:"phone_number",name:"mobilenumber",className:"form-control",required:!0})]}),Object(w.jsxs)("div",{className:"form-group",children:[Object(w.jsx)("label",{htmlFor:"password",children:"Password:"}),Object(w.jsx)("input",{type:"password",id:"password",name:"password",className:"form-control",required:!0})]}),Object(w.jsxs)("div",{className:"text-right",children:[Object(w.jsx)("button",{type:"submit",className:"btn btn-outline-light",children:"Register"}),Object(w.jsx)("br",{}),Object(w.jsx)("br",{}),Object(w.jsx)("a",{href:"/login",className:"primarycolor",style:{textDecoration:"underline"},children:"Already have an account? Login"})]})]})})})]})},R=function(e){var t=e.handleLogout,c=e.user;return Object(w.jsx)(w.Fragment,{children:Object(w.jsx)("div",{className:"row mb-5",children:Object(w.jsxs)("div",{className:"col-sm-12 primarycolor",children:[Object(w.jsx)("h1",{className:"pb-2 mt-4 mb-2 border-bottom",children:"User Profile"}),Object(w.jsxs)("p",{className:"h5",children:["Username: ",c.username]}),Object(w.jsxs)("ul",{children:[Object(w.jsxs)("li",{children:["Full Name: ",c.lastname,", ",c.firstname]}),Object(w.jsxs)("li",{children:["E-mail: ",c.email]}),Object(w.jsxs)("li",{children:["Mobile Number: ",c.mobilenumber]})]}),Object(w.jsx)("br",{}),Object(w.jsx)("br",{}),Object(w.jsx)("button",{type:"button",className:"btn btn-outline-light btn-block",onClick:function(){window.location.replace("/edit")},children:"Edit Profile"}),Object(w.jsx)("button",{type:"button",className:"btn btn-danger btn-block",onClick:t,children:"Log Out"})]})})})};var D=function(e){var t=e.userId,c=Object(n.useState)(null),s=Object(a.a)(c,2),r=s[0],l=s[1],b=Object(n.useState)(null),m=Object(a.a)(b,2),d=m[0],h=m[1],v=Object(n.useState)(!1),g=Object(a.a)(v,2),N=g[0],y=g[1],k=Object(i.g)().id,I="TheMealDB";if(Object(n.useEffect)((function(){f(k,l),d?function(e,t,c){u.get("/users/".concat(e,"/favorites/").concat(t)).then((function(e){c(!!e.data)})).catch((function(e){console.log(e)}))}(t,d.id,y):O(I,k,h)}),[t,k,d]),!r)return Object(w.jsx)("div",{className:"row mb-5",children:Object(w.jsx)("div",{className:"col-sm-12 primarycolor",children:"Loading..."})});for(var F=[],S=1;S<=20&&r["strIngredient".concat(S)];S++)F.push("".concat(r["strIngredient".concat(S)]," - ").concat(r["strMeasure".concat(S)]));var L=function(){var e=Object(j.a)(Object(o.a)().mark((function e(){return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c=r.strMeal,n=F.join("\n"),s=r.strInstructions,a=I,l=k,i=r.strMealThumb,u.post("/recipes",{name:c,ingredients:n,instruction:s,type:a,typeId:l,thumb:i});case 2:return e.next=4,O(I,k,h);case 4:if(e.prev=4,N){e.next=11;break}return e.next=8,x(t,d.id);case 8:y(!0),e.next=14;break;case 11:return e.next=13,p(t,d.id);case 13:y(!1);case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(4),console.log(e.t0);case 19:case"end":return e.stop()}var c,n,s,a,l,i}),e,null,[[4,16]])})));return function(){return e.apply(this,arguments)}}();return Object(w.jsx)(w.Fragment,{children:Object(w.jsxs)("div",{className:"row mb-5",children:[Object(w.jsx)("div",{className:"col-sm-3",children:Object(w.jsxs)("div",{className:"fakeimga img-hover",children:[Object(w.jsx)("a",{href:r.strMealThumb,"data-toggle":"lightbox","data-gallery":"gallery",children:Object(w.jsx)("img",{src:r.strMealThumb,alt:r.strMeal,className:"shadow-lg img-thumbnail"})}),Object(w.jsx)("button",{type:"button",className:N?"btn btn-outline-dark btn-block":"btn btn-outline-light btn-block",onClick:L,children:N?"Unfavorite":"Favorite"})]})}),Object(w.jsxs)("div",{className:"col-sm-9 primarycolor",children:[Object(w.jsx)("h1",{children:r.strMeal}),Object(w.jsx)("hr",{}),Object(w.jsx)("h4",{children:"Ingredients:"}),Object(w.jsx)("ul",{children:F.map((function(e){return Object(w.jsx)("li",{children:e},e)}))}),Object(w.jsx)("hr",{}),Object(w.jsx)("h4",{children:"Instructions:"}),Object(w.jsx)("div",{style:{whiteSpace:"pre-line"},children:r.strInstructions}),r.strYoutube&&Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)("br",{}),Object(w.jsx)("button",{type:"button",className:"btn btn-outline-light btn-block",onClick:function(){window.location.replace(r.strYoutube)},children:"YouTube Tutorial"}),Object(w.jsx)("hr",{})]}),Object(w.jsx)("br",{}),Object(w.jsx)("button",{className:"btn btn-outline-light",onClick:function(){window.location.replace("/")},children:"Back to Home"})]})]})})},T=c(32),A=c(31),U=function(e){e.user;var t=e.userId,c=Object(n.useState)([]),s=Object(a.a)(c,2),r=s[0],l=s[1];return Object(n.useEffect)((function(){(function(e){return u.get("/users/".concat(e,"/favorites"))})(t).then((function(e){var t,c,n=e.data,s=Object(A.a)(n);try{for(s.s();!(t=s.n()).done;){var r=t.value;(c=r.recipe_id,u.get("/recipes/".concat(c))).then((function(e){l((function(t){return[].concat(Object(T.a)(t),[e.data])}))})).catch((function(e){console.log(e)}))}}catch(a){s.e(a)}finally{s.f()}})).catch((function(e){console.log(e)}))}),[t]),Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)("div",{className:"row mb-5",children:Object(w.jsxs)("div",{className:"col-sm-12 primarycolor",children:[Object(w.jsx)("h1",{className:"pb-2 mt-4 mb-2 border-bottom",children:"Favorites"}),Object(w.jsx)("p",{className:"lead",children:"Your list of favorite recipes:"})]})}),Object(w.jsx)("div",{className:"row my-5 primarycolor",children:r[0]?r.map((function(e){return Object(w.jsx)("div",{className:"col-sm-3",children:Object(w.jsxs)("a",{href:"/recipe/".concat(e.type_id),children:[Object(w.jsx)("h4",{className:"primarycolor",style:{"text-align":"center"},children:e.name}),Object(w.jsxs)("div",{className:"fakeimg",children:[Object(w.jsx)("img",{src:e.thumb,alt:e.name,className:"shadow"}),Object(w.jsx)("div",{className:"overlay",children:Object(w.jsx)("div",{className:"text"})})]},e.type_id)]})})})):Object(w.jsx)("div",{className:"col-sm-12 primarycolor",children:Object(w.jsx)("p",{children:"No favorite recipes found."})})})]})},B=c(23),P=function(e){var t=e.user,c=e.userId,s=Object(n.useState)({firstname:"",lastname:"",email:"",mobilenumber:""}),r=Object(a.a)(s,2),l=r[0],i=r[1];Object(n.useEffect)((function(){i(t)}),[t]);var o=function(e){i(Object(I.a)(Object(I.a)({},l),{},Object(B.a)({},e.target.name,e.target.value)))};return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)("div",{className:"row mb-5",children:Object(w.jsxs)("div",{className:"col-sm-12 primarycolor",children:[Object(w.jsx)("h1",{className:"pb-2 mt-4 mb-2 border-bottom",children:"Edit User Profile"}),Object(w.jsxs)("p",{className:"h5",children:["Username: ",t.username]})]})}),Object(w.jsx)("div",{className:"row mb-5",children:Object(w.jsx)("div",{className:"col-sm-12 primarycolor",children:Object(w.jsxs)("form",{onSubmit:function(e){var t,n;e.preventDefault(),(t=c,n=l,u.put("/users/".concat(t),n)).then((function(e){console.log(e.data),window.location.replace("/profile")})).catch((function(e){console.log(e),alert(e)}))},children:[Object(w.jsxs)("div",{className:"form-group",children:[Object(w.jsx)("label",{htmlFor:"firstname",children:"First Name:"}),Object(w.jsx)("input",{type:"text",id:"firstname",name:"firstname",value:l.firstname,onChange:o,className:"form-control",required:!0})]}),Object(w.jsxs)("div",{className:"form-group",children:[Object(w.jsx)("label",{htmlFor:"lastname",children:"Last Name"}),Object(w.jsx)("input",{type:"text",id:"lastname",name:"lastname",value:l.lastname,onChange:o,className:"form-control",required:!0})]}),Object(w.jsxs)("div",{className:"form-group",children:[Object(w.jsx)("label",{htmlFor:"email",children:"Email"}),Object(w.jsx)("input",{type:"email",id:"email",name:"email",value:l.email,onChange:o,className:"form-control",required:!0})]}),Object(w.jsxs)("div",{className:"form-group",children:[Object(w.jsx)("label",{htmlFor:"mobilenumber",children:"Mobile Number"}),Object(w.jsx)("input",{type:"tel",id:"mobilenumber",name:"mobilenumber",value:l.mobilenumber,onChange:o,className:"form-control",required:!0})]}),Object(w.jsxs)("div",{className:"text-right",children:[Object(w.jsx)("button",{onClick:function(){window.location.replace("/profile")},className:"btn btn-danger mr-2 px-3",children:"Discard"}),Object(w.jsx)("button",{type:"submit",className:"btn btn-outline-light px-3",children:"Save"})]})]})})})]})},Y=function(){var e=Object(n.useState)([]),t=Object(a.a)(e,2),c=t[0],s=t[1],r=Object(n.useState)([]),l=Object(a.a)(r,2),i=l[0],o=l[1],j=Object(n.useState)([]),b=Object(a.a)(j,2),m=b[0],u=b[1];Object(n.useEffect)((function(){g(o),N(u)}),[]);var d=function(e){console.log(e),function(e,t){fetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=".concat(e)).then((function(e){return e.json()})).then((function(e){t(e.meals)})).catch((function(e){return console.error(e)}))}(e,s)},h=function(e){console.log(e),function(e,t){fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=".concat(e)).then((function(e){return e.json()})).then((function(e){t(e.meals)})).catch((function(e){return console.error(e)}))}(e,s)};return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)("div",{className:"row mb-5",children:Object(w.jsxs)("div",{className:"col-sm-12 primarycolor",children:[Object(w.jsx)("h1",{className:"pb-2 mt-4 mb-2 border-bottom",children:"Advanced Search"}),Object(w.jsx)("p",{className:"lead",children:"Select a category or area below."})]})}),Object(w.jsx)("div",{class:"row mb-3",children:Object(w.jsxs)("div",{className:"col-sm-12 primarycolor",children:[Object(w.jsx)("p",{className:"h5",children:"By Area:"}),Object(w.jsx)("hr",{}),Object(w.jsx)("div",{className:"btn-group d-flex flex-wrap",children:i.map((function(e){return Object(w.jsx)("button",{onClick:function(){return d(e.strArea)},className:"btn-outline-light",children:e.strArea})}))})]})}),Object(w.jsx)("div",{class:"row mb-3",children:Object(w.jsxs)("div",{className:"col-sm-12 primarycolor",children:[Object(w.jsx)("br",{}),Object(w.jsx)("p",{className:"h5",children:"By Category:"}),Object(w.jsx)("hr",{}),Object(w.jsx)("div",{className:"btn-group d-flex flex-wrap",children:m.map((function(e){return Object(w.jsx)("button",{onClick:function(){return h(e.strCategory)},className:"btn-outline-light",children:e.strCategory})}))})]})}),Object(w.jsxs)("div",{className:"row my-5 primarycolor",children:[c&&c.map((function(e){return Object(w.jsx)("div",{className:"col-sm-3",children:Object(w.jsxs)("a",{href:"/recipe/".concat(e.idMeal),children:[Object(w.jsx)("h5",{className:"primarycolor",style:{textAlign:"center"},children:e.strMeal}),Object(w.jsxs)("div",{className:"fakeimg",children:[Object(w.jsx)("img",{src:e.strMealThumb,alt:e.strMeal,className:"shadow"}),Object(w.jsx)("div",{className:"overlay",children:Object(w.jsx)("div",{className:"text"})})]},e.idMeal)]})})})),Object(w.jsxs)("div",{className:"col-sm-3",children:[Object(w.jsx)("br",{}),Object(w.jsx)("button",{className:"btn btn-outline-light",onClick:function(){window.location.replace("/")},children:"Back to Home"})]})]})]})};var _=function(){var e=Object(n.useState)(null!==localStorage.getItem("token")),t=Object(a.a)(e,2),c=t[0],s=t[1],r=Object(n.useState)({username:"",firstname:"",lastname:"",email:"",mobilenumber:""}),o=Object(a.a)(r,2),j=o[0],b=o[1],m=localStorage.getItem("userId");Object(n.useEffect)((function(){m&&function(e,t){u.get("/users/".concat(e)).then((function(e){t(e.data)})).catch((function(e){console.log(e)}))}(m,b)}),[m]);var d=function(){s(!1),localStorage.removeItem("token"),localStorage.removeItem("userId"),window.location.replace("/")};return Object(w.jsxs)(l.a,{children:[Object(w.jsx)(y,{isLoggedIn:c,handleLogout:d,user:j}),Object(w.jsxs)("div",{className:"container",style:{marginTop:"1.25rem"},children:[Object(w.jsxs)(i.d,{children:[Object(w.jsx)(i.b,{path:"/register",children:Object(w.jsx)(E,{})}),Object(w.jsx)(i.b,{path:"/login",children:Object(w.jsx)(q,{setIsLoggedIn:s})}),Object(w.jsx)(L,{exact:!0,path:"/",isLoggedIn:c,children:Object(w.jsx)(C,{user:j})}),Object(w.jsx)(L,{path:"/profile",isLoggedIn:c,children:Object(w.jsx)(R,{handleLogout:d,user:j})}),Object(w.jsx)(L,{path:"/recipe/:id",isLoggedIn:c,children:Object(w.jsx)(D,{userId:m})}),Object(w.jsx)(L,{path:"/favorites",isLoggedIn:c,children:Object(w.jsx)(U,{user:j,userId:m})}),Object(w.jsx)(L,{path:"/edit",isLoggedIn:c,children:Object(w.jsx)(P,{user:j,userId:m})}),Object(w.jsx)(L,{path:"/search",isLoggedIn:c,children:Object(w.jsx)(Y,{})})]}),Object(w.jsx)(k,{})]})]})};r.a.createRoot(document.getElementById("root")).render(Object(w.jsx)(_,{}))}},[[58,1,2]]]);
//# sourceMappingURL=main.a15bba2c.chunk.js.map