import{j as o,f as l}from"./iframe-2TvY6Iig.js";import{I as c}from"./index-Dnuq8uNu.js";import{V as m}from"./component-6CLxCT3h.js";import{w as g}from"./wordpress-25v04gA5.js";import{P as d,S as h}from"./index-BIvJ8ozV.js";import"./preload-helper-Zf8nSx-t.js";import"./use-context-system-GBkKyJuM.js";import"./index-DUXT-3wK.js";import"./is-plain-object-BJ3z7EOF.js";import"./index-BtJmv7lM.js";import"./index-CK8hcbFu.js";import"./hook-D_MMjSqd.js";import"./values-CtPxXHrl.js";import"./get-valid-children-BTY2hlyh.js";import"./component-CqSZVoza.js";import"./hook-56LQ9BfU.js";import"./emotion-react.browser.esm-T2caqgd_.js";import"./context-DbMhvW6o.js";import"./index-BjRskdOB.js";import"./use-responsive-value-bUbLlkWc.js";import"./space-CjrGwnR-.js";import"./component-DATVQiJy.js";const F={title:"Components/Icon",component:c,parameters:{controls:{expanded:!0},docs:{canvas:{sourceState:"shown"}}}},p=e=>o(c,{...e}),s=p.bind({});s.args={icon:g};const i=e=>o("div",{style:{fill:"blue"},children:o(c,{...e})});i.args={...s.args};const r=p.bind({});r.args={...s.args,icon:({size:e})=>o("img",{width:e,height:e,src:"https://s.w.org/style/images/about/WordPress-logotype-wmark.png",alt:"WordPress"})};r.parameters={docs:{source:{code:`
<Icon
  icon={ ( { size } ) => (
    <img
      width={ size }
      height={ size }
      src="https://s.w.org/style/images/about/WordPress-logotype-wmark.png"
      alt="WordPress"
    />
  ) }
/>
        `}}};const u=({size:e})=>o(h,{width:e,height:e,children:o(d,{d:"M5 4v3h5.5v12h3V7H19V4z"})}),t=p.bind({});t.args={...s.args,icon:o(u,{})};t.parameters={docs:{source:{code:`
const MyIconComponent = ( { size } ) => (
  <SVG width={ size } height={ size }>
    <Path d="M5 4v3h5.5v12h3V7H19V4z" />
  </SVG>
);

<Icon icon={ <MyIconComponent /> } />
        `}}};const n=p.bind({});n.args={...s.args,icon:o(h,{children:o(d,{d:"M5 4v3h5.5v12h3V7H19V4z"})})};const a=e=>l(m,{children:[o(c,{...e}),o("small",{children:"This won’t show an icon if the Dashicons stylesheet isn’t loaded."})]});a.args={...s.args,icon:"wordpress"};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"args => <Icon {...args} />",...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`args => {
  return <div style={{
    fill: 'blue'
  }}>
            <Icon {...args} />
        </div>;
}`,...i.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"args => <Icon {...args} />",...r.parameters?.docs?.source},description:{story:"When `icon` is a function, it will be passed the `size` prop and any other additional props.",...r.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"args => <Icon {...args} />",...t.parameters?.docs?.source},description:{story:"When `icon` is a component, it will be passed the `size` prop and any other additional props.",...t.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"args => <Icon {...args} />",...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`args => {
  return <VStack>
            <Icon {...args} />
            <small>
                This won’t show an icon if the Dashicons stylesheet isn’t
                loaded.
            </small>
        </VStack>;
}`,...a.parameters?.docs?.source},description:{story:`Although it's preferred to use icons from the \`@wordpress/icons\` package, [Dashicons](https://developer.wordpress.org/resource/dashicons/) are still supported,
as long as you are in a context where the Dashicons stylesheet is loaded. To simulate that here,
use the Global CSS Injector in the Storybook toolbar at the top and select the "WordPress" preset.`,...a.parameters?.docs?.description}}};try{r.displayName="WithAFunction",r.__docgenInfo={description:"When `icon` is a function, it will be passed the `size` prop and any other additional props.",displayName:"WithAFunction",props:{}}}catch{}try{t.displayName="WithAComponent",t.__docgenInfo={description:"When `icon` is a component, it will be passed the `size` prop and any other additional props.",displayName:"WithAComponent",props:{}}}catch{}try{a.displayName="WithADashicon",a.__docgenInfo={description:`Although it's preferred to use icons from the \`@wordpress/icons\` package, [Dashicons](https://developer.wordpress.org/resource/dashicons/) are still supported,
as long as you are in a context where the Dashicons stylesheet is loaded. To simulate that here,
use the Global CSS Injector in the Storybook toolbar at the top and select the "WordPress" preset.`,displayName:"WithADashicon",props:{}}}catch{}export{s as Default,i as FillColor,t as WithAComponent,a as WithADashicon,r as WithAFunction,n as WithAnSVG,F as default};
