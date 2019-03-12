import React, {Component} from 'react';
import ExampleWork from './example-work';
import ExampleWorkModal from './example-work-modal';

const myWork = [
    {
        'title': "Work Example",
        'href': "https://example.com",
        'desc': "lorem ipsum, blalalala lalalalal alalalal alal badfk sdihgkv sdffg",
        'image': {
            'desc': "example screenshot of a project involving code",
            'src': "images/example1.png",
            'comment': ""
        }
    },
    {
        'title': "Work Example",
        'href': "https://example.com",
        'desc': "lorem ipsum, blalalala lalalalal alalalal alal badfk sdihgkv sdffg",
        'image': {
            'desc': "example screenshot of a project involving chemistry",
            'src': "images/example2.png",
            'comment': ""
        }
    },
    {
        'title': "Work Example",
        'href': "https://example.com",
        'desc': "lorem ipsum, blalalala lalalalal alalalal alal badfk sdihgkv sdffg",
        'image': {
            'desc': "example screenshot of a project involving cats",
            'src': "images/example3.png",
            'comment': `"“Bengal cat” by roberto shabs is licensed under CC BY 2.0
                        https://www.flickr.com/photos/37287295@N00/2540855181"`
        }
    }
]
class ExampleWorks extends Component {
    render() {
    return (
        
        <ExampleWork work = {this.myWork}/>

    )
    }
}

export default ExampleWorks;
export {ExampleWorkModal}