import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import UserProfileContainer from './UserProfileContainer';
import {getUserData} from '../services/Service';
import TopContainer from './TopContainer';


export default class ManageUserProfileContainer extends Component {

    state = {
        userData: [],
        filteredData: []
    };

    async componentDidMount() {
        const response = await fetch('https://random-data-api.com/api/users/random_user?size=16');
        const json = await response.json();
        this.setState({userData: json})
    }

    onSearchHandler = (name)=> {
        console.log(name);
        const regex = new RegExp(`^${name}`, "i");

        const initialData = this.state.userData;
        if (name.length > 0) {
            let filteredData = initialData.filter((data)=>  regex.test(`${data.first_name}`));
            this.setState({filteredData: filteredData})

        } else {
            this.setState({
                filteredData: []
            })
        }
    };

    onHandleDropDownChange = (item)=> {
        let property = item;
        let sortedData;
        console.log(property);
        let initialData = this.state.userData;
        if (item == 'first_name') {
            sortedData = [...initialData].sort((a, b)=> a.first_name.localeCompare(b.first_name));
        } else if (item == "address.state") {
            sortedData = [...initialData].sort((a, b)=> a.address.state.localeCompare(b.address.state));
        }
        this.setState({userData: sortedData})
    };

    render() {
        console.log(this.state.userData);

        const {userData, filteredData} = this.state;
        return (
            <div>
                <TopContainer userData={userData} onSearchHandler={this.onSearchHandler}
                                 onHandleDropDownChange={this.onHandleDropDownChange}/>
                {this.state.filteredData.length > 0 ? <UserProfileContainer userData={filteredData}/> :
                    <UserProfileContainer userData={userData}/>}
            </div>
        )
    }
}
