(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0cf4c6ef"],{2405:function(t,e,n){"use strict";var r=n("eca6"),a=n.n(r);a.a},"99a5":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("grade-box",{attrs:{origin:t.origin,title:t.$t("upgrade")}},[n("div",{staticClass:"upgrade"},[n("div",{staticClass:"title"},[n("span",[t._v(t._s(t.$t("referralIdentity")))])]),n("div",{staticClass:"grade"},[n("Button",{class:1===t.grade?"active":"",attrs:{disabled:t.origin>=1},on:{click:function(e){t.grade=1}}},[t._v("M1")]),n("Button",{class:2===t.grade?"active":"",attrs:{disabled:t.origin>=2},on:{click:function(e){t.grade=2}}},[t._v("M2")])],1),n("div",{staticClass:"text"},[n("p",[t._v(t._s(t.$t("zunxiang"))+" "),n("span",[t._v("M"+t._s(t.grade)+t._s(t.$t("level")))])]),n("p",[t._v(t._s(t.$t("peisong"))+" "),n("span",[t._v(t._s(t.token)+" MPC")])]),n("p",[t._v(t._s(t.$t("zhengsong"))+" "),n("span",{domProps:{textContent:t._s(t.shareLevel)}})])]),n("Button",{attrs:{disabled:t.origin>=3,color:"linear-gradient(41deg, #F5D755, #FFA271)"},on:{click:t.buyGrade}},[t._v(t._s(t.$t("liji"))+t._s(t.price)+" USDT")])],1),n("authorization",{attrs:{tokenType:"USDT",show:t.authorizedAccess,click:t.authorizedAccessFun,needAuthorization:t.price,authorizationEnds:t.authorizationEnds},on:{authorizationEnds:t.end}})],1)},a=[],s=(n("d81d"),n("a9e3"),n("d3b7"),n("25f0"),n("96cf"),n("1da1")),i=(n("e7e5"),n("d399")),o=(n("66b9"),n("b650")),c={name:"grade",components:{Button:o["a"],"grade-box":function(){return n.e("chunk-555ae6bd").then(n.bind(null,"9785"))},authorization:function(){return Promise.resolve().then(n.bind(null,"5326"))}},data:function(){return{grade:0,origin:0,v1price:0,v2price:0,v3price:0,usdt:"0",authorizedAccess:!1,authorizationEnds:!1,USDTAuthorizedAccess:"",boughts:[]}},computed:{shareLevel:function(){switch(this.grade){case 2:return"2个M1";case 3:return"4个M1+2个M2";case 1:default:return 0}},token:function(){switch(this.grade){case 1:return this.v1Token;case 2:return this.v2Token;case 3:return this.v3Token;default:return 0}},price:function(){switch(this.grade){case 1:return this.v1price;case 2:return this.v2price;case 3:return this.v3price;default:return 0}}},methods:{buyGrade:function(){var t=this;return Number(this.usdt)<Number(this.price)?i["a"].fail(this.$t("InsufficientBalance")):Number(this.USDTAuthorizedAccess)<Number(this.price)?this.authorizedAccess=!0:(i["a"].loading({message:"正在交易中...",forbidClick:!0,duration:0}),void this.$tronWeb.call({contractAddress:this.$contracts.Manager.address,method:"paymentDLevel(uint256)",parameter:[{type:"uint256",value:this.grade}]}).then(function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.$contracts.Manager.paymentDLevel(t.grade).send({feeLimit:"200".toSun()}).then((function(e){sessionStorage.setItem("transactionHex",e);var n=setInterval((function(){window.tronWeb.trx.getTransaction(e).then((function(e){e.ret&&"SUCCESS"===e.ret[0].contractRet&&(sessionStorage.removeItem("transactionHex"),clearInterval(n),i["a"].clear(),t.App_Push("/setting"))}))}),2e3)})).catch((function(t){i["a"].clear(),console.log(t)}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(t){i["a"].clear(),console.log(t)})))},authorizedAccessFun:function(){var t=this;i["a"].loading({message:"正在交易中...",forbidClick:!0,duration:0}),this.$contracts.ERC20Token.approve(this.$contracts.Manager.address,this.price.toSun()).send({feeLimit:"200".toSun()}).then((function(e){sessionStorage.setItem("transactionHex",e);var n=setInterval((function(){window.tronWeb.trx.getTransaction(e).then((function(e){e.ret&&"SUCCESS"===e.ret[0].contractRet&&(sessionStorage.removeItem("transactionHex"),clearInterval(n),t.$tronWeb.call({contractAddress:t.$contracts.ERC20Token.address,method:"allowance(address,address)",parameter:[{type:"address",value:t.$address},{type:"address",value:t.$contracts.Manager.address}]}).then((function(e){i["a"].clear(),t.authorizedAccess=!1,t.authorizationEnds=!0,t.USDTAuthorizedAccess=e.toString().fromSun(),t.buyGrade()})))}))}),2e3)})).catch((function(t){i["a"].clear(),console.log(t)}))},end:function(){this.authorizedAccess=!1},init:function(){var t=this;this.$tronWeb.call({contractAddress:this.$contracts.Relations.address,method:"levelOf(address)",parameter:[{type:"address",value:this.$address}]}).then((function(e){var n=e.constant_result[0].decode(["uint256"]);t.origin=n.toNumber(),t.grade=t.origin<3?t.origin+1:t.origin})),this.$tronWeb.call({contractAddress:this.$contracts.Manager.address,method:"goodsMapping(uint256)",parameter:[{type:"uint256",value:1}]}).then((function(e){var n=e.constant_result[0].decode(["uint256","uint256","uint256"],["levelNum","price","sentToken"]),r=n.price,a=n.sentToken;t.v1price=r.toString().fromSun(),t.v1Token=a.toString().fromSun()})),this.$tronWeb.call({contractAddress:this.$contracts.Manager.address,method:"goodsMapping(uint256)",parameter:[{type:"uint256",value:2}]}).then((function(e){var n=e.constant_result[0].decode(["uint256","uint256","uint256"],["levelNum","price","sentToken"]),r=n.price,a=n.sentToken;t.v2price=r.toString().fromSun(),t.v2Token=a.toString().fromSun()})),this.$tronWeb.call({contractAddress:this.$contracts.Manager.address,method:"goodsMapping(uint256)",parameter:[{type:"uint256",value:3}]}).then((function(e){var n=e.constant_result[0].decode(["uint256","uint256","uint256"],["levelNum","price","sentToken"]),r=n.price,a=n.sentToken;t.v3price=r.toString().fromSun(),t.v3Token=a.toString().fromSun()})),this.$tronWeb.call({contractAddress:this.$contracts.ERC20Token.address,method:"balanceOf(address)",parameter:[{type:"address",value:this.$address}]}).then((function(e){var n=e.constant_result[0].decode(["uint256"]);t.usdt=n.toString().fromSun()})),this.$tronWeb.call({contractAddress:this.$contracts.ERC20Token.address,method:"allowance(address,address)",parameter:[{type:"address",value:this.$address},{type:"address",value:this.$contracts.Manager.address}]}).then((function(e){var n=e.constant_result[0].decode(["uint256"]);t.USDTAuthorizedAccess=n.toString().fromSun()})),this.$tronWeb.call({contractAddress:this.$contracts.Manager.address,method:"stockInfoList()"}).then((function(e){t.boughts=e.constant_result[0].decode(["uint256[]"]).map((function(t){return t.toString()}))}))}},created:function(){this.$tronWeb&&this.init()}},d=c,u=(n("2405"),n("2877")),l=Object(u["a"])(d,r,a,!1,null,"5b42aa4e",null);e["default"]=l.exports},d81d:function(t,e,n){"use strict";var r=n("23e7"),a=n("b727").map,s=n("d039"),i=n("1dde"),o=i("map"),c=o&&!s((function(){[].map.call({length:-1,0:1},(function(t){throw t}))}));r({target:"Array",proto:!0,forced:!o||!c},{map:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}})},eca6:function(t,e,n){}}]);
//# sourceMappingURL=chunk-0cf4c6ef.09d9a18b.js.map