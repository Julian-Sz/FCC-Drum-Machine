(this["webpackJsonpdrum-machine"]=this["webpackJsonpdrum-machine"]||[]).push([[0],{26:function(e,t,n){},27:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var r=n(1),i=n.n(r),a=n(20),s=n.n(a),o=(n(26),n(21)),c=n(18),d=n(15),u=(n(27),n(32)),m=n(33),l=n(2),p=function(e){try{document.getElementById(e.key.toUpperCase()).parentElement.children[0].style.backgroundColor="#0be881"}catch(t){}},b=function(e){var t={display:"flex",justifySelf:"center",padding:"5px",gridColumn:"1 / 3",justifyContent:"space-evenly",alignItems:"center",borderRadius:"10px",minWidth:"100%",boxShadow:"0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)"},n=Object(d.a)({},t);n.gridArea="row1";var i=Object(d.a)({},t);i.gridArea="row2";Object(r.useEffect)((function(){var t=document.getElementById("keyboardswitch").children[1].children[0],n=document.getElementById("minimizedswitch").children[1].children[0];"qwertz"===e.keyboard&&(t.checked=!0),!1===e.minimized&&(n.checked=!0)}),[e.keyboard,e.minimized]);var a={visible:{backgroundColor:"#2d3436"},hover:{backgroundColor:"#2c3e50"}};return Object(l.jsxs)(u.a.div,{id:"optionsdropdown",style:{display:"grid",gridGap:"10px",zIndex:1,gridTemplateRows:"70px 1fr 1fr",gridTemplateColumns:"1fr 70px",gridTemplateAreas:'"header ." "row1 row1" "row2 row2"',padding:"0 15px 15px 15px",justifySelf:"end",alignSelf:"start",backgroundColor:"#1e272e",borderRadius:"5px",color:"#ecf0f1"},variants:{hidden:{opacity:0,x:"30px"},open:{opacity:1,x:0,transition:{type:"ease-in-out"}},exit:{opacity:0,x:"30px",transition:{type:"ease-in-out"}}},initial:"hidden",animate:"open",exit:"exit",children:[Object(l.jsx)("h1",{style:{gridArea:"header",justifySelf:"center",alignSelf:"center"},children:"Options"}),Object(l.jsxs)(u.a.div,{id:"keyboardswitch",className:"switch-row",style:n,variants:a,initial:"visible",whileHover:"hover",children:[Object(l.jsx)("div",{children:"QWERTY"}),Object(l.jsxs)("label",{className:"switch",children:[Object(l.jsx)("input",{type:"checkbox",onClick:function(){e.setappstate((function(e){var t=Object(d.a)({},e);return"qwerty"===t.keyboard?t.keyboard="qwertz":t.keyboard="qwerty",t}))}}),Object(l.jsx)("span",{className:"slider round"})]}),Object(l.jsx)("div",{children:"QWERTZ"})]}),Object(l.jsxs)(u.a.div,{id:"minimizedswitch",className:"switch-row",style:i,variants:a,initial:"visible",whileHover:"hover",children:[Object(l.jsx)("div",{children:"Minimized"}),Object(l.jsxs)("label",{className:"switch",children:[Object(l.jsx)("input",{type:"checkbox",onClick:function(){e.setappstate((function(e){var t=Object(d.a)({},e);return t.minimized=!t.minimized,t}))}}),Object(l.jsx)("span",{className:"slider round"})]}),Object(l.jsx)("div",{children:"Maximized"})]})]})},h=function(e){var t=Object(r.useState)(!1),n=Object(c.a)(t,2),a=n[0],s=n[1];return Object(l.jsxs)(i.a.Fragment,{children:[Object(l.jsx)(u.a.div,{id:"options",variants:{visible:{backgroundColor:"#718093"},hover:{backgroundColor:"#2c3e50"}},animate:"visible",whileHover:"hover",style:{zIndex:2,backgroundImage:"url('/FCC-Drum-Machine/gear-white.png')",backgroundSize:"90% auto",backgroundPosition:"50% 50%",backgroundRepeat:"no-repeat",borderRadius:"5px",padding:"10px",height:"50px",width:"50px"},onClick:function(){s(!a)}}),Object(l.jsx)(m.a,{children:a&&Object(l.jsx)(b,{minimized:e.minimized,setappstate:e.setappstate,keyboard:e.keyboard,animate:{scale:1.5}})})]})},j=function(e){return Object(l.jsx)("div",{id:"display",children:Object(l.jsx)("div",{id:"display-text",children:e.text})})},x=function(e){var t={visible:{y:0,transition:{type:"tween",duration:.8,delay:.1}},exit:{y:"140vh",transition:{type:"tween",duration:.8,delay:.1}}},n=Object(r.useState)({}),i=Object(c.a)(n,2),a=i[0],s=i[1];Object(r.useEffect)((function(){e.minimized||s({gridTemplateColumns:"1fr 1fr 1fr 1fr"})}),[e.minimized]);var o={width:"100%",height:"100%"},d={type:"spring",duration:.9,delay:.1,bounce:.5};return Object(l.jsx)("div",{id:"db-wrapper",style:a,children:Object(l.jsx)(m.a,{onExitComplete:function(){s({gridTemplateColumns:"1fr 1fr 1fr"})},children:e.buttonsarr.map((function(n,r){return Object(l.jsx)(u.a.div,{variants:t,initial:"exit",animate:"visible",exit:"exit",style:o,children:Object(l.jsxs)(u.a.button,{layout:!0,transition:d,className:"drum-pad",onClick:(i=e.changetext,a=e.buttonsarr,function(e){var t=e.target.firstChild.textContent;document.getElementById(t).currentTime=0,document.getElementById(t).play();var n=a.filter((function(e){return e.press===t.toLowerCase()}))[0];i(n.name)}),id:n.name,children:[Object(l.jsx)("span",{className:"front",children:n.press.toUpperCase()}),Object(l.jsx)("audio",{id:n.press.toUpperCase(),src:e.buttonsarr[r].source,preload:"auto",className:"clip"},n.press.toUpperCase())]},n.press)},n.press);var i,a}))})})};var g=function(e){var t=Object(r.useState)({text:"Press a button",minimized:!0,keyboard:"qwerty"}),n=Object(c.a)(t,2),i=n[0],a=n[1],s=function(e){a((function(t){var n=Object(d.a)({},t);return n.text=e,n}))},m=[];if(i.minimized){var b=["q","w","e","a","s","d","z","x","c"];"qwerty"!==i.keyboard&&(b[b.indexOf("z")]="y");for(var g=0;g<e.buttonsarr.length;g++)-1!==b.indexOf(e.buttonsarr[g].press)&&(m[b.indexOf(e.buttonsarr[g].press)]=e.buttonsarr[g])}else if(m=Object(o.a)(e.buttonsarr),"qwerty"===i.keyboard){for(var y=-1,f=-1,C=0;C<m.length&&(-1===y||-1===f);C++)"y"!==m[C].press?"z"!==m[C].press||(f=C):y=C;var v=m[f];m[f]=m[y],m[y]=v}return Object(r.useEffect)((function(){var e=function(e,t){return function(n){try{document.getElementById(n.key.toUpperCase()).parentElement.children[0].style.backgroundColor="#e74c3c",document.getElementById(n.key.toUpperCase()).currentTime=0;var r=document.getElementById(n.key.toUpperCase()).play();void 0!==r&&r.then((function(){})).catch((function(e){console.log("error",e)}));for(var i="Loading",a=0;a<t.length;a++)if(t[a].press===n.key){i=t[a].name;break}e(i)}catch(s){}}}(s,m);return document.addEventListener("keydown",e),document.addEventListener("keyup",p),function(){document.removeEventListener("keydown",e),document.removeEventListener("keyup",p)}})),Object(l.jsxs)(u.a.div,{className:"App",id:"drum-machine",initial:{scale:.7},animate:{scale:1},transition:{delay:.2,duration:.5},children:[Object(l.jsx)(h,{minimized:i.minimized,keyboard:i.keyboard,setappstate:a}),Object(l.jsx)(j,{text:i.text}),Object(l.jsx)(x,{changetext:s,buttonsarr:m,minimized:i.minimized,keyboard:i.keyboard})]})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,34)).then((function(t){var n=t.getCLS,r=t.getFID,i=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),i(e),a(e),s(e)}))},f=[{press:"q",source:"https://github.com/Julian-Sz/FCC-Drum-Machine/blob/main/src/sounds/Clap%201.mp3",name:""},{press:"w",source:"https://github.com/Julian-Sz/FCC-Drum-Machine/blob/main/src/sounds/Clap%202.mp3",name:""},{press:"e",source:"https://github.com/Julian-Sz/FCC-Drum-Machine/blob/main/src/sounds/Conga%20High.mp3",name:""},{press:"r",source:"https://github.com/Julian-Sz/FCC-Drum-Machine/blob/main/src/sounds/Conga%20Mid.mp3",name:""},{press:"t",source:"https://github.com/Julian-Sz/FCC-Drum-Machine/blob/main/src/sounds/Conga%20Low.mp3",name:""},{press:"z",source:"https://github.com/Julian-Sz/FCC-Drum-Machine/blob/main/src/sounds/Cowbell.mp3",name:""},{press:"a",source:"https://github.com/Julian-Sz/FCC-Drum-Machine/blob/main/src/sounds/Hihat%20Open.mp3",name:""},{press:"s",source:"https://github.com/Julian-Sz/FCC-Drum-Machine/blob/main/src/sounds/Mid%20Tom.mp3",name:""},{press:"d",source:"https://github.com/Julian-Sz/FCC-Drum-Machine/blob/main/src/sounds/Pop%20Chord%201.mp3",name:""},{press:"f",source:"https://github.com/Julian-Sz/FCC-Drum-Machine/blob/main/src/sounds/Pop%20Chord%202.mp3",name:""},{press:"g",source:"https://github.com/Julian-Sz/FCC-Drum-Machine/blob/main/src/sounds/Pop%20Chord%203.mp3",name:""},{press:"y",source:"https://github.com/Julian-Sz/FCC-Drum-Machine/blob/main/src/sounds/Woop.mp3",name:""},{press:"x",source:"https://github.com/Julian-Sz/FCC-Drum-Machine/blob/main/src/sounds/Snare%201.mp3",name:""},{press:"c",source:"https://github.com/Julian-Sz/FCC-Drum-Machine/blob/main/src/sounds/Snare%202.mp3",name:""},{press:"v",source:"https://github.com/Julian-Sz/FCC-Drum-Machine/blob/main/src/sounds/Snare%203.mp3",name:""},{press:"b",source:"https://github.com/Julian-Sz/FCC-Drum-Machine/blob/main/src/sounds/Snare%204.mp3",name:""}];try{for(var C=/.+\/(.*)\.mp3$/,v=0;v<f.length;v++)f[v].name=decodeURI(f[v].source).match(C)[1],f[v].source=f[v].source+"?raw=true"}catch(O){console.error("Error in buttonsArr, full message: \n",O)}s.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(g,{buttonsarr:f})}),document.getElementById("root")),y()}},[[29,1,2]]]);
//# sourceMappingURL=main.31f240db.chunk.js.map