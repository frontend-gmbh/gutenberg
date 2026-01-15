import{r as A,j as e,f as m,F as T}from"./iframe-2TvY6Iig.js";import{D as s,b as R,a as c,c as j}from"./index-BFkpbvDK.js";import"./preload-helper-Zf8nSx-t.js";const d=[{tokenName:"surface1",abbr:"SF1"},{tokenName:"surface2",abbr:"SF2"},{tokenName:"surface3",abbr:"SF3"},{tokenName:"surface4",abbr:"SF4"},{tokenName:"surface5",abbr:"SF5"},{tokenName:"surface6",abbr:"SF6"},{tokenName:"bgFill1",abbr:"BGF1"},{tokenName:"bgFill2",abbr:"BGF2"},{tokenName:"bgFillInverted1",abbr:"BGFI1"},{tokenName:"bgFillInverted2",abbr:"BGFI2"},{tokenName:"bgFillDark",abbr:"BGFD"},{tokenName:"stroke1",abbr:"ST1"},{tokenName:"stroke2",abbr:"ST2"},{tokenName:"stroke3",abbr:"ST3"},{tokenName:"stroke4",abbr:"ST4"},{tokenName:"fgSurface1",abbr:"FGS1"},{tokenName:"fgSurface2",abbr:"FGS2"},{tokenName:"fgSurface3",abbr:"FGS3"},{tokenName:"fgSurface4",abbr:"FGS4"},{tokenName:"fgFill",abbr:"FGF"},{tokenName:"fgFillInverted",abbr:"FGFI"},{tokenName:"fgFillDark",abbr:"FGFD"}],S=A.forwardRef(function({ramps:i},l){return e("div",{style:{width:"100%",overflowX:"scroll"},ref:l,children:m("div",{style:{display:"grid",gridTemplateColumns:`repeat(${d.length}, minmax(max-content, 1fr))`,fontFamily:'-apple-system, "system-ui", sans-serif',alignItems:"end"},children:[d.map(({tokenName:n,abbr:a})=>e("div",{style:{textAlign:"center",padding:"8px 4px",fontSize:11,fontWeight:500,color:i[0].ramp.fgSurface4},children:a},n)),i.map(({seed:n,ramp:a,warnings:p=[]},o)=>d.map(({tokenName:r})=>m("div",{style:{marginBlockStart:o!==0?4:0,backgroundColor:a[r],display:"grid",gridTemplateRows:"20px 1fr",placeItems:"center",height:r===n.name?60:40,minWidth:32,fontSize:14,outline:p.includes(r)?"2px solid red":"",outlineOffset:"-2px"},children:[r===n.name?e("div",{style:{backgroundColor:n.value,height:20,gridRowStart:1,gridRowEnd:2,display:"grid",placeItems:"center",width:"100%",fontSize:8,fontWeight:500,color:r==="surface2"?a.fgSurface4:a.fgFill},children:"SEED"}):null,["surface3","bgFill1","bgFillInverted1","bgFillDark"].includes(r)?m("span",{style:{padding:"2px 6px",display:"flex",alignItems:"center",gap:2,gridRowStart:r===n.name?2:1,gridRowEnd:3},children:[r==="surface3"?m(T,{children:[e("span",{style:{color:a.fgSurface1},children:"Aa"}),e("span",{style:{color:a.fgSurface2},children:"Aa"}),e("span",{style:{color:a.fgSurface3},children:"Aa"}),e("span",{style:{color:a.fgSurface4},children:"Aa"})]}):null,r==="bgFill1"?e("span",{style:{color:a.fgFill},children:"Aa"}):null,r==="bgFillInverted1"?e("span",{style:{color:a.fgFillInverted},children:"Aa"}):null,r==="bgFillDark"?e("span",{style:{color:a.fgFillDark},children:"Aa"}):null]}):null]},`${n}-${o}-${r}`)))]})})}),w=t=>e("div",{children:t.children}),N={title:"Design System/Theme/Theme Provider/Color Scales",component:w,argTypes:{background:{control:{type:"color",presetColors:["#1e1e1e","#f8f8f8"]}},primary:{control:{type:"color",presetColors:["#3858e9","#069e08","#873eff"]}}},parameters:{controls:{expanded:!0},docs:{canvas:{sourceState:"shown"}}},tags:["status-experimental"]},b={render:t=>{const i=t.background??s.bg,l=t.primary??s.primary,n=R(i),a={seed:{name:"surface2",value:i},ramp:n.ramp},p={seed:{name:"bgFill1",value:l},ramp:c(l,n).ramp},o={seed:{name:"bgFill1",value:s.info},ramp:c(s.info,n).ramp},r={seed:{name:"bgFill1",value:s.success},ramp:c(s.success,n).ramp},F={seed:{name:"bgFill1",value:s.warning},ramp:c(s.warning,n).ramp},k={seed:{name:"bgFill1",value:s.caution},ramp:c(s.caution,n).ramp},O={seed:{name:"bgFill1",value:s.error},ramp:c(s.error,n).ramp},u=j({bgRamp:n});return m("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:[e(S,{ramps:[a,p,o,r,F,k,O]}),u.length===0?e("p",{children:"All accessibility targets met"}):e("ul",{children:u.map(({bgName:h,bgColor:f,fgName:E,fgColor:y,unmetContrast:v,achievedContrast:D},C)=>m("li",{children:[E," (",e("span",{style:{width:20,height:20,backgroundColor:y,display:"inline-block"}}),y,") over ",h," (",e("span",{style:{width:20,height:20,backgroundColor:f,display:"inline-block"}}),f,") did not meet ",v,", achieved just ",D]},C))})]})},args:{}},g={render:()=>{const i=[{background:"#f8f8f8",primary:"#3858e9"},{background:"#1e1e1e",primary:"#3858e9"},{background:"#1d2327",primary:"#2271b1"},{background:"#e5e5e5",primary:"#d64e07"},{background:"#096484",primary:"#52accc"},{background:"#46403c",primary:"#c7a589"},{background:"#413256",primary:"#a3b745"},{background:"#627c83",primary:"#9ebaa0"},{background:"#b43c38",primary:"#dd823b"}].map(({background:l,primary:n})=>{const a=R(l),p={seed:{name:"surface2",value:l},ramp:a.ramp,warnings:a.warnings},o=c(n,a),r={seed:{name:"bgFill1",value:n},ramp:o.ramp,warnings:o.warnings};return[p,r]});return e("div",{style:{display:"flex",flexDirection:"column",gap:16},children:i.map((l,n)=>e(S,{ramps:l},n))})},argTypes:{background:{control:!1},primary:{control:!1}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => {
    const bgSeed = args.background ?? DEFAULT_SEED_COLORS.bg;
    const primarySeed = args.primary ?? DEFAULT_SEED_COLORS.primary;
    const bgRamp = buildBgRamp(bgSeed);
    const bgRampObj = {
      seed: {
        name: 'surface2' as const,
        value: bgSeed
      },
      ramp: bgRamp.ramp
    };
    const primaryRampObj = {
      seed: {
        name: 'bgFill1' as const,
        value: primarySeed
      },
      ramp: buildAccentRamp(primarySeed, bgRamp).ramp
    };
    const infoRampObj = {
      seed: {
        name: 'bgFill1' as const,
        value: DEFAULT_SEED_COLORS.info
      },
      ramp: buildAccentRamp(DEFAULT_SEED_COLORS.info, bgRamp).ramp
    };
    const successRampObj = {
      seed: {
        name: 'bgFill1' as const,
        value: DEFAULT_SEED_COLORS.success
      },
      ramp: buildAccentRamp(DEFAULT_SEED_COLORS.success, bgRamp).ramp
    };
    const warningRampObj = {
      seed: {
        name: 'bgFill1' as const,
        value: DEFAULT_SEED_COLORS.warning
      },
      ramp: buildAccentRamp(DEFAULT_SEED_COLORS.warning, bgRamp).ramp
    };
    const cautionRampObj = {
      seed: {
        name: 'bgFill1' as const,
        value: DEFAULT_SEED_COLORS.caution
      },
      ramp: buildAccentRamp(DEFAULT_SEED_COLORS.caution, bgRamp).ramp
    };
    const errorRampObj = {
      seed: {
        name: 'bgFill1' as const,
        value: DEFAULT_SEED_COLORS.error
      },
      ramp: buildAccentRamp(DEFAULT_SEED_COLORS.error, bgRamp).ramp
    };
    const unmetTargets = checkAccessibleCombinations({
      bgRamp
    });
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '32px'
    }}>
                <RampTable ramps={[bgRampObj, primaryRampObj, infoRampObj, successRampObj, warningRampObj, cautionRampObj, errorRampObj]} />

                {unmetTargets.length === 0 ? <p>All accessibility targets met</p> : <ul>
                        {unmetTargets.map(({
          bgName,
          bgColor,
          fgName,
          fgColor,
          unmetContrast,
          achievedContrast
        }, i) => <li key={i}>
                                    {fgName} (
                                    <span style={{
            width: 20,
            height: 20,
            backgroundColor: fgColor,
            display: 'inline-block'
          }} />
                                    {fgColor}) over {bgName} (
                                    <span style={{
            width: 20,
            height: 20,
            backgroundColor: bgColor,
            display: 'inline-block'
          }} />
                                    {bgColor}) did not meet {unmetContrast},
                                    achieved just {achievedContrast}
                                </li>)}
                    </ul>}
            </div>;
  },
  args: {}
}`,...b.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => {
    const combinations = [
    // WordPress (light / dark)
    {
      background: '#f8f8f8',
      primary: '#3858e9'
    }, {
      background: '#1e1e1e',
      primary: '#3858e9'
    },
    // WP Classic
    {
      background: '#1d2327',
      primary: '#2271b1'
    },
    // WP Light
    {
      background: '#e5e5e5',
      primary: '#d64e07'
    },
    // WP Blue
    {
      background: '#096484',
      primary: '#52accc'
    },
    // WP Coffee
    {
      background: '#46403c',
      primary: '#c7a589'
    },
    // WP Ectoplasm
    {
      background: '#413256',
      primary: '#a3b745'
    },
    // WP Ocean
    {
      background: '#627c83',
      primary: '#9ebaa0'
    },
    // Sunrise
    {
      background: '#b43c38',
      primary: '#dd823b'
    }];
    const ramps = combinations.map(({
      background,
      primary
    }) => {
      const bgRamp = buildBgRamp(background);
      const bgRampObj = {
        seed: {
          name: 'surface2' as const,
          value: background
        },
        ramp: bgRamp.ramp,
        warnings: bgRamp.warnings
      };
      const primaryRamp = buildAccentRamp(primary, bgRamp);
      const primaryRampObj = {
        seed: {
          name: 'bgFill1' as const,
          value: primary
        },
        ramp: primaryRamp.ramp,
        warnings: primaryRamp.warnings
      };
      return [bgRampObj, primaryRampObj];
    });
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }}>
                {ramps.map((r, i) => <RampTable key={i} ramps={r} />)}
            </div>;
  },
  argTypes: {
    background: {
      control: false
    },
    primary: {
      control: false
    }
  }
}`,...g.parameters?.docs?.source}}};export{b as Default,g as SampleCombinations,N as default};
