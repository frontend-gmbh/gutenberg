import{e as w,r as _,c as T,j as s}from"./iframe-2TvY6Iig.js";import{u as C}from"./index-BjXx3EE5.js";import{B as v}from"./index-DckQhh-o.js";import{c as i}from"./emotion-react.browser.esm-T2caqgd_.js";import{f as a}from"./font-Cck9kG94.js";import{C as e}from"./colors-values-BSq3yUT9.js";import{C as o}from"./config-values-CkVNYk_w.js";const k={huge:"1440px",wide:"1280px","x-large":"1080px",large:"960px",medium:"782px",small:"600px",mobile:"480px","zoomed-in":"280px"},S=t=>`@media (min-width: ${k[t]})`,N=i("box-shadow:0 0 0 transparent;border-radius:",o.radiusSmall,";border:",o.borderWidth," solid ",e.ui.border,";@media not ( prefers-reduced-motion ){transition:box-shadow 0.1s linear;}",""),z=i("border-color:",e.theme.accent,";box-shadow:0 0 0 calc( ",o.borderWidthFocus," - ",o.borderWidth," ) ",e.theme.accent,";outline:2px solid transparent;",""),G=w("textarea",{target:"e1w5nnrk0"})("width:100%;display:block;font-family:",a("default.fontFamily"),";line-height:20px;background:",e.theme.background,";color:",e.theme.foreground,";resize:vertical;padding:9px 11px;min-height:38px;",N,";font-size:",a("mobileTextMinFontSize"),";",S("small"),"{font-size:",a("default.fontSize"),";}&:focus{",z,";}&::-webkit-input-placeholder{color:",e.ui.darkGrayPlaceholder,";}&::-moz-placeholder{color:",e.ui.darkGrayPlaceholder,";}&:-ms-input-placeholder{color:",e.ui.darkGrayPlaceholder,";}.is-dark-theme &{&::-webkit-input-placeholder{color:",e.ui.lightGrayPlaceholder,";}&::-moz-placeholder{color:",e.ui.lightGrayPlaceholder,";}&:-ms-input-placeholder{color:",e.ui.lightGrayPlaceholder,";}}");function P(t,c){const{__nextHasNoMarginBottom:F,label:d,hideLabelFromVision:p,value:m,help:l,onChange:x,rows:h=4,className:u,...f}=t,r=`inspector-textarea-control-${C(n)}`,y=g=>x(g.target.value),b=T("components-textarea-control",u);return s(v,{label:d,hideLabelFromVision:p,id:r,help:l,className:b,children:s(G,{className:"components-textarea-control__input",id:r,rows:h,onChange:y,"aria-describedby":l?r+"__help":void 0,value:m,ref:c,...f})})}const n=_.forwardRef(P);try{n.displayName="TextareaControl",n.__docgenInfo={description:`TextareaControls are TextControls that allow for multiple lines of text, and
wrap overflow text onto a new line. They are a fixed height and scroll
vertically when the cursor reaches the bottom of the field.

\`\`\`jsx
import { TextareaControl } from '@wordpress/components';
import { useState } from '@wordpress/element';

const MyTextareaControl = () => {
  const [ text, setText ] = useState( '' );

  return (
    <TextareaControl
      label="Text"
      help="Enter some text"
      value={ text }
      onChange={ ( value ) => setText( value ) }
    />
  );
};
\`\`\``,displayName:"TextareaControl",props:{}}}catch{}try{textareacontrol.displayName="textareacontrol",textareacontrol.__docgenInfo={description:`TextareaControls are TextControls that allow for multiple lines of text, and
wrap overflow text onto a new line. They are a fixed height and scroll
vertically when the cursor reaches the bottom of the field.

\`\`\`jsx
import { TextareaControl } from '@wordpress/components';
import { useState } from '@wordpress/element';

const MyTextareaControl = () => {
  const [ text, setText ] = useState( '' );

  return (
    <TextareaControl
      label="Text"
      help="Enter some text"
      value={ text }
      onChange={ ( value ) => setText( value ) }
    />
  );
};
\`\`\``,displayName:"textareacontrol",props:{}}}catch{}export{n as T};
