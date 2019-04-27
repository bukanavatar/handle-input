import React , { Component, createRef } from 'react';

class ImageCard extends Component{
    constructor(props){
        super(props);
        
        this.state={
            span:0
        }

        this.imageRef = createRef()
    }

    componentDidMount() {
       this.imageRef.current.addEventListener('load',this.setSpan) 
    }

    setSpan = () => {
        const height = this.imageRef.current.clientHeight;

        const span = Math.ceil(height / 20);
        this.setState({span})
    }

    render() {
        return (
            <div style={{gridRowEnd:`span ${this.state.span}`}}>
                <img ref={this.imageRef} src={this.props.image.urls.regular} alt={this.props.image.description}/>
            </div>
        );
    }
}

export default ImageCard