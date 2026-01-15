import{r as l,c as h,j as c,f as C}from"./iframe-2TvY6Iig.js";import{s as M}from"./index-CXY7LZMH.js";import{s as j}from"./serialize-BIFBHZij.js";import{a as y}from"./default-i18n-SWt35ZM4.js";import{B as x}from"./index-CFuMsoxH.js";import{E as P}from"./index-F_9Ve2g3.js";const T=6e3;function B(n,s){const t=typeof n=="string"?n:j(n);l.useEffect(()=>{t&&M(t,s)},[t,s])}function U({className:n,children:s,spokenMessage:t=s,politeness:N="polite",actions:o=[],onRemove:i,icon:f=null,explicitDismiss:e=!1,onDismiss:p,listRef:g},v){function d(a){a&&a.preventDefault&&a.preventDefault(),g?.current?.focus(),p?.(),i?.()}function _(a,r){a.stopPropagation(),i?.(),r&&r(a)}B(t,N);const u=l.useRef({onDismiss:p,onRemove:i});l.useLayoutEffect(()=>{u.current={onDismiss:p,onRemove:i}}),l.useEffect(()=>{const a=setTimeout(()=>{e||(u.current.onDismiss?.(),u.current.onRemove?.())},T);return()=>clearTimeout(a)},[e]);const I=h(n,"components-snackbar",{"components-snackbar-explicit-dismiss":!!e});o&&o.length>1&&(o=[o[0]]);const E=h("components-snackbar__content",{"components-snackbar__content-with-icon":!!f});return c("div",{ref:v,className:I,onClick:e?void 0:d,tabIndex:0,role:e?void 0:"button",onKeyPress:e?void 0:d,"aria-label":e?void 0:y("Dismiss this notice"),"data-testid":"snackbar",children:C("div",{className:E,children:[f&&c("div",{className:"components-snackbar__icon",children:f}),s,o.map(({label:a,onClick:r,url:b,openInNewTab:w=!1},m)=>b!==void 0&&w?c(P,{href:b,onClick:k=>_(k,r),className:"components-snackbar__action",children:a},m):c(x,{__next40pxDefaultSize:!0,href:b,variant:"link",onClick:k=>_(k,r),className:"components-snackbar__action",children:a},m)),e&&c("span",{role:"button","aria-label":y("Dismiss this notice"),tabIndex:0,className:"components-snackbar__dismiss-button",onClick:d,onKeyPress:d,children:"✕"})]})})}const S=l.forwardRef(U);try{S.displayName="Snackbar",S.__docgenInfo={description:`A Snackbar displays a succinct message that is cleared out after a small delay.

It can also offer the user options, like viewing a published post.
But these options should also be available elsewhere in the UI.

\`\`\`jsx
const MySnackbarNotice = () => (
  <Snackbar>Post published successfully.</Snackbar>
);
\`\`\``,displayName:"Snackbar",props:{}}}catch{}try{snackbar.displayName="snackbar",snackbar.__docgenInfo={description:`A Snackbar displays a succinct message that is cleared out after a small delay.

It can also offer the user options, like viewing a published post.
But these options should also be available elsewhere in the UI.

\`\`\`jsx
const MySnackbarNotice = () => (
  <Snackbar>Post published successfully.</Snackbar>
);
\`\`\``,displayName:"snackbar",props:{}}}catch{}export{S};
