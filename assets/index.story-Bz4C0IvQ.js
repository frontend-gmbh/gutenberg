import{r as p,j as t}from"./iframe-2TvY6Iig.js";import{M as a}from"./index-C147YAfn.js";import{a as m}from"./index-BoXUQHNw.js";import"./preload-helper-Zf8nSx-t.js";import"./check-CavNG0Pm.js";import"./index-BIvJ8ozV.js";import"./index-1YdoA736.js";import"./index-CFuMsoxH.js";import"./index-BjRskdOB.js";import"./index-BjXx3EE5.js";import"./index-Dt7LODwq.js";import"./cubic-bezier-CfzpfWNY.js";import"./T6C2RYFI-BXv3qAIm.js";import"./LVA2YJMS-Bhv8eVm0.js";import"./LMDWO4NN-CH0ROf0T.js";import"./floating-ui.utils.dom-BlKqeV2W.js";import"./dropdown-motion-BuMQU1CT.js";import"./index-Dnuq8uNu.js";import"./component-BGXh8e92.js";import"./use-context-system-GBkKyJuM.js";import"./index-DUXT-3wK.js";import"./is-plain-object-BJ3z7EOF.js";import"./index-BtJmv7lM.js";import"./index-CK8hcbFu.js";import"./component-DATVQiJy.js";const B={component:a,title:"Components/Actions/MenuItemsChoice",id:"components-menuitemschoice",argTypes:{onHover:{action:"onHover"},onSelect:{action:"onSelect"},value:{control:!1}},parameters:{controls:{expanded:!0},docs:{canvas:{sourceState:"shown"}}}},l=({onHover:i,onSelect:c,choices:o})=>{const[s,n]=p.useState(o[0]?.value??"");return t(m,{label:"Editor",children:t(a,{choices:o,value:s,onSelect:(...r)=>{c(...r),n(...r)},onHover:i})})},e=l.bind({});e.args={choices:[{value:"arbitrary-choice-1",label:"Arbitrary Label #1",info:"Arbitrary Explanatory 1"},{value:"arbitrary-choice-2",label:"Arbitrary Label #2",info:"Arbitrary Explanatory 2"},{value:"arbitrary-choice-3",label:"Arbitrary Label #3",info:"Arbitrary Explanatory 3"}],value:"arbitrary-choice-1"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`({
  onHover,
  onSelect,
  choices
}) => {
  const [choice, setChoice] = useState(choices[0]?.value ?? '');
  return <MenuGroup label="Editor">
            <MenuItemsChoice choices={choices} value={choice} onSelect={(...selectArgs) => {
      onSelect(...selectArgs);
      setChoice(...selectArgs);
    }} onHover={onHover} />
        </MenuGroup>;
}`,...e.parameters?.docs?.source}}};export{e as Default,B as default};
