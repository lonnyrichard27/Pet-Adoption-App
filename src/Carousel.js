import { Component } from 'react'

class Carousel extends Component {
    constructor () {
        super();
        this.state = { active: 0 }
    }

    // default props will come to mplay when theres no image passed or returned from the api
    static defaultProps = {
        images: ['http://pets-images.dev-apis.com/pets/none.jpg']
    }

    handleIndexClick = (event) => {
        this.setState({
            // the plus sign is making sure its a number not a strign
            active: +event.target.dataset.index
        })
    }

    render () {
        const { active } = this.state
        const { images } = this.props

        return (
            <div className="carousel">
                <img src={images[active]} alt="animal" />
                <div className="carousel-smaller">
                    {images.map((photo,index) => {
                       return  <img
                            key={photo}
                            src={photo}
                            data-index={index}
                            onClick = {this.handleIndexClick}
                            className={index === active ? "active" : ""}
                            alt="animal thumbnail"
                        />
                    })}
                </div>
            </div>
        )
    }
}
export default Carousel;