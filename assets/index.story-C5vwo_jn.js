import{a as n,r as d,j as h}from"./iframe-2TvY6Iig.js";import{a as b}from"./default-i18n-SWt35ZM4.js";import{D as f}from"./index-C7vWhNYT.js";import{a as u}from"./index-1ybRlnix.js";import{d as x}from"./index-DfbEstxj.js";import{t as C}from"./index-lo7C_twW.js";import"./preload-helper-Zf8nSx-t.js";import"./platform-Dx-VEEF7.js";import"./index-BjXx3EE5.js";import"./index-DTHXlaSB.js";import"./YORGHBM4-BbXtUlZO.js";import"./LMDWO4NN-CH0ROf0T.js";import"./T7VMP3TM-h-RVnCqR.js";import"./P2CTZE2T-C4NqLDvb.js";import"./LVA2YJMS-Bhv8eVm0.js";import"./J2LQO3EC-KBEnfm3G.js";import"./ITI7HKP4-_BMwSXRb.js";import"./index-CnMiRX9-.js";import"./index-BjRskdOB.js";import"./cubic-bezier-CfzpfWNY.js";import"./T6C2RYFI-BXv3qAIm.js";import"./floating-ui.utils.dom-BlKqeV2W.js";import"./dropdown-motion-BMzsbdcX.js";import"./component-BHPgM0nZ.js";import"./component-OVYdkCXu.js";import"./index-DUXT-3wK.js";import"./is-plain-object-BJ3z7EOF.js";import"./index-CK8hcbFu.js";import"./index-BIvJ8ozV.js";import"./index-CLatOAvg.js";import"./use-controlled-value-BWWH94q-.js";import"./index-DYs7VejG.js";import"./floating-ui.react-dom-lQIVkebl.js";import"./index-g4CI5goq.js";import"./index-mcCfYwbk.js";import"./index-DDuNjadK.js";import"./index-Ct0bDPBV.js";import"./index-B18ctdHe.js";import"./index-WfDDlHKp.js";import"./index-DdMUBdEx.js";import"./index-CHj7W0Xl.js";import"./v4-CtRu48qb.js";import"./client-DnFbMQ_a.js";import"./index-D4zU5mcb.js";import"./proxy-DY4LNgox.js";import"./close-H02ILkEf.js";import"./index-EWCzKj8m.js";import"./BOLVLGVE-B5pULLmI.js";const y=()=>{};function l(m){const{label:r=b("Change matrix alignment"),onChange:a=y,value:t="center",isDisabled:i}=m,o=n.jsx(u.Icon,{value:t});return n.jsx(x,{popoverProps:{placement:"bottom-start"},renderToggle:({onToggle:s,isOpen:p})=>{const g=c=>{!p&&c.keyCode===f&&(c.preventDefault(),s())};return n.jsx(C,{onClick:s,"aria-haspopup":"true","aria-expanded":p,onKeyDown:g,label:r,icon:o,showTooltip:!0,disabled:i})},renderContent:()=>n.jsx(u,{onChange:a,value:t})})}l.__docgenInfo={description:`The alignment matrix control allows users to quickly adjust inner block alignment.

@see https://github.com/WordPress/gutenberg/blob/HEAD/packages/block-editor/src/components/block-alignment-matrix-control/README.md

@example
\`\`\`jsx
function Example() {
  return (
    <BlockControls>
      <BlockAlignmentMatrixControl
        label={ __( 'Change content position' ) }
        value="center"
        onChange={ ( nextPosition ) =>
          setAttributes( { contentPosition: nextPosition } )
        }
      />
    </BlockControls>
  );
}
\`\`\`

@param {Object}   props            Component props.
@param {string}   props.label      Label for the control. Defaults to 'Change matrix alignment'.
@param {Function} props.onChange   Function to execute upon change of matrix state.
@param {string}   props.value      Content alignment location. One of: 'center', 'center center',
                                   'center left', 'center right', 'top center', 'top left',
                                   'top right', 'bottom center', 'bottom left', 'bottom right'.
@param {boolean}  props.isDisabled Whether the control should be disabled.
@return {Element} The BlockAlignmentMatrixControl component.`,methods:[],displayName:"BlockAlignmentMatrixControl"};const ht={title:"BlockEditor/BlockAlignmentMatrixControl",component:l,parameters:{docs:{canvas:{sourceState:"shown"},description:{component:"Renders a control for selecting block alignment using a matrix of alignment options."}}},argTypes:{label:{control:"text",table:{type:{summary:"string"},defaultValue:{summary:"'Change matrix alignment'"}},description:"Label for the control."},onChange:{action:"onChange",control:{type:null},table:{type:{summary:"function"},defaultValue:{summary:"() => {}"}},description:"Function to execute upon a user's change of the matrix state."},isDisabled:{control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},description:"Whether the control should be disabled."},value:{control:{type:null},table:{type:{summary:"string"},defaultValue:{summary:"'center'"}},description:"Content alignment location."}}},e={render:function({onChange:r,...a}){const[t,i]=d.useState();return h(l,{...a,value:t,onChange:(...o)=>{r(...o),i(...o)}})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: function Template({
    onChange,
    ...args
  }) {
    const [value, setValue] = useState();
    return <BlockAlignmentMatrixControl {...args} value={value} onChange={(...changeArgs) => {
      onChange(...changeArgs);
      setValue(...changeArgs);
    }} />;
  }
}`,...e.parameters?.docs?.source}}};export{e as Default,ht as default};
