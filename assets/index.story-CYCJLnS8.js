import{r as p,e as L,j as _,c as h,f as j}from"./iframe-2TvY6Iig.js";import{R as H}from"./index-nm5ER-3l.js";import{i as $}from"./default-i18n-SWt35ZM4.js";import{u as M}from"./index-DCGL3fHb.js";import{T as B}from"./component-DEBvv9-v.js";import{C as T}from"./colors-values-BSq3yUT9.js";import{C as U}from"./config-values-CkVNYk_w.js";import{f as q}from"./font-Cck9kG94.js";import"./preload-helper-Zf8nSx-t.js";import"./index-Di3oHLN4.js";import"./hook-D7E4jAJ2.js";import"./emotion-react.browser.esm-T2caqgd_.js";import"./names-BarMHYgS.js";import"./index-CWa7Pedq.js";import"./space-CjrGwnR-.js";import"./use-context-system-GBkKyJuM.js";import"./index-DUXT-3wK.js";import"./is-plain-object-BJ3z7EOF.js";import"./index-BtJmv7lM.js";import"./index-CK8hcbFu.js";import"./hook-CHurV6sy.js";import"./values-CtPxXHrl.js";import"./component-DATVQiJy.js";const P=()=>{},g={bottom:"bottom",corner:"corner"};function Y({axis:e,fadeTimeout:t=180,onResize:o=P,position:r=g.bottom,showPx:l=!1}){const[a,i]=M(),n=!!e,[s,b]=p.useState(!1),[C,x]=p.useState(!1),{width:c,height:d}=i,R=p.useRef(d),S=p.useRef(c),E=p.useRef(),A=p.useCallback(()=>{const N=()=>{n||(b(!1),x(!1))};E.current&&window.clearTimeout(E.current),E.current=window.setTimeout(N,t)},[t,n]);return p.useEffect(()=>{if(!(c!==null||d!==null))return;const D=c!==S.current,O=d!==R.current;if(!(!D&&!O)){if(c&&!S.current&&d&&!R.current){S.current=c,R.current=d;return}D&&(b(!0),S.current=c),O&&(x(!0),R.current=d),o({width:c,height:d}),A()}},[c,d,o,A]),{label:W({axis:e,height:d,moveX:s,moveY:C,position:r,showPx:l,width:c}),resizeListener:a}}function W({axis:e,height:t,moveX:o=!1,moveY:r=!1,position:l=g.bottom,showPx:a=!1,width:i}){if(!o&&!r)return;if(l===g.corner)return`${i} x ${t}`;const n=a?" px":"";if(e){if(e==="x"&&o)return`${i}${n}`;if(e==="y"&&r)return`${t}${n}`}if(o&&r)return`${i} x ${t}`;if(o)return`${i}${n}`;if(r)return`${t}${n}`}const G=L("div",{target:"e1wq7y4k3"})({name:"1cd7zoc",styles:"bottom:0;box-sizing:border-box;left:0;pointer-events:none;position:absolute;right:0;top:0"}),V=L("div",{target:"e1wq7y4k2"})({name:"ajymcs",styles:"align-items:center;box-sizing:border-box;display:inline-flex;justify-content:center;opacity:0;pointer-events:none;transition:opacity 120ms linear"}),X=L("div",{target:"e1wq7y4k1"})("background:",T.theme.foreground,";border-radius:",U.radiusSmall,";box-sizing:border-box;font-family:",q("default.fontFamily"),";font-size:12px;color:",T.theme.foregroundInverted,";padding:4px 8px;position:relative;"),J=L(B,{target:"e1wq7y4k0"})("&&&{color:",T.theme.foregroundInverted,";display:block;font-size:13px;line-height:1.4;white-space:nowrap;}"),v=4,K=v*2.5;function Q({label:e,position:t=g.corner,zIndex:o=1e3,...r},l){const a=!!e,i=t===g.bottom,n=t===g.corner;if(!a)return null;let s={opacity:a?1:void 0,zIndex:o},b={};return i&&(s={...s,position:"absolute",bottom:K*-1,left:"50%",transform:"translate(-50%, 0)"},b={transform:"translate(0, 100%)"}),n&&(s={...s,position:"absolute",top:v,right:$()?void 0:v,left:$()?v:void 0}),_(V,{"aria-hidden":"true",className:"components-resizable-tooltip__tooltip-wrapper",ref:l,style:s,...r,children:_(X,{className:"components-resizable-tooltip__tooltip",style:b,children:_(J,{as:"span",children:e})})})}const Z=p.forwardRef(Q),ee=()=>{};function te({axis:e,className:t,fadeTimeout:o=180,isVisible:r=!0,labelRef:l,onResize:a=ee,position:i=g.bottom,showPx:n=!0,zIndex:s=1e3,...b},C){const{label:x,resizeListener:c}=Y({axis:e,fadeTimeout:o,onResize:a,showPx:n,position:i});if(!r)return null;const d=h("components-resize-tooltip",t);return j(G,{"aria-hidden":"true",className:d,ref:C,...b,children:[c,_(Z,{"aria-hidden":b["aria-hidden"],label:x,position:i,ref:l,zIndex:s})]})}const oe=p.forwardRef(te),m="components-resizable-box__handle",w="components-resizable-box__side-handle",y="components-resizable-box__corner-handle",I={top:h(m,w,"components-resizable-box__handle-top"),right:h(m,w,"components-resizable-box__handle-right"),bottom:h(m,w,"components-resizable-box__handle-bottom"),left:h(m,w,"components-resizable-box__handle-left"),topLeft:h(m,y,"components-resizable-box__handle-top","components-resizable-box__handle-left"),topRight:h(m,y,"components-resizable-box__handle-top","components-resizable-box__handle-right"),bottomRight:h(m,y,"components-resizable-box__handle-bottom","components-resizable-box__handle-right"),bottomLeft:h(m,y,"components-resizable-box__handle-bottom","components-resizable-box__handle-left")},f={width:void 0,height:void 0,top:void 0,right:void 0,bottom:void 0,left:void 0},ne={top:f,right:f,bottom:f,left:f,topLeft:f,topRight:f,bottomRight:f,bottomLeft:f};function re({className:e,children:t,showHandle:o=!0,__experimentalShowTooltip:r=!1,__experimentalTooltipProps:l={},...a},i){return j(H,{className:h("components-resizable-box__container",o&&"has-show-handle",e),handleComponent:Object.fromEntries(Object.keys(I).map(n=>[n,_("div",{tabIndex:-1},n)])),handleClasses:I,handleStyles:ne,ref:i,...a,children:[t,r&&_(oe,{...l})]})}const k=p.forwardRef(re),Te={title:"Components/Utilities/ResizableBox",id:"components-resizablebox",component:k,argTypes:{children:{control:!1},enable:{control:"object"},onResizeStop:{action:"onResizeStop"}},parameters:{controls:{expanded:!0},docs:{canvas:{sourceState:"shown"}}}},F=({onResizeStop:e,...t})=>{const[{height:o,width:r},l]=p.useState({height:200,width:400});return _(k,{...t,size:{height:o,width:r},onResizeStop:(a,i,n,s)=>{e?.(a,i,n,s),l({height:o+s.height,width:r+s.width})}})},z=F.bind({});z.args={children:_("div",{style:{background:"#eee",display:"flex",height:"100%",width:"100%",alignItems:"center",justifyContent:"center"},children:"Resize"})};const u=F.bind({});u.args={...z.args,enable:{top:!1,right:!0,bottom:!0,left:!1,topRight:!1,bottomRight:!0,bottomLeft:!1,topLeft:!1}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`({
  onResizeStop,
  ...props
}) => {
  const [{
    height,
    width
  }, setAttributes] = useState({
    height: 200,
    width: 400
  });
  return <ResizableBox {...props} size={{
    height,
    width
  }} onResizeStop={(event, direction, elt, delta) => {
    onResizeStop?.(event, direction, elt, delta);
    setAttributes({
      height: height + delta.height,
      width: width + delta.width
    });
  }} />;
}`,...z.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`({
  onResizeStop,
  ...props
}) => {
  const [{
    height,
    width
  }, setAttributes] = useState({
    height: 200,
    width: 400
  });
  return <ResizableBox {...props} size={{
    height,
    width
  }} onResizeStop={(event, direction, elt, delta) => {
    onResizeStop?.(event, direction, elt, delta);
    setAttributes({
      height: height + delta.height,
      width: width + delta.width
    });
  }} />;
}`,...u.parameters?.docs?.source},description:{story:"The `enable` prop can be used to disable resizing in specific directions.",...u.parameters?.docs?.description}}};try{u.displayName="DisabledDirections",u.__docgenInfo={description:"The `enable` prop can be used to disable resizing in specific directions.",displayName:"DisabledDirections",props:{}}}catch{}export{z as Default,u as DisabledDirections,Te as default};
