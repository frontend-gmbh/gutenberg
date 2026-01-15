import{j as u,r as g}from"./iframe-2TvY6Iig.js";import{a as m,_ as v}from"./default-i18n-SWt35ZM4.js";import{T as B}from"./index-DA2V9UDs.js";import{F as x}from"./index-DLM-Dk-G.js";import{R as T}from"./index-CzX5DZnr.js";import{S as V}from"./index-LbqlnDh8.js";import{V as L}from"./component-6CLxCT3h.js";import"./preload-helper-Zf8nSx-t.js";import"./index-RQ7hRITr.js";import"./use-deprecated-props-BokcF_Hx.js";import"./deprecated-36px-size-UsjcW-j9.js";import"./index-BjRskdOB.js";import"./sprintf-CXbjGC2q.js";import"./index-BjXx3EE5.js";import"./index-BcsUY9xg.js";import"./index-BeazDMB8.js";import"./index-ChLxn6tX.js";import"./index-CXY7LZMH.js";import"./index-D4zU5mcb.js";import"./index-CFuMsoxH.js";import"./index-Dt7LODwq.js";import"./index-1YdoA736.js";import"./cubic-bezier-CfzpfWNY.js";import"./T6C2RYFI-BXv3qAIm.js";import"./LVA2YJMS-Bhv8eVm0.js";import"./LMDWO4NN-CH0ROf0T.js";import"./floating-ui.utils.dom-BlKqeV2W.js";import"./dropdown-motion-BuMQU1CT.js";import"./index-Dnuq8uNu.js";import"./index-BIvJ8ozV.js";import"./component-BGXh8e92.js";import"./use-context-system-GBkKyJuM.js";import"./index-DUXT-3wK.js";import"./is-plain-object-BJ3z7EOF.js";import"./index-BtJmv7lM.js";import"./index-CK8hcbFu.js";import"./component-DATVQiJy.js";import"./close-small-D3dHP1RP.js";import"./suggestions-list-BL584KLy.js";import"./index-DDuNjadK.js";import"./emotion-react.browser.esm-T2caqgd_.js";import"./space-CjrGwnR-.js";import"./component-l_ygUujJ.js";import"./context-DbMhvW6o.js";import"./use-responsive-value-bUbLlkWc.js";import"./box-sizing-DDIeAART.js";import"./base-control-styles-CoefPmVd.js";import"./font-Cck9kG94.js";import"./colors-values-BSq3yUT9.js";import"./config-values-CkVNYk_w.js";import"./with-ignore-ime-events-BK39a-UH.js";import"./component-CqSZVoza.js";import"./hook-56LQ9BfU.js";import"./index-CLatOAvg.js";import"./index-DckQhh-o.js";import"./index-w5J4Ezdm.js";import"./index-dvLnGrYd.js";import"./input-base-DiRopTRM.js";import"./component-DEBvv9-v.js";import"./hook-D7E4jAJ2.js";import"./names-BarMHYgS.js";import"./index-CWa7Pedq.js";import"./hook-CHurV6sy.js";import"./values-CtPxXHrl.js";import"./rtl-C-j_aU_R.js";import"./use-gesture-react.esm-BHlZEJgV.js";import"./actions-elSjqZJg.js";import"./component-Cu4YN_oY.js";import"./component-CIWI0tS-.js";import"./hook-D_MMjSqd.js";import"./get-valid-children-BTY2hlyh.js";import"./plus-Bb-UlsvB.js";import"./reset-DAroYZ4v.js";import"./use-controlled-state-EIKz0OpF.js";import"./chevron-down-hEJ1114-.js";import"./index-FlM62Vh8.js";import"./input-suffix-wrapper-Gn_aDXNL.js";import"./chevron-down-mxzMPu8z.js";const D=r=>r.every(i=>i.parent!==null);function A(r){const i=r.map(t=>({children:[],parent:null,...t,id:String(t.id)}));if(!D(i))return i;const l=i.reduce((t,a)=>{const{parent:e}=a;return t[e]||(t[e]=[]),t[e].push(a),t},{}),o=t=>t.map(a=>{const e=l[a.id];return{...a,children:e&&e.length?o(e):[]}});return o(l[0]||[])}function Q({__next40pxDefaultSize:r,label:i,noOptionLabel:l,authorList:o,selectedAuthorId:t,onChange:a}){if(!o)return null;const e=A(o);return u(B,{label:i,noOptionLabel:l,onChange:a,tree:e,selectedId:t!==void 0?String(t):void 0,__next40pxDefaultSize:r})}try{authorselect.displayName="authorselect",authorselect.__docgenInfo={description:"",displayName:"authorselect",props:{label:{defaultValue:null,description:"If this property is added, a label will be generated using label property as the content.",name:"label",required:!1,type:{name:"ReactNode"}},noOptionLabel:{defaultValue:null,description:"If this property is added, an option will be added with this label to represent empty selection.",name:"noOptionLabel",required:!1,type:{name:"string"}},authorList:{defaultValue:null,description:"",name:"authorList",required:!1,type:{name:"Author[]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(newAuthor: string) => void"}},selectedAuthorId:{defaultValue:null,description:"",name:"selectedAuthorId",required:!1,type:{name:"number"}},__next40pxDefaultSize:{defaultValue:null,description:"",name:"__next40pxDefaultSize",required:!0,type:{name:"boolean"}}}}}catch{}function k({__next40pxDefaultSize:r,label:i,noOptionLabel:l,categoriesList:o,selectedCategoryId:t,onChange:a,...e}){const p=g.useMemo(()=>A(o),[o]);return u(B,{label:i,noOptionLabel:l,onChange:a,tree:p,selectedId:t!==void 0?String(t):void 0,...e,__next40pxDefaultSize:r})}try{categoryselect.displayName="categoryselect",categoryselect.__docgenInfo={description:"",displayName:"categoryselect",props:{label:{defaultValue:null,description:"If this property is added, a label will be generated using label property as the content.",name:"label",required:!1,type:{name:"ReactNode"}},noOptionLabel:{defaultValue:null,description:"If this property is added, an option will be added with this label to represent empty selection.",name:"noOptionLabel",required:!1,type:{name:"string"}},categoriesList:{defaultValue:null,description:"",name:"categoriesList",required:!0,type:{name:"Category[]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(newCategory: string) => void"}},selectedCategoryId:{defaultValue:null,description:"",name:"selectedCategoryId",required:!1,type:{name:"number"}},__next40pxDefaultSize:{defaultValue:null,description:"",name:"__next40pxDefaultSize",required:!0,type:{name:"boolean"}}}}}catch{}const z=1,M=100,E=20;function P(r){return"categoriesList"in r}function W(r){return"categorySuggestions"in r}const R=[{label:m("Newest to oldest"),value:"date/desc"},{label:m("Oldest to newest"),value:"date/asc"},{label:m("A → Z"),value:"title/asc"},{label:m("Z → A"),value:"title/desc"}];function I({authorList:r,selectedAuthorId:i,numberOfItems:l,order:o,orderBy:t,orderByOptions:a=R,maxItems:e=M,minItems:p=z,onAuthorChange:y,onNumberOfItemsChange:h,onOrderChange:C,onOrderByChange:f,...n}){return u(L,{spacing:"4",className:"components-query-controls",children:[C&&f&&u(V,{__next40pxDefaultSize:!0,label:m("Order by"),value:t===void 0||o===void 0?void 0:`${t}/${o}`,options:a,onChange:c=>{if(typeof c!="string")return;const[d,_]=c.split("/");_!==o&&C(_),d!==t&&f(d)}},"query-controls-order-select"),P(n)&&n.categoriesList&&n.onCategoryChange&&u(k,{__next40pxDefaultSize:!0,categoriesList:n.categoriesList,label:m("Category"),noOptionLabel:v("All","categories"),selectedCategoryId:n.selectedCategoryId,onChange:n.onCategoryChange},"query-controls-category-select"),W(n)&&n.categorySuggestions&&n.onCategoryChange&&u(x,{__next40pxDefaultSize:!0,label:m("Categories"),value:n.selectedCategories&&n.selectedCategories.map(c=>({id:c.id,value:c.name||c.value})),suggestions:Object.keys(n.categorySuggestions),onChange:n.onCategoryChange,maxSuggestions:E},"query-controls-categories-select"),y&&u(Q,{__next40pxDefaultSize:!0,authorList:r,label:m("Author"),noOptionLabel:v("All","authors"),selectedAuthorId:i,onChange:y},"query-controls-author-select"),h&&u(T,{__next40pxDefaultSize:!0,label:m("Number of items"),value:l,onChange:h,min:p,max:e,required:!0},"query-controls-range-control")]})}try{I.displayName="QueryControls",I.__docgenInfo={description:`Controls to query for posts.

\`\`\`jsx
const MyQueryControls = () => (
  <QueryControls
    { ...{ maxItems, minItems, numberOfItems, order, orderBy, orderByOptions } }
    onOrderByChange={ ( newOrderBy ) => {
      updateQuery( { orderBy: newOrderBy } )
    }
    onOrderChange={ ( newOrder ) => {
      updateQuery( { order: newOrder } )
    }
    categoriesList={ categories }
    selectedCategoryId={ category }
    onCategoryChange={ ( newCategory ) => {
      updateQuery( { category: newCategory } )
    }
    onNumberOfItemsChange={ ( newNumberOfItems ) => {
      updateQuery( { numberOfItems: newNumberOfItems } )
    } }
  />
);
\`\`\``,displayName:"QueryControls",props:{authorList:{defaultValue:null,description:"An array of the authors to select from.",name:"authorList",required:!1,type:{name:"Author[]"}},maxItems:{defaultValue:{value:"100"},description:"The maximum number of items.",name:"maxItems",required:!1,type:{name:"number"}},minItems:{defaultValue:{value:"1"},description:"The minimum number of items.",name:"minItems",required:!1,type:{name:"number"}},numberOfItems:{defaultValue:null,description:"The selected number of items to retrieve via the query.",name:"numberOfItems",required:!1,type:{name:"number"}},onAuthorChange:{defaultValue:null,description:`A function that receives the new author value.
If not specified, the author controls are not rendered.`,name:"onAuthorChange",required:!1,type:{name:"(newAuthor: string) => void"}},onNumberOfItemsChange:{defaultValue:null,description:`A function that receives the new number of items.
If not specified, then the number of items
range control is not rendered.`,name:"onNumberOfItemsChange",required:!1,type:{name:"(newNumber?: number) => void"}},onOrderChange:{defaultValue:null,description:"A function that receives the new order value.\nIf this prop or the `onOrderByChange` prop are not specified,\nthen the order controls are not rendered.",name:"onOrderChange",required:!1,type:{name:"(newOrder: Order) => void"}},onOrderByChange:{defaultValue:null,description:"A function that receives the new orderby value.\nIf this prop or the `onOrderChange` prop are not specified,\nthen the order controls are not rendered.",name:"onOrderByChange",required:!1,type:{name:"(newOrderBy: OrderBy) => void"}},order:{defaultValue:null,description:"The order in which to retrieve posts.",name:"order",required:!1,type:{name:"enum",value:[{value:'"desc"'},{value:'"asc"'}]}},orderBy:{defaultValue:null,description:"The meta key by which to order posts.",name:"orderBy",required:!1,type:{name:"enum",value:[{value:'"title"'},{value:'"date"'},{value:'"menu_order"'}]}},orderByOptions:{defaultValue:{value:`[
	{
		label: __( 'Newest to oldest' ),
		value: 'date/desc',
	},
	{
		label: __( 'Oldest to newest' ),
		value: 'date/asc',
	},
	{
		/* translators: Label for ordering posts by title in ascending order. */
		label: __( 'A → Z' ),
		value: 'title/asc',
	},
	{
		/* translators: Label for ordering posts by title in descending order. */
		label: __( 'Z → A' ),
		value: 'title/desc',
	},
]`},description:"List of available ordering options.",name:"orderByOptions",required:!1,type:{name:"OrderByOption[]"}},selectedAuthorId:{defaultValue:null,description:"The selected author ID.",name:"selectedAuthorId",required:!1,type:{name:"number"}},__next40pxDefaultSize:{defaultValue:null,description:`Start opting into the larger default height that will become the
default size in a future version.
@deprecated Default behavior since WP 6.7. Prop can be safely removed.
@ignore`,name:"__next40pxDefaultSize",required:!1,type:{name:"boolean"}},categoriesList:{defaultValue:null,description:"An array of categories. When passed in conjunction with the\n`onCategoryChange` prop, it causes the component to render UI that allows\nselecting one category at a time.",name:"categoriesList",required:!1,type:{name:"Category[]"}},selectedCategoryId:{defaultValue:null,description:"The selected category for the `categoriesList` prop.",name:"selectedCategoryId",required:!1,type:{name:"number"}},onCategoryChange:{defaultValue:null,description:`A function that receives the new category value. If not specified, the
category controls are not rendered.
The function's signature changes depending on whether multiple category
selection is enabled or not.`,name:"onCategoryChange",required:!1,type:{name:"((newCategory: string) => void) | ((tokens: (string | TokenItem)[]) => void)"}},categorySuggestions:{defaultValue:null,description:"An object of categories with the category name as the key. When passed in\nconjunction with the `onCategoryChange` prop, it causes the component to\nrender UI that enables multiple selection.",name:"categorySuggestions",required:!1,type:{name:"Record<string, Category>"}},selectedCategories:{defaultValue:null,description:"The selected categories for the `categorySuggestions` prop.",name:"selectedCategories",required:!1,type:{name:"Category[]"}}}}}catch{}const{fn:b}=__STORYBOOK_MODULE_TEST__,ht={title:"Components/QueryControls",component:I,argTypes:{numberOfItems:{control:!1},order:{control:!1},orderBy:{control:!1},selectedAuthorId:{control:!1},selectedCategories:{control:!1},selectedCategoryId:{control:!1}},args:{onAuthorChange:b(),onNumberOfItemsChange:b(),onOrderByChange:b(),onOrderChange:b(),onCategoryChange:b()},parameters:{controls:{expanded:!0},docs:{canvas:{sourceState:"shown"}}}},S=r=>{const{onAuthorChange:i,onCategoryChange:l,onNumberOfItemsChange:o,onOrderByChange:t,onOrderChange:a,...e}=r,[p,y]=g.useState(e.numberOfItems),[h,C]=g.useState(e.order),[f,n]=g.useState(e.orderBy),[c,d]=g.useState(e.selectedAuthorId),[_,N]=g.useState(e.selectedCategories);return u(I,{...e,numberOfItems:p,onCategoryChange:s=>{if(l?.(s),s.some(O=>typeof O=="string"&&!e.categorySuggestions?.[O]))return;const q=s.map(O=>typeof O=="string"?e.categorySuggestions?.[O]:O).filter(Boolean);N(q)},onOrderByChange:s=>{t?.(s),n(s)},onOrderChange:s=>{a?.(s),C(s)},order:h,orderBy:f,onNumberOfItemsChange:s=>{o?.(s),y(s)},onAuthorChange:s=>{i?.(s),d(Number(s))},selectedAuthorId:c,selectedCategories:_})};S.args={authorList:[{id:1,name:"admin"},{id:2,name:"editor"}],categorySuggestions:{TypeScript:{id:11,name:"TypeScript",parent:0},JavaScript:{id:12,name:"JavaScript",parent:0}},selectedCategories:[{id:11,name:"JavaScript",parent:0}],numberOfItems:5,order:"desc",orderBy:"date",selectedAuthorId:1};const j=r=>{const{onAuthorChange:i,onCategoryChange:l,onNumberOfItemsChange:o,onOrderByChange:t,onOrderChange:a,...e}=r,[p,y]=g.useState(e.order),[h,C]=g.useState(e.orderBy),[f,n]=g.useState(e.selectedCategoryId);return u(I,{...e,onCategoryChange:d=>{l?.(d),n(Number(d))},onOrderByChange:d=>{C(d)},onOrderChange:d=>{a?.(d),y(d)},order:p,orderBy:h,selectedCategoryId:f})},w=j.bind({});w.args={categoriesList:[{id:11,name:"TypeScript",parent:0},{id:12,name:"JavaScript",parent:0}],selectedCategoryId:11};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`args => {
  const {
    onAuthorChange,
    onCategoryChange,
    onNumberOfItemsChange,
    onOrderByChange,
    onOrderChange,
    ...props
  } = args as QueryControlsWithMultipleCategorySelectionProps;
  const [ownNumberOfItems, setOwnNumberOfItems] = useState(props.numberOfItems);
  const [ownOrder, setOwnOrder] = useState(props.order);
  const [ownOrderBy, setOwnOrderBy] = useState(props.orderBy);
  const [ownSelectedAuthorId, setOwnSelectedAuthorId] = useState(props.selectedAuthorId);
  const [ownSelectedCategories, setOwnSelectedCategories] = useState(props.selectedCategories);
  const handleCategoryChange: QueryControlsWithMultipleCategorySelectionProps['onCategoryChange'] = tokens => {
    onCategoryChange?.(tokens);
    const hasNoSuggestion = tokens.some(token => typeof token === 'string' && !props.categorySuggestions?.[token]);
    if (hasNoSuggestion) {
      return;
    }
    const allCategories = tokens.map(token => {
      return typeof token === 'string' ? props.categorySuggestions?.[token] : token;
    }).filter(Boolean) as Array<Required<Category>>;
    setOwnSelectedCategories(allCategories);
  };
  return <QueryControls {...props} numberOfItems={ownNumberOfItems} onCategoryChange={handleCategoryChange} onOrderByChange={newOrderBy => {
    onOrderByChange?.(newOrderBy);
    setOwnOrderBy(newOrderBy);
  }} onOrderChange={newOrder => {
    onOrderChange?.(newOrder);
    setOwnOrder(newOrder);
  }} order={ownOrder} orderBy={ownOrderBy} onNumberOfItemsChange={newNumber => {
    onNumberOfItemsChange?.(newNumber);
    setOwnNumberOfItems(newNumber);
  }} onAuthorChange={newAuthor => {
    onAuthorChange?.(newAuthor);
    setOwnSelectedAuthorId(Number(newAuthor));
  }} selectedAuthorId={ownSelectedAuthorId} selectedCategories={ownSelectedCategories} />;
}`,...S.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`args => {
  const {
    onAuthorChange,
    onCategoryChange,
    onNumberOfItemsChange,
    onOrderByChange,
    onOrderChange,
    ...props
  } = args as QueryControlsWithSingleCategorySelectionProps;
  const [ownOrder, setOwnOrder] = useState(props.order);
  const [ownOrderBy, setOwnOrderBy] = useState(props.orderBy);
  const [ownSelectedCategoryId, setSelectedCategoryId] = useState(props.selectedCategoryId);
  const handleCategoryChange: QueryControlsWithSingleCategorySelectionProps['onCategoryChange'] = newCategory => {
    onCategoryChange?.(newCategory);
    setSelectedCategoryId(Number(newCategory));
  };
  return <QueryControls {...props} onCategoryChange={handleCategoryChange} onOrderByChange={newOrderBy => {
    setOwnOrderBy(newOrderBy);
  }} onOrderChange={newOrder => {
    onOrderChange?.(newOrder);
    setOwnOrder(newOrder);
  }} order={ownOrder} orderBy={ownOrderBy} selectedCategoryId={ownSelectedCategoryId} />;
}`,...w.parameters?.docs?.source}}};export{S as Default,w as SelectSingleCategory,ht as default};
