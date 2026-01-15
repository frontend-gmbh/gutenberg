import{r as b,f as C,j as i,F as B}from"./iframe-2TvY6Iig.js";import{u as M}from"./index-BjXx3EE5.js";import{i as P}from"./index-FlM62Vh8.js";import{t as X}from"./index-1Ef0X1FU.js";import{m as F}from"./more-DAulmHt7.js";import"./preload-helper-Zf8nSx-t.js";import"./index-ChLxn6tX.js";import"./index-BIvJ8ozV.js";const W="components-draggable__invisible-drag-image",H="components-draggable__clone",O=0,q="is-dragging-components-draggable";function v({children:g,onDragStart:f,onDragOver:c,onDragEnd:p,appendToOwnerDocument:y=!1,cloneClassname:h,elementId:x,transferData:k,__experimentalTransferDataType:m="text",__experimentalDragComponent:$}){const E=b.useRef(null),I=b.useRef(()=>{});function A(t){t.preventDefault(),I.current(),p&&p(t)}function V(t){const{ownerDocument:a}=t.target;t.dataTransfer.setData(m,JSON.stringify(k));const e=a.createElement("div");e.style.top="0",e.style.left="0";const o=a.createElement("div");typeof t.dataTransfer.setDragImage=="function"&&(o.classList.add(W),a.body.appendChild(o),t.dataTransfer.setDragImage(o,0,0)),e.classList.add(H),h&&e.classList.add(h);let d=0,l=0;if(E.current){d=t.clientX,l=t.clientY,e.style.transform=`translate( ${d}px, ${l}px )`;const n=a.createElement("div");n.innerHTML=E.current.innerHTML,e.appendChild(n),a.body.appendChild(e)}else{const n=a.getElementById(x),s=n.getBoundingClientRect(),D=n.parentNode,z=s.top,R=s.left;e.style.width=`${s.width+O*2}px`;const T=n.cloneNode(!0);T.id=`clone-${x}`,d=R-O,l=z-O,e.style.transform=`translate( ${d}px, ${l}px )`,Array.from(T.querySelectorAll("iframe")).forEach(j=>j.parentNode?.removeChild(j)),e.appendChild(T),y?a.body.appendChild(e):D?.appendChild(e)}let _=t.clientX,w=t.clientY;function Y(n){if(_===n.clientX&&w===n.clientY)return;const s=d+n.clientX-_,D=l+n.clientY-w;e.style.transform=`translate( ${s}px, ${D}px )`,_=n.clientX,w=n.clientY,d=s,l=D,c&&c(n)}const L=X(Y,16);a.addEventListener("dragover",L),a.body.classList.add(q),f&&f(t),I.current=()=>{e&&e.parentNode&&e.parentNode.removeChild(e),o&&o.parentNode&&o.parentNode.removeChild(o),a.body.classList.remove(q),a.removeEventListener("dragover",L)}}return b.useEffect(()=>()=>{I.current()},[]),C(B,{children:[g({onDraggableStart:V,onDraggableEnd:A}),$&&i("div",{className:"components-draggable-drag-component-root",style:{display:"none"},ref:E,children:$})]})}try{v.displayName="Draggable",v.__docgenInfo={description:`\`Draggable\` is a Component that provides a way to set up a cross-browser
(including IE) customizable drag image and the transfer data for the drag
event. It decouples the drag handle and the element to drag: use it by
wrapping the component that will become the drag handle and providing the DOM
ID of the element to drag.

Note that the drag handle needs to declare the \`draggable="true"\` property
and bind the \`Draggable\`s \`onDraggableStart\` and \`onDraggableEnd\` event
handlers to its own \`onDragStart\` and \`onDragEnd\` respectively. \`Draggable\`
takes care of the logic to setup the drag image and the transfer data, but is
not concerned with creating an actual DOM element that is draggable.

\`\`\`jsx
import { Draggable, Panel, PanelBody } from '@wordpress/components';
import { Icon, more } from '@wordpress/icons';

const MyDraggable = () => (
  <div id="draggable-panel">
    <Panel header="Draggable panel">
      <PanelBody>
        <Draggable elementId="draggable-panel" transferData={ {} }>
          { ( { onDraggableStart, onDraggableEnd } ) => (
            <div
              className="example-drag-handle"
              draggable
              onDragStart={ onDraggableStart }
              onDragEnd={ onDraggableEnd }
            >
              <Icon icon={ more } />
            </div>
          ) }
        </Draggable>
      </PanelBody>
    </Panel>
  </div>
);
\`\`\``,displayName:"Draggable",props:{children:{defaultValue:null,description:"Children.",name:"children",required:!0,type:{name:"(props: { onDraggableStart: (event: DragEvent<Element>) => void; onDraggableEnd: (event: DragEvent<Element>) => void; }) => Element"}},appendToOwnerDocument:{defaultValue:{value:"false"},description:"Whether to append the cloned element to the `ownerDocument` body.\nBy default, elements sourced by id are appended to the element's wrapper.",name:"appendToOwnerDocument",required:!1,type:{name:"boolean"}},cloneClassname:{defaultValue:null,description:"Classname for the cloned element.",name:"cloneClassname",required:!1,type:{name:"string"}},elementId:{defaultValue:null,description:"The HTML id of the element to clone on drag",name:"elementId",required:!0,type:{name:"string"}},onDragEnd:{defaultValue:null,description:"A function called when dragging ends. This callback receives the `event`\nobject from the `dragend` event as its first parameter.",name:"onDragEnd",required:!1,type:{name:"(event: DragEvent<Element>) => void"}},onDragOver:{defaultValue:null,description:"A function called when the element being dragged is dragged over a valid\ndrop target. This callback receives the `event` object from the\n`dragover` event as its first parameter.",name:"onDragOver",required:!1,type:{name:"(event: DragEvent<Element>) => void"}},onDragStart:{defaultValue:null,description:"A function called when dragging starts. This callback receives the\n`event` object from the `dragstart` event as its first parameter.",name:"onDragStart",required:!1,type:{name:"(event: DragEvent<Element>) => void"}},transferData:{defaultValue:null,description:"Arbitrary data object attached to the drag and drop event.",name:"transferData",required:!0,type:{name:"unknown"}},__experimentalTransferDataType:{defaultValue:{value:"'text'"},description:"The transfer data type to set.",name:"__experimentalTransferDataType",required:!1,type:{name:"string"}},__experimentalDragComponent:{defaultValue:null,description:"Component to show when dragging.",name:"__experimentalDragComponent",required:!1,type:{name:"ReactNode"}}}}}catch{}const{fn:S}=__STORYBOOK_MODULE_TEST__,te={component:v,title:"Components/Utilities/Draggable",id:"components-draggable",argTypes:{elementId:{control:!1},__experimentalDragComponent:{control:!1}},args:{onDragStart:S(),onDragEnd:S(),onDragOver:S()},parameters:{controls:{expanded:!0},docs:{source:{code:""}}}},N=g=>{const[f,c]=b.useState(!1),p=M(N);return C("div",{children:[C("p",{style:{padding:"1em",position:"relative",zIndex:1e3,backgroundColor:"whitesmoke"},children:["Is Dragging? ",f?"Yes":"No!"]}),i("div",{style:{zIndex:100,position:"relative"},children:i("div",{id:`draggable-example-box-${p}`,style:{display:"inline-flex",position:"relative"},children:i(v,{...g,elementId:`draggable-example-box-${p}`,children:({onDraggableStart:y,onDraggableEnd:h})=>i("div",{onDragStart:m=>{c(!0),y(m)},onDragEnd:m=>{c(!1),h(m)},draggable:!0,style:{alignItems:"center",display:"flex",justifyContent:"center",width:100,height:100,background:"#ddd"},children:i(P,{icon:F})})})})})]})},u=N.bind({});u.args={};const r=N.bind({});r.args={appendToOwnerDocument:!0};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`args => {
  const [isDragging, setDragging] = useState(false);
  const instanceId = useInstanceId(DefaultTemplate);

  // Allow for the use of ID in the example.
  return <div>
            <p style={{
      padding: '1em',
      position: 'relative',
      zIndex: 1000,
      backgroundColor: 'whitesmoke'
    }}>
                Is Dragging? {isDragging ? 'Yes' : 'No!'}
            </p>
            <div style={{
      zIndex: 100,
      position: 'relative'
    }}>
                <div id={\`draggable-example-box-\${instanceId}\`} style={{
        display: 'inline-flex',
        position: 'relative'
      }}>
                    <Draggable {...args} elementId={\`draggable-example-box-\${instanceId}\`}>
                        {({
            onDraggableStart,
            onDraggableEnd
          }) => {
            const handleOnDragStart = (event: DragEvent) => {
              setDragging(true);
              onDraggableStart(event);
            };
            const handleOnDragEnd = (event: DragEvent) => {
              setDragging(false);
              onDraggableEnd(event);
            };
            return <div onDragStart={handleOnDragStart} onDragEnd={handleOnDragEnd} draggable style={{
              alignItems: 'center',
              display: 'flex',
              justifyContent: 'center',
              width: 100,
              height: 100,
              background: '#ddd'
            }}>
                                    <Icon icon={more} />
                                </div>;
          }}
                    </Draggable>
                </div>
            </div>
        </div>;
}`,...u.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => {
  const [isDragging, setDragging] = useState(false);
  const instanceId = useInstanceId(DefaultTemplate);

  // Allow for the use of ID in the example.
  return <div>
            <p style={{
      padding: '1em',
      position: 'relative',
      zIndex: 1000,
      backgroundColor: 'whitesmoke'
    }}>
                Is Dragging? {isDragging ? 'Yes' : 'No!'}
            </p>
            <div style={{
      zIndex: 100,
      position: 'relative'
    }}>
                <div id={\`draggable-example-box-\${instanceId}\`} style={{
        display: 'inline-flex',
        position: 'relative'
      }}>
                    <Draggable {...args} elementId={\`draggable-example-box-\${instanceId}\`}>
                        {({
            onDraggableStart,
            onDraggableEnd
          }) => {
            const handleOnDragStart = (event: DragEvent) => {
              setDragging(true);
              onDraggableStart(event);
            };
            const handleOnDragEnd = (event: DragEvent) => {
              setDragging(false);
              onDraggableEnd(event);
            };
            return <div onDragStart={handleOnDragStart} onDragEnd={handleOnDragEnd} draggable style={{
              alignItems: 'center',
              display: 'flex',
              justifyContent: 'center',
              width: 100,
              height: 100,
              background: '#ddd'
            }}>
                                    <Icon icon={more} />
                                </div>;
          }}
                    </Draggable>
                </div>
            </div>
        </div>;
}`,...r.parameters?.docs?.source},description:{story:"`appendToOwnerDocument` is used to append the element being dragged to the body of the owner document.\n\nThis is useful when the element being dragged should not receive styles from its parent.\nFor example, when the element's parent sets a `z-index` value that would cause the dragged\nelement to be rendered behind other elements.",...r.parameters?.docs?.description}}};try{r.displayName="AppendElementToOwnerDocument",r.__docgenInfo={description:"`appendToOwnerDocument` is used to append the element being dragged to the body of the owner document.\n\nThis is useful when the element being dragged should not receive styles from its parent.\nFor example, when the element's parent sets a `z-index` value that would cause the dragged\nelement to be rendered behind other elements.",displayName:"AppendElementToOwnerDocument",props:{}}}catch{}export{r as AppendElementToOwnerDocument,u as Default,te as default};
