import React, { useState } from "react";

const accounts = [
  {
    id: "A001",
    name: "Margin Account — 4821",
    // Trading Balance
    settledCash: 5200,
    unsettledCash: -1340,
    cashMarginFullyMarginable: 48000,
    cashMarginNonMarginable: 12800,
    // WealthScape
    marketValue: 142500,
    marginDebit: 28000,
    marginEquity: 114500,
    marginEquityPct: 80.4,
    interestRate: 7.25,
    pendingMarginInterest: -312,
    buyingPowerCash: 18200,
    buyingPowerMargin: 36400,
    houseSurplus: 28600,
    exchangeSurplus: 34200,
    smaSurplus: 9200,
    dtc: 6800,
    houseReqDollar: 42750,
    houseReqPct: 30,
    // legacy
    regT: 50,
    house: 30,
    exchange: 25,
    maintenanceReqDollar: 42750,
    maintenanceReqPct: 30,
    sma: 9200,
    hasCall: true,
    callAmount: 4200,
    callDueDate: "March 14, 2026",
    isDriver: true,
  },
  {
    id: "A002",
    name: "IRA Margin — 7743",
    settledCash: 3100,
    unsettledCash: 820,
    cashMarginFullyMarginable: 22000,
    cashMarginNonMarginable: 5400,
    marketValue: 67800,
    marginDebit: 0,
    marginEquity: 67800,
    marginEquityPct: 100,
    interestRate: 6.9,
    pendingMarginInterest: 0,
    buyingPowerCash: 12400,
    buyingPowerMargin: 24800,
    houseSurplus: 47460,
    exchangeSurplus: 50850,
    smaSurplus: 4100,
    dtc: 3200,
    houseReqDollar: 20340,
    houseReqPct: 30,
    regT: 50,
    house: 30,
    exchange: 25,
    maintenanceReqDollar: 20340,
    maintenanceReqPct: 30,
    sma: 4100,
    hasCall: false,
    callAmount: 0,
    callDueDate: null,
    isDriver: false,
  },
];

const fmt = (n) =>
  n < 0 ? `-$${Math.abs(n).toLocaleString()}` : `$${n.toLocaleString()}`;
const pct = (n) => `${n}%`;
const tabs = ["Dashboard", "Margin Profile", "Transfers", "Education"];

// ─── Tooltip ──────────────────────────────────────────────────────────────────
function Tooltip({ text, children }) {
  const [show, setShow] = useState(false);
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!show) return;
    const handler = () => setShow(false);
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, [show]);
  return (
    <span
      ref={ref}
      onClick={(e) => { e.stopPropagation(); setShow((s) => !s); }}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      style={{ display: "inline-block", cursor: "help", position: "relative" }}
    >
      {children}
      {show && (
        <span style={{
          position: "fixed",
          background: "#0f1923",
          color: "#c8d8e8",
          fontSize: 12,
          padding: "8px 12px",
          borderRadius: 8,
          maxWidth: 240,
          whiteSpace: "normal",
          lineHeight: 1.5,
          border: "1px solid #2a3a4a",
          boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
          zIndex: 9999,
          pointerEvents: "none",
          transform: "translateX(-50%)",
          left: ref.current
            ? ref.current.getBoundingClientRect().left + ref.current.getBoundingClientRect().width / 2
            : "50%",
          top: ref.current
            ? ref.current.getBoundingClientRect().top - 8 + window.scrollY
            : 0,
          marginTop: -4,
          translate: "0 -100%",
        }}>
          {text}
          <span style={{
            position: "absolute", bottom: -5, left: "50%",
            transform: "translateX(-50%)", width: 8, height: 8,
            background: "#0f1923", border: "1px solid #2a3a4a",
            borderTop: "none", borderLeft: "none", rotate: "45deg",
          }} />
        </span>
      )}
    </span>
  );
}

// ─── Card ─────────────────────────────────────────────────────────────────────
function Card({ children, style = {}, accent = false }) {
  return (
    <div style={{
      background: accent ? "linear-gradient(135deg,#0e2235 0%,#0a1a28 100%)" : "#0a1520",
      border: `1px solid ${accent ? "#1e5080" : "#162030"}`,
      borderRadius: 12,
      padding: "20px 22px",
      ...style,
    }}>
      {children}
    </div>
  );
}

// ─── Stat ─────────────────────────────────────────────────────────────────────
function Stat({ label, value, sub, tip, positive, negative, large }) {
  return (
    <div>
      <div style={{ color: "#4a7090", fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 4 }}>
        <Tooltip text={tip || label}>{label} <span style={{ borderBottom: "1px dotted #3a5570" }}>?</span></Tooltip>
      </div>
      <div style={{
        fontSize: large ? 26 : 20,
        fontWeight: 700,
        color: negative ? "#e05a5a" : positive ? "#3dd68c" : "#e2eef8",
        fontFamily: "'DM Mono', monospace",
        letterSpacing: "-0.5px",
      }}>
        {value}
      </div>
      {sub && <div style={{ color: "#3a6070", fontSize: 11, marginTop: 2 }}>{sub}</div>}
    </div>
  );
}

const btnStyle = (bg, color) => ({
  background: bg, color,
  border: `1px solid ${color}22`,
  borderRadius: 7, padding: "9px 16px",
  cursor: "pointer", fontSize: 12,
  fontWeight: 600, letterSpacing: "0.02em",
});

// ─── Section divider with label ───────────────────────────────────────────────
function SectionLabel({ children }) {
  return (
    <div style={{
      display: "flex", alignItems: "center", gap: 10, marginBottom: 12,
    }}>
      <div style={{ color: "#4a9de0", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>
        {children}
      </div>
      <div style={{ flex: 1, height: 1, background: "#1a2e40" }} />
    </div>
  );
}

// ─── Profile row: label + value + optional tooltip ────────────────────────────
function ProfileRow({ label, value, tip, negative, positive, highlight, indent }) {
  return (
    <div style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: indent ? "7px 8px 7px 22px" : "7px 8px",
      borderBottom: "1px solid #0e1c28",
      background: highlight ? "rgba(74,157,224,0.05)" : "transparent",
      borderRadius: 4,
    }}>
      <span style={{ color: "#7aa8c0", fontSize: 12 }}>
        {tip ? <Tooltip text={tip}>{label} <span style={{ borderBottom: "1px dotted #3a5570", fontSize: 10 }}>?</span></Tooltip> : label}
      </span>
      <span style={{
        fontFamily: "'DM Mono', monospace",
        fontSize: 13,
        fontWeight: 600,
        color: negative ? "#e05a5a" : positive ? "#3dd68c" : "#e2eef8",
      }}>
        {value}
      </span>
    </div>
  );
}

// ─── DASHBOARD ────────────────────────────────────────────────────────────────
function Dashboard({ acct, setTab }) {
  return (
    <div>
      {acct.hasCall && (
        <div style={{
          background: "linear-gradient(90deg,#3a0d0d,#1e0808)",
          border: "1px solid #7a2020", borderRadius: 10,
          padding: "14px 20px", marginBottom: 20,
          display: "flex", alignItems: "center", gap: 14,
        }}>
          <span style={{ fontSize: 22 }}>⚠️</span>
          <div style={{ flex: 1 }}>
            <div style={{ color: "#ff7070", fontWeight: 700, fontSize: 14 }}>Margin Call Detected</div>
            <div style={{ color: "#cc5050", fontSize: 12, marginTop: 2 }}>
              {fmt(acct.callAmount)} required by {acct.callDueDate}. Please call <strong style={{ color: "#ff9090" }}>1-800-MARGIN-1</strong> or take action in Margin Profile.
            </div>
          </div>
          <button onClick={() => setTab("Margin Profile")} style={{ background: "#7a2020", color: "#ffaaaa", border: "none", borderRadius: 7, padding: "8px 14px", cursor: "pointer", fontSize: 12, fontWeight: 600 }}>
            View Details
          </button>
        </div>
      )}

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 14, marginBottom: 20 }}>
        <Card><Stat label="Cash Available" value={fmt(acct.buyingPowerCash)} tip="Available cash without using margin" /></Card>
        <Card><Stat label="Buying Power" value={fmt(acct.buyingPowerMargin)} tip="Includes margin borrowing capacity" sub="w/ margin" /></Card>
        <Card><Stat label="Margin Debit" value={fmt(acct.marginDebit)} tip="Outstanding margin loan balance" negative={acct.marginDebit > 0} /></Card>
        <Card><Stat label="Net Equity" value={fmt(acct.marginEquity)} tip="Market Value minus Margin Debit" positive={acct.marginEquity > 0} /></Card>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
        <Card style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ color: "#4a7090", fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>Portfolio Overview</div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Stat label="Market Value" value={fmt(acct.marketValue)} tip="Total value of eligible margin assets" />
            <Stat label="Interest Rate" value={pct(acct.interestRate)} tip="Current annual margin interest rate" />
          </div>
          <div style={{ height: 1, background: "#162030" }} />
          <div style={{ display: "flex", gap: 10 }}>
            <button onClick={() => setTab("Margin Profile")} style={btnStyle("#1e4060", "#7ab8e0")}>View Margin Profile</button>
            <button onClick={() => setTab("Transfers")} style={btnStyle("#0e3020", "#3dd68c")}>Make a Transfer</button>
          </div>
        </Card>
        <Card>
          <div style={{ color: "#4a7090", fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 14 }}>Requirement Levels</div>
          {[["Reg T (Fed)", acct.regT], ["House", acct.house], ["Exchange", acct.exchange]].map(([name, val]) => (
            <div key={name} style={{ marginBottom: 12 }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                <span style={{ color: "#8aa8c0", fontSize: 12 }}>{name}</span>
                <span style={{ color: "#e2eef8", fontSize: 12, fontFamily: "'DM Mono', monospace" }}>{pct(val)}</span>
              </div>
              <div style={{ height: 5, background: "#162030", borderRadius: 3 }}>
                <div style={{ height: 5, width: `${val}%`, background: val >= 50 ? "#4a9de0" : val >= 30 ? "#f0a830" : "#e05a5a", borderRadius: 3, transition: "width 0.4s" }} />
              </div>
            </div>
          ))}
        </Card>
      </div>
      <div style={{ marginTop: 10, color: "#2a4050", fontSize: 11, textAlign: "right" }}>
        Last refreshed: {new Date().toLocaleTimeString()} · Balances reflect available API fields
      </div>
    </div>
  );
}

// ─── MARGIN PROFILE ───────────────────────────────────────────────────────────
function MarginProfile({ acct, setTab }) {
  const [expandedReqs, setExpandedReqs] = useState(false);

  return (
    <div>
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 18 }}>
        <div>
          <div style={{ color: "#4a7090", fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>Margin Profile</div>
          <div style={{ color: "#e2eef8", fontSize: 20, fontWeight: 700, marginTop: 2 }}>{acct.name}</div>
          {acct.isDriver && (
            <span style={{ background: "#1e4060", color: "#7ab8e0", fontSize: 10, padding: "2px 8px", borderRadius: 20, fontWeight: 700, letterSpacing: "0.05em" }}>
              DRIVING ACCOUNT
            </span>
          )}
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <button onClick={() => setTab("Transfers")} style={btnStyle("#0e3020", "#3dd68c")}>Deposit to Paydown</button>
          <button onClick={() => setTab("Education")} style={btnStyle("#1a1a30", "#8888cc")}>Learn More</button>
        </div>
      </div>

      {/* Margin Call Banner */}
      {acct.hasCall && (
        <div style={{ background: "linear-gradient(90deg,#3a0d0d,#1e0808)", border: "1px solid #7a2020", borderRadius: 10, padding: "16px 20px", marginBottom: 20 }}>
          <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
            <span style={{ fontSize: 28 }}>⚠️</span>
            <div style={{ flex: 1 }}>
              <div style={{ color: "#ff7070", fontWeight: 700, fontSize: 15, marginBottom: 6 }}>In Margin Call</div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 14, marginBottom: 14 }}>
                <div>
                  <div style={{ color: "#883030", fontSize: 11, textTransform: "uppercase", letterSpacing: "0.07em" }}>Amount Required</div>
                  <div style={{ color: "#ff8080", fontSize: 20, fontWeight: 700, fontFamily: "'DM Mono', monospace" }}>{fmt(acct.callAmount)}</div>
                </div>
                <div>
                  <div style={{ color: "#883030", fontSize: 11, textTransform: "uppercase", letterSpacing: "0.07em" }}>Due By</div>
                  <div style={{ color: "#ff8080", fontSize: 16, fontWeight: 700 }}>{acct.callDueDate}</div>
                </div>
                <div>
                  <div style={{ color: "#883030", fontSize: 11, textTransform: "uppercase", letterSpacing: "0.07em" }}>Consequence</div>
                  <div style={{ color: "#cc5050", fontSize: 12 }}>Forced liquidation if unresolved</div>
                </div>
              </div>
              <div style={{ display: "flex", gap: 8 }}>
                <button onClick={() => setTab("Transfers")} style={btnStyle("#7a1010", "#ffaaaa")}>Deposit Cash</button>
                <button style={btnStyle("#3a1010", "#cc7070")}>Sell Positions</button>
                <button style={btnStyle("#1a0a0a", "#995050")}>Call Support</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Two-column layout: Trading Balance | WealthScape */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 20 }}>

        {/* ── Trading Balance ── */}
        <Card>
          <SectionLabel>Trading Balance</SectionLabel>

          <ProfileRow
            label="Settled Cash"
            value={fmt(acct.settledCash)}
            tip="Cash that has fully cleared and is available for trading or withdrawal"
            positive={acct.settledCash > 0}
            negative={acct.settledCash < 0}
          />
          <ProfileRow
            label="Unsettled Cash Credit / Debit"
            value={fmt(acct.unsettledCash)}
            tip="Pending cash from trades not yet settled (T+1 or T+2). Credits increase, debits reduce available cash."
            positive={acct.unsettledCash > 0}
            negative={acct.unsettledCash < 0}
          />
          <div style={{ height: 8 }} />
          <div style={{ color: "#3a5570", fontSize: 10, letterSpacing: "0.06em", textTransform: "uppercase", padding: "4px 8px", marginBottom: 2 }}>Cash &amp; Margin</div>
          <ProfileRow
            label="Fully Marginable"
            value={fmt(acct.cashMarginFullyMarginable)}
            tip="Securities that qualify for full margin lending — typically listed equities meeting house marginability criteria"
            indent
            positive
          />
          <ProfileRow
            label="Non-Marginable"
            value={fmt(acct.cashMarginNonMarginable)}
            tip="Securities ineligible for margin lending — e.g. OTC penny stocks, certain funds. Cannot be used as collateral."
            indent
          />

          {/* Mini equity bar */}
          <div style={{ marginTop: 14, padding: "12px 8px 4px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 5 }}>
              <span style={{ color: "#4a7090", fontSize: 10, textTransform: "uppercase", letterSpacing: "0.07em" }}>
                <Tooltip text="Proportion of total value that is fully margin-eligible vs non-marginable">Marginability Split ?</Tooltip>
              </span>
              <span style={{ color: "#7aa8c0", fontSize: 10 }}>
                {Math.round(acct.cashMarginFullyMarginable / (acct.cashMarginFullyMarginable + acct.cashMarginNonMarginable) * 100)}% eligible
              </span>
            </div>
            <div style={{ height: 6, background: "#162030", borderRadius: 3, overflow: "hidden", display: "flex" }}>
              <div style={{ flex: acct.cashMarginFullyMarginable, background: "#3dd68c", borderRadius: "3px 0 0 3px" }} />
              <div style={{ flex: acct.cashMarginNonMarginable, background: "#f0a830" }} />
            </div>
            <div style={{ display: "flex", gap: 12, marginTop: 5 }}>
              <span style={{ fontSize: 10, color: "#3dd68c" }}>● Fully marginable</span>
              <span style={{ fontSize: 10, color: "#f0a830" }}>● Non-marginable</span>
            </div>
          </div>
        </Card>

        {/* ── WealthScape ── */}
        <Card>
          <SectionLabel>WealthScape</SectionLabel>

          <ProfileRow label="Market Value" value={fmt(acct.marketValue)} tip="Total market value of all positions eligible for margin lending" positive />
          <ProfileRow
            label="Margin Debit Balance"
            value={fmt(acct.marginDebit)}
            tip="Outstanding margin loan — the amount borrowed from the broker. Interest accrues on this balance daily."
            negative={acct.marginDebit > 0}
            positive={acct.marginDebit === 0}
          />
          <ProfileRow
            label="Margin Equity"
            value={`${fmt(acct.marginEquity)}  /  ${pct(acct.marginEquityPct)}`}
            tip="Market Value minus Margin Debit. Shown as both dollar amount and percentage of market value."
            positive={acct.marginEquityPct > 30}
            negative={acct.marginEquityPct <= 30}
          />
          <ProfileRow
            label="Interest Rate"
            value={pct(acct.interestRate)}
            tip="Current annual margin interest rate applied to your outstanding debit balance"
          />
          <ProfileRow
            label="Pending Margin Interest"
            value={fmt(acct.pendingMarginInterest)}
            tip="Accrued interest not yet charged. Will be debited at end of the interest period."
            negative={acct.pendingMarginInterest < 0}
          />
          <ProfileRow
            label="Buying Power"
            value={fmt(acct.buyingPowerMargin)}
            tip="Total available purchasing power including margin borrowing capacity"
            highlight
            positive
          />

          <div style={{ height: 8 }} />
          <div style={{ color: "#3a5570", fontSize: 10, letterSpacing: "0.06em", textTransform: "uppercase", padding: "4px 8px", marginBottom: 2 }}>Surplus / Cushion</div>
          <ProfileRow
            label="House Surplus"
            value={fmt(acct.houseSurplus)}
            tip="How far your equity exceeds the house maintenance requirement. A positive value means you have cushion before a call."
            indent
            positive={acct.houseSurplus > 0}
            negative={acct.houseSurplus < 0}
          />
          <ProfileRow
            label="Exchange Surplus"
            value={fmt(acct.exchangeSurplus)}
            tip="Equity above the exchange-mandated maintenance requirement. Higher = more buffer."
            indent
            positive={acct.exchangeSurplus > 0}
            negative={acct.exchangeSurplus < 0}
          />
          <ProfileRow
            label="SMA Surplus"
            value={fmt(acct.smaSurplus)}
            tip="Special Memorandum Account balance — represents the maximum additional purchasing power or withdrawable cash under Reg T."
            indent
            positive={acct.smaSurplus > 0}
          />

          <div style={{ height: 8 }} />
          <div style={{ color: "#3a5570", fontSize: 10, letterSpacing: "0.06em", textTransform: "uppercase", padding: "4px 8px", marginBottom: 2 }}>Requirements</div>
          <ProfileRow
            label="DTC"
            value={fmt(acct.dtc)}
            tip="Depository Trust Company requirement — collateral value held for securities lending or settlement obligations"
            indent
          />
          <ProfileRow
            label="House Requirement"
            value={`${fmt(acct.houseReqDollar)}  /  ${pct(acct.houseReqPct)}`}
            tip="The minimum equity your account must maintain per house rules. Falling below triggers a margin call."
            indent
            negative={acct.marginEquity < acct.houseReqDollar}
          />
        </Card>
      </div>

      {/* Requirement bar chart */}
      <Card style={{ marginBottom: 20 }}>
        <button
          onClick={() => setExpandedReqs((e) => !e)}
          style={{ background: "none", border: "none", cursor: "pointer", color: "#7ab8e0", fontSize: 13, fontWeight: 600, display: "flex", gap: 8, alignItems: "center", padding: 0 }}
        >
          <span style={{ transform: expandedReqs ? "rotate(90deg)" : "rotate(0deg)", display: "inline-block", transition: "0.2s" }}>▶</span>
          Requirement Level Details
        </button>
        {expandedReqs && (
          <div style={{ marginTop: 16, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14 }}>
            {[
              ["Reg T (Federal)", pct(acct.regT), "Initial margin requirement set by the Federal Reserve. Applies at time of purchase."],
              ["House Requirement", pct(acct.house), "PNC's ongoing maintenance requirement. Must be maintained or margin call triggered."],
              ["Exchange Requirement", pct(acct.exchange), "Exchange-level minimum. Sometimes higher than house for certain securities."],
            ].map(([label, val, tip]) => (
              <div key={label}>
                <div style={{ color: "#4a7090", fontSize: 11, textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 6 }}>
                  <Tooltip text={tip}>{label} <span style={{ borderBottom: "1px dotted #3a5570" }}>?</span></Tooltip>
                </div>
                <div style={{ color: "#e2eef8", fontSize: 22, fontFamily: "'DM Mono', monospace", fontWeight: 700 }}>{val}</div>
                <div style={{ height: 4, background: "#162030", borderRadius: 2, marginTop: 8 }}>
                  <div style={{ height: 4, width: val, background: "#4a9de0", borderRadius: 2 }} />
                </div>
              </div>
            ))}
          </div>
        )}
      </Card>

      {/* Multi-account table */}
      <div style={{ marginTop: 20 }}>
        <div style={{ color: "#4a7090", fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 10 }}>All Margin Accounts</div>
        {accounts.map((a) => (
          <div key={a.id} style={{
            background: a.isDriver ? "#0e2235" : "#0a1520",
            border: `1px solid ${a.isDriver ? "#1e5080" : "#162030"}`,
            borderRadius: 10, padding: "14px 18px", marginBottom: 8,
            display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr",
            alignItems: "center", gap: 14,
          }}>
            <div>
              <div style={{ color: "#e2eef8", fontSize: 13, fontWeight: 600 }}>{a.name}</div>
              {a.isDriver && <span style={{ background: "#1e4060", color: "#7ab8e0", fontSize: 9, padding: "2px 7px", borderRadius: 20, fontWeight: 700 }}>DRIVER</span>}
            </div>
            <div style={{ textAlign: "right" }}>
              <div style={{ color: "#4a7090", fontSize: 10 }}>Market Value</div>
              <div style={{ color: "#e2eef8", fontFamily: "'DM Mono', monospace", fontSize: 13 }}>{fmt(a.marketValue)}</div>
            </div>
            <div style={{ textAlign: "right" }}>
              <div style={{ color: "#4a7090", fontSize: 10 }}>Debit</div>
              <div style={{ color: a.marginDebit > 0 ? "#e05a5a" : "#3dd68c", fontFamily: "'DM Mono', monospace", fontSize: 13 }}>{fmt(a.marginDebit)}</div>
            </div>
            <div style={{ textAlign: "right" }}>
              <div style={{ color: "#4a7090", fontSize: 10 }}>Equity</div>
              <div style={{ color: "#e2eef8", fontFamily: "'DM Mono', monospace", fontSize: 13 }}>{fmt(a.marginEquity)}</div>
            </div>
            <div style={{ textAlign: "right" }}>
              <div style={{ color: "#4a7090", fontSize: 10 }}>Rate</div>
              <div style={{ color: "#e2eef8", fontFamily: "'DM Mono', monospace", fontSize: 13 }}>{pct(a.interestRate)}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── TRANSFERS ────────────────────────────────────────────────────────────────
function Transfers({ acct }) {
  const [step, setStep] = useState(1);
  const [type, setType] = useState("dda-invest");
  const [amount, setAmount] = useState("");
  const [landing, setLanding] = useState("auto");
  const [confirmed, setConfirmed] = useState(false);
  const amt = parseFloat(amount) || 0;
  const newDebit = Math.max(0, acct.marginDebit - amt);
  const debitReduced = acct.marginDebit - newDebit;

  if (confirmed) {
    return (
      <div style={{ textAlign: "center", padding: "40px 20px" }}>
        <div style={{ fontSize: 48, marginBottom: 16 }}>✅</div>
        <div style={{ color: "#3dd68c", fontSize: 24, fontWeight: 700, marginBottom: 8 }}>Transfer Submitted</div>
        <div style={{ color: "#7aa8c0", fontSize: 13, marginBottom: 24 }}>Transaction ID: TXN-{Math.random().toString(36).slice(2, 10).toUpperCase()}</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, maxWidth: 400, margin: "0 auto 24px" }}>
          <Card><Stat label="Amount" value={fmt(amt)} /></Card>
          <Card><Stat label="New Margin Debit" value={fmt(newDebit)} negative={newDebit > 0} positive={newDebit === 0} /></Card>
        </div>
        {newDebit > 0 && (
          <div style={{ background: "#1a1010", border: "1px solid #5a3020", borderRadius: 8, padding: "12px 18px", maxWidth: 400, margin: "0 auto 20px", color: "#cc8060", fontSize: 12 }}>
            ⚠️ Margin call of {fmt(newDebit)} remains. Please deposit additional funds or sell positions.
          </div>
        )}
        <button onClick={() => { setStep(1); setAmount(""); setConfirmed(false); }} style={btnStyle("#1e4060", "#7ab8e0")}>Make Another Transfer</button>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 560, margin: "0 auto" }}>
      <div style={{ color: "#4a7090", fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 4 }}>Transfer Hub</div>
      <div style={{ color: "#e2eef8", fontSize: 20, fontWeight: 700, marginBottom: 20 }}>Move Money</div>
      <div style={{ display: "flex", gap: 0, marginBottom: 24, alignItems: "center" }}>
        {[1, 2, 3].map((s) => (
          <div key={s} style={{ display: "flex", alignItems: "center" }}>
            <div style={{ width: 28, height: 28, borderRadius: "50%", background: step >= s ? "#1e5080" : "#0a1520", border: `2px solid ${step >= s ? "#4a9de0" : "#162030"}`, color: step >= s ? "#7ab8e0" : "#2a4050", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700 }}>{s}</div>
            {s < 3 && <div style={{ width: 40, height: 2, background: step > s ? "#4a9de0" : "#162030" }} />}
          </div>
        ))}
        <div style={{ color: "#4a7090", fontSize: 11, marginLeft: 12 }}>
          {step === 1 ? "Select type" : step === 2 ? "Amount & landing" : "Confirm"}
        </div>
      </div>

      {step === 1 && (
        <Card>
          <div style={{ color: "#8aa8c0", fontSize: 13, fontWeight: 600, marginBottom: 14 }}>Transfer Type</div>
          {[["dda-invest","Checking → Investment","Move cash from your bank to your investment account"],["invest-dda","Investment → Checking","Withdraw funds from your investment account"],["internal","Investment → Investment","Move between linked investment accounts"]].map(([val, label, desc]) => (
            <div key={val} onClick={() => setType(val)} style={{ padding: "14px 16px", borderRadius: 8, marginBottom: 8, border: `1px solid ${type === val ? "#4a9de0" : "#162030"}`, background: type === val ? "#0e2235" : "#050d14", cursor: "pointer", transition: "all 0.15s" }}>
              <div style={{ color: type === val ? "#7ab8e0" : "#8aa8c0", fontWeight: 600, fontSize: 13 }}>{label}</div>
              <div style={{ color: "#4a6070", fontSize: 11, marginTop: 2 }}>{desc}</div>
            </div>
          ))}
          {acct.marginDebit > 0 && (
            <div style={{ background: "#0e2010", border: "1px solid #2a4020", borderRadius: 8, padding: "10px 14px", marginTop: 12, fontSize: 12, color: "#5a9060" }}>
              💡 This account has a margin debit of {fmt(acct.marginDebit)}. Transferred funds will automatically pay down this balance.
            </div>
          )}
          <button onClick={() => setStep(2)} style={{ ...btnStyle("#1e4060", "#7ab8e0"), marginTop: 14, width: "100%" }}>Continue →</button>
        </Card>
      )}

      {step === 2 && (
        <Card>
          <div style={{ marginBottom: 16 }}>
            <div style={{ color: "#4a7090", fontSize: 11, textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 4 }}>Source</div>
            <div style={{ background: "#050d14", border: "1px solid #162030", borderRadius: 8, padding: "10px 14px", color: "#8aa8c0", fontSize: 13 }}>Checking ****4821 — Available: $12,400</div>
          </div>
          <div style={{ marginBottom: 16 }}>
            <div style={{ color: "#4a7090", fontSize: 11, textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 4 }}>Destination</div>
            <div style={{ background: "#050d14", border: "1px solid #162030", borderRadius: 8, padding: "10px 14px", color: "#8aa8c0", fontSize: 13 }}>{acct.name}</div>
            {acct.marginDebit > 0 && <div style={{ color: "#5a9060", fontSize: 11, marginTop: 4 }}>⚠ Has margin debit of {fmt(acct.marginDebit)} — funds will apply to this first</div>}
          </div>
          <div style={{ marginBottom: 16 }}>
            <div style={{ color: "#4a7090", fontSize: 11, textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 4 }}>Amount</div>
            <div style={{ position: "relative" }}>
              <span style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", color: "#4a7090", fontSize: 16 }}>$</span>
              <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="0.00" style={{ width: "100%", background: "#050d14", border: "1px solid #162030", borderRadius: 8, padding: "10px 14px 10px 26px", color: "#e2eef8", fontSize: 16, fontFamily: "'DM Mono', monospace", boxSizing: "border-box", outline: "none" }} />
            </div>
          </div>
          {acct.marginDebit > 0 && (
            <div style={{ marginBottom: 16 }}>
              <div style={{ color: "#4a7090", fontSize: 11, textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 8 }}>Landing Behavior</div>
              {[["auto","Auto-apply to margin debit","Reduces outstanding loan (default)"],["cash","Deposit to cash balance","Currently unavailable — custodian required"]].map(([val, label, desc]) => (
                <div key={val} onClick={() => val === "auto" && setLanding(val)} style={{ padding: "10px 14px", borderRadius: 8, marginBottom: 6, border: `1px solid ${landing === val ? "#4a9de0" : "#162030"}`, background: landing === val ? "#0e2235" : "#050d14", cursor: val === "auto" ? "pointer" : "not-allowed", opacity: val === "cash" ? 0.5 : 1 }}>
                  <div style={{ color: landing === val ? "#7ab8e0" : "#6a8090", fontSize: 12, fontWeight: 600 }}>{label}</div>
                  <div style={{ color: "#3a5060", fontSize: 11 }}>{desc}</div>
                </div>
              ))}
            </div>
          )}
          {amt > 0 && (
            <div style={{ background: "#050d14", border: "1px solid #162030", borderRadius: 8, padding: "14px 16px", marginBottom: 16 }}>
              <div style={{ color: "#4a7090", fontSize: 11, textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 10 }}>Preview</div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                <div><div style={{ color: "#4a7090", fontSize: 10 }}>Current Margin Debit</div><div style={{ color: "#e05a5a", fontFamily: "'DM Mono', monospace", fontSize: 15, fontWeight: 700 }}>{fmt(acct.marginDebit)}</div></div>
                <div><div style={{ color: "#4a7090", fontSize: 10 }}>After Transfer</div><div style={{ color: newDebit === 0 ? "#3dd68c" : "#f0a830", fontFamily: "'DM Mono', monospace", fontSize: 15, fontWeight: 700 }}>{fmt(newDebit)}</div></div>
                <div><div style={{ color: "#4a7090", fontSize: 10 }}>Debit Reduced By</div><div style={{ color: "#3dd68c", fontFamily: "'DM Mono', monospace", fontSize: 15, fontWeight: 700 }}>−{fmt(debitReduced)}</div></div>
                <div><div style={{ color: "#4a7090", fontSize: 10 }}>Est. Settlement</div><div style={{ color: "#8aa8c0", fontSize: 12 }}>1–3 business days (ACH)</div></div>
              </div>
            </div>
          )}
          <div style={{ display: "flex", gap: 8 }}>
            <button onClick={() => setStep(1)} style={btnStyle("#162030", "#4a7090")}>← Back</button>
            <button onClick={() => amt > 0 && setStep(3)} style={{ ...btnStyle("#0e3020", "#3dd68c"), flex: 1, opacity: amt > 0 ? 1 : 0.5 }}>Review Transfer →</button>
          </div>
        </Card>
      )}

      {step === 3 && (
        <Card>
          <div style={{ color: "#8aa8c0", fontSize: 13, fontWeight: 600, marginBottom: 16 }}>Confirm Transfer</div>
          {[["Source","Checking ****4821"],["Destination",acct.name],["Amount",fmt(amt)],["Landing","Auto-apply to margin debit"],["New Margin Debit",fmt(newDebit)],["Settlement","1–3 business days"]].map(([label, val]) => (
            <div key={label} style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: "1px solid #0e1c28" }}>
              <span style={{ color: "#4a7090", fontSize: 12 }}>{label}</span>
              <span style={{ color: "#e2eef8", fontSize: 12, fontFamily: "'DM Mono', monospace" }}>{val}</span>
            </div>
          ))}
          <div style={{ color: "#2a4050", fontSize: 10, marginTop: 12, lineHeight: 1.5 }}>
            By confirming, you agree to applicable margin trading terms and regulations. Funds transferred to a margin account will automatically be applied to outstanding margin debit.
          </div>
          <div style={{ display: "flex", gap: 8, marginTop: 14 }}>
            <button onClick={() => setStep(2)} style={btnStyle("#162030", "#4a7090")}>← Edit</button>
            <button onClick={() => setConfirmed(true)} style={{ ...btnStyle("#0e3020", "#3dd68c"), flex: 1 }}>Confirm Transfer ✓</button>
          </div>
        </Card>
      )}
    </div>
  );
}

// ─── EDUCATION ────────────────────────────────────────────────────────────────
function Education() {
  const [calc, setCalc] = useState({ equity: 10000, loanPct: 50, dropPct: 40 });
  const maxPurchase = calc.equity / (calc.loanPct / 100);
  const postDropValue = maxPurchase * (1 - calc.dropPct / 100);
  const postDropEquity = postDropValue - (maxPurchase - calc.equity);
  const postDropEquityPct = (postDropEquity / postDropValue) * 100;
  const houseReq = 30;
  const inCall = postDropEquityPct < houseReq;
  return (
    <div>
      <div style={{ color: "#e2eef8", fontSize: 20, fontWeight: 700, marginBottom: 4 }}>Margin Education</div>
      <div style={{ color: "#4a7090", fontSize: 13, marginBottom: 20 }}>Plain-language guides and interactive examples</div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 20 }}>
        {[["📊","What is Margin?","Margin lets you borrow against your portfolio to buy more securities. You pay interest on the borrowed amount."],["⚡","Buying Power Explained","Buying power = cash + what you can borrow. With Reg T at 50%, $10k cash gives $20k buying power."],["🚨","What Triggers a Call?","When your equity falls below the house maintenance requirement (typically 30%), a margin call is issued."],["💸","How Transfers Affect Margin","Depositing cash directly reduces your margin debit dollar-for-dollar, restoring buying power."]].map(([icon, title, body]) => (
          <Card key={title}>
            <div style={{ fontSize: 20, marginBottom: 8 }}>{icon}</div>
            <div style={{ color: "#7ab8e0", fontWeight: 700, fontSize: 14, marginBottom: 6 }}>{title}</div>
            <div style={{ color: "#5a7a90", fontSize: 12, lineHeight: 1.6 }}>{body}</div>
          </Card>
        ))}
      </div>
      <Card accent>
        <div style={{ color: "#7ab8e0", fontSize: 15, fontWeight: 700, marginBottom: 4 }}>🔢 Interactive Calculator — Margin Call Scenario</div>
        <div style={{ color: "#4a7090", fontSize: 12, marginBottom: 18 }}>See what happens if your holdings drop in value</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 14, marginBottom: 18 }}>
          {[["Starting Cash Equity","equity","$",1000,100000,500],["Reg T Initial Req (%)","loanPct","",25,100,5],["Position Drop (%)","dropPct","",0,80,5]].map(([label, key, prefix, min, max, step]) => (
            <div key={key}>
              <div style={{ color: "#4a7090", fontSize: 11, textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 6 }}>{label}</div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                {prefix && <span style={{ color: "#4a7090" }}>{prefix}</span>}
                <span style={{ color: "#e2eef8", fontFamily: "'DM Mono', monospace", fontSize: 16, fontWeight: 700 }}>{calc[key].toLocaleString()}{key !== "equity" ? "%" : ""}</span>
              </div>
              <input type="range" min={min} max={max} step={step} value={calc[key]} onChange={(e) => setCalc((c) => ({ ...c, [key]: parseFloat(e.target.value) }))} style={{ width: "100%", accentColor: "#4a9de0" }} />
            </div>
          ))}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 12 }}>
          {[["Max Purchase",fmt(maxPurchase),false,false],["Value After Drop",fmt(postDropValue),false,false],["Equity After Drop",fmt(postDropEquity),postDropEquity < 0,postDropEquity > 0],["Equity %",`${postDropEquityPct.toFixed(1)}%`,inCall,!inCall]].map(([label, val, neg, pos]) => (
            <Card key={label}>
              <div style={{ color: "#4a7090", fontSize: 10, textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 4 }}>{label}</div>
              <div style={{ color: neg ? "#e05a5a" : pos && !inCall ? "#3dd68c" : "#e2eef8", fontFamily: "'DM Mono', monospace", fontSize: 16, fontWeight: 700 }}>{val}</div>
            </Card>
          ))}
        </div>
        {inCall && <div style={{ marginTop: 14, background: "#2a0808", border: "1px solid #7a2020", borderRadius: 8, padding: "12px 16px", color: "#ff7070", fontSize: 13, fontWeight: 600 }}>⚠️ Margin Call! Equity ({postDropEquityPct.toFixed(1)}%) is below the house requirement ({houseReq}%). You would need to deposit {fmt(Math.abs(postDropEquity))} or sell positions to resolve.</div>}
        {!inCall && <div style={{ marginTop: 14, background: "#081a10", border: "1px solid #2a5030", borderRadius: 8, padding: "12px 16px", color: "#3dd68c", fontSize: 13, fontWeight: 600 }}>✅ Equity ({postDropEquityPct.toFixed(1)}%) is above the {houseReq}% house requirement. No margin call.</div>}
      </Card>
    </div>
  );
}

// ─── APP SHELL ────────────────────────────────────────────────────────────────
export default function App() {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [selectedAcct, setSelectedAcct] = useState(accounts[0]);
  return (
    <div style={{ minHeight: "100vh", background: "#050d14", color: "#e2eef8", fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=DM+Mono:wght@400;500;700&display=swap');
        * { box-sizing: border-box; }
        input[type=range] { cursor: pointer; }
        input[type=number]::-webkit-inner-spin-button { display: none; }
        ::-webkit-scrollbar { width: 4px; } ::-webkit-scrollbar-track { background: #050d14; } ::-webkit-scrollbar-thumb { background: #1e3040; border-radius: 2px; }
      `}</style>
      <div style={{ background: "#070f18", borderBottom: "1px solid #0e1c28", padding: "0 32px", display: "flex", alignItems: "center", height: 56, gap: 24 }}>
        <div style={{ fontFamily: "'DM Mono', monospace", color: "#4a9de0", fontSize: 14, fontWeight: 700, letterSpacing: 2 }}>◈ MARGINVUE</div>
        <select value={selectedAcct.id} onChange={(e) => setSelectedAcct(accounts.find((a) => a.id === e.target.value))} style={{ background: "#0a1520", border: "1px solid #162030", color: "#8aa8c0", borderRadius: 6, padding: "4px 10px", fontSize: 12, cursor: "pointer" }}>
          {accounts.map((a) => <option key={a.id} value={a.id}>{a.name}</option>)}
        </select>
        <div style={{ flex: 1 }} />
        <div style={{ color: "#3a5570", fontSize: 11 }}>Total Portfolio</div>
        <div style={{ color: "#e2eef8", fontFamily: "'DM Mono', monospace", fontSize: 16, fontWeight: 700 }}>{fmt(accounts.reduce((s, a) => s + a.marketValue, 0))}</div>
        {selectedAcct.hasCall && (
          <div style={{ background: "#3a0d0d", border: "1px solid #7a2020", borderRadius: 20, padding: "4px 12px", color: "#ff7070", fontSize: 11, fontWeight: 700, cursor: "pointer" }} onClick={() => setActiveTab("Margin Profile")}>⚠ MARGIN CALL</div>
        )}
      </div>
      <div style={{ background: "#070f18", borderBottom: "1px solid #0e1c28", padding: "0 32px", display: "flex", gap: 0 }}>
        {tabs.map((t) => (
          <button key={t} onClick={() => setActiveTab(t)} style={{ background: "none", border: "none", borderBottom: activeTab === t ? "2px solid #4a9de0" : "2px solid transparent", color: activeTab === t ? "#7ab8e0" : "#3a5570", padding: "12px 18px", cursor: "pointer", fontSize: 13, fontWeight: activeTab === t ? 700 : 400, transition: "all 0.15s" }}>{t}</button>
        ))}
      </div>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "28px 32px" }}>
        {activeTab === "Dashboard" && <Dashboard acct={selectedAcct} setTab={setActiveTab} />}
        {activeTab === "Margin Profile" && <MarginProfile acct={selectedAcct} setTab={setActiveTab} />}
        {activeTab === "Transfers" && <Transfers acct={selectedAcct} />}
        {activeTab === "Education" && <Education />}
      </div>
    </div>
  );
}
