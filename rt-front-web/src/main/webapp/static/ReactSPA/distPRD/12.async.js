(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[12],{"5SSE":function(e,a,t){e.exports={avatarHolder:"antd-pro\\main\\webapp\\static\\-react-s-p-a\\src\\pages\\-trade\\-basic\\-dashboard-avatarHolder",name:"antd-pro\\main\\webapp\\static\\-react-s-p-a\\src\\pages\\-trade\\-basic\\-dashboard-name",detail:"antd-pro\\main\\webapp\\static\\-react-s-p-a\\src\\pages\\-trade\\-basic\\-dashboard-detail",title:"antd-pro\\main\\webapp\\static\\-react-s-p-a\\src\\pages\\-trade\\-basic\\-dashboard-title",group:"antd-pro\\main\\webapp\\static\\-react-s-p-a\\src\\pages\\-trade\\-basic\\-dashboard-group",address:"antd-pro\\main\\webapp\\static\\-react-s-p-a\\src\\pages\\-trade\\-basic\\-dashboard-address",tagsTitle:"antd-pro\\main\\webapp\\static\\-react-s-p-a\\src\\pages\\-trade\\-basic\\-dashboard-tagsTitle",teamTitle:"antd-pro\\main\\webapp\\static\\-react-s-p-a\\src\\pages\\-trade\\-basic\\-dashboard-teamTitle",tags:"antd-pro\\main\\webapp\\static\\-react-s-p-a\\src\\pages\\-trade\\-basic\\-dashboard-tags",team:"antd-pro\\main\\webapp\\static\\-react-s-p-a\\src\\pages\\-trade\\-basic\\-dashboard-team",tabsCard:"antd-pro\\main\\webapp\\static\\-react-s-p-a\\src\\pages\\-trade\\-basic\\-dashboard-tabsCard"}},N0Iu:function(e,a,t){"use strict";var l=t("TqRt"),r=t("284h");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,t("IzEo");var n=l(t("bx4M"));t("+L6B");var c=l(t("2/Rp"));t("giR+");var u=l(t("fyUT")),d=l(t("pVnL")),s=l(t("lwsE")),o=l(t("W8MJ")),i=l(t("a1gu")),p=l(t("Nsbk")),f=l(t("7W2i"));t("5NDa");var m=l(t("5rEg"));t("OaEy");var E=l(t("2fM7"));t("7Kak");var h=l(t("9yH6"));t("y8nQ");var b,v,g,y=l(t("Vl3Y")),C=r(t("q1tI")),F=t("MuoO"),w=l(t("bylr")),I=y.default.Item,S=h.default.Group,T=h.default.Button,A=E.default.Option,D=m.default.Search,L={labelCol:{xs:{span:24},sm:{span:6}},wrapperCol:{xs:{span:24},sm:{span:16},md:{span:14}}},N={wrapperCol:{xs:{span:24,offset:0},sm:{span:16,offset:4}}},k=(b=(0,F.connect)(function(e){var a=e.tick,t=e.operation,l=e.account,r=e.contract,n=e.basicTradeForm;return{tick:a,operation:t,account:l,contract:r,basicTradeForm:n}}),v=y.default.create(),b(g=v(g=function(e){function a(e){var t;return(0,s.default)(this,a),t=(0,i.default)(this,(0,p.default)(a).call(this,e)),t.handleSubscribe=function(e,a){var l=t.props,r=l.dispatch,n=l.form,c=l.account;n.validateFields(["fuzzySymbol"],function(e,t){if(a.preventDefault(),null==e||void 0===e.fuzzySymbol){var l=n.getFieldValue("rtAccountIDs");if(l.length>0)c.accounts.forEach(function(e){if(l.includes("ALL")||l.includes(e.rtAccountID)){var a={symbol:t.fuzzySymbol,exchange:n.getFieldValue("exchange"),productClass:n.getFieldValue("productClass"),currency:n.getFieldValue("currency"),gatewayID:e.gatewayID};r({type:"operation/subscribe",payload:a})}});else{var u={symbol:t.fuzzySymbol,exchange:n.getFieldValue("exchange"),productClass:n.getFieldValue("productClass"),currency:n.getFieldValue("currency")};r({type:"operation/subscribe",payload:u})}}})},t.handleSubmit=function(e){var a=t.props,l=a.dispatch,r=a.form,n=a.account;e.preventDefault(),r.validateFieldsAndScroll(function(e,a){if(!e){var t=r.getFieldValue("rtAccountIDs");n.accounts.forEach(function(e){if(t.includes("ALL")||t.includes(e.rtAccountID)){var n={symbol:a.fuzzySymbol,direction:r.getFieldValue("direction"),offset:r.getFieldValue("offset"),price:r.getFieldValue("price"),priceType:r.getFieldValue("priceType"),exchange:r.getFieldValue("exchange"),currency:r.getFieldValue("currency"),productClass:r.getFieldValue("productClass"),volume:r.getFieldValue("volume"),gatewayID:e.gatewayID,rtAccountID:e.rtAccountID};l({type:"operation/sendOrder",payload:n})}})}})},t.resetForm=function(){var e=t.props,a=e.form,l=e.dispatch;l({type:"basicTradeForm/reset",payload:{}}),a.resetFields()},t.cancelAllOrders=function(e){var a=t.props.dispatch;e.preventDefault(),a({type:"operation/cancelAllOrders",payload:{}})},t.handleFuzzySymbolChange=function(e){var a=t.props,l=a.dispatch,r=a.tick,n=a.form;l({type:"basicTradeForm/update",payload:{fuzzySymbol:e.target.value}}),l({type:"basicTradeForm/updateTick",payload:r.ticks}),n.resetFields(["price"])},t.handlePriceAutoCompleteChange=function(e){var a=t.props,l=a.dispatch,r=a.tick,n=a.form;l({type:"basicTradeForm/update",payload:{priceAutoComplete:e.target.value}}),l({type:"basicTradeForm/updateTick",payload:r.ticks}),n.resetFields(["price"])},t.handleDirectionChange=function(e){var a=t.props,l=a.dispatch,r=a.tick,n=a.form;l({type:"basicTradeForm/update",payload:{direction:e.target.value}}),l({type:"basicTradeForm/updateTick",payload:r.ticks}),n.resetFields(["price"])},t.handlePriceChange=function(e){var a=t.props,l=a.dispatch,r=a.tick,n=a.form;l({type:"basicTradeForm/update",payload:{price:e}}),l({type:"basicTradeForm/updateTick",payload:r.ticks}),n.resetFields(["price"])},t.handleExchangeChange=function(e){var a=t.props,l=a.dispatch,r=a.tick,n=a.form;l({type:"basicTradeForm/update",payload:{exchange:e}}),l({type:"basicTradeForm/updateTick",payload:r.ticks}),n.resetFields(["price"])},t.onWindowResize=function(){t.setState({cardHeight:(window.innerHeight-120>650?window.innerHeight-120:650)||650})},t.componentDidMount=function(){var e=t.props,a=e.dispatch,l=e.form;a({type:"account/fetchAccounts",payload:{}}),a({type:"basicTradeForm/fetchContracts",payload:{}}),a({type:"basicTradeForm/reset",payload:{}});var r=l;a({type:"basicTradeForm/update",payload:{form:r}}),window.addEventListener("resize",t.onWindowResize)},t.componentWillUnmount=function(){window.removeEventListener("resize",t.onWindowResize)},t.state={cardHeight:(window.innerHeight-70>650?window.innerHeight-70:650)||650},t}return(0,f.default)(a,e),(0,o.default)(a,[{key:"render",value:function(){var e=this,a=this.props,t=a.submitting,l=a.account.accounts,r=a.form.getFieldDecorator,s=a.basicTradeForm,o=(this.state.cardHeight,[]);l.forEach(function(e){o.push(C.default.createElement(A,{key:e.rtAccountID,value:e.rtAccountID},"\u8d26\u6237:[".concat(e.accountID,"] \u5e01\u79cd:[").concat(e.currency,"] \u7f51\u5173:[").concat(e.gatewayDisplayName,"]")))});var i=!1;return"MANUAL"!==s.priceAutoComplete&&(i=!0),C.default.createElement(n.default,{bordered:!1,gutter:0},C.default.createElement(y.default,{onSubmit:this.handleSubmit,hideRequiredMark:!0,gutter:0},C.default.createElement(I,(0,d.default)({className:w.default.formItem},L,{label:"\u4ee3\u7801"}),r("fuzzySymbol",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u4ee3\u7801",initialValue:s.fuzzySymbol}]})(C.default.createElement(D,{placeholder:"\u652f\u6301\u6a21\u7cca\u67e5\u8be2",onChange:function(a){return e.handleFuzzySymbolChange(a)},onSearch:function(a,t){return e.handleSubscribe(a,t)},enterButton:!0}))),C.default.createElement(I,(0,d.default)({className:w.default.formItem},L,{label:"\u65b9\u5411"}),r("direction",{rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u65b9\u5411"}]})(C.default.createElement(S,{size:"small",onChange:this.handleDirectionChange,buttonStyle:"solid"},C.default.createElement(T,{size:"small",value:"LONG"},"\u591a"),C.default.createElement(T,{size:"small",value:"SHORT"},"\u7a7a")))),C.default.createElement(I,(0,d.default)({className:w.default.formItem},L,{label:"\u5f00\u5e73"}),r("offset",{rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u5f00\u5e73"}]})(C.default.createElement(S,{size:"small",onChange:this.onChange,buttonStyle:"solid"},C.default.createElement(T,{value:"OPEN"},"\u5f00\u4ed3"),C.default.createElement(T,{value:"CLOSE"},"\u5e73\u4ed3"),C.default.createElement(T,{value:"CLOSETODAY"},"\u5e73\u4eca"),C.default.createElement(T,{value:"CLOSEYESTERDAY"},"\u5e73\u6628")))),C.default.createElement(I,(0,d.default)({className:w.default.formItem},L,{label:"\u62a5\u4ef7\u7c7b\u578b"}),r("priceType",{rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u62a5\u4ef7\u7c7b\u578b"}],initialValue:"LIMITPRICE"})(C.default.createElement(S,{size:"small",onChange:this.onChange,buttonStyle:"solid"},C.default.createElement(T,{value:"FAK"},"FAK"),C.default.createElement(T,{value:"FOK"},"FOK"),C.default.createElement(T,{value:"LIMITPRICE"},"\u9650\u4ef7"),C.default.createElement(T,{value:"MARKETPRICE"},"\u5e02\u4ef7")))),C.default.createElement(I,(0,d.default)({className:w.default.formItem},L,{label:"\u4ef7\u683c"}),r("price",{initialValue:s.price})(C.default.createElement(u.default,{onChange:this.handlePriceChange,disabled:i,style:{width:"100%"},min:0,max:999999999,step:s.step}))),C.default.createElement(I,(0,d.default)({className:w.default.formItem},L,{label:"\u81ea\u52a8\u586b\u4ef7"}),r("priceAutoComplete",{initialValue:"MANUAL"})(C.default.createElement(S,{size:"small",buttonStyle:"solid",onChange:this.handlePriceAutoCompleteChange},C.default.createElement(T,{value:"MANUAL"},"\u624b\u52a8"),C.default.createElement(T,{value:"LASTPRICE"},"\u6700\u65b0"),C.default.createElement(T,{value:"ACTIVE"},"\u5bf9\u624b"),C.default.createElement(T,{value:"QUEUE"},"\u6392\u961f"),C.default.createElement(T,{value:"ADD2"},"\u8d852")))),C.default.createElement(I,(0,d.default)({className:w.default.formItem},L,{label:"\u6570\u91cf"}),r("volume",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u6570\u91cf"}]})(C.default.createElement(u.default,{style:{width:"100%"},min:0,max:999999999,step:1}))),C.default.createElement(I,(0,d.default)({className:w.default.formItem},L,{label:"\u8d26\u6237"}),r("rtAccountIDs",{rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u8d26\u6237"}],initialValue:[]})(C.default.createElement(E.default,{mode:"multiple",showSearch:!0,dropdownMatchSelectWidth:!1,placeholder:"\u8bf7\u9009\u62e9\u8d26\u6237",optionFilterProp:"children",filterOption:function(e,a){return a.props.children.toLowerCase().indexOf(e.toLowerCase())>=0}},C.default.createElement(A,{value:"ALL"},"\u6240\u6709\u8d26\u6237"),o))),C.default.createElement(I,(0,d.default)({className:w.default.formItem},N),C.default.createElement(c.default,{size:"small",type:"danger",onDoubleClick:this.cancelAllOrders},"\u5168\u90e8\u64a4\u9500"),C.default.createElement(c.default,{htmlType:"reset",onClick:this.resetForm,style:{marginLeft:5}},"\u91cd\u7f6e"),C.default.createElement(c.default,{type:"primary",htmlType:"submit",loading:t,style:{marginLeft:5}},"\u53d1\u5355")),C.default.createElement(I,(0,d.default)({className:w.default.formItem},L,{label:C.default.createElement("span",null,"\u4ea4\u6613\u6240",C.default.createElement("em",{className:w.default.optional},"\u53ef\u9009"))}),r("exchange")(C.default.createElement(E.default,{onChange:this.handleExchangeChange,showSearch:!0,placeholder:"\u8bf7\u9009\u62e9\u4ea4\u6613\u6240",optionFilterProp:"children",filterOption:function(e,a){return a.props.children.toLowerCase().indexOf(e.toLowerCase())>=0}},C.default.createElement(A,{value:"SEHK"},"SEHK \u6e2f\u4ea4\u6240"),C.default.createElement(A,{value:"HKFE"},"HKFE \u9999\u6e2f\u671f\u8d27\u4ea4\u6613\u6240"),C.default.createElement(A,{value:"IDEALPRO"},"IDEALPRO IB\u5916\u6c47ECN"),C.default.createElement(A,{value:"SSE"},"SSE \u4e0a\u4ea4\u6240"),C.default.createElement(A,{value:"SZSE"},"SZSE \u6df1\u4ea4\u6240"),C.default.createElement(A,{value:"CFFEX"},"CFFEX \u4e2d\u91d1\u6240"),C.default.createElement(A,{value:"SHFE"},"SHFE \u4e0a\u671f\u6240"),C.default.createElement(A,{value:"CZCE"},"CZCE \u90d1\u5546\u6240"),C.default.createElement(A,{value:"DCE"},"DCE \u5927\u5546\u6240"),C.default.createElement(A,{value:"SGE"},"SGE \u4e0a\u91d1\u6240"),C.default.createElement(A,{value:"INE"},"INE \u56fd\u9645\u80fd\u6e90\u4ea4\u6613\u4e2d\u5fc3"),C.default.createElement(A,{value:"SMART"},"SMART IB\u667a\u80fd\u8def\u7531"),C.default.createElement(A,{value:"NYMEX"},"NYMEX IB\u671f\u8d27"),C.default.createElement(A,{value:"GLOBEX"},"GLOBEX CME\u7535\u5b50\u4ea4\u6613\u5e73\u53f0"),C.default.createElement(A,{value:"CME"},"CME \u829d\u5546\u6240"),C.default.createElement(A,{value:"ICE"},"ICE \u6d32\u9645\u4ea4\u6613\u6240"),C.default.createElement(A,{value:"LME"},"LME \u4f26\u6566\u91d1\u5c5e\u4ea4\u6613\u6240"),C.default.createElement(A,{value:"OANDA"},"OANDA \u5916\u6c47\u505a\u5e02\u5546"),C.default.createElement(A,{value:"FXCM"},"FXCM \u5916\u6c47\u505a\u5e02\u5546")))),C.default.createElement(I,(0,d.default)({className:w.default.formItem},L,{label:C.default.createElement("span",null,"\u5e01\u79cd",C.default.createElement("em",{className:w.default.optional},"\u53ef\u9009"))}),r("currency")(C.default.createElement(E.default,{showSearch:!0,placeholder:"\u8bf7\u9009\u62e9\u5e01\u79cd",optionFilterProp:"children",filterOption:function(e,a){return a.props.children.toLowerCase().indexOf(e.toLowerCase())>=0}},C.default.createElement(A,{value:"USD"},"USD \u7f8e\u5143"),C.default.createElement(A,{value:"CNY"},"CNY \u4eba\u6c11\u5e01"),C.default.createElement(A,{value:"CNH"},"CNH \u79bb\u5cb8\u4eba\u6c11\u5e01"),C.default.createElement(A,{value:"HKD"},"HKD \u6e2f\u5e01"),C.default.createElement(A,{value:"JPY"},"JPY \u65e5\u5143"),C.default.createElement(A,{value:"EUR"},"EUR \u6b27\u5143"),C.default.createElement(A,{value:"GBP"},"GBP \u82f1\u9551"),C.default.createElement(A,{value:"DEM"},"DEM \u5fb7\u56fd\u9a6c\u514b"),C.default.createElement(A,{value:"CHF"},"CHF \u745e\u58eb\u6cd5\u90ce"),C.default.createElement(A,{value:"FRF"},"FRF \u6cd5\u56fd\u6cd5\u90ce"),C.default.createElement(A,{value:"CAD"},"CAD \u52a0\u62ff\u5927\u5143"),C.default.createElement(A,{value:"AUD"},"AUD \u6fb3\u5927\u5229\u4e9a\u5143"),C.default.createElement(A,{value:"ATS"},"ATS \u5965\u5730\u5229\u5148\u4ee4"),C.default.createElement(A,{value:"FIM"},"FIM \u82ac\u5170\u9a6c\u514b"),C.default.createElement(A,{value:"BEF"},"BEF \u6bd4\u5229\u65f6\u6cd5\u90ce"),C.default.createElement(A,{value:"IEP"},"IEP \u7231\u5c14\u5170\u9551"),C.default.createElement(A,{value:"ITL"},"ITL \u610f\u5927\u5229\u91cc\u62c9"),C.default.createElement(A,{value:"LUF"},"LUF \u5362\u68ee\u5821\u6cd5\u90ce"),C.default.createElement(A,{value:"NLG"},"NLG \u8377\u5170\u76fe"),C.default.createElement(A,{value:"PTE"},"PTE \u8461\u8404\u7259\u57c3\u65af\u5e93\u591a"),C.default.createElement(A,{value:"ESP"},"ESP \u897f\u73ed\u7259\u6bd4\u585e\u5854"),C.default.createElement(A,{value:"IDR"},"IDR \u5370\u5c3c\u76fe"),C.default.createElement(A,{value:"MYR"},"MYR \u9a6c\u6765\u897f\u4e9a\u6797\u5409\u7279"),C.default.createElement(A,{value:"NZD"},"NZD \u65b0\u897f\u5170\u5143"),C.default.createElement(A,{value:"PHP"},"PHP \u83f2\u5f8b\u5bbe\u6bd4\u7d22"),C.default.createElement(A,{value:"SUR"},"SUR \u4fc4\u7f57\u65af\u5362\u5e03"),C.default.createElement(A,{value:"SGD"},"SGD \u65b0\u52a0\u5761\u5143"),C.default.createElement(A,{value:"KRW"},"KRW \u97e9\u56fd\u5143"),C.default.createElement(A,{value:"THB"},"THB \u6cf0\u94e2")))),C.default.createElement(I,(0,d.default)({className:w.default.formItem},L,{label:C.default.createElement("span",null,"\u4ea7\u54c1\u7c7b\u578b",C.default.createElement("em",{className:w.default.optional},"\u53ef\u9009"))}),r("productClass")(C.default.createElement(E.default,{showSearch:!0,placeholder:"\u8bf7\u9009\u62e9\u4ea7\u54c1\u7c7b\u578b",optionFilterProp:"children",filterOption:function(e,a){return a.props.children.toLowerCase().indexOf(e.toLowerCase())>=0}},C.default.createElement(A,{value:"FUTURES"},"\u671f\u8d27"),C.default.createElement(A,{value:"FOREX"},"\u5916\u6c47"),C.default.createElement(A,{value:"EQUITY"},"\u80a1\u7968"),C.default.createElement(A,{value:"OPTION"},"\u671f\u6743"),C.default.createElement(A,{value:"SPOT"},"\u73b0\u8d27"))))))}}]),a}(C.PureComponent))||g)||g),P=k;a.default=P},TxHJ:function(e,a,t){"use strict";var l=t("284h"),r=t("TqRt");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,t("14J3");var n=r(t("BMrR"));t("IzEo");var c=r(t("bx4M"));t("jCWc");var u=r(t("kPKH")),d=r(t("RIqP")),s=r(t("lwsE")),o=r(t("W8MJ")),i=r(t("a1gu")),p=r(t("Nsbk")),f=r(t("7W2i")),m=r(t("PJYZ")),E=l(t("q1tI")),h=r(t("usdK")),b=r(t("v99g")),v=r(t("5SSE")),g=r(t("N0Iu")),y=function(e){function a(){var e,t;(0,s.default)(this,a);for(var l=arguments.length,r=new Array(l),n=0;n<l;n++)r[n]=arguments[n];return t=(0,i.default)(this,(e=(0,p.default)(a)).call.apply(e,[this].concat(r))),t.state={newTags:[],inputValue:""},t.onTabChange=function(e){var a=t.props.match;switch(e){case"tradeBoard":h.default.push("".concat(a.url,"/tradeBoard"));break;case"accounts":h.default.push("".concat(a.url,"/accounts"));break;case"positions":h.default.push("".concat(a.url,"/positions"));break;case"orders":h.default.push("".concat(a.url,"/orders"));break;case"transactions":h.default.push("".concat(a.url,"/transactions"));break;default:break}},t.saveInputRef=function(e){t.input=e},t.handleInputChange=function(e){t.setState({inputValue:e.target.value})},t.handleInputConfirm=function(){var e=(0,m.default)((0,m.default)(t)),a=e.state,l=a.inputValue,r=a.newTags;l&&0===r.filter(function(e){return e.label===l}).length&&(r=(0,d.default)(r).concat([{key:"new-".concat(r.length),label:l}])),t.setState({newTags:r,inputValue:""})},t}return(0,f.default)(a,e),(0,o.default)(a,[{key:"render",value:function(){var e=this.props,a=e.listLoading,t=e.match,l=e.location,r=e.children,d=[{key:"tradeBoard",tab:E.default.createElement("span",null,"\u4ea4\u6613")},{key:"orders",tab:E.default.createElement("span",null,"\u59d4\u6258")},{key:"transactions",tab:E.default.createElement("span",null,"\u6210\u4ea4")},{key:"positions",tab:E.default.createElement("span",null,"\u6301\u4ed3")},{key:"accounts",tab:E.default.createElement("span",null,"\u8d26\u6237")}];return E.default.createElement(b.default,{className:v.default.userCenter},E.default.createElement(n.default,{gutter:24},E.default.createElement(u.default,{lg:7,md:24},E.default.createElement(g.default,null)),E.default.createElement(u.default,{lg:17,md:24},E.default.createElement(c.default,{className:v.default.tabsCard,bordered:!1,tabList:d,activeTabKey:l.pathname.replace("".concat(t.path,"/"),""),onTabChange:this.onTabChange,loading:a},r))))}}]),a}(E.PureComponent),C=y;a.default=C},bylr:function(e,a,t){e.exports={card:"antd-pro\\main\\webapp\\static\\-react-s-p-a\\src\\pages\\-trade\\-basic\\-trade-form-card",heading:"antd-pro\\main\\webapp\\static\\-react-s-p-a\\src\\pages\\-trade\\-basic\\-trade-form-heading",steps:"antd-pro\\main\\webapp\\static\\-react-s-p-a\\src\\pages\\-trade\\-basic\\-trade-form-steps",errorIcon:"antd-pro\\main\\webapp\\static\\-react-s-p-a\\src\\pages\\-trade\\-basic\\-trade-form-errorIcon",errorPopover:"antd-pro\\main\\webapp\\static\\-react-s-p-a\\src\\pages\\-trade\\-basic\\-trade-form-errorPopover",errorListItem:"antd-pro\\main\\webapp\\static\\-react-s-p-a\\src\\pages\\-trade\\-basic\\-trade-form-errorListItem",errorField:"antd-pro\\main\\webapp\\static\\-react-s-p-a\\src\\pages\\-trade\\-basic\\-trade-form-errorField",editable:"antd-pro\\main\\webapp\\static\\-react-s-p-a\\src\\pages\\-trade\\-basic\\-trade-form-editable",advancedForm:"antd-pro\\main\\webapp\\static\\-react-s-p-a\\src\\pages\\-trade\\-basic\\-trade-form-advancedForm",formItem:"antd-pro\\main\\webapp\\static\\-react-s-p-a\\src\\pages\\-trade\\-basic\\-trade-form-formItem",optional:"antd-pro\\main\\webapp\\static\\-react-s-p-a\\src\\pages\\-trade\\-basic\\-trade-form-optional"}}}]);