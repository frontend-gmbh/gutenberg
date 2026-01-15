import{j as n}from"./iframe-2TvY6Iig.js";import{I as m}from"./index-Dnuq8uNu.js";import{S as i}from"./index-CIbvvmjU.js";import{w as l}from"./wordpress-25v04gA5.js";import"./preload-helper-Zf8nSx-t.js";import"./index-BIvJ8ozV.js";import"./index-CXY7LZMH.js";import"./default-i18n-SWt35ZM4.js";import"./serialize-BIFBHZij.js";import"./is-plain-object-BJ3z7EOF.js";import"./index-COZNoWH5.js";import"./index-CK8hcbFu.js";import"./index-CFuMsoxH.js";import"./index-BjRskdOB.js";import"./index-BjXx3EE5.js";import"./index-Dt7LODwq.js";import"./index-1YdoA736.js";import"./cubic-bezier-CfzpfWNY.js";import"./T6C2RYFI-BXv3qAIm.js";import"./LVA2YJMS-Bhv8eVm0.js";import"./LMDWO4NN-CH0ROf0T.js";import"./floating-ui.utils.dom-BlKqeV2W.js";import"./dropdown-motion-BuMQU1CT.js";import"./component-BGXh8e92.js";import"./use-context-system-GBkKyJuM.js";import"./index-DUXT-3wK.js";import"./index-BtJmv7lM.js";import"./component-DATVQiJy.js";import"./index-F_9Ve2g3.js";const G={title:"Components/Feedback/Snackbar",id:"components-snackbar",component:i,argTypes:{as:{control:!1},onRemove:{action:"onRemove",control:!1},onDismiss:{action:"onDismiss",control:!1},listRef:{control:!1}},parameters:{controls:{expanded:!0},docs:{canvas:{sourceState:"shown"}}}},t=({children:c,...p})=>n(i,{...p,children:c}),r=t.bind({});r.args={children:"Use Snackbars to communicate low priority, non-interruptive messages to the user."};const o=t.bind({});o.args={actions:[{label:"Open WP.org",url:"https://wordpress.org"}],children:"Use Snackbars with an action link to an external page."};const e=t.bind({});e.args={children:"Add an icon to make your snackbar stand out",icon:n(m,{style:{fill:"currentcolor"},icon:l})};const a=t.bind({});a.args={children:"Add a cross to explicitly close the snackbar, and do not hide it automatically",explicitDismiss:!0};const s=t.bind({});s.args={actions:[{label:"Open WP.org",url:"https://wordpress.org"}],children:"Add an action and a cross to explicitly close the snackbar, and do not hide it automatically",explicitDismiss:!0};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`({
  children,
  ...props
}) => {
  return <Snackbar {...props}>{children}</Snackbar>;
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`({
  children,
  ...props
}) => {
  return <Snackbar {...props}>{children}</Snackbar>;
}`,...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`({
  children,
  ...props
}) => {
  return <Snackbar {...props}>{children}</Snackbar>;
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`({
  children,
  ...props
}) => {
  return <Snackbar {...props}>{children}</Snackbar>;
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`({
  children,
  ...props
}) => {
  return <Snackbar {...props}>{children}</Snackbar>;
}`,...s.parameters?.docs?.source}}};export{r as Default,s as WithActionAndExplicitDismiss,o as WithActions,a as WithExplicitDismiss,e as WithIcon,G as default};
