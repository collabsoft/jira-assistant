(this["webpackJsonpjira-assistant"]=this["webpackJsonpjira-assistant"]||[]).push([[34],{419:function(e,t,a){"use strict";a.r(t);var n=a(31),r=a(5),s=a(6),o=a(46),u=a(15),i=a(16),l=a(2),c=a.n(l),p=a(242),m=a(245),d=a(3),h=a.n(d),g=a(35),f=a(1),v=a(10),E=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(e){var s;Object(r.a)(this,a),(s=t.call(this,e)).addNewGroup=function(e){if(e=e.trim()){var t=s.state.groups;return s.hasGroupWithName(e)?(s.$message.warning("The group with the name '".concat(e,"' already exists!"),"Group already exists"),!1):(s.setState({groups:t.concat({name:e,timeZone:"",users:[]})}),!0)}},s.hasGroupWithName=function(e,t){return e=e.toLowerCase(),s.state.groups.some((function(a){return a.name.toLowerCase()===e&&a!==t}))},s.deleteGroup=function(e){var t=s.state.groups;t.splice(e,1),t=Object(n.a)(t),s.setState({groups:t})},s.saveGroups=function(){s.setState({saveInProg:!0}),s.$usergroup.saveUserGroups(s.state.groups).then((function(e){s.setState({saveInProg:!1}),s.$analytics.trackEvent("User groups saved",f.i.UserActions),s.$message.success("Changes saved successfully!","Group saved")}))},s.done=function(){s.props.onDone&&(s.$analytics.trackEvent("User groups modified",f.i.UserActions),s.props.onDone(s.state.groups))},Object(g.b)(Object(o.a)(s),"SessionService","MessageService","UserGroupService","JiraService","AnalyticsService");var u=e.groups,i=h.a.tz.names().map((function(e){return{label:e,value:e}}));return s.groupTimezones=[{label:"My local time zone",value:""}].union([i]),s.userTimezones=[{label:"My local time zone",value:""},{label:"Use group's time zone",value:"GRP_TZ"}].union([i]),s.state={groups:u},s}return Object(s.a)(a,[{key:"UNSAFE_componentWillMount",value:function(){var e=this;this.state.groups||this.$usergroup.getUserGroups().then((function(t){return e.setState({groups:t})}))}},{key:"render",value:function(){var e=this,t=this.userTimezones,a=this.props.isPlugged,n=this.state.groups;return c.a.createElement(m.c,{dataset:n},c.a.createElement("caption",null,"User groups"),c.a.createElement(m.e,null,c.a.createElement("tr",null,c.a.createElement("th",{style:{minWidth:215}},"Group / User Name"),c.a.createElement("th",null,"User Email"),c.a.createElement("th",null,"User Login"),c.a.createElement("th",null,"Timezone"),c.a.createElement("th",{style:{width:150}},"Options"))),c.a.createElement(m.d,null,(function(a,n){return c.a.createElement(b,{key:a.name,group:a,index:n,hasGroupWithName:e.hasGroupWithName,groupTimezones:e.groupTimezones,userTimezones:t,onRemove:e.deleteGroup})})),c.a.createElement(m.b,{span:5},"No groups available"),c.a.createElement(y,{isPlugged:a,saveGroups:this.saveGroups,onDone:this.done,addNewGroup:this.addNewGroup}))}}]),a}(l.PureComponent);t.default=E;var b=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(e){var s;Object(r.a)(this,a),(s=t.call(this,e)).usersSelected=function(e){return s.setState({selectedUsers:e,users:s.props.group.users})},s.clearSelection=function(){return s.usersSelected([])},s.searchUsers=function(e){return s.$jira.searchUsers(e)},s.removeUser=function(e){var t=s.props.group,a=t.users;a.splice(e,1),a=Object(n.a)(a),t.users=a,s.setState({users:a})},s.usernameEntered=function(e){var t=s.state.selectedUsers;t&&e&&!t.some((function(t){return Object(v.e)(t,!0)===e.toLowerCase()}))&&s.$jira.getUserDetails(e).then((function(e){(t=Object(n.a)(t)).push(e),s.setState({selectedUsers:t})}),(function(){}))},s.onRemove=function(){s.props.onRemove(s.props.index)},s.setTimezone=function(e){s.props.group.timeZone=e,s.setState({timeZone:e})},Object(g.b)(Object(o.a)(s),"JiraService");var u=e.group,i=u.users,l=void 0===i?[]:i,c=u.timeZone;return s.state={selectedUsers:[],users:l,timeZone:c||""},s}return Object(s.a)(a,[{key:"addUsersToGroup",value:function(){var e=this.props.group,t=this.state.selectedUsers,a=e.users,n=a.map((function(e){return Object(v.e)(e,!0)}));t.removeAll((function(e){return n.indexOf(Object(v.e)(e,!0))>-1})),a.addRange(t),e.users=a.orderBy((function(e){return e.displayName})),this.clearSelection()}},{key:"render",value:function(){var e=this,t=this.onRemove,a=this.setTimezone,n=this.props,r=n.group,s=n.groupTimezones,o=n.userTimezones,u=n.hasGroupWithName,i=this.state,l=i.selectedUsers,m=i.users,d=i.timeZone;return c.a.createElement(c.a.Fragment,null,c.a.createElement("tr",null,c.a.createElement("td",null,c.a.createElement(j,{group:r,hasGroupWithName:u})),c.a.createElement("td",{colSpan:2},c.a.createElement(p.a,{value:l,onChange:this.usersSelected,displayField:"displayName",multiple:!0,minLength:2,forceselection:!0,placeholder:"Add one or more users",onCustomValue:this.usernameEntered,dataset:this.searchUsers,style:{width:"80%"}}),c.a.createElement(p.b,{type:"danger",icon:"fa fa-close",onClick:this.clearSelection}),c.a.createElement(p.b,{type:"success",icon:"fa fa-user-plus",onClick:function(){return e.addUsersToGroup(r)}})),c.a.createElement("td",null,c.a.createElement(p.i,{dataset:s,displayField:"label",valueField:"value",value:d||"",onChange:a,className:"width-perc-100",filter:!0})),c.a.createElement("td",null,c.a.createElement(p.b,{type:"danger",icon:"fa fa-trash",label:"Delete group",onClick:t}))),(!m||0===m.length)&&c.a.createElement("tr",null,c.a.createElement("td",{colSpan:5},"No users were available under this group")),m&&m.map((function(t,a){return c.a.createElement(N,{key:Object(v.e)(t),user:t,index:a,userTimezones:o,onRemove:e.removeUser})})))}}]),a}(l.PureComponent),N=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(e){var n;Object(r.a)(this,a),(n=t.call(this,e)).timeZoneChanged=function(e){n.props.user.timeZone=e,n.setState({timeZone:e})},n.onRemove=function(){n.props.onRemove(n.props.index)};var s=e.user.timeZone;return n.state={timeZone:s||""},n}return Object(s.a)(a,[{key:"render",value:function(){var e=this.timeZoneChanged,t=this.onRemove,a=this.props,n=a.user,r=a.userTimezones;return c.a.createElement("tr",null,c.a.createElement("td",null,c.a.createElement("div",{className:"group-user"},c.a.createElement("img",{src:n.avatarUrls["32x32"]||n.avatarUrls["48x48"],alt:"",height:32,width:32,className:"pull-left"}),c.a.createElement("a",{href:n.self,target:"_blank",rel:"noopener noreferrer",className:"link"},n.displayName))),c.a.createElement("td",null,n.emailAddress),c.a.createElement("td",null,Object(v.e)(n)),c.a.createElement("td",null,c.a.createElement(p.i,{dataset:r,value:n.timeZone,displayField:"label",valueField:"value",onChange:e,className:"width-perc-100",filter:!0})),c.a.createElement("td",null,c.a.createElement(p.b,{type:"danger",icon:"fa fa-times",onClick:t,style:{marginTop:0}})))}}]),a}(l.PureComponent),y=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).addNewGroup=function(){n.props.addNewGroup(n.state.groupName)&&n.endAdd()},n.setGroupName=function(e){return n.setState({groupName:e})},n.setAddMode=function(e){return n.setState({editMode:e,groupName:""})},n.beginAdd=function(){return n.setAddMode(!0)},n.endAdd=function(){return n.setAddMode(!1)},n.state={},n}return Object(s.a)(a,[{key:"render",value:function(){var e=this.endAdd,t=this.addNewGroup,a=this.setGroupName,n=this.props,r=n.isPlugged,s=n.saveGroups,o=n.onDone,u=this.state,i=u.editMode,l=u.groupName;return c.a.createElement("tfoot",null,c.a.createElement("tr",null,c.a.createElement("td",{colSpan:5},c.a.createElement("div",{style:{height:30,paddingTop:4}},c.a.createElement("div",{className:"pull-left"},c.a.createElement("div",{className:"ui-inputgroup",hidden:i},c.a.createElement(p.b,{type:"success",icon:"fa fa-plus",label:"Add group",onClick:this.beginAdd})),c.a.createElement("div",{className:"ui-inputgroup",hidden:!i},c.a.createElement(p.j,{value:l,onChange:a,maxLength:40,placeholder:"Name of new group",onKey_Enter:t}),c.a.createElement(p.b,{type:"success",icon:"fa fa-check",disabled:!l,onClick:t}),c.a.createElement(p.b,{type:"danger",icon:"fa fa-close",onClick:e}))),c.a.createElement("div",{className:"pull-right"},r&&c.a.createElement("span",null,"Note: To permanently save the changes, go to Settings -> User groups from menu."),!r&&c.a.createElement(p.b,{type:"success",icon:"fa fa-save",label:"Save Changes",onClick:s}),r&&c.a.createElement(p.b,{icon:"fa fa-save",label:"Done",onClick:o}))))))}}]),a}(l.PureComponent),j=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).setEditMode=function(e){return n.setState({editMode:e,groupName:n.props.group.name})},n.beginEdit=function(){return n.setEditMode(!0)},n.endEdit=function(){return n.setEditMode(!1)},n.setGroupName=function(e){return n.setState({groupName:e})},n.updateGroupName=function(){var e=Object(o.a)(n).props,t=e.group,a=e.hasGroupWithName,r=n.state.groupName;a(r=r.trim(),t)?n.$message.warning("The group with the name '".concat(r,"' already exists!"),"Group already exists"):(n.props.group.name=r,n.endEdit())},Object(g.b)(Object(o.a)(n),"MessageService"),n.state={editMode:!1},n}return Object(s.a)(a,[{key:"render",value:function(){var e=this.beginEdit,t=this.endEdit,a=this.setGroupName,n=this.updateGroupName,r=this.state,s=r.editMode,o=r.groupName,u=this.props.group;return s?c.a.createElement("div",{className:"ui-inputgroup"},c.a.createElement(p.j,{value:o,maxLength:40,onChange:a}),c.a.createElement(p.b,{type:"success",icon:"fa fa-check",onClick:n}),c.a.createElement(p.b,{type:"danger",icon:"fa fa-undo",onClick:t})):c.a.createElement("div",{onClick:e},c.a.createElement("span",{style:{fontWeight:600,fontSize:17}},u.name," "),"(",u.users.length," users) ",c.a.createElement("i",{className:"fa fa-edit"}))}}]),a}(l.PureComponent)}}]);
//# sourceMappingURL=34.7be793bc.chunk.js.map