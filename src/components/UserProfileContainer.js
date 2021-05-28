import {React, Component} from 'react';
import Spinner from 'react-bootstrap/Spinner'

export default class UserProfileContainer extends Component {

    state = {
        isLoading: false,
        isShowData: false
    };

    CollapseHandler = ()=> {

        this.setState({
            isCollapse: true
        })
    };

    onClickHandler = (index)=> {
        console.log("index");
        console.log(index);
        this.setState({
            isShowData: false,
            isLoading: true
        });

        setTimeout(()=> {
            this.setState({
                isLoading: false,
                isShowData: true
            })
        }, 2000)
    };

    render() {
        let {userData} = this.props;
        console.log(this.state.isLoading);

        console.log(this.state.isCollapse);

        return (
            <div className="container">
                <div className="row">
                    {
                        userData.map((data, index)=>(
                            <div key={index}>
                                <div className="column">
                                    <img className="avatar" src={data.avatar}/>
                                </div>
                                <div className="thumnail" onClick={()=> this.onClickHandler(index)}>
                                    <div className="first-name"> Name: {data.first_name} {data.last_name}</div>
                                    <div className="state">State:{data.address.state}</div>
                                    <div className="country">Country:{data.address.country}</div>
                                    <div className="phone">Phone:{ data.phone_number}</div>
                                    <div className="email">Email:{ data.email}</div>
                                </div>

                                <div className="loading-state">
                                    <div className="show-data-fold-out">{this.state.isLoading ?
                                        <Spinner animation="border"/> : null}</div>
                                    {this.state.isShowData ?
                                        <div className="show-data-fold-out">
                                            <div> Name: {data.first_name}</div>
                                            <div>{data.last_name}</div>
                                        </div>
                                        :
                                        null
                                    }
                                </div>


                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}