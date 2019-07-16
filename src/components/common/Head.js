import React, {Component} from 'react'
import {Wrapper} from './StyleComponents'
import './Head.scss'
class Head extends Component{
    render(){
        return(
           <header id= "header">
               <Wrapper>
                   <div className = "head-menu">
                       <a href="#">
                           <img src="https://img.alicdn.com/tfs/TB1Zv8_lxSYBuNjSspjXXX73VXa-390-63.png" alt="XXXX招聘" />
                       </a>
                       <i className = "line">|</i>
                       <i className = "title">社招官网</i>
                       <ul>
                           <li>
                               <a>
                                   首&nbsp;&nbsp;页
                               </a>
                           </li>
                           <li>
                               <a>
                                   社会招聘
                               </a>
                           </li>
                           <li>
                               <a>
                                   校园招聘
                               </a>
                           </li>
                           <li>
                               <a>
                                   了解阿里
                               </a>
                           </li>
                           <li>
                               <a>
                                   个人中心
                               </a>
                           </li>
                       </ul>
                
                   </div>
                   <div className = "login-tips">
                       欢迎来到阿里巴巴集团招聘！
                       <a>登录</a>
                       &nbsp;|&nbsp; 
                       <a>注册</a>
                       
                    </div>    
               </Wrapper>
           </header>
        )
    }
}

export default Head