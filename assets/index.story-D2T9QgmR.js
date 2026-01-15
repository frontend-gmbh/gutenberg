import{j as i}from"./iframe-2TvY6Iig.js";import{I as a}from"./index-BzNMbJed.js";import"./preload-helper-Zf8nSx-t.js";import"./resets.module-DQfHskxl.js";const m={title:"Design System/Components/Form/Primitives/InputLayout",component:a,subcomponents:{Slot:a.Slot}},s={args:{}},e={args:{prefix:i("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",aspectRatio:"1 / 1",background:"#eee"},children:"$"})}},t={args:{prefix:i(a.Slot,{children:"https://"})}},o={args:{size:"compact"}},r={args:{size:"small"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...s.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    prefix: <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      aspectRatio: '1 / 1',
      background: '#eee'
    }}>
                $
            </div>
  }
}`,...e.parameters?.docs?.source},description:{story:"By default, the `prefix` and `suffix` slots are rendered with no padding.",...e.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    prefix: <InputLayout.Slot>https://</InputLayout.Slot>
  }
}`,...t.parameters?.docs?.source},description:{story:'The `InputLayout.Slot` component can be used to add standard padding in\nthe `prefix` or `suffix` slot.\n\nThe `padding="minimal"` setting will work best when the slot content is a button or icon.',...t.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'compact'
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'small'
  }
}`,...r.parameters?.docs?.source},description:{story:"The `small` size is intended only for rare cases like the trigger\nbutton of a low-profile `select` element.",...r.parameters?.docs?.description}}};try{e.displayName="WithPrefix",e.__docgenInfo={description:"By default, the `prefix` and `suffix` slots are rendered with no padding.",displayName:"WithPrefix",props:{}}}catch{}try{t.displayName="WithPaddedPrefix",t.__docgenInfo={description:'The `InputLayout.Slot` component can be used to add standard padding in\nthe `prefix` or `suffix` slot.\n\nThe `padding="minimal"` setting will work best when the slot content is a button or icon.',displayName:"WithPaddedPrefix",props:{}}}catch{}try{r.displayName="Small",r.__docgenInfo={description:"The `small` size is intended only for rare cases like the trigger\nbutton of a low-profile `select` element.",displayName:"Small",props:{}}}catch{}export{o as Compact,s as Default,r as Small,t as WithPaddedPrefix,e as WithPrefix,m as default};
