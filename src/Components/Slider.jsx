import React from 'react'
import Grid from '@material-ui/core/Grid'

const Slider = () => {
    return(
        <Grid className="slider">
			<ul>
				<li><img src="./Imgs/slider1.png" alt="imgs1"/></li>
				<li><img src="./Imgs/slider2.png" alt="imgs2"/></li>
				<li><img src="./Imgs/slider3.png" alt="imgs3"/></li>
				<li><img src="./Imgs/slider4.png" alt="imgs4"/></li>
			</ul>
		</Grid>
    );
}

export default Slider