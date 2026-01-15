import{j as n}from"./iframe-2TvY6Iig.js";import{a as r,F as s}from"./context-DbMhvW6o.js";import{c}from"./use-context-system-GBkKyJuM.js";import{V as d}from"./component-DATVQiJy.js";function u(e,i){const{children:a,isColumn:l,...o}=r(e);return n(s.Provider,{value:{flexItemDisplay:l?"block":void 0},children:n(d,{...o,ref:i,children:a})})}const t=c(u,"Flex");try{t.displayName="Flex",t.__docgenInfo={description:`\`Flex\` is a primitive layout component that adaptively aligns child content
horizontally or vertically. \`Flex\` powers components like \`HStack\` and
\`VStack\`.

\`Flex\` is used with any of its two sub-components, \`FlexItem\` and
\`FlexBlock\`.

\`\`\`jsx
import { Flex, FlexBlock, FlexItem } from '@wordpress/components';

function Example() {
  return (
    <Flex>
      <FlexItem>
        <p>Code</p>
      </FlexItem>
      <FlexBlock>
        <p>Poetry</p>
      </FlexBlock>
    </Flex>
  );
}
\`\`\``,displayName:"Flex",props:{align:{defaultValue:{value:"'center'"},description:"Aligns children using CSS Flexbox `align-items`. Vertically aligns\ncontent if the `direction` is `row`, or horizontally aligns content if\nthe `direction` is `column`.",name:"align",required:!1,type:{name:"AlignItems"}},direction:{defaultValue:{value:"'row'"},description:"The direction flow of the children content can be adjusted with\n`direction`. `column` will align children vertically and `row` will align\nchildren horizontally.",name:"direction",required:!1,type:{name:"FlexDirection"}},expanded:{defaultValue:{value:"true"},description:`Expands to the maximum available width (if horizontal) or height (if
vertical).`,name:"expanded",required:!1,type:{name:"boolean"}},gap:{defaultValue:{value:"2"},description:`Spacing in between each child can be adjusted by using \`gap\`.

Can either be a number (which will act as a multiplier to the library's
grid system base of 4px), or a literal CSS value string.`,name:"gap",required:!1,type:{name:"SpaceInput"}},justify:{defaultValue:{value:"'space-between'"},description:"Horizontally aligns content if the `direction` is `row`, or vertically\naligns content if the `direction` is `column`.",name:"justify",required:!1,type:{name:"JustifyContent"}},wrap:{defaultValue:{value:"false"},description:"Determines if children should wrap.",name:"wrap",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"The children elements.",name:"children",required:!0,type:{name:"ReactNode"}},isReversed:{defaultValue:null,description:"@deprecated",name:"isReversed",required:!1,type:{name:"boolean"}},as:{defaultValue:null,description:"The HTML element or React component to render the component as.",name:"as",required:!1,type:{name:'"symbol" | "object" | "select" | "a" | "abbr" | "address" | "area" | "article" | "aside" | "audio" | "b" | "base" | "bdi" | "bdo" | "big" | "blockquote" | "body" | "br" | "button" | ... 516 more ... | ("view" & FunctionComponent<...>)'}}}}}catch{}export{t as F};
