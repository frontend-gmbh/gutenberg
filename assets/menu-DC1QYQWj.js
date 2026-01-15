import{r as v,j as c}from"./iframe-2TvY6Iig.js";import{N as l}from"./container-BB_QBepN.js";function g({role:e="menu",orientation:n="vertical",...i},s){return c(l,{ref:s,stopNavigationEvents:!0,onlyBrowserTabstops:!1,role:e,"aria-orientation":e!=="presentation"&&(n==="vertical"||n==="horizontal")?n:void 0,eventToOffset:u=>{const{code:t}=u;let a=["ArrowDown"],o=["ArrowUp"];if(n==="horizontal"&&(a=["ArrowRight"],o=["ArrowLeft"]),n==="both"&&(a=["ArrowRight","ArrowDown"],o=["ArrowLeft","ArrowUp"]),a.includes(t))return 1;if(o.includes(t))return-1;if(["ArrowDown","ArrowUp","ArrowLeft","ArrowRight"].includes(t))return 0},...i})}const r=v.forwardRef(g);try{r.displayName="NavigableMenu",r.__docgenInfo={description:`A container for a navigable menu.

 \`\`\`jsx
 import {
   NavigableMenu,
   Button,
 } from '@wordpress/components';

 function onNavigate( index, target ) {
   console.log( \`Navigates to \${ index }\`, target );
 }

 const MyNavigableContainer = () => (
   <div>
     <span>Navigable Menu:</span>
     <NavigableMenu onNavigate={ onNavigate } orientation="horizontal">
       <Button variant="secondary">Item 1</Button>
       <Button variant="secondary">Item 2</Button>
       <Button variant="secondary">Item 3</Button>
     </NavigableMenu>
   </div>
 );
 \`\`\``,displayName:"NavigableMenu",props:{}}}catch{}try{menu.displayName="menu",menu.__docgenInfo={description:`A container for a navigable menu.

 \`\`\`jsx
 import {
   NavigableMenu,
   Button,
 } from '@wordpress/components';

 function onNavigate( index, target ) {
   console.log( \`Navigates to \${ index }\`, target );
 }

 const MyNavigableContainer = () => (
   <div>
     <span>Navigable Menu:</span>
     <NavigableMenu onNavigate={ onNavigate } orientation="horizontal">
       <Button variant="secondary">Item 1</Button>
       <Button variant="secondary">Item 2</Button>
       <Button variant="secondary">Item 3</Button>
     </NavigableMenu>
   </div>
 );
 \`\`\``,displayName:"menu",props:{}}}catch{}export{r as N};
