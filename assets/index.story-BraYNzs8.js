import{r as s,j as e,c as _,f as w,F as A}from"./iframe-2TvY6Iig.js";import{D as v}from"./index-D8e9HJXM.js";import{T as j}from"./BOLVLGVE-B5pULLmI.js";import{B}from"./index-CFuMsoxH.js";import{d as O}from"./index-BjRskdOB.js";import{i as G}from"./default-i18n-SWt35ZM4.js";import{u as U,T as E}from"./toolbar-CBu9I_ft.js";import{C as W}from"./use-context-system-GBkKyJuM.js";import{p as z}from"./paragraph-C9ONXeQX.js";import{a as P,b as D,c as V}from"./align-right-DwLyYZEh.js";import{f as k,a as M}from"./format-italic-DQVmLP04.js";import{l as q}from"./link-DIbhJbQ8.js";import{c as L}from"./code-BdrQJz0P.js";import{f as F}from"./format-strikethrough-BFiNqs00.js";import{m as $}from"./more-DAulmHt7.js";import{a as H}from"./arrow-up-j2b5J5Px.js";import{a as J,b as K}from"./arrow-right-CXXAcKTj.js";import{a as Q}from"./arrow-down-B34ZY2Fm.js";import{c as X}from"./chevron-down-mxzMPu8z.js";import{P as Y,S as Z}from"./index-BIvJ8ozV.js";import"./preload-helper-Zf8nSx-t.js";import"./index-djnRrerp.js";import"./index-CLatOAvg.js";import"./index-DNvM-K8Z.js";import"./floating-ui.react-dom-lQIVkebl.js";import"./index-C7vWhNYT.js";import"./platform-Dx-VEEF7.js";import"./index-g4CI5goq.js";import"./index-mcCfYwbk.js";import"./index-DDuNjadK.js";import"./index-Ct0bDPBV.js";import"./index-B18ctdHe.js";import"./T6C2RYFI-BXv3qAIm.js";import"./LVA2YJMS-Bhv8eVm0.js";import"./LMDWO4NN-CH0ROf0T.js";import"./floating-ui.utils.dom-BlKqeV2W.js";import"./index-CniSQ6kN.js";import"./index--WI9l4jM.js";import"./index-CHj7W0Xl.js";import"./index-CZo2zBTA.js";import"./v4-CtRu48qb.js";import"./component-DATVQiJy.js";import"./index-D4zU5mcb.js";import"./index-Dt7LODwq.js";import"./index-BjXx3EE5.js";import"./index-1YdoA736.js";import"./cubic-bezier-CfzpfWNY.js";import"./dropdown-motion-BuMQU1CT.js";import"./proxy-DY4LNgox.js";import"./close-H02ILkEf.js";import"./use-controlled-value-D6nr5Y4s.js";import"./menu-DC1QYQWj.js";import"./container-BB_QBepN.js";import"./menu-dczDR4cj.js";import"./P2CTZE2T-C4NqLDvb.js";import"./index-Dnuq8uNu.js";import"./component-BGXh8e92.js";import"./ITI7HKP4-_BMwSXRb.js";import"./index-DUXT-3wK.js";import"./is-plain-object-BJ3z7EOF.js";import"./index-BtJmv7lM.js";import"./index-CK8hcbFu.js";const f=s.createContext(void 0);f.displayName="ToolbarContext";function oo({children:o,as:t,...n},r){const p=s.useContext(f),a=typeof o=="function";if(!a&&!t)return null;const c={...n,ref:r,"data-toolbar-item":!0};return p?e(j,{accessibleWhenDisabled:!0,...c,store:p,render:a?o:t&&e(t,{children:o})}):t?e(t,{...c,children:o}):a?o(c):null}const y=s.forwardRef(oo),eo=({children:o,className:t})=>e("div",{className:t,children:o});try{toolbarbuttoncontainer.displayName="toolbarbuttoncontainer",toolbarbuttoncontainer.__docgenInfo={description:"",displayName:"toolbarbuttoncontainer",props:{children:{defaultValue:null,description:"Children to be rendered inside the button container.",name:"children",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"An optional class name for the button container.",name:"className",required:!1,type:{name:"string"}}}}}catch{}function to({isDisabled:o,...t}){return{disabled:o,...t}}function no(o,t){const{children:n,className:r,containerClassName:p,extraProps:a,isActive:c,title:u,...l}=to(o);return s.useContext(f)?e(y,{className:_("components-toolbar-button",r),...a,...l,ref:t,children:b=>e(B,{size:"compact",label:u,isPressed:c,...b,children:n})}):e(eo,{className:p,children:e(B,{ref:t,icon:l.icon,size:"compact",label:u,shortcut:l.shortcut,"data-subscript":l.subscript,onClick:b=>{b.stopPropagation(),l.onClick&&l.onClick(b)},className:_("components-toolbar__control",r),isPressed:c,accessibleWhenDisabled:!0,"data-toolbar-item":!0,...a,...l,children:n})})}const i=s.forwardRef(no);try{i.displayName="ToolbarButton",i.__docgenInfo={description:`ToolbarButton can be used to add actions to a toolbar, usually inside a Toolbar
or ToolbarGroup when used to create general interfaces.

\`\`\`jsx
import { Toolbar, ToolbarButton } from '@wordpress/components';
import { pencil } from '@wordpress/icons';

function MyToolbar() {
  return (
	<Toolbar label="Options">
		<ToolbarButton
			icon={ pencil }
			label="Edit"
			onClick={ () => alert( 'Editing' ) }
		/>
	</Toolbar>
  );
}
\`\`\``,displayName:"ToolbarButton",props:{}}}catch{}try{toolbarbutton.displayName="toolbarbutton",toolbarbutton.__docgenInfo={description:`ToolbarButton can be used to add actions to a toolbar, usually inside a Toolbar
or ToolbarGroup when used to create general interfaces.

\`\`\`jsx
import { Toolbar, ToolbarButton } from '@wordpress/components';
import { pencil } from '@wordpress/icons';

function MyToolbar() {
  return (
	<Toolbar label="Options">
		<ToolbarButton
			icon={ pencil }
			label="Edit"
			onClick={ () => alert( 'Editing' ) }
		/>
	</Toolbar>
  );
}
\`\`\``,displayName:"toolbarbutton",props:{}}}catch{}const ro=({className:o,children:t,...n})=>e("div",{className:o,...n,children:t});try{toolbargroupcontainer.displayName="toolbargroupcontainer",toolbargroupcontainer.__docgenInfo={description:"",displayName:"toolbargroupcontainer",props:{children:{defaultValue:null,description:"Children to be rendered inside the toolbar.",name:"children",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"Class to set on the container div.",name:"className",required:!1,type:{name:"string"}},props:{defaultValue:null,description:"Props to be passed.",name:"props",required:!1,type:{name:"any"}}}}}catch{}function C({controls:o=[],toggleProps:t,...n}){const r=s.useContext(f),p=a=>e(v,{controls:o,toggleProps:{...a,"data-toolbar-item":!0},...n});return r?e(y,{...t,children:p}):p(t)}try{C.displayName="ToolbarGroupCollapsed",C.__docgenInfo={description:"",displayName:"ToolbarGroupCollapsed",props:{icon:{defaultValue:{value:'"menu"'},description:"The icon to be shown in the collapsed menu button.",name:"icon",required:!1,type:{name:"IconType"}},label:{defaultValue:null,description:`A human-readable label to present as accessibility text on the focused
collapsed menu button.`,name:"label",required:!0,type:{name:"string"}},className:{defaultValue:null,description:"A class name to apply to the dropdown menu's toggle element wrapper.",name:"className",required:!1,type:{name:"string"}},popoverProps:{defaultValue:null,description:"Properties of `popoverProps` object will be passed as props to the nested\n`Popover` component.\nUse this object to modify props available for the `Popover` component that\nare not already exposed in the `DropdownMenu` component, e.g.: the\ndirection in which the popover should open relative to its parent node\nset with `position` prop.",name:"popoverProps",required:!1,type:{name:'Omit<ComponentPropsWithoutRef<WordPressComponent<ElementType<any, keyof IntrinsicElements>, Omit<WordPressComponentProps<PopoverProps, "div", false>, "onDrag" | ... 56 more ... | "ignoreStrict"> & RefAttributes<...>, boolean> & { ...; }>, "children">'}},toggleProps:{defaultValue:null,description:"Properties of `toggleProps` object will be passed as props to the nested\n`Button` component in the `renderToggle` implementation of the `Dropdown`\ncomponent used internally.\nUse this object to modify props available for the `Button` component that\nare not already exposed in the `DropdownMenu` component, e.g.: the tooltip\ntext displayed on hover set with `tooltip` prop.",name:"toggleProps",required:!1,type:{name:"ToggleProps"}},menuProps:{defaultValue:null,description:"Properties of `menuProps` object will be passed as props to the nested\n`NavigableMenu` component in the `renderContent` implementation of the\n`Dropdown` component used internally.\nUse this object to modify props available for the `NavigableMenu`\ncomponent that are not already exposed in the `DropdownMenu` component,\ne.g.: the orientation of the menu set with `orientation` prop.",name:"menuProps",required:!1,type:{name:'Omit<Partial<NavigableMenuProps>, "children">'}},disableOpenOnArrowDown:{defaultValue:{value:"false"},description:`In some contexts, the arrow down key used to open the dropdown menu might
need to be disabled—for example when that key is used to perform another
action.`,name:"disableOpenOnArrowDown",required:!1,type:{name:"boolean"}},text:{defaultValue:null,description:"Text to display on the nested `Button` component in the `renderToggle`\nimplementation of the `Dropdown` component used internally.",name:"text",required:!1,type:{name:"string"}},noIcons:{defaultValue:null,description:"Whether or not `no-icons` should be added to the menu's `className`.",name:"noIcons",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"A [function render prop](https://reactjs.org/docs/render-props.html#using-props-other-than-render)\nwhich should return an element or elements valid for use in a DropdownMenu:\n`MenuItem`, `MenuItemsChoice`, or `MenuGroup`. Its first argument is a\nprops object including the same values as given to a `Dropdown`'s\n`renderContent` (`isOpen`, `onToggle`, `onClose`).\n\nA valid DropdownMenu must specify a `controls` or `children` prop, or both.",name:"children",required:!1,type:{name:"(callbackProps: DropdownCallbackProps) => ReactNode"}},controls:{defaultValue:{value:"[]"},description:"An array or nested array of objects describing the options to be shown in\nthe expanded menu. Each object should include an `icon` Dashicon slug\nstring, a human-readable `title` string, `isDisabled` boolean flag, and\nan `onClick` function callback to invoke when the option is selected.\n\nA valid DropdownMenu must specify a `controls` or `children` prop, or both.",name:"controls",required:!1,type:{name:"DropdownOption[] | DropdownOption[][]"}},open:{defaultValue:null,description:"The controlled open state of the dropdown menu.\nMust be used in conjunction with `onToggle`.",name:"open",required:!1,type:{name:"boolean"}},defaultOpen:{defaultValue:null,description:"The open state of the dropdown menu when initially rendered.\nUse when you do not need to control its open state. It will be overridden\nby the `open` prop if it is specified on the component's first render.",name:"defaultOpen",required:!1,type:{name:"boolean"}},onToggle:{defaultValue:null,description:`A callback invoked when the state of the dropdown menu changes
from open to closed and vice versa.`,name:"onToggle",required:!1,type:{name:"(willOpen: boolean) => void"}}}}}catch{}function ao(o){return Array.isArray(o)&&Array.isArray(o[0])}function d({controls:o=[],children:t,className:n,isCollapsed:r,title:p,...a}){const c=s.useContext(f);if((!o||!o.length)&&!t)return null;const u=_(c?"components-toolbar-group":"components-toolbar",n);let l;return ao(o)?l=o:l=[o],r?e(C,{label:p,controls:l,className:u,children:t,...a}):w(ro,{className:u,...a,children:[l?.flatMap((T,b)=>T.map((R,x)=>e(i,{containerClassName:b>0&&x===0?"has-left-divider":void 0,...R},[b,x].join()))),t]})}try{d.displayName="ToolbarGroup",d.__docgenInfo={description:`Renders a collapsible group of controls

The \`controls\` prop accepts an array of sets. A set is an array of controls.
Controls have the following shape:

\`\`\`
{
  icon: string,
  title: string,
  subscript: string,
  onClick: Function,
  isActive: boolean,
  isDisabled: boolean
}
\`\`\`

For convenience it is also possible to pass only an array of controls. It is
then assumed this is the only set.

Either \`controls\` or \`children\` is required, otherwise this components
renders nothing.`,displayName:"ToolbarGroup",props:{controls:{defaultValue:{value:"[]"},description:"The controls to render in this toolbar.",name:"controls",required:!1,type:{name:"ToolbarGroupControls[] | ToolbarGroupControls[][]"}},className:{defaultValue:null,description:"Class to set on the container div.",name:"className",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"Any other things to render inside the toolbar besides the controls.",name:"children",required:!1,type:{name:"ReactNode | (ReactNode & ((callbackProps: DropdownCallbackProps) => ReactNode))"}},icon:{defaultValue:null,description:"The Dashicon icon slug to be shown for the option.",name:"icon",required:!1,type:{name:"IconType"}},isCollapsed:{defaultValue:null,description:"When true, turns `ToolbarGroup` into a dropdown menu.",name:"isCollapsed",required:!1,type:{name:"boolean"}},title:{defaultValue:null,description:"ARIA label for dropdown menu if is collapsed.",name:"title",required:!1,type:{name:"string"}}}}}catch{}function lo({label:o,...t},n){const r=U({focusLoop:!0,rtl:G()});return e(f.Provider,{value:r,children:e(E,{ref:n,"aria-label":o,store:r,...t})})}const io=s.forwardRef(lo);function so({className:o,label:t,variant:n,...r},p){const a=n!==void 0,c=s.useMemo(()=>a?{}:{DropdownMenu:{variant:"toolbar"},Dropdown:{variant:"toolbar"},Menu:{variant:"toolbar"}},[a]);if(!t){O("Using Toolbar without label prop",{since:"5.6",alternative:"ToolbarGroup component",link:"https://developer.wordpress.org/block-editor/components/toolbar/"});const{title:l,...T}=r;return e(d,{isCollapsed:!1,...T,className:o})}const u=_("components-accessible-toolbar",o,n&&`is-${n}`);return e(W,{value:c,children:e(io,{className:u,label:t,ref:p,...r})})}const N=s.forwardRef(so);try{N.displayName="Toolbar",N.__docgenInfo={description:`Renders a toolbar.

To add controls, simply pass \`ToolbarButton\` components as children.

\`\`\`jsx
import { Toolbar, ToolbarButton } from '@wordpress/components';
import { formatBold, formatItalic, link } from '@wordpress/icons';

function MyToolbar() {
  return (
    <Toolbar label="Options">
      <ToolbarButton icon={ formatBold } label="Bold" />
      <ToolbarButton icon={ formatItalic } label="Italic" />
      <ToolbarButton icon={ link } label="Link" />
    </Toolbar>
  );
}
\`\`\``,displayName:"Toolbar",props:{}}}catch{}try{toolbar.displayName="toolbar",toolbar.__docgenInfo={description:`Renders a toolbar.

To add controls, simply pass \`ToolbarButton\` components as children.

\`\`\`jsx
import { Toolbar, ToolbarButton } from '@wordpress/components';
import { formatBold, formatItalic, link } from '@wordpress/icons';

function MyToolbar() {
  return (
    <Toolbar label="Options">
      <ToolbarButton icon={ formatBold } label="Bold" />
      <ToolbarButton icon={ formatItalic } label="Italic" />
      <ToolbarButton icon={ link } label="Link" />
    </Toolbar>
  );
}
\`\`\``,displayName:"toolbar",props:{}}}catch{}function po(o,t){return s.useContext(f)?e(y,{ref:t,...o.toggleProps,children:r=>e(v,{...o,popoverProps:{...o.popoverProps},toggleProps:r})}):e(v,{...o})}const S=s.forwardRef(po),_e={title:"Components/Toolbar",component:N,subcomponents:{ToolbarButton:i,ToolbarGroup:d,ToolbarItem:y,ToolbarDropdownMenu:S},argTypes:{children:{control:!1},variant:{options:[void 0,"unstyled"],control:{type:"radio"}}},parameters:{controls:{expanded:!0},docs:{canvas:{sourceState:"shown"}}}};function co(){return e(Z,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:e(Y,{d:"M4 18.5h16V17H4v1.5zM16 13v1.5h4V13h-4zM5.1 15h7.8c.6 0 1.1-.5 1.1-1.1V6.1c0-.6-.5-1.1-1.1-1.1H5.1C4.5 5 4 5.5 4 6.1v7.8c0 .6.5 1.1 1.1 1.1zm.4-8.5h7V10l-1-1c-.3-.3-.8-.3-1 0l-1.6 1.5-1.2-.7c-.3-.2-.6-.2-.9 0l-1.3 1V6.5zm0 6.1l1.8-1.3 1.3.8c.3.2.7.2.9-.1l1.5-1.4 1.5 1.4v1.5h-7v-.9z"})})}const I=o=>e("div",{style:{height:280},children:e(N,{...o})}),h=I.bind({});h.args={label:"Options",id:"options-toolbar",children:w(A,{children:[e(d,{children:e(i,{icon:z,text:"Paragraph"})}),e(d,{children:e(y,{children:o=>e(v,{icon:P,label:"Align",controls:[{icon:P,title:"Align left",isActive:!0},{icon:D,title:"Align center"},{icon:V,title:"Align right"}],toggleProps:o})})}),w(d,{children:[e(i,{children:"Text"}),e(i,{icon:k,label:"Bold",isPressed:!0}),e(i,{icon:M,label:"Italic"}),e(i,{icon:q,label:"Link"}),e(d,{isCollapsed:!0,icon:null,title:"More rich text controls",controls:[{icon:L,title:"Inline code"},{icon:e(co,{}),title:"Inline image"},{icon:F,title:"Strikethrough"}]})]}),e(d,{icon:$,title:"Align",isCollapsed:!0,controls:[{icon:P,title:"Align left",isActive:!0},{icon:D,title:"Align center"},{icon:V,title:"Align right"}]}),e(S,{icon:X,label:"Select a direction",controls:[{title:"Up",icon:H},{title:"Right",icon:J},{title:"Down",icon:Q},{title:"Left",icon:K}]})]})};const g=I.bind({});g.args={label:"Options",id:"options-toolbar-without-group",children:w(A,{children:[e(i,{icon:k,label:"Bold",isPressed:!0}),e(i,{icon:M,label:"Italic"}),e(i,{icon:q,label:"Link"})]})};const m=I.bind({});m.args={...h.args,variant:"unstyled"};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`props => <div style={{
  height: 280
}}>
        <Toolbar {...props} />
    </div>`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`props => <div style={{
  height: 280
}}>
        <Toolbar {...props} />
    </div>`,...g.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`props => <div style={{
  height: 280
}}>
        <Toolbar {...props} />
    </div>`,...m.parameters?.docs?.source},description:{story:"Set the variant to `unstyled` to remove default border styles.\nOtherwise, leave it as `undefined` for default styles.",...m.parameters?.docs?.description}}};try{m.displayName="Unstyled",m.__docgenInfo={description:"Set the variant to `unstyled` to remove default border styles.\nOtherwise, leave it as `undefined` for default styles.",displayName:"Unstyled",props:{}}}catch{}export{h as Default,m as Unstyled,g as WithoutGroup,_e as default};
