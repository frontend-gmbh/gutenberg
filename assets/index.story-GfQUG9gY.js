import{j as p,f as y}from"./iframe-2TvY6Iig.js";import{B as d}from"./index-CFuMsoxH.js";import{w as g}from"./wordpress-25v04gA5.js";import{f as h,a as f}from"./format-italic-DQVmLP04.js";import{l}from"./link-DIbhJbQ8.js";import{m as _}from"./more-DAulmHt7.js";import"./preload-helper-Zf8nSx-t.js";import"./index-BjRskdOB.js";import"./index-BjXx3EE5.js";import"./index-Dt7LODwq.js";import"./index-1YdoA736.js";import"./cubic-bezier-CfzpfWNY.js";import"./T6C2RYFI-BXv3qAIm.js";import"./LVA2YJMS-Bhv8eVm0.js";import"./LMDWO4NN-CH0ROf0T.js";import"./floating-ui.utils.dom-BlKqeV2W.js";import"./dropdown-motion-BuMQU1CT.js";import"./index-Dnuq8uNu.js";import"./index-BIvJ8ozV.js";import"./component-BGXh8e92.js";import"./use-context-system-GBkKyJuM.js";import"./index-DUXT-3wK.js";import"./is-plain-object-BJ3z7EOF.js";import"./index-BtJmv7lM.js";import"./index-CK8hcbFu.js";import"./component-DATVQiJy.js";const M={title:"Components/Actions/Button",id:"components-button",component:d,argTypes:{"aria-pressed":{control:{type:"select"},description:'Indicates the current "pressed" state, implying it is a toggle button. Implicitly set by `isPressed`, but takes precedence if both are provided.',options:[void 0,"true","false","mixed"],table:{type:{summary:'boolean | "true" | "false" | "mixed"'}}},href:{type:{name:"string",required:!1}},icon:{control:{type:"select"},options:["wordpress","link","more"],mapping:{wordpress:g,link:l,more:_}}},parameters:{controls:{expanded:!0},docs:{canvas:{sourceState:"shown"}}}},n=i=>p(d,{...i}),r=n.bind({});r.args={children:"Code is poetry"};const t=n.bind({});t.args={...r.args,variant:"primary"};const e=n.bind({});e.args={...r.args,variant:"secondary"};const o=n.bind({});o.args={...r.args,variant:"tertiary"};const a=n.bind({});a.args={...r.args,variant:"link"};const s=n.bind({});s.args={...r.args,isDestructive:!0};const c=n.bind({});c.args={label:"Code is poetry",icon:"wordpress"};const m=()=>y(({children:u})=>p("div",{style:{display:"inline-flex"},children:u}),{children:[p(d,{icon:h,label:"Bold"}),p(d,{icon:f,label:"Italic"}),p(d,{icon:l,label:"Link"})]});r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`props => {
  return <Button {...props}></Button>;
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`props => {
  return <Button {...props}></Button>;
}`,...t.parameters?.docs?.source},description:{story:`Primary buttons stand out with bold color fills, making them distinct
from the background. Since they naturally draw attention, each layout should contain
only one primary button to guide users toward the most important action.`,...t.parameters?.docs?.description}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`props => {
  return <Button {...props}></Button>;
}`,...e.parameters?.docs?.source},description:{story:"Secondary buttons complement primary buttons. Use them for standard actions that may appear alongside a primary action.",...e.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`props => {
  return <Button {...props}></Button>;
}`,...o.parameters?.docs?.source},description:{story:"Tertiary buttons have minimal emphasis. Use them sparingly to subtly highlight an action.",...o.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`props => {
  return <Button {...props}></Button>;
}`,...a.parameters?.docs?.source},description:{story:`Link buttons have low emphasis and blend into the page, making them suitable for supplementary actions,
especially those involving navigation away from the current view.`,...a.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`props => {
  return <Button {...props}></Button>;
}`,...s.parameters?.docs?.source},description:{story:"Use this variant for irreversible actions. Apply sparingly and only for actions with significant impact.",...s.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`props => {
  return <Button {...props}></Button>;
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
  const GroupContainer = ({
    children
  }: {
    children: ReactNode;
  }) => <div style={{
    display: 'inline-flex'
  }}>{children}</div>;
  return <GroupContainer>
            <Button icon={formatBold} label="Bold" />
            <Button icon={formatItalic} label="Italic" />
            <Button icon={link} label="Link" />
        </GroupContainer>;
}`,...m.parameters?.docs?.source}}};try{t.displayName="Primary",t.__docgenInfo={description:`Primary buttons stand out with bold color fills, making them distinct
from the background. Since they naturally draw attention, each layout should contain
only one primary button to guide users toward the most important action.`,displayName:"Primary",props:{}}}catch{}try{e.displayName="Secondary",e.__docgenInfo={description:"Secondary buttons complement primary buttons. Use them for standard actions that may appear alongside a primary action.",displayName:"Secondary",props:{}}}catch{}try{o.displayName="Tertiary",o.__docgenInfo={description:"Tertiary buttons have minimal emphasis. Use them sparingly to subtly highlight an action.",displayName:"Tertiary",props:{}}}catch{}try{a.displayName="Link",a.__docgenInfo={description:`Link buttons have low emphasis and blend into the page, making them suitable for supplementary actions,
especially those involving navigation away from the current view.`,displayName:"Link",props:{}}}catch{}try{s.displayName="IsDestructive",s.__docgenInfo={description:"Use this variant for irreversible actions. Apply sparingly and only for actions with significant impact.",displayName:"IsDestructive",props:{}}}catch{}export{r as Default,m as GroupedIcons,c as Icon,s as IsDestructive,a as Link,t as Primary,e as Secondary,o as Tertiary,M as default};
