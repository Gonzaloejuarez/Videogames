import React from 'react';
import Link from 'react-router-dom';
import Enzyme, {shallow} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import {Nav} from './Nav';

Enzyme.configure({adapter : new Adapter()});

describe('<Nav />', () => {
    let wrapper;
    beforeEach( () => {
        wrapper = shallow(<Nav />)
    });

    it('Deberia de renderizar 3 componenetes' , () => {
        expect((wrapper.find(Link).toHaveLength(3)))
    })
    it('El primer link debe renderizar a la ruta /' , () => {
        expect(wrapper.find(Link).at(0).prop('to')).toEqual('/');
    })
    it('El segundo link debe renderizar a la ruta /home', () => {
        expect(wrapper.find(Link).at(1).prop('to')).toEqual('/home');
    })
    it('El tercer link debe renderizar a la ruta /create' , () => {
        expect(wrapper.find(Link).at(2).prop('to')).toEqual('/create');
    })
})