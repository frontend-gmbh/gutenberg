import{r as s,aa as P,a2 as S,a as h,a3 as E}from"./iframe-2TvY6Iig.js";import{c as g,f as _,d as b}from"./index-DUXT-3wK.js";import{i as w}from"./is-plain-object-BJ3z7EOF.js";import{w as A}from"./index-BtJmv7lM.js";import{p as v}from"./index-CK8hcbFu.js";function O(e,t){const n=s.useRef(!1);s.useEffect(()=>{if(n.current)return e();n.current=!0},t),s.useEffect(()=>()=>{n.current=!1},[])}const R=e=>typeof e<"u"&&e!==null&&["name","styles"].every(t=>typeof e[t]<"u"),j=()=>{const e=P();return s.useCallback((...n)=>{if(e===null)throw new Error("The `useCx` hook should be only used within a valid Emotion Cache Context");return g(...n.map(o=>R(o)?(S(e,o,!1),`${e.key}-${o.name}`):o))},[e])},u=s.createContext({});u.displayName="ComponentsContext";const p=()=>s.useContext(u);function M({value:e}){const t=p(),n=s.useRef(e);return O(()=>{_(n.current,e)&&n.current!==e&&A(`Please memoize your context: ${JSON.stringify(e)}`)},[e]),s.useMemo(()=>b(t??{},e??{},{isMergeableObject:w}),[t,e])}const y=({children:e,value:t})=>{const n=M({value:t});return h.jsx(u.Provider,{value:n,children:e})},F=s.memo(y);y.__docgenInfo={description:`A Provider component that can modify props for connected components within
the Context system.

@example
\`\`\`jsx
<ContextSystemProvider value={{ Button: { size: 'small' }}}>
  <Button>...</Button>
</ContextSystemProvider>
\`\`\`

@template {Record<string, any>} T
@param {Object}                    options
@param {import('react').ReactNode} options.children Children to render.
@param {T}                         options.value    Props to render into connected components.
@return {JSX.Element} A Provider wrapped component.`,methods:[],displayName:"BaseContextSystemProvider"};const T="data-wp-component",k="data-wp-c16t",i="__contextSystemKey__";function $(e){return`components-${v(e)}`}const C=E($);function U(e,t){return x(e,t,{forwardsRef:!0})}function V(e,t){return x(e,t)}function x(e,t,n){const o=n?.forwardsRef?s.forwardRef(e):e;let r=o[i]||[t];return Array.isArray(t)&&(r=[...r,...t]),typeof t=="string"&&(r=[...r,t]),Object.assign(o,{[i]:[...new Set(r)],displayName:t,selector:`.${C(t)}`})}function l(e){if(!e)return[];let t=[];return e[i]&&(t=e[i]),e.type&&e.type[i]&&(t=e.type[i]),t}function X(e,t){return e?typeof t=="string"?l(e).includes(t):Array.isArray(t)?t.some(n=>l(e).includes(n)):!1:!1}function B(e){return{[T]:e}}function z(){return{[k]:!0}}function G(e,t){const o=p()?.[t]||{},r={...z(),...B(t)},{_overrides:f,...d}=o,c=Object.entries(d).length?Object.assign({},d,e):e,N=j()(C(t),e.className),m=typeof c.renderChildren=="function"?c.renderChildren(c):c.children;for(const a in c)r[a]=c[a];for(const a in f)r[a]=f[a];return m!==void 0&&(r.children=m),r.className=N,r}export{F as C,j as a,V as b,U as c,O as d,X as h,G as u};
