import{f as a,j as e,F as r}from"./iframe-2TvY6Iig.js";import{N as o}from"./menu-DC1QYQWj.js";import"./preload-helper-Zf8nSx-t.js";import"./container-BB_QBepN.js";import"./index-mcCfYwbk.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,d={title:"Components/Containers/NavigableMenu",id:"components-navigablemenu",component:o,argTypes:{children:{control:!1}},args:{onKeyDown:t(),onNavigate:t()},parameters:{controls:{expanded:!0},docs:{canvas:{sourceState:"shown"}}}},n=b=>a(r,{children:[e("button",{children:"Before navigable menu"}),a(o,{...b,style:{margin:"32px 0",padding:"16px",border:"1px solid black"},children:[e("div",{role:"menuitem",children:"Item 1 (non-tabbable, non-focusable)"}),e("button",{role:"menuitem",children:"Item 2 (tabbable, focusable)"}),e("button",{role:"menuitem",disabled:!0,children:"Item 3 (disabled, therefore non-tabbable and not-focusable)"}),e("span",{role:"menuitem",tabIndex:-1,children:"Item 4 (non-tabbable, non-focusable)"}),e("div",{role:"menuitem",tabIndex:0,children:"Item 5 (tabbable, focusable)"})]}),e("button",{children:"After navigable menu"})]});n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`args => {
  return <>
            <button>Before navigable menu</button>
            <NavigableMenu {...args} style={{
      margin: '32px 0',
      padding: '16px',
      border: '1px solid black'
    }}>
                <div role="menuitem">Item 1 (non-tabbable, non-focusable)</div>
                <button role="menuitem">Item 2 (tabbable, focusable)</button>
                <button role="menuitem" disabled>
                    Item 3 (disabled, therefore non-tabbable and not-focusable)
                </button>
                <span role="menuitem" tabIndex={-1}>
                    Item 4 (non-tabbable, non-focusable)
                </span>
                <div role="menuitem" tabIndex={0}>
                    Item 5 (tabbable, focusable)
                </div>
            </NavigableMenu>
            <button>After navigable menu</button>
        </>;
}`,...n.parameters?.docs?.source}}};export{n as Default,d as default};
