import{e as r,j as i,a as e,M as c,J as l}from"./iframe-2TvY6Iig.js";import{useMDXComponents as s}from"./index-CwqzOGow.js";import"./preload-helper-Zf8nSx-t.js";const a=({icon:o,...n})=>i(o,{"aria-hidden":!0,...n}),h=r(a,{target:"ekiivbf0"})({name:"p9t351",styles:"display:inline-block!important;width:14px"});function t(o){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"Docs/Introduction",name:"page"}),`
`,e.jsx(n.h1,{id:"introduction",children:"Introduction"}),`
`,e.jsx(n.h2,{id:"welcome",children:"Welcome!"}),`
`,e.jsxs(n.p,{children:["The WordPress Gutenberg project uses Storybook to view and work with the UI components developed in WordPress packages, especially ",e.jsx(n.a,{href:"https://github.com/WordPress/gutenberg/tree/trunk/packages/components",rel:"nofollow",children:"@wordpress/components"}),"."]}),`
`,e.jsx(n.p,{children:"On this interactive site you can browse individual components, their controls, options, and settings in isolation. You can also modify controls and arguments and see the changes right away."}),`
`,e.jsx(n.p,{children:`The components displayed on this site can be used in your code to build the editor's UI for your custom blocks or other pages.
Import them from the components root directory like in below example:`}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { Button } from '@wordpress/components';

export default function MyButton() {
	return <Button>Click Me!</Button>;
}
`})}),`
`,e.jsx(n.h2,{id:"how-this-site-works",children:"How this site works"}),`
`,e.jsxs(n.p,{children:["The site shows the components in the sidebar. Each component's entry point is its ",e.jsx(n.strong,{children:"Docs"}),' page, which contains the documentation and interactive examples. You can also explore the individual stories (e.g. "Default", "Small") to view a single use case on the ',e.jsx(n.strong,{children:"Canvas"}),", where you can modify the ",e.jsx(n.strong,{children:"Controls"})," for each prop in the panel below."]}),`
`,e.jsxs(n.p,{children:["To view the source code for the component and its stories on GitHub, click the ",e.jsx(h,{icon:l})," (Open source file) button in the top toolbar."]}),`
`,e.jsx(n.p,{children:"To use it in your local development environment run the following command in the top level Gutenberg directory:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npm run storybook:dev
`})}),`
`,e.jsx(n.h2,{id:"resources-to-learn-more",children:"Resources to learn more:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://storybook.js.org/",rel:"nofollow",children:"Storybook.js.org"})," - Storybook is a frontend workshop for building UI components and pages in isolation."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/WordPress/gutenberg/issues?q=is%3Aopen+is%3Aissue+label%3A%22%5BPackage%5D+Components%22",rel:"nofollow",children:"[Package] Components"})," - Open Issue Gutenberg Repo"]}),`
`]})]})}function x(o={}){const{wrapper:n}={...s(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(t,{...o})}):t(o)}export{x as default};
