import React from 'react';
import './people.css'
import RaisedButton from 'material-ui/RaisedButton';




export default class People extends React.Component {

    


  render() {
      
    return (
          <div >
              <div className="castinfocontainer">
                <img className="movieposterimage" src={'https://image.tmdb.org/t/p/w300/' + this.props.castmovieinfoprop.profile_path} alt={this.props.castmovieinfoprop.name}/> 
                  <h2>{this.props.castmovieinfoprop.name}</h2>
                  <RaisedButton label="Add to Fav" primary={true} />
              </div>
              <div className="movielistcontainer">
                {this.props.castmovieprop.map((post, index) =>
                <div className="image" key={index}>
                    <img className="movieposterimage" src={'https://image.tmdb.org/t/p/w300/' + post.poster_path}  alt={post.title} onClick={() => {this.props.setidprop(post.id)}} />     
                </div>
                )}
            </div>
          </div>
    );
  }
}