(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{273:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return c}));var a=n(5),p=n(12),r=(n(0),n(384)),i={id:"typescript",title:"TypeScript"},b={unversionedId:"plugins/typescript",id:"plugins/typescript",isDocsHomePage:!1,title:"TypeScript",description:"{@import ../generated-config/typescript.md}",source:"@site/docs/plugins/typescript.md",slug:"/plugins/typescript",permalink:"/docs/plugins/typescript",editUrl:"https://github.com/dotansimha/graphql-code-generator/edit/master/website/docs/plugins/typescript.md",version:"current",sidebar:"sidebar",previous:{title:"All Plugins",permalink:"/docs/plugins/index"},next:{title:"TypeScript Operations",permalink:"/docs/plugins/typescript-operations"}},o=[],l={toc:o};function c(e){var t=e.components,n=Object(p.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("p",{parentName:"p"},"This plugin generates the base TypeScript types, based on your GraphQL schema."),Object(r.b)("p",{parentName:"p"},"The types generated by this plugin are simple, and refers to the exact structure of your schema, and it's used as the base types for other plugins (such as ",Object(r.b)("inlineCode",{parentName:"p"},"typescript-operations")," / ",Object(r.b)("inlineCode",{parentName:"p"},"typescript-resolvers"),")"),Object(r.b)("h2",{parentName:"p"},"Installation"),Object(r.b)("img",{alt:"typescript plugin version",src:"https://img.shields.io/npm/v/@graphql-codegen/typescript?color=%23e15799&label=plugin\xa0version&style=for-the-badge"}),Object(r.b)("div",{parentName:"p",className:"admonition admonition-shell"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16pt",height:"16pt",viewBox:"0 0 16 16"},Object(r.b)("path",{parentName:"svg",d:"M0 0v16h16V0zm15.063 15.063H.937v-11h14.126zm0-11.938H.937V.937h14.126zm0 0"}),Object(r.b)("path",{parentName:"svg",d:"M1.875 1.563h.938V2.5h-.938zm0 0M3.438 1.563h.937V2.5h-.938zm0 0M5 1.563h.938V2.5H5zm0 0M1.875 5.074v1.348l.988.637-.988.578V9.05l2.828-1.668v-.586zm0 0M5.34 7.559h1.027v1.226H5.34zm0 0M5.34 5.32h1.027v1.23H5.34zm0 0M6.8 8.785h2.356v1.137H6.801zm0 0"}))),"Using ",Object(r.b)("inlineCode",{parentName:"h5"},"yarn"))),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("pre",{parentName:"div"},Object(r.b)("code",{parentName:"pre"},"yarn add -D @graphql-codegen/typescript\n")))),Object(r.b)("h2",{parentName:"p"},"API Reference"),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"avoidOptionals")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"AvoidOptionalsConfig | boolean"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},"false")),Object(r.b)("p",{parentName:"p"},"This will cause the generator to avoid using TypeScript optionals (",Object(r.b)("inlineCode",{parentName:"p"},"?"),") on types,\nso the following definition: ",Object(r.b)("inlineCode",{parentName:"p"},"type A { myField: String }")," will output ",Object(r.b)("inlineCode",{parentName:"p"},"myField: Maybe<string>"),"\ninstead of ",Object(r.b)("inlineCode",{parentName:"p"},"myField?: Maybe<string>"),"."),Object(r.b)("h4",{parentName:"p"},"Usage Examples"),Object(r.b)("h5",{parentName:"p"},"Override all definition types"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",{parentName:"pre",className:"language-yml"},"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n config:\n   avoidOptionals: true\n")),Object(r.b)("h5",{parentName:"p"},"Override only specific definition types"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",{parentName:"pre",className:"language-yml"},"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n config:\n   avoidOptionals:\n     field: true\n     inputValue: true\n     object: true\n     defaultValue: true\n")),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"constEnums")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},"false")),Object(r.b)("p",{parentName:"p"},"Will prefix every generated ",Object(r.b)("inlineCode",{parentName:"p"},"enum")," with ",Object(r.b)("inlineCode",{parentName:"p"},"const"),", you can read more about const enums here: ",Object(r.b)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/enums.html"},"https://www.typescriptlang.org/docs/handbook/enums.html"),"."),Object(r.b)("h4",{parentName:"p"},"Usage Examples"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",{parentName:"pre",className:"language-yml"},"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n config:\n   constEnums: true\n")),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"enumsAsTypes")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},"false")),Object(r.b)("p",{parentName:"p"},"Generates enum as TypeScript ",Object(r.b)("inlineCode",{parentName:"p"},"type")," instead of ",Object(r.b)("inlineCode",{parentName:"p"},"enum"),". Useful it you wish to generate ",Object(r.b)("inlineCode",{parentName:"p"},".d.ts")," declaration file instead of ",Object(r.b)("inlineCode",{parentName:"p"},".ts")),Object(r.b)("h4",{parentName:"p"},"Usage Examples"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",{parentName:"pre",className:"language-yml"},"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n config:\n   enumsAsTypes: true\n")),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"numericEnums")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},"false")),Object(r.b)("p",{parentName:"p"},"Controls whether to preserve typescript enum values as numbers"),Object(r.b)("h4",{parentName:"p"},"Usage Examples"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",{parentName:"pre",className:"language-yml"},"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n config:\n   numericEnums: true\n")),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"futureProofEnums")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},"false")),Object(r.b)("p",{parentName:"p"},"This option controls whether or not a catch-all entry is added to enum type definitions for values that may be added in the future. You also have to set ",Object(r.b)("inlineCode",{parentName:"p"},"enumsAsTypes")," to true if you wish to use this option.\nThis is useful if you are using ",Object(r.b)("inlineCode",{parentName:"p"},"relay"),"."),Object(r.b)("h4",{parentName:"p"},"Usage Examples"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",{parentName:"pre",className:"language-yml"},"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n config:\n   enumsAsTypes: true\n   futureProofEnums: true\n")),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"futureProofUnions")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},"false")),Object(r.b)("p",{parentName:"p"},"This option controls whether or not a catch-all entry is added to union type definitions for values that may be added in the future.\nThis is useful if you are using ",Object(r.b)("inlineCode",{parentName:"p"},"relay"),"."),Object(r.b)("h4",{parentName:"p"},"Usage Examples"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",{parentName:"pre",className:"language-yml"},"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n config:\n   futureProofUnions: true\n")),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"enumsAsConst")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},"false")),Object(r.b)("p",{parentName:"p"},"Generates enum as TypeScript ",Object(r.b)("inlineCode",{parentName:"p"},"const assertions")," instead of ",Object(r.b)("inlineCode",{parentName:"p"},"enum"),". This can even be used to enable enum-like patterns in plain JavaScript code if you choose not to use TypeScript\u2019s enum construct."),Object(r.b)("h4",{parentName:"p"},"Usage Examples"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",{parentName:"pre",className:"language-yml"},"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n config:\n   enumsAsConst: true\n")),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"onlyOperationTypes")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},"false")),Object(r.b)("p",{parentName:"p"},"This will cause the generator to emit types for operations only (basically only enums and scalars).\nInteracts well with ",Object(r.b)("inlineCode",{parentName:"p"},"preResolveTypes: true")),Object(r.b)("h4",{parentName:"p"},"Usage Examples"),Object(r.b)("p",{parentName:"p"},"Override all definition types"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",{parentName:"pre",className:"language-yml"},"generates:\npath/to/file.ts:\nplugins:\n- typescript\nconfig:\nonlyOperationTypes: true\n")),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"immutableTypes")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},"false")),Object(r.b)("p",{parentName:"p"},"Generates immutable types by adding ",Object(r.b)("inlineCode",{parentName:"p"},"readonly")," to properties and uses ",Object(r.b)("inlineCode",{parentName:"p"},"ReadonlyArray"),"."),Object(r.b)("h4",{parentName:"p"},"Usage Examples"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",{parentName:"pre",className:"language-yml"},"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n config:\n   immutableTypes: true\n")),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"maybeValue")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},"T | null")),Object(r.b)("p",{parentName:"p"},"Allow to override the type value of ",Object(r.b)("inlineCode",{parentName:"p"},"Maybe"),"."),Object(r.b)("h4",{parentName:"p"},"Usage Examples"),Object(r.b)("h5",{parentName:"p"},"Allow undefined"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",{parentName:"pre",className:"language-yml"},"generates:\n path/to/file.ts:\n   plugins:\n     - typescript\n   config:\n     maybeValue: T | null | undefined\n")),Object(r.b)("h5",{parentName:"p"},"Allow ",Object(r.b)("inlineCode",{parentName:"h5"},"null")," in resolvers:"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",{parentName:"pre",className:"language-yml"},"generates:\n path/to/file.ts:\n   plugins:\n     - typescript\n     - typescript-resolvers\n   config:\n     maybeValue: 'T extends PromiseLike<infer U> ? Promise<U | null> : T | null'\n")),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"noExport")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},"false")),Object(r.b)("p",{parentName:"p"},"Set to ",Object(r.b)("inlineCode",{parentName:"p"},"true")," in order to generate output without ",Object(r.b)("inlineCode",{parentName:"p"},"export")," modifier.\nThis is useful if you are generating ",Object(r.b)("inlineCode",{parentName:"p"},".d.ts")," file and want it to be globally available."),Object(r.b)("h4",{parentName:"p"},"Usage Examples"),Object(r.b)("h5",{parentName:"p"},"Disable all export from a file"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",{parentName:"pre",className:"language-yml"},"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n config:\n   noExport: true\n")),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"disableDescriptions")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},"false")),Object(r.b)("p",{parentName:"p"},"Set the value to ",Object(r.b)("inlineCode",{parentName:"p"},"true")," in order to disable all description generation."),Object(r.b)("h4",{parentName:"p"},"Usage Examples"),Object(r.b)("h5",{parentName:"p"},"Disable description generation"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",{parentName:"pre",className:"language-yml"},"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n config:\n   disableDescriptions: true\n")),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"useImplementingTypes")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},"false")),Object(r.b)("p",{parentName:"p"},"When a GraphQL interface is used for a field, this flag will use the implementing types, instead of the interface itself."),Object(r.b)("h4",{parentName:"p"},"Usage Examples"),Object(r.b)("h5",{parentName:"p"},"Override all definition types"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",{parentName:"pre",className:"language-yml"},"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n config:\n   useImplementingTypes: true\n")),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"wrapEntireFieldDefinitions")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},"true")),Object(r.b)("p",{parentName:"p"},"Set the to ",Object(r.b)("inlineCode",{parentName:"p"},"true")," in order to wrap field definitions with ",Object(r.b)("inlineCode",{parentName:"p"},"EntireFieldWrapper"),".\nThis is useful to allow return types such as Promises and functions for fields.\nDiffers from ",Object(r.b)("inlineCode",{parentName:"p"},"wrapFieldDefinitions")," in that this wraps the entire field definition if ie. the field is an Array, while\n",Object(r.b)("inlineCode",{parentName:"p"},"wrapFieldDefinitions")," will wrap every single value inside the array."),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"entireFieldWrapperValue")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"string")),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"addUnderscoreToArgsType")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"boolean")),Object(r.b)("p",{parentName:"p"},"Adds ",Object(r.b)("inlineCode",{parentName:"p"},"_")," to generated ",Object(r.b)("inlineCode",{parentName:"p"},"Args")," types in order to avoid duplicate identifiers."),Object(r.b)("h4",{parentName:"p"},"Usage Examples"),Object(r.b)("h5",{parentName:"p"},"With Custom Values"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",{parentName:"pre",className:"language-yml"},"  config:\n    addUnderscoreToArgsType: true\n")),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"enumValues")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"EnumValuesMap")),Object(r.b)("p",{parentName:"p"},"Overrides the default value of enum values declared in your GraphQL schema.\nYou can also map the entire enum to an external type by providing a string that of ",Object(r.b)("inlineCode",{parentName:"p"},"module#type"),"."),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"declarationKind")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"DeclarationKindConfig | string (values: abstract class, class, interface, type)")),Object(r.b)("p",{parentName:"p"},"Overrides the default output for various GraphQL elements."),Object(r.b)("h4",{parentName:"p"},"Usage Examples"),Object(r.b)("h5",{parentName:"p"},"Override all declarations"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",{parentName:"pre",className:"language-yml"},"  config:\n    declarationKind: 'interface'\n")),Object(r.b)("h5",{parentName:"p"},"Override only specific declarations"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",{parentName:"pre",className:"language-yml"},"  config:\n    declarationKind:\n      type: 'interface'\n      input: 'interface'\n")),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"enumPrefix")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},"true")),Object(r.b)("p",{parentName:"p"},"Allow you to disable prefixing for generated enums, works in combination with ",Object(r.b)("inlineCode",{parentName:"p"},"typesPrefix"),"."),Object(r.b)("h4",{parentName:"p"},"Usage Examples"),Object(r.b)("h5",{parentName:"p"},"Disable enum prefixes"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",{parentName:"pre",className:"language-yml"},"  config:\n    typesPrefix: I\n    enumPrefix: false\n")),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"fieldWrapperValue")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},"T")),Object(r.b)("p",{parentName:"p"},"Allow you to add wrapper for field type, use T as the generic value. Make sure to set ",Object(r.b)("inlineCode",{parentName:"p"},"wrapFieldDefinitions")," to ",Object(r.b)("inlineCode",{parentName:"p"},"true")," in order to make this flag work."),Object(r.b)("h4",{parentName:"p"},"Usage Examples"),Object(r.b)("h5",{parentName:"p"},"Allow Promise"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",{parentName:"pre",className:"language-yml"},"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n config:\n   wrapFieldDefinitions: true\n   fieldWrapperValue: T | Promise<T>\n")),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"wrapFieldDefinitions")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},"false")),Object(r.b)("p",{parentName:"p"},"Set the to ",Object(r.b)("inlineCode",{parentName:"p"},"true")," in order to wrap field definitions with ",Object(r.b)("inlineCode",{parentName:"p"},"FieldWrapper"),".\nThis is useful to allow return types such as Promises and functions."),Object(r.b)("h4",{parentName:"p"},"Usage Examples"),Object(r.b)("h5",{parentName:"p"},"Enable wrapping fields"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",{parentName:"pre",className:"language-yml"},"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n config:\n   wrapFieldDefinitions: true\n")),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"ignoreEnumValuesFromSchema")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},"false")),Object(r.b)("p",{parentName:"p"},"This will cause the generator to ignore enum values defined in GraphQLSchema"),Object(r.b)("h4",{parentName:"p"},"Usage Examples"),Object(r.b)("h5",{parentName:"p"},"Ignore enum values from schema"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",{parentName:"pre",className:"language-yml"},"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n config:\n   ignoreEnumValuesFromSchema: true\n")),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"strictScalars")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},"false")),Object(r.b)("p",{parentName:"p"},"Makes scalars strict."),Object(r.b)("p",{parentName:"p"},"If scalars are found in the schema that are not defined in ",Object(r.b)("inlineCode",{parentName:"p"},"scalars"),"\nan error will be thrown during codegen."),Object(r.b)("h4",{parentName:"p"},"Usage Examples"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",{parentName:"pre",className:"language-yml"},"config:\n  strictScalars: true\n")),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"defaultScalarType")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},"any")),Object(r.b)("p",{parentName:"p"},"Allows you to override the type that unknown scalars will have."),Object(r.b)("h4",{parentName:"p"},"Usage Examples"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",{parentName:"pre",className:"language-yml"},"config:\n  defaultScalarType: unknown\n")),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"scalars")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"ScalarsMap")),Object(r.b)("p",{parentName:"p"},"Extends or overrides the built-in scalars and custom GraphQL scalars to a custom type."),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"namingConvention")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"NamingConvention"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},"change-case-all#pascalCase")),Object(r.b)("p",{parentName:"p"},"Allow you to override the naming convention of the output.\nYou can either override all namings, or specify an object with specific custom naming convention per output.\nThe format of the converter must be a valid ",Object(r.b)("inlineCode",{parentName:"p"},"module#method"),".\nAllowed values for specific output are: ",Object(r.b)("inlineCode",{parentName:"p"},"typeNames"),", ",Object(r.b)("inlineCode",{parentName:"p"},"enumValues"),'.\nYou can also use "keep" to keep all GraphQL names as-is.\nAdditionally you can set ',Object(r.b)("inlineCode",{parentName:"p"},"transformUnderscore")," to ",Object(r.b)("inlineCode",{parentName:"p"},"true")," if you want to override the default behavior,\nwhich is to preserves underscores."),Object(r.b)("p",{parentName:"p"},"Available case functions in ",Object(r.b)("inlineCode",{parentName:"p"},"change-case-all")," are ",Object(r.b)("inlineCode",{parentName:"p"},"camelCase"),", ",Object(r.b)("inlineCode",{parentName:"p"},"capitalCase"),", ",Object(r.b)("inlineCode",{parentName:"p"},"constantCase"),", ",Object(r.b)("inlineCode",{parentName:"p"},"dotCase"),", ",Object(r.b)("inlineCode",{parentName:"p"},"headerCase"),", ",Object(r.b)("inlineCode",{parentName:"p"},"noCase"),", ",Object(r.b)("inlineCode",{parentName:"p"},"paramCase"),", ",Object(r.b)("inlineCode",{parentName:"p"},"pascalCase"),", ",Object(r.b)("inlineCode",{parentName:"p"},"pathCase"),", ",Object(r.b)("inlineCode",{parentName:"p"},"sentenceCase"),", ",Object(r.b)("inlineCode",{parentName:"p"},"snakeCase"),", ",Object(r.b)("inlineCode",{parentName:"p"},"lowerCase"),", ",Object(r.b)("inlineCode",{parentName:"p"},"localeLowerCase"),", ",Object(r.b)("inlineCode",{parentName:"p"},"lowerCaseFirst"),", ",Object(r.b)("inlineCode",{parentName:"p"},"spongeCase"),", ",Object(r.b)("inlineCode",{parentName:"p"},"titleCase"),", ",Object(r.b)("inlineCode",{parentName:"p"},"upperCase"),", ",Object(r.b)("inlineCode",{parentName:"p"},"localeUpperCase")," and ",Object(r.b)("inlineCode",{parentName:"p"},"upperCaseFirst"),"\n",Object(r.b)("a",{parentName:"p",href:"https://github.com/btxtiger/change-case-all"},"See more")),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"typesPrefix")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ``"),Object(r.b)("p",{parentName:"p"},"Prefixes all the generated types."),Object(r.b)("h4",{parentName:"p"},"Usage Examples"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",{parentName:"pre",className:"language-yml"},"config:\n  typesPrefix: I\n")),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"typesSuffix")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ``"),Object(r.b)("p",{parentName:"p"},"Suffixes all the generated types."),Object(r.b)("h4",{parentName:"p"},"Usage Examples"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",{parentName:"pre",className:"language-yml"},"config:\n  typesSuffix: I\n")),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"skipTypename")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},"false")),Object(r.b)("p",{parentName:"p"},"Does not add __typename to the generated types, unless it was specified in the selection set."),Object(r.b)("h4",{parentName:"p"},"Usage Examples"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",{parentName:"pre",className:"language-yml"},"config:\n  skipTypename: true\n")),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"nonOptionalTypename")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},"false")),Object(r.b)("p",{parentName:"p"},"Automatically adds ",Object(r.b)("inlineCode",{parentName:"p"},"__typename")," field to the generated types, even when they are not specified\nin the selection set, and makes it non-optional"),Object(r.b)("h4",{parentName:"p"},"Usage Examples"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",{parentName:"pre",className:"language-yml"},"config:\n  nonOptionalTypename: true\n")),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"useTypeImports")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},"false")),Object(r.b)("p",{parentName:"p"},"Will use ",Object(r.b)("inlineCode",{parentName:"p"},"import type {}")," rather than ",Object(r.b)("inlineCode",{parentName:"p"},"import {}"),' when importing only types. This gives\ncompatibility with TypeScript\'s "importsNotUsedAsValues": "error" option')))}c.isMDXComponent=!0},384:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return O}));var a=n(0),p=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,p=function(e,t){if(null==e)return{};var n,a,p={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(p[n]=e[n]);return p}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(p[n]=e[n])}return p}var l=p.a.createContext({}),c=function(e){var t=p.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},s=function(e){var t=c(e.components);return p.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return p.a.createElement(p.a.Fragment,{},t)}},d=p.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),s=c(n),d=a,O=s["".concat(i,".").concat(d)]||s[d]||m[d]||r;return n?p.a.createElement(O,b(b({ref:t},l),{},{components:n})):p.a.createElement(O,b({ref:t},l))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var b={};for(var o in t)hasOwnProperty.call(t,o)&&(b[o]=t[o]);b.originalType=e,b.mdxType="string"==typeof e?e:a,i[1]=b;for(var l=2;l<r;l++)i[l]=n[l];return p.a.createElement.apply(null,i)}return p.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);