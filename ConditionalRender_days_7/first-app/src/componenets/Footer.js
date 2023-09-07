import React,{Component} from 'react'

class Footer extends Component
{
  
    state = {
    name:' ' ,  /* this is initializing the state */
    isLogin:true

    }

   
    changed =(evnt)=>{

       // console.log(evnt.target.value) 
        this.setState({name:evnt.target.value})  /*changing the stae by geting key typeved event*/
        console.log(this.state.name)


    }

    componentDidMount()
    {
        
        console.log('componenet did mount is called');
    }

    componentWillUnmount()
    {
        console.log('comonenet will unmount is called');
    }

    
    render()
    {

        return (
            <div>
                {this.state.isLogin ? (<React.Fragment><h2>{this.props.trademark}</h2>
            <input onChange={this.changed} type="text" value={this.state.name}/></React.Fragment>):
            (<React.Fragment><h2> You cant't see this content you must login</h2></React.Fragment>)}
            
            </div>
        )
    }
}

export default Footer