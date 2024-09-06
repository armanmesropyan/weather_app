import styles from "./App.module.scss";
import { HeaderComponent, WeatherContentComponent } from "@/components";
function App() {
	return (
		<section className={styles.container}>
			<HeaderComponent />
			<WeatherContentComponent />
		</section>
	);
}

export default App;
