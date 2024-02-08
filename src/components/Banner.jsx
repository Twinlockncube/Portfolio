import { camelCase } from 'lodash';
import React from 'react';
import banner from '../images/hacker-min.jpg';

function Banner(props) {
    const the_style ={ 
        height:'50vh',
        backgroundImage:`url(${banner})`,   
    };
    
    return (
        <div style={the_style} className='px-4 bg-cover bg-center py-0 flex flex-col flex-wrap space-y-12 items-center justify-center text-gray-300'>
            <div className='py-4 px-4 w-1/2 lg:w-1/4 mx-auto bg-black bg-opacity-50 rounded-md'>
                Hello World! Let's turn your digital dreams into reality with JavaScript, PHP(including laravel) CSS and  HTML
                </div>
        </div>
    );
}

export default Banner;