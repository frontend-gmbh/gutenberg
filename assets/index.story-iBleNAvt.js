import{j as r,F as a}from"./iframe-2TvY6Iig.js";import{c as o}from"./create-interpolate-element-Drb6f3p5.js";import{e as c}from"./strings-B_y2JcYF.js";import"./preload-helper-Zf8nSx-t.js";import"./index-COsfWvJn.js";import"./index-CK8hcbFu.js";const i=e=>{const{text:n="",highlight:g=""}=e,h=g.trim();if(!h)return r(a,{children:n});const s=new RegExp(`(${c(h)})`,"gi");return o(n.replace(s,"<mark>$&</mark>"),{mark:r("mark",{})})};try{i.displayName="TextHighlight",i.__docgenInfo={description:`Highlights occurrences of a given string within another string of text. Wraps
each match with a \`<mark>\` tag which provides browser default styling.

\`\`\`jsx
import { TextHighlight } from '@wordpress/components';

const MyTextHighlight = () => (
  <TextHighlight
    text="Why do we like Gutenberg? Because Gutenberg is the best!"
    highlight="Gutenberg"
  />
);
\`\`\``,displayName:"TextHighlight",props:{highlight:{defaultValue:{value:"''"},description:"The string to search for and highlight within the `text`. Case\ninsensitive. Multiple matches.",name:"highlight",required:!0,type:{name:"string"}},text:{defaultValue:{value:"''"},description:"The string of text to be tested for occurrences of then given\n`highlight`.",name:"text",required:!0,type:{name:"string"}}}}}catch{}try{texthighlight.displayName="texthighlight",texthighlight.__docgenInfo={description:`Highlights occurrences of a given string within another string of text. Wraps
each match with a \`<mark>\` tag which provides browser default styling.

\`\`\`jsx
import { TextHighlight } from '@wordpress/components';

const MyTextHighlight = () => (
  <TextHighlight
    text="Why do we like Gutenberg? Because Gutenberg is the best!"
    highlight="Gutenberg"
  />
);
\`\`\``,displayName:"texthighlight",props:{highlight:{defaultValue:{value:"''"},description:"The string to search for and highlight within the `text`. Case\ninsensitive. Multiple matches.",name:"highlight",required:!0,type:{name:"string"}},text:{defaultValue:{value:"''"},description:"The string of text to be tested for occurrences of then given\n`highlight`.",name:"text",required:!0,type:{name:"string"}}}}}catch{}const y={component:i,title:"Components/Typography/TextHighlight",id:"components-texthighlight",parameters:{controls:{expanded:!0},docs:{canvas:{sourceState:"shown"}}}},l=e=>r(i,{...e}),t=l.bind({});t.args={text:"We call the new editor Gutenberg. The entire editing experience has been rebuilt for media rich pages and posts.",highlight:"Gutenberg"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => {
  return <TextHighlight {...args} />;
}`,...t.parameters?.docs?.source}}};export{t as Default,y as default};
