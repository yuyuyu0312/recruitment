import React, {Fragment,Component} from 'react'


class PositionList extends Component{
    render(){
      const { location } = this.props
        return(
            <Fragment>
                <h3>这里是职位详情页</h3>
                <p>职位id:{location.search.split("=")[1]}</p>
            </Fragment>
        )
    }
}

export default PositionList