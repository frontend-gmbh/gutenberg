import{r as c,e as _,f as s,j as e,c as D,F as U}from"./iframe-2TvY6Iig.js";import{u as H}from"./index-BjXx3EE5.js";import{i as Y}from"./default-i18n-SWt35ZM4.js";import{s as g}from"./space-CjrGwnR-.js";import{I as j}from"./index-Dnuq8uNu.js";import{b as G,a as X,T as K,u as J}from"./tab-panel-B4o09bys.js";import{C as m}from"./colors-values-BSq3yUT9.js";import{C as q}from"./config-values-CkVNYk_w.js";import{f as Q}from"./font-Cck9kG94.js";import{c as Z}from"./chevron-right-B_j0E9jL.js";import{u as ee}from"./index-CLatOAvg.js";import{u as ae,a as te}from"./use-animated-offset-rect-BxGHKIlu.js";import{u as ne}from"./index-Di3oHLN4.js";import{u as I}from"./LVA2YJMS-Bhv8eVm0.js";import{F as se,S as ie,P as oe}from"./index--WI9l4jM.js";import{B}from"./index-CFuMsoxH.js";import{T as re}from"./index-Dt7LODwq.js";import{w as be}from"./wordpress-25v04gA5.js";import{l as le}from"./link-DIbhJbQ8.js";import{m as de}from"./more-DAulmHt7.js";const E=c.createContext(void 0);E.displayName="TabsContext";const N=()=>c.useContext(E),ce=_(X,{target:"enfox0g4"})(`display:flex;align-items:stretch;overflow-x:auto;&[aria-orientation='vertical']{flex-direction:column;}:where( [aria-orientation='horizontal'] ){width:fit-content;}--direction-factor:1;--direction-start:left;--direction-end:right;--selected-start:var( --selected-left, 0 );&:dir( rtl ){--direction-factor:-1;--direction-start:right;--direction-end:left;--selected-start:var( --selected-right, 0 );}@media not ( prefers-reduced-motion ){&[data-indicator-animated]::before{transition-property:transform,border-radius,border-block;transition-duration:0.2s;transition-timing-function:ease-out;}}position:relative;&::before{content:'';position:absolute;pointer-events:none;transform-origin:var( --direction-start ) top;outline:2px solid transparent;outline-offset:-1px;}--antialiasing-factor:100;&[aria-orientation='horizontal']{--fade-width:64px;--fade-gradient-base:transparent 0%,black var( --fade-width );--fade-gradient-composed:var( --fade-gradient-base ),black 60%,transparent 50%;&.is-overflowing-first{mask-image:linear-gradient(
				to var( --direction-end ),
				var( --fade-gradient-base )
			);}&.is-overflowing-last{mask-image:linear-gradient(
				to var( --direction-start ),
				var( --fade-gradient-base )
			);}&.is-overflowing-first.is-overflowing-last{mask-image:linear-gradient(
					to right,
					var( --fade-gradient-composed )
				),linear-gradient( to left, var( --fade-gradient-composed ) );}&::before{bottom:0;height:0;width:calc( var( --antialiasing-factor ) * 1px );transform:translateX(
					calc(
						var( --selected-start ) * var( --direction-factor ) *
							1px
					)
				) scaleX(
					calc(
						var( --selected-width, 0 ) /
							var( --antialiasing-factor )
					)
				);border-bottom:var( --wp-admin-border-width-focus ) solid `,m.theme.accent,";}}&[aria-orientation='vertical']{&::before{border-radius:",q.radiusSmall,`/calc(
					`,q.radiusSmall,` /
						(
							var( --selected-height, 0 ) /
								var( --antialiasing-factor )
						)
				);top:0;left:0;width:100%;height:calc( var( --antialiasing-factor ) * 1px );transform:translateY( calc( var( --selected-top, 0 ) * 1px ) ) scaleY(
					calc(
						var( --selected-height, 0 ) /
							var( --antialiasing-factor )
					)
				);background-color:color-mix(
				in srgb,
				`,m.theme.accent,`,
				transparent 96%
			);}&[data-select-on-move='true']:has(
				:is( :focus-visible, [data-focus-visible] )
			)::before{box-sizing:border-box;border:var( --wp-admin-border-width-focus ) solid `,m.theme.accent,`;border-block-width:calc(
				var( --wp-admin-border-width-focus, 1px ) /
					(
						var( --selected-height, 0 ) /
							var( --antialiasing-factor )
					)
			);}}`),Te=_(K,{target:"enfox0g3"})("&{border-radius:0;background:transparent;border:none;box-shadow:none;flex:1 0 auto;white-space:nowrap;display:flex;align-items:center;cursor:pointer;line-height:1.2;font-weight:400;font-size:",Q("default.fontSize"),";color:",m.theme.foreground,";position:relative;&[aria-disabled='true']{cursor:default;color:",m.ui.textDisabled,";}&:not( [aria-disabled='true'] ):is( :hover, [data-focus-visible] ){color:",m.theme.accent,";}&:focus:not( :disabled ){box-shadow:none;outline:none;}&::after{position:absolute;pointer-events:none;outline:var( --wp-admin-border-width-focus ) solid ",m.theme.accent,";border-radius:",q.radiusSmall,";opacity:0;@media not ( prefers-reduced-motion ){transition:opacity 0.1s linear;}}&[data-focus-visible]::after{opacity:1;}}[aria-orientation='horizontal'] &{padding-inline:",g(4),";height:",g(12),";scroll-margin:24px;&::after{content:'';inset:",g(3),";}}[aria-orientation='vertical'] &{padding:",g(2)," ",g(3),";min-height:",g(10),";&[aria-selected='true']{color:",m.theme.accent,";fill:currentColor;}}[aria-orientation='vertical'][data-select-on-move='false'] &::after{content:'';inset:var( --wp-admin-border-width-focus );}"),pe=_("span",{target:"enfox0g2"})({name:"9at4z3",styles:"flex-grow:1;display:flex;align-items:center;[aria-orientation='horizontal'] &{justify-content:center;}[aria-orientation='vertical'] &{justify-content:start;}"}),he=_(j,{target:"enfox0g1"})("flex-shrink:0;margin-inline-end:",g(-1),";[aria-orientation='horizontal'] &{display:none;}opacity:0;[role='tab']:is( [aria-selected='true'], [data-focus-visible], :hover ) &{opacity:1;}@media not ( prefers-reduced-motion ){[data-select-on-move='true'] [role='tab']:is( [aria-selected='true'],  ) &{transition:opacity 0.15s 0.15s linear;}}&:dir( rtl ){rotate:180deg;}"),ue=_(G,{target:"enfox0g0"})("&:focus{box-shadow:none;outline:none;}&[data-focus-visible]{box-shadow:0 0 0 var( --wp-admin-border-width-focus ) ",m.theme.accent,";outline:2px solid transparent;outline-offset:0;}"),fe=c.forwardRef(function({children:t,tabId:i,disabled:d,render:r,...T},b){const{store:p,instanceId:h}=N()??{};if(!p)return null;const l=`${h}-${i}`;return s(Te,{ref:b,store:p,id:l,disabled:d,render:r,...T,children:[e(pe,{children:t}),e(he,{icon:Z})]})});function me(n,t){const[i,d]=c.useState(!1),[r,T]=c.useState(!1),[b,p]=c.useState(),h=ne(l=>{for(const o of l)o.target===t.first&&d(!o.isIntersecting),o.target===t.last&&T(!o.isIntersecting)});return c.useEffect(()=>{if(!n||!window.IntersectionObserver)return;const l=new IntersectionObserver(h,{root:n,threshold:.9});return p(l),()=>l.disconnect()},[h,n]),c.useEffect(()=>{if(b)return t.first&&b.observe(t.first),t.last&&b.observe(t.last),()=>{t.first&&b.unobserve(t.first),t.last&&b.unobserve(t.last)}},[t.first,t.last,b]),{first:i,last:r}}const ve=24;function ge(n,t,{margin:i=ve}={}){c.useLayoutEffect(()=>{if(!n||!t)return;const{scrollLeft:d}=n,r=n.getBoundingClientRect().width,{left:T,width:b}=t,p=d+r,l=T+b+i-p,o=d-(T-i);let u=null;o>0?u=d-o:l>0&&(u=d+l),u!==null&&n.scroll?.({left:u})},[i,n,t])}const Ie=c.forwardRef(function({children:t,...i},d){const{store:r}=N()??{},T=I(r,"selectedId"),b=I(r,"activeId"),p=I(r,"selectOnMove"),h=I(r,"items"),[l,o]=c.useState(),u=ee([d,o]),v=r?.item(T),P=I(r,"renderedItems"),A=P&&v?P.indexOf(v):-1,R=ae(v?.element,[A]),f=me(l,{first:h?.at(0)?.element,last:h?.at(-1)?.element});te(l,R,{prefix:"selected",dataAttribute:"indicator-animated",transitionEndFilter:W=>W.pseudoElement==="::before",roundRect:!0}),ge(l,R);const F=()=>{p&&T!==b&&r?.setActiveId(T)};return r?e(ce,{ref:u,store:r,render:W=>e("div",{...W,tabIndex:W.tabIndex??-1}),onBlur:F,"data-select-on-move":p?"true":"false",...i,className:D(f.first&&"is-overflowing-first",f.last&&"is-overflowing-last",i.className),children:t}):null}),we=c.forwardRef(function({children:t,tabId:i,focusable:d=!0,...r},T){const b=N(),p=I(b?.store,"selectedId");if(!b)return null;const{store:h,instanceId:l}=b,o=`${l}-${i}`;return e(ue,{ref:T,store:h,id:`${o}-view`,tabId:o,focusable:d,...r,children:p===o&&t})});function z(n,t){return n&&`${t}-${n}`}function V(n,t){return typeof n=="string"?n.replace(`${t}-`,""):n}const a=Object.assign(function n({selectOnMove:t=!0,defaultTabId:i,orientation:d="horizontal",onSelect:r,children:T,selectedTabId:b,activeTabId:p,defaultActiveTabId:h,onActiveTabIdChange:l}){const o=H(n,"tabs"),u=J({selectOnMove:t,orientation:d,defaultSelectedId:z(i,o),setSelectedId:f=>{r?.(V(f,o))},selectedId:z(b,o),defaultActiveId:z(h,o),setActiveId:f=>{l?.(V(f,o))},activeId:z(p,o),rtl:Y()}),{items:v,activeId:P}=I(u),{setActiveId:A}=u;c.useEffect(()=>{requestAnimationFrame(()=>{const f=v?.[0]?.element?.ownerDocument.activeElement;!f||!v.some(F=>f===F.element)||P!==f.id&&A(f.id)})},[P,v,A]);const R=c.useMemo(()=>({store:u,instanceId:o}),[u,o]);return e(E.Provider,{value:R,children:T})},{Tab:Object.assign(fe,{displayName:"Tabs.Tab"}),TabList:Object.assign(Ie,{displayName:"Tabs.TabList"}),TabPanel:Object.assign(we,{displayName:"Tabs.TabPanel"}),Context:Object.assign(E,{displayName:"Tabs.Context"})});try{a.displayName="Tabs",a.__docgenInfo={description:`Tabs is a collection of React components that combine to render
an [ARIA-compliant tabs pattern](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/).

Tabs organizes content across different screens, data sets, and interactions.
It has two sections: a list of tabs, and the view to show when a tab is chosen.

\`Tabs\` itself is a wrapper component and context provider.
It is responsible for managing the state of the tabs, and rendering one instance of the \`Tabs.TabList\` component and one or more instances of the \`Tab.TabPanel\` component.`,displayName:"Tabs",props:{children:{defaultValue:null,description:"The children elements, which should include one instance of the\n`Tabs.Tablist` component and as many instances of the `Tabs.TabPanel`\ncomponents as there are `Tabs.Tab` components.",name:"children",required:!0,type:{name:"ReactNode"}},selectOnMove:{defaultValue:{value:"true"},description:`Determines if the tab should be selected when it receives focus. If set to
\`false\`, the tab will only be selected upon clicking, not when using arrow
keys to shift focus (manual tab activation). See the [official W3C docs](https://www.w3.org/WAI/ARIA/apg/patterns/tabpanel/)
for more info.`,name:"selectOnMove",required:!1,type:{name:"boolean"}},selectedTabId:{defaultValue:null,description:`The id of the tab whose panel is currently visible.

If left \`undefined\`, it will be automatically set to the first enabled
tab, and the component assumes it is being used in "uncontrolled" mode.

Consequently, any value different than \`undefined\` will set the component
in "controlled" mode. When in "controlled" mode, the \`null\` value will
result in no tabs being selected, and the tablist becoming tabbable.`,name:"selectedTabId",required:!1,type:{name:"string"}},defaultTabId:{defaultValue:null,description:`The id of the tab whose panel is currently visible.

If left \`undefined\`, it will be automatically set to the first enabled
tab. If set to \`null\`, no tab will be selected, and the tablist will be
tabbable.

Note: this prop will be overridden by the \`selectedTabId\` prop if it is
provided (meaning the component will be used in "controlled" mode).`,name:"defaultTabId",required:!1,type:{name:"string"}},onSelect:{defaultValue:null,description:"The function called when the `selectedTabId` changes.",name:"onSelect",required:!1,type:{name:"(selectedId: string) => void"}},activeTabId:{defaultValue:null,description:"The current active tab `id`. The active tab is the tab element within the\ntablist widget that has DOM focus.\n\n- `null` represents the tablist (ie. the base composite element). Users\n  will be able to navigate out of it using arrow keys.\n- If `activeTabId` is initially set to `null`, the base composite element\n  itself will have focus and users will be able to navigate to it using\n  arrow keys.",name:"activeTabId",required:!1,type:{name:"string"}},defaultActiveTabId:{defaultValue:null,description:"The tab id that should be active by default when the composite widget is\nrendered. If `null`, the tablist element itself will have focus\nand users will be able to navigate to it using arrow keys. If `undefined`,\nthe first enabled item will be focused.\n\nNote: this prop will be overridden by the `activeTabId` prop if it is\nprovided.",name:"defaultActiveTabId",required:!1,type:{name:"string"}},onActiveTabIdChange:{defaultValue:null,description:"A callback that gets called when the `activeTabId` state changes.",name:"onActiveTabIdChange",required:!1,type:{name:"(activeId: string) => void"}},orientation:{defaultValue:{value:'"horizontal"'},description:"Defines the orientation of the tablist and determines which arrow keys\ncan be used to move focus:\n\n- `both`: all arrow keys work.\n- `horizontal`: only left and right arrow keys work.\n- `vertical`: only up and down arrow keys work.",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"both"'},{value:'"horizontal"'},{value:'"vertical"'}]}}}}}catch{}const{fn:$}=__STORYBOOK_MODULE_TEST__,ye={title:"Components/Containers/Tabs",id:"components-tabs",component:a,subcomponents:{"Tabs.TabList":a.TabList,"Tabs.Tab":a.Tab,"Tabs.TabPanel":a.TabPanel,"Tabs.Context":a.Context},tags:["status-private"],parameters:{controls:{expanded:!0},docs:{canvas:{sourceState:"shown"}}},args:{onActiveTabIdChange:$(),onSelect:$()}},M=n=>s(a,{...n,children:[s(a.TabList,{children:[e(a.Tab,{tabId:"tab1",children:"Tab 1"}),e(a.Tab,{tabId:"tab2",children:"Tab 2"}),e(a.Tab,{tabId:"tab3",children:"Tab 3"})]}),e(a.TabPanel,{tabId:"tab1",children:e("p",{children:"Selected tab: Tab 1"})}),e(a.TabPanel,{tabId:"tab2",children:e("p",{children:"Selected tab: Tab 2"})}),s(a.TabPanel,{tabId:"tab3",focusable:!1,children:[e("p",{children:"Selected tab: Tab 3"}),s("p",{children:["This tabpanel has its ",e("code",{children:"focusable"})," prop set to",e("code",{children:" false"}),", so it won't get a tab stop.",e("br",{}),"Instead, the [Tab] key will move focus to the first focusable element within the panel."]}),e(B,{variant:"primary",children:"I'm a button!"})]})]}),x=M.bind({}),w=n=>{const[t,i]=c.useState(!1);return s("div",{children:[s("div",{style:{maxWidth:"40rem",marginBottom:"1rem"},children:[e("p",{children:"This story helps understand how the TabList component behaves under different conditions. The container below (with the dotted red border) can be horizontally resized, and it has a bit of padding to be out of the way of the TabList."}),s("p",{children:["The button will toggle between full width (adding"," ",e("code",{children:"width: 100%"}),") and the default width."]}),e("p",{children:"Try the following:"}),s("ul",{children:[s("li",{children:[e("strong",{children:"Small container"})," that causes tabs to overflow with scroll."]}),s("li",{children:[e("strong",{children:"Large container"})," that exceeds the normal width of the tabs.",s("ul",{children:[s("li",{children:[s("strong",{children:["With ",e("code",{children:"width: 100%"})]})," ","set on the TabList (tabs fill up the space)."]}),s("li",{children:[s("strong",{children:["Without ",e("code",{children:"width: 100%"})]})," ","(defaults to ",e("code",{children:"auto"}),") set on the TabList (tabs take up space proportional to their content)."]})]})]})]})]}),e(B,{style:{marginBottom:"1rem"},variant:"primary",onClick:()=>i(!t),children:t?"Remove width: 100% from TabList":"Set width: 100% in TabList"}),s(a,{...n,children:[e("div",{style:{width:"20rem",border:"2px dotted red",padding:"1rem",resize:"horizontal",overflow:"auto"},children:s(a.TabList,{style:{maxWidth:"100%",width:t?"100%":void 0},children:[e(a.Tab,{tabId:"tab1",children:"Label with multiple words"}),e(a.Tab,{tabId:"tab2",children:"Short"}),e(a.Tab,{tabId:"tab3",children:"Hippopotomonstrosesquippedaliophobia"}),e(a.Tab,{tabId:"tab4",children:"Tab 4"}),e(a.Tab,{tabId:"tab5",children:"Tab 5"})]})}),s(a.TabPanel,{tabId:"tab1",children:[e("p",{children:"Selected tab: Tab 1"}),e("p",{children:"(Label with multiple words)"})]}),s(a.TabPanel,{tabId:"tab2",children:[e("p",{children:"Selected tab: Tab 2"}),e("p",{children:"(Short)"})]}),s(a.TabPanel,{tabId:"tab3",children:[e("p",{children:"Selected tab: Tab 3"}),e("p",{children:"(Hippopotomonstrosesquippedaliophobia)"})]}),e(a.TabPanel,{tabId:"tab4",children:e("p",{children:"Selected tab: Tab 4"})}),e(a.TabPanel,{tabId:"tab5",children:e("p",{children:"Selected tab: Tab 5"})})]})]})};w.args={defaultTabId:"tab4"};const Se=n=>e(a,{orientation:"vertical",...n,children:s(a.TabList,{style:{maxWidth:"10rem"},children:[e(a.Tab,{tabId:"tab1",children:"Tab 1"}),e(a.Tab,{tabId:"tab2",children:"Tab 2"}),e(a.Tab,{tabId:"tab3",children:"Tab 3"})]})}),L=Se.bind({}),Pe=n=>s(a,{...n,children:[s(a.TabList,{children:[e(a.Tab,{tabId:"tab1",disabled:!0,children:"Tab 1"}),e(a.Tab,{tabId:"tab2",children:"Tab 2"}),e(a.Tab,{tabId:"tab3",children:"Tab 3"})]}),e(a.TabPanel,{tabId:"tab1",children:e("p",{children:"Selected tab: Tab 1"})}),e(a.TabPanel,{tabId:"tab2",children:e("p",{children:"Selected tab: Tab 2"})}),e(a.TabPanel,{tabId:"tab3",children:e("p",{children:"Selected tab: Tab 3"})})]}),O=Pe.bind({}),xe=n=>s(a,{...n,children:[e(a.TabList,{children:[{id:"tab1",label:"Tab one",icon:be},{id:"tab2",label:"Tab two",icon:le},{id:"tab3",label:"Tab three",icon:de}].map(({id:t,label:i,icon:d})=>e(re,{text:i,children:e(a.Tab,{tabId:t,"aria-label":i,children:e(j,{icon:d})})},t))}),e(a.TabPanel,{tabId:"tab1",children:e("p",{children:"Selected tab: Tab 1"})}),e(a.TabPanel,{tabId:"tab2",children:e("p",{children:"Selected tab: Tab 2"})}),e(a.TabPanel,{tabId:"tab3",children:e("p",{children:"Selected tab: Tab 3"})})]}),k=xe.bind({}),y=M.bind({});y.args={selectOnMove:!1};const Le=n=>s(oe,{children:[s(a,{...n,children:[s(a.TabList,{children:[e(a.Tab,{tabId:"tab1",children:"Tab 1"}),e(a.Tab,{tabId:"tab2",children:"Tab 2"}),e(a.Tab,{tabId:"tab3",children:"Tab 3"})]}),s(se,{name:"tabs-are-fun",children:[e(a.TabPanel,{tabId:"tab1",children:e("p",{children:"Selected tab: Tab 1"})}),e(a.TabPanel,{tabId:"tab2",children:e("p",{children:"Selected tab: Tab 2"})}),e(a.TabPanel,{tabId:"tab3",children:e("p",{children:"Selected tab: Tab 3"})})]})]}),s("div",{style:{border:"2px solid #999",width:"300px",margin:"20px auto"},children:[e("p",{children:"other stuff"}),e("p",{children:"other stuff"}),e("p",{children:"this is fun!"}),e("p",{children:"other stuff"}),e(ie,{bubblesVirtually:!0,as:"div",name:"tabs-are-fun"})]})]}),S=Le.bind({});S.storyName="Using SlotFill";const Oe=n=>{const[t,i]=c.useState(!0);return e(U,{children:t?e("div",{style:{width:"400px",height:"100vh",borderRight:"1px solid #333"},children:s(a,{...n,children:[s("div",{style:{display:"flex",borderBottom:"1px solid #333"},children:[s(a.TabList,{children:[e(a.Tab,{tabId:"tab1",children:"Tab 1"}),e(a.Tab,{tabId:"tab2",children:"Tab 2"}),e(a.Tab,{tabId:"tab3",children:"Tab 3"})]}),e(B,{variant:"tertiary",style:{marginLeft:"auto",alignSelf:"center"},onClick:()=>i(!1),children:"Close Tabs"})]}),e(a.TabPanel,{tabId:"tab1",children:e("p",{children:"Selected tab: Tab 1"})}),e(a.TabPanel,{tabId:"tab2",children:e("p",{children:"Selected tab: Tab 2"})}),e(a.TabPanel,{tabId:"tab3",children:e("p",{children:"Selected tab: Tab 3"})})]})}):e(B,{variant:"tertiary",onClick:()=>i(!0),children:"Open Tabs"})})},C=Oe.bind({});x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`props => {
  return <Tabs {...props}>
            <Tabs.TabList>
                <Tabs.Tab tabId="tab1">Tab 1</Tabs.Tab>
                <Tabs.Tab tabId="tab2">Tab 2</Tabs.Tab>
                <Tabs.Tab tabId="tab3">Tab 3</Tabs.Tab>
            </Tabs.TabList>
            <Tabs.TabPanel tabId="tab1">
                <p>Selected tab: Tab 1</p>
            </Tabs.TabPanel>
            <Tabs.TabPanel tabId="tab2">
                <p>Selected tab: Tab 2</p>
            </Tabs.TabPanel>
            <Tabs.TabPanel tabId="tab3" focusable={false}>
                <p>Selected tab: Tab 3</p>
                <p>
                    This tabpanel has its <code>focusable</code> prop set to
                    <code> false</code>, so it won&apos;t get a tab stop.
                    <br />
                    Instead, the [Tab] key will move focus to the first
                    focusable element within the panel.
                </p>
                <Button variant="primary">I&apos;m a button!</Button>
            </Tabs.TabPanel>
        </Tabs>;
}`,...x.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`props => {
  const [fullWidth, setFullWidth] = useState(false);
  return <div>
            <div style={{
      maxWidth: '40rem',
      marginBottom: '1rem'
    }}>
                <p>
                    This story helps understand how the TabList component
                    behaves under different conditions. The container below
                    (with the dotted red border) can be horizontally resized,
                    and it has a bit of padding to be out of the way of the
                    TabList.
                </p>
                <p>
                    The button will toggle between full width (adding{' '}
                    <code>width: 100%</code>) and the default width.
                </p>
                <p>Try the following:</p>
                <ul>
                    <li>
                        <strong>Small container</strong> that causes tabs to
                        overflow with scroll.
                    </li>
                    <li>
                        <strong>Large container</strong> that exceeds the normal
                        width of the tabs.
                        <ul>
                            <li>
                                <strong>
                                    With <code>width: 100%</code>
                                </strong>{' '}
                                set on the TabList (tabs fill up the space).
                            </li>
                            <li>
                                <strong>
                                    Without <code>width: 100%</code>
                                </strong>{' '}
                                (defaults to <code>auto</code>) set on the
                                TabList (tabs take up space proportional to
                                their content).
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <Button style={{
      marginBottom: '1rem'
    }} variant="primary" onClick={() => setFullWidth(!fullWidth)}>
                {fullWidth ? 'Remove width: 100% from TabList' : 'Set width: 100% in TabList'}
            </Button>
            <Tabs {...props}>
                <div style={{
        width: '20rem',
        border: '2px dotted red',
        padding: '1rem',
        resize: 'horizontal',
        overflow: 'auto'
      }}>
                    <Tabs.TabList style={{
          maxWidth: '100%',
          width: fullWidth ? '100%' : undefined
        }}>
                        <Tabs.Tab tabId="tab1">
                            Label with multiple words
                        </Tabs.Tab>
                        <Tabs.Tab tabId="tab2">Short</Tabs.Tab>
                        <Tabs.Tab tabId="tab3">
                            Hippopotomonstrosesquippedaliophobia
                        </Tabs.Tab>
                        <Tabs.Tab tabId="tab4">Tab 4</Tabs.Tab>
                        <Tabs.Tab tabId="tab5">Tab 5</Tabs.Tab>
                    </Tabs.TabList>
                </div>
                <Tabs.TabPanel tabId="tab1">
                    <p>Selected tab: Tab 1</p>
                    <p>(Label with multiple words)</p>
                </Tabs.TabPanel>
                <Tabs.TabPanel tabId="tab2">
                    <p>Selected tab: Tab 2</p>
                    <p>(Short)</p>
                </Tabs.TabPanel>
                <Tabs.TabPanel tabId="tab3">
                    <p>Selected tab: Tab 3</p>
                    <p>(Hippopotomonstrosesquippedaliophobia)</p>
                </Tabs.TabPanel>
                <Tabs.TabPanel tabId="tab4">
                    <p>Selected tab: Tab 4</p>
                </Tabs.TabPanel>
                <Tabs.TabPanel tabId="tab5">
                    <p>Selected tab: Tab 5</p>
                </Tabs.TabPanel>
            </Tabs>
        </div>;
}`,...w.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`props => {
  return <Tabs orientation="vertical" {...props}>
            <Tabs.TabList style={{
      maxWidth: '10rem'
    }}>
                <Tabs.Tab tabId="tab1">Tab 1</Tabs.Tab>
                <Tabs.Tab tabId="tab2">Tab 2</Tabs.Tab>
                <Tabs.Tab tabId="tab3">Tab 3</Tabs.Tab>
            </Tabs.TabList>
        </Tabs>;
}`,...L.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`props => {
  return <Tabs {...props}>
            <Tabs.TabList>
                <Tabs.Tab tabId="tab1" disabled>
                    Tab 1
                </Tabs.Tab>
                <Tabs.Tab tabId="tab2">Tab 2</Tabs.Tab>
                <Tabs.Tab tabId="tab3">Tab 3</Tabs.Tab>
            </Tabs.TabList>
            <Tabs.TabPanel tabId="tab1">
                <p>Selected tab: Tab 1</p>
            </Tabs.TabPanel>
            <Tabs.TabPanel tabId="tab2">
                <p>Selected tab: Tab 2</p>
            </Tabs.TabPanel>
            <Tabs.TabPanel tabId="tab3">
                <p>Selected tab: Tab 3</p>
            </Tabs.TabPanel>
        </Tabs>;
}`,...O.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`props => {
  return <Tabs {...props}>
            <Tabs.TabList>
                {[{
        id: 'tab1',
        label: 'Tab one',
        icon: wordpress
      }, {
        id: 'tab2',
        label: 'Tab two',
        icon: link
      }, {
        id: 'tab3',
        label: 'Tab three',
        icon: more
      }].map(({
        id,
        label,
        icon
      }) => <Tooltip text={label} key={id}>
                        <Tabs.Tab tabId={id} aria-label={label}>
                            <Icon icon={icon} />
                        </Tabs.Tab>
                    </Tooltip>)}
            </Tabs.TabList>
            <Tabs.TabPanel tabId="tab1">
                <p>Selected tab: Tab 1</p>
            </Tabs.TabPanel>
            <Tabs.TabPanel tabId="tab2">
                <p>Selected tab: Tab 2</p>
            </Tabs.TabPanel>
            <Tabs.TabPanel tabId="tab3">
                <p>Selected tab: Tab 3</p>
            </Tabs.TabPanel>
        </Tabs>;
}`,...k.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`props => {
  return <Tabs {...props}>
            <Tabs.TabList>
                <Tabs.Tab tabId="tab1">Tab 1</Tabs.Tab>
                <Tabs.Tab tabId="tab2">Tab 2</Tabs.Tab>
                <Tabs.Tab tabId="tab3">Tab 3</Tabs.Tab>
            </Tabs.TabList>
            <Tabs.TabPanel tabId="tab1">
                <p>Selected tab: Tab 1</p>
            </Tabs.TabPanel>
            <Tabs.TabPanel tabId="tab2">
                <p>Selected tab: Tab 2</p>
            </Tabs.TabPanel>
            <Tabs.TabPanel tabId="tab3" focusable={false}>
                <p>Selected tab: Tab 3</p>
                <p>
                    This tabpanel has its <code>focusable</code> prop set to
                    <code> false</code>, so it won&apos;t get a tab stop.
                    <br />
                    Instead, the [Tab] key will move focus to the first
                    focusable element within the panel.
                </p>
                <Button variant="primary">I&apos;m a button!</Button>
            </Tabs.TabPanel>
        </Tabs>;
}`,...y.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`props => {
  return <SlotFillProvider>
            <Tabs {...props}>
                <Tabs.TabList>
                    <Tabs.Tab tabId="tab1">Tab 1</Tabs.Tab>
                    <Tabs.Tab tabId="tab2">Tab 2</Tabs.Tab>
                    <Tabs.Tab tabId="tab3">Tab 3</Tabs.Tab>
                </Tabs.TabList>
                <Fill name="tabs-are-fun">
                    <Tabs.TabPanel tabId="tab1">
                        <p>Selected tab: Tab 1</p>
                    </Tabs.TabPanel>
                    <Tabs.TabPanel tabId="tab2">
                        <p>Selected tab: Tab 2</p>
                    </Tabs.TabPanel>
                    <Tabs.TabPanel tabId="tab3">
                        <p>Selected tab: Tab 3</p>
                    </Tabs.TabPanel>
                </Fill>
            </Tabs>
            <div style={{
      border: '2px solid #999',
      width: '300px',
      margin: '20px auto'
    }}>
                <p>other stuff</p>
                <p>other stuff</p>
                <p>this is fun!</p>
                <p>other stuff</p>
                <Slot bubblesVirtually as="div" name="tabs-are-fun" />
            </div>
        </SlotFillProvider>;
}`,...S.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`props => {
  const [isOpen, setIsOpen] = useState(true);
  return <>
            {isOpen ? <div style={{
      width: '400px',
      height: '100vh',
      borderRight: '1px solid #333'
    }}>
                    <Tabs {...props}>
                        <div style={{
          display: 'flex',
          borderBottom: '1px solid #333'
        }}>
                            <Tabs.TabList>
                                <Tabs.Tab tabId="tab1">Tab 1</Tabs.Tab>
                                <Tabs.Tab tabId="tab2">Tab 2</Tabs.Tab>
                                <Tabs.Tab tabId="tab3">Tab 3</Tabs.Tab>
                            </Tabs.TabList>
                            <Button variant="tertiary" style={{
            marginLeft: 'auto',
            alignSelf: 'center'
          }} onClick={() => setIsOpen(false)}>
                                Close Tabs
                            </Button>
                        </div>
                        <Tabs.TabPanel tabId="tab1">
                            <p>Selected tab: Tab 1</p>
                        </Tabs.TabPanel>
                        <Tabs.TabPanel tabId="tab2">
                            <p>Selected tab: Tab 2</p>
                        </Tabs.TabPanel>
                        <Tabs.TabPanel tabId="tab3">
                            <p>Selected tab: Tab 3</p>
                        </Tabs.TabPanel>
                    </Tabs>
                </div> : <Button variant="tertiary" onClick={() => setIsOpen(true)}>
                    Open Tabs
                </Button>}
        </>;
}`,...C.parameters?.docs?.source}}};const Ge=Object.freeze(Object.defineProperty({__proto__:null,Default:x,DisabledTab:O,InsertCustomElements:C,ManualActivation:y,SizeAndOverflowPlayground:w,UsingSlotFill:S,Vertical:L,WithTabIconsAndTooltips:k,default:ye},Symbol.toStringTag,{value:"Module"}));export{Ge as T};
