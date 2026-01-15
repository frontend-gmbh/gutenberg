import{r as c,j as o,f as e}from"./iframe-2TvY6Iig.js";import{B as n}from"./index-CFuMsoxH.js";import{S as l}from"./index-CniSQ6kN.js";import"./preload-helper-Zf8nSx-t.js";import"./index-BjRskdOB.js";import"./index-BjXx3EE5.js";import"./index-Dt7LODwq.js";import"./index-1YdoA736.js";import"./cubic-bezier-CfzpfWNY.js";import"./T6C2RYFI-BXv3qAIm.js";import"./LVA2YJMS-Bhv8eVm0.js";import"./LMDWO4NN-CH0ROf0T.js";import"./floating-ui.utils.dom-BlKqeV2W.js";import"./dropdown-motion-BuMQU1CT.js";import"./index-Dnuq8uNu.js";import"./index-BIvJ8ozV.js";import"./component-BGXh8e92.js";import"./use-context-system-GBkKyJuM.js";import"./index-DUXT-3wK.js";import"./is-plain-object-BJ3z7EOF.js";import"./index-BtJmv7lM.js";import"./index-CK8hcbFu.js";import"./component-DATVQiJy.js";const A={component:l,title:"Components/Utilities/ScrollLock",id:"components-scrolllock",parameters:{controls:{hideNoControlsWarning:!0},docs:{canvas:{sourceState:"shown"}}}};function s(t){return o("div",{style:{backgroundColor:"#fff",backgroundImage:"linear-gradient(transparent 50%, rgba(0, 0, 0, 0.05) 50%)",backgroundSize:"50px 50px",height:3e3,position:"relative"},...t})}function d(t){const{children:i}=t;return o("div",{style:{position:"sticky",top:0,padding:40,display:"flex",justifyContent:"center",textAlign:"center"},children:o("div",{children:i})})}const r=()=>{const[t,i]=c.useState(!1);return o("div",{style:{height:1e3},children:o("div",{style:{overflow:"auto",height:240,border:"1px solid lightgray"},children:e(s,{children:[e("div",{children:["Start scrolling down. Once you scroll to the end of this container with the stripes, the rest of the page will continue scrolling. ",o("code",{children:"ScrollLock"}),' prevents this "scroll bleed" from happening.']}),e(d,{children:[o(n,{variant:"primary",onClick:()=>i(!t),children:"Toggle Scroll Lock"}),t&&o(l,{}),e("p",{children:["Scroll locked:"," ",o("strong",{children:t?"Yes":"No"})]})]})]})})})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
  const [isScrollLocked, setScrollLocked] = useState(false);
  const toggleLock = () => setScrollLocked(!isScrollLocked);
  return <div style={{
    height: 1000
  }}>
            <div style={{
      overflow: 'auto',
      height: 240,
      border: '1px solid lightgray'
    }}>
                <StripedBackground>
                    <div>
                        Start scrolling down. Once you scroll to the end of this
                        container with the stripes, the rest of the page will
                        continue scrolling. <code>ScrollLock</code> prevents
                        this &quot;scroll bleed&quot; from happening.
                    </div>
                    <ToggleContainer>
                        <Button variant="primary" onClick={toggleLock}>
                            Toggle Scroll Lock
                        </Button>
                        {isScrollLocked && <ScrollLock />}
                        <p>
                            Scroll locked:{' '}
                            <strong>{isScrollLocked ? 'Yes' : 'No'}</strong>
                        </p>
                    </ToggleContainer>
                </StripedBackground>
            </div>
        </div>;
}`,...r.parameters?.docs?.source}}};export{r as Default,A as default};
