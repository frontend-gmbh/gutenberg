import{a as i}from"./iframe-2TvY6Iig.js";import{a as n,i as h}from"./default-i18n-SWt35ZM4.js";import{t as b}from"./index-B-Y1hN-C.js";import{t as v}from"./index-CPO_LZ7B.js";import{a as c,b as C,c as u}from"./align-right-DwLyYZEh.js";const I=[{icon:c,title:n("Align text left"),align:"left"},{icon:C,title:n("Align text center"),align:"center"},{icon:u,title:n("Align text right"),align:"right"}],P={placement:"bottom-start"};function o({value:t,onChange:m,alignmentControls:l=I,label:d=n("Align text"),description:f=n("Change text alignment"),isCollapsed:r=!0,isToolbar:a}){function p(e){return()=>m(t===e?void 0:e)}const s=l.find(e=>e.align===t);function _(){return s?s.icon:h()?u:c}const A=a?v:b,x=a?{isCollapsed:r}:{toggleProps:{description:f},popoverProps:P};return i.jsx(A,{icon:_(),label:d,controls:l.map(e=>{const{align:g}=e;return{...e,isActive:t===g,role:r?"menuitemradio":void 0,onClick:p(g)}}),...x})}o.__docgenInfo={description:"",methods:[],displayName:"AlignmentUI",props:{alignmentControls:{defaultValue:{value:`[
	{
		icon: alignLeft,
		title: __( 'Align text left' ),
		align: 'left',
	},
	{
		icon: alignCenter,
		title: __( 'Align text center' ),
		align: 'center',
	},
	{
		icon: alignRight,
		title: __( 'Align text right' ),
		align: 'right',
	},
]`,computed:!1},required:!1},label:{defaultValue:{value:"__( 'Align text' )",computed:!0},required:!1},description:{defaultValue:{value:"__( 'Change text alignment' )",computed:!0},required:!1},isCollapsed:{defaultValue:{value:"true",computed:!1},required:!1}}};const T=t=>i.jsx(o,{...t,isToolbar:!1}),N=t=>i.jsx(o,{...t,isToolbar:!0});T.__docgenInfo={description:"",methods:[],displayName:"AlignmentControl"};N.__docgenInfo={description:"",methods:[],displayName:"AlignmentToolbar"};export{N as A,T as a};
