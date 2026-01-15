import{f as l,j as o,r as i,c as p}from"./iframe-2TvY6Iig.js";function a({label:e,children:n}){return l("div",{className:"components-panel__header",children:[e&&o("h2",{children:e}),n]})}try{a.displayName="PanelHeader",a.__docgenInfo={description:"`PanelHeader` renders the header for the `Panel`.\nThis is used by the `Panel` component under the hood,\nso it does not typically need to be used.",displayName:"PanelHeader",props:{label:{defaultValue:null,description:"The text that will be rendered as the title of the panel.\nWill be rendered in an `<h2>` tag.",name:"label",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"The content to display within the panel header.",name:"children",required:!1,type:{name:"ReactNode"}}}}}catch{}function c({header:e,className:n,children:r},s){const d=p(n,"components-panel");return l("div",{className:d,ref:s,children:[e&&o(a,{label:e}),r]})}const t=i.forwardRef(c);try{t.displayName="Panel",t.__docgenInfo={description:`\`Panel\` expands and collapses multiple sections of content.

\`\`\`jsx
import { Panel, PanelBody, PanelRow } from '@wordpress/components';
import { more } from '@wordpress/icons';

const MyPanel = () => (
	<Panel header="My Panel">
		<PanelBody title="My Block Settings" icon={ more } initialOpen={ true }>
			<PanelRow>My Panel Inputs and Labels</PanelRow>
		</PanelBody>
	</Panel>
);
\`\`\``,displayName:"Panel",props:{}}}catch{}try{panel.displayName="panel",panel.__docgenInfo={description:`\`Panel\` expands and collapses multiple sections of content.

\`\`\`jsx
import { Panel, PanelBody, PanelRow } from '@wordpress/components';
import { more } from '@wordpress/icons';

const MyPanel = () => (
	<Panel header="My Panel">
		<PanelBody title="My Block Settings" icon={ more } initialOpen={ true }>
			<PanelRow>My Panel Inputs and Labels</PanelRow>
		</PanelBody>
	</Panel>
);
\`\`\``,displayName:"panel",props:{}}}catch{}export{t as P};
