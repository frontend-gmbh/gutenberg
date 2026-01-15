import{a as r,c as b,r as j}from"./iframe-2TvY6Iig.js";import{a as n,i as A}from"./default-i18n-SWt35ZM4.js";import{u as k}from"./index-BjXx3EE5.js";import{C as h}from"./index-DTHXlaSB.js";import{t as R}from"./index-CnMiRX9-.js";import{c as T}from"./component-BHPgM0nZ.js";import{S as O,R as D}from"./index-BIvJ8ozV.js";var I=[["top left","top center","top right"],["center left","center center","center right"],["bottom left","bottom center","bottom right"]],M={"top left":n("Top Left"),"top center":n("Top Center"),"top right":n("Top Right"),"center left":n("Center Left"),"center center":n("Center"),center:n("Center"),"center right":n("Center Right"),"bottom left":n("Bottom Left"),"bottom center":n("Bottom Center"),"bottom right":n("Bottom Right")},x=I.flat();function w(t){const e=(t==="center"?"center center":t)?.replace("-"," ");return x.includes(e)?e:void 0}function y(t,o){const e=w(o);if(!e)return;const a=e.replace(" ","-");return`${t}-${a}`}function L(t,o){const e=o?.replace(t+"-","");return w(e)}function B(t="center"){const o=w(t);if(!o)return;const e=x.indexOf(o);return e>-1?e:void 0}var z=`/**
 * SCSS Variables.
 *
 * Please use variables from this sheet to ensure consistency across the UI.
 * Don't add to this sheet unless you're pretty sure the value will be reused in many places.
 * For example, don't add rules to this sheet that affect block visuals. It's purely for UI.
 */
/**
 * Colors
 */
/**
 * Fonts & basic variables.
 */
/**
 * Typography
 */
/**
 * Grid System.
 * https://make.wordpress.org/design/2019/10/31/proposal-a-consistent-spacing-system-for-wordpress/
 */
/**
 * Radius scale.
 */
/**
 * Elevation scale.
 */
/**
 * Dimensions.
 */
/**
 * Mobile specific styles
 */
/**
 * Editor styles.
 */
/**
 * Block & Editor UI.
 */
/**
 * Block paddings.
 */
/**
 * React Native specific.
 * These variables do not appear to be used anywhere else.
 */
.style-module__grid-container__AuKvW {
  direction: ltr;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  box-sizing: border-box;
  aspect-ratio: 1;
  border: 1px solid transparent;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
}

.style-module__grid-row__xCH47 {
  grid-column: 1/-1;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.style-module__cell__Ovdp9 {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  appearance: none;
  border: none;
  outline: none;
}

.style-module__point__N-8S1 {
  display: block;
  contain: strict;
  box-sizing: border-box;
  width: 6px;
  aspect-ratio: 1;
  margin: auto;
  color: var(--wp-components-color-gray-400, #ccc);
  /* Use border instead of background color so that the point shows
  in Windows High Contrast Mode */
  border: 3px solid currentColor;
  /* Highlight active item */
}
.style-module__cell__Ovdp9[data-active-item] .style-module__point__N-8S1 {
  color: var(--wp-components-color-foreground, #1e1e1e);
  transform: scale(1.6666666667);
}
.style-module__point__N-8S1 {
  /* Hover styles for non-active items */
}
.style-module__cell__Ovdp9:not([data-active-item]):hover .style-module__point__N-8S1 {
  color: var(--wp-components-color-accent, var(--wp-admin-theme-color, #3858e9));
}
.style-module__point__N-8S1 {
  /* Show an outline only when interacting with keyboard */
}
.style-module__cell__Ovdp9[data-focus-visible] .style-module__point__N-8S1 {
  outline: 1px solid var(--wp-components-color-accent, var(--wp-admin-theme-color, #3858e9));
  outline-offset: 1px;
}
@media not (prefers-reduced-motion) {
  .style-module__point__N-8S1 {
    transition-property: color, transform;
    transition-duration: 120ms;
    transition-timing-function: linear;
  }
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(z));var S={cell:"style-module__cell__Ovdp9",point:"style-module__point__N-8S1"};function G({id:t,value:o,...e}){return r.jsx(R,{text:M[o],children:r.jsxs(h.Item,{id:t,render:r.jsx("span",{...e,className:b(S.cell,e.className),role:"gridcell"}),children:[r.jsx(T,{children:o}),r.jsx("span",{className:S.point,role:"presentation"})]})})}var c=24,p=7,C=(c-3*p)/2,H=2,U=4;function $({className:t,disablePointerEvents:o=!0,size:e,width:a,height:_,style:m={},value:u="center",...g}){var i,d;return r.jsx(O,{xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${c} ${c}`,width:(i=e??a)!==null&&i!==void 0?i:c,height:(d=e??_)!==null&&d!==void 0?d:c,role:"presentation",className:b("component-alignment-matrix-control-icon",t),style:{pointerEvents:o?"none":void 0,...m},...g,children:x.map((f,l)=>{const s=B(u)===l?U:H;return r.jsx(D,{x:C+l%3*p+(p-s)/2,y:C+Math.floor(l/3)*p+(p-s)/2,width:s,height:s,fill:"currentColor"},f)})})}var V=$,W=`/**
 * SCSS Variables.
 *
 * Please use variables from this sheet to ensure consistency across the UI.
 * Don't add to this sheet unless you're pretty sure the value will be reused in many places.
 * For example, don't add rules to this sheet that affect block visuals. It's purely for UI.
 */
/**
 * Colors
 */
/**
 * Fonts & basic variables.
 */
/**
 * Typography
 */
/**
 * Grid System.
 * https://make.wordpress.org/design/2019/10/31/proposal-a-consistent-spacing-system-for-wordpress/
 */
/**
 * Radius scale.
 */
/**
 * Elevation scale.
 */
/**
 * Dimensions.
 */
/**
 * Mobile specific styles
 */
/**
 * Editor styles.
 */
/**
 * Block & Editor UI.
 */
/**
 * Block paddings.
 */
/**
 * React Native specific.
 * These variables do not appear to be used anywhere else.
 */
.style-module__grid-container__AuKvW {
  direction: ltr;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  box-sizing: border-box;
  aspect-ratio: 1;
  border: 1px solid transparent;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
}

.style-module__grid-row__xCH47 {
  grid-column: 1/-1;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.style-module__cell__Ovdp9 {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  appearance: none;
  border: none;
  outline: none;
}

.style-module__point__N-8S1 {
  display: block;
  contain: strict;
  box-sizing: border-box;
  width: 6px;
  aspect-ratio: 1;
  margin: auto;
  color: var(--wp-components-color-gray-400, #ccc);
  /* Use border instead of background color so that the point shows
  in Windows High Contrast Mode */
  border: 3px solid currentColor;
  /* Highlight active item */
}
.style-module__cell__Ovdp9[data-active-item] .style-module__point__N-8S1 {
  color: var(--wp-components-color-foreground, #1e1e1e);
  transform: scale(1.6666666667);
}
.style-module__point__N-8S1 {
  /* Hover styles for non-active items */
}
.style-module__cell__Ovdp9:not([data-active-item]):hover .style-module__point__N-8S1 {
  color: var(--wp-components-color-accent, var(--wp-admin-theme-color, #3858e9));
}
.style-module__point__N-8S1 {
  /* Show an outline only when interacting with keyboard */
}
.style-module__cell__Ovdp9[data-focus-visible] .style-module__point__N-8S1 {
  outline: 1px solid var(--wp-components-color-accent, var(--wp-admin-theme-color, #3858e9));
  outline-offset: 1px;
}
@media not (prefers-reduced-motion) {
  .style-module__point__N-8S1 {
    transition-property: color, transform;
    transition-duration: 120ms;
    transition-timing-function: linear;
  }
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(W));var N={"grid-container":"style-module__grid-container__AuKvW","grid-row":"style-module__grid-row__xCH47"};function E({className:t,id:o,label:e=n("Alignment Matrix Control"),defaultValue:a="center center",value:_,onChange:m,width:u=92,...g}){const i=k(E,"alignment-matrix-control",o),d=j.useCallback(l=>{const s=L(i,l);s&&m?.(s)},[i,m]),f=b("component-alignment-matrix-control",N["grid-container"],t);return r.jsx(h,{defaultActiveId:y(i,a),activeId:y(i,_),setActiveId:d,rtl:A(),render:r.jsx("div",{...g,className:f,"aria-label":e,id:i,role:"grid",style:{width:`${u}px`}}),children:I.map((l,s)=>r.jsx(h.Row,{render:r.jsx("div",{className:N["grid-row"],role:"row"}),children:l.map(v=>r.jsx(G,{id:y(i,v),value:v},v))},s))})}var F=Object.assign(E,{Icon:Object.assign(V,{displayName:"AlignmentMatrixControl.Icon"})}),Y=F;export{Y as a};
