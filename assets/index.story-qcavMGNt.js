import{j as e,r as s,f as h,c as w,F as G}from"./iframe-2TvY6Iig.js";import{B as p}from"./index-CFuMsoxH.js";import{d as N}from"./index-BjRskdOB.js";import{a as d}from"./default-i18n-SWt35ZM4.js";import{M as P}from"./index-DjRIBaDh.js";import{s as T}from"./sprintf-CXbjGC2q.js";import{C as F,S as B}from"./index-BIvJ8ozV.js";import"./preload-helper-Zf8nSx-t.js";import"./index-BjXx3EE5.js";import"./index-Dt7LODwq.js";import"./index-1YdoA736.js";import"./cubic-bezier-CfzpfWNY.js";import"./T6C2RYFI-BXv3qAIm.js";import"./LVA2YJMS-Bhv8eVm0.js";import"./LMDWO4NN-CH0ROf0T.js";import"./floating-ui.utils.dom-BlKqeV2W.js";import"./dropdown-motion-BuMQU1CT.js";import"./index-Dnuq8uNu.js";import"./component-BGXh8e92.js";import"./use-context-system-GBkKyJuM.js";import"./index-DUXT-3wK.js";import"./is-plain-object-BJ3z7EOF.js";import"./index-BtJmv7lM.js";import"./index-CK8hcbFu.js";import"./component-DATVQiJy.js";import"./index-g4CI5goq.js";import"./index-mcCfYwbk.js";import"./index-DDuNjadK.js";import"./index-CLatOAvg.js";import"./index-CZo2zBTA.js";import"./v4-CtRu48qb.js";import"./with-ignore-ime-events-BK39a-UH.js";import"./index-B18ctdHe.js";import"./config-values-CkVNYk_w.js";import"./colors-values-BSq3yUT9.js";import"./component-Cu4YN_oY.js";import"./emotion-react.browser.esm-T2caqgd_.js";import"./space-CjrGwnR-.js";import"./rtl-C-j_aU_R.js";import"./get-scroll-container-N9jTgEaT.js";import"./assert-is-defined-13wscoI_.js";import"./close-H02ILkEf.js";const O=()=>e(B,{width:"8",height:"8",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e(F,{cx:"4",cy:"4",r:"4"})});function q({currentPage:t,numberOfPages:i,setCurrentPage:c}){return e("ul",{className:"components-guide__page-control","aria-label":d("Guide controls"),children:Array.from({length:i}).map((l,n)=>e("li",{"aria-current":n===t?"step":void 0,children:e(p,{size:"small",icon:e(O,{}),"aria-label":T(d("Page %1$d of %2$d"),n+1,i),onClick:()=>c(n)},n)},n))})}try{pagecontrol.displayName="pagecontrol",pagecontrol.__docgenInfo={description:"",displayName:"pagecontrol",props:{currentPage:{defaultValue:null,description:"Current page index.",name:"currentPage",required:!0,type:{name:"number"}},numberOfPages:{defaultValue:null,description:"Total number of pages.",name:"numberOfPages",required:!0,type:{name:"number"}},setCurrentPage:{defaultValue:null,description:"Called when user clicks on a `PageControlIcon` button.",name:"setCurrentPage",required:!0,type:{name:"(page: number) => void"}}}}}catch{}function f({children:t,className:i,contentLabel:c,finishButtonText:l=d("Finish"),nextButtonText:n=d("Next"),previousButtonText:g=d("Previous"),onFinish:m,pages:r=[]}){const x=s.useRef(null),[a,_]=s.useState(0);s.useEffect(()=>{const o=x.current?.querySelector(".components-guide");o instanceof HTMLElement&&o.focus()},[a]),s.useEffect(()=>{s.Children.count(t)&&N("Passing children to <Guide>",{since:"5.5",alternative:"the `pages` prop"})},[t]),s.Children.count(t)&&(r=s.Children.map(t,o=>({content:o}))??[]);const b=a>0,y=a<r.length-1,v=()=>{b&&_(a-1)},C=()=>{y&&_(a+1)};return r.length===0?null:e(P,{className:w("components-guide",i),contentLabel:c,isDismissible:r.length>1,onRequestClose:m,onKeyDown:o=>{o.code==="ArrowLeft"?(v(),o.preventDefault()):o.code==="ArrowRight"&&(C(),o.preventDefault())},ref:x,children:h("div",{className:"components-guide__container",children:[h("div",{className:"components-guide__page",children:[r[a].image,r.length>1&&e(q,{currentPage:a,numberOfPages:r.length,setCurrentPage:_}),r[a].content]}),h("div",{className:"components-guide__footer",children:[b&&e(p,{className:"components-guide__back-button",variant:"tertiary",onClick:v,__next40pxDefaultSize:!0,children:g}),y&&e(p,{className:"components-guide__forward-button",variant:"primary",onClick:C,__next40pxDefaultSize:!0,children:n}),!y&&e(p,{className:"components-guide__finish-button",variant:"primary",onClick:m,__next40pxDefaultSize:!0,children:l})]})]})})}try{f.displayName="Guide",f.__docgenInfo={description:`\`Guide\` is a React component that renders a _user guide_ in a modal. The guide consists of several pages which the user can step through one by one. The guide is finished when the modal is closed or when the user clicks _Finish_ on the last page of the guide.

\`\`\`jsx
function MyTutorial() {
	const [ isOpen, setIsOpen ] = useState( true );

	if ( ! isOpen ) {
		return null;
	}

	return (
		<Guide
			onFinish={ () => setIsOpen( false ) }
			pages={ [
				{
					content: <p>Welcome to the ACME Store!</p>,
				},
				{
					image: <img src="https://acmestore.com/add-to-cart.png" />,
					content: (
						<p>
							Click <i>Add to Cart</i> to buy a product.
						</p>
					),
				},
			] }
		/>
	);
}
\`\`\``,displayName:"Guide",props:{children:{defaultValue:null,description:"Deprecated. Use `pages` prop instead.\n@deprecated since 5.5",name:"children",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"A custom class to add to the modal.",name:"className",required:!1,type:{name:"string"}},contentLabel:{defaultValue:null,description:"Used as the modal's accessibility label.",name:"contentLabel",required:!0,type:{name:"string"}},finishButtonText:{defaultValue:{value:"__( 'Finish' )"},description:"Use this to customize the label of the _Finish_ button shown at the end of the guide.",name:"finishButtonText",required:!1,type:{name:"string"}},nextButtonText:{defaultValue:{value:"__( 'Next' )"},description:"Use this to customize the label of the _Next_ button shown on each page of the guide.",name:"nextButtonText",required:!1,type:{name:"string"}},previousButtonText:{defaultValue:{value:"__( 'Previous' )"},description:"Use this to customize the label of the _Previous_ button shown on each page of the guide except the first.",name:"previousButtonText",required:!1,type:{name:"string"}},onFinish:{defaultValue:null,description:"A function which is called when the guide is finished.",name:"onFinish",required:!0,type:{name:"(event?: KeyboardEvent<HTMLDivElement> | SyntheticEvent<Element, Event>) => void"}},pages:{defaultValue:{value:"[]"},description:"A list of objects describing each page in the guide. Each object **must** contain a `'content'` property and may optionally contain a `'image'` property.",name:"pages",required:!1,type:{name:"Page[]"}}}}}catch{}const ve={title:"Components/Guide",component:f,argTypes:{contentLabel:{control:"text"},finishButtonText:{control:"text"},nextButtonText:{control:"text"},previousButtonText:{control:"text"},onFinish:{action:"onFinish"}}},S=({onFinish:t,...i})=>{const[c,l]=s.useState(!1),n=()=>l(!0),g=()=>l(!1);return h(G,{children:[e(p,{variant:"secondary",onClick:n,children:"Open Guide"}),c&&e(f,{...i,onFinish:(...m)=>{g(),t?.(...m)}})]})},u=S.bind({});u.args={pages:Array.from({length:3}).map((t,i)=>({content:e("p",{children:`Page ${i+1}`})}))};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`({
  onFinish,
  ...props
}) => {
  const [isOpen, setOpen] = useState(false);
  const openGuide = () => setOpen(true);
  const closeGuide = () => setOpen(false);
  return <>
            <Button variant="secondary" onClick={openGuide}>
                Open Guide
            </Button>
            {isOpen && <Guide {...props} onFinish={(...finishArgs) => {
      closeGuide();
      onFinish?.(...finishArgs);
    }} />}
        </>;
}`,...u.parameters?.docs?.source}}};export{u as Default,ve as default};
