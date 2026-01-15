import{r as m,j as i}from"./iframe-2TvY6Iig.js";import{T as r}from"./index-DdCpImF3.js";import"./preload-helper-Zf8nSx-t.js";import"./index-BjXx3EE5.js";import"./index-DckQhh-o.js";import"./base-control-styles-CoefPmVd.js";import"./emotion-react.browser.esm-T2caqgd_.js";import"./space-CjrGwnR-.js";import"./font-Cck9kG94.js";import"./box-sizing-DDIeAART.js";import"./colors-values-BSq3yUT9.js";import"./config-values-CkVNYk_w.js";import"./use-context-system-GBkKyJuM.js";import"./index-DUXT-3wK.js";import"./is-plain-object-BJ3z7EOF.js";import"./index-BtJmv7lM.js";import"./index-CK8hcbFu.js";import"./component-BGXh8e92.js";import"./component-DATVQiJy.js";import"./deprecated-36px-size-UsjcW-j9.js";import"./index-BjRskdOB.js";const A={component:r,title:"Components/Selection & Input/Common/TextControl",id:"components-textcontrol",argTypes:{help:{control:{type:"text"}},label:{control:{type:"text"}},onChange:{action:"onChange"},value:{control:!1}},parameters:{controls:{expanded:!0},docs:{canvas:{sourceState:"shown"}}}},a=({onChange:n,...s})=>{const[p,l]=m.useState("");return i(r,{...s,value:p,onChange:o=>{l(o),n(o)}})},e=a.bind({});e.args={__next40pxDefaultSize:!0,placeholder:"Placeholder"};const t=a.bind({});t.args={...e.args,label:"Label Text",help:"Help text to explain the input."};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`({
  onChange,
  ...args
}) => {
  const [value, setValue] = useState('');
  return <TextControl {...args} value={value} onChange={v => {
    setValue(v);
    onChange(v);
  }} />;
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`({
  onChange,
  ...args
}) => {
  const [value, setValue] = useState('');
  return <TextControl {...args} value={value} onChange={v => {
    setValue(v);
    onChange(v);
  }} />;
}`,...t.parameters?.docs?.source}}};export{e as Default,t as WithLabelAndHelpText,A as default};
