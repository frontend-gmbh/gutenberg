import{f as m,j as o,F as s}from"./iframe-2TvY6Iig.js";import{D as u}from"./index-D8e9HJXM.js";import{M as r,a as c}from"./index-BoXUQHNw.js";import{m as p}from"./more-DAulmHt7.js";import{c as d}from"./chevron-down-mxzMPu8z.js";import{m as a}from"./menu-dczDR4cj.js";import{a as i}from"./arrow-up-j2b5J5Px.js";import{a as l}from"./arrow-down-B34ZY2Fm.js";import{t as M}from"./trash-cK2Lm2U_.js";import"./preload-helper-Zf8nSx-t.js";import"./index-CFuMsoxH.js";import"./index-BjRskdOB.js";import"./index-BjXx3EE5.js";import"./index-Dt7LODwq.js";import"./index-1YdoA736.js";import"./cubic-bezier-CfzpfWNY.js";import"./T6C2RYFI-BXv3qAIm.js";import"./LVA2YJMS-Bhv8eVm0.js";import"./LMDWO4NN-CH0ROf0T.js";import"./floating-ui.utils.dom-BlKqeV2W.js";import"./dropdown-motion-BuMQU1CT.js";import"./index-Dnuq8uNu.js";import"./index-BIvJ8ozV.js";import"./component-BGXh8e92.js";import"./use-context-system-GBkKyJuM.js";import"./index-DUXT-3wK.js";import"./is-plain-object-BJ3z7EOF.js";import"./index-BtJmv7lM.js";import"./index-CK8hcbFu.js";import"./component-DATVQiJy.js";import"./index-djnRrerp.js";import"./index-CLatOAvg.js";import"./index-DNvM-K8Z.js";import"./floating-ui.react-dom-lQIVkebl.js";import"./index-C7vWhNYT.js";import"./default-i18n-SWt35ZM4.js";import"./platform-Dx-VEEF7.js";import"./index-g4CI5goq.js";import"./index-mcCfYwbk.js";import"./index-DDuNjadK.js";import"./index-Ct0bDPBV.js";import"./index-B18ctdHe.js";import"./index-CniSQ6kN.js";import"./index--WI9l4jM.js";import"./index-CHj7W0Xl.js";import"./index-CZo2zBTA.js";import"./v4-CtRu48qb.js";import"./index-D4zU5mcb.js";import"./proxy-DY4LNgox.js";import"./close-H02ILkEf.js";import"./use-controlled-value-D6nr5Y4s.js";import"./menu-DC1QYQWj.js";import"./container-BB_QBepN.js";const{fn:w}=__STORYBOOK_MODULE_TEST__,Co={title:"Components/Actions/DropdownMenu",component:u,id:"components-dropdownmenu",parameters:{controls:{expanded:!0},docs:{canvas:{sourceState:"shown"}}},args:{onToggle:w()},argTypes:{icon:{options:["menu","chevronDown","more"],mapping:{menu:a,chevronDown:d,more:p},control:{type:"select"}},open:{control:!1},defaultOpen:{control:!1},onToggle:{control:!1}}},n={args:{label:"Select a direction.",icon:a,controls:[{title:"First Menu Item Label",icon:i,onClick:()=>console.log("up!")},{title:"Second Menu Item Label",icon:l,onClick:()=>console.log("down!")}]}},t={...n,parameters:{docs:{source:{code:`<DropdownMenu label="Select a direction." icon={ more }>
  <MenuGroup>
    <MenuItem icon={ arrowUp } onClick={ onClose }>
      Move Up
    </MenuItem>
    <MenuItem icon={ arrowDown } onClick={ onClose }>
      Move Down
    </MenuItem>
  </MenuGroup>
  <MenuGroup>
    <MenuItem icon={ trash } onClick={ onClose }>
      Remove
    </MenuItem>
  </MenuGroup>
</DropdownMenu>`,language:"jsx",type:"auto"}}},args:{label:"Select a direction.",icon:p,children:({onClose:e})=>m(s,{children:[o(r,{icon:i,onClick:e,children:"Standalone Item"}),m(c,{children:[o(r,{icon:i,onClick:e,children:"Move Up"}),o(r,{icon:l,onClick:e,children:"Move Down"})]}),o(c,{children:o(r,{icon:M,onClick:e,children:"Remove"})})]})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Select a direction.',
    icon: menu,
    controls: [{
      title: 'First Menu Item Label',
      icon: arrowUp,
      // eslint-disable-next-line no-console
      onClick: () => console.log('up!')
    }, {
      title: 'Second Menu Item Label',
      icon: arrowDown,
      // eslint-disable-next-line no-console
      onClick: () => console.log('down!')
    }]
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  ...Default,
  // Adding custom source because Storybook is not able to show the contents of
  // the \`children\` prop correctly in the code snippet.
  parameters: {
    docs: {
      source: {
        code: \`<DropdownMenu label="Select a direction." icon={ more }>
  <MenuGroup>
    <MenuItem icon={ arrowUp } onClick={ onClose }>
      Move Up
    </MenuItem>
    <MenuItem icon={ arrowDown } onClick={ onClose }>
      Move Down
    </MenuItem>
  </MenuGroup>
  <MenuGroup>
    <MenuItem icon={ trash } onClick={ onClose }>
      Remove
    </MenuItem>
  </MenuGroup>
</DropdownMenu>\`,
        language: 'jsx',
        type: 'auto'
      }
    }
  },
  args: {
    label: 'Select a direction.',
    icon: more,
    children: ({
      onClose
    }) => <>
                <MenuItem icon={arrowUp} onClick={onClose}>
                    Standalone Item
                </MenuItem>
                <MenuGroup>
                    <MenuItem icon={arrowUp} onClick={onClose}>
                        Move Up
                    </MenuItem>
                    <MenuItem icon={arrowDown} onClick={onClose}>
                        Move Down
                    </MenuItem>
                </MenuGroup>
                <MenuGroup>
                    <MenuItem icon={trash} onClick={onClose}>
                        Remove
                    </MenuItem>
                </MenuGroup>
            </>
  }
}`,...t.parameters?.docs?.source}}};export{n as Default,t as WithChildren,Co as default};
