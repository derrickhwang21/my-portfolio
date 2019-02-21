import React from 'react';
import { shallow } from 'enzyme';
import ExampleWork, { ExampleWorkBubble } from '../js/example-work';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

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
    }
];


describe("ExampleWork component", () => {
    let component = shallow(<ExampleWork work={myWork}/>);

    it("Should be a 'span' element", () => {
        expect(component.type()).toEqual('span');
    });

    it("Should contain as many children as there are work examples", () => {
            expect(component.find("ExampleWorkBubble").length).toEqual(myWork.length);
    })
});

describe("ExampleWorkBubble", () => {
    let component = shallow(<ExampleWorkBubble example = {myWork[1]}/>);

    let images = component.find("img");

    it("Should contain a single 'img' element", () => {
        expect(images.length).toEqual(1);
    });

})