(this["webpackJsonp03-react"]=this["webpackJsonp03-react"]||[]).push([[0],{54:function(e,t,c){},55:function(e,t,c){},68:function(e,t,c){},69:function(e,t,c){"use strict";c.r(t);var i=c(0),s=c.n(i),a=c(22),n=c.n(a),r=(c(54),c(55),c(8)),j=c(21),l=c(39),o=c.n(l),d=c(1);var h=function(){var e=Object(i.useState)(!1),t=Object(r.a)(e,2),c=t[0],s=t[1],a=function(){s(!c)};return Object(d.jsxs)("nav",{id:"header",children:[Object(d.jsx)("div",{class:"logo",children:"Xplore"}),Object(d.jsxs)("div",{class:"rightSide",children:[Object(d.jsxs)("ul",{class:"navbar-links",id:c?"hidden":"",children:[Object(d.jsx)(j.b,{to:"/",children:Object(d.jsx)("li",{children:Object(d.jsx)("a",{id:"home-page",onClick:a,class:"active",href:"/","data-after":"Home",children:"Home"})})}),Object(d.jsx)(j.b,{to:"/activities",children:Object(d.jsx)("li",{id:"activityLink",children:Object(d.jsx)("a",{class:"active",onClick:a,id:"activities-page",href:"","data-after":"Activities",children:"Activities"})})}),Object(d.jsx)(j.b,{to:"/frontpage",children:Object(d.jsx)("li",{children:Object(d.jsx)("a",{id:"gallery-page",onClick:a,class:"active",href:"/frontpage","data-after":"Gallery",children:"Gallery"})})}),Object(d.jsx)(j.b,{to:"/about",children:Object(d.jsx)("li",{children:Object(d.jsx)("a",{id:"about-page",onClick:a,class:"active",href:"/about","data-after":"About Us",children:"About Us"})})})]}),Object(d.jsx)("button",{onClick:function(){return s(!c)},children:Object(d.jsx)(o.a,{})})]})]})},b=(c(37),c.p+"static/media/reeya_image.f7a8f1c0.jpg"),O=c.p+"static/media/pragati_image.b9809388.jpg",u=c.p+"static/media/priyanka_image.cc5543e1.JPG";var x=function(){return Object(d.jsxs)("div",{className:"About",children:[Object(d.jsx)("div",{className:"row p",children:Object(d.jsx)("div",{className:"col-md-4 col-lg-4 col-sm-12",children:Object(d.jsx)("div",{className:"d-flex justify-content-center aboutmain",children:Object(d.jsx)("div",{className:"card-body",children:Object(d.jsx)("p",{children:Object(d.jsx)("b",{class:"about-background",children:"CONTRIBUTORS"})})})})})}),Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-md-4 col-lg-4 col-sm-12",children:Object(d.jsxs)("div",{className:"max-auto card ",style:{height:"30em"},children:[Object(d.jsx)("div",{className:"card-img",children:Object(d.jsx)("img",{src:b,id:"image1",className:"img-fluid",alt:"Profilepicture",style:{height:"15em"}})}),Object(d.jsxs)("div",{className:"card-body",children:[Object(d.jsx)("h3",{children:"Reeya Kumbhojkar"}),Object(d.jsx)("p",{children:"Computer Science Graduate student from PSU"})]}),Object(d.jsx)("div",{className:"card-footer",children:Object(d.jsx)("a",{href:"https://www.linkedin.com/in/reeyakumbhojkar5/",className:"card-link",children:"Linkedin"})})]})}),Object(d.jsx)("div",{className:"col-md-4 col-lg-4 col-sm-12",children:Object(d.jsxs)("div",{className:"max-auto card",style:{height:"30em"},children:[Object(d.jsx)("div",{className:"card-img",children:Object(d.jsx)("img",{src:O,id:"image2",className:"img-fluid",alt:"Profilepicture",style:{height:"15em"}})}),Object(d.jsxs)("div",{className:"card-body",children:[Object(d.jsx)("h4",{children:"Pragati Rathore"}),Object(d.jsx)("p",{children:"Computer Science Graduate student from PSU"})]}),Object(d.jsx)("div",{className:"card-footer",children:Object(d.jsx)("a",{href:"https://www.linkedin.com/in/pragatirathore/",className:"card-link",children:"Linkedin"})})]})}),Object(d.jsx)("div",{className:"col-md-4 col-lg-4 col-sm-12",children:Object(d.jsxs)("div",{className:"max-auto card",style:{height:"30em"},children:[Object(d.jsx)("div",{className:"card-img",children:Object(d.jsx)("img",{src:u,id:"image3",className:"img-fluid",alt:"Profilepicture",style:{height:"15em"}})}),Object(d.jsxs)("div",{className:"card-body",children:[Object(d.jsx)("h5",{children:"Priyanka Seethamraju"}),Object(d.jsx)("p",{children:"Computer Science Graduate student from PSU"})]}),Object(d.jsx)("div",{className:"card-footer",children:Object(d.jsx)("a",{href:"https://www.linkedin.com/in/sai-priyanka-seethamraju-919532209/",className:"card-link",children:"Linkedin"})})]})})]})]})},m=c(92),p=function(e){var t=e.url,c=Object(i.useState)([]),s=Object(r.a)(c,2),a=s[0],n=s[1];return fetch(t).then((function(e){return e.json()})).then((function(e){n(e.results[0].urls.thumb)})).catch((function(e){console.error(e)})),Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("img",{src:a,height:"200",width:"100%",alt:"ActivityImage"})})},g=c(93),f=c(40),v=c.n(f),w=c(94),y=c(95),k=c(41),P=c.n(k),I=c(42),C=c.n(I),N=c(43),G=c.n(N),S=c(44),A=c.n(S),X=c(45),q=c.n(X),U=c(46),J=c.n(U),H=c(47),_=c.n(H),B={LANGUAGES:"en-us"},E=function(e){var t=e.display,c=Object(i.useState)([]),s=Object(r.a)(c,2),a=s[0],n=s[1],j=Object(i.useState)(""),l=Object(r.a)(j,2),o=l[0],h=l[1],b=document.getElementById("activityLink");fetch("https://api.unsplash.com/search/photos?client_id=XVkqfP4oGQXxceYU3rJi2GIwtaAHPhCwosw1PdjOv7I&query=".concat(t.type)).then((function(e){return e.json()})).then((function(e){n(e.results[3].urls.small)})).catch((function(e){console.error(e)}));return b.addEventListener("click",(function(){h(!0)})),Object(d.jsxs)("div",{class:"resultContainer",children:[o&&Object(d.jsx)(L,{}),!o&&Object(d.jsx)("div",{class:"display-data",children:Object(d.jsx)("section",{children:Object(d.jsxs)("div",{class:"output",children:[Object(d.jsx)("div",{class:"image",children:Object(d.jsx)("img",{src:a,width:"100%",height:"80%",alt:"ActivityImage"})}),Object(d.jsxs)("div",{class:"content",children:[Object(d.jsx)("h1",{children:t.activity}),t.participants&&Object(d.jsxs)("p",{children:[Object(d.jsx)("b",{children:"Participants: "}),t.participants," "]}),void 0!=t.price&&Object(d.jsxs)("p",{children:[Object(d.jsx)("b",{children:"Price: "}),t.price," "]}),void 0!=t.accessibility&&Object(d.jsxs)("p",{children:[Object(d.jsx)("b",{children:"Accessibility: "}),t.accessibility," "]}),t.link&&Object(d.jsxs)("p",{children:[Object(d.jsx)("b",{children:"Link: "}),Object(d.jsx)("a",{href:"{display.link}",children:t.link})," "]}),Object(d.jsx)("a",{href:"/activities",class:"back",children:"Search Another Activity"})]})]})})})]})},L=function(){var e=Object(i.useState)([]),t=Object(r.a)(e,2),c=t[0],a=t[1],n=Object(i.useState)([]),j=Object(r.a)(n,2),l=(j[0],j[1],s.a.useState(!1)),o=Object(r.a)(l,2),h=(o[0],o[1],Object(i.useState)(B.SPEECH)),b=Object(r.a)(h,2),O=b[0],u=b[1],x=Object(i.useState)(""),f=Object(r.a)(x,2),k=f[0],I=f[1],N=function(e){fetch("https://www.boredapi.com/api/activity?type=".concat(e)).then((function(e){return e.json()})).then((function(e){I(e)})).catch((function(e){console.error(e)}))},S=function(e){var t="https://api.voicerss.org/?key=".concat("160c39babf6b409bb825cf8f50da5409","&hl=en-us&src=").concat(c,"&r=0");a(e),u(t)};return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{style:{margin:"auto"},class:"image-list",children:[k&&Object(d.jsx)(E,{display:k}),!k&&Object(d.jsxs)(m.a,{height:200,children:[Object(d.jsx)(g.a,{cols:2,rows:4,style:{height:"auto"}},"Subheader"),Object(d.jsxs)(g.a,{onClick:function(){S("education"),N("education")},children:[Object(d.jsx)(p,{url:"https://api.unsplash.com/search/photos?client_id=XVkqfP4oGQXxceYU3rJi2GIwtaAHPhCwosw1PdjOv7I&query=education"}),Object(d.jsx)(w.a,{title:"Education",subtitle:Object(d.jsx)("span",{children:"Learn something interesting!"}),actionIcon:Object(d.jsxs)(y.a,{"aria-label":"Best Place to learn",children:[Object(d.jsx)(d.Fragment,{children:O&&Object(d.jsx)("audio",{autoPlay:!0,src:O})}),Object(d.jsx)(v.a,{})]})})]}),Object(d.jsxs)(g.a,{onClick:function(){S("Recreation"),N("recreational")},children:[Object(d.jsx)(p,{url:"https://api.unsplash.com/search/photos?client_id=XVkqfP4oGQXxceYU3rJi2GIwtaAHPhCwosw1PdjOv7I&query=swimming"}),Object(d.jsx)(w.a,{title:"Recreation",subtitle:Object(d.jsx)("span",{children:"Would you like to have fun?"}),actionIcon:Object(d.jsx)(y.a,{"aria-label":"Best Place to learn",children:Object(d.jsx)(P.a,{})})})]}),Object(d.jsxs)(g.a,{onClick:function(){S("Social"),N("social")},children:[Object(d.jsx)(p,{url:"https://api.unsplash.com/search/photos?client_id=XVkqfP4oGQXxceYU3rJi2GIwtaAHPhCwosw1PdjOv7I&query=friends"}),Object(d.jsx)(w.a,{title:"Social",subtitle:Object(d.jsx)("span",{children:"Social activities are great!"}),actionIcon:Object(d.jsx)(y.a,{"aria-label":"Best Place to learn",children:Object(d.jsx)(C.a,{})})})]}),Object(d.jsxs)(g.a,{onClick:function(){S("DIY"),N("diy")},children:[Object(d.jsx)(p,{url:"https://api.unsplash.com/search/photos?client_id=XVkqfP4oGQXxceYU3rJi2GIwtaAHPhCwosw1PdjOv7I&query=jigsaw"}),Object(d.jsx)(w.a,{title:"DIY",subtitle:Object(d.jsx)("span",{children:"Do it yourself."}),actionIcon:Object(d.jsx)(y.a,{"aria-label":"Best Place to learn",children:Object(d.jsx)(G.a,{})})})]}),Object(d.jsxs)(g.a,{onClick:function(){S("Charity"),N("charity")},children:[Object(d.jsx)(p,{url:"https://api.unsplash.com/search/photos?client_id=XVkqfP4oGQXxceYU3rJi2GIwtaAHPhCwosw1PdjOv7I&query=charity"}),Object(d.jsx)(w.a,{title:"Charity",subtitle:Object(d.jsx)("span",{children:"There's always more to give"}),actionIcon:Object(d.jsx)(y.a,{"aria-label":"Best Place to learn",children:Object(d.jsx)(A.a,{})})})]}),Object(d.jsxs)(g.a,{onClick:function(){S("Cooking"),N("cooking")},children:[Object(d.jsx)(p,{url:"https://api.unsplash.com/search/photos?client_id=XVkqfP4oGQXxceYU3rJi2GIwtaAHPhCwosw1PdjOv7I&query=cooking"}),Object(d.jsx)(w.a,{title:"Cooking",subtitle:Object(d.jsx)("span",{children:"Let's mess around in kitchen"}),actionIcon:Object(d.jsx)(y.a,{"aria-label":"Best Place to learn",children:Object(d.jsx)(q.a,{})})})]}),Object(d.jsxs)(g.a,{onClick:function(){S("Relaxation"),N("relaxation")},children:[Object(d.jsx)(p,{url:"https://api.unsplash.com/search/photos?client_id=XVkqfP4oGQXxceYU3rJi2GIwtaAHPhCwosw1PdjOv7I&query=yoga"}),Object(d.jsx)(w.a,{title:"Relaxation",subtitle:Object(d.jsx)("span",{children:"Stressed? Just chill"}),actionIcon:Object(d.jsx)(y.a,{"aria-label":"Best Place to learn",children:Object(d.jsx)(J.a,{})})})]}),Object(d.jsxs)(g.a,{onClick:function(){S("Music"),N("music")},children:[Object(d.jsx)(p,{url:"https://api.unsplash.com/search/photos?client_id=XVkqfP4oGQXxceYU3rJi2GIwtaAHPhCwosw1PdjOv7I&query=music"}),Object(d.jsx)(w.a,{title:"Music",subtitle:Object(d.jsx)("span",{children:"Get your volume up!"}),actionIcon:Object(d.jsx)(y.a,{"aria-label":"Best Place to learn",children:Object(d.jsx)(_.a,{})})})]})]})]})})};function Y(){var e="https://api.unsplash.com/photos/random?client_id=XVkqfP4oGQXxceYU3rJi2GIwtaAHPhCwosw1PdjOv7I&query=gardening,swimming,card game,dance,write a poem,jigsaw puzzle,roller skate,cooking,photos with friends,watch a movie,picnic&count=10",t=Object(i.useState)([]),c=Object(r.a)(t,2),s=c[0],a=c[1],n=new Array;return Object(i.useEffect)((function(){fetch(e).then((function(e){return e.json()})).then((function(e){e.forEach((function(e){n.push(e.urls.small)})),a(n)})).catch((function(e){console.error(e)}))}),[e]),Object(d.jsx)("main",{style:{padding:"1rem 0"},children:Object(d.jsxs)("div",{class:"grid-container",children:[Object(d.jsx)("img",{id:"image1",src:s[0],height:"310",width:"180"}),Object(d.jsx)("img",{id:"image2",src:s[1],height:"150",width:"180"}),Object(d.jsx)("img",{id:"image3",src:s[2],height:"150",width:"180"}),Object(d.jsx)("div",{id:"image4",children:Object(d.jsx)("img",{src:s[3],height:"150",width:"369"})}),Object(d.jsx)("div",{id:"image5",children:Object(d.jsx)("img",{src:s[4],height:"150",width:"369"})}),Object(d.jsx)("div",{id:"image6",children:Object(d.jsx)("img",{src:s[5],height:"150",width:"180"})}),Object(d.jsx)("div",{id:"image7",children:Object(d.jsx)("img",{src:s[6],height:"150",width:"180"})}),Object(d.jsx)("div",{id:"image8",children:Object(d.jsx)("img",{src:s[7],height:"310",width:"180"})}),Object(d.jsx)("div",{id:"image9",children:Object(d.jsx)("img",{src:s[8],height:"310",width:"180"})}),Object(d.jsx)("div",{id:"image10",children:Object(d.jsx)("img",{src:s[9],height:"150",width:"180"})})]})})}var V=c(4);c(68);function Q(){var e=Object(i.useState)("container"),t=Object(r.a)(e,2),c=t[0],s=t[1];return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"main",children:[Object(d.jsxs)("div",{className:c,children:[Object(d.jsx)("div",{className:"split left",onMouseEnter:function(){return s(c+" hover-left")},onMouseLeave:function(){return s("container")},children:Object(d.jsxs)("h2",{children:["Are you ",Object(d.jsx)("strong",{children:"bored?"})]})}),Object(d.jsx)("div",{className:"split right",onMouseEnter:function(){return s(c+" hover-right")},onMouseLeave:function(){return s("container")},children:Object(d.jsxs)("h2",{children:["We'll ",Object(d.jsx)("strong",{children:"help you!"})]})})]}),Object(d.jsxs)("div",{className:"sources",children:["Credits:",Object(d.jsx)("a",{href:"https://www.boredapi.com/",children:" Bored API "})," ,"," ",Object(d.jsx)("a",{href:"https://unsplash.com/",children:"Unsplash API"})," and",Object(d.jsx)("a",{href:"http://www.voicerss.org/",children:" VOICERRS API "})]})]})})}var R=function(){return Object(d.jsxs)(j.a,{children:[Object(d.jsx)(h,{}),Object(d.jsxs)(V.c,{children:[Object(d.jsx)(V.a,{path:"/about",component:x}),Object(d.jsx)(V.a,{path:"/activities",component:L}),Object(d.jsx)(V.a,{path:"/frontpage",component:Y}),Object(d.jsx)(V.a,{path:"/",component:Q})]})]})};n.a.render(Object(d.jsx)(R,{}),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.7cf32453.chunk.js.map