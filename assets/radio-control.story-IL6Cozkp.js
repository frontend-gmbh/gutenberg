import{r as p,j as n}from"./iframe-2TvY6Iig.js";import{u as d}from"./index-CLatOAvg.js";import{C as c,f as u}from"./story-utils-Cdt-_fbM.js";import{R as f}from"./index-lu5ynKAw.js";import"./preload-helper-Zf8nSx-t.js";import"./default-i18n-SWt35ZM4.js";import"./index-Dnuq8uNu.js";import"./index-BIvJ8ozV.js";import"./index-D3lQSxvx.js";import"./emotion-react.browser.esm-T2caqgd_.js";import"./colors-values-BSq3yUT9.js";import"./config-values-CkVNYk_w.js";import"./published-DdUPIXI6.js";import"./index-CFuMsoxH.js";import"./index-BjRskdOB.js";import"./index-BjXx3EE5.js";import"./index-Dt7LODwq.js";import"./index-1YdoA736.js";import"./cubic-bezier-CfzpfWNY.js";import"./T6C2RYFI-BXv3qAIm.js";import"./LVA2YJMS-Bhv8eVm0.js";import"./LMDWO4NN-CH0ROf0T.js";import"./floating-ui.utils.dom-BlKqeV2W.js";import"./dropdown-motion-BuMQU1CT.js";import"./component-BGXh8e92.js";import"./use-context-system-GBkKyJuM.js";import"./index-DUXT-3wK.js";import"./is-plain-object-BJ3z7EOF.js";import"./index-BtJmv7lM.js";import"./index-CK8hcbFu.js";import"./component-DATVQiJy.js";import"./index-DckQhh-o.js";import"./base-control-styles-CoefPmVd.js";import"./space-CjrGwnR-.js";import"./font-Cck9kG94.js";import"./box-sizing-DDIeAART.js";import"./component-6CLxCT3h.js";import"./hook-D_MMjSqd.js";import"./values-CtPxXHrl.js";import"./get-valid-children-BTY2hlyh.js";import"./component-CqSZVoza.js";import"./hook-56LQ9BfU.js";import"./context-DbMhvW6o.js";import"./use-responsive-value-bUbLlkWc.js";const g=({required:m,customValidity:r,markWhenOptional:i,...e},a)=>{const t=p.useRef(null),l=d([a,t]);return n(c,{required:m,markWhenOptional:i,ref:l,customValidity:r,getValidityTarget:()=>t.current?.querySelector('input[type="radio"]'),children:n(f,{...e})})},s=p.forwardRef(g),nt={title:"Components/Selection & Input/Validated Form Controls/ValidatedRadioControl",id:"components-validatedradiocontrol",component:s,tags:["status-private"],decorators:u,args:{onChange:()=>{}},argTypes:{selected:{control:!1}}},o={render:function({onChange:r,...i}){const[e,a]=p.useState();return n(s,{...i,selected:e,onChange:t=>{a(t),r?.(t)},customValidity:e==="b"?{type:"invalid",message:"Option B is not allowed."}:void 0})}};o.args={required:!0,label:"Radio",help:"Option B is not allowed.",options:[{label:"Option A",value:"a"},{label:"Option B (not allowed)",value:"b"}]};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: function Template({
    onChange,
    ...args
  }) {
    const [selected, setSelected] = useState<React.ComponentProps<typeof ValidatedRadioControl>['selected']>();
    return <ValidatedRadioControl {...args} selected={selected} onChange={newValue => {
      setSelected(newValue);
      onChange?.(newValue);
    }} customValidity={selected === 'b' ? {
      type: 'invalid',
      message: 'Option B is not allowed.'
    } : undefined} />;
  }
}`,...o.parameters?.docs?.source}}};export{o as Default,nt as default};
