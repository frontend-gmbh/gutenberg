import{r as d,j as v,f as y,F as P}from"./iframe-2TvY6Iig.js";import{u as Y,M as A,c as I,C as E,s as U,a as j,z as L,b as B,i as H,t as G,k as K,n as J,p as $,j as Q,r as X,h as ee,d as te,e as ae,f as ne,g as oe,l as re}from"./use-localization-props-B3Pze68I.js";import{u as le}from"./use-controlled-value-D6nr5Y4s.js";import{D as se,e as ie,r as de,T as g}from"./DayPicker-BV-7ETuw.js";import{d as S}from"./differenceInCalendarDays-CWN7L0SW.js";import"./preload-helper-Zf8nSx-t.js";import"./startOfWeek-DRB2PxhV.js";import"./toDate-qOSwr3PX.js";import"./sprintf-CXbjGC2q.js";import"./default-i18n-SWt35ZM4.js";import"./startOfDay-DFv_10u4.js";function D({selected:t,hoveredDate:e,excludeDisabled:s,min:r,max:n,disabled:l}){return d.useMemo(()=>{if(!e||!t?.from)return;let o,a;return e<t.from?(o={from:e,to:t.from},a={from:e,to:t.to??t.from}):t.to&&e>t.from&&e<t.to?(o={from:t.from,to:e},a={from:t.from,to:e}):e>t.from&&(o={from:t.to??t.from,to:e},a={from:t.from,to:e}),r!==void 0&&r>0&&a&&S(a.to,a.from)<r&&(o={from:e,to:e}),n!==void 0&&n>0&&a&&S(a.to,a.from)>n&&(o={from:e,to:e}),s&&l&&a&&de(a,l)&&(o={from:e,to:e}),o},[t,e,s,r,n,l])}const h=({defaultSelected:t,selected:e,onSelect:s,numberOfMonths:r=1,excludeDisabled:n,min:l,max:o,disabled:a,locale:Z=ie,timeZone:C,...q})=>{const V=Y({locale:Z,timeZone:C,mode:"range"}),R=d.useCallback((p,O,z,W)=>{s?.(p??void 0,O,z,W)},[s]),[w,x]=le({defaultValue:t,value:e,onChange:R}),[F,b]=d.useState(void 0),u=D({selected:w,hoveredDate:F,excludeDisabled:n,min:l,max:o,disabled:a}),N=d.useMemo(()=>({preview:u,preview_start:u?.from,preview_end:u?.to}),[u]);return v(se,{...E,...V,...q,mode:"range",numberOfMonths:I(r),disabled:a,excludeDisabled:n,min:l,max:o,selected:w??void 0,onSelect:x,onDayMouseEnter:p=>b(p),onDayMouseLeave:()=>b(void 0),modifiers:N,modifiersClassNames:A})};try{D.displayName="usePreviewRange",D.__docgenInfo={description:"",displayName:"usePreviewRange",props:{max:{defaultValue:null,description:"The maximum number of nights to include in the range.",name:"max",required:!1,type:{name:"number"}},min:{defaultValue:null,description:"The minimum number of nights to include in the range.",name:"min",required:!1,type:{name:"number"}},disabled:{defaultValue:null,description:"Specify which days are disabled. Using `true` will disable all dates.",name:"disabled",required:!1,type:{name:"Matcher | Matcher[]"}},selected:{defaultValue:null,description:"The selected range.",name:"selected",required:!1,type:{name:"DateRange"}},excludeDisabled:{defaultValue:null,description:"When `true`, the range will reset when including a disabled day.",name:"excludeDisabled",required:!1,type:{name:"boolean"}},hoveredDate:{defaultValue:null,description:"",name:"hoveredDate",required:!0,type:{name:"Date"}}}}}catch{}try{h.displayName="DateRangeCalendar",h.__docgenInfo={description:`\`DateRangeCalendar\` is a React component that provides a customizable calendar
interface for **date range** selection.

The component is built with accessibility in mind and follows ARIA best
practices for calendar widgets. It provides keyboard navigation, screen reader
support, and customizable labels for internationalization.`,displayName:"DateRangeCalendar",props:{required:{defaultValue:{value:"false"},description:"Whether the selection is required.\nWhen `true`, there always needs to be a date selected.",name:"required",required:!1,type:{name:"boolean"}},defaultMonth:{defaultValue:{value:"The current month"},description:"The initial month to show in the calendar view (uncontrolled).",name:"defaultMonth",required:!1,type:{name:"Date"}},month:{defaultValue:null,description:"The month displayed in the calendar view (controlled). Use together with\n`onMonthChange` to change the month programmatically.",name:"month",required:!1,type:{name:"Date"}},numberOfMonths:{defaultValue:{value:"1"},description:"The number of months displayed at once.",name:"numberOfMonths",required:!1,type:{name:"number"}},startMonth:{defaultValue:null,description:"The earliest month to start the month navigation.",name:"startMonth",required:!1,type:{name:"Date"}},endMonth:{defaultValue:null,description:"The latest month to end the month navigation.",name:"endMonth",required:!1,type:{name:"Date"}},autoFocus:{defaultValue:null,description:`Focus the first selected day (if set) or today's date (if not disabled).

Use this prop when you need to focus the calendar after a user action
(e.g. opening the dialog with the calendar).`,name:"autoFocus",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"Specify which days are disabled. Using `true` will disable all dates.",name:"disabled",required:!1,type:{name:"Matcher | Matcher[]"}},disableNavigation:{defaultValue:null,description:"Disable the navigation buttons.",name:"disableNavigation",required:!1,type:{name:"boolean"}},labels:{defaultValue:null,description:`Use custom labels, useful for translating the component.

For a correct localized experience, consumers should make sure the locale
used for the translated labels and \`locale\` prop are consistent.`,name:"labels",required:!1,type:{name:"{ labelNav?: () => string; labelGrid?: (date: Date) => string; labelGridcell?: (date: Date, modifiers?: Modifiers) => string; labelNext?: (month: Date) => string; labelPrevious?: (month: Date) => string; labelDayButton?: (date: Date, modifiers?: Modifiers) => string; labelWeekday?: (date: Date) => string; }"}},locale:{defaultValue:{value:"The `enUS` locale from `@date-fns/locale`"},description:`The locale object used to localize dates. Pass a locale from
\`@date-fns/locale\` to localize the calendar.

For a correct localized experience, consumers should make sure the locale
used for the translated labels and \`locale\` prop are consistent.
@see https://github.com/date-fns/date-fns/tree/main/src/locale for a list of the supported locales`,name:"locale",required:!1,type:{name:"Locale"}},weekStartsOn:{defaultValue:{value:"Based on the `locale` prop"},description:`The index of the first day of the week (0 - Sunday). Overrides the locale's
one.`,name:"weekStartsOn",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"5"},{value:"2"},{value:"3"},{value:"4"},{value:"6"}]}},onMonthChange:{defaultValue:null,description:"Event fired when the user navigates between months.",name:"onMonthChange",required:!1,type:{name:"(month: Date) => void"}},timeZone:{defaultValue:null,description:`The time zone (IANA or UTC offset) to use in the calendar.

See
[Wikipedia](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)
for the possible values.

When working with time zones, use the \`TZDate\` object exported by this
package instead of the native \`Date\` object.
@example   import { DateCalendar, TZDate } from "@wordpress/components";

  export function WithTimeZone() {
    const timeZone = "America/New_York";
    const [ selected, setSelected ] = useState< Date | undefined >(
      new TZDate( 2024, 12, 10, timeZone ) // Use \`TZDate\` instead of \`Date\`
    );
    return (
      <DateCalendar
        timeZone={ timeZone }
        selected={ selected }
        onSelect={ setSelected }
    />
  );
}`,name:"timeZone",required:!1,type:{name:"string"}},role:{defaultValue:{value:"'application'"},description:"The role attribute to add to the container element.",name:"role",required:!1,type:{name:"enum",value:[{value:'"dialog"'},{value:'"application"'}]}},excludeDisabled:{defaultValue:null,description:"When `true`, the range will reset when including a disabled day.",name:"excludeDisabled",required:!1,type:{name:"boolean"}},min:{defaultValue:null,description:"The minimum number of nights to include in the range.",name:"min",required:!1,type:{name:"number"}},max:{defaultValue:null,description:"The maximum number of nights to include in the range.",name:"max",required:!1,type:{name:"number"}},selected:{defaultValue:null,description:"The selected range.",name:"selected",required:!1,type:{name:"DateRange"}},onSelect:{defaultValue:null,description:"Event handler when the selection changes.",name:"onSelect",required:!1,type:{name:"OnSelectHandler<DateRange>"}},defaultSelected:{defaultValue:null,description:"The default selected range (for uncontrolled usage).",name:"defaultSelected",required:!1,type:{name:"DateRange"}}}}}catch{}const{fn:T}=__STORYBOOK_MODULE_TEST__,Te={title:"Components/Selection & Input/Time & Date/DateRangeCalendar",component:h,tags:["status-private"],argTypes:{locale:{options:["English (US)","French","Spanish","German","Italian","Hebrew","Russian","Japanese","Portuguese (Brazil)","Dutch","Korean","Turkish","Indonesian","Chinese (Simplified)","Chinese (Traditional)","Arabic","Swedish"],mapping:{"English (US)":re,French:oe,Spanish:ne,German:ae,Italian:te,Hebrew:ee,Russian:X,Japanese:Q,"Portuguese (Brazil)":$,Dutch:J,Korean:K,Turkish:G,Indonesian:H,"Chinese (Simplified)":B,"Chinese (Traditional)":L,Arabic:j,Swedish:U},control:"select"},timeZone:{options:["Pacific/Honolulu","America/New_York","Europe/London","Asia/Tokyo","Pacific/Auckland"],control:"select"},labels:{control:!1},defaultSelected:{control:!1},selected:{control:!1},onSelect:{control:!1},defaultMonth:{control:"date"},month:{control:"date"},onMonthChange:{control:!1},endMonth:{control:"date"},startMonth:{control:"date"}},args:{onMonthChange:T(),onSelect:T()}},c={},m={args:{disabled:[new Date(new Date().setDate(new Date().getDate()+1)),{after:new Date(new Date().getFullYear()+1,1,1)},{before:new Date(new Date().getFullYear()-1,11,1)},{after:new Date(new Date().getFullYear(),7,11),before:new Date(new Date().getFullYear(),7,15)},{from:new Date(new Date().getFullYear(),9,21),to:new Date(new Date().getFullYear(),9,26)},{dayOfWeek:3},function(e){return[2,3,5,7,11,13,17,19,23,29,31].includes(e.getDate())}]}},_=new Date().getMonth()===11?0:new Date().getMonth()+1,k=new Date().getMonth()===11?new Date().getFullYear()+1:new Date().getFullYear(),M=new Date(k,_,1),ue=new Date(k,_,4),f={args:{defaultSelected:{from:M,to:ue},defaultMonth:M}},i={render:function(e){const[s,r]=d.useState(null);return d.useEffect(()=>{r({from:new g(new Date().setDate(new Date().getDate()+7),e.timeZone),to:new g(new Date().setDate(new Date().getDate()+14),e.timeZone)})},[e.timeZone]),y(P,{children:[v(h,{...e,selected:s,onSelect:(n,...l)=>{r(!n||n.from===void 0&&n.to===void 0?null:n),e.onSelect?.(n,...l)},disabled:[{before:new g(new Date,e.timeZone)}]}),y("p",{children:["Calendar set to ",e.timeZone??"current"," timezone, disabling selection for all dates before today, and starting with a default date range of 1 week from today to 2 weeks from today."]})]})},args:{timeZone:"Pacific/Auckland"},argTypes:{disabled:{control:!1}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:"{}",...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: [
    // Disable tomorrow (single date)
    new Date(new Date().setDate(new Date().getDate() + 1)),
    // Disable all dates after Feb 1st of next year
    {
      after: new Date(new Date().getFullYear() + 1, 1, 1)
    },
    // Disable all dates before Dec 1st of last year
    {
      before: new Date(new Date().getFullYear() - 1, 11, 1)
    },
    // Disable all dates between 12th and 14th of August of this year
    {
      after: new Date(new Date().getFullYear(), 7, 11),
      before: new Date(new Date().getFullYear(), 7, 15)
    },
    // Disable all dates between 21st and 26th of October of this year
    {
      from: new Date(new Date().getFullYear(), 9, 21),
      to: new Date(new Date().getFullYear(), 9, 26)
    },
    // Disable all Wednesdays
    {
      dayOfWeek: 3
    },
    // Disable all prime day numbers
    function isPrimeDate(date: Date) {
      return [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31].includes(date.getDate());
    }]
  }
}`,...m.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    defaultSelected: {
      from: firstDayOfNextMonth,
      to: fourthDayOfNextMonth
    },
    defaultMonth: firstDayOfNextMonth
  }
}`,...f.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: function DateCalendarWithTimeZone(args) {
    const [range, setRange] = useState<typeof args.selected | null>(null);
    useEffect(() => {
      setRange(
      // Select from one week from today to two weeks from today
      // every time the timezone changes.
      {
        from: new TZDate(new Date().setDate(new Date().getDate() + 7), args.timeZone),
        to: new TZDate(new Date().setDate(new Date().getDate() + 14), args.timeZone)
      });
    }, [args.timeZone]);
    return <>
                <DateRangeCalendar {...args} selected={range} onSelect={(selectedDate, ...rest) => {
        setRange(
        // Set controlled state to null if there's no selection
        !selectedDate || selectedDate.from === undefined && selectedDate.to === undefined ? null : selectedDate);
        args.onSelect?.(selectedDate, ...rest);
      }} disabled={[{
        // Disable any date before today
        before: new TZDate(new Date(), args.timeZone)
      }]} />
                <p>
                    Calendar set to {args.timeZone ?? 'current'} timezone,
                    disabling selection for all dates before today, and starting
                    with a default date range of 1 week from today to 2 weeks
                    from today.
                </p>
            </>;
  },
  args: {
    timeZone: 'Pacific/Auckland'
  },
  argTypes: {
    disabled: {
      control: false
    }
  }
}`,...i.parameters?.docs?.source},description:{story:"When working with time zones, use the `TZDate` object exported by this package instead of the native `Date` object.",...i.parameters?.docs?.description}}};try{i.displayName="WithTimeZone",i.__docgenInfo={description:"When working with time zones, use the `TZDate` object exported by this package instead of the native `Date` object.",displayName:"WithTimeZone",props:{}}}catch{}export{c as Default,m as DisabledDates,f as WithSelectedRangeAndMonth,i as WithTimeZone,Te as default};
