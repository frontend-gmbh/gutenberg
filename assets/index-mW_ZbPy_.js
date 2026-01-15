import{a as l,r as I}from"./iframe-2TvY6Iig.js";import{b as ne}from"./index-WfDDlHKp.js";import{c as se}from"./index-CtHDDdr3.js";import{c as ae}from"./component-DsqK5SLR.js";import{i as oe}from"./index-DdMUBdEx.js";import{r as q}from"./index-COo7v7Xt.js";import{u as re,p as le}from"./index-SpwWwokz.js";import{u as ie}from"./index-BcsUY9xg.js";import{s as pe}from"./sprintf-CXbjGC2q.js";import{a as V}from"./default-i18n-SWt35ZM4.js";import{t as me}from"./index-CnMiRX9-.js";import{s as ue}from"./settings-kc_thTD3.js";const y=24,ce=8,de={px:{max:300,steps:1},"%":{max:100,steps:1},vw:{max:100,steps:1},vh:{max:100,steps:1},em:{max:10,steps:.1},rem:{max:10,steps:.1},svw:{max:100,steps:1},lvw:{max:100,steps:1},dvw:{max:100,steps:1},svh:{max:100,steps:1},lvh:{max:100,steps:1},dvh:{max:100,steps:1},vi:{max:100,steps:1},svi:{max:100,steps:1},lvi:{max:100,steps:1},dvi:{max:100,steps:1},vb:{max:100,steps:1},svb:{max:100,steps:1},lvb:{max:100,steps:1},dvb:{max:100,steps:1},vmin:{max:100,steps:1},svmin:{max:100,steps:1},lvmin:{max:100,steps:1},dvmin:{max:100,steps:1},vmax:{max:100,steps:1},svmax:{max:100,steps:1},lvmax:{max:100,steps:1},dvmax:{max:100,steps:1}},f=(e,s)=>e?.includes?e==="0"||e.includes(`var:preset|${s}|`):!1;function G(e,s){if(!e)return;if(e==="0"||e==="default")return e;const o=e.match(new RegExp(`var:preset\\|${s}\\|(.+)`));return o?o[1]:void 0}function ve(e,s,o){if(e===void 0)return 0;const i=parseFloat(e,10)===0?"0":G(e,o),p=s.findIndex(u=>String(u.slug)===i);return p!==-1?p:NaN}function B(e,s,o){if(!f(e,o))return e;const i=parseFloat(e,10)===0?"0":G(e,o);return s.find(u=>String(u.slug)===i)?.size}function xe(e,s,o){if(!e||f(e,o)||e==="0")return e;const i=s.find(p=>String(p.size)===String(e));return i?.slug?`var:preset|${o}|${i.slug}`:e}function H({allowNegativeOnDrag:e,ariaLabel:s,allPlaceholder:o,minValue:i,parsedQuantity:p,computedUnit:u,units:d,isMixed:F,step:S,max:v,showTooltip:x,value:c,minimumCustomValue:U,onCustomValueChange:a,onCustomValueSliderChange:r,onUnitChange:k,onMouseOut:C,onMouseOver:g,setMinValue:t}){const N=l.jsx(re,{className:"preset-input-control__unit-control",disableUnits:F,hideLabelFromVision:!0,label:s,min:i,onChange:a,onUnitChange:k,onBlur:C,onFocus:g,onMouseOut:C,onMouseOver:g,size:"__unstable-large",units:d,value:[p,u].join(""),placeholder:o,onDragStart:()=>{e&&c?.charAt(0)==="-"&&t(0)},onDrag:()=>{e&&c?.charAt(0)==="-"&&t(0)},onDragEnd:()=>{e&&t(U)}}),j=x?l.jsx(me,{text:s,placement:"top",children:l.jsx("div",{className:"preset-input-control__tooltip-wrapper",children:N})}):N;return l.jsxs(l.Fragment,{children:[j,l.jsx(q,{className:"preset-input-control__custom-value-range",hideLabelFromVision:!0,initialPosition:0,label:s,max:v,min:0,onBlur:C,onChange:r,onFocus:g,onMouseOut:C,onMouseOver:g,step:S,value:p,withInputField:!1,__next40pxDefaultSize:!0})]})}H.__docgenInfo={description:`CustomValueControls component for handling custom value input.

Renders a UnitControl and RangeControl for custom value input mode.
Handles conditional tooltip wrapping and drag event coordination.

@param {Object}   props
@param {boolean}  props.allowNegativeOnDrag       Whether to allow negative values during drag operations.
@param {string}   props.ariaLabel                 Accessible label for the controls.
@param {string}   props.allPlaceholder            Placeholder text (e.g., "Mixed").
@param {number}   props.minValue                  Minimum allowed value.
@param {number}   props.parsedQuantity            The numeric part of the current value.
@param {string}   props.computedUnit              The unit part of the current value.
@param {Array}    props.units                     Array of available unit objects.
@param {boolean}  props.isMixed                   Whether the current value is mixed.
@param {number}   props.step                      Step value for the range control.
@param {number}   props.max                       Maximum value for the range control.
@param {boolean}  props.showTooltip               Whether to wrap UnitControl in a tooltip.
@param {string}   props.value                     Current value for drag event checks.
@param {number}   props.minimumCustomValue        Minimum custom value for drag end reset.
@param {Function} props.onCustomValueChange       Callback when UnitControl value changes.
@param {Function} props.onCustomValueSliderChange Callback when RangeControl value changes.
@param {Function} props.onUnitChange              Callback when unit changes.
@param {Function} props.onMouseOut                Mouse out event handler.
@param {Function} props.onMouseOver               Mouse over event handler.
@param {Function} props.setMinValue               Function to set minimum value state.

@return {Element} The CustomValueControls component.`,methods:[],displayName:"CustomValueControls"};function ge({allowNegativeOnDrag:e=!1,ariaLabel:s,className:o,customValueSettings:i=de,disableCustomValues:p,icon:u,isMixed:d,value:F,minimumCustomValue:S,onChange:v,onMouseOut:x,onMouseOver:c,onUnitChange:U,presets:a=[],presetType:r,selectedUnit:k,showTooltip:C,units:g}){const t=I.useMemo(()=>xe(F,a,r),[F,a,r]),N=o??"preset-input-control",j=a.slice(1,a.length-1).map((n,h)=>({value:h+1,label:void 0})),P=j.length>0,A=a.length<=ce,M=d?V("Mixed"):null,[O,Q]=I.useState(S),[m,E]=I.useState(!p&&t!==void 0&&!f(t,r));let b=null;const D=ie(t);I.useEffect(()=>{t&&D!==t&&!f(t,r)&&m!==!0&&E(!0)},[t,D,r,m]);const L=!A&&!m&&t!==void 0&&(!f(t,r)||f(t,r)&&d);let z=a;L?(z=[...a,{name:d?V("Mixed"):pe(V("Custom (%s)"),t),slug:"custom",size:t}],b=z.length-1):d||(b=m?B(t,a,r):ve(t,a,r));const R=z.map((n,h)=>({key:h,name:n.name})),X=f(t,r)?B(t,a,r):t,[Z,T]=le(X),w=T||k||"px",W=g?.find(n=>n.value===w),J=W?.step??i[w]?.steps??.1,K=W?.max??i[w]?.max??10,Y=n=>{const _=!isNaN(parseFloat(n))?n:void 0;_!==void 0&&v(_)},ee=n=>{v([n,w].join(""))},te=n=>t===void 0?void 0:a[n]?.name,$=(n,h)=>{const _=parseInt(n,10);if(h==="selectList"){if(_===0&&a[0]?.slug==="0")return"0";if(_===0)return}else if(_===0)return"0";return`var:preset|${r}|${a[n]?.slug}`};return l.jsxs(ae,{className:`preset-input-control__wrapper ${N}__wrapper`,children:[u&&l.jsx(oe,{className:"preset-input-control__icon",icon:u,size:y}),(!P||m)&&l.jsx(H,{allowNegativeOnDrag:e,ariaLabel:s,allPlaceholder:M,minValue:O,parsedQuantity:Z,computedUnit:w,units:g,isMixed:d,step:J,max:K,showTooltip:C,value:t,minimumCustomValue:S,onCustomValueChange:Y,onCustomValueSliderChange:ee,onUnitChange:U,onMouseOut:x,onMouseOver:c,setMinValue:Q}),P&&A&&!m&&l.jsx(q,{"aria-valuenow":b,"aria-valuetext":a[b]?.name,className:"preset-input-control__preset-range",hideLabelFromVision:!0,initialPosition:0,label:s,max:a.length-1,marks:j,min:0,onBlur:x,onChange:n=>v($(n)),onFocus:c,onMouseDown:n=>{n?.nativeEvent?.offsetX<35&&t===void 0&&v("0")},onMouseOut:x,onMouseOver:c,renderTooltipContent:te,step:1,value:b,withInputField:!1,__next40pxDefaultSize:!0}),P&&!A&&!m&&l.jsx(se,{className:"preset-input-control__custom-select-control",hideLabelFromVision:!0,label:s,onBlur:x,onChange:n=>{L&&n.selectedItem.key===R.length-1?E(!0):v($(n.selectedItem.key,"selectList"))},onFocus:c,onMouseOut:x,onMouseOver:c,options:R,size:"__unstable-large",value:R.find(n=>n.key===b)||""}),P&&!p&&l.jsx(ne,{className:"preset-input-control__custom-toggle",icon:ue,iconSize:y,isPressed:m,label:m?V("Use preset"):V("Set custom value"),onClick:()=>{E(!m)},size:"small"})]})}ge.__docgenInfo={description:`PresetInputControl component for selecting preset values or entering custom values.

Displays preset values as either a slider (for <= 8 presets) or a select dropdown.
Allows toggling to custom value mode with a UnitControl and RangeControl.
Handles unit tracking and conversion between preset and custom values.

@param {Object}   props                     Component props.
@param {boolean}  props.allowNegativeOnDrag Whether to allow negative values during drag operations.
@param {string}   props.ariaLabel           Accessible label for the control.
@param {string}   props.className           Optional CSS class name.
@param {Object}   props.customValueSettings Optional custom value settings for max/steps per unit.
@param {boolean}  props.disableCustomValues Whether to disable custom value input.
@param {Object}   props.icon                Icon to display alongside the control.
@param {boolean}  props.isMixed             Whether the current value is mixed (multiple values).
@param {number}   props.minimumCustomValue  Minimum allowed custom value.
@param {Function} props.onChange            Callback when value changes.
@param {Function} props.onMouseOut          Callback for mouse out events.
@param {Function} props.onMouseOver         Callback for mouse over events.
@param {Function} props.onUnitChange        Callback when unit changes.
@param {Array}    props.presets             Array of preset objects with name, slug, and size.
@param {string}   props.presetType          Type of preset (e.g., 'spacing', 'border-radius').
@param {string}   props.selectedUnit        Currently selected unit (e.g., 'px', 'em').
@param {boolean}  props.showTooltip         Whether to show tooltip on custom UnitControl.
@param {Array}    props.units               Array of available unit objects (can include max and step).
@param {string}   props.value               Current value (preset or custom).

@return {Element} The PresetInputControl component.`,methods:[],displayName:"PresetInputControl",props:{allowNegativeOnDrag:{defaultValue:{value:"false",computed:!1},required:!1},customValueSettings:{defaultValue:{value:`{
	px: { max: 300, steps: 1 },
	'%': { max: 100, steps: 1 },
	vw: { max: 100, steps: 1 },
	vh: { max: 100, steps: 1 },
	em: { max: 10, steps: 0.1 },
	rem: { max: 10, steps: 0.1 },
	svw: { max: 100, steps: 1 },
	lvw: { max: 100, steps: 1 },
	dvw: { max: 100, steps: 1 },
	svh: { max: 100, steps: 1 },
	lvh: { max: 100, steps: 1 },
	dvh: { max: 100, steps: 1 },
	vi: { max: 100, steps: 1 },
	svi: { max: 100, steps: 1 },
	lvi: { max: 100, steps: 1 },
	dvi: { max: 100, steps: 1 },
	vb: { max: 100, steps: 1 },
	svb: { max: 100, steps: 1 },
	lvb: { max: 100, steps: 1 },
	dvb: { max: 100, steps: 1 },
	vmin: { max: 100, steps: 1 },
	svmin: { max: 100, steps: 1 },
	lvmin: { max: 100, steps: 1 },
	dvmin: { max: 100, steps: 1 },
	vmax: { max: 100, steps: 1 },
	svmax: { max: 100, steps: 1 },
	lvmax: { max: 100, steps: 1 },
	dvmax: { max: 100, steps: 1 },
}`,computed:!1},required:!1},presets:{defaultValue:{value:"[]",computed:!1},required:!1}}};export{de as C,ge as P};
