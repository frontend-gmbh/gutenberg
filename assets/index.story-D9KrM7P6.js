import{j as o}from"./iframe-2TvY6Iig.js";import{V as p}from"./component-6CLxCT3h.js";import{V as i}from"./component-DATVQiJy.js";import"./preload-helper-Zf8nSx-t.js";import"./use-context-system-GBkKyJuM.js";import"./index-DUXT-3wK.js";import"./is-plain-object-BJ3z7EOF.js";import"./index-BtJmv7lM.js";import"./index-CK8hcbFu.js";import"./hook-D_MMjSqd.js";import"./values-CtPxXHrl.js";import"./get-valid-children-BTY2hlyh.js";import"./component-CqSZVoza.js";import"./hook-56LQ9BfU.js";import"./emotion-react.browser.esm-T2caqgd_.js";import"./context-DbMhvW6o.js";import"./index-BjRskdOB.js";import"./use-responsive-value-bUbLlkWc.js";import"./space-CjrGwnR-.js";const r={top:"top",topLeft:"topLeft",topRight:"topRight",left:"left",center:"center",right:"right",bottom:"bottom",bottomLeft:"bottomLeft",bottomRight:"bottomRight",edge:"edge",stretch:"stretch"},v={component:p,title:"Components/Layout/VStack",id:"components-vstack",argTypes:{alignment:{control:{type:"select"},options:Object.keys(r),mapping:r},as:{control:{type:"text"}},direction:{control:{type:"text"}},justify:{control:{type:"text"}},spacing:{control:{type:"text"}}},tags:["status-experimental"],parameters:{controls:{expanded:!0},docs:{canvas:{sourceState:"shown"}}}},m=n=>o(p,{...n,style:{background:"#eee",minHeight:"200px"},children:["One","Two","Three","Four","Five"].map(e=>o(i,{style:{background:"#b9f9ff"},children:e},e))}),t=m.bind({});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`props => {
  return <VStack {...props} style={{
    background: '#eee',
    minHeight: '200px'
  }}>
            {['One', 'Two', 'Three', 'Four', 'Five'].map(text => <View key={text} style={{
      background: '#b9f9ff'
    }}>
                    {text}
                </View>)}
        </VStack>;
}`,...t.parameters?.docs?.source}}};export{t as Default,v as default};
