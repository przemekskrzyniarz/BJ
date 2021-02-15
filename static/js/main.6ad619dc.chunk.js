(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{181:function(e,t,a){},409:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a(41),r=a.n(c),l=(a(181),a(5)),s=a(18),i=a(175),d=a.n(i),o=a(38),u=d()({game:[function(e,t){switch(t.type){case"SET_GAME":return Object(l.a)(Object(l.a)({},e),{},{isStarted:!e.isStarted});case"SET_IS_PLAYING":return Object(l.a)(Object(l.a)({},e),{},{isPlaying:t.payload});case"SET_DECK":return Object(l.a)(Object(l.a)({},e),{},{deck_id:t.payload});case"SET_PLAYER_CARDS":var a=[].concat(Object(o.a)(e.player_cards),Object(o.a)(t.payload));return Object(l.a)(Object(l.a)({},e),{},{player_cards:a});case"SET_DEALER_CARDS":var n=[].concat(Object(o.a)(e.dealer_cards),Object(o.a)(t.payload));return Object(l.a)(Object(l.a)({},e),{},{dealer_cards:n});case"CLEAR_PLAYER_CARDS":return Object(l.a)(Object(l.a)({},e),{},{player_cards:t.payload});case"CLEAR_DEALER_CARDS":return Object(l.a)(Object(l.a)({},e),{},{dealer_cards:t.payload});case"CHANGE_PLAYER_CARDS_VALUE":var c=e.player_cards_value+t.payload;return Object(l.a)(Object(l.a)({},e),{},{player_cards_value:c});case"CHANGE_DEALER_CARDS_VALUE":var r=e.dealer_cards_value+t.payload;return Object(l.a)(Object(l.a)({},e),{},{dealer_cards_value:r});case"CLEAR_PLAYER_CARDS_VALUE":return Object(l.a)(Object(l.a)({},e),{},{player_cards_value:t.payload});case"CLEAR_DEALER_CARDS_VALUE":return Object(l.a)(Object(l.a)({},e),{},{dealer_cards_value:t.payload});case"SET_BET":return Object(l.a)(Object(l.a)({},e),{},{bet:t.payload});case"SET_BANK":return Object(l.a)(Object(l.a)({},e),{},{bank:t.payload});case"SET_DOUBLE_BET":var s=2*e.bet,i=e.bank-e.bet;return Object(l.a)(Object(l.a)({},e),{},{bet:s,bank:i});case"SET_CONTINUE_GAME":return Object(l.a)(Object(l.a)({},e),{},{deck_id:t.payload.deck_id,player_cards:t.payload.player_cards,player_cards_value:t.payload.player_cards_value,dealer_cards:t.payload.dealer_cards,dealer_cards_value:t.payload.dealer_cards_value,bank:t.payload.bank,bet:t.payload.bet,isStarted:t.payload.isStarted,isPlaying:t.payload.isPlaying,round:t.payload.round});case"CHANGE_ROUND":return Object(l.a)(Object(l.a)({},e),{},{round:e.round+1});case"CLEAR_ROUND":return Object(l.a)(Object(l.a)({},e),{},{round:0});case"SET_ROUND_LIST":var d=[].concat(Object(o.a)(e.round_list),[t.payload]);return Object(l.a)(Object(l.a)({},e),{},{round_list:d});default:return e}},{deck_id:"",player_cards:[],player_cards_value:0,dealer_cards:[],dealer_cards_value:0,bank:1e3,bet:0,isStarted:!1,isPlaying:!1,round:0,round_list:[]}],ranking:[function(e,t){switch(t.type){case"ADD_RESULT":var a=[].concat(Object(o.a)(e.bestResults),[t.payload]);return Object(l.a)(Object(l.a)({},e),{},{bestResults:a});case"SET_RANKING":var n=[].concat(Object(o.a)(e.bestResults),Object(o.a)(t.payload));return Object(l.a)(Object(l.a)({},e),{},{bestResults:n});default:return e}},{bestResults:[]}]}),b=Object(s.a)(u,2),j=b[0],_=b[1],y=a(2),O=Object(n.createContext)(_),p=Object(n.createContext)((function(){return 0})),f=function(e){var t=Object(n.useReducer)(j,_),a=Object(s.a)(t,2),c=a[0],r=a[1];return Object(y.jsx)(p.Provider,{value:r,children:Object(y.jsx)(O.Provider,{value:c,children:e.children})})},h=function(){return Object(n.useContext)(p)},E=function(e){return Object(n.useContext)(O)[e]},m=a(176),g=a.n(m).a.create({baseURL:"https://deckofcardsapi.com/api/deck/"}),S=function(e){try{g.get("".concat(e,"/shuffle/")).then((function(e){})).catch((function(e){}))}catch(t){}},A=function(e){try{e({type:"SET_GAME"})}catch(t){}},v=function(e){try{e({type:"CLEAR_ROUND"})}catch(t){}},x=function(e,t){try{e({type:"SET_IS_PLAYING",payload:t})}catch(a){}},R=function(e){try{e({type:"SET_BET",payload:0}),e({type:"CLEAR_PLAYER_CARDS_VALUE",payload:0}),e({type:"CLEAR_DEALER_CARDS_VALUE",payload:0}),e({type:"CLEAR_PLAYER_CARDS",payload:[]}),e({type:"CLEAR_DEALER_CARDS",payload:[]})}catch(t){}},C=function(e,t,a,n,c){try{g.get("".concat(t,"/draw/?count=").concat(e)).then((function(e){var t=e.data;a({type:n,payload:t.cards});var r=0;t.cards.map((function(e){"ACE"===e.value?r+=11===r||c>11?1:11:"KING"===e.value||"QUEEN"===e.value||"JACK"===e.value?r+=10:r+=parseInt(e.value)})),a("SET_PLAYER_CARDS"===n?{type:"CHANGE_PLAYER_CARDS_VALUE",payload:r}:{type:"CHANGE_DEALER_CARDS_VALUE",payload:r}),a({type:"SET_IS_PLAYING",payload:!0})})).catch((function(e){a({type:"SET_IS_PLAYING",payload:!1})}))}catch(r){a({type:"SET_IS_PLAYING",payload:!1})}},N=a(422),k=a(424),L=a(423),T=Object(N.a)((function(e){return Object(k.a)({paper:{position:"absolute",width:400,backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}})})),D=function(e){var t=T(),a=Object(y.jsx)("div",{className:"d-flex justify-content-center",children:Object(y.jsx)("div",{className:t.paper,children:e.children})});return Object(y.jsx)("div",{onClick:e.changeOpenRanking,children:Object(y.jsx)(L.a,{open:e.onOpenRanking,onClose:e.changeOpenRanking,"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",children:a})})},P=function(e){return Object(y.jsx)("div",{children:Object(y.jsx)("img",{src:e.card.images.png,className:"img-fluid",alt:""})})},I=function(e){var t,a,c,r,l,i=E("game"),d=h(),o=Object(n.useState)(!1),u=Object(s.a)(o,2),b=u[0],j=u[1];(Object(n.useEffect)((function(){b&&(C(1,i.deck_id,d,"SET_PLAYER_CARDS",i.player_cards_value),setTimeout((function(){j(!1)}),1e3))}),[b]),t=i.player_cards.map((function(e,t){return Object(y.jsx)(P,{card:e},t)})),e.isStand)?a=i.dealer_cards.map((function(e,t){return Object(y.jsx)(P,{card:e},t)})):(l=i.dealer_cards.slice(1,2).map((function(e,t){return Object(y.jsx)(P,{card:e},t)})),c=Object(y.jsx)("div",{children:Object(y.jsx)("img",{src:"https://i.ibb.co/0Zt2Y9S/card.png",className:"img-fluid",alt:""})}),a=Object(y.jsxs)(n.Fragment,{children:[c,l]}));return r=Object(y.jsxs)(n.Fragment,{children:[Object(y.jsx)("p",{style:{textAlign:"center",color:"white",margin:0},children:"Dealer Cards"}),e.isStand?Object(y.jsxs)("p",{className:"m-1",style:{textAlign:"center",color:"white",margin:0},children:["Dealer cards value: ",i.dealer_cards_value]}):null,Object(y.jsx)("div",{className:"d-flex justify-content-center",children:a}),Object(y.jsx)("p",{style:{textAlign:"center",color:"white",margin:0},children:"Player Cards"}),Object(y.jsxs)("p",{className:"m-1",style:{textAlign:"center",color:"white",margin:0},children:["Player cards value: ",i.player_cards_value]}),Object(y.jsx)("div",{className:"d-flex justify-content-center",children:t}),Object(y.jsxs)("div",{className:"d-flex justify-content-center",children:[Object(y.jsx)("button",{className:"btn btn-light mr-2",disabled:!!e.isStand||(!!e.onEndRound||!!b),onClick:function(){return j(!0)},children:"Hit"}),Object(y.jsx)("button",{className:"btn btn-light mr-2",disabled:!!e.isStand||!!e.onEndRound,onClick:function(){return e.onIsStandChange()},children:"Stand"}),Object(y.jsx)("button",{className:"btn btn-light mr-2",disabled:!!e.isStand||(!!e.onEndRound||(i.player_cards.length>2||!(i.bank>=i.bet))),onClick:function(){return function(e){try{e({type:"SET_DOUBLE_BET"})}catch(t){}}(d),C(1,i.deck_id,d,"SET_PLAYER_CARDS",i.player_cards_value),void e.onIsStandChange()},children:"Double Down"}),Object(y.jsx)("button",{className:"btn btn-light mr-2",disabled:!!e.isStand||!!e.onEndRound,onClick:function(){return function(e,t){try{R(e),e({type:"SET_BANK",payload:1e3}),v(e),e({type:"SET_IS_PLAYING",payload:!1}),S(t)}catch(a){}}(d,i.deck_id)},children:"Reset"})]})]}),Object(y.jsx)(n.Fragment,{children:r})},G=function(e){var t=n.useState(e),a=Object(s.a)(t,2),c=a[0],r=a[1];return{message:c,showMessage:function(e){r(e),window.setTimeout((function(){r(null)}),2e3)}}},w=function(e){var t,a=E("game"),c=h(),r=G(null),l=r.message,i=r.showMessage,d=Object(n.useState)(a.bank),o=Object(s.a)(d,2),u=o[0],b=o[1],j=Object(n.useState)(a.bet),_=Object(s.a)(j,2),O=_[0],p=_[1],f=Object(n.useState)(!1),m=Object(s.a)(f,2),N=m[0],k=m[1],L=Object(n.useState)(!1),T=Object(s.a)(L,2),P=T[0],w=T[1],Y=function(e){u>=e&&(b(u-e),p(O+e))},U=function(){setTimeout((function(){w(!0),i("You won ".concat(O+1.5*O,"$")),k(!1)}),2e3),setTimeout((function(){w(!1),function(e,t,a){var n=a+(t+1.5*t);try{R(e),e({type:"SET_BANK",payload:n})}catch(c){}}(c,O,u),x(c,!1)}),4e3)},B=function(){setTimeout((function(){w(!0),i("You lost ".concat(O,"$")),k(!1)}),2e3),setTimeout((function(){w(!1),R(c),x(c,!1)}),4e3)},K=function(){setTimeout((function(){w(!0),i("You draw"),k(!1)}),2e3),setTimeout((function(){w(!1),function(e,t,a){var n=a+t;try{R(e),e({type:"SET_BANK",payload:n})}catch(c){}}(c,O,u),x(c,!1)}),4e3)};return Object(n.useEffect)((function(){""===a.deck_id&&function(e){try{g.get("new/shuffle/?deck_count=6").then((function(t){var a=t.data;e({type:"SET_DECK",payload:a.deck_id})})).catch((function(e){}))}catch(t){}}(c)}),[]),Object(n.useEffect)((function(){a.isPlaying||5!==a.round||(S(a.deck_id),function(e,t){try{e({type:"ADD_RESULT",payload:t}),localStorage.removeItem("lastGame"),e({type:"SET_BANK",payload:1e3})}catch(a){console.log("tryCatch setGame BLAD "+a)}}(c,a.bank),A(c),v(c),e.onSetLastGame(),e.changeOpenRanking())}),[a.isPlaying]),Object(n.useEffect)((function(){b(a.bank),p(a.bet)}),[a.bet,a.bank]),Object(n.useEffect)((function(){21===a.player_cards_value?(k(!0),a.player_cards_value!==a.dealer_cards_value?U():K()):a.player_cards_value>21&&(k(!0),B())}),[a.player_cards_value]),Object(n.useEffect)((function(){N&&a.player_cards_value<21&&(a.dealer_cards_value<17&&a.dealer_cards_value<a.player_cards_value?C(1,a.deck_id,c,"SET_DEALER_CARDS",a.dealer_cards_value):a.dealer_cards_value<a.player_cards_value?U():a.player_cards_value===a.dealer_cards_value?K():B(),a.dealer_cards_value>21&&(k(!0),U()))}),[a.dealer_cards_value,N]),Object(n.useEffect)((function(){a.bank<25&&!a.isPlaying&&!N&&(setTimeout((function(){w(!0),i("You Lost")}),1e3),setTimeout((function(){w(!1),localStorage.removeItem("lastGame"),S(a.deck_id),A(c),v(c),e.onSetLastGame(),function(e){try{e({type:"SET_BANK",payload:1e3})}catch(t){}}(c)}),3e3))}),[a.isPlaying]),Object(n.useEffect)((function(){a.isPlaying&&!e.isContinue&&(C(2,a.deck_id,c,"SET_PLAYER_CARDS",a.player_cards_value),C(2,a.deck_id,c,"SET_DEALER_CARDS",a.dealer_cards_value),function(e,t,a){try{e({type:"SET_BET",payload:t}),e({type:"SET_BANK",payload:a}),e({type:"CHANGE_ROUND"})}catch(n){e({type:"SET_IS_PLAYING",payload:!1})}}(c,O,u))}),[a.isPlaying,e.isContinue]),a.isPlaying||(t=Object(y.jsx)(n.Fragment,{children:Object(y.jsxs)("div",{className:"d-flex justify-content-center",children:[u<=500?Object(y.jsx)("button",{className:"btn btn-light mr-2",disabled:u<25,onClick:function(){return Y(25)},children:"25$"}):null,Object(y.jsx)("button",{className:"btn btn-light mr-2",disabled:u<50,onClick:function(){return Y(50)},children:"50$"}),Object(y.jsx)("button",{className:"btn btn-light mr-2",disabled:u<100,onClick:function(){return Y(100)},children:"100$"}),u>500?Object(y.jsx)("button",{className:"btn btn-light mr-2",disabled:u<500,onClick:function(){return Y(500)},children:"500$"}):null,Object(y.jsx)("button",{className:"btn btn-light mr-2",onClick:function(){return b(u+O),void p(0)},children:"Clear Bet"}),Object(y.jsx)("button",{className:"btn btn-light mr-2",disabled:O<=0||!!a.isPlaying,onClick:function(){return x(c,!0)},children:"PLAY"})]})})),a.dealer_cards.length&&a.player_cards,a.isPlaying&&a.dealer_cards.length&&a.player_cards&&(t=Object(y.jsx)(I,{onIsStandChange:function(){return k(!N)},isStand:N,onEndRound:P})),Object(y.jsx)("div",{className:"game d-flex justify-content-center align-items-center",children:Object(y.jsxs)("div",{className:"container",children:[Object(y.jsxs)("div",{className:"d-flex justify-content-center",children:[Object(y.jsxs)("p",{className:"m-1",style:{color:"white"},children:["BANK: ",u,"$"]}),Object(y.jsxs)("p",{className:"m-1",style:{color:"white"},children:["BET: ",0===a.bet?O:a.bet,"$"]}),a.isPlaying?Object(y.jsxs)("p",{className:"m-1",style:{color:"white"},children:["Round: ",a.round]}):null]}),t,P?Object(y.jsx)(D,{onOpenRanking:!0,changeOpenRanking:function(){},children:Object(y.jsx)("p",{style:{textAlign:"center"},children:l})}):null]})})},Y=function(e){return Object(y.jsx)(n.Fragment,{children:Object(y.jsxs)("li",{className:"list-group-item d-flex justify-content-between align-items-center",children:["Rank ",e.index+1,Object(y.jsxs)("span",{className:"badge badge-primary badge-pill",children:[e.rank,"$"]})]})})},U=function(e){var t=E("game"),a=E("ranking"),c=h(),r=Object(n.useState)(!1),i=Object(s.a)(r,2),d=i[0],o=i[1],u=Object(n.useState)(!1),b=Object(s.a)(u,2),j=b[0],_=b[1],O=Object(n.useState)({bank:0,bet:0,dealer_cards:[],dealer_cards_value:0,deck_id:"",isPlaying:!1,isStarted:!1,player_cards:[],player_cards_value:0,round:0}),p=Object(s.a)(O,2),f=p[0],m=p[1];window.addEventListener("beforeunload",(function(e){return e.preventDefault(),localStorage.setItem("lastGame",JSON.stringify(t)),localStorage.setItem("ranking",JSON.stringify(a.bestResults)),e.returnValue="ASDASDAD"})),Object(n.useEffect)((function(){var e=localStorage.getItem("lastGame");m(JSON.parse(e))}),[]),Object(n.useEffect)((function(){var e=localStorage.getItem("ranking");!function(e,t){try{e({type:"SET_RANKING",payload:t})}catch(a){console.log("tryCatch setGame BLAD "+a)}}(c,JSON.parse(e))}),[]);var g,S=a.bestResults.sort((function(e,t){return t-e}));g=0===S.length?Object(y.jsx)("p",{style:{textAlign:"center",margin:0},children:"No results"}):S.slice(0,10).map((function(e,t){return Object(y.jsx)(Y,{rank:e,index:t},t)}));var v=Object(y.jsx)(D,{onOpenRanking:d,changeOpenRanking:function(){return o(!d)},children:Object(y.jsxs)(n.Fragment,{children:[Object(y.jsx)("div",{className:"d-flex justify-content-center",children:Object(y.jsx)("h1",{style:{textAlign:"center"},children:"TOP HISTORIC RESULTS"})}),Object(y.jsx)("ul",{className:"list-group",children:g})]})});return Object(y.jsx)(n.Fragment,{children:t.isStarted?Object(y.jsx)(w,{isContinue:j,onSetLastGame:function(){return m(Object(l.a)(Object(l.a)({},f),{},{bank:0,bet:0,dealer_cards:[],dealer_cards_value:0,deck_id:"",isPlaying:!1,isStarted:!1,player_cards:[],player_cards_value:0,round:0}))},changeOpenRanking:function(){return o(!d)}}):Object(y.jsxs)("div",{className:"mainPage container-fluid d-flex justify-content-center align-items-center",children:[v,Object(y.jsx)("button",{className:"btn btn-light mt-6 mr-2",onClick:function(){return A(c)},children:"New Game"}),Object(y.jsx)("button",{className:"btn btn-light mt-6 mr-2 ml-2",onClick:function(){return o(!d)},children:"Ranking"}),0!==f.round?Object(y.jsx)("button",{className:"btn btn-light mt-6 ml-2",onClick:function(){!function(e,t){try{e({type:"SET_CONTINUE_GAME",payload:t})}catch(a){}}(c,f),_(!0)},children:"Continue"}):null]})})},B=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,426)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,l=t.getTTFB;a(e),n(e),c(e),r(e),l(e)}))};r.a.render(Object(y.jsx)(n.StrictMode,{children:Object(y.jsx)(f,{children:Object(y.jsx)(U,{})})}),document.getElementById("root")),B()}},[[409,1,2]]]);
//# sourceMappingURL=main.6ad619dc.chunk.js.map