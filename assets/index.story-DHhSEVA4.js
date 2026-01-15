import{r as d,c as w,j as n,f as _}from"./iframe-2TvY6Iig.js";import{a as x}from"./default-i18n-SWt35ZM4.js";import{i as I}from"./index-FlM62Vh8.js";import{u as N}from"./index-BXrN46-o.js";import{u as v}from"./upload-5BjQbwEV.js";import{g as D}from"./data-transfer-CUZbJEa2.js";import{m as O}from"./media-D-5wM9zl.js";import"./preload-helper-Zf8nSx-t.js";import"./index-DDuNjadK.js";import"./index-Di3oHLN4.js";import"./index-BIvJ8ozV.js";function a({className:o,icon:T=v,label:m,onFilesDrop:s,onHTMLDrop:i,onDrop:p,isEligible:y=()=>!0,...S}){const[b,u]=d.useState(),[Z,l]=d.useState(),[z,r]=d.useState(),E=N({onDrop(e){if(!e.dataTransfer)return;const f=D(e.dataTransfer),g=e.dataTransfer.getData("text/html");g&&i?i(g):f.length&&s?s(f):p&&p(e)},onDragStart(e){u(!0),e.dataTransfer&&(e.dataTransfer.types.includes("text/html")?r(!!i):e.dataTransfer.types.includes("Files")||D(e.dataTransfer).length>0?r(!!s):r(!!p&&y(e.dataTransfer)))},onDragEnd(){l(!1),u(!1),r(void 0)},onDragEnter(){l(!0)},onDragLeave(){l(!1)}}),H=w("components-drop-zone",o,{"is-active":z,"is-dragging-over-document":b,"is-dragging-over-element":Z});return n("div",{...S,ref:E,className:H,children:n("div",{className:"components-drop-zone__content",children:_("div",{className:"components-drop-zone__content-inner",children:[n(I,{icon:T,className:"components-drop-zone__content-icon"}),n("span",{className:"components-drop-zone__content-text",children:m||x("Drop files to upload")})]})})})}try{a.displayName="DropZoneComponent",a.__docgenInfo={description:`\`DropZone\` is a component creating a drop zone area taking the full size of its parent element. It supports dropping files, HTML content or any other HTML drop event.

\`\`\`jsx
import { DropZone } from '@wordpress/components';
import { useState } from '@wordpress/element';

const MyDropZone = () => {
  const [ hasDropped, setHasDropped ] = useState( false );

  return (
    <div>
      { hasDropped ? 'Dropped!' : 'Drop something here' }
      <DropZone
        onFilesDrop={ () => setHasDropped( true ) }
        onHTMLDrop={ () => setHasDropped( true ) }
        onDrop={ () => setHasDropped( true ) }
      />
    </div>
  );
}
\`\`\``,displayName:"DropZoneComponent",props:{className:{defaultValue:null,description:"A CSS `class` to give to the wrapper element.",name:"className",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"An icon to be shown within the drop zone area.",name:"icon",required:!1,type:{name:"Element"}},label:{defaultValue:{value:"`__( 'Drop files to upload' )`"},description:"A string to be shown within the drop zone area.",name:"label",required:!1,type:{name:"string"}},onDrop:{defaultValue:null,description:"The function is generic drop handler called if the `onFilesDrop` or `onHTMLDrop` are not called.\nIt receives the drop `event` object as an argument.",name:"onDrop",required:!1,type:{name:"(event: DragEvent) => void"}},onFilesDrop:{defaultValue:null,description:"The function is called when dropping a file into the `DropZone`.\nIt receives an array of dropped files as an argument.",name:"onFilesDrop",required:!1,type:{name:"(files: File[]) => void"}},onHTMLDrop:{defaultValue:null,description:"The function is called when dropping HTML into the `DropZone`.\nIt receives the HTML being dropped as an argument.",name:"onHTMLDrop",required:!1,type:{name:"(html: string) => void"}},isEligible:{defaultValue:{value:"() => true"},description:`A function to determine if the drop zone is eligible to handle the drop
data transfer items.`,name:"isEligible",required:!1,type:{name:"(dataTransfer: DataTransfer) => boolean"}}}}}catch{}const{fn:c}=__STORYBOOK_MODULE_TEST__,h={upload:v,media:O},R={component:a,id:"components-dropzone",title:"Components/Selection & Input/File Upload/DropZone",argTypes:{icon:{control:{type:"select"},options:Object.keys(h),mapping:h}},args:{onFilesDrop:c(),onHTMLDrop:c(),onDrop:c()},parameters:{controls:{expanded:!0},docs:{canvas:{sourceState:"shown"}}}},L=o=>_("div",{style:{background:"lightgray",padding:32,position:"relative"},children:["Drop something here",n(a,{...o})]}),t=L.bind({});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`props => {
  return <div style={{
    background: 'lightgray',
    padding: 32,
    position: 'relative'
  }}>
            Drop something here
            <DropZone {...props} />
        </div>;
}`,...t.parameters?.docs?.source}}};export{t as Default,R as default};
