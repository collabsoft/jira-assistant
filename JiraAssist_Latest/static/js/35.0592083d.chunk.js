(this["webpackJsonpjira-assistant"]=this["webpackJsonpjira-assistant"]||[]).push([[35],{858:function(e,t,a){"use strict";a.r(t);var r=a(5),n=a(6),s=a(46),i=a(15),c=a(16),o=a(2),u=a.n(o),l=a(35),b=a(1),f={minWidth:"calc(100% + 16px)",minHeight:"100%",marginLeft:"-8px",height:1650,overflow:"auto",border:0},h=function(e){Object(i.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(r.a)(this,a),n=t.call(this,e),Object(l.b)(Object(s.a)(n),"SessionService","AppBrowserService"),n.state={},n}return Object(n.a)(a,[{key:"UNSAFE_componentWillMount",value:function(){var e=this,t=this.$session.CurrentUser;this.$jaBrowserExtn.getAppVersion().then((function(a){var r=a||b.d,n=t.feedbackUrl.format([t.displayName,t.emailAddress,r,navigator.userAgent]);e.setState({feedbackUrl:n})}))}},{key:"render",value:function(){return u.a.createElement("iframe",{src:this.state.feedbackUrl,title:"Feedback",style:f})}}]),a}(o.PureComponent);t.default=h}}]);
//# sourceMappingURL=35.0592083d.chunk.js.map