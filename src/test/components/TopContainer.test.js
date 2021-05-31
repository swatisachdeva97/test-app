import {mount} from 'enzyme';
import toJSON from 'enzyme-to-json';
import React from 'react';
import {act} from '../../../node_modules/react-dom/test-utils';


jest.mock("./TopContainer", ()=>{
    return{
        __esModule:true,

        default:React.forwardRef((props)=> {

            return(
                <select  name="userProfile" id="user-profile" onChange={this.handleDropdownChange}
                        defaultValue={this.props.defaultName}>
                    <option value="first_name">Choose here</option>
                    <option value="first_name">Order By Name</option>
                    <option value="address.state">Order By State</option>
                </select>
            )
        })
    }

});

test("submits corrrectly", async ()=> {
    const handleCompleteMock = jest.fun();
    const TopContainerApiMock = jest.fun();

    jest.doMock("../components/ManageUserProfileContainer", ()=> ({
        __esModule:true,
        default:TopContainerApiMock
    }))
})