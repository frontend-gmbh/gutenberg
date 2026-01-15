import{r as p,a as m,c,j as u}from"./iframe-2TvY6Iig.js";import{a as e}from"./default-i18n-SWt35ZM4.js";import{c as g}from"./component-CmFsXMbx.js";import{c as d}from"./component-Cby4sHGh.js";import{a as f,b as x,c as h}from"./align-right-DwLyYZEh.js";import{a as y}from"./align-justify-Xc3Thg59.js";import"./preload-helper-Zf8nSx-t.js";import"./index-CLatOAvg.js";import"./component-OVYdkCXu.js";import"./index-DUXT-3wK.js";import"./is-plain-object-BJ3z7EOF.js";import"./index-CK8hcbFu.js";import"./deprecated-36px-size-TcvTyKs_.js";import"./component-BHPgM0nZ.js";import"./emotion-react.browser.esm-T2caqgd_.js";import"./space-BH12THzy.js";import"./index-BjRskdOB.js";import"./index-BjXx3EE5.js";import"./index-BcsUY9xg.js";import"./radio-group-DckMt_5-.js";import"./ITI7HKP4-_BMwSXRb.js";import"./LVA2YJMS-Bhv8eVm0.js";import"./LMDWO4NN-CH0ROf0T.js";import"./P2CTZE2T-C4NqLDvb.js";import"./NLEBE274-DHIyTr8t.js";import"./use-controlled-value-BWWH94q-.js";import"./index-Di3oHLN4.js";import"./index-DCGL3fHb.js";import"./component-CJEJbbVp.js";import"./index-CnMiRX9-.js";import"./cubic-bezier-CfzpfWNY.js";import"./T6C2RYFI-BXv3qAIm.js";import"./floating-ui.utils.dom-BlKqeV2W.js";import"./dropdown-motion-BMzsbdcX.js";import"./index-DdMUBdEx.js";import"./index-BIvJ8ozV.js";const v=[{label:e("Align text left"),value:"left",icon:f},{label:e("Align text center"),value:"center",icon:x},{label:e("Align text right"),value:"right",icon:h},{label:e("Justify text"),value:"justify",icon:y}],C=["left","center","right"];function i({className:s,value:n,onChange:l,options:o=C}){const r=p.useMemo(()=>v.filter(t=>o.includes(t.value)),[o]);return r.length?m.jsx(g,{isDeselectable:!0,__next40pxDefaultSize:!0,label:e("Text alignment"),className:c("block-editor-text-alignment-control",s),value:n,onChange:t=>{l(t===n?void 0:t)},children:r.map(t=>m.jsx(d,{value:t.value,icon:t.icon,label:t.label},t.value))}):null}i.__docgenInfo={description:`Control to facilitate text alignment selections.

@param {Object}   props           Component props.
@param {string}   props.className Class name to add to the control.
@param {string}   props.value     Currently selected text alignment.
@param {Function} props.onChange  Handles change in text alignment selection.
@param {string[]} props.options   Array of text alignment options to display.

@return {Element} Text alignment control.`,methods:[],displayName:"TextAlignmentControl",props:{options:{defaultValue:{value:"[ 'left', 'center', 'right' ]",computed:!1},required:!1}}};const ot={title:"BlockEditor/TextAlignmentControl",component:i,tags:["status-private"],parameters:{docs:{canvas:{sourceState:"shown"},description:{component:"Control to facilitate text alignment selections."}}},argTypes:{value:{control:{type:null},description:"Currently selected text alignment value.",table:{type:{summary:"string"}}},onChange:{action:"onChange",control:{type:null},description:"Handles change in text alignment selection.",table:{type:{summary:"function"}}},options:{control:"check",description:"Array of text alignment options to display.",options:["left","center","right","justify"],table:{type:{summary:"array"}}},className:{control:"text",description:"Class name to add to the control.",table:{type:{summary:"string"}}}}},a={render:function({onChange:n,...l}){const[o,r]=p.useState();return u(i,{...l,onChange:(...t)=>{n(...t),r(...t)},value:o})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: function Template({
    onChange,
    ...args
  }) {
    const [value, setValue] = useState();
    return <TextAlignmentControl {...args} onChange={(...changeArgs) => {
      onChange(...changeArgs);
      setValue(...changeArgs);
    }} value={value} />;
  }
}`,...a.parameters?.docs?.source}}};export{a as Default,ot as default};
