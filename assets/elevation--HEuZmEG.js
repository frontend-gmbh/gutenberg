import{a as e,M as i}from"./iframe-2TvY6Iig.js";import{useMDXComponents as s}from"./index-CwqzOGow.js";import{T as r}from"./components-CCqisTKn.js";import"./preload-helper-Zf8nSx-t.js";function l(a){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...s(),...a.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Tokens/Elevation",name:"page"}),`
`,e.jsx(n.h1,{id:"elevation-tokens",children:"Elevation tokens"}),`
`,e.jsxs(n.p,{children:["This document outlines the various tokens relating to ",e.jsx(n.a,{href:"?path=/docs/foundations-design-language-elevation--page",children:"elevation"})," in the WordPress design system."]}),`
`,e.jsx(n.h2,{id:"values",children:"Values"}),`
`,e.jsxs(n.p,{children:["Tokens can be used in different ways, but regardless of which method is used, each one is meant to be used as the value of the CSS ",e.jsx(n.code,{children:"box-shadow"})," property, and references the following values:"]}),`
`,e.jsx(r,{tokenCategory:"elevation",tokens:[{name:"Extra small",valueShow:"0 1px 1px rgba($black, 0.03), 0 1px 2px rgba($black, 0.02), 0 3px 3px rgba($black, 0.02), 0 4px 4px rgba($black, 0.01)",valueCode:"0 1px 1px rgba(0, 0, 0, 0.03), 0 1px 2px rgba(0, 0, 0, 0.02), 0 3px 3px rgba(0, 0, 0, 0.02), 0 4px 4px rgba(0, 0, 0, 0.01)"},{name:"Small",valueShow:"0 1px 2px rgba($black, 0.05), 0 2px 3px rgba($black, 0.04), 0 6px 6px rgba($black, 0.03), 0 8px 8px rgba($black, 0.02)",valueCode:"0 1px 2px rgba(0, 0, 0, 0.05), 0 2px 3px rgba(0, 0, 0, 0.04), 0 6px 6px rgba(0, 0, 0, 0.03), 0 8px 8px rgba(0, 0, 0, 0.02)"},{name:"Medium",valueShow:"0 2px 3px rgba($black, 0.05), 0 4px 5px rgba($black, 0.04), 0 12px 12px rgba($black, 0.03), 0 16px 16px rgba($black, 0.02)",valueCode:"0 2px 3px rgba(0, 0, 0, 0.05), 0 4px 5px rgba(0, 0, 0, 0.04), 0 12px 12px rgba(0, 0, 0, 0.03), 0 16px 16px rgba(0, 0, 0, 0.02)"},{name:"Large",valueShow:"0 5px 15px rgba($black, 0.08), 0 15px 27px rgba($black, 0.07), 0 30px 36px rgba($black, 0.04), 0 50px 43px rgba($black, 0.02)",valueCode:"0 5px 15px rgba(0, 0, 0, 0.08), 0 15px 27px rgba(0, 0, 0, 0.07), 0 30px 36px rgba(0, 0, 0, 0.04), 0 50px 43px rgba(0, 0, 0, 0.02)"}],applyTokenStyle:o=>({boxShadow:o})}),`
`,e.jsx(n.h2,{id:"css-tokens",children:"CSS tokens"}),`
`,e.jsx(n.p,{children:"Elevation tokens are defined as SASS variables:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"$elevation-x-small"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"$elevation-small"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"$elevation-medium"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"$elevation-large"})}),`
`]}),`
`,e.jsx(n.p,{children:"They can be used like so:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`.elevation-extra-small {
	box-shadow: $elevation-x-small;
}
.elevation-small {
	box-shadow: $elevation-small;
}
.elevation-medium {
	box-shadow: $elevation-medium;
}
.elevation-large {
	box-shadow: $elevation-large;
}
`})}),`
`,e.jsx(n.h2,{id:"js-tokens",children:"JS tokens"}),`
`,e.jsxs(n.p,{children:["When working in the ",e.jsx(n.code,{children:"@wordpress/components"})," package, the elevation tokens can also be consumed as JavaScript variables via the ",e.jsx(n.code,{children:"CONFIG"})," object found in the ",e.jsx(n.code,{children:"packages/components/src/utils/index.js"})," file:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"CONFIG.elevationXSmall"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"CONFIG.elevationSmall"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"CONFIG.elevationMedium"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"CONFIG.elevationLarge"})}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:"// Note: the `CONFIG` object is only available within the `@wordpress/components` package.\nimport { CONFIG } from '../utils';\n\n// Later in the code:\nbox-shadow: ${ CONFIG.elevationXSmall };\n"})})]})}function p(a={}){const{wrapper:n}={...s(),...a.components};return n?e.jsx(n,{...a,children:e.jsx(l,{...a})}):l(a)}export{p as default};
