import{r as i,j as p}from"./iframe-2TvY6Iig.js";import{C as d,f as c}from"./story-utils-Cdt-_fbM.js";import{u as g}from"./index-CLatOAvg.js";import{T as u}from"./index-CITquXbN.js";import"./preload-helper-Zf8nSx-t.js";import"./default-i18n-SWt35ZM4.js";import"./index-Dnuq8uNu.js";import"./index-BIvJ8ozV.js";import"./index-D3lQSxvx.js";import"./emotion-react.browser.esm-T2caqgd_.js";import"./colors-values-BSq3yUT9.js";import"./config-values-CkVNYk_w.js";import"./published-DdUPIXI6.js";import"./index-CFuMsoxH.js";import"./index-BjRskdOB.js";import"./index-BjXx3EE5.js";import"./index-Dt7LODwq.js";import"./index-1YdoA736.js";import"./cubic-bezier-CfzpfWNY.js";import"./T6C2RYFI-BXv3qAIm.js";import"./LVA2YJMS-Bhv8eVm0.js";import"./LMDWO4NN-CH0ROf0T.js";import"./floating-ui.utils.dom-BlKqeV2W.js";import"./dropdown-motion-BuMQU1CT.js";import"./component-BGXh8e92.js";import"./use-context-system-GBkKyJuM.js";import"./index-DUXT-3wK.js";import"./is-plain-object-BJ3z7EOF.js";import"./index-BtJmv7lM.js";import"./index-CK8hcbFu.js";import"./component-DATVQiJy.js";import"./index-cTr3VGcq.js";import"./index-DckQhh-o.js";import"./base-control-styles-CoefPmVd.js";import"./space-CjrGwnR-.js";import"./font-Cck9kG94.js";import"./box-sizing-DDIeAART.js";import"./component-BiaHS86M.js";import"./hook-56LQ9BfU.js";import"./context-DbMhvW6o.js";import"./use-responsive-value-bUbLlkWc.js";import"./component-CIWI0tS-.js";import"./hook-D_MMjSqd.js";import"./values-CtPxXHrl.js";import"./get-valid-children-BTY2hlyh.js";import"./component-CqSZVoza.js";const f=({required:o,customValidity:n,markWhenOptional:a,...r},m)=>{const e=i.useRef(null),l=g([m,e]);return i.useEffect(()=>{e.current&&(e.current.required=o??!1)},[o]),p(d,{required:o,markWhenOptional:a,customValidity:n,getValidityTarget:()=>e.current,children:p(u,{ref:l,...r})})},s=i.forwardRef(f),pe={title:"Components/Selection & Input/Validated Form Controls/ValidatedToggleControl",id:"components-validatedtogglecontrol",component:s,tags:["status-private"],decorators:c,args:{onChange:()=>{}},argTypes:{checked:{control:!1}}},t={render:function({onChange:n,...a}){const[r,m]=i.useState(!1);return p(s,{...a,checked:r,onChange:e=>{m(e),n?.(e)},customValidity:r?{type:"invalid",message:"This toggle may not be enabled."}:void 0})}};t.args={required:!0,label:"Toggle",help:"This toggle may neither be enabled nor disabled."};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: function Template({
    onChange,
    ...args
  }) {
    const [checked, setChecked] = useState(false);
    return <ValidatedToggleControl {...args} checked={checked} onChange={newValue => {
      setChecked(newValue);
      onChange?.(newValue);
    }} customValidity={checked ? {
      type: 'invalid',
      message: 'This toggle may not be enabled.'
    } : undefined} />;
  }
}`,...t.parameters?.docs?.source}}};export{t as Default,pe as default};
