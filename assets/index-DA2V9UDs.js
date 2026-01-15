import{r as f,j as c}from"./iframe-2TvY6Iig.js";import{d as m}from"./index-RQ7hRITr.js";import{S as h}from"./index-LbqlnDh8.js";import{u as b}from"./use-deprecated-props-BokcF_Hx.js";import{m as g}from"./deprecated-36px-size-UsjcW-j9.js";function i(t,n=0){return t.flatMap(e=>[{value:e.id,label:" ".repeat(n*3)+m(e.name)},...i(e.children||[],n+1)])}function o(t){const{__nextHasNoMarginBottom:n,label:e,noOptionLabel:a,onChange:p,selectedId:s,tree:l=[],...r}=b(t),d=f.useMemo(()=>[a&&{value:"",label:a},...i(l)].filter(u=>!!u),[a,l]);return g({componentName:"TreeSelect",size:r.size,__next40pxDefaultSize:r.__next40pxDefaultSize}),c(h,{__shouldNotWarnDeprecated36pxSize:!0,label:e,options:d,onChange:p,value:s,...r})}try{o.displayName="TreeSelect",o.__docgenInfo={description:`Generates a hierarchical select input.

\`\`\`jsx
import { useState } from 'react';
import { TreeSelect } from '@wordpress/components';

const MyTreeSelect = () => {
	const [ page, setPage ] = useState( 'p21' );

	return (
		<TreeSelect
			__next40pxDefaultSize
			label="Parent page"
			noOptionLabel="No parent page"
			onChange={ ( newPage ) => setPage( newPage ) }
			selectedId={ page }
			tree={ [
				{
					name: 'Page 1',
					id: 'p1',
					children: [
						{ name: 'Descend 1 of page 1', id: 'p11' },
						{ name: 'Descend 2 of page 1', id: 'p12' },
					],
				},
				{
					name: 'Page 2',
					id: 'p2',
					children: [
						{
							name: 'Descend 1 of page 2',
							id: 'p21',
							children: [
								{
									name: 'Descend 1 of Descend 1 of page 2',
									id: 'p211',
								},
							],
						},
					],
				},
			] }
		/>
	);
}
\`\`\``,displayName:"TreeSelect",props:{noOptionLabel:{defaultValue:null,description:"If this property is added, an option will be added with this label to represent empty selection.",name:"noOptionLabel",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"A function that receives the value of the new option that is being selected as input.",name:"onChange",required:!1,type:{name:"(value: string, extra?: { event?: ChangeEvent<HTMLSelectElement>; }) => void"}},tree:{defaultValue:null,description:"An array containing the tree objects with the possible nodes the user can select.",name:"tree",required:!1,type:{name:"Tree[]"}},selectedId:{defaultValue:null,description:"The id of the currently selected node.",name:"selectedId",required:!1,type:{name:"string"}},size:{defaultValue:{value:"'default'"},description:"Adjusts the size of the input.",name:"size",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"compact"'},{value:'"small"'},{value:'"__unstable-large"'}]}},children:{defaultValue:null,description:"As an alternative to the `options` prop, `optgroup`s and `options` can be\npassed in as `children` for more customizability.",name:"children",required:!1,type:{name:"ReactNode"}},label:{defaultValue:null,description:"If this property is added, a label will be generated using label property as the content.",name:"label",required:!1,type:{name:"ReactNode"}},prefix:{defaultValue:null,description:`Renders an element on the left side of the input.

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
\`\`\``,name:"prefix",required:!1,type:{name:"ReactNode"}},disabled:{defaultValue:{value:"false"},description:"If true, the `input` will be disabled.",name:"disabled",required:!1,type:{name:"boolean"}},options:{defaultValue:null,description:"An array of option property objects to be rendered,\neach with a `label` and `value` property, as well as any other\n`<option>` attributes.",name:"options",required:!1,type:{name:'readonly ({ label: string; value: string; } & Omit<OptionHTMLAttributes<HTMLOptionElement>, "label" | "value">)[]'}},hideLabelFromVision:{defaultValue:{value:"false"},description:"If true, the label will only be visible to screen readers.",name:"hideLabelFromVision",required:!1,type:{name:"boolean"}},__next40pxDefaultSize:{defaultValue:{value:"false"},description:"Start opting into the larger default height that will become the default size in a future version.",name:"__next40pxDefaultSize",required:!1,type:{name:"boolean"}},__shouldNotWarnDeprecated36pxSize:{defaultValue:null,description:`Do not throw a warning for the deprecated 36px default size.
For internal components of other components that already throw the warning.
@ignore`,name:"__shouldNotWarnDeprecated36pxSize",required:!1,type:{name:"boolean"}},__nextHasNoMarginBottom:{defaultValue:null,description:`Start opting into the new margin-free styles that will become the default in a future version.
@deprecated Default behavior since WordPress 7.0. Prop can be safely removed.
@ignore`,name:"__nextHasNoMarginBottom",required:!1,type:{name:"boolean"}},help:{defaultValue:null,description:"Additional description for the control.\n\nOnly use for meaningful description or instructions for the control. An element containing the description will be programmatically associated to the BaseControl by the means of an `aria-describedby` attribute.",name:"help",required:!1,type:{name:"ReactNode"}},variant:{defaultValue:{value:"'default'"},description:"The style variant of the control.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"minimal"'}]}},suffix:{defaultValue:null,description:`Renders an element on the right side of the input.

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
\`\`\``,name:"suffix",required:!1,type:{name:"ReactNode"}},__next36pxDefaultSize:{defaultValue:{value:"false"},description:"Deprecated. Use `__next40pxDefaultSize` instead.\n@deprecated\n@ignore",name:"__next36pxDefaultSize",required:!1,type:{name:"boolean"}},labelPosition:{defaultValue:{value:"'top'"},description:"The position of the label.",name:"labelPosition",required:!1,type:{name:"enum",value:[{value:'"bottom"'},{value:'"top"'},{value:'"side"'},{value:'"edge"'}]}}}}}catch{}export{o as T};
