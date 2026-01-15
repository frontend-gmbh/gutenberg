import{j as c,f as m,c as g}from"./iframe-2TvY6Iig.js";import{I as f}from"./index-Dnuq8uNu.js";import{e as _,p as h}from"./published-DdUPIXI6.js";import{c as v,i as y}from"./info-DA0U3N_V.js";import"./preload-helper-Zf8nSx-t.js";import"./index-BIvJ8ozV.js";function b(r="default"){switch(r){case"info":return y;case"success":return h;case"warning":return v;case"error":return _;default:return null}}function i({className:r,intent:o="default",children:l,...p}){const u=b(o),d=!!u;return c("span",{className:g("components-badge",r,{[`is-${o}`]:o,"has-icon":d}),...p,children:m("span",{className:"components-badge__flex-wrapper",children:[d&&c(f,{icon:u,size:16,fill:"currentColor",className:"components-badge__icon"}),c("span",{className:"components-badge__content",children:l})]})})}try{i.displayName="Badge",i.__docgenInfo={description:"",displayName:"Badge",props:{intent:{defaultValue:{value:"default"},description:"Badge variant.",name:"intent",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"info"'},{value:'"warning"'},{value:'"success"'},{value:'"error"'}]}},children:{defaultValue:null,description:"Text to display inside the badge.",name:"children",required:!0,type:{name:"string"}}}}}catch{}const C={component:i,title:"Components/Containers/Badge",id:"components-badge",tags:["status-private"]},e={args:{children:"Code is Poetry"}},a={args:{...e.args,intent:"info"}},s={args:{...e.args,intent:"success"}},n={args:{...e.args,intent:"warning"}},t={args:{...e.args,intent:"error"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Code is Poetry'
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    intent: 'info'
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    intent: 'success'
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    intent: 'warning'
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    intent: 'error'
  }
}`,...t.parameters?.docs?.source}}};export{e as Default,t as Error,a as Info,s as Success,n as Warning,C as default};
