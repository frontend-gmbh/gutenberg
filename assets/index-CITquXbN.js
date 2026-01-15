import{r as u,j as t,f as _,c as g}from"./iframe-2TvY6Iig.js";import{u as C}from"./index-BjXx3EE5.js";import{F as T}from"./index-cTr3VGcq.js";import{B as y}from"./index-DckQhh-o.js";import{F as h}from"./component-BiaHS86M.js";import{H as x}from"./component-CIWI0tS-.js";function b({label:r,checked:l,help:o,className:i,onChange:d,disabled:a},p){function m(f){d(f.target.checked)}const n=`inspector-toggle-control-${C(s)}`;let c,e;return o&&(typeof o=="function"?l!==void 0&&(e=o(l)):e=o,e&&(c=n+"__help")),t(y,{id:n,help:e&&t("span",{className:"components-toggle-control__help",children:e}),className:g("components-toggle-control",i),children:_(x,{justify:"flex-start",spacing:2,children:[t(T,{id:n,checked:l,onChange:m,"aria-describedby":c,disabled:a,ref:p}),t(h,{as:"label",htmlFor:n,className:g("components-toggle-control__label",{"is-disabled":a}),children:r})]})})}const s=u.forwardRef(b);try{s.displayName="ToggleControl",s.__docgenInfo={description:`ToggleControl is used to generate a toggle user interface.

\`\`\`jsx
import { ToggleControl } from '@wordpress/components';
import { useState } from '@wordpress/element';

const MyToggleControl = () => {
  const [ value, setValue ] = useState( false );

  return (
    <ToggleControl
      label="Fixed Background"
      checked={ value }
      onChange={ () => setValue( ( state ) => ! state ) }
    />
  );
};
\`\`\``,displayName:"ToggleControl",props:{}}}catch{}try{togglecontrol.displayName="togglecontrol",togglecontrol.__docgenInfo={description:`ToggleControl is used to generate a toggle user interface.

\`\`\`jsx
import { ToggleControl } from '@wordpress/components';
import { useState } from '@wordpress/element';

const MyToggleControl = () => {
  const [ value, setValue ] = useState( false );

  return (
    <ToggleControl
      label="Fixed Background"
      checked={ value }
      onChange={ () => setValue( ( state ) => ! state ) }
    />
  );
};
\`\`\``,displayName:"togglecontrol",props:{}}}catch{}export{s as T};
