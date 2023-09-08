import React, { Component } from 'react'

class Footer extends Component {

    state = {
        name: ' ',  /* this is initializing the state */
        isLogin: true

    }


    changed = (evnt) => {

        // console.log(evnt.target.value) 
        this.setState({ name: evnt.target.value })  /*changing the stae by geting key typeved event*/
        console.log(this.state.name)


    }

    componentDidMount() {

        console.log('componenet did mount is called');
    }

    componentWillUnmount() {
        console.log('comonenet will unmount is called');
    }


    render() {
        const animals = ['cat', 'dog', 'horse'];

        return (
            <div>
                {animals.map(animal => {
                    return (
                        <div key={animal}>
                            <h1> {animal}</h1>
                            <h1> {animal}</h1>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Footer