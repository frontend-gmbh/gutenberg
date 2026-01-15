import{r as N,c as D,j as n}from"./iframe-2TvY6Iig.js";import{u as W}from"./index-BjXx3EE5.js";import{B as P}from"./index-DckQhh-o.js";import{S as B,a as M,b as T}from"./chevron-down-hEJ1114-.js";import{u as O}from"./use-deprecated-props-BokcF_Hx.js";import{m as R}from"./deprecated-36px-size-UsjcW-j9.js";function A(e){const t=`inspector-select-control-${W(m)}`;return e||t}function H({options:e}){return e.map(({id:l,label:t,value:a,...o},u)=>{const p=l||`${t}-${a}-${u}`;return n("option",{value:a,...o,children:t},p)})}function L(e,l){const{className:t,disabled:a=!1,help:o,hideLabelFromVision:u,id:p,label:x,multiple:h=!1,onChange:j,options:v=[],size:d="default",value:y,labelPosition:_="top",children:b,prefix:g,suffix:S,variant:r="default",__next40pxDefaultSize:f=!1,__nextHasNoMarginBottom:E,__shouldNotWarnDeprecated36pxSize:C,...w}=O(e),i=A(p),I=o?`${i}__help`:void 0;if(!v?.length&&!b)return null;const z=s=>{if(e.multiple){const q=Array.from(s.target.options).filter(({selected:c})=>c).map(({value:c})=>c);e.onChange?.(q,{event:s});return}e.onChange?.(s.target.value,{event:s})},V=D("components-select-control",t);return R({componentName:"SelectControl",__next40pxDefaultSize:f,size:d,__shouldNotWarnDeprecated36pxSize:C}),n(P,{help:o,id:i,className:V,children:n(B,{disabled:a,hideLabelFromVision:u,id:i,isBorderless:r==="minimal",label:x,size:d,suffix:S||!h&&n(T,{}),prefix:g,labelPosition:_,__unstableInputWidth:r==="minimal"?"auto":void 0,variant:r,__next40pxDefaultSize:f,children:n(M,{...w,__next40pxDefaultSize:f,"aria-describedby":I,className:"components-select-control__input",disabled:a,id:i,multiple:h,onChange:z,ref:l,selectSize:d,value:y,variant:r,children:b||n(H,{options:v})})})})}const m=N.forwardRef(L);try{m.displayName="SelectControl",m.__docgenInfo={description:`\`SelectControl\` allows users to select from a single or multiple option menu.
It functions as a wrapper around the browser's native \`<select>\` element.

\`\`\`jsx
import { SelectControl } from '@wordpress/components';
import { useState } from '@wordpress/element';

const MySelectControl = () => {
  const [ size, setSize ] = useState( '50%' );

  return (
    <SelectControl
      __next40pxDefaultSize
      label="Size"
      value={ size }
      options={ [
        { label: 'Big', value: '100%' },
        { label: 'Medium', value: '50%' },
        { label: 'Small', value: '25%' },
      ] }
      onChange={ setSize }
    />
  );
};
\`\`\``,displayName:"SelectControl",props:{size:{defaultValue:{value:"'default'"},description:"Adjusts the size of the input.",name:"size",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"compact"'},{value:'"small"'},{value:'"__unstable-large"'}]}},label:{defaultValue:null,description:"If this property is added, a label will be generated using label property as the content.",name:"label",required:!1,type:{name:"ReactNode"}},prefix:{defaultValue:null,description:`Renders an element on the left side of the input.

By default, the prefix is aligned with the edge of the input border, with no padding.
If you want to apply standard padding in accordance with the size variant, wrap the element in
the provided \`<InputControlPrefixWrapper>\` component.

\`\`\`jsx
import {
  __experimentalInputControl as InputControl,
  __experimentalInputControlPrefixWrapper as InputControlPrefixWrapper,
} from '@wordpress/components';

<InputControl
  prefix={<InputControlPrefixWrapper>@</InputControlPrefixWrapper>}
/>
\`\`\``,name:"prefix",required:!1,type:{name:"ReactNode"}},disabled:{defaultValue:{value:"false"},description:"If true, the `input` will be disabled.",name:"disabled",required:!1,type:{name:"boolean"}},hideLabelFromVision:{defaultValue:{value:"false"},description:"If true, the label will only be visible to screen readers.",name:"hideLabelFromVision",required:!1,type:{name:"boolean"}},__next40pxDefaultSize:{defaultValue:{value:"false"},description:"Start opting into the larger default height that will become the default size in a future version.",name:"__next40pxDefaultSize",required:!1,type:{name:"boolean"}},__shouldNotWarnDeprecated36pxSize:{defaultValue:null,description:`Do not throw a warning for the deprecated 36px default size.
For internal components of other components that already throw the warning.
@ignore`,name:"__shouldNotWarnDeprecated36pxSize",required:!1,type:{name:"boolean"}},suffix:{defaultValue:null,description:`Renders an element on the right side of the input.

By default, the suffix is aligned with the edge of the input border, with no padding.
If you want to apply standard padding in accordance with the size variant, wrap the element in
the provided \`<InputControlSuffixWrapper>\` component.

\`\`\`jsx
import {
  __experimentalInputControl as InputControl,
  __experimentalInputControlSuffixWrapper as InputControlSuffixWrapper,
} from '@wordpress/components';

<InputControl
  suffix={<InputControlSuffixWrapper>%</InputControlSuffixWrapper>}
/>
\`\`\``,name:"suffix",required:!1,type:{name:"ReactNode"}},__next36pxDefaultSize:{defaultValue:{value:"false"},description:"Deprecated. Use `__next40pxDefaultSize` instead.\n@deprecated\n@ignore",name:"__next36pxDefaultSize",required:!1,type:{name:"boolean"}},labelPosition:{defaultValue:{value:"'top'"},description:"The position of the label.",name:"labelPosition",required:!1,type:{name:"enum",value:[{value:'"bottom"'},{value:'"top"'},{value:'"side"'},{value:'"edge"'}]}},__nextHasNoMarginBottom:{defaultValue:null,description:`Start opting into the new margin-free styles that will become the default in a future version.
@deprecated Default behavior since WordPress 7.0. Prop can be safely removed.
@ignore`,name:"__nextHasNoMarginBottom",required:!1,type:{name:"boolean"}},help:{defaultValue:null,description:"Additional description for the control.\n\nOnly use for meaningful description or instructions for the control. An element containing the description will be programmatically associated to the BaseControl by the means of an `aria-describedby` attribute.",name:"help",required:!1,type:{name:"ReactNode"}},options:{defaultValue:null,description:"An array of option property objects to be rendered,\neach with a `label` and `value` property, as well as any other\n`<option>` attributes.",name:"options",required:!1,type:{name:'readonly ({ label: string; value: V; } & Omit<OptionHTMLAttributes<HTMLOptionElement>, "label" | "value">)[]'}},children:{defaultValue:null,description:"As an alternative to the `options` prop, `optgroup`s and `options` can be\npassed in as `children` for more customizability.",name:"children",required:!1,type:{name:"ReactNode"}},variant:{defaultValue:{value:"'default'"},description:"The style variant of the control.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"minimal"'}]}},multiple:{defaultValue:{value:`false
false`},description:"If this property is added, multiple values can be selected. The `value` passed should be an array.\n\nIn most cases, it is preferable to use the `FormTokenField` or `CheckboxControl` components instead.",name:"multiple",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"The value of the selected option.\n\nIf `multiple` is true, the `value` should be an array with the values of the selected options.",name:"value",required:!1,type:{name:"string | NoInfer<V>[]"}},onChange:{defaultValue:null,description:"A function that receives the value of the new option that is being selected as input.\n\nIf `multiple` is `true`, the value received is an array of the selected value.\nOtherwise, the value received is a single value with the new selected value.",name:"onChange",required:!1,type:{name:"((value: NoInfer<V>, extra?: { event?: ChangeEvent<HTMLSelectElement>; }) => void) | ((value: NoInfer<V>[], extra?: { event?: ChangeEvent<HTMLSelectElement>; }) => void)"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLSelectElement>"}}}}}catch{}export{m as S};
