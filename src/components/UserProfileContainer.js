import {React, Component} from 'react';
import Spinner from 'react-bootstrap/Spinner'

export default class UserProfileContainer extends Component {

    state = {
        isLoading: false,
        isShowData: false,
        clickedIndex:null
    };


    onClickHandler = (index)=> {

        this.setState({
            isShowData: false,
            isLoading: true,
            clickedIndex:index
        });

        setTimeout(()=> {
            this.setState({
                isLoading: false,
                isShowData: true,
                clickedIndex:index
            })
        }, 2000)
    };

    render() {
        let {userData} = this.props;
        return (
            <div className="container">
                <div className="row">
                    {
                        userData.map((data, index)=>(
                            <div key={index}>
                                <div className="column">
                                    <img className="avatar" src={data.avatar}/>
                                </div>
                                <a className="thumnail" onClick={()=> this.onClickHandler(index)}>

                                       <div className="first-name"> Name: {data.first_name} {data.last_name}</div>
                                       <div className="state">State:{data.address.state}</div>
                                       <div className="country">Country:{data.address.country}</div>
                                       <div className="phone">Phone:{ data.phone_number}</div>
                                       <div className="email">Email:{ data.email}</div>
                                </a>

                                <div className="loading-state">
                                    <div className="show-data-fold-out">{this.state.isLoading && this.state.clickedIndex == index ?
                                        <Spinner animation="border"/> : null}</div>
                                    {this.state.isShowData && this.state.clickedIndex == index ?
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