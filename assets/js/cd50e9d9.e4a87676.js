"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[40968],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(a),m=i,k=d["".concat(s,".").concat(m)]||d[m]||h[m]||l;return a?n.createElement(k,r(r({ref:t},p),{},{components:a})):n.createElement(k,r({ref:t},p))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=a.length,r=new Array(l);r[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var c=2;c<l;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},23010:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>r,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=a(87462),i=(a(67294),a(3905));const l={title:"How to Verify Release",sidebar_position:4},r="Verify the Candidate Version",o={unversionedId:"how-to-verify",id:"how-to-verify",isDocsHomePage:!1,title:"How to Verify Release",description:"For detailed check list, please refer to the official check list",source:"@site/community/how-to-verify.md",sourceDirName:".",slug:"/how-to-verify",permalink:"/community/how-to-verify",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/community/how-to-verify.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"How to Verify Release",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"How to Release",permalink:"/community/how-to-release"},next:{title:"Security",permalink:"/community/security"}},s=[{value:"1. Download the candidate version",id:"1-download-the-candidate-version",children:[]},{value:"2. Verify that the uploaded version is compliant",id:"2-verify-that-the-uploaded-version-is-compliant",children:[{value:"2.1 Check whether the release package is complete",id:"21-check-whether-the-release-package-is-complete",children:[]},{value:"2.2 Check gpg signature",id:"22-check-gpg-signature",children:[]},{value:"2.3 Check sha512 hash",id:"23-check-sha512-hash",children:[]},{value:"2.4. Check the file content of the source package",id:"24-check-the-file-content-of-the-source-package",children:[]},{value:"2.5 Check the binary package",id:"25-check-the-binary-package",children:[]}]},{value:"3. Email reply",id:"3-email-reply",children:[]},{value:"4. Precautions",id:"4-precautions",children:[]}],c={toc:s};function p(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"verify-the-candidate-version"},"Verify the Candidate Version"),(0,i.kt)("p",null,"For detailed check list, please refer to the official ",(0,i.kt)("a",{parentName:"p",href:"https://cwiki.apache.org/confluence/display/INCUBATOR/Incubator+Release+Checklist"},"check list")),(0,i.kt)("h2",{id:"1-download-the-candidate-version"},"1. Download the candidate version"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Download the candidate version to be released to the local environment\nNeed to rely on gpg tool, if not, it is recommended to install gpg2")),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If the network is poor, downloading may be time-consuming. The download is completed normally in about 20 minutes, please wait patiently."))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"#If there is svn locally, you can clone to the local\n$ svn co https://dist.apache.org/repos/dist/dev/incubator/linkis/${release_version}-${rc_version}/\n#or download the material file directly\n$ wget https://dist.apache.org/repos/dist/dev/incubator/linkis/${release_version}-${rc_version}/xxx.xxx\n\n")),(0,i.kt)("h2",{id:"2-verify-that-the-uploaded-version-is-compliant"},"2. Verify that the uploaded version is compliant"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Start the verification process, which includes but is not limited to the following content and forms")),(0,i.kt)("h3",{id:"21-check-whether-the-release-package-is-complete"},"2.1 Check whether the release package is complete"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The package uploaded to dist must include the source code package, and the binary package is optional")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Whether to include the source code package"),(0,i.kt)("li",{parentName:"ol"},"Whether to include the signature of the source code package"),(0,i.kt)("li",{parentName:"ol"},"Whether to include the sha512 of the source code package"),(0,i.kt)("li",{parentName:"ol"},"If the binary package is uploaded, also check the contents listed in (2)-(4)")),(0,i.kt)("h3",{id:"22-check-gpg-signature"},"2.2 Check gpg signature"),(0,i.kt)("p",null,"First import the publisher's public key. Import KEYS from the svn repository to the local environment. (The person who releases the version does not need to import it again, the person who helps to do the verification needs to import it, and the user name is enough for the person who issued the version)"),(0,i.kt)("h4",{id:"221-import-public-key"},"2.2.1 Import public key"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ curl  https://downloads.apache.org/incubator/linkis/KEYS > KEYS # Download KEYS\n$ gpg --import KEYS # Import KEYS to local\n")),(0,i.kt)("h4",{id:"222-trust-the-public-key"},"2.2.2 Trust the public key"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Trust the KEY used in this version")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ gpg --edit-key xxxxxxxxxx #KEY user used in this version\ngpg (GnuPG) 2.2.21; Copyright (C) 2020 Free Software Foundation, Inc.\nThis is free software: you are free to change and redistribute it.\nThere is NO WARRANTY, to the extent permitted by law.\n\nSecret key is available.\ngpg> trust #trust\nPlease decide how far you trust this user to correctly verify other users' keys\n(by looking at passports, checking fingerprints from different sources, etc.)\n\n  1 = I don't know or won't say\n  2 = I do NOT trust\n  3 = I trust marginally\n  4 = I trust fully\n  5 = I trust ultimately\n  m = back to the main menu\n\nYour decision? 5 #choose 5\nDo you really want to set this key to ultimate trust? (y/N) y  #choose y\n                                                            \ngpg>\n         \n")),(0,i.kt)("h4",{id:"223-check-the-gpg-signature"},"2.2.3 Check the gpg signature"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ for i in *.tar.gz; do echo $i; gpg --verify $i.asc $i; done\n#or\n$ gpg --verify apache-linkis-${release_version}-src.tar.gz.asc apache-linkis-${release_version}-src.tar.gz\n# If you upload a binary package, you also need to check whether the signature of the binary package is correct\n$ gpg --verify apache-linkis-${release_version}-bin.tar.gz.asc apache-linkis-${release_version}-bin.tar.gz\n")),(0,i.kt)("p",null,"check result"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"If something like the following appears, it means the signature is correct. Keyword: ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Good signature")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'apache-linkis-xxx-incubating-src.tar.gz\ngpg: Signature made XXXX\ngpg: using RSA key XXXXX\ngpg: Good signature from "xxx @apache.org>"\n')),(0,i.kt)("h3",{id:"23-check-sha512-hash"},"2.3 Check sha512 hash"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"After calculating the sha512 hash locally, verify that it is consistent with the dist. If you upload a binary package, you also need to check the sha512 hash of the binary package")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"macOS/Linux")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ for i in *.tar.gz; do echo $i; sha512sum --check  $i.sha512; done\n\n#or\n$ sha512sum --check apache-linkis-${release_version}-src.tar.gz.sha512\n# If you upload a binary package, you also need to check whether the signature of the binary package is correct\n$ sha512sum --check apache-linkis-${release_version}-bin.tar.gz.sha512\n\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Windows")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ certUtil -hashfile apache-linkis-${release_version}-incubating-xxx.tar.gz SHA512\n#Compare the output content with the content of the apache-linkis-${release_version}-incubating-xxx.tar.gz.sha512 file\n")),(0,i.kt)("h3",{id:"24-check-the-file-content-of-the-source-package"},"2.4. Check the file content of the source package"),(0,i.kt)("p",null,"Unzip ",(0,i.kt)("inlineCode",{parentName:"p"},"apache-linkis-${release_version}-incubating-src.tar.gz")," "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"$ tar -xvf apache-linkis-${release_version}-incubating-src.tar.gz\n\n$ cd apache-linkis-${release_version}-incubating-src\n")),(0,i.kt)("h4",{id:"241-asf-license-rat-check"},"2.4.1 ASF License RAT Check"),(0,i.kt)("p",null,"Mac OS/Linux"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"#normally can be executed within 5 minutes\n$ ./mvnw -N install  \n$ ./mvnw apache-rat:check\n\n#Check all rat files after no exception\n$ find ./ -name rat.txt -print0 | xargs -0 -I file cat file > merged-rat.txt\n")),(0,i.kt)("p",null,"Window"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"#normally can be executed within 5 minutes\n$ mvnw.cmd -N install\n$ mvnw.cmd apache-rat:check\n")),(0,i.kt)("p",null,"The whitelist file of rat check is configured in the apache-rat-plugin plugin configuration in the outer pom.xml.\nCheck all the license information in merged-rat.txt, and notice if the Binaries and Archives files are 0."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"Notes: 0\nBinaries: 0\nArchives: 0\n0 Unknown Licenses\n")),(0,i.kt)("font",{color:"red"},"If it is not 0, you need to confirm whether the source code has the license for the binary or compressed file. You can refer to the `linkis-engineconn-plugins/python/src/main/py4j/py4j- 0.10.7-src.zip`"),(0,i.kt)("h4",{id:"242-project-source-code-compilation-verification"},"2.4.2 Project source code compilation verification"),(0,i.kt)("p",null,"Mac OS/Linux"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ ./mvnw -N install\n#If the performance of the machine where the compilation is located is relatively poor, this process will be time-consuming, usually about 30min\n$  ./mvnw clean install -Dmaven.javadoc.skip=true -Dmaven.test.skip=true\n")),(0,i.kt)("p",null,"Window "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ mvnw.cmd -N install\n#If the performance of the machine where the compilation is located is relatively poor, this process will be time-consuming, usually about 30min\n$ mvnw.cmd clean install -Dmaven.javadoc.skip=true -Dmaven.test.skip=true\n")),(0,i.kt)("h4",{id:"243-web-source-code-compilation-verification"},"2.4.3 Web source code compilation verification"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"This will require node.js environment. It is recommended to use node v14 version.")),(0,i.kt)("p",null,"First, install the packages:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"npm install\n")),(0,i.kt)("p",null,"Next, build the project\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"npm run build\n")),(0,i.kt)("p",null,"The console installation package ",(0,i.kt)("inlineCode",{parentName:"p"},"apache-linkis-${version}-incubating-web-bin.tar.gz")," will be generated after the above command is successfully executed"),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"1.An error occured when running ",(0,i.kt)("inlineCode",{parentName:"p"},"npm install"),":"),(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},'Error: Can\'t find Python executable "python", you can set the PYTHON env variable')),(0,i.kt)("p",{parentName:"div"},"You can install the windows-build-tools (This requires administractor privileges)"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ npm install --global --production windows-build-tools\n")),(0,i.kt)("p",{parentName:"div"},"Install the node-gyp:"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ npm install --global node-gyp\n")),(0,i.kt)("p",{parentName:"div"},"2.If compilation fails, please clean up and re-execute as follows:"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"#Delete node_modules\n$ rm -rf node_modules\n#Delete package-lock.json\n$ rm -rf package-lock.json\n#Clean npm cache\n$ npm cache clear --force\n#Download packages again\n$ npm install\n\n")))),(0,i.kt)("h4",{id:"244-check-related-compliance-items"},"2.4.4 Check related compliance items"),(0,i.kt)("p",null,"and check as follows:"),(0,i.kt)("ul",{className:"contains-task-list"},(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Check whether the source package contains unnecessary files, which makes the tar package too large"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Folder contains the word ",(0,i.kt)("inlineCode",{parentName:"li"},"incubating")),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","There are ",(0,i.kt)("inlineCode",{parentName:"li"},"LICENSE")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"NOTICE")," files"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","There is a ",(0,i.kt)("inlineCode",{parentName:"li"},"DISCLAIMER")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"DISCLAIMER-WIP")," file"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","The year in the ",(0,i.kt)("inlineCode",{parentName:"li"},"NOTICE")," file is correct"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Only text files exist, not binary files"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","All files have ASF license at the beginning"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Able to compile correctly"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Check for extra files or folders, such as empty folders, etc."),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",".....")),(0,i.kt)("h3",{id:"25-check-the-binary-package"},"2.5 Check the binary package"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"If the binary/web-binary package is uploaded, check the binary package. ")),(0,i.kt)("p",null,"Unzip ",(0,i.kt)("inlineCode",{parentName:"p"},"apache-linkis-${release_version}-incubating-bin.tar.gz")," "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ mkdir apache-linkis-${release_version}-incubating-bin\n$ tar -xvf  apache-linkis-${release_version}-incubating-bin.tar.gz -C  apache-linkis-${release_version}-incubating-bin\n$ cd apache-linkis-${release_version}-incubating-bin\n")),(0,i.kt)("p",null,"and check as follows:"),(0,i.kt)("ul",{className:"contains-task-list"},(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Folder contains the word ",(0,i.kt)("inlineCode",{parentName:"li"},"incubating")),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","There are ",(0,i.kt)("inlineCode",{parentName:"li"},"LICENSE")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"NOTICE")," files"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","There is a ",(0,i.kt)("inlineCode",{parentName:"li"},"DISCLAIMER")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"DISCLAIMER-WIP")," file"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","The year in the ",(0,i.kt)("inlineCode",{parentName:"li"},"NOTICE")," file is correct"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","All text files have ASF license at the beginning"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Check the third-party dependent license:"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Compatible with third-party dependent licenses"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","All third-party dependent licenses are named in the ",(0,i.kt)("inlineCode",{parentName:"li"},"LICENSE")," file"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","If you are relying on the Apache license and there is a ",(0,i.kt)("inlineCode",{parentName:"li"},"NOTICE")," file, then these ",(0,i.kt)("inlineCode",{parentName:"li"},"NOTICE")," files also need to be added to the version of the ",(0,i.kt)("inlineCode",{parentName:"li"},"NOTICE")," file"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",".....")),(0,i.kt)("p",null,"You can refer to this article: ",(0,i.kt)("a",{parentName:"p",href:"https://apache.org/legal/resolved.html"},"ASF Third Party License Policy")),(0,i.kt)("h2",{id:"3-email-reply"},"3. Email reply"),(0,i.kt)("p",null,"If you initiate a posting vote, you can refer to this response example to reply to the email after verification"),(0,i.kt)("font",{color:"red"},"When replying to the email, you must bring the information that you have checked by yourself. Simply replying to `+1 approve` is invalid.",(0,i.kt)("p",null,"When PPMC votes in the ",(0,i.kt)("a",{parentName:"p",href:"mailto:dev@linkis.apache.org"},"dev@linkis.apache.org")," linkis community, Please bring the binding suffix to indicate that it has a binding vote for the vote in the linkis community, and it is convenient to count the voting results."),(0,i.kt)("p",null,"When IPMC votes in the ",(0,i.kt)("a",{parentName:"p",href:"mailto:general@incubator.apache.org"},"general@incubator.apache.org")," incubator community. Please bring the binding suffix to indicate that the voting in the incubator community has a binding vote, which is convenient for counting the voting results.")),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you have already voted on ",(0,i.kt)("a",{parentName:"p",href:"mailto:dev@linkis.apache.org"},"dev@linkis.apache.org"),", you can take it directly to the incubator community when you reply to the vote, such as:"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-html"},"//Incubator community voting, only IPMC members have binding binding\uff0cPPMC needs to be aware of binding changes\nForward my +1 from dev@linkis (non-binding)\nCopy my +1 from linkis DEV ML (non-binding)\n")))),(0,i.kt)("p",null,"Non-PPMC/Non-IPMC member"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},"+1 (non-binding)\nI checked:\n     1. All download links are valid\n     2. Checksum and signature are OK\n     3. LICENSE and NOTICE are exist\n     4. Build successfully on macOS(Big Sur)\n     5. \xa0\n")),(0,i.kt)("p",null,"PPMC/IPMC member"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},"//Incubator community voting, only IPMC members have binding binding\n+1 (binding)\nI checked:\n     1. All download links are valid\n     2. Checksum and signature are OK\n     3. LICENSE and NOTICE are exist\n     4. Build successfully on macOS(Big Sur)\n     5. \xa0\n")),(0,i.kt)("h2",{id:"4-precautions"},"4. Precautions"),(0,i.kt)("font",{color:"red"},"If you have maven tools installed, you can replace ./mvnw or mvnw.cmd with your own mvn command",(0,i.kt)("p",null,"mvnw is short for Maven Wrapper. It can support running Maven projects without installing Maven and configuring environment variables. If it can't find it, it will download the corresponding Maven version according to the configuration file")))}p.isMDXComponent=!0}}]);