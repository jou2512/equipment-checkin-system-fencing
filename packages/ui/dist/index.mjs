import { c as s, a as c, b as i, S as f, C as m, d as u } from "./skeleton-Cd0Pyf74.mjs";
import { B as te, I as se, e as oe } from "./skeleton-Cd0Pyf74.mjs";
import { jsx as t, jsxs as d } from "react/jsx-runtime";
import * as o from "react";
const g = c(
  "relative w-full rounded-lg border px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        destructive: "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
), b = o.forwardRef(({ className: a, variant: e, ...r }, n) => /* @__PURE__ */ t(
  "div",
  {
    ref: n,
    role: "alert",
    className: s(g({ variant: e }), a),
    ...r
  }
));
b.displayName = "Alert";
const x = o.forwardRef(({ className: a, ...e }, r) => /* @__PURE__ */ t(
  "h5",
  {
    ref: r,
    className: s("mb-1 font-medium leading-none tracking-tight", a),
    ...e
  }
));
x.displayName = "AlertTitle";
const N = o.forwardRef(({ className: a, ...e }, r) => /* @__PURE__ */ t(
  "div",
  {
    ref: r,
    className: s("text-sm [&_p]:leading-relaxed", a),
    ...e
  }
));
N.displayName = "AlertDescription";
const y = c(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
        outline: "text-foreground",
        pending: "border-transparent bg-gray-300 text-gray-800 hover:bg-gray-400",
        in_review: "border-transparent bg-yellow-300 text-yellow-800 hover:bg-yellow-400",
        approved: "border-transparent bg-green-300 text-green-800 hover:bg-green-400",
        partially_approved: "border-transparent bg-blue-300 text-blue-800 hover:bg-blue-400",
        rejected: "border-transparent bg-red-300 text-red-800 hover:bg-red-400",
        success: "border-transparent bg-success text-success-foreground shadow hover:bg-success/80"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function $({ className: a, variant: e, ...r }) {
  return /* @__PURE__ */ t("div", { className: s(y({ variant: e }), a), ...r });
}
const v = o.forwardRef(({ className: a, ...e }, r) => /* @__PURE__ */ t(
  "div",
  {
    ref: r,
    className: s(
      "rounded-xl border bg-card text-card-foreground shadow",
      a
    ),
    ...e
  }
));
v.displayName = "Card";
const h = o.forwardRef(({ className: a, ...e }, r) => /* @__PURE__ */ t(
  "div",
  {
    ref: r,
    className: s("flex flex-col space-y-1.5 p-6", a),
    ...e
  }
));
h.displayName = "CardHeader";
const w = o.forwardRef(({ className: a, ...e }, r) => /* @__PURE__ */ t(
  "div",
  {
    ref: r,
    className: s("font-semibold leading-none tracking-tight", a),
    ...e
  }
));
w.displayName = "CardTitle";
const C = o.forwardRef(({ className: a, ...e }, r) => /* @__PURE__ */ t(
  "div",
  {
    ref: r,
    className: s("text-sm text-muted-foreground", a),
    ...e
  }
));
C.displayName = "CardDescription";
const R = o.forwardRef(({ className: a, ...e }, r) => /* @__PURE__ */ t("div", { ref: r, className: s("p-6 pt-0", a), ...e }));
R.displayName = "CardContent";
const T = o.forwardRef(({ className: a, ...e }, r) => /* @__PURE__ */ t(
  "div",
  {
    ref: r,
    className: s("flex items-center p-6 pt-0", a),
    ...e
  }
));
T.displayName = "CardFooter";
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const k = i("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const p = i("Ellipsis", [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "19", cy: "12", r: "1", key: "1wjl8i" }],
  ["circle", { cx: "5", cy: "12", r: "1", key: "1pcz8c" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const B = i("LoaderCircle", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
]), P = o.forwardRef(({ ...a }, e) => /* @__PURE__ */ t("nav", { ref: e, "aria-label": "breadcrumb", ...a }));
P.displayName = "Breadcrumb";
const L = o.forwardRef(({ className: a, ...e }, r) => /* @__PURE__ */ t(
  "ol",
  {
    ref: r,
    className: s(
      "flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5",
      a
    ),
    ...e
  }
));
L.displayName = "BreadcrumbList";
const j = o.forwardRef(({ className: a, ...e }, r) => /* @__PURE__ */ t(
  "li",
  {
    ref: r,
    className: s("inline-flex items-center gap-1.5", a),
    ...e
  }
));
j.displayName = "BreadcrumbItem";
const I = o.forwardRef(({ asChild: a, className: e, ...r }, n) => /* @__PURE__ */ t(
  a ? f : "a",
  {
    ref: n,
    className: s("transition-colors hover:text-foreground", e),
    ...r
  }
));
I.displayName = "BreadcrumbLink";
const E = o.forwardRef(({ className: a, ...e }, r) => /* @__PURE__ */ t(
  "span",
  {
    ref: r,
    role: "link",
    "aria-disabled": "true",
    "aria-current": "page",
    className: s("font-normal text-foreground", a),
    ...e
  }
));
E.displayName = "BreadcrumbPage";
const H = ({
  children: a,
  className: e,
  ...r
}) => /* @__PURE__ */ t(
  "span",
  {
    role: "presentation",
    "aria-hidden": "true",
    className: s("[&>svg]:w-3.5 [&>svg]:h-3.5", e),
    ...r,
    children: a ?? /* @__PURE__ */ t(m, {})
  }
);
H.displayName = "BreadcrumbSeparator";
const S = ({
  className: a,
  ...e
}) => /* @__PURE__ */ d(
  "span",
  {
    role: "presentation",
    "aria-hidden": "true",
    className: s("flex h-9 w-9 items-center justify-center", a),
    ...e,
    children: [
      /* @__PURE__ */ t(p, { className: "h-4 w-4" }),
      /* @__PURE__ */ t("span", { className: "sr-only", children: "More" })
    ]
  }
);
S.displayName = "BreadcrumbElipssis";
function ee({
  className: a,
  size: e = "md",
  label: r
}) {
  const n = {
    sm: "h-4 w-4",
    md: "h-5 w-5",
    lg: "h-6 w-6"
  };
  return /* @__PURE__ */ d("div", { className: s("flex items-center justify-center gap-2", a), children: [
    /* @__PURE__ */ t(
      B,
      {
        className: s("animate-spin text-muted-foreground", n[e])
      }
    ),
    r && /* @__PURE__ */ t("span", { className: "text-sm text-muted-foreground", children: r })
  ] });
}
const z = ({ className: a, ...e }) => /* @__PURE__ */ t(
  "nav",
  {
    role: "navigation",
    "aria-label": "pagination",
    className: s("mx-auto flex w-full justify-center", a),
    ...e
  }
);
z.displayName = "Pagination";
const A = o.forwardRef(({ className: a, ...e }, r) => /* @__PURE__ */ t(
  "ul",
  {
    ref: r,
    className: s("flex flex-row items-center gap-1", a),
    ...e
  }
));
A.displayName = "PaginationContent";
const V = o.forwardRef(({ className: a, ...e }, r) => /* @__PURE__ */ t("li", { ref: r, className: s("", a), ...e }));
V.displayName = "PaginationItem";
const l = ({
  className: a,
  isActive: e,
  size: r = "icon",
  ...n
}) => /* @__PURE__ */ t(
  "a",
  {
    "aria-current": e ? "page" : void 0,
    className: s(
      u({
        variant: e ? "outline" : "ghost",
        size: r
      }),
      a
    ),
    ...n
  }
);
l.displayName = "PaginationLink";
const _ = ({
  className: a,
  ...e
}) => /* @__PURE__ */ d(
  l,
  {
    "aria-label": "Go to previous page",
    size: "default",
    className: s("gap-1 pl-2.5", a),
    ...e,
    children: [
      /* @__PURE__ */ t(k, { className: "h-4 w-4" }),
      /* @__PURE__ */ t("span", { children: "Previous" })
    ]
  }
);
_.displayName = "PaginationPrevious";
const D = ({
  className: a,
  ...e
}) => /* @__PURE__ */ d(
  l,
  {
    "aria-label": "Go to next page",
    size: "default",
    className: s("gap-1 pr-2.5", a),
    ...e,
    children: [
      /* @__PURE__ */ t("span", { children: "Next" }),
      /* @__PURE__ */ t(m, { className: "h-4 w-4" })
    ]
  }
);
D.displayName = "PaginationNext";
const F = ({
  className: a,
  ...e
}) => /* @__PURE__ */ d(
  "span",
  {
    "aria-hidden": !0,
    className: s("flex h-9 w-9 items-center justify-center", a),
    ...e,
    children: [
      /* @__PURE__ */ t(p, { className: "h-4 w-4" }),
      /* @__PURE__ */ t("span", { className: "sr-only", children: "More pages" })
    ]
  }
);
F.displayName = "PaginationEllipsis";
const M = o.forwardRef(({ className: a, ...e }, r) => /* @__PURE__ */ t("div", { className: "relative w-full overflow-auto", children: /* @__PURE__ */ t(
  "table",
  {
    ref: r,
    className: s("w-full caption-bottom text-sm", a),
    ...e
  }
) }));
M.displayName = "Table";
const G = o.forwardRef(({ className: a, ...e }, r) => /* @__PURE__ */ t("thead", { ref: r, className: s("[&_tr]:border-b", a), ...e }));
G.displayName = "TableHeader";
const q = o.forwardRef(({ className: a, ...e }, r) => /* @__PURE__ */ t(
  "tbody",
  {
    ref: r,
    className: s("[&_tr:last-child]:border-0", a),
    ...e
  }
));
q.displayName = "TableBody";
const J = o.forwardRef(({ className: a, ...e }, r) => /* @__PURE__ */ t(
  "tfoot",
  {
    ref: r,
    className: s(
      "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",
      a
    ),
    ...e
  }
));
J.displayName = "TableFooter";
const K = o.forwardRef(({ className: a, ...e }, r) => /* @__PURE__ */ t(
  "tr",
  {
    ref: r,
    className: s(
      "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
      a
    ),
    ...e
  }
));
K.displayName = "TableRow";
const O = o.forwardRef(({ className: a, ...e }, r) => /* @__PURE__ */ t(
  "th",
  {
    ref: r,
    className: s(
      "h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
      a
    ),
    ...e
  }
));
O.displayName = "TableHead";
const Q = o.forwardRef(({ className: a, ...e }, r) => /* @__PURE__ */ t(
  "td",
  {
    ref: r,
    className: s(
      "p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
      a
    ),
    ...e
  }
));
Q.displayName = "TableCell";
const U = o.forwardRef(({ className: a, ...e }, r) => /* @__PURE__ */ t(
  "caption",
  {
    ref: r,
    className: s("mt-4 text-sm text-muted-foreground", a),
    ...e
  }
));
U.displayName = "TableCaption";
const W = o.forwardRef(({ className: a, ...e }, r) => /* @__PURE__ */ t(
  "textarea",
  {
    className: s(
      "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
      a
    ),
    ref: r,
    ...e
  }
));
W.displayName = "Textarea";
export {
  b as Alert,
  N as AlertDescription,
  x as AlertTitle,
  $ as Badge,
  P as Breadcrumb,
  S as BreadcrumbEllipsis,
  j as BreadcrumbItem,
  I as BreadcrumbLink,
  L as BreadcrumbList,
  E as BreadcrumbPage,
  H as BreadcrumbSeparator,
  te as Button,
  v as Card,
  R as CardContent,
  C as CardDescription,
  T as CardFooter,
  h as CardHeader,
  w as CardTitle,
  se as Input,
  ee as LoadingState,
  z as Pagination,
  A as PaginationContent,
  F as PaginationEllipsis,
  V as PaginationItem,
  l as PaginationLink,
  D as PaginationNext,
  _ as PaginationPrevious,
  oe as Skeleton,
  M as Table,
  q as TableBody,
  U as TableCaption,
  Q as TableCell,
  J as TableFooter,
  O as TableHead,
  G as TableHeader,
  K as TableRow,
  W as Textarea,
  y as badgeVariants,
  u as buttonVariants,
  s as cn
};
