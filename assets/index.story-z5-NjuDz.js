import{r as g,f as p,j as t,F as M}from"./iframe-2TvY6Iig.js";import{B as a}from"./index-CFuMsoxH.js";import{I as q}from"./index-dvLnGrYd.js";import{M as u}from"./index-DjRIBaDh.js";import{f as x}from"./fullscreen-Cy3DR6UX.js";import"./preload-helper-Zf8nSx-t.js";import"./index-BjRskdOB.js";import"./index-BjXx3EE5.js";import"./index-Dt7LODwq.js";import"./index-1YdoA736.js";import"./cubic-bezier-CfzpfWNY.js";import"./T6C2RYFI-BXv3qAIm.js";import"./LVA2YJMS-Bhv8eVm0.js";import"./LMDWO4NN-CH0ROf0T.js";import"./floating-ui.utils.dom-BlKqeV2W.js";import"./dropdown-motion-BuMQU1CT.js";import"./index-Dnuq8uNu.js";import"./index-BIvJ8ozV.js";import"./component-BGXh8e92.js";import"./use-context-system-GBkKyJuM.js";import"./index-DUXT-3wK.js";import"./is-plain-object-BJ3z7EOF.js";import"./index-BtJmv7lM.js";import"./index-CK8hcbFu.js";import"./component-DATVQiJy.js";import"./input-base-DiRopTRM.js";import"./emotion-react.browser.esm-T2caqgd_.js";import"./component-l_ygUujJ.js";import"./context-DbMhvW6o.js";import"./use-responsive-value-bUbLlkWc.js";import"./space-CjrGwnR-.js";import"./component-CqSZVoza.js";import"./hook-56LQ9BfU.js";import"./component-DEBvv9-v.js";import"./hook-D7E4jAJ2.js";import"./names-BarMHYgS.js";import"./config-values-CkVNYk_w.js";import"./colors-values-BSq3yUT9.js";import"./index-CWa7Pedq.js";import"./hook-CHurV6sy.js";import"./values-CtPxXHrl.js";import"./base-control-styles-CoefPmVd.js";import"./font-Cck9kG94.js";import"./box-sizing-DDIeAART.js";import"./rtl-C-j_aU_R.js";import"./default-i18n-SWt35ZM4.js";import"./use-deprecated-props-BokcF_Hx.js";import"./use-gesture-react.esm-BHlZEJgV.js";import"./actions-elSjqZJg.js";import"./with-ignore-ime-events-BK39a-UH.js";import"./index-DckQhh-o.js";import"./deprecated-36px-size-UsjcW-j9.js";import"./index-g4CI5goq.js";import"./index-mcCfYwbk.js";import"./index-DDuNjadK.js";import"./index-CLatOAvg.js";import"./index-CZo2zBTA.js";import"./v4-CtRu48qb.js";import"./index-B18ctdHe.js";import"./component-Cu4YN_oY.js";import"./get-scroll-container-N9jTgEaT.js";import"./assert-is-defined-13wscoI_.js";import"./close-H02ILkEf.js";const Se={component:u,title:"Components/Overlays/Modal",id:"components-modal",argTypes:{children:{control:!1},onKeyDown:{control:!1},focusOnMount:{options:[!0,!1,"firstElement","firstContentElement"],control:{type:"select"}},role:{control:{type:"text"}},onRequestClose:{action:"onRequestClose"},isDismissible:{control:{type:"boolean"}}},parameters:{controls:{expanded:!0}}},r=({onRequestClose:s,...m})=>{const[c,n]=g.useState(!1),d=()=>n(!0),l=f=>{n(!1),s(f)};return p(M,{children:[t(a,{variant:"secondary",onClick:d,children:"Open Modal"}),c&&p(u,{onRequestClose:l,...m,children:[t("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),t(q,{__next40pxDefaultSize:!0,style:{marginBottom:"20px"}}),t(a,{variant:"secondary",onClick:l,children:"Close Modal"})]})]})},o=r.bind({});o.args={title:"Title"};o.parameters={docs:{source:{code:""}}};const i=r.bind({});i.args={size:"small"};i.storyName="With size: small";const e=r.bind({});e.args={...o.args,headerActions:t(a,{icon:x,label:"Fullscreen mode",size:"compact"}),children:t("div",{style:{height:"200px"}})};e.parameters={...o.parameters};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`({
  onRequestClose,
  ...args
}) => {
  const [isOpen, setOpen] = useState(false);
  const openModal = () => setOpen(true);
  const closeModal: ModalProps['onRequestClose'] = event => {
    setOpen(false);
    onRequestClose(event);
  };
  return <>
            <Button variant="secondary" onClick={openModal}>
                Open Modal
            </Button>
            {isOpen && <Modal onRequestClose={closeModal} {...args}>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et magna
                        aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                    </p>

                    <InputControl __next40pxDefaultSize style={{
        marginBottom: '20px'
      }} />

                    <Button variant="secondary" onClick={closeModal}>
                        Close Modal
                    </Button>
                </Modal>}
        </>;
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`({
  onRequestClose,
  ...args
}) => {
  const [isOpen, setOpen] = useState(false);
  const openModal = () => setOpen(true);
  const closeModal: ModalProps['onRequestClose'] = event => {
    setOpen(false);
    onRequestClose(event);
  };
  return <>
            <Button variant="secondary" onClick={openModal}>
                Open Modal
            </Button>
            {isOpen && <Modal onRequestClose={closeModal} {...args}>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et magna
                        aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                    </p>

                    <InputControl __next40pxDefaultSize style={{
        marginBottom: '20px'
      }} />

                    <Button variant="secondary" onClick={closeModal}>
                        Close Modal
                    </Button>
                </Modal>}
        </>;
}`,...i.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`({
  onRequestClose,
  ...args
}) => {
  const [isOpen, setOpen] = useState(false);
  const openModal = () => setOpen(true);
  const closeModal: ModalProps['onRequestClose'] = event => {
    setOpen(false);
    onRequestClose(event);
  };
  return <>
            <Button variant="secondary" onClick={openModal}>
                Open Modal
            </Button>
            {isOpen && <Modal onRequestClose={closeModal} {...args}>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et magna
                        aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                    </p>

                    <InputControl __next40pxDefaultSize style={{
        marginBottom: '20px'
      }} />

                    <Button variant="secondary" onClick={closeModal}>
                        Close Modal
                    </Button>
                </Modal>}
        </>;
}`,...e.parameters?.docs?.source},description:{story:"The `headerActions` prop can be used to add auxiliary actions to the header, for example a fullscreen mode toggle.",...e.parameters?.docs?.description}}};try{e.displayName="WithHeaderActions",e.__docgenInfo={description:"The `headerActions` prop can be used to add auxiliary actions to the header, for example a fullscreen mode toggle.",displayName:"WithHeaderActions",props:{}}}catch{}export{o as Default,e as WithHeaderActions,i as WithsizeSmall,Se as default};
