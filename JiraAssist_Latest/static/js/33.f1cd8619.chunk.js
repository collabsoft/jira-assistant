(this["webpackJsonpjira-assistant"]=this["webpackJsonpjira-assistant"]||[]).push([[33],{537:function(e,t,a){},859:function(e,t,a){"use strict";a.r(t);var n=a(8),l=a(5),i=a(6),s=a(46),o=a(15),r=a(16),u=a(2),c=a.n(u),m=a(22),d=a.n(m),g=a(112),h=a(242),f=a(35),p=a(113),v=["Su","Mo","Tu","We","Th","Fr","Sa"],b=function(e){Object(o.a)(a,e);var t=Object(r.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={value:e.value||[1,2,3,4,5]},n}return Object(i.a)(a,[{key:"UNSAFE_componentWillReceiveProps",value:function(e){var t=e.value;t||(t=t||[1,2,3,4,5]),this.state.value!==t&&this.setState({value:t})}},{key:"getClass",value:function(e){return this.state.value.indexOf(e)>-1?"day day-on":"day"}},{key:"daySelected",value:function(e){var t=this.state.value,a=t.indexOf(e);-1===a?t=t.concat(e):t.removeAt(a),t=t.orderBy(),this.setState({value:t}),this.props.onChange(t)}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"daysinweek"},v.map((function(t,a){return c.a.createElement("div",{key:t,className:e.getClass(a),onClick:function(){return e.daySelected(a)}},t)})))}}]),a}(u.PureComponent),E=a(1),k=function(e){Object(o.a)(a,e);var t=Object(r.a)(a);function a(){var e;Object(l.a)(this,a);for(var i=arguments.length,s=new Array(i),o=0;o<i;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).setValue=function(t,a){var l=e.props.settings;a?l[t]=a:delete l[t],e.props.onChange(l),l=Object(n.a)({},l),e.setState({settings:l})},e}return a}(u.PureComponent),y=[{val:0,label:"Default"},{val:1,label:"Sunday"},{val:2,label:"Monday"},{val:3,label:"Tuesday"},{val:4,label:"Wednesday"},{val:5,label:"Thursday"},{val:6,label:"Friday"},{val:7,label:"Saturday"}],N=function(e){Object(o.a)(a,e);var t=Object(r.a)(a);function a(e){var n;Object(l.a)(this,a),n=t.call(this,e),Object(f.b)(Object(s.a)(n),"UtilsService");var i=new Date;return n.dateFormats=E.s.map((function(e){return{format:e,text:n.$utils.formatDate(i,e)}})),n.timeFormats=E.x.map((function(e){return{format:e,text:n.$utils.formatDate(i,e)}})),n}return Object(i.a)(a,[{key:"render",value:function(){var e=this,t=this.dateFormats,a=this.timeFormats,n=this.props,l=n.settings,i=n.noDonations;return c.a.createElement("div",{className:"form-horizontal"},c.a.createElement("div",{className:"form-label ui-g-12"},c.a.createElement("strong",null,"Display Date and Time format")),c.a.createElement("div",{className:"ui-g-12 ui-md-9 ui-lg-9 ui-xl-10"},c.a.createElement("div",{className:"form-group"},c.a.createElement(h.i,{className:"form-control select",dataset:t,value:l.dateFormat,valueField:"format",displayField:"text",propName:"dateFormat",onChange:function(t){return e.setValue("dateFormat",t)},style:{width:"180px",display:"inline-block"}}),c.a.createElement(h.i,{className:"form-control select",dataset:a,value:l.timeFormat,valueField:"format",displayField:"text",propName:"timeFormat",onChange:function(t){return e.setValue("timeFormat",t)},style:{width:"150px",display:"inline-block"}}),c.a.createElement("span",{className:"help-block"},"Select your preferred date and time format to be displayed throughout the application"))),c.a.createElement("div",{className:"form-label ui-g-12 ui-md-3 ui-lg-3 ui-xl-2"},c.a.createElement("strong",null,"Working hours")),c.a.createElement("div",{className:"ui-g-12 ui-md-9 ui-lg-9 ui-xl-10"},c.a.createElement("div",{className:"form-group"},c.a.createElement(p.InputMask,{mask:"99:99",value:l.startOfDay,onChange:function(t){return e.setValue("startOfDay",t.value)},placeholder:"00:00",maxLength:5,style:{width:"150px",display:"inline-block"}}),c.a.createElement(p.InputMask,{mask:"99:99",value:l.endOfDay,onChange:function(t){return e.setValue("endOfDay",t.value)},placeholder:"00:00",maxLength:5,style:{width:"150px",display:"inline-block"}}),c.a.createElement("span",{className:"help-block"},"Select your working hours range between 00:00 to 23:00 (24 hours format)"))),c.a.createElement("div",{className:"form-label ui-g-12 ui-md-3 ui-lg-3 ui-xl-2"},c.a.createElement("strong",null,"Working days")),c.a.createElement("div",{className:"ui-g-12 ui-md-9 ui-lg-9 ui-xl-10"},c.a.createElement("div",{className:"form-group"},c.a.createElement(b,{value:l.workingDays,onChange:function(t){return e.setValue("workingDays",t)}}),c.a.createElement("span",{className:"help-block"},"Select the days in week you would be working."))),c.a.createElement("div",{className:"form-label ui-g-12 ui-md-3 ui-lg-3 ui-xl-2"},c.a.createElement("strong",null,"Start of week")),c.a.createElement("div",{className:"ui-g-12 ui-md-9 ui-lg-9 ui-xl-10"},c.a.createElement("div",{className:"form-group"},c.a.createElement(h.i,{dataset:y,className:"form-control select",valueField:"val",displayField:"label",value:l.startOfWeek,onChange:function(t){return e.setValue("startOfWeek",t)},style:{width:180,display:"inline-block"}}),c.a.createElement("span",{className:"help-block"},"Select the starting day of your week. If nothing is selected then default will be taken."))),!i&&c.a.createElement("div",{className:"form-label ui-g-12 ui-md-3 ui-lg-3 ui-xl-2"},c.a.createElement("strong",null,"Donate / contribute to us")),!i&&c.a.createElement("div",{className:"ui-g-12 ui-md-9 ui-lg-9 ui-xl-10"},c.a.createElement("div",{className:"form-group"},c.a.createElement("div",null,c.a.createElement(h.c,{checked:l.hideDonateMenu,onChange:function(t){return e.setValue("hideDonateMenu",t)},label:"Hide Donate button in header"})),c.a.createElement("div",null,c.a.createElement("a",{href:"/index.html#/".concat(this.props.userId,"/contribute"),title:"Would you like to contribute / compensate us for the effort we put in development of this tool? Click to know more"},c.a.createElement("img",{src:"/assets/donate.png",width:145,className:"Donate us",alt:"Donate us"}))),c.a.createElement("span",{className:"help-block"},"You can choose to hide the donate button / menu displayed in the tool using this option. But before hiding it consider donating a small amount of your wish."))))}}]),a}(k),w=a(406),C=(a(537),a(844)),x=(a(583),a(3)),S=a.n(x),O=[13,14,15,16,17,18,19,20,21,22,23],j=function(e){Object(o.a)(a,e);var t=Object(r.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={},e.onChange=function(t){var a=e.getValue(t);e.setState({timeValue:t,value:a}),e.props.onChange(a)},e.checkDisabled=function(){return O},e}return Object(i.a)(a,[{key:"getValue",value:function(e){return e?"string"!==this.props.mode?e.hour()+e.minute()/60:void 0:null}},{key:"render",value:function(){var e=this.state.timeValue,t=this.props,a=t.className,n=t.disabled,l=t.placeholder,i=void 0===l?"Choose time":l;return c.a.createElement(C.a,{defaultValue:e,className:a,disabled:n,showSecond:!1,inputReadOnly:!1,placeholder:i,onChange:this.onChange,disabledHours:this.checkDisabled,hideDisabledOptions:!0})}}],[{key:"getDerivedStateFromProps",value:function(e,t){var a=e.value,n=null;if(!t||t.value!==a)if(n={value:a},a){var l=S()();"string"===e.mode||(a=a.toString().split("."),l.set({h:a[0],m:parseInt(Math.round(60*".".concat(a[1]||0)))||0})),n.timeValue=l}else n.timeValue=null;return n}}]),a}(u.PureComponent),F=function(e){Object(o.a)(a,e);var t=Object(r.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this,t=this.props.settings;return c.a.createElement("div",{className:"ui-g ui-fluid"},c.a.createElement("div",{className:"form-label ui-g-12 ui-md-3 ui-lg-3 ui-xl-2"},c.a.createElement("strong",null,"Max hours to log")),c.a.createElement("div",{className:"ui-g-12 ui-md-9 ui-lg-9 ui-xl-10"},c.a.createElement("div",{className:"form-group"},c.a.createElement(j,{value:t.maxHours,onChange:function(t){return e.setValue("maxHours",t)},placeholder:"Choose max hours"}),c.a.createElement("span",{className:"help-block"},"Specify the maximum number of hours to be logged per day"))),c.a.createElement("div",{className:"form-label ui-g-12 ui-md-3 ui-lg-3 ui-xl-2"},c.a.createElement("strong",null,"Auto upload worklog")),c.a.createElement("div",{className:"ui-g-12 ui-md-9 ui-lg-9 ui-xl-10"},c.a.createElement("div",{className:"form-group"},c.a.createElement(h.c,{checked:t.autoUpload,onChange:function(t){return e.setValue("autoUpload",t)},label:"Enable auto upload by default"}),c.a.createElement("span",{className:"help-block"},"All the worklogs will be automatically uploaded when created"))),c.a.createElement("div",{className:"form-label ui-g-12 ui-md-3 ui-lg-3 ui-xl-2"},c.a.createElement("strong",null,"Worklog for closed tickets")),c.a.createElement("div",{className:"ui-g-12 ui-md-9 ui-lg-9 ui-xl-10"},c.a.createElement("div",{className:"form-group"},c.a.createElement(h.c,{checked:t.allowClosedTickets,onChange:function(t){return e.setValue("allowClosedTickets",t)},label:"Allow logging work on closed tickets"}),c.a.createElement("span",{className:"help-block"},"This feature will work only if your Jira server is configured to support it"))),c.a.createElement("div",{className:"form-label ui-g-12 ui-md-3 ui-lg-3 ui-xl-2"},c.a.createElement("strong",null,"Min length for worklog comments")),c.a.createElement("div",{className:"ui-g-12 ui-md-9 ui-lg-9 ui-xl-10"},c.a.createElement("div",{className:"form-group"},c.a.createElement(h.j,{className:"form-control",value:t.commentLength,onChange:function(t){return e.setValue("commentLength",t)},keyfilter:"int",maxLength:3,style:{width:150,display:"inline-block"}}),c.a.createElement("span",{className:"help-block"},"Provide the minimum count of characters to be used for worklog comments"))),c.a.createElement("div",{className:"form-label ui-g-12 ui-md-3 ui-lg-3 ui-xl-2"},c.a.createElement("strong",null,"Default meeting ticket for worklog")),c.a.createElement("div",{className:"ui-g-12 ui-md-9 ui-lg-9 ui-xl-10"},c.a.createElement("div",{className:"form-group"},c.a.createElement(h.j,{id:"txtTicketNo",className:"form-control",value:t.meetingTicket,onChange:function(t){return e.setValue("meetingTicket",t)},maxLength:100,style:{width:150,display:"inline-block"}}),c.a.createElement("span",{className:"help-block"},"Provide the list of meeting tickets seperated by ',' for which you would add worklog."))),c.a.createElement("div",{className:"form-label ui-g-12 ui-md-3 ui-lg-3 ui-xl-2"},c.a.createElement("strong",null,"Notify for missing worklog")),c.a.createElement("div",{className:"ui-g-12 ui-md-9 ui-lg-9 ui-xl-10"},c.a.createElement("div",{className:"form-group"},c.a.createElement(h.c,{checked:t.notifyWL,onChange:function(t){return e.setValue("notifyWL",t)},label:"Enable worklog notification"}),c.a.createElement("span",{className:"help-block"},"Notify you to add worklog for previous day if not added"))))}}]),a}(k),I=function(e){Object(o.a)(a,e);var t=Object(r.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).searchRapidView=function(e){return e=(e||"").toLowerCase(),n.props.rapidViews.filter((function(t){return(t.name.toLowerCase().indexOf(e)>=0||t.id.toString().startsWith(e))&&(!n.props.settings.rapidViews||!n.props.settings.rapidViews.some((function(e){return e.id===t.id})))}))},n.searchProject=function(e){return e=(e||"").toLowerCase(),n.props.projects.filter((function(t){return(t.name.toLowerCase().indexOf(e)>=0||t.key.toLowerCase().startsWith(e)||t.id.toString().startsWith(e))&&(!n.props.settings.projects||!n.props.settings.projects.some((function(e){return e.id===t.id})))}))},n.state={},n}return Object(i.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.settings,n=t.numericFields,l=t.stringFields,i=t.projects,s=t.rapidViews;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"ui-g ui-fluid"},c.a.createElement("div",{className:"form-label ui-g-12 ui-md-3 ui-lg-3 ui-xl-2"},c.a.createElement("strong",null,"Projects")),c.a.createElement("div",{className:"ui-g-12 ui-md-9 ui-lg-9 ui-xl-10"},c.a.createElement("div",{className:"form-group"},c.a.createElement(h.a,{value:a.projects,onChange:function(t){return e.setValue("projects",t)},dataset:this.searchProject,dropdown:!0,multiple:!0,displayField:"name",placeholder:"start typing the project name here",size:35,maxlength:25,className:"autocomplete-350",scrollHeight:"300px",disabled:!i||0===i.length}),c.a.createElement("span",{className:"help-block"},"Add one or more projects which you are interested in")))),c.a.createElement("div",{className:"ui-g ui-fluid"},c.a.createElement("div",{className:"form-label ui-g-12 ui-md-3 ui-lg-3 ui-xl-2"},c.a.createElement("strong",null,"Rapid board")),c.a.createElement("div",{className:"ui-g-12 ui-md-9 ui-lg-9 ui-xl-10"},c.a.createElement("div",{className:"form-group"},c.a.createElement(h.a,{value:a.rapidViews,onChange:function(t){return e.setValue("rapidViews",t)},dataset:this.searchRapidView,dropdown:!0,multiple:!0,displayField:"name",placeholder:"start typing the board name here",size:35,maxlength:25,styleclass:"autocomplete-350",scrollHeight:"300px",disabled:!s||0===s.length}),c.a.createElement("span",{className:"help-block"},"Add one or more rapid view board which you are interested in")))),c.a.createElement("div",{className:"ui-g ui-fluid"},c.a.createElement("div",{className:"form-label ui-g-12 ui-md-3 ui-lg-3 ui-xl-2"},c.a.createElement("strong",null,"Story Points field")),c.a.createElement("div",{className:"ui-g-12 ui-md-9 ui-lg-9 ui-xl-10"},c.a.createElement("div",{className:"form-group"},c.a.createElement(h.i,{dataset:n,value:a.storyPointField,onChange:function(t){return e.setValue("storyPointField",t)},style:{width:"200px"},placeholder:"Choose a storypoint field",disabled:!n,displayField:"name",filterPlaceholder:"Type the field name to filter"}),c.a.createElement("span",{className:"help-block"},"Story points field is a custom field in each jira instance and for some functionality to work, you will have to select appropriate field.")))),c.a.createElement("div",{className:"ui-g ui-fluid"},c.a.createElement("div",{className:"form-label ui-g-12 ui-md-3 ui-lg-3 ui-xl-2"},c.a.createElement("strong",null,"Epic name field")),c.a.createElement("div",{className:"ui-g-12 ui-md-9 ui-lg-9 ui-xl-10"},c.a.createElement("div",{className:"form-group"},c.a.createElement(h.i,{dataset:l,value:a.epicNameField,onChange:function(t){return e.setValue("epicNameField",t)},style:{width:"200px"},placeholder:"Choose a epic name field",disabled:!l,displayField:"name",filterPlaceholder:"Type the field name to filter"}),c.a.createElement("span",{className:"help-block"},"Epic name field is a custom field in each jira instance and for some functionality to work, you will have to select appropriate field.")))))}}]),a}(k),V=a(0),D=a.n(V),A=a(4),P=[{value:5,label:"Every 5 minutes"},{value:10,label:"Every 10 minutes"},{value:15,label:"Every 15 minutes"},{value:20,label:"Every 20 minutes"},{value:30,label:"Every 30 minutes"},{value:45,label:"Every 45 minutes"},{value:60,label:"Every 60 minutes"}],T=[{value:0,label:"Disable notification"},{value:1,label:"Before 1 minute"},{value:2,label:"Before 2 minutes"},{value:3,label:"Before 3 minutes"},{value:4,label:"Before 4 minutes"},{value:5,label:"Before 5 minutes"},{value:10,label:"Before 10 minutes"},{value:15,label:"Before 15 minutes"}],L=[{value:0,label:"Never launch"},{value:1,label:"Before 1 minute"},{value:2,label:"Before 2 minutes"},{value:3,label:"Before 3 minutes"},{value:4,label:"Before 4 minutes"},{value:5,label:"Before 5 minutes"},{value:10,label:"Before 10 minutes"}],M=function(e){Object(o.a)(a,e);var t=Object(r.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).enableGIntegration=function(e){return n.enableIntegration("googleIntegration",e)},n.enableOIntegration=function(e){return n.enableIntegration("outlookIntegration",e)},n.googleSignIn=function(){n.$calendar.authenticate(!0).then((function(e){n.setValue("hasGoogleCredentials",!0),n.$session.CurrentUser.hasGoogleCreds=!0,n.$analytics.trackEvent("Signedin to Google Calendar"),n.$message.success("Successfully integrated with google account.")}),(function(e){n.$message.warning("Unable to integrate with Google Calendar!")}))},n.outlookSignIn=function(){n.$outlook.authenticate(!0).then(function(){var e=Object(A.a)(D.a.mark((function e(t){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.setValue("hasOutlookCredentials",!0),n.setValue("outlookStore",t),n.$session.CurrentUser.hasOutlookCreds=!0,n.$analytics.trackEvent("Signedin to Outlook Calendar"),n.$message.success("Successfully integrated with outlook account.");case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),(function(e){console.log("Outlook integration failed with error: "),console.error(e),n.$message.warning("Unable to integrate with Outlook Calendar!")}))},n.removeIntegration=function(){n.setValue("hasGoogleCredentials",!1),n.props.intgStatusChanged(!0)},n.undoSignout=function(){n.setValue("hasGoogleCredentials",!0),n.props.intgStatusChanged(!1)},n.removeOutlookIntegration=function(){n.setValue("hasOutlookCredentials",!1),n.props.outlookIntgStatusChanged(!0)},n.undoOutlookSignout=function(){n.setValue("hasOutlookCredentials",!0),n.props.outlookIntgStatusChanged(!1)},Object(f.b)(Object(s.a)(n),"CalendarService","AnalyticsService","MessageService","SessionService","OutlookService","AppBrowserService"),n}return Object(i.a)(a,[{key:"enableIntegration",value:function(e,t){var a=this;t?this.$jaBrowserExtn.requestPermission(["identity"]).then((function(n){n?a.setValue(e,t):a.$message.warning("Permission was not granted to enable this integration. Please grant permission to enable it.","Permission not granted")})):this.setValue(e,t)}},{key:"render",value:function(){var e=this,t=this.props,a=t.settings,n=t.removedIntg,l=t.removedOIntg;return c.a.createElement("div",null,c.a.createElement("p",null,"This page allows you to integrate your calendar from external sources like Outlook & Google. Worklog will be automatically created for the events in your calendar based on your preferences"),c.a.createElement("div",{className:"block"},c.a.createElement("div",{className:"ui-g ui-fluid"},c.a.createElement("div",null,c.a.createElement("span",{className:"badge badge-info pull-left"},"BETA"),c.a.createElement("h4",null,"Outlook Calendar")),c.a.createElement("div",{className:"form-label ui-g-12 ui-md-3 ui-lg-3 ui-xl-2"},c.a.createElement("strong",null,"Enable Outlook calendar")),c.a.createElement("div",{className:"ui-g-12 ui-md-9 ui-lg-9 ui-xl-10"},c.a.createElement("div",{className:"form-group"},c.a.createElement(h.c,{checked:a.outlookIntegration,onChange:this.enableOIntegration,label:"Allow integration"}),c.a.createElement("span",{className:"help-block"},"Select this checkbox if you would wish to view meetings in your outlook calendar"))),c.a.createElement("div",{className:"form-label ui-g-12 ui-md-3 ui-lg-3 ui-xl-2"},c.a.createElement("strong",null,"Integration Status")),c.a.createElement("div",{className:"ui-g-12 ui-md-9 ui-lg-9 ui-xl-10"},!a.hasOutlookCredentials&&!l&&c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{className:"link",onClick:this.outlookSignIn},"Click here to sign in with your microsoft account"),c.a.createElement("span",{className:"help-block"},"You will have to sign-in to with your microsoft account to use the calendar.")),a.hasOutlookCredentials&&!l&&c.a.createElement("div",{className:"form-group"},c.a.createElement("label",null,"(Already integrated with an account)"),c.a.createElement("label",{className:"link",onClick:this.removeOutlookIntegration},"Remove integration")),l&&c.a.createElement("div",{className:"form-group"},c.a.createElement("label",null,"(You will be signed out from Outlook once you save your changes)"),c.a.createElement("label",{className:"link",onClick:this.undoOutlookSignout}," Undo signout"),c.a.createElement("span",{className:"help-block"},"Note: You will have to authenticate with microsoft again to use the calendar")))),c.a.createElement("div",{className:"ui-g ui-fluid"},c.a.createElement("h4",null,"Google Calendar"),c.a.createElement("div",{className:"form-label ui-g-12 ui-md-3 ui-lg-3 ui-xl-2"},c.a.createElement("strong",null,"Enable Google calendar")),c.a.createElement("div",{className:"ui-g-12 ui-md-9 ui-lg-9 ui-xl-10"},c.a.createElement("div",{className:"form-group"},c.a.createElement(h.c,{checked:a.googleIntegration,onChange:this.enableGIntegration,label:"Allow integration"}),c.a.createElement("span",{className:"help-block"},"Select this checkbox if you would wish to view meetings in your calendar"))),c.a.createElement("div",{className:"form-label ui-g-12 ui-md-3 ui-lg-3 ui-xl-2"},c.a.createElement("strong",null,"Integration Status")),c.a.createElement("div",{className:"ui-g-12 ui-md-9 ui-lg-9 ui-xl-10"},!a.hasGoogleCredentials&&!n&&c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{className:"link",onClick:this.googleSignIn},"Click here to sign in with your google account"),c.a.createElement("span",{className:"help-block"},"You will have to sign-in to chrome with your google account to use the calendar.")),a.hasGoogleCredentials&&!n&&c.a.createElement("div",{className:"form-group"},c.a.createElement("label",null,"(Already integrated with an account)"),c.a.createElement("label",{className:"link",onClick:this.removeIntegration},"Remove integration")),n&&c.a.createElement("div",{className:"form-group"},c.a.createElement("label",null,"(You will be signed out from Google once you save your changes)"),c.a.createElement("label",{className:"link",onClick:this.undoSignout}," Undo signout"),c.a.createElement("span",{className:"help-block"},"Note: You will have to authenticate with google again to use the calendar")))),c.a.createElement("div",null,c.a.createElement("h4",null,"General settings"),c.a.createElement("div",{className:"form-label ui-g-12 ui-md-3 ui-lg-3 ui-xl-2"},c.a.createElement("strong",null,"Check for updates")),c.a.createElement("div",{className:"ui-g-12 ui-md-9 ui-lg-9 ui-xl-10"},c.a.createElement("div",{className:"form-group"},c.a.createElement(h.i,{className:"form-control select",value:a.checkUpdates,dataset:P,valueField:"value",onChange:function(t){return e.setValue("checkUpdates",t)},style:{width:180,display:"inline-block"}}),c.a.createElement("span",{className:"help-block"},"Refresh the meeting invites for notification regularly in given interval"))),c.a.createElement("div",{className:"form-label ui-g-12 ui-md-3 ui-lg-3 ui-xl-2"},c.a.createElement("strong",null,"Show meeting notification")),c.a.createElement("div",{className:"ui-g-12 ui-md-9 ui-lg-9 ui-xl-10"},c.a.createElement("div",{className:"form-group"},c.a.createElement(h.i,{className:"form-control select",value:a.notifyBefore,dataset:T,valueField:"value",onChange:function(t){return e.setValue("notifyBefore",t)},style:{width:180,display:"inline-block"}}),c.a.createElement("span",{className:"help-block"},"Show notification before the selected time of meeting"))),c.a.createElement("div",{className:"form-label ui-g-12 ui-md-3 ui-lg-3 ui-xl-2"},c.a.createElement("strong",null,"Auto launch hangout")),c.a.createElement("div",{className:"ui-g-12 ui-md-9 ui-lg-9 ui-xl-10"},c.a.createElement("div",{className:"form-group"},c.a.createElement(h.i,{className:"form-control select",value:a.autoLaunch,onChange:function(t){return e.setValue("autoLaunch",t)},dataset:L,valueField:"value",style:{width:180,display:"inline-block"}}),c.a.createElement("span",{className:"help-block"},"Automatically launch hangout Url before the selected time of meeting"))))))}}]),a}(k),B=a(584),$=function(e){Object(o.a)(a,e);var t=Object(r.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).menuSelected=function(e,t){t&&t.stopPropagation(),e.selected=!e.selected,e.isHead&&n.selectSubMenus(e);var a=n.props.menus.filter((function(e){return e.selected&&!e.isHead})).map((function(e){return e.id}));n.props.menusChanged(a),n.setState({selectedMenus:a})},n.menuTemplate=function(e){return e.isHead?c.a.createElement("div",{onClick:function(t){return n.menuSelected(e,t)}},c.a.createElement(h.c,{checked:e.selected}),c.a.createElement("span",null,e.name)):e.isHead?void 0:c.a.createElement("div",{style:{marginLeft:20},onClick:function(t){return n.menuSelected(e,t)}},c.a.createElement(h.c,{checked:e.selected}),c.a.createElement("span",null,e.name))},n.menuActionSelected=function(e){n.setValue("menuAction",e)},n.launchPageChanged=function(e){n.setState({selectedLaunchPage:e}),n.props.launchPageChanged(e)},n.dashboardChanged=function(e){n.setState({selectedDashboard:e}),n.props.dashboardChanged(e)},n.state={launchMenus:[]},n}return Object(i.a)(a,[{key:"UNSAFE_componentWillMount",value:function(){var e=this.props.settings.launchAction;this.setState({selectedLaunchPage:e.autoLaunch,selectedDashboard:e.quickIndex})}},{key:"selectSubMenus",value:function(e){for(var t=this.props.menus,a=t.indexOf(e)+1;a<t.length;a++){var n=t[a];if(n.isHead)return;n.selected=e.selected}}},{key:"render",value:function(){var e=this.props,t=e.launchMenus,a=e.dashboards,n=e.menus,l=e.settings,i=this.state,s=i.selectedDashboard,o=i.selectedLaunchPage;return c.a.createElement("div",null,c.a.createElement("p",null,"This page allows you to set what is displayed when you click on JA icon in your browser"),c.a.createElement("div",{className:"block"},c.a.createElement("div",{className:"ui-g ui-fluid"},c.a.createElement("div",{className:"form-label ui-g-12 ui-md-3 ui-lg-3 ui-xl-2"},c.a.createElement("strong",null,"What should happen when clicking on JA icon?")),c.a.createElement("div",{className:"ui-g-12 ui-md-9 ui-lg-9 ui-xl-10"},c.a.createElement("div",{className:"form-group"},c.a.createElement(h.h,{value:l.menuAction,onChange:this.menuActionSelected,defaultValue:1,label:"Show menus"}),c.a.createElement(h.h,{value:l.menuAction,onChange:this.menuActionSelected,defaultValue:2,label:"Auto launch"}),c.a.createElement(h.h,{value:l.menuAction,onChange:this.menuActionSelected,defaultValue:3,label:"Show quickview dashboard"}),c.a.createElement("span",{className:"help-block"},"Select appropriate option what you would expect to happen when you click on JA icon"))),1===l.menuAction&&c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"form-label ui-g-12 ui-md-3 ui-lg-3 ui-xl-2"},c.a.createElement("strong",null,"Menus to display")),c.a.createElement("div",{className:"ui-g-12 ui-md-9 ui-lg-9 ui-xl-10"},c.a.createElement("div",{className:"form-group"},c.a.createElement(B.ListBox,{options:n,optionValue:"id",optionLabel:"id",multiple:!0,style:{width:"300px"},listStyle:{maxHeight:"250px"},itemTemplate:this.menuTemplate}),c.a.createElement("span",{className:"help-block"},"Choose the list of menus you would like to be displayed")))),2===l.menuAction&&c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"form-label ui-g-12 ui-md-3 ui-lg-3 ui-xl-2"},c.a.createElement("strong",null,"Auto launch page")),c.a.createElement("div",{className:"ui-g-12 ui-md-9 ui-lg-9 ui-xl-10"},c.a.createElement("div",{className:"form-group"},c.a.createElement(h.i,{dataset:t,value:o,onChange:this.launchPageChanged,valueField:"value",style:{width:"200px"},group:!0},(function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("span",{className:"fa ".concat(e.icon)}),c.a.createElement("span",{style:{marginLeft:"4px"}},e.label))}),(function(e,t){return c.a.createElement("strong",{key:t},e.label)})),c.a.createElement("span",{className:"help-block"},"Select the page to be launched when clicking on the JA icon")))),3===l.menuAction&&c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"form-label ui-g-12 ui-md-3 ui-lg-3 ui-xl-2"},c.a.createElement("strong",null,"Quick view board")),c.a.createElement("div",{className:"ui-g-12 ui-md-9 ui-lg-9 ui-xl-10"},c.a.createElement("div",{className:"form-group"},c.a.createElement(h.i,{dataset:a,value:s,onChange:this.dashboardChanged,style:{width:"200px"},valueField:"value"},(function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("i",{className:"fa ".concat(e.icon)}),c.a.createElement("span",{style:{verticalAlign:"middle"}},e.label))}))))))))}}]),a}(k),U=a(10),W=function(e){Object(o.a)(a,e);var t=Object(r.a)(a);function a(e){var i;return Object(l.a)(this,a),(i=t.call(this,e)).saveSettings=function(){var e=Object(s.a)(i).settings,t={action:parseInt(e.menuAction)},a={action:t.action};switch(e.launchAction=t,e.menuAction){case 1:a.menus=i.menus.filter((function(e){return e.selected&&!e.isHead})).map((function(e){return{name:e.name,url:e.url}})),t.selectedMenu=i.selectedMenu;break;case 2:if(i.selectedLaunchPage){var n=i.menus.first((function(e){return e.id===i.selectedLaunchPage}));n&&(a.url=n.url,t.autoLaunch=i.selectedLaunchPage)}break;case 3:i.selectedDashboard&&(a.index=parseInt((i.selectedDashboard||"0").replace("D-","")),t.quickIndex=i.selectedDashboard)}i.validateTicket().then((function(e){if(!1!==e){if(!i.settings.storyPointField){var t=i.state.numericFields.first((function(e){return"story points"===e.name.toLowerCase()}));t||i.state.numericFields.first((function(e){var t=e.name.toLowerCase();return t.indexOf("story")>-1&&~t.indexOf("points")>-1})),t&&i.setValue("storyPointField",t)}if(!i.settings.epicNameField){var n=i.state.stringFields.first((function(e){return"epic link"===e.name.toLowerCase()}));n||i.state.stringFields.first((function(e){var t=e.name.toLowerCase();return t.indexOf("epic")>-1&&~t.indexOf("link")>-1})),n&&i.setValue("epicNameField",n)}i.settings.startOfWeek>0||delete i.settings.startOfWeek,i.$config.saveUserSettings(i.settings).then((function(e){i.$cache.set("menuAction",a,!1,!0),i.parseSettings(e)}))}else i.setState({currentTabIndex:1})}))},i.setValue=function(e,t){var a=Object(s.a)(i).settings;t?a[e]=t:delete a[e],i.settings=Object(n.a)({},a),i.setState({settings:i.settings})},i.launchPageChanged=function(e){var t={action:2};t.autoLaunch=e,i.selectedLaunchPage=e,i.setValue("launchAction",t)},i.dashboardChanged=function(e){var t={action:3};t.quickIndex=e,i.selectedDashboard=e,i.setValue("launchAction",t)},i.parseSettings=function(e){var t=i.$session.CurrentUser,a=i.settings=e.settings;if(t.dateFormat=a.dateFormat,t.timeFormat=a.timeFormat,t.workingDays=a.workingDays,t.gIntegration=a.googleIntegration,t.oIntegration=a.outlookIntegration,t.maxHours=a.maxHours,t.meetingTicket=a.meetingTicket,t.hasGoogleCreds=a.hasGoogleCredentials,t.hasOutlookCreds=a.hasOutlookCredentials,t.allowClosedTickets=a.allowClosedTickets,t.pruneInterval=parseInt(a.pruneInterval||4),t.projects=a.projects,t.rapidViews=a.rapidViews,t.storyPointField=a.storyPointField,t.epicNameField=a.epicNameField,t.commentLength=parseInt(a.commentLength||0),t.startOfWeek=parseInt(a.startOfWeek||0),Object(U.l)(t.startOfWeek),i.noDonations=t.noDonations,t.hideDonateMenu=i.noDonations||a.hideDonateMenu,t.hideDonateMenu?d()("body").addClass("no-donation"):d()("body").removeClass("no-donation"),a.launchAction?a.menuAction=a.launchAction.action:(a.launchAction={},a.menuAction=1),a.autoLaunch=a.autoLaunch||0,a.notifyBefore=a.notifyBefore||0,a.checkUpdates=a.checkUpdates||15,t.team=a.teamMembers,a.startOfDay){var n=a.startOfDay.split(":");t.startOfDay="".concat(n[0],":").concat(n[1])}if(a.endOfDay){var l=a.endOfDay.split(":");t.endOfDay="".concat(l[0],":").concat(l[1])}i.fillMenus(),i.setState({removedIntg:!1,removedOIntg:!1,settings:i.settings})},i.menusChanged=function(e){return i.selectedMenu=e},i.tabChanged=function(e){return i.setState({currentTabIndex:e.index})},i.settingsChanged=function(e){return i.setState({settings:e})},i.intgStatusChanged=function(e){return i.setState({removedIntg:e})},i.outlookIntgStatusChanged=function(e){return i.setState({removedOIntg:e})},Object(f.b)(Object(s.a)(i),"AppBrowserService","SessionService","MessageService","CacheService","ConfigService","TicketService","JiraService","DashboardService"),i.noDonations=i.$session.CurrentUser.noDonations,i.userId=i.$session.CurrentUser.userId,i.settings={},i.spaceInfo={},i.state={},i}return Object(i.a)(a,[{key:"UNSAFE_componentWillMount",value:function(){var e=this;this.$jira.getRapidViews().then((function(t){t=t.orderBy((function(e){return e.name})).map((function(e){return{name:e.name,id:e.id}})),e.setState({rapidViews:t})})),this.$jira.getProjects().then((function(t){t=t.map((function(e){return{name:e.name,id:e.id,key:e.key}})).orderBy((function(e){return e.name})),e.setState({projects:t})})),this.$jira.getCustomFields().then((function(t){var a=t.filter((function(e){return e.custom&&"number"===e.schema.type})).map((function(e){return{id:e.id,name:e.name,clauseNames:e.clauseNames}})).orderBy((function(e){return e.name})),n=t.filter((function(e){return e.custom&&("any"===e.schema.type||"string"===e.schema.type)})).map((function(e){return{id:e.id,name:e.name,clauseNames:e.clauseNames}})).orderBy((function(e){return e.name}));e.setState({numericFields:a,stringFields:n})})),this.$config.getUserSettings().then(this.parseSettings)}},{key:"fillMenus",value:function(){var e=[],t=this.settings.launchAction.selectedMenu||["D-0","R-UD","R-SP","R-CG","CAL","S-GE"],a=this.$dashboard.getDashboards(),n=[];a.forEach((function(a,l){var i="D-".concat(l),s="/dashboard/".concat(l);e.push({id:i,name:a.name,icon:a.icon,url:s,selected:t.indexOf(i)>-1}),n.push({value:i,label:a.name,icon:a.icon})}));var l=[{label:"Dashboards",items:n}],i=null;w.c.forEach((function(a){a.name&&!a.isDashboard&&(e.push({id:a.id,isHead:a.title,name:a.name,icon:a.icon,url:a.url,selected:t.indexOf(a.id)>-1}),a.title?(i={label:a.name,items:[]},l.push(i)):i.items.push({value:a.id,label:a.name,icon:a.icon}))})),this.menus=e,this.launchMenus=l,this.dashboardMenus=n}},{key:"validateTicket",value:function(){var e=this,t=(this.settings.meetingTicket||"").trim();return t?(t=(t=t.replace(";",",").replace(" ",",")).split(",").map((function(e){return e.trim()||null})),this.settings.meetingTicket=t.join(),this.$ticket.getTicketDetails(t).then((function(a){var n=t.map((function(e){return a[e.toUpperCase()]||e})),l=n.filter((function(e){return"string"===typeof e}));return l.length>0?(e.$message.warning("Invalid default ticket number(s) specified for meetings: ".concat(l.join())),!1):(e.settings.meetingTicket=n.map((function(e){return e.key})).join(),!0)}),(function(t){return((t.error||{}).errorMessages||[]).some((function(e){return e.toLowerCase().indexOf("'key' is invalid")>-1||e.toLowerCase().indexOf("does not exist")>-1}))&&e.$message.warning("Invalid default ticket number specified for meetings!"),!1}))):Promise.resolve(!0)}},{key:"render",value:function(){var e=this,t=this.settings,a=this.noDonations,n=this.state,l=n.currentTabIndex,i=n.removedIntg,s=n.removedOIntg,o=n.numericFields,r=n.stringFields,u=n.projects,m=n.rapidViews;return c.a.createElement(c.a.Fragment,null,c.a.createElement(g.TabView,{styleclass:"query-tab",activeindex:l,onChange:this.tabChanged},c.a.createElement(g.TabPanel,{header:"General",lefticon:"fa-filter",selected:"true"},c.a.createElement(N,{settings:t,noDonations:a,userId:this.userId,onChange:this.settingsChanged})),c.a.createElement(g.TabPanel,{header:"Worklog",lefticon:"fa-clock-o"},c.a.createElement(F,{settings:t,onChange:this.settingsChanged})),c.a.createElement(g.TabPanel,{header:"Default values",lefticon:"fa-clock-o"},c.a.createElement(I,{ref:function(t){return e.defaultValuesTab=t},settings:t,onChange:this.settingsChanged,numericFields:o,stringFields:r,projects:u,rapidViews:m})),c.a.createElement(g.TabPanel,{header:"Meetings",lefticon:"fa-calendar"},c.a.createElement(M,{settings:t,onChange:this.settingsChanged,removedIntg:i,intgStatusChanged:this.intgStatusChanged,removedOIntg:s,outlookIntgStatusChanged:this.outlookIntgStatusChanged})),c.a.createElement(g.TabPanel,{header:"Menu options",lefticon:"fa-calendar"},c.a.createElement($,{key:t._uniqueId,ref:function(t){return e.menuActionsTab=t},settings:t,dashboards:this.dashboardMenus,menus:this.menus,launchMenus:this.launchMenus,onChange:this.settingsChanged,menusChanged:this.menusChanged,launchPageChanged:this.launchPageChanged,dashboardChanged:this.dashboardChanged}))),c.a.createElement("div",{className:"pnl-footer"},c.a.createElement(h.b,{type:"primary",className:"pull-right",icon:"fa fa-floppy-o",label:"Save Changes",onClick:this.saveSettings})))}}]),a}(u.PureComponent);t.default=W}}]);
//# sourceMappingURL=33.f1cd8619.chunk.js.map