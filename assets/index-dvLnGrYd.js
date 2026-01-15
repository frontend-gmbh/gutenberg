import{r as s,j as E,c as ie}from"./iframe-2TvY6Iig.js";import{u as de}from"./index-BjXx3EE5.js";import{a as pe,I as ce}from"./input-base-DiRopTRM.js";import{u as fe}from"./use-gesture-react.esm-BHlZEJgV.js";import{c as F,I as U,R as G,C as M,d as H,e as K,f as $,a as J,P as Q,b as me,D as he}from"./actions-elSjqZJg.js";import{w as ge}from"./with-ignore-ime-events-BK39a-UH.js";import{s as j}from"./space-CjrGwnR-.js";import{B as ve}from"./index-DckQhh-o.js";import{u as ye}from"./use-deprecated-props-BokcF_Hx.js";import{m as _e}from"./deprecated-36px-size-UsjcW-j9.js";function be(n){let r="ns-resize";switch(n){case"n":case"s":r="ns-resize";break;case"e":case"w":r="ew-resize";break}return r}function xe(n,r){const t=be(r);return s.useEffect(()=>{n?document.documentElement.style.cursor=t:document.documentElement.style.cursor=null},[n,t]),t}function Ie(n){const r=s.useRef(n.value),[t,e]=s.useState({}),l=t.value!==void 0?t.value:n.value;return s.useLayoutEffect(()=>{const{current:o}=r;r.current=n.value,t.value!==void 0&&!t.isStale?e({...t,isStale:!0}):t.isStale&&n.value!==o&&e({})},[n.value,t]),{value:l,onBlur:o=>{e({}),n.onBlur?.(o)},onChange:(o,m)=>{e(g=>Object.assign(g,{value:o,isStale:!1})),n.onChange(o,m)}}}const Ce=n=>n,W={error:null,initialValue:"",isDirty:!1,isDragEnabled:!1,isDragging:!1,isPressEnterToChange:!1,value:""};function De(n=W){const{value:r}=n;return{...W,...n,initialValue:r}}function we(n){return(r,t)=>{const e={...r};switch(t.type){case F:return e.value=t.payload.value,e.isDirty=!1,e._event=void 0,e;case Q:e.isDirty=!1;break;case J:e.isDirty=!1;break;case $:e.isDragging=!0;break;case K:e.isDragging=!1;break;case H:e.error=null,e.value=t.payload.value,r.isPressEnterToChange&&(e.isDirty=!0);break;case M:e.value=t.payload.value,e.isDirty=!1;break;case G:e.error=null,e.isDirty=!1,e.value=t.payload.value||r.initialValue;break;case U:e.error=t.payload.error;break}return e._event=t.payload.event,n(e,t)}}function Se(n=Ce,r=W,t){const[e,l]=s.useReducer(we(n),De(r)),p=u=>(d,b)=>{l({type:u,payload:{value:d,event:b}})},f=u=>d=>{l({type:u,payload:{event:d}})},o=u=>d=>{l({type:u,payload:d})},m=p(H),g=(u,d)=>l({type:U,payload:{error:u,event:d}}),I=p(G),C=p(M),D=o($),w=o(he),S=o(K),y=f(Q),V=f(J),_=f(me),i=s.useRef(e),c=s.useRef({value:r.value,onChangeHandler:t});return s.useLayoutEffect(()=>{i.current=e,c.current={value:r.value,onChangeHandler:t}}),s.useLayoutEffect(()=>{i.current._event!==void 0&&e.value!==c.current.value&&!e.isDirty&&c.current.onChangeHandler(e.value??"",{event:i.current._event})},[e.value,e.isDirty]),s.useLayoutEffect(()=>{r.value!==i.current.value&&!i.current.isDirty&&l({type:F,payload:{value:r.value??""}})},[r.value]),{change:m,commit:C,dispatch:l,drag:w,dragEnd:S,dragStart:D,invalidate:g,pressDown:V,pressEnter:_,pressUp:y,reset:I,state:e}}const v=()=>{};function Ve({disabled:n=!1,dragDirection:r="n",dragThreshold:t=10,id:e,isDragEnabled:l=!1,isPressEnterToChange:p=!1,onBlur:f=v,onChange:o=v,onDrag:m=v,onDragEnd:g=v,onDragStart:I=v,onKeyDown:C=v,onValidate:D=v,size:w="default",stateReducer:S=c=>c,value:y,type:V,..._},i){const{state:c,change:u,commit:d,drag:b,dragEnd:x,dragStart:R,invalidate:q,pressDown:z,pressEnter:N,pressUp:X,reset:Y}=Se(S,{isDragEnabled:l,value:y,isPressEnterToChange:p},o),{value:Z,isDragging:T,isDirty:O}=c,ee=s.useRef(!1),te=xe(T,r),ne=a=>{f(a),(O||!a.target.validity.valid)&&(ee.current=!0,L(a))},ae=a=>{const h=a.target.value;u(h,a)},L=a=>{const h=a.currentTarget.value;try{D(h),d(h,a)}catch(k){q(k,a)}},re=a=>{const{key:h}=a;switch(C(a),h){case"ArrowUp":X(a);break;case"ArrowDown":z(a);break;case"Enter":N(a),p&&(a.preventDefault(),L(a));break;case"Escape":p&&O&&(a.preventDefault(),Y(y,a));break}},oe=fe(a=>{const{distance:h,dragging:k,event:se,target:ue}=a;if(a.event={...a.event,target:ue},!!h){if(se.stopPropagation(),!k){g(a),x(a);return}m(a),b(a),T||(I(a),R(a))}},{axis:r==="e"||r==="w"?"x":"y",threshold:t,enabled:l,pointer:{capture:!1}}),le=l?oe():{};return E(pe,{..._,...le,className:"components-input-control__input",disabled:n,dragCursor:te,isDragging:T,id:e,onBlur:ne,onChange:ae,onKeyDown:ge(re),ref:i,inputSize:w,value:Z??"",type:V})}const Ee=s.forwardRef(Ve),P=()=>{};function Re(n){const t=`inspector-input-control-${de(A)}`;return n||t}function B(n,r){const{__next40pxDefaultSize:t,__shouldNotWarnDeprecated36pxSize:e,__unstableStateReducer:l=N=>N,__unstableInputWidth:p,className:f,disabled:o=!1,help:m,hideLabelFromVision:g=!1,id:I,isPressEnterToChange:C=!1,label:D,labelPosition:w="top",onChange:S=P,onValidate:y=P,onKeyDown:V=P,prefix:_,size:i="default",style:c,suffix:u,value:d,...b}=ye(n),x=Re(I),R=ie("components-input-control",f),q=Ie({value:d,onBlur:b.onBlur,onChange:S}),z=m?{"aria-describedby":`${x}__help`}:{};return _e({componentName:"InputControl",__next40pxDefaultSize:t,size:i,__shouldNotWarnDeprecated36pxSize:e}),E(ve,{className:R,help:m,id:x,children:E(ce,{__next40pxDefaultSize:t,__unstableInputWidth:p,disabled:o,gap:3,hideLabelFromVision:g,id:x,justify:"left",label:D,labelPosition:w,prefix:_,size:i,style:c,suffix:u,children:E(Ee,{...b,...z,__next40pxDefaultSize:t,className:"components-input-control__input",disabled:o,id:x,isPressEnterToChange:C,onKeyDown:V,onValidate:y,paddingInlineStart:_?j(1):void 0,paddingInlineEnd:u?j(1):void 0,ref:r,size:i,stateReducer:l,...q})})})}const A=s.forwardRef(B);try{B.displayName="UnforwardedInputControl",B.__docgenInfo={description:"",displayName:"UnforwardedInputControl",props:{__unstableStateReducer:{defaultValue:null,description:"",name:"__unstableStateReducer",required:!1,type:{name:"StateReducer"}},size:{defaultValue:{value:"'default'"},description:"Adjusts the size of the input.",name:"size",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"compact"'},{value:'"small"'},{value:'"__unstable-large"'}]}},label:{defaultValue:null,description:"If this property is added, a label will be generated using label property as the content.",name:"label",required:!1,type:{name:"ReactNode"}},prefix:{defaultValue:null,description:`Renders an element on the left side of the input.

By default, the prefix is aligned with the edge of the input border, with no padding.
If you want to apply standard padding in accordance with the size variant, wrap the element in
the provided \`<InputControlPrefixWrapper>\` component.

\`\`\`jsx
import {
  __experimentalInputControl as InputControl,
  __experimentalInputControlPrefixWrapper as InputControlPrefixWrapper,
} from '@wordpress/components';

<InputControl
  prefix={<InputControlPrefixWrapper>@</InputControlPrefixWrapper>}
/>
\`\`\``,name:"prefix",required:!1,type:{name:"ReactNode"}},disabled:{defaultValue:{value:"false"},description:"If true, the `input` will be disabled.",name:"disabled",required:!1,type:{name:"boolean"}},hideLabelFromVision:{defaultValue:{value:"false"},description:"If true, the label will only be visible to screen readers.",name:"hideLabelFromVision",required:!1,type:{name:"boolean"}},__next40pxDefaultSize:{defaultValue:{value:"false"},description:"Start opting into the larger default height that will become the default size in a future version.",name:"__next40pxDefaultSize",required:!1,type:{name:"boolean"}},__shouldNotWarnDeprecated36pxSize:{defaultValue:null,description:`Do not throw a warning for the deprecated 36px default size.
For internal components of other components that already throw the warning.
@ignore`,name:"__shouldNotWarnDeprecated36pxSize",required:!1,type:{name:"boolean"}},suffix:{defaultValue:null,description:`Renders an element on the right side of the input.

By default, the suffix is aligned with the edge of the input border, with no padding.
If you want to apply standard padding in accordance with the size variant, wrap the element in
the provided \`<InputControlSuffixWrapper>\` component.

\`\`\`jsx
import {
  __experimentalInputControl as InputControl,
  __experimentalInputControlSuffixWrapper as InputControlSuffixWrapper,
} from '@wordpress/components';

<InputControl
  suffix={<InputControlSuffixWrapper>%</InputControlSuffixWrapper>}
/>
\`\`\``,name:"suffix",required:!1,type:{name:"ReactNode"}},__next36pxDefaultSize:{defaultValue:{value:"false"},description:"Deprecated. Use `__next40pxDefaultSize` instead.\n@deprecated\n@ignore",name:"__next36pxDefaultSize",required:!1,type:{name:"boolean"}},labelPosition:{defaultValue:{value:"'top'"},description:"The position of the label.",name:"labelPosition",required:!1,type:{name:"enum",value:[{value:'"bottom"'},{value:'"top"'},{value:'"side"'},{value:'"edge"'}]}},__unstableInputWidth:{defaultValue:null,description:"",name:"__unstableInputWidth",required:!1,type:{name:"Width<string | number>"}},help:{defaultValue:null,description:"Additional description for the control.\n\nOnly use for meaningful description or instructions for the control. An element containing the description will be programmatically associated to the BaseControl by the means of an `aria-describedby` attribute.",name:"help",required:!1,type:{name:"ReactNode"}},type:{defaultValue:{value:"'text'"},description:"Type of the input element to render.",name:"type",required:!1,type:{name:"HTMLInputTypeAttribute"}},onChange:{defaultValue:null,description:"A function that receives the value of the input.",name:"onChange",required:!1,type:{name:"InputChangeCallback<{}>"}},onDrag:{defaultValue:null,description:"",name:"onDrag",required:!1,type:{name:'(dragProps: Omit<FullGestureState<"drag">, "event"> & { event: unknown; }) => void'}},onDragEnd:{defaultValue:null,description:"",name:"onDragEnd",required:!1,type:{name:'(dragProps: Omit<FullGestureState<"drag">, "event"> & { event: unknown; }) => void'}},onDragStart:{defaultValue:null,description:"",name:"onDragStart",required:!1,type:{name:'(dragProps: Omit<FullGestureState<"drag">, "event"> & { event: unknown; }) => void'}},value:{defaultValue:null,description:"The current value of the input.",name:"value",required:!1,type:{name:"string"}},isDragEnabled:{defaultValue:{value:"false"},description:"If true, enables mouse drag gestures.",name:"isDragEnabled",required:!1,type:{name:"boolean"}},dragDirection:{defaultValue:{value:"'n'"},description:"Determines the drag axis.",name:"dragDirection",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"n"'},{value:'"e"'},{value:'"w"'}]}},dragThreshold:{defaultValue:{value:"10"},description:"If `isDragEnabled` is true, this controls the amount of `px` to have been dragged before\nthe drag gesture is actually triggered.",name:"dragThreshold",required:!1,type:{name:"number"}},isPressEnterToChange:{defaultValue:{value:"false"},description:"If true, the `ENTER` key press is required in order to trigger an `onChange`.\nIf enabled, a change is also triggered when tabbing away (`onBlur`).",name:"isPressEnterToChange",required:!1,type:{name:"boolean"}},onValidate:{defaultValue:null,description:"",name:"onValidate",required:!1,type:{name:"(nextValue: string, event?: SyntheticEvent<HTMLInputElement, Event>) => void"}}}}}catch{}try{A.displayName="InputControl",A.__docgenInfo={description:`InputControl components let users enter and edit text. This is an experimental component
intended to (in time) merge with or replace \`TextControl\`.

\`\`\`jsx
import { __experimentalInputControl as InputControl } from '@wordpress/components';
import { useState } from 'react';

const Example = () => {
  const [ value, setValue ] = useState( '' );

  return (
 	<InputControl
			__next40pxDefaultSize
 		value={ value }
 		onChange={ ( nextValue ) => setValue( nextValue ?? '' ) }
 	/>
  );
};
\`\`\``,displayName:"InputControl",props:{}}}catch{}try{inputcontrol.displayName="inputcontrol",inputcontrol.__docgenInfo={description:`InputControl components let users enter and edit text. This is an experimental component
intended to (in time) merge with or replace \`TextControl\`.

\`\`\`jsx
import { __experimentalInputControl as InputControl } from '@wordpress/components';
import { useState } from 'react';

const Example = () => {
  const [ value, setValue ] = useState( '' );

  return (
 	<InputControl
			__next40pxDefaultSize
 		value={ value }
 		onChange={ ( nextValue ) => setValue( nextValue ?? '' ) }
 	/>
  );
};
\`\`\``,displayName:"inputcontrol",props:{}}}catch{}export{A as I};
