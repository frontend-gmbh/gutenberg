import{r as s,e as k,f as P,j as S}from"./iframe-2TvY6Iig.js";import{s as ee}from"./sprintf-CXbjGC2q.js";import{a as W,i as N,b as te}from"./default-i18n-SWt35ZM4.js";import{d as v,a as ae,b as ne}from"./index-WQYZzrjz.js";import{s as se,a as re,b as V,c as I,d as oe,e as ie,f as le,g as ce,i as A,h as F,j as de,k as Y,l as $,m as ue,n as fe,o as me,p as ge,q as U,r as G,t as q,u as he,v as pe,w as ve}from"./subYears-wI5xir8w.js";import{s as be}from"./startOfWeek-DRB2PxhV.js";import{B as L}from"./index-CFuMsoxH.js";import{s as _}from"./space-CjrGwnR-.js";import{H as ke}from"./component-CIWI0tS-.js";import{H as De}from"./component-CSsaRVTa.js";import{C as b}from"./config-values-CkVNYk_w.js";import{C as O}from"./colors-values-BSq3yUT9.js";import{b as we}from"./box-sizing-DDIeAART.js";import{i as ye,s as y,T as R,a as Te}from"./constants-C9fF-KJR.js";import{a as K,b as Z}from"./arrow-right-CXXAcKTj.js";const Ce=(t,i,g)=>(A(t,i)||me(t,i))&&(A(t,g)||ge(t,g)),J=t=>ce(t,{hours:0,minutes:0,seconds:0,milliseconds:0}),Se=({weekStartsOn:t=0,viewing:i=new Date,selected:g=[],numberOfMonths:l=1}={})=>{const[d,r]=s.useState(i),o=s.useCallback(()=>r(se()),[r]),D=s.useCallback(e=>r(a=>re(a,e)),[]),u=s.useCallback(()=>r(e=>V(e)),[]),T=s.useCallback(()=>r(e=>I(e,1)),[]),p=s.useCallback(e=>r(a=>oe(a,e)),[]),j=s.useCallback(()=>r(e=>ie(e)),[]),E=s.useCallback(()=>r(e=>le(e,1)),[]),[z,f]=s.useState(g.map(J)),w=()=>f([]),M=s.useCallback(e=>z.findIndex(a=>A(a,e))>-1,[z]),C=s.useCallback((e,a)=>{f(a?Array.isArray(e)?e:[e]:m=>m.concat(Array.isArray(e)?e:[e]))},[]),x=s.useCallback(e=>f(a=>Array.isArray(e)?a.filter(m=>!e.map(h=>h.getTime()).includes(m.getTime())):a.filter(m=>!A(m,e))),[]),B=s.useCallback((e,a)=>M(e)?x(e):C(e,a),[x,M,C]),c=s.useCallback((e,a,m)=>{f(m?F({start:e,end:a}):h=>h.concat(F({start:e,end:a})))},[]),n=s.useCallback((e,a)=>{f(m=>m.filter(h=>!F({start:e,end:a}).map(X=>X.getTime()).includes(h.getTime())))},[]),H=s.useMemo(()=>de({start:$(d),end:Y(I(d,l-1))}).map(e=>ue({start:$(e),end:Y(e)},{weekStartsOn:t}).map(a=>F({start:be(a,{weekStartsOn:t}),end:fe(a,{weekStartsOn:t})}))),[d,t,l]);return{clearTime:J,inRange:Ce,viewing:d,setViewing:r,viewToday:o,viewMonth:D,viewPreviousMonth:u,viewNextMonth:T,viewYear:p,viewPreviousYear:j,viewNextYear:E,selected:z,setSelected:f,clearSelected:w,isSelected:M,select:C,deselect:x,toggle:B,selectRange:c,deselectRange:n,calendar:H}},Oe=k("div",{target:"e105ri6r7"})(we,";"),_e=k(ke,{target:"e105ri6r6"})("column-gap:",_(2),";display:grid;grid-template-columns:0.5fr repeat( 5, 1fr ) 0.5fr;justify-items:center;margin-bottom:",_(4),";"),ze=k(L,{target:"e105ri6r5"})({name:"sarfoe",styles:"grid-column:1/2"}),Me=k(L,{target:"e105ri6r4"})({name:"1v98r3z",styles:"grid-column:7/8"}),xe=k(De,{target:"e105ri6r3"})("font-size:",b.fontSize,";font-weight:",b.fontWeight,";grid-column:2/7;strong{font-weight:",b.fontWeightHeading,";}"),We=k("div",{target:"e105ri6r2"})("column-gap:",_(2),";display:grid;grid-template-columns:0.5fr repeat( 5, 1fr ) 0.5fr;justify-items:center;row-gap:",_(2),";"),Ie=k("div",{target:"e105ri6r1"})("color:",O.theme.gray[700],";font-size:",b.fontSize,";line-height:",b.fontLineHeightBase,";"),Ae=k(L,{shouldForwardProp:t=>!["column","isSelected","isToday","hasEvents"].includes(t),target:"e105ri6r0"})("grid-column:",t=>t.column,";position:relative;justify-content:center;",t=>t.disabled&&`
		pointer-events: none;
		`," &&&{border-radius:",b.radiusRound,";height:",_(7),";width:",_(7),";font-weight:400;",t=>t.isSelected&&`
				background: ${O.theme.accent};

				&,
				&:hover:not(:disabled, [aria-disabled=true]) {
					color: ${O.theme.accentInverted};
				}

				&:focus:not(:disabled),
				&:focus:not(:disabled) {
					border: ${b.borderWidthFocus} solid currentColor;
				}

				/* Highlight the selected day for high-contrast mode */
				&::after {
					content: '';
					position: absolute;
					pointer-events: none;
					inset: 0;
					border-radius: inherit;
					border: 1px solid transparent;
				}
			`," ",t=>!t.isSelected&&t.isToday&&`
			background: ${O.theme.gray[200]};
			`,";}",t=>t.hasEvents&&`
		::before {
			border: 2px solid ${t.isSelected?O.theme.accentInverted:O.theme.accent};
			border-radius: ${b.radiusRound};
			content: " ";
			left: 50%;
			position: absolute;
			transform: translate(-50%, 9px);
		}
		`,";");function Q({currentDate:t,onChange:i,events:g=[],isInvalidDate:l,onMonthPreviewed:d,startOfWeek:r=0}){const o=ye(t??new Date),{calendar:D,viewing:u,setSelected:T,setViewing:p,isSelected:j,viewPreviousMonth:E,viewNextMonth:z}=Se({selected:[y(o)],viewing:y(o),weekStartsOn:r}),[f,w]=s.useState(y(o)),[M,C]=s.useState(!1),[x,B]=s.useState(t);return t!==x&&(B(t),T([y(o)]),p(y(o)),w(y(o))),P(Oe,{className:"components-datetime__date",role:"application","aria-label":W("Calendar"),children:[P(_e,{children:[S(ze,{icon:N()?K:Z,variant:"tertiary","aria-label":W("View previous month"),onClick:()=>{E(),w(V(f));const c=V(u);d?.(v(R,c,-c.getTimezoneOffset()))},size:"compact"}),P(xe,{level:3,children:[S("strong",{children:v("F",u,-u.getTimezoneOffset())})," ",v("Y",u,-u.getTimezoneOffset())]}),S(Me,{icon:N()?Z:K,variant:"tertiary","aria-label":W("View next month"),onClick:()=>{z(),w(I(f,1));const c=I(u,1);d?.(v(R,c,-c.getTimezoneOffset()))},size:"compact"})]}),P(We,{onFocus:()=>C(!0),onBlur:()=>C(!1),children:[D[0][0].map(c=>S(Ie,{children:v("D",c,-c.getTimezoneOffset())},c.toString())),D[0].map(c=>c.map((n,H)=>U(n,u)?S(Pe,{day:n,column:H+1,isSelected:j(n),isFocusable:A(n,f),isFocusAllowed:M,isToday:G(n,y(new Date)),isInvalid:l?l(n):!1,numEvents:g.filter(e=>G(e.date,n)).length,onClick:()=>{T([n]),w(n);const e=Te(o,{year:n.getFullYear(),month:n.getMonth(),date:n.getDate()});i?.(ae(R,e))},onKeyDown:e=>{let a;if(e.key==="ArrowLeft"&&(a=q(n,N()?1:-1)),e.key==="ArrowRight"&&(a=q(n,N()?-1:1)),e.key==="ArrowUp"&&(a=he(n)),e.key==="ArrowDown"&&(a=pe(n,1)),e.key==="PageUp"&&(a=V(n)),e.key==="PageDown"&&(a=I(n,1)),e.key==="Home"){const h=(n.getDay()-r+7)%7;a=ve(n,h)}if(e.key==="End"){const m=n.getDay(),h=(r+6-m)%7;a=q(n,h)}a&&(e.preventDefault(),w(a),U(a,u)||(p(a),d?.(v(R,a,-a.getTimezoneOffset()))))}},n.toString()):null))]})]})}function Pe({day:t,column:i,isSelected:g,isFocusable:l,isFocusAllowed:d,isToday:r,isInvalid:o,numEvents:D,onClick:u,onKeyDown:T}){const p=s.useRef();return s.useEffect(()=>{p.current&&l&&d&&p.current.focus()},[l]),S(Ae,{__next40pxDefaultSize:!0,ref:p,className:"components-datetime__date__day",disabled:o,tabIndex:l?0:-1,"aria-label":Ne(t,g,r,D),column:i,isSelected:g,isToday:r,hasEvents:D>0,onClick:u,onKeyDown:T,children:v("j",t,-t.getTimezoneOffset())})}function Ne(t,i,g,l){const{formats:d}=ne(),o=[v(d.date,t,-t.getTimezoneOffset())];return i&&o.push(W("Selected")),g&&o.push(W("Today")),l>0&&o.push(ee(te("There is %d event","There are %d events",l),l)),o.join(". ")}try{Q.displayName="DatePicker",Q.__docgenInfo={description:`DatePicker is a React component that renders a calendar for date selection.

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
dot on the day of the event.`,name:"events",required:!1,type:{name:"DatePickerEvent[]"}},startOfWeek:{defaultValue:{value:"0"},description:"The day that the week should start on. 0 for Sunday, 1 for Monday, etc.",name:"startOfWeek",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"5"},{value:"2"},{value:"3"},{value:"4"},{value:"6"}]}}}}}catch{}function Je(t){const i=new Date;return i.setDate(i.getDate()+t),i}function Qe(t){return t.getDay()===0||t.getDay()===6}export{Q as D,Je as d,Qe as i};
