import{f as r,j as e,r as d}from"./iframe-2TvY6Iig.js";import{P as p,F as t,S as a}from"./index--WI9l4jM.js";import"./preload-helper-Zf8nSx-t.js";import"./index-CHj7W0Xl.js";import"./index-CZo2zBTA.js";import"./v4-CtRu48qb.js";import"./index-CLatOAvg.js";import"./component-DATVQiJy.js";import"./index-D4zU5mcb.js";const A={component:a,title:"Components/Utilities/SlotFill",id:"components-slotfill",subcomponents:{Fill:t,SlotFillProvider:p},argTypes:{name:{control:!1},as:{control:{type:"text"}},fillProps:{control:!1}},parameters:{controls:{expanded:!0},docs:{source:{state:"open"}}}},o=n=>r(p,{children:[e("h2",{children:"Profile"}),r("p",{children:["Name: ",e(a,{...n,name:"name"})]}),r("p",{children:["Age: ",e(a,{...n,name:"age"})]}),e(t,{name:"name",children:"Grace"}),e(t,{name:"age",children:"33"})]});o.args={bubblesVirtually:!0,as:"span"};const i=n=>r(p,{children:[e("h2",{children:"Profile"}),r("p",{children:["Name:"," ",e(a,{...n,name:"name",fillProps:{name:"Grace"}})]}),r("p",{children:["Age: ",e(a,{...n,name:"age",fillProps:{age:33}})]}),e(t,{name:"name",children:l=>l.name}),e(t,{name:"age",children:l=>l.age})]});i.args={...o.args};const s=n=>r(p,{children:[e("h2",{children:"Profile"}),r("p",{children:["Name:",e(a,{...n,name:"name",children:l=>e("span",{style:{color:"red"},children:l})})]}),r("p",{children:["Age:",e(a,{...n,name:"age",children:l=>e("span",{style:{color:"red"},children:l})})]}),e(t,{name:"name",children:"Alice"}),e(t,{name:"age",children:"18"})]});s.args={...o.args};const m=n=>{const l=d.createContext(""),c=({name:u})=>{const h=d.useContext(l);return e(t,{name:u,children:h})};return r(p,{children:[e("h2",{children:"Profile"}),r("p",{children:["Name: ",e(a,{...n,name:"name"})]}),r("p",{children:["Age: ",e(a,{...n,name:"age"})]}),e(l.Provider,{value:"Grace",children:e(c,{name:"name"})}),e(l.Provider,{value:33,children:e(c,{name:"age"})})]})};m.args={...o.args};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`props => {
  return <SlotFillProvider>
            <h2>Profile</h2>
            <p>
                Name: <Slot {...props} name="name" />
            </p>
            <p>
                Age: <Slot {...props} name="age" />
            </p>
            <Fill name="name">Grace</Fill>
            <Fill name="age">33</Fill>
        </SlotFillProvider>;
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`props => {
  return <SlotFillProvider>
            <h2>Profile</h2>
            <p>
                Name:{' '}
                <Slot {...props} name="name" fillProps={{
        name: 'Grace'
      }} />
            </p>
            <p>
                Age: <Slot {...props} name="age" fillProps={{
        age: 33
      }} />
            </p>

            <Fill name="name">{fillProps => fillProps.name}</Fill>
            <Fill name="age">{fillProps => fillProps.age}</Fill>
        </SlotFillProvider>;
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`props => {
  return <SlotFillProvider>
            <h2>Profile</h2>
            <p>
                Name:
                {/* @ts-expect-error Not supported children for \`<Slot />\` when \`bubblesVirtually\` is true. */}
                <Slot {...props} name="name">
                    {fills => {
          return <span style={{
            color: 'red'
          }}>{fills}</span>;
        }}
                </Slot>
            </p>
            <p>
                Age:
                {/* @ts-expect-error Not support children for \`<Slot />\` when \`bubblesVirtually\` is true. */}
                <Slot {...props} name="age">
                    {fills => {
          return <span style={{
            color: 'red'
          }}>{fills}</span>;
        }}
                </Slot>
            </p>
            <Fill name="name">Alice</Fill>
            <Fill name="age">18</Fill>
        </SlotFillProvider>;
}`,...s.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`props => {
  const Context = createContext<string | number>('');
  const ContextFill = ({
    name
  }: {
    name: string;
  }) => {
    const value = useContext(Context);
    return <Fill name={name}>{value}</Fill>;
  };
  return <SlotFillProvider>
            <h2>Profile</h2>
            <p>
                Name: <Slot {...props} name="name" />
            </p>
            <p>
                Age: <Slot {...props} name="age" />
            </p>
            <Context.Provider value="Grace">
                <ContextFill name="name" />
            </Context.Provider>
            <Context.Provider value={33}>
                <ContextFill name="age" />
            </Context.Provider>
        </SlotFillProvider>;
}`,...m.parameters?.docs?.source}}};export{o as Default,m as WithContext,i as WithFillProps,s as WithSlotChildren,A as default};
