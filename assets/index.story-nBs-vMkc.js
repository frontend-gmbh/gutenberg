import{r as h,j as r,f as m}from"./iframe-2TvY6Iig.js";import{C as c}from"./index-BmlbbmG3.js";import{V as u}from"./component-6CLxCT3h.js";import{H as g}from"./component-CIWI0tS-.js";import"./preload-helper-Zf8nSx-t.js";import"./index-BjXx3EE5.js";import"./index-DDuNjadK.js";import"./index-BjRskdOB.js";import"./index-FlM62Vh8.js";import"./index-DckQhh-o.js";import"./base-control-styles-CoefPmVd.js";import"./emotion-react.browser.esm-T2caqgd_.js";import"./space-CjrGwnR-.js";import"./font-Cck9kG94.js";import"./box-sizing-DDIeAART.js";import"./colors-values-BSq3yUT9.js";import"./config-values-CkVNYk_w.js";import"./use-context-system-GBkKyJuM.js";import"./index-DUXT-3wK.js";import"./is-plain-object-BJ3z7EOF.js";import"./index-BtJmv7lM.js";import"./index-CK8hcbFu.js";import"./component-BGXh8e92.js";import"./component-DATVQiJy.js";import"./reset-DAroYZ4v.js";import"./index-BIvJ8ozV.js";import"./check-CavNG0Pm.js";import"./hook-D_MMjSqd.js";import"./values-CtPxXHrl.js";import"./get-valid-children-BTY2hlyh.js";import"./component-CqSZVoza.js";import"./hook-56LQ9BfU.js";import"./context-DbMhvW6o.js";import"./use-responsive-value-bUbLlkWc.js";const Z={component:c,title:"Components/Selection & Input/Common/CheckboxControl",id:"components-checkboxcontrol",argTypes:{onChange:{action:"onChange"},checked:{control:!1},help:{control:{type:"text"}}},parameters:{controls:{expanded:!0,exclude:["heading"]},docs:{canvas:{sourceState:"shown"}}}},k=({onChange:s,...i})=>{const[e,n]=h.useState(!0);return r(c,{...i,checked:e,onChange:t=>{n(t),s(t)}})},l=k.bind({});l.args={label:"Is author",help:"Is the user an author or not?"};const p=({onChange:s,...i})=>{const[e,n]=h.useState({apple:!1,orange:!1}),t=Object.values(e).every(Boolean),b=Object.values(e).some(Boolean)&&!t;return m(u,{children:[r(c,{...i,checked:t,indeterminate:b,onChange:o=>{n({apple:o,orange:o}),s(o)}}),r(c,{label:"Apple",checked:e.apple,onChange:o=>n(d=>({...d,apple:o}))}),r(c,{label:"Orange",checked:e.orange,onChange:o=>n(d=>({...d,orange:o}))})]})};p.args={label:"Select all"};const a=({onChange:s,...i})=>{const[e,n]=h.useState(!0);return m(g,{justify:"flex-start",alignment:"top",spacing:0,children:[r(c,{...i,checked:e,onChange:t=>{n(t),s(t)},id:"my-checkbox-with-custom-label","aria-describedby":"my-custom-description"}),m(u,{children:[r("label",{htmlFor:"my-checkbox-with-custom-label",children:"My custom label"}),r("div",{id:"my-custom-description",style:{fontSize:13},children:"A custom description."})]})]})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`({
  onChange,
  ...args
}) => {
  const [isChecked, setChecked] = useState(true);
  return <CheckboxControl {...args} checked={isChecked} onChange={v => {
    setChecked(v);
    onChange(v);
  }} />;
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`({
  onChange,
  ...args
}) => {
  const [fruits, setFruits] = useState({
    apple: false,
    orange: false
  });
  const isAllChecked = Object.values(fruits).every(Boolean);
  const isIndeterminate = Object.values(fruits).some(Boolean) && !isAllChecked;
  return <VStack>
            <CheckboxControl {...args} checked={isAllChecked} indeterminate={isIndeterminate} onChange={v => {
      setFruits({
        apple: v,
        orange: v
      });
      onChange(v);
    }} />
            <CheckboxControl label="Apple" checked={fruits.apple} onChange={apple => setFruits(prevState => ({
      ...prevState,
      apple
    }))} />
            <CheckboxControl label="Orange" checked={fruits.orange} onChange={orange => setFruits(prevState => ({
      ...prevState,
      orange
    }))} />
        </VStack>;
}`,...p.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`({
  onChange,
  ...args
}) => {
  const [isChecked, setChecked] = useState(true);
  return <HStack justify="flex-start" alignment="top" spacing={0}>
            <CheckboxControl {...args} checked={isChecked} onChange={v => {
      setChecked(v);
      onChange(v);
    }}
    // Disable reason: For simplicity of the code snippet.
    // eslint-disable-next-line no-restricted-syntax
    id="my-checkbox-with-custom-label" aria-describedby="my-custom-description" />
            <VStack>
                <label htmlFor="my-checkbox-with-custom-label">
                    My custom label
                </label>
                {/* eslint-disable-next-line no-restricted-syntax */}
                <div id="my-custom-description" style={{
        fontSize: 13
      }}>
                    A custom description.
                </div>
            </VStack>
        </HStack>;
}`,...a.parameters?.docs?.source},description:{story:"For more complex designs, a custom `<label>` element can be associated with the checkbox\nby leaving the `label` prop undefined and using the `id` and `htmlFor` props instead.\nBecause the label element also functions as a click target for the checkbox, [do not\nplace interactive elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label#interactive_content)\nsuch as links or buttons inside the `<label>` node.\n\nSimilarly, a custom description can be added by omitting the `help` prop\nand using the `aria-describedby` prop instead.",...a.parameters?.docs?.description}}};try{a.displayName="WithCustomLabel",a.__docgenInfo={description:"For more complex designs, a custom `<label>` element can be associated with the checkbox\nby leaving the `label` prop undefined and using the `id` and `htmlFor` props instead.\nBecause the label element also functions as a click target for the checkbox, [do not\nplace interactive elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label#interactive_content)\nsuch as links or buttons inside the `<label>` node.\n\nSimilarly, a custom description can be added by omitting the `help` prop\nand using the `aria-describedby` prop instead.",displayName:"WithCustomLabel",props:{}}}catch{}export{l as Default,p as Indeterminate,a as WithCustomLabel,Z as default};
