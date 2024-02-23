"use strict";(self.webpackChunkmatar_landing_page=self.webpackChunkmatar_landing_page||[]).push([[4184],{86924:(t,r,e)=>{e.d(r,{C:()=>a});class a{constructor(t){this.contractWrapper=t}overrideNextTransaction(t){this.contractWrapper.withTransactionOverride(t)}}},11252:(t,r,e)=>{e.d(r,{C:()=>n});var a=e(68376),s=e(53576),c=e(75144);class n{constructor(t){(0,a.c)(this,"featureName",c.dp.name),(0,a.c)(this,"set",(0,s.d)((async t=>{const r=await c.bF.parseAsync(t);return s.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"setPlatformFeeInfo",args:[r.platform_fee_recipient,r.platform_fee_basis_points]})}))),this.contractWrapper=t}async get(){const[t,r]=await this.contractWrapper.read("getPlatformFeeInfo",[]);return c.bF.parseAsync({platform_fee_recipient:t,platform_fee_basis_points:r})}}},32992:(t,r,e)=>{e.d(r,{C:()=>n});var a=e(68376),s=e(53576),c=e(75144);class n{constructor(t){(0,a.c)(this,"featureName",c.d3.name),(0,a.c)(this,"setRecipient",(0,s.d)((async t=>s.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"setPrimarySaleRecipient",args:[t]})))),this.contractWrapper=t}async getRecipient(){return await this.contractWrapper.read("primarySaleRecipient",[])}}},10520:(t,r,e)=>{e.d(r,{S:()=>i});var a=e(68376),s=e(75144),c=e(53576),n=e(30568);class i{get chainId(){return this._chainId}constructor(t,r,e){(0,a.c)(this,"transfer",(0,c.d)((async(t,r)=>this.erc721.transfer.prepare(t,r)))),(0,a.c)(this,"setApprovalForAll",(0,c.d)((async(t,r)=>this.erc721.setApprovalForAll.prepare(t,r)))),(0,a.c)(this,"setApprovalForToken",(0,c.d)((async(t,r)=>c.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"approve",args:[await(0,s.aL)(t),r]})))),this.contractWrapper=t,this.storage=r,this.erc721=new n.E(this.contractWrapper,this.storage,e),this._chainId=e}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.address}async getAll(t){return this.erc721.getAll(t)}async getOwned(t,r){return t&&(t=await(0,s.aL)(t)),this.erc721.getOwned(t,r)}async getOwnedTokenIds(t){return t&&(t=await(0,s.aL)(t)),this.erc721.getOwnedTokenIds(t)}async totalSupply(){return this.erc721.totalCirculatingSupply()}async get(t){return this.erc721.get(t)}async ownerOf(t){return this.erc721.ownerOf(t)}async balanceOf(t){return this.erc721.balanceOf(t)}async balance(){return this.erc721.balance()}async isApproved(t,r){return this.erc721.isApproved(t,r)}}},44184:(t,r,e)=>{e.r(r),e.d(r,{NFTCollection:()=>m});var a=e(68376),s=e(91339),c=e(75144),n=e(53576),i=e(79684),p=e(44596),o=e(86924),h=e(69152),d=e(11252),l=e(88620),u=e(32992),W=e(10520),g=e(30568);e(34560),e(65708),e(34221),e(44084);class m extends W.S{constructor(t,r,e){let s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},W=arguments.length>4?arguments[4]:void 0,w=arguments.length>5?arguments[5]:void 0;super(arguments.length>6&&void 0!==arguments[6]?arguments[6]:new c.cq(t,r,W,s,e),e,w),(0,a.c)(this,"mint",(0,n.d)((async t=>this.erc721.mint.prepare(t)))),(0,a.c)(this,"mintTo",(0,n.d)((async(t,r)=>this.erc721.mintTo.prepare(t,r)))),(0,a.c)(this,"mintBatch",(0,n.d)((async t=>this.erc721.mintBatch.prepare(t)))),(0,a.c)(this,"mintBatchTo",(0,n.d)((async(t,r)=>this.erc721.mintBatchTo.prepare(t,r)))),(0,a.c)(this,"burn",(0,n.d)((t=>this.erc721.burn.prepare(t)))),this.abi=c.bj.parse(W||[]),this.metadata=new i.C(this.contractWrapper,c.cd,this.storage),this.app=new i.b(this.contractWrapper,this.metadata,this.storage),this.roles=new l.C(this.contractWrapper,m.contractRoles),this.royalties=new h.C(this.contractWrapper,this.metadata),this.sales=new u.C(this.contractWrapper),this.encoder=new p.C(this.contractWrapper),this.estimator=new i.G(this.contractWrapper),this.events=new i.a(this.contractWrapper),this.platformFees=new d.C(this.contractWrapper),this.interceptor=new o.C(this.contractWrapper),this.signature=new g.a(this.contractWrapper,this.storage),this.owner=new h.a(this.contractWrapper)}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.address}async isTransferRestricted(){return!await this.contractWrapper.read("hasRole",[(0,c.H)("transfer"),s.e])}async getMintTransaction(t,r){return this.erc721.getMintTransaction(t,r)}async prepare(t,r,e){return n.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:t,args:r,overrides:e})}async call(t,r,e){return this.contractWrapper.call(t,r,e)}}(0,a.c)(m,"contractRoles",c.dA)}}]);
//# sourceMappingURL=4184.a1c4dc9e.chunk.js.map