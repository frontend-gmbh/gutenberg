import{r as f,j as r,c as N}from"./iframe-2TvY6Iig.js";import{u as T}from"./index-BjXx3EE5.js";import{B as y}from"./index-DckQhh-o.js";import{m as S}from"./deprecated-36px-size-UsjcW-j9.js";function g(e,s){const{__nextHasNoMarginBottom:h,__next40pxDefaultSize:o=!1,label:l,hideLabelFromVision:i,value:c,help:a,id:p,className:m,onChange:d,type:x="text",..._}=e,t=T(n,"inspector-text-control",p),u=C=>d(C.target.value);return S({componentName:"TextControl",size:void 0,__next40pxDefaultSize:o}),r(y,{label:l,hideLabelFromVision:i,id:t,help:a,className:m,children:r("input",{className:N("components-text-control__input",{"is-next-40px-default-size":o}),type:x,id:t,value:c,onChange:u,"aria-describedby":a?t+"__help":void 0,ref:s,..._})})}const n=f.forwardRef(g);try{n.displayName="TextControl",n.__docgenInfo={description:`TextControl components let users enter and edit text.

\`\`\`jsx
import { TextControl } from '@wordpress/components';
import { useState } from '@wordpress/element';

const MyTextControl = () => {
  const [ className, setClassName ] = useState( '' );

  return (
    <TextControl
      __next40pxDefaultSize
      label="Additional CSS Class"
      value={ className }
      onChange={ ( value ) => setClassName( value ) }
    />
  );
};
\`\`\``,displayName:"TextControl",props:{}}}catch{}try{textcontrol.displayName="textcontrol",textcontrol.__docgenInfo={description:`TextControl components let users enter and edit text.

\`\`\`jsx
import { TextControl } from '@wordpress/components';
import { useState } from '@wordpress/element';

const MyTextControl = () => {
  const [ className, setClassName ] = useState( '' );

  return (
    <TextControl
      __next40pxDefaultSize
      label="Additional CSS Class"
      value={ className }
      onChange={ ( value ) => setClassName( value ) }
    />
  );
};
\`\`\``,displayName:"textcontrol",props:{}}}catch{}export{n as T};
