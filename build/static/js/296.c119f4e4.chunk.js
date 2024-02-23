"use strict";(self.webpackChunkmatar_landing_page=self.webpackChunkmatar_landing_page||[]).push([[296],{74788:(t,r,e)=>{e.d(r,{D:()=>f,F:()=>d,I:()=>s,a:()=>c,b:()=>u,c:()=>l,f:()=>p,g:()=>h,u:()=>g});var a=e(50648),i=e(69628),n=e(2856),o=e(15784);const s=(()=>i.arrayify("0x80ac58cd"))(),c=(()=>i.arrayify("0xd9b67a26"))(),d={name:"Failed to load NFT metadata"};async function p(t,r,e){if(r.startsWith("data:application/json;base64")&&"undefined"!==typeof Buffer){const e=r.split(",")[1],i=JSON.parse(Buffer.from(e,"base64").toString("utf-8"));return a.C.parse({...i,id:n.iC.from(t).toString(),uri:r})}const o=r.replace("{id}",i.hexZeroPad(n.iC.from(t).toHexString(),32).slice(2));let s;try{s=await e.downloadJSON(o)}catch(c){const a=r.replace("{id}",n.iC.from(t).toString());try{s=await e.downloadJSON(a)}catch(p){console.warn("failed to get token metadata: ".concat(JSON.stringify({tokenId:t.toString(),tokenUri:r})," -- falling back to default metadata")),s=d}}return a.C.parse({...s,id:n.iC.from(t).toString(),uri:r})}async function l(t,r,i,l){let u;const g=(await e.e(1664).then(e.t.bind(e,91664,19))).default,h=new o.wn(t,g,r),[f,w]=await Promise.all([h.supportsInterface(s),h.supportsInterface(c)]);if(f){const a=(await Promise.resolve().then(e.t.bind(e,41652,19))).default,n=new o.wn(t,a,r);u=await n.tokenURI(i)}else{if(!w)throw Error("Contract must implement ERC 1155 or ERC 721.");{const a=(await Promise.resolve().then(e.t.bind(e,63366,19))).default,n=new o.wn(t,a,r);u=await n.uri(i)}}return u?p(i,u,l):a.C.parse({...d,id:n.iC.from(i).toString(),uri:""})}async function u(t,r){return"string"===typeof t?t:await r.upload(a.a.parse(t))}async function g(t,r,e,i){if(function(t){return void 0===t.find((t=>"string"!==typeof t))}(t))return t;if(function(t){return void 0===t.find((t=>"object"!==typeof t))}(t)){return await r.uploadBatch(t.map((t=>a.a.parse(t))),{rewriteFileNames:{fileStartNumber:e||0},onProgress:null===i||void 0===i?void 0:i.onProgress})}throw new Error("NFT metadatas must all be of the same type (all URI or all NFTMetadataInput)")}function h(t){const r=t[0].substring(0,t[0].lastIndexOf("/"));for(let e=0;e<t.length;e++){const a=t[e].substring(0,t[e].lastIndexOf("/"));if(r!==a)throw new Error("Can only create batches with the same base URI for every entry in the batch. Expected '".concat(r,"' but got '").concat(a,"'"))}return r.replace(/\/$/,"")+"/"}const f=100},11928:(t,r,e)=>{e.d(r,{c:()=>n});var a=e(75144),i=e(44596);function n(t){return(0,i.i)(t)?a.aV:t}},86924:(t,r,e)=>{e.d(r,{C:()=>a});class a{constructor(t){this.contractWrapper=t}overrideNextTransaction(t){this.contractWrapper.withTransactionOverride(t)}}},11252:(t,r,e)=>{e.d(r,{C:()=>o});var a=e(68376),i=e(53576),n=e(75144);class o{constructor(t){(0,a.c)(this,"featureName",n.dp.name),(0,a.c)(this,"set",(0,i.d)((async t=>{const r=await n.bF.parseAsync(t);return i.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"setPlatformFeeInfo",args:[r.platform_fee_recipient,r.platform_fee_basis_points]})}))),this.contractWrapper=t}async get(){const[t,r]=await this.contractWrapper.read("getPlatformFeeInfo",[]);return n.bF.parseAsync({platform_fee_recipient:t,platform_fee_basis_points:r})}}},10296:(t,r,e)=>{e.r(r),e.d(r,{Marketplace:()=>L});var a=e(68376),i=e(2856),n=e(70200),o=e(63536),s=e(91339),c=e(72178),d=e(15784),p=e(16588),l=e(74788),u=e(44596),g=e(75144),h=e(54496),f=e(53576),w=e(79684),m=e(86924),y=e(11252),v=e(88620),C=e(11928),W=e(26252),A=e(50648);let T=function(t){return t[t.Direct=0]="Direct",t[t.Auction=1]="Auction",t}({});e(34560),e(65708),e(34221);class P{constructor(t,r){(0,a.c)(this,"createListing",(0,f.d)((async t=>{(0,h.v)(t);const r=await(0,g.aL)(t.assetContractAddress),e=await(0,g.aL)(t.currencyContractAddress);await(0,h.h)(this.contractWrapper,this.getAddress(),r,t.tokenId,await this.contractWrapper.getSignerAddress());const a=await(0,W.n)(this.contractWrapper.getProvider(),t.buyoutPricePerToken,e),n=await(0,W.n)(this.contractWrapper.getProvider(),t.reservePricePerToken,e);let o=Math.floor(t.startTimestamp.getTime()/1e3);const s=(await this.contractWrapper.getProvider().getBlock("latest")).timestamp;return o<s&&(o=s),f.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"createListing",args:[{assetContract:r,tokenId:t.tokenId,buyoutPricePerToken:a,currencyToAccept:(0,C.c)(e),listingType:T.Auction,quantityToList:t.quantity,reservePricePerToken:n,secondsUntilEndTime:t.listingDurationInSeconds,startTime:i.iC.from(o)}],parse:t=>({id:this.contractWrapper.parseLogs("ListingAdded",null===t||void 0===t?void 0:t.logs)[0].args.listingId,receipt:t})})}))),(0,a.c)(this,"createListingsBatch",(0,f.d)((async t=>{const r=(await Promise.all(t.map((t=>this.createListing.prepare(t))))).map((t=>t.encode()));return f.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"multicall",args:[r],parse:t=>this.contractWrapper.parseLogs("ListingAdded",null===t||void 0===t?void 0:t.logs).map((r=>({id:r.args.listingId,receipt:t})))})}))),(0,a.c)(this,"buyoutListing",(0,f.d)((async t=>{const r=await this.validateListing(i.iC.from(t)),e=await(0,u.f)(this.contractWrapper.getProvider(),r.currencyContractAddress);return this.makeBid.prepare(t,n.formatUnits(r.buyoutPrice,e.decimals))}))),(0,a.c)(this,"makeBid",(0,f.d)((async(t,r)=>{const e=await this.validateListing(i.iC.from(t)),a=await(0,W.n)(this.contractWrapper.getProvider(),r,e.currencyContractAddress);if(a.eq(i.iC.from(0)))throw new Error("Cannot make a bid with 0 value");const n=await this.contractWrapper.read("bidBufferBps",[]),s=await this.getWinningBid(t);if(s){const t=(0,h.a)(s.pricePerToken,a,n);(0,p.c)(t,"Bid price is too low based on the current winning bid and the bid buffer")}else{const t=a,r=i.iC.from(e.reservePrice);(0,p.c)(t.gte(r),"Bid price is too low based on reserve price")}const c=i.iC.from(e.quantity),d=a.mul(c),l=await this.contractWrapper.getCallOverrides()||{};return await(0,A.s)(this.contractWrapper,d,e.currencyContractAddress,l),f.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"offer",args:[t,e.quantity,e.currencyContractAddress,a,o.wB],overrides:l})}))),(0,a.c)(this,"cancelListing",(0,f.d)((async t=>{const r=await this.validateListing(i.iC.from(t)),e=i.iC.from(Math.floor(Date.now()/1e3)),a=i.iC.from(r.startTimeInEpochSeconds),n=await this.contractWrapper.read("winningBid",[t]);if(e.gt(a)&&n.offeror!==s.e)throw new g.t(t.toString());return f.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"closeAuction",args:[i.iC.from(t),await this.contractWrapper.getSignerAddress()]})}))),(0,a.c)(this,"closeListing",(0,f.d)((async(t,r)=>{r||(r=await this.contractWrapper.getSignerAddress());const e=await this.validateListing(i.iC.from(t));try{return f.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"closeAuction",args:[i.iC.from(t),r]})}catch(a){throw a.message.includes("cannot close auction before it has ended")?new g.w(t.toString(),e.endTimeInEpochSeconds.toString()):a}}))),(0,a.c)(this,"executeSale",(0,f.d)((async t=>{const r=await this.validateListing(i.iC.from(t));try{const e=await this.getWinningBid(t);(0,p.c)(e,"No winning bid found");const a=this.encoder.encode("closeAuction",[t,r.sellerAddress]),i=this.encoder.encode("closeAuction",[t,e.buyerAddress]);return f.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"multicall",args:[a,i]})}catch(e){throw e.message.includes("cannot close auction before it has ended")?new g.w(t.toString(),r.endTimeInEpochSeconds.toString()):e}}))),(0,a.c)(this,"updateListing",(0,f.d)((async t=>f.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"updateListing",args:[t.id,t.quantity,t.reservePrice,t.buyoutPrice,t.currencyContractAddress,t.startTimeInEpochSeconds,t.endTimeInEpochSeconds]})))),this.contractWrapper=t,this.storage=r,this.encoder=new u.C(t)}getAddress(){return this.contractWrapper.address}async getListing(t){const r=await this.contractWrapper.read("listings",[t]);if(r.listingId.toString()!==t.toString())throw new g.L(this.getAddress(),t.toString());if(r.listingType!==T.Auction)throw new g.W(this.getAddress(),t.toString(),"Direct","Auction");return await this.mapListing(r)}async getWinningBid(t){await this.validateListing(i.iC.from(t));const r=await this.contractWrapper.read("winningBid",[t]);if(r.offeror!==s.e)return await(0,h.m)(this.contractWrapper.getProvider(),i.iC.from(t),r)}async getWinner(t){const r=await this.validateListing(i.iC.from(t)),e=await this.contractWrapper.read("winningBid",[t]),a=i.iC.from(Math.floor(Date.now()/1e3)),n=i.iC.from(r.endTimeInEpochSeconds);if(a.gt(n)&&e.offeror!==s.e)return e.offeror;const o=new w.a(this.contractWrapper),c=(await o.getEvents("AuctionClosed")).find((r=>r.data.listingId.eq(i.iC.from(t))));if(!c)throw new Error("Could not find auction with listingId ".concat(t," in closed auctions"));return c.data.winningBidder}async getBidBufferBps(){return this.contractWrapper.read("bidBufferBps",[])}async getMinimumNextBid(t){const[r,e,a]=await Promise.all([this.getBidBufferBps(),this.getWinningBid(t),this.validateListing(i.iC.from(t))]),n=e?e.currencyValue.value:a.reservePrice,o=n.add(n.mul(r).div(1e4));return(0,u.a)(this.contractWrapper.getProvider(),a.currencyContractAddress,o)}async validateListing(t){try{return await this.getListing(t)}catch(r){throw console.error("Error getting the listing with id ".concat(t)),r}}async mapListing(t){return{assetContractAddress:t.assetContract,buyoutPrice:i.iC.from(t.buyoutPricePerToken),currencyContractAddress:t.currency,buyoutCurrencyValuePerToken:await(0,u.a)(this.contractWrapper.getProvider(),t.currency,t.buyoutPricePerToken),id:t.listingId.toString(),tokenId:t.tokenId,quantity:t.quantity,startTimeInEpochSeconds:t.startTime,asset:await(0,l.c)(t.assetContract,this.contractWrapper.getProvider(),t.tokenId,this.storage),reservePriceCurrencyValuePerToken:await(0,u.a)(this.contractWrapper.getProvider(),t.currency,t.reservePricePerToken),reservePrice:i.iC.from(t.reservePricePerToken),endTimeInEpochSeconds:t.endTime,sellerAddress:t.tokenOwner,type:T.Auction}}}class b{constructor(t,r){(0,a.c)(this,"createListing",(0,f.d)((async t=>{(0,h.v)(t);const r=await(0,g.aL)(t.assetContractAddress),e=await(0,g.aL)(t.currencyContractAddress);await(0,h.h)(this.contractWrapper,this.getAddress(),r,t.tokenId,await this.contractWrapper.getSignerAddress());const a=await(0,W.n)(this.contractWrapper.getProvider(),t.buyoutPricePerToken,e);let n=Math.floor(t.startTimestamp.getTime()/1e3);const o=(await this.contractWrapper.getProvider().getBlock("latest")).timestamp;return n<o&&(n=o),f.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"createListing",args:[{assetContract:r,tokenId:t.tokenId,buyoutPricePerToken:a,currencyToAccept:(0,C.c)(e),listingType:T.Direct,quantityToList:t.quantity,reservePricePerToken:a,secondsUntilEndTime:t.listingDurationInSeconds,startTime:i.iC.from(n)}],parse:t=>({id:this.contractWrapper.parseLogs("ListingAdded",null===t||void 0===t?void 0:t.logs)[0].args.listingId,receipt:t})})}))),(0,a.c)(this,"createListingsBatch",(0,f.d)((async t=>{const r=(await Promise.all(t.map((t=>this.createListing.prepare(t))))).map((t=>t.encode()));return f.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"multicall",args:[r],parse:t=>this.contractWrapper.parseLogs("ListingAdded",null===t||void 0===t?void 0:t.logs).map((r=>({id:r.args.listingId,receipt:t})))})}))),(0,a.c)(this,"makeOffer",(0,f.d)((async(t,r,e,a,n)=>{if((0,u.i)(e))throw new Error("You must use the wrapped native token address when making an offer with a native token");const s=await(0,W.n)(this.contractWrapper.getProvider(),a,e);try{await this.getListing(t)}catch(g){throw console.error("Failed to get listing, err =",g),new Error("Error getting the listing with id ".concat(t))}const c=i.iC.from(r),d=i.iC.from(s).mul(c),p=await this.contractWrapper.getCallOverrides()||{};await(0,A.s)(this.contractWrapper,d,e,p);let l=o.wB;return n&&(l=i.iC.from(Math.floor(n.getTime()/1e3))),f.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"offer",args:[t,r,e,s,l],overrides:p})}))),(0,a.c)(this,"acceptOffer",(0,f.d)((async(t,r)=>{await this.validateListing(i.iC.from(t));const e=await(0,g.aL)(r),a=await this.contractWrapper.read("offers",[t,e]);return f.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"acceptOffer",args:[t,e,a.currency,a.pricePerToken]})}))),(0,a.c)(this,"buyoutListing",(0,f.d)((async(t,r,e)=>{const a=await this.validateListing(i.iC.from(t)),{valid:n,error:o}=await this.isStillValidListing(a,r);if(!n)throw new Error("Listing ".concat(t," is no longer valid. ").concat(o));const s=e||await this.contractWrapper.getSignerAddress(),c=i.iC.from(r),d=i.iC.from(a.buyoutPrice).mul(c),p=await this.contractWrapper.getCallOverrides()||{};return await(0,A.s)(this.contractWrapper,d,a.currencyContractAddress,p),f.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"buy",args:[t,s,c,a.currencyContractAddress,d],overrides:p})}))),(0,a.c)(this,"updateListing",(0,f.d)((async t=>f.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"updateListing",args:[t.id,t.quantity,t.buyoutPrice,t.buyoutPrice,await(0,g.aL)(t.currencyContractAddress),t.startTimeInSeconds,t.secondsUntilEnd]})))),(0,a.c)(this,"cancelListing",(0,f.d)((async t=>f.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"cancelDirectListing",args:[t]})))),this.contractWrapper=t,this.storage=r}getAddress(){return this.contractWrapper.address}async getListing(t){const r=await this.contractWrapper.read("listings",[t]);if(r.assetContract===s.e)throw new g.L(this.getAddress(),t.toString());if(r.listingType!==T.Direct)throw new g.W(this.getAddress(),t.toString(),"Auction","Direct");return await this.mapListing(r)}async getActiveOffer(t,r){await this.validateListing(i.iC.from(t)),(0,p.c)(c.isAddress(r),"Address must be a valid address");const e=await this.contractWrapper.read("offers",[t,await(0,g.aL)(r)]);if(e.offeror!==s.e)return await(0,h.m)(this.contractWrapper.getProvider(),i.iC.from(t),e)}async validateListing(t){try{return await this.getListing(t)}catch(r){throw console.error("Error getting the listing with id ".concat(t)),r}}async mapListing(t){return{assetContractAddress:t.assetContract,buyoutPrice:i.iC.from(t.buyoutPricePerToken),currencyContractAddress:t.currency,buyoutCurrencyValuePerToken:await(0,u.a)(this.contractWrapper.getProvider(),t.currency,t.buyoutPricePerToken),id:t.listingId.toString(),tokenId:t.tokenId,quantity:t.quantity,startTimeInSeconds:t.startTime,asset:await(0,l.c)(t.assetContract,this.contractWrapper.getProvider(),t.tokenId,this.storage),secondsUntilEnd:t.endTime,sellerAddress:t.tokenOwner,type:T.Direct}}async isStillValidListing(t,r){if(!await(0,h.i)(this.contractWrapper.getProvider(),this.getAddress(),t.assetContractAddress,t.tokenId,t.sellerAddress))return{valid:!1,error:"Token '".concat(t.tokenId,"' from contract '").concat(t.assetContractAddress,"' is not approved for transfer")};const a=this.contractWrapper.getProvider(),i=(await e.e(1664).then(e.t.bind(e,91664,19))).default,n=new d.wn(t.assetContractAddress,i,a),o=await n.supportsInterface(l.I),s=await n.supportsInterface(l.a);if(o){var c;const r=(await Promise.resolve().then(e.t.bind(e,39158,19))).default,i=new d.wn(t.assetContractAddress,r,a);let n;try{n=await i.ownerOf(t.tokenId)}catch(p){}const o=(null===(c=n)||void 0===c?void 0:c.toLowerCase())===t.sellerAddress.toLowerCase();return{valid:o,error:o?void 0:"Seller is not the owner of Token '".concat(t.tokenId,"' from contract '").concat(t.assetContractAddress," anymore'")}}if(s){const i=(await Promise.resolve().then(e.t.bind(e,82955,19))).default,n=new d.wn(t.assetContractAddress,i,a),o=(await n.balanceOf(t.sellerAddress,t.tokenId)).gte(r||t.quantity);return{valid:o,error:o?void 0:"Seller does not have enough balance of Token '".concat(t.tokenId,"' from contract '").concat(t.assetContractAddress," to fulfill the listing")}}return{valid:!1,error:"Contract does not implement ERC 1155 or ERC 721."}}}class L{get chainId(){return this._chainId}constructor(t,r,e){(0,a.c)(this,"getAll",this.getAllListings),(0,a.c)(this,"buyoutListing",(0,f.d)((async(t,r,e)=>{const a=await this.contractWrapper.read("listings",[t]);if(a.listingId.toString()!==t.toString())throw new g.L(this.getAddress(),t.toString());switch(a.listingType){case T.Direct:return(0,p.c)(void 0!==r,"quantityDesired is required when buying out a direct listing"),await this.direct.buyoutListing.prepare(t,r,e);case T.Auction:return await this.auction.buyoutListing.prepare(t);default:throw Error("Unknown listing type: ".concat(a.listingType))}}))),(0,a.c)(this,"makeOffer",(0,f.d)((async(t,r,e)=>{const a=await this.contractWrapper.read("listings",[t]);if(a.listingId.toString()!==t.toString())throw new g.L(this.getAddress(),t.toString());const i=await this.contractWrapper.getChainID();switch(a.listingType){case T.Direct:return(0,p.c)(e,"quantity is required when making an offer on a direct listing"),await this.direct.makeOffer.prepare(t,e,(0,u.i)(a.currency)?g.aW[i].wrapped.address:a.currency,r);case T.Auction:return await this.auction.makeBid.prepare(t,r);default:throw Error("Unknown listing type: ".concat(a.listingType))}}))),(0,a.c)(this,"setBidBufferBps",(0,f.d)((async t=>{await this.roles.verify(["admin"],await this.contractWrapper.getSignerAddress());const r=await this.getTimeBufferInSeconds();return f.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"setAuctionBuffers",args:[r,i.iC.from(t)]})}))),(0,a.c)(this,"setTimeBufferInSeconds",(0,f.d)((async t=>{await this.roles.verify(["admin"],await this.contractWrapper.getSignerAddress());const r=await this.getBidBufferBps();return f.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"setAuctionBuffers",args:[i.iC.from(t),r]})}))),(0,a.c)(this,"allowListingFromSpecificAssetOnly",(0,f.d)((async t=>{const r=[];return(await this.roles.get("asset")).includes(s.e)&&r.push(this.encoder.encode("revokeRole",[(0,g.H)("asset"),s.e])),r.push(this.encoder.encode("grantRole",[(0,g.H)("asset"),t])),f.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"multicall",args:[r]})}))),(0,a.c)(this,"allowListingFromAnyAsset",(0,f.d)((async()=>{const t=[],r=await this.roles.get("asset");for(const e in r)t.push(this.encoder.encode("revokeRole",[(0,g.H)("asset"),e]));return t.push(this.encoder.encode("grantRole",[(0,g.H)("asset"),s.e])),f.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"multicall",args:[t]})})));let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=arguments.length>4?arguments[4]:void 0,c=arguments.length>5?arguments[5]:void 0,d=arguments.length>6&&void 0!==arguments[6]?arguments[6]:new g.cq(t,r,o,n,e);this._chainId=c,this.abi=g.bj.parse(o||[]),this.contractWrapper=d,this.storage=e,this.metadata=new w.C(this.contractWrapper,g.bZ,this.storage),this.app=new w.b(this.contractWrapper,this.metadata,this.storage),this.roles=new v.C(this.contractWrapper,L.contractRoles),this.encoder=new u.C(this.contractWrapper),this.estimator=new w.G(this.contractWrapper),this.direct=new b(this.contractWrapper,this.storage),this.auction=new P(this.contractWrapper,this.storage),this.events=new w.a(this.contractWrapper),this.platformFees=new y.C(this.contractWrapper),this.interceptor=new m.C(this.contractWrapper)}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.address}async getListing(t){const r=await this.contractWrapper.read("listings",[t]);if(r.assetContract===s.e)throw new g.L(this.getAddress(),t.toString());switch(r.listingType){case T.Auction:return await this.auction.mapListing(r);case T.Direct:return await this.direct.mapListing(r);default:throw new Error("Unknown listing type: ".concat(r.listingType))}}async getActiveListings(t){const r=await this.getAllListingsNoFilter(!0),e=this.applyFilter(r,t),a=i.iC.from(Math.floor(Date.now()/1e3));return e.filter((t=>t.type===T.Auction&&i.iC.from(t.endTimeInEpochSeconds).gt(a)&&i.iC.from(t.startTimeInEpochSeconds).lte(a)||t.type===T.Direct&&i.iC.from(t.quantity).gt(0)))}async getAllListings(t){const r=await this.getAllListingsNoFilter(!1);return this.applyFilter(r,t)}async getTotalCount(){return await this.contractWrapper.read("totalListings",[])}async isRestrictedToListerRoleOnly(){return!await this.contractWrapper.read("hasRole",[(0,g.H)("lister"),s.e])}async getBidBufferBps(){return this.contractWrapper.read("bidBufferBps",[])}async getTimeBufferInSeconds(){return this.contractWrapper.read("timeBuffer",[])}async getOffers(t){const r=await this.events.getEvents("NewOffer",{order:"desc",filters:{listingId:t}});return await Promise.all(r.map((r=>(0,h.m)(this.contractWrapper.getProvider(),i.iC.from(t),{quantityWanted:r.data.quantityWanted,pricePerToken:r.data.quantityWanted.gt(0)?r.data.totalOfferAmount.div(r.data.quantityWanted):r.data.totalOfferAmount,currency:r.data.currency,offeror:r.data.offeror}))))}async getAllListingsNoFilter(t){return(await Promise.all(Array.from(Array((await this.contractWrapper.read("totalListings",[])).toNumber()).keys()).map((async r=>{let e;try{e=await this.getListing(r)}catch(a){return a instanceof g.L?void 0:void console.warn("Failed to get listing ".concat(r,"' - skipping. Try 'marketplace.getListing(").concat(r,")' to get the underlying error."))}if(e.type===T.Auction)return e;if(t){const{valid:t}=await this.direct.isStillValidListing(e);if(!t)return}return e})))).filter((t=>void 0!==t))}applyFilter(t,r){let e=[...t];const a=i.iC.from((null===r||void 0===r?void 0:r.start)||0).toNumber(),n=i.iC.from((null===r||void 0===r?void 0:r.count)||l.D).toNumber();return r&&(r.seller&&(e=e.filter((t=>{var e;return t.sellerAddress.toString().toLowerCase()===(null===r||void 0===r||null===(e=r.seller)||void 0===e?void 0:e.toString().toLowerCase())}))),r.tokenContract&&(e=e.filter((t=>{var e;return t.assetContractAddress.toString().toLowerCase()===(null===r||void 0===r||null===(e=r.tokenContract)||void 0===e?void 0:e.toString().toLowerCase())}))),void 0!==r.tokenId&&(e=e.filter((t=>{var e;return t.tokenId.toString()===(null===r||void 0===r||null===(e=r.tokenId)||void 0===e?void 0:e.toString())}))),e=e.filter(((t,r)=>r>=a)),e=e.slice(0,n)),e}async prepare(t,r,e){return f.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:t,args:r,overrides:e})}async call(t,r,e){return this.contractWrapper.call(t,r,e)}}(0,a.c)(L,"contractRoles",g.dB)},54496:(t,r,e)=>{e.d(r,{a:()=>g,g:()=>h,h:()=>p,i:()=>d,m:()=>u,v:()=>l});var a=e(15784),i=e(2856),n=e(16588),o=e(74788),s=e(75144),c=e(44596);async function d(t,r,i,n,s){try{const p=(await e.e(1664).then(e.t.bind(e,91664,19))).default,l=new a.wn(i,p,t),[u,g]=await Promise.all([l.supportsInterface(o.I),l.supportsInterface(o.a)]);if(u){var c;const o=(await Promise.resolve().then(e.t.bind(e,39158,19))).default,p=new a.wn(i,o,t);if(await p.isApprovedForAll(s,r))return!0;let l;try{l=await p.getApproved(n)}catch(d){}return(null===(c=l)||void 0===c?void 0:c.toLowerCase())===r.toLowerCase()}if(g){const n=(await Promise.resolve().then(e.t.bind(e,82955,19))).default,o=new a.wn(i,n,t);return await o.isApprovedForAll(s,r)}return console.error("Contract does not implement ERC 1155 or ERC 721."),!1}catch(p){return console.error("Failed to check if token is approved",p),!1}}async function p(t,r,a,i,n){const c=(await e.e(1664).then(e.t.bind(e,91664,19))).default,d=new s.cq(t.getSignerOrProvider(),a,c,t.options,t.storage),[p,l]=await Promise.all([d.read("supportsInterface",[o.I]),d.read("supportsInterface",[o.a])]);if(p){const o=(await Promise.resolve().then(e.t.bind(e,39158,19))).default,c=new s.cq(t.getSignerOrProvider(),a,o,t.options,t.storage);if(!await c.read("isApprovedForAll",[n,r])){(await c.read("getApproved",[i])).toLowerCase()===r.toLowerCase()||await c.sendTransaction("setApprovalForAll",[r,!0])}}else{if(!l)throw Error("Contract must implement ERC 1155 or ERC 721.");{const i=(await Promise.resolve().then(e.t.bind(e,82955,19))).default,o=new s.cq(t.getSignerOrProvider(),a,i,t.options,t.storage);await o.read("isApprovedForAll",[n,r])||await o.sendTransaction("setApprovalForAll",[r,!0])}}}function l(t){if((0,n.c)(void 0!==t.assetContractAddress&&null!==t.assetContractAddress,"Asset contract address is required"),(0,n.c)(void 0!==t.buyoutPricePerToken&&null!==t.buyoutPricePerToken,"Buyout price is required"),(0,n.c)(void 0!==t.listingDurationInSeconds&&null!==t.listingDurationInSeconds,"Listing duration is required"),(0,n.c)(void 0!==t.startTimestamp&&null!==t.startTimestamp,"Start time is required"),(0,n.c)(void 0!==t.tokenId&&null!==t.tokenId,"Token ID is required"),(0,n.c)(void 0!==t.quantity&&null!==t.quantity,"Quantity is required"),"NewAuctionListing"===t.type)(0,n.c)(void 0!==t.reservePricePerToken&&null!==t.reservePricePerToken,"Reserve price is required")}async function u(t,r,e){return{quantity:e.quantityDesired,pricePerToken:e.pricePerToken,currencyContractAddress:e.currency,buyerAddress:e.offeror,quantityDesired:e.quantityWanted,currencyValue:await(0,c.a)(t,e.currency,e.quantityWanted.mul(e.pricePerToken)),listingId:r}}function g(t,r,e){if(e=i.iC.from(e),t=i.iC.from(t),r=i.iC.from(r),t.eq(i.iC.from(0)))return!1;return r.sub(t).mul(s.dz).div(t).gte(e)}async function h(t,r,e){const a=[];for(;r-t>o.D;)a.push(e(t,t+o.D-1)),t+=o.D;return a.push(e(t,r-1)),await Promise.all(a)}},50648:(t,r,e)=>{e.d(r,{B:()=>c,C:()=>l,N:()=>p,a:()=>d,s:()=>u});var a=e(75144),i=e(93709),n=e(44596);const o=(()=>i.z.object({}).catchall(i.z.union([a.cw,i.z.unknown()])))(),s=(()=>i.z.union([i.z.array(o),o]).optional().nullable())(),c=(()=>i.z.object({name:i.z.union([i.z.string(),i.z.number()]).optional().nullable(),description:i.z.string().nullable().optional().nullable(),image:a.cx.nullable().optional(),animation_url:a.cx.optional().nullable()}))(),d=(()=>c.extend({external_url:a.cx.nullable().optional(),background_color:a.cy.optional().nullable(),properties:s,attributes:s}).catchall(i.z.union([a.cw,i.z.unknown()])))(),p=(()=>i.z.union([d,i.z.string()]))(),l=(()=>d.extend({id:i.z.string(),uri:i.z.string(),image:i.z.string().nullable().optional(),external_url:i.z.string().nullable().optional(),animation_url:i.z.string().nullable().optional()}))();async function u(t,r,i,o){if(!(0,n.i)(i)){const n=(await Promise.resolve().then(e.t.bind(e,2056,19))).default,s=t.getSigner(),c=t.getProvider(),d=new a.cq(s||c,i,n,t.options,t.storage),p=await t.getSignerAddress(),l=t.address;return(await d.read("allowance",[p,l])).lt(r)&&await d.sendTransaction("approve",[l,r]),o}o.value=r}}}]);
//# sourceMappingURL=296.c119f4e4.chunk.js.map