(this.webpackJsonptestovoe1=this.webpackJsonptestovoe1||[]).push([[0],{27:function(e,t,a){e.exports=a(60)},32:function(e,t,a){},33:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(24),r=a.n(l),o=(a(32),a(33),a(25)),u=a(1),s=a(7),i=a(10),m=a.n(i),p=(a(51),"/Login_Form"),f=function(e){var t=e.history,a=Object(n.useState)(""),l=Object(s.a)(a,2),r=l[0],o=l[1],u=Object(n.useState)(""),i=Object(s.a)(u,2),f=i[0],E=i[1],d=Object(n.useState)(!1),h=Object(s.a)(d,2),b=h[0],v=h[1],g=function(e,t){var a=e.match(/\S+/);t(a?"".concat(a):"")},k=f&&r?"":"inactive",j=f&&r?function(e){e.preventDefault(),console.log("https://emphasoft-test-assignment.herokuapp.com/api-token-auth/"),m.a.post("https://emphasoft-test-assignment.herokuapp.com/api-token-auth/",{username:"".concat(r),password:"".concat(f)}).then((function(e){var a=e.data.token;localStorage.setItem("token",a),t.push(p+"/")}),(function(e){v(!0),setTimeout((function(){return v(!1)}),1e3)}))}:function(e){return e.preventDefault()},N=f&&r?null:c.a.createElement("span",{className:"notification"},"  *\u0412\u0441\u0435 \u043f\u043e\u043b\u044f \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u044b \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f"),O=b?c.a.createElement("div",{className:"modal-window"},c.a.createElement("div",{className:"alert-message"},c.a.createElement("h3",null," \u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u043b\u043e\u0433\u0438\u043d \u0438\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c! "))):null;return c.a.createElement("div",{className:"form-container"},O,c.a.createElement("form",{className:"authorization-form"},c.a.createElement("label",null,c.a.createElement("span",null,c.a.createElement("b",null,"\u041b\u043e\u0433\u0438\u043d:")),c.a.createElement("input",{type:"text",name:"login",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043b\u043e\u0433\u0438\u043d",value:r,onChange:function(e){return g(e.target.value,o)}})),c.a.createElement("label",null,c.a.createElement("span",null,c.a.createElement("b",null,"\u041f\u0430\u0440\u043e\u043b\u044c:")),c.a.createElement("input",{type:"text",name:"password",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c",value:f,onChange:function(e){return g(e.target.value,E)}})),N,c.a.createElement("input",{className:"btn ".concat(k),type:"submit",value:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c",onClick:j})))},E=(a(52),function(e){var t=e.history;return Object(n.useEffect)((function(){localStorage.getItem("token")||t.push(p+"/Login")}),[t]),c.a.createElement("div",{className:"page-container"},c.a.createElement("h1",null,"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f \u043f\u0440\u043e\u0432\u0435\u0434\u0435\u043d\u0430 \u0443\u0441\u043f\u0435\u0448\u043d\u043e!"),c.a.createElement("button",{className:"btn user-list-btn",onClick:function(){return t.push("/user-list")}},"\u041e\u0442\u043e\u0431\u0440\u0430\u0437\u0438\u0442\u044c \u0441\u043f\u0438\u0441\u043e\u043a \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439"))}),d=(a(53),a(54),function(e){var t=e.activeItem,a=e.items,n=e.setActive,l=a.map((function(e,t){return c.a.createElement("li",{key:t,onClick:function(){return n(e)}}," ",e," ")}));return c.a.createElement("div",{className:"dropdown"},c.a.createElement("button",{className:"btn dropbtn"},t),c.a.createElement("ul",{className:"dropdown-content"},l))}),h=function(e){var t=e.history,a=Object(n.useState)([]),l=Object(s.a)(a,2),r=l[0],o=l[1],u=Object(n.useState)(!1),i=Object(s.a)(u,2),f=i[0],E=i[1],h=["\u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e","\u041f\u043e \u0432\u043e\u0437\u0440\u0430\u0441\u0442\u0430\u043d\u0438\u044e id","\u041f\u043e \u0443\u0431\u044b\u0432\u0430\u043d\u0438\u044e id"],b=Object(n.useState)(h[0]),v=Object(s.a)(b,2),g=v[0],k=v[1],j=Object(n.useState)(""),N=Object(s.a)(j,2),O=N[0],y=N[1];if(Object(n.useEffect)((function(){E(!0);var e=localStorage.getItem("token");console.log(e),e?m.a.get("https://emphasoft-test-assignment.herokuapp.com/api/v1/users/",{headers:{Authorization:"Token ".concat(e)}}).then((function(e){o(e.data.map((function(e,t){return e.defaul_index=t,e}))),E(!1)})):t.push(p+"/Login")}),[t]),f)return c.a.createElement("div",{className:"page-container"},c.a.createElement("h3",null,"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."));var S,x,w=r;return w=function(e,t){switch(t){case"\u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e":e.sort((function(e,t){return e.defaul_index-t.defaul_index}));break;case"\u041f\u043e \u0432\u043e\u0437\u0440\u0430\u0441\u0442\u0430\u043d\u0438\u044e id":e.sort((function(e,t){return e.id-t.id}));break;case"\u041f\u043e \u0443\u0431\u044b\u0432\u0430\u043d\u0438\u044e id":e.sort((function(e,t){return t.id-e.id}))}return e}(r,g),S=r,w=(w=(x=O)?S.filter((function(e){return e.username.match(x)})):(console.log("it's empty!"),S)).map((function(e,t){return c.a.createElement("tr",{key:t},c.a.createElement("td",null," ",e.id," "),c.a.createElement("td",null," ",e.username," "),c.a.createElement("td",null," ",e.first_name," "),c.a.createElement("td",null," ",e.last_name," "))})),c.a.createElement("div",{className:"page-container"},c.a.createElement("div",{className:"bar-container"},c.a.createElement("span",null,"\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c:"),c.a.createElement(d,{activeItem:g,items:h,setActive:k}),c.a.createElement("span",null,"\u0424\u0438\u043b\u044c\u0442\u0440\u0430\u0446\u0438\u044f \u043f\u043e \u043b\u043e\u0433\u0438\u043d\u0443:"),c.a.createElement("input",{type:"text",value:O,onChange:function(e){return y(e.target.value)}})),c.a.createElement("div",{className:"table-container"},c.a.createElement("table",{className:"users-table"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,"ID"),c.a.createElement("th",null,"\u041b\u043e\u0433\u0438\u043d"),c.a.createElement("th",null,"\u0418\u043c\u044f"),c.a.createElement("th",null,"\u0424\u0430\u043c\u0438\u043b\u0438\u044f"))),c.a.createElement("tbody",null,w))))};console.log(p);var b=function(){return c.a.createElement(o.a,null,c.a.createElement(u.c,null,c.a.createElement(u.a,{path:p+"/",exact:!0,component:E}),c.a.createElement(u.a,{path:p+"/login",exact:!0,component:f}),c.a.createElement(u.a,{path:p+"/user-list",exact:!0,component:h})))};r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(b,null)),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.252c34fd.chunk.js.map