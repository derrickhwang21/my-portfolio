import React, {Component} from 'react';
import ExampleWork from './example-work';
import ExampleWorkModal from './example-work-modal';


class ExampleWorks extends Component {
    render() {
    return (
        
        <ExampleWork work = {this.myWork}/>

    )
    }
}

export default ExampleWorks;
export {ExampleWorkModal}
