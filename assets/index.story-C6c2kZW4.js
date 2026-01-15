import{j as t}from"./iframe-2TvY6Iig.js";import{u as i}from"./hook-DMYIploR.js";import{c as s}from"./use-context-system-GBkKyJuM.js";import{V as d}from"./component-DATVQiJy.js";import{T as c}from"./component-DEBvv9-v.js";import"./preload-helper-Zf8nSx-t.js";import"./emotion-react.browser.esm-T2caqgd_.js";import"./config-values-CkVNYk_w.js";import"./colors-values-BSq3yUT9.js";import"./index-DUXT-3wK.js";import"./is-plain-object-BJ3z7EOF.js";import"./index-BtJmv7lM.js";import"./index-CK8hcbFu.js";import"./hook-D7E4jAJ2.js";import"./names-BarMHYgS.js";import"./index-CWa7Pedq.js";import"./space-CjrGwnR-.js";import"./hook-CHurV6sy.js";import"./values-CtPxXHrl.js";function l(r,o){const n=i(r);return t(d,{...n,ref:o})}const a=s(l,"Surface");try{a.displayName="Surface",a.__docgenInfo={description:`\`Surface\` is a core component that renders a primary background color.

In the example below, notice how the \`Surface\` renders in white (or dark gray if in dark mode).

\`\`\`jsx
import {
__experimentalSurface as Surface,
__experimentalText as Text,
} from '@wordpress/components';

function Example() {
	return (
		<Surface>
			<Text>Code is Poetry</Text>
		</Surface>
	);
}
\`\`\``,displayName:"Surface",props:{backgroundSize:{defaultValue:{value:"12"},description:'Determines the grid size for "dotted" and "grid" variants.',name:"backgroundSize",required:!1,type:{name:"number"}},borderBottom:{defaultValue:{value:"false"},description:"Renders a bottom border.",name:"borderBottom",required:!1,type:{name:"boolean"}},borderLeft:{defaultValue:{value:"false"},description:"Renders a left border.",name:"borderLeft",required:!1,type:{name:"boolean"}},borderRight:{defaultValue:{value:"false"},description:"Renders a right border.",name:"borderRight",required:!1,type:{name:"boolean"}},borderTop:{defaultValue:{value:"false"},description:"Renders a top border.",name:"borderTop",required:!1,type:{name:"boolean"}},variant:{defaultValue:{value:"'primary'"},description:"Modifies the background color of `Surface`.\n\n* `primary`: Used for almost all cases.\n* `secondary`: Used as a secondary background for inner `Surface` components.\n* `tertiary`: Used as the app/site wide background. Visible in **dark mode** only. Use case is rare.\n* `grid`: Used to show a grid.\n* `dotted`: Used to show a dots grid.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"grid"'},{value:'"dotted"'},{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}},children:{defaultValue:null,description:"The children elements.",name:"children",required:!0,type:{name:"ReactNode"}},as:{defaultValue:null,description:"The HTML element or React component to render the component as.",name:"as",required:!1,type:{name:'"symbol" | "object" | "select" | "a" | "abbr" | "address" | "area" | "article" | "aside" | "audio" | "b" | "base" | "bdi" | "bdo" | "big" | "blockquote" | "body" | "br" | "button" | ... 516 more ... | ("view" & FunctionComponent<...>)'}}}}}catch{}const j={component:a,title:"Components/Surface",argTypes:{children:{control:!1},as:{control:{type:"text"}}},tags:["status-experimental"],parameters:{controls:{expanded:!0},docs:{canvas:{sourceState:"shown"}}}},u=r=>t(a,{...r,style:{padding:20,maxWidth:400,margin:"20vh auto"},children:t(c,{children:"Code is Poetry"})}),e=u.bind({});e.args={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`args => {
  return <Surface {...args} style={{
    padding: 20,
    maxWidth: 400,
    margin: '20vh auto'
  }}>
            <Text>Code is Poetry</Text>
        </Surface>;
}`,...e.parameters?.docs?.source}}};export{e as Default,j as default};
