(this["webpackJsonpmongo-express-react"]=this["webpackJsonpmongo-express-react"]||[]).push([[0],{194:function(e,t,n){e.exports=n(421)},420:function(e,t,n){},421:function(e,t,n){"use strict";n.r(t);var r=n(51),a=n(52),i=n(54),o=n(53),l=n(55),s=(n(195),n(204),n(1)),c=n.n(s),u=n(69),m=n(118),p=n.n(m);function f(e){return{type:"ITEMS_IS_LOADING",isLoading:e}}var h=n(86),d=n.n(h),E=n(46),b=n(193);var g=Object(E.c)({items:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ITEMS_FETCH_DATA_SUCCESS":return t.items;default:return e}},itemsHasErrored:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ITEMS_HAS_ERRORED":return t.hasErrored;default:return e}},itemsIsLoading:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ITEMS_IS_LOADING":return t.isLoading;default:return e}}});var v,O=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(i.a)(this,Object(o.a)(t).call(this,e))).state={display:"none"},n}return Object(l.a)(t,e),Object(a.a)(t,[{key:"onItemClickHandler",value:function(e,t){console.log("test"),console.log(e),"none"===this.state.display?this.setState({display:"block"}):this.setState({display:"none"})}},{key:"render",value:function(){return c.a.createElement("li",{onClick:this.onItemClickHandler.bind(this,this.props.item)},this.props.item.Title,c.a.createElement("div",{style:this.state},c.a.createElement("div",null,c.a.createElement("h1",null,"Name:  ",this.props.item.TeleworkerName.Name)),c.a.createElement("label",{for:"fname"},"Office:"),c.a.createElement("input",{type:"text",id:"fname",name:"fname",value:this.props.item.Office}),c.a.createElement("label",{for:"lname"},"Position Ttile: "),c.a.createElement("input",{type:"text",id:"lname",name:"lname",value:this.props.item.PositionTitle}),c.a.createElement("button",null,"Update Item")))}}]),t}(s.Component),y=function(e){function t(){return Object(r.a)(this,t),Object(i.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(a.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchData("http://sharepoint.fda.gov/orgs/CDER-OMDMSSvc/TeleworkMgmt/_vti_bin/ListData.svc/TeleworkMaster?$expand=TeleworkerName&?$filter=SuperOffice eq null")}},{key:"render",value:function(){return this.props.hasErrored?c.a.createElement("p",null,"Sorry! There was an error loading the items"):this.props.isLoading?c.a.createElement("p",null,"Loading\u2026"):c.a.createElement("ul",null,this.props.items.filter((function(e){return null==e.Office&&"Historical Data Upload"!=e.Title})).map((function(e){return c.a.createElement(O,{item:e})})))}}]),t}(s.Component),S=Object(u.b)((function(e){return{items:e.items,hasErrored:e.itemsHasErrored,isLoading:e.itemsIsLoading}}),(function(e){return{fetchData:function(t){return e(function(e){return function(t){t(f(!0)),console.log("called item fetch:"+e),p.a.get(e).then((function(e){if(200==!e.status)throw Error(e.statusText);return t(f(!1)),e})).then((function(e){return e.data.d.results})).then((function(e){return t(function(e){return{type:"ITEMS_FETCH_DATA_SUCCESS",items:e}}(e))})).catch((function(e){console.log(e)}))}}(t))}}}))(y),T=(n(420),console.log("configure store was called"),console.log(v),Object(E.d)(g,v,Object(E.a)(b.a))),j=function(e){function t(){return Object(r.a)(this,t),Object(i.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(a.a)(t,[{key:"render",value:function(){return c.a.createElement(u.a,{store:T},c.a.createElement("div",null,c.a.createElement("h2",null,"Telework Update"),c.a.createElement(S,null)))}}]),t}(s.Component);d.a.render(c.a.createElement(j,null),document.getElementById("root"))}},[[194,1,2]]]);
//# sourceMappingURL=main.b3e8f511.chunk.js.map