import{f as i,j as t,r as m,F as c}from"./iframe-2TvY6Iig.js";import{a as n,M as r}from"./index-BoXUQHNw.js";import{M as l}from"./index-C147YAfn.js";import"./preload-helper-Zf8nSx-t.js";import"./index-1YdoA736.js";import"./index-CFuMsoxH.js";import"./index-BjRskdOB.js";import"./index-BjXx3EE5.js";import"./index-Dt7LODwq.js";import"./cubic-bezier-CfzpfWNY.js";import"./T6C2RYFI-BXv3qAIm.js";import"./LVA2YJMS-Bhv8eVm0.js";import"./LMDWO4NN-CH0ROf0T.js";import"./floating-ui.utils.dom-BlKqeV2W.js";import"./dropdown-motion-BuMQU1CT.js";import"./index-Dnuq8uNu.js";import"./index-BIvJ8ozV.js";import"./component-BGXh8e92.js";import"./use-context-system-GBkKyJuM.js";import"./index-DUXT-3wK.js";import"./is-plain-object-BJ3z7EOF.js";import"./index-BtJmv7lM.js";import"./index-CK8hcbFu.js";import"./component-DATVQiJy.js";import"./check-CavNG0Pm.js";const B={title:"Components/Actions/MenuGroup",component:n,id:"components-menugroup",argTypes:{children:{control:!1}},parameters:{controls:{expanded:!0},docs:{canvas:{sourceState:"shown"}}}},d=a=>i(n,{...a,children:[t(r,{children:"Menu Item 1"}),t(r,{children:"Menu Item 2"})]}),o=d.bind({}),h=a=>{const[s,p]=m.useState("visual");return i(c,{children:[i(n,{label:"View",children:[t(r,{children:"Top Toolbar"}),t(r,{children:"Spotlight Mode"}),t(r,{children:"Distraction Free"})]}),t(n,{...a,children:t(l,{choices:[{value:"visual",label:"Visual editor"},{value:"text",label:"Code editor"}],value:s,onSelect:u=>p(u),onHover:()=>{}})})]})},e=h.bind({});e.args={...o.args,hideSeparator:!1,label:"Editor"};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`args => {
  return <MenuGroup {...args}>
            <MenuItem>Menu Item 1</MenuItem>
            <MenuItem>Menu Item 2</MenuItem>
        </MenuGroup>;
}`,...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`args => {
  const [mode, setMode] = useState('visual');
  const choices = [{
    value: 'visual',
    label: 'Visual editor'
  }, {
    value: 'text',
    label: 'Code editor'
  }];
  return <>
            <MenuGroup label="View">
                <MenuItem>Top Toolbar</MenuItem>
                <MenuItem>Spotlight Mode</MenuItem>
                <MenuItem>Distraction Free</MenuItem>
            </MenuGroup>
            <MenuGroup {...args}>
                <MenuItemsChoice choices={choices} value={mode} onSelect={(newMode: string) => setMode(newMode)} onHover={() => {}} />
            </MenuGroup>
        </>;
}`,...e.parameters?.docs?.source},description:{story:`When other menu items exist above or below a MenuGroup, the group
should have a divider line between it and the adjacent item.`,...e.parameters?.docs?.description}}};try{e.displayName="WithSeparator",e.__docgenInfo={description:`When other menu items exist above or below a MenuGroup, the group
should have a divider line between it and the adjacent item.`,displayName:"WithSeparator",props:{}}}catch{}export{o as Default,e as WithSeparator,B as default};
