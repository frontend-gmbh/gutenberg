import{e as p,r as w,j as t,f as u}from"./iframe-2TvY6Iig.js";import{g as V}from"./get-valid-children-BTY2hlyh.js";import{c as d}from"./emotion-react.browser.esm-T2caqgd_.js";import{c as _,u as R}from"./use-context-system-GBkKyJuM.js";import{V as m}from"./component-DATVQiJy.js";import{E as I}from"./component-C8WFlLnR.js";import"./preload-helper-Zf8nSx-t.js";import"./index-DUXT-3wK.js";import"./is-plain-object-BJ3z7EOF.js";import"./index-BtJmv7lM.js";import"./index-CK8hcbFu.js";import"./values-CtPxXHrl.js";import"./config-values-CkVNYk_w.js";import"./colors-values-BSq3yUT9.js";const f=p("div",{target:"ebn2ljm1"})("&:not( :first-of-type ){",({offsetAmount:e})=>d({marginInlineStart:e},"",""),";}",({zIndex:e})=>d({zIndex:e},"",""),";");var L={name:"rs0gp6",styles:"grid-row-start:1;grid-column-start:1"};const j=p("div",{target:"ebn2ljm0"})("display:inline-grid;grid-auto-flow:column;position:relative;&>",f,"{position:relative;justify-self:start;",({isLayered:e})=>e?L:void 0,";}");function E(e,g){const{children:h,className:b,isLayered:i=!0,isReversed:k=!1,offset:l=0,...v}=R(e,"ZStack"),c=V(h),y=c.length-1,x=c.map((s,r)=>{const S=k?y-r:r,Z=i?l*r:l,C=w.isValidElement(s)?s.key:r;return t(f,{offsetAmount:Z,zIndex:S,children:s},C)});return t(j,{...v,className:b,isLayered:i,ref:g,children:x})}const n=_(E,"ZStack");try{n.displayName="ZStack",n.__docgenInfo={description:`\`ZStack\` allows you to stack things along the Z-axis.

\`\`\`jsx
import { __experimentalZStack as ZStack } from '@wordpress/components';

function Example() {
  return (
    <ZStack offset={ 20 } isLayered>
      <ExampleImage />
      <ExampleImage />
      <ExampleImage />
    </ZStack>
  );
}
\`\`\``,displayName:"ZStack",props:{isLayered:{defaultValue:{value:"true"},description:`Layers children elements on top of each other (first: highest z-index,
last: lowest z-index).`,name:"isLayered",required:!1,type:{name:"boolean"}},isReversed:{defaultValue:{value:"false"},description:`Reverse the layer ordering (first: lowest z-index, last: highest
z-index).`,name:"isReversed",required:!1,type:{name:"boolean"}},offset:{defaultValue:{value:"0"},description:`The amount of space between each child element. Its value is
automatically inverted (i.e. from positive to negative, and viceversa)
when switching from LTR to RTL.`,name:"offset",required:!1,type:{name:"number"}},children:{defaultValue:null,description:"The children to stack.",name:"children",required:!0,type:{name:"ReactNode"}},as:{defaultValue:null,description:"The HTML element or React component to render the component as.",name:"as",required:!1,type:{name:'"symbol" | "object" | "select" | "a" | "abbr" | "address" | "area" | "article" | "aside" | "audio" | "b" | "base" | "bdi" | "bdo" | "big" | "blockquote" | "body" | "br" | "button" | ... 516 more ... | ("view" & FunctionComponent<...>)'}}}}}catch{}const O={component:n,title:"Components/ZStack",argTypes:{as:{control:{type:"text"}},children:{control:!1}},tags:["status-experimental"],parameters:{controls:{expanded:!0},docs:{canvas:{sourceState:"shown"}}}},o=({backgroundColor:e})=>u(m,{children:[t(m,{style:{border:"3px solid black",borderRadius:"9999px",height:"48px",width:"48px",backgroundColor:e}}),t(I,{borderRadius:9999,isInteractive:!1,value:3})]}),T=e=>u(n,{...e,children:[t(o,{backgroundColor:"#444"}),t(o,{backgroundColor:"#777"}),t(o,{backgroundColor:"#aaa"}),t(o,{backgroundColor:"#fff"})]}),a=T.bind({});a.args={offset:20};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`args => {
  return <ZStack {...args}>
            <Avatar backgroundColor="#444" />
            <Avatar backgroundColor="#777" />
            <Avatar backgroundColor="#aaa" />
            <Avatar backgroundColor="#fff" />
        </ZStack>;
}`,...a.parameters?.docs?.source}}};export{a as Default,O as default};
