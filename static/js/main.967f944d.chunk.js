(this.webpackJsonptestovoe1=this.webpackJsonptestovoe1||[]).push([[0],{27:function(e,t,a){e.exports=a(60)},32:function(e,t,a){},33:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(24),r=a.n(c),o=(a(32),a(33),a(25)),u=a(1),s=a(7),i=a(10),m=a.n(i),p=(a(51),"/Login_Form"),E=function(e){var t=e.history,a=Object(n.useState)(""),c=Object(s.a)(a,2),r=c[0],o=c[1],u=Object(n.useState)(""),i=Object(s.a)(u,2),E=i[0],f=i[1],d=Object(n.useState)(!1),h=Object(s.a)(d,2),b=h[0],v=h[1],g=function(e,t){var a=e.match(/\S+/);t(a?"".concat(a):"")},k=E&&r?"":"inactive",j=E&&r?function(e){e.preventDefault(),console.log(r),console.log(E),m.a.post("http://emphasoft-test-assignment.herokuapp.com/api-token-auth/",{username:"".concat(r),password:"".concat(E)}).then((function(e){var a=e.data.token;localStorage.setItem("token",a),t.push(p+"/")}),(function(e){v(!0),setTimeout((function(){return v(!1)}),1e3)}))}:function(e){return e.preventDefault()},N=E&&r?null:l.a.createElement("span",{className:"notification"},"  *\u0412\u0441\u0435 \u043f\u043e\u043b\u044f \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u044b \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f"),O=b?l.a.createElement("div",{className:"modal-window"},l.a.createElement("div",{className:"alert-message"},l.a.createElement("h3",null," \u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u043b\u043e\u0433\u0438\u043d \u0438\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c! "))):null;return l.a.createElement("div",{className:"form-container"},O,l.a.createElement("form",{className:"authorization-form"},l.a.createElement("label",null,l.a.createElement("span",null,l.a.createElement("b",null,"\u041b\u043e\u0433\u0438\u043d:")),l.a.createElement("input",{type:"text",name:"login",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043b\u043e\u0433\u0438\u043d",value:r,onChange:function(e){return g(e.target.value,o)}})),l.a.createElement("label",null,l.a.createElement("span",null,l.a.createElement("b",null,"\u041f\u0430\u0440\u043e\u043b\u044c:")),l.a.createElement("input",{type:"text",name:"password",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c",value:E,onChange:function(e){return g(e.target.value,f)}})),N,l.a.createElement("input",{className:"btn ".concat(k),type:"submit",value:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c",onClick:j})))},f=(a(52),function(e){var t=e.history;return Object(n.useEffect)((function(){localStorage.getItem("token")||t.push(p+"/Login")}),[t]),l.a.createElement("div",{className:"page-container"},l.a.createElement("h1",null,"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f \u043f\u0440\u043e\u0432\u0435\u0434\u0435\u043d\u0430 \u0443\u0441\u043f\u0435\u0448\u043d\u043e!"),l.a.createElement("button",{className:"btn user-list-btn",onClick:function(){return t.push("/user-list")}},"\u041e\u0442\u043e\u0431\u0440\u0430\u0437\u0438\u0442\u044c \u0441\u043f\u0438\u0441\u043e\u043a \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439"))}),d=(a(53),a(54),function(e){var t=e.activeItem,a=e.items,n=e.setActive,c=a.map((function(e,t){return l.a.createElement("li",{key:t,onClick:function(){return n(e)}}," ",e," ")}));return l.a.createElement("div",{className:"dropdown"},l.a.createElement("button",{className:"btn dropbtn"},t),l.a.createElement("ul",{className:"dropdown-content"},c))}),h=function(e){var t=e.history,a=Object(n.useState)([]),c=Object(s.a)(a,2),r=c[0],o=c[1],u=Object(n.useState)(!1),i=Object(s.a)(u,2),E=i[0],f=i[1],h=["\u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e","\u041f\u043e \u0432\u043e\u0437\u0440\u0430\u0441\u0442\u0430\u043d\u0438\u044e id","\u041f\u043e \u0443\u0431\u044b\u0432\u0430\u043d\u0438\u044e id"],b=Object(n.useState)(h[0]),v=Object(s.a)(b,2),g=v[0],k=v[1],j=Object(n.useState)(""),N=Object(s.a)(j,2),O=N[0],y=N[1];if(Object(n.useEffect)((function(){f(!0);var e=localStorage.getItem("token");console.log(e),e?m.a.get("http://emphasoft-test-assignment.herokuapp.com/api/v1/users/",{headers:{Authorization:"Token ".concat(e)}}).then((function(e){o(e.data.map((function(e,t){return e.defaul_index=t,e}))),f(!1)})):t.push(p+"/Login")}),[t]),E)return l.a.createElement("div",{className:"page-container"},l.a.createElement("h3",null,"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."));var S,x,w=r;return w=function(e,t){switch(t){case"\u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e":e.sort((function(e,t){return e.defaul_index-t.defaul_index}));break;case"\u041f\u043e \u0432\u043e\u0437\u0440\u0430\u0441\u0442\u0430\u043d\u0438\u044e id":e.sort((function(e,t){return e.id-t.id}));break;case"\u041f\u043e \u0443\u0431\u044b\u0432\u0430\u043d\u0438\u044e id":e.sort((function(e,t){return t.id-e.id}))}return e}(r,g),S=r,w=(w=(x=O)?S.filter((function(e){return e.username.match(x)})):(console.log("it's empty!"),S)).map((function(e,t){return l.a.createElement("tr",{key:t},l.a.createElement("td",null," ",e.id," "),l.a.createElement("td",null," ",e.username," "),l.a.createElement("td",null," ",e.first_name," "),l.a.createElement("td",null," ",e.last_name," "))})),l.a.createElement("div",{className:"page-container"},l.a.createElement("div",{className:"bar-container"},l.a.createElement("span",null,"\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c:"),l.a.createElement(d,{activeItem:g,items:h,setActive:k}),l.a.createElement("span",null,"\u0424\u0438\u043b\u044c\u0442\u0440\u0430\u0446\u0438\u044f \u043f\u043e \u043b\u043e\u0433\u0438\u043d\u0443:"),l.a.createElement("input",{type:"text",value:O,onChange:function(e){return y(e.target.value)}})),l.a.createElement("div",{className:"table-container"},l.a.createElement("table",{className:"users-table"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"ID"),l.a.createElement("th",null,"\u041b\u043e\u0433\u0438\u043d"),l.a.createElement("th",null,"\u0418\u043c\u044f"),l.a.createElement("th",null,"\u0424\u0430\u043c\u0438\u043b\u0438\u044f"))),l.a.createElement("tbody",null,w))))};console.log(p);var b=function(){return l.a.createElement(o.a,null,l.a.createElement(u.c,null,l.a.createElement(u.a,{path:p+"/",exact:!0,component:f}),l.a.createElement(u.a,{path:p+"/login",exact:!0,component:E}),l.a.createElement(u.a,{path:p+"/user-list",exact:!0,component:h})))};r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(b,null)),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.967f944d.chunk.js.map