import{r as d,j as t,f as h,c as N}from"./iframe-2TvY6Iig.js";import{u as I}from"./index-BjXx3EE5.js";import{u as v}from"./index-DDuNjadK.js";import{d as S}from"./index-BjRskdOB.js";import{i as m}from"./index-FlM62Vh8.js";import{B as V}from"./index-DckQhh-o.js";import{H as q}from"./component-CIWI0tS-.js";import{r as B}from"./reset-DAroYZ4v.js";import{c as j}from"./check-CavNG0Pm.js";function a(r){const{__nextHasNoMarginBottom:H,label:c,className:p,heading:l,checked:s,indeterminate:i,help:o,id:u,onChange:f,onClick:b,...k}=r;l&&S("`heading` prop in `CheckboxControl`",{alternative:"a separate element to implement a heading",since:"5.8"});const[_,C]=d.useState(!1),[x,g]=d.useState(!1),y=v(e=>{e&&(e.indeterminate=!!i,C(e.matches(":checked")),g(e.matches(":indeterminate")))},[s,i]),n=I(a,"inspector-checkbox-control",u),w=e=>f(e.target.checked);return t(V,{label:l,id:n,help:o&&t("span",{className:"components-checkbox-control__help",children:o}),className:N("components-checkbox-control",p),children:h(q,{spacing:0,justify:"start",alignment:"top",children:[h("span",{className:"components-checkbox-control__input-container",children:[t("input",{ref:y,id:n,className:"components-checkbox-control__input",type:"checkbox",value:"1",onChange:w,checked:s,"aria-describedby":o?n+"__help":void 0,onClick:e=>{e.currentTarget.focus(),b?.(e)},...k}),x?t(m,{icon:B,className:"components-checkbox-control__indeterminate",role:"presentation"}):null,_?t(m,{icon:j,className:"components-checkbox-control__checked",role:"presentation"}):null]}),c&&t("label",{className:"components-checkbox-control__label",htmlFor:n,children:c})]})})}try{a.displayName="CheckboxControl",a.__docgenInfo={description:`Checkboxes allow the user to select one or more items from a set.

\`\`\`jsx
import { CheckboxControl } from '@wordpress/components';
import { useState } from '@wordpress/element';

const MyCheckboxControl = () => {
  const [ isChecked, setChecked ] = useState( true );
  return (
    <CheckboxControl
      label="Is author"
      help="Is the user a author or not?"
      checked={ isChecked }
      onChange={ setChecked }
    />
  );
};
\`\`\``,displayName:"CheckboxControl",props:{__nextHasNoMarginBottom:{defaultValue:null,description:`Start opting into the new margin-free styles that will become the default in a future version.
@deprecated Default behavior since WordPress 7.0. Prop can be safely removed.
@ignore`,name:"__nextHasNoMarginBottom",required:!1,type:{name:"boolean"}},help:{defaultValue:null,description:"Additional description for the control.\n\nOnly use for meaningful description or instructions for the control. An element containing the description will be programmatically associated to the BaseControl by the means of an `aria-describedby` attribute.",name:"help",required:!1,type:{name:"ReactNode"}},onChange:{defaultValue:null,description:"A function that receives the checked state (boolean) as input.",name:"onChange",required:!0,type:{name:"(value: boolean) => void"}},label:{defaultValue:null,description:`A label for the input field, that appears at the side of the checkbox.
The prop will be rendered as content a label element. If no prop is
passed an empty label is rendered.`,name:"label",required:!1,type:{name:"string"}},checked:{defaultValue:null,description:`If checked is true the checkbox will be checked. If checked is false the
checkbox will be unchecked. If no value is passed the checkbox will be
unchecked.`,name:"checked",required:!1,type:{name:"boolean"}},indeterminate:{defaultValue:null,description:"If indeterminate is true the state of the checkbox will be indeterminate.",name:"indeterminate",required:!1,type:{name:"boolean"}},heading:{defaultValue:null,description:"@deprecated",name:"heading",required:!1,type:{name:"ReactNode"}}}}}catch{}export{a as C};
