import{f as e,j as i,F as r}from"./iframe-2TvY6Iig.js";import{V as a}from"./component-BGXh8e92.js";import"./preload-helper-Zf8nSx-t.js";import"./use-context-system-GBkKyJuM.js";import"./index-DUXT-3wK.js";import"./is-plain-object-BJ3z7EOF.js";import"./index-BtJmv7lM.js";import"./index-CK8hcbFu.js";import"./component-DATVQiJy.js";const V={component:a,title:"Components/Typography/VisuallyHidden",id:"components-visuallyhidden",argTypes:{children:{control:!1},as:{control:{type:"text"}}},parameters:{controls:{expanded:!0},docs:{canvas:{sourceState:"shown"}}}},t=s=>e(r,{children:[i(a,{as:"span",...s,children:"This should not show."}),e("div",{children:["This text will"," ",e(a,{as:"span",...s,children:["but not inline"," "]})," ","always show."]})]}),d=s=>e(r,{children:["Additional props can be passed to VisuallyHidden and are forwarded to the rendered element."," ",e(a,{as:"span","data-id":"test",...s,children:["Check out my data attribute!"," "]}),"Inspect the HTML to see!"]}),o=s=>e(r,{children:["Additional class names passed to VisuallyHidden extend the component class name."," ",e(a,{as:"label",className:"test-input",...s,children:["Check out my class!"," "]}),"Inspect the HTML to see!"]});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => <>
        <VisuallyHidden as="span" {...args}>
            This should not show.
        </VisuallyHidden>
        <div>
            This text will{' '}
            <VisuallyHidden as="span" {...args}>
                but not inline{' '}
            </VisuallyHidden>{' '}
            always show.
        </div>
    </>`,...t.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`args => <>
        Additional props can be passed to VisuallyHidden and are forwarded to
        the rendered element.{' '}
        <VisuallyHidden as="span" data-id="test" {...args}>
            Check out my data attribute!{' '}
        </VisuallyHidden>
        Inspect the HTML to see!
    </>`,...d.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`args => <>
        Additional class names passed to VisuallyHidden extend the component
        class name.{' '}
        <VisuallyHidden as="label" className="test-input" {...args}>
            Check out my class!{' '}
        </VisuallyHidden>
        Inspect the HTML to see!
    </>`,...o.parameters?.docs?.source}}};export{t as Default,o as WithAdditionalClassNames,d as WithForwardedProps,V as default};
