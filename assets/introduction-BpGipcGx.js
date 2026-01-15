import{a as e,M as i}from"./iframe-2TvY6Iig.js";import{useMDXComponents as o}from"./index-CwqzOGow.js";import"./preload-helper-Zf8nSx-t.js";function t(n){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Design System/Introduction"}),`
`,e.jsx(s.h1,{id:"wordpress-design-system",children:"WordPress Design System"}),`
`,e.jsx(s.h2,{id:"what-is-a-design-system",children:"What is a Design System?"}),`
`,e.jsx(s.p,{children:"A design system is a collection of reusable components, design tokens, and guidelines that work together to create consistent, accessible user interfaces. It serves as a single source of truth that bridges design and development, ensuring cohesion across different parts of an application."}),`
`,e.jsx(s.p,{children:"Rather than building UI elements from scratch each time, a design system provides pre-built, themeable components built on a foundation of design tokens. Design tokens encode design decisions like colors, spacing, and typography and can be customized to match different contexts while maintaining consistency."}),`
`,e.jsx(s.h2,{id:"how-is-this-different-from-existing-components",children:"How is this different from existing components?"}),`
`,e.jsxs(s.p,{children:["While similar in scope to the existing ",e.jsx(s.a,{href:"https://github.com/WordPress/gutenberg/tree/trunk/packages/components",rel:"nofollow",children:e.jsx(s.code,{children:"@wordpress/components"})})," package, there are key differences:"]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Cohesive by design"}),": Unlike ",e.jsx(s.code,{children:"@wordpress/components"}),", which grew organically as a collection of unrelated UI elements, this design system guarantees user- and developer-facing cohesion through a unified token system and consistent component patterns."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Flexible theming"}),": Built from the ground up to support customizable color schemes, adjustable density, and user personalization—capabilities needed to support the ",e.jsx(s.a,{href:"https://github.com/WordPress/gutenberg/issues/71196",rel:"nofollow",children:"Phase 3 admin redesign initiative"}),"."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Modern distribution"}),": Distributed as a versioned npm package following ",e.jsx(s.a,{href:"https://semver.org/",rel:"nofollow",children:"semantic versioning"}),", rather than being bundled as a WordPress script on the ",e.jsx(s.code,{children:"window.wp"})," global."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Composable architecture"}),": Components follow consistent patterns with proper composability, ref forwarding, and flexible rendering—avoiding the bloated abstractions that emerged from historical scope creep."]}),`
`]}),`
`,e.jsxs(s.p,{children:["For more context on the motivations and goals behind this work, see the ",e.jsx(s.a,{href:"https://github.com/WordPress/gutenberg/issues/71196",rel:"nofollow",children:"Design System: Support for admin redesign"})," overview issue."]}),`
`,e.jsx(s.h2,{id:"what-are-the-parts-of-the-design-system",children:"What are the parts of the design system?"}),`
`,e.jsx(s.p,{children:"The WordPress Design System consists of two complementary packages:"}),`
`,e.jsxs(s.h3,{id:"theming-wordpresstheme",children:["Theming (",e.jsx(s.code,{children:"@wordpress/theme"}),")"]}),`
`,e.jsx(s.p,{children:"The foundational layer that provides:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Design Tokens"}),": A comprehensive system of design tokens for colors, spacing, typography, shadows, and more."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Theme Provider"}),": A component that accepts seed values and automatically generates consistent, accessible color ramps and spacing scales."]}),`
`]}),`
`,e.jsxs(s.p,{children:["Explore the ",e.jsx(s.a,{href:"/story/design-system-theme-introduction--docs",children:"Theme documentation"})," to learn more about design tokens, the token architecture, and how to use ",e.jsx(s.code,{children:"ThemeProvider"}),"."]}),`
`,e.jsxs(s.h3,{id:"components-wordpressui",children:["Components (",e.jsx(s.code,{children:"@wordpress/ui"}),")"]}),`
`,e.jsx(s.p,{children:"A library of React UI components built on the theme foundation:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Consistent patterns"}),": All components follow a consistent set of technical design principles to ensure that their usage is easy to understand and predictable."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Token-driven styling"}),": Components use design tokens for all visual properties, ensuring they automatically adapt to theme changes."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Accessible by default"}),": Built with WordPress accessibility coding standards in mind, including semantic markup, keyboard navigation, and proper color contrast."]}),`
`]}),`
`,e.jsxs(s.p,{children:["Explore the ",e.jsx(s.a,{href:"/story/design-system-components-introduction--docs",children:"Components documentation"})," to learn more about the component library and usage patterns."]})]})}function c(n={}){const{wrapper:s}={...o(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(t,{...n})}):t(n)}export{c as default};
