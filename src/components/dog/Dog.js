import React from 'react';

function Dog(props) {
	console.log(props.state);
	return (
		<div className='dogCard'>
			<h1>Enjoy Your Random Picture Of A Dog</h1>
			<img src={props.state.url} alt={'dog'} />
		</div>
	);
}

export default Dog;
