import{j as i}from"./iframe-2TvY6Iig.js";import{a as e}from"./default-i18n-SWt35ZM4.js";import{b as s}from"./index-WfDDlHKp.js";import{W as a}from"./index-BEfOBBBG.js";import"./preload-helper-Zf8nSx-t.js";import"./index-BjRskdOB.js";import"./index-BjXx3EE5.js";import"./index-CnMiRX9-.js";import"./cubic-bezier-CfzpfWNY.js";import"./T6C2RYFI-BXv3qAIm.js";import"./LVA2YJMS-Bhv8eVm0.js";import"./LMDWO4NN-CH0ROf0T.js";import"./floating-ui.utils.dom-BlKqeV2W.js";import"./dropdown-motion-BMzsbdcX.js";import"./index-DdMUBdEx.js";import"./index-BIvJ8ozV.js";import"./component-BHPgM0nZ.js";import"./component-OVYdkCXu.js";import"./index-DUXT-3wK.js";import"./is-plain-object-BJ3z7EOF.js";import"./index-CK8hcbFu.js";import"./index-BAuZ3O0F.js";import"./index-DfbEstxj.js";import"./index-CLatOAvg.js";import"./use-controlled-value-BWWH94q-.js";import"./index-DYs7VejG.js";import"./floating-ui.react-dom-lQIVkebl.js";import"./index-C7vWhNYT.js";import"./platform-Dx-VEEF7.js";import"./index-g4CI5goq.js";import"./index-mcCfYwbk.js";import"./index-DDuNjadK.js";import"./index-Ct0bDPBV.js";import"./index-B18ctdHe.js";import"./index-CHj7W0Xl.js";import"./v4-CtRu48qb.js";import"./client-DnFbMQ_a.js";import"./index-D4zU5mcb.js";import"./proxy-DY4LNgox.js";import"./close-H02ILkEf.js";import"./menu-dczDR4cj.js";import"./index-DsxFbW9d.js";import"./more-vertical-Cm1H6tez.js";const X={title:"BlockEditor/Warning",component:a,parameters:{docs:{canvas:{sourceState:"shown"},description:{component:"Displays a warning message with optional action buttons and secondary actions dropdown."}}},argTypes:{children:{control:"text",description:"Intended to represent the block to which the warning pertains.",table:{type:{summary:"string|element"}}},className:{control:"text",description:"Classes to pass to element.",table:{type:{summary:"string"}}},actions:{control:"object",description:"An array of elements to be rendered as action buttons in the warning element.",table:{type:{summary:"Element[]"}}},secondaryActions:{control:"object",description:"An array of { title, onClick } to be rendered as options in a dropdown of secondary actions.",table:{type:{summary:"{ title: string, onClick: Function }[]"}}}}},t={args:{children:e("This block ran into an issue.")}},r={args:{...t.args,actions:[i(s,{__next40pxDefaultSize:!0,variant:"primary",children:e("Fix issue")},"fix-issue")]}},o={args:{...t.args,secondaryActions:[{title:e("Get help")},{title:e("Remove block")}]}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    children: __('This block ran into an issue.')
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    actions: [<Button key="fix-issue" __next40pxDefaultSize variant="primary">
                {__('Fix issue')}
            </Button>]
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    secondaryActions: [{
      title: __('Get help')
    }, {
      title: __('Remove block')
    }]
  }
}`,...o.parameters?.docs?.source}}};export{t as Default,r as WithActions,o as WithSecondaryActions,X as default};
