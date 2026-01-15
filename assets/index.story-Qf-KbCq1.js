import{a as s,c as p,r as c,j as d}from"./iframe-2TvY6Iig.js";import{a as n,i as u}from"./default-i18n-SWt35ZM4.js";import{c as g}from"./component-CmFsXMbx.js";import{c as h}from"./component-Cby4sHGh.js";import{t as C,a as f}from"./text-vertical-BSKhUVFv.js";import"./preload-helper-Zf8nSx-t.js";import"./index-CLatOAvg.js";import"./component-OVYdkCXu.js";import"./index-DUXT-3wK.js";import"./is-plain-object-BJ3z7EOF.js";import"./index-CK8hcbFu.js";import"./deprecated-36px-size-TcvTyKs_.js";import"./component-BHPgM0nZ.js";import"./emotion-react.browser.esm-T2caqgd_.js";import"./space-BH12THzy.js";import"./index-BjRskdOB.js";import"./index-BjXx3EE5.js";import"./index-BcsUY9xg.js";import"./radio-group-DckMt_5-.js";import"./ITI7HKP4-_BMwSXRb.js";import"./LVA2YJMS-Bhv8eVm0.js";import"./LMDWO4NN-CH0ROf0T.js";import"./P2CTZE2T-C4NqLDvb.js";import"./NLEBE274-DHIyTr8t.js";import"./use-controlled-value-BWWH94q-.js";import"./index-Di3oHLN4.js";import"./index-DCGL3fHb.js";import"./component-CJEJbbVp.js";import"./index-CnMiRX9-.js";import"./cubic-bezier-CfzpfWNY.js";import"./T6C2RYFI-BXv3qAIm.js";import"./floating-ui.utils.dom-BlKqeV2W.js";import"./dropdown-motion-BMzsbdcX.js";import"./index-DdMUBdEx.js";import"./index-BIvJ8ozV.js";const v=[{label:n("Horizontal"),value:"horizontal-tb",icon:C},{label:n("Vertical"),value:u()?"vertical-lr":"vertical-rl",icon:f}];function a({className:i,value:e,onChange:r}){return s.jsx(g,{isDeselectable:!0,__next40pxDefaultSize:!0,label:n("Orientation"),className:p("block-editor-writing-mode-control",i),value:e,onChange:t=>{r(t===e?void 0:t)},children:v.map(t=>s.jsx(h,{value:t.value,icon:t.icon,label:t.label},t.value))})}a.__docgenInfo={description:`Control to facilitate writing mode selections.

@param {Object}   props           Component props.
@param {string}   props.className Class name to add to the control.
@param {string}   props.value     Currently selected writing mode.
@param {Function} props.onChange  Handles change in the writing mode selection.

@return {Element} Writing Mode control.`,methods:[],displayName:"WritingModeControl"};const tt={title:"BlockEditor/WritingModeControl",component:a,parameters:{docs:{canvas:{sourceState:"shown"},description:{component:"Control to facilitate writing mode selections."}}},argTypes:{value:{control:{type:null},description:"Currently selected writing mode."},className:{control:"text",description:"Class name to add to the control."},onChange:{action:"onChange",control:{type:null},description:"Handles change in the writing mode selection."}}},o={render:function({onChange:e,...r}){const[t,m]=c.useState();return d(a,{...r,onChange:(...l)=>{e(...l),m(...l)},value:t})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: function Template({
    onChange,
    ...args
  }) {
    const [value, setValue] = useState();
    return <WritingModeControl {...args} onChange={(...changeArgs) => {
      onChange(...changeArgs);
      setValue(...changeArgs);
    }} value={value} />;
  }
}`,...o.parameters?.docs?.source}}};export{o as Default,tt as default};
