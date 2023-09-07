import React,{Component} from 'react'

class Footer extends Component
{
  
    state = {
    name:'inital value'   /* this is initializing the state */

    }

   
    changed =(evnt)=>{

       // console.log(evnt.target.value) 
        this.setState({name:evnt.target.value})  /*changing the stae by geting key typeved event*/
        console.log(this.state.name)


    }
    
    render()
    {
        return (
            <div>
            <h2>{this.props.trademark}</h2>
            <input onChange={this.changed} type="text" value={this.state.name}/>
            </div>
        )
    }
}

export default Footer