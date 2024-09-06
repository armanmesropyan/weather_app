import { jsx as _jsx } from "react/jsx-runtime";
import { createRoot } from "react-dom/client";
import App from "@/App";
import StoreProvider from "@/layout/storeLayout";
import "@/styles/index.global.scss";
createRoot(document.getElementById("root")).render(_jsx(StoreProvider, { children: _jsx(App, {}) }));
