import { createRoot } from "react-dom/client";
import App from "@/App";
import StoreProvider from "@/layout/storeLayout";
import "@/styles/index.global.scss";

createRoot(document.getElementById("root")!).render(
	<StoreProvider>
		<App />
	</StoreProvider>
);
