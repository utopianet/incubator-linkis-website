"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[80954],{3905:function(n,e,i){i.d(e,{Zo:function(){return p},kt:function(){return g}});var t=i(67294);function r(n,e,i){return e in n?Object.defineProperty(n,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[e]=i,n}function l(n,e){var i=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),i.push.apply(i,t)}return i}function a(n){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?l(Object(i),!0).forEach((function(e){r(n,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(i,e))}))}return n}function s(n,e){if(null==n)return{};var i,t,r=function(n,e){if(null==n)return{};var i,t,r={},l=Object.keys(n);for(t=0;t<l.length;t++)i=l[t],e.indexOf(i)>=0||(r[i]=n[i]);return r}(n,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);for(t=0;t<l.length;t++)i=l[t],e.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(n,i)&&(r[i]=n[i])}return r}var o=t.createContext({}),c=function(n){var e=t.useContext(o),i=e;return n&&(i="function"==typeof n?n(e):a(a({},e),n)),i},p=function(n){var e=c(n.components);return t.createElement(o.Provider,{value:e},n.children)},k={inlineCode:"code",wrapper:function(n){var e=n.children;return t.createElement(t.Fragment,{},e)}},u=t.forwardRef((function(n,e){var i=n.components,r=n.mdxType,l=n.originalType,o=n.parentName,p=s(n,["components","mdxType","originalType","parentName"]),u=c(i),g=r,m=u["".concat(o,".").concat(g)]||u[g]||k[g]||l;return i?t.createElement(m,a(a({ref:e},p),{},{components:i})):t.createElement(m,a({ref:e},p))}));function g(n,e){var i=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var l=i.length,a=new Array(l);a[0]=u;var s={};for(var o in e)hasOwnProperty.call(e,o)&&(s[o]=e[o]);s.originalType=n,s.mdxType="string"==typeof n?n:r,a[1]=s;for(var c=2;c<l;c++)a[c]=i[c];return t.createElement.apply(null,a)}return t.createElement.apply(null,i)}u.displayName="MDXCreateElement"},11618:function(n,e,i){i.r(e),i.d(e,{frontMatter:function(){return s},contentTitle:function(){return o},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var t=i(87462),r=i(63366),l=(i(67294),i(3905)),a=["components"],s={title:"\u90e8\u7f72\u540e\u7684\u76ee\u5f55\u7ed3\u6784",sidebar_position:4.5},o=void 0,c={unversionedId:"deployment/installation-hierarchical-structure",id:"deployment/installation-hierarchical-structure",isDocsHomePage:!1,title:"\u90e8\u7f72\u540e\u7684\u76ee\u5f55\u7ed3\u6784",description:"1 \u76ee\u5f55\u7ed3\u6784",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/deployment/installation-hierarchical-structure.md",sourceDirName:"deployment",slug:"/deployment/installation-hierarchical-structure",permalink:"/zh-CN/docs/1.3.0/deployment/installation-hierarchical-structure",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/current/deployment/installation-hierarchical-structure.md",tags:[],version:"current",sidebarPosition:4.5,frontMatter:{title:"\u90e8\u7f72\u540e\u7684\u76ee\u5f55\u7ed3\u6784",sidebar_position:4.5},sidebar:"tutorialSidebar",previous:{title:"\u5b89\u88c5\u5305\u76ee\u5f55\u7ed3\u6784",permalink:"/zh-CN/docs/1.3.0/deployment/unpack-hierarchical-structure"},next:{title:"\u6e90\u7801\u76ee\u5f55\u7ed3\u6784",permalink:"/zh-CN/docs/1.3.0/deployment/sourcecode-hierarchical-structure"}},p=[{value:"1 \u76ee\u5f55\u7ed3\u6784",id:"1-\u76ee\u5f55\u7ed3\u6784",children:[]},{value:"2  \u914d\u7f6e\u9879\u4fee\u6539",id:"2--\u914d\u7f6e\u9879\u4fee\u6539",children:[]},{value:"3 \u5fae\u670d\u52a1\u542f\u505c",id:"3-\u5fae\u670d\u52a1\u542f\u505c",children:[]}],k={toc:p};function u(n){var e=n.components,i=(0,r.Z)(n,a);return(0,l.kt)("wrapper",(0,t.Z)({},k,i,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"1-\u76ee\u5f55\u7ed3\u6784"},"1 \u76ee\u5f55\u7ed3\u6784"),(0,l.kt)("p",null,"\u5b89\u88c5\u540e",(0,l.kt)("inlineCode",{parentName:"p"},"${LINKIS_HOME}"),"\u76ee\u5f55\u7ed3\u6784"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},"\u251c\u2500\u2500 bin              \u2500\u2500  linkis-cli  \u7528\u4e8e\u5411Linkis\u63d0\u4ea4\u4efb\u52a1\u7684Shell\u547d\u4ee4\u884c\u7a0b\u5e8f\n\u2502\xa0\xa0 \u251c\u2500\u2500 linkis-cli\n\u2502\xa0\xa0 \u251c\u2500\u2500 linkis-cli-hive\n\u2502\xa0\xa0 \u251c\u2500\u2500 linkis-cli-pre\n\u2502\xa0\xa0 \u251c\u2500\u2500 linkis-cli-spark-sql\n\u2502\xa0\xa0 \u251c\u2500\u2500 linkis-cli-spark-submit\n\u2502\xa0\xa0 \u2514\u2500\u2500 linkis-cli-sqoop\n\u251c\u2500\u2500\xa0conf \u914d\u7f6e\u76ee\u5f55\n\u2502\xa0\xa0\xa0\u251c\u2500\u2500 application-eureka.yml\n\u2502\xa0\xa0\xa0\u251c\u2500\u2500 application-linkis.yml    \u2500\u2500 \u5fae\u670d\u52a1\u901a\u7528yml\n\u2502\xa0\xa0\xa0\u251c\u2500\u2500 linkis-cg-engineconnmanager.properties\n\u2502\xa0\xa0\xa0\u251c\u2500\u2500 linkis-cg-engineplugin.properties\n\u2502\xa0\xa0\xa0\u251c\u2500\u2500 linkis-cg-entrance.properties\n\u2502\xa0\xa0\xa0\u251c\u2500\u2500 linkis-cg-linkismanager.properties\n\u2502\xa0\xa0\xa0\u2502\u2500\u2500 linkis-cli\n\u2502\xa0\xa0\xa0\u2502   \u251c\u2500\u2500 linkis-cli.properties\n\u2502\xa0\xa0\xa0\u2502   \u2514\u2500\u2500 log4j2.xml\n\u2502\xa0\xa0\xa0\u251c\u2500\u2500 linkis-env.sh    \u2500\u2500 linkis \u73af\u5883\u53d8\u91cf\u914d\u7f6e\n\u2502\xa0\xa0\xa0\u251c\u2500\u2500 linkis-mg-gateway.properties\n\u2502\xa0\xa0\xa0\u251c\u2500\u2500 linkis.properties  \u2500\u2500 linkis \u670d\u52a1\u7684\u5168\u5c40\u914d\u5408\uff0c\u6240\u6709\u5fae\u670d\u52a1\u542f\u52a8\u90fd\u4f1a\u52a0\u8f7d\u4f7f\u7528\n\u2502\xa0\xa0\xa0\u251c\u2500\u2500 linkis-ps-cs.properties\n\u2502\xa0\xa0\xa0\u251c\u2500\u2500 linkis-ps-data-source-manager.properties\n\u2502\xa0\xa0\xa0\u251c\u2500\u2500 linkis-ps-metadatamanager.properties\n\u2502\xa0\xa0\xa0\u251c\u2500\u2500 linkis-ps-publicservice.properties\n\u2502\xa0\xa0\xa0\u251c\u2500\u2500 log4j2.xml\n\u2502\xa0\xa0\xa0\u251c\u2500\u2500 proxy.properties(\u53ef\u9009)  proxy \u4ee3\u7406\u7528\u6237\u6a21\u5f0f\u7684\u914d\u7f6e\uff08>=1.1.1\uff09\n\u2502\xa0\xa0\xa0\u2514\u2500\u2500 token.properties(\u53ef\u9009)  token \u6a21\u5f0f\u8ba4\u8bc1\u7684\u914d\u7f6e\u8ba4\u8bc1\u7684token 1.1.1\u5f00\u59cb\uff0c\u7528\u6570\u636e\u5e93\u5b58\u50a8\n\u251c\u2500\u2500\xa0db \u6570\u636e\u5e93DML\u548cDDL\u6587\u4ef6\u76ee\u5f55\n\u2502\xa0\xa0\xa0\u251c\u2500\u2500\xa0linkis_ddl.sql \u2500\u2500 \u6570\u636e\u5e93\u8868\u5b9a\u4e49SQL\n\u2502\xa0\xa0\xa0\u251c\u2500\u2500\xa0linkis_dml.sql \u2500\u2500 \u6570\u636e\u5e93\u8868\u521d\u59cb\u5316SQL\n\u2502\xa0\xa0\xa0\u2514\u2500\u2500\xa0module    \u2500\u2500 \u5305\u542b\u5404\u4e2a\u5fae\u670d\u52a1\u7684DML\u548cDDL\u6587\u4ef6\n\u2502\xa0\xa0\xa0\u2514\u2500\u2500\xa0upgrade   \u2500\u2500 \u9488\u5bf9\u6bcf\u4e2a\u7248\u672c \u589e\u91cfDML/DDL\n\u251c\u2500\u2500\xa0lib lib\u76ee\u5f55\n\u2502\xa0\xa0\xa0\u251c\u2500\u2500\xa0linkis-commons \u2500\u2500 \u516c\u5171\u4f9d\u8d56\u5305 \u5927\u591a\u670d\u52a1\u542f\u52a8\u65f6(linkis-mg-gateway\u9664\u5916) -cp \u8def\u5f84\u53c2\u6570 \u90fd\u4f1a\u52a0\u8f7d\u8fd9\u4e2a\u76ee\u5f55\n\u2502\xa0\xa0\xa0\u251c\u2500\u2500\xa0linkis-computation-governance \u2500\u2500\u8ba1\u7b97\u6cbb\u7406\u6a21\u5757\u7684lib\u76ee\u5f55\n\u2502\xa0\xa0\xa0\u251c\u2500\u2500\xa0linkis-engineconn-plugins \u2500\u2500\u6240\u6709\u5f15\u64ce\u63d2\u4ef6\u7684lib\u76ee\u5f55\n\u2502\xa0\xa0\xa0\u251c\u2500\u2500\xa0linkis-public-enhancements \u2500\u2500\u516c\u5171\u589e\u5f3a\u670d\u52a1\u7684lib\u76ee\u5f55\n\u2502\xa0\xa0\xa0\u2514\u2500\u2500\xa0linkis-spring-cloud-services \u2500\u2500SpringCloud\u7684lib\u76ee\u5f55\n\u251c\u2500\u2500\xa0logs \u65e5\u5fd7\u76ee\u5f55\n\u2502   \u251c\u2500\u2500 linkis-cg-engineconnmanager-gc.log\n\u2502   \u251c\u2500\u2500 linkis-cg-engineconnmanager.log\n\u2502   \u251c\u2500\u2500 linkis-cg-engineconnmanager.out\n\u2502   \u251c\u2500\u2500 linkis-cg-engineplugin-gc.log\n\u2502   \u251c\u2500\u2500 linkis-cg-engineplugin.log\n\u2502   \u251c\u2500\u2500 linkis-cg-engineplugin.out\n\u2502   \u251c\u2500\u2500 linkis-cg-entrance-gc.log\n\u2502   \u251c\u2500\u2500 linkis-cg-entrance.log\n\u2502   \u251c\u2500\u2500 linkis-cg-entrance.out\n\u2502   \u251c\u2500\u2500 linkis-cg-linkismanager-gc.log\n\u2502   \u251c\u2500\u2500 linkis-cg-linkismanager.log\n\u2502   \u251c\u2500\u2500 linkis-cg-linkismanager.out\n\u2502   \u251c\u2500\u2500 linkis-cli\n\u2502   \u2502\xa0\xa0 \u251c\u2500\u2500 linkis-client.hadoop.log.20220409162400037523664\n\u2502   \u2502\xa0\xa0 \u251c\u2500\u2500 linkis-client.hadoop.log.20220409162524417944443\n\u2502   \u251c\u2500\u2500 linkis-mg-eureka-gc.log\n\u2502   \u251c\u2500\u2500 linkis-mg-eureka.log\n\u2502   \u251c\u2500\u2500 linkis-mg-eureka.out\n\u2502   \u251c\u2500\u2500 linkis-mg-gateway-gc.log\n\u2502   \u251c\u2500\u2500 linkis-mg-gateway.log\n\u2502   \u251c\u2500\u2500 linkis-mg-gateway.out\n\u2502   \u251c\u2500\u2500 linkis-ps-cs-gc.log\n\u2502   \u251c\u2500\u2500 linkis-ps-cs.log\n\u2502   \u251c\u2500\u2500 linkis-ps-cs.out\n\u2502   \u251c\u2500\u2500 linkis-ps-data-source-manager-gc.log\n\u2502   \u251c\u2500\u2500 linkis-ps-data-source-manager.log\n\u2502   \u251c\u2500\u2500 linkis-ps-data-source-manager.out\n\u2502   \u251c\u2500\u2500 linkis-ps-metadatamanager-gc.log\n\u2502   \u251c\u2500\u2500 linkis-ps-metadatamanager.log\n\u2502   \u251c\u2500\u2500 linkis-ps-metadatamanager.out\n\u2502   \u251c\u2500\u2500 linkis-ps-publicservice-gc.log\n\u2502   \u251c\u2500\u2500 linkis-ps-publicservice.log\n\u2502   \u2514\u2500\u2500 linkis-ps-publicservice.out\n\u251c\u2500\u2500\xa0pid \u6240\u6709\u5fae\u670d\u52a1\u7684\u8fdb\u7a0bID\n\u2502\xa0\xa0\xa0\u251c\u2500\u2500\xa0linkis_cg-engineconnmanager.pid \u2500\u2500\u5f15\u64ce\u7ba1\u7406\u5668\u5fae\u670d\u52a1\n\u2502\xa0\xa0\xa0\u251c\u2500\u2500\xa0linkis_cg-engineconnplugin.pid \u2500\u2500\u5f15\u64ce\u63d2\u4ef6\u5fae\u670d\u52a1\n\u2502\xa0\xa0\xa0\u251c\u2500\u2500\xa0linkis_cg-entrance.pid \u2500\u2500\u5f15\u64ce\u5165\u53e3\u5fae\u670d\u52a1\n\u2502\xa0\xa0\xa0\u251c\u2500\u2500\xa0linkis_cg-linkismanager.pid \u2500\u2500linkis\u7ba1\u7406\u5668\u5fae\u670d\u52a1\n\u2502\xa0\xa0\xa0\u251c\u2500\u2500\xa0linkis_mg-eureka.pid \u2500\u2500eureka\u5fae\u670d\u52a1\n\u2502\xa0\xa0\xa0\u251c\u2500\u2500\xa0linkis_mg-gateway.pid \u2500\u2500gateway\u5fae\u670d\u52a1\n\u2502\xa0\xa0\xa0\u251c\u2500\u2500\xa0linkis_ps-cs.pid \u2500\u2500\u4e0a\u4e0b\u6587\u5fae\u670d\u52a1\n\u2502\xa0\xa0\xa0\u251c\u2500\u2500 linkis_ps-data-source-manager.pid --\u6570\u636e\u6e90\u5fae\u670d\u52a1\n\u2502\xa0\xa0\xa0\u251c\u2500\u2500 linkis_ps-metadatamanager.pid  --\u5143\u6570\u636e\u7ba1\u7406\u5fae\u670d\u52a1\n\u2502\xa0\xa0\xa0\u2514\u2500\u2500\xa0linkis_ps-publicservice.pid \u2500\u2500\u516c\u5171\u5fae\u670d\u52a1\n\u2514\u2500\u2500\xa0sbin \u5fae\u670d\u52a1\u542f\u505c\u811a\u672c\u76ee\u5f55\n\xa0\xa0\xa0\xa0 \u251c\u2500\u2500\xa0ext \u2500\u2500\u5404\u4e2a\u5fae\u670d\u52a1\u7684\u542f\u505c\u811a\u672c\u76ee\u5f55\n\xa0\xa0 \xa0 \u251c\u2500\u2500\xa0linkis-daemon.sh \u2500\u2500 \u5feb\u6377\u542f\u505c\u3001\u91cd\u542f\u5355\u4e2a\u5fae\u670d\u52a1\u811a\u672c\n\xa0    \u251c\u2500\u2500\xa0linkis-start-all.sh \u2500\u2500 \u4e00\u952e\u542f\u52a8\u5168\u90e8\u5fae\u670d\u52a1\u811a\u672c\n     \u2514\u2500\u2500\xa0linkis-stop-all.sh \u2500\u2500 \u4e00\u952e\u505c\u6b62\u5168\u90e8\u5fae\u670d\u52a1\u811a\u672c\n\n")),(0,l.kt)("h2",{id:"2--\u914d\u7f6e\u9879\u4fee\u6539"},"2  \u914d\u7f6e\u9879\u4fee\u6539"),(0,l.kt)("p",null," \u5728\u6267\u884c\u5b8cLinkis\u5b89\u88c5\u540e\uff0c\u6240\u6709\u914d\u7f6e\u9879\u4f4d\u4e8econf\u76ee\u5f55\u4e0b\uff0c\n\u5982\u679c\u9700\u8981\u8fdb\u884c\u914d\u7f6e\u9879\u4fee\u6539\uff0c\u4fee\u6539\u914d\u7f6e",(0,l.kt)("inlineCode",{parentName:"p"},"${LINKIS_HOME}/conf/*properties"),"\u6587\u4ef6\u540e\uff0c\u91cd\u542f\u5bf9\u5e94\u7684\u670d\u52a1\uff0c\n\u5982\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"sh sbin/linkis-daemon.sh start ps-publicservice"),"\u3002\n\u5982\u679c\u4fee\u6539\u7684\u662f\u516c\u5171\u914d\u7f6e\u6587\u4ef6",(0,l.kt)("inlineCode",{parentName:"p"},"application-eureka.yml/application-linkis.yml/linkis.properties"),"\uff0c\u9700\u8981\u91cd\u542f\u6240\u6709\u670d\u52a1",(0,l.kt)("inlineCode",{parentName:"p"},"sh sbin/linkis-start-all.sh")," "),(0,l.kt)("h2",{id:"3-\u5fae\u670d\u52a1\u542f\u505c"},"3 \u5fae\u670d\u52a1\u542f\u505c"),(0,l.kt)("p",null,"\u6240\u6709\u5fae\u670d\u52a1\u540d\u79f0\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\u251c\u2500\u2500 linkis-cg-engineconnmanager \u5f15\u64ce\u7ba1\u7406\u670d\u52a1  \n\u251c\u2500\u2500 linkis-cg-engineplugin \u5f15\u64ce\u63d2\u4ef6\u7ba1\u7406\u670d\u52a1  \n\u251c\u2500\u2500 linkis-cg-entrance \u8ba1\u7b97\u6cbb\u7406\u5165\u53e3\u670d\u52a1  \n\u251c\u2500\u2500 linkis-cg-linkismanager \u8ba1\u7b97\u6cbb\u7406\u7ba1\u7406\u670d\u52a1  \n\u251c\u2500\u2500 linkis-mg-eureka \u5fae\u670d\u52a1\u6ce8\u518c\u4e2d\u5fc3\u670d\u52a1  \n\u251c\u2500\u2500 linkis-mg-gateway Linkis\u7f51\u5173\u670d\u52a1  \n\u251c\u2500\u2500 linkis-ps-cs \u4e0a\u4e0b\u6587\u670d\u52a1 \n\u251c\u2500\u2500 linkis-ps-publicservice \u516c\u5171\u670d\u52a1 \n\u251c\u2500\u2500 linkis-ps-data-source-manager \u6570\u636e\u6e90\u7ba1\u7406\u670d\u52a1 \n\u251c\u2500\u2500 linkis-ps-metadatamanager  \u5143\u6570\u636e\u67e5\u8be2\u670d\u52a1\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u5fae\u670d\u52a1\u7b80\u79f0"),"\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u7b80\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u82f1\u6587\u5168\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u4e2d\u6587\u5168\u79f0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cg"),(0,l.kt)("td",{parentName:"tr",align:null},"Computation Governance"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8ba1\u7b97\u6cbb\u7406")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mg"),(0,l.kt)("td",{parentName:"tr",align:null},"Microservice Covernance"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5fae\u670d\u52a1\u6cbb\u7406")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ps"),(0,l.kt)("td",{parentName:"tr",align:null},"Public Enhancement Service"),(0,l.kt)("td",{parentName:"tr",align:null},"\u516c\u5171\u589e\u5f3a\u670d\u52a1")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"# \u4e00\u6b21\u6027\u542f\u52a8\u6240\u6709\u5fae\u670d\u52a1\uff1a\n \n     sh linkis-start-all.sh\n \n# \u4e00\u6b21\u6027\u5173\u505c\u6240\u6709\u5fae\u670d\u52a1\n \n     sh linkis-stop-all.sh\n \n# \u542f\u52a8\u5355\u4e2a\u5fae\u670d\u52a1\uff08\u670d\u52a1\u540d\u9700\u8981\u53bb\u6389linkis\u524d\u7f00\u5982\uff1amg-eureka\uff09\n \n     sh linkis-daemon.sh start service-name\n \n     \u4f8b\u5982: sh linkis-daemon.sh start mg-eureka\n \n# \u5173\u95ed\u5355\u4e2a\u5fae\u670d\u52a1\n \n     sh linkis-daemon.sh stop service-name\n \n     \u4f8b\u5982: sh linkis-daemon.sh stop mg-eureka\n \n# \u91cd\u542f\u5355\u4e2a\u5fae\u670d\u52a1\n \n     sh linkis-daemon.sh restart service-name\n \n     \u4f8b\u5982: sh linkis-daemon.sh restart mg-eureka\n# \u67e5\u770b\u5355\u4e2a\u5fae\u670d\u52a1\u7684\u72b6\u6001\n \n     sh linkis-daemon.sh status service-name\n \n     \u4f8b\u5982: sh linkis-daemon.sh status mg-eureka\n")))}u.isMDXComponent=!0}}]);