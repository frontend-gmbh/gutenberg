import{r as p,j as e,F as E,f as M}from"./iframe-2TvY6Iig.js";import{f as $}from"./index-mcCfYwbk.js";import{U as D,D as K,L as C,R,H as A,b as j}from"./index-C7vWhNYT.js";import{B as W}from"./index-CFuMsoxH.js";import{I as q}from"./index-dvLnGrYd.js";import"./preload-helper-Zf8nSx-t.js";import"./default-i18n-SWt35ZM4.js";import"./platform-Dx-VEEF7.js";import"./index-BjRskdOB.js";import"./index-BjXx3EE5.js";import"./index-Dt7LODwq.js";import"./index-1YdoA736.js";import"./cubic-bezier-CfzpfWNY.js";import"./T6C2RYFI-BXv3qAIm.js";import"./LVA2YJMS-Bhv8eVm0.js";import"./LMDWO4NN-CH0ROf0T.js";import"./floating-ui.utils.dom-BlKqeV2W.js";import"./dropdown-motion-BuMQU1CT.js";import"./index-Dnuq8uNu.js";import"./index-BIvJ8ozV.js";import"./component-BGXh8e92.js";import"./use-context-system-GBkKyJuM.js";import"./index-DUXT-3wK.js";import"./is-plain-object-BJ3z7EOF.js";import"./index-BtJmv7lM.js";import"./index-CK8hcbFu.js";import"./component-DATVQiJy.js";import"./input-base-DiRopTRM.js";import"./emotion-react.browser.esm-T2caqgd_.js";import"./component-l_ygUujJ.js";import"./context-DbMhvW6o.js";import"./use-responsive-value-bUbLlkWc.js";import"./space-CjrGwnR-.js";import"./component-CqSZVoza.js";import"./hook-56LQ9BfU.js";import"./component-DEBvv9-v.js";import"./hook-D7E4jAJ2.js";import"./names-BarMHYgS.js";import"./config-values-CkVNYk_w.js";import"./colors-values-BSq3yUT9.js";import"./index-CWa7Pedq.js";import"./hook-CHurV6sy.js";import"./values-CtPxXHrl.js";import"./base-control-styles-CoefPmVd.js";import"./font-Cck9kG94.js";import"./box-sizing-DDIeAART.js";import"./rtl-C-j_aU_R.js";import"./use-deprecated-props-BokcF_Hx.js";import"./use-gesture-react.esm-BHlZEJgV.js";import"./actions-elSjqZJg.js";import"./with-ignore-ime-events-BK39a-UH.js";import"./index-DckQhh-o.js";import"./deprecated-36px-size-UsjcW-j9.js";const U=p.createContext(void 0);U.displayName="RovingTabIndexContext";const Y=()=>p.useContext(U),J=U.Provider;function Q({children:t}){const[r,n]=p.useState(),s=p.useMemo(()=>({lastFocusedElement:r,setLastFocusedElement:n}),[r]);return e(J,{value:s,children:t})}try{rovingtabindex.displayName="rovingtabindex",rovingtabindex.__docgenInfo={description:"Provider for adding roving tab index behaviors to tree grid structures.",displayName:"rovingtabindex",props:{}}}catch{}function X({children:t,level:r,positionInSet:n,setSize:s,isExpanded:g,...u},f){return e("tr",{...u,ref:f,role:"row","aria-level":r,"aria-posinset":n,"aria-setsize":s,"aria-expanded":g,children:t})}const S=p.forwardRef(X);try{S.displayName="TreeGridRow",S.__docgenInfo={description:"`TreeGridRow` is used to create a tree hierarchy.\nIt is not a visually styled component, but instead helps with adding\nkeyboard navigation and roving tab index behaviors to tree grid structures.",displayName:"TreeGridRow",props:{}}}catch{}try{row.displayName="row",row.__docgenInfo={description:"`TreeGridRow` is used to create a tree hierarchy.\nIt is not a visually styled component, but instead helps with adding\nkeyboard navigation and roving tab index behaviors to tree grid structures.",displayName:"row",props:{}}}catch{}const Z=p.forwardRef(function({children:r,as:n,...s},g){const u=p.useRef(),f=g||u,{lastFocusedElement:v,setLastFocusedElement:i}=Y();let l;v&&(l=v===("current"in f?f.current:void 0)?0:-1);const G={ref:f,tabIndex:l,onFocus:k=>i?.(k.target),...s};return typeof r=="function"?r(G):n?e(n,{...G,children:r}):null});function tt({children:t,...r},n){return e(Z,{ref:n,...r,children:t})}const z=p.forwardRef(tt);try{z.displayName="TreeGridItem",z.__docgenInfo={description:"`TreeGridItem` is used to create a tree hierarchy.\nIt is not a visually styled component, but instead helps with adding\nkeyboard navigation and roving tab index behaviors to tree grid structures.",displayName:"TreeGridItem",props:{}}}catch{}try{item.displayName="item",item.__docgenInfo={description:"`TreeGridItem` is used to create a tree hierarchy.\nIt is not a visually styled component, but instead helps with adding\nkeyboard navigation and roving tab index behaviors to tree grid structures.",displayName:"item",props:{}}}catch{}function et({children:t,withoutGridItem:r=!1,...n},s){return e("td",{...n,role:"gridcell",children:r?e(E,{children:typeof t=="function"?t({...n,ref:s}):t}):e(z,{ref:s,children:t})})}const y=p.forwardRef(et);try{y.displayName="TreeGridCell",y.__docgenInfo={description:"`TreeGridCell` is used to create a tree hierarchy.\nIt is not a visually styled component, but instead helps with adding\nkeyboard navigation and roving tab index behaviors to tree grid structures.",displayName:"TreeGridCell",props:{}}}catch{}try{cell.displayName="cell",cell.__docgenInfo={description:"`TreeGridCell` is used to create a tree hierarchy.\nIt is not a visually styled component, but instead helps with adding\nkeyboard navigation and roving tab index behaviors to tree grid structures.",displayName:"cell",props:{}}}catch{}function b(t){return $.focusable.find(t,{sequential:!0}).filter(n=>n.closest('[role="row"]')===t)}function rt({children:t,onExpandRow:r=()=>{},onCollapseRow:n=()=>{},onFocusRow:s=()=>{},applicationAriaLabel:g,...u},f){const v=p.useCallback(i=>{const{keyCode:l,metaKey:O,ctrlKey:G,altKey:k}=i;if(O||G||k||![D,K,C,R,A,j].includes(l))return;i.stopPropagation();const{activeElement:w}=document,{currentTarget:x}=i;if(!w||!x.contains(w))return;const o=w.closest('[role="row"]');if(!o)return;const B=b(o),h=B.indexOf(w),P=h===0,H=P&&(o.getAttribute("data-expanded")==="false"||o.getAttribute("aria-expanded")==="false")&&l===R;if([C,R].includes(l)){let d;if(l===C?d=Math.max(0,h-1):d=Math.min(h+1,B.length-1),P){if(l===C){if(o.getAttribute("data-expanded")==="true"||o.getAttribute("aria-expanded")==="true"){n(o),i.preventDefault();return}const m=Math.max(parseInt(o?.getAttribute("aria-level")??"1",10)-1,1),a=Array.from(x.querySelectorAll('[role="row"]'));let c=o;const T=a.indexOf(o);for(let I=T;I>=0;I--){const L=a[I].getAttribute("aria-level");if(L!==null&&parseInt(L,10)===m){c=a[I];break}}b(c)?.[0]?.focus()}if(l===R){if(o.getAttribute("data-expanded")==="false"||o.getAttribute("aria-expanded")==="false"){r(o),i.preventDefault();return}const m=b(o);m.length>0&&m[d]?.focus()}i.preventDefault();return}if(H)return;B[d].focus(),i.preventDefault()}else if([D,K].includes(l)){const d=Array.from(x.querySelectorAll('[role="row"]')),m=d.indexOf(o);let a;if(l===D?a=Math.max(0,m-1):a=Math.min(m+1,d.length-1),a===m){i.preventDefault();return}const c=b(d[a]);if(!c||!c.length){i.preventDefault();return}const T=Math.min(h,c.length-1);c[T].focus(),s(i,o,d[a]),i.preventDefault()}else if([A,j].includes(l)){const d=Array.from(x.querySelectorAll('[role="row"]')),m=d.indexOf(o);let a;if(l===A?a=0:a=d.length-1,a===m){i.preventDefault();return}const c=b(d[a]);if(!c||!c.length){i.preventDefault();return}const T=Math.min(h,c.length-1);c[T].focus(),s(i,o,d[a]),i.preventDefault()}},[r,n,s]);return e(Q,{children:e("div",{role:"application","aria-label":g,children:e("table",{...u,role:"treegrid",onKeyDown:v,ref:f,children:e("tbody",{children:t})})})})}const N=p.forwardRef(rt);try{N.displayName="TreeGrid",N.__docgenInfo={description:`\`TreeGrid\` is used to create a tree hierarchy.
It is not a visually styled component, but instead helps with adding
keyboard navigation and roving tab index behaviors to tree grid structures.

A tree grid is a hierarchical 2 dimensional UI component, for example it could be
used to implement a file system browser.

A tree grid allows the user to navigate using arrow keys.
Up/down to navigate vertically across rows, and left/right to navigate horizontally
between focusables in a row.

The \`TreeGrid\` renders both a \`table\` and \`tbody\` element, and is intended to be used
with \`TreeGridRow\` (\`tr\`) and \`TreeGridCell\` (\`td\`) to build out a grid.

\`\`\`jsx
function TreeMenu() {
	return (
		<TreeGrid>
			<TreeGridRow level={ 1 } positionInSet={ 1 } setSize={ 2 }>
				<TreeGridCell>
					{ ( props ) => (
						<Button onClick={ onSelect } { ...props }>Select</Button>
					) }
				</TreeGridCell>
				<TreeGridCell>
					{ ( props ) => (
						<Button onClick={ onMove } { ...props }>Move</Button>
					) }
				</TreeGridCell>
			</TreeGridRow>
			<TreeGridRow level={ 1 } positionInSet={ 2 } setSize={ 2 }>
				<TreeGridCell>
					{ ( props ) => (
						<Button onClick={ onSelect } { ...props }>Select</Button>
					) }
				</TreeGridCell>
				<TreeGridCell>
					{ ( props ) => (
						<Button onClick={ onMove } { ...props }>Move</Button>
					) }
				</TreeGridCell>
			</TreeGridRow>
			<TreeGridRow level={ 2 } positionInSet={ 1 } setSize={ 1 }>
				<TreeGridCell>
					{ ( props ) => (
						<Button onClick={ onSelect } { ...props }>Select</Button>
					) }
				</TreeGridCell>
				<TreeGridCell>
					{ ( props ) => (
						<Button onClick={ onMove } { ...props }>Move</Button>
					) }
				</TreeGridCell>
			</TreeGridRow>
		</TreeGrid>
	);
}
\`\`\``,displayName:"TreeGrid",props:{}}}catch{}try{treegrid.displayName="treegrid",treegrid.__docgenInfo={description:`\`TreeGrid\` is used to create a tree hierarchy.
It is not a visually styled component, but instead helps with adding
keyboard navigation and roving tab index behaviors to tree grid structures.

A tree grid is a hierarchical 2 dimensional UI component, for example it could be
used to implement a file system browser.

A tree grid allows the user to navigate using arrow keys.
Up/down to navigate vertically across rows, and left/right to navigate horizontally
between focusables in a row.

The \`TreeGrid\` renders both a \`table\` and \`tbody\` element, and is intended to be used
with \`TreeGridRow\` (\`tr\`) and \`TreeGridCell\` (\`td\`) to build out a grid.

\`\`\`jsx
function TreeMenu() {
	return (
		<TreeGrid>
			<TreeGridRow level={ 1 } positionInSet={ 1 } setSize={ 2 }>
				<TreeGridCell>
					{ ( props ) => (
						<Button onClick={ onSelect } { ...props }>Select</Button>
					) }
				</TreeGridCell>
				<TreeGridCell>
					{ ( props ) => (
						<Button onClick={ onMove } { ...props }>Move</Button>
					) }
				</TreeGridCell>
			</TreeGridRow>
			<TreeGridRow level={ 1 } positionInSet={ 2 } setSize={ 2 }>
				<TreeGridCell>
					{ ( props ) => (
						<Button onClick={ onSelect } { ...props }>Select</Button>
					) }
				</TreeGridCell>
				<TreeGridCell>
					{ ( props ) => (
						<Button onClick={ onMove } { ...props }>Move</Button>
					) }
				</TreeGridCell>
			</TreeGridRow>
			<TreeGridRow level={ 2 } positionInSet={ 1 } setSize={ 1 }>
				<TreeGridCell>
					{ ( props ) => (
						<Button onClick={ onSelect } { ...props }>Select</Button>
					) }
				</TreeGridCell>
				<TreeGridCell>
					{ ( props ) => (
						<Button onClick={ onMove } { ...props }>Move</Button>
					) }
				</TreeGridCell>
			</TreeGridRow>
		</TreeGrid>
	);
}
\`\`\``,displayName:"treegrid",props:{}}}catch{}try{TreeGridRow.displayName="TreeGridRow",TreeGridRow.__docgenInfo={description:"`TreeGridRow` is used to create a tree hierarchy.\nIt is not a visually styled component, but instead helps with adding\nkeyboard navigation and roving tab index behaviors to tree grid structures.",displayName:"TreeGridRow",props:{}}}catch{}try{TreeGridCell.displayName="TreeGridCell",TreeGridCell.__docgenInfo={description:"`TreeGridCell` is used to create a tree hierarchy.\nIt is not a visually styled component, but instead helps with adding\nkeyboard navigation and roving tab index behaviors to tree grid structures.",displayName:"TreeGridCell",props:{}}}catch{}try{TreeGridItem.displayName="TreeGridItem",TreeGridItem.__docgenInfo={description:"`TreeGridItem` is used to create a tree hierarchy.\nIt is not a visually styled component, but instead helps with adding\nkeyboard navigation and roving tab index behaviors to tree grid structures.",displayName:"TreeGridItem",props:{}}}catch{}const{fn:F}=__STORYBOOK_MODULE_TEST__,ae={title:"Components/Navigation/TreeGrid",id:"components-treegrid",component:N,subcomponents:{TreeGridRow:S,TreeGridCell:y},argTypes:{children:{control:!1}},tags:["status-experimental"],args:{onExpandRow:F(),onCollapseRow:F(),onFocusRow:F()},parameters:{controls:{expanded:!0}}},nt=[{name:"Fruit",types:[{name:"Apple"},{name:"Orange"},{name:"Pear"}]},{name:"Vegetable",types:[{name:"Cucumber"},{name:"Parsnip"},{name:"Pumpkin"}]}],ot=({level:t})=>{if(t===1)return null;const r=" ".repeat((t-1)*4);return e("span",{"aria-hidden":"true",children:r+"├ "})},V=({items:t=[],level:r=1})=>e(E,{children:t.map((n,s)=>{const g=!!n.types&&!!n.types.length;return M(p.Fragment,{children:[M(S,{positionInSet:s+1,setSize:t.length,level:r,isExpanded:!0,children:[e(y,{children:u=>M(E,{children:[e(ot,{level:r}),e(W,{variant:"primary",...u,children:n.name})]})}),e(y,{children:u=>e(q,{label:"Description",hideLabelFromVision:!0,placeholder:"Description",__next40pxDefaultSize:!0,...u})}),e(y,{children:u=>e(q,{label:"Notes",hideLabelFromVision:!0,placeholder:"Notes",__next40pxDefaultSize:!0,...u})})]}),g&&e(V,{items:n.types,level:r+1})]},n.name)})}),it=t=>e(N,{...t}),_=it.bind({});_.args={children:e(V,{items:nt})};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:"args => <TreeGrid {...args} />",..._.parameters?.docs?.source}}};export{_ as Default,ae as default};
