import{f as l,j as e}from"./iframe-2TvY6Iig.js";import{F as t}from"./component-CqSZVoza.js";import{F as s}from"./component-BiaHS86M.js";import{F as m}from"./component-l_ygUujJ.js";import{V as c}from"./component-DATVQiJy.js";import"./preload-helper-Zf8nSx-t.js";import"./hook-56LQ9BfU.js";import"./emotion-react.browser.esm-T2caqgd_.js";import"./context-DbMhvW6o.js";import"./index-BjRskdOB.js";import"./use-responsive-value-bUbLlkWc.js";import"./space-CjrGwnR-.js";import"./use-context-system-GBkKyJuM.js";import"./index-DUXT-3wK.js";import"./is-plain-object-BJ3z7EOF.js";import"./index-BtJmv7lM.js";import"./index-CK8hcbFu.js";const w={component:m,title:"Components/Flex",subcomponents:{FlexBlock:s,FlexItem:t},argTypes:{align:{control:{type:"text"}},as:{control:{type:"text"}},children:{control:!1},gap:{control:{type:"text"}},justify:{control:{type:"text"}},isReversed:{table:{disable:!0}}},parameters:{controls:{expanded:!0},docs:{canvas:{sourceState:"shown"}}}},r=({children:o})=>e(c,{style:{backgroundColor:"#eee",padding:10},children:o}),n=({...o})=>l(m,{...o,children:[e(t,{children:e(r,{children:"Item 1"})}),e(t,{children:e(r,{children:"Item 2"})}),e(t,{children:e(r,{children:"Item 3"})})]});n.args={};const a=({...o})=>l(m,{...o,children:[e(t,{children:e(r,{children:"Item 1"})}),e(s,{children:e(r,{children:"Item 2"})}),e(t,{children:e(r,{children:"Item 3"})}),e(t,{children:e(r,{children:"Item 4"})})]});a.args={direction:["column","row"]};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`({
  ...args
}) => {
  return <Flex {...args}>
            <FlexItem>
                <GrayBox>Item 1</GrayBox>
            </FlexItem>
            <FlexItem>
                <GrayBox>Item 2</GrayBox>
            </FlexItem>
            <FlexItem>
                <GrayBox>Item 3</GrayBox>
            </FlexItem>
        </Flex>;
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`({
  ...args
}) => {
  return <Flex {...args}>
            <FlexItem>
                <GrayBox>Item 1</GrayBox>
            </FlexItem>
            <FlexBlock>
                <GrayBox>Item 2</GrayBox>
            </FlexBlock>
            <FlexItem>
                <GrayBox>Item 3</GrayBox>
            </FlexItem>
            <FlexItem>
                <GrayBox>Item 4</GrayBox>
            </FlexItem>
        </Flex>;
}`,...a.parameters?.docs?.source}}};export{n as Default,a as ResponsiveDirection,w as default};
