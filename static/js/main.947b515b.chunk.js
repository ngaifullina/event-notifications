(this["webpackJsonpevent-notifications"]=this["webpackJsonpevent-notifications"]||[]).push([[0],{10:function(e,t,n){e.exports={wrapper:"Bell_wrapper__-tasY",icon:"Bell_icon__1zYLu",number:"Bell_number__IAy9c"}},2:function(e,t,n){e.exports={row:"Controls_row__2Q9VR",wrapper:"Controls_wrapper__1jW7z",value:"Controls_value__1IBz_",button:"Controls_button__1GjiO",button__small:"Controls_button__small__1AOcu",textbox:"Controls_textbox__2eUo0"}},28:function(e,t,n){},4:function(e,t,n){e.exports={row:"Notifications_row__2LMP4",name:"Notifications_name__2RNhD",item:"Notifications_item__3fOb_",time:"Notifications_time__1qWu2",link:"Notifications_link__1286Q"}},43:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(8),r=n.n(c),s=(n(28),n(18)),i=n(19),l=n(23),u=n(22),v=n(9),d=n(20),h=Object(v.b)({name:"events",initialState:{events:[],readCount:0,popoverOpen:!1},reducers:{addEvent:function(e,t){e.events.unshift({name:t.payload,timestamp:Date.now()})},deleteEvents:function(e){e.events=[],e.readCount=0},markEventsRead:function(e){e.readCount=e.events.length},loadRandomSentence:function(e){e.events.unshift({name:d({words:5}),timestamp:Date.now()})},togglePopover:function(e){e.popoverOpen=!e.popoverOpen}}}),m=h.actions,p=m.addEvent,b=m.deleteEvents,j=m.markEventsRead,f=m.loadRandomSentence,_=m.togglePopover,O=function(e){return e.events.events},x=function(e){return e.events.readCount},g=function(e){return e.events.popoverOpen},N=h.reducer,k=n(3),C=n(2),E=n.n(C),w=n(1),M=Object(k.b)(null,{addEvent:p,deleteEvents:b,markEventsRead:j,loadRandomSentence:f,togglePopover:_})(function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).interval=void 0,a.submitEvent=function(){a.state.eventName.length&&(a.props.addEvent(a.state.eventName),a.setState({eventName:""}))},a.handleTogglePopoverClick=function(){a.props.togglePopover()},a.handleInputChange=function(e){a.setState({eventName:e.target.value})},a.handleEnterPress=function(e){"Enter"===e.key&&a.submitEvent()},a.handleDeleteEventsClick=function(){a.props.deleteEvents()},a.handleMarkEventsReadClick=function(){a.props.markEventsRead()},a.state={eventName:""},a.interval=null,a}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.interval=setInterval((function(){return e.props.loadRandomSentence()}),this.props.autoEventIntervalMills)}},{key:"componentWillUnmount",value:function(){this.interval&&clearInterval(this.interval)}},{key:"render",value:function(){return Object(w.jsx)("div",{className:E.a.wrapper,children:Object(w.jsxs)("div",{className:E.a.row,children:[Object(w.jsxs)("div",{children:[Object(w.jsx)("input",{className:E.a.textbox,"aria-label":"Set increment amount",value:this.state.eventName,onChange:this.handleInputChange,onKeyPress:this.handleEnterPress,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0441\u043e\u0431\u044b\u0442\u0438\u044f.."}),Object(w.jsx)("button",{className:"".concat(E.a.button," ").concat(E.a.button__small),onClick:this.submitEvent,children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})]}),Object(w.jsx)("button",{className:E.a.button,onClick:this.handleMarkEventsReadClick,children:"\u041f\u043e\u043c\u0435\u0442\u0438\u0442\u044c \u0432\u0441\u0435 \u0441\u043e\u0431\u044b\u0442\u0438\u044f \u043f\u0440\u043e\u0447\u0438\u0442\u0430\u043d\u043d\u044b\u043c\u0438"}),Object(w.jsx)("button",{className:E.a.button,onClick:this.handleDeleteEventsClick,children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0432\u0441\u0435 \u0441\u043e\u0431\u044b\u0442\u0438\u044f"}),Object(w.jsx)("button",{className:E.a.button,onClick:this.handleTogglePopoverClick,children:"\u0421\u043a\u0440\u044b\u0442\u044c/\u043f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u043f\u043e\u043f\u0430\u043f \u043d\u043e\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0439"})]})})}}]),n}(o.a.Component)),R=function(){return Object(k.c)()},P=k.d,y=n(4),I=n.n(y),S=6e4,D=36e5,B=864e5,W=26298e5;function A(e,t){var n=t-e;switch(!0){case n<S:return"\u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0441\u0435\u043a\u0443\u043d\u0434 \u043d\u0430\u0437\u0430\u0434";case n>S&&n<12e4:return"1 \u043c\u0438\u043d\u0443\u0442\u0443 \u043d\u0430\u0437\u0430\u0434";case n>=12e4&&n<3e5:return"".concat(Math.floor(n/S)," \u043c\u0438\u043d\u0443\u0442\u044b \u043d\u0430\u0437\u0430\u0434");case n>=3e5&&n<D:return"".concat(Math.floor(n/S)," \u043c\u0438\u043d\u0443\u0442 \u043d\u0430\u0437\u0430\u0434");case n>D&&n<2*D:return"1 \u0447\u0430\u0441 \u043d\u0430\u0437\u0430\u0434";case n>=2*D&&n<5*D:return"".concat(Math.floor(n/D)," \u0447\u0430\u0441\u0430 \u043d\u0430\u0437\u0430\u0434");case n>=5*D&&n<B:return"".concat(Math.floor(n/D)," \u0447\u0430\u0441\u043e\u0432 \u043d\u0430\u0437\u0430\u0434");case n>B&&n<2*B:return"1 \u0434\u0435\u043d\u044c \u043d\u0430\u0437\u0430\u0434";case n>=2*B&&n<5*B:return"".concat(Math.floor(n/B)," \u0434\u043d\u044f \u043d\u0430\u0437\u0430\u0434");case n>=5*B&&n<W:return"".concat(Math.floor(n/B)," \u0434\u043d\u0435\u0439 \u043d\u0430\u0437\u0430\u0434");case n>=W&&n<2*W:return"1 \u043c\u0435\u0441\u044f\u0446 \u043d\u0430\u0437\u0430\u0434";case n>=2*W&&n<5*W:return"".concat(Math.floor(n/W)," \u043c\u0435\u0441\u044f\u0446\u0430 \u043d\u0430\u0437\u0430\u0434");case n>=5*W&&n<315576e5:return"".concat(Math.floor(n/W)," \u043c\u0435\u0441\u044f\u0446\u0435\u0432 \u043d\u0430\u0437\u0430\u0434")}}var z=n(10),J=n.n(z);function L(){var e=P(O),t=P(x),n=e.length-t,a=R();return Object(w.jsxs)("div",{className:J.a.wrapper,onClick:function(){a(_())},children:[Object(w.jsx)("img",{src:"bell.png",alt:"",className:J.a.icon}),0!==n&&Object(w.jsx)("div",{className:J.a.number,children:n})]})}function Q(e){var t=P(O),n=P(g),a=R();return Object(w.jsxs)("div",{children:[Object(w.jsx)(L,{}),n&&!!t.length&&Object(w.jsxs)("div",{className:I.a.row,children:[t.slice(0,e.popoverEventsCount).map((function(e,t){return Object(w.jsxs)("div",{className:I.a.item,children:[Object(w.jsx)("div",{className:I.a.name,children:e.name}),Object(w.jsx)("div",{className:I.a.time,children:A(e.timestamp,(new Date).getMilliseconds())})]},"".concat(e.name,"_").concat(t))})),t.length>5&&Object(w.jsx)("button",{className:I.a.link,onClick:function(){a(_())},children:"\u043f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0432\u0441\u0435..."})]}),0===t.length&&n&&Object(w.jsx)("div",{className:I.a.row,children:"\u041d\u0435\u0442 \u0441\u043e\u0431\u044b\u0442\u0438\u0439"})]})}n(43);var T=function(){return Object(w.jsxs)("div",{className:"App",children:[Object(w.jsx)("header",{className:"App-header",children:Object(w.jsx)(Q,{popoverEventsCount:5})}),Object(w.jsx)(M,{autoEventIntervalMills:2e3})]})},U=Object(v.a)({reducer:{events:N}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(Object(w.jsx)(o.a.StrictMode,{children:Object(w.jsx)(k.a,{store:U,children:Object(w.jsx)(T,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[44,1,2]]]);
//# sourceMappingURL=main.947b515b.chunk.js.map