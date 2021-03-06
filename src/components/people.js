import React from 'react';
import './people.css'
import Noposter from '../assets/noimage.png'



export default class People extends React.Component {

    


  render() {
      
    return (
          <div >
              <div className="castnamecontainer">
                  <h2 className="castlstitle" ><b>{this.props.castname}</b></h2>
              </div>
              <div className="castmovielistcontainer">
                {this.props.castmovieprop.map((post, index) =>
                <div className="image" key={index}>
                    {post.poster_path ? 
                      <img className="movieposterimage" src={'https://image.tmdb.org/t/p/w300/' + post.poster_path} alt={post.title} onClick={() => {this.props.setidprop(post.id)}} />
                     : <img className="movieposterimage" src ={Noposter} alt={post.title} onClick={() => {this.props.setidprop(post.id)}} />
                    }   
                    <h2 className="movielstitle" onClick={() => {this.props.setidprop(post.id)}}>{post.title}</h2>   
                </div>
                )}
            </div>
          </div>
    );
  }
}
