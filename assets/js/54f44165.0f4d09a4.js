(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{220:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return r})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return d}));var a=n(5),i=n(12),m=(n(0),n(384)),o={id:"installation",title:"Installation"},r={unversionedId:"getting-started/installation",id:"getting-started/installation",isDocsHomePage:!1,title:"Installation",description:"Installing Codegen",source:"@site/docs/getting-started/installation.md",slug:"/getting-started/installation",permalink:"/docs/getting-started/installation",editUrl:"https://github.com/dotansimha/graphql-code-generator/edit/master/website/docs/getting-started/installation.md",version:"current",sidebar:"sidebar",previous:{title:"What is GraphQL Code Generator?",permalink:"/docs/getting-started/index"},next:{title:"codegen.yml",permalink:"/docs/getting-started/codegen-config"}},c=[{value:"Installing Codegen",id:"installing-codegen",children:[]},{value:"Initialization Wizard",id:"initialization-wizard",children:[]},{value:"Setup",id:"setup",children:[]},{value:"Running the codegen",id:"running-the-codegen",children:[]}],s={toc:c};function d(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(m.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(m.b)("h2",{id:"installing-codegen"},"Installing Codegen"),Object(m.b)("p",null,"First we need to make sure that the basic GraphQL package is within our dependencies, since GraphQL Code Generator depends on it:"),Object(m.b)("div",{className:"admonition admonition-shell"},Object(m.b)("div",{parentName:"div",className:"admonition-heading"},Object(m.b)("h5",{parentName:"div"},Object(m.b)("span",{parentName:"h5",className:"admonition-icon"},Object(m.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16pt",height:"16pt",viewBox:"0 0 16 16"},Object(m.b)("path",{parentName:"svg",d:"M0 0v16h16V0zm15.063 15.063H.937v-11h14.126zm0-11.938H.937V.937h14.126zm0 0"}),Object(m.b)("path",{parentName:"svg",d:"M1.875 1.563h.938V2.5h-.938zm0 0M3.438 1.563h.937V2.5h-.938zm0 0M5 1.563h.938V2.5H5zm0 0M1.875 5.074v1.348l.988.637-.988.578V9.05l2.828-1.668v-.586zm0 0M5.34 7.559h1.027v1.226H5.34zm0 0M5.34 5.32h1.027v1.23H5.34zm0 0M6.8 8.785h2.356v1.137H6.801zm0 0"}))),"With ",Object(m.b)("inlineCode",{parentName:"h5"},"yarn"))),Object(m.b)("div",{parentName:"div",className:"admonition-content"},Object(m.b)("p",{parentName:"div"},"yarn add graphql"))),Object(m.b)("div",{className:"admonition admonition-shell"},Object(m.b)("div",{parentName:"div",className:"admonition-heading"},Object(m.b)("h5",{parentName:"div"},Object(m.b)("span",{parentName:"h5",className:"admonition-icon"},Object(m.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16pt",height:"16pt",viewBox:"0 0 16 16"},Object(m.b)("path",{parentName:"svg",d:"M0 0v16h16V0zm15.063 15.063H.937v-11h14.126zm0-11.938H.937V.937h14.126zm0 0"}),Object(m.b)("path",{parentName:"svg",d:"M1.875 1.563h.938V2.5h-.938zm0 0M3.438 1.563h.937V2.5h-.938zm0 0M5 1.563h.938V2.5H5zm0 0M1.875 5.074v1.348l.988.637-.988.578V9.05l2.828-1.668v-.586zm0 0M5.34 7.559h1.027v1.226H5.34zm0 0M5.34 5.32h1.027v1.23H5.34zm0 0M6.8 8.785h2.356v1.137H6.801zm0 0"}))),"With ",Object(m.b)("inlineCode",{parentName:"h5"},"npm"))),Object(m.b)("div",{parentName:"div",className:"admonition-content"},Object(m.b)("p",{parentName:"div"},"npm install --save graphql  "))),Object(m.b)("p",null,"Then we can install GraphQL Code Generator using ",Object(m.b)("inlineCode",{parentName:"p"},"yarn")," (or ",Object(m.b)("inlineCode",{parentName:"p"},"npm"),"):"),Object(m.b)("div",{className:"admonition admonition-shell"},Object(m.b)("div",{parentName:"div",className:"admonition-heading"},Object(m.b)("h5",{parentName:"div"},Object(m.b)("span",{parentName:"h5",className:"admonition-icon"},Object(m.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16pt",height:"16pt",viewBox:"0 0 16 16"},Object(m.b)("path",{parentName:"svg",d:"M0 0v16h16V0zm15.063 15.063H.937v-11h14.126zm0-11.938H.937V.937h14.126zm0 0"}),Object(m.b)("path",{parentName:"svg",d:"M1.875 1.563h.938V2.5h-.938zm0 0M3.438 1.563h.937V2.5h-.938zm0 0M5 1.563h.938V2.5H5zm0 0M1.875 5.074v1.348l.988.637-.988.578V9.05l2.828-1.668v-.586zm0 0M5.34 7.559h1.027v1.226H5.34zm0 0M5.34 5.32h1.027v1.23H5.34zm0 0M6.8 8.785h2.356v1.137H6.801zm0 0"}))),"With ",Object(m.b)("inlineCode",{parentName:"h5"},"yarn"))),Object(m.b)("div",{parentName:"div",className:"admonition-content"},Object(m.b)("p",{parentName:"div"},"yarn add -D @graphql-codegen/cli"))),Object(m.b)("div",{className:"admonition admonition-shell"},Object(m.b)("div",{parentName:"div",className:"admonition-heading"},Object(m.b)("h5",{parentName:"div"},Object(m.b)("span",{parentName:"h5",className:"admonition-icon"},Object(m.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16pt",height:"16pt",viewBox:"0 0 16 16"},Object(m.b)("path",{parentName:"svg",d:"M0 0v16h16V0zm15.063 15.063H.937v-11h14.126zm0-11.938H.937V.937h14.126zm0 0"}),Object(m.b)("path",{parentName:"svg",d:"M1.875 1.563h.938V2.5h-.938zm0 0M3.438 1.563h.937V2.5h-.938zm0 0M5 1.563h.938V2.5H5zm0 0M1.875 5.074v1.348l.988.637-.988.578V9.05l2.828-1.668v-.586zm0 0M5.34 7.559h1.027v1.226H5.34zm0 0M5.34 5.32h1.027v1.23H5.34zm0 0M6.8 8.785h2.356v1.137H6.801zm0 0"}))),"With ",Object(m.b)("inlineCode",{parentName:"h5"},"npm"))),Object(m.b)("div",{parentName:"div",className:"admonition-content"},Object(m.b)("p",{parentName:"div"},"npm install --save-dev @graphql-codegen/cli"))),Object(m.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(m.b)("div",{parentName:"div",className:"admonition-heading"},Object(m.b)("h5",{parentName:"div"},Object(m.b)("span",{parentName:"h5",className:"admonition-icon"},Object(m.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(m.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Global Installation")),Object(m.b)("div",{parentName:"div",className:"admonition-content"},Object(m.b)("p",{parentName:"div"},"Please avoid installing ",Object(m.b)("inlineCode",{parentName:"p"},"graphql"),", ",Object(m.b)("inlineCode",{parentName:"p"},"@graphql-codegen/cli")," and its plugins as global dependencies. This will cause issues because of duplications of the ",Object(m.b)("inlineCode",{parentName:"p"},"graphql")," package. Install it only locally in your project."))),Object(m.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(m.b)("div",{parentName:"div",className:"admonition-heading"},Object(m.b)("h5",{parentName:"div"},Object(m.b)("span",{parentName:"h5",className:"admonition-icon"},Object(m.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(m.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Monorepo")),Object(m.b)("div",{parentName:"div",className:"admonition-content"},Object(m.b)("p",{parentName:"div"},"If you are using Monorepo setup (Lerna/Yarn Workspaces/anything else), please note that GraphQL Codegen is using ",Object(m.b)("inlineCode",{parentName:"p"},"require")," to load plugins and file. This might break and fail in case of hoisting."),Object(m.b)("p",{parentName:"div"},"If you are having issues with loading GraphQL-Codegen plugins, make sure it's installed correctly, at the same level of ",Object(m.b)("inlineCode",{parentName:"p"},"node_modules"),", and make sure it's accessible and available for the Codegen CLI."))),Object(m.b)("h2",{id:"initialization-wizard"},"Initialization Wizard"),Object(m.b)("p",null,"After installing those dependencies, GraphQL Code Generator lets you set up everything by simply running the following command:"),Object(m.b)("div",{className:"admonition admonition-shell"},Object(m.b)("div",{parentName:"div",className:"admonition-heading"},Object(m.b)("h5",{parentName:"div"},Object(m.b)("span",{parentName:"h5",className:"admonition-icon"},Object(m.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16pt",height:"16pt",viewBox:"0 0 16 16"},Object(m.b)("path",{parentName:"svg",d:"M0 0v16h16V0zm15.063 15.063H.937v-11h14.126zm0-11.938H.937V.937h14.126zm0 0"}),Object(m.b)("path",{parentName:"svg",d:"M1.875 1.563h.938V2.5h-.938zm0 0M3.438 1.563h.937V2.5h-.938zm0 0M5 1.563h.938V2.5H5zm0 0M1.875 5.074v1.348l.988.637-.988.578V9.05l2.828-1.668v-.586zm0 0M5.34 7.559h1.027v1.226H5.34zm0 0M5.34 5.32h1.027v1.23H5.34zm0 0M6.8 8.785h2.356v1.137H6.801zm0 0"}))),"With ",Object(m.b)("inlineCode",{parentName:"h5"},"yarn"))),Object(m.b)("div",{parentName:"div",className:"admonition-content"},Object(m.b)("p",{parentName:"div"},"yarn graphql-codegen init"))),Object(m.b)("div",{className:"admonition admonition-shell"},Object(m.b)("div",{parentName:"div",className:"admonition-heading"},Object(m.b)("h5",{parentName:"div"},Object(m.b)("span",{parentName:"h5",className:"admonition-icon"},Object(m.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16pt",height:"16pt",viewBox:"0 0 16 16"},Object(m.b)("path",{parentName:"svg",d:"M0 0v16h16V0zm15.063 15.063H.937v-11h14.126zm0-11.938H.937V.937h14.126zm0 0"}),Object(m.b)("path",{parentName:"svg",d:"M1.875 1.563h.938V2.5h-.938zm0 0M3.438 1.563h.937V2.5h-.938zm0 0M5 1.563h.938V2.5H5zm0 0M1.875 5.074v1.348l.988.637-.988.578V9.05l2.828-1.668v-.586zm0 0M5.34 7.559h1.027v1.226H5.34zm0 0M5.34 5.32h1.027v1.23H5.34zm0 0M6.8 8.785h2.356v1.137H6.801zm0 0"}))),"With ",Object(m.b)("inlineCode",{parentName:"h5"},"npm"))),Object(m.b)("div",{parentName:"div",className:"admonition-content"},Object(m.b)("p",{parentName:"div"},"npx graphql-codegen init"))),Object(m.b)("p",null,"Question by question, it will guide you through the whole process of setting up a schema, selecting and installing plugins, picking a destination to where your files are generated, and a lot more."),Object(m.b)("p",null,"If you don't want to use the wizard, we've got you covered, just continue reading the next sections."),Object(m.b)("h2",{id:"setup"},"Setup"),Object(m.b)("p",null,"GraphQL Code Generator's behavior is bound into plugins, thus we will need to install one of them, for example:"),Object(m.b)("div",{className:"admonition admonition-shell"},Object(m.b)("div",{parentName:"div",className:"admonition-heading"},Object(m.b)("h5",{parentName:"div"},Object(m.b)("span",{parentName:"h5",className:"admonition-icon"},Object(m.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16pt",height:"16pt",viewBox:"0 0 16 16"},Object(m.b)("path",{parentName:"svg",d:"M0 0v16h16V0zm15.063 15.063H.937v-11h14.126zm0-11.938H.937V.937h14.126zm0 0"}),Object(m.b)("path",{parentName:"svg",d:"M1.875 1.563h.938V2.5h-.938zm0 0M3.438 1.563h.937V2.5h-.938zm0 0M5 1.563h.938V2.5H5zm0 0M1.875 5.074v1.348l.988.637-.988.578V9.05l2.828-1.668v-.586zm0 0M5.34 7.559h1.027v1.226H5.34zm0 0M5.34 5.32h1.027v1.23H5.34zm0 0M6.8 8.785h2.356v1.137H6.801zm0 0"}))),"With ",Object(m.b)("inlineCode",{parentName:"h5"},"yarn"))),Object(m.b)("div",{parentName:"div",className:"admonition-content"},Object(m.b)("p",{parentName:"div"},"yarn add -D @graphql-codegen/typescript"))),Object(m.b)("div",{className:"admonition admonition-shell"},Object(m.b)("div",{parentName:"div",className:"admonition-heading"},Object(m.b)("h5",{parentName:"div"},Object(m.b)("span",{parentName:"h5",className:"admonition-icon"},Object(m.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16pt",height:"16pt",viewBox:"0 0 16 16"},Object(m.b)("path",{parentName:"svg",d:"M0 0v16h16V0zm15.063 15.063H.937v-11h14.126zm0-11.938H.937V.937h14.126zm0 0"}),Object(m.b)("path",{parentName:"svg",d:"M1.875 1.563h.938V2.5h-.938zm0 0M3.438 1.563h.937V2.5h-.938zm0 0M5 1.563h.938V2.5H5zm0 0M1.875 5.074v1.348l.988.637-.988.578V9.05l2.828-1.668v-.586zm0 0M5.34 7.559h1.027v1.226H5.34zm0 0M5.34 5.32h1.027v1.23H5.34zm0 0M6.8 8.785h2.356v1.137H6.801zm0 0"}))),"With ",Object(m.b)("inlineCode",{parentName:"h5"},"npm"))),Object(m.b)("div",{parentName:"div",className:"admonition-content"},Object(m.b)("p",{parentName:"div"},"npm install --save-dev @graphql-codegen/typescript"))),Object(m.b)("p",null,"Although this can be used directly, it's recommended to add the code generation script to your ",Object(m.b)("inlineCode",{parentName:"p"},"package.json"),":"),Object(m.b)("pre",null,Object(m.b)("code",{parentName:"pre",className:"language-json"},'{\n  "scripts": {\n    "generate": "graphql-codegen"\n  }\n}\n')),Object(m.b)("p",null,"This will simplify its usage, and you'll be able to run the codegen with the following command:"),Object(m.b)("div",{className:"admonition admonition-shell"},Object(m.b)("div",{parentName:"div",className:"admonition-heading"},Object(m.b)("h5",{parentName:"div"},Object(m.b)("span",{parentName:"h5",className:"admonition-icon"},Object(m.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16pt",height:"16pt",viewBox:"0 0 16 16"},Object(m.b)("path",{parentName:"svg",d:"M0 0v16h16V0zm15.063 15.063H.937v-11h14.126zm0-11.938H.937V.937h14.126zm0 0"}),Object(m.b)("path",{parentName:"svg",d:"M1.875 1.563h.938V2.5h-.938zm0 0M3.438 1.563h.937V2.5h-.938zm0 0M5 1.563h.938V2.5H5zm0 0M1.875 5.074v1.348l.988.637-.988.578V9.05l2.828-1.668v-.586zm0 0M5.34 7.559h1.027v1.226H5.34zm0 0M5.34 5.32h1.027v1.23H5.34zm0 0M6.8 8.785h2.356v1.137H6.801zm0 0"}))),"With ",Object(m.b)("inlineCode",{parentName:"h5"},"yarn"))),Object(m.b)("div",{parentName:"div",className:"admonition-content"},Object(m.b)("p",{parentName:"div"},"yarn generate"))),Object(m.b)("div",{className:"admonition admonition-shell"},Object(m.b)("div",{parentName:"div",className:"admonition-heading"},Object(m.b)("h5",{parentName:"div"},Object(m.b)("span",{parentName:"h5",className:"admonition-icon"},Object(m.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16pt",height:"16pt",viewBox:"0 0 16 16"},Object(m.b)("path",{parentName:"svg",d:"M0 0v16h16V0zm15.063 15.063H.937v-11h14.126zm0-11.938H.937V.937h14.126zm0 0"}),Object(m.b)("path",{parentName:"svg",d:"M1.875 1.563h.938V2.5h-.938zm0 0M3.438 1.563h.937V2.5h-.938zm0 0M5 1.563h.938V2.5H5zm0 0M1.875 5.074v1.348l.988.637-.988.578V9.05l2.828-1.668v-.586zm0 0M5.34 7.559h1.027v1.226H5.34zm0 0M5.34 5.32h1.027v1.23H5.34zm0 0M6.8 8.785h2.356v1.137H6.801zm0 0"}))),"With ",Object(m.b)("inlineCode",{parentName:"h5"},"npm"))),Object(m.b)("div",{parentName:"div",className:"admonition-content"},Object(m.b)("p",{parentName:"div"},"npm run generate"))),Object(m.b)("p",null,"GraphQL Code Generator looks for ",Object(m.b)("inlineCode",{parentName:"p"},"codegen.yml")," and ",Object(m.b)("inlineCode",{parentName:"p"},"codegen.json")," files by default. An example can be seen below:"),Object(m.b)("pre",null,Object(m.b)("code",{parentName:"pre",className:"language-yaml"},"schema: http://localhost:3000/graphql\ngenerates:\n  ./src/types.d.ts:\n    plugins:\n      - typescript\n")),Object(m.b)("h2",{id:"running-the-codegen"},"Running the codegen"),Object(m.b)("p",null,"By running the following command, the GraphQL schema will be fetched from the route endpoint and the typescript definitions will be generated in the specified destination:"),Object(m.b)("div",{className:"admonition admonition-shell"},Object(m.b)("div",{parentName:"div",className:"admonition-heading"},Object(m.b)("h5",{parentName:"div"},Object(m.b)("span",{parentName:"h5",className:"admonition-icon"},Object(m.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16pt",height:"16pt",viewBox:"0 0 16 16"},Object(m.b)("path",{parentName:"svg",d:"M0 0v16h16V0zm15.063 15.063H.937v-11h14.126zm0-11.938H.937V.937h14.126zm0 0"}),Object(m.b)("path",{parentName:"svg",d:"M1.875 1.563h.938V2.5h-.938zm0 0M3.438 1.563h.937V2.5h-.938zm0 0M5 1.563h.938V2.5H5zm0 0M1.875 5.074v1.348l.988.637-.988.578V9.05l2.828-1.668v-.586zm0 0M5.34 7.559h1.027v1.226H5.34zm0 0M5.34 5.32h1.027v1.23H5.34zm0 0M6.8 8.785h2.356v1.137H6.801zm0 0"}))),"With ",Object(m.b)("inlineCode",{parentName:"h5"},"yarn"))),Object(m.b)("div",{parentName:"div",className:"admonition-content"},Object(m.b)("p",{parentName:"div"},"yarn generate"))),Object(m.b)("div",{className:"admonition admonition-shell"},Object(m.b)("div",{parentName:"div",className:"admonition-heading"},Object(m.b)("h5",{parentName:"div"},Object(m.b)("span",{parentName:"h5",className:"admonition-icon"},Object(m.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16pt",height:"16pt",viewBox:"0 0 16 16"},Object(m.b)("path",{parentName:"svg",d:"M0 0v16h16V0zm15.063 15.063H.937v-11h14.126zm0-11.938H.937V.937h14.126zm0 0"}),Object(m.b)("path",{parentName:"svg",d:"M1.875 1.563h.938V2.5h-.938zm0 0M3.438 1.563h.937V2.5h-.938zm0 0M5 1.563h.938V2.5H5zm0 0M1.875 5.074v1.348l.988.637-.988.578V9.05l2.828-1.668v-.586zm0 0M5.34 7.559h1.027v1.226H5.34zm0 0M5.34 5.32h1.027v1.23H5.34zm0 0M6.8 8.785h2.356v1.137H6.801zm0 0"}))),"With ",Object(m.b)("inlineCode",{parentName:"h5"},"npm"))),Object(m.b)("div",{parentName:"div",className:"admonition-content"},Object(m.b)("p",{parentName:"div"},"npm run generate"))))}d.isMDXComponent=!0},384:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return l}));var a=n(0),i=n.n(a);function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){m(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},m=Object.keys(e);for(a=0;a<m.length;a++)n=m[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(e);for(a=0;a<m.length;a++)n=m[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),d=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=d(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,m=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=d(n),b=a,l=p["".concat(o,".").concat(b)]||p[b]||h[b]||m;return n?i.a.createElement(l,r(r({ref:t},s),{},{components:n})):i.a.createElement(l,r({ref:t},s))}));function l(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var m=n.length,o=new Array(m);o[0]=b;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r.mdxType="string"==typeof e?e:a,o[1]=r;for(var s=2;s<m;s++)o[s]=n[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);