"use strict";(self.webpackChunkmatar_landing_page=self.webpackChunkmatar_landing_page||[]).push([[5496],{65456:(t,e,i)=>{i.d(e,{W:()=>a});var n=i(36584),s=i(16432);class a extends s.c{constructor(t){let{chains:e=n.wFi,options:i}=t;super(),this.chains=e,this.options=i}getBlockExplorerUrls(t){var e,i;const n=null!==(e=null===(i=t.explorers)||void 0===i?void 0:i.map((t=>t.url)))&&void 0!==e?e:[];return n.length>0?n:void 0}isChainUnsupported(t){return!this.chains.some((e=>e.chainId===t))}updateChains(t){this.chains=t}}},43139:(t,e,i)=>{i.d(e,{A:()=>o,C:()=>r,R:()=>h,S:()=>d,U:()=>l,a:()=>c});var n=i(26440);class s extends Error{constructor(t,e){const{cause:i,code:n,data:s}=e;if(!Number.isInteger(n))throw new Error('"code" must be an integer.');if(!t||"string"!==typeof t)throw new Error('"message" must be a nonempty string.');super("".concat(t,". Cause: ").concat(JSON.stringify(i))),this.cause=i,this.code=n,this.data=s}}class a extends s{constructor(t,e){const{cause:i,code:n,data:s}=e;if(!(Number.isInteger(n)&&n>=1e3&&n<=4999))throw new Error('"code" must be an integer such that: 1000 <= code <= 4999');super(t,{cause:i,code:n,data:s})}}class o extends Error{constructor(){super(...arguments),(0,n._)(this,"name","AddChainError"),(0,n._)(this,"message","Error adding chain")}}class r extends Error{constructor(t){let{chainId:e,connectorId:i}=t;super('Chain "'.concat(e,'" not configured for connector "').concat(i,'".')),(0,n._)(this,"name","ChainNotConfigured")}}class c extends Error{constructor(){super(...arguments),(0,n._)(this,"name","ConnectorNotFoundError"),(0,n._)(this,"message","Connector not found")}}class h extends s{constructor(t){super("Resource unavailable",{cause:t,code:-32002}),(0,n._)(this,"name","ResourceUnavailable")}}class d extends a{constructor(t){super("Error switching chain",{cause:t,code:4902}),(0,n._)(this,"name","SwitchChainError")}}class l extends a{constructor(t){super("User rejected request",{cause:t,code:4001}),(0,n._)(this,"name","UserRejectedRequestError")}}},85360:(t,e,i)=>{i.d(e,{g:()=>a,i:()=>s});var n=i(36584);function s(t){const e=new URL(t).hostname;return e.endsWith(".thirdweb.com")||e.endsWith(".thirdweb-dev.com")||"localhost"===e||"0.0.0.0"===e}function a(t){return(0,n.Pp2)(t).map((t=>{try{const e=new URL(t);return e.hostname.endsWith(".thirdweb.com")&&(e.pathname="",e.search=""),e.toString()}catch(e){return t}}))}},25496:(t,e,i)=>{i.d(e,{WalletConnectConnector:()=>U});var n=i(71219),s=i(74948),a=i(26440),o=i(43139),r=i(72178),c=i(33184),h=i(69628),d=i(27064),l=i(85360),u=i(65456);i(16432);const p=new Set([1,137,10,42161,56]),w="eip155",g="wagmi.requestedChains",m="wallet_addEthereumChain",v="last-used-chain-id";var f=new WeakMap,C=new WeakMap,b=new WeakMap,y=new WeakSet,_=new WeakSet,I=new WeakSet,E=new WeakSet,S=new WeakSet,W=new WeakSet,N=new WeakSet;class U extends u.W{constructor(t){super({...t,options:{isNewChainsStale:!0,...t.options}}),(0,n._)(this,N),(0,n._)(this,W),(0,n._)(this,S),(0,n._)(this,E),(0,n._)(this,I),(0,n._)(this,_),(0,n._)(this,y),(0,a._)(this,"id",d.w.walletConnect),(0,a._)(this,"name","WalletConnect"),(0,a._)(this,"ready",!0),(0,s._)(this,f,{writable:!0,value:void 0}),(0,s._)(this,C,{writable:!0,value:void 0}),(0,s._)(this,b,{writable:!0,value:void 0}),(0,a._)(this,"onAccountsChanged",(t=>{0===t.length?this.emit("disconnect"):t[0]&&this.emit("change",{account:r.getAddress(t[0])})})),(0,a._)(this,"onChainChanged",(async t=>{const e=Number(t),i=this.isChainUnsupported(e);await(0,s.b)(this,b).setItem(v,String(t)),this.emit("change",{chain:{id:e,unsupported:i}})})),(0,a._)(this,"onDisconnect",(async()=>{await(0,n.a)(this,E,P).call(this,[]),await(0,s.b)(this,b).removeItem(v),this.emit("disconnect")})),(0,a._)(this,"onDisplayUri",(t=>{this.emit("message",{type:"display_uri",data:t})})),(0,a._)(this,"onConnect",(()=>{this.emit("connect",{provider:(0,s.b)(this,f)})})),(0,s.a)(this,b,t.options.storage),(0,n.a)(this,y,k).call(this),this.filteredChains=this.chains.length>50?this.chains.filter((t=>p.has(t.chainId))):this.chains,this.showWalletConnectModal=!1!==this.options.qrcode}async connect(){let{chainId:t,pairingTopic:e}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};try{let a=t;if(!a){const t=await(0,s.b)(this,b).getItem(v),e=t?parseInt(t):void 0;var i;if(e&&!this.isChainUnsupported(e))a=e;else a=null===(i=this.filteredChains[0])||void 0===i?void 0:i.chainId}if(!a)throw new Error("No chains found on connector.");const o=await this.getProvider();this.setupListeners();const h=await(0,n.a)(this,_,x).call(this);if(o.session&&h&&await o.disconnect(),!o.session||h){const t=this.filteredChains.filter((t=>t.chainId!==a)).map((t=>t.chainId));this.emit("message",{type:"connecting"}),await o.connect({pairingTopic:e,chains:[a],optionalChains:t.length>0?t:[a]}),await(0,n.a)(this,E,P).call(this,this.filteredChains.map((t=>{let{chainId:e}=t;return e})))}const d=await o.enable();if(!d[0])throw new Error("No accounts found on provider.");const l=r.getAddress(d[0]),u=await this.getChainId();return{account:l,chain:{id:u,unsupported:this.isChainUnsupported(u)},provider:new c.u(o)}}catch(a){if(/user rejected/i.test(null===a||void 0===a?void 0:a.message))throw new o.U(a);throw a}}async disconnect(){const t=()=>{if("undefined"!==typeof localStorage)for(const t in localStorage)t.startsWith("wc@2")&&localStorage.removeItem(t)};t();const e=await this.getProvider();(async()=>{try{await e.disconnect()}catch(i){if(!/No matching key/i.test(i.message))throw i}finally{(0,n.a)(this,I,M).call(this),await(0,n.a)(this,E,P).call(this,[]),t()}})()}async getAccount(){const{accounts:t}=await this.getProvider();if(!t[0])throw new Error("No accounts found on provider.");return r.getAddress(t[0])}async getChainId(){const{chainId:t}=await this.getProvider();return t}async getProvider(){let{chainId:t}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if((0,s.b)(this,f)||await(0,n.a)(this,y,k).call(this),t&&await this.switchChain(t),!(0,s.b)(this,f))throw new Error("No provider found.");return(0,s.b)(this,f)}async getSigner(){let{chainId:t}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const[e,i]=await Promise.all([this.getProvider({chainId:t}),this.getAccount()]);return new c.u(e,t).getSigner(i)}async isAuthorized(){try{const[t,e]=await Promise.all([this.getAccount(),this.getProvider()]),i=await(0,n.a)(this,_,x).call(this);if(!t)return!1;if(i&&e.session){try{await e.disconnect()}catch{}return!1}return!0}catch{return!1}}async switchChain(t){const e=this.chains.find((e=>e.chainId===t));if(!e)throw new o.S("Chain with ID: ".concat(t,", not found on connector."));try{const i=await this.getProvider(),s=(0,n.a)(this,W,L).call(this),a=(0,n.a)(this,N,O).call(this);if(!s.includes(t)&&a.includes(m)){const s=e.explorers&&e.explorers[0],a=s?{blockExplorerUrls:[s.url]}:{};await i.request({method:m,params:[{chainId:h.hexValue(e.chainId),chainName:e.name,nativeCurrency:e.nativeCurrency,rpcUrls:(0,l.g)(e),...a}]});const o=await(0,n.a)(this,S,A).call(this);o.push(t),await(0,n.a)(this,E,P).call(this,o)}return await i.request({method:"wallet_switchEthereumChain",params:[{chainId:h.hexValue(t)}]}),e}catch(i){const t="string"===typeof i?i:null===i||void 0===i?void 0:i.message;if(/user rejected request/i.test(t))throw new o.U(i);throw new o.S(i)}}async initProvider(){const{default:t,OPTIONAL_EVENTS:e,OPTIONAL_METHODS:n}=await i.e(928).then(i.bind(i,80928)),[a,...o]=this.filteredChains.map((t=>{let{chainId:e}=t;return e}));a&&(0,s.a)(this,f,await t.init({showQrModal:this.showWalletConnectModal,projectId:this.options.projectId,optionalMethods:n,optionalEvents:e,chains:[a],optionalChains:o,metadata:{name:this.options.dappMetadata.name,description:this.options.dappMetadata.description||"",url:this.options.dappMetadata.url,icons:[this.options.dappMetadata.logoUrl||""]},rpcMap:Object.fromEntries(this.filteredChains.map((t=>[t.chainId,t.rpc[0]||""]))),qrModalOptions:this.options.qrModalOptions}))}async setupListeners(){(0,s.b)(this,f)&&((0,n.a)(this,I,M).call(this),(0,s.b)(this,f).on("accountsChanged",this.onAccountsChanged),(0,s.b)(this,f).on("chainChanged",this.onChainChanged),(0,s.b)(this,f).on("disconnect",this.onDisconnect),(0,s.b)(this,f).on("session_delete",this.onDisconnect),(0,s.b)(this,f).on("display_uri",this.onDisplayUri),(0,s.b)(this,f).on("connect",this.onConnect))}}async function k(){return(0,s.b)(this,C)||(0,s.a)(this,C,this.initProvider()),(0,s.b)(this,C)}async function x(){if((0,n.a)(this,N,O).call(this).includes(m))return!1;if(!this.options.isNewChainsStale)return!1;const t=await(0,n.a)(this,S,A).call(this),e=this.filteredChains.map((t=>{let{chainId:e}=t;return e})),i=(0,n.a)(this,W,L).call(this);return!(i.length&&!i.some((t=>e.includes(t))))&&!e.every((e=>t.includes(e)))}function M(){(0,s.b)(this,f)&&((0,s.b)(this,f).removeListener("accountsChanged",this.onAccountsChanged),(0,s.b)(this,f).removeListener("chainChanged",this.onChainChanged),(0,s.b)(this,f).removeListener("disconnect",this.onDisconnect),(0,s.b)(this,f).removeListener("session_delete",this.onDisconnect),(0,s.b)(this,f).removeListener("display_uri",this.onDisplayUri),(0,s.b)(this,f).removeListener("connect",this.onConnect))}async function P(t){await(0,s.b)(this,b).setItem(g,JSON.stringify(t))}async function A(){const t=await(0,s.b)(this,b).getItem(g);return t?JSON.parse(t):[]}function L(){var t;if(!(0,s.b)(this,f))return[];const e=null===(t=(0,s.b)(this,f).session)||void 0===t||null===(t=t.namespaces[w])||void 0===t||null===(t=t.chains)||void 0===t?void 0:t.map((t=>parseInt(t.split(":")[1]||"")));return null!==e&&void 0!==e?e:[]}function O(){var t;if(!(0,s.b)(this,f))return[];const e=null===(t=(0,s.b)(this,f).session)||void 0===t||null===(t=t.namespaces[w])||void 0===t?void 0:t.methods;return null!==e&&void 0!==e?e:[]}}}]);
//# sourceMappingURL=5496.64826718.chunk.js.map