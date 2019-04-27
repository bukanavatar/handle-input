import React , {Component} from 'react';
import { unsplash } from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends Component{

    state = { images:[] }

    onFormSubmit = async term => {
       const { data } = await unsplash.get('/search/photos',{
           params:{
            query:term
           }
       });

       this.setState({ images:data.results })
    }

    render(){
        return(
            <div className="ui container">
                <SearchBar onSubmit={ this.onFormSubmit } />
                <ImageList images={ this.state.images }/>
            </div>
        )
    }
}

export default App