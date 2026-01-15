import{r as b,f as y,j as t}from"./iframe-2TvY6Iig.js";import{s as f}from"./sprintf-CXbjGC2q.js";import{a as p}from"./default-i18n-SWt35ZM4.js";import{u as P}from"./index-BjXx3EE5.js";import{C as m}from"./index-BHXdZydh.js";import{C as k}from"./index-BV91BY6n.js";import{g as w,a as V}from"./index-PeXICg_r.js";import{V as h}from"./component-6CLxCT3h.js";const q=e=>Array.isArray(e.gradients)&&!("gradient"in e),C=e=>e.length>0&&e.every(n=>q(n));function v({className:e,clearGradient:n,gradients:r,onChange:i,value:l,...c}){const u=b.useMemo(()=>r.map(({gradient:a,name:s,slug:o},d)=>t(m.Option,{value:a,isSelected:l===a,tooltipText:s||f(p("Gradient code: %s"),a),style:{color:"rgba( 0,0,0,0 )",background:a},onClick:l===a?n:()=>i(a,d),"aria-label":s?f(p("Gradient: %s"),s):f(p("Gradient code: %s"),a)},o)),[r,l,i,n]);return t(m.OptionGroup,{className:e,options:u,...c})}function _({className:e,clearGradient:n,gradients:r,onChange:i,value:l,headingLevel:c}){const u=P(_);return t(h,{spacing:3,className:e,children:r.map(({name:a,gradients:s},o)=>{const d=`color-palette-${u}-${o}`;return y(h,{spacing:2,children:[t(V,{level:c,id:d,children:a}),t(v,{clearGradient:n,gradients:s,onChange:G=>i(G,o),value:l,"aria-labelledby":d})]},o)})})}function O(e){const{asButtons:n,loop:r,actions:i,headingLevel:l,"aria-label":c,"aria-labelledby":u,...a}=e,s=C(e.gradients)?t(_,{headingLevel:l,...a}):t(v,{...a}),{metaProps:o,labelProps:d}=w(n,r,c,u);return t(m,{...o,...d,actions:i,options:s})}function g({className:e,gradients:n=[],onChange:r,value:i,clearable:l=!0,enableAlpha:c=!0,disableCustomGradients:u=!1,__experimentalIsRenderedInSidebar:a,headingLevel:s=2,...o}){const d=b.useCallback(()=>r(void 0),[r]);return y(h,{spacing:n.length?4:0,children:[!u&&t(k,{__experimentalIsRenderedInSidebar:a,enableAlpha:c,value:i,onChange:r}),(n.length>0||l)&&t(O,{...o,className:e,clearGradient:d,gradients:n,onChange:r,value:i,actions:l&&!u&&t(m.ButtonAction,{onClick:d,accessibleWhenDisabled:!0,disabled:!i,children:p("Clear")}),headingLevel:s})]})}try{g.displayName="GradientPicker",g.__docgenInfo={description:`GradientPicker is a React component that renders a color gradient picker to
define a multi step gradient. There's either a _linear_ or a _radial_ type
available.

\`\`\`jsx
import { useState } from 'react';
import { GradientPicker } from '@wordpress/components';

const MyGradientPicker = () => {
  const [ gradient, setGradient ] = useState( null );

  return (
    <GradientPicker
      value={ gradient }
      onChange={ ( currentGradient ) => setGradient( currentGradient ) }
      gradients={ [
        {
          name: 'JShine',
          gradient:
            'linear-gradient(135deg,#12c2e9 0%,#c471ed 50%,#f64f59 100%)',
          slug: 'jshine',
        },
        {
          name: 'Moonlit Asteroid',
          gradient:
            'linear-gradient(135deg,#0F2027 0%, #203A43 0%, #2c5364 100%)',
          slug: 'moonlit-asteroid',
        },
        {
          name: 'Rastafarie',
          gradient:
            'linear-gradient(135deg,#1E9600 0%, #FFF200 0%, #FF0000 100%)',
          slug: 'rastafari',
        },
      ] }
    />
  );
};
\`\`\``,displayName:"GradientPicker",props:{className:{defaultValue:null,description:"The class name added to the wrapper.",name:"className",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"The function called when a new gradient has been defined. It is passed to\nthe `currentGradient` as an argument.",name:"onChange",required:!0,type:{name:"(currentGradient: string) => void"}},value:{defaultValue:{value:"'linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%)'"},description:"The current value of the gradient. Pass a css gradient string (See default value for example).\nOptionally pass in a `null` value to specify no gradient is currently selected.",name:"value",required:!1,type:{name:"string"}},clearable:{defaultValue:{value:"true"},description:"Whether the palette should have a clearing button or not.",name:"clearable",required:!1,type:{name:"boolean"}},headingLevel:{defaultValue:{value:"2"},description:"The heading level. Only applies in cases where gradients are provided\nfrom multiple origins (i.e. when the array passed as the `gradients` prop\ncontains two or more items).",name:"headingLevel",required:!1,type:{name:"enum",value:[{value:"1"},{value:"5"},{value:"2"},{value:'"1"'},{value:"3"},{value:"4"},{value:"6"},{value:'"2"'},{value:'"3"'},{value:'"4"'},{value:'"5"'},{value:'"6"'}]}},asButtons:{defaultValue:{value:"false"},description:`Whether the control should present as a set of buttons,
each with its own tab stop.`,name:"asButtons",required:!1,type:{name:"boolean"}},loop:{defaultValue:{value:"true"},description:"Prevents keyboard interaction from wrapping around.\nOnly used when `asButtons` is not true.",name:"loop",required:!1,type:{name:"boolean"}},enableAlpha:{defaultValue:{value:"true"},description:"Whether to enable alpha transparency options in the picker.",name:"enableAlpha",required:!1,type:{name:"boolean"}},"aria-label":{defaultValue:null,description:"A label to identify the purpose of the control.",name:"aria-label",required:!1,type:{name:"string"}},"aria-labelledby":{defaultValue:null,description:"An ID of an element to provide a label for the control.",name:"aria-labelledby",required:!1,type:{name:"string"}},gradients:{defaultValue:{value:"[]"},description:"An array of objects as predefined gradients displayed above the gradient\nselector. Alternatively, if there are multiple sets (or 'origins') of\ngradients, you can pass an array of objects each with a `name` and a\n`gradients` array which will in turn contain the predefined gradient objects.",name:"gradients",required:!1,type:{name:"GradientsProp"}},__nextHasNoMargin:{defaultValue:{value:"false"},description:`Start opting in to the new margin-free styles that will become the default
in a future version, currently scheduled to be WordPress 6.4. (The prop
can be safely removed once this happens.)
@deprecated Default behavior since WP 6.5. Prop can be safely removed.
@ignore`,name:"__nextHasNoMargin",required:!1,type:{name:"boolean"}},disableCustomGradients:{defaultValue:{value:"false"},description:"If true, the gradient picker will not be displayed and only defined\ngradients from `gradients` will be shown.",name:"disableCustomGradients",required:!1,type:{name:"boolean"}},__experimentalIsRenderedInSidebar:{defaultValue:{value:"false"},description:"Whether this is rendered in the sidebar.",name:"__experimentalIsRenderedInSidebar",required:!1,type:{name:"boolean"}}}}}catch{}export{g as G};
