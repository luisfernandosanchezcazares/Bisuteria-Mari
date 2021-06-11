import React from 'react'
import Grid from '@material-ui/core/Grid'

const Slider = () => {
    return(
        <Grid className="slider">
			<ul>
				<li>
                    <img src="./Imgs/slider1.png"/>
                </li>
				<li>
                    <img src="./Imgs/slider2.png"/>
                </li>
				<li>
                    <img src="./Imgs/slider3.png"/>
                </li>
				<li>
                    <img src="./Imgs/slider4.png"/>
                </li>
			</ul>
		</Grid>
    );
}

export default Slider