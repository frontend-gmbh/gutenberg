import{r as d,j as r,f as m,F as h}from"./iframe-2TvY6Iig.js";import{S as s}from"./index-LbqlnDh8.js";import{I as g}from"./input-prefix-wrapper-BgXFHddd.js";import"./preload-helper-Zf8nSx-t.js";import"./index-BjXx3EE5.js";import"./index-DckQhh-o.js";import"./base-control-styles-CoefPmVd.js";import"./emotion-react.browser.esm-T2caqgd_.js";import"./space-CjrGwnR-.js";import"./font-Cck9kG94.js";import"./box-sizing-DDIeAART.js";import"./colors-values-BSq3yUT9.js";import"./config-values-CkVNYk_w.js";import"./use-context-system-GBkKyJuM.js";import"./index-DUXT-3wK.js";import"./is-plain-object-BJ3z7EOF.js";import"./index-BtJmv7lM.js";import"./index-CK8hcbFu.js";import"./component-BGXh8e92.js";import"./component-DATVQiJy.js";import"./chevron-down-hEJ1114-.js";import"./index-FlM62Vh8.js";import"./input-suffix-wrapper-Gn_aDXNL.js";import"./input-base-DiRopTRM.js";import"./component-l_ygUujJ.js";import"./context-DbMhvW6o.js";import"./index-BjRskdOB.js";import"./use-responsive-value-bUbLlkWc.js";import"./component-CqSZVoza.js";import"./hook-56LQ9BfU.js";import"./component-DEBvv9-v.js";import"./hook-D7E4jAJ2.js";import"./names-BarMHYgS.js";import"./index-CWa7Pedq.js";import"./hook-CHurV6sy.js";import"./values-CtPxXHrl.js";import"./rtl-C-j_aU_R.js";import"./default-i18n-SWt35ZM4.js";import"./use-deprecated-props-BokcF_Hx.js";import"./chevron-down-mxzMPu8z.js";import"./index-BIvJ8ozV.js";import"./deprecated-36px-size-UsjcW-j9.js";const{fn:v}=__STORYBOOK_MODULE_TEST__,ae={title:"Components/Selection & Input/Common/SelectControl",id:"components-selectcontrol",component:s,argTypes:{help:{control:{type:"text"}},label:{control:{type:"text"}},prefix:{control:{type:"text"}},suffix:{control:{type:"text"}},value:{control:!1}},args:{onChange:v()},parameters:{controls:{expanded:!0},docs:{canvas:{sourceState:"shown"}}}},l=n=>{const[c,u]=d.useState();return n.multiple?r(s,{...n,multiple:!0,value:c,onChange:a=>{u(a),n.onChange?.(a)}}):r(s,{...n,multiple:!1,value:c?.[0],onChange:a=>{u([a]),n.onChange?.(a)}})},o=l.bind({});o.args={__next40pxDefaultSize:!0,label:"Label",options:[{value:"",label:"Select an Option",disabled:!0},{value:"a",label:"Option A"},{value:"b",label:"Option B"},{value:"c",label:"Option C"}]};const i=l.bind({});i.args={...o.args,help:"Help text to explain the select control."};const e=l.bind({});e.args={__next40pxDefaultSize:!0,label:"Label",children:m(h,{children:[r("option",{value:"option-1",children:"Option 1"}),r("option",{value:"option-2",disabled:!0,children:"Option 2 - Disabled"}),m("optgroup",{label:"Option Group 1",children:[r("option",{value:"option-group-1-option-1",children:"Option Group 1 - Option 1"}),r("option",{value:"option-group-1-option-2",disabled:!0,children:"Option Group 1 - Option 2 - Disabled"})]})]})};const t=l.bind({});t.args={...o.args,prefix:r(g,{children:"Prefix:"})};const p=l.bind({});p.args={...o.args,variant:"minimal",hideLabelFromVision:!0};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`props => {
  const [selection, setSelection] = useState<string[]>();
  if (props.multiple) {
    return <SelectControl {...props} multiple value={selection} onChange={value => {
      setSelection(value);
      props.onChange?.(value);
    }} />;
  }
  return <SelectControl {...props} multiple={false} value={selection?.[0]} onChange={value => {
    setSelection([value]);
    props.onChange?.(value);
  }} />;
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`props => {
  const [selection, setSelection] = useState<string[]>();
  if (props.multiple) {
    return <SelectControl {...props} multiple value={selection} onChange={value => {
      setSelection(value);
      props.onChange?.(value);
    }} />;
  }
  return <SelectControl {...props} multiple={false} value={selection?.[0]} onChange={value => {
    setSelection([value]);
    props.onChange?.(value);
  }} />;
}`,...i.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`props => {
  const [selection, setSelection] = useState<string[]>();
  if (props.multiple) {
    return <SelectControl {...props} multiple value={selection} onChange={value => {
      setSelection(value);
      props.onChange?.(value);
    }} />;
  }
  return <SelectControl {...props} multiple={false} value={selection?.[0]} onChange={value => {
    setSelection([value]);
    props.onChange?.(value);
  }} />;
}`,...e.parameters?.docs?.source},description:{story:"As an alternative to the `options` prop, `optgroup`s and `options` can be\npassed in as `children` for more customizeability.",...e.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`props => {
  const [selection, setSelection] = useState<string[]>();
  if (props.multiple) {
    return <SelectControl {...props} multiple value={selection} onChange={value => {
      setSelection(value);
      props.onChange?.(value);
    }} />;
  }
  return <SelectControl {...props} multiple={false} value={selection?.[0]} onChange={value => {
    setSelection([value]);
    props.onChange?.(value);
  }} />;
}`,...t.parameters?.docs?.source},description:{story:"By default, the prefix is aligned with the edge of the input border, with no padding.\nIf you want to apply standard padding in accordance with the size variant, wrap the element in the `<InputControlPrefixWrapper>` component.",...t.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`props => {
  const [selection, setSelection] = useState<string[]>();
  if (props.multiple) {
    return <SelectControl {...props} multiple value={selection} onChange={value => {
      setSelection(value);
      props.onChange?.(value);
    }} />;
  }
  return <SelectControl {...props} multiple={false} value={selection?.[0]} onChange={value => {
    setSelection([value]);
    props.onChange?.(value);
  }} />;
}`,...p.parameters?.docs?.source}}};try{e.displayName="WithCustomChildren",e.__docgenInfo={description:"As an alternative to the `options` prop, `optgroup`s and `options` can be\npassed in as `children` for more customizeability.",displayName:"WithCustomChildren",props:{}}}catch{}try{t.displayName="WithPrefix",t.__docgenInfo={description:"By default, the prefix is aligned with the edge of the input border, with no padding.\nIf you want to apply standard padding in accordance with the size variant, wrap the element in the `<InputControlPrefixWrapper>` component.",displayName:"WithPrefix",props:{}}}catch{}export{o as Default,p as Minimal,e as WithCustomChildren,i as WithLabelAndHelpText,t as WithPrefix,ae as default};
