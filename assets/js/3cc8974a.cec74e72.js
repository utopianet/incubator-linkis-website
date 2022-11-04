"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[90368],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>g});var i=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=i.createContext({}),d=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=d(e.components);return i.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},p=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),p=d(t),g=a,k=p["".concat(s,".").concat(g)]||p[g]||u[g]||o;return t?i.createElement(k,l(l({ref:n},c),{},{components:t})):i.createElement(k,l({ref:n},c))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=p;var r={};for(var s in n)hasOwnProperty.call(n,s)&&(r[s]=n[s]);r.originalType=e,r.mdxType="string"==typeof e?e:a,l[1]=r;for(var d=2;d<o;d++)l[d]=t[d];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}p.displayName="MDXCreateElement"},13386:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>r,toc:()=>s});var i=t(87462),a=(t(67294),t(3905));const o={title:"Flink Engine",sidebar_position:8},l=void 0,r={unversionedId:"engine-usage/flink",id:"engine-usage/flink",isDocsHomePage:!1,title:"Flink Engine",description:"This article mainly introduces the configuration, deployment and use of the flink engine in Linkis1.0.",source:"@site/docs/engine-usage/flink.md",sourceDirName:"engine-usage",slug:"/engine-usage/flink",permalink:"/docs/1.3.1/engine-usage/flink",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/docs/engine-usage/flink.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"Flink Engine",sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Spark Engine",permalink:"/docs/1.3.1/engine-usage/spark"},next:{title:"OpenLookEng Engine",permalink:"/docs/1.3.1/engine-usage/openlookeng"}},s=[{value:"1. Environment configuration before Flink engine use",id:"1-environment-configuration-before-flink-engine-use",children:[]},{value:"2. Flink engine configuration and deployment",id:"2-flink-engine-configuration-and-deployment",children:[{value:"2.1 Flink version selection and compilation",id:"21-flink-version-selection-and-compilation",children:[]},{value:"2.2 Flink engineConn deployment and loading",id:"22-flink-engineconn-deployment-and-loading",children:[]},{value:"2.3 Flink engine tags",id:"23-flink-engine-tags",children:[]}]},{value:"3. The use of Flink engine",id:"3-the-use-of-flink-engine",children:[{value:"Preparation operation, queue setting",id:"preparation-operation-queue-setting",children:[]},{value:"Prepare knowledge, two ways to use Flink engine",id:"prepare-knowledge-two-ways-to-use-flink-engine",children:[]},{value:"Prepare knowledge, Connector plug-in of FlinkSQL",id:"prepare-knowledge-connector-plug-in-of-flinksql",children:[]},{value:"3.1 ComputationEngineConn method",id:"31-computationengineconn-method",children:[]},{value:"3.2 Task submission via Linkis-cli",id:"32-task-submission-via-linkis-cli",children:[]},{value:"3.3 OnceEngineConn method",id:"33-onceengineconn-method",children:[]}]}],d={toc:s};function c(e){let{components:n,...o}=e;return(0,a.kt)("wrapper",(0,i.Z)({},d,o,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This article mainly introduces the configuration, deployment and use of the flink engine in Linkis1.0."),(0,a.kt)("h2",{id:"1-environment-configuration-before-flink-engine-use"},"1. Environment configuration before Flink engine use"),(0,a.kt)("p",null,"If you want to use the Flink engine on your server, you need to ensure that the following environment variables have been set correctly and that the user who started the engine has these environment variables."),(0,a.kt)("p",null,"It is strongly recommended that you check these environment variables of the executing user before executing flink tasks. The specific way is"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sudo su-${username}\necho ${JAVA_HOME}\necho ${FLINK_HOME}\n")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Environment variable name"),(0,a.kt)("th",{parentName:"tr",align:null},"Environment variable content"),(0,a.kt)("th",{parentName:"tr",align:null},"Remarks"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"JAVA_HOME"),(0,a.kt)("td",{parentName:"tr",align:null},"JDK installation path"),(0,a.kt)("td",{parentName:"tr",align:null},"Required")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"HADOOP_HOME"),(0,a.kt)("td",{parentName:"tr",align:null},"Hadoop installation path"),(0,a.kt)("td",{parentName:"tr",align:null},"Required")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"HADOOP_CONF_DIR"),(0,a.kt)("td",{parentName:"tr",align:null},"Hadoop configuration path"),(0,a.kt)("td",{parentName:"tr",align:null},"Linkis starts the Flink on yarn mode used by the Flink engine, so yarn support is required.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"FLINK_HOME"),(0,a.kt)("td",{parentName:"tr",align:null},"Flink installation path"),(0,a.kt)("td",{parentName:"tr",align:null},"Required")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"FLINK_CONF_DIR"),(0,a.kt)("td",{parentName:"tr",align:null},"Flink configuration path"),(0,a.kt)("td",{parentName:"tr",align:null},"Required, such as ${FLINK_HOME}/conf")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"FLINK_LIB_DIR"),(0,a.kt)("td",{parentName:"tr",align:null},"Flink package path"),(0,a.kt)("td",{parentName:"tr",align:null},"Required, ${FLINK_HOME}/lib")))),(0,a.kt)("p",null,"Table 1-1 Environmental configuration list"),(0,a.kt)("h2",{id:"2-flink-engine-configuration-and-deployment"},"2. Flink engine configuration and deployment"),(0,a.kt)("h3",{id:"21-flink-version-selection-and-compilation"},"2.1 Flink version selection and compilation"),(0,a.kt)("p",null,"The Flink version supported by Linkis 1.0.2 and above is Flink 1.12.2. In theory, Linkis 1.0.2+ can support various versions of Flink, but the API before each version of Flink has changed too much, and you may need to modify the flink engine in Linkis according to the API changes. Code and recompile."),(0,a.kt)("h3",{id:"22-flink-engineconn-deployment-and-loading"},"2.2 Flink engineConn deployment and loading"),(0,a.kt)("p",null,"The Linkis Flink engine will not be installed in Linkis 1.0.2+ by default, and you need to compile and install it manually."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"The way to compile flink separately\n${linkis_code_dir}linkis-engineconn-plugins/flink/\nmvn clean install\n")),(0,a.kt)("p",null,"The installation method is to compile the engine package, the location is"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"${linkis_code_dir}linkis-engineconn-plugins/flink/target/flink-engineconn.zip\n")),(0,a.kt)("p",null,"Then deploy to"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"${LINKIS_HOME}/lib/linkis-engineplugins\n")),(0,a.kt)("p",null,"And restart linkis-engineplugin"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd ${LINKIS_HOME}/sbin\nsh linkis-daemon restart cg-engineplugin\n")),(0,a.kt)("p",null,"A more detailed introduction to engineplugin can be found in the following article.\n",(0,a.kt)("a",{parentName:"p",href:"../deployment/install-engineconn"},"EngineConnPlugin Installation")," "),(0,a.kt)("h3",{id:"23-flink-engine-tags"},"2.3 Flink engine tags"),(0,a.kt)("p",null,"Linkis1.0 is done through tags, so we need to insert data in our database, the way of inserting is shown below."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"../deployment/install-engineconn"},"EngineConnPlugin Installation > 2.2 Configuration modification of management console (optional)")," "),(0,a.kt)("h2",{id:"3-the-use-of-flink-engine"},"3. The use of Flink engine"),(0,a.kt)("h3",{id:"preparation-operation-queue-setting"},"Preparation operation, queue setting"),(0,a.kt)("p",null,"The Flink engine of Linkis 1.0 is started by flink on yarn, so you need to specify the queue used by the user. The way to specify the queue is shown in Figure 3-1."),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(67117).Z})),(0,a.kt)("p",null,"Figure 3-1 Queue settings"),(0,a.kt)("h3",{id:"prepare-knowledge-two-ways-to-use-flink-engine"},"Prepare knowledge, two ways to use Flink engine"),(0,a.kt)("p",null,"Linkis\u2019 Flink engine has two execution methods. One is the ComputationEngineConn method, which is mainly used in DSS-Scriptis or Streamis-Datasource for debugging sampling and verifying the correctness of the flink code; the other is the OnceEngineConn method , This method is mainly used to start a streaming application in the Streamis production center."),(0,a.kt)("h3",{id:"prepare-knowledge-connector-plug-in-of-flinksql"},"Prepare knowledge, Connector plug-in of FlinkSQL"),(0,a.kt)("p",null,"FlinkSQL can support a variety of data sources, such as binlog, kafka, hive, etc. If you want to use these data sources in Flink code, you need to put the plug-in jar packages of these connectors into the lib of the flink engine, and restart Linkis EnginePlugin service. If you want to use binlog as a data source in your FlinkSQL, then you need to put flink-connector-mysql-cdc-1.1.1.jar into the lib of the flink engine."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd ${LINKS_HOME}/sbin\nsh linkis-daemon.sh restart cg-engineplugin\n")),(0,a.kt)("h3",{id:"31-computationengineconn-method"},"3.1 ComputationEngineConn method"),(0,a.kt)("p",null,"In order to facilitate sampling and debugging, we have added a script type of fql to Scriptis, which is specifically used to execute FlinkSQL. But you need to ensure that your DSS has been upgraded to DSS1.0.0. After upgrading to DSS1.0.0, you can directly enter Scriptis and create a new fql script for editing and execution."),(0,a.kt)("p",null,"FlinkSQL writing example, taking binlog as an example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE mysql_binlog (\n id INT NOT NULL,\n name STRING,\n age INT\n) WITH (\n 'connector' ='mysql-cdc',\n 'hostname' ='ip',\n 'port' ='port',\n 'username' ='username',\n 'password' ='password',\n 'database-name' ='dbname',\n 'table-name' ='tablename',\n 'debezium.snapshot.locking.mode' ='none' - It is recommended to add, otherwise the table will be locked\n);\nselect * from mysql_binlog where id> 10;\n")),(0,a.kt)("p",null,"When debugging with select syntax in Scriptis, the Flink engine will have an automatic cancel mechanism, that is, when the specified time is reached or the number of sampled rows reaches the specified number, the Flink engine will actively cancel the task, and it will have been obtained The result set of is persisted, and then the front end will call the interface to open the result set to display the result set on the front end."),(0,a.kt)("h3",{id:"32-task-submission-via-linkis-cli"},"3.2 Task submission via Linkis-cli"),(0,a.kt)("p",null,"After Linkis 1.0, a cli method is provided to submit tasks. We only need to specify the corresponding EngineConn and CodeType tag types. The use of Hive is as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'sh ./bin/linkis-cli -engineType flink-1.12.2 -codeType sql -code "show tables" -submitUser hadoop -proxyUser hadoop\n')),(0,a.kt)("p",null,"For specific usage, please refer to: ",(0,a.kt)("a",{parentName:"p",href:"/docs/1.3.1/user-guide/linkiscli-manual"},"Linkis CLI Manual"),"."),(0,a.kt)("h3",{id:"33-onceengineconn-method"},"3.3 OnceEngineConn method"),(0,a.kt)("p",null,"The use of OnceEngineConn is to officially start Flink's streaming application. Specifically, it calls LinkisManager's createEngineConn interface through LinkisManagerClient, and sends the code to the created Flink engine, and then the Flink engine starts to execute. This method can be used by other systems. Make a call, such as Streamis. The use of Client is also very simple, first create a new maven project, or introduce the following dependencies in your project"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>com.webank.wedatasphere.linkis</groupId>\n    <artifactId>linkis-computation-client</artifactId>\n    <version>${linkis.version}</version>\n</dependency>\n")),(0,a.kt)("p",null,"Then create a new scala test file, click Execute to complete the analysis from one binlog data and insert it into another mysql database table. But it should be noted that you must create a new resources directory in the maven project, place a linkis.properties file, and specify the gateway address and api version of linkis, such as"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-properties"},"wds.linkis.server.version=v1\nwds.linkis.gateway.url=http://ip:9001/\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"object OnceJobTest {\n  def main(args: Array[String]): Unit = {\n    val sql = \"\"\"CREATE TABLE mysql_binlog (\n                | id INT NOT NULL,\n                | name STRING,\n                | age INT\n                |) WITH (\n                | 'connector' = 'mysql-cdc',\n                | 'hostname' = 'ip',\n                | 'port' = 'port',\n                | 'username' = '${username}',\n                | 'password' = '${password}',\n                | 'database-name' = '${database}',\n                | 'table-name' = '${tablename}',\n                | 'debezium.snapshot.locking.mode' = 'none'\n                |);\n                |CREATE TABLE sink_table (\n                | id INT NOT NULL,\n                | name STRING,\n                | age INT,\n                | primary key(id) not enforced\n                |) WITH (\n                |  'connector' = 'jdbc',\n                |  'url' = 'jdbc:mysql://${ip}:port/${database}',\n                |  'table-name' = '${tablename}',\n                |  'driver' = 'com.mysql.jdbc.Driver',\n                |  'username' = '${username}',\n                |  'password' = '${password}'\n                |);\n                |INSERT INTO sink_table SELECT id, name, age FROM mysql_binlog;\n                |\"\"\".stripMargin\n    val onceJob = SimpleOnceJob.builder().setCreateService(\"Flink-Test\").addLabel(LabelKeyUtils.ENGINE_TYPE_LABEL_KEY, \"flink-1.12.2\")\n      .addLabel(LabelKeyUtils.USER_CREATOR_LABEL_KEY, \"hadoop-Streamis\").addLabel(LabelKeyUtils.ENGINE_CONN_MODE_LABEL_KEY, \"once\")\n      .addStartupParam(Configuration.IS_TEST_MODE.key, true)\n      //    .addStartupParam(\"label.\" + LabelKeyConstant.CODE_TYPE_KEY, \"sql\")\n      .setMaxSubmitTime(300000)\n      .addExecuteUser(\"hadoop\").addJobContent(\"runType\", \"sql\").addJobContent(\"code\", sql).addSource(\"jobName\", \"OnceJobTest\")\n      .build()\n    onceJob.submit()\n    println(onceJob.getId)\n    onceJob.waitForCompleted()\n    System.exit(0)\n  }\n}\n")))}c.isMDXComponent=!0},67117:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/queue-set-7c9c3c2db8e77ce7f948909adfd80398.png"}}]);