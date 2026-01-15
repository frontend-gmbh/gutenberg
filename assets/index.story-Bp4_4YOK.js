import{j as r,f as p,r as u}from"./iframe-2TvY6Iig.js";import{B as l}from"./badge-DDVEBQbx.js";import"./preload-helper-Zf8nSx-t.js";import"./box-DQMFXIME.js";import"./useRender-CZYnIQEd.js";import"./useRenderElement-D_ShKst7.js";const x={title:"Design System/Components/Badge",component:l},e={args:{children:"Badge"}},n={...e,args:{...e.args,intent:"high"}},a={...e,args:{...e.args,intent:"medium"}},t={...e,args:{...e.args,intent:"low"}},s={...e,args:{...e.args,intent:"stable"}},o={...e,args:{...e.args,intent:"informational"}},i={...e,args:{...e.args,intent:"draft"}},c={...e,args:{...e.args,intent:"none"}},m={...e,render:g=>r("div",{style:{display:"grid",gridTemplateColumns:"max-content min-content",gap:"1rem",color:"var(--wpds-color-fg-content-neutral)"},children:["high","medium","low","stable","informational","draft","none"].map(d=>p(u.Fragment,{children:[r("div",{style:{paddingInlineEnd:"1rem",display:"flex",alignItems:"center"},children:d}),r("div",{style:{padding:"0.5rem 1rem",display:"flex",alignItems:"center"},children:r(l,{...g,intent:d})})]},d))})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Badge'
  }
}`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    intent: 'high'
  }
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    intent: 'medium'
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    intent: 'low'
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    intent: 'stable'
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    intent: 'informational'
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    intent: 'draft'
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    intent: 'none'
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  ...Default,
  render: args => <div style={{
    display: 'grid',
    gridTemplateColumns: 'max-content min-content',
    gap: '1rem',
    color: 'var(--wpds-color-fg-content-neutral)'
  }}>
            {(['high', 'medium', 'low', 'stable', 'informational', 'draft', 'none'] as const).map(intent => <Fragment key={intent}>
                    <div style={{
        paddingInlineEnd: '1rem',
        display: 'flex',
        alignItems: 'center'
      }}>
                        {intent}
                    </div>
                    <div style={{
        padding: '0.5rem 1rem',
        display: 'flex',
        alignItems: 'center'
      }}>
                        <Badge {...args} intent={intent} />
                    </div>
                </Fragment>)}
        </div>
}`,...m.parameters?.docs?.source}}};export{m as AllIntents,e as Default,i as Draft,n as High,o as Informational,t as Low,a as Medium,c as None,s as Stable,x as default};
