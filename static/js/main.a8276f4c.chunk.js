(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{127:function(e,a,t){},13:function(e,a,t){e.exports={subTitle:"Home_subTitle__3DQnE",biggerFont:"Home_biggerFont__2glfS"}},130:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(60),o=t.n(r),i=t(17),c=t(132),s=t(131),u=t(8),m=t.n(u),b=function(){return l.a.createElement("nav",{className:m.a.nav},l.a.createElement(s.a,{to:"/daw-labs",className:[m.a.navElement,m.a.mainNavE].join(" ")},"Home"),l.a.createElement("div",{className:m.a.navRight},l.a.createElement(s.a,{to:"/daw-labs/labs",className:[m.a.navElement].join(" ")},"Laboratorios"),l.a.createElement(s.a,{to:"/daw-labs/questionarios",className:[m.a.navElement].join(" ")},"Questionarios"),l.a.createElement(s.a,{to:"/daw-labs/about",className:[m.a.navElement].join(" ")},"Sobre Mi")))},E=(t(73),function(){return l.a.createElement("footer",null,l.a.createElement("p",null,"Topiltzin Hern\xe1ndez Mares. A01703266"),l.a.createElement("p",null,"Editor de texto usado: ",l.a.createElement("a",{href:"https://code.visualstudio.com/"},"Visual Studio Code")))}),p=t(133),d=t(13),g=t.n(d),f=function(){return l.a.createElement("section",null,l.a.createElement("h2",{className:g.a.subTitle},"Topiltzin Hern\xe1ndez Mares"),l.a.createElement("p",null,"Soy desarrollador Full Stack JavaScript con las tecnolog\xedas NodeJS, Express y MongoDB en el backend. En frontend desarrollo principalmente ReactJS y algunas veces PUG."))},v=t(61),_=t.n(v),h=l.a.createContext(null),N=t(62),w=t(44),j=t.n(w),S=(t(122),{apiKey:"AIzaSyCVUiY64VQx7CoCG0BrjLOKuBn9huj6TYs",authDomain:"reactlista.firebaseapp.com",databaseURL:"https://reactlista.firebaseio.com",projectId:"reactlista",storageBucket:"reactlista.appspot.com",messagingSenderId:"588089288607"}),T=function e(){Object(N.a)(this,e),j.a.initializeApp(S),this.db=j.a.database()},F=function(e){var a=Object(n.useState)([]),t=Object(i.a)(a,2),r=t[0],o=t[1];return Object(n.useEffect)(function(){e.firebase.db.ref("labs").once("value").then(function(e){o(e.val())})},[]),l.a.createElement("section",null,r.map(function(e,a){return l.a.createElement("a",{href:"/daw-labs/lab/"+a,className:"card"},l.a.createElement("p",{className:"card--title"},e.nombre))}))},O=function(e){return l.a.createElement(h.Consumer,null,function(e){return l.a.createElement(F,{firebase:e})})},x=t(63),C=t.n(x),k=function(e){return l.a.createElement(l.a.Fragment,null,e.questions.map(function(e){return l.a.createElement("li",null,l.a.createElement("p",{className:C.a.question},e.q),l.a.createElement("p",null,e.a))}))},z=function(e){var a=Object(n.useState)({preguntas:[]}),t=Object(i.a)(a,2),r=t[0],o=t[1];return Object(n.useEffect)(function(){e.firebase.db.ref("labs").once("value").then(function(a){o(a.val()[e.match.params.id])})}),l.a.createElement("section",{className:"card"},l.a.createElement("h2",{className:g.a.subTitle},r.nombre),l.a.createElement("p",{className:g.a.biggerFont},"Topiltzin Hern\xe1ndez Mares"),l.a.createElement("p",null,r.descripcion),l.a.createElement("article",null,l.a.createElement("h3",{className:g.a.biggerFont},"Preguntas"),l.a.createElement("ol",null,l.a.createElement(k,{questions:r.preguntas?r.preguntas:[]}))))},R=function(e){return l.a.createElement(h.Consumer,null,function(a){return l.a.createElement(z,{match:e.match,firebase:a})})},q=O,y=function(){return l.a.createElement("main",{className:_.a.main},l.a.createElement(p.a,{exact:!0,path:"/",component:f}),l.a.createElement(p.a,{exact:!0,path:"/daw-labs/",component:f}),l.a.createElement(p.a,{path:"/daw-labs/labs",component:q}),l.a.createElement(p.a,{path:"/daw-labs/lab/:id",component:R}))},B=(t(127),function(){var e=Object(n.useState)("Laboratorios"),a=Object(i.a)(e,2),t=a[0],r=a[1];return document.title=t,l.a.createElement(c.a,null,l.a.createElement(l.a.Fragment,null,l.a.createElement(b,{title:t}),l.a.createElement(y,{setTitle:r}),l.a.createElement(E,null)))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(h.Provider,{value:new T},l.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},61:function(e,a,t){e.exports={subTitle:"Routes_subTitle__1uNYv",biggerFont:"Routes_biggerFont__njTuB",main:"Routes_main__3-uGk"}},63:function(e,a,t){e.exports={question:"QuestionsElements_question__mc6bt"}},65:function(e,a,t){e.exports=t(130)},73:function(e,a,t){},8:function(e,a,t){e.exports={subTitle:"Navigation_subTitle__3okmM",biggerFont:"Navigation_biggerFont__gR2qZ",nav:"Navigation_nav__2bFLC",navElement:"Navigation_navElement__2sbC0",active:"Navigation_active__2CtnO",mainNavE:"Navigation_mainNavE__2gZCt",labs:"Navigation_labs__OL7KA",navRight:"Navigation_navRight__1S9uz"}}},[[65,2,1]]]);
//# sourceMappingURL=main.a8276f4c.chunk.js.map