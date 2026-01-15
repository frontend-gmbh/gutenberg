import{r as n,j as t,f as h,F as I}from"./iframe-2TvY6Iig.js";import{B as C}from"./index-CFuMsoxH.js";import{a as x}from"./default-i18n-SWt35ZM4.js";import{M as q}from"./index-DjRIBaDh.js";import{c as R,u as j,a as N}from"./use-context-system-GBkKyJuM.js";import{T as L}from"./component-DEBvv9-v.js";import{F as W}from"./component-l_ygUujJ.js";import{V as M}from"./component-6CLxCT3h.js";import"./preload-helper-Zf8nSx-t.js";import"./index-BjRskdOB.js";import"./index-BjXx3EE5.js";import"./index-Dt7LODwq.js";import"./index-1YdoA736.js";import"./cubic-bezier-CfzpfWNY.js";import"./T6C2RYFI-BXv3qAIm.js";import"./LVA2YJMS-Bhv8eVm0.js";import"./LMDWO4NN-CH0ROf0T.js";import"./floating-ui.utils.dom-BlKqeV2W.js";import"./dropdown-motion-BuMQU1CT.js";import"./index-Dnuq8uNu.js";import"./index-BIvJ8ozV.js";import"./component-BGXh8e92.js";import"./component-DATVQiJy.js";import"./index-g4CI5goq.js";import"./index-mcCfYwbk.js";import"./index-DDuNjadK.js";import"./index-CLatOAvg.js";import"./index-CZo2zBTA.js";import"./v4-CtRu48qb.js";import"./with-ignore-ime-events-BK39a-UH.js";import"./index-B18ctdHe.js";import"./config-values-CkVNYk_w.js";import"./colors-values-BSq3yUT9.js";import"./component-Cu4YN_oY.js";import"./emotion-react.browser.esm-T2caqgd_.js";import"./space-CjrGwnR-.js";import"./rtl-C-j_aU_R.js";import"./get-scroll-container-N9jTgEaT.js";import"./assert-is-defined-13wscoI_.js";import"./close-H02ILkEf.js";import"./index-DUXT-3wK.js";import"./is-plain-object-BJ3z7EOF.js";import"./index-BtJmv7lM.js";import"./index-CK8hcbFu.js";import"./hook-D7E4jAJ2.js";import"./names-BarMHYgS.js";import"./index-CWa7Pedq.js";import"./hook-CHurV6sy.js";import"./values-CtPxXHrl.js";import"./context-DbMhvW6o.js";import"./use-responsive-value-bUbLlkWc.js";import"./hook-D_MMjSqd.js";import"./get-valid-children-BTY2hlyh.js";import"./component-CqSZVoza.js";import"./hook-56LQ9BfU.js";const Y={name:"7g5ii0",styles:"&&{z-index:1000001;}"},F=(m,d)=>{const{isOpen:i,onConfirm:s,onCancel:a,children:g,confirmButtonText:y,cancelButtonText:r,isBusy:u,...S}=j(m,"ConfirmDialog"),v=N()(Y),b=n.useRef(),O=n.useRef(),[T,f]=n.useState(),[w,E]=n.useState();n.useEffect(()=>{const e=typeof i<"u";f(e?i:!0),E(!e)},[i]);const l=n.useCallback(e=>k=>{e?.(k),w&&f(!1)},[w,f]),A=n.useCallback(e=>{!(e.target===b.current||e.target===O.current)&&e.key==="Enter"&&l(s)(e)},[l,s]),D=r??x("Cancel"),V=y??x("OK");return t(I,{children:T&&t(q,{onRequestClose:l(a),onKeyDown:A,closeButtonLabel:D,isDismissible:!0,ref:d,overlayClassName:v,__experimentalHideHeader:!0,...S,children:h(M,{spacing:8,children:[t(L,{children:g}),h(W,{direction:"row",justify:"flex-end",children:[t(C,{__next40pxDefaultSize:!0,ref:b,variant:"tertiary",onClick:l(a),accessibleWhenDisabled:!0,disabled:u,children:D}),t(C,{__next40pxDefaultSize:!0,ref:O,variant:"primary",onClick:l(s),accessibleWhenDisabled:!0,disabled:u,isBusy:u,children:V})]})]})})})},p=R(F,"ConfirmDialog");try{p.displayName="ConfirmDialog",p.__docgenInfo={description:`\`ConfirmDialog\` is built of top of [\`Modal\`](/packages/components/src/modal/README.md)
and displays a confirmation dialog, with _confirm_ and _cancel_ buttons.
The dialog is confirmed by clicking the _confirm_ button or by pressing the \`Enter\` key.
It is cancelled (closed) by clicking the _cancel_ button, by pressing the \`ESC\` key, or by
clicking outside the dialog focus (i.e, the overlay).

\`ConfirmDialog\` has two main implicit modes: controlled and uncontrolled.

UnControlled:

Allows the component to be used standalone, just by declaring it as part of another React's component render method:
-   It will be automatically open (displayed) upon mounting;
-   It will be automatically closed when clicking the _cancel_ button, by pressing the \`ESC\` key, or by clicking outside the dialog focus (i.e, the overlay);
-   \`onCancel\` is not mandatory but can be passed. Even if passed, the dialog will still be able to close itself.

Activating this mode is as simple as omitting the \`isOpen\` prop. The only mandatory prop, in this case, is the \`onConfirm\` callback. The message is passed as the \`children\`. You can pass any JSX you'd like, which allows to further format the message or include sub-component if you'd like:

\`\`\`jsx
import { __experimentalConfirmDialog as ConfirmDialog } from '@wordpress/components';

function Example() {
	return (
		<ConfirmDialog onConfirm={ () => console.debug( ' Confirmed! ' ) }>
			Are you sure? <strong>This action cannot be undone!</strong>
		</ConfirmDialog>
	);
}
\`\`\`


Controlled mode:
 Let the parent component control when the dialog is open/closed. It's activated when a
boolean value is passed to \`isOpen\`:
-   It will not be automatically closed. You need to let it know when to open/close by updating the value of the \`isOpen\` prop;
-   Both \`onConfirm\` and the \`onCancel\` callbacks are mandatory props in this mode;
-   You'll want to update the state that controls \`isOpen\` by updating it from the \`onCancel\` and \`onConfirm\` callbacks.

\`\`\`jsx
import { __experimentalConfirmDialog as ConfirmDialog } from '@wordpress/components';
import { useState } from '@wordpress/element';

function Example() {
	const [ isOpen, setIsOpen ] = useState( true );

	const handleConfirm = () => {
		console.debug( 'Confirmed!' );
		setIsOpen( false );
	};

	const handleCancel = () => {
		console.debug( 'Cancelled!' );
		setIsOpen( false );
	};

	return (
		<ConfirmDialog
			isOpen={ isOpen }
			onConfirm={ handleConfirm }
			onCancel={ handleCancel }
		>
			Are you sure? <strong>This action cannot be undone!</strong>
		</ConfirmDialog>
	);
}
\`\`\``,displayName:"ConfirmDialog",props:{children:{defaultValue:null,description:"The actual message for the dialog. It's passed as children and any valid `ReactNode` is accepted.",name:"children",required:!0,type:{name:"ReactNode"}},onConfirm:{defaultValue:null,description:"The callback that's called when the user confirms.\nA confirmation can happen when the `OK` button is clicked or when `Enter` is pressed.",name:"onConfirm",required:!0,type:{name:"(event: DialogInputEvent) => void"}},confirmButtonText:{defaultValue:null,description:"The optional custom text to display as the confirmation button's label.",name:"confirmButtonText",required:!1,type:{name:"string"}},cancelButtonText:{defaultValue:null,description:"The optional custom text to display as the cancellation button's label.",name:"cancelButtonText",required:!1,type:{name:"string"}},onCancel:{defaultValue:null,description:"The callback that's called when the user cancels. A cancellation can happen\nwhen the `Cancel` button is clicked, when the `ESC` key is pressed, or when\na click outside of the dialog focus is detected (i.e. in the overlay).\n\nIt's not required if `isOpen` is not set (uncontrolled mode), as the component\nwill take care of closing itself, but you can still pass a callback if something\nmust be done upon cancelling (the component will still close itself in this case).\n\nIf `isOpen` is set (controlled mode), then it's required, and you need to set\nthe state that defines `isOpen` to `false` as part of this callback if you want the\ndialog to close when the user cancels.",name:"onCancel",required:!1,type:{name:"(event: DialogInputEvent) => void"}},isOpen:{defaultValue:null,description:`Defines if the dialog is open (displayed) or closed (not rendered/displayed).
It also implicitly toggles the controlled mode if set or the uncontrolled mode if it's not set.`,name:"isOpen",required:!1,type:{name:"boolean"}},isBusy:{defaultValue:null,description:"Indicates activity while an action is being performed.\nWhen `true`, the confirm button will show a busy state.\nBoth buttons will be disabled.",name:"isBusy",required:!1,type:{name:"boolean"}}}}}catch{}const{fn:_}=__STORYBOOK_MODULE_TEST__,Ue={component:p,title:"Components/Overlays/ConfirmDialog",id:"components-confirmdialog",argTypes:{isOpen:{control:!1}},tags:["status-experimental"],args:{onCancel:_(),onConfirm:_()},parameters:{controls:{expanded:!0},docs:{canvas:{sourceState:"shown"}}}},B=({onConfirm:m,onCancel:d,...i})=>{const[s,a]=n.useState(!1);return h(I,{children:[t(C,{variant:"primary",onClick:()=>a(!0),children:"Open ConfirmDialog"}),t(p,{...i,isOpen:s,onConfirm:r=>{m(r),a(!1)},onCancel:r=>{d?.(r),a(!1)},children:i.children})]})},o=B.bind({}),H=`() => {
  const [ isOpen, setIsOpen ] = useState( false );
  const [ confirmVal, setConfirmVal ] = useState('');

  const handleConfirm = () => {
    setConfirmVal( 'Confirmed!' );
    setIsOpen( false );
  };

  const handleCancel = () => {
    setConfirmVal( 'Cancelled' );
    setIsOpen( false );
  };

  return (
    <>
      <ConfirmDialog
        isOpen={ isOpen }
        onConfirm={ handleConfirm }
        onCancel={ handleCancel }
      >
        Would you like to privately publish the post now?
      </ConfirmDialog>

      <Heading level={ 1 }>{ confirmVal }</Heading>

      <Button variant="primary" onClick={ () => setIsOpen( true ) }>
        Open ConfirmDialog
      </Button>
    </>
  );
};`;o.args={children:"Would you like to privately publish the post now?"};o.parameters={docs:{source:{code:H,language:"jsx",type:"auto"}}};const c=B.bind({});c.args={...o.args,cancelButtonText:"No thanks",confirmButtonText:"Yes please!"};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`({
  onConfirm,
  onCancel,
  ...args
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleConfirm: typeof onConfirm = confirmArgs => {
    onConfirm(confirmArgs);
    setIsOpen(false);
  };
  const handleCancel: typeof onCancel = cancelArgs => {
    onCancel?.(cancelArgs);
    setIsOpen(false);
  };
  return <>
            <Button variant="primary" onClick={() => setIsOpen(true)}>
                Open ConfirmDialog
            </Button>

            <ConfirmDialog {...args} isOpen={isOpen} onConfirm={handleConfirm} onCancel={handleCancel}>
                {args.children}
            </ConfirmDialog>
        </>;
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`({
  onConfirm,
  onCancel,
  ...args
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleConfirm: typeof onConfirm = confirmArgs => {
    onConfirm(confirmArgs);
    setIsOpen(false);
  };
  const handleCancel: typeof onCancel = cancelArgs => {
    onCancel?.(cancelArgs);
    setIsOpen(false);
  };
  return <>
            <Button variant="primary" onClick={() => setIsOpen(true)}>
                Open ConfirmDialog
            </Button>

            <ConfirmDialog {...args} isOpen={isOpen} onConfirm={handleConfirm} onCancel={handleCancel}>
                {args.children}
            </ConfirmDialog>
        </>;
}`,...c.parameters?.docs?.source}}};export{o as Default,c as WithCustomButtonLabels,Ue as default};
