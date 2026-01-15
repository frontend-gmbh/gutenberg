import{j as a,f as i}from"./iframe-2TvY6Iig.js";import{E as s}from"./component-C8WFlLnR.js";import"./preload-helper-Zf8nSx-t.js";import"./emotion-react.browser.esm-T2caqgd_.js";import"./use-context-system-GBkKyJuM.js";import"./index-DUXT-3wK.js";import"./is-plain-object-BJ3z7EOF.js";import"./index-BtJmv7lM.js";import"./index-CK8hcbFu.js";import"./values-CtPxXHrl.js";import"./config-values-CkVNYk_w.js";import"./colors-values-BSq3yUT9.js";import"./component-DATVQiJy.js";const E={component:s,title:"Components/Elevation",argTypes:{as:{control:{type:"text"}},borderRadius:{control:{type:"text"}}},tags:["status-experimental"],parameters:{controls:{expanded:!0},docs:{canvas:{sourceState:"shown"}}}},c=o=>a("div",{style:{width:150,height:150,position:"relative"},children:a(s,{...o})}),n=o=>i("button",{style:{border:0,background:"transparent",width:150,height:150,position:"relative"},children:["Click me",a(s,{...o})]}),r=c.bind({});r.args={value:5};const t=n.bind({});t.args={...r.args,isInteractive:!0};const e=n.bind({});e.args={...r.args,hover:7,active:1,focus:10};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => {
  return <div style={{
    width: 150,
    height: 150,
    position: 'relative'
  }}>
            <Elevation {...args} />
        </div>;
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => {
  return <button style={{
    border: 0,
    background: 'transparent',
    width: 150,
    height: 150,
    position: 'relative'
  }}>
            Click me
            <Elevation {...args} />
        </button>;
}`,...t.parameters?.docs?.source},description:{story:"Enable the `isInteractive` prop to automatically generate values\nfor the hover/active/focus states.",...t.parameters?.docs?.description}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`args => {
  return <button style={{
    border: 0,
    background: 'transparent',
    width: 150,
    height: 150,
    position: 'relative'
  }}>
            Click me
            <Elevation {...args} />
        </button>;
}`,...e.parameters?.docs?.source},description:{story:"You can also provide custom values for the hover/active/focus states\ninstead of using the `isInteractive` prop.",...e.parameters?.docs?.description}}};try{t.displayName="WithInteractive",t.__docgenInfo={description:"Enable the `isInteractive` prop to automatically generate values\nfor the hover/active/focus states.",displayName:"WithInteractive",props:{}}}catch{}try{e.displayName="WithCustomInteractive",e.__docgenInfo={description:"You can also provide custom values for the hover/active/focus states\ninstead of using the `isInteractive` prop.",displayName:"WithCustomInteractive",props:{}}}catch{}export{r as Default,e as WithCustomInteractive,t as WithInteractive,E as default};
