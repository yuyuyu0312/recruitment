import React, { Component } from 'react'
import { Link } from "react-router-dom"
import './NewPositionList.scss'
const Item = (props) =>{
    return(
        <li>
            <Link className ="position" to={{
                pathname:"/positionList",
                search:`?id=${props.id}`
            }}>{props.title}</Link>
            <span className="date">{props.date}小时前</span>
            <span className="city">{props.city}</span>
        </li>
    )
}
class NewPositionList extends Component{
    constructor(){
        super()
        this.state={
            top:0,
            timer: () => void 0
        }
    }


    componentDidMount(){
        this.move()
    }  
    move = () =>{
        const { NewPosition } = this.props   
        const _this = this
        const boxHeight = parseInt(getComputedStyle(this.container).height)
        this.setState({
            timer : setInterval( ()=>{
                _this.state.top += 2
                if(_this.state.top >= NewPosition.positionList.length*50-boxHeight){
                    _this.state.top = 0
                }
                this.setState({
                    top: _this.state.top 
                })
            },60)
        })   
    }
    stopMove = ()=>{
        const { timer } = this.state
        clearInterval(timer)
    }
    continueMove = () =>{
        this.move()
    }
    componentWillUnmount(){
        const { timer } = this.state
        clearInterval(timer)
    }
    render(){
        const { top } = this.state
        const style = {
            top: `-${top}px`,
        }
        return(
            <div className="content-box"> 
              <div className="title">
                <span>最新职位</span>
                <span>更多</span>
              </div>
              <div className="content" ref={container => this.container = container}>
                <ul style={style} onMouseOver = {this.stopMove} onMouseOut = {this.continueMove}>             
                        {this.renderItem()}
                </ul>        
              </div>
            </div>
        )
    }
    renderItem = () =>{
        const { NewPosition } = this.props
        return NewPosition.positionList.map( ( item )=>{
            return <Item key={item.id} {...item} />
        })
    }
    
   
}

export default NewPositionList