import {React, Component} from 'react';



export default class TopContainer extends Component {


    onChangeHandler = (event)=> {
        let value = event.target.value;
        this.props.onSearchHandler(value)
    };

    handleDropdownChange = (event)=> {
        let value = event.target.value;
        this.props.onHandleDropDownChange(value)
    };

    render() {
        return (
            <div>
                <div className="topnav">
                    <a className="active">Users Profile Dashboard</a>
                    <input type="text" placeholder="Search..." onChange={this.onChangeHandler}/>
                    <select className="select-user-profile" name="userProfile" id="user-profile" onChange={this.handleDropdownChange}
                            defaultValue={this.props.defaultName}>
                        <option value="first_name">Select</option>
                        <option value="first_name">Order By Name</option>
                        <option value="address.state">Order By State</option>
                    </select>
                </div>

            </div>
        )
    }
}