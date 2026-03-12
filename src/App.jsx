import { useState } from "react";

const PNCLogo = ({ height = 28 }) => (
  <svg height={height} viewBox="0 0 54.239584 16.404167" xmlns="http://www.w3.org/2000/svg" style={{ display: "block" }}>
    <g transform="translate(-224.69559,-274.24421)">
      <g transform="matrix(0.35277777,0,0,-0.35277777,77.705894,295.95648)">
        <g transform="matrix(1.9078072,0,0,1.9078072,-372.79834,-63.067303)">
          <g transform="translate(435.8354,43.6586)">
            <path d="m 0,0 h 0.186 c 0.132,0 0.216,-0.068 0.216,-0.241 0,-0.119 -0.05,-0.271 -0.216,-0.271 H 0 Z m 0,-0.771 h 0.105 c 0.323,0 0.289,-0.187 0.289,-0.404 0,-0.123 0,-0.245 0.055,-0.356 h 0.408 c -0.039,0.076 -0.047,0.42 -0.047,0.539 0,0.329 -0.272,0.352 -0.361,0.356 v 0.009 c 0.272,0.041 0.369,0.216 0.369,0.449 0,0.314 -0.182,0.484 -0.466,0.484 H -0.416 V -1.531 H 0 Z m 0.199,1.73 c -0.878,0 -1.582,-0.7 -1.582,-1.578 0,-0.878 0.704,-1.586 1.582,-1.586 0.874,0 1.574,0.708 1.574,1.586 0,0.878 -0.7,1.578 -1.574,1.578 m 0,-2.868 c -0.713,0 -1.286,0.581 -1.286,1.29 0,0.708 0.573,1.282 1.286,1.282 0.699,0 1.277,-0.574 1.277,-1.282 0,-0.709 -0.578,-1.29 -1.277,-1.29" fill="#f58025"/>
          </g>
          <g transform="translate(426.5178,64.8581)">
            <path d="m 0,0 c -6.478,0 -11.729,-5.251 -11.729,-11.727 0,-6.477 5.251,-11.727 11.729,-11.727 6.476,0 11.727,5.25 11.727,11.727 C 11.727,-5.251 6.476,0 0,0 m -6.308,-5.688 0.004,0.395 c 0.005,1.29 0.541,2.372 1.278,2.567 0.963,0.256 2.261,-0.89 3.562,-3.143 l 1.209,-2.094 c -0.352,-0.061 -0.649,-0.295 -0.879,-0.695 l -3.947,-6.839 c -0.577,-0.995 -0.976,-1.892 -1.201,-2.677 -0.001,0.012 -0.001,0.024 -0.001,0.038 -0.04,1.805 -0.076,5.429 -0.025,12.448 m 4.23,-14.518 -0.344,-0.196 c -1.121,-0.643 -2.323,-0.719 -2.862,-0.177 -0.703,0.706 -0.36,2.403 0.941,4.655 l 1.212,2.099 c 0.231,-0.278 0.58,-0.416 1.04,-0.416 h 7.894 c 1.152,0 2.127,0.101 2.92,0.297 -0.012,-0.006 -0.021,-0.01 -0.033,-0.019 -1.542,-0.935 -4.665,-2.783 -10.768,-6.243 m 7.881,6.818 H 3.382 c 0.123,0.339 0.071,0.711 -0.159,1.108 l -3.948,6.837 c -0.576,0.998 -1.152,1.792 -1.72,2.379 0.013,-0.006 0.023,-0.012 0.034,-0.019 1.581,-0.865 4.737,-2.645 10.787,-6.199 l 0.347,-0.202 c 1.116,-0.651 1.782,-1.654 1.583,-2.391 -0.259,-0.961 -1.9,-1.513 -4.503,-1.513" fill="#f58025"/>
          </g>
          <g transform="translate(449.1442,53.3979)">
            <path d="m 0,0 h -1.176 v 5.564 c 0,1.306 0,1.506 2.494,1.506 C 4.12,7.07 5.663,5.81 5.663,3.522 5.663,0.419 2.8,0 0,0 M 0.377,8.391 H -7.198 -7.371 V 7.638 L -7.218,7.62 C -4.521,7.292 -4.247,6.938 -4.247,5.562 V -8.775 h 3.071 v 7.454 h 1.239 c 2.918,0 8.99,0 8.99,4.843 0,4.869 -5.644,4.869 -8.676,4.869" fill="white"/>
          </g>
          <g transform="translate(475.569,61.7872)">
            <path d="M 0,0 H -1.805 V -13.38 C -2.281,-12.717 -11.409,0 -11.409,0 h -6.516 v -0.75 l 0.151,-0.02 c 2.636,-0.343 2.973,-0.46 2.973,-2.354 v -14.04 h 1.978 v 14.39 c 0.479,-0.665 10.353,-14.39 10.353,-14.39 H 0.173 V 0 Z" fill="white"/>
          </g>
          <g transform="translate(478.0961,53.768)">
            <path d="m 0,0 c 0,-4.686 2.86,-9.415 9.249,-9.415 3.034,0 4.529,0.334 5.917,0.706 l 0.128,0.034 v 1.408 L 15.059,-7.33 c -1.475,-0.396 -2.925,-0.614 -4.082,-0.614 -5.105,0 -7.587,2.81 -7.587,8.593 0,3.865 1.838,6.171 4.916,6.171 2.065,0 3.276,-0.81 3.601,-2.409 l 0.028,-0.138 h 3.382 L 15.292,4.468 C 15.177,5.365 14.348,8.291 8.495,8.291 2.858,8.291 0,5.502 0,0" fill="white"/>
          </g>
        </g>
      </g>
    </g>
  </svg>
);

const accounts = [
  { id:"A001", name:"Margin Account", acctNum:"X1234", settledCash:5200, unsettledCash:-1340, cashMarginFullyMarginable:48000, cashMarginNonMarginable:12800, marketValue:142500, marginDebit:28000, marginEquity:114500, marginEquityPct:80.4, interestRate:7.25, pendingMarginInterest:-312, buyingPowerCash:18200, buyingPowerMargin:36400, houseSurplus:28600, exchangeSurplus:34200, smaSurplus:9200, dtc:6800, houseReqDollar:42750, houseReqPct:30, regT:50, house:30, exchange:25, cshCRBal:18200, hseSurpAmt:28600, hasCall:true, callAmount:4200, callDueDate:"March 14, 2026", isDriver:true, isMarginAccount:true },
  { id:"A002", name:"IRA Margin", acctNum:"X7743", settledCash:3100, unsettledCash:820, cashMarginFullyMarginable:22000, cashMarginNonMarginable:5400, marketValue:67800, marginDebit:0, marginEquity:67800, marginEquityPct:100, interestRate:6.9, pendingMarginInterest:0, buyingPowerCash:12400, buyingPowerMargin:24800, houseSurplus:47460, exchangeSurplus:50850, smaSurplus:4100, dtc:3200, houseReqDollar:20340, houseReqPct:30, regT:50, house:30, exchange:25, cshCRBal:12400, hseSurpAmt:47460, hasCall:false, callAmount:0, callDueDate:null, isDriver:false, isMarginAccount:true },
  { id:"A003", name:"Brokerage Account", acctNum:"X9901", settledCash:8400, unsettledCash:200, cashMarginFullyMarginable:0, cashMarginNonMarginable:0, marketValue:54200, marginDebit:0, marginEquity:54200, marginEquityPct:100, interestRate:0, pendingMarginInterest:0, buyingPowerCash:8400, buyingPowerMargin:8400, houseSurplus:0, exchangeSurplus:0, smaSurplus:0, dtc:0, houseReqDollar:0, houseReqPct:0, regT:0, house:0, exchange:0, cshCRBal:8400, hseSurpAmt:0, hasCall:false, callAmount:0, callDueDate:null, isDriver:false, isMarginAccount:false },
];

const fmt = (n) => { const abs = Math.abs(n); const s = abs.toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2}); return n < 0 ? `-$${s}` : `$${s}`; };
const pct = (n) => `${n}%`;
const tabs = ["Dashboard","Margin Profile","Transfers"];

const C = { navy:"#003366", blue:"#0069aa", blueLight:"#e8f2f9", blueMid:"#d0e8f5", orange:"#f58025", orangeLight:"#fff4ec", orangeMid:"#fde8d0", red:"#cc2200", redLight:"#fff0ee", green:"#1a7a3c", greenLight:"#e8f5ee", gray1:"#f5f6f8", gray2:"#e8eaed", gray3:"#c5cad3", gray4:"#8a93a0", gray5:"#4a5360", text:"#1a2332", white:"#ffffff", border:"#dde1e7" };
const Sbtn = (v="primary",disabled=false) => ({ display:"inline-flex", alignItems:"center", gap:6, padding:"9px 20px", borderRadius:4, fontSize:13, fontWeight:600, cursor:disabled?"not-allowed":"pointer", border:v==="outline"?`1px solid ${C.blue}`:"none", background:v==="primary"?C.blue:v==="orange"?C.orange:v==="outline"?C.white:C.gray1, color:v==="primary"||v==="orange"?C.white:v==="outline"?C.blue:C.gray5, opacity:disabled?0.45:1 });
const Slabel = { fontSize:11, fontWeight:600, color:C.gray4, textTransform:"uppercase", letterSpacing:"0.06em", marginBottom:6 };
const Scard = { background:C.white, border:`1px solid ${C.border}`, borderRadius:8, padding:"20px 24px" };

function Tip({ text, children }) {
  const [show, setShow] = useState(false);
  return (
    <span style={{position:"relative",display:"inline-flex",alignItems:"center"}} onMouseEnter={()=>setShow(true)} onMouseLeave={()=>setShow(false)}>
      {children}
      {show && <span style={{position:"absolute",bottom:"calc(100% + 6px)",left:"50%",transform:"translateX(-50%)",background:C.navy,color:C.white,fontSize:12,padding:"8px 12px",borderRadius:6,width:220,whiteSpace:"normal",lineHeight:1.5,zIndex:999,pointerEvents:"none",boxShadow:"0 4px 16px rgba(0,0,0,0.18)"}}>{text}</span>}
    </span>
  );
}

function Badge({ children, color=C.blue }) {
  return <span style={{background:color+"18",color,fontSize:10,fontWeight:700,padding:"2px 8px",borderRadius:20,border:`1px solid ${color}30`,letterSpacing:"0.03em"}}>{children}</span>;
}

function Alert({ type="error", children }) {
  const m = {error:{bg:C.redLight,border:C.red},warning:{bg:C.orangeLight,border:C.orange},info:{bg:C.blueLight,border:C.blue},success:{bg:C.greenLight,border:C.green}}[type];
  return <div style={{background:m.bg,border:`1px solid ${m.border}`,borderLeft:`4px solid ${m.border}`,borderRadius:6,padding:"12px 16px",marginBottom:16,fontSize:13,color:C.text,lineHeight:1.6}}>{children}</div>;
}

function DataRow({ label, value, tip, positive, negative, highlight }) {
  return (
    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"9px 0",borderBottom:`1px solid ${C.gray2}`,background:highlight?C.blueLight:"transparent"}}>
      <span style={{fontSize:13,color:C.gray5}}>{tip?<Tip text={tip}><span style={{borderBottom:`1px dotted ${C.gray3}`,cursor:"help"}}>{label}</span></Tip>:label}</span>
      <span style={{fontSize:13,fontWeight:600,fontFamily:"monospace",color:negative?C.red:positive?C.green:C.text}}>{value}</span>
    </div>
  );
}

function SectionHead({ children }) {
  return <div style={{fontSize:11,fontWeight:700,color:C.blue,textTransform:"uppercase",letterSpacing:"0.08em",padding:"10px 0 6px",borderBottom:`2px solid ${C.orange}`,marginBottom:8}}>{children}</div>;
}

// ─── TRANSFERS (rebuilt per meeting notes) ────────────────────────────────────
function Transfers({ acct }) {
  const [step, setStep] = useState(1);
  // step 1: account + direction
  // step 2: funding mode + amount
  // step 3: confirm
  const [direction, setDirection] = useState("withdraw"); // withdraw | deposit | internal
  const [fundingMode, setFundingMode] = useState("cash"); // cash | cash-and-margin
  const [amount, setAmount] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  const amt = parseFloat(amount) || 0;
  const cashAvail = acct.cshCRBal;
  const marginAvail = acct.hseSurpAmt;
  const totalAvail = cashAvail + marginAvail;
  const effectiveLimit = fundingMode === "cash" ? cashAvail : totalAvail;

  const cashUsed = Math.min(amt, cashAvail);
  const marginUsed = fundingMode === "cash-and-margin" ? Math.max(0, amt - cashAvail) : 0;
  const exceedsLimit = amt > effectiveLimit;
  const newDebit = Math.max(0, acct.marginDebit - (direction !== "deposit" ? 0 : amt));
  const debitPaydown = direction === "deposit" ? Math.min(amt, acct.marginDebit) : 0;

  const reset = () => { setStep(1); setDirection("withdraw"); setFundingMode("cash"); setAmount(""); setConfirmed(false); };

  if (confirmed) return (
    <div style={{maxWidth:540,margin:"0 auto",textAlign:"center",padding:"48px 20px"}}>
      <div style={{width:68,height:68,borderRadius:"50%",background:C.greenLight,border:`2px solid ${C.green}`,display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 20px",fontSize:32,color:C.green}}>✓</div>
      <div style={{fontSize:22,fontWeight:700,color:C.navy,marginBottom:6}}>Transfer Submitted</div>
      <div style={{color:C.gray4,fontSize:13,marginBottom:28}}>Confirmation #{Math.random().toString(36).slice(2,10).toUpperCase()} · Estimated settlement 1–3 business days</div>
      <div style={{...Scard,textAlign:"left",marginBottom:16}}>
        {[
          ["Account", `${acct.name} ${acct.acctNum}`],
          ["Direction", direction === "withdraw" ? "Withdrawal to Checking" : direction === "deposit" ? "Deposit from Checking" : "Internal Transfer"],
          ["Total Amount", fmt(amt)],
          ...(direction === "withdraw" ? [["Funded from Cash", fmt(cashUsed)], ["Funded from Margin", fmt(marginUsed)]] : []),
          ...(direction === "deposit" && debitPaydown > 0 ? [["Applied to Margin Debit", fmt(debitPaydown)]] : []),
        ].map(([l,v]) => (
          <div key={l} style={{display:"flex",justifyContent:"space-between",padding:"9px 0",borderBottom:`1px solid ${C.gray2}`}}>
            <span style={{fontSize:13,color:C.gray5}}>{l}</span>
            <span style={{fontSize:13,fontWeight:600,fontFamily:"monospace",color:l.includes("Margin")&&v!==fmt(0)?C.orange:C.text}}>{v}</span>
          </div>
        ))}
      </div>
      {marginUsed > 0 && <Alert type="warning">💡 <strong>{fmt(marginUsed)}</strong> of this withdrawal used margin credit and will accrue interest at <strong>{acct.interestRate}% APR</strong>.</Alert>}
      <button style={Sbtn("primary")} onClick={reset}>Make Another Transfer</button>
    </div>
  );

  return (
    <div style={{maxWidth:660,margin:"0 auto"}}>
      <div style={{fontSize:20,fontWeight:700,color:C.navy,marginBottom:2}}>Move Money</div>
      <div style={{fontSize:13,color:C.gray4,marginBottom:24}}>Transfer funds to or from your account</div>

      {/* Step indicator */}
      <div style={{display:"flex",alignItems:"center",marginBottom:28}}>
        {["Select Account","Funding & Amount","Confirm"].map((label,i) => {
          const s = i+1;
          const active = step === s, done = step > s;
          return (
            <div key={s} style={{display:"flex",alignItems:"center",flex:s<3?1:0}}>
              <div style={{width:30,height:30,borderRadius:"50%",background:done?C.green:active?C.blue:C.gray2,color:done||active?C.white:C.gray4,display:"flex",alignItems:"center",justifyContent:"center",fontSize:done?16:13,fontWeight:700,flexShrink:0,transition:"all 0.2s"}}>
                {done ? "✓" : s}
              </div>
              <span style={{fontSize:12,color:active?C.blue:done?C.green:C.gray4,fontWeight:active||done?600:400,margin:"0 8px",whiteSpace:"nowrap"}}>{label}</span>
              {s < 3 && <div style={{flex:1,height:2,background:done?C.green:C.gray2,marginRight:8,transition:"all 0.3s"}}/>}
            </div>
          );
        })}
      </div>

      {/* ── STEP 1: Account selection + direction ── */}
      {step === 1 && (
        <div style={{display:"flex",flexDirection:"column",gap:16}}>
          <div style={Scard}>
            <div style={{fontSize:14,fontWeight:700,color:C.navy,marginBottom:16}}>1. Select Account & Direction</div>

            <div style={{marginBottom:20}}>
              <div style={Slabel}>Account</div>
              <div style={{background:C.gray1,border:`1px solid ${C.border}`,borderRadius:6,padding:"12px 14px",fontSize:14,fontWeight:600,color:C.text,display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                <span>{acct.name} <span style={{color:C.gray4,fontWeight:400}}>{acct.acctNum}</span></span>
                <div style={{display:"flex",gap:6}}>{acct.isMarginAccount&&<Badge color={C.blue}>MARGIN</Badge>}{acct.hasCall&&<Badge color={C.red}>CALL</Badge>}</div>
              </div>
              <div style={{fontSize:11,color:C.gray4,marginTop:4}}>To switch accounts, use the account selector in the top navigation.</div>
            </div>

            <div style={{marginBottom:8}}>
              <div style={Slabel}>Transfer Type</div>
              <div style={{display:"flex",flexDirection:"column",gap:8}}>
                {[
                  ["withdraw","Withdrawal — Investment → Checking","Take money out of this account"],
                  ["deposit","Deposit — Checking → Investment","Add money to this account"],
                  ["internal","Internal Transfer — Investment → Investment","Move between linked investment accounts"],
                ].map(([val,label,desc]) => (
                  <div key={val} onClick={()=>setDirection(val)} style={{padding:"14px 16px",borderRadius:6,border:`2px solid ${direction===val?C.blue:C.border}`,background:direction===val?C.blueLight:C.white,cursor:"pointer",display:"flex",gap:12,alignItems:"flex-start",transition:"all 0.15s"}}>
                    <div style={{width:18,height:18,borderRadius:"50%",border:`2px solid ${direction===val?C.blue:C.gray3}`,background:direction===val?C.blue:C.white,flexShrink:0,marginTop:1,display:"flex",alignItems:"center",justifyContent:"center"}}>
                      {direction===val && <div style={{width:6,height:6,borderRadius:"50%",background:C.white}}/>}
                    </div>
                    <div>
                      <div style={{fontWeight:600,fontSize:13,color:direction===val?C.blue:C.text}}>{label}</div>
                      <div style={{fontSize:12,color:C.gray4,marginTop:2}}>{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <button style={{...Sbtn("primary"),alignSelf:"flex-end",padding:"10px 28px"}} onClick={()=>setStep(2)}>
            Continue →
          </button>
        </div>
      )}

      {/* ── STEP 2: Funding mode + amount ── */}
      {step === 2 && (
        <div style={{display:"flex",flexDirection:"column",gap:16}}>

          {/* Margin account info block — appears after account selection for margin accounts */}
          {acct.isMarginAccount && direction === "withdraw" && (
            <div style={{background:"linear-gradient(135deg,#003366 0%,#0069aa 100%)",borderRadius:8,padding:"20px 24px",color:C.white}}>
              <div style={{fontSize:13,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.08em",opacity:0.75,marginBottom:10}}>Margin Account — Available Funds</div>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1px 1fr 1px 1fr",alignItems:"start",marginBottom:16}}>
                <div style={{paddingRight:16}}>
                  <div style={{fontSize:10,fontWeight:700,textTransform:"uppercase",opacity:0.65,marginBottom:4}}>Cash Available</div>
                  <div style={{fontSize:22,fontWeight:700,fontFamily:"monospace"}}>{fmt(cashAvail)}</div>
                  <div style={{fontSize:10,opacity:0.55,marginTop:2}}>No interest charged</div>
                </div>
                <div style={{background:"rgba(255,255,255,0.2)",margin:"0 16px",alignSelf:"stretch"}}/>
                <div style={{paddingRight:16}}>
                  <div style={{fontSize:10,fontWeight:700,textTransform:"uppercase",opacity:0.65,marginBottom:4}}>Margin Surplus</div>
                  <div style={{fontSize:22,fontWeight:700,fontFamily:"monospace",color:"#fbbf24"}}>{fmt(marginAvail)}</div>
                  <div style={{fontSize:10,opacity:0.55,marginTop:2}}>{acct.interestRate}% APR if used</div>
                </div>
                <div style={{background:"rgba(255,255,255,0.2)",margin:"0 16px",alignSelf:"stretch"}}/>
                <div>
                  <div style={{fontSize:10,fontWeight:700,textTransform:"uppercase",opacity:0.65,marginBottom:4}}>Total Available</div>
                  <div style={{fontSize:22,fontWeight:700,fontFamily:"monospace",color:"#6ee7b7"}}>{fmt(totalAvail)}</div>
                  <div style={{fontSize:10,opacity:0.55,marginTop:2}}>Cash + Margin Surplus</div>
                </div>
              </div>
              <div style={{background:"rgba(255,255,255,0.1)",borderRadius:6,padding:"10px 14px",fontSize:12,lineHeight:1.6}}>
                ℹ️ This is a margin account — it works like a <strong>line of credit</strong> secured by your securities. You can withdraw beyond your cash balance using your margin availability. <strong>Cash is always withdrawn first</strong>; margin is only used after your cash is exhausted.
              </div>
            </div>
          )}

          {/* For deposit: show debit paydown info */}
          {acct.isMarginAccount && direction === "deposit" && acct.marginDebit > 0 && (
            <Alert type="info">
              💡 This account has an outstanding margin debit of <strong>{fmt(acct.marginDebit)}</strong>. Deposited funds will automatically pay down this balance first, reducing your interest charges.
            </Alert>
          )}

          <div style={Scard}>
            <div style={{fontSize:14,fontWeight:700,color:C.navy,marginBottom:20}}>2. Funding Mode & Amount</div>

            {/* Radio: Cash only vs Cash + Margin — only for withdrawals on margin accounts */}
            {acct.isMarginAccount && direction === "withdraw" && (
              <div style={{marginBottom:24}}>
                <div style={{...Slabel,marginBottom:8}}>Withdrawal Source <span style={{color:C.orange,fontSize:10,fontWeight:700,background:C.orangeLight,padding:"2px 8px",borderRadius:20,marginLeft:6}}>Choose how to fund this withdrawal</span></div>

                <div style={{display:"flex",flexDirection:"column",gap:10}}>
                  {/* Cash Only */}
                  <div onClick={()=>setFundingMode("cash")} style={{padding:"16px 18px",borderRadius:8,border:`2px solid ${fundingMode==="cash"?C.blue:C.border}`,background:fundingMode==="cash"?C.blueLight:C.white,cursor:"pointer",transition:"all 0.15s"}}>
                    <div style={{display:"flex",gap:12,alignItems:"flex-start"}}>
                      <div style={{width:20,height:20,borderRadius:"50%",border:`2px solid ${fundingMode==="cash"?C.blue:C.gray3}`,background:fundingMode==="cash"?C.blue:C.white,flexShrink:0,marginTop:2,display:"flex",alignItems:"center",justifyContent:"center"}}>
                        {fundingMode==="cash" && <div style={{width:7,height:7,borderRadius:"50%",background:C.white}}/>}
                      </div>
                      <div style={{flex:1}}>
                        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                          <div style={{fontWeight:700,fontSize:14,color:fundingMode==="cash"?C.blue:C.text}}>Cash Only</div>
                          <div style={{fontFamily:"monospace",fontSize:15,fontWeight:700,color:C.green}}>{fmt(cashAvail)} available</div>
                        </div>
                        <div style={{fontSize:12,color:C.gray5,marginTop:4,lineHeight:1.5}}>Withdraw from your cash balance only. <strong>No margin is used</strong> — no interest charges apply.</div>
                      </div>
                    </div>
                  </div>

                  {/* Cash + Margin */}
                  <div onClick={()=>setFundingMode("cash-and-margin")} style={{padding:"16px 18px",borderRadius:8,border:`2px solid ${fundingMode==="cash-and-margin"?C.orange:C.border}`,background:fundingMode==="cash-and-margin"?C.orangeLight:C.white,cursor:"pointer",transition:"all 0.15s"}}>
                    <div style={{display:"flex",gap:12,alignItems:"flex-start"}}>
                      <div style={{width:20,height:20,borderRadius:"50%",border:`2px solid ${fundingMode==="cash-and-margin"?C.orange:C.gray3}`,background:fundingMode==="cash-and-margin"?C.orange:C.white,flexShrink:0,marginTop:2,display:"flex",alignItems:"center",justifyContent:"center"}}>
                        {fundingMode==="cash-and-margin" && <div style={{width:7,height:7,borderRadius:"50%",background:C.white}}/>}
                      </div>
                      <div style={{flex:1}}>
                        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                          <div style={{fontWeight:700,fontSize:14,color:fundingMode==="cash-and-margin"?C.orange:"#5a3a10"}}>Cash + Margin</div>
                          <div style={{fontFamily:"monospace",fontSize:15,fontWeight:700,color:C.orange}}>{fmt(totalAvail)} available</div>
                        </div>
                        <div style={{fontSize:12,color:C.gray5,marginTop:4,lineHeight:1.5}}>
                          Withdraw beyond your cash balance using your <strong>margin line of credit</strong>. Cash is still used first — margin only activates once cash is exhausted. Interest accrues at <strong>{acct.interestRate}% APR</strong> on any margin portion.
                        </div>
                        {fundingMode==="cash-and-margin" && (
                          <div style={{marginTop:10,padding:"8px 12px",background:"rgba(245,128,37,0.1)",border:`1px solid ${C.orange}30`,borderRadius:6,fontSize:12,color:"#7a4010",lineHeight:1.5}}>
                            ⚠️ <strong>I understand</strong> that selecting this option may result in margin borrowing, which incurs interest charges and carries the risk of a margin call if my account value declines.
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* From / To */}
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12,marginBottom:20}}>
              <div>
                <div style={Slabel}>From</div>
                <div style={{background:C.gray1,border:`1px solid ${C.border}`,borderRadius:6,padding:"10px 14px",fontSize:13,color:C.text}}>
                  {direction==="deposit"||direction==="internal" ? "Checking ****4821" : `${acct.name} ${acct.acctNum}`}
                </div>
              </div>
              <div>
                <div style={Slabel}>To</div>
                <div style={{background:C.gray1,border:`1px solid ${C.border}`,borderRadius:6,padding:"10px 14px",fontSize:13,color:C.text}}>
                  {direction==="withdraw" ? "Checking ****4821" : direction==="deposit" ? `${acct.name} ${acct.acctNum}` : "Select account"}
                </div>
              </div>
            </div>

            {/* Amount */}
            <div style={{marginBottom:20}}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:6}}>
                <div style={Slabel}>Amount</div>
                <div style={{fontSize:11,color:C.gray4}}>
                  Limit: <span style={{fontFamily:"monospace",fontWeight:600,color:exceedsLimit?C.red:C.text}}>{fmt(effectiveLimit)}</span>
                </div>
              </div>
              <div style={{position:"relative"}}>
                <span style={{position:"absolute",left:14,top:"50%",transform:"translateY(-50%)",color:C.gray4,fontSize:18,fontWeight:600}}>$</span>
                <input type="number" value={amount} onChange={e=>setAmount(e.target.value)} placeholder="0.00"
                  style={{width:"100%",border:`2px solid ${exceedsLimit?C.red:amt>0?C.blue:C.border}`,borderRadius:6,padding:"13px 14px 13px 30px",fontSize:22,fontFamily:"monospace",fontWeight:700,color:C.text,background:C.white,outline:"none",boxSizing:"border-box"}}/>
              </div>
              {exceedsLimit && (
                <div style={{color:C.red,fontSize:12,marginTop:5}}>
                  ⚠ Exceeds {fundingMode==="cash"?"cash available":"total available"} ({fmt(effectiveLimit)}){fundingMode==="cash"?". Switch to Cash + Margin to access up to "+fmt(totalAvail)+".":""}
                </div>
              )}
            </div>

            {/* Live funding preview */}
            {amt > 0 && !exceedsLimit && direction === "withdraw" && acct.isMarginAccount && (
              <div style={{background:C.gray1,borderRadius:8,padding:"16px",marginBottom:4}}>
                <div style={{fontSize:11,fontWeight:700,color:C.gray4,textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:12}}>Funding Preview</div>
                <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:12,marginBottom:12}}>
                  {[
                    ["From Cash", fmt(cashUsed), "No interest", C.blue],
                    ["From Margin", fundingMode==="cash-and-margin"?fmt(marginUsed):fmt(0), fundingMode==="cash-and-margin"&&marginUsed>0?`${acct.interestRate}% APR`:"Not used", marginUsed>0?C.orange:C.gray3],
                    ["Total", fmt(amt), "1–3 business days", C.green],
                  ].map(([l,v,sub,color])=>(
                    <div key={l} style={{background:C.white,borderRadius:6,padding:"10px 12px",border:`1px solid ${C.border}`}}>
                      <div style={{fontSize:10,color:C.gray4,fontWeight:600,textTransform:"uppercase",marginBottom:4}}>{l}</div>
                      <div style={{fontSize:15,fontWeight:700,fontFamily:"monospace",color}}>{v}</div>
                      <div style={{fontSize:10,color:C.gray4,marginTop:2}}>{sub}</div>
                    </div>
                  ))}
                </div>
                {amt > 0 && (
                  <div style={{height:6,background:C.gray2,borderRadius:3,overflow:"hidden",display:"flex"}}>
                    <div style={{width:`${Math.min((cashUsed/amt)*100,100)}%`,background:C.blue,transition:"width 0.3s"}}/>
                    <div style={{width:`${(marginUsed/amt)*100}%`,background:C.orange,transition:"width 0.3s"}}/>
                  </div>
                )}
              </div>
            )}

            {/* Recurring / future-date controls — DISABLED for margin accounts */}
            <div style={{marginTop:20,paddingTop:16,borderTop:`1px solid ${C.gray2}`}}>
              <div style={{...Slabel,marginBottom:10}}>Schedule</div>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12,opacity:acct.isMarginAccount?0.45:1,pointerEvents:acct.isMarginAccount?"none":"auto"}}>
                <div>
                  <div style={{fontSize:12,color:C.gray4,marginBottom:6}}>Frequency</div>
                  <div style={{background:C.gray1,border:`1px solid ${C.border}`,borderRadius:6,padding:"10px 14px",fontSize:13,color:C.gray4,display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                    One-time only
                    {acct.isMarginAccount && <span style={{fontSize:10,background:C.gray2,color:C.gray4,padding:"2px 7px",borderRadius:20}}>LOCKED</span>}
                  </div>
                </div>
                <div>
                  <div style={{fontSize:12,color:C.gray4,marginBottom:6}}>Transfer Date</div>
                  <div style={{background:C.gray1,border:`1px solid ${C.border}`,borderRadius:6,padding:"10px 14px",fontSize:13,color:C.gray4,display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                    As soon as possible
                    {acct.isMarginAccount && <span style={{fontSize:10,background:C.gray2,color:C.gray4,padding:"2px 7px",borderRadius:20}}>LOCKED</span>}
                  </div>
                </div>
              </div>
              {acct.isMarginAccount && (
                <div style={{marginTop:8,fontSize:11,color:C.gray4,lineHeight:1.5}}>
                  🔒 Recurring and future-dated transfers are not available for margin accounts. Transfers must be initiated manually to ensure conscious use of your margin line.
                </div>
              )}
            </div>
          </div>

          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <button style={Sbtn("outline")} onClick={()=>setStep(1)}>← Back</button>
            <button
              style={Sbtn("primary", amt<=0||exceedsLimit)}
              onClick={()=>amt>0&&!exceedsLimit&&setStep(3)}
            >
              Review Transfer →
            </button>
          </div>
        </div>
      )}

      {/* ── STEP 3: Confirm ── */}
      {step === 3 && (
        <div style={{display:"flex",flexDirection:"column",gap:16}}>
          <div style={Scard}>
            <div style={{fontSize:16,fontWeight:700,color:C.navy,marginBottom:4}}>Review & Confirm</div>
            <div style={{fontSize:13,color:C.gray4,marginBottom:18}}>Please review the details of your transfer before confirming.</div>

            {[
              ["Account", `${acct.name} ${acct.acctNum}`],
              ["Direction", direction==="withdraw"?"Withdrawal to Checking ****4821":direction==="deposit"?"Deposit from Checking ****4821":"Internal Transfer"],
              ["Funding Mode", direction==="withdraw"&&acct.isMarginAccount?(fundingMode==="cash"?"Cash Only":"Cash + Margin (conscious margin use)"):"Standard"],
              ["Total Amount", fmt(amt)],
              ...(direction==="withdraw"&&acct.isMarginAccount?[["  From Cash", fmt(cashUsed)],["  From Margin", fmt(marginUsed)]]:[] ),
              ["Transfer Date", "As soon as possible"],
              ["Frequency", "One-time"],
              ["Est. Settlement", "1–3 business days"],
            ].map(([label,val])=>(
              <div key={label} style={{display:"flex",justifyContent:"space-between",padding:"10px 0",borderBottom:`1px solid ${C.gray2}`,paddingLeft:label.startsWith("  ")?20:0}}>
                <span style={{fontSize:13,color:label.startsWith("  ")?C.gray4:C.gray5}}>{label.trim()}</span>
                <span style={{fontSize:13,fontWeight:600,fontFamily:"monospace",color:label.includes("Margin")&&marginUsed>0&&!label.includes("Mode")?C.orange:label.includes("Mode")&&fundingMode==="cash-and-margin"?C.orange:C.text}}>{val}</span>
              </div>
            ))}
          </div>

          {marginUsed > 0 && (
            <Alert type="warning">
              ⚠️ <strong>{fmt(marginUsed)}</strong> of this transfer will borrow from your margin line of credit at <strong>{acct.interestRate}% APR</strong>. This is a conscious use of margin — interest will accrue daily on the borrowed amount.
            </Alert>
          )}

          {fundingMode === "cash-and-margin" && marginUsed === 0 && (
            <Alert type="info">
              ✅ Your withdrawal of <strong>{fmt(amt)}</strong> is fully covered by cash. No margin will be used for this transfer.
            </Alert>
          )}

          <div style={{fontSize:11,color:C.gray4,lineHeight:1.6,padding:"0 4px"}}>
            By confirming, you authorize this transfer under applicable margin account terms. You acknowledge that if margin is used, interest charges apply and a margin call may be triggered if your account value declines.
          </div>

          <div style={{display:"flex",justifyContent:"space-between"}}>
            <button style={Sbtn("outline")} onClick={()=>setStep(2)}>← Edit</button>
            <button style={Sbtn(marginUsed>0?"orange":"primary")} onClick={()=>setConfirmed(true)}>
              {marginUsed>0?"⚠ Confirm with Margin":"Confirm Transfer"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// ── EDUCATION SECTION ─────────────────────────────────────────────────────────
function EducationSection() {
  const [calc, setCalc] = useState({equity:10000,loanPct:50,dropPct:40});
  const maxPurchase = calc.equity/(calc.loanPct/100);
  const postDropValue = maxPurchase*(1-calc.dropPct/100);
  const postDropEquity = postDropValue-(maxPurchase-calc.equity);
  const postDropEquityPct = (postDropEquity/postDropValue)*100;
  const houseReq=30, inCall=postDropEquityPct<houseReq;
  return (
    <div style={{marginTop:28}}>
      <div style={{fontSize:16,fontWeight:700,color:C.navy,marginBottom:2}}>Margin Education</div>
      <div style={{fontSize:13,color:C.gray4,marginBottom:16}}>Plain-language guides to help you understand margin investing</div>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:14,marginBottom:20}}>
        {[["📊","What is Margin?","Margin works like a line of credit — similar to a HELOC or credit card — secured by the securities in your account. The available amount fluctuates as market values change.",C.blue],
          ["⚡","How Withdrawals Work","Cash is always withdrawn first. Margin is only accessed after your cash balance is exhausted. You cannot choose to leave cash unused while pulling from margin.",C.navy],
          ["🚨","Margin Calls","If your account value drops and your equity falls below the house maintenance requirement (~30%), a margin call is issued. You must deposit funds or sell positions.",C.red],
          ["🔁","Why No Recurring Transfers?","Recurring or future-dated transfers are disabled on margin accounts to prevent unintentional accumulation of margin debt over time.",C.orange]
        ].map(([icon,title,body,accent])=>(
          <div key={title} style={{...Scard,borderLeft:`4px solid ${accent}`}}>
            <div style={{fontSize:22,marginBottom:8}}>{icon}</div>
            <div style={{fontSize:14,fontWeight:700,color:C.navy,marginBottom:6}}>{title}</div>
            <div style={{fontSize:13,color:C.gray5,lineHeight:1.6}}>{body}</div>
          </div>
        ))}
      </div>
      <div style={{...Scard,borderTop:`3px solid ${C.orange}`}}>
        <div style={{fontSize:15,fontWeight:700,color:C.navy,marginBottom:4}}>Interactive Calculator — Margin Call Scenario</div>
        <div style={{fontSize:13,color:C.gray4,marginBottom:20}}>Adjust sliders to explore when a margin call would be triggered</div>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:20,marginBottom:24}}>
          {[["Starting Cash Equity","equity","$",1000,100000,500],["Reg T Initial Req (%)","loanPct","",25,100,5],["Position Drop (%)","dropPct","",0,80,5]].map(([label,key,prefix,min,max,step])=>(
            <div key={key}>
              <div style={Slabel}>{label}</div>
              <div style={{fontSize:22,fontWeight:700,color:C.navy,fontFamily:"monospace",marginBottom:8}}>{prefix}{calc[key].toLocaleString()}{key!=="equity"?"%":""}</div>
              <input type="range" min={min} max={max} step={step} value={calc[key]} onChange={e=>setCalc(c=>({...c,[key]:parseFloat(e.target.value)}))} style={{width:"100%",accentColor:C.blue,cursor:"pointer"}}/>
            </div>
          ))}
        </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:12,marginBottom:16}}>
          {[["Max Purchase",fmt(maxPurchase),C.blue],["Value After Drop",fmt(postDropValue),C.gray5],["Equity After Drop",fmt(postDropEquity),postDropEquity<0?C.red:C.green],["Equity %",`${postDropEquityPct.toFixed(1)}%`,inCall?C.red:C.green]].map(([label,val,color])=>(
            <div key={label} style={{...Scard,padding:"14px 16px",borderTop:`2px solid ${color}`}}>
              <div style={Slabel}>{label}</div>
              <div style={{fontSize:18,fontWeight:700,fontFamily:"monospace",color}}>{val}</div>
            </div>
          ))}
        </div>
        {inCall?<Alert type="error">⚠️ <strong>Margin Call!</strong> Equity ({postDropEquityPct.toFixed(1)}%) is below the {houseReq}% house requirement. Deposit {fmt(Math.abs(postDropEquity))} or sell positions.</Alert>
               :<Alert type="info">✅ Equity ({postDropEquityPct.toFixed(1)}%) is above the {houseReq}% house requirement. No margin call at this scenario.</Alert>}
      </div>
    </div>
  );
}

// ── DASHBOARD ─────────────────────────────────────────────────────────────────
function Dashboard({ acct, setTab }) {
  return (
    <div>
      {acct.hasCall && <Alert type="error"><strong>Margin Call — {fmt(acct.callAmount)} required by {acct.callDueDate}.</strong>{" "}<span onClick={()=>setTab("Transfers")} style={{color:C.blue,cursor:"pointer",textDecoration:"underline"}}>Deposit now</span> or sell positions to resolve.</Alert>}
      <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:14,marginBottom:20}}>
        {[{label:"Cash Available",value:fmt(acct.buyingPowerCash),sub:"No margin",tip:"Available cash without margin borrowing",accent:C.blue},
          {label:"Buying Power",value:fmt(acct.buyingPowerMargin),sub:"Incl. margin",tip:"Total purchasing power including margin capacity",accent:C.orange,pos:true},
          {label:"Margin Debit",value:fmt(acct.marginDebit),sub:"Outstanding loan",tip:"Amount borrowed. Interest accrues daily.",accent:acct.marginDebit>0?C.red:C.green,neg:acct.marginDebit>0},
          {label:"Net Equity",value:fmt(acct.marginEquity),sub:`${acct.marginEquityPct}% of mkt value`,tip:"Market value minus margin debit",accent:C.green,pos:true},
        ].map(({label,value,sub,tip,accent,pos,neg})=>(
          <div key={label} style={{...Scard,borderTop:`3px solid ${accent}`}}>
            <div style={Slabel}><Tip text={tip}><span style={{borderBottom:`1px dotted ${C.gray3}`,cursor:"help"}}>{label}</span></Tip></div>
            <div style={{fontSize:22,fontWeight:700,fontFamily:"monospace",color:neg?C.red:pos?C.green:C.text,marginBottom:2}}>{value}</div>
            <div style={{fontSize:11,color:C.gray4}}>{sub}</div>
          </div>
        ))}
      </div>
      <div style={{marginBottom:20}}>
        <div style={{fontSize:11,fontWeight:700,color:C.gray4,textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:10}}>Your Accounts</div>
        <div style={{display:"flex",gap:12,flexWrap:"wrap"}}>
          {accounts.map(a=>(
            <div key={a.id} style={{...Scard,minWidth:170,flex:"0 0 auto",borderTop:`3px solid ${a.hasCall?C.red:a.isMarginAccount?C.blue:C.gray3}`,cursor:"pointer"}}>
              <div style={{fontSize:11,color:C.gray4}}>{a.name}</div>
              <div style={{fontSize:13,fontWeight:700,color:C.navy,marginBottom:8}}>{a.acctNum}</div>
              <div style={{fontSize:11,color:C.gray4}}>Market Value</div>
              <div style={{fontSize:18,fontWeight:700,fontFamily:"monospace",color:C.text,marginBottom:8}}>{fmt(a.marketValue)}</div>
              <div style={{display:"flex",gap:6,flexWrap:"wrap"}}>{a.isMarginAccount&&<Badge color={C.blue}>MARGIN</Badge>}{a.hasCall&&<Badge color={C.red}>CALL</Badge>}{a.isDriver&&<Badge color={C.navy}>DRIVER</Badge>}</div>
            </div>
          ))}
        </div>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16}}>
        <div style={Scard}>
          <SectionHead>Portfolio Overview</SectionHead>
          <DataRow label="Market Value" value={fmt(acct.marketValue)} tip="Total market value of margin-eligible positions"/>
          <DataRow label="Margin Equity" value={`${fmt(acct.marginEquity)} (${pct(acct.marginEquityPct)})`} positive={acct.marginEquityPct>30} negative={acct.marginEquityPct<=30} tip="Market value minus margin debit."/>
          <DataRow label="Interest Rate" value={acct.interestRate?pct(acct.interestRate):"N/A"} tip="Annual margin interest rate"/>
          <DataRow label="Pending Interest" value={fmt(acct.pendingMarginInterest)} negative={acct.pendingMarginInterest<0} tip="Accrued interest not yet charged."/>
          <div style={{marginTop:16,display:"flex",gap:8}}>
            <button style={Sbtn("primary")} onClick={()=>setTab("Margin Profile")}>View Profile</button>
            <button style={Sbtn("outline")} onClick={()=>setTab("Transfers")}>Transfer</button>
          </div>
        </div>
        <div style={Scard}>
          <SectionHead>Margin Requirements</SectionHead>
          {[["Reg T (Federal)",acct.regT,"Initial requirement by the Fed."],["House Minimum",acct.house,"Ongoing maintenance requirement."],["Exchange Minimum",acct.exchange,"Exchange-level minimum."]].map(([name,val,tip])=>(
            <div key={name} style={{marginBottom:14}}>
              <div style={{display:"flex",justifyContent:"space-between",marginBottom:5}}>
                <span style={{fontSize:13,color:C.gray5}}><Tip text={tip}><span style={{borderBottom:`1px dotted ${C.gray3}`,cursor:"help"}}>{name}</span></Tip></span>
                <span style={{fontWeight:700,color:C.text,fontFamily:"monospace",fontSize:13}}>{pct(val)}</span>
              </div>
              <div style={{height:6,background:C.gray2,borderRadius:3,overflow:"hidden"}}>
                <div style={{height:"100%",width:`${val}%`,background:val>=50?C.blue:val>=30?C.orange:C.red,borderRadius:3}}/>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── MARGIN PROFILE ────────────────────────────────────────────────────────────
function MarginProfile({ acct, setTab }) {
  const [expandReqs, setExpandReqs] = useState(false);
  const marginablePct = acct.cashMarginFullyMarginable+acct.cashMarginNonMarginable > 0
    ? Math.round(acct.cashMarginFullyMarginable/(acct.cashMarginFullyMarginable+acct.cashMarginNonMarginable)*100) : 0;
  return (
    <div>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:16}}>
        <div>
          <div style={{fontSize:20,fontWeight:700,color:C.navy}}>{acct.name} <span style={{color:C.gray4,fontSize:16}}>{acct.acctNum}</span></div>
          <div style={{display:"flex",gap:8,marginTop:6}}>{acct.isDriver&&<Badge color={C.blue}>DRIVER</Badge>}{acct.hasCall&&<Badge color={C.red}>MARGIN CALL ACTIVE</Badge>}</div>
        </div>
        <button style={Sbtn("orange")} onClick={()=>setTab("Transfers")}>Deposit to Resolve</button>
      </div>
      {acct.hasCall&&<Alert type="error"><strong>Margin Call in Effect.</strong> Deposit <strong>{fmt(acct.callAmount)}</strong> or sell securities by <strong>{acct.callDueDate}</strong>. Failure may result in forced liquidation.</Alert>}
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16,marginBottom:16}}>
        <div style={Scard}>
          <SectionHead>Trading Balance</SectionHead>
          <DataRow label="Settled Cash" value={fmt(acct.settledCash)} positive={acct.settledCash>0} negative={acct.settledCash<0} tip="Fully cleared cash available for use."/>
          <DataRow label="Unsettled Cash" value={fmt(acct.unsettledCash)} positive={acct.unsettledCash>0} negative={acct.unsettledCash<0} tip="Pending cash from trades not yet settled."/>
          <div style={{margin:"12px 0 4px",fontSize:11,fontWeight:700,color:C.gray4,textTransform:"uppercase",letterSpacing:"0.06em"}}>Cash & Margin Holdings</div>
          <DataRow label="Fully Marginable" value={fmt(acct.cashMarginFullyMarginable)} positive tip="Securities eligible for full margin lending."/>
          <DataRow label="Non-Marginable" value={fmt(acct.cashMarginNonMarginable)} tip="Securities ineligible for margin lending."/>
          {marginablePct > 0 && (
            <div style={{marginTop:14,padding:"12px",background:C.gray1,borderRadius:6}}>
              <div style={{display:"flex",justifyContent:"space-between",marginBottom:6}}><span style={{fontSize:11,color:C.gray4,fontWeight:600}}>MARGINABILITY SPLIT</span><span style={{fontSize:11,color:C.blue,fontWeight:700}}>{marginablePct}% eligible</span></div>
              <div style={{height:8,background:C.gray2,borderRadius:4,overflow:"hidden",display:"flex"}}><div style={{flex:acct.cashMarginFullyMarginable,background:C.blue}}/><div style={{flex:acct.cashMarginNonMarginable,background:C.orange}}/></div>
              <div style={{display:"flex",gap:16,marginTop:6}}><span style={{fontSize:11,color:C.blue}}>● Fully marginable</span><span style={{fontSize:11,color:C.orange}}>● Non-marginable</span></div>
            </div>
          )}
        </div>
        <div style={Scard}>
          <SectionHead>WealthScape Balances</SectionHead>
          <DataRow label="Market Value" value={fmt(acct.marketValue)} positive tip="Total market value of all margin-eligible positions."/>
          <DataRow label="Margin Debit Balance" value={fmt(acct.marginDebit)} negative={acct.marginDebit>0} positive={acct.marginDebit===0} tip="Outstanding margin loan. Interest accrues daily."/>
          <DataRow label="Margin Equity" value={`${fmt(acct.marginEquity)} / ${pct(acct.marginEquityPct)}`} positive={acct.marginEquityPct>30} negative={acct.marginEquityPct<=30} tip="Market Value minus Margin Debit."/>
          <DataRow label="Interest Rate" value={acct.interestRate?pct(acct.interestRate):"N/A"} tip="Current annual margin interest rate."/>
          <DataRow label="Pending Interest" value={fmt(acct.pendingMarginInterest)} negative={acct.pendingMarginInterest<0} tip="Accrued interest not yet charged."/>
          <DataRow label="Buying Power" value={fmt(acct.buyingPowerMargin)} highlight positive tip="Total purchasing power including margin borrowing."/>
          <div style={{margin:"12px 0 4px",fontSize:11,fontWeight:700,color:C.gray4,textTransform:"uppercase",letterSpacing:"0.06em"}}>Surplus / Cushion</div>
          <DataRow label="House Surplus" value={fmt(acct.houseSurplus)} positive={acct.houseSurplus>0} negative={acct.houseSurplus<0} tip="Equity above house maintenance requirement."/>
          <DataRow label="Exchange Surplus" value={fmt(acct.exchangeSurplus)} positive={acct.exchangeSurplus>0} tip="Equity above exchange maintenance requirement."/>
          <DataRow label="SMA" value={fmt(acct.smaSurplus)} positive tip="Special Memorandum Account balance."/>
          <div style={{margin:"12px 0 4px",fontSize:11,fontWeight:700,color:C.gray4,textTransform:"uppercase",letterSpacing:"0.06em"}}>Requirements</div>
          <DataRow label="DTC" value={fmt(acct.dtc)} tip="Depository Trust Company collateral requirement."/>
          <DataRow label="House Requirement" value={`${fmt(acct.houseReqDollar)} / ${pct(acct.houseReqPct)}`} negative={acct.marginEquity<acct.houseReqDollar} tip="Minimum equity your account must maintain."/>
        </div>
      </div>
      <div style={{...Scard,marginBottom:16}}>
        <button onClick={()=>setExpandReqs(e=>!e)} style={{background:"none",border:"none",cursor:"pointer",display:"flex",alignItems:"center",gap:8,color:C.blue,fontWeight:700,fontSize:14,padding:0}}>
          <span style={{display:"inline-block",transform:expandReqs?"rotate(90deg)":"rotate(0deg)",transition:"0.2s"}}>▶</span> Requirement Level Details
        </button>
        {expandReqs&&(
          <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:20,marginTop:18}}>
            {[["Reg T (Federal)",pct(acct.regT),"Initial requirement by the Fed."],["House Requirement",pct(acct.house),"Ongoing maintenance requirement."],["Exchange Requirement",pct(acct.exchange),"Exchange-level minimum."]].map(([label,val,tip])=>(
              <div key={label}>
                <div style={{fontSize:11,color:C.gray4,textTransform:"uppercase",fontWeight:600,letterSpacing:"0.06em",marginBottom:8}}><Tip text={tip}><span style={{borderBottom:`1px dotted ${C.gray3}`,cursor:"help"}}>{label}</span></Tip></div>
                <div style={{fontSize:28,fontWeight:700,color:C.navy,fontFamily:"monospace",marginBottom:8}}>{val}</div>
                <div style={{height:6,background:C.gray2,borderRadius:3}}><div style={{height:6,width:val,background:C.blue,borderRadius:3}}/></div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div style={{fontSize:11,fontWeight:700,color:C.gray4,textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:10}}>All Accounts</div>
      <div style={{...Scard,marginBottom:0}}>
        <table style={{width:"100%",borderCollapse:"collapse"}}>
          <thead><tr style={{borderBottom:`2px solid ${C.border}`}}>{["Account","Market Value","Debit","Equity","Equity %","Rate"].map(h=><th key={h} style={{fontSize:11,color:C.gray4,fontWeight:600,textTransform:"uppercase",padding:"8px 12px",textAlign:h==="Account"?"left":"right"}}>{h}</th>)}</tr></thead>
          <tbody>{accounts.map(a=>(
            <tr key={a.id} style={{borderBottom:`1px solid ${C.gray2}`,background:a.id===acct.id?C.blueLight:"transparent"}}>
              <td style={{padding:"12px",fontSize:13,fontWeight:600,color:C.text}}>{a.name} <span style={{color:C.gray4,fontWeight:400}}>{a.acctNum}</span><div style={{marginTop:4,display:"flex",gap:6}}>{a.isMarginAccount&&<Badge color={C.blue}>MARGIN</Badge>}{a.isDriver&&<Badge color={C.navy}>DRIVER</Badge>}{a.hasCall&&<Badge color={C.red}>CALL</Badge>}</div></td>
              <td style={{padding:"12px",textAlign:"right",fontFamily:"monospace",fontSize:13}}>{fmt(a.marketValue)}</td>
              <td style={{padding:"12px",textAlign:"right",fontFamily:"monospace",fontSize:13,color:a.marginDebit>0?C.red:C.green}}>{fmt(a.marginDebit)}</td>
              <td style={{padding:"12px",textAlign:"right",fontFamily:"monospace",fontSize:13}}>{fmt(a.marginEquity)}</td>
              <td style={{padding:"12px",textAlign:"right",fontFamily:"monospace",fontSize:13,color:a.marginEquityPct<30?C.red:C.green}}>{pct(a.marginEquityPct)}</td>
              <td style={{padding:"12px",textAlign:"right",fontFamily:"monospace",fontSize:13}}>{a.interestRate?pct(a.interestRate):"—"}</td>
            </tr>
          ))}</tbody>
        </table>
      </div>
      <EducationSection/>
    </div>
  );
}

// ── APP SHELL ─────────────────────────────────────────────────────────────────
export default function App() {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [selectedAcct, setSelectedAcct] = useState(accounts[0]);
  return (
    <div style={{minHeight:"100vh",background:C.gray1,fontFamily:"-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",color:C.text}}>
      <style>{`*{box-sizing:border-box}input[type=range]{cursor:pointer}input[type=number]::-webkit-inner-spin-button{display:none}`}</style>
      <div style={{background:`linear-gradient(135deg, ${C.navy} 0%, ${C.blue} 100%)`,padding:"0 32px",display:"flex",alignItems:"center",height:60,gap:24}}>
        <PNCLogo height={26}/>
        <div style={{width:1,height:28,background:"rgba(255,255,255,0.25)"}}/>
        <select value={selectedAcct.id} onChange={e=>setSelectedAcct(accounts.find(a=>a.id===e.target.value))} style={{background:"rgba(255,255,255,0.12)",border:"1px solid rgba(255,255,255,0.25)",color:C.white,borderRadius:6,padding:"5px 12px",fontSize:13,cursor:"pointer",outline:"none"}}>
          {accounts.map(a=><option key={a.id} value={a.id} style={{background:C.navy}}>{a.name} {a.acctNum}</option>)}
        </select>
        <div style={{flex:1}}/>
        <div style={{textAlign:"right"}}>
          <div style={{fontSize:11,color:"rgba(255,255,255,0.6)",letterSpacing:"0.06em",textTransform:"uppercase"}}>Total Portfolio</div>
          <div style={{fontSize:18,fontWeight:700,color:C.white,fontFamily:"monospace"}}>{fmt(accounts.reduce((s,a)=>s+a.marketValue,0))}</div>
        </div>
        {selectedAcct.hasCall&&<div onClick={()=>setActiveTab("Margin Profile")} style={{background:C.red,color:C.white,borderRadius:20,padding:"5px 14px",fontSize:12,fontWeight:700,cursor:"pointer"}}>⚠ MARGIN CALL</div>}
      </div>
      <div style={{background:C.white,borderBottom:`1px solid ${C.border}`,padding:"0 32px",display:"flex"}}>
        {tabs.map(t=><button key={t} onClick={()=>setActiveTab(t)} style={{background:"none",border:"none",cursor:"pointer",padding:"14px 20px",fontSize:14,fontWeight:activeTab===t?700:400,color:activeTab===t?C.blue:C.gray5,borderBottom:activeTab===t?`3px solid ${C.orange}`:"3px solid transparent",transition:"all 0.15s"}}>{t}</button>)}
      </div>
      <div style={{maxWidth:1200,margin:"0 auto",padding:"28px 32px"}}>
        {activeTab==="Dashboard"&&<Dashboard acct={selectedAcct} setTab={setActiveTab}/>}
        {activeTab==="Margin Profile"&&<MarginProfile acct={selectedAcct} setTab={setActiveTab}/>}
        {activeTab==="Transfers"&&<Transfers acct={selectedAcct}/>}
      </div>
    </div>
  );
}