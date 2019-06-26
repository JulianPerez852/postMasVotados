import React from 'react';
import BotonVotos from '../BotonVotos/index';
import './style.css';

class Card extends React.Component{
    constructor(){
        super();
        
        this.handlerClick=this.handlerClick.bind(this);
    }

    handlerClick(){
        const{url}=this.props;
        window.open(url, '_blank');
    }

    render(){
        const {
                title,
                image,
                description,
                avatar,
                votes,
                deleteVoto,
                agregarVoto,
            }=this.props;
        return(
            <div className='tarjeta' >
                <div className='principal'>
                    <div  className='imagen'>
                        <img src={image} alt='new'  height= "150"></img>
                    </div>
                    <div>
                        <div>
                            <div className='terceario'>
                                <h1 onClick={()=>this.handlerClick()} >{title}</h1>
                                <p >{description}</p>
                            </div>
                        </div>
                        <div className='secundario'>
                            <div className='cuarto'>
                                <BotonVotos votes={votes} deleteVoto={deleteVoto} agregarVoto={agregarVoto}></BotonVotos>
                            </div>
                            <div className='quinto'>
                                <p>escrito por:</p>
                                <img src={avatar} alt='new' width="50"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;