"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[17625],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),g=a,d=m["".concat(s,".").concat(g)]||m[g]||u[g]||i;return n?o.createElement(d,r(r({ref:t},c),{},{components:n})):o.createElement(d,r({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var p=2;p<i;p++)r[p]=n[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},98192:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var o=n(87462),a=(n(67294),n(3905));const i={title:"Implementation of OpenLookEng Engine",authors:["peacewong"],tags:["engine"]},r=void 0,l={permalink:"/blog/2022/03/20/openlookeng",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/blog/2022-03-20-openlookeng.md",source:"@site/blog/2022-03-20-openlookeng.md",title:"Implementation of OpenLookEng Engine",description:"Overview",date:"2022-03-20T00:00:00.000Z",formattedDate:"March 20, 2022",tags:[{label:"engine",permalink:"/blog/tags/engine"}],readingTime:2.47,truncated:!1,authors:[{name:"Peacewong",title:"Development Engineer of WeBank",url:"https://github.com/peacewong/",imageURL:"https://avatars.githubusercontent.com/u/11496700?v=4",key:"peacewong"}],prevItem:{title:"How to Download Engine Plugins Not Included in the Installation Package By Default",permalink:"/blog/2022/04/15/how-to-download-engineconn-plugin"},nextItem:{title:"Linkis Deployment Troubleshooting",permalink:"/blog/2022/02/21/linkis-deploy"}},s={authorsImageUrls:[void 0]},p=[{value:"Overview",id:"overview",children:[]},{value:"Development implementation",id:"development-implementation",children:[]},{value:"Architecture",id:"architecture",children:[]},{value:"Follow-up plans",id:"follow-up-plans",children:[]}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,'openLooKeng is an "out of the box" engine that supports in-situ analysis of any data, anywhere, including geographically remote data sources. It provides a global view of all data through a SQL 2003 interface. openLooKeng features high availability, auto-scaling, built-in caching and indexing support, providing the reliability needed for enterprise workloads.'),(0,a.kt)("p",null,"openLooKeng is used to support data exploration, ad hoc query and batch processing with near real-time latency of 100+ milliseconds to minutes without moving data. openLooKeng also supports hierarchical deployment, enabling geographically remote openLooKeng clusters to participate in the same query. With its cross-region query plan optimization capabilities, queries involving remote data can achieve near \"local\" performance.\nLinkis implements the OpenLooKeng engine to enable Linkis to have the ability to virtualize data and support the submission of cross-source heterogeneous queries, cross-domain and cross-DC query tasks. As a computing middleware, Linkis can connect more low-level computing and storage components by using OpenLooKeng's connector based on the connectivity capability of Linkis' EngineConn."),(0,a.kt)("h2",{id:"development-implementation"},"Development implementation"),(0,a.kt)("p",null,"The implementation of OpenLooKeng ec is extended based on the EngineConn Plugin (ECP) of Linkis. Because the OpengLooKeng service supports multiple users to query through the Client, the implementation mode is the implementation mode of the multi-user concurrent engine.\nThat is, tasks submitted by multiple users can run in one EC process at the same time, which can greatly reuse EC resources and reduce resource waste. The specific class diagram is as follows:"),(0,a.kt)("p",null,"\u3010Missing picture\u3011"),(0,a.kt)("p",null,"The specific implementation is that OpenLooKengEngineConnExecutor inherits from ConcurrentComputationExecutor, supports multi-user multi-task concurrency, and supports docking to multiple different OpenLooKeng clusters."),(0,a.kt)("h2",{id:"architecture"},"Architecture"),(0,a.kt)("p",null,"Architecture diagram:\n",(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/7869972/166736911-c0f50968-3996-40d0-afdf-52b35d4cd71c.png",alt:"image"})),(0,a.kt)("p",null,"The task flow diagram is as follows:\n",(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/7869972/166737177-57f8f84a-b16d-44bd-b7cf-a61fc2cc160c.png",alt:"image"})),(0,a.kt)("p",null,"The capabilities based on Linkis and OpenLooKeng can provide the following capabilities:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"The connection capability of the computing middleware layer based on Linkis allows upper-layer application tools to quickly connect to OpenLooKeng, submit tasks, and obtain logs, progress, and results."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("ol",{parentName:"li",start:2},(0,a.kt)("li",{parentName:"ol"},"Based on the public service capability of Linkis, it can complete custom variable substitution, UDF management, etc. for OpenLooKeng's sql"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("ol",{parentName:"li",start:3},(0,a.kt)("li",{parentName:"ol"},"Based on the context capability of Linkis, the results of OpengLooKeng can be passed to downstream ECs such as Spark and Hive for query"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("ol",{parentName:"li",start:4},(0,a.kt)("li",{parentName:"ol"},"Linkis-based resource management and multi-tenancy capabilities can isolate tasks from tenants and use OpenLooKeng resources"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("ol",{parentName:"li",start:5},(0,a.kt)("li",{parentName:"ol"},"Based on OpengLooKeng's connector capability, the upper-layer application tool can complete the task of submitting cross-source heterogeneous query, cross-domain and cross-DC query type, and get a second-level return.")))),(0,a.kt)("h2",{id:"follow-up-plans"},"Follow-up plans"),(0,a.kt)("p",null,"In the future, the two communities will continue to cooperate and plan to launch the following functions:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"1.Linkis supports OpenLooKeng on Yarn mode"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("ol",{parentName:"li",start:2},(0,a.kt)("li",{parentName:"ol"},"Linkis has completed the resource management and control of OpenLooKeng, tasks can now be queued by Linkis, and submitted only when resources are sufficient"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("ol",{parentName:"li",start:3},(0,a.kt)("li",{parentName:"ol"},"Based on the mixed computing ability of OpenLooKeng, the ability of Linkis Orchestrator is optimized to complete the mixed computing ability between ECs in the subsequent plan.")))))}u.isMDXComponent=!0}}]);