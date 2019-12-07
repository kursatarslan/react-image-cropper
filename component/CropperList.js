import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './demo.less'
import Cropper from '../component/Cropper'
import  DemoImg from '../dist/image/demo.jpg'

class CropperList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      imgSrc: DemoImg,
      image: '',
      imageLoaded: false,
      image4: '',
      image4Loaded: false,
      image4BeforeLoaded: false,
      image4Values: ''
    }
  }

  handleImageLoaded (state) {
    this.setState({
      [state + 'Loaded']: true
    })
  }

  handleBeforeImageLoad (state) {
    this.setState({
      [state + 'BeforeLoaded']: true
    })
  }

  handleClick (state) {
    let node = this[state]
    this.setState({
      [state]: node.crop()
    })
  }

  handleSaveClick (state) {
    let node = this[state]
    this.setState({
      [state]: node.save()
    })
  }

  

  handleChange (state, values) {
    this.setState({
      [state + 'Values']: values
    })
  }

  handleGetValues (state) {
    let node = this[state]
    this.setState({
      [state + 'Values']: node.values()
    })
  }

  render () {

    return (

          <div>
            <ul>
              <li>
                <Cropper
                  src={this.state.imgSrc}
                  width={200}
                  height={500}
                  originX={200}
                  originY={50}
                  fixedRatio={false}
                  allowNewSelection={false}
                  onChange={values => this.handleChange('image4', values)}
                  styles={{
                    source_img: {
                      WebkitFilter: 'blur(3.5px)',
                      filter: 'blur(3.5px)'
                    },
                    modal: {
                      opacity: 0.5,
                      backgroundColor: '#fff'
                    },
                    dotInner: {
                      borderColor: '#ff0000'
                    },
                    dotInnerCenterVertical: {
                      backgroundColor: '#ff0000'
                    },
                    dotInnerCenterHorizontal: {
                      backgroundColor: '#ff0000'
                    }
                  }}
                  ref={ref => { this.image4 = ref }}
                  onImgLoad={() => this.handleImageLoaded('image4')}
                  beforeImgLoad={() => this.handleBeforeImageLoad('image4')}
                />
                <br/>
                {
                  this.state.image4BeforeLoaded
                    ? <button
                      onClick={() => this.handleGetValues('image4')}
                    >
                    values
                    </button>
                    : null
                }
                <h4>values</h4>
                {
                  this.state.image4Values
                    ? <pre
                      style={{
                        padding: '10px',
                        backgroundColor: '#eee',
                        overflow: 'scroll'
                      }}
                    >
                      {JSON.stringify(this.state.image4Values)}
                    </pre>
                    : null
                }
                {
                  this.state.image4Loaded
                    ? <button
                      onClick={() => this.handleClick('image4')}
                    >
                    crop
                    </button>
                    : null
                }
                <h4>after crop</h4>
                {
                  this.state.image4
                    ? <div>
                        <img
                        className="after-img"
                        src={this.state.image4}
                        alt=""
                      />
                      
                        <button onClick={ this.handleSaveClick('image4') }>Save</button>
                      </div>
                    : null
                }
              </li>
            </ul>
            <ul>
              <li>
                <Cropper
                  src={this.state.imgSrc}
                  width={200}
                  height={500}
                  originX={200}
                  originY={50}
                  fixedRatio={false}
                  allowNewSelection={false}
                  onChange={values => this.handleChange('image4', values)}
                  styles={{
                    source_img: {
                      WebkitFilter: 'blur(3.5px)',
                      filter: 'blur(3.5px)'
                    },
                    modal: {
                      opacity: 0.5,
                      backgroundColor: '#fff'
                    },
                    dotInner: {
                      borderColor: '#ff0000'
                    },
                    dotInnerCenterVertical: {
                      backgroundColor: '#ff0000'
                    },
                    dotInnerCenterHorizontal: {
                      backgroundColor: '#ff0000'
                    }
                  }}
                  ref={ref => { this.image4 = ref }}
                  onImgLoad={() => this.handleImageLoaded('image4')}
                  beforeImgLoad={() => this.handleBeforeImageLoad('image4')}
                />
                <br/>
                {
                  this.state.image4BeforeLoaded
                    ? <button
                      onClick={() => this.handleGetValues('image4')}
                    >
                    values
                    </button>
                    : null
                }
                <h4>values</h4>
                {
                  this.state.image4Values
                    ? <pre
                      style={{
                        padding: '10px',
                        backgroundColor: '#eee',
                        overflow: 'scroll'
                      }}
                    >
                      {JSON.stringify(this.state.image4Values)}
                    </pre>
                    : null
                }
                {
                  this.state.image4Loaded
                    ? <button
                      onClick={() => this.handleClick('image4')}
                    >
                    crop
                    </button>
                    : null
                }
                <h4>after crop</h4>
                {
                  this.state.image4
                    ? <div>
                      <img
                      className="after-img"
                      src={this.state.image4}
                      alt=""
                    />
                    
                      <button onClick={ this.handleSaveClick('image4') }>Save</button>
                    </div>
                    : null
                }
              </li>
            </ul>
            <ul>
              <li>
                <Cropper
                  src={this.state.imgSrc}
                  width={200}
                  height={500}
                  originX={200}
                  originY={50}
                  fixedRatio={false}
                  allowNewSelection={false}
                  onChange={values => this.handleChange('image4', values)}
                  styles={{
                    source_img: {
                      WebkitFilter: 'blur(3.5px)',
                      filter: 'blur(3.5px)'
                    },
                    modal: {
                      opacity: 0.5,
                      backgroundColor: '#fff'
                    },
                    dotInner: {
                      borderColor: '#ff0000'
                    },
                    dotInnerCenterVertical: {
                      backgroundColor: '#ff0000'
                    },
                    dotInnerCenterHorizontal: {
                      backgroundColor: '#ff0000'
                    }
                  }}
                  ref={ref => { this.image4 = ref }}
                  onImgLoad={() => this.handleImageLoaded('image4')}
                  beforeImgLoad={() => this.handleBeforeImageLoad('image4')}
                />
                <br/>
                {
                  this.state.image4BeforeLoaded
                    ? <button
                      onClick={() => this.handleGetValues('image4')}
                    >
                    values
                    </button>
                    : null
                }
                <h4>values</h4>
                {
                  this.state.image4Values
                    ? <pre
                      style={{
                        padding: '10px',
                        backgroundColor: '#eee',
                        overflow: 'scroll'
                      }}
                    >
                      {JSON.stringify(this.state.image4Values)}
                    </pre>
                    : null
                }
                {
                  this.state.image4Loaded
                    ? <button
                      onClick={() => this.handleClick('image4')}
                    >
                    crop
                    </button>
                    : null
                }
                <h4>after crop</h4>
                {
                  this.state.image4
                    ? <img
                      className="after-img"
                      src={this.state.image4}
                      alt=""
                    />
                    : null
                }
              </li>
            </ul>
            <ul>
              <li>
                <Cropper
                  src={this.state.imgSrc}
                  width={200}
                  height={500}
                  originX={200}
                  originY={50}
                  fixedRatio={false}
                  allowNewSelection={false}
                  onChange={values => this.handleChange('image4', values)}
                  styles={{
                    source_img: {
                      WebkitFilter: 'blur(3.5px)',
                      filter: 'blur(3.5px)'
                    },
                    modal: {
                      opacity: 0.5,
                      backgroundColor: '#fff'
                    },
                    dotInner: {
                      borderColor: '#ff0000'
                    },
                    dotInnerCenterVertical: {
                      backgroundColor: '#ff0000'
                    },
                    dotInnerCenterHorizontal: {
                      backgroundColor: '#ff0000'
                    }
                  }}
                  ref={ref => { this.image4 = ref }}
                  onImgLoad={() => this.handleImageLoaded('image4')}
                  beforeImgLoad={() => this.handleBeforeImageLoad('image4')}
                />
                <br/>
                {
                  this.state.image4BeforeLoaded
                    ? <button
                      onClick={() => this.handleGetValues('image4')}
                    >
                    values
                    </button>
                    : null
                }
                <h4>values</h4>
                {
                  this.state.image4Values
                    ? <pre
                      style={{
                        padding: '10px',
                        backgroundColor: '#eee',
                        overflow: 'scroll'
                      }}
                    >
                      {JSON.stringify(this.state.image4Values)}
                    </pre>
                    : null
                }
                {
                  this.state.image4Loaded
                    ? <button
                      onClick={() => this.handleClick('image4')}
                    >
                    crop
                    </button>
                    : null
                }
                <h4>after crop</h4>
                {
                  this.state.image4
                    ? <img
                      className="after-img"
                      src={this.state.image4}
                      alt=""
                    />
                    : null
                }
              </li>
            </ul>
          </div>
    )
  }
}

module.exports = CropperList
