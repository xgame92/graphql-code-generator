(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{287:function(e,a,n){"use strict";n.r(a),n.d(a,"frontMatter",(function(){return l})),n.d(a,"metadata",(function(){return p})),n.d(a,"toc",(function(){return c})),n.d(a,"default",(function(){return s}));var t=n(5),r=n(12),i=(n(0),n(384)),l={},p={unversionedId:"generated-config/java",id:"generated-config/java",isDocsHomePage:!1,title:"java",description:"Installation",source:"@site/docs/generated-config/java.md",slug:"/generated-config/java",permalink:"/docs/generated-config/java",editUrl:"https://github.com/dotansimha/graphql-code-generator/edit/master/website/docs/generated-config/java.md",version:"current"},c=[{value:"Installation",id:"installation",children:[]},{value:"API Reference",id:"api-reference",children:[{value:"<code>package</code>",id:"package",children:[]},{value:"<code>mappers</code>",id:"mappers",children:[]},{value:"<code>defaultMapper</code>",id:"defaultmapper",children:[]},{value:"<code>className</code>",id:"classname",children:[]},{value:"<code>listType</code>",id:"listtype",children:[]},{value:"<code>strictScalars</code>",id:"strictscalars",children:[]},{value:"<code>defaultScalarType</code>",id:"defaultscalartype",children:[]},{value:"<code>scalars</code>",id:"scalars",children:[]},{value:"<code>namingConvention</code>",id:"namingconvention",children:[]},{value:"<code>typesPrefix</code>",id:"typesprefix",children:[]},{value:"<code>typesSuffix</code>",id:"typessuffix",children:[]},{value:"<code>skipTypename</code>",id:"skiptypename",children:[]},{value:"<code>nonOptionalTypename</code>",id:"nonoptionaltypename",children:[]},{value:"<code>useTypeImports</code>",id:"usetypeimports",children:[]}]}],o={toc:c};function s(e){var a=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(t.a)({},o,n,{components:a,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"installation"},"Installation"),Object(i.b)("img",{alt:"java plugin version",src:"https://img.shields.io/npm/v/@graphql-codegen/java?color=%23e15799&label=plugin\xa0version&style=for-the-badge"}),Object(i.b)("div",{className:"admonition admonition-shell"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16pt",height:"16pt",viewBox:"0 0 16 16"},Object(i.b)("path",{parentName:"svg",d:"M0 0v16h16V0zm15.063 15.063H.937v-11h14.126zm0-11.938H.937V.937h14.126zm0 0"}),Object(i.b)("path",{parentName:"svg",d:"M1.875 1.563h.938V2.5h-.938zm0 0M3.438 1.563h.937V2.5h-.938zm0 0M5 1.563h.938V2.5H5zm0 0M1.875 5.074v1.348l.988.637-.988.578V9.05l2.828-1.668v-.586zm0 0M5.34 7.559h1.027v1.226H5.34zm0 0M5.34 5.32h1.027v1.23H5.34zm0 0M6.8 8.785h2.356v1.137H6.801zm0 0"}))),"Using ",Object(i.b)("inlineCode",{parentName:"h5"},"yarn"))),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("pre",{parentName:"div"},Object(i.b)("code",{parentName:"pre"},"yarn add -D @graphql-codegen/java\n")))),Object(i.b)("h2",{id:"api-reference"},"API Reference"),Object(i.b)("h3",{id:"package"},Object(i.b)("inlineCode",{parentName:"h3"},"package")),Object(i.b)("p",null,"type: ",Object(i.b)("inlineCode",{parentName:"p"},"string")),Object(i.b)("p",null,"Customize the Java package name. The default package name will be generated according to the output file path."),Object(i.b)("h4",{id:"usage-examples"},"Usage Examples"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yml"},"generates:\n  src/main/java/my-org/my-app/Resolvers.java:\n    plugins:\n      - java-resolvers\n    config:\n      package: custom.package.name\n")),Object(i.b)("h3",{id:"mappers"},Object(i.b)("inlineCode",{parentName:"h3"},"mappers")),Object(i.b)("p",null,"type: ",Object(i.b)("inlineCode",{parentName:"p"},"object")),Object(i.b)("p",null,"Allow you to replace specific GraphQL types with your custom model classes. This is useful when you want to make sure your resolvers returns the correct class.\nThe default value is the values set by ",Object(i.b)("inlineCode",{parentName:"p"},"defaultMapper")," configuration.\nYou can use a direct path to the package, or use ",Object(i.b)("inlineCode",{parentName:"p"},"package#class")," syntax to have it imported."),Object(i.b)("h4",{id:"usage-examples-1"},"Usage Examples"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yml"},"generates:\n  src/main/java/my-org/my-app/Resolvers.java:\n    plugins:\n      - java-resolvers\n    config:\n      mappers:\n        User: com.app.models#UserObject\n")),Object(i.b)("h3",{id:"defaultmapper"},Object(i.b)("inlineCode",{parentName:"h3"},"defaultMapper")),Object(i.b)("p",null,"type: ",Object(i.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",Object(i.b)("inlineCode",{parentName:"p"},"Object")),Object(i.b)("p",null,"Sets the default mapper value in case it's not specified by ",Object(i.b)("inlineCode",{parentName:"p"},"mappers"),".\nYou can use a direct path to the package, or use ",Object(i.b)("inlineCode",{parentName:"p"},"package#class")," syntax to have it imported.\nThe default mapper is Java's ",Object(i.b)("inlineCode",{parentName:"p"},"Object"),"."),Object(i.b)("h4",{id:"usage-examples-2"},"Usage Examples"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yml"},"generates:\n  src/main/java/my-org/my-app/Resolvers.java:\n    plugins:\n      - java-resolvers\n    config:\n      defaultMapper: my.app.models.BaseEntity\n")),Object(i.b)("h3",{id:"classname"},Object(i.b)("inlineCode",{parentName:"h3"},"className")),Object(i.b)("p",null,"type: ",Object(i.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",Object(i.b)("inlineCode",{parentName:"p"},"Resolvers")),Object(i.b)("p",null,"Allow you to customize the parent class name."),Object(i.b)("h4",{id:"usage-examples-3"},"Usage Examples"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yml"},"generates:\n  src/main/java/my-org/my-app/Resolvers.java:\n    plugins:\n      - java-resolvers\n    config:\n      className: MyResolvers\n")),Object(i.b)("h3",{id:"listtype"},Object(i.b)("inlineCode",{parentName:"h3"},"listType")),Object(i.b)("p",null,"type: ",Object(i.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",Object(i.b)("inlineCode",{parentName:"p"},"Iterable")),Object(i.b)("p",null,"Allow you to customize the list type."),Object(i.b)("h4",{id:"usage-examples-4"},"Usage Examples"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yml"},"generates:\n  src/main/java/my-org/my-app/Resolvers.java:\n    plugins:\n      - java-resolvers\n    config:\n      listType: Map\n")),Object(i.b)("h3",{id:"strictscalars"},Object(i.b)("inlineCode",{parentName:"h3"},"strictScalars")),Object(i.b)("p",null,"type: ",Object(i.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(i.b)("inlineCode",{parentName:"p"},"false")),Object(i.b)("p",null,"Makes scalars strict."),Object(i.b)("p",null,"If scalars are found in the schema that are not defined in ",Object(i.b)("inlineCode",{parentName:"p"},"scalars"),"\nan error will be thrown during codegen."),Object(i.b)("h4",{id:"usage-examples-5"},"Usage Examples"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yml"},"config:\n  strictScalars: true\n")),Object(i.b)("h3",{id:"defaultscalartype"},Object(i.b)("inlineCode",{parentName:"h3"},"defaultScalarType")),Object(i.b)("p",null,"type: ",Object(i.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",Object(i.b)("inlineCode",{parentName:"p"},"any")),Object(i.b)("p",null,"Allows you to override the type that unknown scalars will have."),Object(i.b)("h4",{id:"usage-examples-6"},"Usage Examples"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yml"},"config:\n  defaultScalarType: unknown\n")),Object(i.b)("h3",{id:"scalars"},Object(i.b)("inlineCode",{parentName:"h3"},"scalars")),Object(i.b)("p",null,"type: ",Object(i.b)("inlineCode",{parentName:"p"},"ScalarsMap")),Object(i.b)("p",null,"Extends or overrides the built-in scalars and custom GraphQL scalars to a custom type."),Object(i.b)("h3",{id:"namingconvention"},Object(i.b)("inlineCode",{parentName:"h3"},"namingConvention")),Object(i.b)("p",null,"type: ",Object(i.b)("inlineCode",{parentName:"p"},"NamingConvention"),"\ndefault: ",Object(i.b)("inlineCode",{parentName:"p"},"change-case-all#pascalCase")),Object(i.b)("p",null,"Allow you to override the naming convention of the output.\nYou can either override all namings, or specify an object with specific custom naming convention per output.\nThe format of the converter must be a valid ",Object(i.b)("inlineCode",{parentName:"p"},"module#method"),".\nAllowed values for specific output are: ",Object(i.b)("inlineCode",{parentName:"p"},"typeNames"),", ",Object(i.b)("inlineCode",{parentName:"p"},"enumValues"),'.\nYou can also use "keep" to keep all GraphQL names as-is.\nAdditionally you can set ',Object(i.b)("inlineCode",{parentName:"p"},"transformUnderscore")," to ",Object(i.b)("inlineCode",{parentName:"p"},"true")," if you want to override the default behavior,\nwhich is to preserves underscores."),Object(i.b)("p",null,"Available case functions in ",Object(i.b)("inlineCode",{parentName:"p"},"change-case-all")," are ",Object(i.b)("inlineCode",{parentName:"p"},"camelCase"),", ",Object(i.b)("inlineCode",{parentName:"p"},"capitalCase"),", ",Object(i.b)("inlineCode",{parentName:"p"},"constantCase"),", ",Object(i.b)("inlineCode",{parentName:"p"},"dotCase"),", ",Object(i.b)("inlineCode",{parentName:"p"},"headerCase"),", ",Object(i.b)("inlineCode",{parentName:"p"},"noCase"),", ",Object(i.b)("inlineCode",{parentName:"p"},"paramCase"),", ",Object(i.b)("inlineCode",{parentName:"p"},"pascalCase"),", ",Object(i.b)("inlineCode",{parentName:"p"},"pathCase"),", ",Object(i.b)("inlineCode",{parentName:"p"},"sentenceCase"),", ",Object(i.b)("inlineCode",{parentName:"p"},"snakeCase"),", ",Object(i.b)("inlineCode",{parentName:"p"},"lowerCase"),", ",Object(i.b)("inlineCode",{parentName:"p"},"localeLowerCase"),", ",Object(i.b)("inlineCode",{parentName:"p"},"lowerCaseFirst"),", ",Object(i.b)("inlineCode",{parentName:"p"},"spongeCase"),", ",Object(i.b)("inlineCode",{parentName:"p"},"titleCase"),", ",Object(i.b)("inlineCode",{parentName:"p"},"upperCase"),", ",Object(i.b)("inlineCode",{parentName:"p"},"localeUpperCase")," and ",Object(i.b)("inlineCode",{parentName:"p"},"upperCaseFirst"),"\n",Object(i.b)("a",{parentName:"p",href:"https://github.com/btxtiger/change-case-all"},"See more")),Object(i.b)("h3",{id:"typesprefix"},Object(i.b)("inlineCode",{parentName:"h3"},"typesPrefix")),Object(i.b)("p",null,"type: ",Object(i.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ``"),Object(i.b)("p",null,"Prefixes all the generated types."),Object(i.b)("h4",{id:"usage-examples-7"},"Usage Examples"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yml"},"config:\n  typesPrefix: I\n")),Object(i.b)("h3",{id:"typessuffix"},Object(i.b)("inlineCode",{parentName:"h3"},"typesSuffix")),Object(i.b)("p",null,"type: ",Object(i.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ``"),Object(i.b)("p",null,"Suffixes all the generated types."),Object(i.b)("h4",{id:"usage-examples-8"},"Usage Examples"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yml"},"config:\n  typesSuffix: I\n")),Object(i.b)("h3",{id:"skiptypename"},Object(i.b)("inlineCode",{parentName:"h3"},"skipTypename")),Object(i.b)("p",null,"type: ",Object(i.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(i.b)("inlineCode",{parentName:"p"},"false")),Object(i.b)("p",null,"Does not add __typename to the generated types, unless it was specified in the selection set."),Object(i.b)("h4",{id:"usage-examples-9"},"Usage Examples"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yml"},"config:\n  skipTypename: true\n")),Object(i.b)("h3",{id:"nonoptionaltypename"},Object(i.b)("inlineCode",{parentName:"h3"},"nonOptionalTypename")),Object(i.b)("p",null,"type: ",Object(i.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(i.b)("inlineCode",{parentName:"p"},"false")),Object(i.b)("p",null,"Automatically adds ",Object(i.b)("inlineCode",{parentName:"p"},"__typename")," field to the generated types, even when they are not specified\nin the selection set, and makes it non-optional"),Object(i.b)("h4",{id:"usage-examples-10"},"Usage Examples"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yml"},"config:\n  nonOptionalTypename: true\n")),Object(i.b)("h3",{id:"usetypeimports"},Object(i.b)("inlineCode",{parentName:"h3"},"useTypeImports")),Object(i.b)("p",null,"type: ",Object(i.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(i.b)("inlineCode",{parentName:"p"},"false")),Object(i.b)("p",null,"Will use ",Object(i.b)("inlineCode",{parentName:"p"},"import type {}")," rather than ",Object(i.b)("inlineCode",{parentName:"p"},"import {}"),' when importing only types. This gives\ncompatibility with TypeScript\'s "importsNotUsedAsValues": "error" option'))}s.isMDXComponent=!0},384:function(e,a,n){"use strict";n.d(a,"a",(function(){return b})),n.d(a,"b",(function(){return u}));var t=n(0),r=n.n(t);function i(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function l(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function p(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?l(Object(n),!0).forEach((function(a){i(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function c(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),s=function(e){var a=r.a.useContext(o),n=a;return e&&(n="function"==typeof e?e(a):p(p({},a),e)),n},b=function(e){var a=s(e.components);return r.a.createElement(o.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},m=r.a.forwardRef((function(e,a){var n=e.components,t=e.mdxType,i=e.originalType,l=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),b=s(n),m=t,u=b["".concat(l,".").concat(m)]||b[m]||d[m]||i;return n?r.a.createElement(u,p(p({ref:a},o),{},{components:n})):r.a.createElement(u,p({ref:a},o))}));function u(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var i=n.length,l=new Array(i);l[0]=m;var p={};for(var c in a)hasOwnProperty.call(a,c)&&(p[c]=a[c]);p.originalType=e,p.mdxType="string"==typeof e?e:t,l[1]=p;for(var o=2;o<i;o++)l[o]=n[o];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);