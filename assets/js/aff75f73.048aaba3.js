"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[47429],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(n),h=i,d=m["".concat(l,".").concat(h)]||m[h]||c[h]||a;return n?o.createElement(d,r(r({ref:t},p),{},{components:n})):o.createElement(d,r({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var u=2;u<a;u++)r[u]=n[u];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},65128:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},assets:function(){return p},toc:function(){return c},default:function(){return h}});var o=n(87462),i=n(63366),a=(n(67294),n(3905)),r=["components"],s={title:"How to add a GitHub Action for the GitHub repository",authors:["BeaconTown"],tags:["github"]},l=void 0,u={permalink:"/blog/2022/07/04/how-to-add-auto-bot",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/blog/2022-07-04-how-to-add-auto-bot.md",source:"@site/blog/2022-07-04-how-to-add-auto-bot.md",title:"How to add a GitHub Action for the GitHub repository",description:"1 Summary",date:"2022-07-04T00:00:00.000Z",formattedDate:"July 4, 2022",tags:[{label:"github",permalink:"/blog/tags/github"}],readingTime:8.91,truncated:!1,authors:[{name:"BeaconTown",title:"Student",url:"https://github.com/Beacontownfc/",imageURL:"https://avatars.githubusercontent.com/u/89081023?s=40&v=4",key:"BeaconTown"}],prevItem:{title:"Deploy Linkis with Kubernetes",permalink:"/blog/2022/07/16/deploy-linkis-with-kubernetes"},nextItem:{title:"Apache Linkis(Incubating) Meet up",permalink:"/blog/2022/06/09/meetup-content-review"}},p={authorsImageUrls:[void 0]},c=[{value:"1 Summary",id:"1-summary",children:[]},{value:"2 Some terms",id:"2-some-terms",children:[]},{value:"3 Start writing the first Workflow",id:"3-start-writing-the-first-workflow",children:[]},{value:"4 How to write your own action",id:"4-how-to-write-your-own-action",children:[]},{value:"5 GitHub Action project practice",id:"5-github-action-project-practice",children:[]}],m={toc:c};function h(e){var t=e.components,n=(0,i.Z)(e,r);return(0,a.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"1-summary"},"1 Summary"),(0,a.kt)("p",null,"As you know, ",(0,a.kt)("a",{parentName:"p",href:"#21-what-is-continuous-integration"},"continuous integration")," consists of many operations, such as capturing code, running tests, logging in to remote servers, publishing to third-party services, and so on. GitHub calls these operations as Actions. Many operations are similar in different projects and can be shared. GitHub noticed this and came up with a wonderful idea to allow developers to write each operation as an independent script file and store it in the code repository so that other developers can reference it. If you need an action, you don't have to write a complex script by yourself. You can directly reference the action written by others. The whole continuous integration process becomes a combination of actions. This is the most special part of GitHub Actions."),(0,a.kt)("p",null,"GitHub provides a ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/marketplace"},"Github Action Market")," for developers, we can find the GitHub Action we want from this market and configure it into the ",(0,a.kt)("inlineCode",{parentName:"p"},"workflow")," of the repository to realize automatic operation. Of course, the GitHub Action that this market can provide is limited. In some cases, we can't find a GitHub Action that can meet our needs. I will also teach you how to write GitHub Action by yourself later in this blog."),(0,a.kt)("h2",{id:"2-some-terms"},"2 Some terms"),(0,a.kt)("h4",{id:"21-what-is-continuous-integration"},"2.1 What is continuous integration"),(0,a.kt)("p",null,"In short, it is an automated program. For example, every time the front-end programmer submits code to GitHub's repository, GitHub will automatically create a virtual machine (MAC / Windows / Linux) to execute one or more instructions (determined by us), for example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install\nnpm run build\n")),(0,a.kt)("h4",{id:"22-what-is-yaml"},"2.2 What is YAML"),(0,a.kt)("p",null,"The way we integrate GitHub Action is to create a ",(0,a.kt)("inlineCode",{parentName:"p"},"Github/workflow")," directory, with a ",(0,a.kt)("inlineCode",{parentName:"p"},"* yaml")," file - this ",(0,a.kt)("inlineCode",{parentName:"p"},"yaml")," file is the file we use to configure GitHub Action. It is a very easy scripting language. For users who are not familiar with ",(0,a.kt)("inlineCode",{parentName:"p"},"yaml"),", you can refer to it ",(0,a.kt)("a",{parentName:"p",href:"https://www.codeproject.com/Articles/1214409/Learn-YAML-in-five-minutes"},"here"),"."),(0,a.kt)("h2",{id:"3-start-writing-the-first-workflow"},"3 Start writing the first Workflow"),(0,a.kt)("h4",{id:"31-how-to-customize-the-name-of-workflow"},"3.1 How to customize the name of Workflow"),(0,a.kt)("p",null,"GitHub displays the name of the Workflow on the action page of the repository. If we omit name, GitHub will set it as the Workflow file path relative to the repository root directory."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"name: \n  Say Hello\n")),(0,a.kt)("h4",{id:"32-how-to-customize-the-trigger-event-of-workflow"},"3.2 How to customize the trigger event of Workflow"),(0,a.kt)("p",null,"There are many events, for example, the user submits a pull request to the repository, the user submits an issue to the repository, or the user closes an issue, etc. We hope that when some events occur, the Workflow will be automatically executed, which requires the definition of trigger events. The following is an example of a custom trigger event:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},"name: \n  Say Hello\non: \n  pull_request\n")),(0,a.kt)("p",null,"The above code can trigger workflow when the user submits a pull request. For multiple events, we enclose them in square brackets, for example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},"name: \n  Say Hello\non: \n  [pull_request,pull]\n")),(0,a.kt)("p",null,"Of course, we hope that the triggering event can be more specific, such as triggering Workflow when a pull request is closed or reopened:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},"name: \n  Say Hello\non: \n  pull_request:\n    type: \n      [reopend,closed]\n")),(0,a.kt)("p",null,"For more trigger events, please refer to ",(0,a.kt)("a",{parentName:"p",href:"https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows#about-workflow-events"},"document")," here."),(0,a.kt)("h4",{id:"33-how-to-define-a-job"},"3.3 How to define a job"),(0,a.kt)("p",null,"A Workflow is composed of one or more jobs, which means that a continuous integration run can complete multiple tasks. Here is an example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},"name: \n  Say Hello\non: \n  pull_request\njobs:\n  my_first_job:\n    name: My first job\n  my_second_job:\n    name: My second job\n")),(0,a.kt)("p",null,"Each job must have an ID associated with it. Above ",(0,a.kt)("inlineCode",{parentName:"p"},"my_ first_ Job")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"my_ second_ Job")," is the ID of the job."),(0,a.kt)("h4",{id:"34-how-to-specify-the-running-environment-of-a-job"},"3.4 How to specify the running environment of a job"),(0,a.kt)("p",null,"Specify the running environment for running jobs. The operating systems available on Workflow are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Windows"),(0,a.kt)("li",{parentName:"ul"},"macos"),(0,a.kt)("li",{parentName:"ul"},"linux")),(0,a.kt)("p",null,"The following is an example of a specified running environment:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},"# Limited by space, the previous code is omitted\njobs:\n  my_first_job:\n    name: My first job\n  runs-on: macos-10.15\n")),(0,a.kt)("h4",{id:"35-the-use-of-step"},"3.5 The use of step"),(0,a.kt)("p",null,"Each job is composed of multiple steps, which will be executed from top to bottom. Step can run commands (such as linxu commands) and actions."),(0,a.kt)("p",null,'The following is an example of outputting "Hello World":'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},"# Limited by space, the previous code is omitted\njobs:\n  my_first_job:\n    name: My first job\n  runs-on: macos-10.15\n  step:\n    - name: Print a greeting\n    # Define the environment variables of step\n      env:\n        FIRST_WORD: Hello\n        SECOND_WORD: WORD\n      # Run instructions: output environment variables\n      run: |\n        echo $FIRST_WORD $SECOND_WORD.\n")),(0,a.kt)("p",null,"Next is the use of action, which is actually a command. For example, GitHub officially gives us some ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/marketplace?type=actions&query=actions"},"default commands"),". We can directly use these commands to reduce the amount of Workflow code in the repository. The most common action is ",(0,a.kt)("a",{parentName:"p",href:"https://link.zhihu.com/?target=https%3A//github.com/marketplace/actions/checkout"},"Checkout"),", it can clone the latest code in the repository into the Workflow workspace."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},"# Limited by space, the previous code is omitted\n  step:\n    - name: Check out git repository \n      uses: actions/checkout@v2\n")),(0,a.kt)("p",null,"Some actions require additional parameters to be passed in. Generally, ",(0,a.kt)("inlineCode",{parentName:"p"},"with")," is used to set the parameter value:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},"# Limited by space, the previous code is omitted\n  step:\n    - name: Check out git repository \n      uses: actions/checkout@v2\n      uses: actions/setup-node@v2.2.0\n        with:\n          node-version: 14\n")),(0,a.kt)("h2",{id:"4-how-to-write-your-own-action"},"4 How to write your own action"),(0,a.kt)("h4",{id:"41-configuration-of-actionyml"},"4.1 Configuration of action.yml"),(0,a.kt)("p",null,"When we can't find the action we want in the GitHub Action Market, we can write an action to meet our needs by ourselves. The customized action needs to be created a new ",(0,a.kt)("inlineCode",{parentName:"p"},'"actions"')," directory under the ",(0,a.kt)("inlineCode",{parentName:"p"},'".gitHub/workflow"')," directory, and then create a directory with a custom action name. Each action needs an action configuration file: ",(0,a.kt)("inlineCode",{parentName:"p"},"action.yml"),". The ",(0,a.kt)("inlineCode",{parentName:"p"},"runs")," section of ",(0,a.kt)("inlineCode",{parentName:"p"},"action.yml")," specifies the starting mode of the operation. There are three startup methods: ",(0,a.kt)("inlineCode",{parentName:"p"},"node.js Script"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Docker Image"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"Composite Script"),". The common parameters of ",(0,a.kt)("inlineCode",{parentName:"p"},"action.yml")," are described below:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"name: Customize the name of the action"),(0,a.kt)("li",{parentName:"ul"},"description: Declare the parameters or outputs that need to be passed in for action"),(0,a.kt)("li",{parentName:"ul"},"inputs: Customize the parameters to be input"),(0,a.kt)("li",{parentName:"ul"},"outputs: Output variables"),(0,a.kt)("li",{parentName:"ul"},"runs: Startup mode")),(0,a.kt)("p",null,"The following is a configuration example of ",(0,a.kt)("inlineCode",{parentName:"p"},"action.yml"),"\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},'name: "example action"\n\ndescription: "This is an example action"\n\ninputs:\n  param1:\n    description: "The first param of this action"\n    required: true  #Required parameters must be set to true\n\n  param2:\n    description: "The second param of this action"\n    required: true\n\noutputs:\n  out1:\n    description: "The outputs of this action"\n\nruns:\n  using: node16\n  main: dist/index.js\n  post: dist/index.js\n')),(0,a.kt)("p",null,"Setting ",(0,a.kt)("inlineCode",{parentName:"p"},"runs.using")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"node16")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"node12")," can be specified as the starting ",(0,a.kt)("inlineCode",{parentName:"p"},"node.js")," script. The script file named ",(0,a.kt)("inlineCode",{parentName:"p"},"main")," is the startup file. The way to start is similar to running the command ",(0,a.kt)("inlineCode",{parentName:"p"},"node main.js")," directly. Therefore, dependency will not be installed from ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json"),". During development, we usually use the packaging tool to package the dependencies together, output a separate ",(0,a.kt)("inlineCode",{parentName:"p"},"JS")," file, and then use this file as the entry point. The ",(0,a.kt)("inlineCode",{parentName:"p"},"runs.post")," can specify the cleanup work, and the content here will be run at the end of the Workflow."),(0,a.kt)("h4",{id:"42-using-docker-image"},"4.2 Using Docker Image"),(0,a.kt)("p",null,"If Docker is used, we need to modify the ",(0,a.kt)("inlineCode",{parentName:"p"},"runs")," in ",(0,a.kt)("inlineCode",{parentName:"p"},"action.yml")," to:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},"runs:\n  using: docker\n  image: Dockerfile\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"runs.image")," specifies the dockerfile required for image startup, which is specified here as the dockerfile under the project root directory. In the dockerfile, specify the startup script with ",(0,a.kt)("inlineCode",{parentName:"p"},"ENTRYPOINT")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"CMD"),". For example, define a program that runs scripts in ",(0,a.kt)("inlineCode",{parentName:"p"},"Python"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-docker"},'FROM python:3\n\nRUN pip install --no-cache-dir requests\n\nCOPY . .\n\nCMD [ "python", "/main.py"]\n')),(0,a.kt)("p",null,"Here we can see the advantages of using docker: you can customize the running environment, and you can use other program languages."),(0,a.kt)("h2",{id:"5-github-action-project-practice"},"5 GitHub Action project practice"),(0,a.kt)("p",null,"In this section, I will describe how to write your own GitHub Action with a specific example."),(0,a.kt)("h5",{id:"problem"},"Problem"),(0,a.kt)("p",null,"Assuming that there are many issues to be processed in our GitHub repository, each pull request submitted by the user may be associated with an issue. If you have to manually close an issue after merging a pull request, it will be quite cumbersome."),(0,a.kt)("h5",{id:"resolve"},"Resolve"),(0,a.kt)("p",null,"Then workflow comes in handy. We can listen to the closed event of pull request and determine whether the closed event is closed by merged or non merged. If it is merged, the associated issue will be closed."),(0,a.kt)("p",null,"But there is still a problem here, how to obtain the associated issue? We can ask the user to add the issue that needs to be associated in the description part when submitting the pull request, such as ",(0,a.kt)("inlineCode",{parentName:"p"},"#345"),", and then extract the issue number of ",(0,a.kt)("inlineCode",{parentName:"p"},"345"),". How to realize this function? We can write GitHub Action by ourselves. In order to make the GitHub Action program more concise, here I use docker to start GitHub Action. First, prepare ",(0,a.kt)("inlineCode",{parentName:"p"},"action.yml"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},'# The name of Github Action \nname: "Auto_close_associate_issue"\n# The description of action\ndescription: "Auto close an issue which associate with a PR."\n\n# Define parameters to be input\ninputs:\n  # The name of first param is prbody\n  prbody: \n    # The definition of the param\n    description: "The body of the PR to search for related issues"\n    # Required param\n    required: true\n\noutputs:\n  #The name of output param\n  issurNumber:\n    description: "The issue number"\n\nruns:\n  # Using Docker Image\n  using: "docker"\n  image: "Dockerfile"\n')),(0,a.kt)("p",null,"The next step is to write script files, where I use ",(0,a.kt)("inlineCode",{parentName:"p"},"node.js"),". The idea of this script is: first obtain the variable value from the environment, extract the issue number, and then output it to the environment. The corresponding script (named main.js) is as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"// Get environment variables. All parameters passed to GitHub Action are capitalized and the prefix INPUT_ is required, which is specified by GitHub\nlet body = process.env['INPUT_PRBODY']; \n// Extract the number of issue by regular expression\nlet pattern = /#\\d+/;\nlet issueNumber = body.match(pattern)[0].replace('#', '');\n// Output the issue number to the environment\nconsole.log(`::set-output name=issueNumber::${issueNumber}`);\n")),(0,a.kt)("p",null,"Next is the image file of Docker (the file name is ",(0,a.kt)("inlineCode",{parentName:"p"},"Dockerfile"),"):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},'FROM node:10.15\n\nCOPY . .\n\nCMD [ "node", "/main.js"]\n')),(0,a.kt)("p",null,"Finally, ",(0,a.kt)("inlineCode",{parentName:"p"},"action.yml"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Dockerfile")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"main.js")," is under the directory ",(0,a.kt)("inlineCode",{parentName:"p"},".github/actions/Auto_close_associate_issue"),", and the writing of an action is over."),(0,a.kt)("p",null,"The last step is to write Workflow. The configuration of Workflow is described in detail in ",(0,a.kt)("a",{parentName:"p",href:"#3-start-writing-the-first-workflow"},"Start Writing the First Workflow"),", so I won't repeat it here. The specific configuration is as follows\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},'name: Auto close issue when PR is merged\n\non:\n  pull_request_target:\n    types: [ closed ]\n\njobs:\n  close-issue:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v2\n\n      - name: "Auto issue closer"\n        uses: ./.github/actions/Auto_close_associate_issue/\n        id: Closer\n        with:\n          prbody: ${{ github.event.pull_request.body }}\n\n      - name: Close Issue\n        uses: peter-evans/close-issue@v2\n        if: ${{ github.event.pull_request.merged }}\n        with:\n          issue-number: ${{ steps.Closer.outputs.issueNumber }}\n          comment: The associated PR has been merged, this issue is automatically closed, you can reopend if necessary.\n        env:\n          Github_Token: ${{ secrets.GITHUB_TOKEN }}\n          PRNUM: ${{ github.event.pull_request.number }}\n')))}h.isMDXComponent=!0}}]);