import{r as a,f as v,j as t,F as b,c as C}from"./iframe-2TvY6Iig.js";import{f as x}from"./story-utils-Cdt-_fbM.js";import{D as V}from"./index-djnRrerp.js";import{B as T}from"./index-CFuMsoxH.js";import{M as S}from"./index-DjRIBaDh.js";import{V as f}from"./input-control-EFeYHR-t.js";import{V as _}from"./component-6CLxCT3h.js";import{H as O}from"./component-CIWI0tS-.js";import{d as I}from"./index-ChLxn6tX.js";const{expect:H,userEvent:L,waitFor:B,within:F}=__STORYBOOK_MODULE_TEST__,k={title:"Components/Selection & Input/Validated Form Controls/Overview",id:"components-validated-form-controls-overview",parameters:{controls:{disable:!0}}},d={decorators:x,render:function(){const[o,r]=a.useState(""),[e,n]=a.useState("");return v(b,{children:[t(f,{label:"Text",required:!0,value:o,help:"The word 'error' will trigger an error.",onChange:r,customValidity:o?.toLowerCase()==="error"?{type:"invalid",message:'The word "error" is not allowed.'}:void 0}),t(f,{label:"Text",required:!0,value:e,help:"The word 'error' will trigger an error.",onChange:n,customValidity:e?.toLowerCase()==="error"?{type:"invalid",message:'The word "error" is not allowed.'}:void 0})]})}},c={decorators:x,render:function(){const[o,r]=a.useState(""),e=o?.toLowerCase()==="error";return v(b,{children:[t("style",{children:`
                .my-control:has(:invalid[data-validity-visible]) .my-control__help:not(.is-visible) {
                    display: none;
                }
                `}),t(f,{className:"my-control",label:"Text",required:!0,value:o,help:t("span",{className:C("my-control__help",!e&&"is-visible"),children:'The word "error" is not allowed.'}),onChange:r,customValidity:e?{type:"invalid",message:'The word "error" is not allowed.'}:void 0})]})}},l={decorators:x,render:function({...o}){const[r,e]=a.useState(""),[n,i]=a.useState(void 0),g=a.useRef(),w=a.useCallback(I(y=>{y!==""&&(i({type:"validating",message:"Validating..."}),g.current=setTimeout(()=>{y?.toString().toLowerCase()==="error"?i({type:"invalid",message:'The word "error" is not allowed.'}):i({type:"valid",message:"Validated"})},1500))},500),[]);return t(f,{...o,value:r,onChange:y=>{e(y??""),i(void 0),clearTimeout(g.current),w(y)},customValidity:n})},args:{label:"Text",help:'The word "error" will trigger an error asynchronously.',required:!0}};({...l});const p={decorators:x,args:{label:"Text",required:!0,help:'The word "error" will trigger an error.'},render:function({...o}){const[r,e]=a.useState("error");return t(b,{children:t(f,{...o,value:r,onChange:e,customValidity:r==="error"?{type:"invalid",message:'The word "error" is not allowed.'}:void 0})})}},u={args:{label:"Text",required:!0,help:'The word "error" will trigger an error.'},decorators:[],render:function({...o}){const[r,e]=a.useState("error"),n=a.useRef(null);return v(_,{spacing:4,alignment:"left",children:[t(f,{ref:n,...o,value:r,onChange:e,customValidity:r==="error"?{type:"invalid",message:'The word "error" is not allowed.'}:void 0}),t(T,{__next40pxDefaultSize:!0,variant:"secondary",onClick:()=>n.current?.reportValidity(),children:"Report validity"})]})}},m={render:function({...o}){const[r,e]=a.useState(!1),[n,i]=a.useState("");return v(b,{children:[t(T,{variant:"secondary",__next40pxDefaultSize:!0,onClick:()=>e(!0),children:"Open in modal"}),r&&t(S,{title:"Dialog title",onRequestClose:()=>e(!1),shouldCloseOnClickOutside:!1,shouldCloseOnEsc:!1,isDismissible:!1,children:t("form",{onSubmit:g=>{g.preventDefault(),e(!1)},children:v(_,{spacing:2,children:[t(f,{...o,value:n,onChange:i,customValidity:n==="error"?{type:"invalid",message:'The word "error" is not allowed.'}:void 0}),v(O,{justify:"flex-end",spacing:2,children:[t(T,{variant:"tertiary",__next40pxDefaultSize:!0,onClick:()=>e(!1),children:"Cancel"}),t(T,{variant:"primary",__next40pxDefaultSize:!0,type:"submit",children:"Save"})]})]})})})]})},args:{label:"Text",required:!0,help:'The word "error" will trigger an error.'}},h={render:function({...o}){const[r,e]=a.useState(!1),n=a.useRef(null),[i,g]=a.useState("");return t(V,{popoverProps:{placement:"bottom-start"},open:r,onToggle:w=>{if(w)e(!0);else{const y=n.current?.reportValidity();e(!y)}},renderContent:()=>t("form",{ref:n,onSubmit:w=>{w.preventDefault(),e(!1)},children:t(f,{...o,value:i,onChange:g,customValidity:i==="error"?{type:"invalid",message:'The word "error" is not allowed.'}:void 0})}),renderToggle:()=>t(T,{__next40pxDefaultSize:!0,variant:"secondary",onClick:()=>e(!r),"aria-expanded":r,children:"Open in popover"})})},args:{label:"Text",help:'The word "error" will trigger an error.',required:!0,style:{width:"200px"}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  decorators: formDecorator,
  render: function Template() {
    const [text, setText] = useState<string | undefined>('');
    const [text2, setText2] = useState<string | undefined>('');
    return <>
                <ValidatedInputControl label="Text" required value={text} help="The word 'error' will trigger an error." onChange={setText} customValidity={text?.toLowerCase() === 'error' ? {
        type: 'invalid',
        message: 'The word "error" is not allowed.'
      } : undefined} />
                <ValidatedInputControl label="Text" required value={text2} help="The word 'error' will trigger an error." onChange={setText2} customValidity={text2?.toLowerCase() === 'error' ? {
        type: 'invalid',
        message: 'The word "error" is not allowed.'
      } : undefined} />
            </>;
  }
}`,...d.parameters?.docs?.source},description:{story:`When there are multiple controls with errors, attempting to submit will
move focus to the first control with an error.`,...d.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  decorators: formDecorator,
  render: function Template() {
    const [text, setText] = useState<string | undefined>('');
    const isInvalid = text?.toLowerCase() === 'error';
    return <>
                <style>
                    {\`
                .my-control:has(:invalid[data-validity-visible]) .my-control__help:not(.is-visible) {
                    display: none;
                }
                \`}
                </style>
                <ValidatedInputControl className="my-control" label="Text" required value={text} help={<span className={clsx('my-control__help', !isInvalid && 'is-visible')}>
                            The word &quot;error&quot; is not allowed.
                        </span>} onChange={setText} customValidity={isInvalid ? {
        type: 'invalid',
        message: 'The word "error" is not allowed.'
      } : undefined} />
            </>;
  }
}`,...c.parameters?.docs?.source},description:{story:`Help text can be configured to be hidden when a custom error is reported. Whether to opt for this approach
will depend on context.`,...c.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  decorators: formDecorator,
  render: function Template({
    ...args
  }) {
    const [text, setText] = useState('');
    const [customValidity, setCustomValidity] = useState<React.ComponentProps<typeof ValidatedInputControl>['customValidity']>(undefined);
    const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const debouncedValidate = useCallback(debounce(v => {
      if (v === '') {
        return;
      }
      setCustomValidity({
        type: 'validating',
        message: 'Validating...'
      });
      timeoutRef.current = setTimeout(() => {
        if (v?.toString().toLowerCase() === 'error') {
          setCustomValidity({
            type: 'invalid',
            message: 'The word "error" is not allowed.'
          });
        } else {
          setCustomValidity({
            type: 'valid',
            message: 'Validated'
          });
        }
      }, 1500);
    }, 500), []);
    return <ValidatedInputControl {...args} value={text} onChange={newValue => {
      setText(newValue ?? '');
      setCustomValidity(undefined);
      clearTimeout(timeoutRef.current);
      debouncedValidate(newValue);
    }} customValidity={customValidity} />;
  },
  args: {
    label: 'Text',
    help: 'The word "error" will trigger an error asynchronously.',
    required: true
  }
}`,...l.parameters?.docs?.source},description:{story:`To provide feedback from server-side validation, the \`customValidity\` prop can be used
to show additional status indicators while waiting for the server response,
and after the response is received.

These indicators are intended for asynchronous validation calls that may take more than 1 second to complete.
They may be unnecessary when responses are generally quick.`,...l.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  decorators: formDecorator,
  args: {
    label: 'Text',
    required: true,
    help: 'The word "error" will trigger an error.'
  },
  render: function Template({
    ...args
  }) {
    const [text, setText] = useState<string | undefined>('error');
    return <>
                <ValidatedInputControl {...args} value={text} onChange={setText} customValidity={text === 'error' ? {
        type: 'invalid',
        message: 'The word "error" is not allowed.'
      } : undefined} />
            </>;
  }
}`,...p.parameters?.docs?.source},description:{story:`Custom validity errors are effective immediately, even when they are not yet visible
to the user. For example, in this form where the initial value is already invalid,
the error message will be shown to the user once the submit button is clicked,
even if the input has never been interacted with.`,...p.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Text',
    required: true,
    help: 'The word "error" will trigger an error.'
  },
  decorators: [],
  render: function Template({
    ...args
  }) {
    const [text, setText] = useState<string | undefined>('error');
    const ref = useRef<HTMLInputElement>(null);
    return <VStack spacing={4} alignment="left">
                <ValidatedInputControl ref={ref} {...args} value={text} onChange={setText} customValidity={text === 'error' ? {
        type: 'invalid',
        message: 'The word "error" is not allowed.'
      } : undefined} />
                <Button __next40pxDefaultSize variant="secondary" onClick={() => ref.current?.reportValidity()}>
                    Report validity
                </Button>
            </VStack>;
  }
}`,...u.parameters?.docs?.source},description:{story:'While it is recommended to rely on the built-in behavior for showing errors by\nusing a `form` element and `type="submit"` button around validated fields,\nit is also possible to show errors at arbitrary times.\nThis can be done by calling the [`reportValidity()` method](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/reportValidity)\non a ref of the field itself, or the wrapping `form` element.',...u.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function Template({
    ...args
  }) {
    const [isOpen, setIsOpen] = useState(false);
    const [text, setText] = useState<string | undefined>('');
    return <>
                <Button variant="secondary" __next40pxDefaultSize onClick={() => setIsOpen(true)}>
                    Open in modal
                </Button>
                {isOpen && <Modal title="Dialog title" onRequestClose={() => setIsOpen(false)} shouldCloseOnClickOutside={false} shouldCloseOnEsc={false} isDismissible={false}>
                        <form onSubmit={event => {
          event.preventDefault();
          setIsOpen(false);
        }}>
                            <VStack spacing={2}>
                                <ValidatedInputControl {...args} value={text} onChange={setText} customValidity={text === 'error' ? {
              type: 'invalid',
              message: 'The word "error" is not allowed.'
            } : undefined} />

                                <HStack justify="flex-end" spacing={2}>
                                    <Button variant="tertiary" __next40pxDefaultSize onClick={() => setIsOpen(false)}>
                                        Cancel
                                    </Button>
                                    <Button variant="primary" __next40pxDefaultSize type="submit">
                                        Save
                                    </Button>
                                </HStack>
                            </VStack>
                        </form>
                    </Modal>}
            </>;
  },
  args: {
    label: 'Text',
    required: true,
    help: 'The word "error" will trigger an error.'
  }
}`,...m.parameters?.docs?.source},description:{story:'A `form` wrapper and `type="submit"` button can be used to force validation when\nthe user tries to commit their changes, while still allowing the modal to be closed by canceling.\nOptionally, the `shouldCloseOnClickOutside`, `isDismissible`, and `shouldCloseOnEsc` props\non `Modal` can be disabled to force users to more explicitly signal whether they are trying to\n"submit close" or "cancel close" the dialog, as well as preventing data loss on accidental closures.',...m.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: function Template({
    ...args
  }) {
    const [isOpen, setIsOpen] = useState(false);
    const formRef = useRef<HTMLFormElement>(null);
    const [text, setText] = useState<string | undefined>('');
    return <Dropdown popoverProps={{
      placement: 'bottom-start'
    }} open={isOpen} onToggle={willOpen => {
      if (!willOpen) {
        const isValid = formRef.current?.reportValidity();
        setIsOpen(!isValid);
      } else {
        setIsOpen(true);
      }
    }} renderContent={() => <form ref={formRef} onSubmit={event => {
      event.preventDefault();
      setIsOpen(false);
    }}>
                            <ValidatedInputControl {...args} value={text} onChange={setText} customValidity={text === 'error' ? {
        type: 'invalid',
        message: 'The word "error" is not allowed.'
      } : undefined} />
                        </form>} renderToggle={() => {
      return <Button __next40pxDefaultSize variant="secondary" onClick={() => setIsOpen(!isOpen)} aria-expanded={isOpen}>
                                Open in popover
                            </Button>;
    }} />;
  },
  args: {
    label: 'Text',
    help: 'The word "error" will trigger an error.',
    required: true,
    style: {
      width: '200px'
    }
  }
}`,...h.parameters?.docs?.source},description:{story:"[Form methods](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement#instance_methods) like\n`reportValidity()` can be used to validate the fields when a popover is about to be closed,\nand prevent the closing of the popover when invalid.",...h.parameters?.docs?.description}}};try{d.displayName="WithMultipleControls",d.__docgenInfo={description:`When there are multiple controls with errors, attempting to submit will
move focus to the first control with an error.`,displayName:"WithMultipleControls",props:{}}}catch{}try{c.displayName="WithHelpTextReplacement",c.__docgenInfo={description:`Help text can be configured to be hidden when a custom error is reported. Whether to opt for this approach
will depend on context.`,displayName:"WithHelpTextReplacement",props:{}}}catch{}try{l.displayName="AsyncValidation",l.__docgenInfo={description:`To provide feedback from server-side validation, the \`customValidity\` prop can be used
to show additional status indicators while waiting for the server response,
and after the response is received.

These indicators are intended for asynchronous validation calls that may take more than 1 second to complete.
They may be unnecessary when responses are generally quick.`,displayName:"AsyncValidation",props:{}}}catch{}try{p.displayName="CustomErrorsOnSubmit",p.__docgenInfo={description:`Custom validity errors are effective immediately, even when they are not yet visible
to the user. For example, in this form where the initial value is already invalid,
the error message will be shown to the user once the submit button is clicked,
even if the input has never been interacted with.`,displayName:"CustomErrorsOnSubmit",props:{}}}catch{}try{u.displayName="ShowingErrorsAtArbitraryTimes",u.__docgenInfo={description:'While it is recommended to rely on the built-in behavior for showing errors by\nusing a `form` element and `type="submit"` button around validated fields,\nit is also possible to show errors at arbitrary times.\nThis can be done by calling the [`reportValidity()` method](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/reportValidity)\non a ref of the field itself, or the wrapping `form` element.',displayName:"ShowingErrorsAtArbitraryTimes",props:{}}}catch{}try{m.displayName="ValidateInModal",m.__docgenInfo={description:'A `form` wrapper and `type="submit"` button can be used to force validation when\nthe user tries to commit their changes, while still allowing the modal to be closed by canceling.\nOptionally, the `shouldCloseOnClickOutside`, `isDismissible`, and `shouldCloseOnEsc` props\non `Modal` can be disabled to force users to more explicitly signal whether they are trying to\n"submit close" or "cancel close" the dialog, as well as preventing data loss on accidental closures.',displayName:"ValidateInModal",props:{}}}catch{}try{h.displayName="ValidateOnPopoverClose",h.__docgenInfo={description:"[Form methods](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement#instance_methods) like\n`reportValidity()` can be used to validate the fields when a popover is about to be closed,\nand prevent the closing of the popover when invalid.",displayName:"ValidateOnPopoverClose",props:{}}}catch{}const P=Object.freeze(Object.defineProperty({__proto__:null,AsyncValidation:l,CustomErrorsOnSubmit:p,ShowingErrorsAtArbitraryTimes:u,ValidateInModal:m,ValidateOnPopoverClose:h,WithHelpTextReplacement:c,WithMultipleControls:d,default:k},Symbol.toStringTag,{value:"Module"}));export{P as O};
