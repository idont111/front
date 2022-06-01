import React from 'react';
import {Container} from 'react-bootstrap';
import Results from './Results';
import Button from './Button';
import './Button.css'

const APIKEY = "310377679ee7b1fb980e80cdbb347ed1"

export default class Search extends React.Component {
	constructor() {
		super();
		this.inputSearch = React.createRef();
		this.state = {
			showSearch: true,
			enableBtn: false,
			showWhat: "",
			name: "",
			list: [],
		}
	}

	validateInput = () => {
		const value = this.inputSearch.current.value.trim();
		value ? this.setState({enableBtn: true}) : this.setState({enableBtn: false});
	}
	
	search = () => {
		const city = this.inputSearch.current.value.trim();
		const fetchData = async () => {
			
		await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&APPID=${APIKEY}`)
			.then(response => response.json())
			.then(json => {
				if(json.cod === "200") {
					const city = json.city;
					const dailyData = json.list.filter(reading => reading.dt_txt.includes("12:00:00"))
					this.setState( {
							showSearch: false,
							showWhat: "results",
							city: city.name,
							list: this.categorizeResults(dailyData)
						});
				}

				if(json.cod === "404") {
					this.setState({
						showSearch: false,
						showWhat: "notFound"
					});
				}
				return false;
			})
			.catch(error => {
				console.log('error', error);
			});
   }
   fetchData();}

	categorizeResults = (list) => {
		const dates = list
			.map((item, i) => {
				return item.dt_txt.split(" ")[0];
			});

		let sortedResults = [];
		for(let theDate of dates) {
			sortedResults.push({
				name: theDate,
				weathers: []
			});
		}

		for(let item of list) {
			let itemDate = item.dt_txt.split(" ")[0];

			for(let result of sortedResults) {
				if(result.name === itemDate) {
					result.weathers.push(item);
				}
			}
		}
		return sortedResults;
	}

	handleClear = () => {
		this.setState({
			showSearch: true,
			enableBtn: false,
			showWhat: ""
		});
	}

	render() {

		return (
			<Container className="d-flex justify-content-center align-items-center"
                    style={{height: window.innerHeight - 54}} >
				{
					(this.state.showSearch)	?
						<div className="d-flex flex-column" >
							<h1 className="display-1 jumbotron">Enter the city</h1>
							<input lassName="mt-3" type="text" 
								placeholder="New York"
								ref={this.inputSearch}
								onKeyUp={this.validateInput} />	
								
							<Button variant={"outline-light"}
								isDisabled={!this.state.enableBtn}
								clickHandler={this.search}
								btnCopy="Get Forecast" />
						</div>
						: ""
				}
				{
					(this.state.showWhat) ? 
						<Results 
							showWhat={this.state.showWhat}
							city={this.state.city}
							results={this.state.list}
							handleClear={this.handleClear} />
						: ""		
				}
			</Container>
		);
	}
}