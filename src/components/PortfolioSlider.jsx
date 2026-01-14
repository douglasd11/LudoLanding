import "../css/styles";

import logoyeeshop from "../assets/logoyeeshop.png";
import logoservicentro from "../assets/logo-automotriz.png";
import logojmteam from "../assets/logojmteam.png";
import logomassage from "../assets/logomassage.png";
import logoalemental from "../assets/logoalemental.png";

import { useLayoutEffect, useMemo, useRef, useState, useEffect } from "react";

const baseLogos = [
  { src: logoyeeshop, alt: "Yeeshop", href: "https://yeeshopctg.com/" },
  { src: logojmteam, alt: "JM Team", href: "https://jmteam.com" },
  { src: logoservicentro, alt: "Servicentro La 70", href: "https://servicentrol70.com" },
  { src: logomassage, alt: "Massage Pro", href: "https://massagepro.com" },
  { src: logoalemental, alt: "Alemental", href: "https://alemental.com" },
];

export default function PortfolioMarqueeDrag() {
  const viewportRef = useRef(null);
  const groupRef = useRef(null);

  const rafRef = useRef(null);
  const lastTRef = useRef(0);

  const [repeat, setRepeat] = useState(2);
  const [groupWidth, setGroupWidth] = useState(0);
  const [ready, setReady] = useState(false);

  // Drag
  const isDraggingRef = useRef(false);
  const didDragRef = useRef(false);
  const startXRef = useRef(0);
  const startScrollRef = useRef(0);

  // Ajustes
  const GAP = 32;
  const SPEED_PX_S = 73; // más bajo = más lento
  const DRAG_SENS = 1.2;

  const logos = useMemo(() => {
    const out = [];
    for (let r = 0; r < repeat; r++) out.push(...baseLogos);
    return out;
  }, [repeat]);

  useLayoutEffect(() => {
    const viewport = viewportRef.current;
    const group = groupRef.current;
    if (!viewport || !group) return;

    let cancelled = false;

    const compute = () => {
      if (cancelled) return;

      const wrapW = viewport.getBoundingClientRect().width;
      const w = group.scrollWidth || group.getBoundingClientRect().width || 0;

      if (w < 10) {
        requestAnimationFrame(compute);
        return;
      }

      if (w < wrapW * 2) {
        const needed = Math.ceil((wrapW * 2) / Math.max(w, 1));
        setRepeat((prev) => Math.min(Math.max(prev * needed, prev + 1), 30));
        return;
      }

      setGroupWidth(w);
      setReady(true);
      viewport.scrollLeft = w; // arranca en grupo B
    };

    setReady(false);
    requestAnimationFrame(compute);

    const ro = new ResizeObserver(() => requestAnimationFrame(compute));
    ro.observe(viewport);

    return () => {
      cancelled = true;
      ro.disconnect();
    };
  }, [repeat]);

  const normalizeInfinite = () => {
    const viewport = viewportRef.current;
    if (!viewport || !groupWidth) return;

    if (viewport.scrollLeft <= groupWidth * 0.1) {
      viewport.scrollLeft += groupWidth;
    } else if (viewport.scrollLeft >= groupWidth * 1.9) {
      viewport.scrollLeft -= groupWidth;
    }
  };

  useEffect(() => {
    const onVis = () => (lastTRef.current = 0);
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport || !ready || !groupWidth) return;

    const tick = (t) => {
      if (!lastTRef.current) lastTRef.current = t;
      let dt = (t - lastTRef.current) / 1000;
      lastTRef.current = t;

      if (!Number.isFinite(dt) || dt <= 0 || dt > 0.2) dt = 1 / 60;

      const isHovering = viewport.matches(":hover");
      const shouldAutoPlay = !isHovering && !isDraggingRef.current;

      if (shouldAutoPlay) {
        viewport.scrollLeft += SPEED_PX_S * dt;
        normalizeInfinite();
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
      lastTRef.current = 0;
    };
  }, [ready, groupWidth]);

  const isClickOnLink = (e) => {
    // si el pointerdown ocurre sobre un <a> (o dentro), no iniciamos drag
    return !!e.target.closest("a.logo-link");
  };

  const onPointerDown = (e) => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    // ✅ Si el usuario clickea un link, dejamos que navegue
    if (isClickOnLink(e)) return;

    didDragRef.current = false;
    isDraggingRef.current = true;
    viewport.classList.add("is-dragging");

    viewport.setPointerCapture?.(e.pointerId);

    startXRef.current = e.clientX;
    startScrollRef.current = viewport.scrollLeft;
  };

  const onPointerMove = (e) => {
    const viewport = viewportRef.current;
    if (!viewport || !isDraggingRef.current) return;

    const dx = e.clientX - startXRef.current;

    if (Math.abs(dx) > 4) didDragRef.current = true;

    viewport.scrollLeft = startScrollRef.current - dx * DRAG_SENS;
    normalizeInfinite();
  };

  const endDrag = (e) => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    isDraggingRef.current = false;
    viewport.classList.remove("is-dragging");

    try {
      viewport.releasePointerCapture?.(e.pointerId);
    } catch {}
  };

  const onLinkClick = (e) => {
    // ✅ Si fue drag, cancelamos el click
    if (didDragRef.current) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  const renderGroup = (keyPrefix, ariaHidden, tabIndex) => (
    <div className="portafolio-group" aria-hidden={ariaHidden}>
      {logos.map((l, i) => (
        <div className="logo-card" key={`${keyPrefix}-${i}`}>
          <a
            className="logo-link"
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onLinkClick}
            tabIndex={tabIndex}
            aria-label={`Ir a ${l.alt}`}
          >
            <img src={l.src} alt={ariaHidden ? "" : l.alt} loading="eager" decoding="async" />
          </a>
        </div>
      ))}
    </div>
  );

  return (
    <div className="portafolio-wrap">
      <div
        ref={viewportRef}
        className={`portafolio-viewport ${ready ? "is-ready" : ""}`}
        style={{ "--gap": `${GAP}px` }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
      >
        {/* Grupo A (ref para medir) */}
        <div className="portafolio-group" ref={groupRef}>
          {logos.map((l, i) => (
            <div className="logo-card" key={`a-${i}`}>
              <a
                className="logo-link"
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onLinkClick}
                aria-label={`Ir a ${l.alt}`}
              >
                <img src={l.src} alt={l.alt} loading="eager" decoding="async" />
              </a>
            </div>
          ))}
        </div>

        {/* Grupo B */}
        {renderGroup("b", true, -1)}
        {/* Grupo C */}
        {renderGroup("c", true, -1)}
      </div>
    </div>
  );
}
