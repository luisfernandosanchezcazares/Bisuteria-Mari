import React from 'react'
import Grid from '@material-ui/core/Grid'

const Slider = () => {
    return(
        <Grid className="slider">
			<ul>
				<li>
                    <img src="./Imgs/slider1.jpg"/>
                </li>
				<li>
                    <img src="./Imgs/slider2.jpg"/>
                </li>
				<li>
                    <img src="./Imgs/slider1.jpg"/>
                </li>
				<li>
                    <img src="./Imgs/slider2.jpg"/>
                </li>
			</ul>
		</Grid>
    );
}

export default Slider