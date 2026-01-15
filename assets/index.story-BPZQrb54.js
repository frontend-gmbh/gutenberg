import{r as b,j as l,f as _}from"./iframe-2TvY6Iig.js";import{B as x}from"./index-CFuMsoxH.js";import{m as U}from"./deprecated-36px-size-UsjcW-j9.js";import{u as C}from"./upload-5BjQbwEV.js";import"./preload-helper-Zf8nSx-t.js";import"./index-BjRskdOB.js";import"./index-BjXx3EE5.js";import"./index-Dt7LODwq.js";import"./index-1YdoA736.js";import"./cubic-bezier-CfzpfWNY.js";import"./T6C2RYFI-BXv3qAIm.js";import"./LVA2YJMS-Bhv8eVm0.js";import"./LMDWO4NN-CH0ROf0T.js";import"./floating-ui.utils.dom-BlKqeV2W.js";import"./dropdown-motion-BuMQU1CT.js";import"./index-Dnuq8uNu.js";import"./index-BIvJ8ozV.js";import"./component-BGXh8e92.js";import"./use-context-system-GBkKyJuM.js";import"./index-DUXT-3wK.js";import"./is-plain-object-BJ3z7EOF.js";import"./index-BtJmv7lM.js";import"./index-CK8hcbFu.js";import"./component-DATVQiJy.js";function s({accept:e,children:m,multiple:f=!1,onChange:h,onClick:g,render:p,...c}){const d=b.useRef(null),u=()=>{d.current?.click()};p||U({componentName:"FormFileUpload",__next40pxDefaultSize:c.__next40pxDefaultSize,size:c.size});const F=p?p({openFileDialog:u}):l(x,{onClick:u,...c,children:m}),y=e?.includes("audio/*")?`${e}, audio/mp3, audio/x-m4a, audio/x-m4b, audio/x-m4p, audio/x-wav, audio/webm`:e;return _("div",{className:"components-form-file-upload",children:[F,l("input",{type:"file",ref:d,multiple:f,style:{display:"none"},accept:y,onChange:h,onClick:g,"data-testid":"form-file-upload-input"})]})}try{s.displayName="FormFileUpload",s.__docgenInfo={description:`FormFileUpload allows users to select files from their local device.

\`\`\`jsx
import { FormFileUpload } from '@wordpress/components';

const MyFormFileUpload = () => (
  <FormFileUpload
    __next40pxDefaultSize
    accept="image/*"
    onChange={ ( event ) => console.log( event.currentTarget.files ) }
  >
    Upload
  </FormFileUpload>
);
\`\`\``,displayName:"FormFileUpload",props:{__next40pxDefaultSize:{defaultValue:{value:"false"},description:"Start opting into the larger default height that will become the default size in a future version.",name:"__next40pxDefaultSize",required:!1,type:{name:"boolean"}},accept:{defaultValue:null,description:"A string passed to the `input` element that tells the browser which\n[file types](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#Unique_file_type_specifiers)\ncan be uploaded by the user. e.g: `image/*,video/*`.",name:"accept",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"Children are passed as children of `Button`.",name:"children",required:!1,type:{name:"ReactNode"}},icon:{defaultValue:null,description:"The icon to render in the default button.\n\nSee the `Icon` component docs for more information.",name:"icon",required:!1,type:{name:"IconType"}},multiple:{defaultValue:{value:"false"},description:"Whether to allow multiple selection of files or not.",name:"multiple",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"Callback function passed directly to the `input` file element.\n\nSelect files will be available in `event.currentTarget.files`.",name:"onChange",required:!0,type:{name:"ChangeEventHandler<HTMLInputElement>"}},onClick:{defaultValue:null,description:`Callback function passed directly to the \`input\` file element.

This can be useful when you want to force a \`change\` event to fire when
the user chooses the same file again. To do this, set the target value to
an empty string in the \`onClick\` function.

\`\`\`jsx
<FormFileUpload
  __next40pxDefaultSize
  onClick={ ( event ) => ( event.target.value = '' ) }
  onChange={ onChange }
>
  Upload
</FormFileUpload>
\`\`\``,name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLInputElement>"}},render:{defaultValue:null,description:`Optional callback function used to render the UI.

If passed, the component does not render the default UI (a button) and
calls this function to render it. The function receives an object with
property \`openFileDialog\`, a function that, when called, opens the browser
native file upload modal window.`,name:"render",required:!1,type:{name:"(arg: { openFileDialog: () => void; }) => ReactNode"}}}}}catch{}const K={title:"Components/Selection & Input/File Upload/FormFileUpload",id:"components-formfileupload",component:s,argTypes:{icon:{control:!1},onChange:{action:"onChange",control:!1},onClick:{control:!1}},parameters:{controls:{expanded:!0},docs:{canvas:{sourceState:"shown"}}}},i=e=>l(s,{...e}),o=i.bind({});o.args={children:"Select file",__next40pxDefaultSize:!0};const n=i.bind({});n.args={...o.args,accept:"image/*",children:"Select image"};const r=i.bind({});r.args={...o.args,children:"Select files",multiple:!0};const a=i.bind({});a.args={...o.args,children:"Upload",icon:C};const t=i.bind({});t.args={...o.args,render:({openFileDialog:e})=>l("button",{onClick:e,children:"Custom Upload Button"})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`props => {
  return <FormFileUpload {...props} />;
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`props => {
  return <FormFileUpload {...props} />;
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`props => {
  return <FormFileUpload {...props} />;
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`props => {
  return <FormFileUpload {...props} />;
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`props => {
  return <FormFileUpload {...props} />;
}`,...t.parameters?.docs?.source},description:{story:"Render a custom trigger button by passing a render function to the `render` prop.\n\n```jsx\n( { openFileDialog } ) => <button onClick={ openFileDialog }>Custom Upload Button</button>\n```",...t.parameters?.docs?.description}}};try{t.displayName="WithCustomRender",t.__docgenInfo={description:"Render a custom trigger button by passing a render function to the `render` prop.\n\n```jsx\n( { openFileDialog } ) => <button onClick={ openFileDialog }>Custom Upload Button</button>\n```",displayName:"WithCustomRender",props:{}}}catch{}export{r as AllowMultipleFiles,o as Default,n as RestrictFileTypes,t as WithCustomRender,a as WithIcon,K as default};
