import{r as G,j as t,f as r,F as x}from"./iframe-2TvY6Iig.js";import{u as y}from"./index-BjXx3EE5.js";import{d as v}from"./index-BjRskdOB.js";import{C as g}from"./index-CjAjqcqY.js";import{b as D}from"./ITI7HKP4-_BMwSXRb.js";import"./preload-helper-Zf8nSx-t.js";import"./default-i18n-SWt35ZM4.js";import"./YORGHBM4-BbXtUlZO.js";import"./LMDWO4NN-CH0ROf0T.js";import"./T7VMP3TM-h-RVnCqR.js";import"./P2CTZE2T-C4NqLDvb.js";import"./LVA2YJMS-Bhv8eVm0.js";import"./J2LQO3EC-KBEnfm3G.js";function S(s){if(s.state){const{state:e,...i}=s,{store:a,...l}=S(e);return{...i,...l,store:a}}return s}const w={__unstableComposite:"Composite",__unstableCompositeGroup:"Composite.Group or Composite.Row",__unstableCompositeItem:"Composite.Item",__unstableUseCompositeState:"Composite"};function b(s,e={}){const i=s.displayName??"",a=l=>{v(`wp.components.${i}`,{since:"6.7",alternative:w.hasOwnProperty(i)?w[i]:void 0});const{store:p,..._}=S(l);let n=_;return n={...n,id:y(p,n.baseId,n.id)},Object.entries(e).forEach(([u,A])=>{n.hasOwnProperty(u)&&(Object.assign(n,{[A]:n[u]}),delete n[u])}),delete n.baseId,t(s,{...n,store:p})};return a.displayName=i,a}const O=G.forwardRef(({role:s,...e},i)=>{const a=s==="row"?g.Row:g.Group;return t(a,{ref:i,role:s,...e})}),c=b(Object.assign(g,{displayName:"__unstableComposite"}),{baseId:"id"}),m=b(Object.assign(O,{displayName:"__unstableCompositeGroup"})),o=b(Object.assign(g.Item,{displayName:"__unstableCompositeItem"}),{focusable:"accessibleWhenDisabled"});function d(s={}){v("wp.components.__unstableUseCompositeState",{since:"6.7",alternative:w.__unstableUseCompositeState});const{baseId:e,currentId:i,orientation:a,rtl:l=!1,loop:p=!1,wrap:_=!1,shift:n=!1,unstable_virtual:u}=s;return{baseId:y(c,"composite",e),store:D({defaultActiveId:i,rtl:l,orientation:a,focusLoop:p,focusShift:n,focusWrap:_,virtualFocus:u})}}try{d.displayName="useCompositeState",d.__docgenInfo={description:"_Note: please use the `Composite` component instead._",displayName:"useCompositeState",props:{baseId:{defaultValue:null,description:"ID that will serve as a base for all the items IDs.",name:"baseId",required:!1,type:{name:"string"}},rtl:{defaultValue:{value:"false"},description:'Determines how next and previous functions will behave. If `rtl` is set\nto `true`, they will be inverted. This only affects the composite widget\nbehavior. You still need to set `dir="rtl"` on HTML/CSS.',name:"rtl",required:!1,type:{name:"boolean"}},orientation:{defaultValue:null,description:`Defines the orientation of the composite widget. If the composite has a
single row or column (one-dimensional), the orientation value determines
which arrow keys can be used to move focus.`,name:"orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},currentId:{defaultValue:null,description:"The current focused item `id`.",name:"currentId",required:!1,type:{name:"string"}},loop:{defaultValue:{value:"false"},description:"Determines how focus moves from the start and end of rows and columns.",name:"loop",required:!1,type:{name:"boolean | Orientation"}},wrap:{defaultValue:{value:"false"},description:`If enabled, moving to the next item from the last one in a row or column
will focus the first item in the next row or column and vice-versa.

** Has effect only on two-dimensional composites. **`,name:"wrap",required:!1,type:{name:"boolean | Orientation"}},shift:{defaultValue:{value:"false"},description:`If enabled, moving up or down when there's no next item or the next item
is disabled will shift to the item right before it.

** Has effect only on two-dimensional composites. **`,name:"shift",required:!1,type:{name:"boolean"}},unstable_virtual:{defaultValue:null,description:"",name:"unstable_virtual",required:!1,type:{name:"boolean"}}}}}catch{}try{c.displayName="Composite",c.__docgenInfo={description:"_Note: please use the `Composite` component instead._",displayName:"Composite",props:{}}}catch{}try{m.displayName="CompositeGroup",m.__docgenInfo={description:"_Note: please use the `Composite.Row` or `Composite.Group` components instead._",displayName:"CompositeGroup",props:{}}}catch{}try{o.displayName="CompositeItem",o.__docgenInfo={description:"_Note: please use the `Composite.Item` component instead._",displayName:"CompositeItem",props:{}}}catch{}function N(s){return t("dl",{children:Object.entries(s).map(([e,i])=>r(x,{children:[t("dt",{children:e}),t("dd",{children:JSON.stringify(i)})]}))})}N.displayName="useCompositeState";function q(s,e){return[`const state = useCompositeState(${` ${JSON.stringify(e.args,null,2)} `.replace(" {} ","")});`,"","return (","  "+s.replaceAll(/state=\{\{[\s\S]*?\}\}/g,"state={ state }").replaceAll("=>","").replaceAll(/baseId=[^>]+?(\s*>)/g,(l,p)=>`{ ...state }${p}`).replaceAll(/<Composite\w+[\s\S]*?>/g,l=>l.replaceAll(/\s+\s/g," ")).replaceAll(/ >\s+([\w\s]*?)\s+<\//g,(l,p)=>`>${p}</`).replaceAll("} >","}>").replaceAll(/\n/g,`
  `),");"].join(`
`)}try{useCompositeState.displayName="useCompositeState",useCompositeState.__docgenInfo={description:`Renders a composite widget.

This unstable component is deprecated. Use \`Composite\` instead.

\`\`\`jsx
import {
	__unstableUseCompositeState as useCompositeState,
	__unstableComposite as Composite,
	__unstableCompositeItem as CompositeItem,
} from '@wordpress/components';

const state = useCompositeState();
<Composite state={ state }>
	<CompositeItem>Item 1</CompositeItem>
	<CompositeItem>Item 2</CompositeItem>
</Composite>;
\`\`\``,displayName:"useCompositeState",props:{baseId:{defaultValue:null,description:"ID that will serve as a base for all the items IDs.",name:"baseId",required:!1,type:{name:"string"}},rtl:{defaultValue:{value:"false"},description:'Determines how next and previous functions will behave. If `rtl` is set\nto `true`, they will be inverted. This only affects the composite widget\nbehavior. You still need to set `dir="rtl"` on HTML/CSS.',name:"rtl",required:!1,type:{name:"boolean"}},orientation:{defaultValue:null,description:`Defines the orientation of the composite widget. If the composite has a
single row or column (one-dimensional), the orientation value determines
which arrow keys can be used to move focus.`,name:"orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},currentId:{defaultValue:null,description:"The current focused item `id`.",name:"currentId",required:!1,type:{name:"string"}},loop:{defaultValue:{value:"false"},description:"Determines how focus moves from the start and end of rows and columns.",name:"loop",required:!1,type:{name:"boolean | Orientation"}},wrap:{defaultValue:{value:"false"},description:`If enabled, moving to the next item from the last one in a row or column
will focus the first item in the next row or column and vice-versa.

** Has effect only on two-dimensional composites. **`,name:"wrap",required:!1,type:{name:"boolean | Orientation"}},shift:{defaultValue:{value:"false"},description:`If enabled, moving up or down when there's no next item or the next item
is disabled will shift to the item right before it.

** Has effect only on two-dimensional composites. **`,name:"shift",required:!1,type:{name:"boolean"}},unstable_virtual:{defaultValue:null,description:"",name:"unstable_virtual",required:!1,type:{name:"boolean"}}}}}catch{}const Y={title:"Components (Deprecated)/Composite (Unstable)",id:"components-composite-unstable",component:N,subcomponents:{Composite:c,CompositeGroup:m,CompositeItem:o},args:{},parameters:{controls:{exclude:/^unstable_/},docs:{canvas:{sourceState:"shown"},source:{transform:q}}},argTypes:{orientation:{control:"select"},loop:{control:"select",options:[!0,!1,"horizontal","vertical"]},wrap:{control:"select",options:[!0,!1,"horizontal","vertical"]}}},C=s=>{const e=d(s);return r(c,{role:"grid",state:e,"aria-label":"Legacy Composite with state prop (two dimensions)",children:[r(m,{state:e,role:"row",children:[t(o,{state:e,role:"gridcell",children:"Item A1"}),t(o,{state:e,role:"gridcell",children:"Item A2"}),t(o,{state:e,role:"gridcell",children:"Item A3"})]}),r(m,{state:e,role:"row",children:[t(o,{state:e,role:"gridcell",children:"Item B1"}),t(o,{state:e,role:"gridcell",children:"Item B2"}),t(o,{state:e,role:"gridcell",children:"Item B3"})]}),r(m,{state:e,role:"row",children:[t(o,{state:e,role:"gridcell",children:"Item C1"}),t(o,{state:e,role:"gridcell",children:"Item C2"}),t(o,{state:e,role:"gridcell",children:"Item C3"})]})]})};C.args={};const I=s=>{const e=d(s);return r(c,{role:"grid",...e,"aria-label":"Legacy Composite with spread props (two dimensions)",children:[r(m,{...e,role:"row",children:[t(o,{...e,role:"gridcell",children:"Item A1"}),t(o,{...e,role:"gridcell",children:"Item A2"}),t(o,{...e,role:"gridcell",children:"Item A3"})]}),r(m,{...e,role:"row",children:[t(o,{...e,role:"gridcell",children:"Item B1"}),t(o,{...e,role:"gridcell",children:"Item B2"}),t(o,{...e,role:"gridcell",children:"Item B3"})]}),r(m,{...e,role:"row",children:[t(o,{...e,role:"gridcell",children:"Item C1"}),t(o,{...e,role:"gridcell",children:"Item C2"}),t(o,{...e,role:"gridcell",children:"Item C3"})]})]})};I.args={};const h=s=>{const e=d(s);return r(c,{role:"list",state:e,"aria-label":"Legacy Composite with state prop (one dimension)",children:[t(o,{state:e,role:"listitem",children:"Item 1"}),t(o,{state:e,role:"listitem",children:"Item 2"}),t(o,{state:e,role:"listitem",children:"Item 3"}),t(o,{state:e,role:"listitem",children:"Item 4"}),t(o,{state:e,role:"listitem",children:"Item 5"})]})};h.args={};const f=s=>{const e=d(s);return r(c,{role:"list",...e,"aria-label":"Legacy Composite with spread props (one dimension)",children:[t(o,{...e,role:"listitem",children:"Item 1"}),t(o,{...e,role:"listitem",children:"Item 2"}),t(o,{...e,role:"listitem",children:"Item 3"}),t(o,{...e,role:"listitem",children:"Item 4"}),t(o,{...e,role:"listitem",children:"Item 5"})]})};f.args={};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`initialState => {
  const state = useCompositeState(initialState);
  return <Composite role="grid" state={state} aria-label="Legacy Composite with state prop (two dimensions)">
            <CompositeGroup state={state} role="row">
                <CompositeItem state={state} role="gridcell">
                    Item A1
                </CompositeItem>
                <CompositeItem state={state} role="gridcell">
                    Item A2
                </CompositeItem>
                <CompositeItem state={state} role="gridcell">
                    Item A3
                </CompositeItem>
            </CompositeGroup>
            <CompositeGroup state={state} role="row">
                <CompositeItem state={state} role="gridcell">
                    Item B1
                </CompositeItem>
                <CompositeItem state={state} role="gridcell">
                    Item B2
                </CompositeItem>
                <CompositeItem state={state} role="gridcell">
                    Item B3
                </CompositeItem>
            </CompositeGroup>
            <CompositeGroup state={state} role="row">
                <CompositeItem state={state} role="gridcell">
                    Item C1
                </CompositeItem>
                <CompositeItem state={state} role="gridcell">
                    Item C2
                </CompositeItem>
                <CompositeItem state={state} role="gridcell">
                    Item C3
                </CompositeItem>
            </CompositeGroup>
        </Composite>;
}`,...C.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`initialState => {
  const state = useCompositeState(initialState);
  return <Composite role="grid" {...state} aria-label="Legacy Composite with spread props (two dimensions)">
            <CompositeGroup {...state} role="row">
                <CompositeItem {...state} role="gridcell">
                    Item A1
                </CompositeItem>
                <CompositeItem {...state} role="gridcell">
                    Item A2
                </CompositeItem>
                <CompositeItem {...state} role="gridcell">
                    Item A3
                </CompositeItem>
            </CompositeGroup>
            <CompositeGroup {...state} role="row">
                <CompositeItem {...state} role="gridcell">
                    Item B1
                </CompositeItem>
                <CompositeItem {...state} role="gridcell">
                    Item B2
                </CompositeItem>
                <CompositeItem {...state} role="gridcell">
                    Item B3
                </CompositeItem>
            </CompositeGroup>
            <CompositeGroup {...state} role="row">
                <CompositeItem {...state} role="gridcell">
                    Item C1
                </CompositeItem>
                <CompositeItem {...state} role="gridcell">
                    Item C2
                </CompositeItem>
                <CompositeItem {...state} role="gridcell">
                    Item C3
                </CompositeItem>
            </CompositeGroup>
        </Composite>;
}`,...I.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`initialState => {
  const state = useCompositeState(initialState);
  return <Composite role="list" state={state} aria-label="Legacy Composite with state prop (one dimension)">
            <CompositeItem state={state} role="listitem">
                Item 1
            </CompositeItem>
            <CompositeItem state={state} role="listitem">
                Item 2
            </CompositeItem>
            <CompositeItem state={state} role="listitem">
                Item 3
            </CompositeItem>
            <CompositeItem state={state} role="listitem">
                Item 4
            </CompositeItem>
            <CompositeItem state={state} role="listitem">
                Item 5
            </CompositeItem>
        </Composite>;
}`,...h.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`initialState => {
  const state = useCompositeState(initialState);
  return <Composite role="list" {...state} aria-label="Legacy Composite with spread props (one dimension)">
            <CompositeItem {...state} role="listitem">
                Item 1
            </CompositeItem>
            <CompositeItem {...state} role="listitem">
                Item 2
            </CompositeItem>
            <CompositeItem {...state} role="listitem">
                Item 3
            </CompositeItem>
            <CompositeItem {...state} role="listitem">
                Item 4
            </CompositeItem>
            <CompositeItem {...state} role="listitem">
                Item 5
            </CompositeItem>
        </Composite>;
}`,...f.parameters?.docs?.source}}};export{f as OneDimensionWithSpreadProps,h as OneDimensionWithStateProp,I as TwoDimensionsWithSpreadProps,C as TwoDimensionsWithStateProp,Y as default};
