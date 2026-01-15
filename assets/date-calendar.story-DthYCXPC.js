import{r as m,j as D,f,F as k}from"./iframe-2TvY6Iig.js";import{u as _,c as C,C as F,s as z,a as q,z as O,b as V,i as x,t as W,k as Y,n as N,p as P,j as A,r as j,h as U,d as E,e as I,f as R,g as B,l as L}from"./use-localization-props-B3Pze68I.js";import{u as G}from"./use-controlled-value-D6nr5Y4s.js";import{D as H,e as K,T as u}from"./DayPicker-BV-7ETuw.js";import"./preload-helper-Zf8nSx-t.js";import"./startOfWeek-DRB2PxhV.js";import"./toDate-qOSwr3PX.js";import"./sprintf-CXbjGC2q.js";import"./default-i18n-SWt35ZM4.js";const d=({defaultSelected:a,selected:e,onSelect:o,numberOfMonths:l=1,locale:n=K,timeZone:c,...g})=>{const b=_({locale:n,timeZone:c,mode:"single"}),w=m.useCallback((T,v,M,Z)=>{o?.(T??void 0,v,M,Z)},[o]),[y,S]=G({defaultValue:a,value:e,onChange:w});return D(H,{...F,...b,...g,mode:"single",numberOfMonths:C(l),selected:y??void 0,onSelect:S})};try{d.displayName="DateCalendar",d.__docgenInfo={description:`\`DateCalendar\` is a React component that provides a customizable calendar
interface for **single date** selection.

The component is built with accessibility in mind and follows ARIA best
practices for calendar widgets. It provides keyboard navigation, screen reader
support, and customizable labels for internationalization.`,displayName:"DateCalendar",props:{required:{defaultValue:{value:"false"},description:"Whether the selection is required.\nWhen `true`, there always needs to be a date selected.",name:"required",required:!1,type:{name:"boolean"}},defaultMonth:{defaultValue:{value:"The current month"},description:"The initial month to show in the calendar view (uncontrolled).",name:"defaultMonth",required:!1,type:{name:"Date"}},month:{defaultValue:null,description:"The month displayed in the calendar view (controlled). Use together with\n`onMonthChange` to change the month programmatically.",name:"month",required:!1,type:{name:"Date"}},numberOfMonths:{defaultValue:{value:"1"},description:"The number of months displayed at once.",name:"numberOfMonths",required:!1,type:{name:"number"}},startMonth:{defaultValue:null,description:"The earliest month to start the month navigation.",name:"startMonth",required:!1,type:{name:"Date"}},endMonth:{defaultValue:null,description:"The latest month to end the month navigation.",name:"endMonth",required:!1,type:{name:"Date"}},autoFocus:{defaultValue:null,description:`Focus the first selected day (if set) or today's date (if not disabled).

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
}`,name:"timeZone",required:!1,type:{name:"string"}},role:{defaultValue:{value:"'application'"},description:"The role attribute to add to the container element.",name:"role",required:!1,type:{name:"enum",value:[{value:'"dialog"'},{value:'"application"'}]}},selected:{defaultValue:null,description:"The selected date.",name:"selected",required:!1,type:{name:"Date"}},onSelect:{defaultValue:null,description:"Event handler when a day is selected.",name:"onSelect",required:!1,type:{name:"OnSelectHandler<Date>"}},defaultSelected:{defaultValue:null,description:"The default selected date (for uncontrolled usage).",name:"defaultSelected",required:!1,type:{name:"Date"}}}}}catch{}const{fn:h}=__STORYBOOK_MODULE_TEST__,re={title:"Components/Selection & Input/Time & Date/DateCalendar",component:d,tags:["status-private"],argTypes:{locale:{options:["English (US)","French","Spanish","German","Italian","Hebrew","Russian","Japanese","Portuguese (Brazil)","Dutch","Korean","Turkish","Indonesian","Chinese (Simplified)","Chinese (Traditional)","Arabic","Swedish"],mapping:{"English (US)":L,French:B,Spanish:R,German:I,Italian:E,Hebrew:U,Russian:j,Japanese:A,"Portuguese (Brazil)":P,Dutch:N,Korean:Y,Turkish:W,Indonesian:x,"Chinese (Simplified)":V,"Chinese (Traditional)":O,Arabic:q,Swedish:z},control:"select"},timeZone:{options:["Pacific/Honolulu","America/New_York","Europe/London","Asia/Tokyo","Pacific/Auckland"],control:"select"},labels:{control:!1},defaultSelected:{control:"date"},selected:{control:"date"},onSelect:{control:!1},defaultMonth:{control:"date"},month:{control:"date"},onMonthChange:{control:!1},endMonth:{control:"date"},startMonth:{control:"date"}},args:{onMonthChange:h(),onSelect:h()}},s={},r={args:{disabled:[new Date(new Date().setDate(new Date().getDate()+1)),{after:new Date(new Date().getFullYear()+1,1,1)},{before:new Date(new Date().getFullYear()-1,11,1)},{after:new Date(new Date().getFullYear(),7,11),before:new Date(new Date().getFullYear(),7,15)},{from:new Date(new Date().getFullYear(),9,21),to:new Date(new Date().getFullYear(),9,26)},{dayOfWeek:3},function(e){return[2,3,5,7,11,13,17,19,23,29,31].includes(e.getDate())}]}},J=new Date().getMonth()===11?0:new Date().getMonth()+1,$=new Date().getMonth()===11?new Date().getFullYear()+1:new Date().getFullYear(),p=new Date($,J,1),i={args:{defaultSelected:p,defaultMonth:p}},t={render:function(e){const[o,l]=m.useState(null);return m.useEffect(()=>{l(new u(new Date().setDate(new Date().getDate()+7),e.timeZone))},[e.timeZone]),f(k,{children:[D(d,{...e,selected:o,onSelect:(n,...c)=>{l(n?new u(n,e.timeZone):null),e.onSelect?.(n,...c)},disabled:[{before:new u(new Date,e.timeZone)}]}),f("p",{children:["Calendar set to ",e.timeZone??"current"," timezone, disabling selection for all dates before today, and starting with a default date of 1 week from today."]})]})},args:{timeZone:"Pacific/Auckland"},argTypes:{selected:{control:!1},defaultSelected:{control:!1},disabled:{control:!1}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    defaultSelected: firstDayOfNextMonth,
    defaultMonth: firstDayOfNextMonth
  }
}`,...i.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: function DateCalendarWithTimeZone(args) {
    const [selected, setSelected] = useState<TZDate | null>(null);
    useEffect(() => {
      setSelected(
      // Select one week from today every time the time zone changes.
      new TZDate(new Date().setDate(new Date().getDate() + 7), args.timeZone));
    }, [args.timeZone]);
    return <>
                <DateCalendar {...args} selected={selected} onSelect={(selectedDate, ...rest) => {
        setSelected(selectedDate ? new TZDate(selectedDate, args.timeZone) : null);
        args.onSelect?.(selectedDate, ...rest);
      }} disabled={[{
        // Disable any date before today
        before: new TZDate(new Date(), args.timeZone)
      }]} />

                <p>
                    Calendar set to {args.timeZone ?? 'current'} timezone,
                    disabling selection for all dates before today, and starting
                    with a default date of 1 week from today.
                </p>
            </>;
  },
  args: {
    timeZone: 'Pacific/Auckland'
  },
  argTypes: {
    selected: {
      control: false
    },
    defaultSelected: {
      control: false
    },
    disabled: {
      control: false
    }
  }
}`,...t.parameters?.docs?.source},description:{story:"When working with time zones, use the `TZDate` object exported by this package instead of the native `Date` object.",...t.parameters?.docs?.description}}};try{t.displayName="WithTimeZone",t.__docgenInfo={description:"When working with time zones, use the `TZDate` object exported by this package instead of the native `Date` object.",displayName:"WithTimeZone",props:{}}}catch{}export{s as Default,r as DisabledDates,i as WithSelectedDateAndMonth,t as WithTimeZone,re as default};
