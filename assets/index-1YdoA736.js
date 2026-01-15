import{j as o}from"./iframe-2TvY6Iig.js";function n(e){const{shortcut:t,className:s}=e;if(!t)return null;let a,r;return typeof t=="string"&&(a=t),t!==null&&typeof t=="object"&&(a=t.display,r=t.ariaLabel),o("span",{className:s,"aria-label":r,children:a})}try{n.displayName="Shortcut",n.__docgenInfo={description:`Shortcut component is used to display keyboard shortcuts, and it can be customized with a custom display and aria label if needed.

\`\`\`jsx
import { Shortcut } from '@wordpress/components';

const MyShortcut = () => {
	return (
		<Shortcut shortcut={{ display: 'Ctrl + S', ariaLabel: 'Save' }} />
	);
};
\`\`\``,displayName:"Shortcut",props:{className:{defaultValue:null,description:"Classname to apply to the shortcut.",name:"className",required:!1,type:{name:"string"}},shortcut:{defaultValue:null,description:"Shortcut configuration",name:"shortcut",required:!1,type:{name:"string | { display: string; ariaLabel: string; }"}}}}}catch{}export{n as S};
