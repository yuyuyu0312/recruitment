import React, {Fragment,Component} from 'react'
import {BigWrapper} from 'common/StyleComponents'
import NewPositionList from 'common/NewPositionList'
import "./IndexFooter.scss"
const NewPosition = require('mock/mock.js')
class IndexFooter extends Component{

    render(){
        
        return(
            <Fragment>
                <div className= "index-footer">
                    <BigWrapper>
                    <div className="list">
                        <div className="lastest-news">
                            <NewPositionList NewPosition={NewPosition}></NewPositionList>
                        </div>
                        <div className="ad">
                            <a href="https://www.aliyun.com/careers?spm=a2obv.11410899.0.aliyun.55ef6c61a26HKK">
                                <img src="https://img.alicdn.com/tfs/TB1Z7JvoxGYBuNjy0FnXXX5lpXa-358-136.png"/>
                            </a>
                            <a href="https://job.alibaba.com/zhaopin/informationPlatformBu.htm?spm=a2obv.11410899.0.xinxipingtai.55ef6c61vROZwR">
                                <img src="https://img.alicdn.com/tfs/TB18tFCCH2pK1RjSZFsXXaNlXXa-240-34.svg"  />
                            </a>
                        </div>
                    </div>
                    </BigWrapper>     

                </div>
            </Fragment>
        )
    }
    
}

export default IndexFooter