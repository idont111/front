import React from 'react';
import ForecastItem from './ForecastItem';
import Card from 'react-bootstrap/Card';

export default function DatesContainer (props) {
		const {city, results} = props;

		const MONTHS = {
			"01": "January",
			"02": "February",
			"03": "March",
			"04": "April",
			"05": "May",
			"06": "June", 
			"07": "July",
			"08": "August",
			"09": "September",
			"10": "August",
			"11": "November",
			"12": "December"
		}
		return (
			<div className="row justify-content-center">
				<h2 className="display-5 text-muted">{city}</h2>
				{
					results.map((result) => {
						return (
							<div className="col-auto">
								<Card.Title className="display-6 text-muted">{`${result.name.split('-')[2]} ${MONTHS[result.name.split('-')[1]]}`}</Card.Title>
								    {result.weathers.map((item, i) => 
											<ForecastItem key={i}
												icon={item.weather[0].icon}
												main={item.weather[0].main}
												description={item.weather[0].description}
												temp={Math.round(item.main.temp)} />)
									}
							</div>
						)
					})
				}
			</div>
		);
	}