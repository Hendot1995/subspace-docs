"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[503],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,f=p["".concat(l,".").concat(d)]||p[d]||m[d]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(7294),a=n(6010);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,i),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>w});var r=n(7462),a=n(7294),o=n(6010),i=n(2466),s=n(6550),l=n(1980),u=n(7392),c=n(12);function p(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function m(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const r=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=m(e),[i,s]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[l,u]=f({queryString:n,groupId:r}),[p,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,c.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),h=(()=>{const e=l??p;return d({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{h&&s(h)}),[h]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),g(e)}),[u,g,o]),tabValues:o}}var h=n(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(e){let{className:t,block:n,selectedValue:s,selectValue:l,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),m=e=>{const t=e.currentTarget,n=c.indexOf(t),r=u[n].value;r!==s&&(p(t),l(r))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:i}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>c.push(e),onKeyDown:d,onClick:m},i,{className:(0,o.Z)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":s===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:r}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function y(e){const t=g(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",b.tabList)},a.createElement(k,(0,r.Z)({},e,t)),a.createElement(v,(0,r.Z)({},e,t)))}function w(e){const t=(0,h.Z)();return a.createElement(y,(0,r.Z)({key:String(t)},e))}},5749:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var r=n(7462),a=(n(7294),n(3905)),o=n(4866),i=n(5162);const s={title:"Tips & Tricks",sidebar_position:3,description:"How to run a Subspace Network Farmer with the Substrate CLI",keywords:["Farmer","Farming","CLI","Binaries","Docker"]},l=void 0,u={unversionedId:"Farming & Staking/Farming/Pulsar/pulsar-tips",id:"version-latest/Farming & Staking/Farming/Pulsar/pulsar-tips",title:"Tips & Tricks",description:"How to run a Subspace Network Farmer with the Substrate CLI",source:"@site/i18n/uk/docusaurus-plugin-content-docs/version-latest/Farming & Staking/Farming/Pulsar/pulsar-tips.mdx",sourceDirName:"Farming & Staking/Farming/Pulsar",slug:"/Farming & Staking/Farming/Pulsar/pulsar-tips",permalink:"/uk/docs/Farming & Staking/Farming/Pulsar/pulsar-tips",draft:!1,editUrl:"https://github.com/subspace/subspace-docs/blob/main/i18n/uk/docusaurus-plugin-content-docs/current/Farming & Staking/Farming/Pulsar/pulsar-tips.mdx",tags:[],version:"latest",sidebarPosition:3,frontMatter:{title:"Tips & Tricks",sidebar_position:3,description:"How to run a Subspace Network Farmer with the Substrate CLI",keywords:["Farmer","Farming","CLI","Binaries","Docker"]},sidebar:"tutorialSidebar",previous:{title:"Install",permalink:"/uk/docs/Farming & Staking/Farming/Pulsar/pulsar-install"},next:{title:"Troubleshooting",permalink:"/uk/docs/Farming & Staking/Farming/Pulsar/pulsar-troubleshooting"}},c={},p=[{value:"Additional Tips",id:"additional-tips",level:2},{value:"Telemetry &amp; Block Explorer",id:"telemetry--block-explorer",level:3},{value:"Specify Version",id:"specify-version",level:3},{value:"Moving the Farming Process to the Background",id:"moving-the-farming-process-to-the-background",level:3}],m={toc:p},d="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"additional-tips"},"Additional Tips"),(0,a.kt)("p",null,"Welcome to the Additional Tips section! Whether you're a seasoned farmer or just starting out with the Subspace Network, these tips and tricks are designed to enhance your experience and efficiency. Here, we delve into practical advice and lesser-known techniques to help you fine-tune your farming setup and navigate common challenges with ease. From configuring your environment to managing background processes, these insights are tailored to ensure your Farmer operates smoothly and effectively. Let's dive in and explore how you can get the most out of your Subspace Network Farmer."),(0,a.kt)("h3",{id:"telemetry--block-explorer"},"Telemetry & Block Explorer"),(0,a.kt)("p",null,"Explore the Subspace Network in depth with our variety of telemetry tools and block explorers. Whether you're monitoring network activity or exploring blockchain data, these resources provide comprehensive insights into the network's performance and transactions."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://telemetry.subspace.network/"},"Telemetry Server")),": Get real-time insights into network activity and performance metrics. Ideal for monitoring the overall health and status of the Subspace Network.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://explorer.subspace.network/"},"Official Block Explorer")),": Our primary tool for viewing blocks, transactions, and network activity on the Subspace Network. This explorer offers an intuitive interface and detailed information.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://subspace.subscan.io/"},"Subscan Block Explorer")),": An alternative block explorer providing detailed views of blocks, transactions, and network events. Subscan is known for its user-friendly interface and additional data analytics features.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc-1.gemini-3g.subspace.network%2Fws#/accounts"},"Polkadot.js Block Explorer")),": For users familiar with the Polkadot ecosystem, this explorer offers a seamless experience for exploring the Subspace Network using the Polkadot.js interface."))),(0,a.kt)("h3",{id:"specify-version"},"Specify Version"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"settings.toml")," file contains critical configurations for Pulsar, including the network your node connects to. Specify your network environment by setting the ",(0,a.kt)("inlineCode",{parentName:"p"},"chain")," variable under the ",(0,a.kt)("inlineCode",{parentName:"p"},"[node]")," section:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-toml"},"# settings.toml\n[node]\nchain = 'gemini-3g' //In this Example we have set to Gemini-3g\n# ... additional configuration settings ...\n")),(0,a.kt)("p",null,"Set the ",(0,a.kt)("inlineCode",{parentName:"p"},"chain")," value to your target network identifier."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Local Development: Set to ",(0,a.kt)("inlineCode",{parentName:"li"},"dev")),(0,a.kt)("li",{parentName:"ul"},"Gemini Testnet: Set to ",(0,a.kt)("inlineCode",{parentName:"li"},"gemini-3g"))),(0,a.kt)("h3",{id:"moving-the-farming-process-to-the-background"},"Moving the Farming Process to the Background"),(0,a.kt)(o.Z,{groupId:"OS",mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"tmux",label:"Tmux",default:!0,mdxType:"TabItem"},":::tip Learn More about Tmux",(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"If you want to learn more about Tmux and its options check out their Repo [here](https://github.com/tmux/tmux/wiki)\n\n:::\n\n*   Create a new tmux session using a socket file named farming\n\n```shell-session\n$ tmux -S farming\n```\n\n*   Move process to background by detaching\n\n```text\nCtrl+b d OR \u2318+b d (Mac)\n```\n\n*   To re-attach\n\n```shell-session\n$ tmux -S farming attach\n```\n\n*   Alternatively, you can use the following single command to both create (if not exists already) and attach to a session:\n\n```shell-session\n$ tmux new-session -A -D -s farming\n```\n\n*   To delete farming session\n\n```shell-session\n$ tmux kill-session -t farming\n```\n"))),(0,a.kt)(i.Z,{value:"screen",label:"Screen",mdxType:"TabItem"},":::tip Learn More about Screen",(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"If you want to learn more about Screen and its options check out their Webpage [here](https://www.gnu.org/software/screen/)\n\n:::\n\n*   Create new screen using a socket file named farming\n\n```shell-session\n$ screen -S farming\n```\n\n*   Move process to background by detaching\n\n```text\nCtrl+d a OR \u2318+d a (Mac)\n```\n\n*   To re-attach\n\n```shell-session\n$ screen -r farming\n```\n\n*   Alternatively, you can use the following single command to both create (if not exists already) and attach to a session:\n\n```shell-session\n$ screen -D -R -S farming\n```\n\n*   To delete farming session\n\n```shell-session\n$ screen -S farming -X quit\n```\n")))))}f.isMDXComponent=!0}}]);