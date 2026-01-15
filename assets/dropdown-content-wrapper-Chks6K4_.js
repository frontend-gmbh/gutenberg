import{e as a,j as d}from"./iframe-2TvY6Iig.js";import{c as i}from"./emotion-react.browser.esm-T2caqgd_.js";import{s as n}from"./space-CjrGwnR-.js";import{c as s,u as m}from"./use-context-system-GBkKyJuM.js";const l=({paddingSize:e="small"})=>{if(e==="none")return;const o={small:n(2),medium:n(4)};return i("padding:",o[e]||o.small,";","")},c=a("div",{target:"eovvns30"})("margin-left:",n(-2),";margin-right:",n(-2),";&:first-of-type{margin-top:",n(-2),";}&:last-of-type{margin-bottom:",n(-2),";}",l,";");function u(e,o){const{paddingSize:t="small",...p}=m(e,"DropdownContentWrapper");return d(c,{...p,paddingSize:t,ref:o})}const r=s(u,"DropdownContentWrapper");try{r.displayName="DropdownContentWrapper",r.__docgenInfo={description:`A convenience wrapper for the \`renderContent\` when you want to apply
different padding. (Default is \`paddingSize="small"\`).

\`\`\`jsx
import {
  Dropdown,
  __experimentalDropdownContentWrapper as DropdownContentWrapper,
} from '@wordpress/components';

<Dropdown
  renderContent={ () => (
    <DropdownContentWrapper paddingSize="medium">
      My dropdown content
    </DropdownContentWrapper>
) }
/>
\`\`\``,displayName:"DropdownContentWrapper",props:{paddingSize:{defaultValue:{value:"'small'"},description:"Amount of padding to apply on the dropdown content.",name:"paddingSize",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"none"'},{value:'"medium"'}]}}}}}catch{}export{r as D};
