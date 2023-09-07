import React,{Component} from 'react'

class Footer extends Component
{
    changed()
    {
        console.log("you changed")
    }
    
    render()
    {
        return (
            <div>
            <h2>{this.props.trademark}</h2>
            <input onChange={this.changed} type="text"/>
            </div>
        )
    }
}

export default Footer