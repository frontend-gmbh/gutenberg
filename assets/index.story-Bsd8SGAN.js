import{a as i,r as u,j as g}from"./iframe-2TvY6Iig.js";import{t as h}from"./index-B-Y1hN-C.js";import{s as f}from"./sprintf-CXbjGC2q.js";import{a as s}from"./default-i18n-SWt35ZM4.js";import{i as _}from"./index-DdMUBdEx.js";import{h as v,a as C,b as H,c as w,d as P,e as T}from"./heading-level-6-DjtoeCzR.js";import{p as x}from"./paragraph-C9ONXeQX.js";import"./preload-helper-Zf8nSx-t.js";import"./index-EWCzKj8m.js";import"./BOLVLGVE-B5pULLmI.js";import"./P2CTZE2T-C4NqLDvb.js";import"./LMDWO4NN-CH0ROf0T.js";import"./LVA2YJMS-Bhv8eVm0.js";import"./index-BAuZ3O0F.js";import"./component-OVYdkCXu.js";import"./index-DUXT-3wK.js";import"./is-plain-object-BJ3z7EOF.js";import"./index-CK8hcbFu.js";import"./index-WfDDlHKp.js";import"./index-BjRskdOB.js";import"./index-BjXx3EE5.js";import"./index-CnMiRX9-.js";import"./cubic-bezier-CfzpfWNY.js";import"./T6C2RYFI-BXv3qAIm.js";import"./floating-ui.utils.dom-BlKqeV2W.js";import"./dropdown-motion-BMzsbdcX.js";import"./component-BHPgM0nZ.js";import"./index-DfbEstxj.js";import"./index-CLatOAvg.js";import"./use-controlled-value-BWWH94q-.js";import"./index-DYs7VejG.js";import"./floating-ui.react-dom-lQIVkebl.js";import"./index-C7vWhNYT.js";import"./platform-Dx-VEEF7.js";import"./index-g4CI5goq.js";import"./index-mcCfYwbk.js";import"./index-DDuNjadK.js";import"./index-Ct0bDPBV.js";import"./index-B18ctdHe.js";import"./index-CHj7W0Xl.js";import"./v4-CtRu48qb.js";import"./client-DnFbMQ_a.js";import"./index-D4zU5mcb.js";import"./proxy-DY4LNgox.js";import"./close-H02ILkEf.js";import"./index-BIvJ8ozV.js";import"./menu-dczDR4cj.js";const d={0:x,1:T,2:P,3:w,4:H,5:C,6:v};function l({level:r}){return d[r]?i.jsx(_,{icon:d[r]}):null}l.__docgenInfo={description:`Heading level icon.

@param {WPHeadingLevelIconProps} props Component props.

@return {?ComponentType} The icon.`,methods:[],displayName:"HeadingLevelIcon"};const c=[1,2,3,4,5,6],y={className:"block-library-heading-level-dropdown"};function m({options:r=c,value:n,onChange:t}){const p=r.filter(e=>e===0||c.includes(e)).sort((e,o)=>e-o);return i.jsx(h,{popoverProps:y,icon:i.jsx(l,{level:n}),label:s("Change level"),controls:p.map(e=>{const o=e===n;return{icon:i.jsx(l,{level:e}),title:e===0?s("Paragraph"):f(s("Heading %d"),e),isActive:o,onClick(){t(e)},role:"menuitemradio"}})})}m.__docgenInfo={description:`Dropdown for selecting a heading level (1 through 6) or paragraph (0).

@param {WPHeadingLevelDropdownProps} props Component props.

@return {ComponentType} The toolbar.`,methods:[],displayName:"HeadingLevelDropdown",props:{options:{defaultValue:{value:"[ 1, 2, 3, 4, 5, 6 ]",computed:!1},required:!1}}};const Ce={title:"BlockEditor/HeadingLevelDropdown",component:m,parameters:{docs:{canvas:{sourceState:"shown"},description:{component:"Dropdown for selecting a heading level (1 through 6) or paragraph (0)."}}},argTypes:{value:{control:{type:null},description:"The chosen heading level."},options:{control:"check",options:[1,2,3,4,5,6],description:"An array of supported heading levels."},onChange:{action:"onChange",control:{type:null},description:"Function called with the selected value changes."}}},a={render:function({onChange:n,...t}){const[p,e]=u.useState(t.value);return g(m,{...t,value:p,onChange:(...o)=>{e(...o),n(...o)}})},args:{value:2}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: function Template({
    onChange,
    ...args
  }) {
    const [value, setValue] = useState(args.value);
    return <HeadingLevelDropdown {...args} value={value} onChange={(...changeArgs) => {
      setValue(...changeArgs);
      onChange(...changeArgs);
    }} />;
  },
  args: {
    value: 2
  }
}`,...a.parameters?.docs?.source}}};export{a as Default,Ce as default};
