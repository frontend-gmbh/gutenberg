import{r as i,c as L,j as u,f as T,F as $}from"./iframe-2TvY6Iig.js";import{s as j}from"./index-CXY7LZMH.js";import{a as H}from"./default-i18n-SWt35ZM4.js";import{r as V}from"./resets.module-DQfHskxl.js";import{f as q}from"./focus.module-DHbSX7ps.js";import{i as G}from"./floating-ui.utils.dom-BlKqeV2W.js";import{u as R}from"./useStableCallback-CAM0Xvk3.js";import{u as J}from"./useIsoLayoutEffect-DR4OyDQs.js";import{f as Q,m as X,b as F,u as Y}from"./useRenderElement-D_ShKst7.js";import{I as Z}from"./icon-D3usIUCs.js";import{c as ee}from"./cog-Ca06fBQs.js";import"./preload-helper-Zf8nSx-t.js";import"./index-BIvJ8ozV.js";const ne=i.createContext(void 0);function te(r=!1){const e=i.useContext(ne);if(e===void 0&&!r)throw new Error(Q(16));return e}function se(r){const{focusableWhenDisabled:e,disabled:s,composite:m=!1,tabIndex:l=0,isNativeButton:c}=r,g=m&&e!==!1,d=m&&e===!1;return{props:i.useMemo(()=>{const a={onKeyDown(f){s&&e&&f.key!=="Tab"&&f.preventDefault()}};return m||(a.tabIndex=l,!c&&s&&(a.tabIndex=e?l:-1)),(c&&(e||g)||!c&&s)&&(a["aria-disabled"]=s),c&&(!e||d)&&(a.disabled=s),a},[m,s,e,g,d,c,l])}}function re(r={}){const{disabled:e=!1,focusableWhenDisabled:s,tabIndex:m=0,native:l=!0}=r,c=i.useRef(null),g=te(!0)!==void 0,d=R(()=>{const o=c.current;return!!(o?.tagName==="A"&&o?.href)}),{props:p}=se({focusableWhenDisabled:s,disabled:e,composite:g,tabIndex:m,isNativeButton:l}),a=i.useCallback(()=>{const o=c.current;ae(o)&&g&&e&&p.disabled===void 0&&o.disabled&&(o.disabled=!1)},[e,p.disabled,g]);J(a,[a]);const f=i.useCallback((o={})=>{const{onClick:E,onMouseDown:O,onKeyUp:K,onKeyDown:M,onPointerDown:A,...U}=o;return X({type:l?"button":void 0,onClick(n){if(e){n.preventDefault();return}E?.(n)},onMouseDown(n){e||O?.(n)},onKeyDown(n){if(e||(F(n),M?.(n)),n.baseUIHandlerPrevented)return;const z=n.target===n.currentTarget&&!l&&!d()&&!e,N=n.key==="Enter",W=n.key===" ";z&&((W||N)&&n.preventDefault(),N&&E?.(n))},onKeyUp(n){e||(F(n),K?.(n)),!n.baseUIHandlerPrevented&&n.target===n.currentTarget&&!l&&!e&&n.key===" "&&E?.(n)},onPointerDown(n){if(e){n.preventDefault();return}A?.(n)}},l?void 0:{role:"button"},p,U)},[e,p,l,d]),y=R(o=>{c.current=o,a()});return{getButtonProps:f,buttonRef:y}}function ae(r){return G(r)&&r.tagName==="BUTTON"}const oe=i.forwardRef(function(e,s){const{render:m,className:l,disabled:c=!1,focusableWhenDisabled:g=!1,nativeButton:d=!0,...p}=e,a=!!c,{getButtonProps:f,buttonRef:y}=re({disabled:a,focusableWhenDisabled:g,native:d}),o=i.useMemo(()=>({disabled:a}),[a]);return Y("button",e,{state:o,ref:[s,y],props:[p,f]})}),ie="_button_1gr50_4",v={button:ie,"is-unstyled":"_is-unstyled_1gr50_5","is-loading":"_is-loading_1gr50_80","is-small":"_is-small_1gr50_121","is-brand":"_is-brand_1gr50_129","is-outline":"_is-outline_1gr50_133","is-minimal":"_is-minimal_1gr50_134","is-neutral":"_is-neutral_1gr50_156","is-solid":"_is-solid_1gr50_130","is-compact":"_is-compact_1gr50_195","loading-animation":"_loading-animation_1gr50_1"},le=i.forwardRef(function({tone:e="brand",variant:s="solid",size:m="default",className:l,focusableWhenDisabled:c=!0,disabled:g,loading:d,loadingAnnouncement:p=H("Loading"),children:a,...f},y){const o=L(V["box-sizing"],q["outset-ring--focus-except-active"],s!=="unstyled"&&v.button,v[`is-${e}`],v[`is-${s}`],v[`is-${m}`],d&&v["is-loading"],l);return i.useEffect(()=>{d&&p&&j(p)},[d,p]),u(oe,{ref:y,className:o,focusableWhenDisabled:c,disabled:g??d,...f,children:a})}),ce=i.forwardRef(function({icon:e,...s},m){return u(Z,{ref:m,icon:e,viewBox:"4 4 16 16",size:16,...s})}),D=Object.assign(le,{Icon:ce}),Ie={title:"Design System/Components/Button",component:D,argTypes:{"aria-pressed":{control:{type:"boolean"}}}},t={args:{children:"Button"}},_={...t,args:{...t.args,variant:"outline"}},h={...t,args:{...t.args,variant:"minimal"}},x={...t,args:{...t.args,size:"compact"}},B={...t,args:{...t.args,size:"small"}},I={...t,args:{...t.args,tone:"neutral"}},w={...t,args:{...t.args,tone:"neutral",variant:"outline"}},P={...t,args:{...t.args,variant:"unstyled"}},C={...t,render:r=>T("div",{style:{display:"grid",gridTemplateColumns:"max-content repeat(2, min-content)",color:"var(--wpds-color-fg-content-neutral)"},children:[u("div",{}),u("div",{style:{textAlign:"center"},children:"Resting"}),u("div",{style:{textAlign:"center"},children:"Disabled"}),["brand","neutral"].map(e=>u(i.Fragment,{children:["solid","outline","minimal","unstyled"].map(s=>T(i.Fragment,{children:[T("div",{style:{paddingInlineEnd:"1rem",display:"flex",alignItems:"center"},children:[s,", ",e]}),u("div",{style:{padding:"0.5rem 1rem",display:"flex",alignItems:"center"},children:u(D,{...r,tone:e,variant:s})}),u("div",{style:{padding:"0.5rem 1rem",display:"flex",alignItems:"center"},children:u(D,{...r,tone:e,variant:s,disabled:!0})})]},s))},e))]})},S={...t,args:{...t.args,children:T($,{children:[u(D.Icon,{icon:ee}),"Button"]})}},k={...t,args:{...t.args,loading:!0,loadingAnnouncement:"Saving data"}},b={...t,args:{...t.args,tone:"neutral",variant:"minimal"},render:r=>{const[e,s]=i.useState(!0);return u(D,{...r,"aria-pressed":e,onClick:()=>s(!e),children:"Button"})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Button'
  }
}`,...t.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    variant: 'outline'
  }
}`,..._.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    variant: 'minimal'
  }
}`,...h.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    size: 'compact'
  }
}`,...x.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    size: 'small'
  }
}`,...B.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    tone: 'neutral'
  }
}`,...I.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    tone: 'neutral',
    variant: 'outline'
  }
}`,...w.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    variant: 'unstyled'
  }
}`,...P.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  ...Default,
  render: args => <div style={{
    display: 'grid',
    gridTemplateColumns: 'max-content repeat(2, min-content)',
    color: 'var(--wpds-color-fg-content-neutral)'
  }}>
            <div></div>
            <div style={{
      textAlign: 'center'
    }}>Resting</div>
            <div style={{
      textAlign: 'center'
    }}>Disabled</div>
            {(['brand', 'neutral'] as const).map(tone => <Fragment key={tone}>
                    {(['solid', 'outline', 'minimal', 'unstyled'] as const).map(variant => <Fragment key={variant}>
                            <div style={{
          paddingInlineEnd: '1rem',
          display: 'flex',
          alignItems: 'center'
        }}>
                                {variant}, {tone}
                            </div>
                            <div style={{
          padding: '0.5rem 1rem',
          display: 'flex',
          alignItems: 'center'
        }}>
                                <Button {...args} tone={tone} variant={variant} />
                            </div>
                            <div style={{
          padding: '0.5rem 1rem',
          display: 'flex',
          alignItems: 'center'
        }}>
                                <Button {...args} tone={tone} variant={variant}
          // Disabling because this lint rule was meant for the
          // \`@wordpress/components\` Button, but is being applied here.
          // TODO: rework the lint rule so that it checks the package
          // where the Button comes from.
          // eslint-disable-next-line no-restricted-syntax
          disabled />
                            </div>
                        </Fragment>)}
                </Fragment>)}
        </div>
}`,...C.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    children: <>
                <Button.Icon icon={cog} />
                Button
            </>
  }
}`,...S.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    loading: true,
    loadingAnnouncement: 'Saving data'
  }
}`,...k.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    tone: 'neutral',
    variant: 'minimal'
  },
  render: args => {
    const [isPressed, setIsPressed] = useState(true);
    return <Button {...args} aria-pressed={isPressed} onClick={() => setIsPressed(!isPressed)}>
                Button
            </Button>;
  }
}`,...b.parameters?.docs?.source},description:{story:'The pressed state is only available for buttons with `tone="neutral"` and\n`variant="minimal"`. This represents a toggle button that is currently in an\nactive/pressed state.',...b.parameters?.docs?.description}}};try{b.displayName="Pressed",b.__docgenInfo={description:'The pressed state is only available for buttons with `tone="neutral"` and\n`variant="minimal"`. This represents a toggle button that is currently in an\nactive/pressed state.',displayName:"Pressed",props:{}}}catch{}export{C as AllTonesAndVariants,x as Compact,t as Default,k as Loading,h as Minimal,I as Neutral,w as NeutralOutline,_ as Outline,b as Pressed,B as Small,P as Unstyled,S as WithIcon,Ie as default};
