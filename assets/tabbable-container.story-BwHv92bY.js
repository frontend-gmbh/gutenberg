import{r as l,j as n,f as r,F as u}from"./iframe-2TvY6Iig.js";import{N as p}from"./container-BB_QBepN.js";import"./preload-helper-Zf8nSx-t.js";import"./index-mcCfYwbk.js";function m({eventToOffset:t,...i},s){return n(p,{ref:s,stopNavigationEvents:!0,onlyBrowserTabstops:!0,eventToOffset:o=>{const{code:d,shiftKey:c}=o;if(d==="Tab")return c?-1:1;if(t)return t(o)},...i})}const a=l.forwardRef(m);try{a.displayName="TabbableContainer",a.__docgenInfo={description:`A container for tabbable elements.

 \`\`\`jsx
 import {
   TabbableContainer,
   Button,
 } from '@wordpress/components';

 function onNavigate( index, target ) {
   console.log( \`Navigates to \${ index }\`, target );
 }

 const MyTabbableContainer = () => (
   <div>
     <span>Tabbable Container:</span>
     <TabbableContainer onNavigate={ onNavigate }>
       <Button variant="secondary" tabIndex="0">
         Section 1
       </Button>
       <Button variant="secondary" tabIndex="0">
         Section 2
       </Button>
       <Button variant="secondary" tabIndex="0">
         Section 3
       </Button>
       <Button variant="secondary" tabIndex="0">
         Section 4
       </Button>
     </TabbableContainer>
   </div>
 );
 \`\`\``,displayName:"TabbableContainer",props:{}}}catch{}try{tabbable.displayName="tabbable",tabbable.__docgenInfo={description:`A container for tabbable elements.

 \`\`\`jsx
 import {
   TabbableContainer,
   Button,
 } from '@wordpress/components';

 function onNavigate( index, target ) {
   console.log( \`Navigates to \${ index }\`, target );
 }

 const MyTabbableContainer = () => (
   <div>
     <span>Tabbable Container:</span>
     <TabbableContainer onNavigate={ onNavigate }>
       <Button variant="secondary" tabIndex="0">
         Section 1
       </Button>
       <Button variant="secondary" tabIndex="0">
         Section 2
       </Button>
       <Button variant="secondary" tabIndex="0">
         Section 3
       </Button>
       <Button variant="secondary" tabIndex="0">
         Section 4
       </Button>
     </TabbableContainer>
   </div>
 );
 \`\`\``,displayName:"tabbable",props:{}}}catch{}const{fn:b}=__STORYBOOK_MODULE_TEST__,T={title:"Components/Containers/TabbableContainer",id:"components-tabbablecontainer",component:a,argTypes:{children:{control:!1}},args:{onKeyDown:b(),onNavigate:b()},parameters:{controls:{expanded:!0},docs:{canvas:{sourceState:"shown"}}}},e=t=>r(u,{children:[n("button",{children:"Before tabbable container"}),r(a,{...t,style:{margin:"32px 0",padding:"16px",border:"1px solid black"},children:[n("button",{children:"Item 1"}),n("button",{children:"Item 2"}),n("button",{disabled:!0,children:"Item 3 (disabled)"}),n("button",{tabIndex:-1,children:"Item 4 (non-tabbable)"}),n("button",{tabIndex:0,children:"Item 5"}),n("button",{children:"Item 6"})]}),n("button",{children:"After tabbable container"})]});e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`args => {
  return <>
            <button>Before tabbable container</button>
            <TabbableContainer {...args} style={{
      margin: '32px 0',
      padding: '16px',
      border: '1px solid black'
    }}>
                <button>Item 1</button>
                <button>Item 2</button>
                <button disabled>Item 3 (disabled)</button>
                <button tabIndex={-1}>Item 4 (non-tabbable)</button>
                <button tabIndex={0}>Item 5</button>
                <button>Item 6</button>
            </TabbableContainer>
            <button>After tabbable container</button>
        </>;
}`,...e.parameters?.docs?.source}}};export{e as Default,T as default};
