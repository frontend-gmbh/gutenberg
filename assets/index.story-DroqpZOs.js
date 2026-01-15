import{r as c,j as m}from"./iframe-2TvY6Iig.js";import{R as a}from"./index-lu5ynKAw.js";import"./preload-helper-Zf8nSx-t.js";import"./index-BjXx3EE5.js";import"./index-DckQhh-o.js";import"./base-control-styles-CoefPmVd.js";import"./emotion-react.browser.esm-T2caqgd_.js";import"./space-CjrGwnR-.js";import"./font-Cck9kG94.js";import"./box-sizing-DDIeAART.js";import"./colors-values-BSq3yUT9.js";import"./config-values-CkVNYk_w.js";import"./use-context-system-GBkKyJuM.js";import"./index-DUXT-3wK.js";import"./is-plain-object-BJ3z7EOF.js";import"./index-BtJmv7lM.js";import"./index-CK8hcbFu.js";import"./component-BGXh8e92.js";import"./component-DATVQiJy.js";import"./component-6CLxCT3h.js";import"./hook-D_MMjSqd.js";import"./values-CtPxXHrl.js";import"./get-valid-children-BTY2hlyh.js";import"./component-CqSZVoza.js";import"./hook-56LQ9BfU.js";import"./context-DbMhvW6o.js";import"./index-BjRskdOB.js";import"./use-responsive-value-bUbLlkWc.js";const G={component:a,title:"Components/Selection & Input/Common/RadioControl",id:"components-radiocontrol",argTypes:{onChange:{action:"onChange"},selected:{control:!1},label:{control:{type:"text"}},help:{control:{type:"text"}}},parameters:{controls:{expanded:!0},docs:{canvas:{sourceState:"shown"}}}},n=({onChange:s,options:t,...i})=>{const[p,l]=c.useState(t?.[0]?.value);return m(a,{...i,selected:p,options:t,onChange:r=>{l(r),s(r)}})},o=n.bind({});o.args={label:"Post visibility",options:[{label:"Public",value:"public"},{label:"Private",value:"private"},{label:"Password Protected",value:"password"}]};const e=n.bind({});e.args={...o.args,options:[{label:"Public",value:"public",description:"Visible to everyone"},{label:"Private",value:"private",description:"Only visible to you"},{label:"Password Protected",value:"password",description:"Protected by a password"}]};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`({
  onChange,
  options,
  ...args
}) => {
  const [value, setValue] = useState(options?.[0]?.value);
  return <RadioControl {...args} selected={value} options={options} onChange={v => {
    setValue(v);
    onChange(v);
  }} />;
}`,...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`({
  onChange,
  options,
  ...args
}) => {
  const [value, setValue] = useState(options?.[0]?.value);
  return <RadioControl {...args} selected={value} options={options} onChange={v => {
    setValue(v);
    onChange(v);
  }} />;
}`,...e.parameters?.docs?.source}}};export{o as Default,e as WithOptionDescriptions,G as default};
