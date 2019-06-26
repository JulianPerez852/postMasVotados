import React from 'react';
import './style.css';

function BotonVotos({votes,agregarVoto, deleteVoto}) {

    return(
        <div >
            <button onClick={()=>agregarVoto()} className='botonUp' ></button>
            <br></br>
            <span>{votes}</span>
            <br></br>
            <button onClick={()=>deleteVoto()} className='botonDown'></button>
        </div>
    );
}

export default BotonVotos;