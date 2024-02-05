import React from 'react';

function AboutMe(props) {
    return (
            <div className='md:w-6/12 pt-5 mx-auto'>
                    <div className='flex flex-row  pt-10 bg-sky-800'>
                        <div className='px-4 pb-3 text-xl  bg-sky-100'>
                        <h2 className='font-bold'>About Me</h2>
                        My name is Twinlock Ncube and I am a programmer with years of professional experience in PHP and JavaScript. I have also programmed in Java and have a deep understanding of programming concepts and software development principles.I am also skilled in designing databases.I have worked as a systems analyst/developer at &nbsp; 
                        <a href="https://www.madefortrade.co/?gad_source=1&gclid=CjwKCAiAiP2tBhBXEiwACslfnv6TdfI3VjIrPckoAO_K-J3r9W9Y1NEqHvpWw5QYQEsdWfc3cKY69hoC604QAvD_BwE" target="_blank" className='underline text-blue-600 hover:text-blue-800 visited:text-purple-600'>Kango Products</a> and am currently working as a software developer at &nbsp;
                        <a href="https://tregerproducts.com/home/" target="_blank" className='underline text-blue-600 hover:text-blue-800 visited:text-purple-600'>Made for Trade</a>.

                        My passion for programming has kept me ever ready to learn. I am a holder of a Bsc Hons Degree in computer science. I have worked on a variety of projects, from small websites to large-scale applications. I am always looking to expand my skill set and stay up-to-date with the latest technologies and trends in the industry.
                        </div>
                    </div>
                </div>
    );
}

export default AboutMe;