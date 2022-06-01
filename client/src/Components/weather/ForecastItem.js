import React from 'react';
import Card from 'react-bootstrap/Card';

export default class ForecastItem extends React.Component {
	render() {
		return (
			<Card className='d-flex flex-column justify-content-center align-items-center' 
					style={{width:'16rem', padding: '5rem 0', mt: '1rem', mb: '1rem'}}>
				<p>
					<img className="d-block mx-auto" src={`http://openweathermap.org/img/w/${this.props.icon}.png`} alt={this.props.main}/>
				</p>
				<h1>{this.props.temp} °C</h1>
				<Card.Body>
					<button className="btn btn-dark btn-outline-light w-80">{this.props.description}</button>
				</Card.Body>
			</Card>
		);
	}
}	