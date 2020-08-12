import React from 'react';
import { shallow } from 'enzyme';

import { Header } from '../../components/Header';


let logout,wrapper;


beforeEach(() => {
    logout = jest.fn();
    wrapper = shallow(<Header startLogout={logout}/>);
});


test('Should render Header correctly', () => {
    expect(wrapper).toMatchSnapshot();
});


test('Should call startLogout on button click', () => {
    wrapper.find('button').simulate('click');
    expect(logout).toHaveBeenCalled();
});