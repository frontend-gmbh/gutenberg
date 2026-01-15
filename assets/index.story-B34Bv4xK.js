import{r as g,j as m}from"./iframe-2TvY6Iig.js";import{F as t}from"./index-cTr3VGcq.js";import"./preload-helper-Zf8nSx-t.js";const C={component:t,title:"Components/FormToggle",argTypes:{onChange:{action:"onChange"}},parameters:{controls:{expanded:!0},docs:{canvas:{sourceState:"shown"}}}},d=({onChange:o,...s})=>{const[a,n]=g.useState(!0);return m(t,{...s,checked:a,onChange:r=>{n(c=>!c),o(r)}})},e=d.bind({});e.args={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`({
  onChange,
  ...args
}) => {
  const [isChecked, setChecked] = useState(true);
  return <FormToggle {...args} checked={isChecked} onChange={e => {
    setChecked(state => !state);
    onChange(e);
  }} />;
}`,...e.parameters?.docs?.source}}};export{e as Default,C as default};
