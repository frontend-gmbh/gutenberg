import{r as s,j as o}from"./iframe-2TvY6Iig.js";import{p as d}from"./index-C6E0zr8m.js";import{c}from"./component-DejoMM0-.js";import{W as n}from"./width-height-tool-De6ArObb.js";import"./preload-helper-Zf8nSx-t.js";import"./index-CXY7LZMH.js";import"./default-i18n-SWt35ZM4.js";import"./sprintf-CXbjGC2q.js";import"./index-BAuZ3O0F.js";import"./component-OVYdkCXu.js";import"./index-DUXT-3wK.js";import"./is-plain-object-BJ3z7EOF.js";import"./index-CK8hcbFu.js";import"./index-WfDDlHKp.js";import"./index-BjRskdOB.js";import"./index-BjXx3EE5.js";import"./index-CnMiRX9-.js";import"./cubic-bezier-CfzpfWNY.js";import"./T6C2RYFI-BXv3qAIm.js";import"./LVA2YJMS-Bhv8eVm0.js";import"./LMDWO4NN-CH0ROf0T.js";import"./floating-ui.utils.dom-BlKqeV2W.js";import"./dropdown-motion-BMzsbdcX.js";import"./index-DdMUBdEx.js";import"./index-BIvJ8ozV.js";import"./component-BHPgM0nZ.js";import"./index-DfbEstxj.js";import"./index-CLatOAvg.js";import"./use-controlled-value-BWWH94q-.js";import"./index-DYs7VejG.js";import"./floating-ui.react-dom-lQIVkebl.js";import"./index-C7vWhNYT.js";import"./platform-Dx-VEEF7.js";import"./index-g4CI5goq.js";import"./index-mcCfYwbk.js";import"./index-DDuNjadK.js";import"./index-Ct0bDPBV.js";import"./index-B18ctdHe.js";import"./index-CHj7W0Xl.js";import"./v4-CtRu48qb.js";import"./client-DnFbMQ_a.js";import"./index-D4zU5mcb.js";import"./proxy-DY4LNgox.js";import"./close-H02ILkEf.js";import"./menu-dczDR4cj.js";import"./index-DsxFbW9d.js";import"./component-DsqK5SLR.js";import"./component-1lLb42_v.js";import"./emotion-react.browser.esm-T2caqgd_.js";import"./space-BH12THzy.js";import"./hook-UUdG5mum.js";import"./names-BarMHYgS.js";import"./deprecated-36px-size-TcvTyKs_.js";import"./index-CWa7Pedq.js";import"./component-BTcCNOTU.js";import"./plus-Bb-UlsvB.js";import"./more-vertical-Cm1H6tez.js";import"./check-CavNG0Pm.js";import"./component-hxujVv_0.js";import"./index-BcsUY9xg.js";import"./index-SpwWwokz.js";import"./index-B1Zqj_6Z.js";import"./input-base-DHmjE6gz.js";import"./component-_Ao540Oz.js";import"./use-gesture-react.esm-BHlZEJgV.js";import"./reset-DAroYZ4v.js";import"./use-controlled-state-BATXSwMo.js";import"./strings-BwS0nFKE.js";import"./index-COsfWvJn.js";const Bt={title:"BlockEditor/DimensionsTool/WidthHeightTool",component:n,tags:["status-private"],argTypes:{panelId:{control:!1},onChange:{action:"changed"}}},r={},t=({panelId:p,onChange:i,...a})=>{const[l,e]=s.useState(r);return o(d,{children:o(c,{label:"Width & Height",panelId:p,resetAll:()=>{e(r),i(r)},children:o(n,{panelId:p,onChange:m=>{e(m),i(m)},value:l,...a})})})};t.args={panelId:"panel-id"};t.__docgenInfo={description:"",methods:[],displayName:"Default"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`({
  panelId,
  onChange: onChangeProp,
  ...props
}) => {
  const [value, setValue] = useState(EMPTY_OBJECT);
  const resetAll = () => {
    setValue(EMPTY_OBJECT);
    onChangeProp(EMPTY_OBJECT);
  };
  return <Panel>
            <ToolsPanel label="Width & Height" panelId={panelId} resetAll={resetAll}>
                <WidthHeightTool panelId={panelId} onChange={nextValue => {
        setValue(nextValue);
        onChangeProp(nextValue);
      }} value={value} {...props} />
            </ToolsPanel>
        </Panel>;
}`,...t.parameters?.docs?.source}}};export{t as Default,Bt as default};
