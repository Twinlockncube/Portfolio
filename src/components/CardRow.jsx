import React from 'react';

function CardRow(props) {
    return (
        <div className='grid grid-cols-3 gap-4 pt-5'>
            {props.row}
        </div>
    );
}

export default CardRow;