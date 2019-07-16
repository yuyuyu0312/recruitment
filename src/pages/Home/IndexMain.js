import React, {Fragment,Component} from 'react'
import './IndexMain.scss'
import {Wrapper} from 'common/StyleComponents'
import Search from 'common/Search'
class IndexMain extends Component{
    render(){
        return(
            <Fragment>            
                <div className = "index-main">
                    <img src= "https://img.alicdn.com/tfs/TB14TEEm7CWBuNjy0FaXXXUlXXa-1440-478.png" alt="XX"></img>
                    <div className ="mask"></div>
                    <Wrapper>
                        <div className = "form">
                            <div className = " word ">
                                <p className = " en-word "> 
                                If not now, when?
                                </p>
                                <p className = " en-word "> 
                                If not me, who?
                                </p>
                                <p className = " zn-word ">
                                此时此刻，非我莫属！
                                </p>
                            </div>
                            <Search></Search>
                            <div className= " hot-search ">
                            热门搜索
                            </div>
                        </div>
                    </Wrapper>
                </div>
            </Fragment>
        )
    }
}

export default IndexMain