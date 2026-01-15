import{e as k,r as l,j as s,f as w,F as T}from"./iframe-2TvY6Iig.js";import{D as u,d as i,i as v}from"./utils-Crh2jPJy.js";import{T as D}from"./index-D1LlsMPc.js";import{V as P}from"./component-6CLxCT3h.js";import"./preload-helper-Zf8nSx-t.js";import"./sprintf-CXbjGC2q.js";import"./default-i18n-SWt35ZM4.js";import"./index-WQYZzrjz.js";import"./subYears-wI5xir8w.js";import"./startOfDay-DFv_10u4.js";import"./toDate-qOSwr3PX.js";import"./startOfWeek-DRB2PxhV.js";import"./index-CFuMsoxH.js";import"./index-BjRskdOB.js";import"./index-BjXx3EE5.js";import"./index-Dt7LODwq.js";import"./index-1YdoA736.js";import"./cubic-bezier-CfzpfWNY.js";import"./T6C2RYFI-BXv3qAIm.js";import"./LVA2YJMS-Bhv8eVm0.js";import"./LMDWO4NN-CH0ROf0T.js";import"./floating-ui.utils.dom-BlKqeV2W.js";import"./dropdown-motion-BuMQU1CT.js";import"./index-Dnuq8uNu.js";import"./index-BIvJ8ozV.js";import"./component-BGXh8e92.js";import"./use-context-system-GBkKyJuM.js";import"./index-DUXT-3wK.js";import"./is-plain-object-BJ3z7EOF.js";import"./index-BtJmv7lM.js";import"./index-CK8hcbFu.js";import"./component-DATVQiJy.js";import"./space-CjrGwnR-.js";import"./component-CIWI0tS-.js";import"./hook-D_MMjSqd.js";import"./values-CtPxXHrl.js";import"./get-valid-children-BTY2hlyh.js";import"./component-CqSZVoza.js";import"./hook-56LQ9BfU.js";import"./emotion-react.browser.esm-T2caqgd_.js";import"./context-DbMhvW6o.js";import"./use-responsive-value-bUbLlkWc.js";import"./component-CSsaRVTa.js";import"./hook-D7E4jAJ2.js";import"./names-BarMHYgS.js";import"./config-values-CkVNYk_w.js";import"./colors-values-BSq3yUT9.js";import"./index-CWa7Pedq.js";import"./hook-CHurV6sy.js";import"./box-sizing-DDIeAART.js";import"./constants-C9fF-KJR.js";import"./mini-PomufWgy.js";import"./actions-elSjqZJg.js";import"./arrow-right-CXXAcKTj.js";import"./index-DckQhh-o.js";import"./base-control-styles-CoefPmVd.js";import"./font-Cck9kG94.js";import"./index-LbqlnDh8.js";import"./chevron-down-hEJ1114-.js";import"./index-FlM62Vh8.js";import"./input-suffix-wrapper-Gn_aDXNL.js";import"./input-base-DiRopTRM.js";import"./component-l_ygUujJ.js";import"./component-DEBvv9-v.js";import"./rtl-C-j_aU_R.js";import"./use-deprecated-props-BokcF_Hx.js";import"./chevron-down-mxzMPu8z.js";import"./deprecated-36px-size-UsjcW-j9.js";import"./index-w5J4Ezdm.js";import"./index-CLatOAvg.js";import"./index-dvLnGrYd.js";import"./use-gesture-react.esm-BHlZEJgV.js";import"./with-ignore-ime-events-BK39a-UH.js";import"./component-Cu4YN_oY.js";import"./plus-Bb-UlsvB.js";import"./reset-DAroYZ4v.js";import"./component-BNvMnNDq.js";import"./index-BcsUY9xg.js";import"./radio-group-DckMt_5-.js";import"./ITI7HKP4-_BMwSXRb.js";import"./P2CTZE2T-C4NqLDvb.js";import"./NLEBE274-DHIyTr8t.js";import"./use-controlled-value-D6nr5Y4s.js";import"./use-animated-offset-rect-BxGHKIlu.js";import"./index-Di3oHLN4.js";import"./index-DCGL3fHb.js";import"./component-rgbQiw8W.js";import"./startOfMinute-C_WosFxY.js";const _=k(P,{target:"e1p5onf00"})({name:"1khn195",styles:"box-sizing:border-box"}),b=()=>{};function S({currentDate:e,is12Hour:c,dateOrder:p,isInvalidDate:d,onMonthPreviewed:o=b,onChange:t,events:f,startOfWeek:g},y){return s(_,{ref:y,className:"components-datetime",spacing:4,children:w(T,{children:[s(D,{currentTime:e,onChange:t,is12Hour:c,dateOrder:p}),s(u,{currentDate:e,onChange:t,isInvalidDate:d,events:f,onMonthPreviewed:o,startOfWeek:g})]})})}const m=l.forwardRef(S);try{u.displayName="DatePicker",u.__docgenInfo={description:`DatePicker is a React component that renders a calendar for date selection.

\`\`\`jsx
import { DatePicker } from '@wordpress/components';
import { useState } from '@wordpress/element';

const MyDatePicker = () => {
  const [ date, setDate ] = useState( new Date() );

  return (
    <DatePicker
      currentDate={ date }
      onChange={ ( newDate ) => setDate( newDate ) }
    />
  );
};
\`\`\``,displayName:"DatePicker",props:{currentDate:{defaultValue:null,description:"The current date and time at initialization. Optionally pass in a `null`\nvalue to specify no date is currently selected.",name:"currentDate",required:!1,type:{name:"string | number | Date"}},onChange:{defaultValue:null,description:`The function called when a new date has been selected. It is passed the
date as an argument.`,name:"onChange",required:!1,type:{name:"(date: string) => void"}},isInvalidDate:{defaultValue:null,description:`A callback function which receives a Date object representing a day as an
argument, and should return a Boolean to signify if the day is valid or
not.`,name:"isInvalidDate",required:!1,type:{name:"(date: Date) => boolean"}},onMonthPreviewed:{defaultValue:null,description:`A callback invoked when selecting the previous/next month in the date
picker. The callback receives the new month date in the ISO format as an
argument.`,name:"onMonthPreviewed",required:!1,type:{name:"(date: string) => void"}},events:{defaultValue:{value:"[]"},description:`List of events to show in the date picker. Each event will appear as a
dot on the day of the event.`,name:"events",required:!1,type:{name:"DatePickerEvent[]"}},startOfWeek:{defaultValue:{value:"0"},description:"The day that the week should start on. 0 for Sunday, 1 for Monday, etc.",name:"startOfWeek",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"5"},{value:"2"},{value:"3"},{value:"4"},{value:"6"}]}}}}}catch{}try{D.displayName="TimePicker",D.__docgenInfo={description:`TimePicker is a React component that renders a clock for time selection.

\`\`\`jsx
import { TimePicker } from '@wordpress/components';
import { useState } from '@wordpress/element';

const MyTimePicker = () => {
  const [ time, setTime ] = useState( new Date() );

  return (
    <TimePicker
      currentTime={ date }
      onChange={ ( newTime ) => setTime( newTime ) }
      is12Hour
    />
  );
};
\`\`\``,displayName:"TimePicker",props:{currentTime:{defaultValue:null,description:"The initial current time the time picker should render.",name:"currentTime",required:!1,type:{name:"string | number | Date"}},is12Hour:{defaultValue:null,description:"Whether we use a 12-hour clock. With a 12-hour clock, an AM/PM widget is\ndisplayed and the time format is assumed to be `MM-DD-YYYY` (as opposed\nto the default format `DD-MM-YYYY`).",name:"is12Hour",required:!1,type:{name:"boolean"}},dateOrder:{defaultValue:{value:"'dmy'"},description:"The order of day, month, and year. This prop overrides the time format\ndetermined by `is12Hour` prop.",name:"dateOrder",required:!1,type:{name:"enum",value:[{value:'"dmy"'},{value:'"mdy"'},{value:'"ymd"'}]}},onChange:{defaultValue:null,description:`The function called when a new time has been selected. It is passed the
time as an argument.`,name:"onChange",required:!1,type:{name:"(time: string) => void"}},hideLabelFromVision:{defaultValue:{value:"false"},description:"If true, the label will only be visible to screen readers.",name:"hideLabelFromVision",required:!1,type:{name:"boolean"}}}}}catch{}try{m.displayName="DateTimePicker",m.__docgenInfo={description:`DateTimePicker is a React component that renders a calendar and clock for
date and time selection. The calendar and clock components can be accessed
individually using the \`DatePicker\` and \`TimePicker\` components respectively.

\`\`\`jsx
import { DateTimePicker } from '@wordpress/components';
import { useState } from '@wordpress/element';

const MyDateTimePicker = () => {
  const [ date, setDate ] = useState( new Date() );

  return (
    <DateTimePicker
      currentDate={ date }
      onChange={ ( newDate ) => setDate( newDate ) }
      is12Hour
    />
  );
};
\`\`\``,displayName:"DateTimePicker",props:{}}}catch{}try{datetime.displayName="datetime",datetime.__docgenInfo={description:`DateTimePicker is a React component that renders a calendar and clock for
date and time selection. The calendar and clock components can be accessed
individually using the \`DatePicker\` and \`TimePicker\` components respectively.

\`\`\`jsx
import { DateTimePicker } from '@wordpress/components';
import { useState } from '@wordpress/element';

const MyDateTimePicker = () => {
  const [ date, setDate ] = useState( new Date() );

  return (
    <DateTimePicker
      currentDate={ date }
      onChange={ ( newDate ) => setDate( newDate ) }
      is12Hour
    />
  );
};
\`\`\``,displayName:"datetime",props:{}}}catch{}const st={title:"Components/Selection & Input/Time & Date/DateTimePicker",id:"components-datetimepicker",component:m,argTypes:{currentDate:{control:"date"},onChange:{action:"onChange",control:!1}},parameters:{controls:{expanded:!0},docs:{canvas:{sourceState:"shown"}}}},h=({currentDate:e,onChange:c,...p})=>{const[d,o]=l.useState(e);return l.useEffect(()=>{o(e)},[e]),s(m,{...p,currentDate:d,onChange:t=>{o(t),c?.(t)}})},n=h.bind({});n.args={currentDate:new Date};const a=h.bind({});a.args={currentDate:new Date,events:[{date:i(2)},{date:i(4)},{date:i(6)},{date:i(8)}]};const r=h.bind({});r.args={currentDate:new Date,isInvalidDate:v};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`({
  currentDate,
  onChange,
  ...args
}) => {
  const [date, setDate] = useState(currentDate);
  useEffect(() => {
    setDate(currentDate);
  }, [currentDate]);
  return <DateTimePicker {...args} currentDate={date} onChange={newDate => {
    setDate(newDate);
    onChange?.(newDate);
  }} />;
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`({
  currentDate,
  onChange,
  ...args
}) => {
  const [date, setDate] = useState(currentDate);
  useEffect(() => {
    setDate(currentDate);
  }, [currentDate]);
  return <DateTimePicker {...args} currentDate={date} onChange={newDate => {
    setDate(newDate);
    onChange?.(newDate);
  }} />;
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`({
  currentDate,
  onChange,
  ...args
}) => {
  const [date, setDate] = useState(currentDate);
  useEffect(() => {
    setDate(currentDate);
  }, [currentDate]);
  return <DateTimePicker {...args} currentDate={date} onChange={newDate => {
    setDate(newDate);
    onChange?.(newDate);
  }} />;
}`,...r.parameters?.docs?.source}}};export{n as Default,a as WithEvents,r as WithInvalidDates,st as default};
