import{a as e,M as l}from"./iframe-2TvY6Iig.js";import{useMDXComponents as r}from"./index-CwqzOGow.js";import{T as a}from"./components-CCqisTKn.js";import"./preload-helper-Zf8nSx-t.js";function d(s){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Tokens/Radius",name:"page"}),`
`,e.jsx(n.h1,{id:"radius",children:"Radius"}),`
`,e.jsx(n.p,{children:"This document outlines the various tokens relating to radius in the WordPress design system."}),`
`,e.jsx(n.h2,{id:"values",children:"Values"}),`
`,e.jsxs(n.p,{children:["Tokens can be used in different ways, but regardless of which method is used, each one is meant to be used as the value of the CSS ",e.jsx(n.code,{children:"border-radius"})," property, and references the following values:"]}),`
`,e.jsx(a,{tokenCategory:"radius",tokens:[{name:"Extra small",valueShow:"1px",valueCode:"1px"},{name:"Small",valueShow:"2px",valueCode:"2px"},{name:"Medium",valueShow:"4px",valueCode:"4px"},{name:"Large",valueShow:"8px",valueCode:"8px"},{name:"Full",valueShow:"9999px",valueCode:"9999px"},{name:"Round",valueShow:"100%",valueCode:"100%"}],applyTokenStyle:i=>({borderRadius:i,border:"1px solid #1e1e1e"})}),`
`,e.jsx(n.h2,{id:"css-tokens",children:"CSS tokens"}),`
`,e.jsx(n.p,{children:"Radius tokens are defined as SASS variables:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"$radius-x-small"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"$radius-small"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"$radius-medium"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"$radius-large"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"$radius-full"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"$radius-round"})}),`
`]}),`
`,e.jsx(n.p,{children:"They can be used like so:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`.radius-extra-small {
	border-radius: $radius-x-small;
}
.radius-small {
	border-radius: $radius-small;
}
.radius-medium {
	border-radius: $radius-medium;
}
.radius-large {
	border-radius: $radius-large;
}
.radius-full {
	border-radius: $radius-full;
}
.radius-round {
	border-radius: $radius-round;
}
`})}),`
`,e.jsx(n.h2,{id:"js-tokens",children:"JS tokens"}),`
`,e.jsxs(n.p,{children:["When working in the ",e.jsx(n.code,{children:"@wordpress/components"})," package, the radius tokens can also be consumed as JavaScript variables via the ",e.jsx(n.code,{children:"CONFIG"})," object found in the ",e.jsx(n.code,{children:"packages/components/src/utils/index.js"})," file:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"CONFIG.radiusXSmall"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"CONFIG.radiusSmall"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"CONFIG.radiusMedium"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"CONFIG.radiusLarge"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"CONFIG.radiusFull"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"CONFIG.radiusRound"})}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:"// Note: the `CONFIG` object is only available within the `@wordpress/components` package.\nimport { CONFIG } from '../utils';\n\n// Later in the code:\nborder-radius: ${ CONFIG.radiusXSmall };\n"})})]})}function h(s={}){const{wrapper:n}={...r(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(d,{...s})}):d(s)}export{h as default};
