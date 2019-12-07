import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './demo.less'
import Cropper from '../component/Cropper'
import Tree from 'react-animated-tree'
import  DemoImg from '../dist/image/Questions/Page-16-Q-1.png'
import TreeView from 'react-treeview'
import listReactFiles from 'list-react-files'


const dataSource = [
  {
    type: 'Employees',
    collapsed: false,
    people: [
      {name: 'Paul Gordon', age: 25, sex: 'male', role: 'coder', collapsed: false},
      {name: 'Sarah Lee', age: 23, sex: 'female', role: 'jqueryer', collapsed: false},
    ],
  },
  {
    type: 'CEO',
    collapsed: false,
    people: [
      {name: 'Drew Anderson', age: 35, sex: 'male', role: 'boss', collapsed: false},
    ],
  },
];

class ImageCropDemo extends Component {

  constructor (props) {
    super(props)
    this.state = {
      imgSrc: DemoImg,
      image: '',
      imageLoaded: false,

      images : 
      [
        {
          image: '',
          image_Loaded: false,
          image_BeforeLoaded: false,
          image_Values: '',
          image_Save: '',
        },
        {
          image: '',
          image_Loaded: false,
          image_BeforeLoaded: false,
          image_Values: '',
          image_Save: '',
        }
      ],
      

      
      image_1: '',
      image_1Loaded: false,
      image_1BeforeLoaded: false,
      image_1Values: '',
      image_1Save: '',

      image_2: '',
      image_2Loaded: false,
      image_2BeforeLoaded: false,
      image_2Values: '',
      image_2Save: '',

      image_3: '',
      image_3Loaded: false,
      image_3BeforeLoaded: false,
      image_3Values: '',

      image_4: '',
      image_4Loaded: false,
      image_4BeforeLoaded: false,
      image_4Values: '',

      image_5: '',
      image_5Loaded: false,
      image_5BeforeLoaded: false,
      image_5Values: '',

      image_6: '',
      image_6Loaded: false,
      image_6BeforeLoaded: false,
      image_6Values: '',

      image_7: '',
      image_7Loaded: false,
      image_7BeforeLoaded: false,
      image_7Values: '',

      image_9: '',
      image_9Loaded: false,
      image_9BeforeLoaded: false,
      image_9Values: '',

      image_10: '',
      image_10Loaded: false,
      image_10BeforeLoaded: false,
      image_10Values: '',

      image_11: '',
      image_11Loaded: false,
      image_11BeforeLoaded: false,
      image_11Values: '',



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
      [state+'Save']: node.save()
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


SimpleList(){
  <ul>
    {['asdasd', 'b', 'c'].map(item => {
      return <li key={item}>{item}</li>;
    })}
  </ul>
}

  render () {
    return (
    <div>
      <div class='some-page-wrapper'>
      <div class='row'>
        <div class='column'>
          <div>
           <div>
              {dataSource.map((node, i) => {
                const type = node.type;
                const label = <span className="node">{type}</span>;
                return (
                  <TreeView key={type + '|' + i} nodeLabel={label} defaultCollapsed={false}>
                    {node.people.map(person => {
                      const label2 = <span className="node">{person.name}</span>;
                      return (
                        <TreeView nodeLabel={label2} key={person.name} defaultCollapsed={false}>
                          <div className="info">age: {person.age}</div>
                          <div className="info">sex: {person.sex}</div>
                          <div className="info">role: {person.role}</div>
                        </TreeView>
                      );
                    })}
                  </TreeView>
                );
              })}
            </div>
          </div>
        </div>
        <div class='column'>
          <div >
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
                onChange={values => this.handleChange('image_1', values)}
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
                ref={ref => { this.image_1 = ref }}
                onImgLoad={() => this.handleImageLoaded('image_1')}
                beforeImgLoad={() => this.handleBeforeImageLoad('image_1')}
              />
              <br/>
              {
                this.state.image_1BeforeLoaded
                  ? <button
                    onClick={() => this.handleGetValues('image_1')}
                  >
                  values
                  </button>
                  : this.SimpleList()
              }
              <h4>values</h4>
              {
                this.state.image_1Values
                  ? <pre
                    style={{
                      padding: '10px',
                      backgroundColor: '#eee',
                      overflow: 'scroll'
                    }}
                  >
                    {JSON.stringify(this.state.image_1Values)}
                  </pre>
                  : null
              }
              {
                this.state.image_1Loaded
                  ? <button
                    onClick={() => this.handleClick('image_1')}
                  >
                  crop
                  </button>
                  : null
              }
              <h4>after crop</h4>
              {
                this.state.image_1
                  ? <img
                    className="after-img"
                    src={this.state.image_1}
                    alt=""
                  />
                  : null
              }
              <h4>Final</h4>
              {
                this.state.image_1Save
                  ? <button
                    onClick={() => this.handleSaveClick('image_1')}
                  >
                  Save
                  </button>
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
                onChange={values => this.handleChange('image_2', values)}
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
                ref={ref => { this.image_2 = ref }}
                onImgLoad={() => this.handleImageLoaded('image_2')}
                beforeImgLoad={() => this.handleBeforeImageLoad('image_2')}
              />
              <br/>
              {
                this.state.image_2BeforeLoaded
                  ? <button
                    onClick={() => this.handleGetValues('image_2')}
                  >
                  values
                  </button>
                  : null
              }
              <h4>values</h4>
              {
                this.state.image_2Values
                  ? <pre
                    style={{
                      padding: '10px',
                      backgroundColor: '#eee',
                      overflow: 'scroll'
                    }}
                  >
                    {JSON.stringify(this.state.image_2Values)}
                  </pre>
                  : null
              }
              {
                this.state.image_2Loaded
                  ? <button
                    onClick={() => this.handleClick('image_2')}
                  >
                  crop
                  </button>
                  : null
              }
              <h4>after crop</h4>
              {
                this.state.image_2
                  ? <img
                    className="after-img"
                    src={this.state.image_2}
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
                onChange={values => this.handleChange('image_3', values)}
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
                ref={ref => { this.image_3 = ref }}
                onImgLoad={() => this.handleImageLoaded('image_3')}
                beforeImgLoad={() => this.handleBeforeImageLoad('image_3')}
              />
              <br/>
              {
                this.state.image_3BeforeLoaded
                  ? <button
                    onClick={() => this.handleGetValues('image_3')}
                  >
                  values
                  </button>
                  : null
              }
              <h4>values</h4>
              {
                this.state.image_3Values
                  ? <pre
                    style={{
                      padding: '10px',
                      backgroundColor: '#eee',
                      overflow: 'scroll'
                    }}
                  >
                    {JSON.stringify(this.state.image_3Values)}
                  </pre>
                  : null
              }
              {
                this.state.image_3Loaded
                  ? <button
                    onClick={() => this.handleClick('image_3')}
                  >
                  crop
                  </button>
                  : null
              }
              <h4>after crop</h4>
              {
                this.state.image_3
                  ? <img
                    className="after-img"
                    src={this.state.image_3}
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
                onChange={values => this.handleChange('image_4', values)}
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
                ref={ref => { this.image_4 = ref }}
                onImgLoad={() => this.handleImageLoaded('image_4')}
                beforeImgLoad={() => this.handleBeforeImageLoad('image_4')}
              />
              <br/>
              {
                this.state.image_4BeforeLoaded
                  ? <button
                    onClick={() => this.handleGetValues('image_4')}
                  >
                  values
                  </button>
                  : null
              }
              <h4>values</h4>
              {
                this.state.image_4Values
                  ? <pre
                    style={{
                      padding: '10px',
                      backgroundColor: '#eee',
                      overflow: 'scroll'
                    }}
                  >
                    {JSON.stringify(this.state.image_4Values)}
                  </pre>
                  : null
              }
              {
                this.state.image_4Loaded
                  ? <button
                    onClick={() => this.handleClick('image_4')}
                  >
                  crop
                  </button>
                  : null
              }
              <h4>after crop</h4>
              {
                this.state.image_4
                  ? <img
                    className="after-img"
                    src={this.state.image_4}
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
                onChange={values => this.handleChange('image_5', values)}
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
                ref={ref => { this.image_5 = ref }}
                onImgLoad={() => this.handleImageLoaded('image_5')}
                beforeImgLoad={() => this.handleBeforeImageLoad('image_5')}
              />
              <br/>
              {
                this.state.image_5BeforeLoaded
                  ? <button
                    onClick={() => this.handleGetValues('image_5')}
                  >
                  values
                  </button>
                  : null
              }
              <h4>values</h4>
              {
                this.state.image_5Values
                  ? <pre
                    style={{
                      padding: '10px',
                      backgroundColor: '#eee',
                      overflow: 'scroll'
                    }}
                  >
                    {JSON.stringify(this.state.image_5Values)}
                  </pre>
                  : null
              }
              {
                this.state.image_5Loaded
                  ? <button
                    onClick={() => this.handleClick('image_5')}
                  >
                  crop
                  </button>
                  : null
              }
              <h4>after crop</h4>
              {
                this.state.image_5
                  ? <img
                    className="after-img"
                    src={this.state.image_5}
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
                onChange={values => this.handleChange('image_6', values)}
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
                ref={ref => { this.image_6 = ref }}
                onImgLoad={() => this.handleImageLoaded('image_6')}
                beforeImgLoad={() => this.handleBeforeImageLoad('image_6')}
              />
              <br/>
              {
                this.state.image_2BeforeLoaded
                  ? <button
                    onClick={() => this.handleGetValues('image_6')}
                  >
                  values
                  </button>
                  : null
              }
              <h4>values</h4>
              {
                this.state.image_6Values
                  ? <pre
                    style={{
                      padding: '10px',
                      backgroundColor: '#eee',
                      overflow: 'scroll'
                    }}
                  >
                    {JSON.stringify(this.state.image_6Values)}
                  </pre>
                  : null
              }
              {
                this.state.image_2Loaded
                  ? <button
                    onClick={() => this.handleClick('image_6')}
                  >
                  crop
                  </button>
                  : null
              }
              <h4>after crop</h4>
              {
                this.state.image_6
                  ? <img
                    className="after-img"
                    src={this.state.image_6}
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
                onChange={values => this.handleChange('image_7', values)}
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
                ref={ref => { this.image_7 = ref }}
                onImgLoad={() => this.handleImageLoaded('image_7')}
                beforeImgLoad={() => this.handleBeforeImageLoad('image_7')}
              />
              <br/>
              {
                this.state.image_7BeforeLoaded
                  ? <button
                    onClick={() => this.handleGetValues('image_7')}
                  >
                  values
                  </button>
                  : null
              }
              <h4>values</h4>
              {
                this.state.image_7Values
                  ? <pre
                    style={{
                      padding: '10px',
                      backgroundColor: '#eee',
                      overflow: 'scroll'
                    }}
                  >
                    {JSON.stringify(this.state.image_7Values)}
                  </pre>
                  : null
              }
              {
                this.state.image_7Loaded
                  ? <button
                    onClick={() => this.handleClick('image_7')}
                  >
                  crop
                  </button>
                  : null
              }
              <h4>after crop</h4>
              {
                this.state.image_7
                  ? <img
                    className="after-img"
                    src={this.state.image_7}
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
                onChange={values => this.handleChange('image_2', values)}
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
                ref={ref => { this.image_2 = ref }}
                onImgLoad={() => this.handleImageLoaded('image_2')}
                beforeImgLoad={() => this.handleBeforeImageLoad('image_2')}
              />
              <br/>
              {
                this.state.image_2BeforeLoaded
                  ? <button
                    onClick={() => this.handleGetValues('image_2')}
                  >
                  values
                  </button>
                  : null
              }
              <h4>values</h4>
              {
                this.state.image_2Values
                  ? <pre
                    style={{
                      padding: '10px',
                      backgroundColor: '#eee',
                      overflow: 'scroll'
                    }}
                  >
                    {JSON.stringify(this.state.image_2Values)}
                  </pre>
                  : null
              }
              {
                this.state.image_2Loaded
                  ? <button
                    onClick={() => this.handleClick('image_2')}
                  >
                  crop
                  </button>
                  : null
              }
              <h4>after crop</h4>
              {
                this.state.image_2
                  ? <img
                    className="after-img"
                    src={this.state.image_2}
                    alt=""
                  />
                  : null
              }
            </li>
          </ul>
          </div>
        </div>
        <div class='column'>
          <div class='red-column'>
            Some Text in Column Two
          </div>
        </div>
      </div>
    </div>
     
    </div>
    )
  }
}

if (module.hot) {
  module.hot.accept()
}

ReactDOM.render(<ImageCropDemo/>, document.getElementById('root'))
