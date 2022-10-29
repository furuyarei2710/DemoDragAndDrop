function InsertItem({ props }) {
	const handleClick = (e) => {
		if(props.onClick) props.onClick(e);
	} 
  return <button onClick={handleClick}>{props.text}</button>;
}
export default InsertItem;
