import{r as i,c as f,f as h,j as o}from"./iframe-2TvY6Iig.js";const _=()=>{};function k(e,c){const{className:a,checked:n,id:g,disabled:s,onChange:m=_,onClick:l,...p}=e,d=f("components-form-toggle",a,{"is-checked":n,"is-disabled":s});return h("span",{className:d,children:[o("input",{className:"components-form-toggle__input",id:g,type:"checkbox",checked:n,onChange:m,disabled:s,onClick:t=>{t.currentTarget.focus(),l?.(t)},...p,ref:c}),o("span",{className:"components-form-toggle__track"}),o("span",{className:"components-form-toggle__thumb"})]})}const r=i.forwardRef(k);try{r.displayName="FormToggle",r.__docgenInfo={description:`FormToggle switches a single setting on or off.

\`\`\`jsx
import { FormToggle } from '@wordpress/components';
import { useState } from '@wordpress/element';

const MyFormToggle = () => {
  const [ isChecked, setChecked ] = useState( true );

  return (
    <FormToggle
      checked={ isChecked }
      onChange={ () => setChecked( ( state ) => ! state ) }
    />
  );
};
\`\`\``,displayName:"FormToggle",props:{}}}catch{}try{formtoggle.displayName="formtoggle",formtoggle.__docgenInfo={description:`FormToggle switches a single setting on or off.

\`\`\`jsx
import { FormToggle } from '@wordpress/components';
import { useState } from '@wordpress/element';

const MyFormToggle = () => {
  const [ isChecked, setChecked ] = useState( true );

  return (
    <FormToggle
      checked={ isChecked }
      onChange={ () => setChecked( ( state ) => ! state ) }
    />
  );
};
\`\`\``,displayName:"formtoggle",props:{}}}catch{}export{r as F};
