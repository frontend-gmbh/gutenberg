import{r as g,j as E}from"./iframe-2TvY6Iig.js";import{c as i}from"./emotion-react.browser.esm-T2caqgd_.js";import{u as S,a as _,c as V}from"./use-context-system-GBkKyJuM.js";import{i as o}from"./values-CtPxXHrl.js";import{C as f}from"./config-values-CkVNYk_w.js";import{V as q}from"./component-DATVQiJy.js";const I={name:"12ip69d",styles:"background:transparent;display:block;margin:0!important;pointer-events:none;position:absolute;will-change:box-shadow"};function l(a){const e=`rgba(0, 0, 0, ${a/20})`;return`0 ${a}px ${a*2}px 0
	${e}`}function T(a){const{active:e,borderRadius:n="inherit",className:h,focus:u,hover:s,isInteractive:p=!1,offset:r=0,value:d=0,...w}=S(a,"Elevation"),v=_(),x=g.useMemo(()=>{let c=o(s)?s:d*2,m=o(e)?e:d/2;p||(c=o(s)?s:void 0,m=o(e)?e:void 0);const y=`box-shadow ${f.transitionDuration} ${f.transitionTimingFunction}`,t={};return t.Base=i({borderRadius:n,bottom:r,boxShadow:l(d),opacity:f.elevationIntensity,left:r,right:r,top:r},i("@media not ( prefers-reduced-motion ){transition:",y,";}",""),"",""),o(c)&&(t.hover=i("*:hover>&{box-shadow:",l(c),";}","")),o(m)&&(t.active=i("*:active>&{box-shadow:",l(m),";}","")),o(u)&&(t.focus=i("*:focus>&{box-shadow:",l(u),";}","")),v(I,t.Base,t.hover,t.focus,t.active,h)},[e,n,h,v,u,s,p,r,d]);return{...w,className:x,"aria-hidden":!0}}function C(a,e){const n=T(a);return E(q,{...n,ref:e})}const b=V(C,"Elevation");try{b.displayName="Elevation",b.__docgenInfo={description:`\`Elevation\` is a core component that renders shadow, using the component
system's shadow system.

The shadow effect is generated using the \`value\` prop.

\`\`\`jsx
import {
__experimentalElevation as Elevation,
__experimentalSurface as Surface,
__experimentalText as Text,
} from '@wordpress/components';

function Example() {
  return (
    <Surface>
      <Text>Code is Poetry</Text>
      <Elevation value={ 5 } />
    </Surface>
  );
}
\`\`\``,displayName:"Elevation",props:{active:{defaultValue:null,description:"Size of the shadow value when active (see the `value` and `isInteractive`\nprops).",name:"active",required:!1,type:{name:"number"}},borderRadius:{defaultValue:{value:"'inherit'"},description:"Renders the border-radius of the shadow.",name:"borderRadius",required:!1,type:{name:"BorderRadius<string | number>"}},focus:{defaultValue:null,description:"Size of the shadow value when focused (see the `value` and\n`isInteractive` props).",name:"focus",required:!1,type:{name:"number"}},hover:{defaultValue:null,description:"Size of the shadow value when hovered (see the `value` and\n`isInteractive` props).",name:"hover",required:!1,type:{name:"number"}},isInteractive:{defaultValue:{value:"false"},description:"Determines if `hover`, `active`, and `focus` shadow values should be\nautomatically calculated and rendered.",name:"isInteractive",required:!1,type:{name:"boolean"}},offset:{defaultValue:{value:"0"},description:"Dimensional offsets (margin) for the shadow.",name:"offset",required:!1,type:{name:"number"}},value:{defaultValue:{value:"0"},description:"Size of the shadow, based on the Style system's elevation system. The\n`value` determines the strength of the shadow, which creates the sense of\ndepth.",name:"value",required:!1,type:{name:"number"}},as:{defaultValue:null,description:"The HTML element or React component to render the component as.",name:"as",required:!1,type:{name:'"symbol" | "object" | "select" | "a" | "abbr" | "address" | "area" | "article" | "aside" | "audio" | "b" | "base" | "bdi" | "bdo" | "big" | "blockquote" | "body" | "br" | "button" | ... 516 more ... | ("view" & FunctionComponent<...>)'}}}}}catch{}export{b as E};
