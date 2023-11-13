"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[6337],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>k});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),d=s(a),u=i,k=d["".concat(p,".").concat(u)]||d[u]||m[u]||l;return a?n.createElement(k,o(o({ref:t},c),{},{components:a})):n.createElement(k,o({ref:t},c))}));function k(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=a.length,o=new Array(l);o[0]=u;var r={};for(var p in t)hasOwnProperty.call(t,p)&&(r[p]=t[p]);r.originalType=e,r[d]="string"==typeof e?e:i,o[1]=r;for(var s=2;s<l;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},4261:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>r,toc:()=>s});var n=a(7462),i=(a(7294),a(3905));const l={title:"SubWallet (Recommended)",sidebar_position:1,description:"How to configure the SubWallet Substrate wallet for the Subspace Network",keywords:["Farmer","Farming","CLI","SubWallet","Wallet"]},o=void 0,r={unversionedId:"Farming & Staking/Wallets/subwallet",id:"version-latest/Farming & Staking/Wallets/subwallet",title:"SubWallet (Recommended)",description:"How to configure the SubWallet Substrate wallet for the Subspace Network",source:"@site/i18n/it/docusaurus-plugin-content-docs/version-latest/Farming & Staking/Wallets/subwallet.md",sourceDirName:"Farming & Staking/Wallets",slug:"/Farming & Staking/Wallets/subwallet",permalink:"/it/docs/Farming & Staking/Wallets/subwallet",draft:!1,editUrl:"https://github.com/subspace/subspace-docs/blob/main/i18n/it/docusaurus-plugin-content-docs/current/Farming & Staking/Wallets/subwallet.md",tags:[],version:"latest",sidebarPosition:1,frontMatter:{title:"SubWallet (Recommended)",sidebar_position:1,description:"How to configure the SubWallet Substrate wallet for the Subspace Network",keywords:["Farmer","Farming","CLI","SubWallet","Wallet"]},sidebar:"tutorialSidebar",previous:{title:"Wallets",permalink:"/it/docs/category/wallets"},next:{title:"Polkadot.js",permalink:"/it/docs/Farming & Staking/Wallets/polkadot"}},p={},s=[{value:"Create or Import A New Wallet",id:"create-or-import-a-new-wallet",level:2},{value:"Adding New Networks to SubWallet",id:"adding-new-networks-to-subwallet",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"How can I find my Public Address?",id:"how-can-i-find-my-public-address",level:3},{value:"I Dont see <code>Subspace Testnet</code> or any Subspace Networks as an option in chain settings",id:"i-dont-see-subspace-testnet-or-any-subspace-networks-as-an-option-in-chain-settings",level:3},{value:"How do I backup my wallet?",id:"how-do-i-backup-my-wallet",level:3}],c={toc:s},d="wrapper";function m(e){let{components:t,...l}=e;return(0,i.kt)(d,(0,n.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"SubWallet is a 3rd party Substrate/EVM wallet created by the ",(0,i.kt)("a",{parentName:"p",href:"https://subwallet.app"},"Subwallet Team"),"."),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("em",{parentName:"p"},"This guide will be following the browser extension pathway. There is also a mobile application available for ",(0,i.kt)("a",{parentName:"em",href:"https://play.google.com/store/apps/details?id=app.subwallet.mobile%5C&pli=1"},"Android")," and ",(0,i.kt)("a",{parentName:"em",href:"https://testflight.apple.com/join/ZW3pUbWj"},"IOS"),"."))),(0,i.kt)("p",null,"SubWallet is a user-friendly Web3 Multiverse Gateway for the Substrate ecosystem. Our vision is to provide you with the simplest and most secure way to connect to blockchain-based applications."),(0,i.kt)("p",null,"To learn more about SubWallet visit their ",(0,i.kt)("a",{parentName:"p",href:"https://subwallet.app"},"Website"),"."),(0,i.kt)("h2",{id:"create-or-import-a-new-wallet"},"Create or Import A New Wallet"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Visit the ",(0,i.kt)("a",{parentName:"p",href:"https://subwallet.app/download.html"},"SubWallet website")," and Download your respective version.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Once extension is installed, Open it and click ",(0,i.kt)("inlineCode",{parentName:"p"},"+"),", & ",(0,i.kt)("inlineCode",{parentName:"p"},"Get Started")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"step-2",src:a(340).Z,width:"379",height:"500"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The extension will give you up to four options. You will most likely want to select ",(0,i.kt)("inlineCode",{parentName:"p"},"Create New Account")),(0,i.kt)("admonition",{parentName:"li",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"If you would like to Import an ",(0,i.kt)("strong",{parentName:"p"},"Existing")," Wallet, then select ",(0,i.kt)("inlineCode",{parentName:"p"},"Import from pre-existing seed"))),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"step-3",src:a(9233).Z,width:"411",height:"622"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"When you create a new account you will see the following."),(0,i.kt)("admonition",{parentName:"li",title:"Info",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"SubWallet supports Substrate and EVM, so when a wallet is generated you will see the top option which is simply the substrate chain information, then a section labeled EVM which is evm wallet information. ",(0,i.kt)("strong",{parentName:"p"},"For subspace, we currently have no EVM integrations so you can disregard this portion."))),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"step-4",src:a(992).Z,width:"384",height:"500"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Check which accounts you would like to import, and check ",(0,i.kt)("inlineCode",{parentName:"p"},"I have saved my mnemonic seed safely")," and click ",(0,i.kt)("inlineCode",{parentName:"p"},"Next")),(0,i.kt)("admonition",{parentName:"li",type:"danger"},(0,i.kt)("p",{parentName:"admonition"},"MAKE SURE YOU STORE THIS SECURELY, AND NEVER SHARE IT")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"step-5",src:a(7138).Z,width:"385",height:"500"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Next we will create a password for our wallet. (Make sure not to reuse passwords!)"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"step-6",src:a(5336).Z,width:"382",height:"500"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Next Subwallet will ask you which networks you want to enable, ",(0,i.kt)("strong",{parentName:"p"},"Scroll down and select the Subspace Testnet/s")," including any other substrate based networks you may like to use in the future, click ",(0,i.kt)("inlineCode",{parentName:"p"},"Confirm")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"step-7",src:a(3331).Z,width:"385",height:"500"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Congratulations you have fully created your substrate wallet with subwallet!"))),(0,i.kt)("h2",{id:"adding-new-networks-to-subwallet"},"Adding New Networks to SubWallet"),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"This tutorial assumes you have already completed the setup for SubWallet. If you have not please refer to the ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"#create-or-import-a-new-wallet"},"section above")))),(0,i.kt)("p",null,"SubWallet supports adding custom networks. This can be helpful for in-development networks such as the Subspace Network as we have regularly changing RPC endpoints and versions of testnets, and soon various domains. Below you will find a simple guide on how to add these new networks. Additionally we will try and keep an updated list of active RPC endpoints below for development."),(0,i.kt)("admonition",{title:"RPC Endpoints",type:"info"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"*","*","Gemini 3d Endpoint: ","*","*"," wss\\://rpc.gemini-3d.subspace.network/ws"),(0,i.kt)("li",{parentName:"ul"},"*","*","Gemini 3e Endpoint: ","*","*"," wss\\://rpc.gemini-3e.subspace.network/ws"),(0,i.kt)("li",{parentName:"ul"},"*","*","Gemini 3g Endpoint: ","*","*"," wss\\://rpc-1.gemini-3g.subspace.network/ws"))),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Open SubWallet, Select the 3 Line menu in the top left of the wallet"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"rpc-step-1",src:a(7592).Z,width:"404",height:"614"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Inside the settings menu you will see the option to ",(0,i.kt)("em",{parentName:"p"},"Manage Networks"),", click this."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"rpc-step-2",src:a(9373).Z,width:"407",height:"621"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Within the ",(0,i.kt)("em",{parentName:"p"},"Manage Networks")," menu you will see a ",(0,i.kt)("inlineCode",{parentName:"p"},"+")," in the top right corner, click this"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"rpc-step-3",src:a(1402).Z,width:"406",height:"620"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"This will open the ",(0,i.kt)("em",{parentName:"p"},"Import Network")," menu, where you will see a few options"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Provider URL"),(0,i.kt)("li",{parentName:"ul"},"Network Name"),(0,i.kt)("li",{parentName:"ul"},"Symbol"),(0,i.kt)("li",{parentName:"ul"},"Block explorer"),(0,i.kt)("li",{parentName:"ul"},"Crowdloan URL")),(0,i.kt)("p",{parentName:"li"},"The only option that is required is the Provider URL. You can add an explorer if you would like but it is not required. (The current Subspace Explorer is available ",(0,i.kt)("a",{parentName:"p",href:"https://explorer.subspace.network"},"here"),"."),(0,i.kt)("p",{parentName:"li"},"You can refer to the ",(0,i.kt)("em",{parentName:"p"},"RPC Endpoints")," above for available provider URLs for the Subspace Network."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"rpc-step-4",src:a(9632).Z,width:"395",height:"606"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Fill in the provider URL, once you click out of this box it will check the URL and add the rest of the information, then click Save."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"In this example we will be using ",(0,i.kt)("inlineCode",{parentName:"em"},"wss://rpc.devnet.subspace.network")))),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"rpc-step-5",src:a(3489).Z,width:"406",height:"616"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"You will then be taken back to the network screen where you can then see your new network that was added."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"rpc-step-6",src:a(2847).Z,width:"406",height:"616"})))),(0,i.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,i.kt)("p",null,"If you face any trouble or would like to learn about other features for SubWallet, please see the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.subwallet.app/"},"Official SubWallet Documentation.")," We have included some basic FAQ's below."),(0,i.kt)("h3",{id:"how-can-i-find-my-public-address"},"How can I find my Public Address?"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"You can see your default substrate public address right next to your Wallet name inside the extension"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"trouble-1",src:a(2990).Z,width:"461",height:"120"}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"You can see your Subspace Testnet public address via the dropdown menu and setting the chain to ",(0,i.kt)("inlineCode",{parentName:"p"},"Subspace Testnet"),", once you done you will see the public address now starts with ",(0,i.kt)("inlineCode",{parentName:"p"},"st")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"step-8",src:a(1932).Z,width:"387",height:"500"})))),(0,i.kt)("h3",{id:"i-dont-see-subspace-testnet-or-any-subspace-networks-as-an-option-in-chain-settings"},"I Dont see ",(0,i.kt)("inlineCode",{parentName:"h3"},"Subspace Testnet")," or any Subspace Networks as an option in chain settings"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Sometimes when you first install or update the Substrate wallet you will need to update the wallet metadata.")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Go to the Subspace/Polkadot Explorer here: ",(0,i.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Ftest-rpc.subspace.network#/explorer"},"Polkadot/Substrate Portal"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"You will be prompted to allow the extension to connect, select which account you want to connect and click ",(0,i.kt)("inlineCode",{parentName:"p"},"Connect")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"trouble-4",src:a(3394).Z,width:"440",height:"577"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"On the Webpage, click ",(0,i.kt)("inlineCode",{parentName:"p"},"settings")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"trouble-5",src:a(3067).Z,width:"676",height:"500"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("inlineCode",{parentName:"p"},"Metadata")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"trouble-6",src:a(8434).Z,width:"690",height:"325"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("inlineCode",{parentName:"p"},"Update Metadata")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"trouble-3",src:a(3046).Z,width:"1745",height:"304"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"You will get a popup from the extension telling you that your metadata is out of date, confirming that you want to update. Click ",(0,i.kt)("inlineCode",{parentName:"p"},"Approve")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"trouble-4",src:a(1671).Z,width:"437",height:"562"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"You will now see ",(0,i.kt)("inlineCode",{parentName:"p"},"Subspace Testnet")," as an option on the ",(0,i.kt)("inlineCode",{parentName:"p"},"Allow use on any chain")," dropdown."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"trouble-9",src:a(9279).Z,width:"455",height:"593"})))),(0,i.kt)("h3",{id:"how-do-i-backup-my-wallet"},"How do I backup my wallet?"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"You can backup/export your wallet via the ",(0,i.kt)("inlineCode",{parentName:"p"},"...")," menu, then click ",(0,i.kt)("inlineCode",{parentName:"p"},"Export Account")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"trouble-6",src:a(4111).Z,width:"450",height:"595"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"You will then enter your wallet password and click which preferred export method you would like to use, either ",(0,i.kt)("inlineCode",{parentName:"p"},"Private Key"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"QR"),", or ",(0,i.kt)("inlineCode",{parentName:"p"},"JSON")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"trouble-7",src:a(7011).Z,width:"450",height:"499"})))))}m.isMDXComponent=!0},3067:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/trouble-5-62b1e8b520c8a979e807ef157c0079f0.png"},8434:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/trouble-6-223ed4f743831ec30d3d36613d129d10.png"},9233:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/create-new-790d23fbc9654eaa97f3a5f89a40ab01.png"},5336:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/create-password-a08b47bd54b8d59a2a7af05f3241d79d.png"},1932:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/final-page-54dc7c79e35ae06e616b7d9e6e8e077c.png"},7138:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/next-step-51be41c737d29e0d089da025cade5f77.png"},7592:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/rpc-step-1-899b6c05c9a15224c9fc1dab9aa9f12d.png"},9373:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/rpc-step-2-7a6a3b85b1b0a2ed7ca9e8b38f3ccd55.png"},1402:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/rpc-step-3-6357ba8b9087bb7b75c0b905ca3ce8f1.png"},9632:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/rpc-step-4-f7ca8b782c0a26651bde1b26f9efd918.png"},3489:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/rpc-step-5-e37cd1fbcdab0b2dba380c96c2bb717d.png"},2847:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/rpc-step-6-b336140557b1664d157addc9541761c9.png"},992:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/select-account-7864769ce8ebe864df94443be23f2b95.png"},3331:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/select-network-4776cabb78512f4d02d2ef344ba3c0d3.png"},2990:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/trouble-1-fe459c3b6e6bafd0e753882baabcbe38.png"},3394:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/trouble-2-e41cc2c8af6e8e43bd604977b9ff801d.png"},3046:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/trouble-3-b668815c18b07794808367ee1be6651c.png"},1671:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/trouble-4-1f216abe64bc8cd2a3a5a25c20b76920.png"},9279:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/trouble-5-396d8be0fb5f4cb3f61b7a390c251b64.png"},4111:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/trouble-6-8b0ec2434f9059900d6a179c6dcca273.png"},7011:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/trouble-7-6d42d3053e88f0934d367dec95c8fbb6.png"},340:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/welcome-back-49395dbb75b0b059794545a42389e9eb.png"}}]);