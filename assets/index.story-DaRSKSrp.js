import{r as p,j as m}from"./iframe-2TvY6Iig.js";import{T as o}from"./index-BbHVtilX.js";import"./preload-helper-Zf8nSx-t.js";import"./index-BjXx3EE5.js";import"./index-DckQhh-o.js";import"./base-control-styles-CoefPmVd.js";import"./emotion-react.browser.esm-T2caqgd_.js";import"./space-CjrGwnR-.js";import"./font-Cck9kG94.js";import"./box-sizing-DDIeAART.js";import"./colors-values-BSq3yUT9.js";import"./config-values-CkVNYk_w.js";import"./use-context-system-GBkKyJuM.js";import"./index-DUXT-3wK.js";import"./is-plain-object-BJ3z7EOF.js";import"./index-BtJmv7lM.js";import"./index-CK8hcbFu.js";import"./component-BGXh8e92.js";import"./component-DATVQiJy.js";const I={component:o,title:"Components/Selection & Input/Common/TextareaControl",id:"components-textareacontrol",argTypes:{onChange:{action:"onChange"},label:{control:{type:"text"}},help:{control:{type:"text"}},value:{control:!1}},parameters:{controls:{expanded:!0},docs:{canvas:{sourceState:"shown"}}}},l=({onChange:r,...a})=>{const[n,s]=p.useState("");return m(o,{...a,value:n,onChange:t=>{s(t),r(t)}})},e=l.bind({});e.args={label:"Text",help:"Enter some text",placeholder:"Placeholder"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`({
  onChange,
  ...args
}) => {
  const [value, setValue] = useState('');
  return <TextareaControl {...args} value={value} onChange={v => {
    setValue(v);
    onChange(v);
  }} />;
}`,...e.parameters?.docs?.source}}};export{e as Default,I as default};
