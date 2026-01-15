import{r as o,a as U,j as n,c as Q,f as j,F as ae}from"./iframe-2TvY6Iig.js";/* empty css                      */import{a as De}from"./default-i18n-SWt35ZM4.js";import{u as we,f as K}from"./field.module-DT0CC1BY.js";import{V as Re}from"./visually-hidden-BHM6OlwJ.js";import{u as be}from"./useIsoLayoutEffect-DR4OyDQs.js";import{u as Z,L as Ce,a as ye,D as se,g as he,b as xe,f as ee,c as le,F as Me}from"./FieldControl-BgWL83th.js";import{u as de}from"./useBaseUiId-DCn1zzPy.js";import{a as Le,f as Te,m as ne,E as Pe,u as te}from"./useRenderElement-D_ShKst7.js";import{r as Ve}from"./resets.module-DQfHskxl.js";import{S as Se}from"./stack-zfwi6YzL.js";import{u as W}from"./useStableCallback-CAM0Xvk3.js";import"./preload-helper-Zf8nSx-t.js";import"./useRender-CZYnIQEd.js";import"./floating-ui.utils.dom-BlKqeV2W.js";const Ee=[];function Ne(t){o.useEffect(t,Ee)}function ke(t){return"composedPath"in t?t.composedPath()[0]:t.target}const O=0;class ce{static create(){return new ce}currentId=O;start(e,r){this.clear(),this.currentId=setTimeout(()=>{this.currentId=O,r()},e)}isStarted(){return this.currentId!==O}clear=()=>{this.currentId!==O&&(clearTimeout(this.currentId),this.currentId=O)};disposeEffect=()=>this.clear}function Ae(){const t=Le(ce.create).current;return Ne(t.disposeEffect),t}const Ue=o.createContext({disabled:!1}),je=o.createContext(void 0);function He(t=!0){const e=o.useContext(je);if(e===void 0&&!t)throw new Error(Te(3));return e}const ge=function(e){const r=de(),[d,m]=o.useState(e.initialControlId===void 0?r:e.initialControlId),[I,v]=o.useState(void 0),[c,F]=o.useState([]),{messageIds:a}=Z(),p=o.useCallback(f=>ne({"aria-describedby":a.concat(c).join(" ")||void 0},f),[a,c]),i=o.useMemo(()=>({controlId:d,setControlId:m,labelId:I,setLabelId:v,messageIds:c,setMessageIds:F,getDescriptionProps:p}),[d,m,I,v,c,F,p]);return U.jsx(Ce.Provider,{value:i,children:e.children})},$=Object.keys(se);function Oe(t){if(!t||t.valid||!t.valueMissing)return!1;let e=!1;for(const r of $)r!=="valid"&&(r==="valueMissing"&&(e=t[r]),t[r]&&(e=!1));return e}function We(t){const{formRef:e,clearErrors:r}=ye(),{setValidityData:d,validate:m,validityData:I,validationDebounceTime:v,invalid:c,markedDirtyRef:F,state:a,name:p,shouldValidateOnChange:i}=t,{controlId:f,getDescriptionProps:M}=Z(),h=Ae(),C=o.useRef(null),w=W(async(_,L=!1)=>{const s=C.current;if(!s)return;if(L){if(a.valid!==!1)return;const y=s.validity;if(!y.valueMissing){const g={value:_,state:{...se,valid:!0},error:"",errors:[],initialValue:I.initialValue};if(s.setCustomValidity(""),f){const l=e.current.fields.get(f);l&&e.current.fields.set(f,{...l,...he(g,!1)})}d(g);return}const u=$.reduce((g,l)=>(g[l]=y[l],g),{});if(!u.valid&&!Oe(u))return}function oe(y){const u=$.reduce((l,A)=>(l[A]=y.validity[A],l),{});let g=!1;for(const l of $)if(l!=="valid"){if(l==="valueMissing"&&u[l])g=!0;else if(u[l])return u}return g&&!F.current&&(u.valid=!0,u.valueMissing=!1),u}h.clear();let b=null,D=[];const R=oe(s);let x;const H=i();if(s.validationMessage&&!H)x=s.validationMessage,D=[s.validationMessage];else{const y=Array.from(e.current.fields.values()).reduce((g,l)=>(l.name&&(g[l.name]=l.getValue()),g),{}),u=m(_,y);typeof u=="object"&&u!==null&&"then"in u?b=await u:b=u,b!==null?(R.valid=!1,R.customError=!0,Array.isArray(b)?(D=b,s.setCustomValidity(b.join(`
`))):b&&(D=[b],s.setCustomValidity(b))):H&&(s.setCustomValidity(""),R.customError=!1,s.validationMessage?(x=s.validationMessage,D=[s.validationMessage]):s.validity.valid&&!R.valid&&(R.valid=!0))}const T={value:_,state:R,error:x??(Array.isArray(b)?b[0]:b??""),errors:D,initialValue:I.initialValue};if(f){const y=e.current.fields.get(f);y&&e.current.fields.set(f,{...y,...he(T,c)})}d(T)}),N=o.useCallback((_={})=>ne(M,a.valid===!1?{"aria-invalid":!0}:Pe,_),[M,a.valid]),k=o.useCallback((_={})=>ne({onChange(L){if(L.nativeEvent.defaultPrevented)return;if(r(p),!i()){w(L.currentTarget.value,!0);return}if(c)return;const s=L.currentTarget;if(s.value===""){w(s.value);return}h.clear(),v?h.start(v,()=>{w(s.value)}):w(s.value)}},N(_)),[N,r,p,h,w,c,v,i]);return o.useMemo(()=>({getValidationProps:N,getInputValidationProps:k,inputRef:C,commit:w}),[N,k,w])}const Ye=o.forwardRef(function(e,r){const{errors:d,validationMode:m,submitAttemptedRef:I}=ye(),{render:v,className:c,validate:F,validationDebounceTime:a=0,validationMode:p=m,name:i,disabled:f=!1,invalid:M,dirty:h,touched:C,...w}=e,{disabled:N}=we(),k=W(F||(()=>null)),_=N||f,[L,s]=o.useState(!1),[oe,b]=o.useState(!1),[D,R]=o.useState(!1),[x,H]=o.useState(!1),T=h??oe,y=C??L,u=o.useRef(!1),g=W(J=>{h===void 0&&(J&&(u.current=!0),b(J))}),l=W(J=>{C===void 0&&s(J)}),A=W(()=>p==="onChange"||p==="onSubmit"&&I.current),z=!!(M||i&&{}.hasOwnProperty.call(d,i)&&d[i]!==void 0),[B,pe]=o.useState({state:se,error:"",errors:[],value:null,initialValue:null}),fe=!z&&B.state.valid,G=o.useMemo(()=>({disabled:_,touched:y,dirty:T,valid:fe,filled:D,focused:x}),[_,y,T,fe,D,x]),me=We({setValidityData:pe,validate:k,validityData:B,validationDebounceTime:a,invalid:z,markedDirtyRef:u,state:G,name:i,shouldValidateOnChange:A}),Fe=o.useMemo(()=>({invalid:z,name:i,validityData:B,setValidityData:pe,disabled:_,touched:y,setTouched:l,dirty:T,setDirty:g,filled:D,setFilled:R,focused:x,setFocused:H,validate:k,validationMode:p,validationDebounceTime:a,shouldValidateOnChange:A,state:G,markedDirtyRef:u,validation:me}),[z,i,B,_,y,l,T,g,D,R,x,H,k,p,a,A,G,me]),_e=te("div",e,{ref:r,state:G,props:w,stateAttributesMapping:ee});return U.jsx(xe.Provider,{value:Fe,children:_e})}),qe=o.forwardRef(function(e,r){return U.jsx(ge,{children:U.jsx(Ye,{...e,ref:r})})}),ze=o.forwardRef(function(e,r){const{render:d,className:m,id:I,...v}=e,c=le(!1),{controlId:F,setLabelId:a,labelId:p}=Z(),i=de(I),f=o.useRef(null);return be(()=>(i&&a(i),()=>{a(void 0)}),[i,a]),te("label",e,{ref:[r,f],state:c.state,props:[{id:p,htmlFor:F??void 0,onMouseDown(h){ke(h.nativeEvent)?.closest("button,input,select,textarea")||!h.defaultPrevented&&h.detail>1&&h.preventDefault()}},v],stateAttributesMapping:ee})}),ve=o.forwardRef(function(e,r){const{render:d,id:m,className:I,...v}=e,c=de(m),F=le(!1),{setMessageIds:a}=Z();return be(()=>{if(c)return a(i=>i.concat(c)),()=>{a(i=>i.filter(f=>f!==c))}},[c,a]),te("p",e,{ref:r,state:F.state,props:[{id:c},v],stateAttributesMapping:ee})}),Be=o.forwardRef(function(e,r){const{render:d,className:m,disabled:I=!1,...v}=e,{state:c,disabled:F}=le(!1),a=F||I,p=He(),i=p?.parent.id,M=p?.allValues!==void 0?i:void 0,h=o.useMemo(()=>({disabled:a}),[a]),C=te("div",e,{ref:r,state:c,props:v,stateAttributesMapping:ee});return U.jsx(ge,{initialControlId:M,children:U.jsx(Ue.Provider,{value:h,children:C})})}),Ge=t=>n(Se,{...t,direction:"column",gap:"xs"}),Y=o.forwardRef(function({className:e,render:r=Ge,...d},m){return n(qe,{ref:m,className:Q(Ve["box-sizing"],e),render:r,...d})});try{Y.displayName="Root",Y.__docgenInfo={description:`A low-level component that associates an accessible label and description
with a single form control element.

To label a group of multiple form control elements, use the \`Fieldset\` component instead.

Simply wrapping a control with this component does not guarantee
accessible labeling. See examples for how to associate the label in different cases.`,displayName:"Root",props:{}}}catch{}const ie=o.forwardRef(function(e,r){return n(Be,{ref:r,...e})});try{ie.displayName="Item",ie.__docgenInfo={description:"",displayName:"Item",props:{disabled:{defaultValue:{value:"false"},description:"Whether the wrapped control should ignore user interaction.\nThe `disabled` prop on `<Field.Root>` takes precedence over this.",name:"disabled",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"CSS class name to apply to the component.",name:"className",required:!1,type:{name:"string"}},render:{defaultValue:null,description:`Replaces the component's default HTML element using a given React
element, or a function that returns a React element.`,name:"render",required:!1,type:{name:"ComponentRenderFn<HTMLAttributesWithRef<any>> | ReactElement<Record<string, unknown>, string | JSXElementConstructor<any>>"}}}}}catch{}const q=o.forwardRef(function({className:e,variant:r,...d},m){return n(ze,{ref:m,className:Q(K.label,r&&K[`is-${r}`],e),...d})}),re=o.forwardRef(function({className:e,...r},d){return n(ve,{ref:d,className:Q(K.description,e),...r})}),X=o.forwardRef(function({className:e,...r},d){return j(ae,{children:[n(ve,{render:n(Re,{}),children:De("More details follow the field.")}),n("div",{ref:d,className:Q(K.description,e),...r})]})});try{X.displayName="Details",X.__docgenInfo={description:`A component for showing additional information about the field,
styled similarly to a normal \`Field.Description\`.
Unlike a normal description, it can include links and other semantic elements.

Although this content is not associated with the field using direct semantics,
it is made discoverable to screen reader users via a visually hidden description,
alerting them to the presence of additional information below.

If the content only includes plain text, use \`Field.Description\` instead,
so the readout is not unnecessarily verbose for screen reader users.`,displayName:"Details",props:{}}}catch{}const ue=o.forwardRef(function(e,r){return n(Me,{ref:r,...e})}),dt={title:"Design System/Components/Form/Primitives/Field",component:Y,subcomponents:{Item:ie,Label:q,Control:ue,Description:re,Details:X}},P={args:{children:j(ae,{children:[n(q,{children:"Label"}),n(ue,{render:n("input",{type:"text",placeholder:"Placeholder"})}),n(re,{children:"The accessible description."})]})}},Ie=t=>n("input",{type:"text",...t}),V={name:"Using htmlFor",render:t=>{const e=o.useId(),r=o.useId();return j(Y,{...t,children:[n(q,{htmlFor:e,children:"Label"}),n(Ie,{placeholder:"Placeholder",id:e,"aria-describedby":r}),n(re,{id:r,children:"The accessible description."})]})}},S={name:"Using aria-labelledby",render:t=>{const e=o.useId(),r=o.useId();return j(Y,{...t,children:[n(q,{id:e,children:"Label"}),n(Ie,{placeholder:"Placeholder","aria-labelledby":e,"aria-describedby":r}),n(re,{id:r,children:"The accessible description."})," "]})}},E={args:{children:j(ae,{children:[n(q,{children:"Label"}),n(ue,{render:n("input",{type:"text",placeholder:"Placeholder"})}),j(X,{children:["Details can include","	",n("a",{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/a",children:"links to more information"})," ","and other semantic elements."]})]})}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
                <Field.Label>Label</Field.Label>
                <Field.Control render={<input type="text" placeholder="Placeholder" />} />
                <Field.Description>
                    The accessible description.
                </Field.Description>
            </>
  }
}`,...P.parameters?.docs?.source},description:{story:"If your control component forwards refs, as well as the `aria-labelledby` and `aria-describedby` props\nto the actual underlying HTML element to be labeled,\nyou can simply place your control in the `render` prop of `Field.Control`.",...P.parameters?.docs?.description}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  name: 'Using htmlFor',
  render: args => {
    const controlId = useId();
    const descriptionId = useId();
    return <Field.Root {...args}>
                <Field.Label htmlFor={controlId}>Label</Field.Label>
                <MyNonRefForwardingControl placeholder="Placeholder" id={controlId} aria-describedby={descriptionId} />
                <Field.Description id={descriptionId}>
                    The accessible description.
                </Field.Description>
            </Field.Root>;
  }
}`,...V.parameters?.docs?.source},description:{story:"If your control component does not forward refs, but does forward the `id` prop\nto the actual underlying HTML element to be labeled, use the `htmlFor` prop\nof the `Field.Label` component to associate the label with the control.\n\nThis is preferred over `aria-labelledby` because it allows users to click the\nlabel to focus the control.",...V.parameters?.docs?.description}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'Using aria-labelledby',
  render: args => {
    const labelId = useId();
    const descriptionId = useId();
    return <Field.Root {...args}>
                <Field.Label id={labelId}>Label</Field.Label>
                <MyNonRefForwardingControl placeholder="Placeholder" aria-labelledby={labelId} aria-describedby={descriptionId} />
                <Field.Description id={descriptionId}>
                    The accessible description.
                </Field.Description>{' '}
            </Field.Root>;
  }
}`,...S.parameters?.docs?.source},description:{story:"If your control component does not forward refs nor the `id` prop, but does\nforward the `aria-labelledby` prop to the actual underlying HTML element to be\nlabeled, use the `id` prop of the `Field.Label` component to associate the\nlabel with the control.",...S.parameters?.docs?.description}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
                <Field.Label>Label</Field.Label>
                <Field.Control render={<input type="text" placeholder="Placeholder" />} />
                <Field.Details>
                    Details can include{'	'}
                    <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/a">
                        links to more information
                    </a>{' '}
                    and other semantic elements.
                </Field.Details>
            </>
  }
}`,...E.parameters?.docs?.source},description:{story:`To add rich content (such as links) to the description, use \`Field.Details\`.

Although this content is not associated with the field using direct semantics,
it is made discoverable to screen reader users via a visually hidden description,
alerting them to the presence of additional information below.

If the content only includes plain text, use \`Field.Description\` instead,
so the readout is not unnecessarily verbose for screen reader users.`,...E.parameters?.docs?.description}}};try{P.displayName="Default",P.__docgenInfo={description:"If your control component forwards refs, as well as the `aria-labelledby` and `aria-describedby` props\nto the actual underlying HTML element to be labeled,\nyou can simply place your control in the `render` prop of `Field.Control`.",displayName:"Default",props:{}}}catch{}try{V.displayName="UsingHtmlFor",V.__docgenInfo={description:"If your control component does not forward refs, but does forward the `id` prop\nto the actual underlying HTML element to be labeled, use the `htmlFor` prop\nof the `Field.Label` component to associate the label with the control.\n\nThis is preferred over `aria-labelledby` because it allows users to click the\nlabel to focus the control.",displayName:"UsingHtmlFor",props:{}}}catch{}try{S.displayName="UsingAriaLabelledby",S.__docgenInfo={description:"If your control component does not forward refs nor the `id` prop, but does\nforward the `aria-labelledby` prop to the actual underlying HTML element to be\nlabeled, use the `id` prop of the `Field.Label` component to associate the\nlabel with the control.",displayName:"UsingAriaLabelledby",props:{}}}catch{}try{E.displayName="WithDetails",E.__docgenInfo={description:`To add rich content (such as links) to the description, use \`Field.Details\`.

Although this content is not associated with the field using direct semantics,
it is made discoverable to screen reader users via a visually hidden description,
alerting them to the presence of additional information below.

If the content only includes plain text, use \`Field.Description\` instead,
so the readout is not unnecessarily verbose for screen reader users.`,displayName:"WithDetails",props:{}}}catch{}export{P as Default,S as UsingAriaLabelledby,V as UsingHtmlFor,E as WithDetails,dt as default};
