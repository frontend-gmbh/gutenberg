import{r as g,j as h}from"./iframe-2TvY6Iig.js";import{U as d,C}from"./index-CmMtMv11.js";import"./preload-helper-Zf8nSx-t.js";import"./index-BjRskdOB.js";import"./default-i18n-SWt35ZM4.js";import"./emotion-react.browser.esm-T2caqgd_.js";import"./index-w5J4Ezdm.js";import"./index-CLatOAvg.js";import"./index-dvLnGrYd.js";import"./index-BjXx3EE5.js";import"./input-base-DiRopTRM.js";import"./component-l_ygUujJ.js";import"./context-DbMhvW6o.js";import"./use-responsive-value-bUbLlkWc.js";import"./space-CjrGwnR-.js";import"./use-context-system-GBkKyJuM.js";import"./index-DUXT-3wK.js";import"./is-plain-object-BJ3z7EOF.js";import"./index-BtJmv7lM.js";import"./index-CK8hcbFu.js";import"./component-DATVQiJy.js";import"./component-CqSZVoza.js";import"./hook-56LQ9BfU.js";import"./component-DEBvv9-v.js";import"./hook-D7E4jAJ2.js";import"./names-BarMHYgS.js";import"./config-values-CkVNYk_w.js";import"./colors-values-BSq3yUT9.js";import"./index-CWa7Pedq.js";import"./hook-CHurV6sy.js";import"./values-CtPxXHrl.js";import"./base-control-styles-CoefPmVd.js";import"./font-Cck9kG94.js";import"./box-sizing-DDIeAART.js";import"./rtl-C-j_aU_R.js";import"./component-BGXh8e92.js";import"./use-deprecated-props-BokcF_Hx.js";import"./use-gesture-react.esm-BHlZEJgV.js";import"./actions-elSjqZJg.js";import"./with-ignore-ime-events-BK39a-UH.js";import"./index-DckQhh-o.js";import"./deprecated-36px-size-UsjcW-j9.js";import"./index-CFuMsoxH.js";import"./index-Dt7LODwq.js";import"./index-1YdoA736.js";import"./cubic-bezier-CfzpfWNY.js";import"./T6C2RYFI-BXv3qAIm.js";import"./LVA2YJMS-Bhv8eVm0.js";import"./LMDWO4NN-CH0ROf0T.js";import"./floating-ui.utils.dom-BlKqeV2W.js";import"./dropdown-motion-BuMQU1CT.js";import"./index-Dnuq8uNu.js";import"./index-BIvJ8ozV.js";import"./component-Cu4YN_oY.js";import"./component-CIWI0tS-.js";import"./hook-D_MMjSqd.js";import"./get-valid-children-BTY2hlyh.js";import"./plus-Bb-UlsvB.js";import"./reset-DAroYZ4v.js";import"./strings-B_y2JcYF.js";import"./index-COsfWvJn.js";import"./use-controlled-state-EIKz0OpF.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Te={component:d,title:"Components/Selection & Input/Common/UnitControl",id:"components-unitcontrol",argTypes:{__unstableInputWidth:{control:{type:"text"}},__unstableStateReducer:{control:!1},onChange:{control:!1},onUnitChange:{control:!1},prefix:{control:{type:"text"}},value:{control:!1}},tags:["status-experimental"],args:{onChange:i(),onUnitChange:i(),onFocus:i(),onBlur:i()},parameters:{controls:{expanded:!0},docs:{canvas:{sourceState:"shown"}}}},p=({onChange:a,...l})=>{const[u,m]=g.useState("10px");return h(d,{...l,value:u,onChange:(s,c)=>{m(s),a?.(s,c)}})},e=p.bind({});e.args={label:"Label",__next40pxDefaultSize:!0};const t=p.bind({});t.args={...e.args,isPressEnterToChange:!0};const n=p.bind({});n.args={...e.args,min:0,max:100,step:"any",label:"Custom label"};const r=p.bind({});r.args={...e.args,units:C.slice(0,1)};const o=({onChange:a,...l})=>{const[u,m]=g.useState("80km");return h(d,{...l,value:u,onChange:(s,c)=>{m(s),a?.(s,c)}})};o.args={...e.args,isResetValueOnUnitChange:!0,min:0,units:[{value:"km",label:"km",default:1},{value:"mi",label:"mi",default:1},{value:"m",label:"m",default:1e3},{value:"yd",label:"yd",default:1760}]};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`({
  onChange,
  ...args
}) => {
  const [value, setValue] = useState<string | undefined>('10px');
  return <UnitControl {...args} value={value} onChange={(v, extra) => {
    setValue(v);
    onChange?.(v, extra);
  }} />;
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`({
  onChange,
  ...args
}) => {
  const [value, setValue] = useState<string | undefined>('10px');
  return <UnitControl {...args} value={value} onChange={(v, extra) => {
    setValue(v);
    onChange?.(v, extra);
  }} />;
}`,...t.parameters?.docs?.source},description:{story:"If the `isPressEnterToChange` prop is set to `true`, the `onChange` callback\nwill not fire while a new value is typed in the input field (you can verify this\nbehavior by inspecting the console's output).",...t.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`({
  onChange,
  ...args
}) => {
  const [value, setValue] = useState<string | undefined>('10px');
  return <UnitControl {...args} value={value} onChange={(v, extra) => {
    setValue(v);
    onChange?.(v, extra);
  }} />;
}`,...n.parameters?.docs?.source},description:{story:"Most of `NumberControl`'s props can be passed to `UnitControl`, and they will\naffect its numeric input field.",...n.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`({
  onChange,
  ...args
}) => {
  const [value, setValue] = useState<string | undefined>('10px');
  return <UnitControl {...args} value={value} onChange={(v, extra) => {
    setValue(v);
    onChange?.(v, extra);
  }} />;
}`,...r.parameters?.docs?.source},description:{story:"When only one unit is available, the unit selection dropdown becomes static text.",...r.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`({
  onChange,
  ...args
}) => {
  const [value, setValue] = useState<string | undefined>('80km');
  return <UnitControl {...args} value={value} onChange={(v, extra) => {
    setValue(v);
    onChange?.(v, extra);
  }} />;
}`,...o.parameters?.docs?.source},description:{story:"It is possible to pass a custom list of units. Every time the unit changes,\nif the `isResetValueOnUnitChange` is set to `true`, the input's quantity is\nreset to the new unit's default value.",...o.parameters?.docs?.description}}};try{t.displayName="PressEnterToChange",t.__docgenInfo={description:"If the `isPressEnterToChange` prop is set to `true`, the `onChange` callback\nwill not fire while a new value is typed in the input field (you can verify this\nbehavior by inspecting the console's output).",displayName:"PressEnterToChange",props:{}}}catch{}try{n.displayName="TweakingTheNumberInput",n.__docgenInfo={description:"Most of `NumberControl`'s props can be passed to `UnitControl`, and they will\naffect its numeric input field.",displayName:"TweakingTheNumberInput",props:{}}}catch{}try{r.displayName="WithSingleUnit",r.__docgenInfo={description:"When only one unit is available, the unit selection dropdown becomes static text.",displayName:"WithSingleUnit",props:{}}}catch{}try{o.displayName="WithCustomUnits",o.__docgenInfo={description:"It is possible to pass a custom list of units. Every time the unit changes,\nif the `isResetValueOnUnitChange` is set to `true`, the input's quantity is\nreset to the new unit's default value.",displayName:"WithCustomUnits",props:{}}}catch{}export{e as Default,t as PressEnterToChange,n as TweakingTheNumberInput,o as WithCustomUnits,r as WithSingleUnit,Te as default};
