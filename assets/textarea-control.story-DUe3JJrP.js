import{r as s,j as n}from"./iframe-2TvY6Iig.js";import{C as d,f as u}from"./story-utils-Cdt-_fbM.js";import{u as c}from"./index-CLatOAvg.js";import{T as f}from"./index-BbHVtilX.js";import"./preload-helper-Zf8nSx-t.js";import"./default-i18n-SWt35ZM4.js";import"./index-Dnuq8uNu.js";import"./index-BIvJ8ozV.js";import"./index-D3lQSxvx.js";import"./emotion-react.browser.esm-T2caqgd_.js";import"./colors-values-BSq3yUT9.js";import"./config-values-CkVNYk_w.js";import"./published-DdUPIXI6.js";import"./index-CFuMsoxH.js";import"./index-BjRskdOB.js";import"./index-BjXx3EE5.js";import"./index-Dt7LODwq.js";import"./index-1YdoA736.js";import"./cubic-bezier-CfzpfWNY.js";import"./T6C2RYFI-BXv3qAIm.js";import"./LVA2YJMS-Bhv8eVm0.js";import"./LMDWO4NN-CH0ROf0T.js";import"./floating-ui.utils.dom-BlKqeV2W.js";import"./dropdown-motion-BuMQU1CT.js";import"./component-BGXh8e92.js";import"./use-context-system-GBkKyJuM.js";import"./index-DUXT-3wK.js";import"./is-plain-object-BJ3z7EOF.js";import"./index-BtJmv7lM.js";import"./index-CK8hcbFu.js";import"./component-DATVQiJy.js";import"./index-DckQhh-o.js";import"./base-control-styles-CoefPmVd.js";import"./space-CjrGwnR-.js";import"./font-Cck9kG94.js";import"./box-sizing-DDIeAART.js";const g=({required:m,customValidity:o,markWhenOptional:a,...t},i)=>{const r=s.useRef(null),l=c([i,r]);return n(d,{required:m,markWhenOptional:a,customValidity:o,getValidityTarget:()=>r.current,children:n(f,{ref:l,...t})})},p=s.forwardRef(g),_={title:"Components/Selection & Input/Validated Form Controls/ValidatedTextareaControl",id:"components-validatedtextareacontrol",component:p,tags:["status-private"],decorators:u,args:{onChange:()=>{}},argTypes:{value:{control:!1}}},e={render:function({onChange:o,...a}){const[t,i]=s.useState("");return n(p,{...a,value:t,onChange:r=>{i(r),o?.(r)},customValidity:t?.toLowerCase()==="error"?{type:"invalid",message:'The word "error" is not allowed.'}:void 0})}};e.args={required:!0,label:"Textarea",help:'The word "error" will trigger an error.'};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: function Template({
    onChange,
    ...args
  }) {
    const [value, setValue] = useState<React.ComponentProps<typeof ValidatedTextareaControl>['value']>('');
    return <ValidatedTextareaControl {...args} value={value} onChange={newValue => {
      setValue(newValue);
      onChange?.(newValue);
    }} customValidity={value?.toLowerCase() === 'error' ? {
      type: 'invalid',
      message: 'The word "error" is not allowed.'
    } : undefined} />;
  }
}`,...e.parameters?.docs?.source}}};export{e as Default,_ as default};
