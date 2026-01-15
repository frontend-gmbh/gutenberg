import{j as n,f as a,F as l}from"./iframe-2TvY6Iig.js";import{D as u}from"./index-djnRrerp.js";import{B as g}from"./index-CFuMsoxH.js";import{M as t,a as s}from"./index-BoXUQHNw.js";import{D as d}from"./dropdown-content-wrapper-Chks6K4_.js";import"./preload-helper-Zf8nSx-t.js";import"./index-CLatOAvg.js";import"./index-BjRskdOB.js";import"./index-DNvM-K8Z.js";import"./floating-ui.react-dom-lQIVkebl.js";import"./index-C7vWhNYT.js";import"./default-i18n-SWt35ZM4.js";import"./platform-Dx-VEEF7.js";import"./index-g4CI5goq.js";import"./index-mcCfYwbk.js";import"./index-DDuNjadK.js";import"./index-Ct0bDPBV.js";import"./index-B18ctdHe.js";import"./T6C2RYFI-BXv3qAIm.js";import"./LVA2YJMS-Bhv8eVm0.js";import"./LMDWO4NN-CH0ROf0T.js";import"./floating-ui.utils.dom-BlKqeV2W.js";import"./index-CniSQ6kN.js";import"./index--WI9l4jM.js";import"./index-CHj7W0Xl.js";import"./index-CZo2zBTA.js";import"./v4-CtRu48qb.js";import"./component-DATVQiJy.js";import"./index-D4zU5mcb.js";import"./index-Dt7LODwq.js";import"./index-BjXx3EE5.js";import"./index-1YdoA736.js";import"./cubic-bezier-CfzpfWNY.js";import"./dropdown-motion-BuMQU1CT.js";import"./use-context-system-GBkKyJuM.js";import"./index-DUXT-3wK.js";import"./is-plain-object-BJ3z7EOF.js";import"./index-BtJmv7lM.js";import"./index-CK8hcbFu.js";import"./proxy-DY4LNgox.js";import"./close-H02ILkEf.js";import"./index-BIvJ8ozV.js";import"./use-controlled-value-D6nr5Y4s.js";import"./index-Dnuq8uNu.js";import"./component-BGXh8e92.js";import"./emotion-react.browser.esm-T2caqgd_.js";import"./space-CjrGwnR-.js";const{fn:m}=__STORYBOOK_MODULE_TEST__,de={title:"Components/Overlays/Dropdown",id:"components-dropdown",component:u,subcomponents:{DropdownContentWrapper:d},args:{onClose:m(),onToggle:m()},argTypes:{focusOnMount:{options:["firstElement",!0,!1],control:{type:"radio"}},position:{control:!1},renderContent:{control:!1},renderToggle:{control:!1},open:{control:!1},defaultOpen:{control:!1},onToggle:{control:!1},onClose:{control:!1}},parameters:{controls:{expanded:!0}}},e={args:{renderToggle:({isOpen:p,onToggle:c})=>n(g,{onClick:c,"aria-expanded":p,variant:"primary",children:"Open dropdown"}),renderContent:()=>n("div",{children:"This is the dropdown content."})}},o={...e,args:{...e.args,renderContent:()=>a(d,{paddingSize:"medium",children:["Content wrapped with ",n("code",{children:'paddingSize="medium"'}),"."]})}},r={...e,args:{...e.args,renderContent:()=>a(d,{paddingSize:"none",children:["Content wrapped with ",n("code",{children:'paddingSize="none"'}),"."]})}},i={...e,args:{...e.args,renderContent:()=>a(l,{children:[n(t,{children:"Standalone Item"}),a(s,{label:"Group 1",children:[n(t,{children:"Item 1"}),n(t,{children:"Item 2"})]}),a(s,{label:"Group 2",children:[n(t,{children:"Item 1"}),n(t,{children:"Item 2"})]})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    renderToggle: ({
      isOpen,
      onToggle
    }) => <Button onClick={onToggle} aria-expanded={isOpen} variant="primary">
                Open dropdown
            </Button>,
    renderContent: () => <div>This is the dropdown content.</div>
  }
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    renderContent: () => <DropdownContentWrapper paddingSize="medium">
                {/* eslint-disable react/no-unescaped-entities */}
                Content wrapped with <code>paddingSize="medium"</code>.
                {/* eslint-enable react/no-unescaped-entities */}
            </DropdownContentWrapper>
  }
}`,...o.parameters?.docs?.source},description:{story:'To apply more padding to the dropdown content, use the provided `<DropdownContentWrapper>`\nconvenience wrapper. A `paddingSize` of `"medium"` is suitable for relatively larger dropdowns (default is `"small"`).',...o.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    renderContent: () => <DropdownContentWrapper paddingSize="none">
                {/* eslint-disable react/no-unescaped-entities */}
                Content wrapped with <code>paddingSize="none"</code>.
                {/* eslint-enable react/no-unescaped-entities */}
            </DropdownContentWrapper>
  }
}`,...r.parameters?.docs?.source},description:{story:'The `<DropdownContentWrapper>` convenience wrapper can also be used to remove padding entirely,\nwith a `paddingSize` of `"none"`. This can also serve as a clean foundation to add arbitrary\npaddings, for example when child components already have padding on their own.',...r.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    renderContent: () => <>
                <MenuItem>Standalone Item</MenuItem>
                <MenuGroup label="Group 1">
                    <MenuItem>Item 1</MenuItem>
                    <MenuItem>Item 2</MenuItem>
                </MenuGroup>
                <MenuGroup label="Group 2">
                    <MenuItem>Item 1</MenuItem>
                    <MenuItem>Item 2</MenuItem>
                </MenuGroup>
            </>
  }
}`,...i.parameters?.docs?.source}}};try{o.displayName="WithMorePadding",o.__docgenInfo={description:'To apply more padding to the dropdown content, use the provided `<DropdownContentWrapper>`\nconvenience wrapper. A `paddingSize` of `"medium"` is suitable for relatively larger dropdowns (default is `"small"`).',displayName:"WithMorePadding",props:{}}}catch{}try{r.displayName="WithNoPadding",r.__docgenInfo={description:'The `<DropdownContentWrapper>` convenience wrapper can also be used to remove padding entirely,\nwith a `paddingSize` of `"none"`. This can also serve as a clean foundation to add arbitrary\npaddings, for example when child components already have padding on their own.',displayName:"WithNoPadding",props:{}}}catch{}export{e as Default,i as WithMenuItems,o as WithMorePadding,r as WithNoPadding,de as default};
