import{j as s,f as d}from"./iframe-2TvY6Iig.js";import{B as r}from"./index-DckQhh-o.js";import{B as u}from"./index-CFuMsoxH.js";import{u as m}from"./index-BjXx3EE5.js";import"./preload-helper-Zf8nSx-t.js";import"./base-control-styles-CoefPmVd.js";import"./emotion-react.browser.esm-T2caqgd_.js";import"./space-CjrGwnR-.js";import"./font-Cck9kG94.js";import"./box-sizing-DDIeAART.js";import"./colors-values-BSq3yUT9.js";import"./config-values-CkVNYk_w.js";import"./use-context-system-GBkKyJuM.js";import"./index-DUXT-3wK.js";import"./is-plain-object-BJ3z7EOF.js";import"./index-BtJmv7lM.js";import"./index-CK8hcbFu.js";import"./component-BGXh8e92.js";import"./component-DATVQiJy.js";import"./index-BjRskdOB.js";import"./index-Dt7LODwq.js";import"./index-1YdoA736.js";import"./cubic-bezier-CfzpfWNY.js";import"./T6C2RYFI-BXv3qAIm.js";import"./LVA2YJMS-Bhv8eVm0.js";import"./LMDWO4NN-CH0ROf0T.js";import"./floating-ui.utils.dom-BlKqeV2W.js";import"./dropdown-motion-BuMQU1CT.js";import"./index-Dnuq8uNu.js";import"./index-BIvJ8ozV.js";function b(a){const{help:l,id:n,...c}=a,i=m(r,"wp-components-base-control",n);return{baseControlProps:{id:i,help:l,...c},controlProps:{id:i,...l?{"aria-describedby":`${i}__help`}:{}}}}const K={title:"Components/Selection & Input/Common/BaseControl",id:"components-basecontrol",component:r,subcomponents:{"BaseControl.VisualLabel":r.VisualLabel},argTypes:{children:{control:!1},help:{control:{type:"text"}},label:{control:{type:"text"}}},parameters:{controls:{expanded:!0},docs:{canvas:{sourceState:"shown"}}}},p=a=>{const{baseControlProps:l,controlProps:n}=b(a);return s(r,{...l,children:s("textarea",{style:{display:"block"},...n})})},o=p.bind({});o.args={label:"Label text"};const t=p.bind({});t.args={...o.args,help:"Help text adds more explanation."};const e=a=>(r.VisualLabel.displayName="BaseControl.VisualLabel",d(r,{...a,children:[s(r.VisualLabel,{children:"Visual label"}),s("div",{children:s(u,{variant:"secondary",children:"Select an author"})})]}));e.args={...o.args,help:"This button is already accessibly labeled.",label:void 0};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`props => {
  const {
    baseControlProps,
    controlProps
  } = useBaseControlProps(props);
  return <BaseControl {...baseControlProps}>
            <textarea style={{
      display: 'block'
    }} {...controlProps} />
        </BaseControl>;
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`props => {
  const {
    baseControlProps,
    controlProps
  } = useBaseControlProps(props);
  return <BaseControl {...baseControlProps}>
            <textarea style={{
      display: 'block'
    }} {...controlProps} />
        </BaseControl>;
}`,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`props => {
  BaseControl.VisualLabel.displayName = 'BaseControl.VisualLabel';
  return <BaseControl {...props}>
            <BaseControl.VisualLabel>Visual label</BaseControl.VisualLabel>
            <div>
                <Button variant="secondary">Select an author</Button>
            </div>
        </BaseControl>;
}`,...e.parameters?.docs?.source},description:{story:"`BaseControl.VisualLabel` is used to render a purely visual label inside a `BaseControl` component.\n\nIt should only be used in cases where the children being rendered inside `BaseControl` are already accessibly labeled,\ne.g., a button, but we want an additional visual label for that section equivalent to the labels `BaseControl` would\notherwise use if the `label` prop was passed.",...e.parameters?.docs?.description}}};try{e.displayName="WithVisualLabel",e.__docgenInfo={description:"`BaseControl.VisualLabel` is used to render a purely visual label inside a `BaseControl` component.\n\nIt should only be used in cases where the children being rendered inside `BaseControl` are already accessibly labeled,\ne.g., a button, but we want an additional visual label for that section equivalent to the labels `BaseControl` would\notherwise use if the `label` prop was passed.",displayName:"WithVisualLabel",props:{}}}catch{}export{o as Default,t as WithHelpText,e as WithVisualLabel,K as default};
