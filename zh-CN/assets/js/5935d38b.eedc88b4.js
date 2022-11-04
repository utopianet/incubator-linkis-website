"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[22847],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,k=d["".concat(p,".").concat(m)]||d[m]||c[m]||l;return n?r.createElement(k,i(i({ref:t},s),{},{components:n})):r.createElement(k,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},72500:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const l={title:"\u603b\u89c8",sidebar_position:0},i=void 0,o={unversionedId:"engine-usage/overview",id:"version-1.0.3/engine-usage/overview",isDocsHomePage:!1,title:"\u603b\u89c8",description:"1. \u6982\u8ff0",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.0.3/engine-usage/overview.md",sourceDirName:"engine-usage",slug:"/engine-usage/overview",permalink:"/zh-CN/docs/1.0.3/engine-usage/overview",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.0.3/engine-usage/overview.md",tags:[],version:"1.0.3",sidebarPosition:0,frontMatter:{title:"\u603b\u89c8",sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Linkis \u7ba1\u7406\u53f0\u7684\u4f7f\u7528",permalink:"/zh-CN/docs/1.0.3/user-guide/console-manual"},next:{title:"Spark \u5f15\u64ce",permalink:"/zh-CN/docs/1.0.3/engine-usage/spark"}},p=[{value:"1. \u6982\u8ff0",id:"1-\u6982\u8ff0",children:[]},{value:"2. \u6587\u6863\u7ed3\u6784",id:"2-\u6587\u6863\u7ed3\u6784",children:[]}],u={toc:p};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"1-\u6982\u8ff0"},"1. \u6982\u8ff0"),(0,a.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","Linkis\u4f5c\u4e3a\u4e00\u6b3e\u529f\u80fd\u5f3a\u5927\u7684\u8ba1\u7b97\u4e2d\u95f4\u4ef6\uff0c\u53ef\u4ee5\u65b9\u4fbf\u7684\u5bf9\u63a5\u4e0d\u540c\u7684\u8ba1\u7b97\u5f15\u64ce\uff0c\u901a\u8fc7\u5c4f\u853d\u4e0d\u540c\u8ba1\u7b97\u5f15\u64ce\u7684\u4f7f\u7528\u7ec6\u8282\uff0c\u5e76\u5411\u4e0a\u63d0\u4f9b\u4e86\u4e00\u5957\u7edf\u4e00\u7684\u4f7f\u7528\u63a5\u53e3\uff0c\u4f7f\u5f97\u90e8\u7f72\u548c\u5e94\u7528Linkis\u7684\u5927\u6570\u636e\u5e73\u53f0\u7684\u8fd0\u7ef4\u6210\u672c\u5927\u5927\u964d\u4f4e\uff0c\u76ee\u524d\uff0cLinkis\u5df2\u7ecf\u5bf9\u63a5\u4e86\u51e0\u6b3e\u4e3b\u6d41\u7684\u8ba1\u7b97\u5f15\u64ce\uff0c\u57fa\u672c\u4e0a\u6db5\u76d6\u4e86\u4e0a\u751f\u4ea7\u4e0a\u5bf9\u6570\u636e\u7684\u9700\u6c42\uff0c\u4e3a\u4e86\u63d0\u4f9b\u66f4\u597d\u7684\u53ef\u62d3\u5c55\u6027\uff0cLinkis\u540c\u65f6\u63d0\u4f9b\u4e86\u63a5\u5165\u65b0\u5f15\u64ce\u7684\u76f8\u5173\u63a5\u53e3\uff0c\u53ef\u4ee5\u5229\u7528\u8be5\u63a5\u53e3\u63a5\u5165\u65b0\u7684\u8ba1\u7b97\u5f15\u64ce\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\u5f15\u64ce\u662f\u63d0\u4f9b\u7ed9\u7528\u6237\u6570\u636e\u5904\u7406\u548c\u5206\u6790\u80fd\u529b\u7684\u7ec4\u4ef6\uff0c\u76ee\u524d\u5df2\u7ecf\u63a5\u5165Linkis\u7684\u5f15\u64ce\uff0c\u6709\u4e3b\u6d41\u7684\u5927\u6570\u636e\u8ba1\u7b97\u5f15\u64ceSpark\u3001Hive\u3001Presto\u7b49\uff0c\u4e5f\u6709python\u3001Shell\u8fd9\u4e9b\u811a\u672c\u5904\u7406\u6570\u636e\u80fd\u529b\u7684\u5f15\u64ce\u3002DataSphereStudio\u4f5c\u4e3a\u5bf9\u63a5\u4e86Linkis\u7684\u4e00\u7ad9\u5f0f\u6570\u636e\u64cd\u4f5c\u5e73\u53f0\uff0c\u7528\u6237\u53ef\u4ee5\u65b9\u4fbf\u7684\u5728DataSphereStudio\u4e2d\u4f7f\u7528Linkis\u652f\u6301\u7684\u5f15\u64ce\u5b8c\u6210\u4ea4\u4e92\u5f0f\u6570\u636e\u5206\u6790\u4efb\u52a1\u548c\u5de5\u4f5c\u6d41\u4efb\u52a1\u3002"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u5f15\u64ce"),(0,a.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u652f\u6301Scriptis"),(0,a.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u652f\u6301\u5de5\u4f5c\u6d41"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Spark"),(0,a.kt)("td",{parentName:"tr",align:null},"\u652f\u6301"),(0,a.kt)("td",{parentName:"tr",align:null},"\u652f\u6301")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Hive"),(0,a.kt)("td",{parentName:"tr",align:null},"\u652f\u6301"),(0,a.kt)("td",{parentName:"tr",align:null},"\u652f\u6301")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Presto"),(0,a.kt)("td",{parentName:"tr",align:null},"\u652f\u6301"),(0,a.kt)("td",{parentName:"tr",align:null},"\u652f\u6301")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ElasticSearch"),(0,a.kt)("td",{parentName:"tr",align:null},"\u652f\u6301"),(0,a.kt)("td",{parentName:"tr",align:null},"\u652f\u6301")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Python"),(0,a.kt)("td",{parentName:"tr",align:null},"\u652f\u6301"),(0,a.kt)("td",{parentName:"tr",align:null},"\u652f\u6301")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Shell"),(0,a.kt)("td",{parentName:"tr",align:null},"\u652f\u6301"),(0,a.kt)("td",{parentName:"tr",align:null},"\u652f\u6301")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"JDBC"),(0,a.kt)("td",{parentName:"tr",align:null},"\u652f\u6301"),(0,a.kt)("td",{parentName:"tr",align:null},"\u652f\u6301")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"MySQL"),(0,a.kt)("td",{parentName:"tr",align:null},"\u652f\u6301"),(0,a.kt)("td",{parentName:"tr",align:null},"\u652f\u6301")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Flink"),(0,a.kt)("td",{parentName:"tr",align:null},"\u652f\u6301"),(0,a.kt)("td",{parentName:"tr",align:null},"\u652f\u6301")))),(0,a.kt)("h2",{id:"2-\u6587\u6863\u7ed3\u6784"},"2. \u6587\u6863\u7ed3\u6784"),(0,a.kt)("p",null,"\u5df2\u7ecf\u63a5\u5165\u7684\u5f15\u64ce\u76f8\u5173\u6587\u6863\u53ef\u4ee5\u53c2\u8003\u5982\u4e0b\u6587\u6863\u3002  "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh-CN/docs/1.0.3/engine-usage/spark"},"Spark \u5f15\u64ce\u4f7f\u7528"),"  "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh-CN/docs/1.0.3/engine-usage/hive"},"Hive \u5f15\u64ce\u4f7f\u7528"),"  "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh-CN/docs/1.0.3/engine-usage/python"},"Python \u5f15\u64ce\u4f7f\u7528"),"  "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh-CN/docs/1.0.3/engine-usage/shell"},"Shell \u5f15\u64ce\u4f7f\u7528"),"  "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh-CN/docs/1.0.3/engine-usage/jdbc"},"JDBC \u5f15\u64ce\u4f7f\u7528"),"  "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh-CN/docs/1.0.3/engine-usage/flink"},"Flink \u5f15\u64ce\u4f7f\u7528"))))}s.isMDXComponent=!0}}]);