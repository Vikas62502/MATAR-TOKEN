"use strict";(self.webpackChunkmatar_landing_page=self.webpackChunkmatar_landing_page||[]).push([[1608],{79684:(t,r,a)=>{a.d(r,{C:()=>d,G:()=>l,a:()=>h,b:()=>u,d:()=>i,h:()=>p});var e=a(68376),s=a(75144),n=a(53576),o=a(70200),c=a(2076);function i(t,r){return(0,s.ai)(t.abi,r,t.extensions)}function p(t,r){return t in r.readContract.functions}class d{constructor(t,r,a){(0,e.c)(this,"featureName",s.c_.name),(0,e.c)(this,"set",(0,n.d)((async t=>{const r=await this._parseAndUploadMetadata(t),a=this.contractWrapper;if(this.supportsContractMetadata(a))return n.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"setContractURI",args:[r],parse:t=>({receipt:t,data:this.get})});throw new s.x(s.c_)}))),(0,e.c)(this,"update",(0,n.d)((async t=>await this.set.prepare({...await this.get(),...t})))),this.contractWrapper=t,this.schema=r,this.storage=a}parseOutputMetadata(t){return this.schema.output.parseAsync(t)}parseInputMetadata(t){return this.schema.input.parseAsync(t)}async get(){let t;if(this.supportsContractMetadata(this.contractWrapper)){const r=await this.contractWrapper.read("contractURI",[]);r&&r.includes("://")&&(t=await this.storage.downloadJSON(r))}if(!t)try{var r,a;let n,o,c;try{p("name",this.contractWrapper)&&(n=await this.contractWrapper.read("name",[]))}catch(e){}try{p("symbol",this.contractWrapper)&&(o=await this.contractWrapper.read("symbol",[]))}catch(e){}try{c=await(0,s.K)(this.contractWrapper.address,this.contractWrapper.getProvider(),this.storage,this.contractWrapper.options)}catch(e){}t={name:n||(null===(r=c)||void 0===r?void 0:r.name),symbol:o,description:null===(a=c)||void 0===a?void 0:a.info.title}}catch(n){throw new Error("Could not fetch contract metadata")}return this.parseOutputMetadata(t)}async _parseAndUploadMetadata(t){const r=await this.parseInputMetadata(t);return this.storage.upload(r)}supportsContractMetadata(t){return i(t,"ContractMetadata")}}class h{constructor(t){this.contractWrapper=t}addTransactionListener(t){this.contractWrapper.addListener(s.aZ.Transaction,t)}removeTransactionListener(t){this.contractWrapper.off(s.aZ.Transaction,t)}addEventListener(t,r){const a=this.contractWrapper.readContract.interface.getEvent(t),e={address:this.contractWrapper.address,topics:[this.contractWrapper.readContract.interface.getEventTopic(a)]},s=t=>{const a=this.contractWrapper.readContract.interface.parseLog(t);r(this.toContractEvent(a.eventFragment,a.args,t))};return this.contractWrapper.getProvider().on(e,s),()=>{this.contractWrapper.getProvider().off(e,s)}}listenToAllEvents(t){const r={address:this.contractWrapper.address},a=r=>{try{const a=this.contractWrapper.readContract.interface.parseLog(r);t(this.toContractEvent(a.eventFragment,a.args,r))}catch(a){console.error("Could not parse event:",r,a)}};return this.contractWrapper.getProvider().on(r,a),()=>{this.contractWrapper.getProvider().off(r,a)}}removeEventListener(t,r){const a=this.contractWrapper.readContract.interface.getEvent(t);this.contractWrapper.readContract.off(a.name,r)}removeAllListeners(){this.contractWrapper.readContract.removeAllListeners();const t={address:this.contractWrapper.address};this.contractWrapper.getProvider().removeAllListeners(t)}async getAllEvents(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{fromBlock:0,toBlock:"latest",order:"desc"};const r=(await this.contractWrapper.readContract.queryFilter({},t.fromBlock,t.toBlock)).sort(((r,a)=>"desc"===t.order?a.blockNumber-r.blockNumber:r.blockNumber-a.blockNumber));return this.parseEvents(r)}async getEvents(t){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{fromBlock:0,toBlock:"latest",order:"desc"};const a=this.contractWrapper.readContract.interface.getEvent(t),e=r.filters?a.inputs.map((t=>r.filters[t.name])):[],s=this.contractWrapper.readContract.filters[a.name](...e),n=(await this.contractWrapper.readContract.queryFilter(s,r.fromBlock,r.toBlock)).sort(((t,a)=>"desc"===r.order?a.blockNumber-t.blockNumber:t.blockNumber-a.blockNumber));return this.parseEvents(n)}parseEvents(t){return t.map((t=>{const r=Object.fromEntries(Object.entries(t).filter((t=>"function"!==typeof t[1]&&"args"!==t[0])));if(t.args){const a=Object.entries(t.args),e=a.slice(a.length/2,a.length),s={};for(const[t,r]of e)s[t]=r;return{eventName:t.event||"",data:s,transaction:r}}return{eventName:t.event||"",data:{},transaction:r}}))}toContractEvent(t,r,a){const e=Object.fromEntries(Object.entries(a).filter((t=>"function"!==typeof t[1]&&"args"!==t[0]))),s={};return t.inputs.forEach(((t,a)=>{if(Array.isArray(r[a])){const e=t.components;if(e){const n=r[a];if("tuple[]"===t.type){const r=[];for(let t=0;t<n.length;t++){const a=n[t],s={};for(let t=0;t<e.length;t++){s[e[t].name]=a[t]}r.push(s)}s[t.name]=r}else{const r={};for(let t=0;t<e.length;t++){r[e[t].name]=n[t]}s[t.name]=r}}}else s[t.name]=r[a]})),{eventName:t.name,data:s,transaction:e}}}class l{constructor(t){this.contractWrapper=t}async gasCostOf(t,r){const[a,e]=await Promise.all([this.contractWrapper.getProvider().getGasPrice(),this.contractWrapper.estimateGas(t,r)]);return o.formatEther(e.mul(a))}async gasLimitOf(t,r){return this.contractWrapper.estimateGas(t,r)}async currentGasPriceInGwei(){const t=await this.contractWrapper.getProvider().getGasPrice();return o.formatUnits(t,"gwei")}}class u{constructor(t,r,a){(0,e.c)(this,"featureName",s.c$.name),(0,e.c)(this,"set",(0,n.d)((async t=>i(this.contractWrapper,"AppURI")?n.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"setAppURI",args:[t]}):await this.metadata.update.prepare({app_uri:t})))),this.contractWrapper=t,this.metadata=r,this.storage=a}async get(){return i(this.contractWrapper,"AppURI")?await this.contractWrapper.read("appURI",[]):(0,c.sb)((await this.metadata.get()).app_uri||"",this.storage.getGatewayUrls())}}},86924:(t,r,a)=>{a.d(r,{C:()=>e});class e{constructor(t){this.contractWrapper=t}overrideNextTransaction(t){this.contractWrapper.withTransactionOverride(t)}}},21608:(t,r,a)=>{a.r(r),a.d(r,{Vote:()=>g});var e=a(68376),s=a(85668),n=a(2856),o=a(70200),c=a(15784),i=a(44596),p=a(75144),d=a(53576),h=a(79684),l=a(86924);let u=function(t){return t[t.Against=0]="Against",t[t.For=1]="For",t[t.Abstain=2]="Abstain",t}({});a(34560),a(65708),a(34221);class g{get chainId(){return this._chainId}constructor(t,r,a){(0,e.c)(this,"propose",(0,d.d)((async(t,r)=>{r||(r=[{toAddress:this.contractWrapper.address,nativeTokenValue:0,transactionData:"0x"}]);const a=r.map((t=>t.toAddress)),e=r.map((t=>t.nativeTokenValue)),s=r.map((t=>t.transactionData));return d.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"propose",args:[a,e,s,t],parse:t=>({id:this.contractWrapper.parseLogs("ProposalCreated",null===t||void 0===t?void 0:t.logs)[0].args.proposalId,receipt:t})})}))),(0,e.c)(this,"vote",(0,d.d)((()=>{var t=this;return async function(r,a){let e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return await t.ensureExists(r),d.T.fromContractWrapper({contractWrapper:t.contractWrapper,method:"castVoteWithReason",args:[r,a,e]})}})())),(0,e.c)(this,"execute",(0,d.d)((async t=>{await this.ensureExists(t);const r=await this.get(t),a=r.executions.map((t=>t.toAddress)),e=r.executions.map((t=>t.nativeTokenValue)),n=r.executions.map((t=>t.transactionData)),o=s.id(r.description);return d.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"execute",args:[a,e,n,o]})})));let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=arguments.length>4?arguments[4]:void 0,c=arguments.length>5?arguments[5]:void 0,u=arguments.length>6&&void 0!==arguments[6]?arguments[6]:new p.cq(t,r,o,n,a);this._chainId=c,this.abi=p.bj.parse(o||[]),this.contractWrapper=u,this.storage=a,this.metadata=new h.C(this.contractWrapper,p.cn,this.storage),this.app=new h.b(this.contractWrapper,this.metadata,this.storage),this.encoder=new i.C(this.contractWrapper),this.estimator=new h.G(this.contractWrapper),this.events=new h.a(this.contractWrapper),this.interceptor=new l.C(this.contractWrapper)}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.address}async get(t){const r=(await this.getAll()).filter((r=>r.proposalId.eq(n.iC.from(t))));if(0===r.length)throw new Error("proposal not found");return r[0]}async getAll(){var t;const r=null!==(t=await this.contractWrapper.read("getAllProposals",[]))&&void 0!==t?t:[];return(await Promise.all(r.map((t=>Promise.all([this.contractWrapper.read("state",[t.proposalId]),this.getProposalVotes(t.proposalId)]))))).map(((t,a)=>{let[e,s]=t;const n=r[a];return{proposalId:n.proposalId,proposer:n.proposer,description:n.description,startBlock:n.startBlock,endBlock:n.endBlock,state:e,votes:s,executions:n[3].map(((t,r)=>({toAddress:n.targets[r],nativeTokenValue:t,transactionData:n.calldatas[r]})))}}))}async getProposalVotes(t){const r=await this.contractWrapper.read("proposalVotes",[t]);return[{type:u.Against,label:"Against",count:r.againstVotes},{type:u.For,label:"For",count:r.forVotes},{type:u.Abstain,label:"Abstain",count:r.abstainVotes}]}async hasVoted(t,r){return r||(r=await this.contractWrapper.getSignerAddress()),this.contractWrapper.read("hasVoted",[t,await(0,p.aL)(r)])}async canExecute(t){await this.ensureExists(t);const r=await this.get(t),a=r.executions.map((t=>t.toAddress)),e=r.executions.map((t=>t.nativeTokenValue)),n=r.executions.map((t=>t.transactionData)),o=s.id(r.description);try{return await this.contractWrapper.callStatic().execute(a,e,n,o),!0}catch(c){return!1}}async balance(){const t=await this.contractWrapper.getProvider().getBalance(this.contractWrapper.address);return{name:"",symbol:"",decimals:18,value:t,displayValue:o.formatUnits(t,18)}}async balanceOfToken(t){const r=(await Promise.resolve().then(a.t.bind(a,2056,19))).default,e=new c.wn(await(0,p.aL)(t),r,this.contractWrapper.getProvider());return await(0,i.a)(this.contractWrapper.getProvider(),t,await e.balanceOf(this.contractWrapper.address))}async ensureExists(t){try{await this.contractWrapper.read("state",[t])}catch(r){throw Error("Proposal ".concat(t," not found"))}}async settings(){const[t,r,a,e,s]=await Promise.all([this.contractWrapper.read("votingDelay",[]),this.contractWrapper.read("votingPeriod",[]),this.contractWrapper.read("token",[]),this.contractWrapper.read("quorumNumerator",[]),this.contractWrapper.read("proposalThreshold",[])]),n=await(0,i.f)(this.contractWrapper.getProvider(),a);return{votingDelay:t.toString(),votingPeriod:r.toString(),votingTokenAddress:a,votingTokenMetadata:n,votingQuorumFraction:e.toString(),proposalTokenThreshold:s.toString()}}async prepare(t,r,a){return d.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:t,args:r,overrides:a})}async call(t,r,a){return this.contractWrapper.call(t,r,a)}}}}]);
//# sourceMappingURL=1608.a9b46a81.chunk.js.map