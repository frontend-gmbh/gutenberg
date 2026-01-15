import{c as _,f as l,j as p,r as y,F as g}from"./iframe-2TvY6Iig.js";import{N}from"./index-CKZdhD3r.js";import{B as S}from"./index-CFuMsoxH.js";import{j as C}from"./emotion-react.browser.esm-T2caqgd_.js";import"./preload-helper-Zf8nSx-t.js";import"./default-i18n-SWt35ZM4.js";import"./serialize-BIFBHZij.js";import"./is-plain-object-BJ3z7EOF.js";import"./index-COZNoWH5.js";import"./index-CK8hcbFu.js";import"./index-CXY7LZMH.js";import"./component-BGXh8e92.js";import"./use-context-system-GBkKyJuM.js";import"./index-DUXT-3wK.js";import"./index-BtJmv7lM.js";import"./component-DATVQiJy.js";import"./close-H02ILkEf.js";import"./index-BIvJ8ozV.js";import"./index-BjRskdOB.js";import"./index-BjXx3EE5.js";import"./index-Dt7LODwq.js";import"./index-1YdoA736.js";import"./cubic-bezier-CfzpfWNY.js";import"./T6C2RYFI-BXv3qAIm.js";import"./LVA2YJMS-Bhv8eVm0.js";import"./LMDWO4NN-CH0ROf0T.js";import"./floating-ui.utils.dom-BlKqeV2W.js";import"./dropdown-motion-BuMQU1CT.js";import"./index-Dnuq8uNu.js";const x=()=>{};function u({notices:t,onRemove:m=x,className:n,children:f}){const h=o=>()=>m(o);return n=_("components-notice-list",n),l("div",{className:n,children:[f,[...t].reverse().map(o=>{const{content:b,...k}=o;return C(N,{...k,key:o.id,onRemove:h(o.id)},o.content)})]})}try{u.displayName="NoticeList",u.__docgenInfo={description:`\`NoticeList\` is a component used to render a collection of notices.

\`\`\`jsx
import { Notice, NoticeList } from \`@wordpress/components\`;

const MyNoticeList = () => {
const [ notices, setNotices ] = useState( [
	{
		id: 'second-notice',
		content: 'second notice content',
	},
	{
		id: 'fist-notice',
		content: 'first notice content',
	},
] );

const removeNotice = ( id ) => {
	setNotices( notices.filter( ( notice ) => notice.id !== id ) );
};

return <NoticeList notices={ notices } onRemove={ removeNotice } />;
};
\`\`\``,displayName:"NoticeList",props:{notices:{defaultValue:null,description:"Array of notices to render.",name:"notices",required:!0,type:{name:'(Omit<NoticeProps, "children"> & { id: string; content: string; })[]'}},onRemove:{defaultValue:{value:"() => {}"},description:"Function called when a notice should be removed / dismissed.",name:"onRemove",required:!1,type:{name:"(id: string) => void"}},children:{defaultValue:null,description:"Children to be rendered inside the notice list.",name:"children",required:!1,type:{name:"ReactNode"}}}}}catch{}const{fn:v}=__STORYBOOK_MODULE_TEST__,te={title:"Components/Feedback/Notice",id:"components-notice",component:N,subcomponents:{NoticeList:u},args:{onDismiss:v(),onRemove:v()},parameters:{controls:{expanded:!0},docs:{canvas:{sourceState:"shown"}}}},d=t=>p(N,{...t}),e=d.bind({});e.args={children:"This is a notice."};const r=d.bind({});r.args={...e.args,politeness:"assertive",spokenMessage:"This is a notice with a custom spoken message"};const s=d.bind({});s.args={...e.args,children:l(g,{children:[l("p",{children:["JSX elements can be helpful",p("strong",{children:" if you need to format"})," the notice output."]}),p("code",{children:"note: in the interest of consistency, this should not be overused!"})]})};const c=d.bind({});c.args={...e.args,actions:[{label:"Click me!",onClick:()=>{},variant:"primary"},{label:"Or click me instead!",onClick:()=>{}},{label:"Or visit a link for more info",url:"https://wordpress.org",variant:"link"}]};const a=()=>{const t=[{id:"second-notice",content:"second notice content"},{id:"first-notice",content:"first notice content",actions:[{label:"Click me!",onClick:()=>{},variant:"primary"},{label:"Or click me instead!",onClick:()=>{}},{label:"Or visit a link for more info",url:"https://wordpress.org",variant:"link"}]}],[m,n]=y.useState(t);return l(g,{children:[p(u,{notices:m,onRemove:o=>{n(m.filter(b=>b.id!==o))}}),p(S,{__next40pxDefaultSize:!0,variant:"primary",onClick:()=>{n(t)},children:"Reset Notices"})]})};a.storyName="NoticeList Subcomponent";const i=d.bind({});i.args={...e.args,children:"This notice has a disabled action.",actions:[{label:"Disabled action",onClick:()=>{},disabled:!0},{label:"Enabled action",onClick:()=>{}}]};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`props => {
  return <Notice {...props} />;
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`props => {
  return <Notice {...props} />;
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`props => {
  return <Notice {...props} />;
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`props => {
  return <Notice {...props} />;
}`,...c.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
  const exampleNotices: NoticeListProps['notices'] = [{
    id: 'second-notice',
    content: 'second notice content'
  }, {
    id: 'first-notice',
    content: 'first notice content',
    actions: [{
      label: 'Click me!',
      onClick: () => {},
      variant: 'primary'
    }, {
      label: 'Or click me instead!',
      onClick: () => {}
    }, {
      label: 'Or visit a link for more info',
      url: 'https://wordpress.org',
      variant: 'link'
    }]
  }];
  const [notices, setNotices] = useState(exampleNotices);
  const removeNotice = (id: NoticeListProps['notices'][number]['id']) => {
    setNotices(notices.filter(notice => notice.id !== id));
  };
  const resetNotices = () => {
    setNotices(exampleNotices);
  };
  return <>
            <NoticeList notices={notices} onRemove={removeNotice} />
            <Button __next40pxDefaultSize variant="primary" onClick={resetNotices}>
                Reset Notices
            </Button>
        </>;
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`props => {
  return <Notice {...props} />;
}`,...i.parameters?.docs?.source},description:{story:"Action buttons can be disabled.",...i.parameters?.docs?.description}}};try{i.displayName="WithDisabledAction",i.__docgenInfo={description:"Action buttons can be disabled.",displayName:"WithDisabledAction",props:{}}}catch{}export{e as Default,a as NoticeListSubcomponent,c as WithActions,r as WithCustomSpokenMessage,i as WithDisabledAction,s as WithJSXChildren,te as default};
