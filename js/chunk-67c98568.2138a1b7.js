(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-67c98568"],{"827f":function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("grade-box",{attrs:{title:t.$t("supernode"),origin:t.origin,supernode:t.supernode}},[n("div",{staticClass:"supernode"},[n("div",{staticClass:"title"},[n("span",[t._v(t._s(t.$t("supernode")))]),n("p",[t._v(t._s(t.bought)),n("span",[t._v("/33")])])]),n("div",{staticClass:"text"},[n("p",[t._v(t._s(t.$t("zunxiang"))+" "),n("span",[t._v("M3"+t._s(t.$t("level")))])]),n("p",[t._v(t._s(t.$t("peisong"))+" "),n("span",[t._v(t._s(t.nodeToken)+" MPC")])]),n("p",[t._v(t._s(t.$t("zhengsong"))+" "),n("span",[t._v("5个M1+2个M2")])]),n("p",[t._v(t._s(t.$t("fenhong"))+" "),n("span",[t._v("1个")])])]),n("Button",{attrs:{disabled:t.supernode>=6,color:"linear-gradient(41deg, #F5D755, #FFA271)"},on:{click:t.buyNode}},[t._v(t._s(t.$t("liji"))+t._s(t.nodePrice)+" USDT")])],1),n("authorization",{attrs:{tokenType:"USDT",show:t.authorizedAccess,click:t.authorizedAccessFun,needAuthorization:t.nodePrice,authorizationEnds:t.authorizationEnds},on:{authorizationEnds:t.end}})],1)},r=[],a=(n("a9e3"),n("d3b7"),n("25f0"),n("3835")),o=(n("96cf"),n("1da1")),i=(n("e7e5"),n("d399")),c=(n("66b9"),n("b650")),d={name:"supernode",components:{Button:c["a"],"grade-box":function(){return n.e("chunk-08a8dadf").then(n.bind(null,"9785"))},authorization:function(){return Promise.resolve().then(n.bind(null,"5326"))}},data:function(){return{origin:0,nodePrice:0,nodeToken:0,usdt:"0",authorizedAccess:!1,authorizationEnds:!1,USDTAuthorizedAccess:"",supernode:0,bought:0}},methods:{buyNode:function(){var t=this;return Number(this.usdt)<Number(this.nodePrice)?i["a"].fail(this.$t("InsufficientBalance")):Number(this.USDTAuthorizedAccess)<Number(this.nodePrice)?this.authorizedAccess=!0:(i["a"].loading({message:"正在交易中...",forbidClick:!0,duration:0}),void this.$tronWeb.call({contractAddress:this.$contracts.Manager.address,method:"paymentSuperNode()"}).then(function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.$contracts.Manager.paymentSuperNode().send({feeLimit:"150".toSun()}).then((function(e){sessionStorage.setItem("transactionHex",e);var n=setInterval((function(){window.tronWeb.trx.getTransaction(e).then((function(e){e.ret&&"SUCCESS"===e.ret[0].contractRet&&(sessionStorage.removeItem("transactionHex"),clearInterval(n),i["a"].clear(),t.App_Push("/setting"))}))}),2e3)}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(t){i["a"].clear(),console.log(t)})))},authorizedAccessFun:function(){var t=this;i["a"].loading({message:"正在交易中...",forbidClick:!0,duration:0}),this.$contracts.ERC20Token.approve(this.$contracts.Manager.address,this.nodePrice.toSun()).send({feeLimit:"150".toSun()}).then((function(e){sessionStorage.setItem("transactionHex",e);var n=setInterval((function(){window.tronWeb.trx.getTransaction(e).then((function(e){e.ret&&"SUCCESS"===e.ret[0].contractRet&&(sessionStorage.removeItem("transactionHex"),clearInterval(n),t.$tronWeb.call({contractAddress:t.$contracts.ERC20Token.address,method:"allowance(address,address)",parameter:[{type:"address",value:t.$address},{type:"address",value:t.$contracts.Manager.address}]}).then((function(e){i["a"].clear(),t.authorizedAccess=!1,t.authorizationEnds=!0,t.USDTAuthorizedAccess=e.constant_result[0].decode(["uint256"]).toString().fromSun(),t.buyNode()})))}))}),2e3)})).catch((function(t){i["a"].clear(),console.log(t)}))},end:function(){this.authorizedAccess=!1},init:function(){var t=this;this.$tronWeb.call({contractAddress:this.$contracts.Manager.address,method:"purchasedMapping(address)",parameter:[{type:"address",value:this.$address}]}).then((function(e){var n=e.constant_result[0].decode(["uint256","uint256","uint256"],["levelNum","price","sentToken"]),s=n.levelNum;t.supernode=s.toNumber()})),this.$tronWeb.call({contractAddress:this.$contracts.Relations.address,method:"levelOf(address)",parameter:[{type:"address",value:this.$address}]}).then((function(e){var n=e.constant_result[0].decode(["uint256"]);t.origin=n.toNumber()})),this.$tronWeb.call({contractAddress:this.$contracts.Manager.address,method:"goodsMapping(uint256)",parameter:[{type:"uint256",value:6}]}).then((function(e){var n=e.constant_result[0].decode(["uint256","uint256","uint256"],["levelNum","price","sentToken"]),s=n.price,r=n.sentToken;t.nodePrice=s.toString().fromSun(),t.nodeToken=r.toString().fromSun()})),this.$tronWeb.call({contractAddress:this.$contracts.ERC20Token.address,method:"balanceOf(address)",parameter:[{type:"address",value:this.$address}]}).then((function(e){var n=e.constant_result[0].decode(["uint256"]);t.usdt=n.toString().fromSun()})),this.$tronWeb.call({contractAddress:this.$contracts.ERC20Token.address,method:"allowance(address,address)",parameter:[{type:"address",value:this.$address},{type:"address",value:this.$contracts.Manager.address}]}).then((function(e){var n=e.constant_result[0].decode(["uint256"]);t.USDTAuthorizedAccess=n.toString().fromSun()})),this.$tronWeb.call({contractAddress:this.$contracts.Manager.address,method:"stockInfoList()"}).then((function(e){var n=e.constant_result[0].decode(["uint256[]"]),s=Object(a["a"])(n,4),r=s[3];t.bought=r.toString()}))}},created:function(){this.$tronWeb&&this.init()}},u=d,h=(n("d623"),n("2877")),l=Object(h["a"])(u,s,r,!1,null,"c211c85a",null);e["default"]=l.exports},"9cd9":function(t,e,n){},d623:function(t,e,n){"use strict";var s=n("9cd9"),r=n.n(s);r.a}}]);
//# sourceMappingURL=chunk-67c98568.2138a1b7.js.map