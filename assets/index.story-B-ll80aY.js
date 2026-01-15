import{f as t,j as o,F as i,r as I}from"./iframe-2TvY6Iig.js";import{P as v,c as F}from"./index--WI9l4jM.js";import{C as e}from"./index-CjAjqcqY.js";import{T as h}from"./index-Dt7LODwq.js";import"./preload-helper-Zf8nSx-t.js";import"./index-CHj7W0Xl.js";import"./index-CZo2zBTA.js";import"./v4-CtRu48qb.js";import"./index-CLatOAvg.js";import"./component-DATVQiJy.js";import"./index-D4zU5mcb.js";import"./default-i18n-SWt35ZM4.js";import"./YORGHBM4-BbXtUlZO.js";import"./LMDWO4NN-CH0ROf0T.js";import"./T7VMP3TM-h-RVnCqR.js";import"./P2CTZE2T-C4NqLDvb.js";import"./LVA2YJMS-Bhv8eVm0.js";import"./J2LQO3EC-KBEnfm3G.js";import"./ITI7HKP4-_BMwSXRb.js";import"./index-BjXx3EE5.js";import"./index-BjRskdOB.js";import"./index-1YdoA736.js";import"./cubic-bezier-CfzpfWNY.js";import"./T6C2RYFI-BXv3qAIm.js";import"./floating-ui.utils.dom-BlKqeV2W.js";import"./dropdown-motion-BuMQU1CT.js";const X={title:"Components/Utilities/Composite",id:"components-composite",component:e,subcomponents:{"Composite.Group":e.Group,"Composite.GroupLabel":e.GroupLabel,"Composite.Row":e.Row,"Composite.Item":e.Item,"Composite.Hover":e.Hover,"Composite.Typeahead":e.Typeahead,"Composite.Context":e.Context},argTypes:{children:{control:!1},render:{control:!1},setActiveId:{control:!1},focusLoop:{control:"select",options:[!0,!1,"horizontal","vertical","both"]},focusWrap:{control:"select",options:[!0,!1,"horizontal","vertical","both"]}},parameters:{controls:{expanded:!0},docs:{canvas:{sourceState:"shown"}}},decorators:[n=>t(i,{children:[o("style",{children:`
                        [data-active-item] {
                            background-color: #ffc0b5;
                        }
                    `}),o(n,{}),t("div",{style:{marginTop:"2em",fontSize:"12px",fontStyle:"italic"},children:[o("p",{id:"list-title",children:"Notes"}),t("ul",{"aria-labelledby":"list-title",children:[o("li",{children:"The active composite item is highlighted with a different background color;"}),o("li",{children:"A composite item can be the active item even when it doesn't have keyboard focus."})]})]})]})]},r={args:{children:t(i,{children:[o(e.Item,{children:"Item one"}),o(e.Item,{children:"Item two"}),o(e.Item,{children:"Item three"})]})}},s={...r,args:{...r.args,children:t(i,{children:[t(e.Group,{children:[o(e.GroupLabel,{children:"Group one"}),o(e.Item,{children:"Item 1.1"}),o(e.Item,{children:"Item 1.2"})]}),t(e.Group,{children:[o(e.GroupLabel,{children:"Group two"}),o(e.Item,{children:"Item 2.1"}),o(e.Item,{children:"Item 2.1"})]})]})}},m={...r,args:{...r.args,role:"grid","aria-label":"Composite",children:t(i,{children:[t(e.Row,{role:"row",children:[o(e.Item,{role:"gridcell",children:"Item A1"}),o(e.Item,{role:"gridcell",children:"Item A2"}),o(e.Item,{role:"gridcell",children:"Item A3"})]}),t(e.Row,{role:"row",children:[o(e.Item,{role:"gridcell",children:"Item B1"}),o(e.Item,{role:"gridcell",children:"Item B2"}),o(e.Item,{role:"gridcell",children:"Item B3"})]}),t(e.Row,{role:"row",children:[o(e.Item,{role:"gridcell",children:"Item C1"}),o(e.Item,{role:"gridcell",children:"Item C2"}),o(e.Item,{role:"gridcell",children:"Item C3"})]})]})}},p={...r,args:{...r.args,children:t(i,{children:[o(e.Hover,{render:o(e.Item,{}),children:"Hover item one"}),o(e.Hover,{render:o(e.Item,{}),children:"Hover item two"}),o(e.Hover,{render:o(e.Item,{}),children:"Hover item three"})]})},parameters:{docs:{description:{story:"Elements in the composite widget will receive focus on mouse move and lose focus to the composite base element on mouse leave."}}}},a={args:{...r.args,render:o(e.Typeahead,{}),children:t(i,{children:[o(e.Item,{children:"Apple"}),o(e.Item,{children:"Banana"}),o(e.Item,{children:"Peach"})]})},parameters:{docs:{description:{story:"When focus in on the composite widget, hitting printable character keys will move focus to the next composite item that begins with the input characters."}}}},C=F("Example"),S=()=>{const n=I.useContext(e.Context),d=I.useMemo(()=>({forwardedContext:[[e.Context.Provider,{value:n}]]}),[n]);return o(C.Slot,{fillProps:d,bubblesVirtually:!0,style:{display:"contents"}})},b=({children:n})=>{const d=o(i,{children:n});return o(C.Fill,{children:u=>{const{forwardedContext:f=[]}=u;return f.reduce((g,[w,x])=>o(w,{...x,children:g}),d)}})},c={...r,args:{...r.args,children:t(i,{children:[o(e.Item,{children:"Item one (direct child)"}),o(S,{}),o(e.Item,{children:"Item four (direct child)"})]})},decorators:[n=>t(v,{children:[o(n,{}),t(b,{children:[o(e.Item,{children:"Item two (from slot fill)"}),o(e.Item,{children:"Item three (from slot fill)"})]})]})],parameters:{docs:{description:{story:"When rendering Composite components across a SlotFill, the Composite.Context should be manually forwarded from the Slot to the Fill component."},source:{transform:n=>`const ExampleSlotFill = createSlotFill( 'Example' );

const Slot = () => {
  const compositeContext = useContext( Composite.Context );

  // Forward the Slot's composite context to the Fill via fillProps, so that
  // Composite components rendered inside the Fill can work as expected.
  const fillProps = useMemo(
    () => ( {
      forwardedContext: [
        [ Composite.Context.Provider, { value: compositeContext } ],
      ],
    } ),
    [ compositeContext ]
  );

  return (
    <ExampleSlotFill.Slot
      fillProps={ fillProps }
      bubblesVirtually
      style={ { display: 'contents' } }
    />
  );
};

const Fill = ( { children } ) => {
  const innerMarkup = <>{ children }</>;

  return (
    <ExampleSlotFill.Fill>
      { ( fillProps ) => {
        const { forwardedContext = [] } = fillProps;

        // Render all context providers forwarded by the Slot via fillProps.
        return forwardedContext.reduce(
          ( inner, [ Provider, props ] ) => (
            <Provider { ...props }>{ inner }</Provider>
          ),
          innerMarkup
        );
      } }
    </ExampleSlotFill.Fill>
  );
};

// In a separate component:

<SlotFillProvider>
  ${n.replaceAll(`
`,`
  `)}

  <Fill>
    <Composite.Item>
      Item two (from slot fill)
    </Composite.Item>
    <Composite.Item>
      Item three (from slot fill)
    </Composite.Item>
  </Fill>
</SlotFillProvider>`}}}},l={...r,args:{...r.args,children:t(i,{children:[o(h,{text:"Tooltip one",children:o(e.Item,{children:"Item one"})}),o(h,{text:"Tooltip two",children:o(e.Item,{children:"Item two"})}),o(h,{text:"Tooltip three",children:o(e.Item,{children:"Item three"})})]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
                <Composite.Item>Item one</Composite.Item>
                <Composite.Item>Item two</Composite.Item>
                <Composite.Item>Item three</Composite.Item>
            </>
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    children: <>
                <Composite.Group>
                    <Composite.GroupLabel>Group one</Composite.GroupLabel>
                    <Composite.Item>Item 1.1</Composite.Item>
                    <Composite.Item>Item 1.2</Composite.Item>
                </Composite.Group>
                <Composite.Group>
                    <Composite.GroupLabel>Group two</Composite.GroupLabel>
                    <Composite.Item>Item 2.1</Composite.Item>
                    <Composite.Item>Item 2.1</Composite.Item>
                </Composite.Group>
            </>
  }
}`,...s.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    role: 'grid',
    'aria-label': 'Composite',
    children: <>
                <Composite.Row role="row">
                    <Composite.Item role="gridcell">Item A1</Composite.Item>
                    <Composite.Item role="gridcell">Item A2</Composite.Item>
                    <Composite.Item role="gridcell">Item A3</Composite.Item>
                </Composite.Row>
                <Composite.Row role="row">
                    <Composite.Item role="gridcell">Item B1</Composite.Item>
                    <Composite.Item role="gridcell">Item B2</Composite.Item>
                    <Composite.Item role="gridcell">Item B3</Composite.Item>
                </Composite.Row>
                <Composite.Row role="row">
                    <Composite.Item role="gridcell">Item C1</Composite.Item>
                    <Composite.Item role="gridcell">Item C2</Composite.Item>
                    <Composite.Item role="gridcell">Item C3</Composite.Item>
                </Composite.Row>
            </>
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    children: <>
                <Composite.Hover render={<Composite.Item />}>
                    Hover item one
                </Composite.Hover>
                <Composite.Hover render={<Composite.Item />}>
                    Hover item two
                </Composite.Hover>
                <Composite.Hover render={<Composite.Item />}>
                    Hover item three
                </Composite.Hover>
            </>
  },
  parameters: {
    docs: {
      description: {
        story: 'Elements in the composite widget will receive focus on mouse move and lose focus to the composite base element on mouse leave.'
      }
    }
  }
}`,...p.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    render: <Composite.Typeahead />,
    children: <>
                <Composite.Item>Apple</Composite.Item>
                <Composite.Item>Banana</Composite.Item>
                <Composite.Item>Peach</Composite.Item>
            </>
  },
  parameters: {
    docs: {
      description: {
        story: 'When focus in on the composite widget, hitting printable character keys will move focus to the next composite item that begins with the input characters.'
      }
    }
  }
}`,...a.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    children: <>
                <Composite.Item>Item one (direct child)</Composite.Item>
                <Slot />
                <Composite.Item>Item four (direct child)</Composite.Item>
            </>
  },
  decorators: [Story => {
    return <SlotFillProvider>
                    <Story />

                    <Fill>
                        <Composite.Item>
                            Item two (from slot fill)
                        </Composite.Item>
                        <Composite.Item>
                            Item three (from slot fill)
                        </Composite.Item>
                    </Fill>
                </SlotFillProvider>;
  }],
  parameters: {
    docs: {
      description: {
        story: 'When rendering Composite components across a SlotFill, the Composite.Context should be manually forwarded from the Slot to the Fill component.'
      },
      source: {
        transform: (code: string) => {
          return \`const ExampleSlotFill = createSlotFill( 'Example' );

const Slot = () => {
  const compositeContext = useContext( Composite.Context );

  // Forward the Slot's composite context to the Fill via fillProps, so that
  // Composite components rendered inside the Fill can work as expected.
  const fillProps = useMemo(
    () => ( {
      forwardedContext: [
        [ Composite.Context.Provider, { value: compositeContext } ],
      ],
    } ),
    [ compositeContext ]
  );

  return (
    <ExampleSlotFill.Slot
      fillProps={ fillProps }
      bubblesVirtually
      style={ { display: 'contents' } }
    />
  );
};

const Fill = ( { children } ) => {
  const innerMarkup = <>{ children }</>;

  return (
    <ExampleSlotFill.Fill>
      { ( fillProps ) => {
        const { forwardedContext = [] } = fillProps;

        // Render all context providers forwarded by the Slot via fillProps.
        return forwardedContext.reduce(
          ( inner, [ Provider, props ] ) => (
            <Provider { ...props }>{ inner }</Provider>
          ),
          innerMarkup
        );
      } }
    </ExampleSlotFill.Fill>
  );
};

// In a separate component:

<SlotFillProvider>
  \${
          // Add one level of indentation to match the surrounding code.
          code.replaceAll('\\n', '\\n  ')}

  <Fill>
    <Composite.Item>
      Item two (from slot fill)
    </Composite.Item>
    <Composite.Item>
      Item three (from slot fill)
    </Composite.Item>
  </Fill>
</SlotFillProvider>\`;
        }
      }
    }
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    children: <>
                <Tooltip text="Tooltip one">
                    <Composite.Item>Item one</Composite.Item>
                </Tooltip>
                <Tooltip text="Tooltip two">
                    <Composite.Item>Item two</Composite.Item>
                </Tooltip>
                <Tooltip text="Tooltip three">
                    <Composite.Item>Item three</Composite.Item>
                </Tooltip>
            </>
  }
}`,...l.parameters?.docs?.source},description:{story:`Combining the \`Tooltip\` and \`Composite\` component has a few caveats. And while there are a few ways to compose these two components, our recommendation is to render \`Composite.Item\` as a child of \`Tooltip\`.

\`\`\`jsx
// 🔴 Does not work
<Composite.Item
  render={
    <Tooltip text="Tooltip">
      <button>Item</button>
    </Tooltip>
  }
/>

// 🟢 Good
<Tooltip text="Tooltip one">
  <Composite.Item>
    Item one
  </Composite.Item>
</Tooltip>
\`\`\``,...l.parameters?.docs?.description}}};try{l.displayName="WithTooltips",l.__docgenInfo={description:`Combining the \`Tooltip\` and \`Composite\` component has a few caveats. And while there are a few ways to compose these two components, our recommendation is to render \`Composite.Item\` as a child of \`Tooltip\`.

\`\`\`jsx
// 🔴 Does not work
<Composite.Item
  render={
    <Tooltip text="Tooltip">
      <button>Item</button>
    </Tooltip>
  }
/>

// 🟢 Good
<Tooltip text="Tooltip one">
  <Composite.Item>
    Item one
  </Composite.Item>
</Tooltip>
\`\`\``,displayName:"WithTooltips",props:{}}}catch{}export{r as Default,m as Grid,s as Groups,p as Hover,a as Typeahead,c as WithSlotFill,l as WithTooltips,X as default};
