import{r as i,j as b}from"./iframe-2TvY6Iig.js";import{c as m}from"./emotion-react.browser.esm-T2caqgd_.js";import{C as r}from"./config-values-CkVNYk_w.js";import{u as d,a as u,c as p}from"./use-context-system-GBkKyJuM.js";import{V as h}from"./component-DATVQiJy.js";const f=m("@media only screen and ( min-device-width: 40em ){&::-webkit-scrollbar{height:12px;width:12px;}&::-webkit-scrollbar-track{background-color:transparent;}&::-webkit-scrollbar-track{background:",r.colorScrollbarTrack,";border-radius:8px;}&::-webkit-scrollbar-thumb{background-clip:padding-box;background-color:",r.colorScrollbarThumb,";border:2px solid rgba( 0, 0, 0, 0 );border-radius:7px;}&:hover::-webkit-scrollbar-thumb{background-color:",r.colorScrollbarThumbHover,";}}",""),y={name:"13udsys",styles:"height:100%"},S={name:"7zq9w",styles:"scroll-behavior:smooth"},x={name:"q33xhg",styles:"overflow-x:auto;overflow-y:hidden"},v={name:"103x71s",styles:"overflow-x:hidden;overflow-y:auto"},w={name:"umwchj",styles:"overflow-y:auto"};function g(o){const{className:l,scrollDirection:e="y",smoothScroll:a=!1,...c}=d(o,"Scrollable"),t=u(),n=i.useMemo(()=>t(y,f,a&&S,e==="x"&&x,e==="y"&&v,e==="auto"&&w,l),[l,t,e,a]);return{...c,className:n}}function k(o,l){const e=g(o);return b(h,{...e,ref:l})}const s=p(k,"Scrollable");try{s.displayName="Scrollable",s.__docgenInfo={description:`\`Scrollable\` is a layout component that content in a scrollable container.

\`\`\`jsx
import { __experimentalScrollable as Scrollable } from \`@wordpress/components\`;

function Example() {
	return (
		<Scrollable style={ { maxHeight: 200 } }>
			<div style={ { height: 500 } }>...</div>
		</Scrollable>
	);
}
\`\`\``,displayName:"Scrollable",props:{children:{defaultValue:null,description:"The children elements.",name:"children",required:!0,type:{name:"ReactNode"}},scrollDirection:{defaultValue:{value:"'y'"},description:"Renders a scrollbar for a specific axis when content overflows.",name:"scrollDirection",required:!1,type:{name:"enum",value:[{value:'"x"'},{value:'"y"'},{value:'"auto"'}]}},smoothScroll:{defaultValue:{value:"false"},description:"Enables (CSS) smooth scrolling.",name:"smoothScroll",required:!1,type:{name:"boolean"}},as:{defaultValue:null,description:"The HTML element or React component to render the component as.",name:"as",required:!1,type:{name:'"symbol" | "object" | "select" | "a" | "abbr" | "address" | "area" | "article" | "aside" | "audio" | "b" | "base" | "bdi" | "bdo" | "big" | "blockquote" | "body" | "br" | "button" | ... 516 more ... | ("view" & FunctionComponent<...>)'}}}}}catch{}export{s as S};
