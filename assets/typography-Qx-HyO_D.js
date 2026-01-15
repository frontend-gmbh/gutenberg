import{a as e,M as r,T as t}from"./iframe-2TvY6Iig.js";import{useMDXComponents as d}from"./index-CwqzOGow.js";import"./preload-helper-Zf8nSx-t.js";const s={type:{primary:'-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif'},weight:{regular:"400",medium:"500"},size:{s1:11,s2:12,s3:13,s4:15,s5:20,s6:32}},h="Code is Poetry.",o="WordPress grows when people like you tell their friends about it, and the thousands of businesses and services that are built on and around WordPress share that fact with their users.";function l(i){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...d(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Tokens/Typography",name:"page"}),`
`,`
`,`
`,e.jsx(n.h1,{id:"typography-tokens",children:"Typography tokens"}),`
`,e.jsx(n.p,{children:"This document outlines the various tokens relating to typography in the WordPress components system."}),`
`,e.jsx(n.h2,{id:"semantic-tokens",children:"Semantic tokens"}),`
`,e.jsx(n.p,{children:"Semantic tokens compose primitive tokens to create reusable type styles enhancing consistency across the software."}),`
`,e.jsx(n.p,{children:"They are defined as SASS mixins and can be used like so:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`.my-component {
	@include heading-large();
}
`})}),`
`,e.jsx(n.h3,{id:"headings",children:"Headings"}),`
`,e.jsx(t,{fontSizes:[Number(s.size.s6),Number(s.size.s5),Number(s.size.s4),Number(s.size.s3),Number(s.size.s2),Number(s.size.s1)],fontWeight:s.weight.medium,sampleText:h,fontFamily:s.type.primary}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Style"}),e.jsx("th",{children:"Primitives"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"heading-2x-large"}),e.jsxs("td",{children:[e.jsx(n.code,{children:"$font-family-headings"}),", ",e.jsx(n.code,{children:"font-weight-medium"}),", ",e.jsx(n.code,{children:"font-size-2x-large"}),", ",e.jsx(n.code,{children:"line-height-2x-large"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"heading-x-large"}),e.jsxs("td",{children:[e.jsx(n.code,{children:"$font-family-headings"}),", ",e.jsx(n.code,{children:"font-weight-medium"}),", ",e.jsx(n.code,{children:"font-size-x-large"}),", ",e.jsx(n.code,{children:"line-height-medium"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"heading-large"}),e.jsxs("td",{children:[e.jsx(n.code,{children:"$font-family-headings"}),", ",e.jsx(n.code,{children:"font-weight-medium"}),", ",e.jsx(n.code,{children:"font-size-large"}),", ",e.jsx(n.code,{children:"line-height-small"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"heading-medium"}),e.jsxs("td",{children:[e.jsx(n.code,{children:"$font-family-headings"}),", ",e.jsx(n.code,{children:"font-weight-medium"}),", ",e.jsx(n.code,{children:"font-size-medium"}),", ",e.jsx(n.code,{children:"line-height-small"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"heading-small"}),e.jsxs("td",{children:[e.jsx(n.code,{children:"$font-family-headings"}),", ",e.jsx(n.code,{children:"font-weight-medium"}),", ",e.jsx(n.code,{children:"font-size-x-small"}),", ",e.jsx(n.code,{children:"line-height-x-small"})]})]})]})]}),`
`,e.jsx(n.h3,{id:"body",children:"Body"}),`
`,e.jsx(t,{fontSizes:[Number(s.size.s5),Number(s.size.s4),Number(s.size.s3),Number(s.size.s2)],fontWeight:s.weight.regular,sampleText:o,fontFamily:s.type.primary}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Style"}),e.jsx("th",{children:"Primitives"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"body-x-large"}),e.jsxs("td",{children:[e.jsx(n.code,{children:"$font-family-body"}),", ",e.jsx(n.code,{children:"font-weight-regular"}),", ",e.jsx(n.code,{children:"font-size-x-large"}),", ",e.jsx(n.code,{children:"line-height-x-large"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"body-large"}),e.jsxs("td",{children:[e.jsx(n.code,{children:"$font-family-body"}),", ",e.jsx(n.code,{children:"font-weight-regular"}),", ",e.jsx(n.code,{children:"font-size-large"}),", ",e.jsx(n.code,{children:"line-height-medium"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"body-medium"}),e.jsxs("td",{children:[e.jsx(n.code,{children:"$font-family-body"}),", ",e.jsx(n.code,{children:"font-weight-regular"}),", ",e.jsx(n.code,{children:"font-size-medium"}),", ",e.jsx(n.code,{children:"line-height-small"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"body-small"}),e.jsxs("td",{children:[e.jsx(n.code,{children:"$font-family-body"}),", ",e.jsx(n.code,{children:"font-weight-regular"}),", ",e.jsx(n.code,{children:"font-size-small"}),", ",e.jsx(n.code,{children:"line-height-x-small"})]})]})]})]}),`
`,e.jsx(n.h2,{id:"primitive-tokens",children:"Primitive tokens"}),`
`,e.jsxs(n.p,{children:["Primitive tokens are organized into 4 sets relating to ",e.jsx(n.code,{children:"size"}),", ",e.jsx(n.code,{children:"line-height"}),", ",e.jsx(n.code,{children:"weight"}),", and ",e.jsx(n.code,{children:"family"}),", defined as SASS variables."]}),`
`,e.jsx(n.h3,{id:"size",children:"Size"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`$font-size-x-small: 11px;
$font-size-small: 12px;
$font-size-medium: 13px;
$font-size-large: 15px;
$font-size-x-large: 20px;
$font-size-2x-large: 32px;
`})}),`
`,e.jsx(n.h3,{id:"line-height",children:"Line-height"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`$font-line-height-x-small: 16px;
$font-line-height-small: 20px;
$font-line-height-medium: 24px;
$font-line-height-large: 28px;
$font-line-height-x-large: 32px;
$font-line-height-2x-large: 40px;
`})}),`
`,e.jsx(n.h3,{id:"weight",children:"Weight"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`$font-weight-regular: 400;
$font-weight-medium: 500;
`})}),`
`,e.jsx(n.h3,{id:"families",children:"Families"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`$font-family-headings: -apple-system, "system-ui", "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
$font-family-body: -apple-system, "system-ui", "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
$font-family-mono: Menlo, Consolas, monaco, monospace;
`})}),`
`,e.jsx(n.p,{children:"Generally use of semantic tokens is encouraged, but it is possible to create ad hoc styles by referencing primitives, for example:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`.my-type-style {
	font-family: $font-family-headings;
	line-height: $font-line-height-x-small;
	font-weight: $font-weight-regular;
}
`})})]})}function m(i={}){const{wrapper:n}={...d(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(l,{...i})}):l(i)}export{h as SampleTextHeading,o as SampleTextParagraph,m as default,s as typography};
