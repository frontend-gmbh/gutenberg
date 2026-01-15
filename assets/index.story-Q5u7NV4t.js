import{a as b,r as y,j as c}from"./iframe-2TvY6Iig.js";import{p as v}from"./index-C6E0zr8m.js";import{a as _,c as A}from"./component-DejoMM0-.js";import{s as I}from"./index-nra9sfHC.js";import{a as d,_ as a}from"./default-i18n-SWt35ZM4.js";import"./preload-helper-Zf8nSx-t.js";import"./index-CXY7LZMH.js";import"./sprintf-CXbjGC2q.js";import"./index-BAuZ3O0F.js";import"./component-OVYdkCXu.js";import"./index-DUXT-3wK.js";import"./is-plain-object-BJ3z7EOF.js";import"./index-CK8hcbFu.js";import"./index-WfDDlHKp.js";import"./index-BjRskdOB.js";import"./index-BjXx3EE5.js";import"./index-CnMiRX9-.js";import"./cubic-bezier-CfzpfWNY.js";import"./T6C2RYFI-BXv3qAIm.js";import"./LVA2YJMS-Bhv8eVm0.js";import"./LMDWO4NN-CH0ROf0T.js";import"./floating-ui.utils.dom-BlKqeV2W.js";import"./dropdown-motion-BMzsbdcX.js";import"./index-DdMUBdEx.js";import"./index-BIvJ8ozV.js";import"./component-BHPgM0nZ.js";import"./index-DfbEstxj.js";import"./index-CLatOAvg.js";import"./use-controlled-value-BWWH94q-.js";import"./index-DYs7VejG.js";import"./floating-ui.react-dom-lQIVkebl.js";import"./index-C7vWhNYT.js";import"./platform-Dx-VEEF7.js";import"./index-g4CI5goq.js";import"./index-mcCfYwbk.js";import"./index-DDuNjadK.js";import"./index-Ct0bDPBV.js";import"./index-B18ctdHe.js";import"./index-CHj7W0Xl.js";import"./v4-CtRu48qb.js";import"./client-DnFbMQ_a.js";import"./index-D4zU5mcb.js";import"./proxy-DY4LNgox.js";import"./close-H02ILkEf.js";import"./menu-dczDR4cj.js";import"./index-DsxFbW9d.js";import"./component-DsqK5SLR.js";import"./component-1lLb42_v.js";import"./emotion-react.browser.esm-T2caqgd_.js";import"./space-BH12THzy.js";import"./hook-UUdG5mum.js";import"./names-BarMHYgS.js";import"./deprecated-36px-size-TcvTyKs_.js";import"./index-CWa7Pedq.js";import"./component-BTcCNOTU.js";import"./plus-Bb-UlsvB.js";import"./more-vertical-Cm1H6tez.js";import"./check-CavNG0Pm.js";import"./component-hxujVv_0.js";import"./index-BcsUY9xg.js";import"./chevron-down-IjYiyrNU.js";import"./index-FlM62Vh8.js";import"./chevron-down-mxzMPu8z.js";import"./input-base-DHmjE6gz.js";import"./component-_Ao540Oz.js";const g=[{label:a("Thumbnail","Image size option for resolution control"),value:"thumbnail"},{label:a("Medium","Image size option for resolution control"),value:"medium"},{label:a("Large","Image size option for resolution control"),value:"large"},{label:a("Full Size","Image size option for resolution control"),value:"full"}];function f({panelId:s,value:l,onChange:r,options:p=g,defaultValue:n=g[0].value,isShownByDefault:i=!0,resetAllFilter:u}){const m=l??n;return b.jsx(_,{hasValue:()=>m!==n,label:d("Resolution"),onDeselect:()=>r(n),isShownByDefault:i,panelId:s,resetAllFilter:u,children:b.jsx(I,{label:d("Resolution"),value:m,options:p,onChange:r,help:d("Select the size of the source image."),size:"__unstable-large"})})}f.__docgenInfo={description:"",methods:[],displayName:"ResolutionTool",props:{options:{defaultValue:{value:`[
	{
		label: _x( 'Thumbnail', 'Image size option for resolution control' ),
		value: 'thumbnail',
	},
	{
		label: _x( 'Medium', 'Image size option for resolution control' ),
		value: 'medium',
	},
	{
		label: _x( 'Large', 'Image size option for resolution control' ),
		value: 'large',
	},
	{
		label: _x( 'Full Size', 'Image size option for resolution control' ),
		value: 'full',
	},
]`,computed:!1},required:!1},defaultValue:{defaultValue:{value:"DEFAULT_SIZE_OPTIONS[ 0 ].value",computed:!0},required:!1},isShownByDefault:{defaultValue:{value:"true",computed:!1},required:!1}}};const Ve={title:"BlockEditor/ResolutionControl",component:f,tags:["status-private"],parameters:{docs:{canvas:{sourceState:"shown"},description:{component:"A control for selecting image resolution with preset size options."}}},argTypes:{value:{control:{type:null},description:"Currently selected resolution value.",table:{type:{summary:"string"}}},onChange:{action:"onChange",control:{type:null},description:"Handles change in resolution selection.",table:{type:{summary:"function"}}},options:{control:"object",description:"Array of resolution options to display.",table:{type:{summary:"array"}}},defaultValue:{control:"radio",options:["thumbnail","medium","large","full"],description:"Default resolution value.",table:{type:{summary:"string"}}},isShownByDefault:{control:"boolean",description:"Whether the control is shown by default in the panel.",table:{type:{summary:"boolean"}}},panelId:{control:{type:null},description:"ID of the parent tools panel.",table:{type:{summary:"string"}}}}},o=({label:s,panelId:l,onChange:r,...p})=>{const[n,i]=y.useReducer((e,t)=>({...e,...t}),{}),{resolution:u}=n;return c(v,{children:c(A,{label:s,panelId:l,resetAll:(e=[])=>{let t={};e.forEach(h=>{t={...t,...h(t)}}),i(t),r(void 0)},children:c(f,{panelId:l,onChange:e=>{i({resolution:e}),r(e)},value:u,resetAllFilter:()=>({resolution:void 0}),...p})})})};o.args={label:"Settings",defaultValue:"full",panelId:"panel-id"};o.__docgenInfo={description:"",methods:[],displayName:"Default"};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`({
  label,
  panelId,
  onChange: onChangeProp,
  ...props
}) => {
  const [attributes, setAttributes] = useReducer((prevState, nextState) => ({
    ...prevState,
    ...nextState
  }), {});
  const {
    resolution
  } = attributes;
  const resetAll = (resetFilters = []) => {
    let newAttributes = {};
    resetFilters.forEach(resetFilter => {
      newAttributes = {
        ...newAttributes,
        ...resetFilter(newAttributes)
      };
    });
    setAttributes(newAttributes);
    onChangeProp(undefined);
  };
  return <Panel>
            <ToolsPanel label={label} panelId={panelId} resetAll={resetAll}>
                <ResolutionTool panelId={panelId} onChange={newValue => {
        setAttributes({
          resolution: newValue
        });
        onChangeProp(newValue);
      }} value={resolution} resetAllFilter={() => ({
        resolution: undefined
      })} {...props} />
            </ToolsPanel>
        </Panel>;
}`,...o.parameters?.docs?.source}}};export{o as Default,Ve as default};
