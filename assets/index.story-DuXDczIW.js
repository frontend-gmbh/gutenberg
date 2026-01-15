import{r as c,j as o,f as a}from"./iframe-2TvY6Iig.js";import{S as s}from"./component-n7-xKn_M.js";import{V as u}from"./component-DATVQiJy.js";import"./preload-helper-Zf8nSx-t.js";import"./emotion-react.browser.esm-T2caqgd_.js";import"./config-values-CkVNYk_w.js";import"./colors-values-BSq3yUT9.js";import"./use-context-system-GBkKyJuM.js";import"./index-DUXT-3wK.js";import"./is-plain-object-BJ3z7EOF.js";import"./index-BtJmv7lM.js";import"./index-CK8hcbFu.js";const S={component:s,title:"Components/Scrollable",argTypes:{as:{control:{type:"text"}},children:{control:!1}},tags:["status-experimental"],parameters:{controls:{expanded:!0},docs:{canvas:{sourceState:"shown"}}}},p=({...e})=>{const r=c.useRef(null),l=()=>{r.current?.focus()},i=300,n=400;return o(s,{style:{height:n,width:i},...e,children:a(u,{style:{backgroundColor:"#eee",height:e.scrollDirection==="x"?n:1e3,width:e.scrollDirection==="y"?i:1e3,position:"relative"},children:[o("button",{onClick:l,children:"Move focus to an element out of view"}),o("input",{ref:r,style:{position:"absolute",bottom:e.scrollDirection==="x"?"initial":0,right:0},type:"text",value:"Focus me",readOnly:!0})]})})},t=p.bind({});t.args={smoothScroll:!1,scrollDirection:"y"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`({
  ...args
}) => {
  const targetRef = useRef<HTMLInputElement>(null);
  const onButtonClick = () => {
    targetRef.current?.focus();
  };
  const containerWidth = 300;
  const containerHeight = 400;
  return <Scrollable style={{
    height: containerHeight,
    width: containerWidth
  }} {...args}>
            <View style={{
      backgroundColor: '#eee',
      height: args.scrollDirection === 'x' ? containerHeight : 1000,
      width: args.scrollDirection === 'y' ? containerWidth : 1000,
      position: 'relative'
    }}>
                <button onClick={onButtonClick}>
                    Move focus to an element out of view
                </button>
                <input ref={targetRef} style={{
        position: 'absolute',
        bottom: args.scrollDirection === 'x' ? 'initial' : 0,
        right: 0
      }} type="text" value="Focus me" readOnly />
            </View>
        </Scrollable>;
}`,...t.parameters?.docs?.source}}};export{t as Default,S as default};
