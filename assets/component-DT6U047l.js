import{r as h,j as f}from"./iframe-2TvY6Iig.js";import{u as C,a as z,c as G}from"./use-context-system-GBkKyJuM.js";import{V as w}from"./component-DATVQiJy.js";import{c as a}from"./emotion-react.browser.esm-T2caqgd_.js";import{C as t}from"./config-values-CkVNYk_w.js";import{C as g}from"./colors-values-BSq3yUT9.js";import{f as q}from"./font-Cck9kG94.js";const R=e=>a("font-size:",q("default.fontSize"),";font-family:inherit;appearance:none;border:1px solid transparent;cursor:pointer;background:none;text-align:start;text-decoration:",e==="a"?"none":void 0,";svg,path{fill:currentColor;}&:hover{color:",g.theme.accent,";}&:focus{box-shadow:none;outline:none;}&:focus-visible{box-shadow:0 0 0 var( --wp-admin-border-width-focus ) ",g.theme.accent,";outline:2px solid transparent;outline-offset:0;}",""),V={name:"1bcj5ek",styles:"width:100%;display:block"},$={name:"150ruhm",styles:"box-sizing:border-box;width:100%;display:block;margin:0;color:inherit"},B=a("border:1px solid ",t.surfaceBorderColor,";",""),j=a(">*:not( marquee )>*{border-bottom:1px solid ",t.surfaceBorderColor,";}>*:last-of-type>*{border-bottom-color:transparent;}",""),i=t.radiusSmall,k=a("border-radius:",i,";",""),H=a("border-radius:",i,";>*:first-of-type>*{border-top-left-radius:",i,";border-top-right-radius:",i,";}>*:last-of-type>*{border-bottom-left-radius:",i,";border-bottom-right-radius:",i,";}",""),I=`calc(${t.fontSize} * ${t.fontLineHeightBase})`,L=`calc((${t.controlHeight} - ${I} - 2px) / 2)`,T=`calc((${t.controlHeightSmall} - ${I} - 2px) / 2)`,A=`calc((${t.controlHeightLarge} - ${I} - 2px) / 2)`,y={small:a("padding:",T," ",t.controlPaddingXSmall,"px;",""),medium:a("padding:",L," ",t.controlPaddingX,"px;",""),large:a("padding:",A," ",t.controlPaddingXLarge,"px;","")};function F(e){const{className:s,isBordered:o=!1,isRounded:n=!0,isSeparated:r=!1,role:d="list",...m}=C(e,"ItemGroup"),u=z()(o&&B,r&&j,n&&H,s);return{isBordered:o,className:u,role:d,isSeparated:r,...m}}const x=h.createContext({size:"medium"});x.displayName="ItemGroupContext";const N=()=>h.useContext(x);function E(e,s){const{isBordered:o,isSeparated:n,size:r,...d}=F(e),{size:m}=N(),p={spacedAround:!o&&!n,size:r||m};return f(x.Provider,{value:p,children:f(w,{...d,ref:s})})}const v=G(E,"ItemGroup");try{v.displayName="ItemGroup",v.__docgenInfo={description:`\`ItemGroup\` displays a list of \`Item\`s grouped and styled together.

\`\`\`jsx
import {
  __experimentalItemGroup as ItemGroup,
  __experimentalItem as Item,
} from '@wordpress/components';

function Example() {
  return (
    <ItemGroup>
      <Item>Code</Item>
      <Item>is</Item>
      <Item>Poetry</Item>
    </ItemGroup>
  );
}
\`\`\``,displayName:"ItemGroup",props:{isBordered:{defaultValue:{value:"false"},description:"Renders a border around the itemgroup.",name:"isBordered",required:!1,type:{name:"boolean"}},isRounded:{defaultValue:{value:"true"},description:"Renders with rounded corners.",name:"isRounded",required:!1,type:{name:"boolean"}},isSeparated:{defaultValue:{value:"false"},description:"Renders a separator between each item.",name:"isSeparated",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"'medium'"},description:"Determines the amount of padding within the component.",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},children:{defaultValue:null,description:"The children elements.",name:"children",required:!0,type:{name:"ReactNode"}},as:{defaultValue:null,description:"The HTML element or React component to render the component as.",name:"as",required:!1,type:{name:'"symbol" | "object" | "select" | "a" | "abbr" | "address" | "area" | "article" | "aside" | "audio" | "b" | "base" | "bdi" | "bdo" | "big" | "blockquote" | "body" | "br" | "button" | ... 516 more ... | ("view" & FunctionComponent<...>)'}}}}}catch{}function M(e){const{as:s,className:o,onClick:n,role:r="listitem",size:d,...m}=C(e,"Item"),{spacedAround:c,size:u}=N(),p=d||u,l=s||(typeof n<"u"?"button":"div"),b=z(),S=h.useMemo(()=>b((l==="button"||l==="a")&&R(l),y[p]||y.medium,$,c&&k,o),[l,o,b,p,c]),P=b(V);return{as:l,className:S,onClick:n,wrapperClassName:P,role:r,...m}}function O(e,s){const{role:o,wrapperClassName:n,...r}=M(e);return f("div",{role:o,className:n,children:f(w,{...r,ref:s})})}const _=G(O,"Item");try{_.displayName="Item",_.__docgenInfo={description:`\`Item\` is used in combination with \`ItemGroup\` to display a list of items
grouped and styled together.

\`\`\`jsx
import {
  __experimentalItemGroup as ItemGroup,
  __experimentalItem as Item,
} from '@wordpress/components';

function Example() {
  return (
    <ItemGroup>
      <Item>Code</Item>
      <Item>is</Item>
      <Item>Poetry</Item>
    </ItemGroup>
  );
}
\`\`\``,displayName:"Item",props:{size:{defaultValue:{value:"'medium'"},description:"Determines the amount of padding within the component.",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},children:{defaultValue:null,description:"The children elements.",name:"children",required:!0,type:{name:"ReactNode"}},as:{defaultValue:null,description:"The HTML element or React component to render the component as.",name:"as",required:!1,type:{name:'"symbol" | "object" | "select" | "a" | "abbr" | "address" | "area" | "article" | "aside" | "audio" | "b" | "base" | "bdi" | "bdo" | "big" | "blockquote" | "body" | "br" | "button" | ... 516 more ... | ("view" & FunctionComponent<...>)'}}}}}catch{}export{_ as I,v as a};
