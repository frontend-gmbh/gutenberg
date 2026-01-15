import{r as i,j as a,f as g}from"./iframe-2TvY6Iig.js";import{s as L}from"./serialize-BIFBHZij.js";import{u as M}from"./index-CLatOAvg.js";import{u as B}from"./index-CyG_0K-K.js";import"./preload-helper-Zf8nSx-t.js";import"./is-plain-object-BJ3z7EOF.js";import"./index-COZNoWH5.js";import"./index-CK8hcbFu.js";import"./index-DDuNjadK.js";const H=function(){const{MutationObserver:t}=window;if(!t||!document.body||!window.parent)return;function n(){const e=document.body.getBoundingClientRect();window.parent.postMessage({action:"resize",width:e.width,height:e.height},"*")}new t(n).observe(document.body,{attributes:!0,attributeOldValue:!1,characterData:!0,characterDataOldValue:!1,childList:!0,subtree:!0}),window.addEventListener("load",n,!0);function d(e){e.style&&["width","height","minHeight","maxHeight"].forEach(function(p){/^\\d+(vw|vh|svw|lvw|dvw|svh|lvh|dvh|vi|svi|lvi|dvi|vb|svb|lvb|dvb|vmin|svmin|lvmin|dvmin|vmax|svmax|lvmax|dvmax)$/.test(e.style[p])&&(e.style[p]="")})}Array.prototype.forEach.call(document.querySelectorAll("[style]"),d),Array.prototype.forEach.call(document.styleSheets,function(e){Array.prototype.forEach.call(e.cssRules||e.rules,d)}),document.body.style.position="absolute",document.body.style.width="100%",document.body.setAttribute("data-resizable-iframe-connected",""),n(),window.addEventListener("resize",n,!0)},V=`
	body {
		margin: 0;
	}
	html,
	body,
	body > div {
		width: 100%;
	}
	html.wp-has-aspect-ratio,
	body.wp-has-aspect-ratio,
	body.wp-has-aspect-ratio > div,
	body.wp-has-aspect-ratio > div iframe {
		width: 100%;
		height: 100%;
		overflow: hidden; /* If it has an aspect ratio, it shouldn't scroll. */
	}
	body > div > * {
		margin-top: 0 !important; /* Has to have !important to override inline styles. */
		margin-bottom: 0 !important;
	}
`;function b({html:t="",title:n="",type:f,styles:d=[],scripts:e=[],onFocus:p,tabIndex:w}){const c=i.useRef(),[S,x]=i.useState(0),[_,E]=i.useState(0);function T(){try{return!!c.current?.contentDocument?.body}catch{return!1}}function h(l=!1){if(!T())return;const{contentDocument:o,ownerDocument:m}=c.current;if(!l&&o?.body.getAttribute("data-resizable-iframe-connected")!==null)return;const y=g("html",{lang:m.documentElement.lang,className:f,children:[g("head",{children:[a("title",{children:n}),a("style",{dangerouslySetInnerHTML:{__html:V}}),d.map((r,v)=>a("style",{dangerouslySetInnerHTML:{__html:r}},v))]}),g("body",{"data-resizable-iframe-connected":"data-resizable-iframe-connected",className:f,children:[a("div",{dangerouslySetInnerHTML:{__html:t}}),a("script",{type:"text/javascript",dangerouslySetInnerHTML:{__html:`(${H.toString()})();`}}),e.map(r=>a("script",{src:r},r))]})]});o.open(),o.write("<!DOCTYPE html>"+L(y)),o.close()}return i.useEffect(()=>{h();function l(){h(!1)}function o(r){const v=c.current;if(!v||v.contentWindow!==r.source)return;let s=r.data||{};if(typeof s=="string")try{s=JSON.parse(s)}catch{}s.action==="resize"&&(x(s.width),E(s.height))}const m=c.current,y=m?.ownerDocument?.defaultView;return m?.addEventListener("load",l,!1),y?.addEventListener("message",o),()=>{m?.removeEventListener("load",l,!1),y?.removeEventListener("message",o)}},[]),i.useEffect(()=>{h()},[n,d,e]),i.useEffect(()=>{h(!0)},[t,f]),a("iframe",{ref:M([c,B()]),title:n,tabIndex:w,className:"components-sandbox",sandbox:"allow-scripts allow-same-origin allow-presentation",onFocus:p,width:Math.ceil(S),height:Math.ceil(_)})}try{b.displayName="SandBox",b.__docgenInfo={description:`This component provides an isolated environment for arbitrary HTML via iframes.

\`\`\`jsx
import { SandBox } from '@wordpress/components';

const MySandBox = () => (
	<SandBox html="<p>Content</p>" title="SandBox" type="embed" />
);
\`\`\``,displayName:"SandBox",props:{html:{defaultValue:{value:""},description:"The HTML to render in the body of the iframe document.",name:"html",required:!1,type:{name:"string"}},title:{defaultValue:{value:""},description:"The `<title>` of the iframe document.",name:"title",required:!1,type:{name:"string"}},type:{defaultValue:null,description:"The CSS class name to apply to the `<html>` and `<body>` elements of the iframe.",name:"type",required:!1,type:{name:"string"}},styles:{defaultValue:{value:"[]"},description:"An array of CSS strings to inject into the `<head>` of the iframe document.",name:"styles",required:!1,type:{name:"string[]"}},scripts:{defaultValue:{value:"[]"},description:"An array of script URLs to inject as `<script>` tags into the bottom of the `<body>` of the iframe document.",name:"scripts",required:!1,type:{name:"string[]"}},onFocus:{defaultValue:null,description:"The `onFocus` callback for the iframe.",name:"onFocus",required:!1,type:{name:"FocusEventHandler<HTMLIFrameElement>"}},tabIndex:{defaultValue:{value:"0"},description:"The `tabindex` the iframe should receive.",name:"tabIndex",required:!1,type:{name:"number"}}}}}catch{}const{fn:z}=__STORYBOOK_MODULE_TEST__,k={component:b,title:"Components/Utilities/SandBox",id:"components-sandbox",argTypes:{onFocus:{control:!1}},args:{onFocus:z()},parameters:{controls:{expanded:!0},docs:{canvas:{sourceState:"shown"}}}},A=t=>a(b,{...t}),u=A.bind({});u.args={html:"<p>Arbitrary HTML content</p>"};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:"args => <SandBox {...args} />",...u.parameters?.docs?.source}}};export{u as Default,k as default};
