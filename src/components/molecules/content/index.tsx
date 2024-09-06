import { useAppSelector } from "@/hooks/redux";
import styles from "./styles.module.scss";
const WeatherContent = () => {
	const { currentWeather, daily, until } = useAppSelector(
		(state) => state.weatherSlice
	);

	return (
		currentWeather.data &&
		daily.data && (
			<>
				<section className={styles.content}>
					<div className={styles.content__main}>
						<div className={styles.content__main__titles}>
							<p>{currentWeather.data?.name}</p>
							<p>
								{currentWeather.data?.main.temp}{" "}
								{until === "metric" ? "°C" : "°F"}
							</p>
						</div>

						<div className={styles.content__main__icon}>
							<img
								src={`${import.meta.env.VITE_ICON_KEY}${currentWeather.data?.weather[0].icon}.png`}
								alt=""
							/>
						</div>
						<div className={styles.content__main__info}>
							{currentWeather.data?.weather[0].main}
						</div>
					</div>
					<div className={styles.forecast}>
						{daily.data?.list?.slice(0, 8).map((item, index) => (
							<div key={item.dt} className={styles.forecast__item}>
								<div className={styles.forecast__item__sub}>
									<span>{item?.dt_txt.split(" ")[1]}</span>
									<span>
										{" "}
										{item.main.temp} {until === "metric" ? "°C" : "°F"}
									</span>
								</div>
								<div className={styles.forecast__item__main}>
									<img
										src={`${import.meta.env.VITE_ICON_KEY}${item?.weather[0].icon}.png`}
										alt=""
									/>
								</div>
							</div>
						))}
					</div>
				</section>
				<section className={styles.bottom_section}>
					{daily.data?.list
						?.filter((item) => item.dt_txt.includes("00:00:00"))
						.map((item) => {
							return (
								<div key={item.dt} className={styles.bottom_section__item}>
									<div className={styles.bottom_section__item__info}>
										<span>
											{item?.dt_txt.split(" ")[0].slice(5).replace("-", "-")}
										</span>
									</div>
									<div className={styles.bottom_section__item__sub}>
										<span>
											{" "}
											{item.main.temp} {until === "metric" ? "°C" : "°F"}
										</span>
										<img
											src={`${import.meta.env.VITE_ICON_KEY}${item?.weather[0].icon}.png`}
											alt=""
										/>
									</div>
								</div>
							);
						})}
				</section>
			</>
		)
	);
};

export default WeatherContent;
