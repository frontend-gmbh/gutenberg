import{B as n}from"./box-DQMFXIME.js";import"./iframe-2TvY6Iig.js";import"./preload-helper-Zf8nSx-t.js";import"./useRender-CZYnIQEd.js";import"./useRenderElement-D_ShKst7.js";const i={title:"Design System/Components/Box",component:n},o={args:{children:"Box",backgroundColor:"info",color:"info",padding:"sm",borderColor:"brand",borderRadius:"md",borderWidth:"sm"},argTypes:{padding:{control:"select",options:["2xs","xs","sm","md","lg"]}}},r={...o,args:{...o.args,padding:{blockStart:"sm",inline:"md",blockEnd:"lg"}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Box',
    backgroundColor: 'info',
    color: 'info',
    padding: 'sm',
    borderColor: 'brand',
    borderRadius: 'md',
    borderWidth: 'sm'
  },
  argTypes: {
    padding: {
      control: 'select',
      options: ['2xs', 'xs', 'sm', 'md', 'lg'] satisfies PaddingSize[]
    }
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    padding: {
      blockStart: 'sm',
      inline: 'md',
      blockEnd: 'lg'
    }
  }
}`,...r.parameters?.docs?.source}}};export{o as Default,r as DirectionalPadding,i as default};
