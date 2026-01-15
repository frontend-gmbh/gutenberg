import{r as e,a as w,j as d,c as F,f as m,F as b}from"./iframe-2TvY6Iig.js";import{a as N}from"./default-i18n-SWt35ZM4.js";import{F as k,u as A,f as D}from"./field.module-DT0CC1BY.js";import{V as E}from"./visually-hidden-BHM6OlwJ.js";import{u as S}from"./useRender-CZYnIQEd.js";import{u as v,m as T}from"./useRenderElement-D_ShKst7.js";import{u as j}from"./useIsoLayoutEffect-DR4OyDQs.js";import{u as C}from"./useBaseUiId-DCn1zzPy.js";import"./preload-helper-Zf8nSx-t.js";const M=e.forwardRef(function(s,o){const{render:l,className:c,disabled:i=!1,...r}=s,[n,a]=e.useState(void 0),p=e.useMemo(()=>({disabled:i}),[i]),f=v("fieldset",s,{ref:o,state:p,props:[{"aria-labelledby":n},r]}),x=e.useMemo(()=>({legendId:n,setLegendId:a,disabled:i}),[n,a,i]);return w.jsx(k.Provider,{value:x,children:f})}),B=e.forwardRef(function(s,o){const{render:l,className:c,id:i,...r}=s,{disabled:n,setLegendId:a}=A(),p=C(i);j(()=>(a(p),()=>{a(void 0)}),[a,p]);const f=e.useMemo(()=>({disabled:n??!1}),[n]);return v("div",s,{state:f,ref:o,props:[{id:p},r]})}),P="_root_naenl_4",W={root:P},I=e.createContext({registerDescriptionId:()=>{},unregisterDescriptionId:()=>{}}),R=()=>e.useContext(I),y=e.forwardRef(function({className:s,children:o,...l},c){const[i,r]=e.useState(),n=e.useMemo(()=>({registerDescriptionId:a=>r(a),unregisterDescriptionId:()=>r(void 0)}),[]);return d(I.Provider,{value:n,children:d(M,{ref:c,className:F(W.root,s),"aria-describedby":i,...l,children:o})})});try{y.displayName="FieldsetRoot",y.__docgenInfo={description:`A low-level component that associates an accessible legend and description with
a group of multiple form control elements.

To label a single form control element, use the \`Field\` component instead.`,displayName:"FieldsetRoot",props:{}}}catch{}const _=e.forwardRef(function({className:s,...o},l){return d(B,{ref:l,className:F(D.label,s),...o})}),L=e.forwardRef(function({className:s,id:o,render:l,...c},i){const r=e.useId(),n=o??r,{registerDescriptionId:a,unregisterDescriptionId:p}=R();return e.useEffect(()=>(a(n),p),[a,p,n]),S({defaultTagName:"p",render:l,ref:i,props:T({className:F(D.description,s),id:n},c)})}),g=e.forwardRef(function({className:s,...o},l){const c=e.useId(),{registerDescriptionId:i,unregisterDescriptionId:r}=R();return e.useEffect(()=>(i(c),r),[i,r,c]),m(b,{children:[d(E,{id:c,children:N("More details follow.")}),d("div",{ref:l,className:F(D.description,s),...o})]})});try{g.displayName="FieldsetDetails",g.__docgenInfo={description:`A component for showing additional information about the fieldset,
styled similarly to a normal \`Fieldset.Description\`.
Unlike a normal description, it can include links and other semantic elements.

Although this content is not associated with the fieldset using direct semantics,
it is made discoverable to screen reader users via a visually hidden description,
alerting them to the presence of additional information below.

If the content only includes plain text, use \`Fieldset.Description\` instead,
so the readout is not unnecessarily verbose for screen reader users.`,displayName:"FieldsetDetails",props:{}}}catch{}const O={title:"Design System/Components/Form/Primitives/Fieldset",component:y,subcomponents:{Legend:_,Description:L,Details:g}},h={args:{children:m(b,{children:[d(_,{children:"Legend"}),["Apples","Bananas"].map(t=>m("label",{children:[d("input",{type:"checkbox"})," ",t]},t)),d(L,{children:"This is a description for the entire fieldset."})]})}},u={args:{children:m(b,{children:[d(_,{children:"Legend"}),["Apples","Bananas"].map(t=>m("label",{children:[d("input",{type:"checkbox"})," ",t]},t)),m(g,{children:["Details can include"," ",d("a",{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/a",children:"links to more information"})," ","and other semantic elements."]})]})}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
                <Fieldset.Legend>Legend</Fieldset.Legend>
                {['Apples', 'Bananas'].map(fruit =>
      // eslint-disable-next-line jsx-a11y/label-has-associated-control
      <label key={fruit}>
                        <input type="checkbox" /> {fruit}
                    </label>)}
                <Fieldset.Description>
                    This is a description for the entire fieldset.
                </Fieldset.Description>
            </>
  }
}`,...h.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
                <Fieldset.Legend>Legend</Fieldset.Legend>
                {['Apples', 'Bananas'].map(fruit =>
      // eslint-disable-next-line jsx-a11y/label-has-associated-control
      <label key={fruit}>
                        <input type="checkbox" /> {fruit}
                    </label>)}
                <Fieldset.Details>
                    Details can include{' '}
                    <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/a">
                        links to more information
                    </a>{' '}
                    and other semantic elements.
                </Fieldset.Details>
            </>
  }
}`,...u.parameters?.docs?.source},description:{story:`To add rich content (such as links) to the description, use \`Fieldset.Details\`.

Although this content is not associated with the fieldset using direct semantics,
it is made discoverable to screen reader users via a visually hidden description,
alerting them to the presence of additional information below.

If the content only includes plain text, use \`Fieldset.Description\` instead,
so the readout is not unnecessarily verbose for screen reader users.`,...u.parameters?.docs?.description}}};try{u.displayName="WithDetails",u.__docgenInfo={description:`To add rich content (such as links) to the description, use \`Fieldset.Details\`.

Although this content is not associated with the fieldset using direct semantics,
it is made discoverable to screen reader users via a visually hidden description,
alerting them to the presence of additional information below.

If the content only includes plain text, use \`Fieldset.Description\` instead,
so the readout is not unnecessarily verbose for screen reader users.`,displayName:"WithDetails",props:{}}}catch{}export{h as Default,u as WithDetails,O as default};
