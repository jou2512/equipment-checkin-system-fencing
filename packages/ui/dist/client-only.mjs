"use client";
import { jsx as p, jsxs as te, Fragment as dt } from "react/jsx-runtime";
import * as l from "react";
import A, { useRef as De, useState as xt, useCallback as Le, useEffect as et, isValidElement as fS, PureComponent as ca, forwardRef as js, useImperativeHandle as Vs, useMemo as Gs, cloneElement as pS, useLayoutEffect as Us, createElement as $n, useContext as Hd, createContext as mS } from "react";
import { b as nt, c as N, B as la, f as cn, g as ln, a as $r, S as jn, u as ne, h as jd, I as hS, e as zl, d as Vd, i as Gd, C as Ws } from "./skeleton-Cd0Pyf74.mjs";
import * as Ir from "react-dom";
import vS from "react-dom";
import { useSyncExternalStore as gS } from "use-sync-external-store/shim";
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bS = nt("ArrowLeft", [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yS = nt("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dr = nt("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ks = nt("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wS = nt("ChevronUp", [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ua = nt("Circle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const SS = nt("GripVertical", [
  ["circle", { cx: "9", cy: "12", r: "1", key: "1vctgf" }],
  ["circle", { cx: "9", cy: "5", r: "1", key: "hp0tcf" }],
  ["circle", { cx: "9", cy: "19", r: "1", key: "fkjjf6" }],
  ["circle", { cx: "15", cy: "12", r: "1", key: "1tmaij" }],
  ["circle", { cx: "15", cy: "5", r: "1", key: "19l28e" }],
  ["circle", { cx: "15", cy: "19", r: "1", key: "f4zoj3" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xS = nt("Minus", [["path", { d: "M5 12h14", key: "1ays0h" }]]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const CS = nt("Moon", [
  ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const PS = nt("PanelLeft", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M9 3v18", key: "fh3hqa" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ES = nt("Sun", [
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
  ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
  ["path", { d: "M2 12h2", key: "1t8f8n" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }],
  ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
  ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ys = nt("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
function _S(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function Hl(e) {
  return _S(e) || Array.isArray(e);
}
function RS() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function qs(e, t) {
  const n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  const o = JSON.stringify(Object.keys(e.breakpoints || {})), a = JSON.stringify(Object.keys(t.breakpoints || {}));
  return o !== a ? !1 : n.every((i) => {
    const s = e[i], c = t[i];
    return typeof s == "function" ? `${s}` == `${c}` : !Hl(s) || !Hl(c) ? s === c : qs(s, c);
  });
}
function jl(e) {
  return e.concat().sort((t, n) => t.name > n.name ? 1 : -1).map((t) => t.options);
}
function TS(e, t) {
  if (e.length !== t.length) return !1;
  const n = jl(e), r = jl(t);
  return n.every((o, a) => {
    const i = r[a];
    return qs(o, i);
  });
}
function Xs(e) {
  return typeof e == "number";
}
function Ui(e) {
  return typeof e == "string";
}
function da(e) {
  return typeof e == "boolean";
}
function Vl(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function Pe(e) {
  return Math.abs(e);
}
function Zs(e) {
  return Math.sign(e);
}
function hr(e, t) {
  return Pe(e - t);
}
function AS(e, t) {
  if (e === 0 || t === 0 || Pe(e) <= Pe(t)) return 0;
  const n = hr(Pe(e), Pe(t));
  return Pe(n / e);
}
function NS(e) {
  return Math.round(e * 100) / 100;
}
function gr(e) {
  return br(e).map(Number);
}
function lt(e) {
  return e[kr(e)];
}
function kr(e) {
  return Math.max(0, e.length - 1);
}
function Js(e, t) {
  return t === kr(e);
}
function Gl(e, t = 0) {
  return Array.from(Array(e), (n, r) => t + r);
}
function br(e) {
  return Object.keys(e);
}
function Ud(e, t) {
  return [e, t].reduce((n, r) => (br(r).forEach((o) => {
    const a = n[o], i = r[o], s = Vl(a) && Vl(i);
    n[o] = s ? Ud(a, i) : i;
  }), n), {});
}
function Wi(e, t) {
  return typeof t.MouseEvent < "u" && e instanceof t.MouseEvent;
}
function MS(e, t) {
  const n = {
    start: r,
    center: o,
    end: a
  };
  function r() {
    return 0;
  }
  function o(c) {
    return a(c) / 2;
  }
  function a(c) {
    return t - c;
  }
  function i(c, u) {
    return Ui(e) ? n[e](c) : e(t, c, u);
  }
  return {
    measure: i
  };
}
function yr() {
  let e = [];
  function t(o, a, i, s = {
    passive: !0
  }) {
    let c;
    if ("addEventListener" in o)
      o.addEventListener(a, i, s), c = () => o.removeEventListener(a, i, s);
    else {
      const u = o;
      u.addListener(i), c = () => u.removeListener(i);
    }
    return e.push(c), r;
  }
  function n() {
    e = e.filter((o) => o());
  }
  const r = {
    add: t,
    clear: n
  };
  return r;
}
function OS(e, t, n, r) {
  const o = yr(), a = 1e3 / 60;
  let i = null, s = 0, c = 0;
  function u() {
    o.add(e, "visibilitychange", () => {
      e.hidden && g();
    });
  }
  function d() {
    b(), o.clear();
  }
  function f(v) {
    if (!c) return;
    i || (i = v, n(), n());
    const y = v - i;
    for (i = v, s += y; s >= a; )
      n(), s -= a;
    const w = s / a;
    r(w), c && (c = t.requestAnimationFrame(f));
  }
  function m() {
    c || (c = t.requestAnimationFrame(f));
  }
  function b() {
    t.cancelAnimationFrame(c), i = null, s = 0, c = 0;
  }
  function g() {
    i = null, s = 0;
  }
  return {
    init: u,
    destroy: d,
    start: m,
    stop: b,
    update: n,
    render: r
  };
}
function $S(e, t) {
  const n = t === "rtl", r = e === "y", o = r ? "y" : "x", a = r ? "x" : "y", i = !r && n ? -1 : 1, s = d(), c = f();
  function u(g) {
    const {
      height: h,
      width: v
    } = g;
    return r ? h : v;
  }
  function d() {
    return r ? "top" : n ? "right" : "left";
  }
  function f() {
    return r ? "bottom" : n ? "left" : "right";
  }
  function m(g) {
    return g * i;
  }
  return {
    scroll: o,
    cross: a,
    startEdge: s,
    endEdge: c,
    measureSize: u,
    direction: m
  };
}
function un(e = 0, t = 0) {
  const n = Pe(e - t);
  function r(u) {
    return u < e;
  }
  function o(u) {
    return u > t;
  }
  function a(u) {
    return r(u) || o(u);
  }
  function i(u) {
    return a(u) ? r(u) ? e : t : u;
  }
  function s(u) {
    return n ? u - n * Math.ceil((u - t) / n) : u;
  }
  return {
    length: n,
    max: t,
    min: e,
    constrain: i,
    reachedAny: a,
    reachedMax: o,
    reachedMin: r,
    removeOffset: s
  };
}
function Wd(e, t, n) {
  const {
    constrain: r
  } = un(0, e), o = e + 1;
  let a = i(t);
  function i(m) {
    return n ? Pe((o + m) % o) : r(m);
  }
  function s() {
    return a;
  }
  function c(m) {
    return a = i(m), f;
  }
  function u(m) {
    return d().set(s() + m);
  }
  function d() {
    return Wd(e, s(), n);
  }
  const f = {
    get: s,
    set: c,
    add: u,
    clone: d
  };
  return f;
}
function IS(e, t, n, r, o, a, i, s, c, u, d, f, m, b, g, h, v, y, w) {
  const {
    cross: S,
    direction: x
  } = e, P = ["INPUT", "SELECT", "TEXTAREA"], E = {
    passive: !1
  }, C = yr(), T = yr(), R = un(50, 225).constrain(b.measure(20)), D = {
    mouse: 300,
    touch: 400
  }, M = {
    mouse: 500,
    touch: 600
  }, F = g ? 43 : 25;
  let $ = !1, I = 0, z = 0, L = !1, U = !1, H = !1, B = !1;
  function oe(V) {
    if (!w) return;
    function Z(q) {
      (da(w) || w(V, q)) && Y(q);
    }
    const _ = t;
    C.add(_, "dragstart", (q) => q.preventDefault(), E).add(_, "touchmove", () => {
    }, E).add(_, "touchend", () => {
    }).add(_, "touchstart", Z).add(_, "mousedown", Z).add(_, "touchcancel", G).add(_, "contextmenu", G).add(_, "click", ee, !0);
  }
  function re() {
    C.clear(), T.clear();
  }
  function ie() {
    const V = B ? n : t;
    T.add(V, "touchmove", O, E).add(V, "touchend", G).add(V, "mousemove", O, E).add(V, "mouseup", G);
  }
  function j(V) {
    const Z = V.nodeName || "";
    return P.includes(Z);
  }
  function K() {
    return (g ? M : D)[B ? "mouse" : "touch"];
  }
  function J(V, Z) {
    const _ = f.add(Zs(V) * -1), q = d.byDistance(V, !g).distance;
    return g || Pe(V) < R ? q : v && Z ? q * 0.5 : d.byIndex(_.get(), 0).distance;
  }
  function Y(V) {
    const Z = Wi(V, r);
    B = Z, H = g && Z && !V.buttons && $, $ = hr(o.get(), i.get()) >= 2, !(Z && V.button !== 0) && (j(V.target) || (L = !0, a.pointerDown(V), u.useFriction(0).useDuration(0), o.set(i), ie(), I = a.readPoint(V), z = a.readPoint(V, S), m.emit("pointerDown")));
  }
  function O(V) {
    if (!Wi(V, r) && V.touches.length >= 2) return G(V);
    const _ = a.readPoint(V), q = a.readPoint(V, S), se = hr(_, I), le = hr(q, z);
    if (!U && !B && (!V.cancelable || (U = se > le, !U)))
      return G(V);
    const ue = a.pointerMove(V);
    se > h && (H = !0), u.useFriction(0.3).useDuration(0.75), s.start(), o.add(x(ue)), V.preventDefault();
  }
  function G(V) {
    const _ = d.byDistance(0, !1).index !== f.get(), q = a.pointerUp(V) * K(), se = J(x(q), _), le = AS(q, se), ue = F - 10 * le, de = y + le / 50;
    U = !1, L = !1, T.clear(), u.useDuration(ue).useFriction(de), c.distance(se, !g), B = !1, m.emit("pointerUp");
  }
  function ee(V) {
    H && (V.stopPropagation(), V.preventDefault(), H = !1);
  }
  function Q() {
    return L;
  }
  return {
    init: oe,
    destroy: re,
    pointerDown: Q
  };
}
function DS(e, t) {
  let r, o;
  function a(f) {
    return f.timeStamp;
  }
  function i(f, m) {
    const g = `client${(m || e.scroll) === "x" ? "X" : "Y"}`;
    return (Wi(f, t) ? f : f.touches[0])[g];
  }
  function s(f) {
    return r = f, o = f, i(f);
  }
  function c(f) {
    const m = i(f) - i(o), b = a(f) - a(r) > 170;
    return o = f, b && (r = f), m;
  }
  function u(f) {
    if (!r || !o) return 0;
    const m = i(o) - i(r), b = a(f) - a(r), g = a(f) - a(o) > 170, h = m / b;
    return b && !g && Pe(h) > 0.1 ? h : 0;
  }
  return {
    pointerDown: s,
    pointerMove: c,
    pointerUp: u,
    readPoint: i
  };
}
function kS() {
  function e(n) {
    const {
      offsetTop: r,
      offsetLeft: o,
      offsetWidth: a,
      offsetHeight: i
    } = n;
    return {
      top: r,
      right: o + a,
      bottom: r + i,
      left: o,
      width: a,
      height: i
    };
  }
  return {
    measure: e
  };
}
function LS(e) {
  function t(r) {
    return e * (r / 100);
  }
  return {
    measure: t
  };
}
function FS(e, t, n, r, o, a, i) {
  const s = [e].concat(r);
  let c, u, d = [], f = !1;
  function m(v) {
    return o.measureSize(i.measure(v));
  }
  function b(v) {
    if (!a) return;
    u = m(e), d = r.map(m);
    function y(w) {
      for (const S of w) {
        if (f) return;
        const x = S.target === e, P = r.indexOf(S.target), E = x ? u : d[P], C = m(x ? e : r[P]);
        if (Pe(C - E) >= 0.5) {
          v.reInit(), t.emit("resize");
          break;
        }
      }
    }
    c = new ResizeObserver((w) => {
      (da(a) || a(v, w)) && y(w);
    }), n.requestAnimationFrame(() => {
      s.forEach((w) => c.observe(w));
    });
  }
  function g() {
    f = !0, c && c.disconnect();
  }
  return {
    init: b,
    destroy: g
  };
}
function BS(e, t, n, r, o, a) {
  let i = 0, s = 0, c = o, u = a, d = e.get(), f = 0;
  function m() {
    const E = r.get() - e.get(), C = !c;
    let T = 0;
    return C ? (i = 0, n.set(r), e.set(r), T = E) : (n.set(e), i += E / c, i *= u, d += i, e.add(i), T = d - f), s = Zs(T), f = d, P;
  }
  function b() {
    const E = r.get() - t.get();
    return Pe(E) < 1e-3;
  }
  function g() {
    return c;
  }
  function h() {
    return s;
  }
  function v() {
    return i;
  }
  function y() {
    return S(o);
  }
  function w() {
    return x(a);
  }
  function S(E) {
    return c = E, P;
  }
  function x(E) {
    return u = E, P;
  }
  const P = {
    direction: h,
    duration: g,
    velocity: v,
    seek: m,
    settled: b,
    useBaseFriction: w,
    useBaseDuration: y,
    useFriction: x,
    useDuration: S
  };
  return P;
}
function zS(e, t, n, r, o) {
  const a = o.measure(10), i = o.measure(50), s = un(0.1, 0.99);
  let c = !1;
  function u() {
    return !(c || !e.reachedAny(n.get()) || !e.reachedAny(t.get()));
  }
  function d(b) {
    if (!u()) return;
    const g = e.reachedMin(t.get()) ? "min" : "max", h = Pe(e[g] - t.get()), v = n.get() - t.get(), y = s.constrain(h / i);
    n.subtract(v * y), !b && Pe(v) < a && (n.set(e.constrain(n.get())), r.useDuration(25).useBaseFriction());
  }
  function f(b) {
    c = !b;
  }
  return {
    shouldConstrain: u,
    constrain: d,
    toggleActive: f
  };
}
function HS(e, t, n, r, o) {
  const a = un(-t + e, 0), i = f(), s = d(), c = m();
  function u(g, h) {
    return hr(g, h) <= 1;
  }
  function d() {
    const g = i[0], h = lt(i), v = i.lastIndexOf(g), y = i.indexOf(h) + 1;
    return un(v, y);
  }
  function f() {
    return n.map((g, h) => {
      const {
        min: v,
        max: y
      } = a, w = a.constrain(g), S = !h, x = Js(n, h);
      return S ? y : x || u(v, w) ? v : u(y, w) ? y : w;
    }).map((g) => parseFloat(g.toFixed(3)));
  }
  function m() {
    if (t <= e + o) return [a.max];
    if (r === "keepSnaps") return i;
    const {
      min: g,
      max: h
    } = s;
    return i.slice(g, h);
  }
  return {
    snapsContained: c,
    scrollContainLimit: s
  };
}
function jS(e, t, n) {
  const r = t[0], o = n ? r - e : lt(t);
  return {
    limit: un(o, r)
  };
}
function VS(e, t, n, r) {
  const a = t.min + 0.1, i = t.max + 0.1, {
    reachedMin: s,
    reachedMax: c
  } = un(a, i);
  function u(m) {
    return m === 1 ? c(n.get()) : m === -1 ? s(n.get()) : !1;
  }
  function d(m) {
    if (!u(m)) return;
    const b = e * (m * -1);
    r.forEach((g) => g.add(b));
  }
  return {
    loop: d
  };
}
function GS(e) {
  const {
    max: t,
    length: n
  } = e;
  function r(a) {
    const i = a - t;
    return n ? i / -n : 0;
  }
  return {
    get: r
  };
}
function US(e, t, n, r, o) {
  const {
    startEdge: a,
    endEdge: i
  } = e, {
    groupSlides: s
  } = o, c = f().map(t.measure), u = m(), d = b();
  function f() {
    return s(r).map((h) => lt(h)[i] - h[0][a]).map(Pe);
  }
  function m() {
    return r.map((h) => n[a] - h[a]).map((h) => -Pe(h));
  }
  function b() {
    return s(u).map((h) => h[0]).map((h, v) => h + c[v]);
  }
  return {
    snaps: u,
    snapsAligned: d
  };
}
function WS(e, t, n, r, o, a) {
  const {
    groupSlides: i
  } = o, {
    min: s,
    max: c
  } = r, u = d();
  function d() {
    const m = i(a), b = !e || t === "keepSnaps";
    return n.length === 1 ? [a] : b ? m : m.slice(s, c).map((g, h, v) => {
      const y = !h, w = Js(v, h);
      if (y) {
        const S = lt(v[0]) + 1;
        return Gl(S);
      }
      if (w) {
        const S = kr(a) - lt(v)[0] + 1;
        return Gl(S, lt(v)[0]);
      }
      return g;
    });
  }
  return {
    slideRegistry: u
  };
}
function KS(e, t, n, r, o) {
  const {
    reachedAny: a,
    removeOffset: i,
    constrain: s
  } = r;
  function c(g) {
    return g.concat().sort((h, v) => Pe(h) - Pe(v))[0];
  }
  function u(g) {
    const h = e ? i(g) : s(g), v = t.map((w, S) => ({
      diff: d(w - h, 0),
      index: S
    })).sort((w, S) => Pe(w.diff) - Pe(S.diff)), {
      index: y
    } = v[0];
    return {
      index: y,
      distance: h
    };
  }
  function d(g, h) {
    const v = [g, g + n, g - n];
    if (!e) return g;
    if (!h) return c(v);
    const y = v.filter((w) => Zs(w) === h);
    return y.length ? c(y) : lt(v) - n;
  }
  function f(g, h) {
    const v = t[g] - o.get(), y = d(v, h);
    return {
      index: g,
      distance: y
    };
  }
  function m(g, h) {
    const v = o.get() + g, {
      index: y,
      distance: w
    } = u(v), S = !e && a(v);
    if (!h || S) return {
      index: y,
      distance: g
    };
    const x = t[y] - w, P = g + d(x, 0);
    return {
      index: y,
      distance: P
    };
  }
  return {
    byDistance: m,
    byIndex: f,
    shortcut: d
  };
}
function YS(e, t, n, r, o, a, i) {
  function s(f) {
    const m = f.distance, b = f.index !== t.get();
    a.add(m), m && (r.duration() ? e.start() : (e.update(), e.render(1), e.update())), b && (n.set(t.get()), t.set(f.index), i.emit("select"));
  }
  function c(f, m) {
    const b = o.byDistance(f, m);
    s(b);
  }
  function u(f, m) {
    const b = t.clone().set(f), g = o.byIndex(b.get(), m);
    s(g);
  }
  return {
    distance: c,
    index: u
  };
}
function qS(e, t, n, r, o, a, i, s) {
  const c = {
    passive: !0,
    capture: !0
  };
  let u = 0;
  function d(b) {
    if (!s) return;
    function g(h) {
      if ((/* @__PURE__ */ new Date()).getTime() - u > 10) return;
      i.emit("slideFocusStart"), e.scrollLeft = 0;
      const w = n.findIndex((S) => S.includes(h));
      Xs(w) && (o.useDuration(0), r.index(w, 0), i.emit("slideFocus"));
    }
    a.add(document, "keydown", f, !1), t.forEach((h, v) => {
      a.add(h, "focus", (y) => {
        (da(s) || s(b, y)) && g(v);
      }, c);
    });
  }
  function f(b) {
    b.code === "Tab" && (u = (/* @__PURE__ */ new Date()).getTime());
  }
  return {
    init: d
  };
}
function ur(e) {
  let t = e;
  function n() {
    return t;
  }
  function r(c) {
    t = i(c);
  }
  function o(c) {
    t += i(c);
  }
  function a(c) {
    t -= i(c);
  }
  function i(c) {
    return Xs(c) ? c : c.get();
  }
  return {
    get: n,
    set: r,
    add: o,
    subtract: a
  };
}
function Kd(e, t) {
  const n = e.scroll === "x" ? i : s, r = t.style;
  let o = null, a = !1;
  function i(m) {
    return `translate3d(${m}px,0px,0px)`;
  }
  function s(m) {
    return `translate3d(0px,${m}px,0px)`;
  }
  function c(m) {
    if (a) return;
    const b = NS(e.direction(m));
    b !== o && (r.transform = n(b), o = b);
  }
  function u(m) {
    a = !m;
  }
  function d() {
    a || (r.transform = "", t.getAttribute("style") || t.removeAttribute("style"));
  }
  return {
    clear: d,
    to: c,
    toggleActive: u
  };
}
function XS(e, t, n, r, o, a, i, s, c) {
  const d = gr(o), f = gr(o).reverse(), m = y().concat(w());
  function b(C, T) {
    return C.reduce((R, D) => R - o[D], T);
  }
  function g(C, T) {
    return C.reduce((R, D) => b(R, T) > 0 ? R.concat([D]) : R, []);
  }
  function h(C) {
    return a.map((T, R) => ({
      start: T - r[R] + 0.5 + C,
      end: T + t - 0.5 + C
    }));
  }
  function v(C, T, R) {
    const D = h(T);
    return C.map((M) => {
      const F = R ? 0 : -n, $ = R ? n : 0, I = R ? "end" : "start", z = D[M][I];
      return {
        index: M,
        loopPoint: z,
        slideLocation: ur(-1),
        translate: Kd(e, c[M]),
        target: () => s.get() > z ? F : $
      };
    });
  }
  function y() {
    const C = i[0], T = g(f, C);
    return v(T, n, !1);
  }
  function w() {
    const C = t - i[0] - 1, T = g(d, C);
    return v(T, -n, !0);
  }
  function S() {
    return m.every(({
      index: C
    }) => {
      const T = d.filter((R) => R !== C);
      return b(T, t) <= 0.1;
    });
  }
  function x() {
    m.forEach((C) => {
      const {
        target: T,
        translate: R,
        slideLocation: D
      } = C, M = T();
      M !== D.get() && (R.to(M), D.set(M));
    });
  }
  function P() {
    m.forEach((C) => C.translate.clear());
  }
  return {
    canLoop: S,
    clear: P,
    loop: x,
    loopPoints: m
  };
}
function ZS(e, t, n) {
  let r, o = !1;
  function a(c) {
    if (!n) return;
    function u(d) {
      for (const f of d)
        if (f.type === "childList") {
          c.reInit(), t.emit("slidesChanged");
          break;
        }
    }
    r = new MutationObserver((d) => {
      o || (da(n) || n(c, d)) && u(d);
    }), r.observe(e, {
      childList: !0
    });
  }
  function i() {
    r && r.disconnect(), o = !0;
  }
  return {
    init: a,
    destroy: i
  };
}
function JS(e, t, n, r) {
  const o = {};
  let a = null, i = null, s, c = !1;
  function u() {
    s = new IntersectionObserver((g) => {
      c || (g.forEach((h) => {
        const v = t.indexOf(h.target);
        o[v] = h;
      }), a = null, i = null, n.emit("slidesInView"));
    }, {
      root: e.parentElement,
      threshold: r
    }), t.forEach((g) => s.observe(g));
  }
  function d() {
    s && s.disconnect(), c = !0;
  }
  function f(g) {
    return br(o).reduce((h, v) => {
      const y = parseInt(v), {
        isIntersecting: w
      } = o[y];
      return (g && w || !g && !w) && h.push(y), h;
    }, []);
  }
  function m(g = !0) {
    if (g && a) return a;
    if (!g && i) return i;
    const h = f(g);
    return g && (a = h), g || (i = h), h;
  }
  return {
    init: u,
    destroy: d,
    get: m
  };
}
function QS(e, t, n, r, o, a) {
  const {
    measureSize: i,
    startEdge: s,
    endEdge: c
  } = e, u = n[0] && o, d = g(), f = h(), m = n.map(i), b = v();
  function g() {
    if (!u) return 0;
    const w = n[0];
    return Pe(t[s] - w[s]);
  }
  function h() {
    if (!u) return 0;
    const w = a.getComputedStyle(lt(r));
    return parseFloat(w.getPropertyValue(`margin-${c}`));
  }
  function v() {
    return n.map((w, S, x) => {
      const P = !S, E = Js(x, S);
      return P ? m[S] + d : E ? m[S] + f : x[S + 1][s] - w[s];
    }).map(Pe);
  }
  return {
    slideSizes: m,
    slideSizesWithGaps: b,
    startGap: d,
    endGap: f
  };
}
function ex(e, t, n, r, o, a, i, s, c) {
  const {
    startEdge: u,
    endEdge: d,
    direction: f
  } = e, m = Xs(n);
  function b(y, w) {
    return gr(y).filter((S) => S % w === 0).map((S) => y.slice(S, S + w));
  }
  function g(y) {
    return y.length ? gr(y).reduce((w, S, x) => {
      const P = lt(w) || 0, E = P === 0, C = S === kr(y), T = o[u] - a[P][u], R = o[u] - a[S][d], D = !r && E ? f(i) : 0, M = !r && C ? f(s) : 0, F = Pe(R - M - (T + D));
      return x && F > t + c && w.push(S), C && w.push(y.length), w;
    }, []).map((w, S, x) => {
      const P = Math.max(x[S - 1] || 0);
      return y.slice(P, w);
    }) : [];
  }
  function h(y) {
    return m ? b(y, n) : g(y);
  }
  return {
    groupSlides: h
  };
}
function tx(e, t, n, r, o, a, i) {
  const {
    align: s,
    axis: c,
    direction: u,
    startIndex: d,
    loop: f,
    duration: m,
    dragFree: b,
    dragThreshold: g,
    inViewThreshold: h,
    slidesToScroll: v,
    skipSnaps: y,
    containScroll: w,
    watchResize: S,
    watchSlides: x,
    watchDrag: P,
    watchFocus: E
  } = a, C = 2, T = kS(), R = T.measure(t), D = n.map(T.measure), M = $S(c, u), F = M.measureSize(R), $ = LS(F), I = MS(s, F), z = !f && !!w, L = f || !!w, {
    slideSizes: U,
    slideSizesWithGaps: H,
    startGap: B,
    endGap: oe
  } = QS(M, R, D, n, L, o), re = ex(M, F, v, f, R, D, B, oe, C), {
    snaps: ie,
    snapsAligned: j
  } = US(M, I, R, D, re), K = -lt(ie) + lt(H), {
    snapsContained: J,
    scrollContainLimit: Y
  } = HS(F, K, j, w, C), O = z ? J : j, {
    limit: G
  } = jS(K, O, f), ee = Wd(kr(O), d, f), Q = ee.clone(), X = gr(n), V = ({
    dragHandler: ot,
    scrollBody: Jt,
    scrollBounds: at,
    options: {
      loop: He
    }
  }) => {
    He || at.constrain(ot.pointerDown()), Jt.seek();
  }, Z = ({
    scrollBody: ot,
    translate: Jt,
    location: at,
    offsetLocation: He,
    previousLocation: Qt,
    scrollLooper: or,
    slideLooper: si,
    dragHandler: ci,
    animation: li,
    eventHandler: ae,
    scrollBounds: pe,
    options: {
      loop: ge
    }
  }, fe) => {
    const we = ot.settled(), ke = !pe.shouldConstrain(), Ie = ge ? we : we && ke, it = Ie && !ci.pointerDown();
    it && li.stop();
    const Ue = at.get() * fe + Qt.get() * (1 - fe);
    He.set(Ue), ge && (or.loop(ot.direction()), si.loop()), Jt.to(He.get()), it && ae.emit("settle"), Ie || ae.emit("scroll");
  }, _ = OS(r, o, () => V(Ft), (ot) => Z(Ft, ot)), q = 0.68, se = O[ee.get()], le = ur(se), ue = ur(se), de = ur(se), me = ur(se), Ne = BS(le, de, ue, me, m, q), Te = KS(f, O, K, G, me), Me = YS(_, ee, Q, Ne, Te, me, i), je = GS(G), Ve = yr(), qe = JS(t, n, i, h), {
    slideRegistry: Xe
  } = WS(z, w, O, Y, re, X), Ot = qS(e, n, Xe, Me, Ne, Ve, i, E), Ft = {
    ownerDocument: r,
    ownerWindow: o,
    eventHandler: i,
    containerRect: R,
    slideRects: D,
    animation: _,
    axis: M,
    dragHandler: IS(M, e, r, o, me, DS(M, o), le, _, Me, Ne, Te, ee, i, $, b, g, y, q, P),
    eventStore: Ve,
    percentOfView: $,
    index: ee,
    indexPrevious: Q,
    limit: G,
    location: le,
    offsetLocation: de,
    previousLocation: ue,
    options: a,
    resizeHandler: FS(t, i, o, n, M, S, T),
    scrollBody: Ne,
    scrollBounds: zS(G, de, me, Ne, $),
    scrollLooper: VS(K, G, de, [le, de, ue, me]),
    scrollProgress: je,
    scrollSnapList: O.map(je.get),
    scrollSnaps: O,
    scrollTarget: Te,
    scrollTo: Me,
    slideLooper: XS(M, F, K, U, H, ie, O, de, n),
    slideFocus: Ot,
    slidesHandler: ZS(t, i, x),
    slidesInView: qe,
    slideIndexes: X,
    slideRegistry: Xe,
    slidesToScroll: re,
    target: me,
    translate: Kd(M, t)
  };
  return Ft;
}
function nx() {
  let e = {}, t;
  function n(u) {
    t = u;
  }
  function r(u) {
    return e[u] || [];
  }
  function o(u) {
    return r(u).forEach((d) => d(t, u)), c;
  }
  function a(u, d) {
    return e[u] = r(u).concat([d]), c;
  }
  function i(u, d) {
    return e[u] = r(u).filter((f) => f !== d), c;
  }
  function s() {
    e = {};
  }
  const c = {
    init: n,
    emit: o,
    off: i,
    on: a,
    clear: s
  };
  return c;
}
const rx = {
  align: "center",
  axis: "x",
  container: null,
  slides: null,
  containScroll: "trimSnaps",
  direction: "ltr",
  slidesToScroll: 1,
  inViewThreshold: 0,
  breakpoints: {},
  dragFree: !1,
  dragThreshold: 10,
  loop: !1,
  skipSnaps: !1,
  duration: 25,
  startIndex: 0,
  active: !0,
  watchDrag: !0,
  watchResize: !0,
  watchSlides: !0,
  watchFocus: !0
};
function ox(e) {
  function t(a, i) {
    return Ud(a, i || {});
  }
  function n(a) {
    const i = a.breakpoints || {}, s = br(i).filter((c) => e.matchMedia(c).matches).map((c) => i[c]).reduce((c, u) => t(c, u), {});
    return t(a, s);
  }
  function r(a) {
    return a.map((i) => br(i.breakpoints || {})).reduce((i, s) => i.concat(s), []).map(e.matchMedia);
  }
  return {
    mergeOptions: t,
    optionsAtMedia: n,
    optionsMediaQueries: r
  };
}
function ax(e) {
  let t = [];
  function n(a, i) {
    return t = i.filter(({
      options: s
    }) => e.optionsAtMedia(s).active !== !1), t.forEach((s) => s.init(a, e)), i.reduce((s, c) => Object.assign(s, {
      [c.name]: c
    }), {});
  }
  function r() {
    t = t.filter((a) => a.destroy());
  }
  return {
    init: n,
    destroy: r
  };
}
function Oo(e, t, n) {
  const r = e.ownerDocument, o = r.defaultView, a = ox(o), i = ax(a), s = yr(), c = nx(), {
    mergeOptions: u,
    optionsAtMedia: d,
    optionsMediaQueries: f
  } = a, {
    on: m,
    off: b,
    emit: g
  } = c, h = M;
  let v = !1, y, w = u(rx, Oo.globalOptions), S = u(w), x = [], P, E, C;
  function T() {
    const {
      container: X,
      slides: V
    } = S;
    E = (Ui(X) ? e.querySelector(X) : X) || e.children[0];
    const _ = Ui(V) ? E.querySelectorAll(V) : V;
    C = [].slice.call(_ || E.children);
  }
  function R(X) {
    const V = tx(e, E, C, r, o, X, c);
    if (X.loop && !V.slideLooper.canLoop()) {
      const Z = Object.assign({}, X, {
        loop: !1
      });
      return R(Z);
    }
    return V;
  }
  function D(X, V) {
    v || (w = u(w, X), S = d(w), x = V || x, T(), y = R(S), f([w, ...x.map(({
      options: Z
    }) => Z)]).forEach((Z) => s.add(Z, "change", M)), S.active && (y.translate.to(y.location.get()), y.animation.init(), y.slidesInView.init(), y.slideFocus.init(Q), y.eventHandler.init(Q), y.resizeHandler.init(Q), y.slidesHandler.init(Q), y.options.loop && y.slideLooper.loop(), E.offsetParent && C.length && y.dragHandler.init(Q), P = i.init(Q, x)));
  }
  function M(X, V) {
    const Z = re();
    F(), D(u({
      startIndex: Z
    }, X), V), c.emit("reInit");
  }
  function F() {
    y.dragHandler.destroy(), y.eventStore.clear(), y.translate.clear(), y.slideLooper.clear(), y.resizeHandler.destroy(), y.slidesHandler.destroy(), y.slidesInView.destroy(), y.animation.destroy(), i.destroy(), s.clear();
  }
  function $() {
    v || (v = !0, s.clear(), F(), c.emit("destroy"), c.clear());
  }
  function I(X, V, Z) {
    !S.active || v || (y.scrollBody.useBaseFriction().useDuration(V === !0 ? 0 : S.duration), y.scrollTo.index(X, Z || 0));
  }
  function z(X) {
    const V = y.index.add(1).get();
    I(V, X, -1);
  }
  function L(X) {
    const V = y.index.add(-1).get();
    I(V, X, 1);
  }
  function U() {
    return y.index.add(1).get() !== re();
  }
  function H() {
    return y.index.add(-1).get() !== re();
  }
  function B() {
    return y.scrollSnapList;
  }
  function oe() {
    return y.scrollProgress.get(y.offsetLocation.get());
  }
  function re() {
    return y.index.get();
  }
  function ie() {
    return y.indexPrevious.get();
  }
  function j() {
    return y.slidesInView.get();
  }
  function K() {
    return y.slidesInView.get(!1);
  }
  function J() {
    return P;
  }
  function Y() {
    return y;
  }
  function O() {
    return e;
  }
  function G() {
    return E;
  }
  function ee() {
    return C;
  }
  const Q = {
    canScrollNext: U,
    canScrollPrev: H,
    containerNode: G,
    internalEngine: Y,
    destroy: $,
    off: b,
    on: m,
    emit: g,
    plugins: J,
    previousScrollSnap: ie,
    reInit: h,
    rootNode: O,
    scrollNext: z,
    scrollPrev: L,
    scrollProgress: oe,
    scrollSnapList: B,
    scrollTo: I,
    selectedScrollSnap: re,
    slideNodes: ee,
    slidesInView: j,
    slidesNotInView: K
  };
  return D(t, n), setTimeout(() => c.emit("init"), 0), Q;
}
Oo.globalOptions = void 0;
function Qs(e = {}, t = []) {
  const n = De(e), r = De(t), [o, a] = xt(), [i, s] = xt(), c = Le(() => {
    o && o.reInit(n.current, r.current);
  }, [o]);
  return et(() => {
    qs(n.current, e) || (n.current = e, c());
  }, [e, c]), et(() => {
    TS(r.current, t) || (r.current = t, c());
  }, [t, c]), et(() => {
    if (RS() && i) {
      Oo.globalOptions = Qs.globalOptions;
      const u = Oo(i, n.current, r.current);
      return a(u), () => u.destroy();
    } else
      a(void 0);
  }, [i, a]), [s, o];
}
Qs.globalOptions = void 0;
const Yd = l.createContext(null);
function fa() {
  const e = l.useContext(Yd);
  if (!e)
    throw new Error("useCarousel must be used within a <Carousel />");
  return e;
}
const ix = l.forwardRef(
  ({
    orientation: e = "horizontal",
    opts: t,
    setApi: n,
    plugins: r,
    className: o,
    children: a,
    ...i
  }, s) => {
    const [c, u] = Qs(
      {
        ...t,
        axis: e === "horizontal" ? "x" : "y"
      },
      r
    ), [d, f] = l.useState(!1), [m, b] = l.useState(!1), g = l.useCallback((w) => {
      w && (f(w.canScrollPrev()), b(w.canScrollNext()));
    }, []), h = l.useCallback(() => {
      u?.scrollPrev();
    }, [u]), v = l.useCallback(() => {
      u?.scrollNext();
    }, [u]), y = l.useCallback(
      (w) => {
        w.key === "ArrowLeft" ? (w.preventDefault(), h()) : w.key === "ArrowRight" && (w.preventDefault(), v());
      },
      [h, v]
    );
    return l.useEffect(() => {
      !u || !n || n(u);
    }, [u, n]), l.useEffect(() => {
      if (u)
        return g(u), u.on("reInit", g), u.on("select", g), () => {
          u?.off("select", g);
        };
    }, [u, g]), /* @__PURE__ */ p(
      Yd.Provider,
      {
        value: {
          carouselRef: c,
          api: u,
          opts: t,
          orientation: e || (t?.axis === "y" ? "vertical" : "horizontal"),
          scrollPrev: h,
          scrollNext: v,
          canScrollPrev: d,
          canScrollNext: m
        },
        children: /* @__PURE__ */ p(
          "div",
          {
            ref: s,
            onKeyDownCapture: y,
            className: N("relative", o),
            role: "region",
            "aria-roledescription": "carousel",
            ...i,
            children: a
          }
        )
      }
    );
  }
);
ix.displayName = "Carousel";
const sx = l.forwardRef(({ className: e, ...t }, n) => {
  const { carouselRef: r, orientation: o } = fa();
  return /* @__PURE__ */ p("div", { ref: r, className: "overflow-hidden", children: /* @__PURE__ */ p(
    "div",
    {
      ref: n,
      className: N(
        "flex",
        o === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
        e
      ),
      ...t
    }
  ) });
});
sx.displayName = "CarouselContent";
const cx = l.forwardRef(({ className: e, ...t }, n) => {
  const { orientation: r } = fa();
  return /* @__PURE__ */ p(
    "div",
    {
      ref: n,
      role: "group",
      "aria-roledescription": "slide",
      className: N(
        "min-w-0 shrink-0 grow-0 basis-full",
        r === "horizontal" ? "pl-4" : "pt-4",
        e
      ),
      ...t
    }
  );
});
cx.displayName = "CarouselItem";
const lx = l.forwardRef(({ className: e, variant: t = "outline", size: n = "icon", ...r }, o) => {
  const { orientation: a, scrollPrev: i, canScrollPrev: s } = fa();
  return /* @__PURE__ */ te(
    la,
    {
      ref: o,
      variant: t,
      size: n,
      className: N(
        "absolute  h-8 w-8 rounded-full",
        a === "horizontal" ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        e
      ),
      disabled: !s,
      onClick: i,
      ...r,
      children: [
        /* @__PURE__ */ p(bS, { className: "h-4 w-4" }),
        /* @__PURE__ */ p("span", { className: "sr-only", children: "Previous slide" })
      ]
    }
  );
});
lx.displayName = "CarouselPrevious";
const ux = l.forwardRef(({ className: e, variant: t = "outline", size: n = "icon", ...r }, o) => {
  const { orientation: a, scrollNext: i, canScrollNext: s } = fa();
  return /* @__PURE__ */ te(
    la,
    {
      ref: o,
      variant: t,
      size: n,
      className: N(
        "absolute h-8 w-8 rounded-full",
        a === "horizontal" ? "-right-12 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        e
      ),
      disabled: !s,
      onClick: i,
      ...r,
      children: [
        /* @__PURE__ */ p(yS, { className: "h-4 w-4" }),
        /* @__PURE__ */ p("span", { className: "sr-only", children: "Next slide" })
      ]
    }
  );
});
ux.displayName = "CarouselNext";
var io = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Et(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var dx = Array.isArray, mt = dx, fx = typeof io == "object" && io && io.Object === Object && io, qd = fx, px = qd, mx = typeof self == "object" && self && self.Object === Object && self, hx = px || mx || Function("return this")(), _t = hx, vx = _t, gx = vx.Symbol, Lr = gx, Ul = Lr, Xd = Object.prototype, bx = Xd.hasOwnProperty, yx = Xd.toString, ar = Ul ? Ul.toStringTag : void 0;
function wx(e) {
  var t = bx.call(e, ar), n = e[ar];
  try {
    e[ar] = void 0;
    var r = !0;
  } catch {
  }
  var o = yx.call(e);
  return r && (t ? e[ar] = n : delete e[ar]), o;
}
var Sx = wx, xx = Object.prototype, Cx = xx.toString;
function Px(e) {
  return Cx.call(e);
}
var Ex = Px, Wl = Lr, _x = Sx, Rx = Ex, Tx = "[object Null]", Ax = "[object Undefined]", Kl = Wl ? Wl.toStringTag : void 0;
function Nx(e) {
  return e == null ? e === void 0 ? Ax : Tx : Kl && Kl in Object(e) ? _x(e) : Rx(e);
}
var vn = Nx;
function Mx(e) {
  return e != null && typeof e == "object";
}
var gn = Mx, Ox = vn, $x = gn, Ix = "[object Symbol]";
function Dx(e) {
  return typeof e == "symbol" || $x(e) && Ox(e) == Ix;
}
var Fr = Dx, kx = mt, Lx = Fr, Fx = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Bx = /^\w*$/;
function zx(e, t) {
  if (kx(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || Lx(e) ? !0 : Bx.test(e) || !Fx.test(e) || t != null && e in Object(t);
}
var ec = zx;
function Hx(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Ut = Hx;
const Zd = /* @__PURE__ */ Et(Ut);
var jx = vn, Vx = Ut, Gx = "[object AsyncFunction]", Ux = "[object Function]", Wx = "[object GeneratorFunction]", Kx = "[object Proxy]";
function Yx(e) {
  if (!Vx(e))
    return !1;
  var t = jx(e);
  return t == Ux || t == Wx || t == Gx || t == Kx;
}
var tc = Yx;
const $o = /* @__PURE__ */ Et(tc);
var qx = _t, Xx = qx["__core-js_shared__"], Zx = Xx, ui = Zx, Yl = function() {
  var e = /[^.]+$/.exec(ui && ui.keys && ui.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Jx(e) {
  return !!Yl && Yl in e;
}
var Qx = Jx, eC = Function.prototype, tC = eC.toString;
function nC(e) {
  if (e != null) {
    try {
      return tC.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Jd = nC, rC = tc, oC = Qx, aC = Ut, iC = Jd, sC = /[\\^$.*+?()[\]{}|]/g, cC = /^\[object .+?Constructor\]$/, lC = Function.prototype, uC = Object.prototype, dC = lC.toString, fC = uC.hasOwnProperty, pC = RegExp(
  "^" + dC.call(fC).replace(sC, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function mC(e) {
  if (!aC(e) || oC(e))
    return !1;
  var t = rC(e) ? pC : cC;
  return t.test(iC(e));
}
var hC = mC;
function vC(e, t) {
  return e?.[t];
}
var gC = vC, bC = hC, yC = gC;
function wC(e, t) {
  var n = yC(e, t);
  return bC(n) ? n : void 0;
}
var bn = wC, SC = bn, xC = SC(Object, "create"), pa = xC, ql = pa;
function CC() {
  this.__data__ = ql ? ql(null) : {}, this.size = 0;
}
var PC = CC;
function EC(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var _C = EC, RC = pa, TC = "__lodash_hash_undefined__", AC = Object.prototype, NC = AC.hasOwnProperty;
function MC(e) {
  var t = this.__data__;
  if (RC) {
    var n = t[e];
    return n === TC ? void 0 : n;
  }
  return NC.call(t, e) ? t[e] : void 0;
}
var OC = MC, $C = pa, IC = Object.prototype, DC = IC.hasOwnProperty;
function kC(e) {
  var t = this.__data__;
  return $C ? t[e] !== void 0 : DC.call(t, e);
}
var LC = kC, FC = pa, BC = "__lodash_hash_undefined__";
function zC(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = FC && t === void 0 ? BC : t, this;
}
var HC = zC, jC = PC, VC = _C, GC = OC, UC = LC, WC = HC;
function Vn(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
Vn.prototype.clear = jC;
Vn.prototype.delete = VC;
Vn.prototype.get = GC;
Vn.prototype.has = UC;
Vn.prototype.set = WC;
var KC = Vn;
function YC() {
  this.__data__ = [], this.size = 0;
}
var qC = YC;
function XC(e, t) {
  return e === t || e !== e && t !== t;
}
var nc = XC, ZC = nc;
function JC(e, t) {
  for (var n = e.length; n--; )
    if (ZC(e[n][0], t))
      return n;
  return -1;
}
var ma = JC, QC = ma, e0 = Array.prototype, t0 = e0.splice;
function n0(e) {
  var t = this.__data__, n = QC(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : t0.call(t, n, 1), --this.size, !0;
}
var r0 = n0, o0 = ma;
function a0(e) {
  var t = this.__data__, n = o0(t, e);
  return n < 0 ? void 0 : t[n][1];
}
var i0 = a0, s0 = ma;
function c0(e) {
  return s0(this.__data__, e) > -1;
}
var l0 = c0, u0 = ma;
function d0(e, t) {
  var n = this.__data__, r = u0(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
var f0 = d0, p0 = qC, m0 = r0, h0 = i0, v0 = l0, g0 = f0;
function Gn(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
Gn.prototype.clear = p0;
Gn.prototype.delete = m0;
Gn.prototype.get = h0;
Gn.prototype.has = v0;
Gn.prototype.set = g0;
var ha = Gn, b0 = bn, y0 = _t, w0 = b0(y0, "Map"), rc = w0, Xl = KC, S0 = ha, x0 = rc;
function C0() {
  this.size = 0, this.__data__ = {
    hash: new Xl(),
    map: new (x0 || S0)(),
    string: new Xl()
  };
}
var P0 = C0;
function E0(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
var _0 = E0, R0 = _0;
function T0(e, t) {
  var n = e.__data__;
  return R0(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
var va = T0, A0 = va;
function N0(e) {
  var t = A0(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
var M0 = N0, O0 = va;
function $0(e) {
  return O0(this, e).get(e);
}
var I0 = $0, D0 = va;
function k0(e) {
  return D0(this, e).has(e);
}
var L0 = k0, F0 = va;
function B0(e, t) {
  var n = F0(this, e), r = n.size;
  return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
var z0 = B0, H0 = P0, j0 = M0, V0 = I0, G0 = L0, U0 = z0;
function Un(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
Un.prototype.clear = H0;
Un.prototype.delete = j0;
Un.prototype.get = V0;
Un.prototype.has = G0;
Un.prototype.set = U0;
var oc = Un, Qd = oc, W0 = "Expected a function";
function ac(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(W0);
  var n = function() {
    var r = arguments, o = t ? t.apply(this, r) : r[0], a = n.cache;
    if (a.has(o))
      return a.get(o);
    var i = e.apply(this, r);
    return n.cache = a.set(o, i) || a, i;
  };
  return n.cache = new (ac.Cache || Qd)(), n;
}
ac.Cache = Qd;
var K0 = ac, Y0 = K0, q0 = 500;
function X0(e) {
  var t = Y0(e, function(r) {
    return n.size === q0 && n.clear(), r;
  }), n = t.cache;
  return t;
}
var Z0 = X0, J0 = Z0, Q0 = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, eP = /\\(\\)?/g, tP = J0(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(Q0, function(n, r, o, a) {
    t.push(o ? a.replace(eP, "$1") : r || n);
  }), t;
}), nP = tP;
function rP(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = Array(r); ++n < r; )
    o[n] = t(e[n], n, e);
  return o;
}
var ef = rP, Zl = Lr, oP = ef, aP = mt, iP = Fr, Jl = Zl ? Zl.prototype : void 0, Ql = Jl ? Jl.toString : void 0;
function tf(e) {
  if (typeof e == "string")
    return e;
  if (aP(e))
    return oP(e, tf) + "";
  if (iP(e))
    return Ql ? Ql.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
var sP = tf, cP = sP;
function lP(e) {
  return e == null ? "" : cP(e);
}
var nf = lP, uP = mt, dP = ec, fP = nP, pP = nf;
function mP(e, t) {
  return uP(e) ? e : dP(e, t) ? [e] : fP(pP(e));
}
var rf = mP, hP = Fr;
function vP(e) {
  if (typeof e == "string" || hP(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
var ga = vP, gP = rf, bP = ga;
function yP(e, t) {
  t = gP(t, e);
  for (var n = 0, r = t.length; e != null && n < r; )
    e = e[bP(t[n++])];
  return n && n == r ? e : void 0;
}
var ic = yP, wP = ic;
function SP(e, t, n) {
  var r = e == null ? void 0 : wP(e, t);
  return r === void 0 ? n : r;
}
var xP = SP;
function CP(e) {
  return e == null;
}
var PP = CP;
const EP = /* @__PURE__ */ Et(PP);
var _P = vn, RP = mt, TP = gn, AP = "[object String]";
function NP(e) {
  return typeof e == "string" || !RP(e) && TP(e) && _P(e) == AP;
}
var MP = NP;
const of = /* @__PURE__ */ Et(MP);
var he = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var eu;
function OP() {
  if (eu) return he;
  eu = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), i = Symbol.for("react.context"), s = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), b = Symbol.for("react.offscreen"), g;
  g = Symbol.for("react.module.reference");
  function h(v) {
    if (typeof v == "object" && v !== null) {
      var y = v.$$typeof;
      switch (y) {
        case e:
          switch (v = v.type, v) {
            case n:
            case o:
            case r:
            case u:
            case d:
              return v;
            default:
              switch (v = v && v.$$typeof, v) {
                case s:
                case i:
                case c:
                case m:
                case f:
                case a:
                  return v;
                default:
                  return y;
              }
          }
        case t:
          return y;
      }
    }
  }
  return he.ContextConsumer = i, he.ContextProvider = a, he.Element = e, he.ForwardRef = c, he.Fragment = n, he.Lazy = m, he.Memo = f, he.Portal = t, he.Profiler = o, he.StrictMode = r, he.Suspense = u, he.SuspenseList = d, he.isAsyncMode = function() {
    return !1;
  }, he.isConcurrentMode = function() {
    return !1;
  }, he.isContextConsumer = function(v) {
    return h(v) === i;
  }, he.isContextProvider = function(v) {
    return h(v) === a;
  }, he.isElement = function(v) {
    return typeof v == "object" && v !== null && v.$$typeof === e;
  }, he.isForwardRef = function(v) {
    return h(v) === c;
  }, he.isFragment = function(v) {
    return h(v) === n;
  }, he.isLazy = function(v) {
    return h(v) === m;
  }, he.isMemo = function(v) {
    return h(v) === f;
  }, he.isPortal = function(v) {
    return h(v) === t;
  }, he.isProfiler = function(v) {
    return h(v) === o;
  }, he.isStrictMode = function(v) {
    return h(v) === r;
  }, he.isSuspense = function(v) {
    return h(v) === u;
  }, he.isSuspenseList = function(v) {
    return h(v) === d;
  }, he.isValidElementType = function(v) {
    return typeof v == "string" || typeof v == "function" || v === n || v === o || v === r || v === u || v === d || v === b || typeof v == "object" && v !== null && (v.$$typeof === m || v.$$typeof === f || v.$$typeof === a || v.$$typeof === i || v.$$typeof === c || v.$$typeof === g || v.getModuleId !== void 0);
  }, he.typeOf = h, he;
}
var ve = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tu;
function $P() {
  return tu || (tu = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), i = Symbol.for("react.context"), s = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), b = Symbol.for("react.offscreen"), g = !1, h = !1, v = !1, y = !1, w = !1, S;
    S = Symbol.for("react.module.reference");
    function x(_) {
      return !!(typeof _ == "string" || typeof _ == "function" || _ === n || _ === o || w || _ === r || _ === u || _ === d || y || _ === b || g || h || v || typeof _ == "object" && _ !== null && (_.$$typeof === m || _.$$typeof === f || _.$$typeof === a || _.$$typeof === i || _.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      _.$$typeof === S || _.getModuleId !== void 0));
    }
    function P(_) {
      if (typeof _ == "object" && _ !== null) {
        var q = _.$$typeof;
        switch (q) {
          case e:
            var se = _.type;
            switch (se) {
              case n:
              case o:
              case r:
              case u:
              case d:
                return se;
              default:
                var le = se && se.$$typeof;
                switch (le) {
                  case s:
                  case i:
                  case c:
                  case m:
                  case f:
                  case a:
                    return le;
                  default:
                    return q;
                }
            }
          case t:
            return q;
        }
      }
    }
    var E = i, C = a, T = e, R = c, D = n, M = m, F = f, $ = t, I = o, z = r, L = u, U = d, H = !1, B = !1;
    function oe(_) {
      return H || (H = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function re(_) {
      return B || (B = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function ie(_) {
      return P(_) === i;
    }
    function j(_) {
      return P(_) === a;
    }
    function K(_) {
      return typeof _ == "object" && _ !== null && _.$$typeof === e;
    }
    function J(_) {
      return P(_) === c;
    }
    function Y(_) {
      return P(_) === n;
    }
    function O(_) {
      return P(_) === m;
    }
    function G(_) {
      return P(_) === f;
    }
    function ee(_) {
      return P(_) === t;
    }
    function Q(_) {
      return P(_) === o;
    }
    function X(_) {
      return P(_) === r;
    }
    function V(_) {
      return P(_) === u;
    }
    function Z(_) {
      return P(_) === d;
    }
    ve.ContextConsumer = E, ve.ContextProvider = C, ve.Element = T, ve.ForwardRef = R, ve.Fragment = D, ve.Lazy = M, ve.Memo = F, ve.Portal = $, ve.Profiler = I, ve.StrictMode = z, ve.Suspense = L, ve.SuspenseList = U, ve.isAsyncMode = oe, ve.isConcurrentMode = re, ve.isContextConsumer = ie, ve.isContextProvider = j, ve.isElement = K, ve.isForwardRef = J, ve.isFragment = Y, ve.isLazy = O, ve.isMemo = G, ve.isPortal = ee, ve.isProfiler = Q, ve.isStrictMode = X, ve.isSuspense = V, ve.isSuspenseList = Z, ve.isValidElementType = x, ve.typeOf = P;
  }()), ve;
}
process.env.NODE_ENV === "production" ? OP() : $P();
var IP = vn, DP = gn, kP = "[object Number]";
function LP(e) {
  return typeof e == "number" || DP(e) && IP(e) == kP;
}
var af = LP;
const FP = /* @__PURE__ */ Et(af);
var BP = af;
function zP(e) {
  return BP(e) && e != +e;
}
var HP = zP;
const jP = /* @__PURE__ */ Et(HP);
var so = function(t) {
  return of(t) && t.indexOf("%") === t.length - 1;
}, ct = function(t) {
  return FP(t) && !jP(t);
}, Io = function(t) {
  return ct(t) || of(t);
};
function Ki(e) {
  "@babel/helpers - typeof";
  return Ki = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ki(e);
}
var VP = ["viewBox", "children"], GP = [
  "aria-activedescendant",
  "aria-atomic",
  "aria-autocomplete",
  "aria-busy",
  "aria-checked",
  "aria-colcount",
  "aria-colindex",
  "aria-colspan",
  "aria-controls",
  "aria-current",
  "aria-describedby",
  "aria-details",
  "aria-disabled",
  "aria-errormessage",
  "aria-expanded",
  "aria-flowto",
  "aria-haspopup",
  "aria-hidden",
  "aria-invalid",
  "aria-keyshortcuts",
  "aria-label",
  "aria-labelledby",
  "aria-level",
  "aria-live",
  "aria-modal",
  "aria-multiline",
  "aria-multiselectable",
  "aria-orientation",
  "aria-owns",
  "aria-placeholder",
  "aria-posinset",
  "aria-pressed",
  "aria-readonly",
  "aria-relevant",
  "aria-required",
  "aria-roledescription",
  "aria-rowcount",
  "aria-rowindex",
  "aria-rowspan",
  "aria-selected",
  "aria-setsize",
  "aria-sort",
  "aria-valuemax",
  "aria-valuemin",
  "aria-valuenow",
  "aria-valuetext",
  "className",
  "color",
  "height",
  "id",
  "lang",
  "max",
  "media",
  "method",
  "min",
  "name",
  "style",
  /*
   * removed 'type' SVGElementPropKey because we do not currently use any SVG elements
   * that can use it and it conflicts with the recharts prop 'type'
   * https://github.com/recharts/recharts/pull/3327
   * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/type
   */
  // 'type',
  "target",
  "width",
  "role",
  "tabIndex",
  "accentHeight",
  "accumulate",
  "additive",
  "alignmentBaseline",
  "allowReorder",
  "alphabetic",
  "amplitude",
  "arabicForm",
  "ascent",
  "attributeName",
  "attributeType",
  "autoReverse",
  "azimuth",
  "baseFrequency",
  "baselineShift",
  "baseProfile",
  "bbox",
  "begin",
  "bias",
  "by",
  "calcMode",
  "capHeight",
  "clip",
  "clipPath",
  "clipPathUnits",
  "clipRule",
  "colorInterpolation",
  "colorInterpolationFilters",
  "colorProfile",
  "colorRendering",
  "contentScriptType",
  "contentStyleType",
  "cursor",
  "cx",
  "cy",
  "d",
  "decelerate",
  "descent",
  "diffuseConstant",
  "direction",
  "display",
  "divisor",
  "dominantBaseline",
  "dur",
  "dx",
  "dy",
  "edgeMode",
  "elevation",
  "enableBackground",
  "end",
  "exponent",
  "externalResourcesRequired",
  "fill",
  "fillOpacity",
  "fillRule",
  "filter",
  "filterRes",
  "filterUnits",
  "floodColor",
  "floodOpacity",
  "focusable",
  "fontFamily",
  "fontSize",
  "fontSizeAdjust",
  "fontStretch",
  "fontStyle",
  "fontVariant",
  "fontWeight",
  "format",
  "from",
  "fx",
  "fy",
  "g1",
  "g2",
  "glyphName",
  "glyphOrientationHorizontal",
  "glyphOrientationVertical",
  "glyphRef",
  "gradientTransform",
  "gradientUnits",
  "hanging",
  "horizAdvX",
  "horizOriginX",
  "href",
  "ideographic",
  "imageRendering",
  "in2",
  "in",
  "intercept",
  "k1",
  "k2",
  "k3",
  "k4",
  "k",
  "kernelMatrix",
  "kernelUnitLength",
  "kerning",
  "keyPoints",
  "keySplines",
  "keyTimes",
  "lengthAdjust",
  "letterSpacing",
  "lightingColor",
  "limitingConeAngle",
  "local",
  "markerEnd",
  "markerHeight",
  "markerMid",
  "markerStart",
  "markerUnits",
  "markerWidth",
  "mask",
  "maskContentUnits",
  "maskUnits",
  "mathematical",
  "mode",
  "numOctaves",
  "offset",
  "opacity",
  "operator",
  "order",
  "orient",
  "orientation",
  "origin",
  "overflow",
  "overlinePosition",
  "overlineThickness",
  "paintOrder",
  "panose1",
  "pathLength",
  "patternContentUnits",
  "patternTransform",
  "patternUnits",
  "pointerEvents",
  "pointsAtX",
  "pointsAtY",
  "pointsAtZ",
  "preserveAlpha",
  "preserveAspectRatio",
  "primitiveUnits",
  "r",
  "radius",
  "refX",
  "refY",
  "renderingIntent",
  "repeatCount",
  "repeatDur",
  "requiredExtensions",
  "requiredFeatures",
  "restart",
  "result",
  "rotate",
  "rx",
  "ry",
  "seed",
  "shapeRendering",
  "slope",
  "spacing",
  "specularConstant",
  "specularExponent",
  "speed",
  "spreadMethod",
  "startOffset",
  "stdDeviation",
  "stemh",
  "stemv",
  "stitchTiles",
  "stopColor",
  "stopOpacity",
  "strikethroughPosition",
  "strikethroughThickness",
  "string",
  "stroke",
  "strokeDasharray",
  "strokeDashoffset",
  "strokeLinecap",
  "strokeLinejoin",
  "strokeMiterlimit",
  "strokeOpacity",
  "strokeWidth",
  "surfaceScale",
  "systemLanguage",
  "tableValues",
  "targetX",
  "targetY",
  "textAnchor",
  "textDecoration",
  "textLength",
  "textRendering",
  "to",
  "transform",
  "u1",
  "u2",
  "underlinePosition",
  "underlineThickness",
  "unicode",
  "unicodeBidi",
  "unicodeRange",
  "unitsPerEm",
  "vAlphabetic",
  "values",
  "vectorEffect",
  "version",
  "vertAdvY",
  "vertOriginX",
  "vertOriginY",
  "vHanging",
  "vIdeographic",
  "viewTarget",
  "visibility",
  "vMathematical",
  "widths",
  "wordSpacing",
  "writingMode",
  "x1",
  "x2",
  "x",
  "xChannelSelector",
  "xHeight",
  "xlinkActuate",
  "xlinkArcrole",
  "xlinkHref",
  "xlinkRole",
  "xlinkShow",
  "xlinkTitle",
  "xlinkType",
  "xmlBase",
  "xmlLang",
  "xmlns",
  "xmlnsXlink",
  "xmlSpace",
  "y1",
  "y2",
  "y",
  "yChannelSelector",
  "z",
  "zoomAndPan",
  "ref",
  "key",
  "angle"
], nu = ["points", "pathLength"], di = {
  svg: VP,
  polygon: nu,
  polyline: nu
}, sf = ["dangerouslySetInnerHTML", "onCopy", "onCopyCapture", "onCut", "onCutCapture", "onPaste", "onPasteCapture", "onCompositionEnd", "onCompositionEndCapture", "onCompositionStart", "onCompositionStartCapture", "onCompositionUpdate", "onCompositionUpdateCapture", "onFocus", "onFocusCapture", "onBlur", "onBlurCapture", "onChange", "onChangeCapture", "onBeforeInput", "onBeforeInputCapture", "onInput", "onInputCapture", "onReset", "onResetCapture", "onSubmit", "onSubmitCapture", "onInvalid", "onInvalidCapture", "onLoad", "onLoadCapture", "onError", "onErrorCapture", "onKeyDown", "onKeyDownCapture", "onKeyPress", "onKeyPressCapture", "onKeyUp", "onKeyUpCapture", "onAbort", "onAbortCapture", "onCanPlay", "onCanPlayCapture", "onCanPlayThrough", "onCanPlayThroughCapture", "onDurationChange", "onDurationChangeCapture", "onEmptied", "onEmptiedCapture", "onEncrypted", "onEncryptedCapture", "onEnded", "onEndedCapture", "onLoadedData", "onLoadedDataCapture", "onLoadedMetadata", "onLoadedMetadataCapture", "onLoadStart", "onLoadStartCapture", "onPause", "onPauseCapture", "onPlay", "onPlayCapture", "onPlaying", "onPlayingCapture", "onProgress", "onProgressCapture", "onRateChange", "onRateChangeCapture", "onSeeked", "onSeekedCapture", "onSeeking", "onSeekingCapture", "onStalled", "onStalledCapture", "onSuspend", "onSuspendCapture", "onTimeUpdate", "onTimeUpdateCapture", "onVolumeChange", "onVolumeChangeCapture", "onWaiting", "onWaitingCapture", "onAuxClick", "onAuxClickCapture", "onClick", "onClickCapture", "onContextMenu", "onContextMenuCapture", "onDoubleClick", "onDoubleClickCapture", "onDrag", "onDragCapture", "onDragEnd", "onDragEndCapture", "onDragEnter", "onDragEnterCapture", "onDragExit", "onDragExitCapture", "onDragLeave", "onDragLeaveCapture", "onDragOver", "onDragOverCapture", "onDragStart", "onDragStartCapture", "onDrop", "onDropCapture", "onMouseDown", "onMouseDownCapture", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseMoveCapture", "onMouseOut", "onMouseOutCapture", "onMouseOver", "onMouseOverCapture", "onMouseUp", "onMouseUpCapture", "onSelect", "onSelectCapture", "onTouchCancel", "onTouchCancelCapture", "onTouchEnd", "onTouchEndCapture", "onTouchMove", "onTouchMoveCapture", "onTouchStart", "onTouchStartCapture", "onPointerDown", "onPointerDownCapture", "onPointerMove", "onPointerMoveCapture", "onPointerUp", "onPointerUpCapture", "onPointerCancel", "onPointerCancelCapture", "onPointerEnter", "onPointerEnterCapture", "onPointerLeave", "onPointerLeaveCapture", "onPointerOver", "onPointerOverCapture", "onPointerOut", "onPointerOutCapture", "onGotPointerCapture", "onGotPointerCaptureCapture", "onLostPointerCapture", "onLostPointerCaptureCapture", "onScroll", "onScrollCapture", "onWheel", "onWheelCapture", "onAnimationStart", "onAnimationStartCapture", "onAnimationEnd", "onAnimationEndCapture", "onAnimationIteration", "onAnimationIterationCapture", "onTransitionEnd", "onTransitionEndCapture"], UP = function(t, n, r) {
  return function(o) {
    return t(n, r, o), null;
  };
}, WP = function(t, n, r) {
  if (!Zd(t) || Ki(t) !== "object")
    return null;
  var o = null;
  return Object.keys(t).forEach(function(a) {
    var i = t[a];
    sf.includes(a) && typeof i == "function" && (o || (o = {}), o[a] = UP(i, n, r));
  }), o;
}, KP = function(t) {
  return typeof t == "string" ? t : t ? t.displayName || t.name || "Component" : "";
}, YP = function(t, n, r, o) {
  var a, i = (a = di?.[o]) !== null && a !== void 0 ? a : [];
  return n.startsWith("data-") || !$o(t) && (o && i.includes(n) || GP.includes(n)) || sf.includes(n);
}, cf = function(t, n, r) {
  if (!t || typeof t == "function" || typeof t == "boolean")
    return null;
  var o = t;
  if (/* @__PURE__ */ fS(t) && (o = t.props), !Zd(o))
    return null;
  var a = {};
  return Object.keys(o).forEach(function(i) {
    var s;
    YP((s = o) === null || s === void 0 ? void 0 : s[i], i, n, r) && (a[i] = o[i]);
  }), a;
}, qP = ["children", "width", "height", "viewBox", "className", "style", "title", "desc"];
function Yi() {
  return Yi = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Yi.apply(this, arguments);
}
function XP(e, t) {
  if (e == null) return {};
  var n = ZP(e, t), r, o;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (o = 0; o < a.length; o++)
      r = a[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function ZP(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
function JP(e) {
  var t = e.children, n = e.width, r = e.height, o = e.viewBox, a = e.className, i = e.style, s = e.title, c = e.desc, u = XP(e, qP), d = o || {
    width: n,
    height: r,
    x: 0,
    y: 0
  }, f = cn("recharts-surface", a);
  return /* @__PURE__ */ A.createElement("svg", Yi({}, cf(u, !0, "svg"), {
    className: f,
    width: n,
    height: r,
    style: i,
    viewBox: "".concat(d.x, " ").concat(d.y, " ").concat(d.width, " ").concat(d.height)
  }), /* @__PURE__ */ A.createElement("title", null, s), /* @__PURE__ */ A.createElement("desc", null, c), t);
}
var QP = process.env.NODE_ENV !== "production", Po = function(t, n) {
  for (var r = arguments.length, o = new Array(r > 2 ? r - 2 : 0), a = 2; a < r; a++)
    o[a - 2] = arguments[a];
  if (QP && typeof console < "u" && console.warn && (n === void 0 && console.warn("LogUtils requires an error message argument"), !t))
    if (n === void 0)
      console.warn("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
    else {
      var i = 0;
      console.warn(n.replace(/%s/g, function() {
        return o[i++];
      }));
    }
};
function eE(e, t, n) {
  var r = -1, o = e.length;
  t < 0 && (t = -t > o ? 0 : o + t), n = n > o ? o : n, n < 0 && (n += o), o = t > n ? 0 : n - t >>> 0, t >>>= 0;
  for (var a = Array(o); ++r < o; )
    a[r] = e[r + t];
  return a;
}
var tE = eE, nE = tE;
function rE(e, t, n) {
  var r = e.length;
  return n = n === void 0 ? r : n, !t && n >= r ? e : nE(e, t, n);
}
var oE = rE, aE = "\\ud800-\\udfff", iE = "\\u0300-\\u036f", sE = "\\ufe20-\\ufe2f", cE = "\\u20d0-\\u20ff", lE = iE + sE + cE, uE = "\\ufe0e\\ufe0f", dE = "\\u200d", fE = RegExp("[" + dE + aE + lE + uE + "]");
function pE(e) {
  return fE.test(e);
}
var lf = pE;
function mE(e) {
  return e.split("");
}
var hE = mE, uf = "\\ud800-\\udfff", vE = "\\u0300-\\u036f", gE = "\\ufe20-\\ufe2f", bE = "\\u20d0-\\u20ff", yE = vE + gE + bE, wE = "\\ufe0e\\ufe0f", SE = "[" + uf + "]", qi = "[" + yE + "]", Xi = "\\ud83c[\\udffb-\\udfff]", xE = "(?:" + qi + "|" + Xi + ")", df = "[^" + uf + "]", ff = "(?:\\ud83c[\\udde6-\\uddff]){2}", pf = "[\\ud800-\\udbff][\\udc00-\\udfff]", CE = "\\u200d", mf = xE + "?", hf = "[" + wE + "]?", PE = "(?:" + CE + "(?:" + [df, ff, pf].join("|") + ")" + hf + mf + ")*", EE = hf + mf + PE, _E = "(?:" + [df + qi + "?", qi, ff, pf, SE].join("|") + ")", RE = RegExp(Xi + "(?=" + Xi + ")|" + _E + EE, "g");
function TE(e) {
  return e.match(RE) || [];
}
var AE = TE, NE = hE, ME = lf, OE = AE;
function $E(e) {
  return ME(e) ? OE(e) : NE(e);
}
var IE = $E, DE = oE, kE = lf, LE = IE, FE = nf;
function BE(e) {
  return function(t) {
    t = FE(t);
    var n = kE(t) ? LE(t) : void 0, r = n ? n[0] : t.charAt(0), o = n ? DE(n, 1).join("") : t.slice(1);
    return r[e]() + o;
  };
}
var zE = BE, HE = zE, jE = HE("toUpperCase"), VE = jE;
const vf = /* @__PURE__ */ Et(VE);
function co(e) {
  return function() {
    return e;
  };
}
const gf = Math.cos, Do = Math.sin, ht = Math.sqrt, ko = Math.PI, ba = 2 * ko, Zi = Math.PI, Ji = 2 * Zi, rn = 1e-6, GE = Ji - rn;
function bf(e) {
  this._ += e[0];
  for (let t = 1, n = e.length; t < n; ++t)
    this._ += arguments[t] + e[t];
}
function UE(e) {
  let t = Math.floor(e);
  if (!(t >= 0)) throw new Error(`invalid digits: ${e}`);
  if (t > 15) return bf;
  const n = 10 ** t;
  return function(r) {
    this._ += r[0];
    for (let o = 1, a = r.length; o < a; ++o)
      this._ += Math.round(arguments[o] * n) / n + r[o];
  };
}
class WE {
  constructor(t) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = t == null ? bf : UE(t);
  }
  moveTo(t, n) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +n}`;
  }
  closePath() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`);
  }
  lineTo(t, n) {
    this._append`L${this._x1 = +t},${this._y1 = +n}`;
  }
  quadraticCurveTo(t, n, r, o) {
    this._append`Q${+t},${+n},${this._x1 = +r},${this._y1 = +o}`;
  }
  bezierCurveTo(t, n, r, o, a, i) {
    this._append`C${+t},${+n},${+r},${+o},${this._x1 = +a},${this._y1 = +i}`;
  }
  arcTo(t, n, r, o, a) {
    if (t = +t, n = +n, r = +r, o = +o, a = +a, a < 0) throw new Error(`negative radius: ${a}`);
    let i = this._x1, s = this._y1, c = r - t, u = o - n, d = i - t, f = s - n, m = d * d + f * f;
    if (this._x1 === null)
      this._append`M${this._x1 = t},${this._y1 = n}`;
    else if (m > rn) if (!(Math.abs(f * c - u * d) > rn) || !a)
      this._append`L${this._x1 = t},${this._y1 = n}`;
    else {
      let b = r - i, g = o - s, h = c * c + u * u, v = b * b + g * g, y = Math.sqrt(h), w = Math.sqrt(m), S = a * Math.tan((Zi - Math.acos((h + m - v) / (2 * y * w))) / 2), x = S / w, P = S / y;
      Math.abs(x - 1) > rn && this._append`L${t + x * d},${n + x * f}`, this._append`A${a},${a},0,0,${+(f * b > d * g)},${this._x1 = t + P * c},${this._y1 = n + P * u}`;
    }
  }
  arc(t, n, r, o, a, i) {
    if (t = +t, n = +n, r = +r, i = !!i, r < 0) throw new Error(`negative radius: ${r}`);
    let s = r * Math.cos(o), c = r * Math.sin(o), u = t + s, d = n + c, f = 1 ^ i, m = i ? o - a : a - o;
    this._x1 === null ? this._append`M${u},${d}` : (Math.abs(this._x1 - u) > rn || Math.abs(this._y1 - d) > rn) && this._append`L${u},${d}`, r && (m < 0 && (m = m % Ji + Ji), m > GE ? this._append`A${r},${r},0,1,${f},${t - s},${n - c}A${r},${r},0,1,${f},${this._x1 = u},${this._y1 = d}` : m > rn && this._append`A${r},${r},0,${+(m >= Zi)},${f},${this._x1 = t + r * Math.cos(a)},${this._y1 = n + r * Math.sin(a)}`);
  }
  rect(t, n, r, o) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +n}h${r = +r}v${+o}h${-r}Z`;
  }
  toString() {
    return this._;
  }
}
function KE(e) {
  let t = 3;
  return e.digits = function(n) {
    if (!arguments.length) return t;
    if (n == null)
      t = null;
    else {
      const r = Math.floor(n);
      if (!(r >= 0)) throw new RangeError(`invalid digits: ${n}`);
      t = r;
    }
    return e;
  }, () => new WE(t);
}
const sc = {
  draw(e, t) {
    const n = ht(t / ko);
    e.moveTo(n, 0), e.arc(0, 0, n, 0, ba);
  }
}, YE = {
  draw(e, t) {
    const n = ht(t / 5) / 2;
    e.moveTo(-3 * n, -n), e.lineTo(-n, -n), e.lineTo(-n, -3 * n), e.lineTo(n, -3 * n), e.lineTo(n, -n), e.lineTo(3 * n, -n), e.lineTo(3 * n, n), e.lineTo(n, n), e.lineTo(n, 3 * n), e.lineTo(-n, 3 * n), e.lineTo(-n, n), e.lineTo(-3 * n, n), e.closePath();
  }
}, yf = ht(1 / 3), qE = yf * 2, XE = {
  draw(e, t) {
    const n = ht(t / qE), r = n * yf;
    e.moveTo(0, -n), e.lineTo(r, 0), e.lineTo(0, n), e.lineTo(-r, 0), e.closePath();
  }
}, ZE = {
  draw(e, t) {
    const n = ht(t), r = -n / 2;
    e.rect(r, r, n, n);
  }
}, JE = 0.8908130915292852, wf = Do(ko / 10) / Do(7 * ko / 10), QE = Do(ba / 10) * wf, e_ = -gf(ba / 10) * wf, t_ = {
  draw(e, t) {
    const n = ht(t * JE), r = QE * n, o = e_ * n;
    e.moveTo(0, -n), e.lineTo(r, o);
    for (let a = 1; a < 5; ++a) {
      const i = ba * a / 5, s = gf(i), c = Do(i);
      e.lineTo(c * n, -s * n), e.lineTo(s * r - c * o, c * r + s * o);
    }
    e.closePath();
  }
}, fi = ht(3), n_ = {
  draw(e, t) {
    const n = -ht(t / (fi * 3));
    e.moveTo(0, n * 2), e.lineTo(-fi * n, -n), e.lineTo(fi * n, -n), e.closePath();
  }
}, Ze = -0.5, Je = ht(3) / 2, Qi = 1 / ht(12), r_ = (Qi / 2 + 1) * 3, o_ = {
  draw(e, t) {
    const n = ht(t / r_), r = n / 2, o = n * Qi, a = r, i = n * Qi + n, s = -a, c = i;
    e.moveTo(r, o), e.lineTo(a, i), e.lineTo(s, c), e.lineTo(Ze * r - Je * o, Je * r + Ze * o), e.lineTo(Ze * a - Je * i, Je * a + Ze * i), e.lineTo(Ze * s - Je * c, Je * s + Ze * c), e.lineTo(Ze * r + Je * o, Ze * o - Je * r), e.lineTo(Ze * a + Je * i, Ze * i - Je * a), e.lineTo(Ze * s + Je * c, Ze * c - Je * s), e.closePath();
  }
};
function a_(e, t) {
  let n = null, r = KE(o);
  e = typeof e == "function" ? e : co(e || sc), t = typeof t == "function" ? t : co(t === void 0 ? 64 : +t);
  function o() {
    let a;
    if (n || (n = a = r()), e.apply(this, arguments).draw(n, +t.apply(this, arguments)), a) return n = null, a + "" || null;
  }
  return o.type = function(a) {
    return arguments.length ? (e = typeof a == "function" ? a : co(a), o) : e;
  }, o.size = function(a) {
    return arguments.length ? (t = typeof a == "function" ? a : co(+a), o) : t;
  }, o.context = function(a) {
    return arguments.length ? (n = a ?? null, o) : n;
  }, o;
}
function wr(e) {
  "@babel/helpers - typeof";
  return wr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, wr(e);
}
var i_ = ["type", "size", "sizeType"];
function es() {
  return es = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, es.apply(this, arguments);
}
function ru(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function ou(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ru(Object(n), !0).forEach(function(r) {
      s_(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ru(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function s_(e, t, n) {
  return t = c_(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function c_(e) {
  var t = l_(e, "string");
  return wr(t) == "symbol" ? t : t + "";
}
function l_(e, t) {
  if (wr(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (wr(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function u_(e, t) {
  if (e == null) return {};
  var n = d_(e, t), r, o;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (o = 0; o < a.length; o++)
      r = a[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function d_(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
var Sf = {
  symbolCircle: sc,
  symbolCross: YE,
  symbolDiamond: XE,
  symbolSquare: ZE,
  symbolStar: t_,
  symbolTriangle: n_,
  symbolWye: o_
}, f_ = Math.PI / 180, p_ = function(t) {
  var n = "symbol".concat(vf(t));
  return Sf[n] || sc;
}, m_ = function(t, n, r) {
  if (n === "area")
    return t;
  switch (r) {
    case "cross":
      return 5 * t * t / 9;
    case "diamond":
      return 0.5 * t * t / Math.sqrt(3);
    case "square":
      return t * t;
    case "star": {
      var o = 18 * f_;
      return 1.25 * t * t * (Math.tan(o) - Math.tan(o * 2) * Math.pow(Math.tan(o), 2));
    }
    case "triangle":
      return Math.sqrt(3) * t * t / 4;
    case "wye":
      return (21 - 10 * Math.sqrt(3)) * t * t / 8;
    default:
      return Math.PI * t * t / 4;
  }
}, h_ = function(t, n) {
  Sf["symbol".concat(vf(t))] = n;
}, xf = function(t) {
  var n = t.type, r = n === void 0 ? "circle" : n, o = t.size, a = o === void 0 ? 64 : o, i = t.sizeType, s = i === void 0 ? "area" : i, c = u_(t, i_), u = ou(ou({}, c), {}, {
    type: r,
    size: a,
    sizeType: s
  }), d = function() {
    var v = p_(r), y = a_().type(v).size(m_(a, s, r));
    return y();
  }, f = u.className, m = u.cx, b = u.cy, g = cf(u, !0);
  return m === +m && b === +b && a === +a ? /* @__PURE__ */ A.createElement("path", es({}, g, {
    className: cn("recharts-symbols", f),
    transform: "translate(".concat(m, ", ").concat(b, ")"),
    d: d()
  })) : null;
};
xf.registerSymbol = h_;
function In(e) {
  "@babel/helpers - typeof";
  return In = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, In(e);
}
function ts() {
  return ts = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, ts.apply(this, arguments);
}
function au(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function v_(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? au(Object(n), !0).forEach(function(r) {
      Sr(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : au(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function g_(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function b_(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, Pf(r.key), r);
  }
}
function y_(e, t, n) {
  return t && b_(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function w_(e, t, n) {
  return t = Lo(t), S_(e, Cf() ? Reflect.construct(t, n || [], Lo(e).constructor) : t.apply(e, n));
}
function S_(e, t) {
  if (t && (In(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return x_(e);
}
function x_(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Cf() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Cf = function() {
    return !!e;
  })();
}
function Lo(e) {
  return Lo = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Lo(e);
}
function C_(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && ns(e, t);
}
function ns(e, t) {
  return ns = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
    return r.__proto__ = o, r;
  }, ns(e, t);
}
function Sr(e, t, n) {
  return t = Pf(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Pf(e) {
  var t = P_(e, "string");
  return In(t) == "symbol" ? t : t + "";
}
function P_(e, t) {
  if (In(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (In(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var Qe = 32, cc = /* @__PURE__ */ function(e) {
  function t() {
    return g_(this, t), w_(this, t, arguments);
  }
  return C_(t, e), y_(t, [{
    key: "renderIcon",
    value: (
      /**
       * Render the path of icon
       * @param {Object} data Data of each legend item
       * @return {String} Path element
       */
      function(r) {
        var o = this.props.inactiveColor, a = Qe / 2, i = Qe / 6, s = Qe / 3, c = r.inactive ? o : r.color;
        if (r.type === "plainline")
          return /* @__PURE__ */ A.createElement("line", {
            strokeWidth: 4,
            fill: "none",
            stroke: c,
            strokeDasharray: r.payload.strokeDasharray,
            x1: 0,
            y1: a,
            x2: Qe,
            y2: a,
            className: "recharts-legend-icon"
          });
        if (r.type === "line")
          return /* @__PURE__ */ A.createElement("path", {
            strokeWidth: 4,
            fill: "none",
            stroke: c,
            d: "M0,".concat(a, "h").concat(s, `
            A`).concat(i, ",").concat(i, ",0,1,1,").concat(2 * s, ",").concat(a, `
            H`).concat(Qe, "M").concat(2 * s, ",").concat(a, `
            A`).concat(i, ",").concat(i, ",0,1,1,").concat(s, ",").concat(a),
            className: "recharts-legend-icon"
          });
        if (r.type === "rect")
          return /* @__PURE__ */ A.createElement("path", {
            stroke: "none",
            fill: c,
            d: "M0,".concat(Qe / 8, "h").concat(Qe, "v").concat(Qe * 3 / 4, "h").concat(-Qe, "z"),
            className: "recharts-legend-icon"
          });
        if (/* @__PURE__ */ A.isValidElement(r.legendIcon)) {
          var u = v_({}, r);
          return delete u.legendIcon, /* @__PURE__ */ A.cloneElement(r.legendIcon, u);
        }
        return /* @__PURE__ */ A.createElement(xf, {
          fill: c,
          cx: a,
          cy: a,
          size: Qe,
          sizeType: "diameter",
          type: r.type
        });
      }
    )
    /**
     * Draw items of legend
     * @return {ReactElement} Items
     */
  }, {
    key: "renderItems",
    value: function() {
      var r = this, o = this.props, a = o.payload, i = o.iconSize, s = o.layout, c = o.formatter, u = o.inactiveColor, d = {
        x: 0,
        y: 0,
        width: Qe,
        height: Qe
      }, f = {
        display: s === "horizontal" ? "inline-block" : "block",
        marginRight: 10
      }, m = {
        display: "inline-block",
        verticalAlign: "middle",
        marginRight: 4
      };
      return a.map(function(b, g) {
        var h = b.formatter || c, v = cn(Sr(Sr({
          "recharts-legend-item": !0
        }, "legend-item-".concat(g), !0), "inactive", b.inactive));
        if (b.type === "none")
          return null;
        var y = $o(b.value) ? null : b.value;
        Po(
          !$o(b.value),
          `The name property is also required when using a function for the dataKey of a chart's cartesian components. Ex: <Bar name="Name of my Data"/>`
          // eslint-disable-line max-len
        );
        var w = b.inactive ? u : b.color;
        return /* @__PURE__ */ A.createElement("li", ts({
          className: v,
          style: f,
          key: "legend-item-".concat(g)
        }, WP(r.props, b, g)), /* @__PURE__ */ A.createElement(JP, {
          width: i,
          height: i,
          viewBox: d,
          style: m
        }, r.renderIcon(b)), /* @__PURE__ */ A.createElement("span", {
          className: "recharts-legend-item-text",
          style: {
            color: w
          }
        }, h ? h(y, b, g) : y));
      });
    }
  }, {
    key: "render",
    value: function() {
      var r = this.props, o = r.payload, a = r.layout, i = r.align;
      if (!o || !o.length)
        return null;
      var s = {
        padding: 0,
        margin: 0,
        textAlign: a === "horizontal" ? i : "left"
      };
      return /* @__PURE__ */ A.createElement("ul", {
        className: "recharts-default-legend",
        style: s
      }, this.renderItems());
    }
  }]);
}(ca);
Sr(cc, "displayName", "Legend");
Sr(cc, "defaultProps", {
  iconSize: 14,
  layout: "horizontal",
  align: "center",
  verticalAlign: "middle",
  inactiveColor: "#ccc"
});
var E_ = ha;
function __() {
  this.__data__ = new E_(), this.size = 0;
}
var R_ = __;
function T_(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
var A_ = T_;
function N_(e) {
  return this.__data__.get(e);
}
var M_ = N_;
function O_(e) {
  return this.__data__.has(e);
}
var $_ = O_, I_ = ha, D_ = rc, k_ = oc, L_ = 200;
function F_(e, t) {
  var n = this.__data__;
  if (n instanceof I_) {
    var r = n.__data__;
    if (!D_ || r.length < L_ - 1)
      return r.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new k_(r);
  }
  return n.set(e, t), this.size = n.size, this;
}
var B_ = F_, z_ = ha, H_ = R_, j_ = A_, V_ = M_, G_ = $_, U_ = B_;
function Wn(e) {
  var t = this.__data__ = new z_(e);
  this.size = t.size;
}
Wn.prototype.clear = H_;
Wn.prototype.delete = j_;
Wn.prototype.get = V_;
Wn.prototype.has = G_;
Wn.prototype.set = U_;
var Ef = Wn, W_ = "__lodash_hash_undefined__";
function K_(e) {
  return this.__data__.set(e, W_), this;
}
var Y_ = K_;
function q_(e) {
  return this.__data__.has(e);
}
var X_ = q_, Z_ = oc, J_ = Y_, Q_ = X_;
function Fo(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new Z_(); ++t < n; )
    this.add(e[t]);
}
Fo.prototype.add = Fo.prototype.push = J_;
Fo.prototype.has = Q_;
var _f = Fo;
function eR(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
var tR = eR;
function nR(e, t) {
  return e.has(t);
}
var Rf = nR, rR = _f, oR = tR, aR = Rf, iR = 1, sR = 2;
function cR(e, t, n, r, o, a) {
  var i = n & iR, s = e.length, c = t.length;
  if (s != c && !(i && c > s))
    return !1;
  var u = a.get(e), d = a.get(t);
  if (u && d)
    return u == t && d == e;
  var f = -1, m = !0, b = n & sR ? new rR() : void 0;
  for (a.set(e, t), a.set(t, e); ++f < s; ) {
    var g = e[f], h = t[f];
    if (r)
      var v = i ? r(h, g, f, t, e, a) : r(g, h, f, e, t, a);
    if (v !== void 0) {
      if (v)
        continue;
      m = !1;
      break;
    }
    if (b) {
      if (!oR(t, function(y, w) {
        if (!aR(b, w) && (g === y || o(g, y, n, r, a)))
          return b.push(w);
      })) {
        m = !1;
        break;
      }
    } else if (!(g === h || o(g, h, n, r, a))) {
      m = !1;
      break;
    }
  }
  return a.delete(e), a.delete(t), m;
}
var Tf = cR, lR = _t, uR = lR.Uint8Array, dR = uR;
function fR(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r, o) {
    n[++t] = [o, r];
  }), n;
}
var pR = fR;
function mR(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r) {
    n[++t] = r;
  }), n;
}
var lc = mR, iu = Lr, su = dR, hR = nc, vR = Tf, gR = pR, bR = lc, yR = 1, wR = 2, SR = "[object Boolean]", xR = "[object Date]", CR = "[object Error]", PR = "[object Map]", ER = "[object Number]", _R = "[object RegExp]", RR = "[object Set]", TR = "[object String]", AR = "[object Symbol]", NR = "[object ArrayBuffer]", MR = "[object DataView]", cu = iu ? iu.prototype : void 0, pi = cu ? cu.valueOf : void 0;
function OR(e, t, n, r, o, a, i) {
  switch (n) {
    case MR:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case NR:
      return !(e.byteLength != t.byteLength || !a(new su(e), new su(t)));
    case SR:
    case xR:
    case ER:
      return hR(+e, +t);
    case CR:
      return e.name == t.name && e.message == t.message;
    case _R:
    case TR:
      return e == t + "";
    case PR:
      var s = gR;
    case RR:
      var c = r & yR;
      if (s || (s = bR), e.size != t.size && !c)
        return !1;
      var u = i.get(e);
      if (u)
        return u == t;
      r |= wR, i.set(e, t);
      var d = vR(s(e), s(t), r, o, a, i);
      return i.delete(e), d;
    case AR:
      if (pi)
        return pi.call(e) == pi.call(t);
  }
  return !1;
}
var $R = OR;
function IR(e, t) {
  for (var n = -1, r = t.length, o = e.length; ++n < r; )
    e[o + n] = t[n];
  return e;
}
var Af = IR, DR = Af, kR = mt;
function LR(e, t, n) {
  var r = t(e);
  return kR(e) ? r : DR(r, n(e));
}
var FR = LR;
function BR(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = 0, a = []; ++n < r; ) {
    var i = e[n];
    t(i, n, e) && (a[o++] = i);
  }
  return a;
}
var zR = BR;
function HR() {
  return [];
}
var jR = HR, VR = zR, GR = jR, UR = Object.prototype, WR = UR.propertyIsEnumerable, lu = Object.getOwnPropertySymbols, KR = lu ? function(e) {
  return e == null ? [] : (e = Object(e), VR(lu(e), function(t) {
    return WR.call(e, t);
  }));
} : GR, YR = KR;
function qR(e, t) {
  for (var n = -1, r = Array(e); ++n < e; )
    r[n] = t(n);
  return r;
}
var XR = qR, ZR = vn, JR = gn, QR = "[object Arguments]";
function eT(e) {
  return JR(e) && ZR(e) == QR;
}
var tT = eT, uu = tT, nT = gn, Nf = Object.prototype, rT = Nf.hasOwnProperty, oT = Nf.propertyIsEnumerable, aT = uu(/* @__PURE__ */ function() {
  return arguments;
}()) ? uu : function(e) {
  return nT(e) && rT.call(e, "callee") && !oT.call(e, "callee");
}, uc = aT, Bo = { exports: {} };
function iT() {
  return !1;
}
var sT = iT;
Bo.exports;
(function(e, t) {
  var n = _t, r = sT, o = t && !t.nodeType && t, a = o && !0 && e && !e.nodeType && e, i = a && a.exports === o, s = i ? n.Buffer : void 0, c = s ? s.isBuffer : void 0, u = c || r;
  e.exports = u;
})(Bo, Bo.exports);
var Mf = Bo.exports, cT = 9007199254740991, lT = /^(?:0|[1-9]\d*)$/;
function uT(e, t) {
  var n = typeof e;
  return t = t ?? cT, !!t && (n == "number" || n != "symbol" && lT.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var dc = uT, dT = 9007199254740991;
function fT(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= dT;
}
var fc = fT, pT = vn, mT = fc, hT = gn, vT = "[object Arguments]", gT = "[object Array]", bT = "[object Boolean]", yT = "[object Date]", wT = "[object Error]", ST = "[object Function]", xT = "[object Map]", CT = "[object Number]", PT = "[object Object]", ET = "[object RegExp]", _T = "[object Set]", RT = "[object String]", TT = "[object WeakMap]", AT = "[object ArrayBuffer]", NT = "[object DataView]", MT = "[object Float32Array]", OT = "[object Float64Array]", $T = "[object Int8Array]", IT = "[object Int16Array]", DT = "[object Int32Array]", kT = "[object Uint8Array]", LT = "[object Uint8ClampedArray]", FT = "[object Uint16Array]", BT = "[object Uint32Array]", ye = {};
ye[MT] = ye[OT] = ye[$T] = ye[IT] = ye[DT] = ye[kT] = ye[LT] = ye[FT] = ye[BT] = !0;
ye[vT] = ye[gT] = ye[AT] = ye[bT] = ye[NT] = ye[yT] = ye[wT] = ye[ST] = ye[xT] = ye[CT] = ye[PT] = ye[ET] = ye[_T] = ye[RT] = ye[TT] = !1;
function zT(e) {
  return hT(e) && mT(e.length) && !!ye[pT(e)];
}
var HT = zT;
function jT(e) {
  return function(t) {
    return e(t);
  };
}
var Of = jT, zo = { exports: {} };
zo.exports;
(function(e, t) {
  var n = qd, r = t && !t.nodeType && t, o = r && !0 && e && !e.nodeType && e, a = o && o.exports === r, i = a && n.process, s = function() {
    try {
      var c = o && o.require && o.require("util").types;
      return c || i && i.binding && i.binding("util");
    } catch {
    }
  }();
  e.exports = s;
})(zo, zo.exports);
var VT = zo.exports, GT = HT, UT = Of, du = VT, fu = du && du.isTypedArray, WT = fu ? UT(fu) : GT, $f = WT, KT = XR, YT = uc, qT = mt, XT = Mf, ZT = dc, JT = $f, QT = Object.prototype, eA = QT.hasOwnProperty;
function tA(e, t) {
  var n = qT(e), r = !n && YT(e), o = !n && !r && XT(e), a = !n && !r && !o && JT(e), i = n || r || o || a, s = i ? KT(e.length, String) : [], c = s.length;
  for (var u in e)
    (t || eA.call(e, u)) && !(i && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    ZT(u, c))) && s.push(u);
  return s;
}
var nA = tA, rA = Object.prototype;
function oA(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || rA;
  return e === n;
}
var aA = oA;
function iA(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var sA = iA, cA = sA, lA = cA(Object.keys, Object), uA = lA, dA = aA, fA = uA, pA = Object.prototype, mA = pA.hasOwnProperty;
function hA(e) {
  if (!dA(e))
    return fA(e);
  var t = [];
  for (var n in Object(e))
    mA.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
var vA = hA, gA = tc, bA = fc;
function yA(e) {
  return e != null && bA(e.length) && !gA(e);
}
var ya = yA, wA = nA, SA = vA, xA = ya;
function CA(e) {
  return xA(e) ? wA(e) : SA(e);
}
var pc = CA, PA = FR, EA = YR, _A = pc;
function RA(e) {
  return PA(e, _A, EA);
}
var TA = RA, pu = TA, AA = 1, NA = Object.prototype, MA = NA.hasOwnProperty;
function OA(e, t, n, r, o, a) {
  var i = n & AA, s = pu(e), c = s.length, u = pu(t), d = u.length;
  if (c != d && !i)
    return !1;
  for (var f = c; f--; ) {
    var m = s[f];
    if (!(i ? m in t : MA.call(t, m)))
      return !1;
  }
  var b = a.get(e), g = a.get(t);
  if (b && g)
    return b == t && g == e;
  var h = !0;
  a.set(e, t), a.set(t, e);
  for (var v = i; ++f < c; ) {
    m = s[f];
    var y = e[m], w = t[m];
    if (r)
      var S = i ? r(w, y, m, t, e, a) : r(y, w, m, e, t, a);
    if (!(S === void 0 ? y === w || o(y, w, n, r, a) : S)) {
      h = !1;
      break;
    }
    v || (v = m == "constructor");
  }
  if (h && !v) {
    var x = e.constructor, P = t.constructor;
    x != P && "constructor" in e && "constructor" in t && !(typeof x == "function" && x instanceof x && typeof P == "function" && P instanceof P) && (h = !1);
  }
  return a.delete(e), a.delete(t), h;
}
var $A = OA, IA = bn, DA = _t, kA = IA(DA, "DataView"), LA = kA, FA = bn, BA = _t, zA = FA(BA, "Promise"), HA = zA, jA = bn, VA = _t, GA = jA(VA, "Set"), If = GA, UA = bn, WA = _t, KA = UA(WA, "WeakMap"), YA = KA, rs = LA, os = rc, as = HA, is = If, ss = YA, Df = vn, Kn = Jd, mu = "[object Map]", qA = "[object Object]", hu = "[object Promise]", vu = "[object Set]", gu = "[object WeakMap]", bu = "[object DataView]", XA = Kn(rs), ZA = Kn(os), JA = Kn(as), QA = Kn(is), eN = Kn(ss), on = Df;
(rs && on(new rs(new ArrayBuffer(1))) != bu || os && on(new os()) != mu || as && on(as.resolve()) != hu || is && on(new is()) != vu || ss && on(new ss()) != gu) && (on = function(e) {
  var t = Df(e), n = t == qA ? e.constructor : void 0, r = n ? Kn(n) : "";
  if (r)
    switch (r) {
      case XA:
        return bu;
      case ZA:
        return mu;
      case JA:
        return hu;
      case QA:
        return vu;
      case eN:
        return gu;
    }
  return t;
});
var tN = on, mi = Ef, nN = Tf, rN = $R, oN = $A, yu = tN, wu = mt, Su = Mf, aN = $f, iN = 1, xu = "[object Arguments]", Cu = "[object Array]", lo = "[object Object]", sN = Object.prototype, Pu = sN.hasOwnProperty;
function cN(e, t, n, r, o, a) {
  var i = wu(e), s = wu(t), c = i ? Cu : yu(e), u = s ? Cu : yu(t);
  c = c == xu ? lo : c, u = u == xu ? lo : u;
  var d = c == lo, f = u == lo, m = c == u;
  if (m && Su(e)) {
    if (!Su(t))
      return !1;
    i = !0, d = !1;
  }
  if (m && !d)
    return a || (a = new mi()), i || aN(e) ? nN(e, t, n, r, o, a) : rN(e, t, c, n, r, o, a);
  if (!(n & iN)) {
    var b = d && Pu.call(e, "__wrapped__"), g = f && Pu.call(t, "__wrapped__");
    if (b || g) {
      var h = b ? e.value() : e, v = g ? t.value() : t;
      return a || (a = new mi()), o(h, v, n, r, a);
    }
  }
  return m ? (a || (a = new mi()), oN(e, t, n, r, o, a)) : !1;
}
var lN = cN, uN = lN, Eu = gn;
function kf(e, t, n, r, o) {
  return e === t ? !0 : e == null || t == null || !Eu(e) && !Eu(t) ? e !== e && t !== t : uN(e, t, n, r, kf, o);
}
var Lf = kf, dN = Ef, fN = Lf, pN = 1, mN = 2;
function hN(e, t, n, r) {
  var o = n.length, a = o, i = !r;
  if (e == null)
    return !a;
  for (e = Object(e); o--; ) {
    var s = n[o];
    if (i && s[2] ? s[1] !== e[s[0]] : !(s[0] in e))
      return !1;
  }
  for (; ++o < a; ) {
    s = n[o];
    var c = s[0], u = e[c], d = s[1];
    if (i && s[2]) {
      if (u === void 0 && !(c in e))
        return !1;
    } else {
      var f = new dN();
      if (r)
        var m = r(u, d, c, e, t, f);
      if (!(m === void 0 ? fN(d, u, pN | mN, r, f) : m))
        return !1;
    }
  }
  return !0;
}
var vN = hN, gN = Ut;
function bN(e) {
  return e === e && !gN(e);
}
var Ff = bN, yN = Ff, wN = pc;
function SN(e) {
  for (var t = wN(e), n = t.length; n--; ) {
    var r = t[n], o = e[r];
    t[n] = [r, o, yN(o)];
  }
  return t;
}
var xN = SN;
function CN(e, t) {
  return function(n) {
    return n == null ? !1 : n[e] === t && (t !== void 0 || e in Object(n));
  };
}
var Bf = CN, PN = vN, EN = xN, _N = Bf;
function RN(e) {
  var t = EN(e);
  return t.length == 1 && t[0][2] ? _N(t[0][0], t[0][1]) : function(n) {
    return n === e || PN(n, e, t);
  };
}
var TN = RN;
function AN(e, t) {
  return e != null && t in Object(e);
}
var NN = AN, MN = rf, ON = uc, $N = mt, IN = dc, DN = fc, kN = ga;
function LN(e, t, n) {
  t = MN(t, e);
  for (var r = -1, o = t.length, a = !1; ++r < o; ) {
    var i = kN(t[r]);
    if (!(a = e != null && n(e, i)))
      break;
    e = e[i];
  }
  return a || ++r != o ? a : (o = e == null ? 0 : e.length, !!o && DN(o) && IN(i, o) && ($N(e) || ON(e)));
}
var FN = LN, BN = NN, zN = FN;
function HN(e, t) {
  return e != null && zN(e, t, BN);
}
var jN = HN, VN = Lf, GN = xP, UN = jN, WN = ec, KN = Ff, YN = Bf, qN = ga, XN = 1, ZN = 2;
function JN(e, t) {
  return WN(e) && KN(t) ? YN(qN(e), t) : function(n) {
    var r = GN(n, e);
    return r === void 0 && r === t ? UN(n, e) : VN(t, r, XN | ZN);
  };
}
var QN = JN;
function e1(e) {
  return e;
}
var wa = e1;
function t1(e) {
  return function(t) {
    return t?.[e];
  };
}
var n1 = t1, r1 = ic;
function o1(e) {
  return function(t) {
    return r1(t, e);
  };
}
var a1 = o1, i1 = n1, s1 = a1, c1 = ec, l1 = ga;
function u1(e) {
  return c1(e) ? i1(l1(e)) : s1(e);
}
var d1 = u1, f1 = TN, p1 = QN, m1 = wa, h1 = mt, v1 = d1;
function g1(e) {
  return typeof e == "function" ? e : e == null ? m1 : typeof e == "object" ? h1(e) ? p1(e[0], e[1]) : f1(e) : v1(e);
}
var zf = g1;
function b1(e, t, n, r) {
  for (var o = e.length, a = n + (r ? 1 : -1); r ? a-- : ++a < o; )
    if (t(e[a], a, e))
      return a;
  return -1;
}
var y1 = b1;
function w1(e) {
  return e !== e;
}
var S1 = w1;
function x1(e, t, n) {
  for (var r = n - 1, o = e.length; ++r < o; )
    if (e[r] === t)
      return r;
  return -1;
}
var C1 = x1, P1 = y1, E1 = S1, _1 = C1;
function R1(e, t, n) {
  return t === t ? _1(e, t, n) : P1(e, E1, n);
}
var T1 = R1, A1 = T1;
function N1(e, t) {
  var n = e == null ? 0 : e.length;
  return !!n && A1(e, t, 0) > -1;
}
var M1 = N1;
function O1(e, t, n) {
  for (var r = -1, o = e == null ? 0 : e.length; ++r < o; )
    if (n(t, e[r]))
      return !0;
  return !1;
}
var $1 = O1;
function I1() {
}
var D1 = I1, hi = If, k1 = D1, L1 = lc, F1 = 1 / 0, B1 = hi && 1 / L1(new hi([, -0]))[1] == F1 ? function(e) {
  return new hi(e);
} : k1, z1 = B1, H1 = _f, j1 = M1, V1 = $1, G1 = Rf, U1 = z1, W1 = lc, K1 = 200;
function Y1(e, t, n) {
  var r = -1, o = j1, a = e.length, i = !0, s = [], c = s;
  if (n)
    i = !1, o = V1;
  else if (a >= K1) {
    var u = t ? null : U1(e);
    if (u)
      return W1(u);
    i = !1, o = G1, c = new H1();
  } else
    c = t ? [] : s;
  e:
    for (; ++r < a; ) {
      var d = e[r], f = t ? t(d) : d;
      if (d = n || d !== 0 ? d : 0, i && f === f) {
        for (var m = c.length; m--; )
          if (c[m] === f)
            continue e;
        t && c.push(f), s.push(d);
      } else o(c, f, n) || (c !== s && c.push(f), s.push(d));
    }
  return s;
}
var q1 = Y1, X1 = zf, Z1 = q1;
function J1(e, t) {
  return e && e.length ? Z1(e, X1(t)) : [];
}
var Q1 = J1;
const _u = /* @__PURE__ */ Et(Q1);
function Hf(e, t, n) {
  return t === !0 ? _u(e, n) : $o(t) ? _u(e, t) : e;
}
function Dn(e) {
  "@babel/helpers - typeof";
  return Dn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Dn(e);
}
var eM = ["ref"];
function Ru(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function $t(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ru(Object(n), !0).forEach(function(r) {
      Sa(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ru(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function tM(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Tu(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, Vf(r.key), r);
  }
}
function nM(e, t, n) {
  return t && Tu(e.prototype, t), n && Tu(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function rM(e, t, n) {
  return t = Ho(t), oM(e, jf() ? Reflect.construct(t, n || [], Ho(e).constructor) : t.apply(e, n));
}
function oM(e, t) {
  if (t && (Dn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return aM(e);
}
function aM(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function jf() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (jf = function() {
    return !!e;
  })();
}
function Ho(e) {
  return Ho = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Ho(e);
}
function iM(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && cs(e, t);
}
function cs(e, t) {
  return cs = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
    return r.__proto__ = o, r;
  }, cs(e, t);
}
function Sa(e, t, n) {
  return t = Vf(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Vf(e) {
  var t = sM(e, "string");
  return Dn(t) == "symbol" ? t : t + "";
}
function sM(e, t) {
  if (Dn(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (Dn(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function cM(e, t) {
  if (e == null) return {};
  var n = lM(e, t), r, o;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (o = 0; o < a.length; o++)
      r = a[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function lM(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
function uM(e) {
  return e.value;
}
function dM(e, t) {
  if (/* @__PURE__ */ A.isValidElement(e))
    return /* @__PURE__ */ A.cloneElement(e, t);
  if (typeof e == "function")
    return /* @__PURE__ */ A.createElement(e, t);
  t.ref;
  var n = cM(t, eM);
  return /* @__PURE__ */ A.createElement(cc, n);
}
var Au = 1, mc = /* @__PURE__ */ function(e) {
  function t() {
    var n;
    tM(this, t);
    for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++)
      o[a] = arguments[a];
    return n = rM(this, t, [].concat(o)), Sa(n, "lastBoundingBox", {
      width: -1,
      height: -1
    }), n;
  }
  return iM(t, e), nM(t, [{
    key: "componentDidMount",
    value: function() {
      this.updateBBox();
    }
  }, {
    key: "componentDidUpdate",
    value: function() {
      this.updateBBox();
    }
  }, {
    key: "getBBox",
    value: function() {
      if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
        var r = this.wrapperNode.getBoundingClientRect();
        return r.height = this.wrapperNode.offsetHeight, r.width = this.wrapperNode.offsetWidth, r;
      }
      return null;
    }
  }, {
    key: "updateBBox",
    value: function() {
      var r = this.props.onBBoxUpdate, o = this.getBBox();
      o ? (Math.abs(o.width - this.lastBoundingBox.width) > Au || Math.abs(o.height - this.lastBoundingBox.height) > Au) && (this.lastBoundingBox.width = o.width, this.lastBoundingBox.height = o.height, r && r(o)) : (this.lastBoundingBox.width !== -1 || this.lastBoundingBox.height !== -1) && (this.lastBoundingBox.width = -1, this.lastBoundingBox.height = -1, r && r(null));
    }
  }, {
    key: "getBBoxSnapshot",
    value: function() {
      return this.lastBoundingBox.width >= 0 && this.lastBoundingBox.height >= 0 ? $t({}, this.lastBoundingBox) : {
        width: 0,
        height: 0
      };
    }
  }, {
    key: "getDefaultPosition",
    value: function(r) {
      var o = this.props, a = o.layout, i = o.align, s = o.verticalAlign, c = o.margin, u = o.chartWidth, d = o.chartHeight, f, m;
      if (!r || (r.left === void 0 || r.left === null) && (r.right === void 0 || r.right === null))
        if (i === "center" && a === "vertical") {
          var b = this.getBBoxSnapshot();
          f = {
            left: ((u || 0) - b.width) / 2
          };
        } else
          f = i === "right" ? {
            right: c && c.right || 0
          } : {
            left: c && c.left || 0
          };
      if (!r || (r.top === void 0 || r.top === null) && (r.bottom === void 0 || r.bottom === null))
        if (s === "middle") {
          var g = this.getBBoxSnapshot();
          m = {
            top: ((d || 0) - g.height) / 2
          };
        } else
          m = s === "bottom" ? {
            bottom: c && c.bottom || 0
          } : {
            top: c && c.top || 0
          };
      return $t($t({}, f), m);
    }
  }, {
    key: "render",
    value: function() {
      var r = this, o = this.props, a = o.content, i = o.width, s = o.height, c = o.wrapperStyle, u = o.payloadUniqBy, d = o.payload, f = $t($t({
        position: "absolute",
        width: i || "auto",
        height: s || "auto"
      }, this.getDefaultPosition(c)), c);
      return /* @__PURE__ */ A.createElement("div", {
        className: "recharts-legend-wrapper",
        style: f,
        ref: function(b) {
          r.wrapperNode = b;
        }
      }, dM(a, $t($t({}, this.props), {}, {
        payload: Hf(d, u, uM)
      })));
    }
  }], [{
    key: "getWithHeight",
    value: function(r, o) {
      var a = $t($t({}, this.defaultProps), r.props), i = a.layout;
      return i === "vertical" && ct(r.props.height) ? {
        height: r.props.height
      } : i === "horizontal" ? {
        width: r.props.width || o
      } : null;
    }
  }]);
}(ca);
Sa(mc, "displayName", "Legend");
Sa(mc, "defaultProps", {
  iconSize: 14,
  layout: "horizontal",
  align: "center",
  verticalAlign: "bottom"
});
var Nu = Lr, fM = uc, pM = mt, Mu = Nu ? Nu.isConcatSpreadable : void 0;
function mM(e) {
  return pM(e) || fM(e) || !!(Mu && e && e[Mu]);
}
var hM = mM, vM = Af, gM = hM;
function Gf(e, t, n, r, o) {
  var a = -1, i = e.length;
  for (n || (n = gM), o || (o = []); ++a < i; ) {
    var s = e[a];
    t > 0 && n(s) ? t > 1 ? Gf(s, t - 1, n, r, o) : vM(o, s) : r || (o[o.length] = s);
  }
  return o;
}
var bM = Gf;
function yM(e) {
  return function(t, n, r) {
    for (var o = -1, a = Object(t), i = r(t), s = i.length; s--; ) {
      var c = i[e ? s : ++o];
      if (n(a[c], c, a) === !1)
        break;
    }
    return t;
  };
}
var wM = yM, SM = wM, xM = SM(), CM = xM, PM = CM, EM = pc;
function _M(e, t) {
  return e && PM(e, t, EM);
}
var RM = _M, TM = ya;
function AM(e, t) {
  return function(n, r) {
    if (n == null)
      return n;
    if (!TM(n))
      return e(n, r);
    for (var o = n.length, a = t ? o : -1, i = Object(n); (t ? a-- : ++a < o) && r(i[a], a, i) !== !1; )
      ;
    return n;
  };
}
var NM = AM, MM = RM, OM = NM, $M = OM(MM), IM = $M, DM = IM, kM = ya;
function LM(e, t) {
  var n = -1, r = kM(e) ? Array(e.length) : [];
  return DM(e, function(o, a, i) {
    r[++n] = t(o, a, i);
  }), r;
}
var FM = LM;
function BM(e, t) {
  var n = e.length;
  for (e.sort(t); n--; )
    e[n] = e[n].value;
  return e;
}
var zM = BM, Ou = Fr;
function HM(e, t) {
  if (e !== t) {
    var n = e !== void 0, r = e === null, o = e === e, a = Ou(e), i = t !== void 0, s = t === null, c = t === t, u = Ou(t);
    if (!s && !u && !a && e > t || a && i && c && !s && !u || r && i && c || !n && c || !o)
      return 1;
    if (!r && !a && !u && e < t || u && n && o && !r && !a || s && n && o || !i && o || !c)
      return -1;
  }
  return 0;
}
var jM = HM, VM = jM;
function GM(e, t, n) {
  for (var r = -1, o = e.criteria, a = t.criteria, i = o.length, s = n.length; ++r < i; ) {
    var c = VM(o[r], a[r]);
    if (c) {
      if (r >= s)
        return c;
      var u = n[r];
      return c * (u == "desc" ? -1 : 1);
    }
  }
  return e.index - t.index;
}
var UM = GM, vi = ef, WM = ic, KM = zf, YM = FM, qM = zM, XM = Of, ZM = UM, JM = wa, QM = mt;
function eO(e, t, n) {
  t.length ? t = vi(t, function(a) {
    return QM(a) ? function(i) {
      return WM(i, a.length === 1 ? a[0] : a);
    } : a;
  }) : t = [JM];
  var r = -1;
  t = vi(t, XM(KM));
  var o = YM(e, function(a, i, s) {
    var c = vi(t, function(u) {
      return u(a);
    });
    return { criteria: c, index: ++r, value: a };
  });
  return qM(o, function(a, i) {
    return ZM(a, i, n);
  });
}
var tO = eO;
function nO(e, t, n) {
  switch (n.length) {
    case 0:
      return e.call(t);
    case 1:
      return e.call(t, n[0]);
    case 2:
      return e.call(t, n[0], n[1]);
    case 3:
      return e.call(t, n[0], n[1], n[2]);
  }
  return e.apply(t, n);
}
var rO = nO, oO = rO, $u = Math.max;
function aO(e, t, n) {
  return t = $u(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var r = arguments, o = -1, a = $u(r.length - t, 0), i = Array(a); ++o < a; )
      i[o] = r[t + o];
    o = -1;
    for (var s = Array(t + 1); ++o < t; )
      s[o] = r[o];
    return s[t] = n(i), oO(e, this, s);
  };
}
var iO = aO;
function sO(e) {
  return function() {
    return e;
  };
}
var cO = sO, lO = bn, uO = function() {
  try {
    var e = lO(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), dO = uO, fO = cO, Iu = dO, pO = wa, mO = Iu ? function(e, t) {
  return Iu(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: fO(t),
    writable: !0
  });
} : pO, hO = mO, vO = 800, gO = 16, bO = Date.now;
function yO(e) {
  var t = 0, n = 0;
  return function() {
    var r = bO(), o = gO - (r - n);
    if (n = r, o > 0) {
      if (++t >= vO)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
var wO = yO, SO = hO, xO = wO, CO = xO(SO), PO = CO, EO = wa, _O = iO, RO = PO;
function TO(e, t) {
  return RO(_O(e, t, EO), e + "");
}
var AO = TO, NO = nc, MO = ya, OO = dc, $O = Ut;
function IO(e, t, n) {
  if (!$O(n))
    return !1;
  var r = typeof t;
  return (r == "number" ? MO(n) && OO(t, n.length) : r == "string" && t in n) ? NO(n[t], e) : !1;
}
var DO = IO, kO = bM, LO = tO, FO = AO, Du = DO, BO = FO(function(e, t) {
  if (e == null)
    return [];
  var n = t.length;
  return n > 1 && Du(e, t[0], t[1]) ? t = [] : n > 2 && Du(t[0], t[1], t[2]) && (t = [t[0]]), LO(e, kO(t, 1), []);
}), zO = BO;
const HO = /* @__PURE__ */ Et(zO);
function xr(e) {
  "@babel/helpers - typeof";
  return xr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, xr(e);
}
function ls() {
  return ls = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, ls.apply(this, arguments);
}
function jO(e, t) {
  return WO(e) || UO(e, t) || GO(e, t) || VO();
}
function VO() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function GO(e, t) {
  if (e) {
    if (typeof e == "string") return ku(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ku(e, t);
  }
}
function ku(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function UO(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r, o, a, i, s = [], c = !0, u = !1;
    try {
      if (a = (n = n.call(e)).next, t !== 0) for (; !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t); c = !0) ;
    } catch (d) {
      u = !0, o = d;
    } finally {
      try {
        if (!c && n.return != null && (i = n.return(), Object(i) !== i)) return;
      } finally {
        if (u) throw o;
      }
    }
    return s;
  }
}
function WO(e) {
  if (Array.isArray(e)) return e;
}
function Lu(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function gi(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Lu(Object(n), !0).forEach(function(r) {
      KO(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Lu(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function KO(e, t, n) {
  return t = YO(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function YO(e) {
  var t = qO(e, "string");
  return xr(t) == "symbol" ? t : t + "";
}
function qO(e, t) {
  if (xr(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (xr(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function XO(e) {
  return Array.isArray(e) && Io(e[0]) && Io(e[1]) ? e.join(" ~ ") : e;
}
var ZO = function(t) {
  var n = t.separator, r = n === void 0 ? " : " : n, o = t.contentStyle, a = o === void 0 ? {} : o, i = t.itemStyle, s = i === void 0 ? {} : i, c = t.labelStyle, u = c === void 0 ? {} : c, d = t.payload, f = t.formatter, m = t.itemSorter, b = t.wrapperClassName, g = t.labelClassName, h = t.label, v = t.labelFormatter, y = t.accessibilityLayer, w = y === void 0 ? !1 : y, S = function() {
    if (d && d.length) {
      var F = {
        padding: 0,
        margin: 0
      }, $ = (m ? HO(d, m) : d).map(function(I, z) {
        if (I.type === "none")
          return null;
        var L = gi({
          display: "block",
          paddingTop: 4,
          paddingBottom: 4,
          color: I.color || "#000"
        }, s), U = I.formatter || f || XO, H = I.value, B = I.name, oe = H, re = B;
        if (U && oe != null && re != null) {
          var ie = U(H, B, I, z, d);
          if (Array.isArray(ie)) {
            var j = jO(ie, 2);
            oe = j[0], re = j[1];
          } else
            oe = ie;
        }
        return (
          // eslint-disable-next-line react/no-array-index-key
          /* @__PURE__ */ A.createElement("li", {
            className: "recharts-tooltip-item",
            key: "tooltip-item-".concat(z),
            style: L
          }, Io(re) ? /* @__PURE__ */ A.createElement("span", {
            className: "recharts-tooltip-item-name"
          }, re) : null, Io(re) ? /* @__PURE__ */ A.createElement("span", {
            className: "recharts-tooltip-item-separator"
          }, r) : null, /* @__PURE__ */ A.createElement("span", {
            className: "recharts-tooltip-item-value"
          }, oe), /* @__PURE__ */ A.createElement("span", {
            className: "recharts-tooltip-item-unit"
          }, I.unit || ""))
        );
      });
      return /* @__PURE__ */ A.createElement("ul", {
        className: "recharts-tooltip-item-list",
        style: F
      }, $);
    }
    return null;
  }, x = gi({
    margin: 0,
    padding: 10,
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    whiteSpace: "nowrap"
  }, a), P = gi({
    margin: 0
  }, u), E = !EP(h), C = E ? h : "", T = cn("recharts-default-tooltip", b), R = cn("recharts-tooltip-label", g);
  E && v && d !== void 0 && d !== null && (C = v(h, d));
  var D = w ? {
    role: "status",
    "aria-live": "assertive"
  } : {};
  return /* @__PURE__ */ A.createElement("div", ls({
    className: T,
    style: x
  }, D), /* @__PURE__ */ A.createElement("p", {
    className: R,
    style: P
  }, /* @__PURE__ */ A.isValidElement(C) ? C : "".concat(C)), S());
};
function Cr(e) {
  "@babel/helpers - typeof";
  return Cr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Cr(e);
}
function uo(e, t, n) {
  return t = JO(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function JO(e) {
  var t = QO(e, "string");
  return Cr(t) == "symbol" ? t : t + "";
}
function QO(e, t) {
  if (Cr(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (Cr(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var ir = "recharts-tooltip-wrapper", e$ = {
  visibility: "hidden"
};
function t$(e) {
  var t = e.coordinate, n = e.translateX, r = e.translateY;
  return cn(ir, uo(uo(uo(uo({}, "".concat(ir, "-right"), ct(n) && t && ct(t.x) && n >= t.x), "".concat(ir, "-left"), ct(n) && t && ct(t.x) && n < t.x), "".concat(ir, "-bottom"), ct(r) && t && ct(t.y) && r >= t.y), "".concat(ir, "-top"), ct(r) && t && ct(t.y) && r < t.y));
}
function Fu(e) {
  var t = e.allowEscapeViewBox, n = e.coordinate, r = e.key, o = e.offsetTopLeft, a = e.position, i = e.reverseDirection, s = e.tooltipDimension, c = e.viewBox, u = e.viewBoxDimension;
  if (a && ct(a[r]))
    return a[r];
  var d = n[r] - s - o, f = n[r] + o;
  if (t[r])
    return i[r] ? d : f;
  if (i[r]) {
    var m = d, b = c[r];
    return m < b ? Math.max(f, c[r]) : Math.max(d, c[r]);
  }
  var g = f + s, h = c[r] + u;
  return g > h ? Math.max(d, c[r]) : Math.max(f, c[r]);
}
function n$(e) {
  var t = e.translateX, n = e.translateY, r = e.useTranslate3d;
  return {
    transform: r ? "translate3d(".concat(t, "px, ").concat(n, "px, 0)") : "translate(".concat(t, "px, ").concat(n, "px)")
  };
}
function r$(e) {
  var t = e.allowEscapeViewBox, n = e.coordinate, r = e.offsetTopLeft, o = e.position, a = e.reverseDirection, i = e.tooltipBox, s = e.useTranslate3d, c = e.viewBox, u, d, f;
  return i.height > 0 && i.width > 0 && n ? (d = Fu({
    allowEscapeViewBox: t,
    coordinate: n,
    key: "x",
    offsetTopLeft: r,
    position: o,
    reverseDirection: a,
    tooltipDimension: i.width,
    viewBox: c,
    viewBoxDimension: c.width
  }), f = Fu({
    allowEscapeViewBox: t,
    coordinate: n,
    key: "y",
    offsetTopLeft: r,
    position: o,
    reverseDirection: a,
    tooltipDimension: i.height,
    viewBox: c,
    viewBoxDimension: c.height
  }), u = n$({
    translateX: d,
    translateY: f,
    useTranslate3d: s
  })) : u = e$, {
    cssProperties: u,
    cssClasses: t$({
      translateX: d,
      translateY: f,
      coordinate: n
    })
  };
}
function kn(e) {
  "@babel/helpers - typeof";
  return kn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, kn(e);
}
function Bu(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function zu(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Bu(Object(n), !0).forEach(function(r) {
      ds(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Bu(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function o$(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function a$(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, Wf(r.key), r);
  }
}
function i$(e, t, n) {
  return t && a$(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function s$(e, t, n) {
  return t = jo(t), c$(e, Uf() ? Reflect.construct(t, n || [], jo(e).constructor) : t.apply(e, n));
}
function c$(e, t) {
  if (t && (kn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return l$(e);
}
function l$(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Uf() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Uf = function() {
    return !!e;
  })();
}
function jo(e) {
  return jo = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, jo(e);
}
function u$(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && us(e, t);
}
function us(e, t) {
  return us = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
    return r.__proto__ = o, r;
  }, us(e, t);
}
function ds(e, t, n) {
  return t = Wf(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Wf(e) {
  var t = d$(e, "string");
  return kn(t) == "symbol" ? t : t + "";
}
function d$(e, t) {
  if (kn(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (kn(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var Hu = 1, f$ = /* @__PURE__ */ function(e) {
  function t() {
    var n;
    o$(this, t);
    for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++)
      o[a] = arguments[a];
    return n = s$(this, t, [].concat(o)), ds(n, "state", {
      dismissed: !1,
      dismissedAtCoordinate: {
        x: 0,
        y: 0
      },
      lastBoundingBox: {
        width: -1,
        height: -1
      }
    }), ds(n, "handleKeyDown", function(i) {
      if (i.key === "Escape") {
        var s, c, u, d;
        n.setState({
          dismissed: !0,
          dismissedAtCoordinate: {
            x: (s = (c = n.props.coordinate) === null || c === void 0 ? void 0 : c.x) !== null && s !== void 0 ? s : 0,
            y: (u = (d = n.props.coordinate) === null || d === void 0 ? void 0 : d.y) !== null && u !== void 0 ? u : 0
          }
        });
      }
    }), n;
  }
  return u$(t, e), i$(t, [{
    key: "updateBBox",
    value: function() {
      if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
        var r = this.wrapperNode.getBoundingClientRect();
        (Math.abs(r.width - this.state.lastBoundingBox.width) > Hu || Math.abs(r.height - this.state.lastBoundingBox.height) > Hu) && this.setState({
          lastBoundingBox: {
            width: r.width,
            height: r.height
          }
        });
      } else (this.state.lastBoundingBox.width !== -1 || this.state.lastBoundingBox.height !== -1) && this.setState({
        lastBoundingBox: {
          width: -1,
          height: -1
        }
      });
    }
  }, {
    key: "componentDidMount",
    value: function() {
      document.addEventListener("keydown", this.handleKeyDown), this.updateBBox();
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      document.removeEventListener("keydown", this.handleKeyDown);
    }
  }, {
    key: "componentDidUpdate",
    value: function() {
      var r, o;
      this.props.active && this.updateBBox(), this.state.dismissed && (((r = this.props.coordinate) === null || r === void 0 ? void 0 : r.x) !== this.state.dismissedAtCoordinate.x || ((o = this.props.coordinate) === null || o === void 0 ? void 0 : o.y) !== this.state.dismissedAtCoordinate.y) && (this.state.dismissed = !1);
    }
  }, {
    key: "render",
    value: function() {
      var r = this, o = this.props, a = o.active, i = o.allowEscapeViewBox, s = o.animationDuration, c = o.animationEasing, u = o.children, d = o.coordinate, f = o.hasPayload, m = o.isAnimationActive, b = o.offset, g = o.position, h = o.reverseDirection, v = o.useTranslate3d, y = o.viewBox, w = o.wrapperStyle, S = r$({
        allowEscapeViewBox: i,
        coordinate: d,
        offsetTopLeft: b,
        position: g,
        reverseDirection: h,
        tooltipBox: this.state.lastBoundingBox,
        useTranslate3d: v,
        viewBox: y
      }), x = S.cssClasses, P = S.cssProperties, E = zu(zu({
        transition: m && a ? "transform ".concat(s, "ms ").concat(c) : void 0
      }, P), {}, {
        pointerEvents: "none",
        visibility: !this.state.dismissed && a && f ? "visible" : "hidden",
        position: "absolute",
        top: 0,
        left: 0
      }, w);
      return (
        // This element allow listening to the `Escape` key.
        // See https://github.com/recharts/recharts/pull/2925
        /* @__PURE__ */ A.createElement("div", {
          tabIndex: -1,
          className: x,
          style: E,
          ref: function(T) {
            r.wrapperNode = T;
          }
        }, u)
      );
    }
  }]);
}(ca), p$ = function() {
  return !(typeof window < "u" && window.document && window.document.createElement && window.setTimeout);
}, m$ = {
  isSsr: p$()
};
function Ln(e) {
  "@babel/helpers - typeof";
  return Ln = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ln(e);
}
function ju(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Vu(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ju(Object(n), !0).forEach(function(r) {
      hc(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ju(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function h$(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function v$(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, Yf(r.key), r);
  }
}
function g$(e, t, n) {
  return t && v$(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function b$(e, t, n) {
  return t = Vo(t), y$(e, Kf() ? Reflect.construct(t, n || [], Vo(e).constructor) : t.apply(e, n));
}
function y$(e, t) {
  if (t && (Ln(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return w$(e);
}
function w$(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Kf() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Kf = function() {
    return !!e;
  })();
}
function Vo(e) {
  return Vo = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Vo(e);
}
function S$(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && fs(e, t);
}
function fs(e, t) {
  return fs = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
    return r.__proto__ = o, r;
  }, fs(e, t);
}
function hc(e, t, n) {
  return t = Yf(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Yf(e) {
  var t = x$(e, "string");
  return Ln(t) == "symbol" ? t : t + "";
}
function x$(e, t) {
  if (Ln(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (Ln(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function C$(e) {
  return e.dataKey;
}
function P$(e, t) {
  return /* @__PURE__ */ A.isValidElement(e) ? /* @__PURE__ */ A.cloneElement(e, t) : typeof e == "function" ? /* @__PURE__ */ A.createElement(e, t) : /* @__PURE__ */ A.createElement(ZO, t);
}
var vc = /* @__PURE__ */ function(e) {
  function t() {
    return h$(this, t), b$(this, t, arguments);
  }
  return S$(t, e), g$(t, [{
    key: "render",
    value: function() {
      var r = this, o = this.props, a = o.active, i = o.allowEscapeViewBox, s = o.animationDuration, c = o.animationEasing, u = o.content, d = o.coordinate, f = o.filterNull, m = o.isAnimationActive, b = o.offset, g = o.payload, h = o.payloadUniqBy, v = o.position, y = o.reverseDirection, w = o.useTranslate3d, S = o.viewBox, x = o.wrapperStyle, P = g ?? [];
      f && P.length && (P = Hf(g.filter(function(C) {
        return C.value != null && (C.hide !== !0 || r.props.includeHidden);
      }), h, C$));
      var E = P.length > 0;
      return /* @__PURE__ */ A.createElement(f$, {
        allowEscapeViewBox: i,
        animationDuration: s,
        animationEasing: c,
        isAnimationActive: m,
        active: a,
        coordinate: d,
        hasPayload: E,
        offset: b,
        position: v,
        reverseDirection: y,
        useTranslate3d: w,
        viewBox: S,
        wrapperStyle: x
      }, P$(u, Vu(Vu({}, this.props), {}, {
        payload: P
      })));
    }
  }]);
}(ca);
hc(vc, "displayName", "Tooltip");
hc(vc, "defaultProps", {
  accessibilityLayer: !1,
  allowEscapeViewBox: {
    x: !1,
    y: !1
  },
  animationDuration: 400,
  animationEasing: "ease",
  contentStyle: {},
  coordinate: {
    x: 0,
    y: 0
  },
  cursor: !0,
  cursorStyle: {},
  filterNull: !0,
  isAnimationActive: !m$.isSsr,
  itemStyle: {},
  labelStyle: {},
  offset: 10,
  reverseDirection: {
    x: !1,
    y: !1
  },
  separator: " : ",
  trigger: "hover",
  useTranslate3d: !1,
  viewBox: {
    x: 0,
    y: 0,
    height: 0,
    width: 0
  },
  wrapperStyle: {}
});
var E$ = _t, _$ = function() {
  return E$.Date.now();
}, R$ = _$, T$ = /\s/;
function A$(e) {
  for (var t = e.length; t-- && T$.test(e.charAt(t)); )
    ;
  return t;
}
var N$ = A$, M$ = N$, O$ = /^\s+/;
function $$(e) {
  return e && e.slice(0, M$(e) + 1).replace(O$, "");
}
var I$ = $$, D$ = I$, Gu = Ut, k$ = Fr, Uu = NaN, L$ = /^[-+]0x[0-9a-f]+$/i, F$ = /^0b[01]+$/i, B$ = /^0o[0-7]+$/i, z$ = parseInt;
function H$(e) {
  if (typeof e == "number")
    return e;
  if (k$(e))
    return Uu;
  if (Gu(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Gu(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = D$(e);
  var n = F$.test(e);
  return n || B$.test(e) ? z$(e.slice(2), n ? 2 : 8) : L$.test(e) ? Uu : +e;
}
var j$ = H$, V$ = Ut, bi = R$, Wu = j$, G$ = "Expected a function", U$ = Math.max, W$ = Math.min;
function K$(e, t, n) {
  var r, o, a, i, s, c, u = 0, d = !1, f = !1, m = !0;
  if (typeof e != "function")
    throw new TypeError(G$);
  t = Wu(t) || 0, V$(n) && (d = !!n.leading, f = "maxWait" in n, a = f ? U$(Wu(n.maxWait) || 0, t) : a, m = "trailing" in n ? !!n.trailing : m);
  function b(E) {
    var C = r, T = o;
    return r = o = void 0, u = E, i = e.apply(T, C), i;
  }
  function g(E) {
    return u = E, s = setTimeout(y, t), d ? b(E) : i;
  }
  function h(E) {
    var C = E - c, T = E - u, R = t - C;
    return f ? W$(R, a - T) : R;
  }
  function v(E) {
    var C = E - c, T = E - u;
    return c === void 0 || C >= t || C < 0 || f && T >= a;
  }
  function y() {
    var E = bi();
    if (v(E))
      return w(E);
    s = setTimeout(y, h(E));
  }
  function w(E) {
    return s = void 0, m && r ? b(E) : (r = o = void 0, i);
  }
  function S() {
    s !== void 0 && clearTimeout(s), u = 0, r = c = o = s = void 0;
  }
  function x() {
    return s === void 0 ? i : w(bi());
  }
  function P() {
    var E = bi(), C = v(E);
    if (r = arguments, o = this, c = E, C) {
      if (s === void 0)
        return g(c);
      if (f)
        return clearTimeout(s), s = setTimeout(y, t), b(c);
    }
    return s === void 0 && (s = setTimeout(y, t)), i;
  }
  return P.cancel = S, P.flush = x, P;
}
var Y$ = K$, q$ = Y$, X$ = Ut, Z$ = "Expected a function";
function J$(e, t, n) {
  var r = !0, o = !0;
  if (typeof e != "function")
    throw new TypeError(Z$);
  return X$(n) && (r = "leading" in n ? !!n.leading : r, o = "trailing" in n ? !!n.trailing : o), q$(e, t, {
    leading: r,
    maxWait: t,
    trailing: o
  });
}
var Q$ = J$;
const eI = /* @__PURE__ */ Et(Q$);
function Pr(e) {
  "@babel/helpers - typeof";
  return Pr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Pr(e);
}
function Ku(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function fo(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ku(Object(n), !0).forEach(function(r) {
      tI(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ku(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function tI(e, t, n) {
  return t = nI(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function nI(e) {
  var t = rI(e, "string");
  return Pr(t) == "symbol" ? t : t + "";
}
function rI(e, t) {
  if (Pr(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (Pr(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function oI(e, t) {
  return cI(e) || sI(e, t) || iI(e, t) || aI();
}
function aI() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function iI(e, t) {
  if (e) {
    if (typeof e == "string") return Yu(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Yu(e, t);
  }
}
function Yu(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function sI(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r, o, a, i, s = [], c = !0, u = !1;
    try {
      if (a = (n = n.call(e)).next, t !== 0) for (; !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t); c = !0) ;
    } catch (d) {
      u = !0, o = d;
    } finally {
      try {
        if (!c && n.return != null && (i = n.return(), Object(i) !== i)) return;
      } finally {
        if (u) throw o;
      }
    }
    return s;
  }
}
function cI(e) {
  if (Array.isArray(e)) return e;
}
var lI = /* @__PURE__ */ js(function(e, t) {
  var n = e.aspect, r = e.initialDimension, o = r === void 0 ? {
    width: -1,
    height: -1
  } : r, a = e.width, i = a === void 0 ? "100%" : a, s = e.height, c = s === void 0 ? "100%" : s, u = e.minWidth, d = u === void 0 ? 0 : u, f = e.minHeight, m = e.maxHeight, b = e.children, g = e.debounce, h = g === void 0 ? 0 : g, v = e.id, y = e.className, w = e.onResize, S = e.style, x = S === void 0 ? {} : S, P = De(null), E = De();
  E.current = w, Vs(t, function() {
    return Object.defineProperty(P.current, "current", {
      get: function() {
        return console.warn("The usage of ref.current.current is deprecated and will no longer be supported."), P.current;
      },
      configurable: !0
    });
  });
  var C = xt({
    containerWidth: o.width,
    containerHeight: o.height
  }), T = oI(C, 2), R = T[0], D = T[1], M = Le(function($, I) {
    D(function(z) {
      var L = Math.round($), U = Math.round(I);
      return z.containerWidth === L && z.containerHeight === U ? z : {
        containerWidth: L,
        containerHeight: U
      };
    });
  }, []);
  et(function() {
    var $ = function(B) {
      var oe, re = B[0].contentRect, ie = re.width, j = re.height;
      M(ie, j), (oe = E.current) === null || oe === void 0 || oe.call(E, ie, j);
    };
    h > 0 && ($ = eI($, h, {
      trailing: !0,
      leading: !1
    }));
    var I = new ResizeObserver($), z = P.current.getBoundingClientRect(), L = z.width, U = z.height;
    return M(L, U), I.observe(P.current), function() {
      I.disconnect();
    };
  }, [M, h]);
  var F = Gs(function() {
    var $ = R.containerWidth, I = R.containerHeight;
    if ($ < 0 || I < 0)
      return null;
    Po(so(i) || so(c), `The width(%s) and height(%s) are both fixed numbers,
       maybe you don't need to use a ResponsiveContainer.`, i, c), Po(!n || n > 0, "The aspect(%s) must be greater than zero.", n);
    var z = so(i) ? $ : i, L = so(c) ? I : c;
    n && n > 0 && (z ? L = z / n : L && (z = L * n), m && L > m && (L = m)), Po(z > 0 || L > 0, `The width(%s) and height(%s) of chart should be greater than 0,
       please check the style of container, or the props width(%s) and height(%s),
       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the
       height and width.`, z, L, i, c, d, f, n);
    var U = !Array.isArray(b) && KP(b.type).endsWith("Chart");
    return A.Children.map(b, function(H) {
      return /* @__PURE__ */ A.isValidElement(H) ? /* @__PURE__ */ pS(H, fo({
        width: z,
        height: L
      }, U ? {
        style: fo({
          height: "100%",
          width: "100%",
          maxHeight: L,
          maxWidth: z
        }, H.props.style)
      } : {})) : H;
    });
  }, [n, b, c, m, f, d, R, i]);
  return /* @__PURE__ */ A.createElement("div", {
    id: v ? "".concat(v) : void 0,
    className: cn("recharts-responsive-container", y),
    style: fo(fo({}, x), {}, {
      width: i,
      height: c,
      minWidth: d,
      minHeight: f,
      maxHeight: m
    }),
    ref: P
  }, F);
});
const uI = { light: "", dark: ".dark" }, qf = l.createContext(null);
function Xf() {
  const e = l.useContext(qf);
  if (!e)
    throw new Error("useChart must be used within a <ChartContainer />");
  return e;
}
const dI = l.forwardRef(({ id: e, className: t, children: n, config: r, ...o }, a) => {
  const i = l.useId(), s = `chart-${e || i.replace(/:/g, "")}`;
  return /* @__PURE__ */ p(qf.Provider, { value: { config: r }, children: /* @__PURE__ */ te(
    "div",
    {
      "data-chart": s,
      ref: a,
      className: N(
        "flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-none [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-none [&_.recharts-surface]:outline-none",
        t
      ),
      ...o,
      children: [
        /* @__PURE__ */ p(fI, { id: s, config: r }),
        /* @__PURE__ */ p(lI, { children: n })
      ]
    }
  ) });
});
dI.displayName = "Chart";
const fI = ({ id: e, config: t }) => {
  const n = Object.entries(t).filter(
    ([r, o]) => o.theme || o.color
  );
  return n.length ? /* @__PURE__ */ p(
    "style",
    {
      dangerouslySetInnerHTML: {
        __html: Object.entries(uI).map(
          ([r, o]) => `
${o} [data-chart=${e}] {
${n.map(([a, i]) => {
            const s = i.theme?.[r] || i.color;
            return s ? `  --color-${a}: ${s};` : null;
          }).join(`
`)}
}
`
        ).join(`
`)
      }
    }
  ) : null;
}, LU = vc, pI = l.forwardRef(
  ({
    active: e,
    payload: t,
    className: n,
    indicator: r = "dot",
    hideLabel: o = !1,
    hideIndicator: a = !1,
    label: i,
    labelFormatter: s,
    labelClassName: c,
    formatter: u,
    color: d,
    nameKey: f,
    labelKey: m
  }, b) => {
    const { config: g } = Xf(), h = l.useMemo(() => {
      if (o || !t?.length)
        return null;
      const [y] = t, w = `${m || y.dataKey || y.name || "value"}`, S = ps(g, y, w), x = !m && typeof i == "string" ? g[i]?.label || i : S?.label;
      return s ? /* @__PURE__ */ p("div", { className: N("font-medium", c), children: s(x, t) }) : x ? /* @__PURE__ */ p("div", { className: N("font-medium", c), children: x }) : null;
    }, [
      i,
      s,
      t,
      o,
      c,
      g,
      m
    ]);
    if (!e || !t?.length)
      return null;
    const v = t.length === 1 && r !== "dot";
    return /* @__PURE__ */ te(
      "div",
      {
        ref: b,
        className: N(
          "grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl",
          n
        ),
        children: [
          v ? null : h,
          /* @__PURE__ */ p("div", { className: "grid gap-1.5", children: t.map((y, w) => {
            const S = `${f || y.name || y.dataKey || "value"}`, x = ps(g, y, S), P = d || y.payload.fill || y.color;
            return /* @__PURE__ */ p(
              "div",
              {
                className: N(
                  "flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground",
                  r === "dot" && "items-center"
                ),
                children: u && y?.value !== void 0 && y.name ? u(y.value, y.name, y, w, y.payload) : /* @__PURE__ */ te(dt, { children: [
                  x?.icon ? /* @__PURE__ */ p(x.icon, {}) : !a && /* @__PURE__ */ p(
                    "div",
                    {
                      className: N(
                        "shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg]",
                        {
                          "h-2.5 w-2.5": r === "dot",
                          "w-1": r === "line",
                          "w-0 border-[1.5px] border-dashed bg-transparent": r === "dashed",
                          "my-0.5": v && r === "dashed"
                        }
                      ),
                      style: {
                        "--color-bg": P,
                        "--color-border": P
                      }
                    }
                  ),
                  /* @__PURE__ */ te(
                    "div",
                    {
                      className: N(
                        "flex flex-1 justify-between leading-none",
                        v ? "items-end" : "items-center"
                      ),
                      children: [
                        /* @__PURE__ */ te("div", { className: "grid gap-1.5", children: [
                          v ? h : null,
                          /* @__PURE__ */ p("span", { className: "text-muted-foreground", children: x?.label || y.name })
                        ] }),
                        y.value && /* @__PURE__ */ p("span", { className: "font-mono font-medium tabular-nums text-foreground", children: y.value.toLocaleString() })
                      ]
                    }
                  )
                ] })
              },
              y.dataKey
            );
          }) })
        ]
      }
    );
  }
);
pI.displayName = "ChartTooltip";
const FU = mc, mI = l.forwardRef(
  ({ className: e, hideIcon: t = !1, payload: n, verticalAlign: r = "bottom", nameKey: o }, a) => {
    const { config: i } = Xf();
    return n?.length ? /* @__PURE__ */ p(
      "div",
      {
        ref: a,
        className: N(
          "flex items-center justify-center gap-4",
          r === "top" ? "pb-3" : "pt-3",
          e
        ),
        children: n.map((s) => {
          const c = `${o || s.dataKey || "value"}`, u = ps(i, s, c);
          return /* @__PURE__ */ te(
            "div",
            {
              className: N(
                "flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground"
              ),
              children: [
                u?.icon && !t ? /* @__PURE__ */ p(u.icon, {}) : /* @__PURE__ */ p(
                  "div",
                  {
                    className: "h-2 w-2 shrink-0 rounded-[2px]",
                    style: {
                      backgroundColor: s.color
                    }
                  }
                ),
                u?.label
              ]
            },
            s.value
          );
        })
      }
    ) : null;
  }
);
mI.displayName = "ChartLegend";
function ps(e, t, n) {
  if (typeof t != "object" || t === null)
    return;
  const r = "payload" in t && typeof t.payload == "object" && t.payload !== null ? t.payload : void 0;
  let o = n;
  return n in t && typeof t[n] == "string" ? o = t[n] : r && n in r && typeof r[n] == "string" && (o = r[n]), o in e ? e[o] : e[n];
}
var hI = (e) => e.type === "checkbox", vI = (e) => e instanceof Date, Zf = (e) => e == null;
const gI = (e) => typeof e == "object";
var Br = (e) => !Zf(e) && !Array.isArray(e) && gI(e) && !vI(e), bI = (e) => Br(e) && e.target ? hI(e.target) ? e.target.checked : e.target.value : e, yI = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e, wI = (e, t) => e.has(yI(t)), SI = (e) => {
  const t = e.constructor && e.constructor.prototype;
  return Br(t) && t.hasOwnProperty("isPrototypeOf");
}, xI = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function Jf(e) {
  let t;
  const n = Array.isArray(e), r = typeof FileList < "u" ? e instanceof FileList : !1;
  if (e instanceof Date)
    t = new Date(e);
  else if (e instanceof Set)
    t = new Set(e);
  else if (!(xI && (e instanceof Blob || r)) && (n || Br(e)))
    if (t = n ? [] : {}, !n && !SI(e))
      t = e;
    else
      for (const o in e)
        e.hasOwnProperty(o) && (t[o] = Jf(e[o]));
  else
    return e;
  return t;
}
var Qf = (e) => Array.isArray(e) ? e.filter(Boolean) : [], ms = (e) => e === void 0, Ge = (e, t, n) => {
  if (!t || !Br(e))
    return n;
  const r = Qf(t.split(/[,[\].]+?/)).reduce((o, a) => Zf(o) ? o : o[a], e);
  return ms(r) || r === e ? ms(e[t]) ? n : e[t] : r;
}, yi = (e) => typeof e == "boolean", CI = (e) => /^\w*$/.test(e), PI = (e) => Qf(e.replace(/["|']|\]/g, "").split(/\.|\[/)), qu = (e, t, n) => {
  let r = -1;
  const o = CI(t) ? [t] : PI(t), a = o.length, i = a - 1;
  for (; ++r < a; ) {
    const s = o[r];
    let c = n;
    if (r !== i) {
      const u = e[s];
      c = Br(u) || Array.isArray(u) ? u : isNaN(+o[r + 1]) ? {} : [];
    }
    if (s === "__proto__" || s === "constructor" || s === "prototype")
      return;
    e[s] = c, e = e[s];
  }
};
const Xu = {
  BLUR: "blur",
  CHANGE: "change"
}, Zu = {
  all: "all"
}, ep = A.createContext(null), xa = () => A.useContext(ep), EI = (e) => {
  const { children: t, ...n } = e;
  return A.createElement(ep.Provider, { value: n }, t);
};
var _I = (e, t, n, r = !0) => {
  const o = {
    defaultValues: t._defaultValues
  };
  for (const a in e)
    Object.defineProperty(o, a, {
      get: () => {
        const i = a;
        return t._proxyFormState[i] !== Zu.all && (t._proxyFormState[i] = !r || Zu.all), n && (n[i] = !0), e[i];
      }
    });
  return o;
};
const tp = typeof window < "u" ? l.useLayoutEffect : l.useEffect;
function RI(e) {
  const t = xa(), { control: n = t.control, disabled: r, name: o, exact: a } = e || {}, [i, s] = A.useState(n._formState), c = A.useRef({
    isDirty: !1,
    isLoading: !1,
    dirtyFields: !1,
    touchedFields: !1,
    validatingFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  });
  return tp(() => n._subscribe({
    name: o,
    formState: c.current,
    exact: a,
    callback: (u) => {
      !r && s({
        ...n._formState,
        ...u
      });
    }
  }), [o, r, a]), A.useEffect(() => {
    c.current.isValid && n._setValid(!0);
  }, [n]), A.useMemo(() => _I(i, n, c.current, !1), [i, n]);
}
var TI = (e) => typeof e == "string", AI = (e, t, n, r, o) => TI(e) ? Ge(n, e, o) : Array.isArray(e) ? e.map((a) => Ge(n, a)) : n;
function NI(e) {
  const t = xa(), { control: n = t.control, name: r, defaultValue: o, disabled: a, exact: i } = e || {}, s = A.useRef(o), [c, u] = A.useState(n._getWatch(r, s.current));
  return tp(() => n._subscribe({
    name: r,
    formState: {
      values: !0
    },
    exact: i,
    callback: (d) => !a && u(AI(r, n._names, d.values || n._formValues, !1, s.current))
  }), [r, n, a, i]), A.useEffect(() => n._removeUnmounted()), c;
}
function MI(e) {
  const t = xa(), { name: n, disabled: r, control: o = t.control, shouldUnregister: a } = e, i = wI(o._names.array, n), s = NI({
    control: o,
    name: n,
    defaultValue: Ge(o._formValues, n, Ge(o._defaultValues, n, e.defaultValue)),
    exact: !0
  }), c = RI({
    control: o,
    name: n,
    exact: !0
  }), u = A.useRef(e), d = A.useRef(o.register(n, {
    ...e.rules,
    value: s,
    ...yi(e.disabled) ? { disabled: e.disabled } : {}
  })), f = A.useMemo(() => Object.defineProperties({}, {
    invalid: {
      enumerable: !0,
      get: () => !!Ge(c.errors, n)
    },
    isDirty: {
      enumerable: !0,
      get: () => !!Ge(c.dirtyFields, n)
    },
    isTouched: {
      enumerable: !0,
      get: () => !!Ge(c.touchedFields, n)
    },
    isValidating: {
      enumerable: !0,
      get: () => !!Ge(c.validatingFields, n)
    },
    error: {
      enumerable: !0,
      get: () => Ge(c.errors, n)
    }
  }), [c, n]), m = A.useCallback((v) => d.current.onChange({
    target: {
      value: bI(v),
      name: n
    },
    type: Xu.CHANGE
  }), [n]), b = A.useCallback(() => d.current.onBlur({
    target: {
      value: Ge(o._formValues, n),
      name: n
    },
    type: Xu.BLUR
  }), [n, o._formValues]), g = A.useCallback((v) => {
    const y = Ge(o._fields, n);
    y && v && (y._f.ref = {
      focus: () => v.focus && v.focus(),
      select: () => v.select && v.select(),
      setCustomValidity: (w) => v.setCustomValidity(w),
      reportValidity: () => v.reportValidity()
    });
  }, [o._fields, n]), h = A.useMemo(() => ({
    name: n,
    value: s,
    ...yi(r) || c.disabled ? { disabled: c.disabled || r } : {},
    onChange: m,
    onBlur: b,
    ref: g
  }), [n, r, c.disabled, m, b, g, s]);
  return A.useEffect(() => {
    const v = o._options.shouldUnregister || a;
    o.register(n, {
      ...u.current.rules,
      ...yi(u.current.disabled) ? { disabled: u.current.disabled } : {}
    });
    const y = (w, S) => {
      const x = Ge(o._fields, w);
      x && x._f && (x._f.mount = S);
    };
    if (y(n, !0), v) {
      const w = Jf(Ge(o._options.defaultValues, n));
      qu(o._defaultValues, n, w), ms(Ge(o._formValues, n)) && qu(o._formValues, n, w);
    }
    return !i && o.register(n), () => {
      (i ? v && !o._state.action : v) ? o.unregister(n) : y(n, !1);
    };
  }, [n, o, i, a]), A.useEffect(() => {
    o._setDisabledField({
      disabled: r,
      name: n
    });
  }, [r, n, o]), A.useMemo(() => ({
    field: h,
    formState: c,
    fieldState: f
  }), [h, c, f]);
}
const OI = (e) => e.render(MI(e));
var $I = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
], W = $I.reduce((e, t) => {
  const n = ln(`Primitive.${t}`), r = l.forwardRef((o, a) => {
    const { asChild: i, ...s } = o, c = i ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ p(c, { ...s, ref: a });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function gc(e, t) {
  e && Ir.flushSync(() => e.dispatchEvent(t));
}
var II = "Label", np = l.forwardRef((e, t) => /* @__PURE__ */ p(
  W.label,
  {
    ...e,
    ref: t,
    onMouseDown: (n) => {
      n.target.closest("button, input, select, textarea") || (e.onMouseDown?.(n), !n.defaultPrevented && n.detail > 1 && n.preventDefault());
    }
  }
));
np.displayName = II;
var rp = np;
const DI = $r(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
), op = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p(
  rp,
  {
    ref: n,
    className: N(DI(), e),
    ...t
  }
));
op.displayName = rp.displayName;
const BU = EI, ap = l.createContext(
  {}
), zU = ({
  ...e
}) => /* @__PURE__ */ p(ap.Provider, { value: { name: e.name }, children: /* @__PURE__ */ p(OI, { ...e }) }), Ca = () => {
  const e = l.useContext(ap), t = l.useContext(ip), { getFieldState: n, formState: r } = xa(), o = n(e.name, r);
  if (!e)
    throw new Error("useFormField should be used within <FormField>");
  const { id: a } = t;
  return {
    id: a,
    name: e.name,
    formItemId: `${a}-form-item`,
    formDescriptionId: `${a}-form-item-description`,
    formMessageId: `${a}-form-item-message`,
    ...o
  };
}, ip = l.createContext(
  {}
), kI = l.forwardRef(({ className: e, ...t }, n) => {
  const r = l.useId();
  return /* @__PURE__ */ p(ip.Provider, { value: { id: r }, children: /* @__PURE__ */ p("div", { ref: n, className: N("space-y-2", e), ...t }) });
});
kI.displayName = "FormItem";
const LI = l.forwardRef(({ className: e, ...t }, n) => {
  const { error: r, formItemId: o } = Ca();
  return /* @__PURE__ */ p(
    op,
    {
      ref: n,
      className: N(r && "text-destructive", e),
      htmlFor: o,
      ...t
    }
  );
});
LI.displayName = "FormLabel";
const FI = l.forwardRef(({ ...e }, t) => {
  const { error: n, formItemId: r, formDescriptionId: o, formMessageId: a } = Ca();
  return /* @__PURE__ */ p(
    jn,
    {
      ref: t,
      id: r,
      "aria-describedby": n ? `${o} ${a}` : `${o}`,
      "aria-invalid": !!n,
      ...e
    }
  );
});
FI.displayName = "FormControl";
const BI = l.forwardRef(({ className: e, ...t }, n) => {
  const { formDescriptionId: r } = Ca();
  return /* @__PURE__ */ p(
    "p",
    {
      ref: n,
      id: r,
      className: N("text-[0.8rem] text-muted-foreground", e),
      ...t
    }
  );
});
BI.displayName = "FormDescription";
const zI = l.forwardRef(({ className: e, children: t, ...n }, r) => {
  const { error: o, formMessageId: a } = Ca(), i = o ? String(o?.message) : t;
  return i ? /* @__PURE__ */ p(
    "p",
    {
      ref: r,
      id: a,
      className: N("text-[0.8rem] font-medium text-destructive", e),
      ...n,
      children: i
    }
  ) : null;
});
zI.displayName = "FormMessage";
const wi = 768;
function HI() {
  const [e, t] = l.useState(void 0);
  return l.useEffect(() => {
    const n = window.matchMedia(`(max-width: ${wi - 1}px)`), r = () => {
      t(window.innerWidth < wi);
    };
    return n.addEventListener("change", r), t(window.innerWidth < wi), () => n.removeEventListener("change", r);
  }, []), !!e;
}
var jI = "Separator", Ju = "horizontal", VI = ["horizontal", "vertical"], sp = l.forwardRef((e, t) => {
  const { decorative: n, orientation: r = Ju, ...o } = e, a = GI(r) ? r : Ju, s = n ? { role: "none" } : { "aria-orientation": a === "vertical" ? a : void 0, role: "separator" };
  return /* @__PURE__ */ p(
    W.div,
    {
      "data-orientation": a,
      ...s,
      ...o,
      ref: t
    }
  );
});
sp.displayName = jI;
function GI(e) {
  return VI.includes(e);
}
var cp = sp;
const lp = l.forwardRef(
  ({ className: e, orientation: t = "horizontal", decorative: n = !0, ...r }, o) => /* @__PURE__ */ p(
    cp,
    {
      ref: o,
      decorative: n,
      orientation: t,
      className: N(
        "shrink-0 bg-border",
        t === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        e
      ),
      ...r
    }
  )
);
lp.displayName = cp.displayName;
function k(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e?.(o), n === !1 || !o.defaultPrevented)
      return t?.(o);
  };
}
function UI(e, t) {
  const n = l.createContext(t), r = (a) => {
    const { children: i, ...s } = a, c = l.useMemo(() => s, Object.values(s));
    return /* @__PURE__ */ p(n.Provider, { value: c, children: i });
  };
  r.displayName = e + "Provider";
  function o(a) {
    const i = l.useContext(n);
    if (i) return i;
    if (t !== void 0) return t;
    throw new Error(`\`${a}\` must be used within \`${e}\``);
  }
  return [r, o];
}
function be(e, t = []) {
  let n = [];
  function r(a, i) {
    const s = l.createContext(i), c = n.length;
    n = [...n, i];
    const u = (f) => {
      const { scope: m, children: b, ...g } = f, h = m?.[e]?.[c] || s, v = l.useMemo(() => g, Object.values(g));
      return /* @__PURE__ */ p(h.Provider, { value: v, children: b });
    };
    u.displayName = a + "Provider";
    function d(f, m) {
      const b = m?.[e]?.[c] || s, g = l.useContext(b);
      if (g) return g;
      if (i !== void 0) return i;
      throw new Error(`\`${f}\` must be used within \`${a}\``);
    }
    return [u, d];
  }
  const o = () => {
    const a = n.map((i) => l.createContext(i));
    return function(s) {
      const c = s?.[e] || a;
      return l.useMemo(
        () => ({ [`__scope${e}`]: { ...s, [e]: c } }),
        [s, c]
      );
    };
  };
  return o.scopeName = e, [r, WI(o, ...t)];
}
function WI(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return function(a) {
      const i = r.reduce((s, { useScope: c, scopeName: u }) => {
        const f = c(a)[`__scope${u}`];
        return { ...s, ...f };
      }, {});
      return l.useMemo(() => ({ [`__scope${t.scopeName}`]: i }), [i]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
var _e = globalThis?.document ? l.useLayoutEffect : () => {
}, KI = l[" useId ".trim().toString()] || (() => {
}), YI = 0;
function $e(e) {
  const [t, n] = l.useState(KI());
  return _e(() => {
    n((r) => r ?? String(YI++));
  }, [e]), e || (t ? `radix-${t}` : "");
}
var qI = l[" useInsertionEffect ".trim().toString()] || _e;
function xe({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  },
  caller: r
}) {
  const [o, a, i] = XI({
    defaultProp: t,
    onChange: n
  }), s = e !== void 0, c = s ? e : o;
  {
    const d = l.useRef(e !== void 0);
    l.useEffect(() => {
      const f = d.current;
      f !== s && console.warn(
        `${r} is changing from ${f ? "controlled" : "uncontrolled"} to ${s ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), d.current = s;
    }, [s, r]);
  }
  const u = l.useCallback(
    (d) => {
      if (s) {
        const f = ZI(d) ? d(e) : d;
        f !== e && i.current?.(f);
      } else
        a(d);
    },
    [s, e, a, i]
  );
  return [c, u];
}
function XI({
  defaultProp: e,
  onChange: t
}) {
  const [n, r] = l.useState(e), o = l.useRef(n), a = l.useRef(t);
  return qI(() => {
    a.current = t;
  }, [t]), l.useEffect(() => {
    o.current !== n && (a.current?.(n), o.current = n);
  }, [n, o]), [n, r, a];
}
function ZI(e) {
  return typeof e == "function";
}
function Se(e) {
  const t = l.useRef(e);
  return l.useEffect(() => {
    t.current = e;
  }), l.useMemo(() => (...n) => t.current?.(...n), []);
}
function JI(e, t = globalThis?.document) {
  const n = Se(e);
  l.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 });
  }, [n, t]);
}
var QI = "DismissableLayer", hs = "dismissableLayer.update", eD = "dismissableLayer.pointerDownOutside", tD = "dismissableLayer.focusOutside", Qu, up = l.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Wt = l.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: o,
      onFocusOutside: a,
      onInteractOutside: i,
      onDismiss: s,
      ...c
    } = e, u = l.useContext(up), [d, f] = l.useState(null), m = d?.ownerDocument ?? globalThis?.document, [, b] = l.useState({}), g = ne(t, (C) => f(C)), h = Array.from(u.layers), [v] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1), y = h.indexOf(v), w = d ? h.indexOf(d) : -1, S = u.layersWithOutsidePointerEventsDisabled.size > 0, x = w >= y, P = rD((C) => {
      const T = C.target, R = [...u.branches].some((D) => D.contains(T));
      !x || R || (o?.(C), i?.(C), C.defaultPrevented || s?.());
    }, m), E = oD((C) => {
      const T = C.target;
      [...u.branches].some((D) => D.contains(T)) || (a?.(C), i?.(C), C.defaultPrevented || s?.());
    }, m);
    return JI((C) => {
      w === u.layers.size - 1 && (r?.(C), !C.defaultPrevented && s && (C.preventDefault(), s()));
    }, m), l.useEffect(() => {
      if (d)
        return n && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (Qu = m.body.style.pointerEvents, m.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(d)), u.layers.add(d), ed(), () => {
          n && u.layersWithOutsidePointerEventsDisabled.size === 1 && (m.body.style.pointerEvents = Qu);
        };
    }, [d, m, n, u]), l.useEffect(() => () => {
      d && (u.layers.delete(d), u.layersWithOutsidePointerEventsDisabled.delete(d), ed());
    }, [d, u]), l.useEffect(() => {
      const C = () => b({});
      return document.addEventListener(hs, C), () => document.removeEventListener(hs, C);
    }, []), /* @__PURE__ */ p(
      W.div,
      {
        ...c,
        ref: g,
        style: {
          pointerEvents: S ? x ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: k(e.onFocusCapture, E.onFocusCapture),
        onBlurCapture: k(e.onBlurCapture, E.onBlurCapture),
        onPointerDownCapture: k(
          e.onPointerDownCapture,
          P.onPointerDownCapture
        )
      }
    );
  }
);
Wt.displayName = QI;
var nD = "DismissableLayerBranch", dp = l.forwardRef((e, t) => {
  const n = l.useContext(up), r = l.useRef(null), o = ne(t, r);
  return l.useEffect(() => {
    const a = r.current;
    if (a)
      return n.branches.add(a), () => {
        n.branches.delete(a);
      };
  }, [n.branches]), /* @__PURE__ */ p(W.div, { ...e, ref: o });
});
dp.displayName = nD;
function rD(e, t = globalThis?.document) {
  const n = Se(e), r = l.useRef(!1), o = l.useRef(() => {
  });
  return l.useEffect(() => {
    const a = (s) => {
      if (s.target && !r.current) {
        let c = function() {
          fp(
            eD,
            n,
            u,
            { discrete: !0 }
          );
        };
        const u = { originalEvent: s };
        s.pointerType === "touch" ? (t.removeEventListener("click", o.current), o.current = c, t.addEventListener("click", o.current, { once: !0 })) : c();
      } else
        t.removeEventListener("click", o.current);
      r.current = !1;
    }, i = window.setTimeout(() => {
      t.addEventListener("pointerdown", a);
    }, 0);
    return () => {
      window.clearTimeout(i), t.removeEventListener("pointerdown", a), t.removeEventListener("click", o.current);
    };
  }, [t, n]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => r.current = !0
  };
}
function oD(e, t = globalThis?.document) {
  const n = Se(e), r = l.useRef(!1);
  return l.useEffect(() => {
    const o = (a) => {
      a.target && !r.current && fp(tD, n, { originalEvent: a }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function ed() {
  const e = new CustomEvent(hs);
  document.dispatchEvent(e);
}
function fp(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? gc(o, a) : o.dispatchEvent(a);
}
var aD = Wt, iD = dp, Si = "focusScope.autoFocusOnMount", xi = "focusScope.autoFocusOnUnmount", td = { bubbles: !1, cancelable: !0 }, sD = "FocusScope", zr = l.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: r = !1,
    onMountAutoFocus: o,
    onUnmountAutoFocus: a,
    ...i
  } = e, [s, c] = l.useState(null), u = Se(o), d = Se(a), f = l.useRef(null), m = ne(t, (h) => c(h)), b = l.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  l.useEffect(() => {
    if (r) {
      let h = function(S) {
        if (b.paused || !s) return;
        const x = S.target;
        s.contains(x) ? f.current = x : zt(f.current, { select: !0 });
      }, v = function(S) {
        if (b.paused || !s) return;
        const x = S.relatedTarget;
        x !== null && (s.contains(x) || zt(f.current, { select: !0 }));
      }, y = function(S) {
        if (document.activeElement === document.body)
          for (const P of S)
            P.removedNodes.length > 0 && zt(s);
      };
      document.addEventListener("focusin", h), document.addEventListener("focusout", v);
      const w = new MutationObserver(y);
      return s && w.observe(s, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", h), document.removeEventListener("focusout", v), w.disconnect();
      };
    }
  }, [r, s, b.paused]), l.useEffect(() => {
    if (s) {
      rd.add(b);
      const h = document.activeElement;
      if (!s.contains(h)) {
        const y = new CustomEvent(Si, td);
        s.addEventListener(Si, u), s.dispatchEvent(y), y.defaultPrevented || (cD(pD(pp(s)), { select: !0 }), document.activeElement === h && zt(s));
      }
      return () => {
        s.removeEventListener(Si, u), setTimeout(() => {
          const y = new CustomEvent(xi, td);
          s.addEventListener(xi, d), s.dispatchEvent(y), y.defaultPrevented || zt(h ?? document.body, { select: !0 }), s.removeEventListener(xi, d), rd.remove(b);
        }, 0);
      };
    }
  }, [s, u, d, b]);
  const g = l.useCallback(
    (h) => {
      if (!n && !r || b.paused) return;
      const v = h.key === "Tab" && !h.altKey && !h.ctrlKey && !h.metaKey, y = document.activeElement;
      if (v && y) {
        const w = h.currentTarget, [S, x] = lD(w);
        S && x ? !h.shiftKey && y === x ? (h.preventDefault(), n && zt(S, { select: !0 })) : h.shiftKey && y === S && (h.preventDefault(), n && zt(x, { select: !0 })) : y === w && h.preventDefault();
      }
    },
    [n, r, b.paused]
  );
  return /* @__PURE__ */ p(W.div, { tabIndex: -1, ...i, ref: m, onKeyDown: g });
});
zr.displayName = sD;
function cD(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (zt(r, { select: t }), document.activeElement !== n) return;
}
function lD(e) {
  const t = pp(e), n = nd(t, e), r = nd(t.reverse(), e);
  return [n, r];
}
function pp(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function nd(e, t) {
  for (const n of e)
    if (!uD(n, { upTo: t })) return n;
}
function uD(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function dD(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function zt(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && dD(e) && t && e.select();
  }
}
var rd = fD();
function fD() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && n?.pause(), e = od(e, t), e.unshift(t);
    },
    remove(t) {
      e = od(e, t), e[0]?.resume();
    }
  };
}
function od(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function pD(e) {
  return e.filter((t) => t.tagName !== "A");
}
var mD = "Portal", yn = l.forwardRef((e, t) => {
  const { container: n, ...r } = e, [o, a] = l.useState(!1);
  _e(() => a(!0), []);
  const i = n || o && globalThis?.document?.body;
  return i ? vS.createPortal(/* @__PURE__ */ p(W.div, { ...r, ref: t }), i) : null;
});
yn.displayName = mD;
function hD(e, t) {
  return l.useReducer((n, r) => t[n][r] ?? n, e);
}
var Re = (e) => {
  const { present: t, children: n } = e, r = vD(t), o = typeof n == "function" ? n({ present: r.isPresent }) : l.Children.only(n), a = ne(r.ref, gD(o));
  return typeof n == "function" || r.isPresent ? l.cloneElement(o, { ref: a }) : null;
};
Re.displayName = "Presence";
function vD(e) {
  const [t, n] = l.useState(), r = l.useRef(null), o = l.useRef(e), a = l.useRef("none"), i = e ? "mounted" : "unmounted", [s, c] = hD(i, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return l.useEffect(() => {
    const u = po(r.current);
    a.current = s === "mounted" ? u : "none";
  }, [s]), _e(() => {
    const u = r.current, d = o.current;
    if (d !== e) {
      const m = a.current, b = po(u);
      e ? c("MOUNT") : b === "none" || u?.display === "none" ? c("UNMOUNT") : c(d && m !== b ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, c]), _e(() => {
    if (t) {
      let u;
      const d = t.ownerDocument.defaultView ?? window, f = (b) => {
        const h = po(r.current).includes(b.animationName);
        if (b.target === t && h && (c("ANIMATION_END"), !o.current)) {
          const v = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", u = d.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = v);
          });
        }
      }, m = (b) => {
        b.target === t && (a.current = po(r.current));
      };
      return t.addEventListener("animationstart", m), t.addEventListener("animationcancel", f), t.addEventListener("animationend", f), () => {
        d.clearTimeout(u), t.removeEventListener("animationstart", m), t.removeEventListener("animationcancel", f), t.removeEventListener("animationend", f);
      };
    } else
      c("ANIMATION_END");
  }, [t, c]), {
    isPresent: ["mounted", "unmountSuspended"].includes(s),
    ref: l.useCallback((u) => {
      r.current = u ? getComputedStyle(u) : null, n(u);
    }, [])
  };
}
function po(e) {
  return e?.animationName || "none";
}
function gD(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var Ci = 0;
function Pa() {
  l.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? ad()), document.body.insertAdjacentElement("beforeend", e[1] ?? ad()), Ci++, () => {
      Ci === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), Ci--;
    };
  }, []);
}
function ad() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var wt = function() {
  return wt = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
    }
    return t;
  }, wt.apply(this, arguments);
};
function mp(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function bD(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, a; r < o; r++)
    (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t));
}
var Eo = "right-scroll-bar-position", _o = "width-before-scroll-bar", yD = "with-scroll-bars-hidden", wD = "--removed-body-scroll-bar-size";
function Pi(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function SD(e, t) {
  var n = xt(function() {
    return {
      // value
      value: e,
      // last callback
      callback: t,
      // "memoized" public interface
      facade: {
        get current() {
          return n.value;
        },
        set current(r) {
          var o = n.value;
          o !== r && (n.value = r, n.callback(r, o));
        }
      }
    };
  })[0];
  return n.callback = t, n.facade;
}
var xD = typeof window < "u" ? l.useLayoutEffect : l.useEffect, id = /* @__PURE__ */ new WeakMap();
function CD(e, t) {
  var n = SD(null, function(r) {
    return e.forEach(function(o) {
      return Pi(o, r);
    });
  });
  return xD(function() {
    var r = id.get(n);
    if (r) {
      var o = new Set(r), a = new Set(e), i = n.current;
      o.forEach(function(s) {
        a.has(s) || Pi(s, null);
      }), a.forEach(function(s) {
        o.has(s) || Pi(s, i);
      });
    }
    id.set(n, e);
  }, [e]), n;
}
function PD(e) {
  return e;
}
function ED(e, t) {
  t === void 0 && (t = PD);
  var n = [], r = !1, o = {
    read: function() {
      if (r)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return n.length ? n[n.length - 1] : e;
    },
    useMedium: function(a) {
      var i = t(a, r);
      return n.push(i), function() {
        n = n.filter(function(s) {
          return s !== i;
        });
      };
    },
    assignSyncMedium: function(a) {
      for (r = !0; n.length; ) {
        var i = n;
        n = [], i.forEach(a);
      }
      n = {
        push: function(s) {
          return a(s);
        },
        filter: function() {
          return n;
        }
      };
    },
    assignMedium: function(a) {
      r = !0;
      var i = [];
      if (n.length) {
        var s = n;
        n = [], s.forEach(a), i = n;
      }
      var c = function() {
        var d = i;
        i = [], d.forEach(a);
      }, u = function() {
        return Promise.resolve().then(c);
      };
      u(), n = {
        push: function(d) {
          i.push(d), u();
        },
        filter: function(d) {
          return i = i.filter(d), n;
        }
      };
    }
  };
  return o;
}
function _D(e) {
  e === void 0 && (e = {});
  var t = ED(null);
  return t.options = wt({ async: !0, ssr: !1 }, e), t;
}
var hp = function(e) {
  var t = e.sideCar, n = mp(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return l.createElement(r, wt({}, n));
};
hp.isSideCarExport = !0;
function RD(e, t) {
  return e.useMedium(t), hp;
}
var vp = _D(), Ei = function() {
}, Ea = l.forwardRef(function(e, t) {
  var n = l.useRef(null), r = l.useState({
    onScrollCapture: Ei,
    onWheelCapture: Ei,
    onTouchMoveCapture: Ei
  }), o = r[0], a = r[1], i = e.forwardProps, s = e.children, c = e.className, u = e.removeScrollBar, d = e.enabled, f = e.shards, m = e.sideCar, b = e.noRelative, g = e.noIsolation, h = e.inert, v = e.allowPinchZoom, y = e.as, w = y === void 0 ? "div" : y, S = e.gapMode, x = mp(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), P = m, E = CD([n, t]), C = wt(wt({}, x), o);
  return l.createElement(
    l.Fragment,
    null,
    d && l.createElement(P, { sideCar: vp, removeScrollBar: u, shards: f, noRelative: b, noIsolation: g, inert: h, setCallbacks: a, allowPinchZoom: !!v, lockRef: n, gapMode: S }),
    i ? l.cloneElement(l.Children.only(s), wt(wt({}, C), { ref: E })) : l.createElement(w, wt({}, C, { className: c, ref: E }), s)
  );
});
Ea.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Ea.classNames = {
  fullWidth: _o,
  zeroRight: Eo
};
var TD = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function AD() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = TD();
  return t && e.setAttribute("nonce", t), e;
}
function ND(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function MD(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var OD = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = AD()) && (ND(t, n), MD(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, $D = function() {
  var e = OD();
  return function(t, n) {
    l.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, gp = function() {
  var e = $D(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, ID = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, _i = function(e) {
  return parseInt(e || "", 10) || 0;
}, DD = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [_i(n), _i(r), _i(o)];
}, kD = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return ID;
  var t = DD(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, LD = gp(), An = "data-scroll-locked", FD = function(e, t, n, r) {
  var o = e.left, a = e.top, i = e.right, s = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(yD, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(s, "px ").concat(r, `;
  }
  body[`).concat(An, `] {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(r, ";"),
    n === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(a, `px;
    padding-right: `).concat(i, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(s, "px ").concat(r, `;
    `),
    n === "padding" && "padding-right: ".concat(s, "px ").concat(r, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(Eo, ` {
    right: `).concat(s, "px ").concat(r, `;
  }
  
  .`).concat(_o, ` {
    margin-right: `).concat(s, "px ").concat(r, `;
  }
  
  .`).concat(Eo, " .").concat(Eo, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(_o, " .").concat(_o, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(An, `] {
    `).concat(wD, ": ").concat(s, `px;
  }
`);
}, sd = function() {
  var e = parseInt(document.body.getAttribute(An) || "0", 10);
  return isFinite(e) ? e : 0;
}, BD = function() {
  l.useEffect(function() {
    return document.body.setAttribute(An, (sd() + 1).toString()), function() {
      var e = sd() - 1;
      e <= 0 ? document.body.removeAttribute(An) : document.body.setAttribute(An, e.toString());
    };
  }, []);
}, zD = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r;
  BD();
  var a = l.useMemo(function() {
    return kD(o);
  }, [o]);
  return l.createElement(LD, { styles: FD(a, !t, o, n ? "" : "!important") });
}, vs = !1;
if (typeof window < "u")
  try {
    var mo = Object.defineProperty({}, "passive", {
      get: function() {
        return vs = !0, !0;
      }
    });
    window.addEventListener("test", mo, mo), window.removeEventListener("test", mo, mo);
  } catch {
    vs = !1;
  }
var Cn = vs ? { passive: !1 } : !1, HD = function(e) {
  return e.tagName === "TEXTAREA";
}, bp = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !HD(e) && n[t] === "visible")
  );
}, jD = function(e) {
  return bp(e, "overflowY");
}, VD = function(e) {
  return bp(e, "overflowX");
}, cd = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = yp(e, r);
    if (o) {
      var a = wp(e, r), i = a[1], s = a[2];
      if (i > s)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, GD = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, UD = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, yp = function(e, t) {
  return e === "v" ? jD(t) : VD(t);
}, wp = function(e, t) {
  return e === "v" ? GD(t) : UD(t);
}, WD = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, KD = function(e, t, n, r, o) {
  var a = WD(e, window.getComputedStyle(t).direction), i = a * r, s = n.target, c = t.contains(s), u = !1, d = i > 0, f = 0, m = 0;
  do {
    if (!s)
      break;
    var b = wp(e, s), g = b[0], h = b[1], v = b[2], y = h - v - a * g;
    (g || y) && yp(e, s) && (f += y, m += g);
    var w = s.parentNode;
    s = w && w.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? w.host : w;
  } while (
    // portaled content
    !c && s !== document.body || // self content
    c && (t.contains(s) || t === s)
  );
  return (d && Math.abs(f) < 1 || !d && Math.abs(m) < 1) && (u = !0), u;
}, ho = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, ld = function(e) {
  return [e.deltaX, e.deltaY];
}, ud = function(e) {
  return e && "current" in e ? e.current : e;
}, YD = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, qD = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, XD = 0, Pn = [];
function ZD(e) {
  var t = l.useRef([]), n = l.useRef([0, 0]), r = l.useRef(), o = l.useState(XD++)[0], a = l.useState(gp)[0], i = l.useRef(e);
  l.useEffect(function() {
    i.current = e;
  }, [e]), l.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var h = bD([e.lockRef.current], (e.shards || []).map(ud), !0).filter(Boolean);
      return h.forEach(function(v) {
        return v.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), h.forEach(function(v) {
          return v.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var s = l.useCallback(function(h, v) {
    if ("touches" in h && h.touches.length === 2 || h.type === "wheel" && h.ctrlKey)
      return !i.current.allowPinchZoom;
    var y = ho(h), w = n.current, S = "deltaX" in h ? h.deltaX : w[0] - y[0], x = "deltaY" in h ? h.deltaY : w[1] - y[1], P, E = h.target, C = Math.abs(S) > Math.abs(x) ? "h" : "v";
    if ("touches" in h && C === "h" && E.type === "range")
      return !1;
    var T = cd(C, E);
    if (!T)
      return !0;
    if (T ? P = C : (P = C === "v" ? "h" : "v", T = cd(C, E)), !T)
      return !1;
    if (!r.current && "changedTouches" in h && (S || x) && (r.current = P), !P)
      return !0;
    var R = r.current || P;
    return KD(R, v, h, R === "h" ? S : x);
  }, []), c = l.useCallback(function(h) {
    var v = h;
    if (!(!Pn.length || Pn[Pn.length - 1] !== a)) {
      var y = "deltaY" in v ? ld(v) : ho(v), w = t.current.filter(function(P) {
        return P.name === v.type && (P.target === v.target || v.target === P.shadowParent) && YD(P.delta, y);
      })[0];
      if (w && w.should) {
        v.cancelable && v.preventDefault();
        return;
      }
      if (!w) {
        var S = (i.current.shards || []).map(ud).filter(Boolean).filter(function(P) {
          return P.contains(v.target);
        }), x = S.length > 0 ? s(v, S[0]) : !i.current.noIsolation;
        x && v.cancelable && v.preventDefault();
      }
    }
  }, []), u = l.useCallback(function(h, v, y, w) {
    var S = { name: h, delta: v, target: y, should: w, shadowParent: JD(y) };
    t.current.push(S), setTimeout(function() {
      t.current = t.current.filter(function(x) {
        return x !== S;
      });
    }, 1);
  }, []), d = l.useCallback(function(h) {
    n.current = ho(h), r.current = void 0;
  }, []), f = l.useCallback(function(h) {
    u(h.type, ld(h), h.target, s(h, e.lockRef.current));
  }, []), m = l.useCallback(function(h) {
    u(h.type, ho(h), h.target, s(h, e.lockRef.current));
  }, []);
  l.useEffect(function() {
    return Pn.push(a), e.setCallbacks({
      onScrollCapture: f,
      onWheelCapture: f,
      onTouchMoveCapture: m
    }), document.addEventListener("wheel", c, Cn), document.addEventListener("touchmove", c, Cn), document.addEventListener("touchstart", d, Cn), function() {
      Pn = Pn.filter(function(h) {
        return h !== a;
      }), document.removeEventListener("wheel", c, Cn), document.removeEventListener("touchmove", c, Cn), document.removeEventListener("touchstart", d, Cn);
    };
  }, []);
  var b = e.removeScrollBar, g = e.inert;
  return l.createElement(
    l.Fragment,
    null,
    g ? l.createElement(a, { styles: qD(o) }) : null,
    b ? l.createElement(zD, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function JD(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const QD = RD(vp, ZD);
var Hr = l.forwardRef(function(e, t) {
  return l.createElement(Ea, wt({}, e, { ref: t, sideCar: QD }));
});
Hr.classNames = Ea.classNames;
var ek = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, En = /* @__PURE__ */ new WeakMap(), vo = /* @__PURE__ */ new WeakMap(), go = {}, Ri = 0, Sp = function(e) {
  return e && (e.host || Sp(e.parentNode));
}, tk = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = Sp(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, nk = function(e, t, n, r) {
  var o = tk(t, Array.isArray(e) ? e : [e]);
  go[n] || (go[n] = /* @__PURE__ */ new WeakMap());
  var a = go[n], i = [], s = /* @__PURE__ */ new Set(), c = new Set(o), u = function(f) {
    !f || s.has(f) || (s.add(f), u(f.parentNode));
  };
  o.forEach(u);
  var d = function(f) {
    !f || c.has(f) || Array.prototype.forEach.call(f.children, function(m) {
      if (s.has(m))
        d(m);
      else
        try {
          var b = m.getAttribute(r), g = b !== null && b !== "false", h = (En.get(m) || 0) + 1, v = (a.get(m) || 0) + 1;
          En.set(m, h), a.set(m, v), i.push(m), h === 1 && g && vo.set(m, !0), v === 1 && m.setAttribute(n, "true"), g || m.setAttribute(r, "true");
        } catch (y) {
          console.error("aria-hidden: cannot operate on ", m, y);
        }
    });
  };
  return d(t), s.clear(), Ri++, function() {
    i.forEach(function(f) {
      var m = En.get(f) - 1, b = a.get(f) - 1;
      En.set(f, m), a.set(f, b), m || (vo.has(f) || f.removeAttribute(r), vo.delete(f)), b || f.removeAttribute(n);
    }), Ri--, Ri || (En = /* @__PURE__ */ new WeakMap(), En = /* @__PURE__ */ new WeakMap(), vo = /* @__PURE__ */ new WeakMap(), go = {});
  };
}, _a = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = ek(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live], script"))), nk(r, o, n, "aria-hidden")) : function() {
    return null;
  };
}, Ra = "Dialog", [xp, Cp] = be(Ra), [rk, vt] = xp(Ra), Pp = (e) => {
  const {
    __scopeDialog: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: a,
    modal: i = !0
  } = e, s = l.useRef(null), c = l.useRef(null), [u, d] = xe({
    prop: r,
    defaultProp: o ?? !1,
    onChange: a,
    caller: Ra
  });
  return /* @__PURE__ */ p(
    rk,
    {
      scope: t,
      triggerRef: s,
      contentRef: c,
      contentId: $e(),
      titleId: $e(),
      descriptionId: $e(),
      open: u,
      onOpenChange: d,
      onOpenToggle: l.useCallback(() => d((f) => !f), [d]),
      modal: i,
      children: n
    }
  );
};
Pp.displayName = Ra;
var Ep = "DialogTrigger", _p = l.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = vt(Ep, n), a = ne(t, o.triggerRef);
    return /* @__PURE__ */ p(
      W.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": wc(o.open),
        ...r,
        ref: a,
        onClick: k(e.onClick, o.onOpenToggle)
      }
    );
  }
);
_p.displayName = Ep;
var bc = "DialogPortal", [ok, Rp] = xp(bc, {
  forceMount: void 0
}), Tp = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, a = vt(bc, t);
  return /* @__PURE__ */ p(ok, { scope: t, forceMount: n, children: l.Children.map(r, (i) => /* @__PURE__ */ p(Re, { present: n || a.open, children: /* @__PURE__ */ p(yn, { asChild: !0, container: o, children: i }) })) });
};
Tp.displayName = bc;
var Go = "DialogOverlay", Ap = l.forwardRef(
  (e, t) => {
    const n = Rp(Go, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = vt(Go, e.__scopeDialog);
    return a.modal ? /* @__PURE__ */ p(Re, { present: r || a.open, children: /* @__PURE__ */ p(ik, { ...o, ref: t }) }) : null;
  }
);
Ap.displayName = Go;
var ak = ln("DialogOverlay.RemoveScroll"), ik = l.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = vt(Go, n);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ p(Hr, { as: ak, allowPinchZoom: !0, shards: [o.contentRef], children: /* @__PURE__ */ p(
        W.div,
        {
          "data-state": wc(o.open),
          ...r,
          ref: t,
          style: { pointerEvents: "auto", ...r.style }
        }
      ) })
    );
  }
), dn = "DialogContent", Np = l.forwardRef(
  (e, t) => {
    const n = Rp(dn, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = vt(dn, e.__scopeDialog);
    return /* @__PURE__ */ p(Re, { present: r || a.open, children: a.modal ? /* @__PURE__ */ p(sk, { ...o, ref: t }) : /* @__PURE__ */ p(ck, { ...o, ref: t }) });
  }
);
Np.displayName = dn;
var sk = l.forwardRef(
  (e, t) => {
    const n = vt(dn, e.__scopeDialog), r = l.useRef(null), o = ne(t, n.contentRef, r);
    return l.useEffect(() => {
      const a = r.current;
      if (a) return _a(a);
    }, []), /* @__PURE__ */ p(
      Mp,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: k(e.onCloseAutoFocus, (a) => {
          a.preventDefault(), n.triggerRef.current?.focus();
        }),
        onPointerDownOutside: k(e.onPointerDownOutside, (a) => {
          const i = a.detail.originalEvent, s = i.button === 0 && i.ctrlKey === !0;
          (i.button === 2 || s) && a.preventDefault();
        }),
        onFocusOutside: k(
          e.onFocusOutside,
          (a) => a.preventDefault()
        )
      }
    );
  }
), ck = l.forwardRef(
  (e, t) => {
    const n = vt(dn, e.__scopeDialog), r = l.useRef(!1), o = l.useRef(!1);
    return /* @__PURE__ */ p(
      Mp,
      {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (a) => {
          e.onCloseAutoFocus?.(a), a.defaultPrevented || (r.current || n.triggerRef.current?.focus(), a.preventDefault()), r.current = !1, o.current = !1;
        },
        onInteractOutside: (a) => {
          e.onInteractOutside?.(a), a.defaultPrevented || (r.current = !0, a.detail.originalEvent.type === "pointerdown" && (o.current = !0));
          const i = a.target;
          n.triggerRef.current?.contains(i) && a.preventDefault(), a.detail.originalEvent.type === "focusin" && o.current && a.preventDefault();
        }
      }
    );
  }
), Mp = l.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: a, ...i } = e, s = vt(dn, n), c = l.useRef(null), u = ne(t, c);
    return Pa(), /* @__PURE__ */ te(dt, { children: [
      /* @__PURE__ */ p(
        zr,
        {
          asChild: !0,
          loop: !0,
          trapped: r,
          onMountAutoFocus: o,
          onUnmountAutoFocus: a,
          children: /* @__PURE__ */ p(
            Wt,
            {
              role: "dialog",
              id: s.contentId,
              "aria-describedby": s.descriptionId,
              "aria-labelledby": s.titleId,
              "data-state": wc(s.open),
              ...i,
              ref: u,
              onDismiss: () => s.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ te(dt, { children: [
        /* @__PURE__ */ p(uk, { titleId: s.titleId }),
        /* @__PURE__ */ p(fk, { contentRef: c, descriptionId: s.descriptionId })
      ] })
    ] });
  }
), yc = "DialogTitle", Op = l.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = vt(yc, n);
    return /* @__PURE__ */ p(W.h2, { id: o.titleId, ...r, ref: t });
  }
);
Op.displayName = yc;
var $p = "DialogDescription", Ip = l.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = vt($p, n);
    return /* @__PURE__ */ p(W.p, { id: o.descriptionId, ...r, ref: t });
  }
);
Ip.displayName = $p;
var Dp = "DialogClose", kp = l.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = vt(Dp, n);
    return /* @__PURE__ */ p(
      W.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: k(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
kp.displayName = Dp;
function wc(e) {
  return e ? "open" : "closed";
}
var Lp = "DialogTitleWarning", [lk, Fp] = UI(Lp, {
  contentName: dn,
  titleName: yc,
  docsSlug: "dialog"
}), uk = ({ titleId: e }) => {
  const t = Fp(Lp), n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return l.useEffect(() => {
    e && (document.getElementById(e) || console.error(n));
  }, [n, e]), null;
}, dk = "DialogDescriptionWarning", fk = ({ contentRef: e, descriptionId: t }) => {
  const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Fp(dk).contentName}}.`;
  return l.useEffect(() => {
    const o = e.current?.getAttribute("aria-describedby");
    t && o && (document.getElementById(t) || console.warn(r));
  }, [r, e, t]), null;
}, Ta = Pp, Aa = _p, Na = Tp, Yn = Ap, qn = Np, Xn = Op, Zn = Ip, wn = kp;
const pk = Ta, HU = Aa, jU = wn, mk = Na, Bp = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p(
  Yn,
  {
    className: N(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t,
    ref: n
  }
));
Bp.displayName = Yn.displayName;
const hk = $r(
  "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right: "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
      }
    },
    defaultVariants: {
      side: "right"
    }
  }
), zp = l.forwardRef(({ side: e = "right", className: t, children: n, ...r }, o) => /* @__PURE__ */ te(mk, { children: [
  /* @__PURE__ */ p(Bp, {}),
  /* @__PURE__ */ te(
    qn,
    {
      ref: o,
      className: N(hk({ side: e }), t),
      ...r,
      children: [
        /* @__PURE__ */ te(wn, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary", children: [
          /* @__PURE__ */ p(Ys, { className: "h-4 w-4" }),
          /* @__PURE__ */ p("span", { className: "sr-only", children: "Close" })
        ] }),
        n
      ]
    }
  )
] }));
zp.displayName = qn.displayName;
const vk = ({
  className: e,
  ...t
}) => /* @__PURE__ */ p(
  "div",
  {
    className: N(
      "flex flex-col space-y-2 text-center sm:text-left",
      e
    ),
    ...t
  }
);
vk.displayName = "SheetHeader";
const gk = ({
  className: e,
  ...t
}) => /* @__PURE__ */ p(
  "div",
  {
    className: N(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
);
gk.displayName = "SheetFooter";
const bk = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p(
  Xn,
  {
    ref: n,
    className: N("text-lg font-semibold text-foreground", e),
    ...t
  }
));
bk.displayName = Xn.displayName;
const yk = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p(
  Zn,
  {
    ref: n,
    className: N("text-sm text-muted-foreground", e),
    ...t
  }
));
yk.displayName = Zn.displayName;
const wk = ["top", "right", "bottom", "left"], Vt = Math.min, Ke = Math.max, Uo = Math.round, bo = Math.floor, Ct = (e) => ({
  x: e,
  y: e
}), Sk = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, xk = {
  start: "end",
  end: "start"
};
function gs(e, t, n) {
  return Ke(e, Vt(t, n));
}
function Dt(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function kt(e) {
  return e.split("-")[0];
}
function Jn(e) {
  return e.split("-")[1];
}
function Sc(e) {
  return e === "x" ? "y" : "x";
}
function xc(e) {
  return e === "y" ? "height" : "width";
}
function St(e) {
  return ["top", "bottom"].includes(kt(e)) ? "y" : "x";
}
function Cc(e) {
  return Sc(St(e));
}
function Ck(e, t, n) {
  n === void 0 && (n = !1);
  const r = Jn(e), o = Cc(e), a = xc(o);
  let i = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[a] > t.floating[a] && (i = Wo(i)), [i, Wo(i)];
}
function Pk(e) {
  const t = Wo(e);
  return [bs(e), t, bs(t)];
}
function bs(e) {
  return e.replace(/start|end/g, (t) => xk[t]);
}
function Ek(e, t, n) {
  const r = ["left", "right"], o = ["right", "left"], a = ["top", "bottom"], i = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? o : r : t ? r : o;
    case "left":
    case "right":
      return t ? a : i;
    default:
      return [];
  }
}
function _k(e, t, n, r) {
  const o = Jn(e);
  let a = Ek(kt(e), n === "start", r);
  return o && (a = a.map((i) => i + "-" + o), t && (a = a.concat(a.map(bs)))), a;
}
function Wo(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Sk[t]);
}
function Rk(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Hp(e) {
  return typeof e != "number" ? Rk(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Ko(e) {
  const {
    x: t,
    y: n,
    width: r,
    height: o
  } = e;
  return {
    width: r,
    height: o,
    top: n,
    left: t,
    right: t + r,
    bottom: n + o,
    x: t,
    y: n
  };
}
function dd(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const a = St(t), i = Cc(t), s = xc(i), c = kt(t), u = a === "y", d = r.x + r.width / 2 - o.width / 2, f = r.y + r.height / 2 - o.height / 2, m = r[s] / 2 - o[s] / 2;
  let b;
  switch (c) {
    case "top":
      b = {
        x: d,
        y: r.y - o.height
      };
      break;
    case "bottom":
      b = {
        x: d,
        y: r.y + r.height
      };
      break;
    case "right":
      b = {
        x: r.x + r.width,
        y: f
      };
      break;
    case "left":
      b = {
        x: r.x - o.width,
        y: f
      };
      break;
    default:
      b = {
        x: r.x,
        y: r.y
      };
  }
  switch (Jn(t)) {
    case "start":
      b[i] -= m * (n && u ? -1 : 1);
      break;
    case "end":
      b[i] += m * (n && u ? -1 : 1);
      break;
  }
  return b;
}
const Tk = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: a = [],
    platform: i
  } = n, s = a.filter(Boolean), c = await (i.isRTL == null ? void 0 : i.isRTL(t));
  let u = await i.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: d,
    y: f
  } = dd(u, r, c), m = r, b = {}, g = 0;
  for (let h = 0; h < s.length; h++) {
    const {
      name: v,
      fn: y
    } = s[h], {
      x: w,
      y: S,
      data: x,
      reset: P
    } = await y({
      x: d,
      y: f,
      initialPlacement: r,
      placement: m,
      strategy: o,
      middlewareData: b,
      rects: u,
      platform: i,
      elements: {
        reference: e,
        floating: t
      }
    });
    d = w ?? d, f = S ?? f, b = {
      ...b,
      [v]: {
        ...b[v],
        ...x
      }
    }, P && g <= 50 && (g++, typeof P == "object" && (P.placement && (m = P.placement), P.rects && (u = P.rects === !0 ? await i.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : P.rects), {
      x: d,
      y: f
    } = dd(u, m, c)), h = -1);
  }
  return {
    x: d,
    y: f,
    placement: m,
    strategy: o,
    middlewareData: b
  };
};
async function Er(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: r,
    y: o,
    platform: a,
    rects: i,
    elements: s,
    strategy: c
  } = e, {
    boundary: u = "clippingAncestors",
    rootBoundary: d = "viewport",
    elementContext: f = "floating",
    altBoundary: m = !1,
    padding: b = 0
  } = Dt(t, e), g = Hp(b), v = s[m ? f === "floating" ? "reference" : "floating" : f], y = Ko(await a.getClippingRect({
    element: (n = await (a.isElement == null ? void 0 : a.isElement(v))) == null || n ? v : v.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(s.floating)),
    boundary: u,
    rootBoundary: d,
    strategy: c
  })), w = f === "floating" ? {
    x: r,
    y: o,
    width: i.floating.width,
    height: i.floating.height
  } : i.reference, S = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(s.floating)), x = await (a.isElement == null ? void 0 : a.isElement(S)) ? await (a.getScale == null ? void 0 : a.getScale(S)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, P = Ko(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: s,
    rect: w,
    offsetParent: S,
    strategy: c
  }) : w);
  return {
    top: (y.top - P.top + g.top) / x.y,
    bottom: (P.bottom - y.bottom + g.bottom) / x.y,
    left: (y.left - P.left + g.left) / x.x,
    right: (P.right - y.right + g.right) / x.x
  };
}
const Ak = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: r,
      placement: o,
      rects: a,
      platform: i,
      elements: s,
      middlewareData: c
    } = t, {
      element: u,
      padding: d = 0
    } = Dt(e, t) || {};
    if (u == null)
      return {};
    const f = Hp(d), m = {
      x: n,
      y: r
    }, b = Cc(o), g = xc(b), h = await i.getDimensions(u), v = b === "y", y = v ? "top" : "left", w = v ? "bottom" : "right", S = v ? "clientHeight" : "clientWidth", x = a.reference[g] + a.reference[b] - m[b] - a.floating[g], P = m[b] - a.reference[b], E = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(u));
    let C = E ? E[S] : 0;
    (!C || !await (i.isElement == null ? void 0 : i.isElement(E))) && (C = s.floating[S] || a.floating[g]);
    const T = x / 2 - P / 2, R = C / 2 - h[g] / 2 - 1, D = Vt(f[y], R), M = Vt(f[w], R), F = D, $ = C - h[g] - M, I = C / 2 - h[g] / 2 + T, z = gs(F, I, $), L = !c.arrow && Jn(o) != null && I !== z && a.reference[g] / 2 - (I < F ? D : M) - h[g] / 2 < 0, U = L ? I < F ? I - F : I - $ : 0;
    return {
      [b]: m[b] + U,
      data: {
        [b]: z,
        centerOffset: I - z - U,
        ...L && {
          alignmentOffset: U
        }
      },
      reset: L
    };
  }
}), Nk = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        middlewareData: a,
        rects: i,
        initialPlacement: s,
        platform: c,
        elements: u
      } = t, {
        mainAxis: d = !0,
        crossAxis: f = !0,
        fallbackPlacements: m,
        fallbackStrategy: b = "bestFit",
        fallbackAxisSideDirection: g = "none",
        flipAlignment: h = !0,
        ...v
      } = Dt(e, t);
      if ((n = a.arrow) != null && n.alignmentOffset)
        return {};
      const y = kt(o), w = St(s), S = kt(s) === s, x = await (c.isRTL == null ? void 0 : c.isRTL(u.floating)), P = m || (S || !h ? [Wo(s)] : Pk(s)), E = g !== "none";
      !m && E && P.push(..._k(s, h, g, x));
      const C = [s, ...P], T = await Er(t, v), R = [];
      let D = ((r = a.flip) == null ? void 0 : r.overflows) || [];
      if (d && R.push(T[y]), f) {
        const I = Ck(o, i, x);
        R.push(T[I[0]], T[I[1]]);
      }
      if (D = [...D, {
        placement: o,
        overflows: R
      }], !R.every((I) => I <= 0)) {
        var M, F;
        const I = (((M = a.flip) == null ? void 0 : M.index) || 0) + 1, z = C[I];
        if (z && (!(f === "alignment" ? w !== St(z) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        D.every((H) => H.overflows[0] > 0 && St(H.placement) === w)))
          return {
            data: {
              index: I,
              overflows: D
            },
            reset: {
              placement: z
            }
          };
        let L = (F = D.filter((U) => U.overflows[0] <= 0).sort((U, H) => U.overflows[1] - H.overflows[1])[0]) == null ? void 0 : F.placement;
        if (!L)
          switch (b) {
            case "bestFit": {
              var $;
              const U = ($ = D.filter((H) => {
                if (E) {
                  const B = St(H.placement);
                  return B === w || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  B === "y";
                }
                return !0;
              }).map((H) => [H.placement, H.overflows.filter((B) => B > 0).reduce((B, oe) => B + oe, 0)]).sort((H, B) => H[1] - B[1])[0]) == null ? void 0 : $[0];
              U && (L = U);
              break;
            }
            case "initialPlacement":
              L = s;
              break;
          }
        if (o !== L)
          return {
            reset: {
              placement: L
            }
          };
      }
      return {};
    }
  };
};
function fd(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function pd(e) {
  return wk.some((t) => e[t] >= 0);
}
const Mk = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: r = "referenceHidden",
        ...o
      } = Dt(e, t);
      switch (r) {
        case "referenceHidden": {
          const a = await Er(t, {
            ...o,
            elementContext: "reference"
          }), i = fd(a, n.reference);
          return {
            data: {
              referenceHiddenOffsets: i,
              referenceHidden: pd(i)
            }
          };
        }
        case "escaped": {
          const a = await Er(t, {
            ...o,
            altBoundary: !0
          }), i = fd(a, n.floating);
          return {
            data: {
              escapedOffsets: i,
              escaped: pd(i)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function Ok(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), i = kt(n), s = Jn(n), c = St(n) === "y", u = ["left", "top"].includes(i) ? -1 : 1, d = a && c ? -1 : 1, f = Dt(t, e);
  let {
    mainAxis: m,
    crossAxis: b,
    alignmentAxis: g
  } = typeof f == "number" ? {
    mainAxis: f,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: f.mainAxis || 0,
    crossAxis: f.crossAxis || 0,
    alignmentAxis: f.alignmentAxis
  };
  return s && typeof g == "number" && (b = s === "end" ? g * -1 : g), c ? {
    x: b * d,
    y: m * u
  } : {
    x: m * u,
    y: b * d
  };
}
const $k = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, r;
      const {
        x: o,
        y: a,
        placement: i,
        middlewareData: s
      } = t, c = await Ok(t, e);
      return i === ((n = s.offset) == null ? void 0 : n.placement) && (r = s.arrow) != null && r.alignmentOffset ? {} : {
        x: o + c.x,
        y: a + c.y,
        data: {
          ...c,
          placement: i
        }
      };
    }
  };
}, Ik = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r,
        placement: o
      } = t, {
        mainAxis: a = !0,
        crossAxis: i = !1,
        limiter: s = {
          fn: (v) => {
            let {
              x: y,
              y: w
            } = v;
            return {
              x: y,
              y: w
            };
          }
        },
        ...c
      } = Dt(e, t), u = {
        x: n,
        y: r
      }, d = await Er(t, c), f = St(kt(o)), m = Sc(f);
      let b = u[m], g = u[f];
      if (a) {
        const v = m === "y" ? "top" : "left", y = m === "y" ? "bottom" : "right", w = b + d[v], S = b - d[y];
        b = gs(w, b, S);
      }
      if (i) {
        const v = f === "y" ? "top" : "left", y = f === "y" ? "bottom" : "right", w = g + d[v], S = g - d[y];
        g = gs(w, g, S);
      }
      const h = s.fn({
        ...t,
        [m]: b,
        [f]: g
      });
      return {
        ...h,
        data: {
          x: h.x - n,
          y: h.y - r,
          enabled: {
            [m]: a,
            [f]: i
          }
        }
      };
    }
  };
}, Dk = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: n,
        y: r,
        placement: o,
        rects: a,
        middlewareData: i
      } = t, {
        offset: s = 0,
        mainAxis: c = !0,
        crossAxis: u = !0
      } = Dt(e, t), d = {
        x: n,
        y: r
      }, f = St(o), m = Sc(f);
      let b = d[m], g = d[f];
      const h = Dt(s, t), v = typeof h == "number" ? {
        mainAxis: h,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...h
      };
      if (c) {
        const S = m === "y" ? "height" : "width", x = a.reference[m] - a.floating[S] + v.mainAxis, P = a.reference[m] + a.reference[S] - v.mainAxis;
        b < x ? b = x : b > P && (b = P);
      }
      if (u) {
        var y, w;
        const S = m === "y" ? "width" : "height", x = ["top", "left"].includes(kt(o)), P = a.reference[f] - a.floating[S] + (x && ((y = i.offset) == null ? void 0 : y[f]) || 0) + (x ? 0 : v.crossAxis), E = a.reference[f] + a.reference[S] + (x ? 0 : ((w = i.offset) == null ? void 0 : w[f]) || 0) - (x ? v.crossAxis : 0);
        g < P ? g = P : g > E && (g = E);
      }
      return {
        [m]: b,
        [f]: g
      };
    }
  };
}, kk = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        rects: a,
        platform: i,
        elements: s
      } = t, {
        apply: c = () => {
        },
        ...u
      } = Dt(e, t), d = await Er(t, u), f = kt(o), m = Jn(o), b = St(o) === "y", {
        width: g,
        height: h
      } = a.floating;
      let v, y;
      f === "top" || f === "bottom" ? (v = f, y = m === (await (i.isRTL == null ? void 0 : i.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (y = f, v = m === "end" ? "top" : "bottom");
      const w = h - d.top - d.bottom, S = g - d.left - d.right, x = Vt(h - d[v], w), P = Vt(g - d[y], S), E = !t.middlewareData.shift;
      let C = x, T = P;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (T = S), (r = t.middlewareData.shift) != null && r.enabled.y && (C = w), E && !m) {
        const D = Ke(d.left, 0), M = Ke(d.right, 0), F = Ke(d.top, 0), $ = Ke(d.bottom, 0);
        b ? T = g - 2 * (D !== 0 || M !== 0 ? D + M : Ke(d.left, d.right)) : C = h - 2 * (F !== 0 || $ !== 0 ? F + $ : Ke(d.top, d.bottom));
      }
      await c({
        ...t,
        availableWidth: T,
        availableHeight: C
      });
      const R = await i.getDimensions(s.floating);
      return g !== R.width || h !== R.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Ma() {
  return typeof window < "u";
}
function Qn(e) {
  return jp(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Ye(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Rt(e) {
  var t;
  return (t = (jp(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function jp(e) {
  return Ma() ? e instanceof Node || e instanceof Ye(e).Node : !1;
}
function ft(e) {
  return Ma() ? e instanceof Element || e instanceof Ye(e).Element : !1;
}
function Pt(e) {
  return Ma() ? e instanceof HTMLElement || e instanceof Ye(e).HTMLElement : !1;
}
function md(e) {
  return !Ma() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Ye(e).ShadowRoot;
}
function jr(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = pt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function Lk(e) {
  return ["table", "td", "th"].includes(Qn(e));
}
function Oa(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function Pc(e) {
  const t = Ec(), n = ft(e) ? pt(e) : e;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function Fk(e) {
  let t = Gt(e);
  for (; Pt(t) && !Fn(t); ) {
    if (Pc(t))
      return t;
    if (Oa(t))
      return null;
    t = Gt(t);
  }
  return null;
}
function Ec() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Fn(e) {
  return ["html", "body", "#document"].includes(Qn(e));
}
function pt(e) {
  return Ye(e).getComputedStyle(e);
}
function $a(e) {
  return ft(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Gt(e) {
  if (Qn(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    md(e) && e.host || // Fallback.
    Rt(e)
  );
  return md(t) ? t.host : t;
}
function Vp(e) {
  const t = Gt(e);
  return Fn(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Pt(t) && jr(t) ? t : Vp(t);
}
function _r(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = Vp(e), a = o === ((r = e.ownerDocument) == null ? void 0 : r.body), i = Ye(o);
  if (a) {
    const s = ys(i);
    return t.concat(i, i.visualViewport || [], jr(o) ? o : [], s && n ? _r(s) : []);
  }
  return t.concat(o, _r(o, [], n));
}
function ys(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Gp(e) {
  const t = pt(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = Pt(e), a = o ? e.offsetWidth : n, i = o ? e.offsetHeight : r, s = Uo(n) !== a || Uo(r) !== i;
  return s && (n = a, r = i), {
    width: n,
    height: r,
    $: s
  };
}
function _c(e) {
  return ft(e) ? e : e.contextElement;
}
function Nn(e) {
  const t = _c(e);
  if (!Pt(t))
    return Ct(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: a
  } = Gp(t);
  let i = (a ? Uo(n.width) : n.width) / r, s = (a ? Uo(n.height) : n.height) / o;
  return (!i || !Number.isFinite(i)) && (i = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: i,
    y: s
  };
}
const Bk = /* @__PURE__ */ Ct(0);
function Up(e) {
  const t = Ye(e);
  return !Ec() || !t.visualViewport ? Bk : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function zk(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Ye(e) ? !1 : t;
}
function fn(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), a = _c(e);
  let i = Ct(1);
  t && (r ? ft(r) && (i = Nn(r)) : i = Nn(e));
  const s = zk(a, n, r) ? Up(a) : Ct(0);
  let c = (o.left + s.x) / i.x, u = (o.top + s.y) / i.y, d = o.width / i.x, f = o.height / i.y;
  if (a) {
    const m = Ye(a), b = r && ft(r) ? Ye(r) : r;
    let g = m, h = ys(g);
    for (; h && r && b !== g; ) {
      const v = Nn(h), y = h.getBoundingClientRect(), w = pt(h), S = y.left + (h.clientLeft + parseFloat(w.paddingLeft)) * v.x, x = y.top + (h.clientTop + parseFloat(w.paddingTop)) * v.y;
      c *= v.x, u *= v.y, d *= v.x, f *= v.y, c += S, u += x, g = Ye(h), h = ys(g);
    }
  }
  return Ko({
    width: d,
    height: f,
    x: c,
    y: u
  });
}
function Rc(e, t) {
  const n = $a(e).scrollLeft;
  return t ? t.left + n : fn(Rt(e)).left + n;
}
function Wp(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), o = r.left + t.scrollLeft - (n ? 0 : (
    // RTL <body> scrollbar.
    Rc(e, r)
  )), a = r.top + t.scrollTop;
  return {
    x: o,
    y: a
  };
}
function Hk(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const a = o === "fixed", i = Rt(r), s = t ? Oa(t.floating) : !1;
  if (r === i || s && a)
    return n;
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = Ct(1);
  const d = Ct(0), f = Pt(r);
  if ((f || !f && !a) && ((Qn(r) !== "body" || jr(i)) && (c = $a(r)), Pt(r))) {
    const b = fn(r);
    u = Nn(r), d.x = b.x + r.clientLeft, d.y = b.y + r.clientTop;
  }
  const m = i && !f && !a ? Wp(i, c, !0) : Ct(0);
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - c.scrollLeft * u.x + d.x + m.x,
    y: n.y * u.y - c.scrollTop * u.y + d.y + m.y
  };
}
function jk(e) {
  return Array.from(e.getClientRects());
}
function Vk(e) {
  const t = Rt(e), n = $a(e), r = e.ownerDocument.body, o = Ke(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), a = Ke(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let i = -n.scrollLeft + Rc(e);
  const s = -n.scrollTop;
  return pt(r).direction === "rtl" && (i += Ke(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: a,
    x: i,
    y: s
  };
}
function Gk(e, t) {
  const n = Ye(e), r = Rt(e), o = n.visualViewport;
  let a = r.clientWidth, i = r.clientHeight, s = 0, c = 0;
  if (o) {
    a = o.width, i = o.height;
    const u = Ec();
    (!u || u && t === "fixed") && (s = o.offsetLeft, c = o.offsetTop);
  }
  return {
    width: a,
    height: i,
    x: s,
    y: c
  };
}
function Uk(e, t) {
  const n = fn(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, a = Pt(e) ? Nn(e) : Ct(1), i = e.clientWidth * a.x, s = e.clientHeight * a.y, c = o * a.x, u = r * a.y;
  return {
    width: i,
    height: s,
    x: c,
    y: u
  };
}
function hd(e, t, n) {
  let r;
  if (t === "viewport")
    r = Gk(e, n);
  else if (t === "document")
    r = Vk(Rt(e));
  else if (ft(t))
    r = Uk(t, n);
  else {
    const o = Up(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return Ko(r);
}
function Kp(e, t) {
  const n = Gt(e);
  return n === t || !ft(n) || Fn(n) ? !1 : pt(n).position === "fixed" || Kp(n, t);
}
function Wk(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = _r(e, [], !1).filter((s) => ft(s) && Qn(s) !== "body"), o = null;
  const a = pt(e).position === "fixed";
  let i = a ? Gt(e) : e;
  for (; ft(i) && !Fn(i); ) {
    const s = pt(i), c = Pc(i);
    !c && s.position === "fixed" && (o = null), (a ? !c && !o : !c && s.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || jr(i) && !c && Kp(e, i)) ? r = r.filter((d) => d !== i) : o = s, i = Gt(i);
  }
  return t.set(e, r), r;
}
function Kk(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const i = [...n === "clippingAncestors" ? Oa(t) ? [] : Wk(t, this._c) : [].concat(n), r], s = i[0], c = i.reduce((u, d) => {
    const f = hd(t, d, o);
    return u.top = Ke(f.top, u.top), u.right = Vt(f.right, u.right), u.bottom = Vt(f.bottom, u.bottom), u.left = Ke(f.left, u.left), u;
  }, hd(t, s, o));
  return {
    width: c.right - c.left,
    height: c.bottom - c.top,
    x: c.left,
    y: c.top
  };
}
function Yk(e) {
  const {
    width: t,
    height: n
  } = Gp(e);
  return {
    width: t,
    height: n
  };
}
function qk(e, t, n) {
  const r = Pt(t), o = Rt(t), a = n === "fixed", i = fn(e, !0, a, t);
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = Ct(0);
  function u() {
    c.x = Rc(o);
  }
  if (r || !r && !a)
    if ((Qn(t) !== "body" || jr(o)) && (s = $a(t)), r) {
      const b = fn(t, !0, a, t);
      c.x = b.x + t.clientLeft, c.y = b.y + t.clientTop;
    } else o && u();
  a && !r && o && u();
  const d = o && !r && !a ? Wp(o, s) : Ct(0), f = i.left + s.scrollLeft - c.x - d.x, m = i.top + s.scrollTop - c.y - d.y;
  return {
    x: f,
    y: m,
    width: i.width,
    height: i.height
  };
}
function Ti(e) {
  return pt(e).position === "static";
}
function vd(e, t) {
  if (!Pt(e) || pt(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return Rt(e) === n && (n = n.ownerDocument.body), n;
}
function Yp(e, t) {
  const n = Ye(e);
  if (Oa(e))
    return n;
  if (!Pt(e)) {
    let o = Gt(e);
    for (; o && !Fn(o); ) {
      if (ft(o) && !Ti(o))
        return o;
      o = Gt(o);
    }
    return n;
  }
  let r = vd(e, t);
  for (; r && Lk(r) && Ti(r); )
    r = vd(r, t);
  return r && Fn(r) && Ti(r) && !Pc(r) ? n : r || Fk(e) || n;
}
const Xk = async function(e) {
  const t = this.getOffsetParent || Yp, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: qk(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function Zk(e) {
  return pt(e).direction === "rtl";
}
const Jk = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Hk,
  getDocumentElement: Rt,
  getClippingRect: Kk,
  getOffsetParent: Yp,
  getElementRects: Xk,
  getClientRects: jk,
  getDimensions: Yk,
  getScale: Nn,
  isElement: ft,
  isRTL: Zk
};
function qp(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function Qk(e, t) {
  let n = null, r;
  const o = Rt(e);
  function a() {
    var s;
    clearTimeout(r), (s = n) == null || s.disconnect(), n = null;
  }
  function i(s, c) {
    s === void 0 && (s = !1), c === void 0 && (c = 1), a();
    const u = e.getBoundingClientRect(), {
      left: d,
      top: f,
      width: m,
      height: b
    } = u;
    if (s || t(), !m || !b)
      return;
    const g = bo(f), h = bo(o.clientWidth - (d + m)), v = bo(o.clientHeight - (f + b)), y = bo(d), S = {
      rootMargin: -g + "px " + -h + "px " + -v + "px " + -y + "px",
      threshold: Ke(0, Vt(1, c)) || 1
    };
    let x = !0;
    function P(E) {
      const C = E[0].intersectionRatio;
      if (C !== c) {
        if (!x)
          return i();
        C ? i(!1, C) : r = setTimeout(() => {
          i(!1, 1e-7);
        }, 1e3);
      }
      C === 1 && !qp(u, e.getBoundingClientRect()) && i(), x = !1;
    }
    try {
      n = new IntersectionObserver(P, {
        ...S,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(P, S);
    }
    n.observe(e);
  }
  return i(!0), a;
}
function eL(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: a = !0,
    elementResize: i = typeof ResizeObserver == "function",
    layoutShift: s = typeof IntersectionObserver == "function",
    animationFrame: c = !1
  } = r, u = _c(e), d = o || a ? [...u ? _r(u) : [], ..._r(t)] : [];
  d.forEach((y) => {
    o && y.addEventListener("scroll", n, {
      passive: !0
    }), a && y.addEventListener("resize", n);
  });
  const f = u && s ? Qk(u, n) : null;
  let m = -1, b = null;
  i && (b = new ResizeObserver((y) => {
    let [w] = y;
    w && w.target === u && b && (b.unobserve(t), cancelAnimationFrame(m), m = requestAnimationFrame(() => {
      var S;
      (S = b) == null || S.observe(t);
    })), n();
  }), u && !c && b.observe(u), b.observe(t));
  let g, h = c ? fn(e) : null;
  c && v();
  function v() {
    const y = fn(e);
    h && !qp(h, y) && n(), h = y, g = requestAnimationFrame(v);
  }
  return n(), () => {
    var y;
    d.forEach((w) => {
      o && w.removeEventListener("scroll", n), a && w.removeEventListener("resize", n);
    }), f?.(), (y = b) == null || y.disconnect(), b = null, c && cancelAnimationFrame(g);
  };
}
const tL = $k, nL = Ik, rL = Nk, oL = kk, aL = Mk, gd = Ak, iL = Dk, sL = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: Jk,
    ...n
  }, a = {
    ...o.platform,
    _c: r
  };
  return Tk(e, t, {
    ...o,
    platform: a
  });
};
var cL = typeof document < "u", lL = function() {
}, Ro = cL ? Us : lL;
function Yo(e, t) {
  if (e === t)
    return !0;
  if (typeof e != typeof t)
    return !1;
  if (typeof e == "function" && e.toString() === t.toString())
    return !0;
  let n, r, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (n = e.length, n !== t.length) return !1;
      for (r = n; r-- !== 0; )
        if (!Yo(e[r], t[r]))
          return !1;
      return !0;
    }
    if (o = Object.keys(e), n = o.length, n !== Object.keys(t).length)
      return !1;
    for (r = n; r-- !== 0; )
      if (!{}.hasOwnProperty.call(t, o[r]))
        return !1;
    for (r = n; r-- !== 0; ) {
      const a = o[r];
      if (!(a === "_owner" && e.$$typeof) && !Yo(e[a], t[a]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Xp(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function bd(e, t) {
  const n = Xp(e);
  return Math.round(t * n) / n;
}
function Ai(e) {
  const t = l.useRef(e);
  return Ro(() => {
    t.current = e;
  }), t;
}
function uL(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: n = "absolute",
    middleware: r = [],
    platform: o,
    elements: {
      reference: a,
      floating: i
    } = {},
    transform: s = !0,
    whileElementsMounted: c,
    open: u
  } = e, [d, f] = l.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [m, b] = l.useState(r);
  Yo(m, r) || b(r);
  const [g, h] = l.useState(null), [v, y] = l.useState(null), w = l.useCallback((H) => {
    H !== E.current && (E.current = H, h(H));
  }, []), S = l.useCallback((H) => {
    H !== C.current && (C.current = H, y(H));
  }, []), x = a || g, P = i || v, E = l.useRef(null), C = l.useRef(null), T = l.useRef(d), R = c != null, D = Ai(c), M = Ai(o), F = Ai(u), $ = l.useCallback(() => {
    if (!E.current || !C.current)
      return;
    const H = {
      placement: t,
      strategy: n,
      middleware: m
    };
    M.current && (H.platform = M.current), sL(E.current, C.current, H).then((B) => {
      const oe = {
        ...B,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: F.current !== !1
      };
      I.current && !Yo(T.current, oe) && (T.current = oe, Ir.flushSync(() => {
        f(oe);
      }));
    });
  }, [m, t, n, M, F]);
  Ro(() => {
    u === !1 && T.current.isPositioned && (T.current.isPositioned = !1, f((H) => ({
      ...H,
      isPositioned: !1
    })));
  }, [u]);
  const I = l.useRef(!1);
  Ro(() => (I.current = !0, () => {
    I.current = !1;
  }), []), Ro(() => {
    if (x && (E.current = x), P && (C.current = P), x && P) {
      if (D.current)
        return D.current(x, P, $);
      $();
    }
  }, [x, P, $, D, R]);
  const z = l.useMemo(() => ({
    reference: E,
    floating: C,
    setReference: w,
    setFloating: S
  }), [w, S]), L = l.useMemo(() => ({
    reference: x,
    floating: P
  }), [x, P]), U = l.useMemo(() => {
    const H = {
      position: n,
      left: 0,
      top: 0
    };
    if (!L.floating)
      return H;
    const B = bd(L.floating, d.x), oe = bd(L.floating, d.y);
    return s ? {
      ...H,
      transform: "translate(" + B + "px, " + oe + "px)",
      ...Xp(L.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: B,
      top: oe
    };
  }, [n, s, L.floating, d.x, d.y]);
  return l.useMemo(() => ({
    ...d,
    update: $,
    refs: z,
    elements: L,
    floatingStyles: U
  }), [d, $, z, L, U]);
}
const dL = (e) => {
  function t(n) {
    return {}.hasOwnProperty.call(n, "current");
  }
  return {
    name: "arrow",
    options: e,
    fn(n) {
      const {
        element: r,
        padding: o
      } = typeof e == "function" ? e(n) : e;
      return r && t(r) ? r.current != null ? gd({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? gd({
        element: r,
        padding: o
      }).fn(n) : {};
    }
  };
}, fL = (e, t) => ({
  ...tL(e),
  options: [e, t]
}), pL = (e, t) => ({
  ...nL(e),
  options: [e, t]
}), mL = (e, t) => ({
  ...iL(e),
  options: [e, t]
}), hL = (e, t) => ({
  ...rL(e),
  options: [e, t]
}), vL = (e, t) => ({
  ...oL(e),
  options: [e, t]
}), gL = (e, t) => ({
  ...aL(e),
  options: [e, t]
}), bL = (e, t) => ({
  ...dL(e),
  options: [e, t]
});
var yL = "Arrow", Zp = l.forwardRef((e, t) => {
  const { children: n, width: r = 10, height: o = 5, ...a } = e;
  return /* @__PURE__ */ p(
    W.svg,
    {
      ...a,
      ref: t,
      width: r,
      height: o,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : /* @__PURE__ */ p("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
Zp.displayName = yL;
var wL = Zp;
function Vr(e) {
  const [t, n] = l.useState(void 0);
  return _e(() => {
    if (e) {
      n({ width: e.offsetWidth, height: e.offsetHeight });
      const r = new ResizeObserver((o) => {
        if (!Array.isArray(o) || !o.length)
          return;
        const a = o[0];
        let i, s;
        if ("borderBoxSize" in a) {
          const c = a.borderBoxSize, u = Array.isArray(c) ? c[0] : c;
          i = u.inlineSize, s = u.blockSize;
        } else
          i = e.offsetWidth, s = e.offsetHeight;
        n({ width: i, height: s });
      });
      return r.observe(e, { box: "border-box" }), () => r.unobserve(e);
    } else
      n(void 0);
  }, [e]), t;
}
var Tc = "Popper", [Jp, Tt] = be(Tc), [SL, Qp] = Jp(Tc), em = (e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = l.useState(null);
  return /* @__PURE__ */ p(SL, { scope: t, anchor: r, onAnchorChange: o, children: n });
};
em.displayName = Tc;
var tm = "PopperAnchor", nm = l.forwardRef(
  (e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e, a = Qp(tm, n), i = l.useRef(null), s = ne(t, i);
    return l.useEffect(() => {
      a.onAnchorChange(r?.current || i.current);
    }), r ? null : /* @__PURE__ */ p(W.div, { ...o, ref: s });
  }
);
nm.displayName = tm;
var Ac = "PopperContent", [xL, CL] = Jp(Ac), rm = l.forwardRef(
  (e, t) => {
    const {
      __scopePopper: n,
      side: r = "bottom",
      sideOffset: o = 0,
      align: a = "center",
      alignOffset: i = 0,
      arrowPadding: s = 0,
      avoidCollisions: c = !0,
      collisionBoundary: u = [],
      collisionPadding: d = 0,
      sticky: f = "partial",
      hideWhenDetached: m = !1,
      updatePositionStrategy: b = "optimized",
      onPlaced: g,
      ...h
    } = e, v = Qp(Ac, n), [y, w] = l.useState(null), S = ne(t, (O) => w(O)), [x, P] = l.useState(null), E = Vr(x), C = E?.width ?? 0, T = E?.height ?? 0, R = r + (a !== "center" ? "-" + a : ""), D = typeof d == "number" ? d : { top: 0, right: 0, bottom: 0, left: 0, ...d }, M = Array.isArray(u) ? u : [u], F = M.length > 0, $ = {
      padding: D,
      boundary: M.filter(EL),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: F
    }, { refs: I, floatingStyles: z, placement: L, isPositioned: U, middlewareData: H } = uL({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: R,
      whileElementsMounted: (...O) => eL(...O, {
        animationFrame: b === "always"
      }),
      elements: {
        reference: v.anchor
      },
      middleware: [
        fL({ mainAxis: o + T, alignmentAxis: i }),
        c && pL({
          mainAxis: !0,
          crossAxis: !1,
          limiter: f === "partial" ? mL() : void 0,
          ...$
        }),
        c && hL({ ...$ }),
        vL({
          ...$,
          apply: ({ elements: O, rects: G, availableWidth: ee, availableHeight: Q }) => {
            const { width: X, height: V } = G.reference, Z = O.floating.style;
            Z.setProperty("--radix-popper-available-width", `${ee}px`), Z.setProperty("--radix-popper-available-height", `${Q}px`), Z.setProperty("--radix-popper-anchor-width", `${X}px`), Z.setProperty("--radix-popper-anchor-height", `${V}px`);
          }
        }),
        x && bL({ element: x, padding: s }),
        _L({ arrowWidth: C, arrowHeight: T }),
        m && gL({ strategy: "referenceHidden", ...$ })
      ]
    }), [B, oe] = im(L), re = Se(g);
    _e(() => {
      U && re?.();
    }, [U, re]);
    const ie = H.arrow?.x, j = H.arrow?.y, K = H.arrow?.centerOffset !== 0, [J, Y] = l.useState();
    return _e(() => {
      y && Y(window.getComputedStyle(y).zIndex);
    }, [y]), /* @__PURE__ */ p(
      "div",
      {
        ref: I.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...z,
          transform: U ? z.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: J,
          "--radix-popper-transform-origin": [
            H.transformOrigin?.x,
            H.transformOrigin?.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...H.hide?.referenceHidden && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ p(
          xL,
          {
            scope: n,
            placedSide: B,
            onArrowChange: P,
            arrowX: ie,
            arrowY: j,
            shouldHideArrow: K,
            children: /* @__PURE__ */ p(
              W.div,
              {
                "data-side": B,
                "data-align": oe,
                ...h,
                ref: S,
                style: {
                  ...h.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: U ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
rm.displayName = Ac;
var om = "PopperArrow", PL = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, am = l.forwardRef(function(t, n) {
  const { __scopePopper: r, ...o } = t, a = CL(om, r), i = PL[a.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ p(
      "span",
      {
        ref: a.onArrowChange,
        style: {
          position: "absolute",
          left: a.arrowX,
          top: a.arrowY,
          [i]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0"
          }[a.placedSide],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: "rotate(180deg)",
            left: "translateY(50%) rotate(-90deg) translateX(50%)"
          }[a.placedSide],
          visibility: a.shouldHideArrow ? "hidden" : void 0
        },
        children: /* @__PURE__ */ p(
          wL,
          {
            ...o,
            ref: n,
            style: {
              ...o.style,
              // ensures the element can be measured correctly (mostly for if SVG)
              display: "block"
            }
          }
        )
      }
    )
  );
});
am.displayName = om;
function EL(e) {
  return e !== null;
}
var _L = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    const { placement: n, rects: r, middlewareData: o } = t, i = o.arrow?.centerOffset !== 0, s = i ? 0 : e.arrowWidth, c = i ? 0 : e.arrowHeight, [u, d] = im(n), f = { start: "0%", center: "50%", end: "100%" }[d], m = (o.arrow?.x ?? 0) + s / 2, b = (o.arrow?.y ?? 0) + c / 2;
    let g = "", h = "";
    return u === "bottom" ? (g = i ? f : `${m}px`, h = `${-c}px`) : u === "top" ? (g = i ? f : `${m}px`, h = `${r.floating.height + c}px`) : u === "right" ? (g = `${-c}px`, h = i ? f : `${b}px`) : u === "left" && (g = `${r.floating.width + c}px`, h = i ? f : `${b}px`), { data: { x: g, y: h } };
  }
});
function im(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var er = em, tr = nm, Gr = rm, Ur = am, sm = Object.freeze({
  // See: https://github.com/twbs/bootstrap/blob/main/scss/mixins/_visually-hidden.scss
  position: "absolute",
  border: 0,
  width: 1,
  height: 1,
  padding: 0,
  margin: -1,
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  wordWrap: "normal"
}), RL = "VisuallyHidden", Ia = l.forwardRef(
  (e, t) => /* @__PURE__ */ p(
    W.span,
    {
      ...e,
      ref: t,
      style: { ...sm, ...e.style }
    }
  )
);
Ia.displayName = RL;
var TL = Ia, [Da, VU] = be("Tooltip", [
  Tt
]), ka = Tt(), cm = "TooltipProvider", AL = 700, ws = "tooltip.open", [NL, Nc] = Da(cm), lm = (e) => {
  const {
    __scopeTooltip: t,
    delayDuration: n = AL,
    skipDelayDuration: r = 300,
    disableHoverableContent: o = !1,
    children: a
  } = e, i = l.useRef(!0), s = l.useRef(!1), c = l.useRef(0);
  return l.useEffect(() => {
    const u = c.current;
    return () => window.clearTimeout(u);
  }, []), /* @__PURE__ */ p(
    NL,
    {
      scope: t,
      isOpenDelayedRef: i,
      delayDuration: n,
      onOpen: l.useCallback(() => {
        window.clearTimeout(c.current), i.current = !1;
      }, []),
      onClose: l.useCallback(() => {
        window.clearTimeout(c.current), c.current = window.setTimeout(
          () => i.current = !0,
          r
        );
      }, [r]),
      isPointerInTransitRef: s,
      onPointerInTransitChange: l.useCallback((u) => {
        s.current = u;
      }, []),
      disableHoverableContent: o,
      children: a
    }
  );
};
lm.displayName = cm;
var Rr = "Tooltip", [ML, Wr] = Da(Rr), um = (e) => {
  const {
    __scopeTooltip: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: a,
    disableHoverableContent: i,
    delayDuration: s
  } = e, c = Nc(Rr, e.__scopeTooltip), u = ka(t), [d, f] = l.useState(null), m = $e(), b = l.useRef(0), g = i ?? c.disableHoverableContent, h = s ?? c.delayDuration, v = l.useRef(!1), [y, w] = xe({
    prop: r,
    defaultProp: o ?? !1,
    onChange: (C) => {
      C ? (c.onOpen(), document.dispatchEvent(new CustomEvent(ws))) : c.onClose(), a?.(C);
    },
    caller: Rr
  }), S = l.useMemo(() => y ? v.current ? "delayed-open" : "instant-open" : "closed", [y]), x = l.useCallback(() => {
    window.clearTimeout(b.current), b.current = 0, v.current = !1, w(!0);
  }, [w]), P = l.useCallback(() => {
    window.clearTimeout(b.current), b.current = 0, w(!1);
  }, [w]), E = l.useCallback(() => {
    window.clearTimeout(b.current), b.current = window.setTimeout(() => {
      v.current = !0, w(!0), b.current = 0;
    }, h);
  }, [h, w]);
  return l.useEffect(() => () => {
    b.current && (window.clearTimeout(b.current), b.current = 0);
  }, []), /* @__PURE__ */ p(er, { ...u, children: /* @__PURE__ */ p(
    ML,
    {
      scope: t,
      contentId: m,
      open: y,
      stateAttribute: S,
      trigger: d,
      onTriggerChange: f,
      onTriggerEnter: l.useCallback(() => {
        c.isOpenDelayedRef.current ? E() : x();
      }, [c.isOpenDelayedRef, E, x]),
      onTriggerLeave: l.useCallback(() => {
        g ? P() : (window.clearTimeout(b.current), b.current = 0);
      }, [P, g]),
      onOpen: x,
      onClose: P,
      disableHoverableContent: g,
      children: n
    }
  ) });
};
um.displayName = Rr;
var Ss = "TooltipTrigger", dm = l.forwardRef(
  (e, t) => {
    const { __scopeTooltip: n, ...r } = e, o = Wr(Ss, n), a = Nc(Ss, n), i = ka(n), s = l.useRef(null), c = ne(t, s, o.onTriggerChange), u = l.useRef(!1), d = l.useRef(!1), f = l.useCallback(() => u.current = !1, []);
    return l.useEffect(() => () => document.removeEventListener("pointerup", f), [f]), /* @__PURE__ */ p(tr, { asChild: !0, ...i, children: /* @__PURE__ */ p(
      W.button,
      {
        "aria-describedby": o.open ? o.contentId : void 0,
        "data-state": o.stateAttribute,
        ...r,
        ref: c,
        onPointerMove: k(e.onPointerMove, (m) => {
          m.pointerType !== "touch" && !d.current && !a.isPointerInTransitRef.current && (o.onTriggerEnter(), d.current = !0);
        }),
        onPointerLeave: k(e.onPointerLeave, () => {
          o.onTriggerLeave(), d.current = !1;
        }),
        onPointerDown: k(e.onPointerDown, () => {
          o.open && o.onClose(), u.current = !0, document.addEventListener("pointerup", f, { once: !0 });
        }),
        onFocus: k(e.onFocus, () => {
          u.current || o.onOpen();
        }),
        onBlur: k(e.onBlur, o.onClose),
        onClick: k(e.onClick, o.onClose)
      }
    ) });
  }
);
dm.displayName = Ss;
var Mc = "TooltipPortal", [OL, $L] = Da(Mc, {
  forceMount: void 0
}), fm = (e) => {
  const { __scopeTooltip: t, forceMount: n, children: r, container: o } = e, a = Wr(Mc, t);
  return /* @__PURE__ */ p(OL, { scope: t, forceMount: n, children: /* @__PURE__ */ p(Re, { present: n || a.open, children: /* @__PURE__ */ p(yn, { asChild: !0, container: o, children: r }) }) });
};
fm.displayName = Mc;
var Bn = "TooltipContent", pm = l.forwardRef(
  (e, t) => {
    const n = $L(Bn, e.__scopeTooltip), { forceMount: r = n.forceMount, side: o = "top", ...a } = e, i = Wr(Bn, e.__scopeTooltip);
    return /* @__PURE__ */ p(Re, { present: r || i.open, children: i.disableHoverableContent ? /* @__PURE__ */ p(mm, { side: o, ...a, ref: t }) : /* @__PURE__ */ p(IL, { side: o, ...a, ref: t }) });
  }
), IL = l.forwardRef((e, t) => {
  const n = Wr(Bn, e.__scopeTooltip), r = Nc(Bn, e.__scopeTooltip), o = l.useRef(null), a = ne(t, o), [i, s] = l.useState(null), { trigger: c, onClose: u } = n, d = o.current, { onPointerInTransitChange: f } = r, m = l.useCallback(() => {
    s(null), f(!1);
  }, [f]), b = l.useCallback(
    (g, h) => {
      const v = g.currentTarget, y = { x: g.clientX, y: g.clientY }, w = BL(y, v.getBoundingClientRect()), S = zL(y, w), x = HL(h.getBoundingClientRect()), P = VL([...S, ...x]);
      s(P), f(!0);
    },
    [f]
  );
  return l.useEffect(() => () => m(), [m]), l.useEffect(() => {
    if (c && d) {
      const g = (v) => b(v, d), h = (v) => b(v, c);
      return c.addEventListener("pointerleave", g), d.addEventListener("pointerleave", h), () => {
        c.removeEventListener("pointerleave", g), d.removeEventListener("pointerleave", h);
      };
    }
  }, [c, d, b, m]), l.useEffect(() => {
    if (i) {
      const g = (h) => {
        const v = h.target, y = { x: h.clientX, y: h.clientY }, w = c?.contains(v) || d?.contains(v), S = !jL(y, i);
        w ? m() : S && (m(), u());
      };
      return document.addEventListener("pointermove", g), () => document.removeEventListener("pointermove", g);
    }
  }, [c, d, i, u, m]), /* @__PURE__ */ p(mm, { ...e, ref: a });
}), [DL, kL] = Da(Rr, { isInside: !1 }), LL = jd("TooltipContent"), mm = l.forwardRef(
  (e, t) => {
    const {
      __scopeTooltip: n,
      children: r,
      "aria-label": o,
      onEscapeKeyDown: a,
      onPointerDownOutside: i,
      ...s
    } = e, c = Wr(Bn, n), u = ka(n), { onClose: d } = c;
    return l.useEffect(() => (document.addEventListener(ws, d), () => document.removeEventListener(ws, d)), [d]), l.useEffect(() => {
      if (c.trigger) {
        const f = (m) => {
          m.target?.contains(c.trigger) && d();
        };
        return window.addEventListener("scroll", f, { capture: !0 }), () => window.removeEventListener("scroll", f, { capture: !0 });
      }
    }, [c.trigger, d]), /* @__PURE__ */ p(
      Wt,
      {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: a,
        onPointerDownOutside: i,
        onFocusOutside: (f) => f.preventDefault(),
        onDismiss: d,
        children: /* @__PURE__ */ te(
          Gr,
          {
            "data-state": c.stateAttribute,
            ...u,
            ...s,
            ref: t,
            style: {
              ...s.style,
              "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
              "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
              "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
              "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
              "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
            },
            children: [
              /* @__PURE__ */ p(LL, { children: r }),
              /* @__PURE__ */ p(DL, { scope: n, isInside: !0, children: /* @__PURE__ */ p(TL, { id: c.contentId, role: "tooltip", children: o || r }) })
            ]
          }
        )
      }
    );
  }
);
pm.displayName = Bn;
var hm = "TooltipArrow", FL = l.forwardRef(
  (e, t) => {
    const { __scopeTooltip: n, ...r } = e, o = ka(n);
    return kL(
      hm,
      n
    ).isInside ? null : /* @__PURE__ */ p(Ur, { ...o, ...r, ref: t });
  }
);
FL.displayName = hm;
function BL(e, t) {
  const n = Math.abs(t.top - e.y), r = Math.abs(t.bottom - e.y), o = Math.abs(t.right - e.x), a = Math.abs(t.left - e.x);
  switch (Math.min(n, r, o, a)) {
    case a:
      return "left";
    case o:
      return "right";
    case n:
      return "top";
    case r:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function zL(e, t, n = 5) {
  const r = [];
  switch (t) {
    case "top":
      r.push(
        { x: e.x - n, y: e.y + n },
        { x: e.x + n, y: e.y + n }
      );
      break;
    case "bottom":
      r.push(
        { x: e.x - n, y: e.y - n },
        { x: e.x + n, y: e.y - n }
      );
      break;
    case "left":
      r.push(
        { x: e.x + n, y: e.y - n },
        { x: e.x + n, y: e.y + n }
      );
      break;
    case "right":
      r.push(
        { x: e.x - n, y: e.y - n },
        { x: e.x - n, y: e.y + n }
      );
      break;
  }
  return r;
}
function HL(e) {
  const { top: t, right: n, bottom: r, left: o } = e;
  return [
    { x: o, y: t },
    { x: n, y: t },
    { x: n, y: r },
    { x: o, y: r }
  ];
}
function jL(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let a = 0, i = t.length - 1; a < t.length; i = a++) {
    const s = t[a], c = t[i], u = s.x, d = s.y, f = c.x, m = c.y;
    d > r != m > r && n < (f - u) * (r - d) / (m - d) + u && (o = !o);
  }
  return o;
}
function VL(e) {
  const t = e.slice();
  return t.sort((n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0), GL(t);
}
function GL(e) {
  if (e.length <= 1) return e.slice();
  const t = [];
  for (let r = 0; r < e.length; r++) {
    const o = e[r];
    for (; t.length >= 2; ) {
      const a = t[t.length - 1], i = t[t.length - 2];
      if ((a.x - i.x) * (o.y - i.y) >= (a.y - i.y) * (o.x - i.x)) t.pop();
      else break;
    }
    t.push(o);
  }
  t.pop();
  const n = [];
  for (let r = e.length - 1; r >= 0; r--) {
    const o = e[r];
    for (; n.length >= 2; ) {
      const a = n[n.length - 1], i = n[n.length - 2];
      if ((a.x - i.x) * (o.y - i.y) >= (a.y - i.y) * (o.x - i.x)) n.pop();
      else break;
    }
    n.push(o);
  }
  return n.pop(), t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n);
}
var UL = lm, WL = um, KL = dm, YL = fm, vm = pm;
const qL = UL, XL = WL, ZL = KL, gm = l.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) => /* @__PURE__ */ p(YL, { children: /* @__PURE__ */ p(
  vm,
  {
    ref: r,
    sideOffset: t,
    className: N(
      "z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...n
  }
) }));
gm.displayName = vm.displayName;
const JL = "sidebar:state", QL = 60 * 60 * 24 * 7, e2 = "16rem", t2 = "18rem", n2 = "3rem", r2 = "b", bm = l.createContext(null);
function La() {
  const e = l.useContext(bm);
  if (!e)
    throw new Error("useSidebar must be used within a SidebarProvider.");
  return e;
}
const o2 = l.forwardRef(
  ({
    defaultOpen: e = !0,
    open: t,
    onOpenChange: n,
    className: r,
    style: o,
    children: a,
    ...i
  }, s) => {
    const c = HI(), [u, d] = l.useState(!1), [f, m] = l.useState(e), b = t ?? f, g = l.useCallback(
      (w) => {
        const S = typeof w == "function" ? w(b) : w;
        n ? n(S) : m(S), document.cookie = `${JL}=${S}; path=/; max-age=${QL}`;
      },
      [n, b]
    ), h = l.useCallback(() => c ? d((w) => !w) : g((w) => !w), [c, g, d]);
    l.useEffect(() => {
      const w = (S) => {
        S.key === r2 && (S.metaKey || S.ctrlKey) && (S.preventDefault(), h());
      };
      return window.addEventListener("keydown", w), () => window.removeEventListener("keydown", w);
    }, [h]);
    const v = b ? "expanded" : "collapsed", y = l.useMemo(
      () => ({
        state: v,
        open: b,
        setOpen: g,
        isMobile: c,
        openMobile: u,
        setOpenMobile: d,
        toggleSidebar: h
      }),
      [v, b, g, c, u, d, h]
    );
    return /* @__PURE__ */ p(bm.Provider, { value: y, children: /* @__PURE__ */ p(qL, { delayDuration: 0, children: /* @__PURE__ */ p(
      "div",
      {
        style: {
          "--sidebar-width": e2,
          "--sidebar-width-icon": n2,
          ...o
        },
        className: N(
          "group/sidebar-wrapper flex min-h-svh w-full has-[[data-variant=inset]]:bg-sidebar",
          r
        ),
        ref: s,
        ...i,
        children: a
      }
    ) }) });
  }
);
o2.displayName = "SidebarProvider";
const a2 = l.forwardRef(
  ({
    side: e = "left",
    variant: t = "sidebar",
    collapsible: n = "offcanvas",
    className: r,
    children: o,
    ...a
  }, i) => {
    const { isMobile: s, state: c, openMobile: u, setOpenMobile: d } = La();
    return n === "none" ? /* @__PURE__ */ p(
      "div",
      {
        className: N(
          "flex h-full w-[--sidebar-width] flex-col bg-sidebar text-sidebar-foreground",
          r
        ),
        ref: i,
        ...a,
        children: o
      }
    ) : s ? /* @__PURE__ */ p(pk, { open: u, onOpenChange: d, ...a, children: /* @__PURE__ */ p(
      zp,
      {
        "data-sidebar": "sidebar",
        "data-mobile": "true",
        className: "w-[--sidebar-width] bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden",
        style: {
          "--sidebar-width": t2
        },
        side: e,
        children: /* @__PURE__ */ p("div", { className: "flex h-full w-full flex-col", children: o })
      }
    ) }) : /* @__PURE__ */ te(
      "div",
      {
        ref: i,
        className: "group peer hidden md:block text-sidebar-foreground",
        "data-state": c,
        "data-collapsible": c === "collapsed" ? n : "",
        "data-variant": t,
        "data-side": e,
        children: [
          /* @__PURE__ */ p(
            "div",
            {
              className: N(
                "duration-200 relative h-svh w-[--sidebar-width] bg-transparent transition-[width] ease-linear",
                "group-data-[collapsible=offcanvas]:w-0",
                "group-data-[side=right]:rotate-180",
                t === "floating" || t === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4))]" : "group-data-[collapsible=icon]:w-[--sidebar-width-icon]"
              )
            }
          ),
          /* @__PURE__ */ p(
            "div",
            {
              className: N(
                "duration-200 fixed inset-y-0 z-10 hidden h-svh w-[--sidebar-width] transition-[left,right,width] ease-linear md:flex",
                e === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
                // Adjust the padding for floating and inset variants.
                t === "floating" || t === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4)_+2px)]" : "group-data-[collapsible=icon]:w-[--sidebar-width-icon] group-data-[side=left]:border-r group-data-[side=right]:border-l",
                r
              ),
              ...a,
              children: /* @__PURE__ */ p(
                "div",
                {
                  "data-sidebar": "sidebar",
                  className: "flex h-full w-full flex-col bg-sidebar group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:border-sidebar-border group-data-[variant=floating]:shadow",
                  children: o
                }
              )
            }
          )
        ]
      }
    );
  }
);
a2.displayName = "Sidebar";
const i2 = l.forwardRef(({ className: e, onClick: t, ...n }, r) => {
  const { toggleSidebar: o } = La();
  return /* @__PURE__ */ te(
    la,
    {
      ref: r,
      "data-sidebar": "trigger",
      variant: "ghost",
      size: "icon",
      className: N("h-7 w-7", e),
      onClick: (a) => {
        t?.(a), o();
      },
      ...n,
      children: [
        /* @__PURE__ */ p(PS, {}),
        /* @__PURE__ */ p("span", { className: "sr-only", children: "Toggle Sidebar" })
      ]
    }
  );
});
i2.displayName = "SidebarTrigger";
const s2 = l.forwardRef(({ className: e, ...t }, n) => {
  const { toggleSidebar: r } = La();
  return /* @__PURE__ */ p(
    "button",
    {
      ref: n,
      "data-sidebar": "rail",
      "aria-label": "Toggle Sidebar",
      tabIndex: -1,
      onClick: r,
      title: "Toggle Sidebar",
      className: N(
        "absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] hover:after:bg-sidebar-border group-data-[side=left]:-right-4 group-data-[side=right]:left-0 sm:flex",
        "[[data-side=left]_&]:cursor-w-resize [[data-side=right]_&]:cursor-e-resize",
        "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize",
        "group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full group-data-[collapsible=offcanvas]:hover:bg-sidebar",
        "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2",
        "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2",
        e
      ),
      ...t
    }
  );
});
s2.displayName = "SidebarRail";
const c2 = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p(
  "main",
  {
    ref: n,
    className: N(
      "relative flex min-h-svh flex-1 flex-col bg-background",
      "peer-data-[variant=inset]:min-h-[calc(100svh-theme(spacing.4))] md:peer-data-[variant=inset]:m-2 md:peer-data-[state=collapsed]:peer-data-[variant=inset]:ml-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow",
      e
    ),
    ...t
  }
));
c2.displayName = "SidebarInset";
const l2 = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p(
  hS,
  {
    ref: n,
    "data-sidebar": "input",
    className: N(
      "h-8 w-full bg-background shadow-none focus-visible:ring-2 focus-visible:ring-sidebar-ring",
      e
    ),
    ...t
  }
));
l2.displayName = "SidebarInput";
const u2 = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p(
  "div",
  {
    ref: n,
    "data-sidebar": "header",
    className: N("flex flex-col gap-2 p-2", e),
    ...t
  }
));
u2.displayName = "SidebarHeader";
const d2 = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p(
  "div",
  {
    ref: n,
    "data-sidebar": "footer",
    className: N("flex flex-col gap-2 p-2", e),
    ...t
  }
));
d2.displayName = "SidebarFooter";
const f2 = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p(
  lp,
  {
    ref: n,
    "data-sidebar": "separator",
    className: N("mx-2 w-auto bg-sidebar-border", e),
    ...t
  }
));
f2.displayName = "SidebarSeparator";
const p2 = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p(
  "div",
  {
    ref: n,
    "data-sidebar": "content",
    className: N(
      "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
      e
    ),
    ...t
  }
));
p2.displayName = "SidebarContent";
const m2 = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p(
  "div",
  {
    ref: n,
    "data-sidebar": "group",
    className: N("relative flex w-full min-w-0 flex-col p-2", e),
    ...t
  }
));
m2.displayName = "SidebarGroup";
const h2 = l.forwardRef(({ className: e, asChild: t = !1, ...n }, r) => /* @__PURE__ */ p(
  t ? jn : "div",
  {
    ref: r,
    "data-sidebar": "group-label",
    className: N(
      "duration-200 flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium text-sidebar-foreground/70 outline-none ring-sidebar-ring transition-[margin,opa] ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
      "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
      e
    ),
    ...n
  }
));
h2.displayName = "SidebarGroupLabel";
const v2 = l.forwardRef(({ className: e, asChild: t = !1, ...n }, r) => /* @__PURE__ */ p(
  t ? jn : "button",
  {
    ref: r,
    "data-sidebar": "group-action",
    className: N(
      "absolute right-3 top-3.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
      // Increases the hit area of the button on mobile.
      "after:absolute after:-inset-2 after:md:hidden",
      "group-data-[collapsible=icon]:hidden",
      e
    ),
    ...n
  }
));
v2.displayName = "SidebarGroupAction";
const g2 = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p(
  "div",
  {
    ref: n,
    "data-sidebar": "group-content",
    className: N("w-full text-sm", e),
    ...t
  }
));
g2.displayName = "SidebarGroupContent";
const b2 = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p(
  "ul",
  {
    ref: n,
    "data-sidebar": "menu",
    className: N("flex w-full min-w-0 flex-col gap-1", e),
    ...t
  }
));
b2.displayName = "SidebarMenu";
const y2 = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p(
  "li",
  {
    ref: n,
    "data-sidebar": "menu-item",
    className: N("group/menu-item relative", e),
    ...t
  }
));
y2.displayName = "SidebarMenuItem";
const w2 = $r(
  "peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-none ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:!p-2 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
  {
    variants: {
      variant: {
        destructive: "bg-red-600 text-white hover:bg-red-700 hover:text-white",
        default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
        outline: "bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]"
      },
      size: {
        default: "h-8 text-sm",
        sm: "h-7 text-xs",
        lg: "h-12 text-sm group-data-[collapsible=icon]:!p-0"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), S2 = l.forwardRef(
  ({
    asChild: e = !1,
    isActive: t = !1,
    variant: n = "default",
    size: r = "default",
    tooltip: o,
    className: a,
    ...i
  }, s) => {
    const c = e ? jn : "button", { isMobile: u, state: d } = La(), f = /* @__PURE__ */ p(
      c,
      {
        ref: s,
        "data-sidebar": "menu-button",
        "data-size": r,
        "data-active": t,
        className: N(w2({ variant: n, size: r }), a),
        ...i
      }
    );
    return o ? (typeof o == "string" && (o = {
      children: o
    }), /* @__PURE__ */ te(XL, { children: [
      /* @__PURE__ */ p(ZL, { asChild: !0, children: f }),
      /* @__PURE__ */ p(
        gm,
        {
          side: "right",
          align: "center",
          hidden: d !== "collapsed" || u,
          ...o
        }
      )
    ] })) : f;
  }
);
S2.displayName = "SidebarMenuButton";
const x2 = l.forwardRef(({ className: e, asChild: t = !1, showOnHover: n = !1, ...r }, o) => /* @__PURE__ */ p(
  t ? jn : "button",
  {
    ref: o,
    "data-sidebar": "menu-action",
    className: N(
      "absolute right-1 top-1.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 peer-hover/menu-button:text-sidebar-accent-foreground [&>svg]:size-4 [&>svg]:shrink-0",
      // Increases the hit area of the button on mobile.
      "after:absolute after:-inset-2 after:md:hidden",
      "peer-data-[size=sm]/menu-button:top-1",
      "peer-data-[size=default]/menu-button:top-1.5",
      "peer-data-[size=lg]/menu-button:top-2.5",
      "group-data-[collapsible=icon]:hidden",
      n && "group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 peer-data-[active=true]/menu-button:text-sidebar-accent-foreground md:opacity-0",
      e
    ),
    ...r
  }
));
x2.displayName = "SidebarMenuAction";
const C2 = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p(
  "div",
  {
    ref: n,
    "data-sidebar": "menu-badge",
    className: N(
      "absolute right-1 flex h-5 min-w-5 items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums text-sidebar-foreground select-none pointer-events-none",
      "peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground",
      "peer-data-[size=sm]/menu-button:top-1",
      "peer-data-[size=default]/menu-button:top-1.5",
      "peer-data-[size=lg]/menu-button:top-2.5",
      "group-data-[collapsible=icon]:hidden",
      e
    ),
    ...t
  }
));
C2.displayName = "SidebarMenuBadge";
const P2 = l.forwardRef(({ className: e, showIcon: t = !1, ...n }, r) => {
  const o = l.useMemo(() => `${Math.floor(Math.random() * 40) + 50}%`, []);
  return /* @__PURE__ */ te(
    "div",
    {
      ref: r,
      "data-sidebar": "menu-skeleton",
      className: N("rounded-md h-8 flex gap-2 px-2 items-center", e),
      ...n,
      children: [
        t && /* @__PURE__ */ p(
          zl,
          {
            className: "size-4 rounded-md",
            "data-sidebar": "menu-skeleton-icon"
          }
        ),
        /* @__PURE__ */ p(
          zl,
          {
            className: "h-4 flex-1 max-w-[--skeleton-width]",
            "data-sidebar": "menu-skeleton-text",
            style: {
              "--skeleton-width": o
            }
          }
        )
      ]
    }
  );
});
P2.displayName = "SidebarMenuSkeleton";
const E2 = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p(
  "ul",
  {
    ref: n,
    "data-sidebar": "menu-sub",
    className: N(
      "mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l border-sidebar-border px-2.5 py-0.5",
      "group-data-[collapsible=icon]:hidden",
      e
    ),
    ...t
  }
));
E2.displayName = "SidebarMenuSub";
const _2 = l.forwardRef(({ ...e }, t) => /* @__PURE__ */ p("li", { ref: t, ...e }));
_2.displayName = "SidebarMenuSubItem";
const R2 = l.forwardRef(({ asChild: e = !1, size: t = "md", isActive: n, className: r, ...o }, a) => /* @__PURE__ */ p(
  e ? jn : "a",
  {
    ref: a,
    "data-sidebar": "menu-sub-button",
    "data-size": t,
    "data-active": n,
    className: N(
      "flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 text-sidebar-foreground outline-none ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-sidebar-accent-foreground",
      "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground",
      t === "sm" && "text-xs",
      t === "md" && "text-sm",
      "group-data-[collapsible=icon]:hidden",
      r
    ),
    ...o
  }
));
R2.displayName = "SidebarMenuSubButton";
function Sn(e) {
  const t = e + "CollectionProvider", [n, r] = be(t), [o, a] = n(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), i = (h) => {
    const { scope: v, children: y } = h, w = A.useRef(null), S = A.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ p(o, { scope: v, itemMap: S, collectionRef: w, children: y });
  };
  i.displayName = t;
  const s = e + "CollectionSlot", c = ln(s), u = A.forwardRef(
    (h, v) => {
      const { scope: y, children: w } = h, S = a(s, y), x = ne(v, S.collectionRef);
      return /* @__PURE__ */ p(c, { ref: x, children: w });
    }
  );
  u.displayName = s;
  const d = e + "CollectionItemSlot", f = "data-radix-collection-item", m = ln(d), b = A.forwardRef(
    (h, v) => {
      const { scope: y, children: w, ...S } = h, x = A.useRef(null), P = ne(v, x), E = a(d, y);
      return A.useEffect(() => (E.itemMap.set(x, { ref: x, ...S }), () => void E.itemMap.delete(x))), /* @__PURE__ */ p(m, { [f]: "", ref: P, children: w });
    }
  );
  b.displayName = d;
  function g(h) {
    const v = a(e + "CollectionConsumer", h);
    return A.useCallback(() => {
      const w = v.collectionRef.current;
      if (!w) return [];
      const S = Array.from(w.querySelectorAll(`[${f}]`));
      return Array.from(v.itemMap.values()).sort(
        (E, C) => S.indexOf(E.ref.current) - S.indexOf(C.ref.current)
      );
    }, [v.collectionRef, v.itemMap]);
  }
  return [
    { Provider: i, Slot: u, ItemSlot: b },
    g,
    r
  ];
}
var T2 = l.createContext(void 0);
function At(e) {
  const t = l.useContext(T2);
  return e || t || "ltr";
}
var Ni = "rovingFocusGroup.onEntryFocus", A2 = { bubbles: !1, cancelable: !0 }, Kr = "RovingFocusGroup", [xs, ym, N2] = Sn(Kr), [M2, Nt] = be(
  Kr,
  [N2]
), [O2, $2] = M2(Kr), wm = l.forwardRef(
  (e, t) => /* @__PURE__ */ p(xs.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ p(xs.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ p(I2, { ...e, ref: t }) }) })
);
wm.displayName = Kr;
var I2 = l.forwardRef((e, t) => {
  const {
    __scopeRovingFocusGroup: n,
    orientation: r,
    loop: o = !1,
    dir: a,
    currentTabStopId: i,
    defaultCurrentTabStopId: s,
    onCurrentTabStopIdChange: c,
    onEntryFocus: u,
    preventScrollOnEntryFocus: d = !1,
    ...f
  } = e, m = l.useRef(null), b = ne(t, m), g = At(a), [h, v] = xe({
    prop: i,
    defaultProp: s ?? null,
    onChange: c,
    caller: Kr
  }), [y, w] = l.useState(!1), S = Se(u), x = ym(n), P = l.useRef(!1), [E, C] = l.useState(0);
  return l.useEffect(() => {
    const T = m.current;
    if (T)
      return T.addEventListener(Ni, S), () => T.removeEventListener(Ni, S);
  }, [S]), /* @__PURE__ */ p(
    O2,
    {
      scope: n,
      orientation: r,
      dir: g,
      loop: o,
      currentTabStopId: h,
      onItemFocus: l.useCallback(
        (T) => v(T),
        [v]
      ),
      onItemShiftTab: l.useCallback(() => w(!0), []),
      onFocusableItemAdd: l.useCallback(
        () => C((T) => T + 1),
        []
      ),
      onFocusableItemRemove: l.useCallback(
        () => C((T) => T - 1),
        []
      ),
      children: /* @__PURE__ */ p(
        W.div,
        {
          tabIndex: y || E === 0 ? -1 : 0,
          "data-orientation": r,
          ...f,
          ref: b,
          style: { outline: "none", ...e.style },
          onMouseDown: k(e.onMouseDown, () => {
            P.current = !0;
          }),
          onFocus: k(e.onFocus, (T) => {
            const R = !P.current;
            if (T.target === T.currentTarget && R && !y) {
              const D = new CustomEvent(Ni, A2);
              if (T.currentTarget.dispatchEvent(D), !D.defaultPrevented) {
                const M = x().filter((L) => L.focusable), F = M.find((L) => L.active), $ = M.find((L) => L.id === h), z = [F, $, ...M].filter(
                  Boolean
                ).map((L) => L.ref.current);
                Cm(z, d);
              }
            }
            P.current = !1;
          }),
          onBlur: k(e.onBlur, () => w(!1))
        }
      )
    }
  );
}), Sm = "RovingFocusGroupItem", xm = l.forwardRef(
  (e, t) => {
    const {
      __scopeRovingFocusGroup: n,
      focusable: r = !0,
      active: o = !1,
      tabStopId: a,
      children: i,
      ...s
    } = e, c = $e(), u = a || c, d = $2(Sm, n), f = d.currentTabStopId === u, m = ym(n), { onFocusableItemAdd: b, onFocusableItemRemove: g, currentTabStopId: h } = d;
    return l.useEffect(() => {
      if (r)
        return b(), () => g();
    }, [r, b, g]), /* @__PURE__ */ p(
      xs.ItemSlot,
      {
        scope: n,
        id: u,
        focusable: r,
        active: o,
        children: /* @__PURE__ */ p(
          W.span,
          {
            tabIndex: f ? 0 : -1,
            "data-orientation": d.orientation,
            ...s,
            ref: t,
            onMouseDown: k(e.onMouseDown, (v) => {
              r ? d.onItemFocus(u) : v.preventDefault();
            }),
            onFocus: k(e.onFocus, () => d.onItemFocus(u)),
            onKeyDown: k(e.onKeyDown, (v) => {
              if (v.key === "Tab" && v.shiftKey) {
                d.onItemShiftTab();
                return;
              }
              if (v.target !== v.currentTarget) return;
              const y = L2(v, d.orientation, d.dir);
              if (y !== void 0) {
                if (v.metaKey || v.ctrlKey || v.altKey || v.shiftKey) return;
                v.preventDefault();
                let S = m().filter((x) => x.focusable).map((x) => x.ref.current);
                if (y === "last") S.reverse();
                else if (y === "prev" || y === "next") {
                  y === "prev" && S.reverse();
                  const x = S.indexOf(v.currentTarget);
                  S = d.loop ? F2(S, x + 1) : S.slice(x + 1);
                }
                setTimeout(() => Cm(S));
              }
            }),
            children: typeof i == "function" ? i({ isCurrentTabStop: f, hasTabStop: h != null }) : i
          }
        )
      }
    );
  }
);
xm.displayName = Sm;
var D2 = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function k2(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function L2(e, t, n) {
  const r = k2(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r)))
    return D2[r];
}
function Cm(e, t = !1) {
  const n = document.activeElement;
  for (const r of e)
    if (r === n || (r.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
function F2(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var Yr = wm, qr = xm, Pm = "Toggle", Oc = l.forwardRef((e, t) => {
  const { pressed: n, defaultPressed: r, onPressedChange: o, ...a } = e, [i, s] = xe({
    prop: n,
    onChange: o,
    defaultProp: r ?? !1,
    caller: Pm
  });
  return /* @__PURE__ */ p(
    W.button,
    {
      type: "button",
      "aria-pressed": i,
      "data-state": i ? "on" : "off",
      "data-disabled": e.disabled ? "" : void 0,
      ...a,
      ref: t,
      onClick: k(e.onClick, () => {
        e.disabled || s(!i);
      })
    }
  );
});
Oc.displayName = Pm;
var Em = Oc, Kt = "ToggleGroup", [_m, GU] = be(Kt, [
  Nt
]), Rm = Nt(), $c = A.forwardRef((e, t) => {
  const { type: n, ...r } = e;
  if (n === "single")
    return /* @__PURE__ */ p(B2, { ...r, ref: t });
  if (n === "multiple")
    return /* @__PURE__ */ p(z2, { ...r, ref: t });
  throw new Error(`Missing prop \`type\` expected on \`${Kt}\``);
});
$c.displayName = Kt;
var [Tm, Am] = _m(Kt), B2 = A.forwardRef((e, t) => {
  const {
    value: n,
    defaultValue: r,
    onValueChange: o = () => {
    },
    ...a
  } = e, [i, s] = xe({
    prop: n,
    defaultProp: r ?? "",
    onChange: o,
    caller: Kt
  });
  return /* @__PURE__ */ p(
    Tm,
    {
      scope: e.__scopeToggleGroup,
      type: "single",
      value: A.useMemo(() => i ? [i] : [], [i]),
      onItemActivate: s,
      onItemDeactivate: A.useCallback(() => s(""), [s]),
      children: /* @__PURE__ */ p(Nm, { ...a, ref: t })
    }
  );
}), z2 = A.forwardRef((e, t) => {
  const {
    value: n,
    defaultValue: r,
    onValueChange: o = () => {
    },
    ...a
  } = e, [i, s] = xe({
    prop: n,
    defaultProp: r ?? [],
    onChange: o,
    caller: Kt
  }), c = A.useCallback(
    (d) => s((f = []) => [...f, d]),
    [s]
  ), u = A.useCallback(
    (d) => s((f = []) => f.filter((m) => m !== d)),
    [s]
  );
  return /* @__PURE__ */ p(
    Tm,
    {
      scope: e.__scopeToggleGroup,
      type: "multiple",
      value: i,
      onItemActivate: c,
      onItemDeactivate: u,
      children: /* @__PURE__ */ p(Nm, { ...a, ref: t })
    }
  );
});
$c.displayName = Kt;
var [H2, j2] = _m(Kt), Nm = A.forwardRef(
  (e, t) => {
    const {
      __scopeToggleGroup: n,
      disabled: r = !1,
      rovingFocus: o = !0,
      orientation: a,
      dir: i,
      loop: s = !0,
      ...c
    } = e, u = Rm(n), d = At(i), f = { role: "group", dir: d, ...c };
    return /* @__PURE__ */ p(H2, { scope: n, rovingFocus: o, disabled: r, children: o ? /* @__PURE__ */ p(
      Yr,
      {
        asChild: !0,
        ...u,
        orientation: a,
        dir: d,
        loop: s,
        children: /* @__PURE__ */ p(W.div, { ...f, ref: t })
      }
    ) : /* @__PURE__ */ p(W.div, { ...f, ref: t }) });
  }
), qo = "ToggleGroupItem", Mm = A.forwardRef(
  (e, t) => {
    const n = Am(qo, e.__scopeToggleGroup), r = j2(qo, e.__scopeToggleGroup), o = Rm(e.__scopeToggleGroup), a = n.value.includes(e.value), i = r.disabled || e.disabled, s = { ...e, pressed: a, disabled: i }, c = A.useRef(null);
    return r.rovingFocus ? /* @__PURE__ */ p(
      qr,
      {
        asChild: !0,
        ...o,
        focusable: !i,
        active: a,
        ref: c,
        children: /* @__PURE__ */ p(yd, { ...s, ref: t })
      }
    ) : /* @__PURE__ */ p(yd, { ...s, ref: t });
  }
);
Mm.displayName = qo;
var yd = A.forwardRef(
  (e, t) => {
    const { __scopeToggleGroup: n, value: r, ...o } = e, a = Am(qo, n), i = { role: "radio", "aria-checked": e.pressed, "aria-pressed": void 0 }, s = a.type === "single" ? i : void 0;
    return /* @__PURE__ */ p(
      Oc,
      {
        ...s,
        ...o,
        ref: t,
        onPressedChange: (c) => {
          c ? a.onItemActivate(r) : a.onItemDeactivate(r);
        }
      }
    );
  }
), Om = $c, $m = Mm;
const Im = $r(
  "inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline: "border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground"
      },
      size: {
        default: "h-9 px-2 min-w-9",
        sm: "h-8 px-1.5 min-w-8",
        lg: "h-10 px-2.5 min-w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), V2 = l.forwardRef(({ className: e, variant: t, size: n, ...r }, o) => /* @__PURE__ */ p(
  Em,
  {
    ref: o,
    className: N(Im({ variant: t, size: n, className: e })),
    ...r
  }
));
V2.displayName = Em.displayName;
const Dm = l.createContext({
  size: "default",
  variant: "default"
}), G2 = l.forwardRef(({ className: e, variant: t, size: n, children: r, ...o }, a) => /* @__PURE__ */ p(
  Om,
  {
    ref: a,
    className: N("flex items-center justify-center gap-1", e),
    ...o,
    children: /* @__PURE__ */ p(Dm.Provider, { value: { variant: t, size: n }, children: r })
  }
));
G2.displayName = Om.displayName;
const U2 = l.forwardRef(({ className: e, children: t, variant: n, size: r, ...o }, a) => {
  const i = l.useContext(Dm);
  return /* @__PURE__ */ p(
    $m,
    {
      ref: a,
      className: N(
        Im({
          variant: i.variant || n,
          size: i.size || r
        }),
        e
      ),
      ...o,
      children: t
    }
  );
});
U2.displayName = $m.displayName;
var Fa = "Collapsible", [W2, km] = be(Fa), [K2, Ic] = W2(Fa), Lm = l.forwardRef(
  (e, t) => {
    const {
      __scopeCollapsible: n,
      open: r,
      defaultOpen: o,
      disabled: a,
      onOpenChange: i,
      ...s
    } = e, [c, u] = xe({
      prop: r,
      defaultProp: o ?? !1,
      onChange: i,
      caller: Fa
    });
    return /* @__PURE__ */ p(
      K2,
      {
        scope: n,
        disabled: a,
        contentId: $e(),
        open: c,
        onOpenToggle: l.useCallback(() => u((d) => !d), [u]),
        children: /* @__PURE__ */ p(
          W.div,
          {
            "data-state": Fc(c),
            "data-disabled": a ? "" : void 0,
            ...s,
            ref: t
          }
        )
      }
    );
  }
);
Lm.displayName = Fa;
var Fm = "CollapsibleTrigger", Dc = l.forwardRef(
  (e, t) => {
    const { __scopeCollapsible: n, ...r } = e, o = Ic(Fm, n);
    return /* @__PURE__ */ p(
      W.button,
      {
        type: "button",
        "aria-controls": o.contentId,
        "aria-expanded": o.open || !1,
        "data-state": Fc(o.open),
        "data-disabled": o.disabled ? "" : void 0,
        disabled: o.disabled,
        ...r,
        ref: t,
        onClick: k(e.onClick, o.onOpenToggle)
      }
    );
  }
);
Dc.displayName = Fm;
var kc = "CollapsibleContent", Lc = l.forwardRef(
  (e, t) => {
    const { forceMount: n, ...r } = e, o = Ic(kc, e.__scopeCollapsible);
    return /* @__PURE__ */ p(Re, { present: n || o.open, children: ({ present: a }) => /* @__PURE__ */ p(Y2, { ...r, ref: t, present: a }) });
  }
);
Lc.displayName = kc;
var Y2 = l.forwardRef((e, t) => {
  const { __scopeCollapsible: n, present: r, children: o, ...a } = e, i = Ic(kc, n), [s, c] = l.useState(r), u = l.useRef(null), d = ne(t, u), f = l.useRef(0), m = f.current, b = l.useRef(0), g = b.current, h = i.open || s, v = l.useRef(h), y = l.useRef(void 0);
  return l.useEffect(() => {
    const w = requestAnimationFrame(() => v.current = !1);
    return () => cancelAnimationFrame(w);
  }, []), _e(() => {
    const w = u.current;
    if (w) {
      y.current = y.current || {
        transitionDuration: w.style.transitionDuration,
        animationName: w.style.animationName
      }, w.style.transitionDuration = "0s", w.style.animationName = "none";
      const S = w.getBoundingClientRect();
      f.current = S.height, b.current = S.width, v.current || (w.style.transitionDuration = y.current.transitionDuration, w.style.animationName = y.current.animationName), c(r);
    }
  }, [i.open, r]), /* @__PURE__ */ p(
    W.div,
    {
      "data-state": Fc(i.open),
      "data-disabled": i.disabled ? "" : void 0,
      id: i.contentId,
      hidden: !h,
      ...a,
      ref: d,
      style: {
        "--radix-collapsible-content-height": m ? `${m}px` : void 0,
        "--radix-collapsible-content-width": g ? `${g}px` : void 0,
        ...e.style
      },
      children: h && o
    }
  );
});
function Fc(e) {
  return e ? "open" : "closed";
}
var Bm = Lm, q2 = Dc, X2 = Lc, gt = "Accordion", Z2 = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"], [Bc, J2, Q2] = Sn(gt), [Ba, UU] = be(gt, [
  Q2,
  km
]), zc = km(), zm = A.forwardRef(
  (e, t) => {
    const { type: n, ...r } = e, o = r, a = r;
    return /* @__PURE__ */ p(Bc.Provider, { scope: e.__scopeAccordion, children: n === "multiple" ? /* @__PURE__ */ p(rF, { ...a, ref: t }) : /* @__PURE__ */ p(nF, { ...o, ref: t }) });
  }
);
zm.displayName = gt;
var [Hm, eF] = Ba(gt), [jm, tF] = Ba(
  gt,
  { collapsible: !1 }
), nF = A.forwardRef(
  (e, t) => {
    const {
      value: n,
      defaultValue: r,
      onValueChange: o = () => {
      },
      collapsible: a = !1,
      ...i
    } = e, [s, c] = xe({
      prop: n,
      defaultProp: r ?? "",
      onChange: o,
      caller: gt
    });
    return /* @__PURE__ */ p(
      Hm,
      {
        scope: e.__scopeAccordion,
        value: A.useMemo(() => s ? [s] : [], [s]),
        onItemOpen: c,
        onItemClose: A.useCallback(() => a && c(""), [a, c]),
        children: /* @__PURE__ */ p(jm, { scope: e.__scopeAccordion, collapsible: a, children: /* @__PURE__ */ p(Vm, { ...i, ref: t }) })
      }
    );
  }
), rF = A.forwardRef((e, t) => {
  const {
    value: n,
    defaultValue: r,
    onValueChange: o = () => {
    },
    ...a
  } = e, [i, s] = xe({
    prop: n,
    defaultProp: r ?? [],
    onChange: o,
    caller: gt
  }), c = A.useCallback(
    (d) => s((f = []) => [...f, d]),
    [s]
  ), u = A.useCallback(
    (d) => s((f = []) => f.filter((m) => m !== d)),
    [s]
  );
  return /* @__PURE__ */ p(
    Hm,
    {
      scope: e.__scopeAccordion,
      value: i,
      onItemOpen: c,
      onItemClose: u,
      children: /* @__PURE__ */ p(jm, { scope: e.__scopeAccordion, collapsible: !0, children: /* @__PURE__ */ p(Vm, { ...a, ref: t }) })
    }
  );
}), [oF, za] = Ba(gt), Vm = A.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, disabled: r, dir: o, orientation: a = "vertical", ...i } = e, s = A.useRef(null), c = ne(s, t), u = J2(n), f = At(o) === "ltr", m = k(e.onKeyDown, (b) => {
      if (!Z2.includes(b.key)) return;
      const g = b.target, h = u().filter((T) => !T.ref.current?.disabled), v = h.findIndex((T) => T.ref.current === g), y = h.length;
      if (v === -1) return;
      b.preventDefault();
      let w = v;
      const S = 0, x = y - 1, P = () => {
        w = v + 1, w > x && (w = S);
      }, E = () => {
        w = v - 1, w < S && (w = x);
      };
      switch (b.key) {
        case "Home":
          w = S;
          break;
        case "End":
          w = x;
          break;
        case "ArrowRight":
          a === "horizontal" && (f ? P() : E());
          break;
        case "ArrowDown":
          a === "vertical" && P();
          break;
        case "ArrowLeft":
          a === "horizontal" && (f ? E() : P());
          break;
        case "ArrowUp":
          a === "vertical" && E();
          break;
      }
      const C = w % y;
      h[C].ref.current?.focus();
    });
    return /* @__PURE__ */ p(
      oF,
      {
        scope: n,
        disabled: r,
        direction: o,
        orientation: a,
        children: /* @__PURE__ */ p(Bc.Slot, { scope: n, children: /* @__PURE__ */ p(
          W.div,
          {
            ...i,
            "data-orientation": a,
            ref: c,
            onKeyDown: r ? void 0 : m
          }
        ) })
      }
    );
  }
), Xo = "AccordionItem", [aF, Hc] = Ba(Xo), Gm = A.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, value: r, ...o } = e, a = za(Xo, n), i = eF(Xo, n), s = zc(n), c = $e(), u = r && i.value.includes(r) || !1, d = a.disabled || e.disabled;
    return /* @__PURE__ */ p(
      aF,
      {
        scope: n,
        open: u,
        disabled: d,
        triggerId: c,
        children: /* @__PURE__ */ p(
          Bm,
          {
            "data-orientation": a.orientation,
            "data-state": Xm(u),
            ...s,
            ...o,
            ref: t,
            disabled: d,
            open: u,
            onOpenChange: (f) => {
              f ? i.onItemOpen(r) : i.onItemClose(r);
            }
          }
        )
      }
    );
  }
);
Gm.displayName = Xo;
var Um = "AccordionHeader", Wm = A.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, ...r } = e, o = za(gt, n), a = Hc(Um, n);
    return /* @__PURE__ */ p(
      W.h3,
      {
        "data-orientation": o.orientation,
        "data-state": Xm(a.open),
        "data-disabled": a.disabled ? "" : void 0,
        ...r,
        ref: t
      }
    );
  }
);
Wm.displayName = Um;
var Cs = "AccordionTrigger", Km = A.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, ...r } = e, o = za(gt, n), a = Hc(Cs, n), i = tF(Cs, n), s = zc(n);
    return /* @__PURE__ */ p(Bc.ItemSlot, { scope: n, children: /* @__PURE__ */ p(
      q2,
      {
        "aria-disabled": a.open && !i.collapsible || void 0,
        "data-orientation": o.orientation,
        id: a.triggerId,
        ...s,
        ...r,
        ref: t
      }
    ) });
  }
);
Km.displayName = Cs;
var Ym = "AccordionContent", qm = A.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, ...r } = e, o = za(gt, n), a = Hc(Ym, n), i = zc(n);
    return /* @__PURE__ */ p(
      X2,
      {
        role: "region",
        "aria-labelledby": a.triggerId,
        "data-orientation": o.orientation,
        ...i,
        ...r,
        ref: t,
        style: {
          "--radix-accordion-content-height": "var(--radix-collapsible-content-height)",
          "--radix-accordion-content-width": "var(--radix-collapsible-content-width)",
          ...e.style
        }
      }
    );
  }
);
qm.displayName = Ym;
function Xm(e) {
  return e ? "open" : "closed";
}
var iF = zm, sF = Gm, cF = Wm, Zm = Km, Jm = qm;
const WU = iF, lF = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p(
  sF,
  {
    ref: n,
    className: N("border-b", e),
    ...t
  }
));
lF.displayName = "AccordionItem";
const uF = l.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ p(cF, { className: "flex", children: /* @__PURE__ */ te(
  Zm,
  {
    ref: r,
    className: N(
      "flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180",
      e
    ),
    ...n,
    children: [
      t,
      /* @__PURE__ */ p(Ks, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })
    ]
  }
) }));
uF.displayName = Zm.displayName;
const dF = l.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ p(
  Jm,
  {
    ref: r,
    className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...n,
    children: /* @__PURE__ */ p("div", { className: N("pb-4 pt-0", e), children: t })
  }
));
dF.displayName = Jm.displayName;
var Qm = "AlertDialog", [fF, KU] = be(Qm, [
  Cp
]), Lt = Cp(), eh = (e) => {
  const { __scopeAlertDialog: t, ...n } = e, r = Lt(t);
  return /* @__PURE__ */ p(Ta, { ...r, ...n, modal: !0 });
};
eh.displayName = Qm;
var pF = "AlertDialogTrigger", th = l.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: n, ...r } = e, o = Lt(n);
    return /* @__PURE__ */ p(Aa, { ...o, ...r, ref: t });
  }
);
th.displayName = pF;
var mF = "AlertDialogPortal", nh = (e) => {
  const { __scopeAlertDialog: t, ...n } = e, r = Lt(t);
  return /* @__PURE__ */ p(Na, { ...r, ...n });
};
nh.displayName = mF;
var hF = "AlertDialogOverlay", rh = l.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: n, ...r } = e, o = Lt(n);
    return /* @__PURE__ */ p(Yn, { ...o, ...r, ref: t });
  }
);
rh.displayName = hF;
var Mn = "AlertDialogContent", [vF, gF] = fF(Mn), bF = jd("AlertDialogContent"), oh = l.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: n, children: r, ...o } = e, a = Lt(n), i = l.useRef(null), s = ne(t, i), c = l.useRef(null);
    return /* @__PURE__ */ p(
      lk,
      {
        contentName: Mn,
        titleName: ah,
        docsSlug: "alert-dialog",
        children: /* @__PURE__ */ p(vF, { scope: n, cancelRef: c, children: /* @__PURE__ */ te(
          qn,
          {
            role: "alertdialog",
            ...a,
            ...o,
            ref: s,
            onOpenAutoFocus: k(o.onOpenAutoFocus, (u) => {
              u.preventDefault(), c.current?.focus({ preventScroll: !0 });
            }),
            onPointerDownOutside: (u) => u.preventDefault(),
            onInteractOutside: (u) => u.preventDefault(),
            children: [
              /* @__PURE__ */ p(bF, { children: r }),
              /* @__PURE__ */ p(wF, { contentRef: i })
            ]
          }
        ) })
      }
    );
  }
);
oh.displayName = Mn;
var ah = "AlertDialogTitle", ih = l.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: n, ...r } = e, o = Lt(n);
    return /* @__PURE__ */ p(Xn, { ...o, ...r, ref: t });
  }
);
ih.displayName = ah;
var sh = "AlertDialogDescription", ch = l.forwardRef((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, o = Lt(n);
  return /* @__PURE__ */ p(Zn, { ...o, ...r, ref: t });
});
ch.displayName = sh;
var yF = "AlertDialogAction", lh = l.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: n, ...r } = e, o = Lt(n);
    return /* @__PURE__ */ p(wn, { ...o, ...r, ref: t });
  }
);
lh.displayName = yF;
var uh = "AlertDialogCancel", dh = l.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: n, ...r } = e, { cancelRef: o } = gF(uh, n), a = Lt(n), i = ne(t, o);
    return /* @__PURE__ */ p(wn, { ...a, ...r, ref: i });
  }
);
dh.displayName = uh;
var wF = ({ contentRef: e }) => {
  const t = `\`${Mn}\` requires a description for the component to be accessible for screen reader users.

You can add a description to the \`${Mn}\` by passing a \`${sh}\` component as a child, which also benefits sighted users by adding visible context to the dialog.

Alternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${Mn}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.

For more information, see https://radix-ui.com/primitives/docs/components/alert-dialog`;
  return l.useEffect(() => {
    document.getElementById(
      e.current?.getAttribute("aria-describedby")
    ) || console.warn(t);
  }, [t, e]), null;
}, SF = eh, xF = th, CF = nh, fh = rh, ph = oh, mh = lh, hh = dh, vh = ih, gh = ch;
const YU = SF, qU = xF, PF = CF, bh = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p(
  fh,
  {
    className: N(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t,
    ref: n
  }
));
bh.displayName = fh.displayName;
const EF = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ te(PF, { children: [
  /* @__PURE__ */ p(bh, {}),
  /* @__PURE__ */ p(
    ph,
    {
      ref: n,
      className: N(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        e
      ),
      ...t
    }
  )
] }));
EF.displayName = ph.displayName;
const _F = ({
  className: e,
  ...t
}) => /* @__PURE__ */ p(
  "div",
  {
    className: N(
      "flex flex-col space-y-2 text-center sm:text-left",
      e
    ),
    ...t
  }
);
_F.displayName = "AlertDialogHeader";
const RF = ({
  className: e,
  ...t
}) => /* @__PURE__ */ p(
  "div",
  {
    className: N(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
);
RF.displayName = "AlertDialogFooter";
const TF = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p(
  vh,
  {
    ref: n,
    className: N("text-lg font-semibold", e),
    ...t
  }
));
TF.displayName = vh.displayName;
const AF = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p(
  gh,
  {
    ref: n,
    className: N("text-sm text-muted-foreground", e),
    ...t
  }
));
AF.displayName = gh.displayName;
const NF = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p(
  mh,
  {
    ref: n,
    className: N(Vd(), e),
    ...t
  }
));
NF.displayName = mh.displayName;
const MF = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p(
  hh,
  {
    ref: n,
    className: N(
      Vd({ variant: "outline" }),
      "mt-2 sm:mt-0",
      e
    ),
    ...t
  }
));
MF.displayName = hh.displayName;
var OF = "AspectRatio", yh = l.forwardRef(
  (e, t) => {
    const { ratio: n = 1 / 1, style: r, ...o } = e;
    return /* @__PURE__ */ p(
      "div",
      {
        style: {
          // ensures inner element is contained
          position: "relative",
          // ensures padding bottom trick maths works
          width: "100%",
          paddingBottom: `${100 / n}%`
        },
        "data-radix-aspect-ratio-wrapper": "",
        children: /* @__PURE__ */ p(
          W.div,
          {
            ...o,
            ref: t,
            style: {
              ...r,
              // ensures children expand in ratio
              position: "absolute",
              top: 0,
              right: 0,
              bottom: 0,
              left: 0
            }
          }
        )
      }
    );
  }
);
yh.displayName = OF;
var $F = yh;
const XU = $F;
function IF() {
  return gS(
    DF,
    () => !0,
    () => !1
  );
}
function DF() {
  return () => {
  };
}
var jc = "Avatar", [kF, ZU] = be(jc), [LF, wh] = kF(jc), Sh = l.forwardRef(
  (e, t) => {
    const { __scopeAvatar: n, ...r } = e, [o, a] = l.useState("idle");
    return /* @__PURE__ */ p(
      LF,
      {
        scope: n,
        imageLoadingStatus: o,
        onImageLoadingStatusChange: a,
        children: /* @__PURE__ */ p(W.span, { ...r, ref: t })
      }
    );
  }
);
Sh.displayName = jc;
var xh = "AvatarImage", Ch = l.forwardRef(
  (e, t) => {
    const { __scopeAvatar: n, src: r, onLoadingStatusChange: o = () => {
    }, ...a } = e, i = wh(xh, n), s = FF(r, a), c = Se((u) => {
      o(u), i.onImageLoadingStatusChange(u);
    });
    return _e(() => {
      s !== "idle" && c(s);
    }, [s, c]), s === "loaded" ? /* @__PURE__ */ p(W.img, { ...a, ref: t, src: r }) : null;
  }
);
Ch.displayName = xh;
var Ph = "AvatarFallback", Eh = l.forwardRef(
  (e, t) => {
    const { __scopeAvatar: n, delayMs: r, ...o } = e, a = wh(Ph, n), [i, s] = l.useState(r === void 0);
    return l.useEffect(() => {
      if (r !== void 0) {
        const c = window.setTimeout(() => s(!0), r);
        return () => window.clearTimeout(c);
      }
    }, [r]), i && a.imageLoadingStatus !== "loaded" ? /* @__PURE__ */ p(W.span, { ...o, ref: t }) : null;
  }
);
Eh.displayName = Ph;
function wd(e, t) {
  return e ? t ? (e.src !== t && (e.src = t), e.complete && e.naturalWidth > 0 ? "loaded" : "loading") : "error" : "idle";
}
function FF(e, { referrerPolicy: t, crossOrigin: n }) {
  const r = IF(), o = l.useRef(null), a = r ? (o.current || (o.current = new window.Image()), o.current) : null, [i, s] = l.useState(
    () => wd(a, e)
  );
  return _e(() => {
    s(wd(a, e));
  }, [a, e]), _e(() => {
    const c = (f) => () => {
      s(f);
    };
    if (!a) return;
    const u = c("loaded"), d = c("error");
    return a.addEventListener("load", u), a.addEventListener("error", d), t && (a.referrerPolicy = t), typeof n == "string" && (a.crossOrigin = n), () => {
      a.removeEventListener("load", u), a.removeEventListener("error", d);
    };
  }, [a, n, t]), i;
}
var _h = Sh, Rh = Ch, Th = Eh;
const BF = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p(
  _h,
  {
    ref: n,
    className: N(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      e
    ),
    ...t
  }
));
BF.displayName = _h.displayName;
const zF = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p(
  Rh,
  {
    ref: n,
    className: N("aspect-square h-full w-full", e),
    ...t
  }
));
zF.displayName = Rh.displayName;
const HF = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p(
  Th,
  {
    ref: n,
    className: N(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      e
    ),
    ...t
  }
));
HF.displayName = Th.displayName;
function Xr(e) {
  const t = l.useRef({ value: e, previous: e });
  return l.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
var Ha = "Checkbox", [jF, JU] = be(Ha), [VF, Vc] = jF(Ha);
function GF(e) {
  const {
    __scopeCheckbox: t,
    checked: n,
    children: r,
    defaultChecked: o,
    disabled: a,
    form: i,
    name: s,
    onCheckedChange: c,
    required: u,
    value: d = "on",
    // @ts-expect-error
    internal_do_not_use_render: f
  } = e, [m, b] = xe({
    prop: n,
    defaultProp: o ?? !1,
    onChange: c,
    caller: Ha
  }), [g, h] = l.useState(null), [v, y] = l.useState(null), w = l.useRef(!1), S = g ? !!i || !!g.closest("form") : (
    // We set this to true by default so that events bubble to forms without JS (SSR)
    !0
  ), x = {
    checked: m,
    disabled: a,
    setChecked: b,
    control: g,
    setControl: h,
    name: s,
    form: i,
    value: d,
    hasConsumerStoppedPropagationRef: w,
    required: u,
    defaultChecked: jt(o) ? !1 : o,
    isFormControl: S,
    bubbleInput: v,
    setBubbleInput: y
  };
  return /* @__PURE__ */ p(
    VF,
    {
      scope: t,
      ...x,
      children: UF(f) ? f(x) : r
    }
  );
}
var Ah = "CheckboxTrigger", Nh = l.forwardRef(
  ({ __scopeCheckbox: e, onKeyDown: t, onClick: n, ...r }, o) => {
    const {
      control: a,
      value: i,
      disabled: s,
      checked: c,
      required: u,
      setControl: d,
      setChecked: f,
      hasConsumerStoppedPropagationRef: m,
      isFormControl: b,
      bubbleInput: g
    } = Vc(Ah, e), h = ne(o, d), v = l.useRef(c);
    return l.useEffect(() => {
      const y = a?.form;
      if (y) {
        const w = () => f(v.current);
        return y.addEventListener("reset", w), () => y.removeEventListener("reset", w);
      }
    }, [a, f]), /* @__PURE__ */ p(
      W.button,
      {
        type: "button",
        role: "checkbox",
        "aria-checked": jt(c) ? "mixed" : c,
        "aria-required": u,
        "data-state": Dh(c),
        "data-disabled": s ? "" : void 0,
        disabled: s,
        value: i,
        ...r,
        ref: h,
        onKeyDown: k(t, (y) => {
          y.key === "Enter" && y.preventDefault();
        }),
        onClick: k(n, (y) => {
          f((w) => jt(w) ? !0 : !w), g && b && (m.current = y.isPropagationStopped(), m.current || y.stopPropagation());
        })
      }
    );
  }
);
Nh.displayName = Ah;
var Gc = l.forwardRef(
  (e, t) => {
    const {
      __scopeCheckbox: n,
      name: r,
      checked: o,
      defaultChecked: a,
      required: i,
      disabled: s,
      value: c,
      onCheckedChange: u,
      form: d,
      ...f
    } = e;
    return /* @__PURE__ */ p(
      GF,
      {
        __scopeCheckbox: n,
        checked: o,
        defaultChecked: a,
        disabled: s,
        required: i,
        onCheckedChange: u,
        name: r,
        form: d,
        value: c,
        internal_do_not_use_render: ({ isFormControl: m }) => /* @__PURE__ */ te(dt, { children: [
          /* @__PURE__ */ p(
            Nh,
            {
              ...f,
              ref: t,
              __scopeCheckbox: n
            }
          ),
          m && /* @__PURE__ */ p(
            Ih,
            {
              __scopeCheckbox: n
            }
          )
        ] })
      }
    );
  }
);
Gc.displayName = Ha;
var Mh = "CheckboxIndicator", Oh = l.forwardRef(
  (e, t) => {
    const { __scopeCheckbox: n, forceMount: r, ...o } = e, a = Vc(Mh, n);
    return /* @__PURE__ */ p(
      Re,
      {
        present: r || jt(a.checked) || a.checked === !0,
        children: /* @__PURE__ */ p(
          W.span,
          {
            "data-state": Dh(a.checked),
            "data-disabled": a.disabled ? "" : void 0,
            ...o,
            ref: t,
            style: { pointerEvents: "none", ...e.style }
          }
        )
      }
    );
  }
);
Oh.displayName = Mh;
var $h = "CheckboxBubbleInput", Ih = l.forwardRef(
  ({ __scopeCheckbox: e, ...t }, n) => {
    const {
      control: r,
      hasConsumerStoppedPropagationRef: o,
      checked: a,
      defaultChecked: i,
      required: s,
      disabled: c,
      name: u,
      value: d,
      form: f,
      bubbleInput: m,
      setBubbleInput: b
    } = Vc($h, e), g = ne(n, b), h = Xr(a), v = Vr(r);
    l.useEffect(() => {
      const w = m;
      if (!w) return;
      const S = window.HTMLInputElement.prototype, P = Object.getOwnPropertyDescriptor(
        S,
        "checked"
      ).set, E = !o.current;
      if (h !== a && P) {
        const C = new Event("click", { bubbles: E });
        w.indeterminate = jt(a), P.call(w, jt(a) ? !1 : a), w.dispatchEvent(C);
      }
    }, [m, h, a, o]);
    const y = l.useRef(jt(a) ? !1 : a);
    return /* @__PURE__ */ p(
      W.input,
      {
        type: "checkbox",
        "aria-hidden": !0,
        defaultChecked: i ?? y.current,
        required: s,
        disabled: c,
        name: u,
        value: d,
        form: f,
        ...t,
        tabIndex: -1,
        ref: g,
        style: {
          ...t.style,
          ...v,
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0,
          // We transform because the input is absolutely positioned but we have
          // rendered it **after** the button. This pulls it back to sit on top
          // of the button.
          transform: "translateX(-100%)"
        }
      }
    );
  }
);
Ih.displayName = $h;
function UF(e) {
  return typeof e == "function";
}
function jt(e) {
  return e === "indeterminate";
}
function Dh(e) {
  return jt(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
const WF = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p(
  Gc,
  {
    ref: n,
    className: N(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      e
    ),
    ...t,
    children: /* @__PURE__ */ p(
      Oh,
      {
        className: N("flex items-center justify-center text-current"),
        children: /* @__PURE__ */ p(Dr, { className: "h-4 w-4" })
      }
    )
  }
));
WF.displayName = Gc.displayName;
const QU = Bm, eW = Dc, tW = Lc;
var Ps = ["Enter", " "], KF = ["ArrowDown", "PageUp", "Home"], kh = ["ArrowUp", "PageDown", "End"], YF = [...KF, ...kh], qF = {
  ltr: [...Ps, "ArrowRight"],
  rtl: [...Ps, "ArrowLeft"]
}, XF = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
}, Zr = "Menu", [Tr, ZF, JF] = Sn(Zr), [xn, Jr] = be(Zr, [
  JF,
  Tt,
  Nt
]), Qr = Tt(), Lh = Nt(), [Fh, Yt] = xn(Zr), [QF, eo] = xn(Zr), Bh = (e) => {
  const { __scopeMenu: t, open: n = !1, children: r, dir: o, onOpenChange: a, modal: i = !0 } = e, s = Qr(t), [c, u] = l.useState(null), d = l.useRef(!1), f = Se(a), m = At(o);
  return l.useEffect(() => {
    const b = () => {
      d.current = !0, document.addEventListener("pointerdown", g, { capture: !0, once: !0 }), document.addEventListener("pointermove", g, { capture: !0, once: !0 });
    }, g = () => d.current = !1;
    return document.addEventListener("keydown", b, { capture: !0 }), () => {
      document.removeEventListener("keydown", b, { capture: !0 }), document.removeEventListener("pointerdown", g, { capture: !0 }), document.removeEventListener("pointermove", g, { capture: !0 });
    };
  }, []), /* @__PURE__ */ p(er, { ...s, children: /* @__PURE__ */ p(
    Fh,
    {
      scope: t,
      open: n,
      onOpenChange: f,
      content: c,
      onContentChange: u,
      children: /* @__PURE__ */ p(
        QF,
        {
          scope: t,
          onClose: l.useCallback(() => f(!1), [f]),
          isUsingKeyboardRef: d,
          dir: m,
          modal: i,
          children: r
        }
      )
    }
  ) });
};
Bh.displayName = Zr;
var eB = "MenuAnchor", Uc = l.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e, o = Qr(n);
    return /* @__PURE__ */ p(tr, { ...o, ...r, ref: t });
  }
);
Uc.displayName = eB;
var Wc = "MenuPortal", [tB, zh] = xn(Wc, {
  forceMount: void 0
}), Hh = (e) => {
  const { __scopeMenu: t, forceMount: n, children: r, container: o } = e, a = Yt(Wc, t);
  return /* @__PURE__ */ p(tB, { scope: t, forceMount: n, children: /* @__PURE__ */ p(Re, { present: n || a.open, children: /* @__PURE__ */ p(yn, { asChild: !0, container: o, children: r }) }) });
};
Hh.displayName = Wc;
var tt = "MenuContent", [nB, Kc] = xn(tt), jh = l.forwardRef(
  (e, t) => {
    const n = zh(tt, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, a = Yt(tt, e.__scopeMenu), i = eo(tt, e.__scopeMenu);
    return /* @__PURE__ */ p(Tr.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ p(Re, { present: r || a.open, children: /* @__PURE__ */ p(Tr.Slot, { scope: e.__scopeMenu, children: i.modal ? /* @__PURE__ */ p(rB, { ...o, ref: t }) : /* @__PURE__ */ p(oB, { ...o, ref: t }) }) }) });
  }
), rB = l.forwardRef(
  (e, t) => {
    const n = Yt(tt, e.__scopeMenu), r = l.useRef(null), o = ne(t, r);
    return l.useEffect(() => {
      const a = r.current;
      if (a) return _a(a);
    }, []), /* @__PURE__ */ p(
      Yc,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: n.open,
        disableOutsideScroll: !0,
        onFocusOutside: k(
          e.onFocusOutside,
          (a) => a.preventDefault(),
          { checkForDefaultPrevented: !1 }
        ),
        onDismiss: () => n.onOpenChange(!1)
      }
    );
  }
), oB = l.forwardRef((e, t) => {
  const n = Yt(tt, e.__scopeMenu);
  return /* @__PURE__ */ p(
    Yc,
    {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => n.onOpenChange(!1)
    }
  );
}), aB = ln("MenuContent.ScrollLock"), Yc = l.forwardRef(
  (e, t) => {
    const {
      __scopeMenu: n,
      loop: r = !1,
      trapFocus: o,
      onOpenAutoFocus: a,
      onCloseAutoFocus: i,
      disableOutsidePointerEvents: s,
      onEntryFocus: c,
      onEscapeKeyDown: u,
      onPointerDownOutside: d,
      onFocusOutside: f,
      onInteractOutside: m,
      onDismiss: b,
      disableOutsideScroll: g,
      ...h
    } = e, v = Yt(tt, n), y = eo(tt, n), w = Qr(n), S = Lh(n), x = ZF(n), [P, E] = l.useState(null), C = l.useRef(null), T = ne(t, C, v.onContentChange), R = l.useRef(0), D = l.useRef(""), M = l.useRef(0), F = l.useRef(null), $ = l.useRef("right"), I = l.useRef(0), z = g ? Hr : l.Fragment, L = g ? { as: aB, allowPinchZoom: !0 } : void 0, U = (B) => {
      const oe = D.current + B, re = x().filter((O) => !O.disabled), ie = document.activeElement, j = re.find((O) => O.ref.current === ie)?.textValue, K = re.map((O) => O.textValue), J = gB(K, oe, j), Y = re.find((O) => O.textValue === J)?.ref.current;
      (function O(G) {
        D.current = G, window.clearTimeout(R.current), G !== "" && (R.current = window.setTimeout(() => O(""), 1e3));
      })(oe), Y && setTimeout(() => Y.focus());
    };
    l.useEffect(() => () => window.clearTimeout(R.current), []), Pa();
    const H = l.useCallback((B) => $.current === F.current?.side && yB(B, F.current?.area), []);
    return /* @__PURE__ */ p(
      nB,
      {
        scope: n,
        searchRef: D,
        onItemEnter: l.useCallback(
          (B) => {
            H(B) && B.preventDefault();
          },
          [H]
        ),
        onItemLeave: l.useCallback(
          (B) => {
            H(B) || (C.current?.focus(), E(null));
          },
          [H]
        ),
        onTriggerLeave: l.useCallback(
          (B) => {
            H(B) && B.preventDefault();
          },
          [H]
        ),
        pointerGraceTimerRef: M,
        onPointerGraceIntentChange: l.useCallback((B) => {
          F.current = B;
        }, []),
        children: /* @__PURE__ */ p(z, { ...L, children: /* @__PURE__ */ p(
          zr,
          {
            asChild: !0,
            trapped: o,
            onMountAutoFocus: k(a, (B) => {
              B.preventDefault(), C.current?.focus({ preventScroll: !0 });
            }),
            onUnmountAutoFocus: i,
            children: /* @__PURE__ */ p(
              Wt,
              {
                asChild: !0,
                disableOutsidePointerEvents: s,
                onEscapeKeyDown: u,
                onPointerDownOutside: d,
                onFocusOutside: f,
                onInteractOutside: m,
                onDismiss: b,
                children: /* @__PURE__ */ p(
                  Yr,
                  {
                    asChild: !0,
                    ...S,
                    dir: y.dir,
                    orientation: "vertical",
                    loop: r,
                    currentTabStopId: P,
                    onCurrentTabStopIdChange: E,
                    onEntryFocus: k(c, (B) => {
                      y.isUsingKeyboardRef.current || B.preventDefault();
                    }),
                    preventScrollOnEntryFocus: !0,
                    children: /* @__PURE__ */ p(
                      Gr,
                      {
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": av(v.open),
                        "data-radix-menu-content": "",
                        dir: y.dir,
                        ...w,
                        ...h,
                        ref: T,
                        style: { outline: "none", ...h.style },
                        onKeyDown: k(h.onKeyDown, (B) => {
                          const re = B.target.closest("[data-radix-menu-content]") === B.currentTarget, ie = B.ctrlKey || B.altKey || B.metaKey, j = B.key.length === 1;
                          re && (B.key === "Tab" && B.preventDefault(), !ie && j && U(B.key));
                          const K = C.current;
                          if (B.target !== K || !YF.includes(B.key)) return;
                          B.preventDefault();
                          const Y = x().filter((O) => !O.disabled).map((O) => O.ref.current);
                          kh.includes(B.key) && Y.reverse(), hB(Y);
                        }),
                        onBlur: k(e.onBlur, (B) => {
                          B.currentTarget.contains(B.target) || (window.clearTimeout(R.current), D.current = "");
                        }),
                        onPointerMove: k(
                          e.onPointerMove,
                          Ar((B) => {
                            const oe = B.target, re = I.current !== B.clientX;
                            if (B.currentTarget.contains(oe) && re) {
                              const ie = B.clientX > I.current ? "right" : "left";
                              $.current = ie, I.current = B.clientX;
                            }
                          })
                        )
                      }
                    )
                  }
                )
              }
            )
          }
        ) })
      }
    );
  }
);
jh.displayName = tt;
var iB = "MenuGroup", qc = l.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ p(W.div, { role: "group", ...r, ref: t });
  }
);
qc.displayName = iB;
var sB = "MenuLabel", Vh = l.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ p(W.div, { ...r, ref: t });
  }
);
Vh.displayName = sB;
var Zo = "MenuItem", Sd = "menu.itemSelect", ja = l.forwardRef(
  (e, t) => {
    const { disabled: n = !1, onSelect: r, ...o } = e, a = l.useRef(null), i = eo(Zo, e.__scopeMenu), s = Kc(Zo, e.__scopeMenu), c = ne(t, a), u = l.useRef(!1), d = () => {
      const f = a.current;
      if (!n && f) {
        const m = new CustomEvent(Sd, { bubbles: !0, cancelable: !0 });
        f.addEventListener(Sd, (b) => r?.(b), { once: !0 }), gc(f, m), m.defaultPrevented ? u.current = !1 : i.onClose();
      }
    };
    return /* @__PURE__ */ p(
      Gh,
      {
        ...o,
        ref: c,
        disabled: n,
        onClick: k(e.onClick, d),
        onPointerDown: (f) => {
          e.onPointerDown?.(f), u.current = !0;
        },
        onPointerUp: k(e.onPointerUp, (f) => {
          u.current || f.currentTarget?.click();
        }),
        onKeyDown: k(e.onKeyDown, (f) => {
          const m = s.searchRef.current !== "";
          n || m && f.key === " " || Ps.includes(f.key) && (f.currentTarget.click(), f.preventDefault());
        })
      }
    );
  }
);
ja.displayName = Zo;
var Gh = l.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, disabled: r = !1, textValue: o, ...a } = e, i = Kc(Zo, n), s = Lh(n), c = l.useRef(null), u = ne(t, c), [d, f] = l.useState(!1), [m, b] = l.useState("");
    return l.useEffect(() => {
      const g = c.current;
      g && b((g.textContent ?? "").trim());
    }, [a.children]), /* @__PURE__ */ p(
      Tr.ItemSlot,
      {
        scope: n,
        disabled: r,
        textValue: o ?? m,
        children: /* @__PURE__ */ p(qr, { asChild: !0, ...s, focusable: !r, children: /* @__PURE__ */ p(
          W.div,
          {
            role: "menuitem",
            "data-highlighted": d ? "" : void 0,
            "aria-disabled": r || void 0,
            "data-disabled": r ? "" : void 0,
            ...a,
            ref: u,
            onPointerMove: k(
              e.onPointerMove,
              Ar((g) => {
                r ? i.onItemLeave(g) : (i.onItemEnter(g), g.defaultPrevented || g.currentTarget.focus({ preventScroll: !0 }));
              })
            ),
            onPointerLeave: k(
              e.onPointerLeave,
              Ar((g) => i.onItemLeave(g))
            ),
            onFocus: k(e.onFocus, () => f(!0)),
            onBlur: k(e.onBlur, () => f(!1))
          }
        ) })
      }
    );
  }
), cB = "MenuCheckboxItem", Uh = l.forwardRef(
  (e, t) => {
    const { checked: n = !1, onCheckedChange: r, ...o } = e;
    return /* @__PURE__ */ p(Xh, { scope: e.__scopeMenu, checked: n, children: /* @__PURE__ */ p(
      ja,
      {
        role: "menuitemcheckbox",
        "aria-checked": Jo(n) ? "mixed" : n,
        ...o,
        ref: t,
        "data-state": Jc(n),
        onSelect: k(
          o.onSelect,
          () => r?.(Jo(n) ? !0 : !n),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
Uh.displayName = cB;
var Wh = "MenuRadioGroup", [lB, uB] = xn(
  Wh,
  { value: void 0, onValueChange: () => {
  } }
), Kh = l.forwardRef(
  (e, t) => {
    const { value: n, onValueChange: r, ...o } = e, a = Se(r);
    return /* @__PURE__ */ p(lB, { scope: e.__scopeMenu, value: n, onValueChange: a, children: /* @__PURE__ */ p(qc, { ...o, ref: t }) });
  }
);
Kh.displayName = Wh;
var Yh = "MenuRadioItem", qh = l.forwardRef(
  (e, t) => {
    const { value: n, ...r } = e, o = uB(Yh, e.__scopeMenu), a = n === o.value;
    return /* @__PURE__ */ p(Xh, { scope: e.__scopeMenu, checked: a, children: /* @__PURE__ */ p(
      ja,
      {
        role: "menuitemradio",
        "aria-checked": a,
        ...r,
        ref: t,
        "data-state": Jc(a),
        onSelect: k(
          r.onSelect,
          () => o.onValueChange?.(n),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
qh.displayName = Yh;
var Xc = "MenuItemIndicator", [Xh, dB] = xn(
  Xc,
  { checked: !1 }
), Zh = l.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, forceMount: r, ...o } = e, a = dB(Xc, n);
    return /* @__PURE__ */ p(
      Re,
      {
        present: r || Jo(a.checked) || a.checked === !0,
        children: /* @__PURE__ */ p(
          W.span,
          {
            ...o,
            ref: t,
            "data-state": Jc(a.checked)
          }
        )
      }
    );
  }
);
Zh.displayName = Xc;
var fB = "MenuSeparator", Jh = l.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ p(
      W.div,
      {
        role: "separator",
        "aria-orientation": "horizontal",
        ...r,
        ref: t
      }
    );
  }
);
Jh.displayName = fB;
var pB = "MenuArrow", Qh = l.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e, o = Qr(n);
    return /* @__PURE__ */ p(Ur, { ...o, ...r, ref: t });
  }
);
Qh.displayName = pB;
var Zc = "MenuSub", [mB, ev] = xn(Zc), tv = (e) => {
  const { __scopeMenu: t, children: n, open: r = !1, onOpenChange: o } = e, a = Yt(Zc, t), i = Qr(t), [s, c] = l.useState(null), [u, d] = l.useState(null), f = Se(o);
  return l.useEffect(() => (a.open === !1 && f(!1), () => f(!1)), [a.open, f]), /* @__PURE__ */ p(er, { ...i, children: /* @__PURE__ */ p(
    Fh,
    {
      scope: t,
      open: r,
      onOpenChange: f,
      content: u,
      onContentChange: d,
      children: /* @__PURE__ */ p(
        mB,
        {
          scope: t,
          contentId: $e(),
          triggerId: $e(),
          trigger: s,
          onTriggerChange: c,
          children: n
        }
      )
    }
  ) });
};
tv.displayName = Zc;
var dr = "MenuSubTrigger", nv = l.forwardRef(
  (e, t) => {
    const n = Yt(dr, e.__scopeMenu), r = eo(dr, e.__scopeMenu), o = ev(dr, e.__scopeMenu), a = Kc(dr, e.__scopeMenu), i = l.useRef(null), { pointerGraceTimerRef: s, onPointerGraceIntentChange: c } = a, u = { __scopeMenu: e.__scopeMenu }, d = l.useCallback(() => {
      i.current && window.clearTimeout(i.current), i.current = null;
    }, []);
    return l.useEffect(() => d, [d]), l.useEffect(() => {
      const f = s.current;
      return () => {
        window.clearTimeout(f), c(null);
      };
    }, [s, c]), /* @__PURE__ */ p(Uc, { asChild: !0, ...u, children: /* @__PURE__ */ p(
      Gh,
      {
        id: o.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": n.open,
        "aria-controls": o.contentId,
        "data-state": av(n.open),
        ...e,
        ref: Gd(t, o.onTriggerChange),
        onClick: (f) => {
          e.onClick?.(f), !(e.disabled || f.defaultPrevented) && (f.currentTarget.focus(), n.open || n.onOpenChange(!0));
        },
        onPointerMove: k(
          e.onPointerMove,
          Ar((f) => {
            a.onItemEnter(f), !f.defaultPrevented && !e.disabled && !n.open && !i.current && (a.onPointerGraceIntentChange(null), i.current = window.setTimeout(() => {
              n.onOpenChange(!0), d();
            }, 100));
          })
        ),
        onPointerLeave: k(
          e.onPointerLeave,
          Ar((f) => {
            d();
            const m = n.content?.getBoundingClientRect();
            if (m) {
              const b = n.content?.dataset.side, g = b === "right", h = g ? -5 : 5, v = m[g ? "left" : "right"], y = m[g ? "right" : "left"];
              a.onPointerGraceIntentChange({
                area: [
                  // Apply a bleed on clientX to ensure that our exit point is
                  // consistently within polygon bounds
                  { x: f.clientX + h, y: f.clientY },
                  { x: v, y: m.top },
                  { x: y, y: m.top },
                  { x: y, y: m.bottom },
                  { x: v, y: m.bottom }
                ],
                side: b
              }), window.clearTimeout(s.current), s.current = window.setTimeout(
                () => a.onPointerGraceIntentChange(null),
                300
              );
            } else {
              if (a.onTriggerLeave(f), f.defaultPrevented) return;
              a.onPointerGraceIntentChange(null);
            }
          })
        ),
        onKeyDown: k(e.onKeyDown, (f) => {
          const m = a.searchRef.current !== "";
          e.disabled || m && f.key === " " || qF[r.dir].includes(f.key) && (n.onOpenChange(!0), n.content?.focus(), f.preventDefault());
        })
      }
    ) });
  }
);
nv.displayName = dr;
var rv = "MenuSubContent", ov = l.forwardRef(
  (e, t) => {
    const n = zh(tt, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, a = Yt(tt, e.__scopeMenu), i = eo(tt, e.__scopeMenu), s = ev(rv, e.__scopeMenu), c = l.useRef(null), u = ne(t, c);
    return /* @__PURE__ */ p(Tr.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ p(Re, { present: r || a.open, children: /* @__PURE__ */ p(Tr.Slot, { scope: e.__scopeMenu, children: /* @__PURE__ */ p(
      Yc,
      {
        id: s.contentId,
        "aria-labelledby": s.triggerId,
        ...o,
        ref: u,
        align: "start",
        side: i.dir === "rtl" ? "left" : "right",
        disableOutsidePointerEvents: !1,
        disableOutsideScroll: !1,
        trapFocus: !1,
        onOpenAutoFocus: (d) => {
          i.isUsingKeyboardRef.current && c.current?.focus(), d.preventDefault();
        },
        onCloseAutoFocus: (d) => d.preventDefault(),
        onFocusOutside: k(e.onFocusOutside, (d) => {
          d.target !== s.trigger && a.onOpenChange(!1);
        }),
        onEscapeKeyDown: k(e.onEscapeKeyDown, (d) => {
          i.onClose(), d.preventDefault();
        }),
        onKeyDown: k(e.onKeyDown, (d) => {
          const f = d.currentTarget.contains(d.target), m = XF[i.dir].includes(d.key);
          f && m && (a.onOpenChange(!1), s.trigger?.focus(), d.preventDefault());
        })
      }
    ) }) }) });
  }
);
ov.displayName = rv;
function av(e) {
  return e ? "open" : "closed";
}
function Jo(e) {
  return e === "indeterminate";
}
function Jc(e) {
  return Jo(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function hB(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t)) return;
}
function vB(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
function gB(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((u) => u === t[0]) ? t[0] : t, a = n ? e.indexOf(n) : -1;
  let i = vB(e, Math.max(a, 0));
  o.length === 1 && (i = i.filter((u) => u !== n));
  const c = i.find(
    (u) => u.toLowerCase().startsWith(o.toLowerCase())
  );
  return c !== n ? c : void 0;
}
function bB(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let a = 0, i = t.length - 1; a < t.length; i = a++) {
    const s = t[a], c = t[i], u = s.x, d = s.y, f = c.x, m = c.y;
    d > r != m > r && n < (f - u) * (r - d) / (m - d) + u && (o = !o);
  }
  return o;
}
function yB(e, t) {
  if (!t) return !1;
  const n = { x: e.clientX, y: e.clientY };
  return bB(n, t);
}
function Ar(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var Qc = Bh, el = Uc, tl = Hh, nl = jh, rl = qc, ol = Vh, al = ja, il = Uh, sl = Kh, cl = qh, ll = Zh, ul = Jh, dl = Qh, fl = tv, pl = nv, ml = ov, hl = "ContextMenu", [wB, nW] = be(hl, [
  Jr
]), Fe = Jr(), [SB, iv] = wB(hl), sv = (e) => {
  const { __scopeContextMenu: t, children: n, onOpenChange: r, dir: o, modal: a = !0 } = e, [i, s] = l.useState(!1), c = Fe(t), u = Se(r), d = l.useCallback(
    (f) => {
      s(f), u(f);
    },
    [u]
  );
  return /* @__PURE__ */ p(
    SB,
    {
      scope: t,
      open: i,
      onOpenChange: d,
      modal: a,
      children: /* @__PURE__ */ p(
        Qc,
        {
          ...c,
          dir: o,
          open: i,
          onOpenChange: d,
          modal: a,
          children: n
        }
      )
    }
  );
};
sv.displayName = hl;
var cv = "ContextMenuTrigger", lv = l.forwardRef(
  (e, t) => {
    const { __scopeContextMenu: n, disabled: r = !1, ...o } = e, a = iv(cv, n), i = Fe(n), s = l.useRef({ x: 0, y: 0 }), c = l.useRef({
      getBoundingClientRect: () => DOMRect.fromRect({ width: 0, height: 0, ...s.current })
    }), u = l.useRef(0), d = l.useCallback(
      () => window.clearTimeout(u.current),
      []
    ), f = (m) => {
      s.current = { x: m.clientX, y: m.clientY }, a.onOpenChange(!0);
    };
    return l.useEffect(() => d, [d]), l.useEffect(() => void (r && d()), [r, d]), /* @__PURE__ */ te(dt, { children: [
      /* @__PURE__ */ p(el, { ...i, virtualRef: c }),
      /* @__PURE__ */ p(
        W.span,
        {
          "data-state": a.open ? "open" : "closed",
          "data-disabled": r ? "" : void 0,
          ...o,
          ref: t,
          style: { WebkitTouchCallout: "none", ...e.style },
          onContextMenu: r ? e.onContextMenu : k(e.onContextMenu, (m) => {
            d(), f(m), m.preventDefault();
          }),
          onPointerDown: r ? e.onPointerDown : k(
            e.onPointerDown,
            yo((m) => {
              d(), u.current = window.setTimeout(() => f(m), 700);
            })
          ),
          onPointerMove: r ? e.onPointerMove : k(e.onPointerMove, yo(d)),
          onPointerCancel: r ? e.onPointerCancel : k(e.onPointerCancel, yo(d)),
          onPointerUp: r ? e.onPointerUp : k(e.onPointerUp, yo(d))
        }
      )
    ] });
  }
);
lv.displayName = cv;
var xB = "ContextMenuPortal", uv = (e) => {
  const { __scopeContextMenu: t, ...n } = e, r = Fe(t);
  return /* @__PURE__ */ p(tl, { ...r, ...n });
};
uv.displayName = xB;
var dv = "ContextMenuContent", fv = l.forwardRef(
  (e, t) => {
    const { __scopeContextMenu: n, ...r } = e, o = iv(dv, n), a = Fe(n), i = l.useRef(!1);
    return /* @__PURE__ */ p(
      nl,
      {
        ...a,
        ...r,
        ref: t,
        side: "right",
        sideOffset: 2,
        align: "start",
        onCloseAutoFocus: (s) => {
          e.onCloseAutoFocus?.(s), !s.defaultPrevented && i.current && s.preventDefault(), i.current = !1;
        },
        onInteractOutside: (s) => {
          e.onInteractOutside?.(s), !s.defaultPrevented && !o.modal && (i.current = !0);
        },
        style: {
          ...e.style,
          "--radix-context-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-context-menu-content-available-width": "var(--radix-popper-available-width)",
          "--radix-context-menu-content-available-height": "var(--radix-popper-available-height)",
          "--radix-context-menu-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-context-menu-trigger-height": "var(--radix-popper-anchor-height)"
        }
      }
    );
  }
);
fv.displayName = dv;
var CB = "ContextMenuGroup", pv = l.forwardRef(
  (e, t) => {
    const { __scopeContextMenu: n, ...r } = e, o = Fe(n);
    return /* @__PURE__ */ p(rl, { ...o, ...r, ref: t });
  }
);
pv.displayName = CB;
var PB = "ContextMenuLabel", mv = l.forwardRef(
  (e, t) => {
    const { __scopeContextMenu: n, ...r } = e, o = Fe(n);
    return /* @__PURE__ */ p(ol, { ...o, ...r, ref: t });
  }
);
mv.displayName = PB;
var EB = "ContextMenuItem", hv = l.forwardRef(
  (e, t) => {
    const { __scopeContextMenu: n, ...r } = e, o = Fe(n);
    return /* @__PURE__ */ p(al, { ...o, ...r, ref: t });
  }
);
hv.displayName = EB;
var _B = "ContextMenuCheckboxItem", vv = l.forwardRef((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = Fe(n);
  return /* @__PURE__ */ p(il, { ...o, ...r, ref: t });
});
vv.displayName = _B;
var RB = "ContextMenuRadioGroup", gv = l.forwardRef((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = Fe(n);
  return /* @__PURE__ */ p(sl, { ...o, ...r, ref: t });
});
gv.displayName = RB;
var TB = "ContextMenuRadioItem", bv = l.forwardRef((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = Fe(n);
  return /* @__PURE__ */ p(cl, { ...o, ...r, ref: t });
});
bv.displayName = TB;
var AB = "ContextMenuItemIndicator", yv = l.forwardRef((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = Fe(n);
  return /* @__PURE__ */ p(ll, { ...o, ...r, ref: t });
});
yv.displayName = AB;
var NB = "ContextMenuSeparator", wv = l.forwardRef((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = Fe(n);
  return /* @__PURE__ */ p(ul, { ...o, ...r, ref: t });
});
wv.displayName = NB;
var MB = "ContextMenuArrow", OB = l.forwardRef(
  (e, t) => {
    const { __scopeContextMenu: n, ...r } = e, o = Fe(n);
    return /* @__PURE__ */ p(dl, { ...o, ...r, ref: t });
  }
);
OB.displayName = MB;
var Sv = "ContextMenuSub", xv = (e) => {
  const { __scopeContextMenu: t, children: n, onOpenChange: r, open: o, defaultOpen: a } = e, i = Fe(t), [s, c] = xe({
    prop: o,
    defaultProp: a ?? !1,
    onChange: r,
    caller: Sv
  });
  return /* @__PURE__ */ p(fl, { ...i, open: s, onOpenChange: c, children: n });
};
xv.displayName = Sv;
var $B = "ContextMenuSubTrigger", Cv = l.forwardRef((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = Fe(n);
  return /* @__PURE__ */ p(pl, { ...o, ...r, ref: t });
});
Cv.displayName = $B;
var IB = "ContextMenuSubContent", Pv = l.forwardRef((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = Fe(n);
  return /* @__PURE__ */ p(
    ml,
    {
      ...o,
      ...r,
      ref: t,
      style: {
        ...e.style,
        "--radix-context-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-context-menu-content-available-width": "var(--radix-popper-available-width)",
        "--radix-context-menu-content-available-height": "var(--radix-popper-available-height)",
        "--radix-context-menu-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-context-menu-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }
  );
});
Pv.displayName = IB;
function yo(e) {
  return (t) => t.pointerType !== "mouse" ? e(t) : void 0;
}
var DB = sv, kB = lv, Ev = uv, _v = fv, LB = pv, Rv = mv, Tv = hv, Av = vv, FB = gv, Nv = bv, Mv = yv, Ov = wv, BB = xv, $v = Cv, Iv = Pv;
const rW = DB, oW = kB, aW = LB, iW = Ev, sW = BB, cW = FB, zB = l.forwardRef(({ className: e, inset: t, children: n, ...r }, o) => /* @__PURE__ */ te(
  $v,
  {
    ref: o,
    className: N(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      t && "pl-8",
      e
    ),
    ...r,
    children: [
      n,
      /* @__PURE__ */ p(Ws, { className: "ml-auto h-4 w-4" })
    ]
  }
));
zB.displayName = $v.displayName;
const HB = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p(
  Iv,
  {
    ref: n,
    className: N(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...t
  }
));
HB.displayName = Iv.displayName;
const jB = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p(Ev, { children: /* @__PURE__ */ p(
  _v,
  {
    ref: n,
    className: N(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...t
  }
) }));
jB.displayName = _v.displayName;
const VB = l.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ p(
  Tv,
  {
    ref: r,
    className: N(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      t && "pl-8",
      e
    ),
    ...n
  }
));
VB.displayName = Tv.displayName;
const GB = l.forwardRef(({ className: e, children: t, checked: n, ...r }, o) => /* @__PURE__ */ te(
  Av,
  {
    ref: o,
    className: N(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    checked: n,
    ...r,
    children: [
      /* @__PURE__ */ p("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ p(Mv, { children: /* @__PURE__ */ p(Dr, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
));
GB.displayName = Av.displayName;
const UB = l.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ te(
  Nv,
  {
    ref: r,
    className: N(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ p("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ p(Mv, { children: /* @__PURE__ */ p(ua, { className: "h-4 w-4 fill-current" }) }) }),
      t
    ]
  }
));
UB.displayName = Nv.displayName;
const WB = l.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ p(
  Rv,
  {
    ref: r,
    className: N(
      "px-2 py-1.5 text-sm font-semibold text-foreground",
      t && "pl-8",
      e
    ),
    ...n
  }
));
WB.displayName = Rv.displayName;
const KB = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p(
  Ov,
  {
    ref: n,
    className: N("-mx-1 my-1 h-px bg-border", e),
    ...t
  }
));
KB.displayName = Ov.displayName;
const YB = ({
  className: e,
  ...t
}) => /* @__PURE__ */ p(
  "span",
  {
    className: N(
      "ml-auto text-xs tracking-widest text-muted-foreground",
      e
    ),
    ...t
  }
);
YB.displayName = "ContextMenuShortcut";
const lW = Ta, uW = Aa, qB = Na, dW = wn, Dv = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p(
  Yn,
  {
    ref: n,
    className: N(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t
  }
));
Dv.displayName = Yn.displayName;
const XB = l.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ te(qB, { children: [
  /* @__PURE__ */ p(Dv, {}),
  /* @__PURE__ */ te(
    qn,
    {
      ref: r,
      className: N(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        e
      ),
      ...n,
      children: [
        t,
        /* @__PURE__ */ te(wn, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
          /* @__PURE__ */ p(Ys, { className: "h-4 w-4" }),
          /* @__PURE__ */ p("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
XB.displayName = qn.displayName;
const ZB = ({
  className: e,
  ...t
}) => /* @__PURE__ */ p(
  "div",
  {
    className: N(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      e
    ),
    ...t
  }
);
ZB.displayName = "DialogHeader";
const JB = ({
  className: e,
  ...t
}) => /* @__PURE__ */ p(
  "div",
  {
    className: N(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
);
JB.displayName = "DialogFooter";
const QB = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p(
  Xn,
  {
    ref: n,
    className: N(
      "text-lg font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
QB.displayName = Xn.displayName;
const ez = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p(
  Zn,
  {
    ref: n,
    className: N("text-sm text-muted-foreground", e),
    ...t
  }
));
ez.displayName = Zn.displayName;
function tz(e) {
  if (typeof document > "u") return;
  let t = document.head || document.getElementsByTagName("head")[0], n = document.createElement("style");
  n.type = "text/css", t.appendChild(n), n.styleSheet ? n.styleSheet.cssText = e : n.appendChild(document.createTextNode(e));
}
const kv = A.createContext({
  drawerRef: {
    current: null
  },
  overlayRef: {
    current: null
  },
  onPress: () => {
  },
  onRelease: () => {
  },
  onDrag: () => {
  },
  onNestedDrag: () => {
  },
  onNestedOpenChange: () => {
  },
  onNestedRelease: () => {
  },
  openProp: void 0,
  dismissible: !1,
  isOpen: !1,
  isDragging: !1,
  keyboardIsOpen: {
    current: !1
  },
  snapPointsOffset: null,
  snapPoints: null,
  handleOnly: !1,
  modal: !1,
  shouldFade: !1,
  activeSnapPoint: null,
  onOpenChange: () => {
  },
  setActiveSnapPoint: () => {
  },
  closeDrawer: () => {
  },
  direction: "bottom",
  shouldAnimate: {
    current: !0
  },
  shouldScaleBackground: !1,
  setBackgroundColorOnScale: !0,
  noBodyStyles: !1,
  container: null,
  autoFocus: !1
}), to = () => {
  const e = A.useContext(kv);
  if (!e)
    throw new Error("useDrawerContext must be used within a Drawer.Root");
  return e;
};
tz(`[data-vaul-drawer]{touch-action:none;will-change:transform;transition:transform .5s cubic-bezier(.32, .72, 0, 1);animation-duration:.5s;animation-timing-function:cubic-bezier(0.32,0.72,0,1)}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=bottom][data-state=open]{animation-name:slideFromBottom}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=bottom][data-state=closed]{animation-name:slideToBottom}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=top][data-state=open]{animation-name:slideFromTop}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=top][data-state=closed]{animation-name:slideToTop}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=left][data-state=open]{animation-name:slideFromLeft}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=left][data-state=closed]{animation-name:slideToLeft}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=right][data-state=open]{animation-name:slideFromRight}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=right][data-state=closed]{animation-name:slideToRight}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=bottom]{transform:translate3d(0,var(--initial-transform,100%),0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=top]{transform:translate3d(0,calc(var(--initial-transform,100%) * -1),0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=left]{transform:translate3d(calc(var(--initial-transform,100%) * -1),0,0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=right]{transform:translate3d(var(--initial-transform,100%),0,0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=top]{transform:translate3d(0,var(--snap-point-height,0),0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=bottom]{transform:translate3d(0,var(--snap-point-height,0),0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=left]{transform:translate3d(var(--snap-point-height,0),0,0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=right]{transform:translate3d(var(--snap-point-height,0),0,0)}[data-vaul-overlay][data-vaul-snap-points=false]{animation-duration:.5s;animation-timing-function:cubic-bezier(0.32,0.72,0,1)}[data-vaul-overlay][data-vaul-snap-points=false][data-state=open]{animation-name:fadeIn}[data-vaul-overlay][data-state=closed]{animation-name:fadeOut}[data-vaul-animate=false]{animation:none!important}[data-vaul-overlay][data-vaul-snap-points=true]{opacity:0;transition:opacity .5s cubic-bezier(.32, .72, 0, 1)}[data-vaul-overlay][data-vaul-snap-points=true]{opacity:1}[data-vaul-drawer]:not([data-vaul-custom-container=true])::after{content:'';position:absolute;background:inherit;background-color:inherit}[data-vaul-drawer][data-vaul-drawer-direction=top]::after{top:initial;bottom:100%;left:0;right:0;height:200%}[data-vaul-drawer][data-vaul-drawer-direction=bottom]::after{top:100%;bottom:initial;left:0;right:0;height:200%}[data-vaul-drawer][data-vaul-drawer-direction=left]::after{left:initial;right:100%;top:0;bottom:0;width:200%}[data-vaul-drawer][data-vaul-drawer-direction=right]::after{left:100%;right:initial;top:0;bottom:0;width:200%}[data-vaul-overlay][data-vaul-snap-points=true]:not([data-vaul-snap-points-overlay=true]):not(
[data-state=closed]
){opacity:0}[data-vaul-overlay][data-vaul-snap-points-overlay=true]{opacity:1}[data-vaul-handle]{display:block;position:relative;opacity:.7;background:#e2e2e4;margin-left:auto;margin-right:auto;height:5px;width:32px;border-radius:1rem;touch-action:pan-y}[data-vaul-handle]:active,[data-vaul-handle]:hover{opacity:1}[data-vaul-handle-hitarea]{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:max(100%,2.75rem);height:max(100%,2.75rem);touch-action:inherit}@media (hover:hover) and (pointer:fine){[data-vaul-drawer]{user-select:none}}@media (pointer:fine){[data-vaul-handle-hitarea]:{width:100%;height:100%}}@keyframes fadeIn{from{opacity:0}to{opacity:1}}@keyframes fadeOut{to{opacity:0}}@keyframes slideFromBottom{from{transform:translate3d(0,var(--initial-transform,100%),0)}to{transform:translate3d(0,0,0)}}@keyframes slideToBottom{to{transform:translate3d(0,var(--initial-transform,100%),0)}}@keyframes slideFromTop{from{transform:translate3d(0,calc(var(--initial-transform,100%) * -1),0)}to{transform:translate3d(0,0,0)}}@keyframes slideToTop{to{transform:translate3d(0,calc(var(--initial-transform,100%) * -1),0)}}@keyframes slideFromLeft{from{transform:translate3d(calc(var(--initial-transform,100%) * -1),0,0)}to{transform:translate3d(0,0,0)}}@keyframes slideToLeft{to{transform:translate3d(calc(var(--initial-transform,100%) * -1),0,0)}}@keyframes slideFromRight{from{transform:translate3d(var(--initial-transform,100%),0,0)}to{transform:translate3d(0,0,0)}}@keyframes slideToRight{to{transform:translate3d(var(--initial-transform,100%),0,0)}}`);
function nz() {
  const e = navigator.userAgent;
  return typeof window < "u" && (/Firefox/.test(e) && /Mobile/.test(e) || // Android Firefox
  /FxiOS/.test(e));
}
function rz() {
  return vl(/^Mac/);
}
function oz() {
  return vl(/^iPhone/);
}
function xd() {
  return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}
function az() {
  return vl(/^iPad/) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
  rz() && navigator.maxTouchPoints > 1;
}
function Lv() {
  return oz() || az();
}
function vl(e) {
  return typeof window < "u" && window.navigator != null ? e.test(window.navigator.platform) : void 0;
}
const iz = 24, sz = typeof window < "u" ? Us : et;
function Cd(...e) {
  return (...t) => {
    for (let n of e)
      typeof n == "function" && n(...t);
  };
}
const Mi = typeof document < "u" && window.visualViewport;
function Pd(e) {
  let t = window.getComputedStyle(e);
  return /(auto|scroll)/.test(t.overflow + t.overflowX + t.overflowY);
}
function Fv(e) {
  for (Pd(e) && (e = e.parentElement); e && !Pd(e); )
    e = e.parentElement;
  return e || document.scrollingElement || document.documentElement;
}
const cz = /* @__PURE__ */ new Set([
  "checkbox",
  "radio",
  "range",
  "color",
  "file",
  "image",
  "button",
  "submit",
  "reset"
]);
let wo = 0, Oi;
function lz(e = {}) {
  let { isDisabled: t } = e;
  sz(() => {
    if (!t)
      return wo++, wo === 1 && Lv() && (Oi = uz()), () => {
        wo--, wo === 0 && Oi?.();
      };
  }, [
    t
  ]);
}
function uz() {
  let e, t = 0, n = (f) => {
    e = Fv(f.target), !(e === document.documentElement && e === document.body) && (t = f.changedTouches[0].pageY);
  }, r = (f) => {
    if (!e || e === document.documentElement || e === document.body) {
      f.preventDefault();
      return;
    }
    let m = f.changedTouches[0].pageY, b = e.scrollTop, g = e.scrollHeight - e.clientHeight;
    g !== 0 && ((b <= 0 && m > t || b >= g && m < t) && f.preventDefault(), t = m);
  }, o = (f) => {
    let m = f.target;
    Es(m) && m !== document.activeElement && (f.preventDefault(), m.style.transform = "translateY(-2000px)", m.focus(), requestAnimationFrame(() => {
      m.style.transform = "";
    }));
  }, a = (f) => {
    let m = f.target;
    Es(m) && (m.style.transform = "translateY(-2000px)", requestAnimationFrame(() => {
      m.style.transform = "", Mi && (Mi.height < window.innerHeight ? requestAnimationFrame(() => {
        Ed(m);
      }) : Mi.addEventListener("resize", () => Ed(m), {
        once: !0
      }));
    }));
  }, i = () => {
    window.scrollTo(0, 0);
  }, s = window.pageXOffset, c = window.pageYOffset, u = Cd(dz(document.documentElement, "paddingRight", `${window.innerWidth - document.documentElement.clientWidth}px`));
  window.scrollTo(0, 0);
  let d = Cd(sr(document, "touchstart", n, {
    passive: !1,
    capture: !0
  }), sr(document, "touchmove", r, {
    passive: !1,
    capture: !0
  }), sr(document, "touchend", o, {
    passive: !1,
    capture: !0
  }), sr(document, "focus", a, !0), sr(window, "scroll", i));
  return () => {
    u(), d(), window.scrollTo(s, c);
  };
}
function dz(e, t, n) {
  let r = e.style[t];
  return e.style[t] = n, () => {
    e.style[t] = r;
  };
}
function sr(e, t, n, r) {
  return e.addEventListener(t, n, r), () => {
    e.removeEventListener(t, n, r);
  };
}
function Ed(e) {
  let t = document.scrollingElement || document.documentElement;
  for (; e && e !== t; ) {
    let n = Fv(e);
    if (n !== document.documentElement && n !== document.body && n !== e) {
      let r = n.getBoundingClientRect().top, o = e.getBoundingClientRect().top, a = e.getBoundingClientRect().bottom;
      const i = n.getBoundingClientRect().bottom + iz;
      a > i && (n.scrollTop += o - r);
    }
    e = n.parentElement;
  }
}
function Es(e) {
  return e instanceof HTMLInputElement && !cz.has(e.type) || e instanceof HTMLTextAreaElement || e instanceof HTMLElement && e.isContentEditable;
}
function fz(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function pz(...e) {
  return (t) => e.forEach((n) => fz(n, t));
}
function Bv(...e) {
  return l.useCallback(pz(...e), e);
}
const zv = /* @__PURE__ */ new WeakMap();
function Oe(e, t, n = !1) {
  if (!e || !(e instanceof HTMLElement)) return;
  let r = {};
  Object.entries(t).forEach(([o, a]) => {
    if (o.startsWith("--")) {
      e.style.setProperty(o, a);
      return;
    }
    r[o] = e.style[o], e.style[o] = a;
  }), !n && zv.set(e, r);
}
function mz(e, t) {
  if (!e || !(e instanceof HTMLElement)) return;
  let n = zv.get(e);
  n && (e.style[t] = n[t]);
}
const Ae = (e) => {
  switch (e) {
    case "top":
    case "bottom":
      return !0;
    case "left":
    case "right":
      return !1;
    default:
      return e;
  }
};
function So(e, t) {
  if (!e)
    return null;
  const n = window.getComputedStyle(e), r = (
    // @ts-ignore
    n.transform || n.webkitTransform || n.mozTransform
  );
  let o = r.match(/^matrix3d\((.+)\)$/);
  return o ? parseFloat(o[1].split(", ")[Ae(t) ? 13 : 12]) : (o = r.match(/^matrix\((.+)\)$/), o ? parseFloat(o[1].split(", ")[Ae(t) ? 5 : 4]) : null);
}
function hz(e) {
  return 8 * (Math.log(e + 1) - 2);
}
function $i(e, t) {
  if (!e) return () => {
  };
  const n = e.style.cssText;
  return Object.assign(e.style, t), () => {
    e.style.cssText = n;
  };
}
function vz(...e) {
  return (...t) => {
    for (const n of e)
      typeof n == "function" && n(...t);
  };
}
const Ce = {
  DURATION: 0.5,
  EASE: [
    0.32,
    0.72,
    0,
    1
  ]
}, Hv = 0.4, gz = 0.25, bz = 100, jv = 8, tn = 16, _s = 26, Ii = "vaul-dragging";
function Vv(e) {
  const t = A.useRef(e);
  return A.useEffect(() => {
    t.current = e;
  }), A.useMemo(() => (...n) => t.current == null ? void 0 : t.current.call(t, ...n), []);
}
function yz({ defaultProp: e, onChange: t }) {
  const n = A.useState(e), [r] = n, o = A.useRef(r), a = Vv(t);
  return A.useEffect(() => {
    o.current !== r && (a(r), o.current = r);
  }, [
    r,
    o,
    a
  ]), n;
}
function Gv({ prop: e, defaultProp: t, onChange: n = () => {
} }) {
  const [r, o] = yz({
    defaultProp: t,
    onChange: n
  }), a = e !== void 0, i = a ? e : r, s = Vv(n), c = A.useCallback((u) => {
    if (a) {
      const f = typeof u == "function" ? u(e) : u;
      f !== e && s(f);
    } else
      o(u);
  }, [
    a,
    e,
    o,
    s
  ]);
  return [
    i,
    c
  ];
}
function wz({ activeSnapPointProp: e, setActiveSnapPointProp: t, snapPoints: n, drawerRef: r, overlayRef: o, fadeFromIndex: a, onSnapPointChange: i, direction: s = "bottom", container: c, snapToSequentialPoint: u }) {
  const [d, f] = Gv({
    prop: e,
    defaultProp: n?.[0],
    onChange: t
  }), [m, b] = A.useState(typeof window < "u" ? {
    innerWidth: window.innerWidth,
    innerHeight: window.innerHeight
  } : void 0);
  A.useEffect(() => {
    function C() {
      b({
        innerWidth: window.innerWidth,
        innerHeight: window.innerHeight
      });
    }
    return window.addEventListener("resize", C), () => window.removeEventListener("resize", C);
  }, []);
  const g = A.useMemo(() => d === n?.[n.length - 1] || null, [
    n,
    d
  ]), h = A.useMemo(() => {
    var C;
    return (C = n?.findIndex((T) => T === d)) != null ? C : null;
  }, [
    n,
    d
  ]), v = n && n.length > 0 && (a || a === 0) && !Number.isNaN(a) && n[a] === d || !n, y = A.useMemo(() => {
    const C = c ? {
      width: c.getBoundingClientRect().width,
      height: c.getBoundingClientRect().height
    } : typeof window < "u" ? {
      width: window.innerWidth,
      height: window.innerHeight
    } : {
      width: 0,
      height: 0
    };
    var T;
    return (T = n?.map((R) => {
      const D = typeof R == "string";
      let M = 0;
      if (D && (M = parseInt(R, 10)), Ae(s)) {
        const $ = D ? M : m ? R * C.height : 0;
        return m ? s === "bottom" ? C.height - $ : -C.height + $ : $;
      }
      const F = D ? M : m ? R * C.width : 0;
      return m ? s === "right" ? C.width - F : -C.width + F : F;
    })) != null ? T : [];
  }, [
    n,
    m,
    c
  ]), w = A.useMemo(() => h !== null ? y?.[h] : null, [
    y,
    h
  ]), S = A.useCallback((C) => {
    var T;
    const R = (T = y?.findIndex((D) => D === C)) != null ? T : null;
    i(R), Oe(r.current, {
      transition: `transform ${Ce.DURATION}s cubic-bezier(${Ce.EASE.join(",")})`,
      transform: Ae(s) ? `translate3d(0, ${C}px, 0)` : `translate3d(${C}px, 0, 0)`
    }), y && R !== y.length - 1 && a !== void 0 && R !== a && R < a ? Oe(o.current, {
      transition: `opacity ${Ce.DURATION}s cubic-bezier(${Ce.EASE.join(",")})`,
      opacity: "0"
    }) : Oe(o.current, {
      transition: `opacity ${Ce.DURATION}s cubic-bezier(${Ce.EASE.join(",")})`,
      opacity: "1"
    }), f(n?.[Math.max(R, 0)]);
  }, [
    r.current,
    n,
    y,
    a,
    o,
    f
  ]);
  A.useEffect(() => {
    if (d || e) {
      var C;
      const T = (C = n?.findIndex((R) => R === e || R === d)) != null ? C : -1;
      y && T !== -1 && typeof y[T] == "number" && S(y[T]);
    }
  }, [
    d,
    e,
    n,
    y,
    S
  ]);
  function x({ draggedDistance: C, closeDrawer: T, velocity: R, dismissible: D }) {
    if (a === void 0) return;
    const M = s === "bottom" || s === "right" ? (w ?? 0) - C : (w ?? 0) + C, F = h === a - 1, $ = h === 0, I = C > 0;
    if (F && Oe(o.current, {
      transition: `opacity ${Ce.DURATION}s cubic-bezier(${Ce.EASE.join(",")})`
    }), !u && R > 2 && !I) {
      D ? T() : S(y[0]);
      return;
    }
    if (!u && R > 2 && I && y && n) {
      S(y[n.length - 1]);
      return;
    }
    const z = y?.reduce((U, H) => typeof U != "number" || typeof H != "number" ? U : Math.abs(H - M) < Math.abs(U - M) ? H : U), L = Ae(s) ? window.innerHeight : window.innerWidth;
    if (R > Hv && Math.abs(C) < L * 0.4) {
      const U = I ? 1 : -1;
      if (U > 0 && g && n) {
        S(y[n.length - 1]);
        return;
      }
      if ($ && U < 0 && D && T(), h === null) return;
      S(y[h + U]);
      return;
    }
    S(z);
  }
  function P({ draggedDistance: C }) {
    if (w === null) return;
    const T = s === "bottom" || s === "right" ? w - C : w + C;
    (s === "bottom" || s === "right") && T < y[y.length - 1] || (s === "top" || s === "left") && T > y[y.length - 1] || Oe(r.current, {
      transform: Ae(s) ? `translate3d(0, ${T}px, 0)` : `translate3d(${T}px, 0, 0)`
    });
  }
  function E(C, T) {
    if (!n || typeof h != "number" || !y || a === void 0) return null;
    const R = h === a - 1;
    if (h >= a && T)
      return 0;
    if (R && !T) return 1;
    if (!v && !R) return null;
    const M = R ? h + 1 : h - 1, F = R ? y[M] - y[M - 1] : y[M + 1] - y[M], $ = C / Math.abs(F);
    return R ? 1 - $ : $;
  }
  return {
    isLastSnapPoint: g,
    activeSnapPoint: d,
    shouldFade: v,
    getPercentageDragged: E,
    setActiveSnapPoint: f,
    activeSnapPointIndex: h,
    onRelease: x,
    onDrag: P,
    snapPointsOffset: y
  };
}
const Sz = () => () => {
};
function xz() {
  const { direction: e, isOpen: t, shouldScaleBackground: n, setBackgroundColorOnScale: r, noBodyStyles: o } = to(), a = A.useRef(null), i = Gs(() => document.body.style.backgroundColor, []);
  function s() {
    return (window.innerWidth - _s) / window.innerWidth;
  }
  A.useEffect(() => {
    if (t && n) {
      a.current && clearTimeout(a.current);
      const c = document.querySelector("[data-vaul-drawer-wrapper]") || document.querySelector("[vaul-drawer-wrapper]");
      if (!c) return;
      vz(r && !o ? $i(document.body, {
        background: "black"
      }) : Sz, $i(c, {
        transformOrigin: Ae(e) ? "top" : "left",
        transitionProperty: "transform, border-radius",
        transitionDuration: `${Ce.DURATION}s`,
        transitionTimingFunction: `cubic-bezier(${Ce.EASE.join(",")})`
      }));
      const u = $i(c, {
        borderRadius: `${jv}px`,
        overflow: "hidden",
        ...Ae(e) ? {
          transform: `scale(${s()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`
        } : {
          transform: `scale(${s()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`
        }
      });
      return () => {
        u(), a.current = window.setTimeout(() => {
          i ? document.body.style.background = i : document.body.style.removeProperty("background");
        }, Ce.DURATION * 1e3);
      };
    }
  }, [
    t,
    n,
    i
  ]);
}
let cr = null;
function Cz({ isOpen: e, modal: t, nested: n, hasBeenOpened: r, preventScrollRestoration: o, noBodyStyles: a }) {
  const [i, s] = A.useState(() => typeof window < "u" ? window.location.href : ""), c = A.useRef(0), u = A.useCallback(() => {
    if (xd() && cr === null && e && !a) {
      cr = {
        position: document.body.style.position,
        top: document.body.style.top,
        left: document.body.style.left,
        height: document.body.style.height,
        right: "unset"
      };
      const { scrollX: f, innerHeight: m } = window;
      document.body.style.setProperty("position", "fixed", "important"), Object.assign(document.body.style, {
        top: `${-c.current}px`,
        left: `${-f}px`,
        right: "0px",
        height: "auto"
      }), window.setTimeout(() => window.requestAnimationFrame(() => {
        const b = m - window.innerHeight;
        b && c.current >= m && (document.body.style.top = `${-(c.current + b)}px`);
      }), 300);
    }
  }, [
    e
  ]), d = A.useCallback(() => {
    if (xd() && cr !== null && !a) {
      const f = -parseInt(document.body.style.top, 10), m = -parseInt(document.body.style.left, 10);
      Object.assign(document.body.style, cr), window.requestAnimationFrame(() => {
        if (o && i !== window.location.href) {
          s(window.location.href);
          return;
        }
        window.scrollTo(m, f);
      }), cr = null;
    }
  }, [
    i
  ]);
  return A.useEffect(() => {
    function f() {
      c.current = window.scrollY;
    }
    return f(), window.addEventListener("scroll", f), () => {
      window.removeEventListener("scroll", f);
    };
  }, []), A.useEffect(() => {
    if (t)
      return () => {
        typeof document > "u" || document.querySelector("[data-vaul-drawer]") || d();
      };
  }, [
    t,
    d
  ]), A.useEffect(() => {
    n || !r || (e ? (!window.matchMedia("(display-mode: standalone)").matches && u(), t || window.setTimeout(() => {
      d();
    }, 500)) : d());
  }, [
    e,
    r,
    i,
    t,
    n,
    u,
    d
  ]), {
    restorePositionSetting: d
  };
}
function Pz({ open: e, onOpenChange: t, children: n, onDrag: r, onRelease: o, snapPoints: a, shouldScaleBackground: i = !1, setBackgroundColorOnScale: s = !0, closeThreshold: c = gz, scrollLockTimeout: u = bz, dismissible: d = !0, handleOnly: f = !1, fadeFromIndex: m = a && a.length - 1, activeSnapPoint: b, setActiveSnapPoint: g, fixed: h, modal: v = !0, onClose: y, nested: w, noBodyStyles: S = !1, direction: x = "bottom", defaultOpen: P = !1, disablePreventScroll: E = !0, snapToSequentialPoint: C = !1, preventScrollRestoration: T = !1, repositionInputs: R = !0, onAnimationEnd: D, container: M, autoFocus: F = !1 }) {
  var $, I;
  const [z = !1, L] = Gv({
    defaultProp: P,
    prop: e,
    onChange: (ae) => {
      t?.(ae), !ae && !w && Xe(), setTimeout(() => {
        D?.(ae);
      }, Ce.DURATION * 1e3), ae && !v && typeof window < "u" && window.requestAnimationFrame(() => {
        document.body.style.pointerEvents = "auto";
      }), ae || (document.body.style.pointerEvents = "auto");
    }
  }), [U, H] = A.useState(!1), [B, oe] = A.useState(!1), [re, ie] = A.useState(!1), j = A.useRef(null), K = A.useRef(null), J = A.useRef(null), Y = A.useRef(null), O = A.useRef(null), G = A.useRef(!1), ee = A.useRef(null), Q = A.useRef(0), X = A.useRef(!1), V = A.useRef(!P), Z = A.useRef(0), _ = A.useRef(null), q = A.useRef((($ = _.current) == null ? void 0 : $.getBoundingClientRect().height) || 0), se = A.useRef(((I = _.current) == null ? void 0 : I.getBoundingClientRect().width) || 0), le = A.useRef(0), ue = A.useCallback((ae) => {
    a && ae === Me.length - 1 && (K.current = /* @__PURE__ */ new Date());
  }, []), { activeSnapPoint: de, activeSnapPointIndex: me, setActiveSnapPoint: Ne, onRelease: Te, snapPointsOffset: Me, onDrag: je, shouldFade: Ve, getPercentageDragged: qe } = wz({
    snapPoints: a,
    activeSnapPointProp: b,
    setActiveSnapPointProp: g,
    drawerRef: _,
    fadeFromIndex: m,
    overlayRef: j,
    onSnapPointChange: ue,
    direction: x,
    container: M,
    snapToSequentialPoint: C
  });
  lz({
    isDisabled: !z || B || !v || re || !U || !R || !E
  });
  const { restorePositionSetting: Xe } = Cz({
    isOpen: z,
    modal: v,
    nested: w ?? !1,
    hasBeenOpened: U,
    preventScrollRestoration: T,
    noBodyStyles: S
  });
  function Ot() {
    return (window.innerWidth - _s) / window.innerWidth;
  }
  function Ft(ae) {
    var pe, ge;
    !d && !a || _.current && !_.current.contains(ae.target) || (q.current = ((pe = _.current) == null ? void 0 : pe.getBoundingClientRect().height) || 0, se.current = ((ge = _.current) == null ? void 0 : ge.getBoundingClientRect().width) || 0, oe(!0), J.current = /* @__PURE__ */ new Date(), Lv() && window.addEventListener("touchend", () => G.current = !1, {
      once: !0
    }), ae.target.setPointerCapture(ae.pointerId), Q.current = Ae(x) ? ae.pageY : ae.pageX);
  }
  function ot(ae, pe) {
    var ge;
    let fe = ae;
    const we = (ge = window.getSelection()) == null ? void 0 : ge.toString(), ke = _.current ? So(_.current, x) : null, Ie = /* @__PURE__ */ new Date();
    if (fe.tagName === "SELECT" || fe.hasAttribute("data-vaul-no-drag") || fe.closest("[data-vaul-no-drag]"))
      return !1;
    if (x === "right" || x === "left")
      return !0;
    if (K.current && Ie.getTime() - K.current.getTime() < 500)
      return !1;
    if (ke !== null && (x === "bottom" ? ke > 0 : ke < 0))
      return !0;
    if (we && we.length > 0)
      return !1;
    if (O.current && Ie.getTime() - O.current.getTime() < u && ke === 0 || pe)
      return O.current = Ie, !1;
    for (; fe; ) {
      if (fe.scrollHeight > fe.clientHeight) {
        if (fe.scrollTop !== 0)
          return O.current = /* @__PURE__ */ new Date(), !1;
        if (fe.getAttribute("role") === "dialog")
          return !0;
      }
      fe = fe.parentNode;
    }
    return !0;
  }
  function Jt(ae) {
    if (_.current && B) {
      const pe = x === "bottom" || x === "right" ? 1 : -1, ge = (Q.current - (Ae(x) ? ae.pageY : ae.pageX)) * pe, fe = ge > 0, we = a && !d && !fe;
      if (we && me === 0) return;
      const ke = Math.abs(ge), Ie = document.querySelector("[data-vaul-drawer-wrapper]"), it = x === "bottom" || x === "top" ? q.current : se.current;
      let Ue = ke / it;
      const en = qe(ke, fe);
      if (en !== null && (Ue = en), we && Ue >= 1 || !G.current && !ot(ae.target, fe)) return;
      if (_.current.classList.add(Ii), G.current = !0, Oe(_.current, {
        transition: "none"
      }), Oe(j.current, {
        transition: "none"
      }), a && je({
        draggedDistance: ge
      }), fe && !a) {
        const yt = hz(ge), ao = Math.min(yt * -1, 0) * pe;
        Oe(_.current, {
          transform: Ae(x) ? `translate3d(0, ${ao}px, 0)` : `translate3d(${ao}px, 0, 0)`
        });
        return;
      }
      const Bt = 1 - Ue;
      if ((Ve || m && me === m - 1) && (r?.(ae, Ue), Oe(j.current, {
        opacity: `${Bt}`,
        transition: "none"
      }, !0)), Ie && j.current && i) {
        const yt = Math.min(Ot() + Ue * (1 - Ot()), 1), ao = 8 - Ue * 8, Bl = Math.max(0, 14 - Ue * 14);
        Oe(Ie, {
          borderRadius: `${ao}px`,
          transform: Ae(x) ? `scale(${yt}) translate3d(0, ${Bl}px, 0)` : `scale(${yt}) translate3d(${Bl}px, 0, 0)`,
          transition: "none"
        }, !0);
      }
      if (!a) {
        const yt = ke * pe;
        Oe(_.current, {
          transform: Ae(x) ? `translate3d(0, ${yt}px, 0)` : `translate3d(${yt}px, 0, 0)`
        });
      }
    }
  }
  A.useEffect(() => {
    window.requestAnimationFrame(() => {
      V.current = !0;
    });
  }, []), A.useEffect(() => {
    var ae;
    function pe() {
      if (!_.current || !R) return;
      const ge = document.activeElement;
      if (Es(ge) || X.current) {
        var fe;
        const we = ((fe = window.visualViewport) == null ? void 0 : fe.height) || 0, ke = window.innerHeight;
        let Ie = ke - we;
        const it = _.current.getBoundingClientRect().height || 0, Ue = it > ke * 0.8;
        le.current || (le.current = it);
        const en = _.current.getBoundingClientRect().top;
        if (Math.abs(Z.current - Ie) > 60 && (X.current = !X.current), a && a.length > 0 && Me && me) {
          const Bt = Me[me] || 0;
          Ie += Bt;
        }
        if (Z.current = Ie, it > we || X.current) {
          const Bt = _.current.getBoundingClientRect().height;
          let yt = Bt;
          Bt > we && (yt = we - (Ue ? en : _s)), h ? _.current.style.height = `${Bt - Math.max(Ie, 0)}px` : _.current.style.height = `${Math.max(yt, we - en)}px`;
        } else nz() || (_.current.style.height = `${le.current}px`);
        a && a.length > 0 && !X.current ? _.current.style.bottom = "0px" : _.current.style.bottom = `${Math.max(Ie, 0)}px`;
      }
    }
    return (ae = window.visualViewport) == null || ae.addEventListener("resize", pe), () => {
      var ge;
      return (ge = window.visualViewport) == null ? void 0 : ge.removeEventListener("resize", pe);
    };
  }, [
    me,
    a,
    Me
  ]);
  function at(ae) {
    Qt(), y?.(), ae || L(!1), setTimeout(() => {
      a && Ne(a[0]);
    }, Ce.DURATION * 1e3);
  }
  function He() {
    if (!_.current) return;
    const ae = document.querySelector("[data-vaul-drawer-wrapper]"), pe = So(_.current, x);
    Oe(_.current, {
      transform: "translate3d(0, 0, 0)",
      transition: `transform ${Ce.DURATION}s cubic-bezier(${Ce.EASE.join(",")})`
    }), Oe(j.current, {
      transition: `opacity ${Ce.DURATION}s cubic-bezier(${Ce.EASE.join(",")})`,
      opacity: "1"
    }), i && pe && pe > 0 && z && Oe(ae, {
      borderRadius: `${jv}px`,
      overflow: "hidden",
      ...Ae(x) ? {
        transform: `scale(${Ot()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`,
        transformOrigin: "top"
      } : {
        transform: `scale(${Ot()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`,
        transformOrigin: "left"
      },
      transitionProperty: "transform, border-radius",
      transitionDuration: `${Ce.DURATION}s`,
      transitionTimingFunction: `cubic-bezier(${Ce.EASE.join(",")})`
    }, !0);
  }
  function Qt() {
    !B || !_.current || (_.current.classList.remove(Ii), G.current = !1, oe(!1), Y.current = /* @__PURE__ */ new Date());
  }
  function or(ae) {
    if (!B || !_.current) return;
    _.current.classList.remove(Ii), G.current = !1, oe(!1), Y.current = /* @__PURE__ */ new Date();
    const pe = So(_.current, x);
    if (!ae || !ot(ae.target, !1) || !pe || Number.isNaN(pe) || J.current === null) return;
    const ge = Y.current.getTime() - J.current.getTime(), fe = Q.current - (Ae(x) ? ae.pageY : ae.pageX), we = Math.abs(fe) / ge;
    if (we > 0.05 && (ie(!0), setTimeout(() => {
      ie(!1);
    }, 200)), a) {
      Te({
        draggedDistance: fe * (x === "bottom" || x === "right" ? 1 : -1),
        closeDrawer: at,
        velocity: we,
        dismissible: d
      }), o?.(ae, !0);
      return;
    }
    if (x === "bottom" || x === "right" ? fe > 0 : fe < 0) {
      He(), o?.(ae, !0);
      return;
    }
    if (we > Hv) {
      at(), o?.(ae, !1);
      return;
    }
    var ke;
    const Ie = Math.min((ke = _.current.getBoundingClientRect().height) != null ? ke : 0, window.innerHeight);
    var it;
    const Ue = Math.min((it = _.current.getBoundingClientRect().width) != null ? it : 0, window.innerWidth), en = x === "left" || x === "right";
    if (Math.abs(pe) >= (en ? Ue : Ie) * c) {
      at(), o?.(ae, !1);
      return;
    }
    o?.(ae, !0), He();
  }
  A.useEffect(() => (z && (Oe(document.documentElement, {
    scrollBehavior: "auto"
  }), K.current = /* @__PURE__ */ new Date()), () => {
    mz(document.documentElement, "scrollBehavior");
  }), [
    z
  ]);
  function si(ae) {
    const pe = ae ? (window.innerWidth - tn) / window.innerWidth : 1, ge = ae ? -tn : 0;
    ee.current && window.clearTimeout(ee.current), Oe(_.current, {
      transition: `transform ${Ce.DURATION}s cubic-bezier(${Ce.EASE.join(",")})`,
      transform: Ae(x) ? `scale(${pe}) translate3d(0, ${ge}px, 0)` : `scale(${pe}) translate3d(${ge}px, 0, 0)`
    }), !ae && _.current && (ee.current = setTimeout(() => {
      const fe = So(_.current, x);
      Oe(_.current, {
        transition: "none",
        transform: Ae(x) ? `translate3d(0, ${fe}px, 0)` : `translate3d(${fe}px, 0, 0)`
      });
    }, 500));
  }
  function ci(ae, pe) {
    if (pe < 0) return;
    const ge = (window.innerWidth - tn) / window.innerWidth, fe = ge + pe * (1 - ge), we = -tn + pe * tn;
    Oe(_.current, {
      transform: Ae(x) ? `scale(${fe}) translate3d(0, ${we}px, 0)` : `scale(${fe}) translate3d(${we}px, 0, 0)`,
      transition: "none"
    });
  }
  function li(ae, pe) {
    const ge = Ae(x) ? window.innerHeight : window.innerWidth, fe = pe ? (ge - tn) / ge : 1, we = pe ? -tn : 0;
    pe && Oe(_.current, {
      transition: `transform ${Ce.DURATION}s cubic-bezier(${Ce.EASE.join(",")})`,
      transform: Ae(x) ? `scale(${fe}) translate3d(0, ${we}px, 0)` : `scale(${fe}) translate3d(${we}px, 0, 0)`
    });
  }
  return A.useEffect(() => {
    v || window.requestAnimationFrame(() => {
      document.body.style.pointerEvents = "auto";
    });
  }, [
    v
  ]), /* @__PURE__ */ A.createElement(Ta, {
    defaultOpen: P,
    onOpenChange: (ae) => {
      !d && !ae || (ae ? H(!0) : at(!0), L(ae));
    },
    open: z
  }, /* @__PURE__ */ A.createElement(kv.Provider, {
    value: {
      activeSnapPoint: de,
      snapPoints: a,
      setActiveSnapPoint: Ne,
      drawerRef: _,
      overlayRef: j,
      onOpenChange: t,
      onPress: Ft,
      onRelease: or,
      onDrag: Jt,
      dismissible: d,
      shouldAnimate: V,
      handleOnly: f,
      isOpen: z,
      isDragging: B,
      shouldFade: Ve,
      closeDrawer: at,
      onNestedDrag: ci,
      onNestedOpenChange: si,
      onNestedRelease: li,
      keyboardIsOpen: X,
      modal: v,
      snapPointsOffset: Me,
      activeSnapPointIndex: me,
      direction: x,
      shouldScaleBackground: i,
      setBackgroundColorOnScale: s,
      noBodyStyles: S,
      container: M,
      autoFocus: F
    }
  }, n));
}
const Uv = /* @__PURE__ */ A.forwardRef(function({ ...e }, t) {
  const { overlayRef: n, snapPoints: r, onRelease: o, shouldFade: a, isOpen: i, modal: s, shouldAnimate: c } = to(), u = Bv(t, n), d = r && r.length > 0;
  if (!s)
    return null;
  const f = A.useCallback((m) => o(m), [
    o
  ]);
  return /* @__PURE__ */ A.createElement(Yn, {
    onMouseUp: f,
    ref: u,
    "data-vaul-overlay": "",
    "data-vaul-snap-points": i && d ? "true" : "false",
    "data-vaul-snap-points-overlay": i && a ? "true" : "false",
    "data-vaul-animate": c?.current ? "true" : "false",
    ...e
  });
});
Uv.displayName = "Drawer.Overlay";
const Wv = /* @__PURE__ */ A.forwardRef(function({ onPointerDownOutside: e, style: t, onOpenAutoFocus: n, ...r }, o) {
  const { drawerRef: a, onPress: i, onRelease: s, onDrag: c, keyboardIsOpen: u, snapPointsOffset: d, activeSnapPointIndex: f, modal: m, isOpen: b, direction: g, snapPoints: h, container: v, handleOnly: y, shouldAnimate: w, autoFocus: S } = to(), [x, P] = A.useState(!1), E = Bv(o, a), C = A.useRef(null), T = A.useRef(null), R = A.useRef(!1), D = h && h.length > 0;
  xz();
  const M = ($, I, z = 0) => {
    if (R.current) return !0;
    const L = Math.abs($.y), U = Math.abs($.x), H = U > L, B = [
      "bottom",
      "right"
    ].includes(I) ? 1 : -1;
    if (I === "left" || I === "right") {
      if (!($.x * B < 0) && U >= 0 && U <= z)
        return H;
    } else if (!($.y * B < 0) && L >= 0 && L <= z)
      return !H;
    return R.current = !0, !0;
  };
  A.useEffect(() => {
    D && window.requestAnimationFrame(() => {
      P(!0);
    });
  }, []);
  function F($) {
    C.current = null, R.current = !1, s($);
  }
  return /* @__PURE__ */ A.createElement(qn, {
    "data-vaul-drawer-direction": g,
    "data-vaul-drawer": "",
    "data-vaul-delayed-snap-points": x ? "true" : "false",
    "data-vaul-snap-points": b && D ? "true" : "false",
    "data-vaul-custom-container": v ? "true" : "false",
    "data-vaul-animate": w?.current ? "true" : "false",
    ...r,
    ref: E,
    style: d && d.length > 0 ? {
      "--snap-point-height": `${d[f ?? 0]}px`,
      ...t
    } : t,
    onPointerDown: ($) => {
      y || (r.onPointerDown == null || r.onPointerDown.call(r, $), C.current = {
        x: $.pageX,
        y: $.pageY
      }, i($));
    },
    onOpenAutoFocus: ($) => {
      n?.($), S || $.preventDefault();
    },
    onPointerDownOutside: ($) => {
      if (e?.($), !m || $.defaultPrevented) {
        $.preventDefault();
        return;
      }
      u.current && (u.current = !1);
    },
    onFocusOutside: ($) => {
      if (!m) {
        $.preventDefault();
        return;
      }
    },
    onPointerMove: ($) => {
      if (T.current = $, y || (r.onPointerMove == null || r.onPointerMove.call(r, $), !C.current)) return;
      const I = $.pageY - C.current.y, z = $.pageX - C.current.x, L = $.pointerType === "touch" ? 10 : 2;
      M({
        x: z,
        y: I
      }, g, L) ? c($) : (Math.abs(z) > L || Math.abs(I) > L) && (C.current = null);
    },
    onPointerUp: ($) => {
      r.onPointerUp == null || r.onPointerUp.call(r, $), C.current = null, R.current = !1, s($);
    },
    onPointerOut: ($) => {
      r.onPointerOut == null || r.onPointerOut.call(r, $), F(T.current);
    },
    onContextMenu: ($) => {
      r.onContextMenu == null || r.onContextMenu.call(r, $), T.current && F(T.current);
    }
  });
});
Wv.displayName = "Drawer.Content";
const Ez = 250, _z = 120, Rz = /* @__PURE__ */ A.forwardRef(function({ preventCycle: e = !1, children: t, ...n }, r) {
  const { closeDrawer: o, isDragging: a, snapPoints: i, activeSnapPoint: s, setActiveSnapPoint: c, dismissible: u, handleOnly: d, isOpen: f, onPress: m, onDrag: b } = to(), g = A.useRef(null), h = A.useRef(!1);
  function v() {
    if (h.current) {
      S();
      return;
    }
    window.setTimeout(() => {
      y();
    }, _z);
  }
  function y() {
    if (a || e || h.current) {
      S();
      return;
    }
    if (S(), !i || i.length === 0) {
      u || o();
      return;
    }
    if (s === i[i.length - 1] && u) {
      o();
      return;
    }
    const P = i.findIndex((C) => C === s);
    if (P === -1) return;
    const E = i[P + 1];
    c(E);
  }
  function w() {
    g.current = window.setTimeout(() => {
      h.current = !0;
    }, Ez);
  }
  function S() {
    g.current && window.clearTimeout(g.current), h.current = !1;
  }
  return /* @__PURE__ */ A.createElement("div", {
    onClick: v,
    onPointerCancel: S,
    onPointerDown: (x) => {
      d && m(x), w();
    },
    onPointerMove: (x) => {
      d && b(x);
    },
    // onPointerUp is already handled by the content component
    ref: r,
    "data-vaul-drawer-visible": f ? "true" : "false",
    "data-vaul-handle": "",
    "aria-hidden": "true",
    ...n
  }, /* @__PURE__ */ A.createElement("span", {
    "data-vaul-handle-hitarea": "",
    "aria-hidden": "true"
  }, t));
});
Rz.displayName = "Drawer.Handle";
function Tz(e) {
  const t = to(), { container: n = t.container, ...r } = e;
  return /* @__PURE__ */ A.createElement(Na, {
    container: n,
    ...r
  });
}
const bt = {
  Root: Pz,
  Content: Wv,
  Overlay: Uv,
  Trigger: Aa,
  Portal: Tz,
  Close: wn,
  Title: Xn,
  Description: Zn
}, Az = ({
  shouldScaleBackground: e = !0,
  ...t
}) => /* @__PURE__ */ p(
  bt.Root,
  {
    shouldScaleBackground: e,
    ...t
  }
);
Az.displayName = "Drawer";
const fW = bt.Trigger, Nz = bt.Portal, pW = bt.Close, Kv = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p(
  bt.Overlay,
  {
    ref: n,
    className: N("fixed inset-0 z-50 bg-black/80", e),
    ...t
  }
));
Kv.displayName = bt.Overlay.displayName;
const Mz = l.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ te(Nz, { children: [
  /* @__PURE__ */ p(Kv, {}),
  /* @__PURE__ */ te(
    bt.Content,
    {
      ref: r,
      className: N(
        "fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background",
        e
      ),
      ...n,
      children: [
        /* @__PURE__ */ p("div", { className: "mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted" }),
        t
      ]
    }
  )
] }));
Mz.displayName = "DrawerContent";
const Oz = ({
  className: e,
  ...t
}) => /* @__PURE__ */ p(
  "div",
  {
    className: N("grid gap-1.5 p-4 text-center sm:text-left", e),
    ...t
  }
);
Oz.displayName = "DrawerHeader";
const $z = ({
  className: e,
  ...t
}) => /* @__PURE__ */ p(
  "div",
  {
    className: N("mt-auto flex flex-col gap-2 p-4", e),
    ...t
  }
);
$z.displayName = "DrawerFooter";
const Iz = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p(
  bt.Title,
  {
    ref: n,
    className: N(
      "text-lg font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
Iz.displayName = bt.Title.displayName;
const Dz = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p(
  bt.Description,
  {
    ref: n,
    className: N("text-sm text-muted-foreground", e),
    ...t
  }
));
Dz.displayName = bt.Description.displayName;
var Va = "DropdownMenu", [kz, mW] = be(
  Va,
  [Jr]
), Be = Jr(), [Lz, Yv] = kz(Va), qv = (e) => {
  const {
    __scopeDropdownMenu: t,
    children: n,
    dir: r,
    open: o,
    defaultOpen: a,
    onOpenChange: i,
    modal: s = !0
  } = e, c = Be(t), u = l.useRef(null), [d, f] = xe({
    prop: o,
    defaultProp: a ?? !1,
    onChange: i,
    caller: Va
  });
  return /* @__PURE__ */ p(
    Lz,
    {
      scope: t,
      triggerId: $e(),
      triggerRef: u,
      contentId: $e(),
      open: d,
      onOpenChange: f,
      onOpenToggle: l.useCallback(() => f((m) => !m), [f]),
      modal: s,
      children: /* @__PURE__ */ p(Qc, { ...c, open: d, onOpenChange: f, dir: r, modal: s, children: n })
    }
  );
};
qv.displayName = Va;
var Xv = "DropdownMenuTrigger", Zv = l.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, disabled: r = !1, ...o } = e, a = Yv(Xv, n), i = Be(n);
    return /* @__PURE__ */ p(el, { asChild: !0, ...i, children: /* @__PURE__ */ p(
      W.button,
      {
        type: "button",
        id: a.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": a.open,
        "aria-controls": a.open ? a.contentId : void 0,
        "data-state": a.open ? "open" : "closed",
        "data-disabled": r ? "" : void 0,
        disabled: r,
        ...o,
        ref: Gd(t, a.triggerRef),
        onPointerDown: k(e.onPointerDown, (s) => {
          !r && s.button === 0 && s.ctrlKey === !1 && (a.onOpenToggle(), a.open || s.preventDefault());
        }),
        onKeyDown: k(e.onKeyDown, (s) => {
          r || (["Enter", " "].includes(s.key) && a.onOpenToggle(), s.key === "ArrowDown" && a.onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(s.key) && s.preventDefault());
        })
      }
    ) });
  }
);
Zv.displayName = Xv;
var Fz = "DropdownMenuPortal", Jv = (e) => {
  const { __scopeDropdownMenu: t, ...n } = e, r = Be(t);
  return /* @__PURE__ */ p(tl, { ...r, ...n });
};
Jv.displayName = Fz;
var Qv = "DropdownMenuContent", eg = l.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = Yv(Qv, n), a = Be(n), i = l.useRef(!1);
    return /* @__PURE__ */ p(
      nl,
      {
        id: o.contentId,
        "aria-labelledby": o.triggerId,
        ...a,
        ...r,
        ref: t,
        onCloseAutoFocus: k(e.onCloseAutoFocus, (s) => {
          i.current || o.triggerRef.current?.focus(), i.current = !1, s.preventDefault();
        }),
        onInteractOutside: k(e.onInteractOutside, (s) => {
          const c = s.detail.originalEvent, u = c.button === 0 && c.ctrlKey === !0, d = c.button === 2 || u;
          (!o.modal || d) && (i.current = !0);
        }),
        style: {
          ...e.style,
          "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
          "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
          "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
        }
      }
    );
  }
);
eg.displayName = Qv;
var Bz = "DropdownMenuGroup", tg = l.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = Be(n);
    return /* @__PURE__ */ p(rl, { ...o, ...r, ref: t });
  }
);
tg.displayName = Bz;
var zz = "DropdownMenuLabel", ng = l.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = Be(n);
    return /* @__PURE__ */ p(ol, { ...o, ...r, ref: t });
  }
);
ng.displayName = zz;
var Hz = "DropdownMenuItem", rg = l.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = Be(n);
    return /* @__PURE__ */ p(al, { ...o, ...r, ref: t });
  }
);
rg.displayName = Hz;
var jz = "DropdownMenuCheckboxItem", og = l.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Be(n);
  return /* @__PURE__ */ p(il, { ...o, ...r, ref: t });
});
og.displayName = jz;
var Vz = "DropdownMenuRadioGroup", ag = l.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Be(n);
  return /* @__PURE__ */ p(sl, { ...o, ...r, ref: t });
});
ag.displayName = Vz;
var Gz = "DropdownMenuRadioItem", ig = l.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Be(n);
  return /* @__PURE__ */ p(cl, { ...o, ...r, ref: t });
});
ig.displayName = Gz;
var Uz = "DropdownMenuItemIndicator", sg = l.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Be(n);
  return /* @__PURE__ */ p(ll, { ...o, ...r, ref: t });
});
sg.displayName = Uz;
var Wz = "DropdownMenuSeparator", cg = l.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Be(n);
  return /* @__PURE__ */ p(ul, { ...o, ...r, ref: t });
});
cg.displayName = Wz;
var Kz = "DropdownMenuArrow", Yz = l.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = Be(n);
    return /* @__PURE__ */ p(dl, { ...o, ...r, ref: t });
  }
);
Yz.displayName = Kz;
var qz = (e) => {
  const { __scopeDropdownMenu: t, children: n, open: r, onOpenChange: o, defaultOpen: a } = e, i = Be(t), [s, c] = xe({
    prop: r,
    defaultProp: a ?? !1,
    onChange: o,
    caller: "DropdownMenuSub"
  });
  return /* @__PURE__ */ p(fl, { ...i, open: s, onOpenChange: c, children: n });
}, Xz = "DropdownMenuSubTrigger", lg = l.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Be(n);
  return /* @__PURE__ */ p(pl, { ...o, ...r, ref: t });
});
lg.displayName = Xz;
var Zz = "DropdownMenuSubContent", ug = l.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Be(n);
  return /* @__PURE__ */ p(
    ml,
    {
      ...o,
      ...r,
      ref: t,
      style: {
        ...e.style,
        "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
        "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
        "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }
  );
});
ug.displayName = Zz;
var Jz = qv, Qz = Zv, dg = Jv, fg = eg, eH = tg, pg = ng, mg = rg, hg = og, tH = ag, vg = ig, gg = sg, bg = cg, nH = qz, yg = lg, wg = ug;
const rH = Jz, oH = Qz, hW = eH, vW = dg, gW = nH, bW = tH, aH = l.forwardRef(({ className: e, inset: t, children: n, ...r }, o) => /* @__PURE__ */ te(
  yg,
  {
    ref: o,
    className: N(
      "flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      t && "pl-8",
      e
    ),
    ...r,
    children: [
      n,
      /* @__PURE__ */ p(Ws, { className: "ml-auto" })
    ]
  }
));
aH.displayName = yg.displayName;
const iH = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p(
  wg,
  {
    ref: n,
    className: N(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...t
  }
));
iH.displayName = wg.displayName;
const Sg = l.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) => /* @__PURE__ */ p(dg, { children: /* @__PURE__ */ p(
  fg,
  {
    ref: r,
    sideOffset: t,
    className: N(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md",
      "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...n
  }
) }));
Sg.displayName = fg.displayName;
const To = l.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ p(
  mg,
  {
    ref: r,
    className: N(
      "relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0",
      t && "pl-8",
      e
    ),
    ...n
  }
));
To.displayName = mg.displayName;
const sH = l.forwardRef(({ className: e, children: t, checked: n, ...r }, o) => /* @__PURE__ */ te(
  hg,
  {
    ref: o,
    className: N(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    checked: n,
    ...r,
    children: [
      /* @__PURE__ */ p("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ p(gg, { children: /* @__PURE__ */ p(Dr, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
));
sH.displayName = hg.displayName;
const cH = l.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ te(
  vg,
  {
    ref: r,
    className: N(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ p("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ p(gg, { children: /* @__PURE__ */ p(ua, { className: "h-2 w-2 fill-current" }) }) }),
      t
    ]
  }
));
cH.displayName = vg.displayName;
const lH = l.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ p(
  pg,
  {
    ref: r,
    className: N(
      "px-2 py-1.5 text-sm font-semibold",
      t && "pl-8",
      e
    ),
    ...n
  }
));
lH.displayName = pg.displayName;
const uH = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p(
  bg,
  {
    ref: n,
    className: N("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
uH.displayName = bg.displayName;
const dH = ({
  className: e,
  ...t
}) => /* @__PURE__ */ p(
  "span",
  {
    className: N("ml-auto text-xs tracking-widest opacity-60", e),
    ...t
  }
);
dH.displayName = "DropdownMenuShortcut";
var Di, Ga = "HoverCard", [xg, yW] = be(Ga, [
  Tt
]), Ua = Tt(), [fH, gl] = xg(Ga), Cg = (e) => {
  const {
    __scopeHoverCard: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: a,
    openDelay: i = 700,
    closeDelay: s = 300
  } = e, c = Ua(t), u = l.useRef(0), d = l.useRef(0), f = l.useRef(!1), m = l.useRef(!1), [b, g] = xe({
    prop: r,
    defaultProp: o ?? !1,
    onChange: a,
    caller: Ga
  }), h = l.useCallback(() => {
    clearTimeout(d.current), u.current = window.setTimeout(() => g(!0), i);
  }, [i, g]), v = l.useCallback(() => {
    clearTimeout(u.current), !f.current && !m.current && (d.current = window.setTimeout(() => g(!1), s));
  }, [s, g]), y = l.useCallback(() => g(!1), [g]);
  return l.useEffect(() => () => {
    clearTimeout(u.current), clearTimeout(d.current);
  }, []), /* @__PURE__ */ p(
    fH,
    {
      scope: t,
      open: b,
      onOpenChange: g,
      onOpen: h,
      onClose: v,
      onDismiss: y,
      hasSelectionRef: f,
      isPointerDownOnContentRef: m,
      children: /* @__PURE__ */ p(er, { ...c, children: n })
    }
  );
};
Cg.displayName = Ga;
var Pg = "HoverCardTrigger", Eg = l.forwardRef(
  (e, t) => {
    const { __scopeHoverCard: n, ...r } = e, o = gl(Pg, n), a = Ua(n);
    return /* @__PURE__ */ p(tr, { asChild: !0, ...a, children: /* @__PURE__ */ p(
      W.a,
      {
        "data-state": o.open ? "open" : "closed",
        ...r,
        ref: t,
        onPointerEnter: k(e.onPointerEnter, ea(o.onOpen)),
        onPointerLeave: k(e.onPointerLeave, ea(o.onClose)),
        onFocus: k(e.onFocus, o.onOpen),
        onBlur: k(e.onBlur, o.onClose),
        onTouchStart: k(e.onTouchStart, (i) => i.preventDefault())
      }
    ) });
  }
);
Eg.displayName = Pg;
var pH = "HoverCardPortal", [wW, mH] = xg(pH, {
  forceMount: void 0
}), Qo = "HoverCardContent", _g = l.forwardRef(
  (e, t) => {
    const n = mH(Qo, e.__scopeHoverCard), { forceMount: r = n.forceMount, ...o } = e, a = gl(Qo, e.__scopeHoverCard);
    return /* @__PURE__ */ p(Re, { present: r || a.open, children: /* @__PURE__ */ p(
      hH,
      {
        "data-state": a.open ? "open" : "closed",
        ...o,
        onPointerEnter: k(e.onPointerEnter, ea(a.onOpen)),
        onPointerLeave: k(e.onPointerLeave, ea(a.onClose)),
        ref: t
      }
    ) });
  }
);
_g.displayName = Qo;
var hH = l.forwardRef((e, t) => {
  const {
    __scopeHoverCard: n,
    onEscapeKeyDown: r,
    onPointerDownOutside: o,
    onFocusOutside: a,
    onInteractOutside: i,
    ...s
  } = e, c = gl(Qo, n), u = Ua(n), d = l.useRef(null), f = ne(t, d), [m, b] = l.useState(!1);
  return l.useEffect(() => {
    if (m) {
      const g = document.body;
      return Di = g.style.userSelect || g.style.webkitUserSelect, g.style.userSelect = "none", g.style.webkitUserSelect = "none", () => {
        g.style.userSelect = Di, g.style.webkitUserSelect = Di;
      };
    }
  }, [m]), l.useEffect(() => {
    if (d.current) {
      const g = () => {
        b(!1), c.isPointerDownOnContentRef.current = !1, setTimeout(() => {
          document.getSelection()?.toString() !== "" && (c.hasSelectionRef.current = !0);
        });
      };
      return document.addEventListener("pointerup", g), () => {
        document.removeEventListener("pointerup", g), c.hasSelectionRef.current = !1, c.isPointerDownOnContentRef.current = !1;
      };
    }
  }, [c.isPointerDownOnContentRef, c.hasSelectionRef]), l.useEffect(() => {
    d.current && bH(d.current).forEach((h) => h.setAttribute("tabindex", "-1"));
  }), /* @__PURE__ */ p(
    Wt,
    {
      asChild: !0,
      disableOutsidePointerEvents: !1,
      onInteractOutside: i,
      onEscapeKeyDown: r,
      onPointerDownOutside: o,
      onFocusOutside: k(a, (g) => {
        g.preventDefault();
      }),
      onDismiss: c.onDismiss,
      children: /* @__PURE__ */ p(
        Gr,
        {
          ...u,
          ...s,
          onPointerDown: k(s.onPointerDown, (g) => {
            g.currentTarget.contains(g.target) && b(!0), c.hasSelectionRef.current = !1, c.isPointerDownOnContentRef.current = !0;
          }),
          ref: f,
          style: {
            ...s.style,
            userSelect: m ? "text" : void 0,
            // Safari requires prefix
            WebkitUserSelect: m ? "text" : void 0,
            "--radix-hover-card-content-transform-origin": "var(--radix-popper-transform-origin)",
            "--radix-hover-card-content-available-width": "var(--radix-popper-available-width)",
            "--radix-hover-card-content-available-height": "var(--radix-popper-available-height)",
            "--radix-hover-card-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-hover-card-trigger-height": "var(--radix-popper-anchor-height)"
          }
        }
      )
    }
  );
}), vH = "HoverCardArrow", gH = l.forwardRef(
  (e, t) => {
    const { __scopeHoverCard: n, ...r } = e, o = Ua(n);
    return /* @__PURE__ */ p(Ur, { ...o, ...r, ref: t });
  }
);
gH.displayName = vH;
function ea(e) {
  return (t) => t.pointerType === "touch" ? void 0 : e();
}
function bH(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
var yH = Cg, wH = Eg, Rg = _g;
const SW = yH, xW = wH, SH = l.forwardRef(({ className: e, align: t = "center", sideOffset: n = 4, ...r }, o) => /* @__PURE__ */ p(
  Rg,
  {
    ref: o,
    align: t,
    sideOffset: n,
    className: N(
      "z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...r
  }
));
SH.displayName = Rg.displayName;
var xH = Object.defineProperty, CH = Object.defineProperties, PH = Object.getOwnPropertyDescriptors, ta = Object.getOwnPropertySymbols, Tg = Object.prototype.hasOwnProperty, Ag = Object.prototype.propertyIsEnumerable, _d = (e, t, n) => t in e ? xH(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, EH = (e, t) => {
  for (var n in t || (t = {})) Tg.call(t, n) && _d(e, n, t[n]);
  if (ta) for (var n of ta(t)) Ag.call(t, n) && _d(e, n, t[n]);
  return e;
}, _H = (e, t) => CH(e, PH(t)), RH = (e, t) => {
  var n = {};
  for (var r in e) Tg.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && ta) for (var r of ta(e)) t.indexOf(r) < 0 && Ag.call(e, r) && (n[r] = e[r]);
  return n;
};
function TH(e) {
  let t = setTimeout(e, 0), n = setTimeout(e, 10), r = setTimeout(e, 50);
  return [t, n, r];
}
function AH(e) {
  let t = l.useRef();
  return l.useEffect(() => {
    t.current = e;
  }), t.current;
}
var NH = 18, Ng = 40, MH = `${Ng}px`, OH = ["[data-lastpass-icon-root]", "com-1password-button", "[data-dashlanecreated]", '[style$="2147483647 !important;"]'].join(",");
function $H({ containerRef: e, inputRef: t, pushPasswordManagerStrategy: n, isFocused: r }) {
  let [o, a] = l.useState(!1), [i, s] = l.useState(!1), [c, u] = l.useState(!1), d = l.useMemo(() => n === "none" ? !1 : (n === "increase-width" || n === "experimental-no-flickering") && o && i, [o, i, n]), f = l.useCallback(() => {
    let m = e.current, b = t.current;
    if (!m || !b || c || n === "none") return;
    let g = m, h = g.getBoundingClientRect().left + g.offsetWidth, v = g.getBoundingClientRect().top + g.offsetHeight / 2, y = h - NH, w = v;
    document.querySelectorAll(OH).length === 0 && document.elementFromPoint(y, w) === m || (a(!0), u(!0));
  }, [e, t, c, n]);
  return l.useEffect(() => {
    let m = e.current;
    if (!m || n === "none") return;
    function b() {
      let h = window.innerWidth - m.getBoundingClientRect().right;
      s(h >= Ng);
    }
    b();
    let g = setInterval(b, 1e3);
    return () => {
      clearInterval(g);
    };
  }, [e, n]), l.useEffect(() => {
    let m = r || document.activeElement === t.current;
    if (n === "none" || !m) return;
    let b = setTimeout(f, 0), g = setTimeout(f, 2e3), h = setTimeout(f, 5e3), v = setTimeout(() => {
      u(!0);
    }, 6e3);
    return () => {
      clearTimeout(b), clearTimeout(g), clearTimeout(h), clearTimeout(v);
    };
  }, [t, r, n, f]), { hasPWMBadge: o, willPushPWMBadge: d, PWM_BADGE_SPACE_WIDTH: MH };
}
var Mg = l.createContext({}), Og = l.forwardRef((e, t) => {
  var n = e, { value: r, onChange: o, maxLength: a, textAlign: i = "left", pattern: s, placeholder: c, inputMode: u = "numeric", onComplete: d, pushPasswordManagerStrategy: f = "increase-width", pasteTransformer: m, containerClassName: b, noScriptCSSFallback: g = IH, render: h, children: v } = n, y = RH(n, ["value", "onChange", "maxLength", "textAlign", "pattern", "placeholder", "inputMode", "onComplete", "pushPasswordManagerStrategy", "pasteTransformer", "containerClassName", "noScriptCSSFallback", "render", "children"]), w, S, x, P, E;
  let [C, T] = l.useState(typeof y.defaultValue == "string" ? y.defaultValue : ""), R = r ?? C, D = AH(R), M = l.useCallback((_) => {
    o?.(_), T(_);
  }, [o]), F = l.useMemo(() => s ? typeof s == "string" ? new RegExp(s) : s : null, [s]), $ = l.useRef(null), I = l.useRef(null), z = l.useRef({ value: R, onChange: M, isIOS: typeof window < "u" && ((S = (w = window?.CSS) == null ? void 0 : w.supports) == null ? void 0 : S.call(w, "-webkit-touch-callout", "none")) }), L = l.useRef({ prev: [(x = $.current) == null ? void 0 : x.selectionStart, (P = $.current) == null ? void 0 : P.selectionEnd, (E = $.current) == null ? void 0 : E.selectionDirection] });
  l.useImperativeHandle(t, () => $.current, []), l.useEffect(() => {
    let _ = $.current, q = I.current;
    if (!_ || !q) return;
    z.current.value !== _.value && z.current.onChange(_.value), L.current.prev = [_.selectionStart, _.selectionEnd, _.selectionDirection];
    function se() {
      if (document.activeElement !== _) {
        ie(null), K(null);
        return;
      }
      let de = _.selectionStart, me = _.selectionEnd, Ne = _.selectionDirection, Te = _.maxLength, Me = _.value, je = L.current.prev, Ve = -1, qe = -1, Xe;
      if (Me.length !== 0 && de !== null && me !== null) {
        let Jt = de === me, at = de === Me.length && Me.length < Te;
        if (Jt && !at) {
          let He = de;
          if (He === 0) Ve = 0, qe = 1, Xe = "forward";
          else if (He === Te) Ve = He - 1, qe = He, Xe = "backward";
          else if (Te > 1 && Me.length > 1) {
            let Qt = 0;
            if (je[0] !== null && je[1] !== null) {
              Xe = He < je[1] ? "backward" : "forward";
              let or = je[0] === je[1] && je[0] < Te;
              Xe === "backward" && !or && (Qt = -1);
            }
            Ve = Qt + He, qe = Qt + He + 1;
          }
        }
        Ve !== -1 && qe !== -1 && Ve !== qe && $.current.setSelectionRange(Ve, qe, Xe);
      }
      let Ot = Ve !== -1 ? Ve : de, Ft = qe !== -1 ? qe : me, ot = Xe ?? Ne;
      ie(Ot), K(Ft), L.current.prev = [Ot, Ft, ot];
    }
    if (document.addEventListener("selectionchange", se, { capture: !0 }), se(), document.activeElement === _ && oe(!0), !document.getElementById("input-otp-style")) {
      let de = document.createElement("style");
      if (de.id = "input-otp-style", document.head.appendChild(de), de.sheet) {
        let me = "background: transparent !important; color: transparent !important; border-color: transparent !important; opacity: 0 !important; box-shadow: none !important; -webkit-box-shadow: none !important; -webkit-text-fill-color: transparent !important;";
        lr(de.sheet, "[data-input-otp]::selection { background: transparent !important; color: transparent !important; }"), lr(de.sheet, `[data-input-otp]:autofill { ${me} }`), lr(de.sheet, `[data-input-otp]:-webkit-autofill { ${me} }`), lr(de.sheet, "@supports (-webkit-touch-callout: none) { [data-input-otp] { letter-spacing: -.6em !important; font-weight: 100 !important; font-stretch: ultra-condensed; font-optical-sizing: none !important; left: -1px !important; right: 1px !important; } }"), lr(de.sheet, "[data-input-otp] + * { pointer-events: all !important; }");
      }
    }
    let le = () => {
      q && q.style.setProperty("--root-height", `${_.clientHeight}px`);
    };
    le();
    let ue = new ResizeObserver(le);
    return ue.observe(_), () => {
      document.removeEventListener("selectionchange", se, { capture: !0 }), ue.disconnect();
    };
  }, []);
  let [U, H] = l.useState(!1), [B, oe] = l.useState(!1), [re, ie] = l.useState(null), [j, K] = l.useState(null);
  l.useEffect(() => {
    TH(() => {
      var _, q, se, le;
      (_ = $.current) == null || _.dispatchEvent(new Event("input"));
      let ue = (q = $.current) == null ? void 0 : q.selectionStart, de = (se = $.current) == null ? void 0 : se.selectionEnd, me = (le = $.current) == null ? void 0 : le.selectionDirection;
      ue !== null && de !== null && (ie(ue), K(de), L.current.prev = [ue, de, me]);
    });
  }, [R, B]), l.useEffect(() => {
    D !== void 0 && R !== D && D.length < a && R.length === a && d?.(R);
  }, [a, d, D, R]);
  let J = $H({ containerRef: I, inputRef: $, pushPasswordManagerStrategy: f, isFocused: B }), Y = l.useCallback((_) => {
    let q = _.currentTarget.value.slice(0, a);
    if (q.length > 0 && F && !F.test(q)) {
      _.preventDefault();
      return;
    }
    typeof D == "string" && q.length < D.length && document.dispatchEvent(new Event("selectionchange")), M(q);
  }, [a, M, D, F]), O = l.useCallback(() => {
    var _;
    if ($.current) {
      let q = Math.min($.current.value.length, a - 1), se = $.current.value.length;
      (_ = $.current) == null || _.setSelectionRange(q, se), ie(q), K(se);
    }
    oe(!0);
  }, [a]), G = l.useCallback((_) => {
    var q, se;
    let le = $.current;
    if (!m && (!z.current.isIOS || !_.clipboardData || !le)) return;
    let ue = _.clipboardData.getData("text/plain"), de = m ? m(ue) : ue;
    _.preventDefault();
    let me = (q = $.current) == null ? void 0 : q.selectionStart, Ne = (se = $.current) == null ? void 0 : se.selectionEnd, Te = (me !== Ne ? R.slice(0, me) + de + R.slice(Ne) : R.slice(0, me) + de + R.slice(me)).slice(0, a);
    if (Te.length > 0 && F && !F.test(Te)) return;
    le.value = Te, M(Te);
    let Me = Math.min(Te.length, a - 1), je = Te.length;
    le.setSelectionRange(Me, je), ie(Me), K(je);
  }, [a, M, F, R]), ee = l.useMemo(() => ({ position: "relative", cursor: y.disabled ? "default" : "text", userSelect: "none", WebkitUserSelect: "none", pointerEvents: "none" }), [y.disabled]), Q = l.useMemo(() => ({ position: "absolute", inset: 0, width: J.willPushPWMBadge ? `calc(100% + ${J.PWM_BADGE_SPACE_WIDTH})` : "100%", clipPath: J.willPushPWMBadge ? `inset(0 ${J.PWM_BADGE_SPACE_WIDTH} 0 0)` : void 0, height: "100%", display: "flex", textAlign: i, opacity: "1", color: "transparent", pointerEvents: "all", background: "transparent", caretColor: "transparent", border: "0 solid transparent", outline: "0 solid transparent", boxShadow: "none", lineHeight: "1", letterSpacing: "-.5em", fontSize: "var(--root-height)", fontFamily: "monospace", fontVariantNumeric: "tabular-nums" }), [J.PWM_BADGE_SPACE_WIDTH, J.willPushPWMBadge, i]), X = l.useMemo(() => l.createElement("input", _H(EH({ autoComplete: y.autoComplete || "one-time-code" }, y), { "data-input-otp": !0, "data-input-otp-placeholder-shown": R.length === 0 || void 0, "data-input-otp-mss": re, "data-input-otp-mse": j, inputMode: u, pattern: F?.source, "aria-placeholder": c, style: Q, maxLength: a, value: R, ref: $, onPaste: (_) => {
    var q;
    G(_), (q = y.onPaste) == null || q.call(y, _);
  }, onChange: Y, onMouseOver: (_) => {
    var q;
    H(!0), (q = y.onMouseOver) == null || q.call(y, _);
  }, onMouseLeave: (_) => {
    var q;
    H(!1), (q = y.onMouseLeave) == null || q.call(y, _);
  }, onFocus: (_) => {
    var q;
    O(), (q = y.onFocus) == null || q.call(y, _);
  }, onBlur: (_) => {
    var q;
    oe(!1), (q = y.onBlur) == null || q.call(y, _);
  } })), [Y, O, G, u, Q, a, j, re, y, F?.source, R]), V = l.useMemo(() => ({ slots: Array.from({ length: a }).map((_, q) => {
    var se;
    let le = B && re !== null && j !== null && (re === j && q === re || q >= re && q < j), ue = R[q] !== void 0 ? R[q] : null, de = R[0] !== void 0 ? null : (se = c?.[q]) != null ? se : null;
    return { char: ue, placeholderChar: de, isActive: le, hasFakeCaret: le && ue === null };
  }), isFocused: B, isHovering: !y.disabled && U }), [B, U, a, j, re, y.disabled, R]), Z = l.useMemo(() => h ? h(V) : l.createElement(Mg.Provider, { value: V }, v), [v, V, h]);
  return l.createElement(l.Fragment, null, g !== null && l.createElement("noscript", null, l.createElement("style", null, g)), l.createElement("div", { ref: I, "data-input-otp-container": !0, style: ee, className: b }, Z, l.createElement("div", { style: { position: "absolute", inset: 0, pointerEvents: "none" } }, X)));
});
Og.displayName = "Input";
function lr(e, t) {
  try {
    e.insertRule(t);
  } catch {
    console.error("input-otp could not insert CSS rule:", t);
  }
}
var IH = `
[data-input-otp] {
  --nojs-bg: white !important;
  --nojs-fg: black !important;

  background-color: var(--nojs-bg) !important;
  color: var(--nojs-fg) !important;
  caret-color: var(--nojs-fg) !important;
  letter-spacing: .25em !important;
  text-align: center !important;
  border: 1px solid var(--nojs-fg) !important;
  border-radius: 4px !important;
  width: 100% !important;
}
@media (prefers-color-scheme: dark) {
  [data-input-otp] {
    --nojs-bg: black !important;
    --nojs-fg: white !important;
  }
}`;
const DH = l.forwardRef(({ className: e, containerClassName: t, ...n }, r) => /* @__PURE__ */ p(
  Og,
  {
    ref: r,
    containerClassName: N(
      "flex items-center gap-2 has-[:disabled]:opacity-50",
      t
    ),
    className: N("disabled:cursor-not-allowed", e),
    ...n
  }
));
DH.displayName = "InputOTP";
const kH = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p("div", { ref: n, className: N("flex items-center", e), ...t }));
kH.displayName = "InputOTPGroup";
const LH = l.forwardRef(({ index: e, className: t, ...n }, r) => {
  const o = l.useContext(Mg), { char: a, hasFakeCaret: i, isActive: s } = o.slots[e];
  return /* @__PURE__ */ te(
    "div",
    {
      ref: r,
      className: N(
        "relative flex h-9 w-9 items-center justify-center border-y border-r border-input text-sm shadow-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md",
        s && "z-10 ring-1 ring-ring",
        t
      ),
      ...n,
      children: [
        a,
        i && /* @__PURE__ */ p("div", { className: "pointer-events-none absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ p("div", { className: "h-4 w-px animate-caret-blink bg-foreground duration-1000" }) })
      ]
    }
  );
});
LH.displayName = "InputOTPSlot";
const FH = l.forwardRef(({ ...e }, t) => /* @__PURE__ */ p("div", { ref: t, role: "separator", ...e, children: /* @__PURE__ */ p(xS, {}) }));
FH.displayName = "InputOTPSeparator";
var no = "Menubar", [Rs, BH, zH] = Sn(no), [$g, CW] = be(no, [
  zH,
  Nt
]), ze = Jr(), Ig = Nt(), [HH, bl] = $g(no), Dg = l.forwardRef(
  (e, t) => {
    const {
      __scopeMenubar: n,
      value: r,
      onValueChange: o,
      defaultValue: a,
      loop: i = !0,
      dir: s,
      ...c
    } = e, u = At(s), d = Ig(n), [f, m] = xe({
      prop: r,
      onChange: o,
      defaultProp: a ?? "",
      caller: no
    }), [b, g] = l.useState(null);
    return /* @__PURE__ */ p(
      HH,
      {
        scope: n,
        value: f,
        onMenuOpen: l.useCallback(
          (h) => {
            m(h), g(h);
          },
          [m]
        ),
        onMenuClose: l.useCallback(() => m(""), [m]),
        onMenuToggle: l.useCallback(
          (h) => {
            m((v) => v ? "" : h), g(h);
          },
          [m]
        ),
        dir: u,
        loop: i,
        children: /* @__PURE__ */ p(Rs.Provider, { scope: n, children: /* @__PURE__ */ p(Rs.Slot, { scope: n, children: /* @__PURE__ */ p(
          Yr,
          {
            asChild: !0,
            ...d,
            orientation: "horizontal",
            loop: i,
            dir: u,
            currentTabStopId: b,
            onCurrentTabStopIdChange: g,
            children: /* @__PURE__ */ p(W.div, { role: "menubar", ...c, ref: t })
          }
        ) }) })
      }
    );
  }
);
Dg.displayName = no;
var yl = "MenubarMenu", [jH, kg] = $g(yl), Lg = (e) => {
  const { __scopeMenubar: t, value: n, ...r } = e, o = $e(), a = n || o || "LEGACY_REACT_AUTO_VALUE", i = bl(yl, t), s = ze(t), c = l.useRef(null), u = l.useRef(!1), d = i.value === a;
  return l.useEffect(() => {
    d || (u.current = !1);
  }, [d]), /* @__PURE__ */ p(
    jH,
    {
      scope: t,
      value: a,
      triggerId: $e(),
      triggerRef: c,
      contentId: $e(),
      wasKeyboardTriggerOpenRef: u,
      children: /* @__PURE__ */ p(
        Qc,
        {
          ...s,
          open: d,
          onOpenChange: (f) => {
            f || i.onMenuClose();
          },
          modal: !1,
          dir: i.dir,
          ...r
        }
      )
    }
  );
};
Lg.displayName = yl;
var Ts = "MenubarTrigger", Fg = l.forwardRef(
  (e, t) => {
    const { __scopeMenubar: n, disabled: r = !1, ...o } = e, a = Ig(n), i = ze(n), s = bl(Ts, n), c = kg(Ts, n), u = l.useRef(null), d = ne(t, u, c.triggerRef), [f, m] = l.useState(!1), b = s.value === c.value;
    return /* @__PURE__ */ p(Rs.ItemSlot, { scope: n, value: c.value, disabled: r, children: /* @__PURE__ */ p(
      qr,
      {
        asChild: !0,
        ...a,
        focusable: !r,
        tabStopId: c.value,
        children: /* @__PURE__ */ p(el, { asChild: !0, ...i, children: /* @__PURE__ */ p(
          W.button,
          {
            type: "button",
            role: "menuitem",
            id: c.triggerId,
            "aria-haspopup": "menu",
            "aria-expanded": b,
            "aria-controls": b ? c.contentId : void 0,
            "data-highlighted": f ? "" : void 0,
            "data-state": b ? "open" : "closed",
            "data-disabled": r ? "" : void 0,
            disabled: r,
            ...o,
            ref: d,
            onPointerDown: k(e.onPointerDown, (g) => {
              !r && g.button === 0 && g.ctrlKey === !1 && (s.onMenuOpen(c.value), b || g.preventDefault());
            }),
            onPointerEnter: k(e.onPointerEnter, () => {
              !!s.value && !b && (s.onMenuOpen(c.value), u.current?.focus());
            }),
            onKeyDown: k(e.onKeyDown, (g) => {
              r || (["Enter", " "].includes(g.key) && s.onMenuToggle(c.value), g.key === "ArrowDown" && s.onMenuOpen(c.value), ["Enter", " ", "ArrowDown"].includes(g.key) && (c.wasKeyboardTriggerOpenRef.current = !0, g.preventDefault()));
            }),
            onFocus: k(e.onFocus, () => m(!0)),
            onBlur: k(e.onBlur, () => m(!1))
          }
        ) })
      }
    ) });
  }
);
Fg.displayName = Ts;
var VH = "MenubarPortal", Bg = (e) => {
  const { __scopeMenubar: t, ...n } = e, r = ze(t);
  return /* @__PURE__ */ p(tl, { ...r, ...n });
};
Bg.displayName = VH;
var As = "MenubarContent", zg = l.forwardRef(
  (e, t) => {
    const { __scopeMenubar: n, align: r = "start", ...o } = e, a = ze(n), i = bl(As, n), s = kg(As, n), c = BH(n), u = l.useRef(!1);
    return /* @__PURE__ */ p(
      nl,
      {
        id: s.contentId,
        "aria-labelledby": s.triggerId,
        "data-radix-menubar-content": "",
        ...a,
        ...o,
        ref: t,
        align: r,
        onCloseAutoFocus: k(e.onCloseAutoFocus, (d) => {
          !!!i.value && !u.current && s.triggerRef.current?.focus(), u.current = !1, d.preventDefault();
        }),
        onFocusOutside: k(e.onFocusOutside, (d) => {
          const f = d.target;
          c().some((b) => b.ref.current?.contains(f)) && d.preventDefault();
        }),
        onInteractOutside: k(e.onInteractOutside, () => {
          u.current = !0;
        }),
        onEntryFocus: (d) => {
          s.wasKeyboardTriggerOpenRef.current || d.preventDefault();
        },
        onKeyDown: k(
          e.onKeyDown,
          (d) => {
            if (["ArrowRight", "ArrowLeft"].includes(d.key)) {
              const f = d.target, m = f.hasAttribute("data-radix-menubar-subtrigger"), b = f.closest("[data-radix-menubar-content]") !== d.currentTarget, h = (i.dir === "rtl" ? "ArrowRight" : "ArrowLeft") === d.key;
              if (!h && m || b && h) return;
              let w = c().filter((P) => !P.disabled).map((P) => P.value);
              h && w.reverse();
              const S = w.indexOf(s.value);
              w = i.loop ? nj(w, S + 1) : w.slice(S + 1);
              const [x] = w;
              x && i.onMenuOpen(x);
            }
          },
          { checkForDefaultPrevented: !1 }
        ),
        style: {
          ...e.style,
          "--radix-menubar-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-menubar-content-available-width": "var(--radix-popper-available-width)",
          "--radix-menubar-content-available-height": "var(--radix-popper-available-height)",
          "--radix-menubar-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-menubar-trigger-height": "var(--radix-popper-anchor-height)"
        }
      }
    );
  }
);
zg.displayName = As;
var GH = "MenubarGroup", Hg = l.forwardRef(
  (e, t) => {
    const { __scopeMenubar: n, ...r } = e, o = ze(n);
    return /* @__PURE__ */ p(rl, { ...o, ...r, ref: t });
  }
);
Hg.displayName = GH;
var UH = "MenubarLabel", jg = l.forwardRef(
  (e, t) => {
    const { __scopeMenubar: n, ...r } = e, o = ze(n);
    return /* @__PURE__ */ p(ol, { ...o, ...r, ref: t });
  }
);
jg.displayName = UH;
var WH = "MenubarItem", Vg = l.forwardRef(
  (e, t) => {
    const { __scopeMenubar: n, ...r } = e, o = ze(n);
    return /* @__PURE__ */ p(al, { ...o, ...r, ref: t });
  }
);
Vg.displayName = WH;
var KH = "MenubarCheckboxItem", Gg = l.forwardRef(
  (e, t) => {
    const { __scopeMenubar: n, ...r } = e, o = ze(n);
    return /* @__PURE__ */ p(il, { ...o, ...r, ref: t });
  }
);
Gg.displayName = KH;
var YH = "MenubarRadioGroup", Ug = l.forwardRef(
  (e, t) => {
    const { __scopeMenubar: n, ...r } = e, o = ze(n);
    return /* @__PURE__ */ p(sl, { ...o, ...r, ref: t });
  }
);
Ug.displayName = YH;
var qH = "MenubarRadioItem", Wg = l.forwardRef(
  (e, t) => {
    const { __scopeMenubar: n, ...r } = e, o = ze(n);
    return /* @__PURE__ */ p(cl, { ...o, ...r, ref: t });
  }
);
Wg.displayName = qH;
var XH = "MenubarItemIndicator", Kg = l.forwardRef((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = ze(n);
  return /* @__PURE__ */ p(ll, { ...o, ...r, ref: t });
});
Kg.displayName = XH;
var ZH = "MenubarSeparator", Yg = l.forwardRef(
  (e, t) => {
    const { __scopeMenubar: n, ...r } = e, o = ze(n);
    return /* @__PURE__ */ p(ul, { ...o, ...r, ref: t });
  }
);
Yg.displayName = ZH;
var JH = "MenubarArrow", QH = l.forwardRef(
  (e, t) => {
    const { __scopeMenubar: n, ...r } = e, o = ze(n);
    return /* @__PURE__ */ p(dl, { ...o, ...r, ref: t });
  }
);
QH.displayName = JH;
var qg = "MenubarSub", Xg = (e) => {
  const { __scopeMenubar: t, children: n, open: r, onOpenChange: o, defaultOpen: a } = e, i = ze(t), [s, c] = xe({
    prop: r,
    defaultProp: a ?? !1,
    onChange: o,
    caller: qg
  });
  return /* @__PURE__ */ p(fl, { ...i, open: s, onOpenChange: c, children: n });
};
Xg.displayName = qg;
var ej = "MenubarSubTrigger", Zg = l.forwardRef(
  (e, t) => {
    const { __scopeMenubar: n, ...r } = e, o = ze(n);
    return /* @__PURE__ */ p(
      pl,
      {
        "data-radix-menubar-subtrigger": "",
        ...o,
        ...r,
        ref: t
      }
    );
  }
);
Zg.displayName = ej;
var tj = "MenubarSubContent", Jg = l.forwardRef(
  (e, t) => {
    const { __scopeMenubar: n, ...r } = e, o = ze(n);
    return /* @__PURE__ */ p(
      ml,
      {
        ...o,
        "data-radix-menubar-content": "",
        ...r,
        ref: t,
        style: {
          ...e.style,
          "--radix-menubar-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-menubar-content-available-width": "var(--radix-popper-available-width)",
          "--radix-menubar-content-available-height": "var(--radix-popper-available-height)",
          "--radix-menubar-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-menubar-trigger-height": "var(--radix-popper-anchor-height)"
        }
      }
    );
  }
);
Jg.displayName = tj;
function nj(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var Qg = Dg, rj = Lg, eb = Fg, tb = Bg, nb = zg, oj = Hg, rb = jg, ob = Vg, ab = Gg, aj = Ug, ib = Wg, sb = Kg, cb = Yg, ij = Xg, lb = Zg, ub = Jg;
const PW = rj, EW = oj, _W = tb, RW = ij, TW = aj, sj = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p(
  Qg,
  {
    ref: n,
    className: N(
      "flex h-9 items-center space-x-1 rounded-md border bg-background p-1 shadow-sm",
      e
    ),
    ...t
  }
));
sj.displayName = Qg.displayName;
const cj = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p(
  eb,
  {
    ref: n,
    className: N(
      "flex cursor-default select-none items-center rounded-sm px-3 py-1 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      e
    ),
    ...t
  }
));
cj.displayName = eb.displayName;
const lj = l.forwardRef(({ className: e, inset: t, children: n, ...r }, o) => /* @__PURE__ */ te(
  lb,
  {
    ref: o,
    className: N(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      t && "pl-8",
      e
    ),
    ...r,
    children: [
      n,
      /* @__PURE__ */ p(Ws, { className: "ml-auto h-4 w-4" })
    ]
  }
));
lj.displayName = lb.displayName;
const uj = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p(
  ub,
  {
    ref: n,
    className: N(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...t
  }
));
uj.displayName = ub.displayName;
const dj = l.forwardRef(
  ({ className: e, align: t = "start", alignOffset: n = -4, sideOffset: r = 8, ...o }, a) => /* @__PURE__ */ p(tb, { children: /* @__PURE__ */ p(
    nb,
    {
      ref: a,
      align: t,
      alignOffset: n,
      sideOffset: r,
      className: N(
        "z-50 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        e
      ),
      ...o
    }
  ) })
);
dj.displayName = nb.displayName;
const fj = l.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ p(
  ob,
  {
    ref: r,
    className: N(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      t && "pl-8",
      e
    ),
    ...n
  }
));
fj.displayName = ob.displayName;
const pj = l.forwardRef(({ className: e, children: t, checked: n, ...r }, o) => /* @__PURE__ */ te(
  ab,
  {
    ref: o,
    className: N(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    checked: n,
    ...r,
    children: [
      /* @__PURE__ */ p("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ p(sb, { children: /* @__PURE__ */ p(Dr, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
));
pj.displayName = ab.displayName;
const mj = l.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ te(
  ib,
  {
    ref: r,
    className: N(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ p("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ p(sb, { children: /* @__PURE__ */ p(ua, { className: "h-4 w-4 fill-current" }) }) }),
      t
    ]
  }
));
mj.displayName = ib.displayName;
const hj = l.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ p(
  rb,
  {
    ref: r,
    className: N(
      "px-2 py-1.5 text-sm font-semibold",
      t && "pl-8",
      e
    ),
    ...n
  }
));
hj.displayName = rb.displayName;
const vj = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p(
  cb,
  {
    ref: n,
    className: N("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
vj.displayName = cb.displayName;
const gj = ({
  className: e,
  ...t
}) => /* @__PURE__ */ p(
  "span",
  {
    className: N(
      "ml-auto text-xs tracking-widest text-muted-foreground",
      e
    ),
    ...t
  }
);
gj.displayname = "MenubarShortcut";
var Wa = "Popover", [db, AW] = be(Wa, [
  Tt
]), ro = Tt(), [bj, qt] = db(Wa), fb = (e) => {
  const {
    __scopePopover: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: a,
    modal: i = !1
  } = e, s = ro(t), c = l.useRef(null), [u, d] = l.useState(!1), [f, m] = xe({
    prop: r,
    defaultProp: o ?? !1,
    onChange: a,
    caller: Wa
  });
  return /* @__PURE__ */ p(er, { ...s, children: /* @__PURE__ */ p(
    bj,
    {
      scope: t,
      contentId: $e(),
      triggerRef: c,
      open: f,
      onOpenChange: m,
      onOpenToggle: l.useCallback(() => m((b) => !b), [m]),
      hasCustomAnchor: u,
      onCustomAnchorAdd: l.useCallback(() => d(!0), []),
      onCustomAnchorRemove: l.useCallback(() => d(!1), []),
      modal: i,
      children: n
    }
  ) });
};
fb.displayName = Wa;
var pb = "PopoverAnchor", mb = l.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = qt(pb, n), a = ro(n), { onCustomAnchorAdd: i, onCustomAnchorRemove: s } = o;
    return l.useEffect(() => (i(), () => s()), [i, s]), /* @__PURE__ */ p(tr, { ...a, ...r, ref: t });
  }
);
mb.displayName = pb;
var hb = "PopoverTrigger", vb = l.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = qt(hb, n), a = ro(n), i = ne(t, o.triggerRef), s = /* @__PURE__ */ p(
      W.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": Sb(o.open),
        ...r,
        ref: i,
        onClick: k(e.onClick, o.onOpenToggle)
      }
    );
    return o.hasCustomAnchor ? s : /* @__PURE__ */ p(tr, { asChild: !0, ...a, children: s });
  }
);
vb.displayName = hb;
var wl = "PopoverPortal", [yj, wj] = db(wl, {
  forceMount: void 0
}), gb = (e) => {
  const { __scopePopover: t, forceMount: n, children: r, container: o } = e, a = qt(wl, t);
  return /* @__PURE__ */ p(yj, { scope: t, forceMount: n, children: /* @__PURE__ */ p(Re, { present: n || a.open, children: /* @__PURE__ */ p(yn, { asChild: !0, container: o, children: r }) }) });
};
gb.displayName = wl;
var zn = "PopoverContent", bb = l.forwardRef(
  (e, t) => {
    const n = wj(zn, e.__scopePopover), { forceMount: r = n.forceMount, ...o } = e, a = qt(zn, e.__scopePopover);
    return /* @__PURE__ */ p(Re, { present: r || a.open, children: a.modal ? /* @__PURE__ */ p(xj, { ...o, ref: t }) : /* @__PURE__ */ p(Cj, { ...o, ref: t }) });
  }
);
bb.displayName = zn;
var Sj = ln("PopoverContent.RemoveScroll"), xj = l.forwardRef(
  (e, t) => {
    const n = qt(zn, e.__scopePopover), r = l.useRef(null), o = ne(t, r), a = l.useRef(!1);
    return l.useEffect(() => {
      const i = r.current;
      if (i) return _a(i);
    }, []), /* @__PURE__ */ p(Hr, { as: Sj, allowPinchZoom: !0, children: /* @__PURE__ */ p(
      yb,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: k(e.onCloseAutoFocus, (i) => {
          i.preventDefault(), a.current || n.triggerRef.current?.focus();
        }),
        onPointerDownOutside: k(
          e.onPointerDownOutside,
          (i) => {
            const s = i.detail.originalEvent, c = s.button === 0 && s.ctrlKey === !0, u = s.button === 2 || c;
            a.current = u;
          },
          { checkForDefaultPrevented: !1 }
        ),
        onFocusOutside: k(
          e.onFocusOutside,
          (i) => i.preventDefault(),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
), Cj = l.forwardRef(
  (e, t) => {
    const n = qt(zn, e.__scopePopover), r = l.useRef(!1), o = l.useRef(!1);
    return /* @__PURE__ */ p(
      yb,
      {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (a) => {
          e.onCloseAutoFocus?.(a), a.defaultPrevented || (r.current || n.triggerRef.current?.focus(), a.preventDefault()), r.current = !1, o.current = !1;
        },
        onInteractOutside: (a) => {
          e.onInteractOutside?.(a), a.defaultPrevented || (r.current = !0, a.detail.originalEvent.type === "pointerdown" && (o.current = !0));
          const i = a.target;
          n.triggerRef.current?.contains(i) && a.preventDefault(), a.detail.originalEvent.type === "focusin" && o.current && a.preventDefault();
        }
      }
    );
  }
), yb = l.forwardRef(
  (e, t) => {
    const {
      __scopePopover: n,
      trapFocus: r,
      onOpenAutoFocus: o,
      onCloseAutoFocus: a,
      disableOutsidePointerEvents: i,
      onEscapeKeyDown: s,
      onPointerDownOutside: c,
      onFocusOutside: u,
      onInteractOutside: d,
      ...f
    } = e, m = qt(zn, n), b = ro(n);
    return Pa(), /* @__PURE__ */ p(
      zr,
      {
        asChild: !0,
        loop: !0,
        trapped: r,
        onMountAutoFocus: o,
        onUnmountAutoFocus: a,
        children: /* @__PURE__ */ p(
          Wt,
          {
            asChild: !0,
            disableOutsidePointerEvents: i,
            onInteractOutside: d,
            onEscapeKeyDown: s,
            onPointerDownOutside: c,
            onFocusOutside: u,
            onDismiss: () => m.onOpenChange(!1),
            children: /* @__PURE__ */ p(
              Gr,
              {
                "data-state": Sb(m.open),
                role: "dialog",
                id: m.contentId,
                ...b,
                ...f,
                ref: t,
                style: {
                  ...f.style,
                  "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
                  "--radix-popover-content-available-width": "var(--radix-popper-available-width)",
                  "--radix-popover-content-available-height": "var(--radix-popper-available-height)",
                  "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
                  "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
                }
              }
            )
          }
        )
      }
    );
  }
), wb = "PopoverClose", Pj = l.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = qt(wb, n);
    return /* @__PURE__ */ p(
      W.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: k(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
Pj.displayName = wb;
var Ej = "PopoverArrow", _j = l.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = ro(n);
    return /* @__PURE__ */ p(Ur, { ...o, ...r, ref: t });
  }
);
_j.displayName = Ej;
function Sb(e) {
  return e ? "open" : "closed";
}
var Rj = fb, Tj = mb, Aj = vb, Nj = gb, xb = bb;
const NW = Rj, MW = Aj, OW = Tj, Mj = l.forwardRef(({ className: e, align: t = "center", sideOffset: n = 4, ...r }, o) => /* @__PURE__ */ p(Nj, { children: /* @__PURE__ */ p(
  xb,
  {
    ref: o,
    align: t,
    sideOffset: n,
    className: N(
      "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...r
  }
) }));
Mj.displayName = xb.displayName;
var Sl = "Progress", xl = 100, [Oj, $W] = be(Sl), [$j, Ij] = Oj(Sl), Cb = l.forwardRef(
  (e, t) => {
    const {
      __scopeProgress: n,
      value: r = null,
      max: o,
      getValueLabel: a = Dj,
      ...i
    } = e;
    (o || o === 0) && !Rd(o) && console.error(kj(`${o}`, "Progress"));
    const s = Rd(o) ? o : xl;
    r !== null && !Td(r, s) && console.error(Lj(`${r}`, "Progress"));
    const c = Td(r, s) ? r : null, u = na(c) ? a(c, s) : void 0;
    return /* @__PURE__ */ p($j, { scope: n, value: c, max: s, children: /* @__PURE__ */ p(
      W.div,
      {
        "aria-valuemax": s,
        "aria-valuemin": 0,
        "aria-valuenow": na(c) ? c : void 0,
        "aria-valuetext": u,
        role: "progressbar",
        "data-state": _b(c, s),
        "data-value": c ?? void 0,
        "data-max": s,
        ...i,
        ref: t
      }
    ) });
  }
);
Cb.displayName = Sl;
var Pb = "ProgressIndicator", Eb = l.forwardRef(
  (e, t) => {
    const { __scopeProgress: n, ...r } = e, o = Ij(Pb, n);
    return /* @__PURE__ */ p(
      W.div,
      {
        "data-state": _b(o.value, o.max),
        "data-value": o.value ?? void 0,
        "data-max": o.max,
        ...r,
        ref: t
      }
    );
  }
);
Eb.displayName = Pb;
function Dj(e, t) {
  return `${Math.round(e / t * 100)}%`;
}
function _b(e, t) {
  return e == null ? "indeterminate" : e === t ? "complete" : "loading";
}
function na(e) {
  return typeof e == "number";
}
function Rd(e) {
  return na(e) && !isNaN(e) && e > 0;
}
function Td(e, t) {
  return na(e) && !isNaN(e) && e <= t && e >= 0;
}
function kj(e, t) {
  return `Invalid prop \`max\` of value \`${e}\` supplied to \`${t}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${xl}\`.`;
}
function Lj(e, t) {
  return `Invalid prop \`value\` of value \`${e}\` supplied to \`${t}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${xl} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
var Rb = Cb, Fj = Eb;
const Bj = l.forwardRef(({ className: e, value: t, ...n }, r) => /* @__PURE__ */ p(
  Rb,
  {
    ref: r,
    className: N(
      "relative h-2 w-full overflow-hidden rounded-full bg-primary/20",
      e
    ),
    ...n,
    children: /* @__PURE__ */ p(
      Fj,
      {
        className: "h-full w-full flex-1 bg-primary transition-all",
        style: { transform: `translateX(-${100 - (t || 0)}%)` }
      }
    )
  }
));
Bj.displayName = Rb.displayName;
var Cl = "Radio", [zj, Tb] = be(Cl), [Hj, jj] = zj(Cl), Ab = l.forwardRef(
  (e, t) => {
    const {
      __scopeRadio: n,
      name: r,
      checked: o = !1,
      required: a,
      disabled: i,
      value: s = "on",
      onCheck: c,
      form: u,
      ...d
    } = e, [f, m] = l.useState(null), b = ne(t, (v) => m(v)), g = l.useRef(!1), h = f ? u || !!f.closest("form") : !0;
    return /* @__PURE__ */ te(Hj, { scope: n, checked: o, disabled: i, children: [
      /* @__PURE__ */ p(
        W.button,
        {
          type: "button",
          role: "radio",
          "aria-checked": o,
          "data-state": $b(o),
          "data-disabled": i ? "" : void 0,
          disabled: i,
          value: s,
          ...d,
          ref: b,
          onClick: k(e.onClick, (v) => {
            o || c?.(), h && (g.current = v.isPropagationStopped(), g.current || v.stopPropagation());
          })
        }
      ),
      h && /* @__PURE__ */ p(
        Ob,
        {
          control: f,
          bubbles: !g.current,
          name: r,
          value: s,
          checked: o,
          required: a,
          disabled: i,
          form: u,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
Ab.displayName = Cl;
var Nb = "RadioIndicator", Mb = l.forwardRef(
  (e, t) => {
    const { __scopeRadio: n, forceMount: r, ...o } = e, a = jj(Nb, n);
    return /* @__PURE__ */ p(Re, { present: r || a.checked, children: /* @__PURE__ */ p(
      W.span,
      {
        "data-state": $b(a.checked),
        "data-disabled": a.disabled ? "" : void 0,
        ...o,
        ref: t
      }
    ) });
  }
);
Mb.displayName = Nb;
var Vj = "RadioBubbleInput", Ob = l.forwardRef(
  ({
    __scopeRadio: e,
    control: t,
    checked: n,
    bubbles: r = !0,
    ...o
  }, a) => {
    const i = l.useRef(null), s = ne(i, a), c = Xr(n), u = Vr(t);
    return l.useEffect(() => {
      const d = i.current;
      if (!d) return;
      const f = window.HTMLInputElement.prototype, b = Object.getOwnPropertyDescriptor(
        f,
        "checked"
      ).set;
      if (c !== n && b) {
        const g = new Event("click", { bubbles: r });
        b.call(d, n), d.dispatchEvent(g);
      }
    }, [c, n, r]), /* @__PURE__ */ p(
      W.input,
      {
        type: "radio",
        "aria-hidden": !0,
        defaultChecked: n,
        ...o,
        tabIndex: -1,
        ref: s,
        style: {
          ...o.style,
          ...u,
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0
        }
      }
    );
  }
);
Ob.displayName = Vj;
function $b(e) {
  return e ? "checked" : "unchecked";
}
var Gj = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], Ka = "RadioGroup", [Uj, IW] = be(Ka, [
  Nt,
  Tb
]), Ib = Nt(), Db = Tb(), [Wj, Kj] = Uj(Ka), kb = l.forwardRef(
  (e, t) => {
    const {
      __scopeRadioGroup: n,
      name: r,
      defaultValue: o,
      value: a,
      required: i = !1,
      disabled: s = !1,
      orientation: c,
      dir: u,
      loop: d = !0,
      onValueChange: f,
      ...m
    } = e, b = Ib(n), g = At(u), [h, v] = xe({
      prop: a,
      defaultProp: o ?? null,
      onChange: f,
      caller: Ka
    });
    return /* @__PURE__ */ p(
      Wj,
      {
        scope: n,
        name: r,
        required: i,
        disabled: s,
        value: h,
        onValueChange: v,
        children: /* @__PURE__ */ p(
          Yr,
          {
            asChild: !0,
            ...b,
            orientation: c,
            dir: g,
            loop: d,
            children: /* @__PURE__ */ p(
              W.div,
              {
                role: "radiogroup",
                "aria-required": i,
                "aria-orientation": c,
                "data-disabled": s ? "" : void 0,
                dir: g,
                ...m,
                ref: t
              }
            )
          }
        )
      }
    );
  }
);
kb.displayName = Ka;
var Lb = "RadioGroupItem", Fb = l.forwardRef(
  (e, t) => {
    const { __scopeRadioGroup: n, disabled: r, ...o } = e, a = Kj(Lb, n), i = a.disabled || r, s = Ib(n), c = Db(n), u = l.useRef(null), d = ne(t, u), f = a.value === o.value, m = l.useRef(!1);
    return l.useEffect(() => {
      const b = (h) => {
        Gj.includes(h.key) && (m.current = !0);
      }, g = () => m.current = !1;
      return document.addEventListener("keydown", b), document.addEventListener("keyup", g), () => {
        document.removeEventListener("keydown", b), document.removeEventListener("keyup", g);
      };
    }, []), /* @__PURE__ */ p(
      qr,
      {
        asChild: !0,
        ...s,
        focusable: !i,
        active: f,
        children: /* @__PURE__ */ p(
          Ab,
          {
            disabled: i,
            required: a.required,
            checked: f,
            ...c,
            ...o,
            name: a.name,
            ref: d,
            onCheck: () => a.onValueChange(o.value),
            onKeyDown: k((b) => {
              b.key === "Enter" && b.preventDefault();
            }),
            onFocus: k(o.onFocus, () => {
              m.current && u.current?.click();
            })
          }
        )
      }
    );
  }
);
Fb.displayName = Lb;
var Yj = "RadioGroupIndicator", Bb = l.forwardRef(
  (e, t) => {
    const { __scopeRadioGroup: n, ...r } = e, o = Db(n);
    return /* @__PURE__ */ p(Mb, { ...o, ...r, ref: t });
  }
);
Bb.displayName = Yj;
var zb = kb, Hb = Fb, qj = Bb;
const Xj = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p(
  zb,
  {
    className: N("grid gap-2", e),
    ...t,
    ref: n
  }
));
Xj.displayName = zb.displayName;
const Zj = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p(
  Hb,
  {
    ref: n,
    className: N(
      "aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
      e
    ),
    ...t,
    children: /* @__PURE__ */ p(qj, { className: "flex items-center justify-center", children: /* @__PURE__ */ p(ua, { className: "h-3.5 w-3.5 fill-primary" }) })
  }
));
Zj.displayName = Hb.displayName;
const Ya = mS(null);
Ya.displayName = "PanelGroupContext";
const Ee = {
  group: "data-panel-group",
  groupDirection: "data-panel-group-direction",
  groupId: "data-panel-group-id",
  panel: "data-panel",
  panelCollapsible: "data-panel-collapsible",
  panelId: "data-panel-id",
  panelSize: "data-panel-size",
  resizeHandle: "data-resize-handle",
  resizeHandleActive: "data-resize-handle-active",
  resizeHandleEnabled: "data-panel-resize-handle-enabled",
  resizeHandleId: "data-panel-resize-handle-id",
  resizeHandleState: "data-resize-handle-state"
}, Pl = 10, sn = Us, Ad = l.useId, Jj = typeof Ad == "function" ? Ad : () => null;
let Qj = 0;
function El(e = null) {
  const t = Jj(), n = De(e || t || null);
  return n.current === null && (n.current = "" + Qj++), e ?? n.current;
}
function jb({
  children: e,
  className: t = "",
  collapsedSize: n,
  collapsible: r,
  defaultSize: o,
  forwardedRef: a,
  id: i,
  maxSize: s,
  minSize: c,
  onCollapse: u,
  onExpand: d,
  onResize: f,
  order: m,
  style: b,
  tagName: g = "div",
  ...h
}) {
  const v = Hd(Ya);
  if (v === null)
    throw Error("Panel components must be rendered within a PanelGroup container");
  const {
    collapsePanel: y,
    expandPanel: w,
    getPanelSize: S,
    getPanelStyle: x,
    groupId: P,
    isPanelCollapsed: E,
    reevaluatePanelConstraints: C,
    registerPanel: T,
    resizePanel: R,
    unregisterPanel: D
  } = v, M = El(i), F = De({
    callbacks: {
      onCollapse: u,
      onExpand: d,
      onResize: f
    },
    constraints: {
      collapsedSize: n,
      collapsible: r,
      defaultSize: o,
      maxSize: s,
      minSize: c
    },
    id: M,
    idIsFromProps: i !== void 0,
    order: m
  });
  De({
    didLogMissingDefaultSizeWarning: !1
  }), sn(() => {
    const {
      callbacks: I,
      constraints: z
    } = F.current, L = {
      ...z
    };
    F.current.id = M, F.current.idIsFromProps = i !== void 0, F.current.order = m, I.onCollapse = u, I.onExpand = d, I.onResize = f, z.collapsedSize = n, z.collapsible = r, z.defaultSize = o, z.maxSize = s, z.minSize = c, (L.collapsedSize !== z.collapsedSize || L.collapsible !== z.collapsible || L.maxSize !== z.maxSize || L.minSize !== z.minSize) && C(F.current, L);
  }), sn(() => {
    const I = F.current;
    return T(I), () => {
      D(I);
    };
  }, [m, M, T, D]), Vs(a, () => ({
    collapse: () => {
      y(F.current);
    },
    expand: (I) => {
      w(F.current, I);
    },
    getId() {
      return M;
    },
    getSize() {
      return S(F.current);
    },
    isCollapsed() {
      return E(F.current);
    },
    isExpanded() {
      return !E(F.current);
    },
    resize: (I) => {
      R(F.current, I);
    }
  }), [y, w, S, E, M, R]);
  const $ = x(F.current, o);
  return $n(g, {
    ...h,
    children: e,
    className: t,
    id: M,
    style: {
      ...$,
      ...b
    },
    // CSS selectors
    [Ee.groupId]: P,
    [Ee.panel]: "",
    [Ee.panelCollapsible]: r || void 0,
    [Ee.panelId]: M,
    [Ee.panelSize]: parseFloat("" + $.flexGrow).toFixed(1)
  });
}
const Vb = js((e, t) => $n(jb, {
  ...e,
  forwardedRef: t
}));
jb.displayName = "Panel";
Vb.displayName = "forwardRef(Panel)";
let Ns = null, Ao = -1, Ht = null;
function eV(e, t) {
  if (t) {
    const n = (t & Yb) !== 0, r = (t & qb) !== 0, o = (t & Xb) !== 0, a = (t & Zb) !== 0;
    if (n)
      return o ? "se-resize" : a ? "ne-resize" : "e-resize";
    if (r)
      return o ? "sw-resize" : a ? "nw-resize" : "w-resize";
    if (o)
      return "s-resize";
    if (a)
      return "n-resize";
  }
  switch (e) {
    case "horizontal":
      return "ew-resize";
    case "intersection":
      return "move";
    case "vertical":
      return "ns-resize";
  }
}
function tV() {
  Ht !== null && (document.head.removeChild(Ht), Ns = null, Ht = null, Ao = -1);
}
function ki(e, t) {
  var n, r;
  const o = eV(e, t);
  if (Ns !== o) {
    if (Ns = o, Ht === null && (Ht = document.createElement("style"), document.head.appendChild(Ht)), Ao >= 0) {
      var a;
      (a = Ht.sheet) === null || a === void 0 || a.removeRule(Ao);
    }
    Ao = (n = (r = Ht.sheet) === null || r === void 0 ? void 0 : r.insertRule(`*{cursor: ${o} !important;}`)) !== null && n !== void 0 ? n : -1;
  }
}
function Gb(e) {
  return e.type === "keydown";
}
function Ub(e) {
  return e.type.startsWith("pointer");
}
function Wb(e) {
  return e.type.startsWith("mouse");
}
function qa(e) {
  if (Ub(e)) {
    if (e.isPrimary)
      return {
        x: e.clientX,
        y: e.clientY
      };
  } else if (Wb(e))
    return {
      x: e.clientX,
      y: e.clientY
    };
  return {
    x: 1 / 0,
    y: 1 / 0
  };
}
function nV() {
  if (typeof matchMedia == "function")
    return matchMedia("(pointer:coarse)").matches ? "coarse" : "fine";
}
function rV(e, t, n) {
  return e.x < t.x + t.width && e.x + e.width > t.x && e.y < t.y + t.height && e.y + e.height > t.y;
}
function oV(e, t) {
  if (e === t) throw new Error("Cannot compare node with itself");
  const n = {
    a: Od(e),
    b: Od(t)
  };
  let r;
  for (; n.a.at(-1) === n.b.at(-1); )
    e = n.a.pop(), t = n.b.pop(), r = e;
  ce(r, "Stacking order can only be calculated for elements with a common ancestor");
  const o = {
    a: Md(Nd(n.a)),
    b: Md(Nd(n.b))
  };
  if (o.a === o.b) {
    const a = r.childNodes, i = {
      a: n.a.at(-1),
      b: n.b.at(-1)
    };
    let s = a.length;
    for (; s--; ) {
      const c = a[s];
      if (c === i.a) return 1;
      if (c === i.b) return -1;
    }
  }
  return Math.sign(o.a - o.b);
}
const aV = /\b(?:position|zIndex|opacity|transform|webkitTransform|mixBlendMode|filter|webkitFilter|isolation)\b/;
function iV(e) {
  var t;
  const n = getComputedStyle((t = Kb(e)) !== null && t !== void 0 ? t : e).display;
  return n === "flex" || n === "inline-flex";
}
function sV(e) {
  const t = getComputedStyle(e);
  return !!(t.position === "fixed" || t.zIndex !== "auto" && (t.position !== "static" || iV(e)) || +t.opacity < 1 || "transform" in t && t.transform !== "none" || "webkitTransform" in t && t.webkitTransform !== "none" || "mixBlendMode" in t && t.mixBlendMode !== "normal" || "filter" in t && t.filter !== "none" || "webkitFilter" in t && t.webkitFilter !== "none" || "isolation" in t && t.isolation === "isolate" || aV.test(t.willChange) || t.webkitOverflowScrolling === "touch");
}
function Nd(e) {
  let t = e.length;
  for (; t--; ) {
    const n = e[t];
    if (ce(n, "Missing node"), sV(n)) return n;
  }
  return null;
}
function Md(e) {
  return e && Number(getComputedStyle(e).zIndex) || 0;
}
function Od(e) {
  const t = [];
  for (; e; )
    t.push(e), e = Kb(e);
  return t;
}
function Kb(e) {
  const {
    parentNode: t
  } = e;
  return t && t instanceof ShadowRoot ? t.host : t;
}
const Yb = 1, qb = 2, Xb = 4, Zb = 8, cV = nV() === "coarse";
let ut = [], On = !1, an = /* @__PURE__ */ new Map(), Xa = /* @__PURE__ */ new Map();
const Nr = /* @__PURE__ */ new Set();
function lV(e, t, n, r, o) {
  var a;
  const {
    ownerDocument: i
  } = t, s = {
    direction: n,
    element: t,
    hitAreaMargins: r,
    setResizeHandlerState: o
  }, c = (a = an.get(i)) !== null && a !== void 0 ? a : 0;
  return an.set(i, c + 1), Nr.add(s), ra(), function() {
    var d;
    Xa.delete(e), Nr.delete(s);
    const f = (d = an.get(i)) !== null && d !== void 0 ? d : 1;
    if (an.set(i, f - 1), ra(), f === 1 && an.delete(i), ut.includes(s)) {
      const m = ut.indexOf(s);
      m >= 0 && ut.splice(m, 1), Rl(), o("up", !0, null);
    }
  };
}
function uV(e) {
  const {
    target: t
  } = e, {
    x: n,
    y: r
  } = qa(e);
  On = !0, _l({
    target: t,
    x: n,
    y: r
  }), ra(), ut.length > 0 && (oa("down", e), e.preventDefault(), Jb(t) || e.stopImmediatePropagation());
}
function Li(e) {
  const {
    x: t,
    y: n
  } = qa(e);
  if (On && e.buttons === 0 && (On = !1, oa("up", e)), !On) {
    const {
      target: r
    } = e;
    _l({
      target: r,
      x: t,
      y: n
    });
  }
  oa("move", e), Rl(), ut.length > 0 && e.preventDefault();
}
function Fi(e) {
  const {
    target: t
  } = e, {
    x: n,
    y: r
  } = qa(e);
  Xa.clear(), On = !1, ut.length > 0 && (e.preventDefault(), Jb(t) || e.stopImmediatePropagation()), oa("up", e), _l({
    target: t,
    x: n,
    y: r
  }), Rl(), ra();
}
function Jb(e) {
  let t = e;
  for (; t; ) {
    if (t.hasAttribute(Ee.resizeHandle))
      return !0;
    t = t.parentElement;
  }
  return !1;
}
function _l({
  target: e,
  x: t,
  y: n
}) {
  ut.splice(0);
  let r = null;
  (e instanceof HTMLElement || e instanceof SVGElement) && (r = e), Nr.forEach((o) => {
    const {
      element: a,
      hitAreaMargins: i
    } = o, s = a.getBoundingClientRect(), {
      bottom: c,
      left: u,
      right: d,
      top: f
    } = s, m = cV ? i.coarse : i.fine;
    if (t >= u - m && t <= d + m && n >= f - m && n <= c + m) {
      if (r !== null && document.contains(r) && a !== r && !a.contains(r) && !r.contains(a) && // Calculating stacking order has a cost, so we should avoid it if possible
      // That is why we only check potentially intersecting handles,
      // and why we skip if the event target is within the handle's DOM
      oV(r, a) > 0) {
        let g = r, h = !1;
        for (; g && !g.contains(a); ) {
          if (rV(g.getBoundingClientRect(), s)) {
            h = !0;
            break;
          }
          g = g.parentElement;
        }
        if (h)
          return;
      }
      ut.push(o);
    }
  });
}
function Bi(e, t) {
  Xa.set(e, t);
}
function Rl() {
  let e = !1, t = !1;
  ut.forEach((r) => {
    const {
      direction: o
    } = r;
    o === "horizontal" ? e = !0 : t = !0;
  });
  let n = 0;
  Xa.forEach((r) => {
    n |= r;
  }), e && t ? ki("intersection", n) : e ? ki("horizontal", n) : t ? ki("vertical", n) : tV();
}
let zi = new AbortController();
function ra() {
  zi.abort(), zi = new AbortController();
  const e = {
    capture: !0,
    signal: zi.signal
  };
  Nr.size && (On ? (ut.length > 0 && an.forEach((t, n) => {
    const {
      body: r
    } = n;
    t > 0 && (r.addEventListener("contextmenu", Fi, e), r.addEventListener("pointerleave", Li, e), r.addEventListener("pointermove", Li, e));
  }), window.addEventListener("pointerup", Fi, e), window.addEventListener("pointercancel", Fi, e)) : an.forEach((t, n) => {
    const {
      body: r
    } = n;
    t > 0 && (r.addEventListener("pointerdown", uV, e), r.addEventListener("pointermove", Li, e));
  }));
}
function oa(e, t) {
  Nr.forEach((n) => {
    const {
      setResizeHandlerState: r
    } = n, o = ut.includes(n);
    r(e, o, t);
  });
}
function dV() {
  const [e, t] = xt(0);
  return Le(() => t((n) => n + 1), []);
}
function ce(e, t) {
  if (!e)
    throw console.error(t), Error(t);
}
function pn(e, t, n = Pl) {
  return e.toFixed(n) === t.toFixed(n) ? 0 : e > t ? 1 : -1;
}
function It(e, t, n = Pl) {
  return pn(e, t, n) === 0;
}
function We(e, t, n) {
  return pn(e, t, n) === 0;
}
function fV(e, t, n) {
  if (e.length !== t.length)
    return !1;
  for (let r = 0; r < e.length; r++) {
    const o = e[r], a = t[r];
    if (!We(o, a, n))
      return !1;
  }
  return !0;
}
function Tn({
  panelConstraints: e,
  panelIndex: t,
  size: n
}) {
  const r = e[t];
  ce(r != null, `Panel constraints not found for index ${t}`);
  let {
    collapsedSize: o = 0,
    collapsible: a,
    maxSize: i = 100,
    minSize: s = 0
  } = r;
  if (pn(n, s) < 0)
    if (a) {
      const c = (o + s) / 2;
      pn(n, c) < 0 ? n = o : n = s;
    } else
      n = s;
  return n = Math.min(i, n), n = parseFloat(n.toFixed(Pl)), n;
}
function fr({
  delta: e,
  initialLayout: t,
  panelConstraints: n,
  pivotIndices: r,
  prevLayout: o,
  trigger: a
}) {
  if (We(e, 0))
    return t;
  const i = [...t], [s, c] = r;
  ce(s != null, "Invalid first pivot index"), ce(c != null, "Invalid second pivot index");
  let u = 0;
  if (a === "keyboard") {
    {
      const f = e < 0 ? c : s, m = n[f];
      ce(m, `Panel constraints not found for index ${f}`);
      const {
        collapsedSize: b = 0,
        collapsible: g,
        minSize: h = 0
      } = m;
      if (g) {
        const v = t[f];
        if (ce(v != null, `Previous layout not found for panel index ${f}`), We(v, b)) {
          const y = h - v;
          pn(y, Math.abs(e)) > 0 && (e = e < 0 ? 0 - y : y);
        }
      }
    }
    {
      const f = e < 0 ? s : c, m = n[f];
      ce(m, `No panel constraints found for index ${f}`);
      const {
        collapsedSize: b = 0,
        collapsible: g,
        minSize: h = 0
      } = m;
      if (g) {
        const v = t[f];
        if (ce(v != null, `Previous layout not found for panel index ${f}`), We(v, h)) {
          const y = v - b;
          pn(y, Math.abs(e)) > 0 && (e = e < 0 ? 0 - y : y);
        }
      }
    }
  }
  {
    const f = e < 0 ? 1 : -1;
    let m = e < 0 ? c : s, b = 0;
    for (; ; ) {
      const h = t[m];
      ce(h != null, `Previous layout not found for panel index ${m}`);
      const y = Tn({
        panelConstraints: n,
        panelIndex: m,
        size: 100
      }) - h;
      if (b += y, m += f, m < 0 || m >= n.length)
        break;
    }
    const g = Math.min(Math.abs(e), Math.abs(b));
    e = e < 0 ? 0 - g : g;
  }
  {
    let m = e < 0 ? s : c;
    for (; m >= 0 && m < n.length; ) {
      const b = Math.abs(e) - Math.abs(u), g = t[m];
      ce(g != null, `Previous layout not found for panel index ${m}`);
      const h = g - b, v = Tn({
        panelConstraints: n,
        panelIndex: m,
        size: h
      });
      if (!We(g, v) && (u += g - v, i[m] = v, u.toPrecision(3).localeCompare(Math.abs(e).toPrecision(3), void 0, {
        numeric: !0
      }) >= 0))
        break;
      e < 0 ? m-- : m++;
    }
  }
  if (fV(o, i))
    return o;
  {
    const f = e < 0 ? c : s, m = t[f];
    ce(m != null, `Previous layout not found for panel index ${f}`);
    const b = m + u, g = Tn({
      panelConstraints: n,
      panelIndex: f,
      size: b
    });
    if (i[f] = g, !We(g, b)) {
      let h = b - g, y = e < 0 ? c : s;
      for (; y >= 0 && y < n.length; ) {
        const w = i[y];
        ce(w != null, `Previous layout not found for panel index ${y}`);
        const S = w + h, x = Tn({
          panelConstraints: n,
          panelIndex: y,
          size: S
        });
        if (We(w, x) || (h -= x - w, i[y] = x), We(h, 0))
          break;
        e > 0 ? y-- : y++;
      }
    }
  }
  const d = i.reduce((f, m) => m + f, 0);
  return We(d, 100) ? i : o;
}
function pV({
  layout: e,
  panelsArray: t,
  pivotIndices: n
}) {
  let r = 0, o = 100, a = 0, i = 0;
  const s = n[0];
  ce(s != null, "No pivot index found"), t.forEach((f, m) => {
    const {
      constraints: b
    } = f, {
      maxSize: g = 100,
      minSize: h = 0
    } = b;
    m === s ? (r = h, o = g) : (a += h, i += g);
  });
  const c = Math.min(o, 100 - a), u = Math.max(r, 100 - i), d = e[s];
  return {
    valueMax: c,
    valueMin: u,
    valueNow: d
  };
}
function Mr(e, t = document) {
  return Array.from(t.querySelectorAll(`[${Ee.resizeHandleId}][data-panel-group-id="${e}"]`));
}
function Qb(e, t, n = document) {
  const o = Mr(e, n).findIndex((a) => a.getAttribute(Ee.resizeHandleId) === t);
  return o ?? null;
}
function ey(e, t, n) {
  const r = Qb(e, t, n);
  return r != null ? [r, r + 1] : [-1, -1];
}
function ty(e, t = document) {
  var n;
  if (t instanceof HTMLElement && (t == null || (n = t.dataset) === null || n === void 0 ? void 0 : n.panelGroupId) == e)
    return t;
  const r = t.querySelector(`[data-panel-group][data-panel-group-id="${e}"]`);
  return r || null;
}
function Za(e, t = document) {
  const n = t.querySelector(`[${Ee.resizeHandleId}="${e}"]`);
  return n || null;
}
function mV(e, t, n, r = document) {
  var o, a, i, s;
  const c = Za(t, r), u = Mr(e, r), d = c ? u.indexOf(c) : -1, f = (o = (a = n[d]) === null || a === void 0 ? void 0 : a.id) !== null && o !== void 0 ? o : null, m = (i = (s = n[d + 1]) === null || s === void 0 ? void 0 : s.id) !== null && i !== void 0 ? i : null;
  return [f, m];
}
function hV({
  committedValuesRef: e,
  eagerValuesRef: t,
  groupId: n,
  layout: r,
  panelDataArray: o,
  panelGroupElement: a,
  setLayout: i
}) {
  De({
    didWarnAboutMissingResizeHandle: !1
  }), sn(() => {
    if (!a)
      return;
    const s = Mr(n, a);
    for (let c = 0; c < o.length - 1; c++) {
      const {
        valueMax: u,
        valueMin: d,
        valueNow: f
      } = pV({
        layout: r,
        panelsArray: o,
        pivotIndices: [c, c + 1]
      }), m = s[c];
      if (m != null) {
        const b = o[c];
        ce(b, `No panel data found for index "${c}"`), m.setAttribute("aria-controls", b.id), m.setAttribute("aria-valuemax", "" + Math.round(u)), m.setAttribute("aria-valuemin", "" + Math.round(d)), m.setAttribute("aria-valuenow", f != null ? "" + Math.round(f) : "");
      }
    }
    return () => {
      s.forEach((c, u) => {
        c.removeAttribute("aria-controls"), c.removeAttribute("aria-valuemax"), c.removeAttribute("aria-valuemin"), c.removeAttribute("aria-valuenow");
      });
    };
  }, [n, r, o, a]), et(() => {
    if (!a)
      return;
    const s = t.current;
    ce(s, "Eager values not found");
    const {
      panelDataArray: c
    } = s, u = ty(n, a);
    ce(u != null, `No group found for id "${n}"`);
    const d = Mr(n, a);
    ce(d, `No resize handles found for group id "${n}"`);
    const f = d.map((m) => {
      const b = m.getAttribute(Ee.resizeHandleId);
      ce(b, "Resize handle element has no handle id attribute");
      const [g, h] = mV(n, b, c, a);
      if (g == null || h == null)
        return () => {
        };
      const v = (y) => {
        if (!y.defaultPrevented)
          switch (y.key) {
            case "Enter": {
              y.preventDefault();
              const w = c.findIndex((S) => S.id === g);
              if (w >= 0) {
                const S = c[w];
                ce(S, `No panel data found for index ${w}`);
                const x = r[w], {
                  collapsedSize: P = 0,
                  collapsible: E,
                  minSize: C = 0
                } = S.constraints;
                if (x != null && E) {
                  const T = fr({
                    delta: We(x, P) ? C - P : P - x,
                    initialLayout: r,
                    panelConstraints: c.map((R) => R.constraints),
                    pivotIndices: ey(n, b, a),
                    prevLayout: r,
                    trigger: "keyboard"
                  });
                  r !== T && i(T);
                }
              }
              break;
            }
          }
      };
      return m.addEventListener("keydown", v), () => {
        m.removeEventListener("keydown", v);
      };
    });
    return () => {
      f.forEach((m) => m());
    };
  }, [a, e, t, n, r, o, i]);
}
function $d(e, t) {
  if (e.length !== t.length)
    return !1;
  for (let n = 0; n < e.length; n++)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
function ny(e, t) {
  const n = e === "horizontal", {
    x: r,
    y: o
  } = qa(t);
  return n ? r : o;
}
function vV(e, t, n, r, o) {
  const a = n === "horizontal", i = Za(t, o);
  ce(i, `No resize handle element found for id "${t}"`);
  const s = i.getAttribute(Ee.groupId);
  ce(s, "Resize handle element has no group id attribute");
  let {
    initialCursorPosition: c
  } = r;
  const u = ny(n, e), d = ty(s, o);
  ce(d, `No group element found for id "${s}"`);
  const f = d.getBoundingClientRect(), m = a ? f.width : f.height;
  return (u - c) / m * 100;
}
function gV(e, t, n, r, o, a) {
  if (Gb(e)) {
    const i = n === "horizontal";
    let s = 0;
    e.shiftKey ? s = 100 : o != null ? s = o : s = 10;
    let c = 0;
    switch (e.key) {
      case "ArrowDown":
        c = i ? 0 : s;
        break;
      case "ArrowLeft":
        c = i ? -s : 0;
        break;
      case "ArrowRight":
        c = i ? s : 0;
        break;
      case "ArrowUp":
        c = i ? 0 : -s;
        break;
      case "End":
        c = 100;
        break;
      case "Home":
        c = -100;
        break;
    }
    return c;
  } else
    return r == null ? 0 : vV(e, t, n, r, a);
}
function bV({
  panelDataArray: e
}) {
  const t = Array(e.length), n = e.map((a) => a.constraints);
  let r = 0, o = 100;
  for (let a = 0; a < e.length; a++) {
    const i = n[a];
    ce(i, `Panel constraints not found for index ${a}`);
    const {
      defaultSize: s
    } = i;
    s != null && (r++, t[a] = s, o -= s);
  }
  for (let a = 0; a < e.length; a++) {
    const i = n[a];
    ce(i, `Panel constraints not found for index ${a}`);
    const {
      defaultSize: s
    } = i;
    if (s != null)
      continue;
    const c = e.length - r, u = o / c;
    r++, t[a] = u, o -= u;
  }
  return t;
}
function _n(e, t, n) {
  t.forEach((r, o) => {
    const a = e[o];
    ce(a, `Panel data not found for index ${o}`);
    const {
      callbacks: i,
      constraints: s,
      id: c
    } = a, {
      collapsedSize: u = 0,
      collapsible: d
    } = s, f = n[c];
    if (f == null || r !== f) {
      n[c] = r;
      const {
        onCollapse: m,
        onExpand: b,
        onResize: g
      } = i;
      g && g(r, f), d && (m || b) && (b && (f == null || It(f, u)) && !It(r, u) && b(), m && (f == null || !It(f, u)) && It(r, u) && m());
    }
  });
}
function xo(e, t) {
  if (e.length !== t.length)
    return !1;
  for (let n = 0; n < e.length; n++)
    if (e[n] != t[n])
      return !1;
  return !0;
}
function yV({
  defaultSize: e,
  dragState: t,
  layout: n,
  panelData: r,
  panelIndex: o,
  precision: a = 3
}) {
  const i = n[o];
  let s;
  return i == null ? s = e != null ? e.toPrecision(a) : "1" : r.length === 1 ? s = "1" : s = i.toPrecision(a), {
    flexBasis: 0,
    flexGrow: s,
    flexShrink: 1,
    // Without this, Panel sizes may be unintentionally overridden by their content
    overflow: "hidden",
    // Disable pointer events inside of a panel during resize
    // This avoid edge cases like nested iframes
    pointerEvents: t !== null ? "none" : void 0
  };
}
function wV(e, t = 10) {
  let n = null;
  return (...o) => {
    n !== null && clearTimeout(n), n = setTimeout(() => {
      e(...o);
    }, t);
  };
}
function Id(e) {
  try {
    if (typeof localStorage < "u")
      e.getItem = (t) => localStorage.getItem(t), e.setItem = (t, n) => {
        localStorage.setItem(t, n);
      };
    else
      throw new Error("localStorage not supported in this environment");
  } catch (t) {
    console.error(t), e.getItem = () => null, e.setItem = () => {
    };
  }
}
function ry(e) {
  return `react-resizable-panels:${e}`;
}
function oy(e) {
  return e.map((t) => {
    const {
      constraints: n,
      id: r,
      idIsFromProps: o,
      order: a
    } = t;
    return o ? r : a ? `${a}:${JSON.stringify(n)}` : JSON.stringify(n);
  }).sort((t, n) => t.localeCompare(n)).join(",");
}
function ay(e, t) {
  try {
    const n = ry(e), r = t.getItem(n);
    if (r) {
      const o = JSON.parse(r);
      if (typeof o == "object" && o != null)
        return o;
    }
  } catch {
  }
  return null;
}
function SV(e, t, n) {
  var r, o;
  const a = (r = ay(e, n)) !== null && r !== void 0 ? r : {}, i = oy(t);
  return (o = a[i]) !== null && o !== void 0 ? o : null;
}
function xV(e, t, n, r, o) {
  var a;
  const i = ry(e), s = oy(t), c = (a = ay(e, o)) !== null && a !== void 0 ? a : {};
  c[s] = {
    expandToSizes: Object.fromEntries(n.entries()),
    layout: r
  };
  try {
    o.setItem(i, JSON.stringify(c));
  } catch (u) {
    console.error(u);
  }
}
function Dd({
  layout: e,
  panelConstraints: t
}) {
  const n = [...e], r = n.reduce((a, i) => a + i, 0);
  if (n.length !== t.length)
    throw Error(`Invalid ${t.length} panel layout: ${n.map((a) => `${a}%`).join(", ")}`);
  if (!We(r, 100) && n.length > 0)
    for (let a = 0; a < t.length; a++) {
      const i = n[a];
      ce(i != null, `No layout data found for index ${a}`);
      const s = 100 / r * i;
      n[a] = s;
    }
  let o = 0;
  for (let a = 0; a < t.length; a++) {
    const i = n[a];
    ce(i != null, `No layout data found for index ${a}`);
    const s = Tn({
      panelConstraints: t,
      panelIndex: a,
      size: i
    });
    i != s && (o += i - s, n[a] = s);
  }
  if (!We(o, 0))
    for (let a = 0; a < t.length; a++) {
      const i = n[a];
      ce(i != null, `No layout data found for index ${a}`);
      const s = i + o, c = Tn({
        panelConstraints: t,
        panelIndex: a,
        size: s
      });
      if (i !== c && (o -= c - i, n[a] = c, We(o, 0)))
        break;
    }
  return n;
}
const CV = 100, pr = {
  getItem: (e) => (Id(pr), pr.getItem(e)),
  setItem: (e, t) => {
    Id(pr), pr.setItem(e, t);
  }
}, kd = {};
function iy({
  autoSaveId: e = null,
  children: t,
  className: n = "",
  direction: r,
  forwardedRef: o,
  id: a = null,
  onLayout: i = null,
  keyboardResizeBy: s = null,
  storage: c = pr,
  style: u,
  tagName: d = "div",
  ...f
}) {
  const m = El(a), b = De(null), [g, h] = xt(null), [v, y] = xt([]), w = dV(), S = De({}), x = De(/* @__PURE__ */ new Map()), P = De(0), E = De({
    autoSaveId: e,
    direction: r,
    dragState: g,
    id: m,
    keyboardResizeBy: s,
    onLayout: i,
    storage: c
  }), C = De({
    layout: v,
    panelDataArray: [],
    panelDataArrayChanged: !1
  });
  De({
    didLogIdAndOrderWarning: !1,
    didLogPanelConstraintsWarning: !1,
    prevPanelIds: []
  }), Vs(o, () => ({
    getId: () => E.current.id,
    getLayout: () => {
      const {
        layout: j
      } = C.current;
      return j;
    },
    setLayout: (j) => {
      const {
        onLayout: K
      } = E.current, {
        layout: J,
        panelDataArray: Y
      } = C.current, O = Dd({
        layout: j,
        panelConstraints: Y.map((G) => G.constraints)
      });
      $d(J, O) || (y(O), C.current.layout = O, K && K(O), _n(Y, O, S.current));
    }
  }), []), sn(() => {
    E.current.autoSaveId = e, E.current.direction = r, E.current.dragState = g, E.current.id = m, E.current.onLayout = i, E.current.storage = c;
  }), hV({
    committedValuesRef: E,
    eagerValuesRef: C,
    groupId: m,
    layout: v,
    panelDataArray: C.current.panelDataArray,
    setLayout: y,
    panelGroupElement: b.current
  }), et(() => {
    const {
      panelDataArray: j
    } = C.current;
    if (e) {
      if (v.length === 0 || v.length !== j.length)
        return;
      let K = kd[e];
      K == null && (K = wV(xV, CV), kd[e] = K);
      const J = [...j], Y = new Map(x.current);
      K(e, J, Y, v, c);
    }
  }, [e, v, c]), et(() => {
  });
  const T = Le((j) => {
    const {
      onLayout: K
    } = E.current, {
      layout: J,
      panelDataArray: Y
    } = C.current;
    if (j.constraints.collapsible) {
      const O = Y.map((X) => X.constraints), {
        collapsedSize: G = 0,
        panelSize: ee,
        pivotIndices: Q
      } = nn(Y, j, J);
      if (ce(ee != null, `Panel size not found for panel "${j.id}"`), !It(ee, G)) {
        x.current.set(j.id, ee);
        const V = Rn(Y, j) === Y.length - 1 ? ee - G : G - ee, Z = fr({
          delta: V,
          initialLayout: J,
          panelConstraints: O,
          pivotIndices: Q,
          prevLayout: J,
          trigger: "imperative-api"
        });
        xo(J, Z) || (y(Z), C.current.layout = Z, K && K(Z), _n(Y, Z, S.current));
      }
    }
  }, []), R = Le((j, K) => {
    const {
      onLayout: J
    } = E.current, {
      layout: Y,
      panelDataArray: O
    } = C.current;
    if (j.constraints.collapsible) {
      const G = O.map((_) => _.constraints), {
        collapsedSize: ee = 0,
        panelSize: Q = 0,
        minSize: X = 0,
        pivotIndices: V
      } = nn(O, j, Y), Z = K ?? X;
      if (It(Q, ee)) {
        const _ = x.current.get(j.id), q = _ != null && _ >= Z ? _ : Z, le = Rn(O, j) === O.length - 1 ? Q - q : q - Q, ue = fr({
          delta: le,
          initialLayout: Y,
          panelConstraints: G,
          pivotIndices: V,
          prevLayout: Y,
          trigger: "imperative-api"
        });
        xo(Y, ue) || (y(ue), C.current.layout = ue, J && J(ue), _n(O, ue, S.current));
      }
    }
  }, []), D = Le((j) => {
    const {
      layout: K,
      panelDataArray: J
    } = C.current, {
      panelSize: Y
    } = nn(J, j, K);
    return ce(Y != null, `Panel size not found for panel "${j.id}"`), Y;
  }, []), M = Le((j, K) => {
    const {
      panelDataArray: J
    } = C.current, Y = Rn(J, j);
    return yV({
      defaultSize: K,
      dragState: g,
      layout: v,
      panelData: J,
      panelIndex: Y
    });
  }, [g, v]), F = Le((j) => {
    const {
      layout: K,
      panelDataArray: J
    } = C.current, {
      collapsedSize: Y = 0,
      collapsible: O,
      panelSize: G
    } = nn(J, j, K);
    return ce(G != null, `Panel size not found for panel "${j.id}"`), O === !0 && It(G, Y);
  }, []), $ = Le((j) => {
    const {
      layout: K,
      panelDataArray: J
    } = C.current, {
      collapsedSize: Y = 0,
      collapsible: O,
      panelSize: G
    } = nn(J, j, K);
    return ce(G != null, `Panel size not found for panel "${j.id}"`), !O || pn(G, Y) > 0;
  }, []), I = Le((j) => {
    const {
      panelDataArray: K
    } = C.current;
    K.push(j), K.sort((J, Y) => {
      const O = J.order, G = Y.order;
      return O == null && G == null ? 0 : O == null ? -1 : G == null ? 1 : O - G;
    }), C.current.panelDataArrayChanged = !0, w();
  }, [w]);
  sn(() => {
    if (C.current.panelDataArrayChanged) {
      C.current.panelDataArrayChanged = !1;
      const {
        autoSaveId: j,
        onLayout: K,
        storage: J
      } = E.current, {
        layout: Y,
        panelDataArray: O
      } = C.current;
      let G = null;
      if (j) {
        const Q = SV(j, O, J);
        Q && (x.current = new Map(Object.entries(Q.expandToSizes)), G = Q.layout);
      }
      G == null && (G = bV({
        panelDataArray: O
      }));
      const ee = Dd({
        layout: G,
        panelConstraints: O.map((Q) => Q.constraints)
      });
      $d(Y, ee) || (y(ee), C.current.layout = ee, K && K(ee), _n(O, ee, S.current));
    }
  }), sn(() => {
    const j = C.current;
    return () => {
      j.layout = [];
    };
  }, []);
  const z = Le((j) => {
    let K = !1;
    const J = b.current;
    return J && window.getComputedStyle(J, null).getPropertyValue("direction") === "rtl" && (K = !0), function(O) {
      O.preventDefault();
      const G = b.current;
      if (!G)
        return () => null;
      const {
        direction: ee,
        dragState: Q,
        id: X,
        keyboardResizeBy: V,
        onLayout: Z
      } = E.current, {
        layout: _,
        panelDataArray: q
      } = C.current, {
        initialLayout: se
      } = Q ?? {}, le = ey(X, j, G);
      let ue = gV(O, j, ee, Q, V, G);
      const de = ee === "horizontal";
      de && K && (ue = -ue);
      const me = q.map((Me) => Me.constraints), Ne = fr({
        delta: ue,
        initialLayout: se ?? _,
        panelConstraints: me,
        pivotIndices: le,
        prevLayout: _,
        trigger: Gb(O) ? "keyboard" : "mouse-or-touch"
      }), Te = !xo(_, Ne);
      (Ub(O) || Wb(O)) && P.current != ue && (P.current = ue, !Te && ue !== 0 ? de ? Bi(j, ue < 0 ? Yb : qb) : Bi(j, ue < 0 ? Xb : Zb) : Bi(j, 0)), Te && (y(Ne), C.current.layout = Ne, Z && Z(Ne), _n(q, Ne, S.current));
    };
  }, []), L = Le((j, K) => {
    const {
      onLayout: J
    } = E.current, {
      layout: Y,
      panelDataArray: O
    } = C.current, G = O.map((_) => _.constraints), {
      panelSize: ee,
      pivotIndices: Q
    } = nn(O, j, Y);
    ce(ee != null, `Panel size not found for panel "${j.id}"`);
    const V = Rn(O, j) === O.length - 1 ? ee - K : K - ee, Z = fr({
      delta: V,
      initialLayout: Y,
      panelConstraints: G,
      pivotIndices: Q,
      prevLayout: Y,
      trigger: "imperative-api"
    });
    xo(Y, Z) || (y(Z), C.current.layout = Z, J && J(Z), _n(O, Z, S.current));
  }, []), U = Le((j, K) => {
    const {
      layout: J,
      panelDataArray: Y
    } = C.current, {
      collapsedSize: O = 0,
      collapsible: G
    } = K, {
      collapsedSize: ee = 0,
      collapsible: Q,
      maxSize: X = 100,
      minSize: V = 0
    } = j.constraints, {
      panelSize: Z
    } = nn(Y, j, J);
    Z != null && (G && Q && It(Z, O) ? It(O, ee) || L(j, ee) : Z < V ? L(j, V) : Z > X && L(j, X));
  }, [L]), H = Le((j, K) => {
    const {
      direction: J
    } = E.current, {
      layout: Y
    } = C.current;
    if (!b.current)
      return;
    const O = Za(j, b.current);
    ce(O, `Drag handle element not found for id "${j}"`);
    const G = ny(J, K);
    h({
      dragHandleId: j,
      dragHandleRect: O.getBoundingClientRect(),
      initialCursorPosition: G,
      initialLayout: Y
    });
  }, []), B = Le(() => {
    h(null);
  }, []), oe = Le((j) => {
    const {
      panelDataArray: K
    } = C.current, J = Rn(K, j);
    J >= 0 && (K.splice(J, 1), delete S.current[j.id], C.current.panelDataArrayChanged = !0, w());
  }, [w]), re = Gs(() => ({
    collapsePanel: T,
    direction: r,
    dragState: g,
    expandPanel: R,
    getPanelSize: D,
    getPanelStyle: M,
    groupId: m,
    isPanelCollapsed: F,
    isPanelExpanded: $,
    reevaluatePanelConstraints: U,
    registerPanel: I,
    registerResizeHandle: z,
    resizePanel: L,
    startDragging: H,
    stopDragging: B,
    unregisterPanel: oe,
    panelGroupElement: b.current
  }), [T, g, r, R, D, M, m, F, $, U, I, z, L, H, B, oe]), ie = {
    display: "flex",
    flexDirection: r === "horizontal" ? "row" : "column",
    height: "100%",
    overflow: "hidden",
    width: "100%"
  };
  return $n(Ya.Provider, {
    value: re
  }, $n(d, {
    ...f,
    children: t,
    className: n,
    id: a,
    ref: b,
    style: {
      ...ie,
      ...u
    },
    // CSS selectors
    [Ee.group]: "",
    [Ee.groupDirection]: r,
    [Ee.groupId]: m
  }));
}
const sy = js((e, t) => $n(iy, {
  ...e,
  forwardedRef: t
}));
iy.displayName = "PanelGroup";
sy.displayName = "forwardRef(PanelGroup)";
function Rn(e, t) {
  return e.findIndex((n) => n === t || n.id === t.id);
}
function nn(e, t, n) {
  const r = Rn(e, t), a = r === e.length - 1 ? [r - 1, r] : [r, r + 1], i = n[r];
  return {
    ...t.constraints,
    panelSize: i,
    pivotIndices: a
  };
}
function PV({
  disabled: e,
  handleId: t,
  resizeHandler: n,
  panelGroupElement: r
}) {
  et(() => {
    if (e || n == null || r == null)
      return;
    const o = Za(t, r);
    if (o == null)
      return;
    const a = (i) => {
      if (!i.defaultPrevented)
        switch (i.key) {
          case "ArrowDown":
          case "ArrowLeft":
          case "ArrowRight":
          case "ArrowUp":
          case "End":
          case "Home": {
            i.preventDefault(), n(i);
            break;
          }
          case "F6": {
            i.preventDefault();
            const s = o.getAttribute(Ee.groupId);
            ce(s, `No group element found for id "${s}"`);
            const c = Mr(s, r), u = Qb(s, t, r);
            ce(u !== null, `No resize element found for id "${t}"`);
            const d = i.shiftKey ? u > 0 ? u - 1 : c.length - 1 : u + 1 < c.length ? u + 1 : 0;
            c[d].focus();
            break;
          }
        }
    };
    return o.addEventListener("keydown", a), () => {
      o.removeEventListener("keydown", a);
    };
  }, [r, e, t, n]);
}
function cy({
  children: e = null,
  className: t = "",
  disabled: n = !1,
  hitAreaMargins: r,
  id: o,
  onBlur: a,
  onClick: i,
  onDragging: s,
  onFocus: c,
  onPointerDown: u,
  onPointerUp: d,
  style: f = {},
  tabIndex: m = 0,
  tagName: b = "div",
  ...g
}) {
  var h, v;
  const y = De(null), w = De({
    onClick: i,
    onDragging: s,
    onPointerDown: u,
    onPointerUp: d
  });
  et(() => {
    w.current.onClick = i, w.current.onDragging = s, w.current.onPointerDown = u, w.current.onPointerUp = d;
  });
  const S = Hd(Ya);
  if (S === null)
    throw Error("PanelResizeHandle components must be rendered within a PanelGroup container");
  const {
    direction: x,
    groupId: P,
    registerResizeHandle: E,
    startDragging: C,
    stopDragging: T,
    panelGroupElement: R
  } = S, D = El(o), [M, F] = xt("inactive"), [$, I] = xt(!1), [z, L] = xt(null), U = De({
    state: M
  });
  sn(() => {
    U.current.state = M;
  }), et(() => {
    if (n)
      L(null);
    else {
      const re = E(D);
      L(() => re);
    }
  }, [n, D, E]);
  const H = (h = r?.coarse) !== null && h !== void 0 ? h : 15, B = (v = r?.fine) !== null && v !== void 0 ? v : 5;
  return et(() => {
    if (n || z == null)
      return;
    const re = y.current;
    ce(re, "Element ref not attached");
    let ie = !1;
    return lV(D, re, x, {
      coarse: H,
      fine: B
    }, (K, J, Y) => {
      if (!J) {
        F("inactive");
        return;
      }
      switch (K) {
        case "down": {
          F("drag"), ie = !1, ce(Y, 'Expected event to be defined for "down" action'), C(D, Y);
          const {
            onDragging: O,
            onPointerDown: G
          } = w.current;
          O?.(!0), G?.();
          break;
        }
        case "move": {
          const {
            state: O
          } = U.current;
          ie = !0, O !== "drag" && F("hover"), ce(Y, 'Expected event to be defined for "move" action'), z(Y);
          break;
        }
        case "up": {
          F("hover"), T();
          const {
            onClick: O,
            onDragging: G,
            onPointerUp: ee
          } = w.current;
          G?.(!1), ee?.(), ie || O?.();
          break;
        }
      }
    });
  }, [H, x, n, B, E, D, z, C, T]), PV({
    disabled: n,
    handleId: D,
    resizeHandler: z,
    panelGroupElement: R
  }), $n(b, {
    ...g,
    children: e,
    className: t,
    id: o,
    onBlur: () => {
      I(!1), a?.();
    },
    onFocus: () => {
      I(!0), c?.();
    },
    ref: y,
    role: "separator",
    style: {
      ...{
        touchAction: "none",
        userSelect: "none"
      },
      ...f
    },
    tabIndex: m,
    // CSS selectors
    [Ee.groupDirection]: x,
    [Ee.groupId]: P,
    [Ee.resizeHandle]: "",
    [Ee.resizeHandleActive]: M === "drag" ? "pointer" : $ ? "keyboard" : void 0,
    [Ee.resizeHandleEnabled]: !n,
    [Ee.resizeHandleId]: D,
    [Ee.resizeHandleState]: M
  });
}
cy.displayName = "PanelResizeHandle";
const DW = ({
  className: e,
  ...t
}) => /* @__PURE__ */ p(
  sy,
  {
    className: N(
      "flex h-full w-full data-[panel-group-direction=vertical]:flex-col",
      e
    ),
    ...t
  }
), kW = Vb, LW = ({
  withHandle: e,
  className: t,
  ...n
}) => /* @__PURE__ */ p(
  cy,
  {
    className: N(
      "relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90",
      t
    ),
    ...n,
    children: e && /* @__PURE__ */ p("div", { className: "z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border", children: /* @__PURE__ */ p(SS, { className: "h-2.5 w-2.5" }) })
  }
);
function Or(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
function EV(e, t) {
  return l.useReducer((n, r) => t[n][r] ?? n, e);
}
var Tl = "ScrollArea", [ly, FW] = be(Tl), [_V, rt] = ly(Tl), uy = l.forwardRef(
  (e, t) => {
    const {
      __scopeScrollArea: n,
      type: r = "hover",
      dir: o,
      scrollHideDelay: a = 600,
      ...i
    } = e, [s, c] = l.useState(null), [u, d] = l.useState(null), [f, m] = l.useState(null), [b, g] = l.useState(null), [h, v] = l.useState(null), [y, w] = l.useState(0), [S, x] = l.useState(0), [P, E] = l.useState(!1), [C, T] = l.useState(!1), R = ne(t, (M) => c(M)), D = At(o);
    return /* @__PURE__ */ p(
      _V,
      {
        scope: n,
        type: r,
        dir: D,
        scrollHideDelay: a,
        scrollArea: s,
        viewport: u,
        onViewportChange: d,
        content: f,
        onContentChange: m,
        scrollbarX: b,
        onScrollbarXChange: g,
        scrollbarXEnabled: P,
        onScrollbarXEnabledChange: E,
        scrollbarY: h,
        onScrollbarYChange: v,
        scrollbarYEnabled: C,
        onScrollbarYEnabledChange: T,
        onCornerWidthChange: w,
        onCornerHeightChange: x,
        children: /* @__PURE__ */ p(
          W.div,
          {
            dir: D,
            ...i,
            ref: R,
            style: {
              position: "relative",
              // Pass corner sizes as CSS vars to reduce re-renders of context consumers
              "--radix-scroll-area-corner-width": y + "px",
              "--radix-scroll-area-corner-height": S + "px",
              ...e.style
            }
          }
        )
      }
    );
  }
);
uy.displayName = Tl;
var dy = "ScrollAreaViewport", fy = l.forwardRef(
  (e, t) => {
    const { __scopeScrollArea: n, children: r, nonce: o, ...a } = e, i = rt(dy, n), s = l.useRef(null), c = ne(t, s, i.onViewportChange);
    return /* @__PURE__ */ te(dt, { children: [
      /* @__PURE__ */ p(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: o
        }
      ),
      /* @__PURE__ */ p(
        W.div,
        {
          "data-radix-scroll-area-viewport": "",
          ...a,
          ref: c,
          style: {
            /**
             * We don't support `visible` because the intention is to have at least one scrollbar
             * if this component is used and `visible` will behave like `auto` in that case
             * https://developer.mozilla.org/en-US/docs/Web/CSS/overflow#description
             *
             * We don't handle `auto` because the intention is for the native implementation
             * to be hidden if using this component. We just want to ensure the node is scrollable
             * so could have used either `scroll` or `auto` here. We picked `scroll` to prevent
             * the browser from having to work out whether to render native scrollbars or not,
             * we tell it to with the intention of hiding them in CSS.
             */
            overflowX: i.scrollbarXEnabled ? "scroll" : "hidden",
            overflowY: i.scrollbarYEnabled ? "scroll" : "hidden",
            ...e.style
          },
          children: /* @__PURE__ */ p("div", { ref: i.onContentChange, style: { minWidth: "100%", display: "table" }, children: r })
        }
      )
    ] });
  }
);
fy.displayName = dy;
var Mt = "ScrollAreaScrollbar", Al = l.forwardRef(
  (e, t) => {
    const { forceMount: n, ...r } = e, o = rt(Mt, e.__scopeScrollArea), { onScrollbarXEnabledChange: a, onScrollbarYEnabledChange: i } = o, s = e.orientation === "horizontal";
    return l.useEffect(() => (s ? a(!0) : i(!0), () => {
      s ? a(!1) : i(!1);
    }), [s, a, i]), o.type === "hover" ? /* @__PURE__ */ p(RV, { ...r, ref: t, forceMount: n }) : o.type === "scroll" ? /* @__PURE__ */ p(TV, { ...r, ref: t, forceMount: n }) : o.type === "auto" ? /* @__PURE__ */ p(py, { ...r, ref: t, forceMount: n }) : o.type === "always" ? /* @__PURE__ */ p(Nl, { ...r, ref: t }) : null;
  }
);
Al.displayName = Mt;
var RV = l.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, o = rt(Mt, e.__scopeScrollArea), [a, i] = l.useState(!1);
  return l.useEffect(() => {
    const s = o.scrollArea;
    let c = 0;
    if (s) {
      const u = () => {
        window.clearTimeout(c), i(!0);
      }, d = () => {
        c = window.setTimeout(() => i(!1), o.scrollHideDelay);
      };
      return s.addEventListener("pointerenter", u), s.addEventListener("pointerleave", d), () => {
        window.clearTimeout(c), s.removeEventListener("pointerenter", u), s.removeEventListener("pointerleave", d);
      };
    }
  }, [o.scrollArea, o.scrollHideDelay]), /* @__PURE__ */ p(Re, { present: n || a, children: /* @__PURE__ */ p(
    py,
    {
      "data-state": a ? "visible" : "hidden",
      ...r,
      ref: t
    }
  ) });
}), TV = l.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, o = rt(Mt, e.__scopeScrollArea), a = e.orientation === "horizontal", i = Qa(() => c("SCROLL_END"), 100), [s, c] = EV("hidden", {
    hidden: {
      SCROLL: "scrolling"
    },
    scrolling: {
      SCROLL_END: "idle",
      POINTER_ENTER: "interacting"
    },
    interacting: {
      SCROLL: "interacting",
      POINTER_LEAVE: "idle"
    },
    idle: {
      HIDE: "hidden",
      SCROLL: "scrolling",
      POINTER_ENTER: "interacting"
    }
  });
  return l.useEffect(() => {
    if (s === "idle") {
      const u = window.setTimeout(() => c("HIDE"), o.scrollHideDelay);
      return () => window.clearTimeout(u);
    }
  }, [s, o.scrollHideDelay, c]), l.useEffect(() => {
    const u = o.viewport, d = a ? "scrollLeft" : "scrollTop";
    if (u) {
      let f = u[d];
      const m = () => {
        const b = u[d];
        f !== b && (c("SCROLL"), i()), f = b;
      };
      return u.addEventListener("scroll", m), () => u.removeEventListener("scroll", m);
    }
  }, [o.viewport, a, c, i]), /* @__PURE__ */ p(Re, { present: n || s !== "hidden", children: /* @__PURE__ */ p(
    Nl,
    {
      "data-state": s === "hidden" ? "hidden" : "visible",
      ...r,
      ref: t,
      onPointerEnter: k(e.onPointerEnter, () => c("POINTER_ENTER")),
      onPointerLeave: k(e.onPointerLeave, () => c("POINTER_LEAVE"))
    }
  ) });
}), py = l.forwardRef((e, t) => {
  const n = rt(Mt, e.__scopeScrollArea), { forceMount: r, ...o } = e, [a, i] = l.useState(!1), s = e.orientation === "horizontal", c = Qa(() => {
    if (n.viewport) {
      const u = n.viewport.offsetWidth < n.viewport.scrollWidth, d = n.viewport.offsetHeight < n.viewport.scrollHeight;
      i(s ? u : d);
    }
  }, 10);
  return Hn(n.viewport, c), Hn(n.content, c), /* @__PURE__ */ p(Re, { present: r || a, children: /* @__PURE__ */ p(
    Nl,
    {
      "data-state": a ? "visible" : "hidden",
      ...o,
      ref: t
    }
  ) });
}), Nl = l.forwardRef((e, t) => {
  const { orientation: n = "vertical", ...r } = e, o = rt(Mt, e.__scopeScrollArea), a = l.useRef(null), i = l.useRef(0), [s, c] = l.useState({
    content: 0,
    viewport: 0,
    scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 }
  }), u = by(s.viewport, s.content), d = {
    ...r,
    sizes: s,
    onSizesChange: c,
    hasThumb: u > 0 && u < 1,
    onThumbChange: (m) => a.current = m,
    onThumbPointerUp: () => i.current = 0,
    onThumbPointerDown: (m) => i.current = m
  };
  function f(m, b) {
    return IV(m, i.current, s, b);
  }
  return n === "horizontal" ? /* @__PURE__ */ p(
    AV,
    {
      ...d,
      ref: t,
      onThumbPositionChange: () => {
        if (o.viewport && a.current) {
          const m = o.viewport.scrollLeft, b = Ld(m, s, o.dir);
          a.current.style.transform = `translate3d(${b}px, 0, 0)`;
        }
      },
      onWheelScroll: (m) => {
        o.viewport && (o.viewport.scrollLeft = m);
      },
      onDragScroll: (m) => {
        o.viewport && (o.viewport.scrollLeft = f(m, o.dir));
      }
    }
  ) : n === "vertical" ? /* @__PURE__ */ p(
    NV,
    {
      ...d,
      ref: t,
      onThumbPositionChange: () => {
        if (o.viewport && a.current) {
          const m = o.viewport.scrollTop, b = Ld(m, s);
          a.current.style.transform = `translate3d(0, ${b}px, 0)`;
        }
      },
      onWheelScroll: (m) => {
        o.viewport && (o.viewport.scrollTop = m);
      },
      onDragScroll: (m) => {
        o.viewport && (o.viewport.scrollTop = f(m));
      }
    }
  ) : null;
}), AV = l.forwardRef((e, t) => {
  const { sizes: n, onSizesChange: r, ...o } = e, a = rt(Mt, e.__scopeScrollArea), [i, s] = l.useState(), c = l.useRef(null), u = ne(t, c, a.onScrollbarXChange);
  return l.useEffect(() => {
    c.current && s(getComputedStyle(c.current));
  }, [c]), /* @__PURE__ */ p(
    hy,
    {
      "data-orientation": "horizontal",
      ...o,
      ref: u,
      sizes: n,
      style: {
        bottom: 0,
        left: a.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
        right: a.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
        "--radix-scroll-area-thumb-width": Ja(n) + "px",
        ...e.style
      },
      onThumbPointerDown: (d) => e.onThumbPointerDown(d.x),
      onDragScroll: (d) => e.onDragScroll(d.x),
      onWheelScroll: (d, f) => {
        if (a.viewport) {
          const m = a.viewport.scrollLeft + d.deltaX;
          e.onWheelScroll(m), wy(m, f) && d.preventDefault();
        }
      },
      onResize: () => {
        c.current && a.viewport && i && r({
          content: a.viewport.scrollWidth,
          viewport: a.viewport.offsetWidth,
          scrollbar: {
            size: c.current.clientWidth,
            paddingStart: ia(i.paddingLeft),
            paddingEnd: ia(i.paddingRight)
          }
        });
      }
    }
  );
}), NV = l.forwardRef((e, t) => {
  const { sizes: n, onSizesChange: r, ...o } = e, a = rt(Mt, e.__scopeScrollArea), [i, s] = l.useState(), c = l.useRef(null), u = ne(t, c, a.onScrollbarYChange);
  return l.useEffect(() => {
    c.current && s(getComputedStyle(c.current));
  }, [c]), /* @__PURE__ */ p(
    hy,
    {
      "data-orientation": "vertical",
      ...o,
      ref: u,
      sizes: n,
      style: {
        top: 0,
        right: a.dir === "ltr" ? 0 : void 0,
        left: a.dir === "rtl" ? 0 : void 0,
        bottom: "var(--radix-scroll-area-corner-height)",
        "--radix-scroll-area-thumb-height": Ja(n) + "px",
        ...e.style
      },
      onThumbPointerDown: (d) => e.onThumbPointerDown(d.y),
      onDragScroll: (d) => e.onDragScroll(d.y),
      onWheelScroll: (d, f) => {
        if (a.viewport) {
          const m = a.viewport.scrollTop + d.deltaY;
          e.onWheelScroll(m), wy(m, f) && d.preventDefault();
        }
      },
      onResize: () => {
        c.current && a.viewport && i && r({
          content: a.viewport.scrollHeight,
          viewport: a.viewport.offsetHeight,
          scrollbar: {
            size: c.current.clientHeight,
            paddingStart: ia(i.paddingTop),
            paddingEnd: ia(i.paddingBottom)
          }
        });
      }
    }
  );
}), [MV, my] = ly(Mt), hy = l.forwardRef((e, t) => {
  const {
    __scopeScrollArea: n,
    sizes: r,
    hasThumb: o,
    onThumbChange: a,
    onThumbPointerUp: i,
    onThumbPointerDown: s,
    onThumbPositionChange: c,
    onDragScroll: u,
    onWheelScroll: d,
    onResize: f,
    ...m
  } = e, b = rt(Mt, n), [g, h] = l.useState(null), v = ne(t, (R) => h(R)), y = l.useRef(null), w = l.useRef(""), S = b.viewport, x = r.content - r.viewport, P = Se(d), E = Se(c), C = Qa(f, 10);
  function T(R) {
    if (y.current) {
      const D = R.clientX - y.current.left, M = R.clientY - y.current.top;
      u({ x: D, y: M });
    }
  }
  return l.useEffect(() => {
    const R = (D) => {
      const M = D.target;
      g?.contains(M) && P(D, x);
    };
    return document.addEventListener("wheel", R, { passive: !1 }), () => document.removeEventListener("wheel", R, { passive: !1 });
  }, [S, g, x, P]), l.useEffect(E, [r, E]), Hn(g, C), Hn(b.content, C), /* @__PURE__ */ p(
    MV,
    {
      scope: n,
      scrollbar: g,
      hasThumb: o,
      onThumbChange: Se(a),
      onThumbPointerUp: Se(i),
      onThumbPositionChange: E,
      onThumbPointerDown: Se(s),
      children: /* @__PURE__ */ p(
        W.div,
        {
          ...m,
          ref: v,
          style: { position: "absolute", ...m.style },
          onPointerDown: k(e.onPointerDown, (R) => {
            R.button === 0 && (R.target.setPointerCapture(R.pointerId), y.current = g.getBoundingClientRect(), w.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", b.viewport && (b.viewport.style.scrollBehavior = "auto"), T(R));
          }),
          onPointerMove: k(e.onPointerMove, T),
          onPointerUp: k(e.onPointerUp, (R) => {
            const D = R.target;
            D.hasPointerCapture(R.pointerId) && D.releasePointerCapture(R.pointerId), document.body.style.webkitUserSelect = w.current, b.viewport && (b.viewport.style.scrollBehavior = ""), y.current = null;
          })
        }
      )
    }
  );
}), aa = "ScrollAreaThumb", vy = l.forwardRef(
  (e, t) => {
    const { forceMount: n, ...r } = e, o = my(aa, e.__scopeScrollArea);
    return /* @__PURE__ */ p(Re, { present: n || o.hasThumb, children: /* @__PURE__ */ p(OV, { ref: t, ...r }) });
  }
), OV = l.forwardRef(
  (e, t) => {
    const { __scopeScrollArea: n, style: r, ...o } = e, a = rt(aa, n), i = my(aa, n), { onThumbPositionChange: s } = i, c = ne(
      t,
      (f) => i.onThumbChange(f)
    ), u = l.useRef(void 0), d = Qa(() => {
      u.current && (u.current(), u.current = void 0);
    }, 100);
    return l.useEffect(() => {
      const f = a.viewport;
      if (f) {
        const m = () => {
          if (d(), !u.current) {
            const b = DV(f, s);
            u.current = b, s();
          }
        };
        return s(), f.addEventListener("scroll", m), () => f.removeEventListener("scroll", m);
      }
    }, [a.viewport, d, s]), /* @__PURE__ */ p(
      W.div,
      {
        "data-state": i.hasThumb ? "visible" : "hidden",
        ...o,
        ref: c,
        style: {
          width: "var(--radix-scroll-area-thumb-width)",
          height: "var(--radix-scroll-area-thumb-height)",
          ...r
        },
        onPointerDownCapture: k(e.onPointerDownCapture, (f) => {
          const b = f.target.getBoundingClientRect(), g = f.clientX - b.left, h = f.clientY - b.top;
          i.onThumbPointerDown({ x: g, y: h });
        }),
        onPointerUp: k(e.onPointerUp, i.onThumbPointerUp)
      }
    );
  }
);
vy.displayName = aa;
var Ml = "ScrollAreaCorner", gy = l.forwardRef(
  (e, t) => {
    const n = rt(Ml, e.__scopeScrollArea), r = !!(n.scrollbarX && n.scrollbarY);
    return n.type !== "scroll" && r ? /* @__PURE__ */ p($V, { ...e, ref: t }) : null;
  }
);
gy.displayName = Ml;
var $V = l.forwardRef((e, t) => {
  const { __scopeScrollArea: n, ...r } = e, o = rt(Ml, n), [a, i] = l.useState(0), [s, c] = l.useState(0), u = !!(a && s);
  return Hn(o.scrollbarX, () => {
    const d = o.scrollbarX?.offsetHeight || 0;
    o.onCornerHeightChange(d), c(d);
  }), Hn(o.scrollbarY, () => {
    const d = o.scrollbarY?.offsetWidth || 0;
    o.onCornerWidthChange(d), i(d);
  }), u ? /* @__PURE__ */ p(
    W.div,
    {
      ...r,
      ref: t,
      style: {
        width: a,
        height: s,
        position: "absolute",
        right: o.dir === "ltr" ? 0 : void 0,
        left: o.dir === "rtl" ? 0 : void 0,
        bottom: 0,
        ...e.style
      }
    }
  ) : null;
});
function ia(e) {
  return e ? parseInt(e, 10) : 0;
}
function by(e, t) {
  const n = e / t;
  return isNaN(n) ? 0 : n;
}
function Ja(e) {
  const t = by(e.viewport, e.content), n = e.scrollbar.paddingStart + e.scrollbar.paddingEnd, r = (e.scrollbar.size - n) * t;
  return Math.max(r, 18);
}
function IV(e, t, n, r = "ltr") {
  const o = Ja(n), a = o / 2, i = t || a, s = o - i, c = n.scrollbar.paddingStart + i, u = n.scrollbar.size - n.scrollbar.paddingEnd - s, d = n.content - n.viewport, f = r === "ltr" ? [0, d] : [d * -1, 0];
  return yy([c, u], f)(e);
}
function Ld(e, t, n = "ltr") {
  const r = Ja(t), o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd, a = t.scrollbar.size - o, i = t.content - t.viewport, s = a - r, c = n === "ltr" ? [0, i] : [i * -1, 0], u = Or(e, c);
  return yy([0, i], [0, s])(u);
}
function yy(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1]) return t[0];
    const r = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + r * (n - e[0]);
  };
}
function wy(e, t) {
  return e > 0 && e < t;
}
var DV = (e, t = () => {
}) => {
  let n = { left: e.scrollLeft, top: e.scrollTop }, r = 0;
  return function o() {
    const a = { left: e.scrollLeft, top: e.scrollTop }, i = n.left !== a.left, s = n.top !== a.top;
    (i || s) && t(), n = a, r = window.requestAnimationFrame(o);
  }(), () => window.cancelAnimationFrame(r);
};
function Qa(e, t) {
  const n = Se(e), r = l.useRef(0);
  return l.useEffect(() => () => window.clearTimeout(r.current), []), l.useCallback(() => {
    window.clearTimeout(r.current), r.current = window.setTimeout(n, t);
  }, [n, t]);
}
function Hn(e, t) {
  const n = Se(t);
  _e(() => {
    let r = 0;
    if (e) {
      const o = new ResizeObserver(() => {
        cancelAnimationFrame(r), r = window.requestAnimationFrame(n);
      });
      return o.observe(e), () => {
        window.cancelAnimationFrame(r), o.unobserve(e);
      };
    }
  }, [e, n]);
}
var Sy = uy, kV = fy, LV = gy;
const FV = l.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ te(
  Sy,
  {
    ref: r,
    className: N("relative overflow-hidden", e),
    ...n,
    children: [
      /* @__PURE__ */ p(kV, { className: "h-full w-full rounded-[inherit]", children: t }),
      /* @__PURE__ */ p(xy, {}),
      /* @__PURE__ */ p(LV, {})
    ]
  }
));
FV.displayName = Sy.displayName;
const xy = l.forwardRef(({ className: e, orientation: t = "vertical", ...n }, r) => /* @__PURE__ */ p(
  Al,
  {
    ref: r,
    orientation: t,
    className: N(
      "flex touch-none select-none transition-colors",
      t === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]",
      t === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]",
      e
    ),
    ...n,
    children: /* @__PURE__ */ p(vy, { className: "relative flex-1 rounded-full bg-border" })
  }
));
xy.displayName = Al.displayName;
var BV = [" ", "Enter", "ArrowUp", "ArrowDown"], zV = [" ", "Enter"], mn = "Select", [ei, ti, HV] = Sn(mn), [nr, BW] = be(mn, [
  HV,
  Tt
]), ni = Tt(), [jV, Xt] = nr(mn), [VV, GV] = nr(mn), Cy = (e) => {
  const {
    __scopeSelect: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: a,
    value: i,
    defaultValue: s,
    onValueChange: c,
    dir: u,
    name: d,
    autoComplete: f,
    disabled: m,
    required: b,
    form: g
  } = e, h = ni(t), [v, y] = l.useState(null), [w, S] = l.useState(null), [x, P] = l.useState(!1), E = At(u), [C, T] = xe({
    prop: r,
    defaultProp: o ?? !1,
    onChange: a,
    caller: mn
  }), [R, D] = xe({
    prop: i,
    defaultProp: s,
    onChange: c,
    caller: mn
  }), M = l.useRef(null), F = v ? g || !!v.closest("form") : !0, [$, I] = l.useState(/* @__PURE__ */ new Set()), z = Array.from($).map((L) => L.props.value).join(";");
  return /* @__PURE__ */ p(er, { ...h, children: /* @__PURE__ */ te(
    jV,
    {
      required: b,
      scope: t,
      trigger: v,
      onTriggerChange: y,
      valueNode: w,
      onValueNodeChange: S,
      valueNodeHasChildren: x,
      onValueNodeHasChildrenChange: P,
      contentId: $e(),
      value: R,
      onValueChange: D,
      open: C,
      onOpenChange: T,
      dir: E,
      triggerPointerDownPosRef: M,
      disabled: m,
      children: [
        /* @__PURE__ */ p(ei.Provider, { scope: t, children: /* @__PURE__ */ p(
          VV,
          {
            scope: e.__scopeSelect,
            onNativeOptionAdd: l.useCallback((L) => {
              I((U) => new Set(U).add(L));
            }, []),
            onNativeOptionRemove: l.useCallback((L) => {
              I((U) => {
                const H = new Set(U);
                return H.delete(L), H;
              });
            }, []),
            children: n
          }
        ) }),
        F ? /* @__PURE__ */ te(
          Yy,
          {
            "aria-hidden": !0,
            required: b,
            tabIndex: -1,
            name: d,
            autoComplete: f,
            value: R,
            onChange: (L) => D(L.target.value),
            disabled: m,
            form: g,
            children: [
              R === void 0 ? /* @__PURE__ */ p("option", { value: "" }) : null,
              Array.from($)
            ]
          },
          z
        ) : null
      ]
    }
  ) });
};
Cy.displayName = mn;
var Py = "SelectTrigger", Ey = l.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, disabled: r = !1, ...o } = e, a = ni(n), i = Xt(Py, n), s = i.disabled || r, c = ne(t, i.onTriggerChange), u = ti(n), d = l.useRef("touch"), [f, m, b] = Xy((h) => {
      const v = u().filter((S) => !S.disabled), y = v.find((S) => S.value === i.value), w = Zy(v, h, y);
      w !== void 0 && i.onValueChange(w.value);
    }), g = (h) => {
      s || (i.onOpenChange(!0), b()), h && (i.triggerPointerDownPosRef.current = {
        x: Math.round(h.pageX),
        y: Math.round(h.pageY)
      });
    };
    return /* @__PURE__ */ p(tr, { asChild: !0, ...a, children: /* @__PURE__ */ p(
      W.button,
      {
        type: "button",
        role: "combobox",
        "aria-controls": i.contentId,
        "aria-expanded": i.open,
        "aria-required": i.required,
        "aria-autocomplete": "none",
        dir: i.dir,
        "data-state": i.open ? "open" : "closed",
        disabled: s,
        "data-disabled": s ? "" : void 0,
        "data-placeholder": qy(i.value) ? "" : void 0,
        ...o,
        ref: c,
        onClick: k(o.onClick, (h) => {
          h.currentTarget.focus(), d.current !== "mouse" && g(h);
        }),
        onPointerDown: k(o.onPointerDown, (h) => {
          d.current = h.pointerType;
          const v = h.target;
          v.hasPointerCapture(h.pointerId) && v.releasePointerCapture(h.pointerId), h.button === 0 && h.ctrlKey === !1 && h.pointerType === "mouse" && (g(h), h.preventDefault());
        }),
        onKeyDown: k(o.onKeyDown, (h) => {
          const v = f.current !== "";
          !(h.ctrlKey || h.altKey || h.metaKey) && h.key.length === 1 && m(h.key), !(v && h.key === " ") && BV.includes(h.key) && (g(), h.preventDefault());
        })
      }
    ) });
  }
);
Ey.displayName = Py;
var _y = "SelectValue", Ry = l.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, children: a, placeholder: i = "", ...s } = e, c = Xt(_y, n), { onValueNodeHasChildrenChange: u } = c, d = a !== void 0, f = ne(t, c.onValueNodeChange);
    return _e(() => {
      u(d);
    }, [u, d]), /* @__PURE__ */ p(
      W.span,
      {
        ...s,
        ref: f,
        style: { pointerEvents: "none" },
        children: qy(c.value) ? /* @__PURE__ */ p(dt, { children: i }) : a
      }
    );
  }
);
Ry.displayName = _y;
var UV = "SelectIcon", Ty = l.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, children: r, ...o } = e;
    return /* @__PURE__ */ p(W.span, { "aria-hidden": !0, ...o, ref: t, children: r || "▼" });
  }
);
Ty.displayName = UV;
var WV = "SelectPortal", Ay = (e) => /* @__PURE__ */ p(yn, { asChild: !0, ...e });
Ay.displayName = WV;
var hn = "SelectContent", Ny = l.forwardRef(
  (e, t) => {
    const n = Xt(hn, e.__scopeSelect), [r, o] = l.useState();
    if (_e(() => {
      o(new DocumentFragment());
    }, []), !n.open) {
      const a = r;
      return a ? Ir.createPortal(
        /* @__PURE__ */ p(My, { scope: e.__scopeSelect, children: /* @__PURE__ */ p(ei.Slot, { scope: e.__scopeSelect, children: /* @__PURE__ */ p("div", { children: e.children }) }) }),
        a
      ) : null;
    }
    return /* @__PURE__ */ p(Oy, { ...e, ref: t });
  }
);
Ny.displayName = hn;
var st = 10, [My, Zt] = nr(hn), KV = "SelectContentImpl", YV = ln("SelectContent.RemoveScroll"), Oy = l.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: n,
      position: r = "item-aligned",
      onCloseAutoFocus: o,
      onEscapeKeyDown: a,
      onPointerDownOutside: i,
      //
      // PopperContent props
      side: s,
      sideOffset: c,
      align: u,
      alignOffset: d,
      arrowPadding: f,
      collisionBoundary: m,
      collisionPadding: b,
      sticky: g,
      hideWhenDetached: h,
      avoidCollisions: v,
      //
      ...y
    } = e, w = Xt(hn, n), [S, x] = l.useState(null), [P, E] = l.useState(null), C = ne(t, (O) => x(O)), [T, R] = l.useState(null), [D, M] = l.useState(
      null
    ), F = ti(n), [$, I] = l.useState(!1), z = l.useRef(!1);
    l.useEffect(() => {
      if (S) return _a(S);
    }, [S]), Pa();
    const L = l.useCallback(
      (O) => {
        const [G, ...ee] = F().map((V) => V.ref.current), [Q] = ee.slice(-1), X = document.activeElement;
        for (const V of O)
          if (V === X || (V?.scrollIntoView({ block: "nearest" }), V === G && P && (P.scrollTop = 0), V === Q && P && (P.scrollTop = P.scrollHeight), V?.focus(), document.activeElement !== X)) return;
      },
      [F, P]
    ), U = l.useCallback(
      () => L([T, S]),
      [L, T, S]
    );
    l.useEffect(() => {
      $ && U();
    }, [$, U]);
    const { onOpenChange: H, triggerPointerDownPosRef: B } = w;
    l.useEffect(() => {
      if (S) {
        let O = { x: 0, y: 0 };
        const G = (Q) => {
          O = {
            x: Math.abs(Math.round(Q.pageX) - (B.current?.x ?? 0)),
            y: Math.abs(Math.round(Q.pageY) - (B.current?.y ?? 0))
          };
        }, ee = (Q) => {
          O.x <= 10 && O.y <= 10 ? Q.preventDefault() : S.contains(Q.target) || H(!1), document.removeEventListener("pointermove", G), B.current = null;
        };
        return B.current !== null && (document.addEventListener("pointermove", G), document.addEventListener("pointerup", ee, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", G), document.removeEventListener("pointerup", ee, { capture: !0 });
        };
      }
    }, [S, H, B]), l.useEffect(() => {
      const O = () => H(!1);
      return window.addEventListener("blur", O), window.addEventListener("resize", O), () => {
        window.removeEventListener("blur", O), window.removeEventListener("resize", O);
      };
    }, [H]);
    const [oe, re] = Xy((O) => {
      const G = F().filter((X) => !X.disabled), ee = G.find((X) => X.ref.current === document.activeElement), Q = Zy(G, O, ee);
      Q && setTimeout(() => Q.ref.current.focus());
    }), ie = l.useCallback(
      (O, G, ee) => {
        const Q = !z.current && !ee;
        (w.value !== void 0 && w.value === G || Q) && (R(O), Q && (z.current = !0));
      },
      [w.value]
    ), j = l.useCallback(() => S?.focus(), [S]), K = l.useCallback(
      (O, G, ee) => {
        const Q = !z.current && !ee;
        (w.value !== void 0 && w.value === G || Q) && M(O);
      },
      [w.value]
    ), J = r === "popper" ? Ms : $y, Y = J === Ms ? {
      side: s,
      sideOffset: c,
      align: u,
      alignOffset: d,
      arrowPadding: f,
      collisionBoundary: m,
      collisionPadding: b,
      sticky: g,
      hideWhenDetached: h,
      avoidCollisions: v
    } : {};
    return /* @__PURE__ */ p(
      My,
      {
        scope: n,
        content: S,
        viewport: P,
        onViewportChange: E,
        itemRefCallback: ie,
        selectedItem: T,
        onItemLeave: j,
        itemTextRefCallback: K,
        focusSelectedItem: U,
        selectedItemText: D,
        position: r,
        isPositioned: $,
        searchRef: oe,
        children: /* @__PURE__ */ p(Hr, { as: YV, allowPinchZoom: !0, children: /* @__PURE__ */ p(
          zr,
          {
            asChild: !0,
            trapped: w.open,
            onMountAutoFocus: (O) => {
              O.preventDefault();
            },
            onUnmountAutoFocus: k(o, (O) => {
              w.trigger?.focus({ preventScroll: !0 }), O.preventDefault();
            }),
            children: /* @__PURE__ */ p(
              Wt,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: a,
                onPointerDownOutside: i,
                onFocusOutside: (O) => O.preventDefault(),
                onDismiss: () => w.onOpenChange(!1),
                children: /* @__PURE__ */ p(
                  J,
                  {
                    role: "listbox",
                    id: w.contentId,
                    "data-state": w.open ? "open" : "closed",
                    dir: w.dir,
                    onContextMenu: (O) => O.preventDefault(),
                    ...y,
                    ...Y,
                    onPlaced: () => I(!0),
                    ref: C,
                    style: {
                      // flex layout so we can place the scroll buttons properly
                      display: "flex",
                      flexDirection: "column",
                      // reset the outline by default as the content MAY get focused
                      outline: "none",
                      ...y.style
                    },
                    onKeyDown: k(y.onKeyDown, (O) => {
                      const G = O.ctrlKey || O.altKey || O.metaKey;
                      if (O.key === "Tab" && O.preventDefault(), !G && O.key.length === 1 && re(O.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(O.key)) {
                        let Q = F().filter((X) => !X.disabled).map((X) => X.ref.current);
                        if (["ArrowUp", "End"].includes(O.key) && (Q = Q.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(O.key)) {
                          const X = O.target, V = Q.indexOf(X);
                          Q = Q.slice(V + 1);
                        }
                        setTimeout(() => L(Q)), O.preventDefault();
                      }
                    })
                  }
                )
              }
            )
          }
        ) })
      }
    );
  }
);
Oy.displayName = KV;
var qV = "SelectItemAlignedPosition", $y = l.forwardRef((e, t) => {
  const { __scopeSelect: n, onPlaced: r, ...o } = e, a = Xt(hn, n), i = Zt(hn, n), [s, c] = l.useState(null), [u, d] = l.useState(null), f = ne(t, (C) => d(C)), m = ti(n), b = l.useRef(!1), g = l.useRef(!0), { viewport: h, selectedItem: v, selectedItemText: y, focusSelectedItem: w } = i, S = l.useCallback(() => {
    if (a.trigger && a.valueNode && s && u && h && v && y) {
      const C = a.trigger.getBoundingClientRect(), T = u.getBoundingClientRect(), R = a.valueNode.getBoundingClientRect(), D = y.getBoundingClientRect();
      if (a.dir !== "rtl") {
        const X = D.left - T.left, V = R.left - X, Z = C.left - V, _ = C.width + Z, q = Math.max(_, T.width), se = window.innerWidth - st, le = Or(V, [
          st,
          // Prevents the content from going off the starting edge of the
          // viewport. It may still go off the ending edge, but this can be
          // controlled by the user since they may want to manage overflow in a
          // specific way.
          // https://github.com/radix-ui/primitives/issues/2049
          Math.max(st, se - q)
        ]);
        s.style.minWidth = _ + "px", s.style.left = le + "px";
      } else {
        const X = T.right - D.right, V = window.innerWidth - R.right - X, Z = window.innerWidth - C.right - V, _ = C.width + Z, q = Math.max(_, T.width), se = window.innerWidth - st, le = Or(V, [
          st,
          Math.max(st, se - q)
        ]);
        s.style.minWidth = _ + "px", s.style.right = le + "px";
      }
      const M = m(), F = window.innerHeight - st * 2, $ = h.scrollHeight, I = window.getComputedStyle(u), z = parseInt(I.borderTopWidth, 10), L = parseInt(I.paddingTop, 10), U = parseInt(I.borderBottomWidth, 10), H = parseInt(I.paddingBottom, 10), B = z + L + $ + H + U, oe = Math.min(v.offsetHeight * 5, B), re = window.getComputedStyle(h), ie = parseInt(re.paddingTop, 10), j = parseInt(re.paddingBottom, 10), K = C.top + C.height / 2 - st, J = F - K, Y = v.offsetHeight / 2, O = v.offsetTop + Y, G = z + L + O, ee = B - G;
      if (G <= K) {
        const X = M.length > 0 && v === M[M.length - 1].ref.current;
        s.style.bottom = "0px";
        const V = u.clientHeight - h.offsetTop - h.offsetHeight, Z = Math.max(
          J,
          Y + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (X ? j : 0) + V + U
        ), _ = G + Z;
        s.style.height = _ + "px";
      } else {
        const X = M.length > 0 && v === M[0].ref.current;
        s.style.top = "0px";
        const Z = Math.max(
          K,
          z + h.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (X ? ie : 0) + Y
        ) + ee;
        s.style.height = Z + "px", h.scrollTop = G - K + h.offsetTop;
      }
      s.style.margin = `${st}px 0`, s.style.minHeight = oe + "px", s.style.maxHeight = F + "px", r?.(), requestAnimationFrame(() => b.current = !0);
    }
  }, [
    m,
    a.trigger,
    a.valueNode,
    s,
    u,
    h,
    v,
    y,
    a.dir,
    r
  ]);
  _e(() => S(), [S]);
  const [x, P] = l.useState();
  _e(() => {
    u && P(window.getComputedStyle(u).zIndex);
  }, [u]);
  const E = l.useCallback(
    (C) => {
      C && g.current === !0 && (S(), w?.(), g.current = !1);
    },
    [S, w]
  );
  return /* @__PURE__ */ p(
    ZV,
    {
      scope: n,
      contentWrapper: s,
      shouldExpandOnScrollRef: b,
      onScrollButtonChange: E,
      children: /* @__PURE__ */ p(
        "div",
        {
          ref: c,
          style: {
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            zIndex: x
          },
          children: /* @__PURE__ */ p(
            W.div,
            {
              ...o,
              ref: f,
              style: {
                // When we get the height of the content, it includes borders. If we were to set
                // the height without having `boxSizing: 'border-box'` it would be too big.
                boxSizing: "border-box",
                // We need to ensure the content doesn't get taller than the wrapper
                maxHeight: "100%",
                ...o.style
              }
            }
          )
        }
      )
    }
  );
});
$y.displayName = qV;
var XV = "SelectPopperPosition", Ms = l.forwardRef((e, t) => {
  const {
    __scopeSelect: n,
    align: r = "start",
    collisionPadding: o = st,
    ...a
  } = e, i = ni(n);
  return /* @__PURE__ */ p(
    Gr,
    {
      ...i,
      ...a,
      ref: t,
      align: r,
      collisionPadding: o,
      style: {
        // Ensure border-box for floating-ui calculations
        boxSizing: "border-box",
        ...a.style,
        "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-select-content-available-width": "var(--radix-popper-available-width)",
        "--radix-select-content-available-height": "var(--radix-popper-available-height)",
        "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }
  );
});
Ms.displayName = XV;
var [ZV, Ol] = nr(hn, {}), Os = "SelectViewport", Iy = l.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, nonce: r, ...o } = e, a = Zt(Os, n), i = Ol(Os, n), s = ne(t, a.onViewportChange), c = l.useRef(0);
    return /* @__PURE__ */ te(dt, { children: [
      /* @__PURE__ */ p(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: r
        }
      ),
      /* @__PURE__ */ p(ei.Slot, { scope: n, children: /* @__PURE__ */ p(
        W.div,
        {
          "data-radix-select-viewport": "",
          role: "presentation",
          ...o,
          ref: s,
          style: {
            // we use position: 'relative' here on the `viewport` so that when we call
            // `selectedItem.offsetTop` in calculations, the offset is relative to the viewport
            // (independent of the scrollUpButton).
            position: "relative",
            flex: 1,
            // Viewport should only be scrollable in the vertical direction.
            // This won't work in vertical writing modes, so we'll need to
            // revisit this if/when that is supported
            // https://developer.chrome.com/blog/vertical-form-controls
            overflow: "hidden auto",
            ...o.style
          },
          onScroll: k(o.onScroll, (u) => {
            const d = u.currentTarget, { contentWrapper: f, shouldExpandOnScrollRef: m } = i;
            if (m?.current && f) {
              const b = Math.abs(c.current - d.scrollTop);
              if (b > 0) {
                const g = window.innerHeight - st * 2, h = parseFloat(f.style.minHeight), v = parseFloat(f.style.height), y = Math.max(h, v);
                if (y < g) {
                  const w = y + b, S = Math.min(g, w), x = w - S;
                  f.style.height = S + "px", f.style.bottom === "0px" && (d.scrollTop = x > 0 ? x : 0, f.style.justifyContent = "flex-end");
                }
              }
            }
            c.current = d.scrollTop;
          })
        }
      ) })
    ] });
  }
);
Iy.displayName = Os;
var Dy = "SelectGroup", [JV, QV] = nr(Dy), ky = l.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = $e();
    return /* @__PURE__ */ p(JV, { scope: n, id: o, children: /* @__PURE__ */ p(W.div, { role: "group", "aria-labelledby": o, ...r, ref: t }) });
  }
);
ky.displayName = Dy;
var Ly = "SelectLabel", Fy = l.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = QV(Ly, n);
    return /* @__PURE__ */ p(W.div, { id: o.id, ...r, ref: t });
  }
);
Fy.displayName = Ly;
var sa = "SelectItem", [eG, By] = nr(sa), zy = l.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: n,
      value: r,
      disabled: o = !1,
      textValue: a,
      ...i
    } = e, s = Xt(sa, n), c = Zt(sa, n), u = s.value === r, [d, f] = l.useState(a ?? ""), [m, b] = l.useState(!1), g = ne(
      t,
      (w) => c.itemRefCallback?.(w, r, o)
    ), h = $e(), v = l.useRef("touch"), y = () => {
      o || (s.onValueChange(r), s.onOpenChange(!1));
    };
    if (r === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return /* @__PURE__ */ p(
      eG,
      {
        scope: n,
        value: r,
        disabled: o,
        textId: h,
        isSelected: u,
        onItemTextChange: l.useCallback((w) => {
          f((S) => S || (w?.textContent ?? "").trim());
        }, []),
        children: /* @__PURE__ */ p(
          ei.ItemSlot,
          {
            scope: n,
            value: r,
            disabled: o,
            textValue: d,
            children: /* @__PURE__ */ p(
              W.div,
              {
                role: "option",
                "aria-labelledby": h,
                "data-highlighted": m ? "" : void 0,
                "aria-selected": u && m,
                "data-state": u ? "checked" : "unchecked",
                "aria-disabled": o || void 0,
                "data-disabled": o ? "" : void 0,
                tabIndex: o ? void 0 : -1,
                ...i,
                ref: g,
                onFocus: k(i.onFocus, () => b(!0)),
                onBlur: k(i.onBlur, () => b(!1)),
                onClick: k(i.onClick, () => {
                  v.current !== "mouse" && y();
                }),
                onPointerUp: k(i.onPointerUp, () => {
                  v.current === "mouse" && y();
                }),
                onPointerDown: k(i.onPointerDown, (w) => {
                  v.current = w.pointerType;
                }),
                onPointerMove: k(i.onPointerMove, (w) => {
                  v.current = w.pointerType, o ? c.onItemLeave?.() : v.current === "mouse" && w.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: k(i.onPointerLeave, (w) => {
                  w.currentTarget === document.activeElement && c.onItemLeave?.();
                }),
                onKeyDown: k(i.onKeyDown, (w) => {
                  c.searchRef?.current !== "" && w.key === " " || (zV.includes(w.key) && y(), w.key === " " && w.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }
);
zy.displayName = sa;
var mr = "SelectItemText", Hy = l.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, ...a } = e, i = Xt(mr, n), s = Zt(mr, n), c = By(mr, n), u = GV(mr, n), [d, f] = l.useState(null), m = ne(
      t,
      (y) => f(y),
      c.onItemTextChange,
      (y) => s.itemTextRefCallback?.(y, c.value, c.disabled)
    ), b = d?.textContent, g = l.useMemo(
      () => /* @__PURE__ */ p("option", { value: c.value, disabled: c.disabled, children: b }, c.value),
      [c.disabled, c.value, b]
    ), { onNativeOptionAdd: h, onNativeOptionRemove: v } = u;
    return _e(() => (h(g), () => v(g)), [h, v, g]), /* @__PURE__ */ te(dt, { children: [
      /* @__PURE__ */ p(W.span, { id: c.textId, ...a, ref: m }),
      c.isSelected && i.valueNode && !i.valueNodeHasChildren ? Ir.createPortal(a.children, i.valueNode) : null
    ] });
  }
);
Hy.displayName = mr;
var jy = "SelectItemIndicator", Vy = l.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return By(jy, n).isSelected ? /* @__PURE__ */ p(W.span, { "aria-hidden": !0, ...r, ref: t }) : null;
  }
);
Vy.displayName = jy;
var $s = "SelectScrollUpButton", Gy = l.forwardRef((e, t) => {
  const n = Zt($s, e.__scopeSelect), r = Ol($s, e.__scopeSelect), [o, a] = l.useState(!1), i = ne(t, r.onScrollButtonChange);
  return _e(() => {
    if (n.viewport && n.isPositioned) {
      let s = function() {
        const u = c.scrollTop > 0;
        a(u);
      };
      const c = n.viewport;
      return s(), c.addEventListener("scroll", s), () => c.removeEventListener("scroll", s);
    }
  }, [n.viewport, n.isPositioned]), o ? /* @__PURE__ */ p(
    Wy,
    {
      ...e,
      ref: i,
      onAutoScroll: () => {
        const { viewport: s, selectedItem: c } = n;
        s && c && (s.scrollTop = s.scrollTop - c.offsetHeight);
      }
    }
  ) : null;
});
Gy.displayName = $s;
var Is = "SelectScrollDownButton", Uy = l.forwardRef((e, t) => {
  const n = Zt(Is, e.__scopeSelect), r = Ol(Is, e.__scopeSelect), [o, a] = l.useState(!1), i = ne(t, r.onScrollButtonChange);
  return _e(() => {
    if (n.viewport && n.isPositioned) {
      let s = function() {
        const u = c.scrollHeight - c.clientHeight, d = Math.ceil(c.scrollTop) < u;
        a(d);
      };
      const c = n.viewport;
      return s(), c.addEventListener("scroll", s), () => c.removeEventListener("scroll", s);
    }
  }, [n.viewport, n.isPositioned]), o ? /* @__PURE__ */ p(
    Wy,
    {
      ...e,
      ref: i,
      onAutoScroll: () => {
        const { viewport: s, selectedItem: c } = n;
        s && c && (s.scrollTop = s.scrollTop + c.offsetHeight);
      }
    }
  ) : null;
});
Uy.displayName = Is;
var Wy = l.forwardRef((e, t) => {
  const { __scopeSelect: n, onAutoScroll: r, ...o } = e, a = Zt("SelectScrollButton", n), i = l.useRef(null), s = ti(n), c = l.useCallback(() => {
    i.current !== null && (window.clearInterval(i.current), i.current = null);
  }, []);
  return l.useEffect(() => () => c(), [c]), _e(() => {
    s().find((d) => d.ref.current === document.activeElement)?.ref.current?.scrollIntoView({ block: "nearest" });
  }, [s]), /* @__PURE__ */ p(
    W.div,
    {
      "aria-hidden": !0,
      ...o,
      ref: t,
      style: { flexShrink: 0, ...o.style },
      onPointerDown: k(o.onPointerDown, () => {
        i.current === null && (i.current = window.setInterval(r, 50));
      }),
      onPointerMove: k(o.onPointerMove, () => {
        a.onItemLeave?.(), i.current === null && (i.current = window.setInterval(r, 50));
      }),
      onPointerLeave: k(o.onPointerLeave, () => {
        c();
      })
    }
  );
}), tG = "SelectSeparator", Ky = l.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return /* @__PURE__ */ p(W.div, { "aria-hidden": !0, ...r, ref: t });
  }
);
Ky.displayName = tG;
var Ds = "SelectArrow", nG = l.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = ni(n), a = Xt(Ds, n), i = Zt(Ds, n);
    return a.open && i.position === "popper" ? /* @__PURE__ */ p(Ur, { ...o, ...r, ref: t }) : null;
  }
);
nG.displayName = Ds;
var rG = "SelectBubbleInput", Yy = l.forwardRef(
  ({ __scopeSelect: e, value: t, ...n }, r) => {
    const o = l.useRef(null), a = ne(r, o), i = Xr(t);
    return l.useEffect(() => {
      const s = o.current;
      if (!s) return;
      const c = window.HTMLSelectElement.prototype, d = Object.getOwnPropertyDescriptor(
        c,
        "value"
      ).set;
      if (i !== t && d) {
        const f = new Event("change", { bubbles: !0 });
        d.call(s, t), s.dispatchEvent(f);
      }
    }, [i, t]), /* @__PURE__ */ p(
      W.select,
      {
        ...n,
        style: { ...sm, ...n.style },
        ref: a,
        defaultValue: t
      }
    );
  }
);
Yy.displayName = rG;
function qy(e) {
  return e === "" || e === void 0;
}
function Xy(e) {
  const t = Se(e), n = l.useRef(""), r = l.useRef(0), o = l.useCallback(
    (i) => {
      const s = n.current + i;
      t(s), function c(u) {
        n.current = u, window.clearTimeout(r.current), u !== "" && (r.current = window.setTimeout(() => c(""), 1e3));
      }(s);
    },
    [t]
  ), a = l.useCallback(() => {
    n.current = "", window.clearTimeout(r.current);
  }, []);
  return l.useEffect(() => () => window.clearTimeout(r.current), []), [n, o, a];
}
function Zy(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((u) => u === t[0]) ? t[0] : t, a = n ? e.indexOf(n) : -1;
  let i = oG(e, Math.max(a, 0));
  o.length === 1 && (i = i.filter((u) => u !== n));
  const c = i.find(
    (u) => u.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return c !== n ? c : void 0;
}
function oG(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var aG = Cy, Jy = Ey, iG = Ry, sG = Ty, cG = Ay, Qy = Ny, lG = Iy, uG = ky, ew = Fy, tw = zy, dG = Hy, fG = Vy, nw = Gy, rw = Uy, ow = Ky;
const zW = aG, HW = uG, jW = iG, pG = l.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ te(
  Jy,
  {
    ref: r,
    className: N(
      "flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      e
    ),
    ...n,
    children: [
      t,
      /* @__PURE__ */ p(sG, { asChild: !0, children: /* @__PURE__ */ p(Ks, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
pG.displayName = Jy.displayName;
const aw = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p(
  nw,
  {
    ref: n,
    className: N(
      "flex cursor-default items-center justify-center py-1",
      e
    ),
    ...t,
    children: /* @__PURE__ */ p(wS, { className: "h-4 w-4" })
  }
));
aw.displayName = nw.displayName;
const iw = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p(
  rw,
  {
    ref: n,
    className: N(
      "flex cursor-default items-center justify-center py-1",
      e
    ),
    ...t,
    children: /* @__PURE__ */ p(Ks, { className: "h-4 w-4" })
  }
));
iw.displayName = rw.displayName;
const mG = l.forwardRef(({ className: e, children: t, position: n = "popper", ...r }, o) => /* @__PURE__ */ p(cG, { children: /* @__PURE__ */ te(
  Qy,
  {
    ref: o,
    className: N(
      "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      n === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      e
    ),
    position: n,
    ...r,
    children: [
      /* @__PURE__ */ p(aw, {}),
      /* @__PURE__ */ p(
        lG,
        {
          className: N(
            "p-1",
            n === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children: t
        }
      ),
      /* @__PURE__ */ p(iw, {})
    ]
  }
) }));
mG.displayName = Qy.displayName;
const hG = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p(
  ew,
  {
    ref: n,
    className: N("px-2 py-1.5 text-sm font-semibold", e),
    ...t
  }
));
hG.displayName = ew.displayName;
const vG = l.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ te(
  tw,
  {
    ref: r,
    className: N(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ p("span", { className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ p(fG, { children: /* @__PURE__ */ p(Dr, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ p(dG, { children: t })
    ]
  }
));
vG.displayName = tw.displayName;
const gG = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p(
  ow,
  {
    ref: n,
    className: N("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
gG.displayName = ow.displayName;
var sw = ["PageUp", "PageDown"], cw = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], lw = {
  "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
  "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
}, rr = "Slider", [ks, bG, yG] = Sn(rr), [uw, VW] = be(rr, [
  yG
]), [wG, ri] = uw(rr), dw = l.forwardRef(
  (e, t) => {
    const {
      name: n,
      min: r = 0,
      max: o = 100,
      step: a = 1,
      orientation: i = "horizontal",
      disabled: s = !1,
      minStepsBetweenThumbs: c = 0,
      defaultValue: u = [r],
      value: d,
      onValueChange: f = () => {
      },
      onValueCommit: m = () => {
      },
      inverted: b = !1,
      form: g,
      ...h
    } = e, v = l.useRef(/* @__PURE__ */ new Set()), y = l.useRef(0), S = i === "horizontal" ? SG : xG, [x = [], P] = xe({
      prop: d,
      defaultProp: u,
      onChange: (M) => {
        [...v.current][y.current]?.focus(), f(M);
      }
    }), E = l.useRef(x);
    function C(M) {
      const F = RG(x, M);
      D(M, F);
    }
    function T(M) {
      D(M, y.current);
    }
    function R() {
      const M = E.current[y.current];
      x[y.current] !== M && m(x);
    }
    function D(M, F, { commit: $ } = { commit: !1 }) {
      const I = MG(a), z = OG(Math.round((M - r) / a) * a + r, I), L = Or(z, [r, o]);
      P((U = []) => {
        const H = EG(U, L, F);
        if (NG(H, c * a)) {
          y.current = H.indexOf(L);
          const B = String(H) !== String(U);
          return B && $ && m(H), B ? H : U;
        } else
          return U;
      });
    }
    return /* @__PURE__ */ p(
      wG,
      {
        scope: e.__scopeSlider,
        name: n,
        disabled: s,
        min: r,
        max: o,
        valueIndexToChangeRef: y,
        thumbs: v.current,
        values: x,
        orientation: i,
        form: g,
        children: /* @__PURE__ */ p(ks.Provider, { scope: e.__scopeSlider, children: /* @__PURE__ */ p(ks.Slot, { scope: e.__scopeSlider, children: /* @__PURE__ */ p(
          S,
          {
            "aria-disabled": s,
            "data-disabled": s ? "" : void 0,
            ...h,
            ref: t,
            onPointerDown: k(h.onPointerDown, () => {
              s || (E.current = x);
            }),
            min: r,
            max: o,
            inverted: b,
            onSlideStart: s ? void 0 : C,
            onSlideMove: s ? void 0 : T,
            onSlideEnd: s ? void 0 : R,
            onHomeKeyDown: () => !s && D(r, 0, { commit: !0 }),
            onEndKeyDown: () => !s && D(o, x.length - 1, { commit: !0 }),
            onStepKeyDown: ({ event: M, direction: F }) => {
              if (!s) {
                const z = sw.includes(M.key) || M.shiftKey && cw.includes(M.key) ? 10 : 1, L = y.current, U = x[L], H = a * z * F;
                D(U + H, L, { commit: !0 });
              }
            }
          }
        ) }) })
      }
    );
  }
);
dw.displayName = rr;
var [fw, pw] = uw(rr, {
  startEdge: "left",
  endEdge: "right",
  size: "width",
  direction: 1
}), SG = l.forwardRef(
  (e, t) => {
    const {
      min: n,
      max: r,
      dir: o,
      inverted: a,
      onSlideStart: i,
      onSlideMove: s,
      onSlideEnd: c,
      onStepKeyDown: u,
      ...d
    } = e, [f, m] = l.useState(null), b = ne(t, (S) => m(S)), g = l.useRef(void 0), h = At(o), v = h === "ltr", y = v && !a || !v && a;
    function w(S) {
      const x = g.current || f.getBoundingClientRect(), P = [0, x.width], C = $l(P, y ? [n, r] : [r, n]);
      return g.current = x, C(S - x.left);
    }
    return /* @__PURE__ */ p(
      fw,
      {
        scope: e.__scopeSlider,
        startEdge: y ? "left" : "right",
        endEdge: y ? "right" : "left",
        direction: y ? 1 : -1,
        size: "width",
        children: /* @__PURE__ */ p(
          mw,
          {
            dir: h,
            "data-orientation": "horizontal",
            ...d,
            ref: b,
            style: {
              ...d.style,
              "--radix-slider-thumb-transform": "translateX(-50%)"
            },
            onSlideStart: (S) => {
              const x = w(S.clientX);
              i?.(x);
            },
            onSlideMove: (S) => {
              const x = w(S.clientX);
              s?.(x);
            },
            onSlideEnd: () => {
              g.current = void 0, c?.();
            },
            onStepKeyDown: (S) => {
              const P = lw[y ? "from-left" : "from-right"].includes(S.key);
              u?.({ event: S, direction: P ? -1 : 1 });
            }
          }
        )
      }
    );
  }
), xG = l.forwardRef(
  (e, t) => {
    const {
      min: n,
      max: r,
      inverted: o,
      onSlideStart: a,
      onSlideMove: i,
      onSlideEnd: s,
      onStepKeyDown: c,
      ...u
    } = e, d = l.useRef(null), f = ne(t, d), m = l.useRef(void 0), b = !o;
    function g(h) {
      const v = m.current || d.current.getBoundingClientRect(), y = [0, v.height], S = $l(y, b ? [r, n] : [n, r]);
      return m.current = v, S(h - v.top);
    }
    return /* @__PURE__ */ p(
      fw,
      {
        scope: e.__scopeSlider,
        startEdge: b ? "bottom" : "top",
        endEdge: b ? "top" : "bottom",
        size: "height",
        direction: b ? 1 : -1,
        children: /* @__PURE__ */ p(
          mw,
          {
            "data-orientation": "vertical",
            ...u,
            ref: f,
            style: {
              ...u.style,
              "--radix-slider-thumb-transform": "translateY(50%)"
            },
            onSlideStart: (h) => {
              const v = g(h.clientY);
              a?.(v);
            },
            onSlideMove: (h) => {
              const v = g(h.clientY);
              i?.(v);
            },
            onSlideEnd: () => {
              m.current = void 0, s?.();
            },
            onStepKeyDown: (h) => {
              const y = lw[b ? "from-bottom" : "from-top"].includes(h.key);
              c?.({ event: h, direction: y ? -1 : 1 });
            }
          }
        )
      }
    );
  }
), mw = l.forwardRef(
  (e, t) => {
    const {
      __scopeSlider: n,
      onSlideStart: r,
      onSlideMove: o,
      onSlideEnd: a,
      onHomeKeyDown: i,
      onEndKeyDown: s,
      onStepKeyDown: c,
      ...u
    } = e, d = ri(rr, n);
    return /* @__PURE__ */ p(
      W.span,
      {
        ...u,
        ref: t,
        onKeyDown: k(e.onKeyDown, (f) => {
          f.key === "Home" ? (i(f), f.preventDefault()) : f.key === "End" ? (s(f), f.preventDefault()) : sw.concat(cw).includes(f.key) && (c(f), f.preventDefault());
        }),
        onPointerDown: k(e.onPointerDown, (f) => {
          const m = f.target;
          m.setPointerCapture(f.pointerId), f.preventDefault(), d.thumbs.has(m) ? m.focus() : r(f);
        }),
        onPointerMove: k(e.onPointerMove, (f) => {
          f.target.hasPointerCapture(f.pointerId) && o(f);
        }),
        onPointerUp: k(e.onPointerUp, (f) => {
          const m = f.target;
          m.hasPointerCapture(f.pointerId) && (m.releasePointerCapture(f.pointerId), a(f));
        })
      }
    );
  }
), hw = "SliderTrack", vw = l.forwardRef(
  (e, t) => {
    const { __scopeSlider: n, ...r } = e, o = ri(hw, n);
    return /* @__PURE__ */ p(
      W.span,
      {
        "data-disabled": o.disabled ? "" : void 0,
        "data-orientation": o.orientation,
        ...r,
        ref: t
      }
    );
  }
);
vw.displayName = hw;
var Ls = "SliderRange", gw = l.forwardRef(
  (e, t) => {
    const { __scopeSlider: n, ...r } = e, o = ri(Ls, n), a = pw(Ls, n), i = l.useRef(null), s = ne(t, i), c = o.values.length, u = o.values.map(
      (m) => ww(m, o.min, o.max)
    ), d = c > 1 ? Math.min(...u) : 0, f = 100 - Math.max(...u);
    return /* @__PURE__ */ p(
      W.span,
      {
        "data-orientation": o.orientation,
        "data-disabled": o.disabled ? "" : void 0,
        ...r,
        ref: s,
        style: {
          ...e.style,
          [a.startEdge]: d + "%",
          [a.endEdge]: f + "%"
        }
      }
    );
  }
);
gw.displayName = Ls;
var Fs = "SliderThumb", bw = l.forwardRef(
  (e, t) => {
    const n = bG(e.__scopeSlider), [r, o] = l.useState(null), a = ne(t, (s) => o(s)), i = l.useMemo(
      () => r ? n().findIndex((s) => s.ref.current === r) : -1,
      [n, r]
    );
    return /* @__PURE__ */ p(CG, { ...e, ref: a, index: i });
  }
), CG = l.forwardRef(
  (e, t) => {
    const { __scopeSlider: n, index: r, name: o, ...a } = e, i = ri(Fs, n), s = pw(Fs, n), [c, u] = l.useState(null), d = ne(t, (w) => u(w)), f = c ? i.form || !!c.closest("form") : !0, m = Vr(c), b = i.values[r], g = b === void 0 ? 0 : ww(b, i.min, i.max), h = _G(r, i.values.length), v = m?.[s.size], y = v ? TG(v, g, s.direction) : 0;
    return l.useEffect(() => {
      if (c)
        return i.thumbs.add(c), () => {
          i.thumbs.delete(c);
        };
    }, [c, i.thumbs]), /* @__PURE__ */ te(
      "span",
      {
        style: {
          transform: "var(--radix-slider-thumb-transform)",
          position: "absolute",
          [s.startEdge]: `calc(${g}% + ${y}px)`
        },
        children: [
          /* @__PURE__ */ p(ks.ItemSlot, { scope: e.__scopeSlider, children: /* @__PURE__ */ p(
            W.span,
            {
              role: "slider",
              "aria-label": e["aria-label"] || h,
              "aria-valuemin": i.min,
              "aria-valuenow": b,
              "aria-valuemax": i.max,
              "aria-orientation": i.orientation,
              "data-orientation": i.orientation,
              "data-disabled": i.disabled ? "" : void 0,
              tabIndex: i.disabled ? void 0 : 0,
              ...a,
              ref: d,
              style: b === void 0 ? { display: "none" } : e.style,
              onFocus: k(e.onFocus, () => {
                i.valueIndexToChangeRef.current = r;
              })
            }
          ) }),
          f && /* @__PURE__ */ p(
            yw,
            {
              name: o ?? (i.name ? i.name + (i.values.length > 1 ? "[]" : "") : void 0),
              form: i.form,
              value: b
            },
            r
          )
        ]
      }
    );
  }
);
bw.displayName = Fs;
var PG = "RadioBubbleInput", yw = l.forwardRef(
  ({ __scopeSlider: e, value: t, ...n }, r) => {
    const o = l.useRef(null), a = ne(o, r), i = Xr(t);
    return l.useEffect(() => {
      const s = o.current;
      if (!s) return;
      const c = window.HTMLInputElement.prototype, d = Object.getOwnPropertyDescriptor(c, "value").set;
      if (i !== t && d) {
        const f = new Event("input", { bubbles: !0 });
        d.call(s, t), s.dispatchEvent(f);
      }
    }, [i, t]), /* @__PURE__ */ p(
      W.input,
      {
        style: { display: "none" },
        ...n,
        ref: a,
        defaultValue: t
      }
    );
  }
);
yw.displayName = PG;
function EG(e = [], t, n) {
  const r = [...e];
  return r[n] = t, r.sort((o, a) => o - a);
}
function ww(e, t, n) {
  const a = 100 / (n - t) * (e - t);
  return Or(a, [0, 100]);
}
function _G(e, t) {
  return t > 2 ? `Value ${e + 1} of ${t}` : t === 2 ? ["Minimum", "Maximum"][e] : void 0;
}
function RG(e, t) {
  if (e.length === 1) return 0;
  const n = e.map((o) => Math.abs(o - t)), r = Math.min(...n);
  return n.indexOf(r);
}
function TG(e, t, n) {
  const r = e / 2, a = $l([0, 50], [0, r]);
  return (r - a(t) * n) * n;
}
function AG(e) {
  return e.slice(0, -1).map((t, n) => e[n + 1] - t);
}
function NG(e, t) {
  if (t > 0) {
    const n = AG(e);
    return Math.min(...n) >= t;
  }
  return !0;
}
function $l(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1]) return t[0];
    const r = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + r * (n - e[0]);
  };
}
function MG(e) {
  return (String(e).split(".")[1] || "").length;
}
function OG(e, t) {
  const n = Math.pow(10, t);
  return Math.round(e * n) / n;
}
var Sw = dw, $G = vw, IG = gw, DG = bw;
const kG = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ te(
  Sw,
  {
    ref: n,
    className: N(
      "relative flex w-full touch-none select-none items-center",
      e
    ),
    ...t,
    children: [
      /* @__PURE__ */ p($G, { className: "relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20", children: /* @__PURE__ */ p(IG, { className: "absolute h-full bg-primary" }) }),
      /* @__PURE__ */ p(DG, { className: "block h-4 w-4 rounded-full border border-primary/50 bg-background shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50" })
    ]
  }
));
kG.displayName = Sw.displayName;
var LG = (e, t, n, r, o, a, i, s) => {
  let c = document.documentElement, u = ["light", "dark"];
  function d(b) {
    (Array.isArray(e) ? e : [e]).forEach((g) => {
      let h = g === "class", v = h && a ? o.map((y) => a[y] || y) : o;
      h ? (c.classList.remove(...v), c.classList.add(a && a[b] ? a[b] : b)) : c.setAttribute(g, b);
    }), f(b);
  }
  function f(b) {
    s && u.includes(b) && (c.style.colorScheme = b);
  }
  function m() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  if (r) d(r);
  else try {
    let b = localStorage.getItem(t) || n, g = i && b === "system" ? m() : b;
    d(g);
  } catch {
  }
}, Fd = ["light", "dark"], xw = "(prefers-color-scheme: dark)", FG = typeof window > "u", Il = l.createContext(void 0), BG = { setTheme: (e) => {
}, themes: [] }, zG = () => {
  var e;
  return (e = l.useContext(Il)) != null ? e : BG;
}, HG = (e) => l.useContext(Il) ? l.createElement(l.Fragment, null, e.children) : l.createElement(VG, { ...e }), jG = ["light", "dark"], VG = ({ forcedTheme: e, disableTransitionOnChange: t = !1, enableSystem: n = !0, enableColorScheme: r = !0, storageKey: o = "theme", themes: a = jG, defaultTheme: i = n ? "system" : "light", attribute: s = "data-theme", value: c, children: u, nonce: d, scriptProps: f }) => {
  let [m, b] = l.useState(() => UG(o, i)), [g, h] = l.useState(() => m === "system" ? Hi() : m), v = c ? Object.values(c) : a, y = l.useCallback((P) => {
    let E = P;
    if (!E) return;
    P === "system" && n && (E = Hi());
    let C = c ? c[E] : E, T = t ? WG(d) : null, R = document.documentElement, D = (M) => {
      M === "class" ? (R.classList.remove(...v), C && R.classList.add(C)) : M.startsWith("data-") && (C ? R.setAttribute(M, C) : R.removeAttribute(M));
    };
    if (Array.isArray(s) ? s.forEach(D) : D(s), r) {
      let M = Fd.includes(i) ? i : null, F = Fd.includes(E) ? E : M;
      R.style.colorScheme = F;
    }
    T?.();
  }, [d]), w = l.useCallback((P) => {
    let E = typeof P == "function" ? P(m) : P;
    b(E);
    try {
      localStorage.setItem(o, E);
    } catch {
    }
  }, [m]), S = l.useCallback((P) => {
    let E = Hi(P);
    h(E), m === "system" && n && !e && y("system");
  }, [m, e]);
  l.useEffect(() => {
    let P = window.matchMedia(xw);
    return P.addListener(S), S(P), () => P.removeListener(S);
  }, [S]), l.useEffect(() => {
    let P = (E) => {
      E.key === o && (E.newValue ? b(E.newValue) : w(i));
    };
    return window.addEventListener("storage", P), () => window.removeEventListener("storage", P);
  }, [w]), l.useEffect(() => {
    y(e ?? m);
  }, [e, m]);
  let x = l.useMemo(() => ({ theme: m, setTheme: w, forcedTheme: e, resolvedTheme: m === "system" ? g : m, themes: n ? [...a, "system"] : a, systemTheme: n ? g : void 0 }), [m, w, e, g, n, a]);
  return l.createElement(Il.Provider, { value: x }, l.createElement(GG, { forcedTheme: e, storageKey: o, attribute: s, enableSystem: n, enableColorScheme: r, defaultTheme: i, value: c, themes: a, nonce: d, scriptProps: f }), u);
}, GG = l.memo(({ forcedTheme: e, storageKey: t, attribute: n, enableSystem: r, enableColorScheme: o, defaultTheme: a, value: i, themes: s, nonce: c, scriptProps: u }) => {
  let d = JSON.stringify([n, t, a, e, s, i, r, o]).slice(1, -1);
  return l.createElement("script", { ...u, suppressHydrationWarning: !0, nonce: typeof window > "u" ? c : "", dangerouslySetInnerHTML: { __html: `(${LG.toString()})(${d})` } });
}), UG = (e, t) => {
  if (FG) return;
  let n;
  try {
    n = localStorage.getItem(e) || void 0;
  } catch {
  }
  return n || t;
}, WG = (e) => {
  let t = document.createElement("style");
  return e && t.setAttribute("nonce", e), t.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")), document.head.appendChild(t), () => {
    window.getComputedStyle(document.body), setTimeout(() => {
      document.head.removeChild(t);
    }, 1);
  };
}, Hi = (e) => (e || (e = window.matchMedia(xw)), e.matches ? "dark" : "light"), oi = "Switch", [KG, GW] = be(oi), [YG, qG] = KG(oi), Cw = l.forwardRef(
  (e, t) => {
    const {
      __scopeSwitch: n,
      name: r,
      checked: o,
      defaultChecked: a,
      required: i,
      disabled: s,
      value: c = "on",
      onCheckedChange: u,
      form: d,
      ...f
    } = e, [m, b] = l.useState(null), g = ne(t, (S) => b(S)), h = l.useRef(!1), v = m ? d || !!m.closest("form") : !0, [y, w] = xe({
      prop: o,
      defaultProp: a ?? !1,
      onChange: u,
      caller: oi
    });
    return /* @__PURE__ */ te(YG, { scope: n, checked: y, disabled: s, children: [
      /* @__PURE__ */ p(
        W.button,
        {
          type: "button",
          role: "switch",
          "aria-checked": y,
          "aria-required": i,
          "data-state": Rw(y),
          "data-disabled": s ? "" : void 0,
          disabled: s,
          value: c,
          ...f,
          ref: g,
          onClick: k(e.onClick, (S) => {
            w((x) => !x), v && (h.current = S.isPropagationStopped(), h.current || S.stopPropagation());
          })
        }
      ),
      v && /* @__PURE__ */ p(
        _w,
        {
          control: m,
          bubbles: !h.current,
          name: r,
          value: c,
          checked: y,
          required: i,
          disabled: s,
          form: d,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
Cw.displayName = oi;
var Pw = "SwitchThumb", Ew = l.forwardRef(
  (e, t) => {
    const { __scopeSwitch: n, ...r } = e, o = qG(Pw, n);
    return /* @__PURE__ */ p(
      W.span,
      {
        "data-state": Rw(o.checked),
        "data-disabled": o.disabled ? "" : void 0,
        ...r,
        ref: t
      }
    );
  }
);
Ew.displayName = Pw;
var XG = "SwitchBubbleInput", _w = l.forwardRef(
  ({
    __scopeSwitch: e,
    control: t,
    checked: n,
    bubbles: r = !0,
    ...o
  }, a) => {
    const i = l.useRef(null), s = ne(i, a), c = Xr(n), u = Vr(t);
    return l.useEffect(() => {
      const d = i.current;
      if (!d) return;
      const f = window.HTMLInputElement.prototype, b = Object.getOwnPropertyDescriptor(
        f,
        "checked"
      ).set;
      if (c !== n && b) {
        const g = new Event("click", { bubbles: r });
        b.call(d, n), d.dispatchEvent(g);
      }
    }, [c, n, r]), /* @__PURE__ */ p(
      "input",
      {
        type: "checkbox",
        "aria-hidden": !0,
        defaultChecked: n,
        ...o,
        tabIndex: -1,
        ref: s,
        style: {
          ...o.style,
          ...u,
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0
        }
      }
    );
  }
);
_w.displayName = XG;
function Rw(e) {
  return e ? "checked" : "unchecked";
}
var Tw = Cw, ZG = Ew;
const JG = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p(
  Tw,
  {
    className: N(
      "peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
      e
    ),
    ...t,
    ref: n,
    children: /* @__PURE__ */ p(
      ZG,
      {
        className: N(
          "pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
        )
      }
    )
  }
));
JG.displayName = Tw.displayName;
var ai = "Tabs", [QG, UW] = be(ai, [
  Nt
]), Aw = Nt(), [eU, Dl] = QG(ai), Nw = l.forwardRef(
  (e, t) => {
    const {
      __scopeTabs: n,
      value: r,
      onValueChange: o,
      defaultValue: a,
      orientation: i = "horizontal",
      dir: s,
      activationMode: c = "automatic",
      ...u
    } = e, d = At(s), [f, m] = xe({
      prop: r,
      onChange: o,
      defaultProp: a ?? "",
      caller: ai
    });
    return /* @__PURE__ */ p(
      eU,
      {
        scope: n,
        baseId: $e(),
        value: f,
        onValueChange: m,
        orientation: i,
        dir: d,
        activationMode: c,
        children: /* @__PURE__ */ p(
          W.div,
          {
            dir: d,
            "data-orientation": i,
            ...u,
            ref: t
          }
        )
      }
    );
  }
);
Nw.displayName = ai;
var Mw = "TabsList", Ow = l.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, loop: r = !0, ...o } = e, a = Dl(Mw, n), i = Aw(n);
    return /* @__PURE__ */ p(
      Yr,
      {
        asChild: !0,
        ...i,
        orientation: a.orientation,
        dir: a.dir,
        loop: r,
        children: /* @__PURE__ */ p(
          W.div,
          {
            role: "tablist",
            "aria-orientation": a.orientation,
            ...o,
            ref: t
          }
        )
      }
    );
  }
);
Ow.displayName = Mw;
var $w = "TabsTrigger", Iw = l.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, value: r, disabled: o = !1, ...a } = e, i = Dl($w, n), s = Aw(n), c = Lw(i.baseId, r), u = Fw(i.baseId, r), d = r === i.value;
    return /* @__PURE__ */ p(
      qr,
      {
        asChild: !0,
        ...s,
        focusable: !o,
        active: d,
        children: /* @__PURE__ */ p(
          W.button,
          {
            type: "button",
            role: "tab",
            "aria-selected": d,
            "aria-controls": u,
            "data-state": d ? "active" : "inactive",
            "data-disabled": o ? "" : void 0,
            disabled: o,
            id: c,
            ...a,
            ref: t,
            onMouseDown: k(e.onMouseDown, (f) => {
              !o && f.button === 0 && f.ctrlKey === !1 ? i.onValueChange(r) : f.preventDefault();
            }),
            onKeyDown: k(e.onKeyDown, (f) => {
              [" ", "Enter"].includes(f.key) && i.onValueChange(r);
            }),
            onFocus: k(e.onFocus, () => {
              const f = i.activationMode !== "manual";
              !d && !o && f && i.onValueChange(r);
            })
          }
        )
      }
    );
  }
);
Iw.displayName = $w;
var Dw = "TabsContent", kw = l.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, value: r, forceMount: o, children: a, ...i } = e, s = Dl(Dw, n), c = Lw(s.baseId, r), u = Fw(s.baseId, r), d = r === s.value, f = l.useRef(d);
    return l.useEffect(() => {
      const m = requestAnimationFrame(() => f.current = !1);
      return () => cancelAnimationFrame(m);
    }, []), /* @__PURE__ */ p(Re, { present: o || d, children: ({ present: m }) => /* @__PURE__ */ p(
      W.div,
      {
        "data-state": d ? "active" : "inactive",
        "data-orientation": s.orientation,
        role: "tabpanel",
        "aria-labelledby": c,
        hidden: !m,
        id: u,
        tabIndex: 0,
        ...i,
        ref: t,
        style: {
          ...e.style,
          animationDuration: f.current ? "0s" : void 0
        },
        children: m && a
      }
    ) });
  }
);
kw.displayName = Dw;
function Lw(e, t) {
  return `${e}-trigger-${t}`;
}
function Fw(e, t) {
  return `${e}-content-${t}`;
}
var tU = Nw, Bw = Ow, zw = Iw, Hw = kw;
const WW = tU, nU = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p(
  Bw,
  {
    ref: n,
    className: N(
      "inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",
      e
    ),
    ...t
  }
));
nU.displayName = Bw.displayName;
const rU = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p(
  zw,
  {
    ref: n,
    className: N(
      "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow",
      e
    ),
    ...t
  }
));
rU.displayName = zw.displayName;
const oU = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p(
  Hw,
  {
    ref: n,
    className: N(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      e
    ),
    ...t
  }
));
oU.displayName = Hw.displayName;
var kl = "ToastProvider", [Ll, aU, iU] = Sn("Toast"), [jw, KW] = be("Toast", [iU]), [sU, ii] = jw(kl), Vw = (e) => {
  const {
    __scopeToast: t,
    label: n = "Notification",
    duration: r = 5e3,
    swipeDirection: o = "right",
    swipeThreshold: a = 50,
    children: i
  } = e, [s, c] = l.useState(null), [u, d] = l.useState(0), f = l.useRef(!1), m = l.useRef(!1);
  return n.trim() || console.error(
    `Invalid prop \`label\` supplied to \`${kl}\`. Expected non-empty \`string\`.`
  ), /* @__PURE__ */ p(Ll.Provider, { scope: t, children: /* @__PURE__ */ p(
    sU,
    {
      scope: t,
      label: n,
      duration: r,
      swipeDirection: o,
      swipeThreshold: a,
      toastCount: u,
      viewport: s,
      onViewportChange: c,
      onToastAdd: l.useCallback(() => d((b) => b + 1), []),
      onToastRemove: l.useCallback(() => d((b) => b - 1), []),
      isFocusedToastEscapeKeyDownRef: f,
      isClosePausedRef: m,
      children: i
    }
  ) });
};
Vw.displayName = kl;
var Gw = "ToastViewport", cU = ["F8"], Bs = "toast.viewportPause", zs = "toast.viewportResume", Uw = l.forwardRef(
  (e, t) => {
    const {
      __scopeToast: n,
      hotkey: r = cU,
      label: o = "Notifications ({hotkey})",
      ...a
    } = e, i = ii(Gw, n), s = aU(n), c = l.useRef(null), u = l.useRef(null), d = l.useRef(null), f = l.useRef(null), m = ne(t, f, i.onViewportChange), b = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""), g = i.toastCount > 0;
    l.useEffect(() => {
      const v = (y) => {
        r.length !== 0 && r.every((S) => y[S] || y.code === S) && f.current?.focus();
      };
      return document.addEventListener("keydown", v), () => document.removeEventListener("keydown", v);
    }, [r]), l.useEffect(() => {
      const v = c.current, y = f.current;
      if (g && v && y) {
        const w = () => {
          if (!i.isClosePausedRef.current) {
            const E = new CustomEvent(Bs);
            y.dispatchEvent(E), i.isClosePausedRef.current = !0;
          }
        }, S = () => {
          if (i.isClosePausedRef.current) {
            const E = new CustomEvent(zs);
            y.dispatchEvent(E), i.isClosePausedRef.current = !1;
          }
        }, x = (E) => {
          !v.contains(E.relatedTarget) && S();
        }, P = () => {
          v.contains(document.activeElement) || S();
        };
        return v.addEventListener("focusin", w), v.addEventListener("focusout", x), v.addEventListener("pointermove", w), v.addEventListener("pointerleave", P), window.addEventListener("blur", w), window.addEventListener("focus", S), () => {
          v.removeEventListener("focusin", w), v.removeEventListener("focusout", x), v.removeEventListener("pointermove", w), v.removeEventListener("pointerleave", P), window.removeEventListener("blur", w), window.removeEventListener("focus", S);
        };
      }
    }, [g, i.isClosePausedRef]);
    const h = l.useCallback(
      ({ tabbingDirection: v }) => {
        const w = s().map((S) => {
          const x = S.ref.current, P = [x, ...SU(x)];
          return v === "forwards" ? P : P.reverse();
        });
        return (v === "forwards" ? w.reverse() : w).flat();
      },
      [s]
    );
    return l.useEffect(() => {
      const v = f.current;
      if (v) {
        const y = (w) => {
          const S = w.altKey || w.ctrlKey || w.metaKey;
          if (w.key === "Tab" && !S) {
            const P = document.activeElement, E = w.shiftKey;
            if (w.target === v && E) {
              u.current?.focus();
              return;
            }
            const R = h({ tabbingDirection: E ? "backwards" : "forwards" }), D = R.findIndex((M) => M === P);
            ji(R.slice(D + 1)) ? w.preventDefault() : E ? u.current?.focus() : d.current?.focus();
          }
        };
        return v.addEventListener("keydown", y), () => v.removeEventListener("keydown", y);
      }
    }, [s, h]), /* @__PURE__ */ te(
      iD,
      {
        ref: c,
        role: "region",
        "aria-label": o.replace("{hotkey}", b),
        tabIndex: -1,
        style: { pointerEvents: g ? void 0 : "none" },
        children: [
          g && /* @__PURE__ */ p(
            Hs,
            {
              ref: u,
              onFocusFromOutsideViewport: () => {
                const v = h({
                  tabbingDirection: "forwards"
                });
                ji(v);
              }
            }
          ),
          /* @__PURE__ */ p(Ll.Slot, { scope: n, children: /* @__PURE__ */ p(W.ol, { tabIndex: -1, ...a, ref: m }) }),
          g && /* @__PURE__ */ p(
            Hs,
            {
              ref: d,
              onFocusFromOutsideViewport: () => {
                const v = h({
                  tabbingDirection: "backwards"
                });
                ji(v);
              }
            }
          )
        ]
      }
    );
  }
);
Uw.displayName = Gw;
var Ww = "ToastFocusProxy", Hs = l.forwardRef(
  (e, t) => {
    const { __scopeToast: n, onFocusFromOutsideViewport: r, ...o } = e, a = ii(Ww, n);
    return /* @__PURE__ */ p(
      Ia,
      {
        "aria-hidden": !0,
        tabIndex: 0,
        ...o,
        ref: t,
        style: { position: "fixed" },
        onFocus: (i) => {
          const s = i.relatedTarget;
          !a.viewport?.contains(s) && r();
        }
      }
    );
  }
);
Hs.displayName = Ww;
var oo = "Toast", lU = "toast.swipeStart", uU = "toast.swipeMove", dU = "toast.swipeCancel", fU = "toast.swipeEnd", Kw = l.forwardRef(
  (e, t) => {
    const { forceMount: n, open: r, defaultOpen: o, onOpenChange: a, ...i } = e, [s, c] = xe({
      prop: r,
      defaultProp: o ?? !0,
      onChange: a,
      caller: oo
    });
    return /* @__PURE__ */ p(Re, { present: n || s, children: /* @__PURE__ */ p(
      hU,
      {
        open: s,
        ...i,
        ref: t,
        onClose: () => c(!1),
        onPause: Se(e.onPause),
        onResume: Se(e.onResume),
        onSwipeStart: k(e.onSwipeStart, (u) => {
          u.currentTarget.setAttribute("data-swipe", "start");
        }),
        onSwipeMove: k(e.onSwipeMove, (u) => {
          const { x: d, y: f } = u.detail.delta;
          u.currentTarget.setAttribute("data-swipe", "move"), u.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${d}px`), u.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${f}px`);
        }),
        onSwipeCancel: k(e.onSwipeCancel, (u) => {
          u.currentTarget.setAttribute("data-swipe", "cancel"), u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), u.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"), u.currentTarget.style.removeProperty("--radix-toast-swipe-end-y");
        }),
        onSwipeEnd: k(e.onSwipeEnd, (u) => {
          const { x: d, y: f } = u.detail.delta;
          u.currentTarget.setAttribute("data-swipe", "end"), u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), u.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${d}px`), u.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${f}px`), c(!1);
        })
      }
    ) });
  }
);
Kw.displayName = oo;
var [pU, mU] = jw(oo, {
  onClose() {
  }
}), hU = l.forwardRef(
  (e, t) => {
    const {
      __scopeToast: n,
      type: r = "foreground",
      duration: o,
      open: a,
      onClose: i,
      onEscapeKeyDown: s,
      onPause: c,
      onResume: u,
      onSwipeStart: d,
      onSwipeMove: f,
      onSwipeCancel: m,
      onSwipeEnd: b,
      ...g
    } = e, h = ii(oo, n), [v, y] = l.useState(null), w = ne(t, (I) => y(I)), S = l.useRef(null), x = l.useRef(null), P = o || h.duration, E = l.useRef(0), C = l.useRef(P), T = l.useRef(0), { onToastAdd: R, onToastRemove: D } = h, M = Se(() => {
      v?.contains(document.activeElement) && h.viewport?.focus(), i();
    }), F = l.useCallback(
      (I) => {
        !I || I === 1 / 0 || (window.clearTimeout(T.current), E.current = (/* @__PURE__ */ new Date()).getTime(), T.current = window.setTimeout(M, I));
      },
      [M]
    );
    l.useEffect(() => {
      const I = h.viewport;
      if (I) {
        const z = () => {
          F(C.current), u?.();
        }, L = () => {
          const U = (/* @__PURE__ */ new Date()).getTime() - E.current;
          C.current = C.current - U, window.clearTimeout(T.current), c?.();
        };
        return I.addEventListener(Bs, L), I.addEventListener(zs, z), () => {
          I.removeEventListener(Bs, L), I.removeEventListener(zs, z);
        };
      }
    }, [h.viewport, P, c, u, F]), l.useEffect(() => {
      a && !h.isClosePausedRef.current && F(P);
    }, [a, P, h.isClosePausedRef, F]), l.useEffect(() => (R(), () => D()), [R, D]);
    const $ = l.useMemo(() => v ? eS(v) : null, [v]);
    return h.viewport ? /* @__PURE__ */ te(dt, { children: [
      $ && /* @__PURE__ */ p(
        vU,
        {
          __scopeToast: n,
          role: "status",
          "aria-live": r === "foreground" ? "assertive" : "polite",
          "aria-atomic": !0,
          children: $
        }
      ),
      /* @__PURE__ */ p(pU, { scope: n, onClose: M, children: Ir.createPortal(
        /* @__PURE__ */ p(Ll.ItemSlot, { scope: n, children: /* @__PURE__ */ p(
          aD,
          {
            asChild: !0,
            onEscapeKeyDown: k(s, () => {
              h.isFocusedToastEscapeKeyDownRef.current || M(), h.isFocusedToastEscapeKeyDownRef.current = !1;
            }),
            children: /* @__PURE__ */ p(
              W.li,
              {
                role: "status",
                "aria-live": "off",
                "aria-atomic": !0,
                tabIndex: 0,
                "data-state": a ? "open" : "closed",
                "data-swipe-direction": h.swipeDirection,
                ...g,
                ref: w,
                style: { userSelect: "none", touchAction: "none", ...e.style },
                onKeyDown: k(e.onKeyDown, (I) => {
                  I.key === "Escape" && (s?.(I.nativeEvent), I.nativeEvent.defaultPrevented || (h.isFocusedToastEscapeKeyDownRef.current = !0, M()));
                }),
                onPointerDown: k(e.onPointerDown, (I) => {
                  I.button === 0 && (S.current = { x: I.clientX, y: I.clientY });
                }),
                onPointerMove: k(e.onPointerMove, (I) => {
                  if (!S.current) return;
                  const z = I.clientX - S.current.x, L = I.clientY - S.current.y, U = !!x.current, H = ["left", "right"].includes(h.swipeDirection), B = ["left", "up"].includes(h.swipeDirection) ? Math.min : Math.max, oe = H ? B(0, z) : 0, re = H ? 0 : B(0, L), ie = I.pointerType === "touch" ? 10 : 2, j = { x: oe, y: re }, K = { originalEvent: I, delta: j };
                  U ? (x.current = j, Co(uU, f, K, {
                    discrete: !1
                  })) : Bd(j, h.swipeDirection, ie) ? (x.current = j, Co(lU, d, K, {
                    discrete: !1
                  }), I.target.setPointerCapture(I.pointerId)) : (Math.abs(z) > ie || Math.abs(L) > ie) && (S.current = null);
                }),
                onPointerUp: k(e.onPointerUp, (I) => {
                  const z = x.current, L = I.target;
                  if (L.hasPointerCapture(I.pointerId) && L.releasePointerCapture(I.pointerId), x.current = null, S.current = null, z) {
                    const U = I.currentTarget, H = { originalEvent: I, delta: z };
                    Bd(z, h.swipeDirection, h.swipeThreshold) ? Co(fU, b, H, {
                      discrete: !0
                    }) : Co(
                      dU,
                      m,
                      H,
                      {
                        discrete: !0
                      }
                    ), U.addEventListener("click", (B) => B.preventDefault(), {
                      once: !0
                    });
                  }
                })
              }
            )
          }
        ) }),
        h.viewport
      ) })
    ] }) : null;
  }
), vU = (e) => {
  const { __scopeToast: t, children: n, ...r } = e, o = ii(oo, t), [a, i] = l.useState(!1), [s, c] = l.useState(!1);
  return yU(() => i(!0)), l.useEffect(() => {
    const u = window.setTimeout(() => c(!0), 1e3);
    return () => window.clearTimeout(u);
  }, []), s ? null : /* @__PURE__ */ p(yn, { asChild: !0, children: /* @__PURE__ */ p(Ia, { ...r, children: a && /* @__PURE__ */ te(dt, { children: [
    o.label,
    " ",
    n
  ] }) }) });
}, gU = "ToastTitle", Yw = l.forwardRef(
  (e, t) => {
    const { __scopeToast: n, ...r } = e;
    return /* @__PURE__ */ p(W.div, { ...r, ref: t });
  }
);
Yw.displayName = gU;
var bU = "ToastDescription", qw = l.forwardRef(
  (e, t) => {
    const { __scopeToast: n, ...r } = e;
    return /* @__PURE__ */ p(W.div, { ...r, ref: t });
  }
);
qw.displayName = bU;
var Xw = "ToastAction", Zw = l.forwardRef(
  (e, t) => {
    const { altText: n, ...r } = e;
    return n.trim() ? /* @__PURE__ */ p(Qw, { altText: n, asChild: !0, children: /* @__PURE__ */ p(Fl, { ...r, ref: t }) }) : (console.error(
      `Invalid prop \`altText\` supplied to \`${Xw}\`. Expected non-empty \`string\`.`
    ), null);
  }
);
Zw.displayName = Xw;
var Jw = "ToastClose", Fl = l.forwardRef(
  (e, t) => {
    const { __scopeToast: n, ...r } = e, o = mU(Jw, n);
    return /* @__PURE__ */ p(Qw, { asChild: !0, children: /* @__PURE__ */ p(
      W.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: k(e.onClick, o.onClose)
      }
    ) });
  }
);
Fl.displayName = Jw;
var Qw = l.forwardRef((e, t) => {
  const { __scopeToast: n, altText: r, ...o } = e;
  return /* @__PURE__ */ p(
    W.div,
    {
      "data-radix-toast-announce-exclude": "",
      "data-radix-toast-announce-alt": r || void 0,
      ...o,
      ref: t
    }
  );
});
function eS(e) {
  const t = [];
  return Array.from(e.childNodes).forEach((r) => {
    if (r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent), wU(r)) {
      const o = r.ariaHidden || r.hidden || r.style.display === "none", a = r.dataset.radixToastAnnounceExclude === "";
      if (!o)
        if (a) {
          const i = r.dataset.radixToastAnnounceAlt;
          i && t.push(i);
        } else
          t.push(...eS(r));
    }
  }), t;
}
function Co(e, t, n, { discrete: r }) {
  const o = n.originalEvent.currentTarget, a = new CustomEvent(e, { bubbles: !0, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? gc(o, a) : o.dispatchEvent(a);
}
var Bd = (e, t, n = 0) => {
  const r = Math.abs(e.x), o = Math.abs(e.y), a = r > o;
  return t === "left" || t === "right" ? a && r > n : !a && o > n;
};
function yU(e = () => {
}) {
  const t = Se(e);
  _e(() => {
    let n = 0, r = 0;
    return n = window.requestAnimationFrame(() => r = window.requestAnimationFrame(t)), () => {
      window.cancelAnimationFrame(n), window.cancelAnimationFrame(r);
    };
  }, [t]);
}
function wU(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function SU(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function ji(e) {
  const t = document.activeElement;
  return e.some((n) => n === t ? !0 : (n.focus(), document.activeElement !== t));
}
var xU = Vw, tS = Uw, nS = Kw, rS = Yw, oS = qw, aS = Zw, iS = Fl;
const CU = xU, sS = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p(
  tS,
  {
    ref: n,
    className: N(
      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
      e
    ),
    ...t
  }
));
sS.displayName = tS.displayName;
const PU = $r(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-2 overflow-hidden rounded-md border p-4 pr-6 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
  {
    variants: {
      variant: {
        default: "border bg-background text-foreground",
        destructive: "destructive group border-destructive bg-destructive text-destructive-foreground",
        success: "border-green-600 bg-green-50 text-green-900"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
), cS = l.forwardRef(({ className: e, variant: t, ...n }, r) => /* @__PURE__ */ p(
  nS,
  {
    ref: r,
    className: N(PU({ variant: t }), e),
    ...n
  }
));
cS.displayName = nS.displayName;
const EU = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p(
  aS,
  {
    ref: n,
    className: N(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium transition-colors hover:bg-secondary focus:outline-none focus:ring-1 focus:ring-ring disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
      e
    ),
    ...t
  }
));
EU.displayName = aS.displayName;
const lS = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p(
  iS,
  {
    ref: n,
    className: N(
      "absolute right-1 top-1 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-1 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      e
    ),
    "toast-close": "",
    ...t,
    children: /* @__PURE__ */ p(Ys, { className: "h-4 w-4" })
  }
));
lS.displayName = iS.displayName;
const uS = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p(
  rS,
  {
    ref: n,
    className: N("text-sm font-semibold [&+div]:text-xs", e),
    ...t
  }
));
uS.displayName = rS.displayName;
const dS = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p(
  oS,
  {
    ref: n,
    className: N("text-sm opacity-90", e),
    ...t
  }
));
dS.displayName = oS.displayName;
const _U = 1, RU = 1e6;
let Vi = 0;
function TU() {
  return Vi = (Vi + 1) % Number.MAX_SAFE_INTEGER, Vi.toString();
}
const Gi = /* @__PURE__ */ new Map(), zd = (e) => {
  if (Gi.has(e))
    return;
  const t = setTimeout(() => {
    Gi.delete(e), vr({
      type: "REMOVE_TOAST",
      toastId: e
    });
  }, RU);
  Gi.set(e, t);
}, AU = (e, t) => {
  switch (t.type) {
    case "ADD_TOAST":
      return {
        ...e,
        toasts: [t.toast, ...e.toasts].slice(0, _U)
      };
    case "UPDATE_TOAST":
      return {
        ...e,
        toasts: e.toasts.map(
          (n) => n.id === t.toast.id ? { ...n, ...t.toast } : n
        )
      };
    case "DISMISS_TOAST": {
      const { toastId: n } = t;
      return n ? zd(n) : e.toasts.forEach((r) => {
        zd(r.id);
      }), {
        ...e,
        toasts: e.toasts.map(
          (r) => r.id === n || n === void 0 ? {
            ...r,
            open: !1
          } : r
        )
      };
    }
    case "REMOVE_TOAST":
      return t.toastId === void 0 ? {
        ...e,
        toasts: []
      } : {
        ...e,
        toasts: e.toasts.filter((n) => n.id !== t.toastId)
      };
  }
}, No = [];
let Mo = { toasts: [] };
function vr(e) {
  Mo = AU(Mo, e), No.forEach((t) => {
    t(Mo);
  });
}
function NU({ ...e }) {
  const t = TU(), n = (o) => vr({
    type: "UPDATE_TOAST",
    toast: { ...o, id: t }
  }), r = () => vr({ type: "DISMISS_TOAST", toastId: t });
  return vr({
    type: "ADD_TOAST",
    toast: {
      ...e,
      id: t,
      open: !0,
      onOpenChange: (o) => {
        o || r();
      }
    }
  }), {
    id: t,
    dismiss: r,
    update: n
  };
}
function MU() {
  const [e, t] = l.useState(Mo);
  return l.useEffect(() => (No.push(t), () => {
    const n = No.indexOf(t);
    n > -1 && No.splice(n, 1);
  }), [e]), {
    ...e,
    toast: NU,
    dismiss: (n) => vr({ type: "DISMISS_TOAST", toastId: n })
  };
}
function YW() {
  const { toasts: e } = MU();
  return /* @__PURE__ */ te(CU, { children: [
    e.map(function({ id: t, title: n, description: r, action: o, ...a }) {
      return /* @__PURE__ */ te(cS, { ...a, children: [
        /* @__PURE__ */ te("div", { className: "grid gap-1", children: [
          n && /* @__PURE__ */ p(uS, { children: n }),
          r && /* @__PURE__ */ p(dS, { children: r })
        ] }),
        o,
        /* @__PURE__ */ p(lS, {})
      ] }, t);
    }),
    /* @__PURE__ */ p(sS, {})
  ] });
}
function qW() {
  const { setTheme: e } = zG();
  return /* @__PURE__ */ te(rH, { children: [
    /* @__PURE__ */ p(oH, { asChild: !0, children: /* @__PURE__ */ te(la, { variant: "outline", size: "icon", children: [
      /* @__PURE__ */ p(ES, { className: "h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" }),
      /* @__PURE__ */ p(CS, { className: "absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" }),
      /* @__PURE__ */ p("span", { className: "sr-only", children: "Toggle theme" })
    ] }) }),
    /* @__PURE__ */ te(Sg, { align: "end", children: [
      /* @__PURE__ */ p(To, { onClick: () => e("light"), children: "Light" }),
      /* @__PURE__ */ p(To, { onClick: () => e("dark"), children: "Dark" }),
      /* @__PURE__ */ p(To, { onClick: () => e("system"), children: "System" })
    ] })
  ] });
}
function XW({
  children: e,
  ...t
}) {
  return /* @__PURE__ */ p(HG, { ...t, children: e });
}
export {
  WU as Accordion,
  dF as AccordionContent,
  lF as AccordionItem,
  uF as AccordionTrigger,
  YU as AlertDialog,
  NF as AlertDialogAction,
  MF as AlertDialogCancel,
  EF as AlertDialogContent,
  AF as AlertDialogDescription,
  RF as AlertDialogFooter,
  _F as AlertDialogHeader,
  bh as AlertDialogOverlay,
  PF as AlertDialogPortal,
  TF as AlertDialogTitle,
  qU as AlertDialogTrigger,
  XU as AspectRatio,
  BF as Avatar,
  HF as AvatarFallback,
  zF as AvatarImage,
  ix as Carousel,
  sx as CarouselContent,
  cx as CarouselItem,
  ux as CarouselNext,
  lx as CarouselPrevious,
  dI as ChartContainer,
  FU as ChartLegend,
  mI as ChartLegendContent,
  fI as ChartStyle,
  LU as ChartTooltip,
  pI as ChartTooltipContent,
  WF as Checkbox,
  QU as Collapsible,
  tW as CollapsibleContent,
  eW as CollapsibleTrigger,
  rW as ContextMenu,
  GB as ContextMenuCheckboxItem,
  jB as ContextMenuContent,
  aW as ContextMenuGroup,
  VB as ContextMenuItem,
  WB as ContextMenuLabel,
  iW as ContextMenuPortal,
  cW as ContextMenuRadioGroup,
  UB as ContextMenuRadioItem,
  KB as ContextMenuSeparator,
  YB as ContextMenuShortcut,
  sW as ContextMenuSub,
  HB as ContextMenuSubContent,
  zB as ContextMenuSubTrigger,
  oW as ContextMenuTrigger,
  lW as Dialog,
  dW as DialogClose,
  XB as DialogContent,
  ez as DialogDescription,
  JB as DialogFooter,
  ZB as DialogHeader,
  Dv as DialogOverlay,
  qB as DialogPortal,
  QB as DialogTitle,
  uW as DialogTrigger,
  Az as Drawer,
  pW as DrawerClose,
  Mz as DrawerContent,
  Dz as DrawerDescription,
  $z as DrawerFooter,
  Oz as DrawerHeader,
  Kv as DrawerOverlay,
  Nz as DrawerPortal,
  Iz as DrawerTitle,
  fW as DrawerTrigger,
  rH as DropdownMenu,
  sH as DropdownMenuCheckboxItem,
  Sg as DropdownMenuContent,
  hW as DropdownMenuGroup,
  To as DropdownMenuItem,
  lH as DropdownMenuLabel,
  vW as DropdownMenuPortal,
  bW as DropdownMenuRadioGroup,
  cH as DropdownMenuRadioItem,
  uH as DropdownMenuSeparator,
  dH as DropdownMenuShortcut,
  gW as DropdownMenuSub,
  iH as DropdownMenuSubContent,
  aH as DropdownMenuSubTrigger,
  oH as DropdownMenuTrigger,
  BU as Form,
  FI as FormControl,
  BI as FormDescription,
  zU as FormField,
  kI as FormItem,
  LI as FormLabel,
  zI as FormMessage,
  SW as HoverCard,
  SH as HoverCardContent,
  xW as HoverCardTrigger,
  DH as InputOTP,
  kH as InputOTPGroup,
  FH as InputOTPSeparator,
  LH as InputOTPSlot,
  op as Label,
  sj as Menubar,
  pj as MenubarCheckboxItem,
  dj as MenubarContent,
  EW as MenubarGroup,
  fj as MenubarItem,
  hj as MenubarLabel,
  PW as MenubarMenu,
  _W as MenubarPortal,
  TW as MenubarRadioGroup,
  mj as MenubarRadioItem,
  vj as MenubarSeparator,
  gj as MenubarShortcut,
  RW as MenubarSub,
  uj as MenubarSubContent,
  lj as MenubarSubTrigger,
  cj as MenubarTrigger,
  qW as ModeToggle,
  NW as Popover,
  OW as PopoverAnchor,
  Mj as PopoverContent,
  MW as PopoverTrigger,
  Bj as Progress,
  Xj as RadioGroup,
  Zj as RadioGroupItem,
  LW as ResizableHandle,
  kW as ResizablePanel,
  DW as ResizablePanelGroup,
  FV as ScrollArea,
  xy as ScrollBar,
  zW as Select,
  mG as SelectContent,
  HW as SelectGroup,
  vG as SelectItem,
  hG as SelectLabel,
  iw as SelectScrollDownButton,
  aw as SelectScrollUpButton,
  gG as SelectSeparator,
  pG as SelectTrigger,
  jW as SelectValue,
  lp as Separator,
  pk as Sheet,
  jU as SheetClose,
  zp as SheetContent,
  yk as SheetDescription,
  gk as SheetFooter,
  vk as SheetHeader,
  Bp as SheetOverlay,
  mk as SheetPortal,
  bk as SheetTitle,
  HU as SheetTrigger,
  a2 as Sidebar,
  p2 as SidebarContent,
  d2 as SidebarFooter,
  m2 as SidebarGroup,
  v2 as SidebarGroupAction,
  g2 as SidebarGroupContent,
  h2 as SidebarGroupLabel,
  u2 as SidebarHeader,
  l2 as SidebarInput,
  c2 as SidebarInset,
  b2 as SidebarMenu,
  x2 as SidebarMenuAction,
  C2 as SidebarMenuBadge,
  S2 as SidebarMenuButton,
  y2 as SidebarMenuItem,
  P2 as SidebarMenuSkeleton,
  E2 as SidebarMenuSub,
  R2 as SidebarMenuSubButton,
  _2 as SidebarMenuSubItem,
  o2 as SidebarProvider,
  s2 as SidebarRail,
  f2 as SidebarSeparator,
  i2 as SidebarTrigger,
  kG as Slider,
  JG as Switch,
  WW as Tabs,
  oU as TabsContent,
  nU as TabsList,
  rU as TabsTrigger,
  XW as ThemeProvider,
  cS as Toast,
  EU as ToastAction,
  lS as ToastClose,
  dS as ToastDescription,
  CU as ToastProvider,
  uS as ToastTitle,
  sS as ToastViewport,
  YW as Toaster,
  V2 as Toggle,
  G2 as ToggleGroup,
  U2 as ToggleGroupItem,
  XL as Tooltip,
  gm as TooltipContent,
  qL as TooltipProvider,
  ZL as TooltipTrigger,
  AU as reducer,
  NU as toast,
  Im as toggleVariants,
  Ca as useFormField,
  HI as useIsMobile,
  La as useSidebar,
  MU as useToast
};
