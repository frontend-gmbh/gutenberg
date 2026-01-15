import{a as l,c,r as m,j as u}from"./iframe-2TvY6Iig.js";import{a as o}from"./default-i18n-SWt35ZM4.js";import{c as d}from"./component-CmFsXMbx.js";import{c as f}from"./component-Cby4sHGh.js";import{r as g}from"./reset-DAroYZ4v.js";import{f as x}from"./format-underline-Bw2BKu1Z.js";import{f as h}from"./format-strikethrough-BFiNqs00.js";import"./preload-helper-Zf8nSx-t.js";import"./index-CLatOAvg.js";import"./component-OVYdkCXu.js";import"./index-DUXT-3wK.js";import"./is-plain-object-BJ3z7EOF.js";import"./index-CK8hcbFu.js";import"./deprecated-36px-size-TcvTyKs_.js";import"./component-BHPgM0nZ.js";import"./emotion-react.browser.esm-T2caqgd_.js";import"./space-BH12THzy.js";import"./index-BjRskdOB.js";import"./index-BjXx3EE5.js";import"./index-BcsUY9xg.js";import"./radio-group-DckMt_5-.js";import"./ITI7HKP4-_BMwSXRb.js";import"./LVA2YJMS-Bhv8eVm0.js";import"./LMDWO4NN-CH0ROf0T.js";import"./P2CTZE2T-C4NqLDvb.js";import"./NLEBE274-DHIyTr8t.js";import"./use-controlled-value-BWWH94q-.js";import"./index-Di3oHLN4.js";import"./index-DCGL3fHb.js";import"./component-CJEJbbVp.js";import"./index-CnMiRX9-.js";import"./cubic-bezier-CfzpfWNY.js";import"./T6C2RYFI-BXv3qAIm.js";import"./floating-ui.utils.dom-BlKqeV2W.js";import"./dropdown-motion-BMzsbdcX.js";import"./index-DdMUBdEx.js";import"./index-BIvJ8ozV.js";const C=[{label:o("None"),value:"none",icon:g},{label:o("Underline"),value:"underline",icon:x},{label:o("Strikethrough"),value:"line-through",icon:h}];function i({value:r,onChange:n,className:a}){return l.jsx(d,{isDeselectable:!0,__next40pxDefaultSize:!0,label:o("Decoration"),className:c("block-editor-text-decoration-control",a),value:r,onChange:t=>{n(t===r?void 0:t)},children:C.map(t=>l.jsx(f,{value:t.value,icon:t.icon,label:t.label},t.value))})}i.__docgenInfo={description:`Control to facilitate text decoration selections.

@param {Object}   props           Component props.
@param {string}   props.value     Currently selected text decoration.
@param {Function} props.onChange  Handles change in text decoration selection.
@param {string}   props.className Additional class name to apply.

@return {Element} Text decoration control.`,methods:[],displayName:"TextDecorationControl"};const ot={title:"BlockEditor/TextDecorationControl",component:i,parameters:{docs:{canvas:{sourceState:"shown"},description:{component:"Control to facilitate text decoration selections."}}},argTypes:{value:{control:{type:null},description:"Currently selected text decoration.",table:{type:{summary:"string"}}},onChange:{action:"onChange",control:{type:null},description:"Handles change in text decoration selection.",table:{type:{summary:"function"}}},className:{control:"text",description:"Additional class name to apply.",table:{type:{summary:"string"}}}}},e={render:function({onChange:n,...a}){const[t,p]=m.useState();return u(i,{...a,onChange:(...s)=>{n(...s),p(...s)},value:t})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: function Template({
    onChange,
    ...args
  }) {
    const [value, setValue] = useState();
    return <TextDecorationControl {...args} onChange={(...changeArgs) => {
      onChange(...changeArgs);
      setValue(...changeArgs);
    }} value={value} />;
  }
}`,...e.parameters?.docs?.source}}};export{e as Default,ot as default};
