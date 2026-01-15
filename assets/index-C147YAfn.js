import{j as a,F as r}from"./iframe-2TvY6Iig.js";import{M as u}from"./index-BoXUQHNw.js";import{c as i}from"./check-CavNG0Pm.js";const d=()=>{};function l({choices:n=[],onHover:o=d,onSelect:c,value:s}){return a(r,{children:n.map(e=>{const t=s===e.value;return a(u,{role:"menuitemradio",disabled:e.disabled,icon:t?i:null,info:e.info,isSelected:t,shortcut:e.shortcut,className:"components-menu-items-choice",onClick:()=>{t||c(e.value)},onMouseEnter:()=>o(e.value),onMouseLeave:()=>o(null),"aria-label":e["aria-label"],children:e.label},e.value)})})}try{l.displayName="MenuItemsChoice",l.__docgenInfo={description:`\`MenuItemsChoice\` functions similarly to a set of \`MenuItem\`s, but allows the user to select one option from a set of multiple choices.


\`\`\`jsx
import { MenuGroup, MenuItemsChoice } from '@wordpress/components';
import { useState } from '@wordpress/element';

const MyMenuItemsChoice = () => {
	const [ mode, setMode ] = useState( 'visual' );
	const choices = [
		{
			value: 'visual',
			label: 'Visual editor',
		},
		{
			value: 'text',
			label: 'Code editor',
		},
	];

	return (
		<MenuGroup label="Editor">
			<MenuItemsChoice
				choices={ choices }
				value={ mode }
				onSelect={ ( newMode ) => setMode( newMode ) }
			/>
		</MenuGroup>
	);
};
\`\`\``,displayName:"MenuItemsChoice",props:{choices:{defaultValue:{value:"[]"},description:"Array of choices.",name:"choices",required:!1,type:{name:"readonly MenuItemChoice[]"}},value:{defaultValue:null,description:"Value of currently selected choice (should match a `value` property\nfrom a choice in `choices`).",name:"value",required:!0,type:{name:"string"}},onSelect:{defaultValue:null,description:`Callback function to be called with the selected choice when user
selects a new choice.`,name:"onSelect",required:!0,type:{name:"(value: string) => void"}},onHover:{defaultValue:{value:"() => {}"},description:`Callback function to be called with a choice when user
hovers over a new choice (will be empty on mouse leave).`,name:"onHover",required:!1,type:{name:"(value: string) => void"}}}}}catch{}export{l as M};
