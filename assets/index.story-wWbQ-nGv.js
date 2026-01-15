import{r as d,j as p}from"./iframe-2TvY6Iig.js";import{T as l}from"./component-CiOxYCsR.js";import{T as c}from"./component-rgbQiw8W.js";import{T as u}from"./component-BNvMnNDq.js";import{f as b,a as _}from"./format-uppercase-KHXFG70e.js";import"./preload-helper-Zf8nSx-t.js";import"./index-Dnuq8uNu.js";import"./index-BIvJ8ozV.js";import"./index-CLatOAvg.js";import"./index-DckQhh-o.js";import"./base-control-styles-CoefPmVd.js";import"./emotion-react.browser.esm-T2caqgd_.js";import"./space-CjrGwnR-.js";import"./font-Cck9kG94.js";import"./box-sizing-DDIeAART.js";import"./colors-values-BSq3yUT9.js";import"./config-values-CkVNYk_w.js";import"./use-context-system-GBkKyJuM.js";import"./index-DUXT-3wK.js";import"./is-plain-object-BJ3z7EOF.js";import"./index-BtJmv7lM.js";import"./index-CK8hcbFu.js";import"./component-BGXh8e92.js";import"./component-DATVQiJy.js";import"./index-BjXx3EE5.js";import"./default-i18n-SWt35ZM4.js";import"./index-BcsUY9xg.js";import"./radio-group-DckMt_5-.js";import"./ITI7HKP4-_BMwSXRb.js";import"./LVA2YJMS-Bhv8eVm0.js";import"./LMDWO4NN-CH0ROf0T.js";import"./P2CTZE2T-C4NqLDvb.js";import"./NLEBE274-DHIyTr8t.js";import"./use-controlled-value-D6nr5Y4s.js";import"./use-animated-offset-rect-BxGHKIlu.js";import"./index-Di3oHLN4.js";import"./index-DCGL3fHb.js";import"./deprecated-36px-size-UsjcW-j9.js";import"./index-BjRskdOB.js";import"./index-Dt7LODwq.js";import"./index-1YdoA736.js";import"./cubic-bezier-CfzpfWNY.js";import"./T6C2RYFI-BXv3qAIm.js";import"./floating-ui.utils.dom-BlKqeV2W.js";import"./dropdown-motion-BuMQU1CT.js";const ce={component:u,subcomponents:{ToggleGroupControlOption:c,ToggleGroupControlOptionIcon:l},title:"Components/Selection & Input/Common/ToggleGroupControl",id:"components-togglegroupcontrol",argTypes:{help:{control:{type:"text"}},onChange:{action:"onChange"},value:{control:!1}},tags:["status-experimental"],parameters:{controls:{expanded:!0},docs:{canvas:{sourceState:"shown"}}}},s=({onChange:e,...a})=>{const[m,h]=d.useState();return p(u,{__next40pxDefaultSize:!0,...a,onChange:(...i)=>{h(...i),e?.(...i)},value:m})},g=({value:e,...a})=>p(c,{value:e,...a},e),f=({value:e,...a})=>p(l,{value:e,...a},e),n=s.bind({});n.args={children:[{value:"left",label:"Left"},{value:"center",label:"Center"},{value:"right",label:"Right"},{value:"justify",label:"Justify"}].map(g),isBlock:!0,label:"Label"};const t=s.bind({});t.args={...n.args,children:[{value:"asc",label:"A→Z","aria-label":"Ascending",showTooltip:!0},{value:"desc",label:"Z→A","aria-label":"Descending",showTooltip:!0}].map(g)};const o=s.bind({});o.args={...n.args,children:[{value:"uppercase",label:"Uppercase",icon:b},{value:"lowercase",label:"Lowercase",icon:_}].map(f),isBlock:!1};const r=s.bind({});r.args={...o.args,isDeselectable:!0};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`({
  onChange,
  ...props
}) => {
  const [value, setValue] = useState<ToggleGroupControlProps['value']>();
  return <ToggleGroupControl __next40pxDefaultSize {...props} onChange={(...changeArgs) => {
    setValue(...changeArgs);
    onChange?.(...changeArgs);
  }} value={value} />;
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`({
  onChange,
  ...props
}) => {
  const [value, setValue] = useState<ToggleGroupControlProps['value']>();
  return <ToggleGroupControl __next40pxDefaultSize {...props} onChange={(...changeArgs) => {
    setValue(...changeArgs);
    onChange?.(...changeArgs);
  }} value={value} />;
}`,...t.parameters?.docs?.source},description:{story:"A tooltip can be shown for each option by enabling the `showTooltip` prop.\nThe `aria-label` will be used in the tooltip if provided. Otherwise, the\n`label` will be used.",...t.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`({
  onChange,
  ...props
}) => {
  const [value, setValue] = useState<ToggleGroupControlProps['value']>();
  return <ToggleGroupControl __next40pxDefaultSize {...props} onChange={(...changeArgs) => {
    setValue(...changeArgs);
    onChange?.(...changeArgs);
  }} value={value} />;
}`,...o.parameters?.docs?.source},description:{story:"The `ToggleGroupControlOptionIcon` component can be used for icon options. A `label` is required\non each option for accessibility, which will be shown in a tooltip.",...o.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`({
  onChange,
  ...props
}) => {
  const [value, setValue] = useState<ToggleGroupControlProps['value']>();
  return <ToggleGroupControl __next40pxDefaultSize {...props} onChange={(...changeArgs) => {
    setValue(...changeArgs);
    onChange?.(...changeArgs);
  }} value={value} />;
}`,...r.parameters?.docs?.source},description:{story:"When the `isDeselectable` prop is true, the option can be deselected by clicking on it again.",...r.parameters?.docs?.description}}};try{t.displayName="WithTooltip",t.__docgenInfo={description:"A tooltip can be shown for each option by enabling the `showTooltip` prop.\nThe `aria-label` will be used in the tooltip if provided. Otherwise, the\n`label` will be used.",displayName:"WithTooltip",props:{}}}catch{}try{o.displayName="WithIcons",o.__docgenInfo={description:"The `ToggleGroupControlOptionIcon` component can be used for icon options. A `label` is required\non each option for accessibility, which will be shown in a tooltip.",displayName:"WithIcons",props:{}}}catch{}try{r.displayName="Deselectable",r.__docgenInfo={description:"When the `isDeselectable` prop is true, the option can be deselected by clicking on it again.",displayName:"Deselectable",props:{}}}catch{}export{n as Default,r as Deselectable,o as WithIcons,t as WithTooltip,ce as default};
