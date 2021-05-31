import { render, screen } from '@testing-library/react';
import {shallow} from 'enzyme';
import toJson from "enzyme-to-json";
import ManageUserProfileContainers from './../../components/ManageUserProfileContainer';


test('matches snapshot', ()=>{
    const wrapper = shallow(<ManageUserProfileContainers/>);
    expect(toJson(wrapper)).toMatchSnapshot()
});