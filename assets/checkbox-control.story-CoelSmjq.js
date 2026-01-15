import{r as m,j as a}from"./iframe-2TvY6Iig.js";import{u as d}from"./index-CLatOAvg.js";import{C as l,f as h}from"./story-utils-Cdt-_fbM.js";import{C as u}from"./index-BmlbbmG3.js";import"./preload-helper-Zf8nSx-t.js";import"./default-i18n-SWt35ZM4.js";import"./index-Dnuq8uNu.js";import"./index-BIvJ8ozV.js";import"./index-D3lQSxvx.js";import"./emotion-react.browser.esm-T2caqgd_.js";import"./colors-values-BSq3yUT9.js";import"./config-values-CkVNYk_w.js";import"./published-DdUPIXI6.js";import"./index-CFuMsoxH.js";import"./index-BjRskdOB.js";import"./index-BjXx3EE5.js";import"./index-Dt7LODwq.js";import"./index-1YdoA736.js";import"./cubic-bezier-CfzpfWNY.js";import"./T6C2RYFI-BXv3qAIm.js";import"./LVA2YJMS-Bhv8eVm0.js";import"./LMDWO4NN-CH0ROf0T.js";import"./floating-ui.utils.dom-BlKqeV2W.js";import"./dropdown-motion-BuMQU1CT.js";import"./component-BGXh8e92.js";import"./use-context-system-GBkKyJuM.js";import"./index-DUXT-3wK.js";import"./is-plain-object-BJ3z7EOF.js";import"./index-BtJmv7lM.js";import"./index-CK8hcbFu.js";import"./component-DATVQiJy.js";import"./index-DDuNjadK.js";import"./index-FlM62Vh8.js";import"./index-DckQhh-o.js";import"./base-control-styles-CoefPmVd.js";import"./space-CjrGwnR-.js";import"./font-Cck9kG94.js";import"./box-sizing-DDIeAART.js";import"./component-CIWI0tS-.js";import"./hook-D_MMjSqd.js";import"./values-CtPxXHrl.js";import"./get-valid-children-BTY2hlyh.js";import"./component-CqSZVoza.js";import"./hook-56LQ9BfU.js";import"./context-DbMhvW6o.js";import"./use-responsive-value-bUbLlkWc.js";import"./reset-DAroYZ4v.js";import"./check-CavNG0Pm.js";const k=({required:c,customValidity:r,markWhenOptional:i,...o},n)=>{const e=m.useRef(null),s=d([n,e]);return a(l,{required:c,markWhenOptional:i,ref:s,customValidity:r,getValidityTarget:()=>e.current?.querySelector('input[type="checkbox"]'),children:a(u,{...o})})},p=m.forwardRef(k),se={title:"Components/Selection & Input/Validated Form Controls/ValidatedCheckboxControl",id:"components-validatedcheckboxcontrol",component:p,tags:["status-private"],decorators:h,args:{onChange:()=>{}},argTypes:{checked:{control:!1},heading:{table:{disable:!0}}}},t={render:function({onChange:r,...i}){const[o,n]=m.useState(!1);return a(p,{...i,checked:o,onChange:e=>{n(e),r?.(e)},customValidity:o?{type:"invalid",message:"This checkbox may not be checked."}:void 0})}};t.args={required:!0,label:"Checkbox",help:"This checkbox may neither be checked nor unchecked."};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: function Template({
    onChange,
    ...args
  }) {
    const [checked, setChecked] = useState(false);
    return <ValidatedCheckboxControl {...args} checked={checked} onChange={newValue => {
      setChecked(newValue);
      onChange?.(newValue);
    }} customValidity={checked ? {
      type: 'invalid',
      message: 'This checkbox may not be checked.'
    } : undefined} />;
  }
}`,...t.parameters?.docs?.source}}};export{t as Default,se as default};
