import{r as m,j as i}from"./iframe-2TvY6Iig.js";import{T as r}from"./index-CITquXbN.js";import"./preload-helper-Zf8nSx-t.js";import"./index-BjXx3EE5.js";import"./index-cTr3VGcq.js";import"./index-DckQhh-o.js";import"./base-control-styles-CoefPmVd.js";import"./emotion-react.browser.esm-T2caqgd_.js";import"./space-CjrGwnR-.js";import"./font-Cck9kG94.js";import"./box-sizing-DDIeAART.js";import"./colors-values-BSq3yUT9.js";import"./config-values-CkVNYk_w.js";import"./use-context-system-GBkKyJuM.js";import"./index-DUXT-3wK.js";import"./is-plain-object-BJ3z7EOF.js";import"./index-BtJmv7lM.js";import"./index-CK8hcbFu.js";import"./component-BGXh8e92.js";import"./component-DATVQiJy.js";import"./component-BiaHS86M.js";import"./hook-56LQ9BfU.js";import"./context-DbMhvW6o.js";import"./index-BjRskdOB.js";import"./use-responsive-value-bUbLlkWc.js";import"./component-CIWI0tS-.js";import"./hook-D_MMjSqd.js";import"./values-CtPxXHrl.js";import"./get-valid-children-BTY2hlyh.js";import"./component-CqSZVoza.js";const M={title:"Components/Selection & Input/Common/ToggleControl",id:"components-togglecontrol",component:r,argTypes:{checked:{control:!1},help:{control:{type:"text"}},label:{control:{type:"text"}},onChange:{action:"onChange"}},parameters:{controls:{expanded:!0},docs:{canvas:{sourceState:"shown"}}}},n=({onChange:s,...p})=>{const[a,c]=m.useState(!0);return i(r,{...p,checked:a,onChange:(...t)=>{c(...t),s(...t)}})},e=n.bind({});e.args={label:"Enable something"};const o=n.bind({});o.args={...e.args,help:"This is some help text."};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`({
  onChange,
  ...props
}) => {
  const [checked, setChecked] = useState(true);
  return <ToggleControl {...props} checked={checked} onChange={(...changeArgs) => {
    setChecked(...changeArgs);
    onChange(...changeArgs);
  }} />;
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`({
  onChange,
  ...props
}) => {
  const [checked, setChecked] = useState(true);
  return <ToggleControl {...props} checked={checked} onChange={(...changeArgs) => {
    setChecked(...changeArgs);
    onChange(...changeArgs);
  }} />;
}`,...o.parameters?.docs?.source}}};export{e as Default,o as WithHelpText,M as default};
