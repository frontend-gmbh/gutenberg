import{j as m,c,f as A}from"./iframe-2TvY6Iig.js";import{B as b}from"./index-CFuMsoxH.js";import{D as _}from"./index-djnRrerp.js";import{b as q,u as V}from"./use-context-system-GBkKyJuM.js";import{N as O}from"./menu-DC1QYQWj.js";import{m as U}from"./menu-dczDR4cj.js";function h(t={},r={}){const i={...t,...r};return r.className&&t.className&&(i.className=c(r.className,t.className)),i}function g(t){return typeof t=="function"}function R(t){const{children:r,className:i,controls:s,icon:M=U,label:f,popoverProps:D,toggleProps:w,menuProps:v,disableOpenOnArrowDown:P=!1,text:C,noIcons:k,open:T,defaultOpen:I,onToggle:x,variant:N}=V(t,"DropdownMenu");if(!s?.length&&!g(r))return null;let l;s?.length&&(l=s,Array.isArray(l[0])||(l=[s]));const j=h({className:"components-dropdown-menu__popover",variant:N},D);return m(_,{className:i,popoverProps:j,renderToggle:({isOpen:a,onToggle:p})=>{const u=o=>{P||!a&&o.code==="ArrowDown"&&(o.preventDefault(),p())},{as:d=b,...e}=w??{},n=h({className:c("components-dropdown-menu__toggle",{"is-opened":a})},e);return m(d,{...n,icon:M,onClick:(o=>{p(),n.onClick&&n.onClick(o)}),onKeyDown:(o=>{u(o),n.onKeyDown&&n.onKeyDown(o)}),"aria-haspopup":"true","aria-expanded":a,label:f,text:C,showTooltip:w?.showTooltip??!0,children:n.children})},renderContent:a=>{const p=h({"aria-label":f,className:c("components-dropdown-menu__menu",{"no-icons":k})},v);return A(O,{...p,role:"menu",children:[g(r)?r(a):null,l?.flatMap((u,d)=>u.map((e,n)=>m(b,{size:"compact",onClick:o=>{o.stopPropagation(),a.onClose(),e.onClick&&e.onClick()},className:c("components-dropdown-menu__menu-item",{"has-separator":d>0&&n===0,"is-active":e.isActive,"is-icon-only":!e.title}),icon:e.icon,label:e.label,"aria-checked":e.role==="menuitemcheckbox"||e.role==="menuitemradio"?e.isActive:void 0,role:e.role==="menuitemcheckbox"||e.role==="menuitemradio"?e.role:"menuitem",accessibleWhenDisabled:!0,disabled:e.isDisabled,children:e.title},[d,n].join())))]})},open:T,defaultOpen:I,onToggle:x})}const y=q(R,"DropdownMenu");try{y.displayName="DropdownMenu",y.__docgenInfo={description:`
The DropdownMenu displays a list of actions (each contained in a MenuItem,
MenuItemsChoice, or MenuGroup) in a compact way. It appears in a Popover
after the user has interacted with an element (a button or icon) or when
they perform a specific action.

Render a Dropdown Menu with a set of controls:

\`\`\`jsx
import { DropdownMenu } from '@wordpress/components';
import {
	more,
	arrowLeft,
	arrowRight,
	arrowUp,
	arrowDown,
} from '@wordpress/icons';

const MyDropdownMenu = () => (
	<DropdownMenu
		icon={ more }
		label="Select a direction"
		controls={ [
			{
				title: 'Up',
				icon: arrowUp,
				onClick: () => console.log( 'up' ),
			},
			{
				title: 'Right',
				icon: arrowRight,
				onClick: () => console.log( 'right' ),
			},
			{
				title: 'Down',
				icon: arrowDown,
				onClick: () => console.log( 'down' ),
			},
			{
				title: 'Left',
				icon: arrowLeft,
				onClick: () => console.log( 'left' ),
			},
		] }
	/>
);
\`\`\`

Alternatively, specify a \`children\` function which returns elements valid for
use in a DropdownMenu: \`MenuItem\`, \`MenuItemsChoice\`, or \`MenuGroup\`.

\`\`\`jsx
import { DropdownMenu, MenuGroup, MenuItem } from '@wordpress/components';
import { more, arrowUp, arrowDown, trash } from '@wordpress/icons';

const MyDropdownMenu = () => (
	<DropdownMenu icon={ more } label="Select a direction">
		{ ( { onClose } ) => (
			<>
				<MenuGroup>
					<MenuItem icon={ arrowUp } onClick={ onClose }>
						Move Up
					</MenuItem>
					<MenuItem icon={ arrowDown } onClick={ onClose }>
						Move Down
					</MenuItem>
				</MenuGroup>
				<MenuGroup>
					<MenuItem icon={ trash } onClick={ onClose }>
						Remove
					</MenuItem>
				</MenuGroup>
			</>
		) }
	</DropdownMenu>
);
\`\`\``,displayName:"DropdownMenu",props:{icon:{defaultValue:{value:'"menu"'},description:"The icon to be shown in the collapsed menu button.",name:"icon",required:!1,type:{name:"IconType"}},label:{defaultValue:null,description:`A human-readable label to present as accessibility text on the focused
collapsed menu button.`,name:"label",required:!0,type:{name:"string"}},className:{defaultValue:null,description:"A class name to apply to the dropdown menu's toggle element wrapper.",name:"className",required:!1,type:{name:"string"}},popoverProps:{defaultValue:null,description:"Properties of `popoverProps` object will be passed as props to the nested\n`Popover` component.\nUse this object to modify props available for the `Popover` component that\nare not already exposed in the `DropdownMenu` component, e.g.: the\ndirection in which the popover should open relative to its parent node\nset with `position` prop.",name:"popoverProps",required:!1,type:{name:'Omit<ComponentPropsWithoutRef<WordPressComponent<ElementType<any, keyof IntrinsicElements>, Omit<WordPressComponentProps<PopoverProps, "div", false>, "onDrag" | ... 56 more ... | "ignoreStrict"> & RefAttributes<...>, boolean> & { ...; }>, "children">'}},toggleProps:{defaultValue:null,description:"Properties of `toggleProps` object will be passed as props to the nested\n`Button` component in the `renderToggle` implementation of the `Dropdown`\ncomponent used internally.\nUse this object to modify props available for the `Button` component that\nare not already exposed in the `DropdownMenu` component, e.g.: the tooltip\ntext displayed on hover set with `tooltip` prop.",name:"toggleProps",required:!1,type:{name:"ToggleProps"}},menuProps:{defaultValue:null,description:"Properties of `menuProps` object will be passed as props to the nested\n`NavigableMenu` component in the `renderContent` implementation of the\n`Dropdown` component used internally.\nUse this object to modify props available for the `NavigableMenu`\ncomponent that are not already exposed in the `DropdownMenu` component,\ne.g.: the orientation of the menu set with `orientation` prop.",name:"menuProps",required:!1,type:{name:'Omit<Partial<NavigableMenuProps>, "children">'}},disableOpenOnArrowDown:{defaultValue:{value:"false"},description:`In some contexts, the arrow down key used to open the dropdown menu might
need to be disabled—for example when that key is used to perform another
action.`,name:"disableOpenOnArrowDown",required:!1,type:{name:"boolean"}},text:{defaultValue:null,description:"Text to display on the nested `Button` component in the `renderToggle`\nimplementation of the `Dropdown` component used internally.",name:"text",required:!1,type:{name:"string"}},noIcons:{defaultValue:null,description:"Whether or not `no-icons` should be added to the menu's `className`.",name:"noIcons",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"A [function render prop](https://reactjs.org/docs/render-props.html#using-props-other-than-render)\nwhich should return an element or elements valid for use in a DropdownMenu:\n`MenuItem`, `MenuItemsChoice`, or `MenuGroup`. Its first argument is a\nprops object including the same values as given to a `Dropdown`'s\n`renderContent` (`isOpen`, `onToggle`, `onClose`).\n\nA valid DropdownMenu must specify a `controls` or `children` prop, or both.",name:"children",required:!1,type:{name:"(callbackProps: DropdownCallbackProps) => ReactNode"}},controls:{defaultValue:null,description:"An array or nested array of objects describing the options to be shown in\nthe expanded menu. Each object should include an `icon` Dashicon slug\nstring, a human-readable `title` string, `isDisabled` boolean flag, and\nan `onClick` function callback to invoke when the option is selected.\n\nA valid DropdownMenu must specify a `controls` or `children` prop, or both.",name:"controls",required:!1,type:{name:"DropdownOption[] | DropdownOption[][]"}},open:{defaultValue:null,description:"The controlled open state of the dropdown menu.\nMust be used in conjunction with `onToggle`.",name:"open",required:!1,type:{name:"boolean"}},defaultOpen:{defaultValue:null,description:"The open state of the dropdown menu when initially rendered.\nUse when you do not need to control its open state. It will be overridden\nby the `open` prop if it is specified on the component's first render.",name:"defaultOpen",required:!1,type:{name:"boolean"}},onToggle:{defaultValue:null,description:`A callback invoked when the state of the dropdown menu changes
from open to closed and vice versa.`,name:"onToggle",required:!1,type:{name:"(willOpen: boolean) => void"}},as:{defaultValue:null,description:"The HTML element or React component to render the component as.",name:"as",required:!1,type:{name:'"symbol" | "object" | "select" | "a" | "abbr" | "address" | "area" | "article" | "aside" | "audio" | "b" | "base" | "bdi" | "bdo" | "big" | "blockquote" | "body" | "br" | "button" | ... 516 more ... | ("view" & FunctionComponent<...>)'}}}}}catch{}export{y as D};
