import{r as f,a as n}from"./iframe-2TvY6Iig.js";import{c as m}from"./component-CmFsXMbx.js";import{c as _}from"./component-DqKhWiFy.js";import{a as S}from"./component-DejoMM0-.js";import{a as e,_ as t}from"./default-i18n-SWt35ZM4.js";const r=[{value:"fill",label:t("Fill","Scale option for dimensions control"),help:e("Fill the space by stretching the content.")},{value:"contain",label:t("Contain","Scale option for dimensions control"),help:e("Fit the content to the space without clipping.")},{value:"cover",label:t("Cover","Scale option for dimensions control"),help:e("Fill the space by clipping what doesn't fit.")},{value:"none",label:t("None","Scale option for dimensions control"),help:e("Do not adjust the sizing of the content. Content that is too large will be clipped, and content that is too small will have additional padding.")},{value:"scale-down",label:t("Scale down","Scale option for dimensions control"),help:e("Scale down the content to fit the space if it is too big. Content that is too small will have additional padding.")}];function v({panelId:p,value:d,onChange:i,options:l=r,defaultValue:s=r[0].value,isShownByDefault:h=!0}){const a=d??"fill",u=f.useMemo(()=>l.reduce((o,c)=>(o[c.value]=c.help,o),{}),[l]);return n.jsx(S,{label:e("Scale"),isShownByDefault:h,hasValue:()=>a!==s,onDeselect:()=>i(s),panelId:p,children:n.jsx(m,{label:e("Scale"),isBlock:!0,help:u[a],value:a,onChange:i,size:"__unstable-large",children:l.map(o=>n.jsx(_,{...o},o.value))})})}v.__docgenInfo={description:`A tool to select the CSS object-fit property for the image.

@param {ScaleToolProps} props

@return {import('react').ReactElement} The scale tool.`,methods:[],displayName:"ScaleTool",props:{options:{defaultValue:{value:`[
	{
		value: 'fill',
		label: _x( 'Fill', 'Scale option for dimensions control' ),
		help: __( 'Fill the space by stretching the content.' ),
	},
	{
		value: 'contain',
		label: _x( 'Contain', 'Scale option for dimensions control' ),
		help: __( 'Fit the content to the space without clipping.' ),
	},
	{
		value: 'cover',
		label: _x( 'Cover', 'Scale option for dimensions control' ),
		help: __( "Fill the space by clipping what doesn't fit." ),
	},
	{
		value: 'none',
		label: _x( 'None', 'Scale option for dimensions control' ),
		help: __(
			'Do not adjust the sizing of the content. Content that is too large will be clipped, and content that is too small will have additional padding.'
		),
	},
	{
		value: 'scale-down',
		label: _x( 'Scale down', 'Scale option for dimensions control' ),
		help: __(
			'Scale down the content to fit the space if it is too big. Content that is too small will have additional padding.'
		),
	},
]`,computed:!1},required:!1},defaultValue:{defaultValue:{value:"DEFAULT_SCALE_OPTIONS[ 0 ].value",computed:!0},required:!1},isShownByDefault:{defaultValue:{value:"true",computed:!1},required:!1}}};export{v as S};
