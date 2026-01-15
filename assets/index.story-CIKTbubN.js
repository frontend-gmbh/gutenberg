import{a as l,c as p,r as c,j as u}from"./iframe-2TvY6Iig.js";import{a as e}from"./default-i18n-SWt35ZM4.js";import{c as f}from"./component-CmFsXMbx.js";import{c as d}from"./component-Cby4sHGh.js";import{r as g}from"./reset-DAroYZ4v.js";import{f as x,a as C}from"./format-uppercase-KHXFG70e.js";import{f as h}from"./format-capitalize-rEG3YaT9.js";import"./preload-helper-Zf8nSx-t.js";import"./index-CLatOAvg.js";import"./component-OVYdkCXu.js";import"./index-DUXT-3wK.js";import"./is-plain-object-BJ3z7EOF.js";import"./index-CK8hcbFu.js";import"./deprecated-36px-size-TcvTyKs_.js";import"./component-BHPgM0nZ.js";import"./emotion-react.browser.esm-T2caqgd_.js";import"./space-BH12THzy.js";import"./index-BjRskdOB.js";import"./index-BjXx3EE5.js";import"./index-BcsUY9xg.js";import"./radio-group-DckMt_5-.js";import"./ITI7HKP4-_BMwSXRb.js";import"./LVA2YJMS-Bhv8eVm0.js";import"./LMDWO4NN-CH0ROf0T.js";import"./P2CTZE2T-C4NqLDvb.js";import"./NLEBE274-DHIyTr8t.js";import"./use-controlled-value-BWWH94q-.js";import"./index-Di3oHLN4.js";import"./index-DCGL3fHb.js";import"./component-CJEJbbVp.js";import"./index-CnMiRX9-.js";import"./cubic-bezier-CfzpfWNY.js";import"./T6C2RYFI-BXv3qAIm.js";import"./floating-ui.utils.dom-BlKqeV2W.js";import"./dropdown-motion-BMzsbdcX.js";import"./index-DdMUBdEx.js";import"./index-BIvJ8ozV.js";const _=[{label:e("None"),value:"none",icon:g},{label:e("Uppercase"),value:"uppercase",icon:x},{label:e("Lowercase"),value:"lowercase",icon:C},{label:e("Capitalize"),value:"capitalize",icon:h}];function n({className:s,value:r,onChange:a}){return l.jsx(f,{isDeselectable:!0,__next40pxDefaultSize:!0,label:e("Letter case"),className:p("block-editor-text-transform-control",s),value:r,onChange:t=>{a(t===r?void 0:t)},children:_.map(t=>l.jsx(d,{value:t.value,icon:t.icon,label:t.label},t.value))})}n.__docgenInfo={description:`Control to facilitate text transform selections.

@param {Object}   props           Component props.
@param {string}   props.className Class name to add to the control.
@param {string}   props.value     Currently selected text transform.
@param {Function} props.onChange  Handles change in text transform selection.

@return {Element} Text transform control.`,methods:[],displayName:"TextTransformControl"};const ot={title:"BlockEditor/TextTransformControl",component:n,parameters:{docs:{canvas:{sourceState:"shown"},description:{component:"Control to facilitate text transformation selections."}}},argTypes:{onChange:{action:"onChange",control:{type:null},description:"Handles change in text transform selection.",table:{type:{summary:"function"}}},className:{control:{type:"text"},description:"Class name to add to the control.",table:{type:{summary:"string"}}},value:{control:{type:null},description:"Currently selected text transform.",table:{type:{summary:"string"}}}}},o={render:function({onChange:r,...a}){const[t,i]=c.useState();return u(n,{...a,onChange:(...m)=>{r(...m),i(...m)},value:t})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: function Template({
    onChange,
    ...args
  }) {
    const [value, setValue] = useState();
    return <TextTransformControl {...args} onChange={(...changeArgs) => {
      onChange(...changeArgs);
      setValue(...changeArgs);
    }} value={value} />;
  }
}`,...o.parameters?.docs?.source}}};export{o as Default,ot as default};
