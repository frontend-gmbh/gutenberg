import{e as d,j as a}from"./iframe-2TvY6Iig.js";import{c as n}from"./emotion-react.browser.esm-T2caqgd_.js";import{s as i}from"./space-CjrGwnR-.js";import{r as m}from"./rtl-C-j_aU_R.js";import{c,u}from"./use-context-system-GBkKyJuM.js";import{S as p}from"./A3CZKICO-_ze9_0UX.js";const o={vertical:{start:"marginLeft",end:"marginRight"},horizontal:{start:"marginTop",end:"marginBottom"}},f=({"aria-orientation":e="horizontal",margin:t,marginStart:r,marginEnd:s})=>n(m({[o[e].start]:i(r??t),[o[e].end]:i(s??t)})(),"","");var h={name:"1u4hpl4",styles:"display:inline"};const g=({"aria-orientation":e="horizontal"})=>e==="vertical"?h:void 0,v=({"aria-orientation":e="horizontal"})=>n({[e==="vertical"?"borderRight":"borderBottom"]:"1px solid currentColor"},"",""),y=({"aria-orientation":e="horizontal"})=>n({height:e==="vertical"?"auto":0,width:e==="vertical"?0:"auto"},"",""),S=d("hr",{target:"e19on6iw0"})("border:0;margin:0;",g," ",v," ",y," ",f,";");function x(e,t){const r=u(e,"Divider");return a(p,{render:a(S,{}),...r,ref:t})}const l=c(x,"Divider");try{l.displayName="Divider",l.__docgenInfo={description:`\`Divider\` is a layout component that separates groups of related content.

\`\`\`js
import {
		__experimentalDivider as Divider,
		__experimentalText as Text,
		__experimentalVStack as VStack,
} from \`@wordpress/components\`;

function Example() {
	return (
		<VStack spacing={4}>
			<Text>Some text here</Text>
			<Divider />
			<Text>Some more text here</Text>
		</VStack>
	);
}
\`\`\``,displayName:"Divider",props:{ref:{defaultValue:null,description:"Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref).\n@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs}",name:"ref",required:!1,type:{name:"Ref<HTMLHRElement> & LegacyRef<any>"}},wrapElement:{defaultValue:null,description:"",name:"wrapElement",required:!1,type:{name:"WrapElement"}},margin:{defaultValue:null,description:`Adjusts all margins on the inline dimension.

Can either be a number (which will act as a multiplier to the library's grid system base of 4px),
or a literal CSS value string.`,name:"margin",required:!1,type:{name:"SpaceInput"}},marginEnd:{defaultValue:null,description:`Adjusts the inline-end margin.

Can either be a number (which will act as a multiplier to the library's grid system base of 4px),
or a literal CSS value string.`,name:"marginEnd",required:!1,type:{name:"SpaceInput"}},marginStart:{defaultValue:null,description:`Adjusts the inline-start margin.

Can either be a number (which will act as a multiplier to the library's grid system base of 4px),
or a literal CSS value string.`,name:"marginStart",required:!1,type:{name:"SpaceInput"}},orientation:{defaultValue:{value:"'horizontal'"},description:"Divider's orientation. When using inside a flex container, you may need\nto make sure the divider is `stretch` aligned in order for it to be\nvisible.",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}}}}}catch{}export{l as D};
