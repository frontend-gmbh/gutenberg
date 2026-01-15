import{j as o}from"./iframe-2TvY6Iig.js";import{u as r,c as l}from"./use-context-system-GBkKyJuM.js";import{u as s}from"./hook-D_MMjSqd.js";import{V as c}from"./component-DATVQiJy.js";function d(e){const{expanded:t=!1,alignment:n="stretch",...i}=r(e,"VStack");return s({direction:"column",expanded:t,alignment:n,...i})}function u(e,t){const n=d(e);return o(c,{...n,ref:t})}const a=l(u,"VStack");try{a.displayName="VStack",a.__docgenInfo={description:`\`VStack\` (or Vertical Stack) is a layout component that arranges child
elements in a vertical line.

\`VStack\` can render anything inside.

\`\`\`jsx
import {
	__experimentalText as Text,
	__experimentalVStack as VStack,
} from \`@wordpress/components\`;

function Example() {
	return (
		<VStack>
			<Text>Code</Text>
			<Text>is</Text>
			<Text>Poetry</Text>
		</VStack>
	);
}
\`\`\``,displayName:"VStack",props:{children:{defaultValue:null,description:"The children elements.",name:"children",required:!0,type:{name:"ReactNode"}},direction:{defaultValue:{value:"'row'"},description:"The direction flow of the children content can be adjusted with\n`direction`. `column` will align children vertically and `row` will align\nchildren horizontally.",name:"direction",required:!1,type:{name:"FlexDirection"}},wrap:{defaultValue:{value:"false"},description:"Determines if children should wrap.",name:"wrap",required:!1,type:{name:"boolean"}},justify:{defaultValue:{value:"'space-between'"},description:"Horizontally aligns content if the `direction` is `row`, or vertically\naligns content if the `direction` is `column`.",name:"justify",required:!1,type:{name:"JustifyContent"}},expanded:{defaultValue:{value:"true"},description:`Expands to the maximum available width (if horizontal) or height (if
vertical).`,name:"expanded",required:!1,type:{name:"boolean"}},isReversed:{defaultValue:null,description:"@deprecated",name:"isReversed",required:!1,type:{name:"boolean"}},alignment:{defaultValue:{value:"'stretch'"},description:"Determines how the child elements are aligned.\n\n-   `top`: Aligns content to the top.\n-   `topLeft`: Aligns content to the top/left.\n-   `topRight`: Aligns content to the top/right.\n-   `left`: Aligns content to the left.\n-   `center`: Aligns content to the center.\n-   `right`: Aligns content to the right.\n-   `bottom`: Aligns content to the bottom.\n-   `bottomLeft`: Aligns content to the bottom/left.\n-   `bottomRight`: Aligns content to the bottom/right.\n-   `edge`: Justifies content to be evenly spread out up to the main axis edges of the container.\n-   `stretch`: Stretches content to the cross axis edges of the container.",name:"alignment",required:!1,type:{name:'"center" | "end" | "start" | (string & {}) | "baseline" | "inherit" | "initial" | "left" | "right" | "bottom" | "top" | "-moz-initial" | "revert" | "revert-layer" | "unset" | "stretch" | ... 10 more ... | "topRight"'}},spacing:{defaultValue:null,description:"The amount of space between each child element. Spacing in between each\nchild can be adjusted by using `spacing`. The value of `spacing` works as\na multiplier to the library's grid system (base of `4px`).",name:"spacing",required:!1,type:{name:"Width<string | number>"}},as:{defaultValue:null,description:"The HTML element or React component to render the component as.",name:"as",required:!1,type:{name:'"symbol" | "object" | "select" | "a" | "abbr" | "address" | "area" | "article" | "aside" | "audio" | "b" | "base" | "bdi" | "bdo" | "big" | "blockquote" | "body" | "br" | "button" | ... 516 more ... | ("view" & FunctionComponent<...>)'}}}}}catch{}export{a as V};
