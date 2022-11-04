"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[43499],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),h=s(n),u=i,m=h["".concat(l,".").concat(u)]||h[u]||p[u]||r;return n?a.createElement(m,c(c({ref:t},d),{},{components:n})):a.createElement(m,c({ref:t},d))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,c=new Array(r);c[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,c[1]=o;for(var s=2;s<r;s++)c[s]=n[s];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},84090:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>c,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var a=n(87462),i=(n(67294),n(3905));const r={title:"Overview",sidebar_position:0},c=void 0,o={unversionedId:"architecture/public-enhancement-services/context-service/overview",id:"architecture/public-enhancement-services/context-service/overview",isDocsHomePage:!1,title:"Overview",description:"Background",source:"@site/docs/architecture/public-enhancement-services/context-service/overview.md",sourceDirName:"architecture/public-enhancement-services/context-service",slug:"/architecture/public-enhancement-services/context-service/overview",permalink:"/docs/1.3.1/architecture/public-enhancement-services/context-service/overview",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/docs/architecture/public-enhancement-services/context-service/overview.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Overview",sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Analysis of Engine BML",permalink:"/docs/1.3.1/architecture/public-enhancement-services/bml/engine-bml-dissect"},next:{title:"CS Architecture",permalink:"/docs/1.3.1/architecture/public-enhancement-services/context-service/context-service"}},l=[{value:"<strong>Background</strong>",id:"background",children:[{value:"<strong>What is Context</strong>",id:"what-is-context",children:[]},{value:"<strong>Why do you need CS (Context Service)?</strong>",id:"why-do-you-need-cs-context-service",children:[]}]},{value:"<strong>Product Range</strong>",id:"product-range",children:[{value:"Metadata context",id:"metadata-context",children:[]},{value:"Data context",id:"data-context",children:[]},{value:"Resource context",id:"resource-context",children:[]},{value:"Environmental context",id:"environmental-context",children:[]},{value:"Object context",id:"object-context",children:[]}]},{value:"<strong>CS Architecture Diagram</strong>",id:"cs-architecture-diagram",children:[]},{value:"<strong>Architecture Description:</strong>",id:"architecture-description",children:[{value:"1. Client",id:"1-client",children:[]},{value:"2. Service Module",id:"2-service-module",children:[]},{value:"3. ContextSearch",id:"3-contextsearch",children:[]},{value:"4. Listener",id:"4-listener",children:[]},{value:"5. ContextCache",id:"5-contextcache",children:[]},{value:"6. HighAvailable",id:"6-highavailable",children:[]},{value:"7. Persistence",id:"7-persistence",children:[]}]}],s={toc:l};function d(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"background"},(0,i.kt)("strong",{parentName:"h2"},"Background")),(0,i.kt)("h3",{id:"what-is-context"},(0,i.kt)("strong",{parentName:"h3"},"What is Context")),(0,i.kt)("p",null,"All necessary information to keep a certain operation going on. For example: reading three books at the same time, the page number of each book has been turned is the context of continuing to read the book."),(0,i.kt)("h3",{id:"why-do-you-need-cs-context-service"},(0,i.kt)("strong",{parentName:"h3"},"Why do you need CS (Context Service)?")),(0,i.kt)("p",null,"CS is used to solve the problem of data and information sharing across multiple systems in a data application development process."),(0,i.kt)("p",null,"For example, system B needs to use a piece of data generated by system A. The usual practice is as follows:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"B system calls the data access interface developed by A system;")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"System B reads the data written by system A into a shared storage."))),(0,i.kt)("p",null,"With CS, the A and B systems only need to interact with the CS, write the data and information that need to be shared into the CS, and read the data and information that need to be read from the CS, without the need for an external system to develop and adapt. , Which greatly reduces the call complexity and coupling of information sharing between systems, and makes the boundaries of each system clearer."),(0,i.kt)("h2",{id:"product-range"},(0,i.kt)("strong",{parentName:"h2"},"Product Range")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(4969).Z})),(0,i.kt)("h3",{id:"metadata-context"},"Metadata context"),(0,i.kt)("p",null,"The metadata context defines the metadata specification."),(0,i.kt)("p",null,"Metadata context relies on data middleware, and its main functions are as follows:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Open up the relationship with the data middleware, and get all user metadata information (including Hive table metadata, online database table metadata, and other NOSQL metadata such as HBase, Kafka, etc.)")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"When all nodes need to access metadata, including existing metadata and metadata in the application template, they must go through the metadata context. The metadata context records all metadata information used by the application template.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The new metadata generated by each node must be registered with the metadata context.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"When the application template is extracted, the metadata context is abstracted for the application template (mainly, the multiple library tables used are made into \\${db}. tables to avoid data permission problems) and all dependent metadata information is packaged."))),(0,i.kt)("p",null,"Metadata context is the basis of interactive workflows and the basis of application templates. Imagine: When Widget is defined, how to know the dimensions of each indicator defined by DataWrangler? How does Qualitis verify the graph report generated by Widget?"),(0,i.kt)("h3",{id:"data-context"},"Data context"),(0,i.kt)("p",null,"The data context defines the data specification."),(0,i.kt)("p",null,"The data context depends on data middleware and Linkis computing middleware. The main functions are as follows:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Get through the data middleware and get all user data information.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Get through the computing middleware and get the data storage information of all nodes.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"When all nodes need to write temporary results, they must pass through the data context and be uniformly allocated by the data context.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"When all nodes need to access data, they must pass the data context.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The data context distinguishes between dependent data and generated data. When the application template is extracted, all dependent data is abstracted and packaged for the application template."))),(0,i.kt)("h3",{id:"resource-context"},"Resource context"),(0,i.kt)("p",null,"The resource context defines the resource specification."),(0,i.kt)("p",null,"The resource context mainly interacts with Linkis computing middleware. The main functions are as follows:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"User resource files (such as Jar, Zip files, properties files, etc.)")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"User UDF")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"User algorithm package")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"User script"))),(0,i.kt)("h3",{id:"environmental-context"},"Environmental context"),(0,i.kt)("p",null,"The environmental context defines the environmental specification."),(0,i.kt)("p",null,"The main functions are as follows:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Operating System")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Software, such as Hadoop, Spark, etc.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Package dependencies, such as Mysql-JDBC."))),(0,i.kt)("h3",{id:"object-context"},"Object context"),(0,i.kt)("p",null,"The runtime context is all the context information retained when the application template (workflow) is defined and executed."),(0,i.kt)("p",null,"It is used to assist in defining the workflow/application template, prompting and perfecting all necessary information when the workflow/application template is executed."),(0,i.kt)("p",null,"The runtime workflow is mainly used by Linkis."),(0,i.kt)("h2",{id:"cs-architecture-diagram"},(0,i.kt)("strong",{parentName:"h2"},"CS Architecture Diagram")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(65293).Z})),(0,i.kt)("h2",{id:"architecture-description"},(0,i.kt)("strong",{parentName:"h2"},"Architecture Description:")),(0,i.kt)("h3",{id:"1-client"},"1. Client"),(0,i.kt)("p",null,"The entrance of external access to CS, Client module provides HA function;\n",(0,i.kt)("a",{parentName:"p",href:"/docs/1.3.1/architecture/public-enhancement-services/context-service/context-service-client"},"Enter Client Architecture Design")),(0,i.kt)("h3",{id:"2-service-module"},"2. Service Module"),(0,i.kt)("p",null,"Provide a Restful interface to encapsulate and process CS requests submitted by the client;\n",(0,i.kt)("a",{parentName:"p",href:"/docs/1.3.1/architecture/public-enhancement-services/context-service/context-service"},"Enter Service Architecture Design")),(0,i.kt)("h3",{id:"3-contextsearch"},"3. ContextSearch"),(0,i.kt)("p",null,"The context query module provides rich and powerful query capabilities for the client to find the key-value key-value pairs of the context;\n",(0,i.kt)("a",{parentName:"p",href:"/docs/1.3.1/architecture/public-enhancement-services/context-service/context-service-search"},"Enter ContextSearch architecture design")),(0,i.kt)("h3",{id:"4-listener"},"4. Listener"),(0,i.kt)("p",null,"The CS listener module provides synchronous and asynchronous event consumption capabilities, and has the ability to notify the Client in real time once the Zookeeper-like Key-Value is updated;\n",(0,i.kt)("a",{parentName:"p",href:"/docs/1.3.1/architecture/public-enhancement-services/context-service/context-service-listener"},"Enter Listener architecture design")),(0,i.kt)("h3",{id:"5-contextcache"},"5. ContextCache"),(0,i.kt)("p",null,"The context memory cache module provides the ability to quickly retrieve the context and the ability to monitor and clean up JVM memory usage;\n",(0,i.kt)("a",{parentName:"p",href:"/docs/1.3.1/architecture/public-enhancement-services/context-service/context-service-cache"},"Enter ContextCache architecture design")),(0,i.kt)("h3",{id:"6-highavailable"},"6. HighAvailable"),(0,i.kt)("p",null,"Provide CS high availability capability;\n",(0,i.kt)("a",{parentName:"p",href:"/docs/1.3.1/architecture/public-enhancement-services/context-service/context-service-highavailable"},"Enter HighAvailable architecture design")),(0,i.kt)("h3",{id:"7-persistence"},"7. Persistence"),(0,i.kt)("p",null,"The persistence function of CS;\n",(0,i.kt)("a",{parentName:"p",href:"/docs/1.3.1/architecture/public-enhancement-services/context-service/context-service-persistence"},"Enter Persistence architecture design")))}d.isMDXComponent=!0},4969:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/linkis-contextservice-01-a932c089b228950c365304909a5f8025.png"},65293:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/linkis-contextservice-02-42287c01e204a4e04091b56b65e25972.png"}}]);