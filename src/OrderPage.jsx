import { useNavigate } from "react-router-dom";
import { ANIMATIONS, GAMES, donateLink, orderLink } from "./data/projects.js";

export default function OrderPage() {
  const navigate = useNavigate();
  return (
    <div id="menu-screen">
      <style>{`
        .od-shell{position:absolute;inset:0;z-index:10;display:flex;align-items:center;justify-content:center;padding:5vh 4vw}
        .od-card{background:rgba(13,13,13,.95);max-width:760px;width:100%;padding:32px;clip-path:polygon(0 0,100% 0,calc(100% - 20px) 100%,0 100%)}
        .od-title{font-family:'Persona5Main',sans-serif;font-size:64px;color:#fff;line-height:.9}
        .od-sub{font-family:'Bebas Neue',sans-serif;font-size:28px;color:#fff;margin-top:10px}
        .od-list{margin-top:18px;display:flex;flex-direction:column;gap:8px;max-height:30vh;overflow:auto}
        .od-row{display:flex;justify-content:space-between;align-items:center;background:rgba(255,255,255,.08);padding:8px 12px;color:#fff;font-family:'Bebas Neue',sans-serif;font-size:22px}
        .od-row button{background:#d92323;color:#fff;border:none;font-family:'Bebas Neue',sans-serif;font-size:20px;padding:4px 12px;cursor:pointer}
        .od-back{margin-top:18px;background:#fff;color:#111;border:none;font-family:'Bebas Neue',sans-serif;font-size:22px;padding:8px 16px;cursor:pointer}
      `}</style>
      <div className="od-shell">
        <div className="od-card">
          <div className="od-title">SOUTENIR</div>
          <div className="od-sub">Tout est gratuit et open source. Si tu aimes, laisse un don de $1 (libre, pas obligatoire) via Chariow. Pour une animation / un jeu sur mesure, écris-moi sur WhatsApp.</div>
          <div className="od-list">
            {[...ANIMATIONS, ...GAMES].map((p) => (
              <div key={p.id} className="od-row">
                <span>{p.title} — {p.price}</span>
                <button onClick={() => window.open(donateLink(), "_blank", "noopener,noreferrer")}>DON $1</button>
              </div>
            ))}
          </div>
          <div className="od-sub" style={{marginTop:14}}>Sur mesure ? <button className="od-back" style={{marginTop:0}} onClick={() => window.open(orderLink("un projet sur mesure"), "_blank", "noopener,noreferrer")}>WHATSAPP</button></div>
          <button className="od-back" onClick={() => navigate(-1)}>RETOUR</button>
        </div>
      </div>
    </div>
  );
}
