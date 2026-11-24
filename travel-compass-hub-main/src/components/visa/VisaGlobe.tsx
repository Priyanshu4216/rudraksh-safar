import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { VISA_COUNTRIES, CountryVisa, createVisaWhatsAppUrl } from '@/data/visaCountriesData';
import { Globe, ArrowRight, Sparkles, MessageCircle } from 'lucide-react';

interface VisaGlobeProps {
  onSelectCountry?: (country: CountryVisa) => void;
}

const BITMASK_B64 = "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//8////44AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPx/n/////AAAA/AAYAAAAfAAAAAAAAAAAAAAAAEO3v4f////+AAAPgAAAAAAAAcAAAAAAAAAAAAAADAAAfgP////+AAAHAAAAAAAAAMAAAAAAAAAAAAAAA9jjCAAP///+AAAAAAAAHgAAP/8AAPAAAAAAAAAAcAAAAAAD///8AAAAAAAAYAAD//gAAAAAAAAAAAAAe6zs/AAB///4AAAAAAABgDA/////wGAAAAwAEAAAI/wM//AAf//4AAAAAAABwHf/////z/+AABAB//wPI/+sEP4A///wAAAAf8AACHf////////8B8wH/////ww3mB4Af/8AAAAD//xjf7v///////////7A////////+B/g//gAAAAH//4///f///////////GH////////0P5Af4AH4AAPx+H///////////////AAf///////Ng+AP4ADAAA/n////////////////+AD///////8COMAHwAAAAD/P///////////////v8AD/7/////4APwABgAAAAH/P//////////////wfAAA+AH////4APzAAAAAAAD/D/////////////JhgAAAFAAf///8AH/gAAAAAIAOD////////////4AHAAAAQAAP////wH/gAAAAAMBuP////////////wAPgAACAAAH////+f/8AAAAAWAhf////////////AAPAAAAAAAT////+f/+AAAAA3H//////////////+AOAAAAAAAB/////f/8AAAAAHn//////////////+AIAAAAAAAB//////8wAAAAAMf//////////////9AAAAAAAAAA//////2HAAAAAF///////////////4AAAAAAAAAAf/////+AgAAAAD///////////////4AAAAAAAAAAf//////wAAAAAB///yfx/////////wAAAAAAAAAAf/////yAAAAAAB/z/gPj/////////jAAAAAAAAAAf/////gAAAAAA/wY/gDx////////8HAAAAAAAAAAf/////AAAAAAA/gGfnn4////////wAAAAAAAAAAAf////+AAAAAAA/ACY//4///////1gGAAAAAAAAAAP////8AAAAAAA/ACM//4///////hwEAAAAAAAAAAH////4AAAAAAAOLgA//////////4wcAAAAAAAAAAH////4AAAAAAAN/gDC/////////wz8AAAAAAAAAAB////wAAAAAAAf/gAA/////////wDgAAAAAAAAAAA////AAAAAAAA//8YB/////////4EAAAAAAAAAAAAX///AAAAAAAA///f//////////4AAAAAAAAAAAAAX/5BAAAAAAAB//////z///////4AAAAAAAAAAAAAb/gBAAAAAAAH////8/5///////4AAAAAAAAAAAAAF/gBoAAAAAAP////+/4f//////wAAAAAAAAAAAAAE/gAAAAAAAAP////+f8wH/////gAAAAAAAAAAAAAAfgAAAAAAAAf/////P/4D/////IAAAAAAAAAAAAAAPgAQAAAAAAf/////v/8D/+f/4AAAAAAAAAAAAAAAPgwOAAAAAAf/////n/4Af8P+AAAAAAAAAAAAAAAAHxwAwAAAAAf/////n/wAfwH+wAAAAAAAAAAAAAAAB/gAAAAAAAf/////z/gAfgH+AMAAAAAAAAAAAAAAAT8AAAAAAAf/////z+AAfAF/AIAAAAAAAAAAAAAAAB+AAAAAAAf/////94AAOAB/gIAAAAAAAAAAAAAAAAMAAAAAAAf//////AAAOAA/gCAAAAAAAAAAAAAAAAEBQAAAAAP/////+MAAGAAHAFAAAAAAAAAAAAAAAACDfgAAAAH//////8AAGAACAAAAAAAAAAAAAAAAAABP/wAAAAH//////4AABABgADAAAAAAAAAAAAAAAAAP/4AAAAD//////4AABAAQABAAAAAAAAAAAAAAAAAP//gAAAA/H////wAAAACYBgAAAAAAAAAAAAAAAAAH//wAAAAAA////wAAAADYDAAAAAAAAAAAAAAAAAAP//wAAAAAA////gAAAABoPgAAAAAAAAAAAAAAAAAf//4AAAAAA///+AAAAAA4fuQAAAAAAAAAAAAAAAA///+AAAAAA///8AAAAAAYfASAAAAAAAAAAAAAAAA////AAAAAA///4AAAAAAcfYBYAAAAAAAAAAAAAAA////8AAAAAf//4AAAAAAOCEh/AAAAAAAAAAAAAAA/////AAAAAP//wAAAAAAGAAAPgAAAAAAAAAAAAAA/////gAAAAP//wAAAAAADIABPwIAAAAAAAAAAAAAf////gAAAAH//wAAAAAAAOAAPYCAAAAAAAAAAAAAP////AAAAAH//4AAAAAAAACAAMAAAAAAAAAAAAAAP///+AAAAAH//4AAAAAAAAAAAAAAAAAAAAAAAAAAH///+AAAAAH//4AAAAAAAAAHhAAAAAAAAAAAAAAAH///8AAAAAP//4IAAAAAAAAvjAAAAAAAAAAAAAAAD///8AAAAAP//4cAAAAAAAB/jgAAAAAAAAAAAAAAA///8AAAAAP//h4AAAAAAAD/7gAAAAAAAAAAAAAAAf//8AAAAAP//B4AAAAAAAH//wAAAAAAAAAAAAAAAf//4AAAAAH/+AwAAAAAAAf//4AQAAAAAAAAAAAAAf//4AAAAAH//BwAAAAAAB///8AIAAAAAAAAAAAAAf//gAAAAAD//BwAAAAAAD///+AAAAAAAAAAAAAAAf/8AAAAAAD/+BgAAAAAAD////AAAAAAAAAAAAAAAf/8AAAAAAD/8AAAAAAAAD////AAAAAAAAAAAAAAAf/8AAAAAAD/8AAAAAAAAD////AAAAAAAAAAAAAAA//4AAAAAAB/4AAAAAAAAB////AAAAAAAAAAAAAAA//wAAAAAAA/wAAAAAAAAB////AAAAAAAAAAAAAAA//gAAAAAAA/gAAAAAAAAB/h//AAAAAAAAAAAAAAA//AAAAAAAA+AAAAAAAAAB+Av+AAAAAAAAAAAAAAA/8AAAAAAAAAAAAAAAAAAAAAP8AAQAAAAAAAAAAAB/8AAAAAAAAAAAAAAAAAAAAAH8AAIAAAAAAAAAAAB/4AAAAAAAAAAAAAAAAAAAAADQAAOAAAAAAAAAAAB/gAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAAAAAB+AAAAAAAAAAAAAAAAAAAAAAAYAAIAAAAAAAAAAAB+AAAAAAAAAAAAAAAAAAAAAAAYAAwAAAAAAAAAAAD8AAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAAAAAAAD4AAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAAAAAAAAD8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGAAAAAAAAAAAADwAACAefH/gAAAAAAAAAAAAAAAAEAAAAAAAAAAAB//8B///////4AAAAAAAAAAAAAAA/AAAAAAAAAAH///8P////////8AAAAAAAAAAAAAB3gAAAAATf//////8//////////+AAAAAAAAAAAgAHgAAAAH////////////////////AAAAAAAB4B////gAAAAP///////////////////4AAAAD////////4AAAAD////////////////////gAAALP///////8AAAAD/////////////////////gAABj////////wAAHg//////////////////////4AAAAD///////8AQ/AB////////////////////+AAAAB//////////AGP//////////////////////AAAAA///////////////////////////////////8A/8AAf///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////";

const FEAT_SLUGS = ['vietnam', 'uae', 'indonesia', 'thailand', 'europe', 'usa', 'singapore', 'japan', 'maldives', 'australia'];

export const VisaGlobe: React.FC<VisaGlobeProps> = ({ onSelectCountry }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [activeSlug, setActiveSlug] = useState<string>('vietnam');
  const activeSlugRef = useRef<string>('vietnam');

  useEffect(() => {
    activeSlugRef.current = activeSlug;
  }, [activeSlug]);

  const activeCountry = VISA_COUNTRIES.find(c => c.slug === activeSlug) || VISA_COUNTRIES[0];

  useEffect(() => {
    const cv = canvasRef.current;
    if (!cv) return;
    const ctx = cv.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let W = 0;
    let cx = 0;
    let cy = 0;
    let R = 0;
    let rot = -1.9;
    let tilt = 0.2;
    let tr = rot;
    let tt = tilt;
    let drag = 0;
    let lx = 0;
    let mv = 0;
    let hov = -1;
    let t = 0;
    let fi = 0;
    let pz = 0;
    let hit: [number, number, number][] = [];

    const v = (la: number, lo: number): [number, number, number] => {
      la = (la * Math.PI) / 180;
      lo = (lo * Math.PI) / 180;
      return [Math.cos(la) * Math.sin(lo), Math.sin(la), Math.cos(la) * Math.cos(lo)];
    };

    const r = (p: [number, number, number]): [number, number, number] => {
      const c = Math.cos(rot);
      const s = Math.sin(rot);
      const X = p[0] * c + p[2] * s;
      const Z = -p[0] * s + p[2] * c;
      const ct = Math.cos(tilt);
      const st = Math.sin(tilt);
      return [X, p[1] * ct - Z * st, p[1] * st + Z * ct];
    };

    // Parse continent dots
    const B = atob(BITMASK_B64);
    const D: [number, number, number][] = [];
    for (let rr = 0; rr < 120; rr++) {
      for (let c2 = 0; c2 < 240; c2++) {
        const ii = rr * 240 + c2;
        if ((B.charCodeAt(ii >> 3) >> (7 - (ii & 7))) & 1) {
          D.push(v(90 - 1.5 * (rr + 0.5), -180 + 1.5 * (c2 + 0.5)));
        }
      }
    }

    const N = D.length;
    const PX = new Float32Array(N);
    const PY = new Float32Array(N);
    const PB = new Uint8Array(N);
    const M = VISA_COUNTRIES.map(c => v(c.lat, c.lon));
    const O = v(19.07, 72.88); // Mumbai coordinates

    const FEAT = FEAT_SLUGS.map(s => VISA_COUNTRIES.findIndex(c => c.slug === s)).filter(i => i >= 0);

    const size = () => {
      const d = window.devicePixelRatio || 1;
      W = cv.clientWidth || 360;
      cv.width = W * d;
      cv.height = W * d;
      ctx.setTransform(d, 0, 0, d, 0, 0);
      cx = cy = W / 2;
      R = W * 0.4;
    };

    const line = (f: (t: number) => [number, number, number]) => {
      ctx.beginPath();
      let on = 0;
      for (let k = 0; k <= 48; k++) {
        const p = r(f(k / 48));
        if (p[2] > 0) {
          const X = cx + p[0] * R;
          const Y = cy - p[1] * R;
          if (on) ctx.lineTo(X, Y);
          else ctx.moveTo(X, Y);
          on = 1;
        } else {
          on = 0;
        }
      }
      ctx.stroke();
    };

    const arc = (idx: number, col: string) => {
      ctx.strokeStyle = col;
      ctx.lineWidth = 2;
      ctx.shadowColor = col;
      ctx.shadowBlur = 10;
      ctx.beginPath();
      let on = 0;
      for (let k = 0; k <= 40; k++) {
        const f = k / 40;
        const a = [
          O[0] * (1 - f) + M[idx][0] * f,
          O[1] * (1 - f) + M[idx][1] * f,
          O[2] * (1 - f) + M[idx][2] * f
        ];
        const l = Math.hypot(a[0], a[1], a[2]) || 1;
        const e = (1 + 0.28 * Math.sin(Math.PI * f)) / l;
        const p = r([a[0] * e, a[1] * e, a[2] * e]);
        if (p[2] > 0) {
          const X = cx + p[0] * R;
          const Y = cy - p[1] * R;
          if (on) ctx.lineTo(X, Y);
          else ctx.moveTo(X, Y);
          on = 1;
        } else {
          on = 0;
        }
      }
      ctx.stroke();
      ctx.shadowBlur = 0;
    };

    const focusIndex = (idx: number) => {
      fi = idx;
      const c = VISA_COUNTRIES[idx];
      if (c) {
        tr = (-c.lon * Math.PI) / 180;
        tt = Math.max(-0.5, Math.min(0.6, (c.lat * Math.PI) / 180 * 0.6));
        setActiveSlug(c.slug);
      }
    };

    const draw = () => {
      animId = requestAnimationFrame(draw);
      if (document.hidden || !cv.clientWidth) return;
      if (cv.clientWidth !== W) size();
      t++;

      if (!drag) {
        const d = ((((tr - rot + Math.PI) % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI)) - Math.PI;
        rot += d * 0.05;
        tilt += (tt - tilt) * 0.05;
      }

      ctx.clearRect(0, 0, W, W);

      // Radial outer atmosphere glow
      const outerGlow = ctx.createRadialGradient(cx, cy, R * 0.92, cx, cy, R * 1.25);
      outerGlow.addColorStop(0, 'rgba(99, 102, 241, 0.4)');
      outerGlow.addColorStop(1, 'rgba(99, 102, 241, 0)');
      ctx.fillStyle = outerGlow;
      ctx.fillRect(0, 0, W, W);

      // Deep sphere gradient
      const sphereGrad = ctx.createRadialGradient(cx - R * 0.35, cy - R * 0.4, R * 0.1, cx, cy, R);
      sphereGrad.addColorStop(0, '#2b3377');
      sphereGrad.addColorStop(0.55, '#12173f');
      sphereGrad.addColorStop(1, '#080a1c');
      ctx.fillStyle = sphereGrad;
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, 7);
      ctx.fill();

      // Graticule grid
      ctx.strokeStyle = 'rgba(165, 180, 252, 0.12)';
      ctx.lineWidth = 1;
      [-60, -30, 0, 30, 60].forEach(latDeg => {
        line(f => v(latDeg, -180 + 360 * f));
      });
      for (let i = 0; i < 12; i++) {
        const lo = i * 30 - 180;
        line(f => v(-90 + 180 * f, lo));
      }

      // Project continent dots
      for (let i = 0; i < N; i++) {
        const p = r(D[i]);
        PX[i] = cx + p[0] * R;
        PY[i] = cy - p[1] * R;
        PB[i] = p[2] <= 0 ? 9 : p[2] < 0.35 ? 0 : p[2] < 0.7 ? 1 : 2;
      }

      const z = Math.max(1.6, W / 240);
      const dotColors = ['#6366f1', '#818cf8', '#34d399'];
      const dotAlphas = [0.55, 0.85, 1.0];

      for (let b = 0; b < 3; b++) {
        ctx.fillStyle = dotColors[b];
        ctx.globalAlpha = dotAlphas[b];
        for (let j = 0; j < N; j++) {
          if (PB[j] === b) {
            ctx.fillRect(PX[j] - z / 2, PY[j] - z / 2, z, z);
          }
        }
      }
      ctx.globalAlpha = 1;

      // Globe rim edge
      ctx.strokeStyle = 'rgba(199, 210, 254, 0.45)';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, 7);
      ctx.stroke();

      // Flight arc from Mumbai
      if (fi >= 0 && fi < VISA_COUNTRIES.length) {
        arc(fi, '#f97316');
      }
      if (hov >= 0 && hov !== fi && hov < VISA_COUNTRIES.length) {
        arc(hov, '#ffffff');
      }

      hit = [];
      const originPoint = r(O);
      if (originPoint[2] > 0) {
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(cx + originPoint[0] * R, cy - originPoint[1] * R, W / 110, 0, 7);
        ctx.fill();
      }

      // Country pins
      for (let i = 0; i < M.length; i++) {
        const p = r(M[i]);
        if (p[2] > 0.05) {
          const mx = cx + p[0] * R;
          const my = cy - p[1] * R;
          hit.push([mx, my, i]);

          if (i === fi || i === hov) {
            const pu = (t % 70) / 70;
            ctx.strokeStyle = `rgba(249, 115, 22, ${1 - pu})`;
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.arc(mx, my, W / 70 + pu * (W / 24), 0, 7);
            ctx.stroke();

            ctx.fillStyle = i === fi ? '#f97316' : '#ffffff';
            ctx.beginPath();
            ctx.arc(mx, my, W / 80, 0, 7);
            ctx.fill();
          } else {
            ctx.fillStyle = `rgba(52, 211, 153, ${0.45 + 0.55 * p[2]})`;
            ctx.beginPath();
            ctx.arc(mx, my, W / 180, 0, 7);
            ctx.fill();
          }
        }
      }
    };

    const getNearCountry = (clientX: number, clientY: number): number => {
      const b = cv.getBoundingClientRect();
      const qx = clientX - b.left;
      const qy = clientY - b.top;
      let k = -1;
      const bd = W / 20;
      hit.forEach(h => {
        const d = Math.hypot(h[0] - qx, h[1] - qy);
        if (d < bd) {
          k = h[2];
        }
      });
      return k;
    };

    const onPointerDown = (e: PointerEvent) => {
      drag = 1;
      mv = 0;
      lx = e.clientX;
      cv.setPointerCapture(e.pointerId);
      cv.style.cursor = 'grabbing';
    };

    const onPointerMove = (e: PointerEvent) => {
      if (drag) {
        const d = e.clientX - lx;
        mv += Math.abs(d);
        rot += d * 0.008;
        lx = e.clientX;
      } else {
        const h = getNearCountry(e.clientX, e.clientY);
        if (h !== hov) {
          hov = h;
          if (h >= 0) {
            setActiveSlug(VISA_COUNTRIES[h].slug);
          } else {
            setActiveSlug(VISA_COUNTRIES[fi].slug);
          }
        }
        cv.style.cursor = h >= 0 ? 'pointer' : 'grab';
      }
    };

    const onPointerUp = (e: PointerEvent) => {
      drag = 0;
      cv.style.cursor = 'grab';
      if (mv < 6) {
        const h = getNearCountry(e.clientX, e.clientY);
        if (h >= 0) {
          focusIndex(h);
          if (onSelectCountry) onSelectCountry(VISA_COUNTRIES[h]);
        }
      } else {
        tr = rot;
        tt = tilt;
        pz = Date.now() + 7000;
      }
    };

    const onPointerLeave = () => {
      hov = -1;
      drag = 0;
      setActiveSlug(VISA_COUNTRIES[fi].slug);
    };

    cv.addEventListener('pointerdown', onPointerDown);
    cv.addEventListener('pointermove', onPointerMove);
    cv.addEventListener('pointerup', onPointerUp);
    cv.addEventListener('pointerleave', onPointerLeave);

    size();
    focusIndex(0);
    rot = tr;
    tilt = tt;
    draw();

    // Auto rotate every 4 seconds unless user interacts
    const interval = setInterval(() => {
      if (Date.now() < pz || hov >= 0 || drag) return;
      const curIdx = FEAT.indexOf(fi);
      const nextIdx = FEAT[(curIdx + 1) % FEAT.length];
      focusIndex(nextIdx);
    }, 4200);

    return () => {
      cancelAnimationFrame(animId);
      clearInterval(interval);
      cv.removeEventListener('pointerdown', onPointerDown);
      cv.removeEventListener('pointermove', onPointerMove);
      cv.removeEventListener('pointerup', onPointerUp);
      cv.removeEventListener('pointerleave', onPointerLeave);
    };
  }, []);

  const handleChipClick = (slug: string) => {
    const idx = VISA_COUNTRIES.findIndex(c => c.slug === slug);
    if (idx >= 0) {
      setActiveSlug(slug);
    }
  };

  return (
    <div className="bg-gradient-to-b from-slate-900 via-[#0b1029] to-[#060816] rounded-3xl p-5 md:p-7 shadow-2xl border border-indigo-900/40 text-white max-w-xl mx-auto w-full relative overflow-hidden">
      {/* Top Header */}
      <div className="flex items-center justify-between text-xs text-indigo-300 font-medium mb-3 px-2">
        <span className="flex items-center gap-1.5">
          <Globe className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
          Live Entry Map (From India)
        </span>
        <span className="text-slate-400">Drag to spin · Tap pin to inspect</span>
      </div>

      {/* 3D Canvas */}
      <div className="relative aspect-square max-w-[420px] mx-auto w-full flex items-center justify-center">
        <canvas
          ref={canvasRef}
          className="w-full h-full block cursor-grab active:cursor-grabbing touch-pan-y"
          aria-label="Interactive 3D Globe for Indian Visa Destinations"
        />

        {/* Speed Stamp Floaters */}
        <div className="absolute top-4 left-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-indigo-100 dark:border-indigo-900 rounded-xl px-3 py-2 shadow-lg text-slate-800 dark:text-white text-xs font-semibold transform -rotate-6 hidden sm:block">
          <span className="text-[10px] text-slate-500 uppercase tracking-wider block">Fast Track</span>
          <b className="text-sm font-extrabold text-blue-600 block">&lt; 60 Min*</b>
          Vietnam e-Visa
        </div>

        <div className="absolute bottom-6 right-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-indigo-100 dark:border-indigo-900 rounded-xl px-3 py-2 shadow-lg text-slate-800 dark:text-white text-xs font-semibold transform rotate-6 hidden sm:block">
          <span className="text-[10px] text-slate-500 uppercase tracking-wider block">Same Day</span>
          <b className="text-sm font-extrabold text-emerald-600 block">4 Hours*</b>
          UAE / Dubai Visa
        </div>
      </div>

      {/* Focused Country Live Preview Card */}
      {activeCountry && (
        <div className="mt-4 bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-4 flex items-center justify-between gap-3 transition-all duration-300 hover:bg-white/15">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-indigo-500 text-white font-extrabold text-sm flex items-center justify-center shadow-md flex-shrink-0">
              {activeCountry.code}
            </div>
            <div>
              <div className="font-bold text-base text-white flex items-center gap-2">
                {activeCountry.name}
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold ${
                  activeCountry.entryType === 'Visa-free or on arrival'
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                    : activeCountry.entryType === 'e-Visa'
                    ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                    : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                }`}>
                  {activeCountry.entryType}
                </span>
              </div>
              <p className="text-xs text-indigo-200 line-clamp-1 mt-0.5">
                {activeCountry.summary}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 flex-shrink-0">
            <Link
              to={`/visa/${activeCountry.slug}`}
              className="px-3.5 py-2 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold text-xs flex items-center gap-1.5 transition-colors shadow-md shadow-emerald-500/20 cursor-pointer"
            >
              <span>View Requirements</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <a
              href={createVisaWhatsAppUrl(`Hi Rudraksh Safar, I need assistance with a ${activeCountry.name} visa.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white transition-colors flex items-center justify-center shadow-md"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}

      {/* Quick Destination Chips */}
      <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-white/10">
        {FEAT_SLUGS.map(slug => {
          const c = VISA_COUNTRIES.find(item => item.slug === slug);
          if (!c) return null;
          const isSelected = activeSlug === slug;
          return (
            <button
              key={slug}
              type="button"
              onClick={() => handleChipClick(slug)}
              className={`px-2.5 py-1 rounded-full text-xs font-medium transition-all cursor-pointer ${
                isSelected
                  ? 'bg-white text-slate-900 font-bold shadow-md'
                  : 'bg-white/5 text-slate-300 hover:bg-white/15 border border-white/10'
              }`}
            >
              {c.name.replace(/\s*\(.*\)/, '')}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default VisaGlobe;
