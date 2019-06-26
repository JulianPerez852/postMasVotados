import React from 'react';
import data from './data/data';
import Card from './components/PostCard/index';
import './styleApp.css';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      data: data,
      sorted: 'descending',
    }
    this.agregarVoto=this.agregarVoto.bind(this);
    this.deleteVoto=this.deleteVoto.bind(this);
    this.sortData=this.sortData.bind(this);
    this.handlerClick=this.handlerClick.bind(this);
  }

  agregarVoto(id){
    const { data }=this.state;
    const resultado=data.find(objeto=> objeto.id === id);
    resultado.votes= resultado.votes + 1
    this.setState({
      data,
    })
  }

  deleteVoto(id){
    const { data }=this.state;
    const resultado=data.find(objeto=> objeto.id === id);
    resultado.votes= resultado.votes - 1
    this.setState({
      data,
    })
  }

  sortData(data, sorted){
    return sorted === 'ascending'  
                     ? this.sortAscending(data) 
                     : this.sortDescending(data);
  }

  sortAscending(data){
    return data.sort((postOne,postTwo)=> postOne.votes - postTwo.votes);
  }

  sortDescending(data){
    return data.sort((postOne,postTwo)=> postTwo.votes - postOne.votes);
  }

  handlerClick(e){
    const sorted  = e.target.id
    this.setState({
      sorted,
    })
  }



  render(){
    const { sorted, data } =this.state;
    const sortedData = this.sortData(data, sorted);

    return (
      <div className='contenedor'>
        <div className='titulo'>
          <h1 >Blog post populares</h1>
        </div>
        <hr></hr>
        <button id='ascending' onClick={(e)=>this.handlerClick(e)} disabled={sorted==='ascending'}>Ascendente</button>
        <button id='descending' onClick={(e)=>this.handlerClick(e)} disabled={sorted==='descending'}>Descendente</button>
        <div>
          {sortedData.map((post)=>
            <div className='elementos'>
              <Card key={post.id}
                title={post.title} 
                image={post.post_image_url} 
                avatar={post.writer_avatar_url} 
                votes={post.votes}
                url={post.url}
                description={post.description}   
                deleteVoto={()=>this.deleteVoto(post.id)}
                agregarVoto={()=>this.agregarVoto(post.id)}
              ></Card>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default App;
