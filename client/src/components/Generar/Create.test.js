import React from 'react';
import Enzyme, {shallow}  from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import CreateVG from './CreateVG';

Enzyme.configure({adapter : new Adapter()});

describe('<CreateVG />', () => {
    describe('Estructura', () => {
        let wrapper;
        beforeEach(() => {
            wrapper = shallow(<CreateVG />);
        });
        it('Renderiza un <form>', () => {
            expect(wrapper.find('form').toHaveLength(1))
        });
        it('Renderiza un label con el texto igual a "Nombre"', () => {
            expect(wrapper.finde('label')).at(0).text().toEqual('Nombre');
        })
        it('Renderiza un input con la propiedad "id" igual a "name"', () => {
            expect(wrapper.find('input[id="name"]')).toHaveLength(1);
        })
        it('Renderiza un label con el texto igual a "Descripcion"', () => {
            expect(wrapper.find('label').at(1).text().toEqual('Descripcion'))
        })
        it('Renderiza un input con la propiedad "id" igual a "description"' , () => {
            expect(wrapper.find('input[id="description"]')).toHaveLength(1)
        })
        it('Renderiza un label con el texto igual a "Rating"', () => {
            expect(wrapper.find('label').at(2).text().toEqual('Rating'))
        })
        it('Renderiza un input con la propiedad "id" igual a "rating"', () => {
            expext(wrapper.find('input[id="rating"]'))
        })
        
        })
})