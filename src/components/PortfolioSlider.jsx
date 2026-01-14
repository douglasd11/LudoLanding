import '../css/styles'

import logoyeeshop from '../assets/logoyeeshop.png'
import logoservicentro from '../assets/logo-automotriz.png'
import logojmteam from '../assets/logojmteam.png'
import logomassage from '../assets/logomassage.png'
import logoalemental from '../assets/logoalemental.png'

import { useEffect, useMemo, useRef, useState } from "react";

const baseLogos = [
  { src: logoyeeshop, alt: "Yeeshop" },
  { src: logojmteam, alt: "JM Team" },
  { src: logoservicentro, alt: "Servicentro La 70" },
  { src: logomassage, alt: "Massage Pro" },
  { src: logoalemental, alt: "Alemental" },
];

export default function PortfolioMarquee() {
  const wrapRef = useRef(null);
  const groupRef = useRef(null);

  const [repeat, setRepeat] = useState(2);
  const [distance, setDistance] = useState(0);
  const [ready, setReady] = useState(false);

  // Ajustes
  const GAP = 32;        // separación entre items
  const SPEED = 35;      // px/seg (más bajo = más lento). Prueba 25-45.

  const logos = useMemo(() => {
    const out = [];
    for (let r = 0; r < repeat; r++) out.push(...baseLogos);
    return out;
  }, [repeat]);

  useEffect(() => {
    const wrap = wrapRef.current;
    const group = groupRef.current;
    if (!wrap || !group) return;

    const compute = () => {
      const wrapW = wrap.getBoundingClientRect().width;
      const groupW = group.scrollWidth || group.getBoundingClientRect().width;

      // Asegura que el contenido cubra suficiente (para que no haya huecos)
      if (groupW < wrapW * 2) {
        const needed = Math.ceil((wrapW * 2) / Math.max(groupW, 1));
        setRepeat((prev) => Math.min(Math.max(prev * needed, prev + 1), 20));
        return;
      }

      setDistance(groupW);
      setReady(true);
    };

    setReady(false);
    const raf = requestAnimationFrame(compute);

    const ro = new ResizeObserver(() => {
      setReady(false);
      requestAnimationFrame(compute);
    });

    ro.observe(wrap);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, [repeat]);

  // duración basada en distancia y velocidad
  const durationSec = distance ? Math.max(distance / SPEED, 12) : 20;

  return (
    <div className="portafolio-slider" ref={wrapRef}>
      <div
        className={`portafolio-track ${ready ? "is-ready" : ""}`}
        style={{
          "--marquee-distance": `${distance}px`,
          "--marquee-duration": `${durationSec}s`,
          "--marquee-gap": `${GAP}px`,
        }}
      >
        <div className="portafolio-group" ref={groupRef}>
          {logos.map((l, i) => (
            <div className="logo-card" key={`a-${i}`}>
              <img src={l.src} alt={l.alt} loading="eager" decoding="async" />
            </div>
          ))}
        </div>

        <div className="portafolio-group" aria-hidden="true">
          {logos.map((l, i) => (
            <div className="logo-card" key={`b-${i}`}>
              <img src={l.src} alt="" loading="eager" decoding="async" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
