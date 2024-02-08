import React from 'react';
import project1 from '../images/dark_room-min.jpg';
import project2 from '../images/coder-min.jpg';
import project3 from '../images/laravel-min.jpg';
import Card from './Card';
import CardRow from './CardRow';

function Projects(props) {
   
   const source = [
        {
            description: 'This is a School Management System which includes registration, attendance register, assessment and many other features. Laravel and JQuery were used',
            image:`${project1}`,
            title:'School Management System',
            url:'https://github.com/Twinlockncube/Tress'
        },
        {
            description: 'A portfolio created in Laravel and React JS. It shows some of my projects',
            image:`${project2}`,
            title:'My Portfolio',
            url: 'https://github.com/Twinlockncube/MyPortfolio'
        },
        {
            description: 'A simple website for capturing individuals\' temparatures after they have been granted access to the premises during Covid. Created using PHP Laravel',
            image:`${project3}`,
            title:'Temp Web',
            url: 'https://github.com/Twinlockncube/TempWeb'
        },

        
   ]
   const [cards,setCards] = React.useState(source)
   const cards_list = []
   const card_row = []

   cards.forEach(project => {
    cards_list.push(
        <Card
            image = {project.image}
            description = {project.description}
            title = {project.title}
            url = {project.url}
            key = {project.title}
        />
    )
   });
   
   /*Grouping project cards into max 3 per row*/
   const grouper = (result, value, index, array) => {
        if(index%3==0){
            result.push(array.slice(index,index+3))
        }
        return result
   }

   const card_rows = cards_list.reduce(grouper,[])
   card_rows.map(row =>{
        <CardRow row={row}/>
   })
     

   /*React.useEffect(() => {
    fetch('https://api.quotable.io/random')//Example Api Consumption
       .then((response) => {response.json() })
       .then((data) => {
          setCards(source);
       })
       .catch((err) => {
          console.log(err.message);
       });
 }, []);*/




    return (
    <div className='wrapper flex flex-col  border-slate-700  rounded mt-3 pb-3 pl-1 pr-1'>
        <div className='intro pt-3 flex justify-center'>
            <span className='text-xl'>Playing with code</span>
        </div>
        <div className='flex flex-col lg:flex-row sm:flex-col gap-4 pt-5 mx-auto'>
            {card_rows}
        </div>
    </div>
    );
}

export default Projects;