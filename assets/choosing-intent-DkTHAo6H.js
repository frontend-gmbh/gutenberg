import{a as n,M as r}from"./iframe-2TvY6Iig.js";import{useMDXComponents as l}from"./index-CwqzOGow.js";/* empty css                      */import{B as i}from"./badge-DDVEBQbx.js";import"./preload-helper-Zf8nSx-t.js";import"./box-DQMFXIME.js";import"./useRender-CZYnIQEd.js";import"./useRenderElement-D_ShKst7.js";function s(t){const e={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...l(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"Design System/Components/Badge/Choosing intent"}),`
`,n.jsx(e.h1,{id:"choosing-intent",children:"Choosing intent"}),`
`,n.jsxs("div",{style:{padding:"2rem",display:"flex",justifyContent:"center",gap:"0.5rem",flexWrap:"wrap",border:"1px solid #e0e0e0",borderRadius:"0.5rem"},children:[n.jsx(i,{intent:"high",children:"high"}),n.jsx(i,{intent:"medium",children:"medium"}),n.jsx(i,{intent:"low",children:"low"}),n.jsx(i,{intent:"stable",children:"stable"}),n.jsx(i,{intent:"informational",children:"informational"}),n.jsx(i,{intent:"draft",children:"draft"}),n.jsx(i,{intent:"none",children:"none"})]}),`
`,n.jsx(e.p,{children:"It can be difficult to determine which badge intent to use because the component's properties are not tied to any specific product view. Those properties should be balanced against the requirements of the view in which the badge appears, all while keeping an eye on high-level consistency (global statuses that appear across multiple views)."}),`
`,n.jsx(e.p,{children:"Here is a decision tree to help identify which badge to use."}),`
`,n.jsx(e.h2,{id:"1-ask-first-should-this-draw-the-eye",children:"1. Ask first: should this draw the eye?"}),`
`,n.jsx(e.p,{children:"If the user scans this screen, should their attention be drawn to this badge?"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["If ",n.jsx(e.strong,{children:"no"})," → use ",n.jsx(e.code,{children:"none"}),' (or even just plain text; no badge), even if the state is positive or "stable".']}),`
`,n.jsxs(e.li,{children:["If ",n.jsx(e.strong,{children:"yes"})," → pick an intent based on how important the action or awareness is."]}),`
`]}),`
`,n.jsx(e.h2,{id:"2-high--medium--low--action-priority",children:"2. High / Medium / Low = action priority"}),`
`,n.jsx(e.p,{children:"Use when there's something for the user to act on."}),`
`,n.jsxs(e.h3,{id:"high--critical--top-priority",children:[n.jsx(e.code,{children:"high"})," – Critical / top priority"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Needs attention as soon as possible"}),`
`,n.jsx(e.li,{children:n.jsx(e.em,{children:'E.g. "Payment declined", "Security issue"'})}),`
`]}),`
`,n.jsx(i,{intent:"high",children:"Payment declined"}),`
`,n.jsx(i,{intent:"high",children:"Security issue"}),`
`,n.jsxs(e.h3,{id:"medium--important--blocks-progress",children:[n.jsx(e.code,{children:"medium"})," – Important / blocks progress"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Blocks a key task, should be handled soon"}),`
`,n.jsx(e.li,{children:n.jsx(e.em,{children:'E.g. "Approval required", "Review needed"'})}),`
`]}),`
`,n.jsx(i,{intent:"medium",children:"Approval required"}),`
`,n.jsx(i,{intent:"medium",children:"Review needed"}),`
`,n.jsxs(e.h3,{id:"low--worth-noticing--nonurgent",children:[n.jsx(e.code,{children:"low"})," – Worth noticing / non‑urgent"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Good to be aware of; action may be optional or later"}),`
`,n.jsx(e.li,{children:n.jsx(e.em,{children:'E.g. "Pending", "Queued", "Minor issues", "Optional setup"'})}),`
`]}),`
`,n.jsx(i,{intent:"low",children:"Pending"}),`
`,n.jsx(i,{intent:"low",children:"Queued"}),`
`,n.jsx(e.h2,{id:"3-informational--draft--special-non-final-states",children:"3. Informational / draft = special non-final states"}),`
`,n.jsxs(e.h3,{id:"informational--notable-no-action--fix-needed",children:[n.jsx(e.code,{children:"informational"})," – Notable, no action / fix needed"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Context only; no clear action"}),`
`,n.jsx(e.li,{children:n.jsx(e.em,{children:'E.g. "Scheduled", "Beta", "Internal only"'})}),`
`]}),`
`,n.jsx(i,{intent:"informational",children:"Scheduled"}),`
`,n.jsx(i,{intent:"informational",children:"Beta"}),`
`,n.jsxs(e.h3,{id:"draft--not-final--work-in-progress",children:[n.jsx(e.code,{children:"draft"})," – Not final / work in progress"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.em,{children:'E.g. "Draft", "Unpublished", "Work in progress"'})}),`
`]}),`
`,n.jsx(i,{intent:"draft",children:"Draft"}),`
`,n.jsx(i,{intent:"draft",children:"Unpublished"}),`
`,n.jsx(e.h2,{id:"4-stable--none--normal-states",children:"4. Stable / none = normal states"}),`
`,n.jsxs(e.h3,{id:"stable--positive--healthy-state",children:[n.jsx(e.code,{children:"stable"}),' – Positive / "healthy" state']}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:'Use when confirming success or "all good" is important in that view'}),`
`,n.jsx(e.li,{children:n.jsx(e.em,{children:'E.g. "Healthy", "Active", "Live"'})}),`
`]}),`
`,n.jsx(i,{intent:"stable",children:"Healthy"}),`
`,n.jsx(i,{intent:"stable",children:"Active"}),`
`,n.jsxs(e.h3,{id:"none--default-for-normal--background-states",children:[n.jsx(e.code,{children:"none"})," – Default for normal / background states"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Especially in dense lists where too much color creates visual noise"}),`
`,n.jsx(e.li,{children:n.jsx(e.em,{children:'E.g. "Inactive", "Expired"'})}),`
`]}),`
`,n.jsx(i,{intent:"none",children:"Inactive"}),`
`,n.jsx(i,{intent:"none",children:"Expired"}),`
`,n.jsx(e.h2,{id:"examples",children:"Examples"}),`
`,n.jsx(e.h3,{id:"comment-status",children:"Comment status:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:['"Approved" → ',n.jsx(e.code,{children:"none"}),": ",n.jsx(i,{intent:"none",children:"Approved"})]}),`
`,n.jsxs(e.li,{children:['"Approval required" → ',n.jsx(e.code,{children:"medium"}),": ",n.jsx(i,{intent:"medium",children:"Approval required"})]}),`
`]}),`
`,n.jsx(e.h3,{id:"page-status",children:"Page status:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:['"Published" → ',n.jsx(e.code,{children:"none"}),": ",n.jsx(i,{intent:"none",children:"Published"})]}),`
`,n.jsxs(e.li,{children:['"Pending" → ',n.jsx(e.code,{children:"low"}),": ",n.jsx(i,{intent:"low",children:"Pending"})]}),`
`,n.jsxs(e.li,{children:['"Draft" → ',n.jsx(e.code,{children:"draft"}),": ",n.jsx(i,{intent:"draft",children:"Draft"})]}),`
`,n.jsxs(e.li,{children:['"Scheduled" → ',n.jsx(e.code,{children:"informational"}),": ",n.jsx(i,{intent:"informational",children:"Scheduled"})]}),`
`,n.jsxs(e.li,{children:['"Private" → ',n.jsx(e.code,{children:"informational"}),": ",n.jsx(i,{intent:"informational",children:"Private"})]}),`
`]}),`
`,n.jsx(e.h3,{id:"plugin-status",children:"Plugin status:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:['"Active" → ',n.jsx(e.code,{children:"stable"}),": ",n.jsx(i,{intent:"stable",children:"Active"})]}),`
`,n.jsxs(e.li,{children:['"Inactive" → ',n.jsx(e.code,{children:"none"}),": ",n.jsx(i,{intent:"none",children:"Inactive"})]}),`
`]}),`
`,n.jsx(e.h2,{id:"5-when-in-doubt",children:"5. When in doubt…"}),`
`,n.jsx(e.p,{children:"Use the least attention‑grabbing intent that still:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Makes it clear what needs attention,"}),`
`,n.jsx(e.li,{children:"Marks what isn't final, or"}),`
`,n.jsx(e.li,{children:"Confirms a key success state in that context."}),`
`]})]})}function m(t={}){const{wrapper:e}={...l(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(s,{...t})}):s(t)}export{m as default};
