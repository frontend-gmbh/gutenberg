import{r as d,f as D,j as R,c as _}from"./iframe-2TvY6Iig.js";import{u as A}from"./index-CLatOAvg.js";import{d as M}from"./index-BjRskdOB.js";import{P as j}from"./index-DNvM-K8Z.js";import{c as E,u as I}from"./use-context-system-GBkKyJuM.js";import{u as S}from"./use-controlled-value-D6nr5Y4s.js";const B=(a,u)=>{const{renderContent:m,renderToggle:h,className:f,contentClassName:v,expandOnMobile:g,headerTitle:b,focusOnMount:w,popoverProps:e,onClose:y,onToggle:T,style:C,open:P,defaultOpen:O,position:r,variant:k}=I(a,"Dropdown");r!==void 0&&M("`position` prop in wp.components.Dropdown",{since:"6.2",alternative:"`popoverProps.placement` prop",hint:"Note that the `position` prop will override any values passed through the `popoverProps.placement` prop."});const[N,V]=d.useState(null),o=d.useRef(),[t,l]=S({defaultValue:O,value:P,onChange:T});function q(){if(!o.current)return;const{ownerDocument:i}=o.current,p=i?.activeElement?.closest('[role="dialog"]');!o.current.contains(i.activeElement)&&(!p||p.contains(o.current))&&n()}function n(){y?.(),l(!1)}const s={isOpen:!!t,onToggle:()=>l(!t),onClose:n},x=!!e?.anchor||!!e?.anchorRef||!!e?.getAnchorRect||!!e?.anchorRect;return D("div",{className:f,ref:A([o,u,V]),tabIndex:-1,style:C,children:[h(s),t&&R(j,{position:r,onClose:n,onFocusOutside:q,expandOnMobile:g,headerTitle:b,focusOnMount:w,offset:13,anchor:x?void 0:N,variant:k,...e,className:_("components-dropdown__content",e?.className,v),children:m(s)})]})},c=E(B,"Dropdown");try{c.displayName="Dropdown",c.__docgenInfo={description:`Renders a button that opens a floating content modal when clicked.

\`\`\`jsx
import { Button, Dropdown } from '@wordpress/components';

const MyDropdown = () => (
  <Dropdown
    className="my-container-class-name"
    contentClassName="my-dropdown-content-classname"
    popoverProps={ { placement: 'bottom-start' } }
    renderToggle={ ( { isOpen, onToggle } ) => (
      <Button
        variant="primary"
        onClick={ onToggle }
        aria-expanded={ isOpen }
      >
        Toggle Dropdown!
      </Button>
    ) }
    renderContent={ () => <div>This is the content of the dropdown.</div> }
  />
);
\`\`\``,displayName:"Dropdown",props:{className:{defaultValue:null,description:"The className of the global container.",name:"className",required:!1,type:{name:"string"}},contentClassName:{defaultValue:null,description:`If you want to target the dropdown menu for styling purposes,
you need to provide a contentClassName because it's not being rendered
as a child of the container node.`,name:"contentClassName",required:!1,type:{name:"string"}},expandOnMobile:{defaultValue:{value:"false"},description:"Opt-in prop to show popovers fullscreen on mobile.",name:"expandOnMobile",required:!1,type:{name:"boolean"}},focusOnMount:{defaultValue:{value:"'firstElement'"},description:`By default, the first tabbable element in the popover will receive focus
when it mounts. This is the same as setting this prop to "firstElement".
Specifying a true value will focus the container instead.
Specifying a false value disables the focus handling entirely
(this should only be done when an appropriately accessible
substitute behavior exists).`,name:"focusOnMount",required:!1,type:{name:'boolean | "firstElement"'}},headerTitle:{defaultValue:null,description:`Set this to customize the text that is shown in the dropdown's header
when it is fullscreen on mobile.`,name:"headerTitle",required:!1,type:{name:"string"}},onClose:{defaultValue:null,description:"A callback invoked when the popover should be closed.",name:"onClose",required:!1,type:{name:"() => void"}},onToggle:{defaultValue:null,description:`A callback invoked when the state of the dropdown changes
from open to closed and vice versa.`,name:"onToggle",required:!1,type:{name:"(willOpen: boolean) => void"}},popoverProps:{defaultValue:null,description:`Properties of popoverProps object will be passed as props
to the Popover component.
Use this object to access properties/features
of the Popover component that are not already exposed
in the Dropdown component,
e.g.: the ability to have the popover without an arrow.`,name:"popoverProps",required:!1,type:{name:'Omit<ComponentPropsWithoutRef<WordPressComponent<ElementType<any, keyof IntrinsicElements>, Omit<WordPressComponentProps<PopoverProps, "div", false>, "onDrag" | ... 56 more ... | "ignoreStrict"> & RefAttributes<...>, boolean> & { ...; }>, "children">'}},renderContent:{defaultValue:null,description:`A callback invoked to render the content of the dropdown menu.
Its first argument is the same as the renderToggle prop.`,name:"renderContent",required:!0,type:{name:"(props: CallbackProps) => ReactNode"}},renderToggle:{defaultValue:null,description:`A callback invoked to render the Dropdown Toggle Button.

The first argument of the callback is an object
containing the following properties:

- isOpen: whether the dropdown menu is opened or not
- onToggle: A function switching the dropdown menu's state
from open to closed and vice versa
- onClose: A function that closes the menu if invoked`,name:"renderToggle",required:!0,type:{name:"(props: CallbackProps) => ReactNode"}},style:{defaultValue:null,description:"The style of the global container.",name:"style",required:!1,type:{name:"CSSProperties"}},position:{defaultValue:null,description:"Legacy way to specify the popover's position with respect to its anchor.\nFor details about the possible values, see the `Popover` component's docs.\n_Note: this prop is deprecated. Use the `popoverProps.placement` prop\ninstead._\n@deprecated",name:"position",required:!1,type:{name:"enum",value:[{value:'"middle"'},{value:'"bottom"'},{value:'"top"'},{value:'"middle center"'},{value:'"middle left"'},{value:'"middle right"'},{value:'"bottom center"'},{value:'"bottom left"'},{value:'"bottom right"'},{value:'"top center"'},{value:'"top left"'},{value:'"top right"'},{value:'"middle center left"'},{value:'"middle center right"'},{value:'"middle center bottom"'},{value:'"middle center top"'},{value:'"middle left left"'},{value:'"middle left right"'},{value:'"middle left bottom"'},{value:'"middle left top"'},{value:'"middle right left"'},{value:'"middle right right"'},{value:'"middle right bottom"'},{value:'"middle right top"'},{value:'"bottom center left"'},{value:'"bottom center right"'},{value:'"bottom center bottom"'},{value:'"bottom center top"'},{value:'"bottom left left"'},{value:'"bottom left right"'},{value:'"bottom left bottom"'},{value:'"bottom left top"'},{value:'"bottom right left"'},{value:'"bottom right right"'},{value:'"bottom right bottom"'},{value:'"bottom right top"'},{value:'"top center left"'},{value:'"top center right"'},{value:'"top center bottom"'},{value:'"top center top"'},{value:'"top left left"'},{value:'"top left right"'},{value:'"top left bottom"'},{value:'"top left top"'},{value:'"top right left"'},{value:'"top right right"'},{value:'"top right bottom"'},{value:'"top right top"'}]}},open:{defaultValue:null,description:"The controlled open state of the dropdown.\nMust be used in conjunction with `onToggle`.",name:"open",required:!1,type:{name:"boolean"}},defaultOpen:{defaultValue:null,description:"The open state of the dropdown when initially rendered.\nUse when you do not need to control its open state. It will be overridden\nby the `open` prop if it is specified on the component's first render.",name:"defaultOpen",required:!1,type:{name:"boolean"}},as:{defaultValue:null,description:"The HTML element or React component to render the component as.",name:"as",required:!1,type:{name:'"symbol" | "object" | "select" | "a" | "abbr" | "address" | "area" | "article" | "aside" | "audio" | "b" | "base" | "bdi" | "bdo" | "big" | "blockquote" | "body" | "br" | "button" | ... 516 more ... | ("view" & FunctionComponent<...>)'}}}}}catch{}export{c as D};
