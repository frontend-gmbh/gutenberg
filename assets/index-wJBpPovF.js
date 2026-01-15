import{c as l}from"./iframe-2TvY6Iig.js";function s(e){return e==="appear"?"top":"left"}function n(e){if(e.type==="loading")return"components-animate__loading";const{type:t,origin:a=s(t)}=e;if(t==="appear"){const[i,o="center"]=a.split(" ");return l("components-animate__appear",{["is-from-"+o]:o!=="center",["is-from-"+i]:i!=="middle"})}if(t==="slide-in")return l("components-animate__slide-in","is-from-"+a)}function r({type:e,options:t={},children:a}){return a({className:n({type:e,...t})})}try{n.displayName="getAnimateClassName",n.__docgenInfo={description:"",displayName:"getAnimateClassName",props:{type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"loading"'},{value:'"appear"'},{value:'"slide-in"'}]}},origin:{defaultValue:null,description:"",name:"origin",required:!1,type:{name:"enum",value:[{value:'"middle"'},{value:'"left"'},{value:'"right"'},{value:'"bottom"'},{value:'"top"'},{value:'"middle left"'},{value:'"middle right"'},{value:'"bottom left"'},{value:'"bottom right"'},{value:'"top left"'},{value:'"top right"'}]}}}}}catch{}try{r.displayName="Animate",r.__docgenInfo={description:`Simple interface to introduce animations to components.

\`\`\`jsx
import { Animate, Notice } from '@wordpress/components';

const MyAnimatedNotice = () => (
	<Animate type="slide-in" options={ { origin: 'top' } }>
		{ ( { className } ) => (
			<Notice className={ className } status="success">
				<p>Animation finished.</p>
			</Notice>
		) }
	</Animate>
);
\`\`\``,displayName:"Animate",props:{type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"loading"'},{value:'"appear"'},{value:'"slide-in"'}]}},options:{defaultValue:{value:"{}"},description:"",name:"options",required:!1,type:{name:'Omit<AppearOptions, "type"> | Omit<SlideInOptions, "type"> | Omit<LoadingOptions, "type"> | Omit<NoAnimationOptions, "type">'}}}}}catch{}export{r as A,n as g};
