import{r as d,a3 as R,a4 as D,a5 as w,a6 as C,a7 as x,a8 as $,f as s,j as t,F as _,G as j}from"./iframe-2TvY6Iig.js";import{D as S,g as T,b as L,a as E}from"./index-BFkpbvDK.js";/* empty css                      */import"./preload-helper-Zf8nSx-t.js";const N=d.createContext({resolvedSettings:{color:{}}}),W={"primary-bgFill1":["bg-interactive-brand-strong"],"primary-fgFill":["fg-interactive-brand-strong","fg-interactive-brand-strong-active"],"primary-bgFill2":["bg-interactive-brand-strong-active"],"primary-surface4":["bg-interactive-brand-weak-active"],"primary-fgSurface3":["fg-interactive-brand","fg-interactive-brand-active"],"primary-stroke3":["bg-thumb-brand","bg-thumb-brand-active","stroke-focus-brand","stroke-interactive-brand","stroke-surface-brand-strong"],"primary-stroke4":["stroke-interactive-brand-active"],"primary-stroke1":["stroke-surface-brand"],"primary-surface1":["bg-surface-brand"],"info-surface2":["bg-surface-info-weak"],"info-surface4":["bg-surface-info"],"info-fgSurface4":["fg-content-info"],"info-fgSurface3":["fg-content-info-weak"],"info-stroke3":["stroke-surface-info-strong"],"info-stroke1":["stroke-surface-info"],"success-surface2":["bg-surface-success-weak"],"success-surface4":["bg-surface-success"],"success-fgSurface4":["fg-content-success"],"success-fgSurface3":["fg-content-success-weak"],"success-stroke3":["stroke-surface-success-strong"],"success-stroke1":["stroke-surface-success"],"warning-surface2":["bg-surface-warning-weak"],"warning-surface4":["bg-surface-warning"],"warning-fgSurface4":["fg-content-warning"],"warning-fgSurface3":["fg-content-warning-weak"],"warning-stroke3":["stroke-surface-warning-strong"],"warning-stroke1":["stroke-surface-warning"],"error-bgFill1":["bg-interactive-error-strong"],"error-fgFill":["fg-interactive-error-strong","fg-interactive-error-strong-active"],"error-bgFill2":["bg-interactive-error-strong-active"],"error-surface2":["bg-interactive-error-active","bg-surface-error-weak"],"error-surface4":["bg-interactive-error-weak-active","bg-surface-error"],"error-fgSurface4":["fg-content-error"],"error-fgSurface3":["fg-content-error-weak","fg-interactive-error","fg-interactive-error-active"],"error-stroke3":["stroke-interactive-error","stroke-interactive-error-strong","stroke-surface-error-strong"],"error-stroke4":["stroke-interactive-error-active"],"error-stroke1":["stroke-surface-error"],"bg-surface2":["bg-surface-neutral"],"bg-surface5":["bg-interactive-neutral-strong-disabled"],"bg-surface4":["bg-interactive-neutral-weak-active"],"bg-surface3":["bg-surface-neutral-strong"],"bg-fgSurface4":["fg-content-neutral","fg-interactive-neutral","fg-interactive-neutral-active"],"bg-fgSurface3":["fg-content-neutral-weak","fg-interactive-neutral-weak"],"bg-fgSurface2":["fg-interactive-neutral-disabled","fg-interactive-neutral-strong-disabled","fg-interactive-neutral-weak-disabled"],"bg-stroke3":["bg-thumb-neutral-weak","stroke-interactive-neutral","stroke-surface-neutral-strong"],"bg-stroke4":["bg-thumb-neutral-weak-active","stroke-interactive-neutral-active","stroke-interactive-neutral-strong"],"bg-stroke2":["bg-thumb-neutral-disabled","bg-track-neutral","stroke-interactive-neutral-disabled","stroke-surface-neutral"],"bg-stroke1":["bg-track-neutral-weak","stroke-surface-neutral-weak"],"bg-bgFillInverted2":["bg-interactive-neutral-strong-active"],"bg-bgFillInverted1":["bg-interactive-neutral-strong"],"bg-fgFillInverted":["fg-interactive-neutral-strong","fg-interactive-neutral-strong-active"],"bg-surface1":["bg-surface-neutral-weak"],"caution-surface2":["bg-surface-caution-weak"],"caution-surface4":["bg-surface-caution"],"caution-fgSurface4":["fg-content-caution"],"caution-fgSurface3":["fg-content-caution-weak"]},O=R(L,{maxSize:10}),A=R(E,{maxSize:10}),V=[["--wp-components-color-accent","var(--wp-admin-theme-color)"],["--wp-components-color-accent-darker-10","var(--wp-admin-theme-color-darker-10)"],["--wp-components-color-accent-darker-20","var(--wp-admin-theme-color-darker-20)"],["--wp-components-color-accent-inverted","var(--wpds-color-fg-interactive-brand-strong)"],["--wp-components-color-background","var(--wpds-color-bg-surface-neutral-strong)"],["--wp-components-color-foreground","var(--wpds-color-fg-content-neutral)"],["--wp-components-color-foreground-inverted","var(--wpds-color-bg-surface-neutral)"],["--wp-components-color-gray-100","var(--wpds-color-bg-surface-neutral)"],["--wp-components-color-gray-200","var(--wpds-color-stroke-surface-neutral)"],["--wp-components-color-gray-300","var(--wpds-color-stroke-surface-neutral)"],["--wp-components-color-gray-400","var(--wpds-color-stroke-interactive-neutral)"],["--wp-components-color-gray-600","var(--wpds-color-stroke-interactive-neutral)"],["--wp-components-color-gray-700","var(--wpds-color-fg-content-neutral-weak)"],["--wp-components-color-gray-800","var(--wpds-color-fg-content-neutral)"]];function P(r){return D(r,$).coords.map(o=>Math.round((o??0)*255)).join(", ")}function M(r){const e=D(r,w),o=e.coords[2]??0,a=C(x(e),[w,"l"],Math.max(0,o-5)),n=C(x(e),[w,"l"],Math.max(0,o-10));return[["--wp-admin-theme-color",T(e)],["--wp-admin-theme-color--rgb",P(e)],["--wp-admin-theme-color-darker-10",T(a)],["--wp-admin-theme-color-darker-10--rgb",P(a)],["--wp-admin-theme-color-darker-20",T(n)],["--wp-admin-theme-color-darker-20--rgb",P(n)]]}function q(r){const e=[];for(const[o,{ramp:a}]of r)for(const[n,i]of Object.entries(a)){const u=`${o}-${n}`,c=W[u]??[];for(const p of c)e.push([`--wpds-color-${p}`,i])}return e}function B({primary:r,computedColorRamps:e}){return Object.fromEntries([q(e),M(r),V].flat())}function z({color:r={}}={}){const{resolvedSettings:e}=d.useContext(N),o=r.primary??e.color?.primary??S.primary,a=r.bg??e.color?.bg??S.bg,n=d.useMemo(()=>({color:{primary:o,bg:a}}),[o,a]),i=d.useMemo(()=>{const u={...S,bg:a,primary:o},c=new Map,p=O(u.bg);return Object.entries(u).forEach(([g,k])=>{g==="bg"?c.set(g,p):c.set(g,A(k,p))}),B({primary:u.primary,computedColorRamps:c})},[o,a]);return{resolvedSettings:n,themeProviderStyles:i}}const G="_root_th78q_1",y={root:G};function U(r){return Object.entries(r).map(([e,o])=>`${e}: ${o};`).join("")}function H({instanceId:r,isRoot:e}){const o='[data-wpds-root-provider="true"]',a=`[data-wpds-theme-provider-id="${r}"]`,n=[];return e&&n.push(`:root:has(.${y.root}${o}${a})`),n.push(`.${y.root}.${y.root}${a}`),n.join(",")}const l=({children:r,color:e={},isRoot:o=!1,density:a})=>{const n=d.useId(),{themeProviderStyles:i,resolvedSettings:u}=z({color:e}),c=d.useMemo(()=>({resolvedSettings:u}),[u]);return s(_,{children:[i?t("style",{children:`${H({instanceId:n,isRoot:o})} {${U(i)}}`}):null,t("div",{"data-wpds-theme-provider-id":n,"data-wpds-root-provider":o,"data-wpds-density":a,className:y.root,children:t(N.Provider,{value:c,children:r})})]})};try{l.displayName="ThemeProvider",l.__docgenInfo={description:"",displayName:"ThemeProvider",props:{children:{defaultValue:null,description:"The children to render.",name:"children",required:!1,type:{name:"ReactNode"}},isRoot:{defaultValue:{value:"false"},description:`When a ThemeProvider is the root provider, it will apply its theming
settings also to the root document element (e.g. the html element).
This is useful, for example, to make sure that the \`html\` element can
consume the right background color, or that overlays rendered inside a
portal can inherit the correct color scheme.`,name:"isRoot",required:!1,type:{name:"boolean"}},color:{defaultValue:{value:"{}"},description:"The set of color options to apply to the theme.",name:"color",required:!1,type:{name:"{ primary?: string; bg?: string; }"}},density:{defaultValue:{value:"undefined"},description:"The density of the theme. If left unspecified, the theme inherits from\nthe density of the closest `ThemeProvider`, or uses the default density\nif there is no inherited density.",name:"density",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"compact"'},{value:'"comfortable"'}]}}}}}catch{}const ee={title:"Design System/Theme/Theme Provider",component:l,args:{isRoot:!0},argTypes:{children:{control:!1}},parameters:{controls:{expanded:!0},docs:{canvas:{sourceState:"shown"}}},tags:["status-experimental"]};function K(){const r={},e={};for(const o of document.styleSheets)try{for(const a of o.cssRules||[]){const n=a.style;if(n)for(const i of n)(i.startsWith("--wp-admin-theme")||i.startsWith("--wp-components-color"))&&(e[i]=n.getPropertyValue(i).trim()),i.startsWith("--wpds-color")&&(r[i]=n.getPropertyValue(i).trim())}}catch(a){console.error(a);continue}return{semanticProps:r,legacyProps:e}}const I=({tokens:r})=>t("ul",{style:{listStyle:"none",display:"flex",flexDirection:"column",gap:"0.5rem"},children:Object.entries(r).map(([e])=>s("li",{style:{display:"grid",gridTemplateColumns:"80px	1fr",alignItems:"center",gap:"0.5rem"},children:[t("span",{style:{backgroundColor:`var(${e})`,border:"1px solid var(--wpds-color-stroke-surface-neutral)",width:"100%",aspectRatio:"2/1",display:"block"},"aria-label":e}),t("code",{children:e})]},e))}),F=()=>{const[r,e]=d.useState({semanticProps:{},legacyProps:{}});return d.useEffect(()=>{e(K())},[]),s("div",{style:{color:"var( --wpds-color-fg-content-neutral )"},children:[t("h1",{children:"Design System Color tokens"}),t("h2",{children:"Semantic tokens (can be consumed directly)"}),t(I,{tokens:r.semanticProps}),t("h2",{children:"Legacy tokens (should not be consumed directly)"}),s("details",{children:[t("summary",{children:"Click to expand"}),t(I,{tokens:r.legacyProps})]})]})},f={args:{children:t(F,{})}},h={render:r=>{const e=d.useId(),[o,a]=d.useState();return t(l,{...r,color:{primary:o},children:s("div",{style:{position:"relative"},children:[t("div",{style:{position:"sticky",top:0,right:0,backgroundColor:"var(--wpds-color-bg-surface-neutral)",color:"var( --wpds-color-fg-content-neutral )",padding:"0.5rem",borderRadius:"0.5rem",boxShadow:"0 0 0.5rem 0 rgba(0, 0, 0, 0.1)"},children:s("div",{children:[t("input",{type:"color",id:e,name:"primary",value:o,onChange:n=>a(n.target.value)}),t("label",{htmlFor:e,children:"Pick the primary color"})]})}),r.children]})})},args:{children:t(F,{})}},m=({bg:r="",primary:e="",density:o=""})=>s("div",{style:{padding:"var(--wpds-dimension-padding-surface-sm)",color:"var(--wpds-color-fg-content-neutral)",backgroundColor:"var(--wpds-color-bg-surface-neutral)",display:"flex",alignItems:"center",flexWrap:"wrap",gap:"1rem"},children:[s("pre",{style:{margin:0},children:["bg: ",r," | primary: ",e," | density: ",o]}),t("span",{style:{display:"inline-block",padding:"var(--wpds-dimension-padding-surface-xs)",borderRadius:"0.25rem",backgroundColor:"var(--wpds-color-bg-interactive-brand-strong)",color:"var(--wpds-color-fg-interactive-brand-strong)"},children:"primary"}),t("span",{style:{display:"inline-block",marginInlineStart:"0.25rem",padding:"var(--wpds-dimension-padding-surface-xs)",borderRadius:"0.25rem",backgroundColor:"var(--wpds-color-bg-interactive-neutral-weak-disabled)",color:"var(--wpds-color-fg-content-neutral)"},children:"Neutral"})]}),v={render:()=>s(l,{children:[t(m,{bg:"inherit (root)",primary:"inherit (root)",density:"inherit (root)"}),t("div",{style:{paddingInlineStart:"1rem"},children:s(l,{color:{bg:"#1e1e1e"},density:"compact",children:[t(m,{bg:"#1e1e1e",primary:"inherit (root)",density:"compact"}),t("div",{style:{paddingInlineStart:"1rem"},children:s(l,{children:[t(m,{bg:"inherit (#1e1e1e)",primary:"inherit (root)",density:"inherit (compact)"}),t("div",{style:{paddingInlineStart:"1rem"},children:s(l,{color:{primary:"hotpink"},density:"default",children:[t(m,{bg:"inherit (#1e1e1e)",primary:"hotpink",density:"default"}),t("div",{style:{paddingInlineStart:"1rem"},children:t(l,{color:{bg:"#f8f8f8"},children:t(m,{bg:"#f8f8f8",primary:"inherit (hotpink)",density:"inherit (default)"})})})]})})]})})]})})]})};function Y({children:r}){const e=d.useRef(null),[o,a]=d.useState(!1);return d.useEffect(()=>{const n=e.current;if(!n||!n.contentDocument)return;const i=n.contentDocument.head;Array.from(document.head.querySelectorAll('style, link[rel="stylesheet"]')).forEach(c=>{if(c.tagName==="STYLE")(c.textContent||"").includes("data-wpds-theme-provider-id")&&i.appendChild(c.cloneNode(!0));else if(c.tagName==="LINK"){const p=c.href;fetch(p).then(g=>g.text()).then(g=>{if(g.includes("data-wpds-theme-provider-id")){const k=c.cloneNode(!0);i.appendChild(k)}}).catch(g=>{console.warn("Failed to load stylesheet:",p,g)})}}),a(!0)},[]),t("iframe",{ref:e,style:{width:"100%",height:"400px",border:"1px solid #ccc"},title:"demo",children:o&&e.current?.contentDocument?.body&&j.createPortal(r,e.current.contentDocument.body)})}const b={render:r=>s(l,{...r,children:[r.children,s(Y,{children:[t("div",{style:{color:"var(--wpds-color-fg-content-neutral)"},children:"In the iframe, but outside of `ThemeProvider`"}),t(l,{...r,isRoot:!0,children:r.children})]})]}),args:{children:s("div",{style:{color:"var(--wpds-color-fg-content-neutral)"},children:["Code is poetry."," ",t("span",{style:{display:"inline-block",padding:"var(--wpds-dimension-padding-surface-xs)",borderRadius:"0.25rem",backgroundColor:"var(--wpds-color-bg-interactive-brand-strong)",color:"var(--wpds-color-fg-interactive-brand-strong)"},children:"primary"})]})}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    children: <DSTokensList />
  }
}`,...f.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => {
    const id = useId();
    const [primary, setPrimary] = useState<undefined | string>();
    return <ThemeProvider {...args} color={{
      primary
    }}>
                <div style={{
        position: 'relative'
      }}>
                    <div style={{
          position: 'sticky',
          top: 0,
          right: 0,
          backgroundColor: 'var(--wpds-color-bg-surface-neutral)',
          color: 'var( --wpds-color-fg-content-neutral )',
          padding: '0.5rem',
          borderRadius: '0.5rem',
          boxShadow: '0 0 0.5rem 0 rgba(0, 0, 0, 0.1)'
        }}>
                        <div>
                            <input type="color" id={id} name="primary" value={primary} onChange={e => setPrimary(e.target.value)} />
                            <label htmlFor={id}>Pick the primary color</label>
                        </div>
                    </div>
                    {args.children}
                </div>
            </ThemeProvider>;
  },
  args: {
    children: <DSTokensList />
  }
}`,...h.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <ThemeProvider>
                <NestingDebug bg="inherit (root)" primary="inherit (root)" density="inherit (root)" />
                <div style={{
        paddingInlineStart: '1rem'
      }}>
                    <ThemeProvider color={{
          bg: '#1e1e1e'
        }} density="compact">
                        <NestingDebug bg="#1e1e1e" primary="inherit (root)" density="compact" />
                        <div style={{
            paddingInlineStart: '1rem'
          }}>
                            <ThemeProvider>
                                <NestingDebug bg="inherit (#1e1e1e)" primary="inherit (root)" density="inherit (compact)" />
                                <div style={{
                paddingInlineStart: '1rem'
              }}>
                                    <ThemeProvider color={{
                  primary: 'hotpink'
                }} density="default">
                                        <NestingDebug bg="inherit (#1e1e1e)" primary="hotpink" density="default" />
                                        <div style={{
                    paddingInlineStart: '1rem'
                  }}>
                                            <ThemeProvider color={{
                      bg: '#f8f8f8'
                    }}>
                                                <NestingDebug bg="#f8f8f8" primary="inherit (hotpink)" density="inherit (default)" />
                                            </ThemeProvider>
                                        </div>
                                    </ThemeProvider>
                                </div>
                            </ThemeProvider>
                        </div>
                    </ThemeProvider>
                </div>
            </ThemeProvider>;
  }
}`,...v.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <ThemeProvider {...args}>
                {args.children}

                <IframeWithClonedTokenStyles>
                    <div style={{
          color: 'var(--wpds-color-fg-content-neutral)'
        }}>
                        In the iframe, but outside of \`ThemeProvider\`
                    </div>
                    <ThemeProvider {...args}
        // Note: the isRoot prop is necessary to apply the DS tokens to any
        // UI rendered outside of the ThemeProvider (including overlays, etc)
        isRoot>
                        {args.children}
                    </ThemeProvider>
                </IframeWithClonedTokenStyles>
            </ThemeProvider>;
  },
  args: {
    children: <div style={{
      color: 'var(--wpds-color-fg-content-neutral)'
    }}>
                Code is poetry.{' '}
                <span style={{
        display: 'inline-block',
        padding: 'var(--wpds-dimension-padding-surface-xs)',
        borderRadius: '0.25rem',
        backgroundColor: 'var(--wpds-color-bg-interactive-brand-strong)',
        color: 'var(--wpds-color-fg-interactive-brand-strong)'
      }}>
                    primary
                </span>
            </div>
  }
}`,...b.parameters?.docs?.source}}};export{b as AcrossIframes,f as Default,v as NestingAndInheriting,h as WithPicker,ee as default};
