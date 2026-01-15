import{e as p,r as g,f as d,j as o,F as f}from"./iframe-2TvY6Iig.js";import{i as b,a as w}from"./default-i18n-SWt35ZM4.js";import{c as _,k as y}from"./emotion-react.browser.esm-T2caqgd_.js";import{C as i}from"./config-values-CkVNYk_w.js";import{C as m}from"./colors-values-BSq3yUT9.js";import"./preload-helper-Zf8nSx-t.js";function v(e=!1){const t=e?"right":"left";return y({"0%":{[t]:"-50%"},"100%":{[t]:"100%"}})}const C=50,x=p("div",{target:"e15u147w2"})("position:relative;overflow:hidden;height:",i.borderWidthFocus,`;background-color:color-mix(
		in srgb,
		`,m.theme.foreground,`,
		transparent 90%
	);border-radius:`,i.radiusFull,";outline:2px solid transparent;outline-offset:2px;:where( & ){width:160px;}");var S={name:"152sa26",styles:"width:var(--indicator-width);transition:width 0.4s ease-in-out"};const N=p("div",{target:"e15u147w1"})("display:inline-block;position:absolute;top:0;height:100%;border-radius:",i.radiusFull,`;background-color:color-mix(
		in srgb,
		`,m.theme.foreground,`,
		transparent 10%
	);outline:2px solid transparent;outline-offset:-2px;`,({isIndeterminate:e})=>e?_({animationDuration:"1.5s",animationTimingFunction:"ease-in-out",animationIterationCount:"infinite",animationName:v(b()),width:`${C}%`},"",""):S,";"),P=p("progress",{target:"e15u147w0"})({name:"11fb690",styles:"position:absolute;top:0;left:0;opacity:0;width:100%;height:100%"});function k(e,t){const{className:h,value:a,...u}=e,c=!Number.isFinite(a);return d(x,{className:h,children:[o(N,{style:{"--indicator-width":c?void 0:`${a}%`},isIndeterminate:c}),o(P,{max:100,value:a,"aria-label":w("Loading …"),ref:t,...u})]})}const n=g.forwardRef(k);try{n.displayName="ProgressBar",n.__docgenInfo={description:`A simple horizontal progress bar component.

Supports two modes: determinate and indeterminate. A progress bar is determinate
when a specific progress value has been specified (from 0 to 100), and indeterminate
when a value hasn't been specified.

\`\`\`jsx
import { ProgressBar } from '@wordpress/components';

const MyLoadingComponent = () => {
	return <ProgressBar />;
};
\`\`\``,displayName:"ProgressBar",props:{}}}catch{}try{progressbar.displayName="progressbar",progressbar.__docgenInfo={description:`A simple horizontal progress bar component.

Supports two modes: determinate and indeterminate. A progress bar is determinate
when a specific progress value has been specified (from 0 to 100), and indeterminate
when a value hasn't been specified.

\`\`\`jsx
import { ProgressBar } from '@wordpress/components';

const MyLoadingComponent = () => {
	return <ProgressBar />;
};
\`\`\``,displayName:"progressbar",props:{}}}catch{}const D={component:n,title:"Components/Feedback/ProgressBar",id:"components-progressbar",argTypes:{value:{control:{type:"number",min:0,max:100,step:1}}},parameters:{controls:{expanded:!0},docs:{canvas:{sourceState:"shown"}}}},l=({...e})=>o(n,{...e}),s=l.bind({});s.args={};const T=`
    .custom-progress-bar {
        width: 100%;
    }
`,r=l.bind({});r.args={className:"custom-progress-bar"};r.decorators=[e=>d(f,{children:[o("style",{children:T}),o(e,{})]})];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`({
  ...args
}) => {
  return <ProgressBar {...args} />;
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`({
  ...args
}) => {
  return <ProgressBar {...args} />;
}`,...r.parameters?.docs?.source},description:{story:"A progress bar with a custom width.\n\nYou can override the default `width` by passing a custom CSS class via the\n`className` prop.\n\nThis example shows a progress bar with an overridden `width` of `100%` which\nmakes it fit all available horizontal space of the parent element. The CSS\nclass looks like this:\n\n```css\n.custom-progress-bar {\n  width: 100%;\n}\n```",...r.parameters?.docs?.description}}};try{r.displayName="WithCustomWidth",r.__docgenInfo={description:"A progress bar with a custom width.\n\nYou can override the default `width` by passing a custom CSS class via the\n`className` prop.\n\nThis example shows a progress bar with an overridden `width` of `100%` which\nmakes it fit all available horizontal space of the parent element. The CSS\nclass looks like this:\n\n```css\n.custom-progress-bar {\n  width: 100%;\n}\n```",displayName:"WithCustomWidth",props:{}}}catch{}export{s as Default,r as WithCustomWidth,D as default};
