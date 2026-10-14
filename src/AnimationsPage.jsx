import { useEffect, useState, useRef } from "react";
import { playSelectSound } from "./utils/audio.js";
import { useNavigate } from "react-router-dom";
import { ANIMATIONS, donateLink } from "./data/projects.js";

export default function AnimationsPage() {
  const navigate = useNavigate();
  const [active, setActive] = useState(0);
  const [mounted, setMounted] = useState(false);
  const isFirstRenderAudio = useRef(true);

  useEffect(() => {
    if (isFirstRenderAudio.current) { isFirstRenderAudio.current = false; return; }
    playSelectSound();
  }, [active]);

  useEffect(() => { const t = setTimeout(() => setMounted(true), 80); return () => clearTimeout(t); }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowUp") setActive((i) => Math.max(0, i - 1));
      if (e.key === "ArrowDown") setActive((i) => Math.min(ANIMATIONS.length - 1, i + 1));
      if (e.key === "Enter") window.open(ANIMATIONS[active].demo, "_blank", "noopener,noreferrer");
      if (e.key === "ArrowLeft" || e.key === "Escape" || e.key === "Backspace") navigate(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, navigate]);

  const item = ANIMATIONS[active];

  return (
    <div id="menu-screen">
      <style>{`
        .sp-shell{position:absolute;inset:0;z-index:10;display:grid;grid-template-columns:48% 52%;gap:20px;padding:6vh 3vw}
        .sp-left{display:flex;flex-direction:column;gap:12px;overflow-y:auto;max-height:88vh;padding-right:6px}
        .sp-title{font-family:'Persona5Main',sans-serif;font-size:72px;color:#fff;line-height:.92;margin-bottom:8px;opacity:0;transform:translateX(-24px);transition:opacity .35s ease,transform .35s ease}
        .sp-title.mounted{opacity:1;transform:translateX(0)}
        .sp-item{position:relative;min-height:94px;background:rgba(13,13,13,.94);clip-path:polygon(0 0,100% 0,calc(100% - 14px) 100%,0 100%);padding:14px 16px;cursor:pointer;opacity:0;transform:translateX(-36px);transition:transform .24s ease,background .24s ease,opacity .4s ease}
        .sp-item.mounted{opacity:1;transform:translateX(0)}
        .sp-item.active{background:rgba(255,255,255,.97);transform:translateX(6px)}
        .sp-item-title{font-family:'Persona5Main',sans-serif;font-size:42px;line-height:.9;color:#fff}
        .sp-item.active .sp-item-title{color:#111}
        .sp-item-stack{font-family:'Persona5Main',sans-serif;font-size:26px;color:#fff;margin-top:4px}
        .sp-item.active .sp-item-stack{color:#0d0d0d}
        .sp-price{display:inline-block;margin-top:6px;font-family:'Persona5Main',sans-serif;font-size:24px;background:#d92323;color:#fff;padding:2px 10px}
        .sp-right{position:relative;background:rgba(13,13,13,.96);clip-path:polygon(0 0,100% 0,calc(100% - 18px) 100%,0 100%);padding:24px;overflow:hidden}
        .sp-tag{display:inline-block;font-family:'Persona5Main',sans-serif;font-size:24px;background:#fff;color:#0d0d0d;padding:4px 10px;clip-path:polygon(0 0,100% 0,calc(100% - 8px) 100%,0 100%)}
        .sp-right-title{font-family:'Persona5Main',sans-serif;font-size:64px;line-height:.92;color:#fff;margin-top:16px}
        .sp-right-summary{margin-top:16px;font-family:'Bebas Neue',sans-serif;font-size:34px;line-height:1.05;color:#fff}
        .sp-actions{margin-top:22px;display:flex;gap:12px;flex-wrap:wrap}
        .sp-btn{font-family:'Bebas Neue',sans-serif;font-size:26px;color:#fff;background:#d92323;padding:8px 16px;clip-path:polygon(0 0,100% 0,calc(100% - 10px) 100%,0 100%);cursor:pointer;border:none}
        .sp-btn.ghost{background:#fff;color:#111}
        .sp-footer{position:fixed;right:28px;bottom:20px;z-index:20;display:flex;flex-direction:column;align-items:flex-end;gap:4px;font-family:'Persona5Main',sans-serif;color:rgba(255,255,255,.7);font-size:12px}
      `}</style>
      <div className="sp-shell">
        <div className="sp-left">
          <div className={`sp-title${mounted ? " mounted" : ""}`}>ANIMATIONS</div>
          {ANIMATIONS.map((a, index) => (
            <div key={a.id} className={`sp-item${active === index ? " active" : ""}${mounted ? " mounted" : ""}`}
              style={{ transitionDelay: `${Math.min(index,6) * 55}ms` }}
              onMouseEnter={() => setActive(index)}
              onClick={() => window.open(a.demo, "_blank", "noopener,noreferrer")}>
              <div className="sp-item-title">{a.title}</div>
              <div className="sp-item-stack">{a.stack}</div>
              <div className="sp-price">{a.price}</div>
            </div>
          ))}
        </div>
        <div className="sp-right">
          <div className="sp-tag">A VENDRE • DEMO LIVE</div>
          <div className="sp-right-title">{item.title}</div>
          <div className="sp-right-summary">{item.summary}</div>
          <div className="sp-right-summary" style={{fontSize:28,opacity:.85}}>{item.stack} — {item.price}</div>
          <div className="sp-actions">
            <button className="sp-btn" onClick={() => window.open(item.demo, "_blank", "noopener,noreferrer")}>VOIR DEMO</button>
            <button className="sp-btn ghost" onClick={() => window.open(donateLink(), "_blank", "noopener,noreferrer")}>DON $1</button>
          </div>
        </div>
      </div>
      <div className="sp-footer"><div>UP / DOWN SELECT</div><div>ENTER DEMO</div><div>ESC BACK</div></div>
    </div>
  );
}
