import{r as b,j as u,f as k,F as _}from"./iframe-2TvY6Iig.js";import{R as v}from"./index-CzX5DZnr.js";import{w as A}from"./wordpress-25v04gA5.js";import{s as M}from"./styles-uttaAcD2.js";import{s as x}from"./star-filled-Crcboa-s.js";import{s as R}from"./star-empty-uo_H5uEx.js";import"./preload-helper-Zf8nSx-t.js";import"./default-i18n-SWt35ZM4.js";import"./index-BjXx3EE5.js";import"./index-CLatOAvg.js";import"./index-DckQhh-o.js";import"./base-control-styles-CoefPmVd.js";import"./emotion-react.browser.esm-T2caqgd_.js";import"./space-CjrGwnR-.js";import"./font-Cck9kG94.js";import"./box-sizing-DDIeAART.js";import"./colors-values-BSq3yUT9.js";import"./config-values-CkVNYk_w.js";import"./use-context-system-GBkKyJuM.js";import"./index-DUXT-3wK.js";import"./is-plain-object-BJ3z7EOF.js";import"./index-BtJmv7lM.js";import"./index-CK8hcbFu.js";import"./component-BGXh8e92.js";import"./component-DATVQiJy.js";import"./index-CFuMsoxH.js";import"./index-BjRskdOB.js";import"./index-Dt7LODwq.js";import"./index-1YdoA736.js";import"./cubic-bezier-CfzpfWNY.js";import"./T6C2RYFI-BXv3qAIm.js";import"./LVA2YJMS-Bhv8eVm0.js";import"./LMDWO4NN-CH0ROf0T.js";import"./floating-ui.utils.dom-BlKqeV2W.js";import"./dropdown-motion-BuMQU1CT.js";import"./index-Dnuq8uNu.js";import"./index-BIvJ8ozV.js";import"./index-w5J4Ezdm.js";import"./index-dvLnGrYd.js";import"./input-base-DiRopTRM.js";import"./component-l_ygUujJ.js";import"./context-DbMhvW6o.js";import"./use-responsive-value-bUbLlkWc.js";import"./component-CqSZVoza.js";import"./hook-56LQ9BfU.js";import"./component-DEBvv9-v.js";import"./hook-D7E4jAJ2.js";import"./names-BarMHYgS.js";import"./index-CWa7Pedq.js";import"./hook-CHurV6sy.js";import"./values-CtPxXHrl.js";import"./rtl-C-j_aU_R.js";import"./use-deprecated-props-BokcF_Hx.js";import"./use-gesture-react.esm-BHlZEJgV.js";import"./actions-elSjqZJg.js";import"./with-ignore-ime-events-BK39a-UH.js";import"./deprecated-36px-size-UsjcW-j9.js";import"./component-Cu4YN_oY.js";import"./component-CIWI0tS-.js";import"./hook-D_MMjSqd.js";import"./get-valid-children-BTY2hlyh.js";import"./plus-Bb-UlsvB.js";import"./reset-DAroYZ4v.js";import"./use-controlled-state-EIKz0OpF.js";const{fn:d}=__STORYBOOK_MODULE_TEST__,y={starEmpty:R,starFilled:x,styles:M,wordpress:A},Ee={component:v,title:"Components/Selection & Input/Common/RangeControl",id:"components-rangecontrol",argTypes:{afterIcon:{control:{type:"select"},options:Object.keys(y),mapping:y},beforeIcon:{control:{type:"select"},options:Object.keys(y),mapping:y},color:{control:{type:"color"}},help:{control:{type:"text"}},icon:{control:!1},marks:{control:{type:"object"}},onBlur:{control:!1},onChange:{control:!1},onFocus:{control:!1},onMouseLeave:{control:!1},onMouseMove:{control:!1},railColor:{control:{type:"color"}},step:{control:{type:"number"}},trackColor:{control:{type:"color"}},type:{control:{type:"check"},options:["stepper"]},value:{control:!1}},args:{onBlur:d(),onChange:d(),onFocus:d(),onMouseLeave:d(),onMouseMove:d()},parameters:{controls:{expanded:!0},docs:{canvas:{sourceState:"shown"}}}},W=({onChange:e,...m})=>{const[l,c]=b.useState();return u(v,{...m,value:l,onChange:i=>{c(i),e?.(i)}})},g=W.bind({});g.args={__next40pxDefaultSize:!0,help:"Please select how transparent you would like this.",initialPosition:50,label:"Opacity",max:100,min:0};const a=({onChange:e,...m})=>{const[l,c]=b.useState();return k(_,{children:[u(v,{...m,value:l,onChange:i=>{c(i),e?.(i)}}),u("hr",{style:{marginTop:"5em"}}),k("p",{children:["Current value: ",l]})]})};a.args={__next40pxDefaultSize:!0,label:"Brightness",step:"any"};const h=({label:e,onChange:m,...l})=>{const[c,i]=b.useState(),[S,V]=b.useState();return k(_,{children:[u("h2",{children:e}),u(v,{...l,label:"Automatic marks",marks:!0,onChange:p=>{i(p),m?.(p)},value:c}),u(v,{...l,label:"Custom marks",onChange:p=>{V(p),m?.(p)},value:S})]})},C=[{value:0,label:"0"},{value:1,label:"1"},{value:2,label:"2"},{value:8,label:"8"},{value:10,label:"10"}],f=[...C,{value:-1,label:"-1"},{value:-2,label:"-2"},{value:-4,label:"-4"},{value:-8,label:"-8"}],t=h.bind({});t.args={__next40pxDefaultSize:!0,label:"Integer Step",marks:C,max:10,min:0,step:1};const n=h.bind({});n.args={__next40pxDefaultSize:!0,marks:[...C,{value:3.5,label:"3.5"},{value:5.8,label:"5.8"}],max:10,min:0,step:.1};const r=h.bind({});r.args={__next40pxDefaultSize:!0,marks:f,max:10,min:-10,step:1};const o=h.bind({});o.args={__next40pxDefaultSize:!0,marks:f,max:-1,min:-10,step:1};const s=h.bind({});s.args={__next40pxDefaultSize:!0,marks:C,max:10,min:0,step:"any"};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`({
  onChange,
  ...args
}) => {
  const [value, setValue] = useState<number>();
  return <RangeControl {...args} value={value} onChange={v => {
    setValue(v);
    onChange?.(v);
  }} />;
}`,...g.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`({
  onChange,
  ...args
}) => {
  const [value, setValue] = useState<number>();
  return <>
            <RangeControl {...args} value={value} onChange={v => {
      setValue(v);
      onChange?.(v);
    }} />
            <hr style={{
      marginTop: '5em'
    }} />
            <p>Current value: {value}</p>
        </>;
}`,...a.parameters?.docs?.source},description:{story:'Setting the `step` prop to `"any"` will allow users to select non-integer\nvalues. This also overrides both `withInputField` and `showTooltip` props to\n`false`.',...a.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`({
  label,
  onChange,
  ...args
}) => {
  const [automaticValue, setAutomaticValue] = useState<number>();
  const [customValue, setCustomValue] = useState<number>();
  return <>
            <h2>{label}</h2>
            <RangeControl {...args} label="Automatic marks" marks onChange={v => {
      setAutomaticValue(v);
      onChange?.(v);
    }} value={automaticValue} />
            <RangeControl {...args} label="Custom marks" onChange={v => {
      setCustomValue(v);
      onChange?.(v);
    }} value={customValue} />
        </>;
}`,...t.parameters?.docs?.source},description:{story:"Use `marks` to render a visual representation of `step` ticks. Marks may be\nautomatically generated or custom mark indicators can be provided by an\n`Array`.",...t.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`({
  label,
  onChange,
  ...args
}) => {
  const [automaticValue, setAutomaticValue] = useState<number>();
  const [customValue, setCustomValue] = useState<number>();
  return <>
            <h2>{label}</h2>
            <RangeControl {...args} label="Automatic marks" marks onChange={v => {
      setAutomaticValue(v);
      onChange?.(v);
    }} value={automaticValue} />
            <RangeControl {...args} label="Custom marks" onChange={v => {
      setCustomValue(v);
      onChange?.(v);
    }} value={customValue} />
        </>;
}`,...n.parameters?.docs?.source},description:{story:"Decimal values may be used for `marks` rendered as a visual representation of\n`step` ticks. Marks may be automatically generated or custom mark indicators\ncan be provided by an `Array`.",...n.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`({
  label,
  onChange,
  ...args
}) => {
  const [automaticValue, setAutomaticValue] = useState<number>();
  const [customValue, setCustomValue] = useState<number>();
  return <>
            <h2>{label}</h2>
            <RangeControl {...args} label="Automatic marks" marks onChange={v => {
      setAutomaticValue(v);
      onChange?.(v);
    }} value={automaticValue} />
            <RangeControl {...args} label="Custom marks" onChange={v => {
      setCustomValue(v);
      onChange?.(v);
    }} value={customValue} />
        </>;
}`,...r.parameters?.docs?.source},description:{story:"A negative `min` value can be used to constrain `RangeControl` values. Mark\nindicators can represent negative values as well. Marks may be automatically\ngenerated or custom mark indicators can be provided by an `Array`.",...r.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`({
  label,
  onChange,
  ...args
}) => {
  const [automaticValue, setAutomaticValue] = useState<number>();
  const [customValue, setCustomValue] = useState<number>();
  return <>
            <h2>{label}</h2>
            <RangeControl {...args} label="Automatic marks" marks onChange={v => {
      setAutomaticValue(v);
      onChange?.(v);
    }} value={automaticValue} />
            <RangeControl {...args} label="Custom marks" onChange={v => {
      setCustomValue(v);
      onChange?.(v);
    }} value={customValue} />
        </>;
}`,...o.parameters?.docs?.source},description:{story:"The entire range of valid values for a `RangeControl` may be negative. Mark\nindicators can represent negative values as well. Marks may be automatically\ngenerated or custom mark indicators can be provided by an `Array`.",...o.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`({
  label,
  onChange,
  ...args
}) => {
  const [automaticValue, setAutomaticValue] = useState<number>();
  const [customValue, setCustomValue] = useState<number>();
  return <>
            <h2>{label}</h2>
            <RangeControl {...args} label="Automatic marks" marks onChange={v => {
      setAutomaticValue(v);
      onChange?.(v);
    }} value={automaticValue} />
            <RangeControl {...args} label="Custom marks" onChange={v => {
      setCustomValue(v);
      onChange?.(v);
    }} value={customValue} />
        </>;
}`,...s.parameters?.docs?.source},description:{story:"When a `RangeControl` has a `step` value of `any` a user may select\nnon-integer values. This may still be used in conjunction with `marks`\nrendering a visual representation of `step` ticks.",...s.parameters?.docs?.description}}};try{a.displayName="WithAnyStep",a.__docgenInfo={description:'Setting the `step` prop to `"any"` will allow users to select non-integer\nvalues. This also overrides both `withInputField` and `showTooltip` props to\n`false`.',displayName:"WithAnyStep",props:{}}}catch{}try{t.displayName="WithIntegerStepAndMarks",t.__docgenInfo={description:"Use `marks` to render a visual representation of `step` ticks. Marks may be\nautomatically generated or custom mark indicators can be provided by an\n`Array`.",displayName:"WithIntegerStepAndMarks",props:{}}}catch{}try{n.displayName="WithDecimalStepAndMarks",n.__docgenInfo={description:"Decimal values may be used for `marks` rendered as a visual representation of\n`step` ticks. Marks may be automatically generated or custom mark indicators\ncan be provided by an `Array`.",displayName:"WithDecimalStepAndMarks",props:{}}}catch{}try{r.displayName="WithNegativeMinimumAndMarks",r.__docgenInfo={description:"A negative `min` value can be used to constrain `RangeControl` values. Mark\nindicators can represent negative values as well. Marks may be automatically\ngenerated or custom mark indicators can be provided by an `Array`.",displayName:"WithNegativeMinimumAndMarks",props:{}}}catch{}try{o.displayName="WithNegativeRangeAndMarks",o.__docgenInfo={description:"The entire range of valid values for a `RangeControl` may be negative. Mark\nindicators can represent negative values as well. Marks may be automatically\ngenerated or custom mark indicators can be provided by an `Array`.",displayName:"WithNegativeRangeAndMarks",props:{}}}catch{}try{s.displayName="WithAnyStepAndMarks",s.__docgenInfo={description:"When a `RangeControl` has a `step` value of `any` a user may select\nnon-integer values. This may still be used in conjunction with `marks`\nrendering a visual representation of `step` ticks.",displayName:"WithAnyStepAndMarks",props:{}}}catch{}export{g as Default,a as WithAnyStep,s as WithAnyStepAndMarks,n as WithDecimalStepAndMarks,t as WithIntegerStepAndMarks,r as WithNegativeMinimumAndMarks,o as WithNegativeRangeAndMarks,Ee as default};
