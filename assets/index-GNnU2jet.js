import{e as te,r as a,j as s,f as R,c as ne}from"./iframe-2TvY6Iig.js";import{s as oe}from"./sprintf-CXbjGC2q.js";import{a as _,b as ae}from"./default-i18n-SWt35ZM4.js";import{u as se}from"./index-BjXx3EE5.js";import{s as E}from"./index-CXY7LZMH.js";import{c as le}from"./emotion-react.browser.esm-T2caqgd_.js";import{s as g}from"./space-CjrGwnR-.js";import{F as re}from"./component-l_ygUujJ.js";import{T as ie,S as ue}from"./suggestions-list-BL584KLy.js";import{B as de}from"./index-DckQhh-o.js";import{B as ce}from"./index-CFuMsoxH.js";import{c as pe}from"./index-Chn_29Iy.js";import{u as me}from"./index-Ct0bDPBV.js";import{n as M}from"./strings-B_y2JcYF.js";import{u as fe}from"./use-deprecated-props-BokcF_Hx.js";import{w as he}from"./with-ignore-ime-events-BK39a-UH.js";import{m as ge}from"./deprecated-36px-size-UsjcW-j9.js";import{S as be}from"./index-D3lQSxvx.js";import{u as xe}from"./use-controlled-value-D6nr5Y4s.js";import{F as ve}from"./component-BiaHS86M.js";import{c as Ce}from"./close-small-D3dHP1RP.js";const Se=({__next40pxDefaultSize:o})=>!o&&le("height:28px;padding-left:",g(1),";padding-right:",g(1),";",""),_e=te(re,{target:"evuatpg0"})("height:38px;padding-left:",g(2),";padding-right:",g(2),";",Se,";"),ye=pe(o=>u=>{const[b,x]=a.useState(void 0),c=a.useCallback(p=>x(()=>p?.handleFocusOutside?p.handleFocusOutside.bind(p):void 0),[]);return s("div",{...me(b),children:s(o,{ref:c,...u})})},"withFocusOutside"),we=()=>{},Fe=ye(class extends a.Component{handleFocusOutside(o){this.props.onFocusOutside(o)}render(){return this.props.children}}),h=(o,u)=>o===null?-1:u.indexOf(o);function y(o){const{__next40pxDefaultSize:u=!1,value:b,label:x,options:c,onChange:p,onFilterValueChange:w=we,hideLabelFromVision:L,help:B,allowReset:H=!0,className:P,isLoading:F=!1,messages:T={selected:_("Item selected.")},__experimentalRenderItem:A,expandOnFocus:j=!0,placeholder:W}=fe(o),[V,O]=xe({value:b,onChange:p}),I=c.find(e=>e.value===V),U=I?.label??"",v=se(y,"combobox-control"),[l,m]=a.useState(I||null),[d,r]=a.useState(!1),[K,z]=a.useState(!1),[f,C]=a.useState(""),D=a.useRef(null),n=a.useMemo(()=>{const e=[],t=[],i=M(f);return c.forEach(S=>{const k=M(S.label).indexOf(i);k===0?e.push(S):k>0&&t.push(S)}),e.concat(t)},[f,c]),q=e=>{e.disabled||(O(e.value),E(T.selected,"assertive"),m(e),C(""),r(!1))},N=(e=1)=>{let i=h(l,n)+e;i<0?i=n.length-1:i>=n.length&&(i=0),m(n[i]),r(!0)},$=he(e=>{let t=!1;if(!e.defaultPrevented){switch(e.code){case"Enter":l&&(q(l),t=!0);break;case"ArrowUp":N(-1),t=!0;break;case"ArrowDown":N(1),t=!0;break;case"Escape":r(!1),m(null),t=!0;break}t&&e.preventDefault()}}),G=()=>{z(!1)},J=()=>{z(!0),j&&r(!0),w(""),C("")},Q=()=>{r(!0)},X=()=>{r(!1)},Y=e=>{const t=e.value;C(t),w(t),K&&r(!0)},Z=()=>{O(null),D.current?.focus()},ee=e=>{e.stopPropagation()};return a.useEffect(()=>{const e=n.length>0,t=h(l,n)>0;e&&!t&&m(n[0])},[n,l]),a.useEffect(()=>{const e=n.length>0;if(d){const t=e?oe(ae("%d result found, use up and down arrow keys to navigate.","%d results found, use up and down arrow keys to navigate.",n.length),n.length):_("No results.");E(t,"polite")}},[n,d]),ge({componentName:"ComboboxControl",__next40pxDefaultSize:u,size:void 0}),s(Fe,{onFocusOutside:X,children:s(de,{className:ne(P,"components-combobox-control"),label:x,id:`components-form-token-input-${v}`,hideLabelFromVision:L,help:B,children:R("div",{className:"components-combobox-control__suggestions-container",tabIndex:-1,onKeyDown:$,children:[R(_e,{__next40pxDefaultSize:u,children:[s(ve,{children:s(ie,{className:"components-combobox-control__input",instanceId:v,ref:D,placeholder:W,value:d?f:U,onFocus:J,onBlur:G,onClick:Q,isExpanded:d,selectedSuggestionIndex:h(l,n),onChange:Y})}),F&&s(be,{}),H&&!!V&&!d&&s(ce,{size:"small",icon:Ce,onClick:Z,onKeyDown:ee,label:_("Reset")})]}),d&&!F&&s(ue,{instanceId:v,match:{label:f,value:""},displayTransform:e=>e.label,suggestions:n,selectedIndex:h(l,n),onHover:m,onSelect:q,scrollIntoView:!0,__experimentalRenderItem:A})]})})})}try{y.displayName="ComboboxControl",y.__docgenInfo={description:`\`ComboboxControl\` is an enhanced version of a [\`SelectControl\`](../select-control/README.md) with the addition of
being able to search for options using a search input.

\`\`\`jsx
import { ComboboxControl } from '@wordpress/components';
import { useState } from '@wordpress/element';

const options = [
	{
		value: 'small',
		label: 'Small',
	},
	{
		value: 'normal',
		label: 'Normal',
		disabled: true,
	},
	{
		value: 'large',
		label: 'Large',
		disabled: false,
	},
];

function MyComboboxControl() {
	const [ fontSize, setFontSize ] = useState();
	const [ filteredOptions, setFilteredOptions ] = useState( options );
	return (
		<ComboboxControl
			__next40pxDefaultSize
			label="Font Size"
			value={ fontSize }
			onChange={ setFontSize }
			options={ filteredOptions }
			onFilterValueChange={ ( inputValue ) =>
				setFilteredOptions(
					options.filter( ( option ) =>
						option.label
							.toLowerCase()
							.startsWith( inputValue.toLowerCase() )
					)
				)
			}
		/>
	);
}
\`\`\``,displayName:"ComboboxControl",props:{label:{defaultValue:null,description:"If this property is added, a label will be generated using label property as the content.",name:"label",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},hideLabelFromVision:{defaultValue:{value:"false"},description:"If true, the label will only be visible to screen readers.",name:"hideLabelFromVision",required:!1,type:{name:"boolean"}},__nextHasNoMarginBottom:{defaultValue:null,description:`Start opting into the new margin-free styles that will become the default in a future version.
@deprecated Default behavior since WordPress 7.0. Prop can be safely removed.
@ignore`,name:"__nextHasNoMarginBottom",required:!1,type:{name:"boolean"}},help:{defaultValue:null,description:"Additional description for the control.\n\nOnly use for meaningful description or instructions for the control. An element containing the description will be programmatically associated to the BaseControl by the means of an `aria-describedby` attribute.",name:"help",required:!1,type:{name:"ReactNode"}},__experimentalRenderItem:{defaultValue:null,description:"Custom renderer invoked for each option in the suggestion list.\nThe render prop receives as its argument an object containing, under the `item` key,\nthe single option's data (directly from the array of data passed to the `options` prop).",name:"__experimentalRenderItem",required:!1,type:{name:"(args: { item: ComboboxControlOption; }) => ReactNode"}},__next36pxDefaultSize:{defaultValue:{value:"false"},description:"Deprecated. Use `__next40pxDefaultSize` instead.\n@deprecated\n@ignore",name:"__next36pxDefaultSize",required:!1,type:{name:"boolean"}},__next40pxDefaultSize:{defaultValue:{value:"false"},description:"Start opting into the larger default height that will become the default size in a future version.",name:"__next40pxDefaultSize",required:!1,type:{name:"boolean"}},allowReset:{defaultValue:{value:"true"},description:"Show a reset button to clear the input.",name:"allowReset",required:!1,type:{name:"boolean"}},expandOnFocus:{defaultValue:{value:"true"},description:`Automatically expand the dropdown when the control is focused.
If the control is clicked, the dropdown will expand regardless of this prop.`,name:"expandOnFocus",required:!1,type:{name:"boolean"}},messages:{defaultValue:null,description:"Customizable UI messages.",name:"messages",required:!1,type:{name:"{ selected: string; }"}},onChange:{defaultValue:null,description:"Function called with the selected value changes.",name:"onChange",required:!1,type:{name:"(value: string) => void"}},onFilterValueChange:{defaultValue:{value:"noop"},description:"Function called when the control's search input value changes. The argument contains the next input value.",name:"onFilterValueChange",required:!1,type:{name:"(value: string) => void"}},options:{defaultValue:null,description:"The options that can be chosen from.",name:"options",required:!0,type:{name:"ComboboxControlOption[]"}},value:{defaultValue:null,description:"The current value of the control.",name:"value",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:"If passed, the combobox input will show a placeholder string if no values are present.",name:"placeholder",required:!1,type:{name:"string"}},isLoading:{defaultValue:{value:"false"},description:"Show a spinner (and hide the suggestions dropdown) while data\nabout the matching suggestions (ie the `options` prop) is loading",name:"isLoading",required:!1,type:{name:"boolean"}}}}}catch{}export{y as C};
