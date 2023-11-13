"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[8383],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},k="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),k=s(n),c=i,u=k["".concat(p,".").concat(c)]||k[c]||d[c]||o;return n?a.createElement(u,r(r({ref:t},m),{},{components:n})):a.createElement(u,r({ref:t},m))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[k]="string"==typeof e?e:i,r[1]=l;for(var s=2;s<o;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5574:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(7462),i=(n(7294),n(3905));const o={title:"Staking guide",sidebar_position:2,description:"Staking guide",keywords:["Staking guide","Staking"]},r=void 0,l={unversionedId:"Farming & Staking/Staking/staking",id:"Farming & Staking/Staking/staking",title:"Staking guide",description:"Staking guide",source:"@site/i18n/id/docusaurus-plugin-content-docs/current/Farming & Staking/Staking/staking.md",sourceDirName:"Farming & Staking/Staking",slug:"/Farming & Staking/Staking/",permalink:"/id/docs/pre-release/Farming & Staking/Staking/",draft:!1,editUrl:"https://github.com/subspace/subspace-docs/blob/main/i18n/id/docusaurus-plugin-content-docs/current/Farming & Staking/Staking/staking.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Staking guide",sidebar_position:2,description:"Staking guide",keywords:["Staking guide","Staking"]},sidebar:"tutorialSidebar",previous:{title:"Operators guide",permalink:"/id/docs/pre-release/Farming & Staking/Staking/operators"},next:{title:"Timekeeping",permalink:"/id/docs/pre-release/Farming & Staking/timekeeping"}},p={},s=[{value:"Select an operator to nominate",id:"select-an-operator-to-nominate",level:3},{value:"Operator Nomination using Polkadot.js",id:"operator-nomination-using-polkadotjs",level:3},{value:"Check if your <strong>nomination</strong> worked succesfully.",id:"check-if-your-nomination-worked-succesfully",level:3},{value:"Stake withdrawal using Polkadot.js",id:"stake-withdrawal-using-polkadotjs",level:3},{value:"Calculating your nominator balance",id:"calculating-your-nominator-balance",level:3}],m={toc:s},k="wrapper";function d(e){let{components:t,...o}=e;return(0,i.kt)(k,(0,a.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"select-an-operator-to-nominate"},"Select an operator to nominate"),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Three important factors to pay attention to are ",(0,i.kt)("inlineCode",{parentName:"p"},"minimumNominatorStake"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"nominationTax"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"status"),".")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Visit PolkadotJS ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://polkadot.js.org/apps/#/explorer"},"Network Explorer")),"."),(0,i.kt)("li",{parentName:"ol"},"Go to ",(0,i.kt)("inlineCode",{parentName:"li"},"Developer")," -> ",(0,i.kt)("inlineCode",{parentName:"li"},"Chain state"),".")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Staking-16",src:n(6109).Z,width:"1744",height:"402"}),"\n3","."," Select ",(0,i.kt)("inlineCode",{parentName:"p"},"domains")," under ",(0,i.kt)("inlineCode",{parentName:"p"},"selected state query")," and choose ",(0,i.kt)("inlineCode",{parentName:"p"},"operators"),", exclude ",(0,i.kt)("inlineCode",{parentName:"p"},"option")," and click on ",(0,i.kt)("inlineCode",{parentName:"p"},"+")," to run the query.\n4","."," Browse the list of available operators, make sure the status is ",(0,i.kt)("inlineCode",{parentName:"p"},"Registered")," and that ",(0,i.kt)("inlineCode",{parentName:"p"},"minimumNominatorStake")," is lower than your staking amount."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Staking-17",src:n(7887).Z,width:"1739",height:"793"})),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Number 17 on the screenshot above corresponds to ",(0,i.kt)("inlineCode",{parentName:"p"},"operatorId"),".")),(0,i.kt)("h3",{id:"operator-nomination-using-polkadotjs"},"Operator Nomination using ",(0,i.kt)("a",{parentName:"h3",href:"https://polkadot.js.org/"},"Polkadot.js")),(0,i.kt)("p",null,"Any account can nominate any existing ",(0,i.kt)("strong",{parentName:"p"},"operator")," with at least a minimum nominator stake set by the ",(0,i.kt)("strong",{parentName:"p"},"operator"),"."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"The only staking mechanism available to non-operators is nominating an operator.")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Make sure to select the correct network at the top-left corner.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select the account you want to use in ",(0,i.kt)("inlineCode",{parentName:"p"},"using the selected account"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select ",(0,i.kt)("inlineCode",{parentName:"p"},"domains")," under ",(0,i.kt)("inlineCode",{parentName:"p"},"submit the following extrinsic")," and choose ",(0,i.kt)("inlineCode",{parentName:"p"},"nominateOperator(operatorId, amount)")," in the dropdown.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Set an ",(0,i.kt)("inlineCode",{parentName:"p"},"operatorId")," - in the example, it's set to ",(0,i.kt)("strong",{parentName:"p"},"1"),"."),(0,i.kt)("admonition",{parentName:"li",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"In the example below, 1 TSSC is selected for staking. 18 zeros are added because of the ",(0,i.kt)("inlineCode",{parentName:"p"},"u128")," type, so make sure to put 1000000000000000000 instead."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Enter the desired amount in the ",(0,i.kt)("inlineCode",{parentName:"p"},"amount")," field for staking.\n",(0,i.kt)("img",{alt:"Staking-18",src:n(9955).Z,width:"1722",height:"465"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Submit the signed transaction."))),(0,i.kt)("p",null,"Once ",(0,i.kt)("strong",{parentName:"p"},"nomination")," is finalized when the ",(0,i.kt)("strong",{parentName:"p"},"domain epoch")," is complete, the ",(0,i.kt)("strong",{parentName:"p"},"nominator")," will start receiving rewards."),(0,i.kt)("p",null,"Any ",(0,i.kt)("strong",{parentName:"p"},"nominator")," can add more stake by using the same functionality."),(0,i.kt)("h3",{id:"check-if-your-nomination-worked-succesfully"},"Check if your ",(0,i.kt)("strong",{parentName:"h3"},"nomination")," worked succesfully."),(0,i.kt)("p",null,"There are two ways to check your ",(0,i.kt)("strong",{parentName:"p"},"nomination"),":"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"You can use PolkadotJS ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://polkadot.js.org/apps/#/explorer"},"Network Explorer")),".")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Staking-7",src:n(8564).Z,width:"1761",height:"633"}),"\n2","."," Browse the ",(0,i.kt)("strong",{parentName:"p"},"recent events")," and you should see ",(0,i.kt)("strong",{parentName:"p"},"domains.OperatorNominated")," event."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Staking-19",src:n(2702).Z,width:"848",height:"170"}),"\n3","."," Click on the dropdown arrow to view the ",(0,i.kt)("strong",{parentName:"p"},"domainId")," and ",(0,i.kt)("strong",{parentName:"p"},"operatorId"),"."),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Alternatively, you can use ",(0,i.kt)("a",{parentName:"p",href:"https://subspace.subscan.io/"},"Subscan")," which is a little easier to navigate for this job."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Navigate to ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://subspace.subscan.io/"},"Subspace Subscan"))," portal."),(0,i.kt)("li",{parentName:"ol"},"Click on ",(0,i.kt)("inlineCode",{parentName:"li"},"Blockchain")," -> ",(0,i.kt)("inlineCode",{parentName:"li"},"Extrinsics"),".")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Staking-9",src:n(8874).Z,width:"1203",height:"341"})),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Scroll to the bottom of the page to view all recent events, search for ",(0,i.kt)("inlineCode",{parentName:"li"},"nominate_operator")," event.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Staking-20",src:n(4698).Z,width:"1210",height:"301"})),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click on ",(0,i.kt)("inlineCode",{parentName:"p"},"Extrinsic ID")," for the desired event.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Scroll to ",(0,i.kt)("inlineCode",{parentName:"p"},"Parameters")," to view the stake value."))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Staking-21",src:n(3831).Z,width:"1194",height:"582"})),(0,i.kt)("ol",{start:6},(0,i.kt)("li",{parentName:"ol"},"Scroll to ",(0,i.kt)("inlineCode",{parentName:"li"},"Events")," and click on dropdown arrow for ",(0,i.kt)("inlineCode",{parentName:"li"},"domains(OperatorNominated)"),".")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Staking-22",src:n(2590).Z,width:"1210",height:"576"})),(0,i.kt)("ol",{start:7},(0,i.kt)("li",{parentName:"ol"},"Inspect and ensure that ",(0,i.kt)("inlineCode",{parentName:"li"},"nominatorId")," matches your ",(0,i.kt)("inlineCode",{parentName:"li"},"id"),".")),(0,i.kt)("h3",{id:"stake-withdrawal-using-polkadotjs"},"Stake withdrawal using ",(0,i.kt)("a",{parentName:"h3",href:"https://polkadot.js.org/"},"Polkadot.js")),(0,i.kt)("p",null,"Any ",(0,i.kt)("strong",{parentName:"p"},"operator")," or ",(0,i.kt)("strong",{parentName:"p"},"nominator")," can initiate withdrawal. They can withdraw the total staked amount or a portion of their stake."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If an operator is initiating a withdrawal, then their remaining balance should be at least the minimum operator stake, otherwise the request is rejected."),(0,i.kt)("li",{parentName:"ul"},"If a nominator is initiating a withdrawal, and the remaining balance is less than the operator-defined minimum nominator stake, then the total nominator stake is unlocked otherwise, only the requested amount is unlocked.")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Select the account you want to use in ",(0,i.kt)("inlineCode",{parentName:"li"},"using the selected account"),"."),(0,i.kt)("li",{parentName:"ol"},"Select ",(0,i.kt)("inlineCode",{parentName:"li"},"domains")," under ",(0,i.kt)("inlineCode",{parentName:"li"},"submit the following extrinsic")," and choose ",(0,i.kt)("inlineCode",{parentName:"li"},"withdrawStake(operatorId, withdraw)")," in the dropdown."),(0,i.kt)("li",{parentName:"ol"},"Choose an operator by selecting an ",(0,i.kt)("inlineCode",{parentName:"li"},"operatorId")," - in the example, it's set to ",(0,i.kt)("inlineCode",{parentName:"li"},"17"),"."),(0,i.kt)("li",{parentName:"ol"},"Choose the withdrawal amount in the ",(0,i.kt)("inlineCode",{parentName:"li"},"withdraw")," field - you can specify to withdraw ",(0,i.kt)("inlineCode",{parentName:"li"},"all")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"some")," staking amount.")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Example of withdrawal of 1 TSSC stake amount from nominating an operator ",(0,i.kt)("inlineCode",{parentName:"p"},"17"),".")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Staking-23",src:n(5899).Z,width:"1732",height:"522"})),(0,i.kt)("p",null,"Once the withdrawal is submitted, it's finalized after the ",(0,i.kt)("strong",{parentName:"p"},"domain epoch")," is completed. All the withdrawn funds are unlocked after the ",(0,i.kt)("strong",{parentName:"p"},"unlocking period")," is complete."),(0,i.kt)("h3",{id:"calculating-your-nominator-balance"},"Calculating your nominator balance"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Proceed to PolkadotJS ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://polkadot.js.org/apps/#/explorer"},"Network Explorer")),"."),(0,i.kt)("li",{parentName:"ol"},"Go to ",(0,i.kt)("inlineCode",{parentName:"li"},"Developer")," -> ",(0,i.kt)("inlineCode",{parentName:"li"},"Chain state"),"."),(0,i.kt)("li",{parentName:"ol"},"Select ",(0,i.kt)("inlineCode",{parentName:"li"},"domains")," under ",(0,i.kt)("inlineCode",{parentName:"li"},"selected state query")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"nominators(u64, AccoundId32)"),"."),(0,i.kt)("li",{parentName:"ol"},"Provide the ",(0,i.kt)("inlineCode",{parentName:"li"},"operatorId")," and select your ",(0,i.kt)("inlineCode",{parentName:"li"},"account")," from the dropdown."),(0,i.kt)("li",{parentName:"ol"},"Run the query, remember the ",(0,i.kt)("inlineCode",{parentName:"li"},"shares")," number.\n",(0,i.kt)("img",{alt:"Staking-25",src:n(5906).Z,width:"1742",height:"657"})),(0,i.kt)("li",{parentName:"ol"},"On the same screen, choose ",(0,i.kt)("inlineCode",{parentName:"li"},"domainStakingSummary(u32)"),"."),(0,i.kt)("li",{parentName:"ol"},"Provide the ",(0,i.kt)("inlineCode",{parentName:"li"},"domainId"),"."),(0,i.kt)("li",{parentName:"ol"},"Run the query, remember the ",(0,i.kt)("inlineCode",{parentName:"li"},"currentTotalStake")," number.\n",(0,i.kt)("img",{alt:"Staking-26",src:n(7042).Z,width:"1748",height:"749"})),(0,i.kt)("li",{parentName:"ol"},"Without leaving the page, select ",(0,i.kt)("inlineCode",{parentName:"li"},"operators(u64)"),"."),(0,i.kt)("li",{parentName:"ol"},"Provide ",(0,i.kt)("inlineCode",{parentName:"li"},"operatorId")," that you nominated previously."),(0,i.kt)("li",{parentName:"ol"},"Run the query, remember the ",(0,i.kt)("inlineCode",{parentName:"li"},"currentTotalStake")," number.\n",(0,i.kt)("img",{alt:"Staking-27",src:n(3293).Z,width:"1737",height:"626"}))),(0,i.kt)("p",null,"To calculate your nominator ",(0,i.kt)("strong",{parentName:"p"},"balance"),":"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Calculate ",(0,i.kt)("strong",{parentName:"li"},"share price")," by dividing ",(0,i.kt)("strong",{parentName:"li"},"currentTotalStake")," from the domain by operator ",(0,i.kt)("strong",{parentName:"li"},"currentTotalStake"),"."),(0,i.kt)("li",{parentName:"ol"},"Multiply ",(0,i.kt)("strong",{parentName:"li"},"share price")," and your nominator ",(0,i.kt)("strong",{parentName:"li"},"shares")," number.")))}d.isMDXComponent=!0},6109:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Staking-16-1fa8bad44ea64dadc08d61140e080d45.png"},7887:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Staking-17-0654352a60a5de808384098474e08616.png"},9955:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Staking-18-a394a1621593fb20addbf5fbd40db911.png"},2702:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Staking-19-738613ee2b6eac639c336b99b94f14e6.png"},4698:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Staking-20-66862bfcc6f47d0b97af115e1baf79e2.png"},3831:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Staking-21-c0d819be47dce329978716b16630fa58.png"},2590:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Staking-22-840fd5f7ffa1575338b45f61668f7a30.png"},5899:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Staking-23-d15092897afe519275dcfa8b7090a129.png"},5906:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Staking-25-b40bb732d0d9509abd25e4f723344ea9.png"},7042:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Staking-26-672b6e7f25be7e4fbb52b9b082ff4a1b.png"},3293:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Staking-27-9258eede57d97cc2cbd16637d0eac079.png"},8564:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Staking-7-255ba039078a485a7cb7e6a848fe5e9e.png"},8874:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Staking-9-67edafdb834fc435f6ce1f63b06d973b.png"}}]);