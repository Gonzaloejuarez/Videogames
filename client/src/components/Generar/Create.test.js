import React from 'react';
import Enzyme, {shallow}  from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import CreateVG from './CreateVG';

Enzyme.configure({adapter : new Adapter()});

describe('<CreateVG />', () => {
    let wrapper;
	beforeEach(() => {
		wrapper = shallow(<CreateVG />);
	});
    it('deberia generar una etiquieta <form></form>', () => {
        expect(wrapper.find())
    })
})