import{e as C,r as w,j as t,f,F as b}from"./iframe-2TvY6Iig.js";import{c as S}from"./emotion-react.browser.esm-T2caqgd_.js";import{w as n,k as x,n as _}from"./names-BarMHYgS.js";import{a as j}from"./a11y-BEyCqtkW.js";import{C as h}from"./colors-values-BSq3yUT9.js";import{a as I}from"./use-context-system-GBkKyJuM.js";import{B as g}from"./index-CFuMsoxH.js";import{H as O}from"./component-CIWI0tS-.js";import"./preload-helper-Zf8nSx-t.js";import"./index-DUXT-3wK.js";import"./is-plain-object-BJ3z7EOF.js";import"./index-BtJmv7lM.js";import"./index-CK8hcbFu.js";import"./index-BjRskdOB.js";import"./index-BjXx3EE5.js";import"./index-Dt7LODwq.js";import"./index-1YdoA736.js";import"./cubic-bezier-CfzpfWNY.js";import"./T6C2RYFI-BXv3qAIm.js";import"./LVA2YJMS-Bhv8eVm0.js";import"./LMDWO4NN-CH0ROf0T.js";import"./floating-ui.utils.dom-BlKqeV2W.js";import"./dropdown-motion-BuMQU1CT.js";import"./index-Dnuq8uNu.js";import"./index-BIvJ8ozV.js";import"./component-BGXh8e92.js";import"./component-DATVQiJy.js";import"./hook-D_MMjSqd.js";import"./values-CtPxXHrl.js";import"./get-valid-children-BTY2hlyh.js";import"./component-CqSZVoza.js";import"./hook-56LQ9BfU.js";import"./context-DbMhvW6o.js";import"./use-responsive-value-bUbLlkWc.js";import"./space-CjrGwnR-.js";const B=({colors:e})=>{const a=Object.entries(e.gray||{}).map(([r,u])=>`--wp-components-color-gray-${r}: ${u};`).join("");return[S("--wp-components-color-accent:",e.accent,";--wp-components-color-accent-darker-10:",e.accentDarker10,";--wp-components-color-accent-darker-20:",e.accentDarker20,";--wp-components-color-accent-inverted:",e.accentInverted,";--wp-components-color-background:",e.background,";--wp-components-color-foreground:",e.foreground,";--wp-components-color-foreground-inverted:",e.foregroundInverted,";",a,";","")]},D=C("div",{target:"e1krjpvb0"})({name:"1a3idx0",styles:"color:var( --wp-components-color-foreground, currentColor )"});x([_,j]);function k(e){H(e);const a={...N(e.accent),...F(e.background)};return M(T(e,a)),{colors:a}}function H(e){for(const[a,r]of Object.entries(e))typeof r<"u"&&n(r).isValid()}function T(e,a){const r=e.background||h.white,u=e.accent||"#3858e9",i=a.foreground||h.gray[900],c=a.gray||h.gray;return{accent:n(r).isReadable(u)?void 0:`The background color ("${r}") does not have sufficient contrast against the accent color ("${u}").`,foreground:n(r).isReadable(i)?void 0:`The background color provided ("${r}") does not have sufficient contrast against the standard foreground colors.`,grays:n(r).contrast(c[600])>=3&&n(r).contrast(c[700])>=4.5?void 0:`The background color provided ("${r}") cannot generate a set of grayscale foreground colors with sufficient contrast. Try adjusting the color to be lighter or darker.`}}function M(e){for(const a of Object.values(e));}function N(e){return e?{accent:e,accentDarker10:n(e).darken(.1).toHex(),accentDarker20:n(e).darken(.2).toHex(),accentInverted:y(e)}:{}}function F(e){if(!e)return{};const a=y(e);return{background:e,foreground:a,foregroundInverted:y(a),gray:q(e,a)}}function y(e){return n(e).isDark()?h.white:h.gray[900]}function q(e,a){const r={100:.06,200:.121,300:.132,400:.2,600:.42,700:.543,800:.821},u=.884,i=n(e).isDark()?"lighten":"darken",c=Math.abs(n(e).toHsl().l-n(a).toHsl().l)/100,d={};return Object.entries(r).forEach(([o,l])=>{d[parseInt(o)]=n(e)[i](l/u*c).toHex()}),d}function v({accent:e,background:a,className:r,...u}){const i=I(),c=w.useMemo(()=>i(...B(k({accent:e,background:a})),r),[e,a,r,i]);return t(D,{className:c,...u})}try{v.displayName="Theme",v.__docgenInfo={description:`\`Theme\` allows defining theme variables for components in the \`@wordpress/components\` package.

Multiple \`Theme\` components can be nested in order to override specific theme variables.


\`\`\`jsx
const Example = () => {
  return (
    <Theme accent="red">
      <Button variant="primary">I'm red</Button>
      <Theme accent="blue">
        <Button variant="primary">I'm blue</Button>
      </Theme>
    </Theme>
  );
};
\`\`\``,displayName:"Theme",props:{accent:{defaultValue:null,description:"The accent color (used by components as the primary color).\n\nIf an accent color is not defined, the default fallback value is the original\nWP Admin main theme color. Not all valid CSS color syntaxes are supported —\nin particular, keywords (like `'currentcolor'`, `'inherit'`, `'initial'`,\n`'revert'`, `'unset'`...) and CSS custom properties (e.g.\n`var(--my-custom-property)`) are _not_ supported values for this property.",name:"accent",required:!1,type:{name:"string"}},background:{defaultValue:null,description:"The background color.\n\nIf a component explicitly has a background, it will be this color.\nOtherwise, this color will simply be used to determine what the foreground colors should be.\nThe actual background color will need to be set on the component's container element.\n\nIf a background color is not defined, the default fallback value is #fff.\nNot all valid CSS color syntaxes are supported —\nin particular, keywords (like `'currentcolor'`, `'inherit'`, `'initial'`,\n`'revert'`, `'unset'`...) and CSS custom properties (e.g.\n`var(--my-custom-property)`) are _not_ supported values for this property.",name:"background",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"The children elements.",name:"children",required:!1,type:{name:"ReactNode"}},as:{defaultValue:null,description:"The HTML element or React component to render the component as.",name:"as",required:!1,type:{name:"enum",value:[{value:'"symbol"'},{value:'"object"'},{value:'"select"'},{value:'"a"'},{value:'"abbr"'},{value:'"address"'},{value:'"area"'},{value:'"article"'},{value:'"aside"'},{value:'"audio"'},{value:'"b"'},{value:'"base"'},{value:'"bdi"'},{value:'"bdo"'},{value:'"big"'},{value:'"blockquote"'},{value:'"body"'},{value:'"br"'},{value:'"button"'},{value:'"canvas"'},{value:'"caption"'},{value:'"center"'},{value:'"cite"'},{value:'"code"'},{value:'"col"'},{value:'"colgroup"'},{value:'"data"'},{value:'"datalist"'},{value:'"dd"'},{value:'"del"'},{value:'"details"'},{value:'"dfn"'},{value:'"dialog"'},{value:'"div"'},{value:'"dl"'},{value:'"dt"'},{value:'"em"'},{value:'"embed"'},{value:'"fieldset"'},{value:'"figcaption"'},{value:'"figure"'},{value:'"footer"'},{value:'"form"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"head"'},{value:'"header"'},{value:'"hgroup"'},{value:'"hr"'},{value:'"html"'},{value:'"i"'},{value:'"iframe"'},{value:'"img"'},{value:'"input"'},{value:'"ins"'},{value:'"kbd"'},{value:'"keygen"'},{value:'"label"'},{value:'"legend"'},{value:'"li"'},{value:'"link"'},{value:'"main"'},{value:'"map"'},{value:'"mark"'},{value:'"menu"'},{value:'"menuitem"'},{value:'"meta"'},{value:'"meter"'},{value:'"nav"'},{value:'"noindex"'},{value:'"noscript"'},{value:'"ol"'},{value:'"optgroup"'},{value:'"option"'},{value:'"output"'},{value:'"p"'},{value:'"param"'},{value:'"picture"'},{value:'"pre"'},{value:'"progress"'},{value:'"q"'},{value:'"rp"'},{value:'"rt"'},{value:'"ruby"'},{value:'"s"'},{value:'"samp"'},{value:'"search"'},{value:'"slot"'},{value:'"script"'},{value:'"section"'},{value:'"small"'},{value:'"source"'},{value:'"span"'},{value:'"strong"'},{value:'"style"'},{value:'"sub"'},{value:'"summary"'},{value:'"sup"'},{value:'"table"'},{value:'"template"'},{value:'"tbody"'},{value:'"td"'},{value:'"textarea"'},{value:'"tfoot"'},{value:'"th"'},{value:'"thead"'},{value:'"time"'},{value:'"title"'},{value:'"tr"'},{value:'"track"'},{value:'"u"'},{value:'"ul"'},{value:'"var"'},{value:'"video"'},{value:'"wbr"'},{value:'"webview"'},{value:'"svg"'},{value:'"animate"'},{value:'"animateMotion"'},{value:'"animateTransform"'},{value:'"circle"'},{value:'"clipPath"'},{value:'"defs"'},{value:'"desc"'},{value:'"ellipse"'},{value:'"feBlend"'},{value:'"feColorMatrix"'},{value:'"feComponentTransfer"'},{value:'"feComposite"'},{value:'"feConvolveMatrix"'},{value:'"feDiffuseLighting"'},{value:'"feDisplacementMap"'},{value:'"feDistantLight"'},{value:'"feDropShadow"'},{value:'"feFlood"'},{value:'"feFuncA"'},{value:'"feFuncB"'},{value:'"feFuncG"'},{value:'"feFuncR"'},{value:'"feGaussianBlur"'},{value:'"feImage"'},{value:'"feMerge"'},{value:'"feMergeNode"'},{value:'"feMorphology"'},{value:'"feOffset"'},{value:'"fePointLight"'},{value:'"feSpecularLighting"'},{value:'"feSpotLight"'},{value:'"feTile"'},{value:'"feTurbulence"'},{value:'"filter"'},{value:'"foreignObject"'},{value:'"g"'},{value:'"image"'},{value:'"line"'},{value:'"linearGradient"'},{value:'"marker"'},{value:'"mask"'},{value:'"metadata"'},{value:'"mpath"'},{value:'"path"'},{value:'"pattern"'},{value:'"polygon"'},{value:'"polyline"'},{value:'"radialGradient"'},{value:'"rect"'},{value:'"set"'},{value:'"stop"'},{value:'"switch"'},{value:'"text"'},{value:'"textPath"'},{value:'"tspan"'},{value:'"use"'},{value:'"view"'}]}}}}}catch{}const be={component:v,title:"Components/Utilities/Theme",id:"components-theme",argTypes:{accent:{control:{type:"color"}},background:{control:{type:"color"}}},tags:["status-private"],parameters:{controls:{expanded:!0},docs:{canvas:{sourceState:"shown"}}}},V=e=>t(v,{...e,children:t(g,{variant:"primary",children:"Hello"})}),p=V.bind({});p.args={};const m=e=>f(v,{accent:"crimson",children:[t(g,{variant:"primary",children:"Outer theme (hardcoded)"}),t(v,{...e,children:t(g,{variant:"primary",children:"Inner theme (set via Storybook controls)"})})]});m.args={accent:"blue"};const s=({accent:e,background:a})=>{const{colors:r}=k({accent:e,background:a}),{gray:u,...i}=r,c=Object.entries(T({accent:e,background:a},r)).filter(([o,l])=>!!l),d=({color:o,name:l})=>f(O,{justify:"flex-start",children:[t("div",{style:{backgroundColor:o,height:"1.25em",width:40}}),t("div",{style:{fontSize:14},children:l})]});return f(b,{children:[Object.entries(i).map(([o,l])=>t(d,{color:l,name:o},o)),Object.entries(u).map(([o,l])=>t(d,{color:l,name:`gray ${o}`},o)),!!c.length&&f(b,{children:[t("h2",{children:"Contrast issues"}),t("ul",{children:c.map(([o,l])=>t("li",{children:l},o))})]})]})};s.args={accent:"#3858e9",background:"#fff"};s.argTypes={children:{table:{disable:!0}}};s.parameters={docs:{canvas:{sourceState:"hidden"}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`args => <Theme {...args}>
        <Button variant="primary">Hello</Button>
    </Theme>`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`args => <Theme accent="crimson">
        <Button variant="primary">Outer theme (hardcoded)</Button>

        <Theme {...args}>
            <Button variant="primary">
                Inner theme (set via Storybook controls)
            </Button>
        </Theme>
    </Theme>`,...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`({
  accent,
  background
}) => {
  const {
    colors
  } = generateThemeVariables({
    accent,
    background
  });
  const {
    gray,
    ...otherColors
  } = colors;
  /* eslint-disable @typescript-eslint/no-unused-vars */
  const contrastIssues = Object.entries(checkContrasts({
    accent,
    background
  }, colors)).filter(([_, error]) => !!error);
  /* eslint-enable @typescript-eslint/no-unused-vars */

  const Chip = ({
    color,
    name
  }: {
    color: string;
    name: string;
  }) => <HStack justify="flex-start">
            <div style={{
      backgroundColor: color,
      height: '1.25em',
      width: 40
    }} />
            <div style={{
      fontSize: 14
    }}>{name}</div>
        </HStack>;
  return <>
            {Object.entries(otherColors).map(([key, value]) => <Chip color={value} name={key} key={key} />)}
            {Object.entries(gray as NonNullable<typeof gray>).map(([key, value]) => <Chip color={value} name={\`gray \${key}\`} key={key} />)}
            {!!contrastIssues.length && <>
                    <h2>Contrast issues</h2>
                    <ul>
                        {contrastIssues.map(([key, error]) => <li key={key}>{error}</li>)}
                    </ul>
                </>}
        </>;
}`,...s.parameters?.docs?.source},description:{story:"The rest of the required colors are generated based on the given accent and background colors.",...s.parameters?.docs?.description}}};try{s.displayName="ColorScheme",s.__docgenInfo={description:"The rest of the required colors are generated based on the given accent and background colors.",displayName:"ColorScheme",props:{}}}catch{}export{s as ColorScheme,p as Default,m as Nested,be as default};
