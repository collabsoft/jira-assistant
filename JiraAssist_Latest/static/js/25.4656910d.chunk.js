(this["webpackJsonpjira-assistant"]=this["webpackJsonpjira-assistant"]||[]).push([[25],{253:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m})),n.d(t,"c",(function(){return h})),n.d(t,"d",(function(){return b})),n.d(t,"e",(function(){return y})),n.d(t,"f",(function(){return g})),n.d(t,"g",(function(){return k})),n.d(t,"h",(function(){return j})),n.d(t,"i",(function(){return S})),n.d(t,"j",(function(){return N})),n.d(t,"k",(function(){return A})),n.d(t,"l",(function(){return x})),n.d(t,"m",(function(){return U}));var r=n(5),a=n(6),o=n(15),i=n(16),c=n(2),s=n.n(c),l=function(e){Object(o.a)(n,e);var t=Object(i.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){var e=this.props,t=e.tag,n=void 0===t?"td":t,r=e.className,a=e.settings,o=e.count,i=!!o&&!(null===a||void 0===a||!a.showGroupCount)&&s.a.createElement("span",{className:"badge badge-info margin-l-5",title:"Total issues in group: ".concat(o)},"(",o,")");return s.a.createElement(n,{className:r},this.renderControl(i))}}]),n}(c.PureComponent),u=function(e){Object(o.a)(n,e);var t=Object(i.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"renderControl",value:function(){var e=this.props.value;return null!==e&&void 0!==e&&e.length?"".concat(e.length," comments"):null}}]),n}(l),f=n(46),d=n(35),m=function(e){Object(o.a)(n,e);var t=Object(i.a)(n);function n(e){var a;return Object(r.a)(this,n),a=t.call(this,e),Object(d.b)(Object(f.a)(a),"UserUtilsService"),a}return Object(a.a)(n,[{key:"renderControl",value:function(e){var t=this.props,n=t.value,r=t.date,a=void 0===r?n:r,o=t.quick;return a?null!==n&&void 0!==n&&n.text?s.a.createElement(s.a.Fragment,null,n.text," ",e):s.a.createElement("span",{title:o?this.$userutils.formatDateTime(a):null},o&&"about "," ",this.$userutils.formatDateTime(a,o?"quick":null)):e}}]),n}(l),p=n(9),v=n(242),h=function(e){Object(o.a)(n,e);var t=Object(i.a)(n);function n(e){var a;return Object(r.a)(this,n),a=t.call(this),e.getTicketUrl?a.getTicketUrl=e.getTicketUrl:(Object(p.a)(Object(f.a)(a),"UserUtilsService"),a.getTicketUrl=a.$userutils.getTicketUrl),a}return Object(a.a)(n,[{key:"renderControl",value:function(e){var t,n=this.props,r=n.value,a=n.issue,o=void 0===a?r:a,i=n.title,c=n.className,l=n.settings;if(!o)return e;if("string"===typeof o)return o;var u=o.key,f=o.fields,d=null===f||void 0===f?void 0:f.issuetype,m=null===f||void 0===f?void 0:f.summary,p=null===d||void 0===d?void 0:d.iconUrl,h=null===d||void 0===d?void 0:d.name,b=null===f||void 0===f||null===(t=f.status)||void 0===t?void 0:t.name;b=!!b&&!1!==(null===l||void 0===l?void 0:l.showStatus)&&"(".concat(b,")");var y=null===l||void 0===l?void 0:l.valueType,g=u||"Unknown";return"summary"===y?g=m:"both"===y&&(g=s.a.createElement(s.a.Fragment,null,g," - ",m)),s.a.createElement("a",{href:this.getTicketUrl(u),title:i,rel:"noopener noreferrer",className:"link ".concat(c),target:"_blank"},!!p&&s.a.createElement(v.f,{src:p,title:h}),s.a.createElement("span",{title:m},g," ",b),e)}}]),n}(l),b=function(e){Object(o.a)(n,e);var t=Object(i.a)(n);function n(){var e;return Object(r.a)(this,n),e=t.call(this),Object(p.a)(Object(f.a)(e),"UserUtilsService"),e}return Object(a.a)(n,[{key:"renderControl",value:function(){var e=this.props.value;if(null===e||void 0===e||!e.length)return null;var t=this.$userutils.getTicketUrl;return s.a.createElement("ul",{className:"tags"},e.map((function(e,n){var r=e.type,a=r&&(e.inwardIssue?r.inward:r.outward);return s.a.createElement("li",{key:n},s.a.createElement(h,{tag:"span",issue:r?e.inwardIssue||e.outwardIssue:e,title:a,getTicketUrl:t,className:"badge badge-pill skin-bg-font"}))})))}}]),n}(l),y=function(e){Object(o.a)(n,e);var t=Object(i.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"renderControl",value:function(e){var t=this.props,n=t.value,r=t.textField,a=void 0===r?"name":r,o=t.iconField,i=void 0===o?"iconUrl":o;return n?s.a.createElement(s.a.Fragment,null,!!i&&s.a.createElement(v.f,{src:n[i]}),n[a]," ",e):e}}]),n}(l),g=function(e){Object(o.a)(n,e);var t=Object(i.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"renderControl",value:function(){var e=this.props,t=e.value,n=e.progress,r=void 0===n?t:n;return null!==r&&void 0!==r&&r.percent?"".concat(r.percent,"%"):null}}]),n}(l),k=function(e){Object(o.a)(n,e);var t=Object(i.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"renderControl",value:function(e){var t,n=this.props,r=n.value,a=n.project,o=void 0===a?r:a,i=n.settings;if(!o)return e;if("string"===typeof o)return o;var c=null===(t=o.avatarUrls)||void 0===t?void 0:t["16x16"],l=null===i||void 0===i?void 0:i.valueType,u=o.key;return"name"===l?u=o.name:"both"===l&&(u=s.a.createElement(s.a.Fragment,null,o.name," (",o.key,")")),s.a.createElement(s.a.Fragment,null,!!c&&s.a.createElement(v.f,{src:c}),u,e)}}]),n}(l),E=n(12),w=n(10),O=/^com\..*\[.*\].*$/,j=function(e){Object(o.a)(n,e);var t=Object(i.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"getRepeator",value:function(e){var t=this.props,n=t.tagProp,r=void 0===n?"name":n,a=t.titleProp,o=t.iconClass,i=t.hrefProp,c=t.hideZero,l=!!o&&s.a.createElement("span",{className:"fa ".concat(o)});return i?function(t,n){var o="string"===typeof t?t:t[r];if(0===o&&c)return null;var u=s.a.createElement("a",{href:t[i]||void 0,title:a?t[a]:void 0,rel:"noopener noreferrer",target:"_blank",className:"link badge badge-pill skin-bg-font"},l," ",o);return e?u:s.a.createElement("li",{key:n},u)}:function(t,n){var o=t;if("string"===typeof t)O.test(t)&&(o=(t=Object(w.g)(t))[r||"name"]||o);else if(0===(o=t[r])&&c)return null;var i=s.a.createElement("span",{title:a?t[a]:void 0,className:"badge badge-pill skin-bg-font"},l," ",o);return e?i:s.a.createElement("li",{key:n},i)}}},{key:"renderControl",value:function(){var e=this.props.value;return e?Array.isArray(e)?s.a.createElement("ul",{className:"tags"},e.map(this.getRepeator())):"object"===Object(E.a)(e)?this.getRepeator(!0)(e,0):void 0:null}}]),n}(l),C=n(32),S=function(e){Object(o.a)(n,e);var t=Object(i.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).showContext=function(e){Object(C.showContextMenu)(e,a.contextMenu)},Object(p.a)(Object(f.a)(a),"UserUtilsService","BookmarkService"),a.contextMenu=[!e.hideWorklog&&{label:"Add worklog",icon:"fa fa-clock-o",command:function(){return e.onAddWorklog(e.value)}},{label:"Bookmark",icon:"fa fa-bookmark",command:function(){return a.addBookmark()}}].filter(Boolean),a}return Object(a.a)(n,[{key:"renderControl",value:function(e){var t=this.props,n=t.value,r=t.url,a=void 0===r?this.$userutils.getTicketUrl(n):r,o=t.hideContext;return n?s.a.createElement(s.a.Fragment,null,!o&&s.a.createElement("i",{className:"fa fa-ellipsis-v margin-r-8",onClick:this.showContext}),s.a.createElement("a",{href:a,className:"link strike",target:"_blank",rel:"noopener noreferrer"},n),e):e}},{key:"addBookmark",value:function(){var e=this.props,t=e.value,n=e.onBookmark;this.$bookmark.addBookmark([t],!n).then(n)}}]),n}(l),N=function(e){Object(o.a)(n,e);var t=Object(i.a)(n);function n(e){var a;return Object(r.a)(this,n),a=t.call(this,e),Object(p.a)(Object(f.a)(a),"UtilsService"),a}return Object(a.a)(n,[{key:"renderControl",value:function(e){var t,n=this.props,r=n.value,a=n.inputType,o=void 0===a?"secs":a,i=n.days,c=n.converter,l=this.props.timespent,u=void 0===l?r:l;return c&&(u=c(u)),u?("ticks"===o&&u>500&&(u=parseInt(u/1e3)),u=null!==(t=u)&&void 0!==t&&t.text?u.text:this.$utils.formatSecs(u,void 0,void 0,i),s.a.createElement("span",null,u," ",e)):e}}]),n}(l),A=function(e){Object(o.a)(n,e);var t=Object(i.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"renderControl",value:function(){var e=this.props.value;if(!e)return null;var t=e.remainingEstimate,n=e.timeSpent;return n||t?s.a.createElement("span",null,n," (",t," remaining)"):null}}]),n}(l),x=function(e){Object(o.a)(n,e);var t=Object(i.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"renderControl",value:function(e){var t,n=this.props.value;return n?(n=(null===(t=n)||void 0===t?void 0:t.text)||n,"object"!==Object(E.a)(n)?s.a.createElement(s.a.Fragment,null,n," ",e):Array.isArray(n)?n.length?this.getTagRenderer(n[0],n):null:this.getTagRenderer(n,n)):e}},{key:"getTagRenderer",value:function(e,t){return e.value?s.a.createElement(j,{value:t,tagProp:"value",tag:"span"}):e.name?s.a.createElement(j,{value:t,tagProp:"name",tag:"span"}):JSON.stringify(e)}}]),n}(l),U=function(e){Object(o.a)(n,e);var t=Object(i.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"renderControl",value:function(e){var t,n,r=this.props,a=r.value,o=r.user,i=void 0===o?a:o,c=r.settings;if(!i)return e;if("string"===typeof i)return i;var l=!(null===c||void 0===c||!c.showImage)&&((null===(t=i.avatarUrls)||void 0===t?void 0:t["32x32"])||(null===(n=i.avatarUrls)||void 0===n?void 0:n["48x48"])),u=null===c||void 0===c?void 0:c.valueType,f=i.displayName;return"email"===u?f=i.emailAddress:"both"===u&&(f=s.a.createElement(s.a.Fragment,null,i.displayName," (",i.emailAddress,")")),s.a.createElement(s.a.Fragment,null,!!l&&s.a.createElement(v.f,{className:"img-x32",src:l}),f,e)}}]),n}(l)},517:function(e,t){e.exports="data:image/png;base64,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"},518:function(e,t,n){},519:function(e,t,n){},862:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n.n(r),o=n(68),i=n(846),c=n(848),s=n(864),l=n(865),u=n(845),f=n(847),d=n(11),m=n.n(d),p=n(398),v=n(517),h=n.n(v),b=n(1),y=(n(518),n(9)),g=n(5),k=n(6),E=n(243),w=n(37),O=n(15),j=n(16),C=n(247),S=[{videoId:"xNYNXWUgCeA",module:"Dashboard",route:"dashboard"},{videoId:"TxNH1HQtiX0",module:"Worklog report",route:"userdaywise"},{videoId:"6hAOtUm1lUk",module:"Worklog import",route:"import/worklog"},{videoId:"EFgXFqrGuTI",module:"Issue import",route:"import/issue"},{videoId:"HMyBkaZ09Xw",module:"Report builder",route:"advanced"}],N=[{startAt:290,videoId:"f2aBSXzbYuA",module:"Calendar",route:"calendar"},{startAt:713,videoId:"f2aBSXzbYuA",module:"Custom report",route:"customgrouped"},{startAt:1069,videoId:"f2aBSXzbYuA",module:"Settings",route:"settings"},{startAt:1147,videoId:"f2aBSXzbYuA",module:"Feedback",route:"feedback"}],A=function(e){Object(O.a)(n,e);var t=Object(j.a)(n);function n(e){var r;return Object(g.a)(this,n),(r=t.call(this,e)).playPrev=function(){var e=r.state.index;e-=1;var t=r.getVideoUrl(r.videoList[e],"Video view previous");r.setState({url:t,index:e})},r.playNext=function(){var e=r.state.index;e+=1;var t=r.getVideoUrl(r.videoList[e],"Video view next");r.setState({url:t,index:e})},r.style={width:"87vw",height:"95vh"},r.className="video-help",r.videoList=[].concat(S),r.setVideoUrl(),r}return Object(k.a)(n,[{key:"setVideoUrl",value:function(){var e=document.location.hash.substring(2),t=S.first((function(t){return~e.indexOf(t.route)}));t||((t=N.first((function(t){return~e.indexOf(t.route)})))||(t=N[0]),this.videoList.push(t)),this.state.url=this.getVideoUrl(t),this.state.index=this.videoList.indexOf(t)}},{key:"getVideoUrl",value:function(e,t){return this.$analytics.trackEvent(t||"Video help viewed",b.i.HeaderActions,"Video Help: ".concat(e.module)),"https://www.youtube.com/embed/".concat(e.videoId,"?rel=0&autoplay=1&showinfo=0&cc_load_policy=1&start=").concat(e.startAt||0)}},{key:"render",value:function(){var e=this.state,t=e.url,r=e.index;return Object(E.a)(Object(w.a)(n.prototype),"renderBase",this).call(this,a.a.createElement("div",{className:"video-help"},r>0&&a.a.createElement("div",{className:"nav-icon left",onClick:this.playPrev},a.a.createElement("span",{className:"fa fa-angle-left",title:"Play previous video"})),a.a.createElement("iframe",{src:t,id:"ifVideoHelp",title:"Video Help",style:{width:"87vw",height:"95vh"},frameBorder:0,allowFullScreen:!0}),r+1<this.videoList.length&&a.a.createElement("div",{className:"nav-icon right",onClick:this.playNext},a.a.createElement("span",{className:"fa fa-angle-right",title:"Play next video"}))))}}]),n}(C.a),x=n(22),U=n.n(x);function R(e){return(R="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function P(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function I(e,t){return(I=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function T(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=L(e);if(t){var a=L(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return B(this,n)}}function B(e,t){return!t||"object"!==R(t)&&"function"!==typeof t?F(e):t}function F(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function L(e){return(L=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var V=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&I(e,t)}(i,e);var t,n,r,o=T(i);function i(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(t=o.call(this,e)).skinSelected=function(e){var n=U()(e.currentTarget),r=n.attr("skin");t.setSkin(r),U()("#divSkins .selected").removeClass("selected"),n.addClass("selected")},Object(y.a)(F(t),"CacheService","AnalyticsService"),t.selectedSkin=t.$cache.get("skin",!0)||"skin-blue",t}return t=i,(n=[{key:"componentDidMount",value:function(){U()('#divSkins [skin="'.concat(this.selectedSkin,'"]')).addClass("selected")}},{key:"setSkin",value:function(e){var t=e;if(this.selectedSkin!==e){var n=U()("body");n.removeClass(this.selectedSkin),this.skinClass=t,this.selectedSkin=e,this.$cache.set("skin",e,!1,!0),n.addClass(this.selectedSkin),this.$analytics.trackEvent("Skin changed",b.i.HeaderActions,e)}}},{key:"render",value:function(){return a.a.createElement("div",{className:"skin-items",id:"divSkins"},a.a.createElement("div",{title:"blue",skin:"skin-blue",onClick:this.skinSelected,style:{borderColor:"#367fa9",backgroundColor:"#3c8dbc"}},"B"),a.a.createElement("div",{title:"purple",skin:"skin-purple",onClick:this.skinSelected,style:{borderColor:"#555299",backgroundColor:"#605ca8"}},"P"),a.a.createElement("div",{title:"violet",skin:"skin-violet",onClick:this.skinSelected,style:{borderColor:"#7a4889",backgroundColor:"#9055A2"}},"V"),a.a.createElement("div",{title:"sea",skin:"skin-sea",onClick:this.skinSelected,style:{borderColor:"#2d7776",backgroundColor:"#379392"}},"S"),a.a.createElement("div",{title:"green",skin:"skin-green",onClick:this.skinSelected,style:{borderColor:"#008d4c",backgroundColor:"#00a65a"}},"G"),a.a.createElement("div",{title:"green",skin:"skin-green2",onClick:this.skinSelected,style:{borderColor:"#2b954b",backgroundColor:"#33b35a"}},"G"),a.a.createElement("div",{title:"red",skin:"skin-red",onClick:this.skinSelected,style:{borderColor:"#d73925",backgroundColor:"#dd4b39"}},"R"),a.a.createElement("div",{title:"yellow",skin:"skin-yellow",onClick:this.skinSelected,style:{borderColor:"#e08e0b",backgroundColor:"#f39c12"}},"Y"),a.a.createElement("div",{title:"pink",skin:"skin-pink",onClick:this.skinSelected,style:{borderColor:"#ec2f6c",backgroundColor:"#ef5285"}},"P"),a.a.createElement("div",{title:"meadow",skin:"skin-meadow",onClick:this.skinSelected,style:{borderColor:"#1caf9a",backgroundColor:"#8cc1a2"}},"M"),a.a.createElement("div",{skin:"skin-blue2",onClick:this.skinSelected,style:{borderColor:"#557a95",backgroundColor:"#7395ae"}},"B"),a.a.createElement("div",{skin:"skin-cust8",onClick:this.skinSelected,style:{borderColor:"#64485c",backgroundColor:"#83677b"}},"M"),a.a.createElement("div",{skin:"skin-green3",onClick:this.skinSelected,style:{borderColor:"#40561a",backgroundColor:"#729a2e"}},"B"),a.a.createElement("div",{skin:"skin-cust2",onClick:this.skinSelected,style:{borderColor:"#5d5c61",backgroundColor:"#379683"}},"G"),a.a.createElement("div",{skin:"skin-cust5",onClick:this.skinSelected,style:{borderColor:"#7e685a",backgroundColor:"#afd275"}},"G"),a.a.createElement("div",{skin:"skin-cust3",onClick:this.skinSelected,style:{borderColor:"#ffe400",backgroundColor:"#747474"}},"G"))}}])&&P(t.prototype,n),r&&P(t,r),i}(r.PureComponent);V.propTypes={};var G=V,z=n(407),J=n(10),Y=n(35),D=n(249);function Q(e){return(Q="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function H(e,t){return(H=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function M(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=W(e);if(t){var a=W(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return X(this,n)}}function X(e,t){return!t||"object"!==Q(t)&&"function"!==typeof t?K(e):t}function K(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function W(e){return(W=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var Z=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&H(e,t)}(i,e);var t,n,r,o=M(i);function i(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),t=o.call(this,e),Object(y.a)(K(t),"UserUtilsService"),t}return t=i,(n=[{key:"getDescription",value:function(e,t){var n,r=e;return"object"===Q(e)&&(n=e.id,r=e.text),a.a.createElement("li",{key:t},!!n&&a.a.createElement("a",{href:"https://github.com/shridhar-tl/jira-assistant/issues/".concat(n),target:"_blank",rel:"noopener noreferrer"},"#",n," - "),r)}},{key:"render",value:function(){var e=this,t=this.props.updates;return a.a.createElement("div",{className:"release-history"},t.map((function(t,n){return a.a.createElement("div",{key:n,className:"release"},a.a.createElement("span",{className:"version-no"},t.version),t.publishDate&&a.a.createElement("span",null," (published: ",a.a.createElement("b",null,e.$userutils.formatDate(t.publishDate)),")"),!t.publishDate&&t.expectedOn&&a.a.createElement("span",null," (expected: ",a.a.createElement("b",null,e.$userutils.formatDate(t.expectedOn)),")"),a.a.createElement("span",{className:"changelog-header"},"Changelog:"),a.a.createElement("ul",{className:"changelogs"},t.whatsnew.map(e.getDescription)),t.bugs&&t.bugs.length>0&&a.a.createElement(a.a.Fragment,null,a.a.createElement("span",{className:"changelog-header"},"Bugs:"),a.a.createElement("ul",{className:"changelogs"},t.bugs.map(e.getDescription))))})))}}])&&_(t.prototype,n),r&&_(t,r),i}(r.PureComponent);function q(e){return(q="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function $(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ee(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function te(e,t,n){return t&&ee(e.prototype,t),n&&ee(e,n),e}function ne(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&re(e,t)}function re(e,t){return(re=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function ae(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=ce(e);if(t){var a=ce(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return oe(this,n)}}function oe(e,t){return!t||"object"!==q(t)&&"function"!==typeof t?ie(e):t}function ie(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ce(e){return(ce=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var se=function(e){ne(n,e);var t=ae(n);function n(e){var r;$(this,n),(r=t.call(this,e)).readMessage=function(e){var t=e.message,n=null;"versionInfo"===e.type&&(n={width:"600px"},t=a.a.createElement(Z,{updates:r.state.updates_info}));var o=function(){return r.markRead(e,!0)};D.b.alert(t,e.title,n).then(o,o)},r.markRead=function(e,t){if(!e.read){e.read=!0,r.$noti.markRead(e);var n=t?"Viewed":"Mark as read";r.trackAnalytics(e,n),r.setState((function(e){return{unread:(e.unread||1)-1}}))}},r.trackViewList=function(){var e=r.state,t=e.total,n=e.unread;r.$analytics.trackEvent("Messages: List viewed","Messages","Messages: Total: ".concat(t,", Unread: ").concat(n))},Object(Y.b)(ie(r),"NotificationService","AnalyticsService","UserUtilsService","UtilsService");var o=e.notifications,i=o.updates_info,c=o.list,s=o.total,l=o.unread;return r.state={updates_info:i,list:c,total:s,unread:l},r}return te(n,[{key:"trackAnalytics",value:function(e,t){this.$analytics.trackEvent(("versionInfo"===e.type?"Update Info: ":"Message: ")+t,"Messages","Message Id: ".concat(e.id))}},{key:"render",value:function(){var e=this,t=this.state,n=t.list,r=t.total,o=t.unread;return n&&n.length?a.a.createElement(c.a,{nav:!0,direction:"down"},a.a.createElement(s.a,{nav:!0,onClick:this.trackViewList},a.a.createElement("i",{className:"fa fa-bell"}),o>0&&a.a.createElement("span",{className:"badge badge-danger"},o)),a.a.createElement(l.a,{right:!0,className:"messages"},a.a.createElement(f.a,{header:!0,tag:"div"},a.a.createElement("div",{className:"text-center"},a.a.createElement("strong",null,"You have ",o||r," ",o?"unread":""," messages"))),n.map((function(t,n){return a.a.createElement(le,{key:n,message:t,onOpen:e.readMessage,onRead:e.markRead,cut:e.$utils.cut})})))):null}}]),n}(r.PureComponent),le=function(e){ne(n,e);var t=ae(n);function n(){var e;$(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).readMessage=function(){return e.props.onOpen(e.props.message)},e.markRead=function(){return e.props.onRead(e.props.message)},e}return te(n,[{key:"render",value:function(){var e=this.props,t=e.message,n=e.cut;return a.a.createElement(f.a,{tag:"div",title:"Click to view this message"},!t.read&&a.a.createElement("small",{className:"float-right mt-0",onClick:this.markRead,title:"Click to mark this message as read"},a.a.createElement("span",{className:"fa fa-eye mark-read"})),a.a.createElement("div",{className:"text-truncate".concat(t.read?"":" font-weight-bold"),onClick:this.readMessage},t.important&&a.a.createElement("span",{className:"fa fa-exclamation text-danger"})," ",t.title),a.a.createElement("div",{className:"small text-muted message",onClick:this.readMessage},n(t.message,175,!0)))}}]),n}(r.PureComponent),ue=(n(519),n(253));function fe(e){return(fe="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function de(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function me(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function pe(e,t,n){return t&&me(e.prototype,t),n&&me(e,n),e}function ve(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&he(e,t)}function he(e,t){return(he=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function be(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=ke(e);if(t){var a=ke(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return ye(this,n)}}function ye(e,t){return!t||"object"!==fe(t)&&"function"!==typeof t?ge(e):t}function ge(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ke(e){return(ke=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var Ee=function(e){ve(n,e);var t=be(n);function n(e){var r;return de(this,n),(r=t.call(this,e)).trackViewList=function(){var e=r.state.total;r.$analytics.trackEvent("Jira Updates: List viewed","Updates","Updates: Total: ".concat(e))},Object(Y.b)(ge(r),"JiraUpdatesService","AnalyticsService","UtilsService"),r.state={},r}return pe(n,[{key:"UNSAFE_componentWillMount",value:function(){var e=this;this.$jupdates.getRescentUpdates().then((function(t){e.setState(t)}))}},{key:"trackAnalytics",value:function(e,t){this.$analytics.trackEvent(("versionInfo"===e.type?"Update Info: ":"Message: ")+t,"Messages","Message Id: ".concat(e.id))}},{key:"render",value:function(){var e=this,t=this.state,n=t.list,r=t.total,o=t.ticketCount;return n&&n.length?a.a.createElement(c.a,{nav:!0,direction:"down"},a.a.createElement(s.a,{nav:!0,onClick:this.trackViewList},a.a.createElement("i",{className:"fa fa-comments"}),r>0&&a.a.createElement("span",{className:"badge badge-warning"},r)),a.a.createElement(l.a,{right:!0,className:"jira-notifications"},a.a.createElement(f.a,{header:!0,tag:"div"},a.a.createElement("div",{className:"text-center"},a.a.createElement("strong",null,"You have ",r," updates on ",o," issues"))),a.a.createElement("div",{className:"noti-messages"},n.map((function(t,n){return a.a.createElement(we,{key:n,message:t,cut:e.$utils.cut})}))))):null}}]),n}(r.PureComponent),we=function(e){ve(n,e);var t=be(n);function n(){return de(this,n),t.apply(this,arguments)}return pe(n,[{key:"render",value:function(){var e=this.props,t=e.message,n=e.cut;return a.a.createElement(f.a,{tag:"a",title:"Click to view this ticket in jira",href:t.href,target:"_blank"},a.a.createElement("div",{className:"text-truncate font-weight-bold",title:t.summary},t.key," - ",n(t.summary,100,!0)),t.updates.map((function(e,t){var n=e.date,r=e.author,o=e.field,i=e.fromString,c=e.toString;return a.a.createElement("div",{key:t,className:"small text-muted message"},a.a.createElement(ue.m,{tag:"span",className:"user-display",user:r}),a.a.createElement("span",null," updated ",o," from ",i," to ",c," "),a.a.createElement(ue.b,{tag:"span",className:"date-display",date:n,quick:!0}))})))}}]),n}(r.PureComponent);function Oe(e){return(Oe="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function je(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Ce(e,t){return(Ce=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Se(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=xe(e);if(t){var a=xe(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Ne(this,n)}}function Ne(e,t){return!t||"object"!==Oe(t)&&"function"!==typeof t?Ae(e):t}function Ae(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function xe(e){return(xe=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var Ue={children:m.a.node},Re=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Ce(e,t)}(m,e);var t,n,r,d=Se(m);function m(e){var t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,m),(t=d.call(this,e)).trackShare=function(){t.$analytics.trackEvent("Share option viewed",b.i.HeaderActions)},t.showYoutubeHelp=function(){return t.setState({showYoutubeVideo:!0})},t.hideYoutube=function(){return t.setState({showYoutubeVideo:!1})},t.showVersionInfo=function(e){var n;e.preventDefault();var r=null===(n=t.state.notifications)||void 0===n?void 0:n.updates_info;r&&D.b.alert(a.a.createElement(Z,{updates:r}),"Updates info",{width:"600px"}).then()},Object(y.a)(Ae(t),"AppBrowserService","CacheService","SessionService","NotificationService","AnalyticsService");var n=t.$session.CurrentUser;return t.disableNotification=n.disableDevNotification,t.disableJiraUpdates=n.disableJiraUpdates,t.userId=n.userId,t.currentJiraInstance=Object(J.b)(n.jiraUrl),t.state={versionNumber:b.d.toString()},t}return t=m,(n=[{key:"UNSAFE_componentWillMount",value:function(){var e=this;this.$noti.getNotifications().then((function(t){return e.setState({notifications:t})}),(function(e){console.log("Error fetching notifications: ",e)})),this.siteUrl="https://www.jiraassistant.com",this.ratingUrl=this.$jaBrowserExtn.getStoreUrl(!0),this.storeUrl=this.$jaBrowserExtn.getStoreUrl(),this.$jaBrowserExtn.getAppVersion().then((function(t){return e.setState({versionNumber:t})}));var t=encodeURIComponent('Check out "Jira Assistant" in web store'),n=encodeURIComponent('Check out "Jira Assistant", a open source extension / add-on for your browser from below url:'+"\n\nChrome users: ".concat(b.e,"?utm_source%3Dgmail#")+"\n\nFirefox users: ".concat(b.j)+"\n\nEdge users: ".concat(b.h)+"\n\nOpera users: ".concat(b.n)+"\n\nFor source code or to know more about the extension visit: ".concat(b.m)+"\n\n\nThis would help you to track your worklog and generate reports from Jira easily with lots of customizations. Also has lot more features like Google Calendar integration, Jira comment & meeting + worklog notifications, Worklog, Sprint and custom report generations, etc.."),r=encodeURIComponent(this.storeUrl);this.gMailShare="https://mail.google.com/mail/u/0/?view=cm&tf=1&fs=1&su=".concat(t,"&body=").concat(n),this.linkedInShare="https://www.linkedin.com/shareArticle?mini=true&url=".concat(r,"&title=").concat(t,"&summary=").concat(n,"&source="),this.fackbookShare="https://www.facebook.com/sharer/sharer.php?u=".concat(this.storeUrl,"&title=").concat(t,"&description=").concat(n),this.twitterShare="https://twitter.com/intent/tweet?text=".concat(n),this.$session.CurrentUser.hideDonateMenu&&document.body.classList.add("no-donation")}},{key:"logout",value:function(){this.$cache.clear(),window.close(),window.location.href="/index.html"}},{key:"render",value:function(){var e=this.ratingUrl,t=this.gMailShare,n=this.linkedInShare,r=this.fackbookShare,d=this.twitterShare,m=this.state,v=m.versionNumber,b=m.showYoutubeVideo,y=m.notifications;return a.a.createElement(a.a.Fragment,null,a.a.createElement(p.f,{className:"d-lg-none",display:"md",mobile:!0},a.a.createElement("span",{className:"fa fa-bars"})),a.a.createElement("a",{href:this.siteUrl,className:"navbar-brand",target:"_blank",rel:"noopener noreferrer"},a.a.createElement("img",{src:h.a,width:"24",height:"24",alt:"Jira Assistant",className:"navbar-brand-minimized"}),a.a.createElement("span",{className:"navbar-brand-full"},"Jira Assistant ",a.a.createElement("span",{className:"v-info badge badge-success",onClick:this.showVersionInfo},"v ",v))),a.a.createElement(p.f,{className:"d-md-down-none",display:"lg"},a.a.createElement("span",{className:"fa fa-bars"})),a.a.createElement(o.NavLink,{to:"/".concat(this.userId,"/contribute"),className:"btn-donate",title:"Would you like to contribute / compensate us for the effort we put in development of this tool? Click to know more"},a.a.createElement("img",{src:"/assets/donate.png",width:"145",className:"Donate us",alt:"Donate us"})),a.a.createElement(i.a,{className:"ml-auto",navbar:!0},a.a.createElement(i.a,{className:"d-md-down-none margin-r-5",navbar:!0},a.a.createElement(c.a,{nav:!0,direction:"down"},a.a.createElement(s.a,{nav:!0},a.a.createElement("span",{className:"nav-link pointer",title:"Currently connected to ".concat(this.currentJiraInstance,". Click to see more options.")}," ",a.a.createElement("span",{className:"fa fa-exchange"})," ",a.a.createElement("strong",null,this.currentJiraInstance))),a.a.createElement(l.a,{left:!0},a.a.createElement(z.a,{onLogout:this.props.onLogout})))),!this.disableJiraUpdates&&a.a.createElement(Ee,null),!this.disableNotification&&y&&a.a.createElement(se,{notifications:y}),a.a.createElement(u.a,{className:"d-md-down-none"},a.a.createElement("span",{className:"nav-link",onClick:this.showYoutubeHelp},a.a.createElement("i",{className:"fa fa-youtube-play"}))),a.a.createElement(c.a,{nav:!0,direction:"down"},a.a.createElement(s.a,{nav:!0},a.a.createElement("i",{className:"fa fa-adjust"})),a.a.createElement(l.a,{right:!0},a.a.createElement(G,null))),a.a.createElement(c.a,{nav:!0,direction:"down",onClick:this.trackShare},a.a.createElement(s.a,{nav:!0},a.a.createElement("i",{className:"fa fa-share-alt"})),a.a.createElement(l.a,{right:!0},a.a.createElement(f.a,{header:!0,tag:"div",className:"text-center"},a.a.createElement("strong",{className:"share-header-text"},"Share or rate this tool")),a.a.createElement("div",{className:"share-items"},a.a.createElement("a",{href:e,target:"_blank",rel:"noopener noreferrer",title:"Click to rate this tool or add a comment in chrome web store"},a.a.createElement("i",{className:"fa fa-star pull-left"})),a.a.createElement("a",{href:t,target:"_blank",rel:"noopener noreferrer",title:"Share with GMail"},a.a.createElement("i",{className:"fa fa-envelope pull-left"})),a.a.createElement("a",{href:n,target:"_blank",rel:"noopener noreferrer",title:"Share with Linked in"},a.a.createElement("i",{className:"fa fa-linkedin-square pull-left"})),a.a.createElement("a",{href:r,target:"_blank",rel:"noopener noreferrer",title:"Share with Facebook"},a.a.createElement("i",{className:"fa fa-facebook-square pull-left"})),a.a.createElement("a",{href:d,target:"_blank",rel:"noopener noreferrer",title:"Share with Twitter"},a.a.createElement("i",{className:"fa fa-twitter-square pull-left"}))))),a.a.createElement(u.a,{className:"d-md-down-none"},a.a.createElement(o.NavLink,{to:"/".concat(this.userId,"/feedback"),className:"nav-link"},a.a.createElement("i",{className:"fa fa-bug",title:"Report a bug or suggest a new feature"})))),b&&a.a.createElement(A,{onHide:this.hideYoutube}))}}])&&je(t.prototype,n),r&&je(t,r),m}(r.PureComponent);Re.propTypes=Ue,Re.defaultProps={};t.default=Re}}]);
//# sourceMappingURL=25.4656910d.chunk.js.map