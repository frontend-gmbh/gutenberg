import{a as t,M as s}from"./iframe-2TvY6Iig.js";import{useMDXComponents as o}from"./index-CwqzOGow.js";import{T as i}from"./index.story-BhoEqESp.js";import"./preload-helper-Zf8nSx-t.js";import"./index-BjXx3EE5.js";import"./default-i18n-SWt35ZM4.js";import"./space-CjrGwnR-.js";import"./index-Dnuq8uNu.js";import"./index-BIvJ8ozV.js";import"./tab-panel-B4o09bys.js";import"./VEVQD5MH-Ca19Sw7m.js";import"./P2CTZE2T-C4NqLDvb.js";import"./LMDWO4NN-CH0ROf0T.js";import"./LVA2YJMS-Bhv8eVm0.js";import"./T6C2RYFI-BXv3qAIm.js";import"./floating-ui.utils.dom-BlKqeV2W.js";import"./KPEX55MY-CF5SoIBi.js";import"./ITI7HKP4-_BMwSXRb.js";import"./colors-values-BSq3yUT9.js";import"./config-values-CkVNYk_w.js";import"./font-Cck9kG94.js";import"./chevron-right-B_j0E9jL.js";import"./index-CLatOAvg.js";import"./use-animated-offset-rect-BxGHKIlu.js";import"./index-Di3oHLN4.js";import"./index-DCGL3fHb.js";import"./index--WI9l4jM.js";import"./index-CHj7W0Xl.js";import"./index-CZo2zBTA.js";import"./v4-CtRu48qb.js";import"./component-DATVQiJy.js";import"./index-D4zU5mcb.js";import"./index-CFuMsoxH.js";import"./index-BjRskdOB.js";import"./index-Dt7LODwq.js";import"./index-1YdoA736.js";import"./cubic-bezier-CfzpfWNY.js";import"./dropdown-motion-BuMQU1CT.js";import"./component-BGXh8e92.js";import"./use-context-system-GBkKyJuM.js";import"./index-DUXT-3wK.js";import"./is-plain-object-BJ3z7EOF.js";import"./index-BtJmv7lM.js";import"./index-CK8hcbFu.js";import"./wordpress-25v04gA5.js";import"./link-DIbhJbQ8.js";import"./more-DAulmHt7.js";function a(n){const e={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...o(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(s,{of:i,name:"Best Practices"}),`
`,t.jsx(e.h1,{id:"tabs",children:"Tabs"}),`
`,t.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,t.jsx(e.h3,{id:"uncontrolled-mode",children:"Uncontrolled Mode"}),`
`,t.jsxs(e.p,{children:["Tabs can be used in an uncontrolled mode, where the component manages its own state. In this mode, the ",t.jsx(e.code,{children:"defaultTabId"})," prop can be used to set the initially selected tab. If this prop is not set, the first tab will be selected by default. In addition, in most cases where the currently active tab becomes disabled or otherwise unavailable, uncontrolled mode will automatically fall back to selecting the first available tab."]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-jsx",children:`import { Tabs } from '@wordpress/components';

const onSelect = ( tabName ) => {
	console.log( 'Selecting tab', tabName );
};

const MyUncontrolledTabs = () => (
	<Tabs onSelect={ onSelect } defaultTabId="tab2">
		<Tabs.TabList>
			<Tabs.Tab tabId="tab1" title="Tab 1">
				Tab 1
			</Tabs.Tab>
			<Tabs.Tab tabId="tab2" title="Tab 2">
				Tab 2
			</Tabs.Tab>
			<Tabs.Tab tabId="tab3" title="Tab 3">
				Tab 3
			</Tabs.Tab>
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
	</Tabs>
);
`})}),`
`,t.jsx(e.h3,{id:"controlled-mode",children:"Controlled Mode"}),`
`,t.jsxs(e.p,{children:["Tabs can also be used in a controlled mode, where the parent component specifies the ",t.jsx(e.code,{children:"selectedTabId"})," and the ",t.jsx(e.code,{children:"onSelect"})," props to control tab selection. In this mode, the ",t.jsx(e.code,{children:"defaultTabId"})," prop will be ignored if it is provided. If the ",t.jsx(e.code,{children:"selectedTabId"})," is ",t.jsx(e.code,{children:"null"}),", no tab is selected. In this mode, if the currently selected tab becomes disabled or otherwise unavailable, the component will ",t.jsx(e.em,{children:"not"})," fall back to another available tab, leaving the controlling component in charge of implementing the desired logic."]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-tsx",children:`import { Tabs } from '@wordpress/components';

const [ selectedTabId, setSelectedTabId ] = useState<
	string | undefined | null
>();

const onSelect = ( tabName ) => {
	console.log( 'Selecting tab', tabName );
};

const MyControlledTabs = () => (
	<Tabs
		selectedTabId={ selectedTabId }
		onSelect={ ( selectedId ) => {
			setSelectedTabId( selectedId );
			onSelect( selectedId );
		} }
	>
		<Tabs.TabList>
			<Tabs.Tab tabId="tab1" title="Tab 1">
				Tab 1
			</Tabs.Tab>
			<Tabs.Tab tabId="tab2" title="Tab 2">
				Tab 2
			</Tabs.Tab>
			<Tabs.Tab tabId="tab3" title="Tab 3">
				Tab 3
			</Tabs.Tab>
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
	</Tabs>
);
`})}),`
`,t.jsxs(e.h3,{id:"using-tabs-with-links",children:["Using ",t.jsx(e.code,{children:"Tabs"})," with links"]}),`
`,t.jsxs(e.p,{children:["The semantics implemented by the ",t.jsx(e.code,{children:"Tabs"})," component don't align well with the semantics needed by a list of links. Furthermore, end users usually expect every link to be tabbable, while ",t.jsx(e.code,{children:"Tabs.Tablist"})," is a ",t.jsx(e.a,{href:"https://w3c.github.io/aria/#composite",rel:"nofollow",children:"composite"})," widget acting as a single tab stop."]}),`
`,t.jsxs(e.p,{children:["For these reasons, even if the ",t.jsx(e.code,{children:"Tabs"})," component is fully extensible, we don't recommend using ",t.jsx(e.code,{children:"Tabs"})," with links, and we don't currently provide any related Storybook example."]})]})}function tt(n={}){const{wrapper:e}={...o(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(a,{...n})}):a(n)}export{tt as default};
