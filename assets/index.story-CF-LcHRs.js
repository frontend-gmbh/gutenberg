import{r as h,j as c,F as b,f as u}from"./iframe-2TvY6Iig.js";import{C as g}from"./index-GNnU2jet.js";import"./preload-helper-Zf8nSx-t.js";import"./sprintf-CXbjGC2q.js";import"./default-i18n-SWt35ZM4.js";import"./index-BjXx3EE5.js";import"./index-CXY7LZMH.js";import"./emotion-react.browser.esm-T2caqgd_.js";import"./space-CjrGwnR-.js";import"./component-l_ygUujJ.js";import"./context-DbMhvW6o.js";import"./index-BjRskdOB.js";import"./use-responsive-value-bUbLlkWc.js";import"./use-context-system-GBkKyJuM.js";import"./index-DUXT-3wK.js";import"./is-plain-object-BJ3z7EOF.js";import"./index-BtJmv7lM.js";import"./index-CK8hcbFu.js";import"./component-DATVQiJy.js";import"./suggestions-list-BL584KLy.js";import"./index-DDuNjadK.js";import"./index-DckQhh-o.js";import"./base-control-styles-CoefPmVd.js";import"./font-Cck9kG94.js";import"./box-sizing-DDIeAART.js";import"./colors-values-BSq3yUT9.js";import"./config-values-CkVNYk_w.js";import"./component-BGXh8e92.js";import"./index-CFuMsoxH.js";import"./index-Dt7LODwq.js";import"./index-1YdoA736.js";import"./cubic-bezier-CfzpfWNY.js";import"./T6C2RYFI-BXv3qAIm.js";import"./LVA2YJMS-Bhv8eVm0.js";import"./LMDWO4NN-CH0ROf0T.js";import"./floating-ui.utils.dom-BlKqeV2W.js";import"./dropdown-motion-BuMQU1CT.js";import"./index-Dnuq8uNu.js";import"./index-BIvJ8ozV.js";import"./index-Chn_29Iy.js";import"./index-DWJraqdh.js";import"./index-Ct0bDPBV.js";import"./strings-B_y2JcYF.js";import"./index-COsfWvJn.js";import"./use-deprecated-props-BokcF_Hx.js";import"./with-ignore-ime-events-BK39a-UH.js";import"./deprecated-36px-size-UsjcW-j9.js";import"./index-D3lQSxvx.js";import"./use-controlled-value-D6nr5Y4s.js";import"./component-BiaHS86M.js";import"./hook-56LQ9BfU.js";import"./close-small-D3dHP1RP.js";const{fn:d}=__STORYBOOK_MODULE_TEST__,C=[{name:"Afghanistan",code:"AF"},{name:"Åland Islands",code:"AX"},{name:"Albania",code:"AL"},{name:"Algeria",code:"DZ"},{name:"American Samoa",code:"AS"},{name:"Andorra",code:"AD"},{name:"Angola",code:"AO"},{name:"Anguilla",code:"AI"},{name:"Antarctica",code:"AQ"},{name:"Antigua and Barbuda",code:"AG"},{name:"Argentina",code:"AR"},{name:"Armenia",code:"AM"},{name:"Aruba",code:"AW"},{name:"Australia",code:"AU"},{name:"Austria",code:"AT"},{name:"Azerbaijan",code:"AZ"}],ye={title:"Components/Selection & Input/Common/ComboboxControl",id:"components-comboboxcontrol",component:g,argTypes:{value:{control:!1}},args:{onChange:d(),onFilterValueChange:d()},parameters:{controls:{expanded:!0},docs:{canvas:{sourceState:"shown"}}}},y=e=>({value:e.code,label:e.name}),m=C.map(y),s=({onChange:e,...r})=>{const[i,p]=h.useState(null);return c(b,{children:c(g,{...r,value:i,onChange:(...l)=>{p(...l),e?.(...l)}})})},a=s.bind({});a.args={__next40pxDefaultSize:!0,label:"Select a country",options:m};const o=s.bind({});o.args={...a.args,label:"Select an author",options:[{value:"parsley",label:"Parsley Montana",age:48,country:"Germany"},{value:"cabbage",label:"Cabbage New York",age:44,country:"France"},{value:"jake",label:"Jake Weary",age:41,country:"United Kingdom"}],__experimentalRenderItem:({item:e})=>{const{label:r,age:i,country:p}=e;return u("div",{children:[c("div",{style:{marginBottom:"0.2rem"},children:r}),u("small",{children:["Age: ",i,", Country: ",p]})]})}};const n=s.bind({}),A=m.map((e,r)=>({...e,disabled:r%3===0}));n.args={...a.args,options:A};const t=s.bind({});t.args={...a.args,options:m,expandOnFocus:!1};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`({
  onChange,
  ...args
}) => {
  const [value, setValue] = useState<ComboboxControlProps['value']>(null);
  return <>
            <ComboboxControl {...args} value={value} onChange={(...changeArgs) => {
      setValue(...changeArgs);
      onChange?.(...changeArgs);
    }} />
        </>;
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`({
  onChange,
  ...args
}) => {
  const [value, setValue] = useState<ComboboxControlProps['value']>(null);
  return <>
            <ComboboxControl {...args} value={value} onChange={(...changeArgs) => {
      setValue(...changeArgs);
      onChange?.(...changeArgs);
    }} />
        </>;
}`,...o.parameters?.docs?.source},description:{story:"The rendered output of each suggestion can be customized by passing a\nrender function to the `__experimentalRenderItem` prop. (This is still an experimental feature\nand is subject to change.)",...o.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`({
  onChange,
  ...args
}) => {
  const [value, setValue] = useState<ComboboxControlProps['value']>(null);
  return <>
            <ComboboxControl {...args} value={value} onChange={(...changeArgs) => {
      setValue(...changeArgs);
      onChange?.(...changeArgs);
    }} />
        </>;
}`,...n.parameters?.docs?.source},description:{story:"You can disable options in the list\nby setting the `disabled` property to true\nfor individual items in the option object.",...n.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`({
  onChange,
  ...args
}) => {
  const [value, setValue] = useState<ComboboxControlProps['value']>(null);
  return <>
            <ComboboxControl {...args} value={value} onChange={(...changeArgs) => {
      setValue(...changeArgs);
      onChange?.(...changeArgs);
    }} />
        </>;
}`,...t.parameters?.docs?.source},description:{story:"By default, the combobox expands when focused.\nYou can disable this behavior by setting the `expandOnFocus` prop to `false`.\nThis is useful when you want to show the suggestions only when the user interacts with the input.",...t.parameters?.docs?.description}}};try{o.displayName="WithCustomRenderItem",o.__docgenInfo={description:"The rendered output of each suggestion can be customized by passing a\nrender function to the `__experimentalRenderItem` prop. (This is still an experimental feature\nand is subject to change.)",displayName:"WithCustomRenderItem",props:{}}}catch{}try{n.displayName="WithDisabledOptions",n.__docgenInfo={description:"You can disable options in the list\nby setting the `disabled` property to true\nfor individual items in the option object.",displayName:"WithDisabledOptions",props:{}}}catch{}try{t.displayName="NotExpandOnFocus",t.__docgenInfo={description:"By default, the combobox expands when focused.\nYou can disable this behavior by setting the `expandOnFocus` prop to `false`.\nThis is useful when you want to show the suggestions only when the user interacts with the input.",displayName:"NotExpandOnFocus",props:{}}}catch{}export{a as Default,t as NotExpandOnFocus,o as WithCustomRenderItem,n as WithDisabledOptions,ye as default};
