import{j as p}from"./iframe-2TvY6Iig.js";import{M as c,a}from"./index-BoXUQHNw.js";import{S as u}from"./index-1YdoA736.js";import{m as d}from"./more-DAulmHt7.js";import{l as i}from"./link-DIbhJbQ8.js";import{c as l}from"./check-CavNG0Pm.js";import"./preload-helper-Zf8nSx-t.js";import"./index-CFuMsoxH.js";import"./index-BjRskdOB.js";import"./index-BjXx3EE5.js";import"./index-Dt7LODwq.js";import"./cubic-bezier-CfzpfWNY.js";import"./T6C2RYFI-BXv3qAIm.js";import"./LVA2YJMS-Bhv8eVm0.js";import"./LMDWO4NN-CH0ROf0T.js";import"./floating-ui.utils.dom-BlKqeV2W.js";import"./dropdown-motion-BuMQU1CT.js";import"./index-Dnuq8uNu.js";import"./index-BIvJ8ozV.js";import"./component-BGXh8e92.js";import"./use-context-system-GBkKyJuM.js";import"./index-DUXT-3wK.js";import"./is-plain-object-BJ3z7EOF.js";import"./index-BtJmv7lM.js";import"./index-CK8hcbFu.js";import"./component-DATVQiJy.js";const F={component:c,title:"Components/Actions/MenuItem",id:"components-menuitem",argTypes:{children:{control:!1},icon:{control:{type:"select"},options:["check","link","more"],mapping:{check:l,link:i,more:d}}},parameters:{controls:{expanded:!0},docs:{canvas:{sourceState:"shown"}}}},n=m=>p(a,{children:p(c,{...m,children:"Menu Item 1"})}),r=n.bind({}),e=n.bind({});e.args={...r.args,isSelected:!0,role:"menuitemcheckbox"};const o=n.bind({});o.args={...r.args,icon:i,iconPosition:"left"};const t=n.bind({});t.args={...r.args,info:"Menu Item description"};const s=n.bind({});s.args={...r.args,suffix:p(u,{shortcut:"Ctrl+M"})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`props => {
  return <MenuGroup>
            <MenuItem {...props}>Menu Item 1</MenuItem>
        </MenuGroup>;
}`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`props => {
  return <MenuGroup>
            <MenuItem {...props}>Menu Item 1</MenuItem>
        </MenuGroup>;
}`,...e.parameters?.docs?.source},description:{story:'When the `role` prop is either `"menuitemcheckbox"` or `"menuitemradio"`, the\n`isSelected` prop should be used so screen readers can tell which item is currently selected.',...e.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`props => {
  return <MenuGroup>
            <MenuItem {...props}>Menu Item 1</MenuItem>
        </MenuGroup>;
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`props => {
  return <MenuGroup>
            <MenuItem {...props}>Menu Item 1</MenuItem>
        </MenuGroup>;
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`props => {
  return <MenuGroup>
            <MenuItem {...props}>Menu Item 1</MenuItem>
        </MenuGroup>;
}`,...s.parameters?.docs?.source}}};try{e.displayName="IsSelected",e.__docgenInfo={description:'When the `role` prop is either `"menuitemcheckbox"` or `"menuitemradio"`, the\n`isSelected` prop should be used so screen readers can tell which item is currently selected.',displayName:"IsSelected",props:{}}}catch{}export{r as Default,e as IsSelected,o as WithIcon,t as WithInfo,s as WithSuffix,F as default};
