"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[57083],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=s(r),m=i,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(f,c(c({ref:t},u),{},{components:r})):n.createElement(f,c({ref:t},u))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,c=new Array(o);c[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:i,c[1]=a;for(var s=2;s<o;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},11932:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var n=r(87462),i=r(63366),o=(r(67294),r(3905)),c=["components"],a={title:"installation package directory structure",sidebar_position:4.5},l=void 0,s={unversionedId:"deployment/unpack-hierarchical-structure",id:"version-1.1.3/deployment/unpack-hierarchical-structure",isDocsHomePage:!1,title:"installation package directory structure",description:"Linkis installation package decompressed directory structure",source:"@site/versioned_docs/version-1.1.3/deployment/unpack-hierarchical-structure.md",sourceDirName:"deployment",slug:"/deployment/unpack-hierarchical-structure",permalink:"/docs/1.1.3/deployment/unpack-hierarchical-structure",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/versioned_docs/version-1.1.3/deployment/unpack-hierarchical-structure.md",tags:[],version:"1.1.3",sidebarPosition:4.5,frontMatter:{title:"installation package directory structure",sidebar_position:4.5},sidebar:"version-1.1.3/tutorialSidebar",previous:{title:"Installation Directory Structure",permalink:"/docs/1.1.3/deployment/installation-hierarchical-structure"},next:{title:"Source Code Directory Structure",permalink:"/docs/1.1.3/deployment/sourcecode-hierarchical-structure"}},u=[{value:"Linkis installation package decompressed directory structure",id:"linkis-installation-package-decompressed-directory-structure",children:[]}],p={toc:u};function d(e){var t=e.components,r=(0,i.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"linkis-installation-package-decompressed-directory-structure"},"Linkis installation package decompressed directory structure"),(0,o.kt)("p",null,"Download the officially released ",(0,o.kt)("a",{parentName:"p",href:"https://linkis.apache.org/zh-CN/download/main"},"Compilation Complete Package"),", and the decompressed directory structure is as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"\n\u251c\u2500\u2500 bin\n\u2502   \u251c\u2500\u2500 checkEnv.sh //\u90e8\u7f72\u73af\u5883\u9a8c\u8bc1\u811a\u672c\n\u2502   \u251c\u2500\u2500 common.sh\n\u2502   \u2514\u2500\u2500 install.sh  //\u6267\u884c\u5b89\u88c5\u7684\u811a\u672c\n\u251c\u2500\u2500 deploy-config\n\u2502   \u251c\u2500\u2500 db.sh       //\u6570\u636e\u5e93\u8fde\u63a5\u914d\u7f6e\n\u2502   \u2514\u2500\u2500 linkis-env.sh //\u76f8\u5173\u73af\u5883\u914d\u7f6e\u4fe1\u606f\n\u251c\u2500\u2500 DISCLAIMER\n\u251c\u2500\u2500 LICENSE\n\u251c\u2500\u2500 licenses  \n\u251c\u2500\u2500 linkis-package  //\u5fae\u670d\u52a1\u76f8\u5173\u7684\u542f\u52a8\u914d\u7f6e\u6587\u4ef6\uff0c\u4f9d\u8d56\uff0c\u811a\u672c\uff0clinkis-cli\u7b49\n\u2502   \u251c\u2500\u2500 bin\n\u2502   \u251c\u2500\u2500 conf\n\u2502   \u251c\u2500\u2500 db\n\u2502   \u251c\u2500\u2500 lib\n\u2502   \u2514\u2500\u2500 sbin\n\u251c\u2500\u2500 NOTICE\n\u251c\u2500\u2500 README_CN.md\n\u2514\u2500\u2500 README.md\n\n")))}d.isMDXComponent=!0}}]);