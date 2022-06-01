export default function Button (props) {
	return (
		(props.isDisabled) ? 
			<button className="disabled" disabled>
				<span>{props.btnCopy}</span>
			</button> 
			: 
			<button onClick={props.clickHandler}>
				<span>{props.btnCopy}</span>
			</button>
		);
	}
	