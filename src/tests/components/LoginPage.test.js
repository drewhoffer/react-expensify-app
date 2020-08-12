import React from 'react';
import { shallow } from 'enzyme';
import { LoginPage } from '../../components/LoginPage';

let login,wrapper;


beforeEach(() => {
    login = jest.fn();
    wrapper = shallow(<LoginPage startLogin={login}/>);
});

test('Should render LoginPage correctly', () => { 
    expect(wrapper).toMatchSnapshot();
});





test('Should call startLogin on button click', () => {
    wrapper.find('button').simulate('click');
    expect(login).toHaveBeenCalled();
});