import{f as s,j as e,F as c}from"./iframe-2TvY6Iig.js";import{S as n}from"./stack-zfwi6YzL.js";import{B as l}from"./box-DQMFXIME.js";import"./preload-helper-Zf8nSx-t.js";import"./useRender-CZYnIQEd.js";import"./useRenderElement-D_ShKst7.js";const f={title:"Design System/Components/Stack",component:n},t=({variant:o})=>e(l,{backgroundColor:"brand",style:{width:o==="lg"?"150px":"100px",height:o==="lg"?"150px":"100px"}}),a={args:{gap:"sm",children:s(c,{children:[e(t,{}),e(t,{variant:"lg"}),e(t,{}),e(t,{}),e(t,{variant:"lg"}),e(t,{})]})},argTypes:{align:{options:["center","end","flex-end","flex-start","start","baseline","stretch"],table:{type:{summary:'"center" | "end" | "flex-end" | "flex-start" | "start" | "baseline" | "stretch"'}}},justify:{options:["space-around","space-between","space-evenly","stretch","center","end","flex-end","flex-start","start","left","right"],table:{type:{summary:'"space-around" | "space-between" | "space-evenly" | "stretch" | "center" | "end" | "flex-end" | "flex-start" | "start"'}}},wrap:{options:["wrap"],table:{type:{summary:'"wrap"'}}}}},r={...a,args:{...a.args,align:"center",justify:"center",children:s(c,{children:[e(t,{variant:"lg"}),s(n,{gap:"md",children:[e(t,{}),e(t,{})]}),e(t,{variant:"lg"}),s(n,{direction:"column",children:[e(t,{}),e(t,{})]}),e(t,{variant:"lg"})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    gap: 'sm',
    children: <>
                <DemoBox />
                <DemoBox variant="lg" />
                <DemoBox />
                <DemoBox />
                <DemoBox variant="lg" />
                <DemoBox />
            </>
  },
  argTypes: {
    align: {
      options: ['center', 'end', 'flex-end', 'flex-start', 'start', 'baseline', 'stretch'],
      table: {
        type: {
          summary: '"center" | "end" | "flex-end" | "flex-start" | "start" | "baseline" | "stretch"'
        }
      }
    },
    justify: {
      options: ['space-around', 'space-between', 'space-evenly', 'stretch', 'center', 'end', 'flex-end', 'flex-start', 'start', 'left', 'right'],
      table: {
        type: {
          summary: '"space-around" | "space-between" | "space-evenly" | "stretch" | "center" | "end" | "flex-end" | "flex-start" | "start"'
        }
      }
    },
    wrap: {
      options: ['wrap'],
      table: {
        type: {
          summary: '"wrap"'
        }
      }
    }
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    align: 'center',
    justify: 'center',
    children: <>
                <DemoBox variant="lg" />
                <Stack gap="md">
                    <DemoBox />
                    <DemoBox />
                </Stack>
                <DemoBox variant="lg" />
                <Stack direction="column">
                    <DemoBox />
                    <DemoBox />
                </Stack>
                <DemoBox variant="lg" />
            </>
  }
}`,...r.parameters?.docs?.source}}};export{a as Default,r as Nested,f as default};
