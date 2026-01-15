import{r as m,j as s}from"./iframe-2TvY6Iig.js";import{V as u}from"./input-control-EFeYHR-t.js";import{f}from"./story-utils-Cdt-_fbM.js";import{I as w}from"./input-suffix-wrapper-Gn_aDXNL.js";import{B as g}from"./index-CFuMsoxH.js";import{u as v,s as h}from"./unseen-BT86p3iu.js";import"./preload-helper-Zf8nSx-t.js";import"./index-CLatOAvg.js";import"./index-dvLnGrYd.js";import"./index-BjXx3EE5.js";import"./input-base-DiRopTRM.js";import"./emotion-react.browser.esm-T2caqgd_.js";import"./component-l_ygUujJ.js";import"./context-DbMhvW6o.js";import"./index-BjRskdOB.js";import"./use-responsive-value-bUbLlkWc.js";import"./space-CjrGwnR-.js";import"./use-context-system-GBkKyJuM.js";import"./index-DUXT-3wK.js";import"./is-plain-object-BJ3z7EOF.js";import"./index-BtJmv7lM.js";import"./index-CK8hcbFu.js";import"./component-DATVQiJy.js";import"./component-CqSZVoza.js";import"./hook-56LQ9BfU.js";import"./component-DEBvv9-v.js";import"./hook-D7E4jAJ2.js";import"./names-BarMHYgS.js";import"./config-values-CkVNYk_w.js";import"./colors-values-BSq3yUT9.js";import"./index-CWa7Pedq.js";import"./hook-CHurV6sy.js";import"./values-CtPxXHrl.js";import"./base-control-styles-CoefPmVd.js";import"./font-Cck9kG94.js";import"./box-sizing-DDIeAART.js";import"./rtl-C-j_aU_R.js";import"./default-i18n-SWt35ZM4.js";import"./component-BGXh8e92.js";import"./use-deprecated-props-BokcF_Hx.js";import"./use-gesture-react.esm-BHlZEJgV.js";import"./actions-elSjqZJg.js";import"./with-ignore-ime-events-BK39a-UH.js";import"./index-DckQhh-o.js";import"./deprecated-36px-size-UsjcW-j9.js";import"./index-Dnuq8uNu.js";import"./index-BIvJ8ozV.js";import"./index-D3lQSxvx.js";import"./published-DdUPIXI6.js";import"./index-Dt7LODwq.js";import"./index-1YdoA736.js";import"./cubic-bezier-CfzpfWNY.js";import"./T6C2RYFI-BXv3qAIm.js";import"./LVA2YJMS-Bhv8eVm0.js";import"./LMDWO4NN-CH0ROf0T.js";import"./floating-ui.utils.dom-BlKqeV2W.js";import"./dropdown-motion-BuMQU1CT.js";const be={title:"Components/Selection & Input/Validated Form Controls/ValidatedInputControl",id:"components-validatedinputcontrol",component:u,tags:["status-private"],decorators:f,args:{onChange:()=>{}},argTypes:{__unstableInputWidth:{control:{type:"text"}},__unstableStateReducer:{control:!1},onChange:{control:!1},prefix:{control:!1},suffix:{control:!1},type:{control:{type:"text"}},value:{control:!1}}},o={render:function({onChange:i,...n}){const[t,l]=m.useState("");return s(u,{...n,value:t,onChange:(r,...p)=>{l(r),i?.(r,...p)},customValidity:t?.toLowerCase()==="error"?{type:"invalid",message:'The word "error" is not allowed.'}:void 0})}};o.args={required:!0,label:"Input",help:'The word "error" will trigger an error.'};const e={render:function({onChange:i,...n}){const[t,l]=m.useState(""),[r,p]=m.useState(!1);return s(u,{...n,type:r?"text":"password",suffix:s(w,{variant:"control",children:s(g,{size:"small",icon:r?v:h,onClick:()=>p(a=>!a),label:r?"Hide password":"Show password"})}),value:t,onChange:(a,...c)=>{l(a),i?.(a,...c)},customValidity:(()=>{if(!/\d/.test(t??""))return{type:"invalid",message:"Password must include at least one number."};if(!/[A-Z]/.test(t??""))return{type:"invalid",message:"Password must include at least one capital letter."};if(!/[!@£$%^&*#]/.test(t??""))return{type:"invalid",message:"Password must include at least one symbol."}})()})}};e.args={required:!0,label:"Password",help:"Minimum 8 characters, include a number, capital letter, and symbol (!@£$%^&*#).",minLength:8};e.argTypes={suffix:{control:!1},type:{control:!1}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: function Template({
    onChange,
    ...args
  }) {
    const [value, setValue] = useState<string | undefined>('');
    return <ValidatedInputControl {...args} value={value} onChange={(newValue, ...rest) => {
      setValue(newValue);
      onChange?.(newValue, ...rest);
    }} customValidity={value?.toLowerCase() === 'error' ? {
      type: 'invalid',
      message: 'The word "error" is not allowed.'
    } : undefined} />;
  }
}`,...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: function Template({
    onChange,
    ...args
  }) {
    const [value, setValue] = useState<string | undefined>('');
    const [visible, setVisible] = useState(false);
    return <ValidatedInputControl {...args} type={visible ? 'text' : 'password'} suffix={<InputControlSuffixWrapper variant="control">
                        <Button size="small" icon={visible ? unseen : seen} onClick={() => setVisible(v => !v)} label={visible ? 'Hide password' : 'Show password'} />
                    </InputControlSuffixWrapper>} value={value} onChange={(newValue, ...rest) => {
      setValue(newValue);
      onChange?.(newValue, ...rest);
    }} customValidity={(() => {
      if (!/\\d/.test(value ?? '')) {
        return {
          type: 'invalid' as const,
          message: 'Password must include at least one number.'
        };
      }
      if (!/[A-Z]/.test(value ?? '')) {
        return {
          type: 'invalid' as const,
          message: 'Password must include at least one capital letter.'
        };
      }
      if (!/[!@£$%^&*#]/.test(value ?? '')) {
        return {
          type: 'invalid' as const,
          message: 'Password must include at least one symbol.'
        };
      }
      return undefined;
    })()} />;
  }
}`,...e.parameters?.docs?.source},description:{story:`This demonstrates how password validation would work with the standard implementation.

We are planning to move to a custom implementation more tailored to the password use case.`,...e.parameters?.docs?.description}}};try{e.displayName="Password",e.__docgenInfo={description:`This demonstrates how password validation would work with the standard implementation.

We are planning to move to a custom implementation more tailored to the password use case.`,displayName:"Password",props:{}}}catch{}export{o as Default,e as Password,be as default};
