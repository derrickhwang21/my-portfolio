import React, {Component} from 'react';
import ExampleWork from './works/example-work';
import { myWork } from './works/my-work';


class App extends Component {
    render() {
    return (
        
        <ExampleWork work = {myWork}/>

    )
    }
}

export default App;
