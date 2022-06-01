import React from 'react';
import Button from './Button';
import DatesContainer from './DatesContainer';
import Card from 'react-bootstrap/Card';

export default class Results extends React.Component {
	showResult = () => {
		const {showWhat, city, results} = this.props;

		switch(showWhat) {
			case "notFound":
				return <h2>Whoa! Looks like there was an error</h2> ;
			case "results":
				return <DatesContainer city={city} results={results}/>;
			default:
				break;
		}
	}
	render() {
		return (
			<div className="results text-center">
				<h1 className="display-1 jumbotron">5-Day Forecast</h1>
				{this.showResult()}
				<Card>
					<Button clickHandler={this.props.handleClear} btnCopy="Get different forecast"/>
				</Card>
			</div>
		);
	}
}