import{r as i,a}from"./iframe-2TvY6Iig.js";import{b as p}from"./index-WfDDlHKp.js";import{p as m}from"./private-apis-Dwe0Djr_.js";import{u}from"./lock-unlock-e_RTjGZV.js";import{c as f}from"./close-small-D3dHP1RP.js";const{Tabs:t}=u(m);function s({defaultTabId:o,onClose:r,onSelect:b,selectedTab:l,tabs:n,closeButtonLabel:c},d){return a.jsx("div",{className:"block-editor-tabbed-sidebar",children:a.jsxs(t,{selectOnMove:!1,defaultTabId:o,onSelect:b,selectedTabId:l,children:[a.jsxs("div",{className:"block-editor-tabbed-sidebar__tablist-and-close-button",children:[a.jsx(p,{className:"block-editor-tabbed-sidebar__close-button",icon:f,label:c,onClick:()=>r(),size:"compact"}),a.jsx(t.TabList,{className:"block-editor-tabbed-sidebar__tablist",ref:d,children:n.map(e=>a.jsx(t.Tab,{tabId:e.name,className:"block-editor-tabbed-sidebar__tab",children:e.title},e.name))})]}),n.map(e=>a.jsx(t.TabPanel,{tabId:e.name,focusable:!1,className:"block-editor-tabbed-sidebar__tabpanel",ref:e.panelRef,children:e.panel},e.name))]})})}const j=i.forwardRef(s);s.__docgenInfo={description:`A component that creates a tabbed sidebar with a close button.

@see https://github.com/WordPress/gutenberg/blob/HEAD/packages/block-editor/src/components/tabbed-sidebar/README.md

@example
\`\`\`jsx
function MyTabbedSidebar() {
  return (
    <TabbedSidebar
      tabs={ [
        {
          name: 'tab1',
          title: 'Settings',
          panel: <PanelContents />,
        }
      ] }
      onClose={ () => {} }
      onSelect={ () => {} }
      defaultTabId="tab1"
      selectedTab="tab1"
      closeButtonLabel="Close sidebar"
    />
  );
}
\`\`\`

@param {Object}   props                  Component props.
@param {string}   [props.defaultTabId]   The ID of the tab to be selected by default when the component renders.
@param {Function} props.onClose          Function called when the close button is clicked.
@param {Function} props.onSelect         Function called when a tab is selected. Receives the selected tab's ID as an argument.
@param {string}   props.selectedTab      The ID of the currently selected tab.
@param {Array}    props.tabs             Array of tab objects. Each tab should have: name (string), title (string),
                                         panel (React.Node), and optionally panelRef (React.Ref).
@param {string}   props.closeButtonLabel Accessibility label for the close button.
@param {Object}   ref                    Forward ref to the tabs list element.
@return {Element} The tabbed sidebar component.`,methods:[],displayName:"TabbedSidebar"};export{j as T};
