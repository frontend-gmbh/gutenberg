import{f as p,j as t,c as u}from"./iframe-2TvY6Iig.js";import{u as R}from"./index-BjXx3EE5.js";import{B as w}from"./index-DckQhh-o.js";import{c as m}from"./base-control-styles-CoefPmVd.js";import{V as I}from"./component-BGXh8e92.js";import{V as q}from"./component-6CLxCT3h.js";function h(n,a){return`${n}-${a}-option-description`}function i(n,a){return`${n}-${a}`}function f(n){return`${n}__help`}function s(n){const{label:a,className:b,selected:g,help:l,onChange:y,onClick:_,hideLabelFromVision:v,options:d=[],id:C,...V}=n,e=R(s,"inspector-radio-control",C),N=o=>y(o.target.value);return d?.length?p("fieldset",{id:e,className:u(b,"components-radio-control"),"aria-describedby":l?f(e):void 0,children:[v?t(I,{as:"legend",children:a}):t(w.VisualLabel,{as:"legend",children:a}),t(q,{spacing:3,className:u("components-radio-control__group-wrapper",{"has-help":!!l}),children:d.map((o,r)=>p("div",{className:"components-radio-control__option",children:[t("input",{id:i(e,r),className:"components-radio-control__input",type:"radio",name:e,value:o.value,onChange:N,checked:o.value===g,"aria-describedby":o.description?h(e,r):void 0,onClick:c=>{c.currentTarget.focus(),_?.(c)},...V}),t("label",{className:"components-radio-control__label",htmlFor:i(e,r),children:o.label}),o.description?t(m,{id:h(e,r),className:"components-radio-control__option-description",children:o.description}):null]},i(e,r)))}),!!l&&t(m,{id:f(e),className:"components-base-control__help",children:l})]}):null}try{s.displayName="RadioControl",s.__docgenInfo={description:`Render a user interface to select the user type using radio inputs.

\`\`\`jsx
import { RadioControl } from '@wordpress/components';
import { useState } from '@wordpress/element';

const MyRadioControl = () => {
  const [ option, setOption ] = useState( 'a' );

  return (
    <RadioControl
      label="User type"
      help="The type of the current user"
      selected={ option }
      options={ [
        { label: 'Author', value: 'a' },
        { label: 'Editor', value: 'e' },
      ] }
      onChange={ ( value ) => setOption( value ) }
    />
  );
};
\`\`\``,displayName:"RadioControl",props:{label:{defaultValue:null,description:"If this property is added, a label will be generated using label property as the content.",name:"label",required:!1,type:{name:"ReactNode"}},hideLabelFromVision:{defaultValue:{value:"false"},description:"If true, the label will only be visible to screen readers.",name:"hideLabelFromVision",required:!1,type:{name:"boolean"}},help:{defaultValue:null,description:"Additional description for the control.\n\nOnly use for meaningful description or instructions for the control. An element containing the description will be programmatically associated to the BaseControl by the means of an `aria-describedby` attribute.",name:"help",required:!1,type:{name:"ReactNode"}},onChange:{defaultValue:null,description:`A function that receives the value of the new option that is being
selected as input.`,name:"onChange",required:!0,type:{name:"(value: string) => void"}},options:{defaultValue:null,description:"An array of objects containing the value and label of the options.",name:"options",required:!1,type:{name:"{ label: string; value: string; description?: string; }[]"}},selected:{defaultValue:null,description:"The value property of the currently selected option.",name:"selected",required:!1,type:{name:"string"}}}}}catch{}export{s as R};
