import{r as l,j as t}from"./iframe-2TvY6Iig.js";import{p as s}from"./index-C6E0zr8m.js";import{c}from"./component-DejoMM0-.js";import{S as m}from"./scale-tool-BNZo-nb3.js";import"./preload-helper-Zf8nSx-t.js";import"./index-CXY7LZMH.js";import"./default-i18n-SWt35ZM4.js";import"./sprintf-CXbjGC2q.js";import"./index-BAuZ3O0F.js";import"./component-OVYdkCXu.js";import"./index-DUXT-3wK.js";import"./is-plain-object-BJ3z7EOF.js";import"./index-CK8hcbFu.js";import"./index-WfDDlHKp.js";import"./index-BjRskdOB.js";import"./index-BjXx3EE5.js";import"./index-CnMiRX9-.js";import"./cubic-bezier-CfzpfWNY.js";import"./T6C2RYFI-BXv3qAIm.js";import"./LVA2YJMS-Bhv8eVm0.js";import"./LMDWO4NN-CH0ROf0T.js";import"./floating-ui.utils.dom-BlKqeV2W.js";import"./dropdown-motion-BMzsbdcX.js";import"./index-DdMUBdEx.js";import"./index-BIvJ8ozV.js";import"./component-BHPgM0nZ.js";import"./index-DfbEstxj.js";import"./index-CLatOAvg.js";import"./use-controlled-value-BWWH94q-.js";import"./index-DYs7VejG.js";import"./floating-ui.react-dom-lQIVkebl.js";import"./index-C7vWhNYT.js";import"./platform-Dx-VEEF7.js";import"./index-g4CI5goq.js";import"./index-mcCfYwbk.js";import"./index-DDuNjadK.js";import"./index-Ct0bDPBV.js";import"./index-B18ctdHe.js";import"./index-CHj7W0Xl.js";import"./v4-CtRu48qb.js";import"./client-DnFbMQ_a.js";import"./index-D4zU5mcb.js";import"./proxy-DY4LNgox.js";import"./close-H02ILkEf.js";import"./menu-dczDR4cj.js";import"./index-DsxFbW9d.js";import"./component-DsqK5SLR.js";import"./component-1lLb42_v.js";import"./emotion-react.browser.esm-T2caqgd_.js";import"./space-BH12THzy.js";import"./hook-UUdG5mum.js";import"./names-BarMHYgS.js";import"./deprecated-36px-size-TcvTyKs_.js";import"./index-CWa7Pedq.js";import"./component-BTcCNOTU.js";import"./plus-Bb-UlsvB.js";import"./more-vertical-Cm1H6tez.js";import"./check-CavNG0Pm.js";import"./component-hxujVv_0.js";import"./index-BcsUY9xg.js";import"./component-CmFsXMbx.js";import"./radio-group-DckMt_5-.js";import"./ITI7HKP4-_BMwSXRb.js";import"./P2CTZE2T-C4NqLDvb.js";import"./NLEBE274-DHIyTr8t.js";import"./index-Di3oHLN4.js";import"./index-DCGL3fHb.js";import"./component-DqKhWiFy.js";import"./component-CJEJbbVp.js";const bo={title:"BlockEditor/DimensionsTool/ScaleTool",component:m,tags:["status-private"],argTypes:{panelId:{control:!1},onChange:{action:"changed"}}},o=({panelId:r,onChange:e,...n})=>{const[a,p]=l.useState(void 0);return t(s,{children:t(c,{label:"Scale",panelId:r,resetAll:()=>{p(void 0),e(void 0)},children:t(m,{panelId:r,onChange:i=>{p(i),e(i)},value:a,...n})})})};o.args={panelId:"panel-id"};o.__docgenInfo={description:"",methods:[],displayName:"Default"};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`({
  panelId,
  onChange: onChangeProp,
  ...props
}) => {
  const [value, setValue] = useState(undefined);
  const resetAll = () => {
    setValue(undefined);
    onChangeProp(undefined);
  };
  return <Panel>
            <ToolsPanel label="Scale" panelId={panelId} resetAll={resetAll}>
                <ScaleTool panelId={panelId} onChange={nextValue => {
        setValue(nextValue);
        onChangeProp(nextValue);
      }} value={value} {...props} />
            </ToolsPanel>
        </Panel>;
}`,...o.parameters?.docs?.source}}};export{o as Default,bo as default};
