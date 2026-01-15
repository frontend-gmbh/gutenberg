import{e as p,r as i,j as r,c as y}from"./iframe-2TvY6Iig.js";import{u as x}from"./index-BjXx3EE5.js";import{u as w}from"./index-CLatOAvg.js";import{a as n}from"./default-i18n-SWt35ZM4.js";import{d as b}from"./index-BjRskdOB.js";import{B as g}from"./index-CFuMsoxH.js";import{I as N}from"./input-prefix-wrapper-BgXFHddd.js";import{I as R}from"./input-suffix-wrapper-Gn_aDXNL.js";import{I as k}from"./index-dvLnGrYd.js";import{I as j}from"./index-Dnuq8uNu.js";import{s as v}from"./search-BoHohq_h.js";import{c as M}from"./close-small-D3dHP1RP.js";const B=p(k,{target:"effl84m1"})({name:"37btb2",styles:"input[type='search']{&::-webkit-search-decoration,&::-webkit-search-cancel-button,&::-webkit-search-results-button,&::-webkit-search-results-decoration{-webkit-appearance:none;}}"}),z=p(j,{target:"effl84m0"})({name:"1i54h4p",styles:"&:dir( ltr ){transform:scaleX( -1 );}"});function P({searchRef:t,value:a,onChange:o,onClose:e}){if(!e&&!a)return null;e&&b("`onClose` prop in wp.components.SearchControl",{since:"6.8"});const s=()=>{o(""),t.current?.focus()};return r(R,{variant:"control",children:r(g,{size:"small",icon:M,label:e?n("Close search"):n("Reset search"),onClick:e??s})})}function W({__nextHasNoMarginBottom:t,className:a,onChange:o,value:e,label:s=n("Search"),placeholder:m=n("Search"),hideLabelFromVision:u=!0,onClose:f,size:h="default",...d},S){const{disabled:D,..._}=d,l=i.useRef(null),I=x(c,"components-search-control");return r(B,{__next40pxDefaultSize:!0,id:I,hideLabelFromVision:u,label:s,ref:w([l,S]),type:"search",size:h,className:y("components-search-control",a),onChange:C=>o(C??""),autoComplete:"off",placeholder:m,value:e??"",prefix:r(N,{variant:"icon",children:r(z,{icon:v,fill:"currentColor"})}),suffix:r(P,{searchRef:l,value:e,onChange:o,onClose:f}),..._})}const c=i.forwardRef(W);try{c.displayName="SearchControl",c.__docgenInfo={description:`SearchControl components let users display a search control.

\`\`\`jsx
import { SearchControl } from '@wordpress/components';
import { useState } from '@wordpress/element';

function MySearchControl( { className, setState } ) {
  const [ searchInput, setSearchInput ] = useState( '' );

  return (
    <SearchControl
      value={ searchInput }
      onChange={ setSearchInput }
    />
  );
}
\`\`\``,displayName:"SearchControl",props:{}}}catch{}try{searchcontrol.displayName="searchcontrol",searchcontrol.__docgenInfo={description:`SearchControl components let users display a search control.

\`\`\`jsx
import { SearchControl } from '@wordpress/components';
import { useState } from '@wordpress/element';

function MySearchControl( { className, setState } ) {
  const [ searchInput, setSearchInput ] = useState( '' );

  return (
    <SearchControl
      value={ searchInput }
      onChange={ setSearchInput }
    />
  );
}
\`\`\``,displayName:"searchcontrol",props:{}}}catch{}export{c as S};
