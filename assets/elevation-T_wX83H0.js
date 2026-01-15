import{a as e,M as o}from"./iframe-2TvY6Iig.js";import{useMDXComponents as s}from"./index-CwqzOGow.js";import"./preload-helper-Zf8nSx-t.js";const a=""+new URL("elevation-Bg6fAdWL.svg",import.meta.url).href,r=""+new URL("elevation-examples-DSd6d5u5.svg",import.meta.url).href;function i(t){const n={a:"a",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",ul:"ul",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Foundations/Design Language/Elevation",name:"page"}),`
`,e.jsx(n.h1,{id:"elevation",children:"Elevation"}),`
`,`
`,e.jsx("img",{src:a,alt:"",width:"100%"}),`
`,e.jsx(n.p,{children:"Elevation, through the use of shadows, visually indicates the layers where overlapping UI elements reside. Shadows create the illusion of depth, showing how one UI element is positioned above another on the z-axis. Elevation should be used to organize elements, establish a clear hierarchy, and draw focus to key components."}),`
`,e.jsx(n.p,{children:"In the WordPress Design System there are four levels of elevation correlating to specific uses:"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Elevation"}),e.jsx("th",{children:"Usage"}),e.jsx("th",{children:"Examples"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Extra small"}),e.jsx("td",{children:e.jsx(n.p,{children:`Applied to large sections and containers that group related content
and controls. These containers may shift or overlap other content
without causing too much visual disruption`})}),e.jsx("td",{children:"Preview Frame, Content Frame"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Small"}),e.jsx("td",{children:e.jsx(n.p,{children:`Used for components that provide contextual feedback without being
overly intrusive. Small elevation is ideal for non-interruptive elements
that subtly surface additional information or actions.`})}),e.jsx("td",{children:"Tooltips, Snackbars"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Medium"}),e.jsx("td",{children:e.jsx(n.p,{children:`Applied to components that offer additional actions to the user. This
elevation level helps differentiate actionable elements that appear in
context without requiring major focus shifts.`})}),e.jsx("td",{children:"Menus, Command Palette"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Large"}),e.jsx("td",{children:e.jsx(n.p,{children:`Reserved for components that confirm actions or require decisions, large
elevation is used for more interruptive elements that demand user attention
to complete important tasks.`})}),e.jsx("td",{children:"Modals"})]})]})]}),`
`,e.jsx(n.h2,{id:"accessibility-considerations",children:"Accessibility considerations"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:`Interactive Elements: Elevation can be an important visual cue to indicate which elements are interactive,
particularly for folks with monochromatic color blindness. Elevating buttons, handles, and other interactive
elements makes them stand out, helping users quickly identify where they can take action.`}),`
`,e.jsx(n.li,{children:`Focus: Higher levels of elevation can be used to draw attention to components that require user interaction
or confirmation, such as modals, guides, and decision-based tasks, enhancing accessibility by reducing
cognitive load.`}),`
`]}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.p,{children:"The diagram below visually demonstrates the examples outlined in the table above."}),`
`,e.jsx("img",{src:r,alt:"Diagram illustrating elevation levels",width:"100%"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"Content frame and Preview frame"}),`
`,e.jsx(n.li,{children:"Snackbar"}),`
`,e.jsx(n.li,{children:"Menu"}),`
`,e.jsx(n.li,{children:"Modal"}),`
`]}),`
`,e.jsx(n.h2,{id:"tokens",children:"Tokens"}),`
`,e.jsxs(n.p,{children:["Use tokens to apply elevation in your work. Please refer to the ",e.jsx(n.a,{href:"?path=/docs/tokens-elevation--page",children:"Tokens section"})," to learn more."]})]})}function h(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{h as default};
