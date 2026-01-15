import{f as m,j as r}from"./iframe-2TvY6Iig.js";import{D as a}from"./component-DRAq-Cya.js";import{T as o}from"./component-DEBvv9-v.js";import{F as s}from"./component-l_ygUujJ.js";import"./preload-helper-Zf8nSx-t.js";import"./emotion-react.browser.esm-T2caqgd_.js";import"./space-CjrGwnR-.js";import"./rtl-C-j_aU_R.js";import"./default-i18n-SWt35ZM4.js";import"./use-context-system-GBkKyJuM.js";import"./index-DUXT-3wK.js";import"./is-plain-object-BJ3z7EOF.js";import"./index-BtJmv7lM.js";import"./index-CK8hcbFu.js";import"./A3CZKICO-_ze9_0UX.js";import"./LMDWO4NN-CH0ROf0T.js";import"./hook-D7E4jAJ2.js";import"./names-BarMHYgS.js";import"./config-values-CkVNYk_w.js";import"./colors-values-BSq3yUT9.js";import"./index-CWa7Pedq.js";import"./hook-CHurV6sy.js";import"./values-CtPxXHrl.js";import"./component-DATVQiJy.js";import"./context-DbMhvW6o.js";import"./index-BjRskdOB.js";import"./use-responsive-value-bUbLlkWc.js";const G={component:a,title:"Components/Divider",argTypes:{margin:{control:{type:"text"}},marginStart:{control:{type:"text"}},marginEnd:{control:{type:"text"}},wrapElement:{control:!1},ref:{table:{disable:!0}}},tags:["status-experimental"],parameters:{controls:{expanded:!0},docs:{canvas:{sourceState:"shown"}}}},n=d=>m("div",{children:[r(o,{children:"Some text before the divider"}),r(a,{...d}),r(o,{children:"Some text after the divider"})]}),e=n.bind({});e.args={margin:"2"};const t=n.bind({});t.args={...e.args,orientation:"vertical"};const i=d=>m(s,{align:"stretch",children:[r(o,{children:"Some text before the divider Some text before the divider Some text before the divider Some text before the divider Some text before the divider Some text before the divider Some text before the divider"}),r(a,{...d}),r(o,{children:"Some text after the divider Some text after the divider Some text after the divider"})]});i.args={...t.args};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`args => <div>
        <Text>Some text before the divider</Text>
        <Divider {...args} />
        <Text>Some text after the divider</Text>
    </div>`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => <div>
        <Text>Some text before the divider</Text>
        <Divider {...args} />
        <Text>Some text after the divider</Text>
    </div>`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`args => {
  return <Flex align="stretch">
            <Text>
                Some text before the divider Some text before the divider Some
                text before the divider Some text before the divider Some text
                before the divider Some text before the divider Some text before
                the divider
            </Text>
            <Divider {...args} />
            <Text>
                Some text after the divider Some text after the divider Some
                text after the divider
            </Text>
        </Flex>;
}`,...i.parameters?.docs?.source}}};export{e as Horizontal,i as InFlexContainer,t as Vertical,G as default};
