"use strict";(self.webpackChunksubspace_docs=self.webpackChunksubspace_docs||[]).push([[4958],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=o,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7293:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],l={title:"Core Protocol Development",sidebar_position:4,description:"A basic guide on how to develop on the core subspace protocol utilizing substrate",keywords:["Getting Started","Learn","Core Protocol","Development"]},s=void 0,p={unversionedId:"development",id:"version-snapshot-2022-mar-09/development",title:"Core Protocol Development",description:"A basic guide on how to develop on the core subspace protocol utilizing substrate",source:"@site/protocol_versioned_docs/version-snapshot-2022-mar-09/development.md",sourceDirName:".",slug:"/development",permalink:"/protocol/snapshot-2022-mar-09/development",draft:!1,editUrl:"https://github.com/subspace/subspace-docs/blob/main/protocol_versioned_docs/version-snapshot-2022-mar-09/development.md",tags:[],version:"snapshot-2022-mar-09",sidebarPosition:4,frontMatter:{title:"Core Protocol Development",sidebar_position:4,description:"A basic guide on how to develop on the core subspace protocol utilizing substrate",keywords:["Getting Started","Learn","Core Protocol","Development"]},sidebar:"masterSidebar",previous:{title:"Command Index",permalink:"/protocol/snapshot-2022-mar-09/farm/commands"}},c={},u=[{value:"Pre-requisites",id:"pre-requisites",level:2},{value:"To Farm By Yourself (Offline)",id:"to-farm-by-yourself-offline",level:2},{value:"To Run From The Source (primarily for developers)",id:"to-run-from-the-source-primarily-for-developers",level:2}],m={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"pre-requisites"},"Pre-requisites"),(0,a.kt)("p",null,"In addition to Rust toolchain, LLVM and Clang are needed for build to succeed, can be installed on Ubuntu like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get install llvm clang\n")),(0,a.kt)("h2",{id:"to-farm-by-yourself-offline"},"To Farm By Yourself (Offline)"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Download the executables for your operating system"),(0,a.kt)("li",{parentName:"ol"},"Open your favourite terminal, and go to the folder where you download the executables")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Linux/MacOS:")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Make them executable: ",(0,a.kt)("inlineCode",{parentName:"li"},"chmod +x subspace-farmer-x86_64-*-snapshot subspace-node-x86_64-*-snapshot")),(0,a.kt)("li",{parentName:"ol"},"Run the node: ",(0,a.kt)("inlineCode",{parentName:"li"},"./subspace-node-x86_64-*-snapshot --dev --tmp")),(0,a.kt)("li",{parentName:"ol"},"In macOS, it may prompt that this app is not verified. Click on ",(0,a.kt)("inlineCode",{parentName:"li"},"cancel")," instead of moving it to trash.\nTo allow execution, go to ",(0,a.kt)("inlineCode",{parentName:"li"},"System Preferences -> Security & Privacy -> General"),", and click on ",(0,a.kt)("inlineCode",{parentName:"li"},"allow"),".\nAfter this, simply repeat step 4. This time, there will be ",(0,a.kt)("inlineCode",{parentName:"li"},"Open")," button in the prompt, click it to run node."),(0,a.kt)("li",{parentName:"ol"},"Run the farmer (do this in another terminal): ",(0,a.kt)("inlineCode",{parentName:"li"},"./subspace-farmer-x86_64-*-snapshot farm")),(0,a.kt)("li",{parentName:"ol"},"In macOS, it may prompt that this app is not verified. Click on ",(0,a.kt)("inlineCode",{parentName:"li"},"cancel")," instead of moving it to trash.\nTo allow execution, go to ",(0,a.kt)("inlineCode",{parentName:"li"},"System Preferences -> Security & Privacy -> General"),", and click on ",(0,a.kt)("inlineCode",{parentName:"li"},"allow"),".\nAfter this, simply repeat step 4. This time, there will be ",(0,a.kt)("inlineCode",{parentName:"li"},"Open")," button in the prompt, click it to run node.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Windows")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Run the node: ",(0,a.kt)("inlineCode",{parentName:"li"},"subspace-node-x86_64-*-snapshot --dev --tmp")),(0,a.kt)("li",{parentName:"ol"},"After running this command, Windows may ask you for permissions related to firewall, select ",(0,a.kt)("inlineCode",{parentName:"li"},"allow")," in this case."),(0,a.kt)("li",{parentName:"ol"},"Run the farmer (do this in another terminal): ",(0,a.kt)("inlineCode",{parentName:"li"},"subspace-farmer-x86_64-*-snapshot farm"))),(0,a.kt)("h2",{id:"to-run-from-the-source-primarily-for-developers"},"To Run From The Source (primarily for developers)"),(0,a.kt)("p",null,"This is a monorepo with multiple binaries and the workflow is typical for Rust projects:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"cargo run --release --bin subspace-node -- --dev --tmp")," to run ",(0,a.kt)("a",{parentName:"li",href:"/crates/subspace-node"},"a node")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"cargo run --release --bin subspace-farmer farm")," to ",(0,a.kt)("a",{parentName:"li",href:"/crates/subspace-farmer"},"start farming"))),(0,a.kt)("p",null,"NOTE 1: You need to have ",(0,a.kt)("inlineCode",{parentName:"p"},"nightly")," version of Rust toolchain with ",(0,a.kt)("inlineCode",{parentName:"p"},"wasm32-unknown-unknown")," target available or else you'll get a compilation error.\nNOTE 2: Following the commands above, you will be farming in an offline setting (by yourself).\nNOTE 3: To farm in online setting, you can modify the command accordingly."),(0,a.kt)("p",null,"You can find readme files in corresponding crates for requirements, multi-node setup and other details."))}d.isMDXComponent=!0}}]);