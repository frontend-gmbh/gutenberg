import{r as s,f as i,j as e,G as R}from"./iframe-2TvY6Iig.js";import{B as v}from"./index-CFuMsoxH.js";import{P as c}from"./index-DNvM-K8Z.js";import{P as S}from"./index--WI9l4jM.js";import"./preload-helper-Zf8nSx-t.js";import"./index-BjRskdOB.js";import"./index-BjXx3EE5.js";import"./index-Dt7LODwq.js";import"./index-1YdoA736.js";import"./cubic-bezier-CfzpfWNY.js";import"./T6C2RYFI-BXv3qAIm.js";import"./LVA2YJMS-Bhv8eVm0.js";import"./LMDWO4NN-CH0ROf0T.js";import"./floating-ui.utils.dom-BlKqeV2W.js";import"./dropdown-motion-BuMQU1CT.js";import"./index-Dnuq8uNu.js";import"./index-BIvJ8ozV.js";import"./component-BGXh8e92.js";import"./use-context-system-GBkKyJuM.js";import"./index-DUXT-3wK.js";import"./is-plain-object-BJ3z7EOF.js";import"./index-BtJmv7lM.js";import"./index-CK8hcbFu.js";import"./component-DATVQiJy.js";import"./floating-ui.react-dom-lQIVkebl.js";import"./index-C7vWhNYT.js";import"./default-i18n-SWt35ZM4.js";import"./platform-Dx-VEEF7.js";import"./index-g4CI5goq.js";import"./index-mcCfYwbk.js";import"./index-DDuNjadK.js";import"./index-Ct0bDPBV.js";import"./index-CLatOAvg.js";import"./index-B18ctdHe.js";import"./index-CniSQ6kN.js";import"./index-CZo2zBTA.js";import"./v4-CtRu48qb.js";import"./index-CHj7W0Xl.js";import"./proxy-DY4LNgox.js";import"./close-H02ILkEf.js";import"./index-D4zU5mcb.js";const V=({children:n,...t})=>{const[o,r]=s.useState();return e("iframe",{...t,title:"My Iframe",srcDoc:"<!doctype html><html><body></body></html>",onLoad:a=>{a.currentTarget.contentDocument&&r(a.currentTarget.contentDocument.body)},children:o&&R.createPortal(n,o)})},y=n=>{const t="my-slot",[o,r]=s.useState(null);return i(S,{children:[e(c.Slot,{name:t}),e(V,{style:{width:"100%",height:"400px",border:"0",outline:"1px solid purple"},children:i("div",{style:{height:"200vh",paddingTop:"10vh"},children:[e("p",{style:{padding:"8px",background:"salmon",maxWidth:"200px",marginTop:"100px",marginLeft:"auto",marginRight:"auto"},ref:r,children:"Popover's anchor"}),e(c,{...n,__unstableSlotName:t,anchor:o})]})})]})};try{y.displayName="PopoverInsideIframeRenderedInExternalSlot",y.__docgenInfo={description:"",displayName:"PopoverInsideIframeRenderedInExternalSlot",props:{children:{defaultValue:null,description:"The `children` elements rendered as the popover's content.",name:"children",required:!0,type:{name:"ReactNode"}},animate:{defaultValue:{value:"true"},description:"Whether the popover should animate when opening.",name:"animate",required:!1,type:{name:"boolean"}},offset:{defaultValue:null,description:"The distance (in px) between the anchor and the popover.",name:"offset",required:!1,type:{name:"number"}},onClose:{defaultValue:null,description:"A callback invoked when the popover should be closed.",name:"onClose",required:!1,type:{name:"() => void"}},anchor:{defaultValue:null,description:"The element that should be used by the popover as its anchor. It can either\nbe an `Element` or, alternatively, a `VirtualElement` — ie. an object with\nthe `getBoundingClientRect()` and the `ownerDocument` properties defined.\n\n**The anchor element should be stored in local state** rather than a\nplain React ref to ensure reactive updating when it changes.",name:"anchor",required:!1,type:{name:"Element | VirtualElement"}},expandOnMobile:{defaultValue:null,description:"Show the popover fullscreen on mobile viewports.",name:"expandOnMobile",required:!1,type:{name:"boolean"}},focusOnMount:{defaultValue:{value:"'firstElement'"},description:'By default, the _first tabbable element_ in the popover will receive focus\nwhen it mounts. This is the same as setting this prop to `"firstElement"`.\nSpecifying a `false` value disables the focus handling entirely (this\nshould only be done when an appropriately accessible substitute behavior\nexists).',name:"focusOnMount",required:!1,type:{name:'boolean | "firstElement"'}},headerTitle:{defaultValue:null,description:"Used to customize the header text shown when the popover is toggled to\nfullscreen on mobile viewports (see the `expandOnMobile` prop).",name:"headerTitle",required:!1,type:{name:"string"}},position:{defaultValue:null,description:"Legacy way to specify the popover's position with respect to its anchor.\n_Note: this prop is deprecated. Use the `placement` prop instead._",name:"position",required:!1,type:{name:"enum",value:[{value:'"middle"'},{value:'"bottom"'},{value:'"top"'},{value:'"middle center"'},{value:'"middle left"'},{value:'"middle right"'},{value:'"bottom center"'},{value:'"bottom left"'},{value:'"bottom right"'},{value:'"top center"'},{value:'"top left"'},{value:'"top right"'},{value:'"middle center left"'},{value:'"middle center right"'},{value:'"middle center bottom"'},{value:'"middle center top"'},{value:'"middle left left"'},{value:'"middle left right"'},{value:'"middle left bottom"'},{value:'"middle left top"'},{value:'"middle right left"'},{value:'"middle right right"'},{value:'"middle right bottom"'},{value:'"middle right top"'},{value:'"bottom center left"'},{value:'"bottom center right"'},{value:'"bottom center bottom"'},{value:'"bottom center top"'},{value:'"bottom left left"'},{value:'"bottom left right"'},{value:'"bottom left bottom"'},{value:'"bottom left top"'},{value:'"bottom right left"'},{value:'"bottom right right"'},{value:'"bottom right bottom"'},{value:'"bottom right top"'},{value:'"top center left"'},{value:'"top center right"'},{value:'"top center bottom"'},{value:'"top center top"'},{value:'"top left left"'},{value:'"top left right"'},{value:'"top left bottom"'},{value:'"top left top"'},{value:'"top right left"'},{value:'"top right right"'},{value:'"top right bottom"'},{value:'"top right top"'}]}},variant:{defaultValue:{value:"undefined"},description:`Specifies the popover's style.

Leave undefined for the default style. Other values are:
- 'unstyled':  The popover is essentially without any visible style, it
               has no background, border, outline or drop shadow, but
               the popover contents are still displayed.
- 'toolbar':   A style that has no elevation, but a high contrast with
               other elements. This is matches the style of the
               \`Toolbar\` component.`,name:"variant",required:!1,type:{name:"enum",value:[{value:'"toolbar"'},{value:'"unstyled"'}]}},resize:{defaultValue:{value:"true"},description:"Adjusts the size of the popover to prevent its contents from going out of\nview when meeting the viewport edges.\n_Note: The `resize` and `shift` props are not intended to be used together.\nEnabling both can cause unexpected behavior._",name:"resize",required:!1,type:{name:"boolean"}},shift:{defaultValue:{value:"false"},description:"Enables the `Popover` to shift in order to stay in view when meeting the\nviewport edges.\n_Note: The `resize` and `shift` props are not intended to be used together.\nEnabling both can cause unexpected behavior._",name:"shift",required:!1,type:{name:"boolean"}},inline:{defaultValue:{value:"false"},description:"Whether to render the popover inline or within the slot.",name:"inline",required:!1,type:{name:"boolean"}},flip:{defaultValue:{value:"true"},description:`Specifies whether the popover should flip across its axis if there isn't
space for it in the normal placement.
When the using a 'top' placement, the popover will switch to a 'bottom'
placement. When using a 'left' placement, the popover will switch to a
\`right' placement.
The popover will retain its alignment of 'start' or 'end' when flipping.`,name:"flip",required:!1,type:{name:"boolean"}},__unstableSlotName:{defaultValue:{value:"'Popover'"},description:"The name of the Slot in which the popover should be rendered. It should\nbe also passed to the corresponding `PopoverSlot` component.",name:"__unstableSlotName",required:!1,type:{name:"string"}},constrainTabbing:{defaultValue:{value:"`focusOnMount` !== false"},description:`Determines whether tabbing is constrained to within the popover,
preventing keyboard focus from leaving the popover content without
explicit focus elswhere, or whether the popover remains part of the wider
tab order. If no value is passed, it will be derived from \`focusOnMount\`.`,name:"constrainTabbing",required:!1,type:{name:"boolean"}},onFocusOutside:{defaultValue:null,description:`A callback invoked when the focus leaves the opened popover. This should
only be provided in advanced use-cases when a popover should close under
specific circumstances (for example, if the new \`document.activeElement\`
is content of or otherwise controlling popover visibility).

When not provided, the \`onClose\` callback will be called instead.`,name:"onFocusOutside",required:!1,type:{name:"(event: SyntheticEvent<Element, Event>) => void"}},noArrow:{defaultValue:{value:"true"},description:"Used to show/hide the arrow that points at the popover's anchor.",name:"noArrow",required:!1,type:{name:"boolean"}},placement:{defaultValue:{value:"'bottom-start'"},description:"Used to specify the popover's position with respect to its anchor.",name:"placement",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"bottom"'},{value:'"overlay"'},{value:'"top"'},{value:'"left-end"'},{value:'"left-start"'},{value:'"right-end"'},{value:'"right-start"'},{value:'"bottom-end"'},{value:'"bottom-start"'},{value:'"top-end"'},{value:'"top-start"'}]}},__unstableForcePosition:{defaultValue:null,description:"Prevent the popover from flipping and resizing when meeting the viewport\nedges. _Note: this prop is deprecated. Instead, provide use the individual\n`flip` and `resize` props._\n@deprecated",name:"__unstableForcePosition",required:!1,type:{name:"boolean"}},anchorRect:{defaultValue:null,description:"An object extending a `DOMRect` with an additional optional `ownerDocument`\nproperty, used to specify a fixed popover position.\n@deprecated",name:"anchorRect",required:!1,type:{name:"DomRectWithOwnerDocument"}},anchorRef:{defaultValue:null,description:"Used to specify a fixed popover position. It can be an `Element`, a React\nreference to an `element`, an object with a `top` and a `bottom` properties\n(both pointing to elements), or a `range`.\n@deprecated",name:"anchorRef",required:!1,type:{name:"Element | PopoverAnchorRefReference | PopoverAnchorRefTopBottom | Range"}},getAnchorRect:{defaultValue:null,description:"A function returning the same value as the one expected by the `anchorRect`\nprop, used to specify a dynamic popover position.\n@deprecated",name:"getAnchorRect",required:!1,type:{name:"(fallbackReferenceElement: Element) => DomRectWithOwnerDocument"}},isAlternate:{defaultValue:null,description:`Used to enable a different visual style for the popover.
_Note: this prop is deprecated. Use the \`variant\` prop with the
'toolbar' value instead._
@deprecated`,name:"isAlternate",required:!1,type:{name:"boolean"}},as:{defaultValue:null,description:"The HTML element or React component to render the component as.",name:"as",required:!1,type:{name:"any"}}}}}catch{}const E=["top","top-start","top-end","right","right-start","right-end","bottom","bottom-start","bottom-end","left","left-start","left-end","overlay"],me={title:"Components/Overlays/Popover",id:"components-popover",component:c,subcomponents:{"Popover.Slot":c.Slot},argTypes:{anchor:{control:!1},anchorRef:{control:!1},anchorRect:{control:!1},children:{control:!1},focusOnMount:{control:{type:"select"},options:["firstElement",!0,!1]},getAnchorRect:{control:!1},onClose:{action:"onClose"},onFocusOutside:{action:"onFocusOutside"},__unstableSlotName:{control:!1}},parameters:{controls:{expanded:!0}}},I=n=>{const[t,o]=s.useState(null);return i("div",{style:{height:"200px",display:"flex",justifyContent:"center",alignItems:"center"},children:[e("p",{style:{padding:"8px",background:"salmon"},ref:o,children:"Popover's anchor"}),e(c,{...n,anchor:t})]})},l={decorators:[n=>{const[t,o]=s.useState(!1),r=s.useRef(),a=f=>{r.current&&f.target!==r.current||o(g=>!g)};return s.useEffect(()=>{r.current?.scrollIntoView?.({block:"center",inline:"center"})},[]),e("div",{style:{width:"300vw",height:"300vh",display:"flex",alignItems:"center",justifyContent:"center"},children:i(v,{variant:"secondary",onClick:a,ref:r,children:["Toggle Popover",t&&e(n,{})]})})}],args:{children:e("div",{style:{width:"280px",whiteSpace:"normal"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."})}},d={...l,args:{...l.args,variant:"unstyled"}},p={render:({children:n,...t})=>i("div",{style:{minWidth:"600px",marginLeft:"auto",marginRight:"auto"},children:[e("h2",{children:"Resize / scroll the viewport to test the behavior of the popovers when they reach the viewport boundaries."}),e("div",{children:E.map(o=>i(I,{placement:o,...t,resize:o==="overlay"?!0:t.resize,children:[n,e("div",{children:i("small",{children:["(placement: ",o,")"]})})]},o))})]}),parameters:{controls:{exclude:["placement","position"]}},args:{...l.args,children:e("div",{style:{width:"280px",whiteSpace:"normal"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),noArrow:!1,offset:10,resize:!1,flip:!1}},u={decorators:[n=>{const[t,o]=s.useState(200);return i("div",{style:{padding:"20px"},children:[i("div",{children:[e(v,{variant:"primary",onClick:()=>o(t+100),style:{marginRight:"20px"},children:"Increase Size"}),e(v,{variant:"primary",onClick:()=>o(t-100),children:"Decrease Size"})]}),e("p",{children:"When the height of the popover exceeds the available space in the canvas, a scrollbar inside the popover should appear."}),i("div",{children:[e("style",{children:`.components-popover { --dynamic-height: ${t}px; }`}),e(n,{})]})]})}],args:{...l.args,children:e("div",{style:{height:"var(--dynamic-height)",background:"#eee",padding:"20px"},children:"Content with dynamic height"})}},h={render:n=>e(y,{...n}),args:{...l.args}},m={render:function(t){const[o,r]=s.useState(!1),a=s.useRef(null),f=b=>{a.current&&b.target!==a.current||r(x=>!x)},g=()=>{t.onClose?.(),r(!1)},w=b=>{t.onFocusOutside?.(b),r(!1)};return s.useEffect(()=>{a.current?.scrollIntoView({block:"center",inline:"center"})},[]),e("div",{style:{width:"300vw",height:"300vh",display:"flex",alignItems:"center",justifyContent:"center"},children:i(v,{variant:"secondary",onClick:f,ref:a,children:["Toggle Popover",o&&e(c,{...t,onClose:g,onFocusOutside:w,children:t.children})]})})},args:{...l.args,focusOnMount:!0,children:i("div",{style:{width:"280px",whiteSpace:"normal"},children:[e("p",{children:"Clicking outside triggers the onFocusOutside callback prop."}),e("p",{children:"Pressing the Escape key triggers the onClose callback prop."})]})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  decorators: [Story => {
    const [isVisible, setIsVisible] = useState(false);
    const buttonRef = useRef<HTMLButtonElement | undefined>();
    const toggleVisible = (event: React.MouseEvent) => {
      if (buttonRef.current && event.target !== buttonRef.current) {
        return;
      }
      setIsVisible(state => !state);
    };
    useEffect(() => {
      buttonRef.current?.scrollIntoView?.({
        block: 'center',
        inline: 'center'
      });
    }, []);
    return <div style={{
      width: '300vw',
      height: '300vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
                    <Button variant="secondary" onClick={toggleVisible} ref={buttonRef}>
                        Toggle Popover
                        {isVisible && <Story />}
                    </Button>
                </div>;
  }],
  args: {
    children: <div style={{
      width: '280px',
      whiteSpace: 'normal'
    }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
            </div>
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    variant: 'unstyled'
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: ({
    children,
    ...args
  }) => <div style={{
    minWidth: '600px',
    marginLeft: 'auto',
    marginRight: 'auto'
  }}>
            <h2>
                Resize / scroll the viewport to test the behavior of the
                popovers when they reach the viewport boundaries.
            </h2>
            <div>
                {AVAILABLE_PLACEMENTS.map(p => <PopoverWithAnchor key={p} placement={p} {...args} resize={p === 'overlay' ? true : args.resize}>
                        {children}
                        <div>
                            <small>(placement: {p})</small>
                        </div>
                    </PopoverWithAnchor>)}
            </div>
        </div>,
  // Excluding placement and position since they all possible values
  // are passed directly in code.
  parameters: {
    controls: {
      exclude: ['placement', 'position']
    }
  },
  args: {
    ...Default.args,
    children: <div style={{
      width: '280px',
      whiteSpace: 'normal'
    }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>,
    noArrow: false,
    offset: 10,
    resize: false,
    flip: false
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  decorators: [Story => {
    const [height, setHeight] = useState(200);
    const increase = () => setHeight(height + 100);
    const decrease = () => setHeight(height - 100);
    return <div style={{
      padding: '20px'
    }}>
                    <div>
                        <Button variant="primary" onClick={increase} style={{
          marginRight: '20px'
        }}>
                            Increase Size
                        </Button>

                        <Button variant="primary" onClick={decrease}>
                            Decrease Size
                        </Button>
                    </div>

                    <p>
                        When the height of the popover exceeds the available
                        space in the canvas, a scrollbar inside the popover
                        should appear.
                    </p>

                    <div>
                        <style>{\`.components-popover { --dynamic-height: \${height}px; }\`}</style>
                        <Story />
                    </div>
                </div>;
  }],
  args: {
    ...Default.args,
    children: <div style={{
      height: 'var(--dynamic-height)',
      background: '#eee',
      padding: '20px'
    }}>
                Content with dynamic height
            </div>
  }
}`,...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => <PopoverInsideIframeRenderedInExternalSlot {...args} />,
  args: {
    ...Default.args
  }
}`,...h.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function WithCloseHandlersStory(args) {
    const [isVisible, setIsVisible] = useState(false);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const toggleVisible = (event: React.MouseEvent) => {
      if (buttonRef.current && event.target !== buttonRef.current) {
        return;
      }
      setIsVisible(prev => !prev);
    };
    const handleClose = () => {
      args.onClose?.();
      setIsVisible(false);
    };
    const handleFocusOutside = (e: React.SyntheticEvent) => {
      args.onFocusOutside?.(e);
      setIsVisible(false);
    };
    useEffect(() => {
      buttonRef.current?.scrollIntoView({
        block: 'center',
        inline: 'center'
      });
    }, []);
    return <div style={{
      width: '300vw',
      height: '300vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
                <Button variant="secondary" onClick={toggleVisible} ref={buttonRef}>
                    Toggle Popover
                    {isVisible && <Popover {...args} onClose={handleClose} onFocusOutside={handleFocusOutside}>
                            {args.children}
                        </Popover>}
                </Button>
            </div>;
  },
  args: {
    ...Default.args,
    focusOnMount: true,
    children: <div style={{
      width: '280px',
      whiteSpace: 'normal'
    }}>
                <p>
                    Clicking outside triggers the onFocusOutside callback prop.
                </p>
                <p>
                    Pressing the Escape key triggers the onClose callback prop.
                </p>
            </div>
  }
}`,...m.parameters?.docs?.source}}};export{p as AllPlacements,l as Default,u as DynamicHeight,d as Unstyled,m as WithCloseHandlers,h as WithSlotOutsideIframe,me as default};
