import r, { useState as d, useEffect as w } from "react";
const y = ({ condition: t, render: e }) => t ? /* @__PURE__ */ r.createElement(r.Fragment, null, e) : null, F = ({ eachIn: t, render: e }) => /* @__PURE__ */ r.createElement(r.Fragment, null, t.map((s, n) => /* @__PURE__ */ r.createElement(r.Fragment, { key: n }, e(s)))), b = () => {
  const [t, e] = r.useState(!1);
  return r.useEffect(() => (e(!0), () => e(!1)), []), t;
}, p = (t) => {
  const [e, s] = r.useState(t);
  return [e, () => s((o) => !o)];
}, V = (t, e) => {
  const s = r.useRef(t);
  r.useEffect(() => {
    s.current = t;
  }, [t]), r.useEffect(() => {
    if (e !== null) {
      const n = setInterval(s.current, e);
      return () => clearInterval(n);
    }
  }, [e]);
}, D = (t) => {
  const e = r.useRef();
  return r.useEffect(() => {
    e.current = t;
  }, [t]), e.current;
}, O = (t, e) => {
  const [s, n] = r.useState(t);
  return r.useEffect(() => {
    const o = setTimeout(() => n(t), e);
    return () => clearTimeout(o);
  }, [t]), s;
}, T = (t) => {
  const [e, s] = r.useState(!1);
  return r.useEffect(() => {
    const n = new IntersectionObserver(([o]) => s(o.isIntersecting));
    return t.current && n.observe(t.current), () => n.disconnect();
  }, [t]), e;
}, L = (t) => {
  const e = r.useRef(null);
  return r.useEffect(() => {
    const s = (n) => {
      e.current && !e.current.contains(n.target) && t();
    };
    return document.addEventListener("mousedown", s), () => document.removeEventListener("mousedown", s);
  }, [t]), e;
}, C = ({ when: t, children: e = null }) => t ? /* @__PURE__ */ r.createElement(r.Fragment, null, e) : null, z = ({ expression: t, children: e }) => {
  let s = null;
  return r.Children.forEach(e, (n) => {
    !s && r.isValidElement(n) && (n.props.value === t || n.props.default) && (s = n);
  }), s;
}, M = ({ value: t, default: e, children: s }) => /* @__PURE__ */ r.createElement(r.Fragment, null, s), R = ({ value: t, children: e }) => {
  const s = typeof e == "function";
  return /* @__PURE__ */ r.createElement(r.Fragment, null, "return ", /* @__PURE__ */ r.createElement(r.Fragment, null, s ? e(t) : e), ";");
};
var m = /* @__PURE__ */ ((t) => (t.DESKTOP = "Desktop", t.MOBILE = "Mobile", t))(m || {});
const E = (t) => {
  const e = t || 1024, [s, n] = r.useState(
    window.innerWidth >= e ? "Desktop" : "Mobile"
    /* MOBILE */
  );
  return r.useEffect(() => {
    const o = () => {
      window.innerWidth >= e ? n(
        "Desktop"
        /* DESKTOP */
      ) : n(
        "Mobile"
        /* MOBILE */
      );
    };
    return window.addEventListener("resize", o), () => window.removeEventListener("resize", o);
  }, []), s;
}, K = ({ baseWidth: t, children: e }) => E(t) === m.DESKTOP ? /* @__PURE__ */ r.createElement(r.Fragment, null, e) : null, N = async (t, e = []) => {
  r.useEffect(() => {
    (async () => {
      try {
        const n = await t();
        if (n) return n;
      } catch (n) {
        console.error(n);
      }
    })();
  }, e);
}, $ = () => {
  const [t, e] = r.useState({ width: 0, height: 0 });
  return [r.useCallback((n) => {
    if (n !== null) {
      const o = () => {
        e({
          width: n.offsetWidth,
          height: n.offsetHeight
        });
      };
      o();
      const u = new ResizeObserver(o);
      return u.observe(n), () => u.disconnect();
    }
  }, []), t];
}, J = (t) => {
  const [e, s] = r.useState([]);
  r.useEffect(() => {
    const n = ({ key: u }) => {
      e.includes(u) || s((a) => [...a, u]);
    }, o = ({ key: u }) => {
      s((a) => a.filter((c) => c !== u));
    };
    return document.addEventListener("keyup", o), document.addEventListener("keydown", n), () => {
      document.removeEventListener("keyup", o), document.removeEventListener("keydown", n);
    };
  }, [e]), r.useEffect(() => {
    t.forEach(({ keys: n, callback: o }) => {
      n.every((a) => e.includes(a)) && o();
    });
  }, [e, t]);
}, A = ({ delay: t, children: e }) => {
  const [s, n] = d(!1);
  return r.useEffect(() => {
    const o = setTimeout(() => n(!0), t);
    return () => clearTimeout(o);
  }), s ? /* @__PURE__ */ r.createElement(r.Fragment, null, e) : null;
}, g = ["mousemove", "keydown", "click", "scroll"], W = (t = 3e4) => {
  const [e, s] = r.useState(!1);
  return r.useEffect(() => {
    console.log("idle state: ", e);
  }, [e]), r.useEffect(() => {
    let n;
    const o = () => {
      s(!1), clearTimeout(n), n = setTimeout(() => s(!0), t);
    }, u = () => {
      o();
    };
    for (const a of g)
      window.addEventListener(a, u);
    return o(), () => {
      for (const a of g)
        window.removeEventListener(a, u);
      clearTimeout(n);
    };
  }, [t]), e;
}, B = r.memo(
  ({ deps: t, children: e }) => e,
  (t, e) => !t.deps || !e.deps || t.deps.length !== e.deps.length ? !1 : t.deps.every((s, n) => s === e.deps[n])
), j = (t, e) => {
  const s = () => {
    try {
      const c = localStorage.getItem(t);
      return c ? JSON.parse(c) : e;
    } catch (c) {
      return console.error(`Error parsing localStorage item "${t}":`, c), e;
    }
  }, [n, o] = r.useState(s);
  return [n, (c) => {
    try {
      o(c), localStorage.setItem(t, JSON.stringify(c));
    } catch (l) {
      console.error(`Error setting localStorage item "${t}":`, l);
    }
  }, () => {
    try {
      o(e), localStorage.removeItem(t);
    } catch (c) {
      console.error(`Error removing localStorage item "${t}":`, c);
    }
  }];
}, H = (t, e) => {
  const s = () => {
    try {
      const c = sessionStorage.getItem(t);
      return c ? JSON.parse(c) : e;
    } catch (c) {
      return console.error(`Error parsing sessionStorage item "${t}":`, c), e;
    }
  }, [n, o] = r.useState(s);
  return [n, (c) => {
    try {
      o(c), sessionStorage.setItem(t, JSON.stringify(c));
    } catch (l) {
      console.error(`Error setting sessionStorage item "${t}":`, l);
    }
  }, () => {
    try {
      o(e), sessionStorage.removeItem(t);
    } catch (c) {
      console.error(`Error removing sessionStorage item "${t}":`, c);
    }
  }];
}, P = (t, e) => {
  const [s, n] = d(void 0), [o, u] = d(!0), [a, c] = d(void 0), [l, v] = d(0), h = () => v((f) => f + 1);
  return w(() => {
    (async () => {
      u(!0), c(void 0);
      try {
        const i = await fetch(t, {
          method: (e == null ? void 0 : e.method) || "GET",
          headers: {
            "Content-Type": "application/json",
            ...e == null ? void 0 : e.headers
          },
          body: e != null && e.body ? JSON.stringify(e.body) : null
        });
        if (!i.ok)
          throw new Error(`Error: ${i.status}`);
        const S = await i.json();
        n(S);
      } catch (i) {
        c(i.message || "An error occurred");
      } finally {
        u(!1);
      }
    })();
  }, [t, l]), { data: s, error: a, loading: o, refetch: h };
}, U = ({ condition: t, renderIf: e, renderElse: s }) => t ? /* @__PURE__ */ r.createElement(r.Fragment, null, e) : /* @__PURE__ */ r.createElement(r.Fragment, null, s), k = ({ dev: t, hml: e, prod: s }) => {
  switch (process.env.NODE_ENV) {
    case "dev":
      return /* @__PURE__ */ r.createElement(r.Fragment, null, t);
    case "hml":
      return /* @__PURE__ */ r.createElement(r.Fragment, null, e);
    case "prod":
      return /* @__PURE__ */ r.createElement(r.Fragment, null, s);
    default:
      return null;
  }
}, G = ({ eachIn: t, mapTo: e }) => /* @__PURE__ */ r.createElement(r.Fragment, null, t.map(e)), _ = ({ baseWidth: t, children: e }) => E(t) === m.MOBILE ? /* @__PURE__ */ r.createElement(r.Fragment, null, e) : null;
export {
  M as Case,
  A as Delayed,
  K as Desktop,
  U as ElseIf,
  k as EnvSwitch,
  F as For,
  y as If,
  G as Map,
  B as Memoized,
  _ as Mobile,
  C as Show,
  z as Switch,
  R as With,
  N as useAsyncEffect,
  L as useClickOutside,
  O as useDebounce,
  E as useDevice,
  $ as useElementSize,
  P as useFetch,
  W as useIdleDetection,
  V as useInterval,
  T as useIsIntersectingScreen,
  J as useKeyCombo,
  j as useLocalStorage,
  b as useMounted,
  D as usePrevious,
  H as useSessionStorage,
  p as useToggle
};
