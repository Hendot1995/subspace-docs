"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[3280],{3905:(e,r,a)=>{a.d(r,{Zo:()=>c,kt:()=>b});var n=a(7294);function o(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function t(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?t(Object(a),!0).forEach((function(r){o(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):t(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function s(e,r){if(null==e)return{};var a,n,o=function(e,r){if(null==e)return{};var a,n,o={},t=Object.keys(e);for(n=0;n<t.length;n++)a=t[n],r.indexOf(a)>=0||(o[a]=e[a]);return o}(e,r);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(n=0;n<t.length;n++)a=t[n],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var i=n.createContext({}),u=function(e){var r=n.useContext(i),a=r;return e&&(a="function"==typeof e?e(r):l(l({},r),e)),a},c=function(e){var r=u(e.components);return n.createElement(i.Provider,{value:r},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var a=e.components,o=e.mdxType,t=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(a),m=o,b=d["".concat(i,".").concat(m)]||d[m]||p[m]||t;return a?n.createElement(b,l(l({ref:r},c),{},{components:a})):n.createElement(b,l({ref:r},c))}));function b(e,r){var a=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var t=a.length,l=new Array(t);l[0]=m;var s={};for(var i in r)hasOwnProperty.call(r,i)&&(s[i]=r[i]);s.originalType=e,s[d]="string"==typeof e?e:o,l[1]=s;for(var u=2;u<t;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5162:(e,r,a)=>{a.d(r,{Z:()=>l});var n=a(7294),o=a(6010);const t={tabItem:"tabItem_Ymn6"};function l(e){let{children:r,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,o.Z)(t.tabItem,l),hidden:a},r)}},4866:(e,r,a)=>{a.d(r,{Z:()=>q});var n=a(7462),o=a(7294),t=a(6010),l=a(2466),s=a(6550),i=a(1980),u=a(7392),c=a(12);function d(e){return function(e){return o.Children.map(e,(e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:r,label:a,attributes:n,default:o}}=e;return{value:r,label:a,attributes:n,default:o}}))}function p(e){const{values:r,children:a}=e;return(0,o.useMemo)((()=>{const e=r??d(a);return function(e){const r=(0,u.l)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,a])}function m(e){let{value:r,tabValues:a}=e;return a.some((e=>e.value===r))}function b(e){let{queryString:r=!1,groupId:a}=e;const n=(0,s.k6)(),t=function(e){let{queryString:r=!1,groupId:a}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:r,groupId:a});return[(0,i._X)(t),(0,o.useCallback)((e=>{if(!t)return;const r=new URLSearchParams(n.location.search);r.set(t,e),n.replace({...n.location,search:r.toString()})}),[t,n])]}function f(e){const{defaultValue:r,queryString:a=!1,groupId:n}=e,t=p(e),[l,s]=(0,o.useState)((()=>function(e){let{defaultValue:r,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!m({value:r,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:r,tabValues:t}))),[i,u]=b({queryString:a,groupId:n}),[d,f]=function(e){let{groupId:r}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(r),[n,t]=(0,c.Nk)(a);return[n,(0,o.useCallback)((e=>{a&&t.set(e)}),[a,t])]}({groupId:n}),g=(()=>{const e=i??d;return m({value:e,tabValues:t})?e:null})();(0,o.useLayoutEffect)((()=>{g&&s(g)}),[g]);return{selectedValue:l,selectValue:(0,o.useCallback)((e=>{if(!m({value:e,tabValues:t}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),f(e)}),[u,f,t]),tabValues:t}}var g=a(2389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function h(e){let{className:r,block:a,selectedValue:s,selectValue:i,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),p=e=>{const r=e.currentTarget,a=c.indexOf(r),n=u[a].value;n!==s&&(d(r),i(n))},m=e=>{let r=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;r=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;r=c[a]??c[c.length-1];break}}r?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.Z)("tabs",{"tabs--block":a},r)},u.map((e=>{let{value:r,label:a,attributes:l}=e;return o.createElement("li",(0,n.Z)({role:"tab",tabIndex:s===r?0:-1,"aria-selected":s===r,key:r,ref:e=>c.push(e),onKeyDown:m,onClick:p},l,{className:(0,t.Z)("tabs__item",v.tabItem,l?.className,{"tabs__item--active":s===r})}),a??r)})))}function k(e){let{lazy:r,children:a,selectedValue:n}=e;const t=(Array.isArray(a)?a:[a]).filter(Boolean);if(r){const e=t.find((e=>e.props.value===n));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},t.map(((e,r)=>(0,o.cloneElement)(e,{key:r,hidden:e.props.value!==n}))))}function y(e){const r=f(e);return o.createElement("div",{className:(0,t.Z)("tabs-container",v.tabList)},o.createElement(h,(0,n.Z)({},e,r)),o.createElement(k,(0,n.Z)({},e,r)))}function q(e){const r=(0,g.Z)();return o.createElement(y,(0,n.Z)({key:String(r)},e))}},2495:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>t,metadata:()=>s,toc:()=>u});var n=a(7462),o=(a(7294),a(3905));a(4866),a(5162),a(9960),a(1207);const t={title:"Problemas habituales",sidebar_position:7,description:"Problemas comunes y formas de resolverlos",keywords:["Error","Problemas","Incidencias"]},l=void 0,s={unversionedId:"Farming & Staking/Farming/common_problems",id:"Farming & Staking/Farming/common_problems",title:"Problemas habituales",description:"Problemas comunes y formas de resolverlos",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/Farming & Staking/Farming/common_problems.md",sourceDirName:"Farming & Staking/Farming",slug:"/Farming & Staking/Farming/common_problems",permalink:"/es/docs/pre-release/Farming & Staking/Farming/common_problems",draft:!1,editUrl:"https://github.com/subspace/subspace-docs/blob/main/i18n/es/docusaurus-plugin-content-docs/current/Farming & Staking/Farming/common_problems.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Problemas habituales",sidebar_position:7,description:"Problemas comunes y formas de resolverlos",keywords:["Error","Problemas","Incidencias"]},sidebar:"tutorialSidebar",previous:{title:"C\xf3mo reenviar puertos",permalink:"/es/docs/pre-release/Farming & Staking/Farming/Additional-Guides/port-forwarding"},next:{title:"Operators and Nominators",permalink:"/es/docs/pre-release/category/operators-and-nominators"}},i={},u=[{value:"Error al marcar la telemetr\xeda del dns",id:"error-al-marcar-la-telemetr\xeda-del-dns",level:3},{value:"Farmer atascado en el trazado, no avanza en varias horas",id:"farmer-atascado-en-el-trazado-no-avanza-en-varias-horas",level:3},{value:"Instrucci\xf3n ilegal (core dumped)",id:"instrucci\xf3n-ilegal-core-dumped",level:3},{value:"No hay recompensas tras varios d\xedas de farming",id:"no-hay-recompensas-tras-varios-d\xedas-de-farming",level:3},{value:"Fallo en la recuperaci\xf3n de la pieza perdida",id:"fallo-en-la-recuperaci\xf3n-de-la-pieza-perdida",level:3},{value:"Error al importar el consenso de bloques",id:"error-al-importar-el-consenso-de-bloques",level:3},{value:"No se puede crear el bloque en la ranura. No hay mejor cabecera de bloque",id:"no-se-puede-crear-el-bloque-en-la-ranura-no-hay-mejor-cabecera-de-bloque",level:3},{value:"La sincronizaci\xf3n r\xe1pida de nodos (m\xe1s de 100 bloques por segundo) s\xf3lo llega hasta \xb120.000 bloques, despu\xe9s la velocidad de sincronizaci\xf3n disminuye considerablemente.",id:"la-sincronizaci\xf3n-r\xe1pida-de-nodos-m\xe1s-de-100-bloques-por-segundo-s\xf3lo-llega-hasta-20000-bloques-despu\xe9s-la-velocidad-de-sincronizaci\xf3n-disminuye-considerablemente",level:3},{value:"subspace_farmer::single_disk_plot::piece_receiver: Couldn&#39;t get a piece from DSN.",id:"subspace_farmersingle_disk_plotpiece_receiver-couldnt-get-a-piece-from-dsn",level:3},{value:"Error al construir un farmer: existe el archivo",id:"error-al-construir-un-farmer-existe-el-archivo",level:3},{value:"Error de importaci\xf3n de bloque: Ataque potencial de largo alcance: bloque no en cadena finalizada.",id:"error-de-importaci\xf3n-de-bloque-ataque-potencial-de-largo-alcance-bloque-no-en-cadena-finalizada",level:3},{value:"Still Facing Trouble? Take a look at our forums below",id:"still-facing-trouble-take-a-look-at-our-forums-below",level:3}],c={toc:u},d="wrapper";function p(e){let{components:r,...a}=e;return(0,o.kt)(d,(0,n.Z)({},c,a,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Aunque Subspace se esfuerza por publicar software libre de errores, los usuarios pueden encontrarse con ciertos errores. Algunos de ellos pueden ignorarse sin peligro, mientras que otros requieren atenci\xf3n."),(0,o.kt)("h1",{id:"problemas-comunes-y-formas-de-resolverlos"},"Problemas comunes y formas de resolverlos"),(0,o.kt)("h3",{id:"error-al-marcar-la-telemetr\xeda-del-dns"},"Error al marcar la telemetr\xeda del dns"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Error al marcar /dns/telemetry.subspace.network/tcp/443/x-parity-wss/%2Fsubmit%2F\nPersonalizado { kind: Otro, error: Timeout }\n")),(0,o.kt)("p",null,"Este error est\xe1 relacionado s\xf3lo con el servidor de telemetr\xeda. Es algo que puede ocurrir ocasionalmente, pero que no afecta al farming. Puedes ignorarlo sin problemas."),(0,o.kt)("h3",{id:"farmer-atascado-en-el-trazado-no-avanza-en-varias-horas"},"Farmer atascado en el trazado, no avanza en varias horas"),(0,o.kt)("p",null,"Prueba a reiniciar tu nodo o farmer. Hemos observado que a veces, al crear parcelas m\xe1s grandes, puede parecer que el proceso se detiene, pero contin\xfaa autom\xe1ticamente al cabo de un tiempo."),(0,o.kt)("h3",{id:"instrucci\xf3n-ilegal-core-dumped"},"Instrucci\xf3n ilegal (core dumped)"),(0,o.kt)("p",null,"Este error est\xe1 causado por CPUs antiguas sin el soporte de instrucciones necesario (por ejemplo, ADX 4). Puede solucionarse compilando el software desde el c\xf3digo fuente en esa m\xe1quina."),(0,o.kt)("p",null,"Aunque los procesadores sin instrucciones ADX son compatibles, su rendimiento se ver\xe1 afectado significativamente en comparaci\xf3n con los procesadores que s\xed admiten instrucciones ADX."),(0,o.kt)("p",null,"La mayor\xeda de los procesadores de sobremesa modernos a partir de Broadwell por parte de Intel y Ryzen (ZEN 1) por parte de AMD s\xed soportan las instrucciones ADX necesarias y no deber\xedan verse afectados por el error."),(0,o.kt)("h3",{id:"no-hay-recompensas-tras-varios-d\xedas-de-farming"},"No hay recompensas tras varios d\xedas de farming"),(0,o.kt)("p",null,"Por favor, aseg\xfarese de que:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Use our latest stable release, as shown on our ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/subspace/pulsar/releases"},"Github releases")),(0,o.kt)("li",{parentName:"ul"},"Verify your farmer is present and on the highest block on our ",(0,o.kt)("a",{parentName:"li",href:"https://telemetry.subspace.network/"},"telemetry server")),(0,o.kt)("li",{parentName:"ul"},"Verify your balance using the ",(0,o.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc-0.gemini-3g.subspace.network%2Fws#/explorer"},"Polkadot explorer"))),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Make sure to select the correct testnet in the dropdown and tabs, e.g. gemini-3g")),(0,o.kt)("h3",{id:"fallo-en-la-recuperaci\xf3n-de-la-pieza-perdida"},"Fallo en la recuperaci\xf3n de la pieza perdida"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"ERROR single_disk_plot{disk_farm_index=0}:\nsubspace_farmer_components::segment_reconstruction: Recovering missing piece failed. missing_piece_index=135\n")),(0,o.kt)("p",null,"No se trata de un error crucial y puede ignorarse."),(0,o.kt)("h3",{id:"error-al-importar-el-consenso-de-bloques"},"Error al importar el consenso de bloques"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Error al importar el bloque "n\xfamero_bloque", error de consenso: Error de importaci\xf3n: Base de datos\n')),(0,o.kt)("p",null,"Es probable que tu PC se haya quedado sin espacio. Considere la posibilidad de liberar espacio eliminando archivos innecesarios y vuelva a intentarlo. Alternativamente, puede ajustar la cantidad de parcela para que coincida con el espacio disponible en disco"),(0,o.kt)("h3",{id:"no-se-puede-crear-el-bloque-en-la-ranura-no-hay-mejor-cabecera-de-bloque"},"No se puede crear el bloque en la ranura. No hay mejor cabecera de bloque"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Unable to author block in slot. No best block header: Chain lookup failed: Failed to get header for hash\n")),(0,o.kt)("p",null,"Es probable que tu PC se haya quedado sin espacio. Considere la posibilidad de liberar espacio eliminando archivos innecesarios y vuelva a intentarlo. Alternativamente, puede ajustar la cantidad de parcela para que coincida con el espacio disponible en disco"),(0,o.kt)("h3",{id:"la-sincronizaci\xf3n-r\xe1pida-de-nodos-m\xe1s-de-100-bloques-por-segundo-s\xf3lo-llega-hasta-20000-bloques-despu\xe9s-la-velocidad-de-sincronizaci\xf3n-disminuye-considerablemente"},"La sincronizaci\xf3n r\xe1pida de nodos (m\xe1s de 100 bloques por segundo) s\xf3lo llega hasta \xb120.000 bloques, despu\xe9s la velocidad de sincronizaci\xf3n disminuye considerablemente."),(0,o.kt)("p",null,"A medida que aumente el tama\xf1o de la base de datos y los bloques se hagan m\xe1s grandes (ya que los agricultores empezaron a producir votos), se espera que la velocidad de sincronizaci\xf3n se establezca en un n\xfamero menor. We have made some performance improvements in Gemini 3e and will do more performance tuning when the protocol is functionally complete."),(0,o.kt)("h3",{id:"subspace_farmersingle_disk_plotpiece_receiver-couldnt-get-a-piece-from-dsn"},"subspace","_","farmer::single","_","disk","_","plot::piece","_","receiver: Couldn't get a piece from DSN."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"subspace_farmer::single_disk_plot::piece_receiver: Couldn't get a piece from DSN. Retrying... piece_index=57\n")),(0,o.kt)("p",null,"Esto no es un error sino m\xe1s bien una advertencia, es algo de esperar en una Red de Almacenamiento Descentralizada. No hay nada que tengas que hacer como usuario con este aviso, es probable que aparezca de vez en cuando pero mientras no haya otros errores m\xe1s catastr\xf3ficos se puede ignorar."),(0,o.kt)("h3",{id:"error-al-construir-un-farmer-existe-el-archivo"},"Error al construir un farmer: existe el archivo"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"0: Error al crear un farmer\n1: Error de creaci\xf3n de parcela de disco \xfanico: Error de E/S: El archivo existe (os error 17)\n2: Error de E/S: El fichero existe (os error 17)\n3: El archivo existe (os error 17)\n")),(0,o.kt)("p",null,"El sistema detecta una instalaci\xf3n preexistente. If this is the case, you might consider ","[","wiping]","(","../Farming & Staking/Farming/Pulsar/pulsar-troubleshooting) the current setup and ","[","re-initializing]","(","../Farming & Staking/Farming/Pulsar/pulsar-install) the CLI to ensure a clean installation."),(0,o.kt)("h3",{id:"error-de-importaci\xf3n-de-bloque-ataque-potencial-de-largo-alcance-bloque-no-en-cadena-finalizada"},"Error de importaci\xf3n de bloque: Ataque potencial de largo alcance: bloque no en cadena finalizada."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"WARN sc_service::client::client: Error de importaci\xf3n del bloque: ataque de largo alcance Potential: bloque que no est\xe1 en cadena finalizada.\n")),(0,o.kt)("p",null,"El nodo de alguna manera termin\xf3 siendo en un tenedor, trate de limpiar y empezar de cero."),(0,o.kt)("h3",{id:"still-facing-trouble-take-a-look-at-our-forums-below"},"Still Facing Trouble? Take a look at our forums below"),(0,o.kt)("iframe",{src:"https://forum.subspace.network/search?expanded=false&q=tags%3Afaq%20order%3Alatest",width:"100%",height:"600px",frameborder:"0",scrolling:"auto"}))}p.isMDXComponent=!0},1207:(e,r,a)=>{a.d(r,{Z:()=>n});const n={heroBanner:"heroBanner_qdFl",buttons:"buttons_AeoN"}}}]);