"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[1653],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),u=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(r),m=n,f=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return r?a.createElement(f,i(i({ref:t},p),{},{components:r})):a.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:n,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7358:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=r(7462),n=(r(7294),r(3905));const o={title:"\u0422\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u0438\u044f",sidebar_position:1,description:"Prerequisites for a Subspace Farmer",keywords:["Farmer","Farming","CLI","Binaries","Docker","Node","CLI","Substrate","Binaries","Docker","Service"]},i=void 0,l={unversionedId:"farming-&-staking/farming/advanced-cli/cli-prerequisites",id:"farming-&-staking/farming/advanced-cli/cli-prerequisites",title:"\u0422\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u0438\u044f",description:"Prerequisites for a Subspace Farmer",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/farming-&-staking/farming/advanced-cli/cli-prerequisites.mdx",sourceDirName:"farming-&-staking/farming/advanced-cli",slug:"/farming-&-staking/farming/advanced-cli/cli-prerequisites",permalink:"/ru/docs/pre-release/farming-&-staking/farming/advanced-cli/cli-prerequisites",draft:!1,editUrl:"https://github.com/subspace/subspace-docs/blob/main/i18n/ru/docusaurus-plugin-content-docs/current/farming-&-staking/farming/advanced-cli/cli-prerequisites.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"\u0422\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u0438\u044f",sidebar_position:1,description:"Prerequisites for a Subspace Farmer",keywords:["Farmer","Farming","CLI","Binaries","Docker","Node","CLI","Substrate","Binaries","Docker","Service"]},sidebar:"tutorialSidebar",previous:{title:"Advanced CLI",permalink:"/ru/docs/pre-release/category/advanced-cli"},next:{title:"Install",permalink:"/ru/docs/pre-release/farming-&-staking/farming/advanced-cli/cli-install"}},s={},u=[{value:"System Requirements",id:"system-requirements",level:3},{value:"Security Considerations",id:"security-considerations",level:3},{value:"Crypto Wallet",id:"crypto-wallet",level:3},{value:"Required ports",id:"required-ports",level:3},{value:"Storage",id:"storage",level:3},{value:"File System",id:"file-system",level:3}],p={toc:u},c="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(c,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"system-requirements"},"System Requirements"),(0,n.kt)("admonition",{title:"Farming can be Network Intensive.",type:"danger"},(0,n.kt)("p",{parentName:"admonition"},"Make sure you have a stable network connection. During the plotting phase of farming, it can be network intensive."),(0,n.kt)("p",{parentName:"admonition"},"This may impact your network usage so please check your network connection if you have a hard data limit.")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Hardware"),(0,n.kt)("th",{parentName:"tr",align:null},"\u0425\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043a\u0438"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"CPU"),(0,n.kt)("td",{parentName:"tr",align:null},"4 Core+")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"RAM"),(0,n.kt)("td",{parentName:"tr",align:null},"8GB+")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"SWAP"),(0,n.kt)("td",{parentName:"tr",align:null},"4GB")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Storage"),(0,n.kt)("td",{parentName:"tr",align:null},"100GB SSD")))),(0,n.kt)("h3",{id:"security-considerations"},"Security Considerations"),(0,n.kt)("p",null,"For a secure farming setup, ensure your system is updated, use a secure wallet, configure firewalls properly, and follow network safety protocols. Detailed security practices are available on our ",(0,n.kt)("a",{parentName:"p",href:"../../../learn/security"},"Security Best Practices page"),"."),(0,n.kt)("h3",{id:"crypto-wallet"},"Crypto Wallet"),(0,n.kt)("p",null,"Before running anything you need to have a wallet where you'll receive testnet coins. There are currently two wallets we suggest using, SubWallet being the preferred route."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://subwallet.app/"},"SubWallet")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://polkadot.js.org/extension/"},"PolkadotJS"))),(0,n.kt)("p",null,"Install one of the two wallets above into your browser and create a new account there.\nThe address of your account will be necessary at the last step."),(0,n.kt)("p",null,"For help refer to our forum post ",(0,n.kt)("a",{parentName:"p",href:"https://forum.subspace.network/t/subspace-wallet/61"},"How to setup Subwallet & a Polkadot.js Wallet")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"make sure to follow the Bonus section of the bottom of the post above."))),(0,n.kt)("h3",{id:"required-ports"},"Required ports"),(0,n.kt)("p",null,"Currently, a few ports need to be exposed for node to work properly."),(0,n.kt)("p",null,"If you have a server with no firewall, there is nothing to be done, otherwise make sure to open the following ",(0,n.kt)("strong",{parentName:"p"},"TCP")," and ",(0,n.kt)("strong",{parentName:"p"},"UDP")," ports for incoming connections."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"30333")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"30433")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"30533"))),(0,n.kt)("p",null,"On the desktop side if you have a router in front of your computer, you'll need to forward TCP and UDP ports to the machine on which your node is running (how this is done varies from router to router, but there is always a feature like this, refer to ",(0,n.kt)("a",{parentName:"p",href:"../Additional-Guides/port-forwarding"},"How to Forward Ports")," for a more in-depth tutorial).\nIf you're connected directly without any router, then again nothing needs to be done in such case."),(0,n.kt)("h3",{id:"storage"},"Storage"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"HDDs are not supported and will never be.")," We don't recommended trying to use smart caching, tiered storage or other ways to accelerate it, you'll be 100% disappointed and just waste your time."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"The node will require 100 GiB of good quality SSD"),". Doesn't have to be anything amazing, but something mid-range from a reputable manufacturer with decent endurance is recommended."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"The farmer side can work with pretty much any SSD whatsoever that is not fake and not outright broken"),", dedicating high quality high endurance SSD is pointless unless you already have it for reasons unrelated to Subspace. Software writes to disk in near-perfect for SSD way, effectively doing write leveling if SSD is solely dedicated to farming."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"RAID of any kind is pointless and can only harm performance and/or rewards.")," RAID0 will most likely make things slower rather than faster (application benefits from knowing underlying hardware topology). RAID1 or any other redundancy level is 100% pointless too since farms are stateless and can be removed if a disk breaks without losing data on other disks, it'll just make thing slower and reduce the effective capacity that can be used for farming, ",(0,n.kt)("em",{parentName:"p"},"reducing farming rewards for literally no benefit in exchange"),"."),(0,n.kt)("h3",{id:"file-system"},"File System"),(0,n.kt)("p",null,"You can use any file system with default settings, we advise against their use for Subspace but in the case of CoW file systems like ",(0,n.kt)("strong",{parentName:"p"},"ZFS")," or ",(0,n.kt)("strong",{parentName:"p"},"BTRFS")," you need to disable ",(0,n.kt)("strong",{parentName:"p"},"CoW")," for the farmer directory, or adjust the ",(0,n.kt)("strong",{parentName:"p"},"recordsize"),"."),(0,n.kt)("p",null,"In order to disable ",(0,n.kt)("strong",{parentName:"p"},"CoW")," on ",(0,n.kt)("strong",{parentName:"p"},"BTRFS"),", run the command ",(0,n.kt)("inlineCode",{parentName:"p"},"chattr +C /your_farmer_directory/"),"."),(0,n.kt)("p",null,"In case of ",(0,n.kt)("strong",{parentName:"p"},"ZFS"),", you can try adjusting the ",(0,n.kt)("strong",{parentName:"p"},"recordsize")," by running ",(0,n.kt)("inlineCode",{parentName:"p"},"zfs set recordsize=128K tank/dataset"),", or creating a separate ",(0,n.kt)("strong",{parentName:"p"},"dataset")," for the farmer with adjusted ",(0,n.kt)("strong",{parentName:"p"},"recordsize")," parameters."))}d.isMDXComponent=!0}}]);