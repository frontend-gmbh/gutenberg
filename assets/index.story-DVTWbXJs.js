import{r as m,j as d}from"./iframe-2TvY6Iig.js";import{F as u}from"./index-DLM-Dk-G.js";import"./preload-helper-Zf8nSx-t.js";import"./sprintf-CXbjGC2q.js";import"./default-i18n-SWt35ZM4.js";import"./index-BjXx3EE5.js";import"./index-BcsUY9xg.js";import"./index-BeazDMB8.js";import"./index-ChLxn6tX.js";import"./index-CXY7LZMH.js";import"./index-D4zU5mcb.js";import"./index-CFuMsoxH.js";import"./index-BjRskdOB.js";import"./index-Dt7LODwq.js";import"./index-1YdoA736.js";import"./cubic-bezier-CfzpfWNY.js";import"./T6C2RYFI-BXv3qAIm.js";import"./LVA2YJMS-Bhv8eVm0.js";import"./LMDWO4NN-CH0ROf0T.js";import"./floating-ui.utils.dom-BlKqeV2W.js";import"./dropdown-motion-BuMQU1CT.js";import"./index-Dnuq8uNu.js";import"./index-BIvJ8ozV.js";import"./component-BGXh8e92.js";import"./use-context-system-GBkKyJuM.js";import"./index-DUXT-3wK.js";import"./is-plain-object-BJ3z7EOF.js";import"./index-BtJmv7lM.js";import"./index-CK8hcbFu.js";import"./component-DATVQiJy.js";import"./close-small-D3dHP1RP.js";import"./suggestions-list-BL584KLy.js";import"./index-DDuNjadK.js";import"./emotion-react.browser.esm-T2caqgd_.js";import"./space-CjrGwnR-.js";import"./component-l_ygUujJ.js";import"./context-DbMhvW6o.js";import"./use-responsive-value-bUbLlkWc.js";import"./box-sizing-DDIeAART.js";import"./base-control-styles-CoefPmVd.js";import"./font-Cck9kG94.js";import"./colors-values-BSq3yUT9.js";import"./config-values-CkVNYk_w.js";import"./use-deprecated-props-BokcF_Hx.js";import"./with-ignore-ime-events-BK39a-UH.js";import"./deprecated-36px-size-UsjcW-j9.js";import"./component-CqSZVoza.js";import"./hook-56LQ9BfU.js";const Ce={component:u,title:"Components/Selection & Input/Common/FormTokenField",id:"components-formtokenfield",argTypes:{value:{control:!1},__experimentalValidateInput:{control:!1}},parameters:{controls:{expanded:!0},docs:{canvas:{sourceState:"shown"}}}},g=["Africa","America","Antarctica","Asia","Europe","Oceania"],a=({...e})=>{const[i,c]=m.useState([]);return d(u,{...e,value:i,onChange:p=>c(p)})},o=a.bind({});o.args={label:"Type a continent",suggestions:g,__next40pxDefaultSize:!0};const s=({suggestions:e,...i})=>{const[c,p]=m.useState([]),[C,h]=m.useState([]);return d(u,{...i,value:c,suggestions:C,onChange:l=>p(l),onInputChange:l=>{const _=setTimeout(()=>{const f=(e||[]).filter(y=>y.toLowerCase().includes(l.toLowerCase()));h(f)},1e3);return()=>clearTimeout(_)}})};s.args={label:"Type a continent",suggestions:g,__next40pxDefaultSize:!0};const r=a.bind({});r.args={...o.args,__experimentalExpandOnFocus:!0,__experimentalAutoSelectFirstMatch:!0};const t=a.bind({});t.args={...o.args,displayTransform:e=>`📍 ${e}`,__experimentalRenderItem:({item:e})=>d("div",{children:`${e} — a nice place to visit`}),__experimentalExpandOnFocus:!0};const n=a.bind({});n.args={...o.args,__experimentalValidateInput:e=>g.includes(e),__experimentalExpandOnFocus:!0};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`({
  ...args
}) => {
  const [selectedContinents, setSelectedContinents] = useState<ComponentProps<typeof FormTokenField>['value']>([]);
  return <FormTokenField {...args} value={selectedContinents} onChange={tokens => setSelectedContinents(tokens)} />;
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`({
  suggestions,
  ...args
}) => {
  const [selectedContinents, setSelectedContinents] = useState<ComponentProps<typeof FormTokenField>['value']>([]);
  const [availableContinents, setAvailableContinents] = useState<string[]>([]);
  const searchContinents = (input: string) => {
    const timeout = setTimeout(() => {
      const available = (suggestions || []).filter(continent => continent.toLowerCase().includes(input.toLowerCase()));
      setAvailableContinents(available);
    }, 1000);
    return () => clearTimeout(timeout);
  };
  return <FormTokenField {...args} value={selectedContinents} suggestions={availableContinents} onChange={tokens => setSelectedContinents(tokens)} onInputChange={searchContinents} />;
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`({
  ...args
}) => {
  const [selectedContinents, setSelectedContinents] = useState<ComponentProps<typeof FormTokenField>['value']>([]);
  return <FormTokenField {...args} value={selectedContinents} onChange={tokens => setSelectedContinents(tokens)} />;
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`({
  ...args
}) => {
  const [selectedContinents, setSelectedContinents] = useState<ComponentProps<typeof FormTokenField>['value']>([]);
  return <FormTokenField {...args} value={selectedContinents} onChange={tokens => setSelectedContinents(tokens)} />;
}`,...t.parameters?.docs?.source},description:{story:`The rendered content of each token can be customized by passing a
render function to the \`displayTransform\` prop.

Similarly, each suggestion can be customized by passing a
render function to the \`__experimentalRenderItem\` prop. (This is still an
experimental feature and is subject to change.)`,...t.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`({
  ...args
}) => {
  const [selectedContinents, setSelectedContinents] = useState<ComponentProps<typeof FormTokenField>['value']>([]);
  return <FormTokenField {...args} value={selectedContinents} onChange={tokens => setSelectedContinents(tokens)} />;
}`,...n.parameters?.docs?.source},description:{story:"Only values for which the `__experimentalValidateInput` function returns\n`true` will be tokenized. (This is still an experimental feature and is\nsubject to change.)\n\nIn this example, the user can only add tokens that are already in the list.",...n.parameters?.docs?.description}}};try{t.displayName="WithCustomRenderedItems",t.__docgenInfo={description:`The rendered content of each token can be customized by passing a
render function to the \`displayTransform\` prop.

Similarly, each suggestion can be customized by passing a
render function to the \`__experimentalRenderItem\` prop. (This is still an
experimental feature and is subject to change.)`,displayName:"WithCustomRenderedItems",props:{}}}catch{}try{n.displayName="ValidateNewTokens",n.__docgenInfo={description:"Only values for which the `__experimentalValidateInput` function returns\n`true` will be tokenized. (This is still an experimental feature and is\nsubject to change.)\n\nIn this example, the user can only add tokens that are already in the list.",displayName:"ValidateNewTokens",props:{}}}catch{}export{s as Async,o as Default,r as DropdownSelector,n as ValidateNewTokens,t as WithCustomRenderedItems,Ce as default};
