import{r as k,c as _,f as m,j as t}from"./iframe-2TvY6Iig.js";import{a as f,i as L}from"./default-i18n-SWt35ZM4.js";function E(n,o){const{href:e,children:s,className:l,rel:i="",...c}=n,p=[...new Set([...i.split(" "),"external","noreferrer","noopener"].filter(Boolean))].join(" "),d=_("components-external-link",l),x=!!e?.startsWith("#");return m("a",{...c,className:d,href:e,onClick:r=>{x&&r.preventDefault(),n.onClick&&n.onClick(r)},target:"_blank",rel:p,ref:o,children:[t("span",{className:"components-external-link__contents",children:s}),t("span",{className:"components-external-link__icon","aria-label":f("(opens in a new tab)"),children:L()?"↖":"↗"})]})}const a=k.forwardRef(E);try{a.displayName="ExternalLink",a.__docgenInfo={description:`Link to an external resource.

\`\`\`jsx
import { ExternalLink } from '@wordpress/components';

const MyExternalLink = () => (
  <ExternalLink href="https://wordpress.org">WordPress.org</ExternalLink>
);
\`\`\``,displayName:"ExternalLink",props:{}}}catch{}try{externallink.displayName="externallink",externallink.__docgenInfo={description:`Link to an external resource.

\`\`\`jsx
import { ExternalLink } from '@wordpress/components';

const MyExternalLink = () => (
  <ExternalLink href="https://wordpress.org">WordPress.org</ExternalLink>
);
\`\`\``,displayName:"externallink",props:{}}}catch{}export{a as E};
