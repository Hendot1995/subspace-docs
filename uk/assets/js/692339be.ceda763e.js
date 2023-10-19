"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[6676],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),m=a,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(h,i(i({ref:t},p),{},{components:r})):n.createElement(h,i({ref:t},p))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9080:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={title:"Introduction to Staking and Operators",sidebar_position:1,description:"Introduction to Staking and Operators",keywords:["Staking","Operator","Guide","Decoupled Execution","Sub-domain"]},i=void 0,s={unversionedId:"operators_and_staking/intro",id:"operators_and_staking/intro",title:"Introduction to Staking and Operators",description:"Introduction to Staking and Operators",source:"@site/i18n/uk/docusaurus-plugin-content-docs/current/operators_and_staking/intro.md",sourceDirName:"operators_and_staking",slug:"/operators_and_staking/intro",permalink:"/uk/docs/pre-release/operators_and_staking/intro",draft:!1,editUrl:"https://github.com/subspace/subspace-docs/blob/main/i18n/uk/docusaurus-plugin-content-docs/current/operators_and_staking/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Introduction to Staking and Operators",sidebar_position:1,description:"Introduction to Staking and Operators",keywords:["Staking","Operator","Guide","Decoupled Execution","Sub-domain"]},sidebar:"tutorialSidebar",previous:{title:"Operators and Staking",permalink:"/uk/docs/pre-release/category/operators-and-staking"},next:{title:"Operators guide",permalink:"/uk/docs/pre-release/operators_and_staking/operators"}},l={},c=[{value:"Operators are a key part in solving the farmer&#39;s dilemma",id:"operators-are-a-key-part-in-solving-the-farmers-dilemma",level:2},{value:"Farming",id:"farming",level:3},{value:"Being an operator",id:"being-an-operator",level:3},{value:"Operator hardware requirements",id:"operator-hardware-requirements",level:3},{value:"Staking",id:"staking",level:3},{value:"Stake epoch",id:"stake-epoch",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"operators-are-a-key-part-in-solving-the-farmers-dilemma"},"Operators are a key part in solving the farmer's dilemma"),(0,a.kt)("p",null,"Subspace introduces the Decoupled Execution Framework (DecEx) to tackle the state-bloat issue by separating transaction ordering from execution. Farmers confirm and order transactions, while staked operator nodes execute them, allowing different hardware requirements for each role. This keeps farming accessible and lays the groundwork for scalable execution. Users submit transactions to operators who batch them into bundles. Farmers verify and order them, with operators executing the transactions in this order. The process forms a deterministic receipt chain, with an initial implementation using an optimistic fraud-proof validation scheme."),(0,a.kt)("h1",{id:"key-differences-between-farming-and-being-an-operator"},"Key differences between farming and being an operator"),(0,a.kt)("h3",{id:"farming"},"Farming"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Consensus:")," This is the primary role of Farmers, and provides security and consensus for the network. Our Farmers are what ensure we don't trust, but verify."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Transaction Ordering"),": Farmers are responsible for confirming the availability of transactions and providing an ordering."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Lightweight Requirements"),": The hardware requirements for farming are designed to be lightweight, making it accessible to anyone."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Verification"),": Farmers only verify the proof-of-election and ensure that the data is available."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Transactions"),": Farmers do not execute transactions; they focus on ordering them and including them in the blockchain.")),(0,a.kt)("h3",{id:"being-an-operator"},"Being an operator"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Transaction Submission and Execution"),": Operators are responsible for batching transactions into bundles and submitting them to the consensus chain, executing transactions included in the consensus block and maintaining the resulting chain state."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Higher ",(0,a.kt)("a",{parentName:"strong",href:"#operator-hardware-requirements"},"Hardware Requirements")),": Operators require more substantial hardware capabilities, as they must execute complex transactions."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Require Initial Investment:")," Operators are required to stake a certain amount of SSC. If an operator acts maliciously, their stake is at risk of being ",(0,a.kt)("strong",{parentName:"li"},"slashed"),". Engaging in such malicious behavior carries significant penalties, providing crypto-economic security to execution."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Pre-Validation and Batching"),": Operators pre-validate and batch transactions into bundles through a stake-weighted election process."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Deterministic Execution"),": The operators execute transactions in a specific, deterministic order, producing state commitments in the form of execution receipts."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Secondary Network Role"),": Monitors the Domain chain for malicious activity and submits fraud proofs to consensus chain."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Supports Various Environments"),": Can support different smart contract execution environments like the Ethereum Virtual Machine (EVM) or Web-Assembly (WASM).")),(0,a.kt)("h3",{id:"operator-hardware-requirements"},"Operator hardware requirements"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"The hardware requirements have not been benchmarked, and these are our best estimates. We would appreciate your feedback if you feel that the requirements listed here are too high or too low.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"CPU"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"x86-64 compatible;"),(0,a.kt)("li",{parentName:"ul"},"Intel Ice Lake, or newer (Xeon or Core series); AMD Zen3, or newer (EPYC or Ryzen);"),(0,a.kt)("li",{parentName:"ul"},"4 physical cores @ 3.4GHz;"),(0,a.kt)("li",{parentName:"ul"},"Simultaneous multithreading disabled (Hyper-Threading on Intel, SMT on AMD);"),(0,a.kt)("li",{parentName:"ul"},"Prefer single-threaded performance over higher cores count. A comparison of single-threaded performance can be found here.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Storage"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"An NVMe SSD of 1 TB. In general, the latency is more important than the throughput.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Memory"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"32 GB DDR4 ECC.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"System"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Linux Kernel 5.16 or newer.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Network"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The minimum symmetric networking speed is set to 500 Mbit/s.")),(0,a.kt)("h3",{id:"staking"},"Staking"),(0,a.kt)("p",null,"The Subspace Network relies on staking from both domain operators and farmers to secure the network and provide resources. Subspace implements a Nominated Proof-of-Stake algorithm where token holders endorse operators who execute transactions and produce blocks."),(0,a.kt)("p",null,"Our staking model consists of two tiers:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Farmers earn rewards proportional to their pledged storage. Farmers can choose to nominate operators and back them with their own stake, increasing their chance of being elected as a slot leader. Farmers, who have earned storage rewards, nominate operators to execute transactions. This nomination system balances the power between farmers who nominate and operators and both parties share the rewards and the potential penalties (slashing).")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Operators stake to gain the right to produce bundles within a domain. They are responsible for validating and executing transactions, producing execution receipts, and applying state transitions and earn rewards for their work. The operator's chances to be elected as a slot leader and produce a bundle are weighted by their stake. Operators can be nominated by farmers or other SSC holders."))),(0,a.kt)("h3",{id:"stake-epoch"},"Stake epoch"),(0,a.kt)("p",null,"Stake epoch is a designated period in domain blocks within a blockchain system that marks each stake allocation re-adjustment period. Occurring every ",(0,a.kt)("inlineCode",{parentName:"p"},"StakeEpochDuration")," blocks (at the moment, it's set to every 100 blocks or ~10 minutes), an epoch transition triggers specific actions such as finalizing operator domain switches, deregistering operators, unlocking operators and their associated funds, and recalculating stake distribution for the Verifiable Random Function (VRF) election. These transitions are designed to adjust the stake distribution dynamically, finalize various staking-related operations, process rewards, and manage deposits and withdrawals. The uniform duration across all domains helps maintain consistency in the network, while the specific starting point for each domain's epoch transition may vary based on when it is registered, helping to amortize the load of these transitions."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Read ",(0,a.kt)("a",{parentName:"p",href:"https://subnomicon.subspace.network/docs/category/decoupled-execution"},"Subspace Subnomicon")," to get a full picture behind decoupled execution!")))}d.isMDXComponent=!0}}]);