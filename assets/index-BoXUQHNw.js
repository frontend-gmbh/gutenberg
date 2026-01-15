import{r as h,c as l,f as p,j as t}from"./iframe-2TvY6Iig.js";import{S as I}from"./index-1YdoA736.js";import{B as g}from"./index-CFuMsoxH.js";import{I as b}from"./index-Dnuq8uNu.js";import{u as y}from"./index-BjXx3EE5.js";function N(n,a){let{children:i,info:o,className:r,icon:e,iconPosition:s="right",shortcut:m,isSelected:f,role:c="menuitem",suffix:u,...M}=n;return r=l("components-menu-item__button",r),o&&(i=p("span",{className:"components-menu-item__info-wrapper",children:[t("span",{className:"components-menu-item__item",children:i}),t("span",{className:"components-menu-item__info",children:o})]})),e&&typeof e!="string"&&(e=h.cloneElement(e,{className:l("components-menu-items__item-icon",{"has-icon-right":s==="right"})})),p(g,{size:"compact",ref:a,"aria-checked":c==="menuitemcheckbox"||c==="menuitemradio"?f:void 0,role:c,icon:s==="left"?e:void 0,className:r,accessibleWhenDisabled:!0,...M,children:[t("span",{className:"components-menu-item__item",children:i}),!u&&t(I,{className:"components-menu-item__shortcut",shortcut:m}),!u&&e&&s==="right"&&t(b,{icon:e}),u]})}const _=h.forwardRef(N);try{_.displayName="MenuItem",_.__docgenInfo={description:`MenuItem is a component which renders a button intended to be used in combination with the \`DropdownMenu\` component.

\`\`\`jsx
import { MenuItem } from '@wordpress/components';
import { useState } from '@wordpress/element';

const MyMenuItem = () => {
	const [ isActive, setIsActive ] = useState( true );

	return (
		<MenuItem
			icon={ isActive ? 'yes' : 'no' }
			isSelected={ isActive }
			role="menuitemcheckbox"
			onClick={ () => setIsActive( ( state ) => ! state ) }
		>
			Toggle
		</MenuItem>
	);
};
\`\`\``,displayName:"MenuItem",props:{}}}catch{}try{menuitem.displayName="menuitem",menuitem.__docgenInfo={description:`MenuItem is a component which renders a button intended to be used in combination with the \`DropdownMenu\` component.

\`\`\`jsx
import { MenuItem } from '@wordpress/components';
import { useState } from '@wordpress/element';

const MyMenuItem = () => {
	const [ isActive, setIsActive ] = useState( true );

	return (
		<MenuItem
			icon={ isActive ? 'yes' : 'no' }
			isSelected={ isActive }
			role="menuitemcheckbox"
			onClick={ () => setIsActive( ( state ) => ! state ) }
		>
			Toggle
		</MenuItem>
	);
};
\`\`\``,displayName:"menuitem",props:{}}}catch{}function d(n){const{children:a,className:i="",label:o,hideSeparator:r}=n,e=y(d);if(!h.Children.count(a))return null;const s=`components-menu-group-label-${e}`,m=l(i,"components-menu-group",{"has-hidden-separator":r});return p("div",{className:m,children:[o&&t("div",{className:"components-menu-group__label",id:s,"aria-hidden":"true",children:o}),t("div",{role:"group","aria-labelledby":o?s:void 0,children:a})]})}try{d.displayName="MenuGroup",d.__docgenInfo={description:`\`MenuGroup\` wraps a series of related \`MenuItem\` components into a common
section.

\`\`\`jsx
import { MenuGroup, MenuItem } from '@wordpress/components';

const MyMenuGroup = () => (
  <MenuGroup label="Settings">
    <MenuItem>Setting 1</MenuItem>
    <MenuItem>Setting 2</MenuItem>
  </MenuGroup>
);
\`\`\``,displayName:"MenuGroup",props:{className:{defaultValue:null,description:"A CSS `class` to give to the container element.",name:"className",required:!1,type:{name:"string"}},hideSeparator:{defaultValue:null,description:"Hide the top border on the container.",name:"hideSeparator",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"Text to be displayed as the menu group header.",name:"label",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"The children elements.",name:"children",required:!1,type:{name:"ReactNode"}}}}}catch{}export{_ as M,d as a};
