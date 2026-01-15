import{r as p,j as a,f as C,F as O}from"./iframe-2TvY6Iig.js";import{B as G}from"./index-CFuMsoxH.js";import{c as s}from"./emotion-react.browser.esm-T2caqgd_.js";import{C as z}from"./config-values-CkVNYk_w.js";import{C as W}from"./colors-values-BSq3yUT9.js";import{u as x,a as b,c as w,C as $}from"./use-context-system-GBkKyJuM.js";import{s as l}from"./space-CjrGwnR-.js";import{F as L}from"./component-l_ygUujJ.js";import{V as H}from"./component-DATVQiJy.js";import{D as J}from"./component-DRAq-Cya.js";import{S as Y}from"./component-n7-xKn_M.js";import{d as K}from"./index-BjRskdOB.js";import{u as Q}from"./hook-DMYIploR.js";import{E as j}from"./component-C8WFlLnR.js";import{H as X}from"./component-CSsaRVTa.js";import{T as u}from"./component-DEBvv9-v.js";import"./preload-helper-Zf8nSx-t.js";import"./index-BjXx3EE5.js";import"./index-Dt7LODwq.js";import"./index-1YdoA736.js";import"./cubic-bezier-CfzpfWNY.js";import"./T6C2RYFI-BXv3qAIm.js";import"./LVA2YJMS-Bhv8eVm0.js";import"./LMDWO4NN-CH0ROf0T.js";import"./floating-ui.utils.dom-BlKqeV2W.js";import"./dropdown-motion-BuMQU1CT.js";import"./index-Dnuq8uNu.js";import"./index-BIvJ8ozV.js";import"./component-BGXh8e92.js";import"./index-DUXT-3wK.js";import"./is-plain-object-BJ3z7EOF.js";import"./index-BtJmv7lM.js";import"./index-CK8hcbFu.js";import"./context-DbMhvW6o.js";import"./use-responsive-value-bUbLlkWc.js";import"./rtl-C-j_aU_R.js";import"./default-i18n-SWt35ZM4.js";import"./A3CZKICO-_ze9_0UX.js";import"./values-CtPxXHrl.js";import"./hook-D7E4jAJ2.js";import"./names-BarMHYgS.js";import"./index-CWa7Pedq.js";import"./hook-CHurV6sy.js";const S=`calc(${z.radiusLarge} - 1px)`,Z=s("box-shadow:0 0 0 1px ",z.surfaceBorderColor,";outline:none;",""),ee={name:"1showjb",styles:"border-bottom:1px solid;box-sizing:border-box;&:last-child{border-bottom:none;}"},ae={name:"14n5oej",styles:"border-top:1px solid;box-sizing:border-box;&:first-of-type{border-top:none;}"},re={name:"13udsys",styles:"height:100%"},ne={name:"6ywzd",styles:"box-sizing:border-box;height:auto;max-height:100%"},te={name:"dq805e",styles:"box-sizing:border-box;overflow:hidden;&>img,&>iframe{display:block;height:auto;max-width:100%;width:100%;}"},oe={name:"c990dr",styles:"box-sizing:border-box;display:block;width:100%"},D=s("&:first-of-type{border-top-left-radius:",S,";border-top-right-radius:",S,";}&:last-of-type{border-bottom-left-radius:",S,";border-bottom-right-radius:",S,";}",""),F=s("border-color:",z.colorDivider,";",""),ie={name:"1t90u8d",styles:"box-shadow:none"},A={name:"1e1ncky",styles:"border:none"},de=s("border-radius:",S,";",""),M=s("background-color:",W.ui.backgroundDisabled,";","");function le({elevation:e,isElevated:r,...t}){const n={...t};let o=e;return r&&(K("Card isElevated prop",{since:"5.9",alternative:"elevation"}),o??=2),typeof o<"u"&&(n.elevation=o),n}function se(e){const{className:r,elevation:t=0,isBorderless:n=!1,isRounded:o=!0,size:c="medium",...i}=x(le(e),"Card"),d=b(),y=p.useMemo(()=>d(Z,n&&ie,o&&de,r),[r,d,n,o]);return{...Q({...i,className:y}),elevation:t,isBorderless:n,isRounded:o,size:c}}function ce(e,r){const{children:t,elevation:n,isBorderless:o,isRounded:c,size:i,...d}=se(e),y=c?z.radiusLarge:0,V=b(),N=p.useMemo(()=>V(s({borderRadius:y},"","")),[V,y]),U=p.useMemo(()=>{const R={size:i,isBorderless:o};return{CardBody:R,CardHeader:R,CardFooter:R}},[o,i]);return a($,{value:U,children:C(H,{...d,ref:r,children:[a(H,{className:V(re),children:t}),a(j,{className:N,isInteractive:!1,value:n?1:0}),a(j,{className:N,isInteractive:!1,value:n})]})})}const B=w(ce,"Card");try{B.displayName="Card",B.__docgenInfo={description:`\`Card\` provides a flexible and extensible content container.
\`Card\` also provides a convenient set of sub-components such as \`CardBody\`,
\`CardHeader\`, \`CardFooter\`, and more.

\`\`\`jsx
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  __experimentalText as Text,
  __experimentalHeading as Heading,
} from \`@wordpress/components\`;

function Example() {
  return (
    <Card>
      <CardHeader>
        <Heading level={ 4 }>Card Title</Heading>
      </CardHeader>
      <CardBody>
        <Text>Card Content</Text>
      </CardBody>
      <CardFooter>
        <Text>Card Footer</Text>
      </CardFooter>
    </Card>
  );
}
\`\`\``,displayName:"Card",props:{backgroundSize:{defaultValue:{value:"12"},description:'Determines the grid size for "dotted" and "grid" variants.',name:"backgroundSize",required:!1,type:{name:"number"}},borderBottom:{defaultValue:{value:"false"},description:"Renders a bottom border.",name:"borderBottom",required:!1,type:{name:"boolean"}},borderLeft:{defaultValue:{value:"false"},description:"Renders a left border.",name:"borderLeft",required:!1,type:{name:"boolean"}},borderRight:{defaultValue:{value:"false"},description:"Renders a right border.",name:"borderRight",required:!1,type:{name:"boolean"}},borderTop:{defaultValue:{value:"false"},description:"Renders a top border.",name:"borderTop",required:!1,type:{name:"boolean"}},variant:{defaultValue:{value:"'primary'"},description:"Modifies the background color of `Surface`.\n\n* `primary`: Used for almost all cases.\n* `secondary`: Used as a secondary background for inner `Surface` components.\n* `tertiary`: Used as the app/site wide background. Visible in **dark mode** only. Use case is rare.\n* `grid`: Used to show a grid.\n* `dotted`: Used to show a dots grid.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"grid"'},{value:'"dotted"'},{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}},children:{defaultValue:null,description:"The children elements.",name:"children",required:!0,type:{name:"ReactNode"}},size:{defaultValue:{value:"'medium'"},description:"Determines the amount of padding within the component.",name:"size",required:!1,type:{name:'SizeOptions | "extraSmall"'}},elevation:{defaultValue:{value:"0"},description:"Size of the elevation shadow, based on the Style system's elevation system.\nElevating a `Card` can be done by adjusting the `elevation` prop. This may\nbe helpful in highlighting certain content. For more information, check out\n`Elevation`.",name:"elevation",required:!1,type:{name:"number"}},isBorderless:{defaultValue:{value:"false"},description:"Renders without a border.",name:"isBorderless",required:!1,type:{name:"boolean"}},isRounded:{defaultValue:{value:"true"},description:"Renders with rounded corners.",name:"isRounded",required:!1,type:{name:"boolean"}},isElevated:{defaultValue:{value:"false"},description:`Renders with elevation styles (box shadow).
@deprecated`,name:"isElevated",required:!1,type:{name:"boolean"}},as:{defaultValue:null,description:"The HTML element or React component to render the component as.",name:"as",required:!1,type:{name:'"symbol" | "object" | "select" | "a" | "abbr" | "address" | "area" | "article" | "aside" | "audio" | "b" | "base" | "bdi" | "bdo" | "big" | "blockquote" | "body" | "br" | "button" | ... 516 more ... | ("view" & FunctionComponent<...>)'}}}}}catch{}const P=s("padding:",l(2),";",""),I={none:{name:"1hcx8jb",styles:"padding:0"},large:s("padding:",l(6)," ",l(8),";",""),medium:s("padding:",l(4)," ",l(6),";",""),small:s("padding:",l(4),";",""),xSmall:P,extraSmall:P},q=e=>{switch(e){case"xSmall":return l(2);case"small":return l(4);case"medium":return l(6);case"large":return l(8);case"none":return"0";default:return l(6)}},E=e=>{if(typeof e=="string")return I[e];if(e){const{blockStart:r,blockEnd:t,inlineStart:n,inlineEnd:o}=e;return s("padding-block-start:",q(r),";padding-block-end:",q(t),";padding-inline-start:",q(n),";padding-inline-end:",q(o),";","")}return I.medium};function ue(e){const{className:r,isScrollable:t=!1,isShady:n=!1,size:o="medium",...c}=x(e,"CardBody"),i=b(),d=p.useMemo(()=>i(ne,D,E(o),n&&M,"components-card__body",r),[r,i,n,o]);return{...c,className:d,isScrollable:t}}function me(e,r){const{isScrollable:t,...n}=ue(e);return t?a(Y,{...n,ref:r}):a(H,{...n,ref:r})}const m=w(me,"CardBody");try{m.displayName="CardBody",m.__docgenInfo={description:"`CardBody` renders an optional content area for a `Card`.\nMultiple `CardBody` components can be used within `Card` if needed.\n\n```jsx\nimport { Card, CardBody } from `@wordpress/components`;\n\n<Card>\n	<CardBody>\n		...\n	</CardBody>\n</Card>\n```",displayName:"CardBody",props:{size:{defaultValue:{value:"'medium'"},description:"Determines the amount of padding within the component.",name:"size",required:!1,type:{name:'SizeOptions | "extraSmall"'}},children:{defaultValue:null,description:"The children elements.",name:"children",required:!0,type:{name:"ReactNode"}},isShady:{defaultValue:{value:"false"},description:"Renders with a light gray background color.",name:"isShady",required:!1,type:{name:"boolean"}},isScrollable:{defaultValue:{value:"false"},description:"Determines if the component is scrollable.",name:"isScrollable",required:!1,type:{name:"boolean"}},as:{defaultValue:null,description:"The HTML element or React component to render the component as.",name:"as",required:!1,type:{name:'"symbol" | "object" | "select" | "a" | "abbr" | "address" | "area" | "article" | "aside" | "audio" | "b" | "base" | "bdi" | "bdo" | "big" | "blockquote" | "body" | "br" | "button" | ... 516 more ... | ("view" & FunctionComponent<...>)'}}}}}catch{}function pe(e){const{className:r,...t}=x(e,"CardDivider"),n=b(),o=p.useMemo(()=>n(oe,F,"components-card__divider",r),[r,n]);return{...t,className:o}}function fe(e,r){const t=pe(e);return a(J,{...t,ref:r})}const T=w(fe,"CardDivider");try{T.displayName="CardDivider",T.__docgenInfo={description:"`CardDivider` renders an optional divider within a `Card`.\nIt is typically used to divide multiple `CardBody` components from each other.\n\n```jsx\nimport { Card, CardBody, CardDivider } from `@wordpress/components`;\n\n<Card>\n <CardBody>...</CardBody>\n <CardDivider />\n <CardBody>...</CardBody>\n</Card>\n```",displayName:"CardDivider",props:{ref:{defaultValue:null,description:"Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref).\n@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs}",name:"ref",required:!1,type:{name:"Ref<HTMLHRElement> & LegacyRef<any>"}},wrapElement:{defaultValue:null,description:"",name:"wrapElement",required:!1,type:{name:"WrapElement"}},margin:{defaultValue:null,description:`Adjusts all margins on the inline dimension.

Can either be a number (which will act as a multiplier to the library's grid system base of 4px),
or a literal CSS value string.`,name:"margin",required:!1,type:{name:"SpaceInput"}},marginEnd:{defaultValue:null,description:`Adjusts the inline-end margin.

Can either be a number (which will act as a multiplier to the library's grid system base of 4px),
or a literal CSS value string.`,name:"marginEnd",required:!1,type:{name:"SpaceInput"}},marginStart:{defaultValue:null,description:`Adjusts the inline-start margin.

Can either be a number (which will act as a multiplier to the library's grid system base of 4px),
or a literal CSS value string.`,name:"marginStart",required:!1,type:{name:"SpaceInput"}},orientation:{defaultValue:{value:"'horizontal'"},description:"Divider's orientation. When using inside a flex container, you may need\nto make sure the divider is `stretch` aligned in order for it to be\nvisible.",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}}}}}catch{}function he(e){const{className:r,justify:t,isBorderless:n=!1,isShady:o=!1,size:c="medium",...i}=x(e,"CardFooter"),d=b(),y=p.useMemo(()=>d(ae,D,F,E(c),n&&A,o&&M,"components-card__footer",r),[r,d,n,o,c]);return{...i,className:y,justify:t}}function be(e,r){const t=he(e);return a(L,{...t,ref:r})}const k=w(be,"CardFooter");try{k.displayName="CardFooter",k.__docgenInfo={description:"`CardFooter` renders an optional footer within a `Card`.\n\n```jsx\nimport { Card, CardBody, CardFooter } from `@wordpress/components`;\n\n<Card>\n	<CardBody>...</CardBody>\n	<CardFooter>...</CardFooter>\n</Card>\n```",displayName:"CardFooter",props:{size:{defaultValue:{value:"'medium'"},description:"Determines the amount of padding within the component.",name:"size",required:!1,type:{name:'SizeOptions | "extraSmall"'}},children:{defaultValue:null,description:"The children elements.",name:"children",required:!0,type:{name:"ReactNode"}},isShady:{defaultValue:{value:"false"},description:"Renders with a light gray background color.",name:"isShady",required:!1,type:{name:"boolean"}},isBorderless:{defaultValue:{value:"false"},description:"Renders without a border.",name:"isBorderless",required:!1,type:{name:"boolean"}},align:{defaultValue:{value:"'center'"},description:"Aligns children using CSS Flexbox `align-items`. Vertically aligns\ncontent if the `direction` is `row`, or horizontally aligns content if\nthe `direction` is `column`.",name:"align",required:!1,type:{name:"AlignItems"}},direction:{defaultValue:{value:"'row'"},description:"The direction flow of the children content can be adjusted with\n`direction`. `column` will align children vertically and `row` will align\nchildren horizontally.",name:"direction",required:!1,type:{name:"FlexDirection"}},expanded:{defaultValue:{value:"true"},description:`Expands to the maximum available width (if horizontal) or height (if
vertical).`,name:"expanded",required:!1,type:{name:"boolean"}},gap:{defaultValue:{value:"2"},description:`Spacing in between each child can be adjusted by using \`gap\`.

Can either be a number (which will act as a multiplier to the library's
grid system base of 4px), or a literal CSS value string.`,name:"gap",required:!1,type:{name:"SpaceInput"}},justify:{defaultValue:{value:"'space-between'"},description:"Horizontally aligns content if the `direction` is `row`, or vertically\naligns content if the `direction` is `column`.",name:"justify",required:!1,type:{name:"JustifyContent"}},wrap:{defaultValue:{value:"false"},description:"Determines if children should wrap.",name:"wrap",required:!1,type:{name:"boolean"}},isReversed:{defaultValue:null,description:"@deprecated",name:"isReversed",required:!1,type:{name:"boolean"}},as:{defaultValue:null,description:"The HTML element or React component to render the component as.",name:"as",required:!1,type:{name:'"symbol" | "object" | "select" | "a" | "abbr" | "address" | "area" | "article" | "aside" | "audio" | "b" | "base" | "bdi" | "bdo" | "big" | "blockquote" | "body" | "br" | "button" | ... 516 more ... | ("view" & FunctionComponent<...>)'}}}}}catch{}function ye(e){const{className:r,isBorderless:t=!1,isShady:n=!1,size:o="medium",...c}=x(e,"CardHeader"),i=b(),d=p.useMemo(()=>i(ee,D,F,E(o),t&&A,n&&M,"components-card__header",r),[r,i,t,n,o]);return{...c,className:d}}function ge(e,r){const t=ye(e);return a(L,{...t,ref:r})}const v=w(ge,"CardHeader");try{v.displayName="CardHeader",v.__docgenInfo={description:"`CardHeader` renders an optional header within a `Card`.\n\n```jsx\nimport { Card, CardBody, CardHeader } from `@wordpress/components`;\n\n<Card>\n	<CardHeader>...</CardHeader>\n	<CardBody>...</CardBody>\n</Card>\n```",displayName:"CardHeader",props:{size:{defaultValue:{value:"'medium'"},description:"Determines the amount of padding within the component.",name:"size",required:!1,type:{name:'SizeOptions | "extraSmall"'}},children:{defaultValue:null,description:"The children elements.",name:"children",required:!0,type:{name:"ReactNode"}},isShady:{defaultValue:{value:"false"},description:"Renders with a light gray background color.",name:"isShady",required:!1,type:{name:"boolean"}},isBorderless:{defaultValue:{value:"false"},description:"Renders without a border.",name:"isBorderless",required:!1,type:{name:"boolean"}},align:{defaultValue:{value:"'center'"},description:"Aligns children using CSS Flexbox `align-items`. Vertically aligns\ncontent if the `direction` is `row`, or horizontally aligns content if\nthe `direction` is `column`.",name:"align",required:!1,type:{name:"AlignItems"}},direction:{defaultValue:{value:"'row'"},description:"The direction flow of the children content can be adjusted with\n`direction`. `column` will align children vertically and `row` will align\nchildren horizontally.",name:"direction",required:!1,type:{name:"FlexDirection"}},expanded:{defaultValue:{value:"true"},description:`Expands to the maximum available width (if horizontal) or height (if
vertical).`,name:"expanded",required:!1,type:{name:"boolean"}},gap:{defaultValue:{value:"2"},description:`Spacing in between each child can be adjusted by using \`gap\`.

Can either be a number (which will act as a multiplier to the library's
grid system base of 4px), or a literal CSS value string.`,name:"gap",required:!1,type:{name:"SpaceInput"}},justify:{defaultValue:{value:"'space-between'"},description:"Horizontally aligns content if the `direction` is `row`, or vertically\naligns content if the `direction` is `column`.",name:"justify",required:!1,type:{name:"JustifyContent"}},wrap:{defaultValue:{value:"false"},description:"Determines if children should wrap.",name:"wrap",required:!1,type:{name:"boolean"}},isReversed:{defaultValue:null,description:"@deprecated",name:"isReversed",required:!1,type:{name:"boolean"}},as:{defaultValue:null,description:"The HTML element or React component to render the component as.",name:"as",required:!1,type:{name:'"symbol" | "object" | "select" | "a" | "abbr" | "address" | "area" | "article" | "aside" | "audio" | "b" | "base" | "bdi" | "bdo" | "big" | "blockquote" | "body" | "br" | "button" | ... 516 more ... | ("view" & FunctionComponent<...>)'}}}}}catch{}function Ce(e){const{className:r,...t}=x(e,"CardMedia"),n=b(),o=p.useMemo(()=>n(te,D,"components-card__media",r),[r,n]);return{...t,className:o}}function ve(e,r){const t=Ce(e);return a(H,{...t,ref:r})}const _=w(ve,"CardMedia");try{_.displayName="CardMedia",_.__docgenInfo={description:"`CardMedia` provides a container for full-bleed content within a `Card`,\nsuch as images, video, or even just a background color.",displayName:"CardMedia",props:{children:{defaultValue:null,description:"The children elements.",name:"children",required:!0,type:{name:"ReactNode"}},as:{defaultValue:null,description:"The HTML element or React component to render the component as.",name:"as",required:!1,type:{name:'"symbol" | "object" | "select" | "a" | "abbr" | "address" | "area" | "article" | "aside" | "audio" | "b" | "base" | "bdi" | "bdo" | "big" | "blockquote" | "body" | "br" | "button" | ... 516 more ... | ("view" & FunctionComponent<...>)'}}}}}catch{}const ca={component:B,subcomponents:{CardHeader:v,CardBody:m,CardDivider:T,CardMedia:_,CardFooter:k},title:"Components/Containers/Card",id:"components-card",argTypes:{as:{control:!1},children:{control:!1}},parameters:{controls:{expanded:!0},docs:{canvas:{sourceState:"shown"}}}},g={args:{children:C(O,{children:[a(v,{children:a(X,{children:"CardHeader"})}),a(m,{children:a(u,{children:"CardBody"})}),a(m,{children:a(u,{children:"CardBody (before CardDivider)"})}),a(T,{}),a(m,{children:a(u,{children:"CardBody (after CardDivider)"})}),a(_,{children:a("img",{alt:"Card Media",src:"https://images.unsplash.com/photo-1566125882500-87e10f726cdc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1867&q=80"})}),C(k,{children:[a(u,{children:"CardFooter"}),a(G,{variant:"secondary",children:"Action Button"})]})]})}},f={...g,args:{...g.args,children:a(_,{children:a("div",{style:{padding:16,background:"beige"},children:"Some full bleed content"})})}},h={render:()=>C("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:[a("div",{children:C(B,{children:[a(v,{children:a(u,{children:"Header with default padding"})}),a(m,{children:a(u,{children:"Body with default padding (medium)"})})]})}),a("div",{children:C(B,{children:[a(v,{size:{blockStart:"large",blockEnd:"small",inlineStart:"xSmall",inlineEnd:"large"},children:a(u,{children:"Header with logical padding (large blockStart, small blockEnd, xSmall inlineStart, large inlineEnd)"})}),a(m,{size:{blockStart:"medium",blockEnd:"xSmall",inlineStart:"large",inlineEnd:"xSmall"},children:a(u,{children:"Body with logical padding (medium blockStart, xSmall blockEnd, large inlineStart, xSmall inlineEnd)"})})]})})]})};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
                <CardHeader>
                    <Heading>CardHeader</Heading>
                </CardHeader>
                <CardBody>
                    <Text>CardBody</Text>
                </CardBody>
                <CardBody>
                    <Text>CardBody (before CardDivider)</Text>
                </CardBody>
                <CardDivider />
                <CardBody>
                    <Text>CardBody (after CardDivider)</Text>
                </CardBody>
                <CardMedia>
                    <img alt="Card Media" src="https://images.unsplash.com/photo-1566125882500-87e10f726cdc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1867&q=80" />
                </CardMedia>
                <CardFooter>
                    <Text>CardFooter</Text>
                    <Button variant="secondary">Action Button</Button>
                </CardFooter>
            </>
  }
}`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    children: <CardMedia>
                <div style={{
        padding: 16,
        background: 'beige'
      }}>
                    Some full bleed content
                </div>
            </CardMedia>
  }
}`,...f.parameters?.docs?.source},description:{story:"`CardMedia` provides a container for full-bleed content within a `Card`,\nsuch as images, video, or even just a background color. The corners will be rounded if necessary.",...f.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '32px'
  }}>
            {/* 1. Default Padding */}
            <div>
                <Card>
                    <CardHeader>
                        <Text>Header with default padding</Text>
                    </CardHeader>
                    <CardBody>
                        <Text>Body with default padding (medium)</Text>
                    </CardBody>
                </Card>
            </div>

            <div>
                <Card>
                    <CardHeader size={{
          blockStart: 'large',
          blockEnd: 'small',
          inlineStart: 'xSmall',
          inlineEnd: 'large'
        }}>
                        <Text>
                            Header with logical padding (large blockStart, small
                            blockEnd, xSmall inlineStart, large inlineEnd)
                        </Text>
                    </CardHeader>
                    <CardBody size={{
          blockStart: 'medium',
          blockEnd: 'xSmall',
          inlineStart: 'large',
          inlineEnd: 'xSmall'
        }}>
                        <Text>
                            Body with logical padding (medium blockStart, xSmall
                            blockEnd, large inlineStart, xSmall inlineEnd)
                        </Text>
                    </CardBody>
                </Card>
            </div>
        </div>
}`,...h.parameters?.docs?.source},description:{story:`The Card component supports three approaches to padding:
1. Default padding (medium) - no size prop needed
2. Token-based padding - using size tokens: xSmall, small, medium, large
3. Logical padding - customize each direction using logical properties

Each component (Card, CardHeader, CardBody) can have its own padding configuration.`,...h.parameters?.docs?.description}}};try{f.displayName="FullBleedContent",f.__docgenInfo={description:"`CardMedia` provides a container for full-bleed content within a `Card`,\nsuch as images, video, or even just a background color. The corners will be rounded if necessary.",displayName:"FullBleedContent",props:{}}}catch{}try{h.displayName="PaddingVariations",h.__docgenInfo={description:`The Card component supports three approaches to padding:
1. Default padding (medium) - no size prop needed
2. Token-based padding - using size tokens: xSmall, small, medium, large
3. Logical padding - customize each direction using logical properties

Each component (Card, CardHeader, CardBody) can have its own padding configuration.`,displayName:"PaddingVariations",props:{}}}catch{}export{g as Default,f as FullBleedContent,h as PaddingVariations,ca as default};
