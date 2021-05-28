import {React, Component} from 'react';
import Spinner from 'react-bootstrap/Spinner'

export default class UserProfileContainer extends Component {

    state = {
        isLoading: false,
        isShowData :false
    };

    CollapseHandler = ()=> {

        this.setState({
            isCollapse:true
        })
    };

    onClickHandler = ()=>{

        this.setState({
            isShowData:false,
            isLoading:true
        });

        setTimeout(()=>{
            this.setState({
                isLoading:false,
                isShowData:true
            })
        },2000)
    };

    render() {
        let {userData} = this.props;
        console.log(this.state.isLoading);

        console.log(this.state.isCollapse);

        return (
            <div className="container">
                <div className="row">
                    {
                        userData.map((data, i)=>(
                            <div key={i}>
                                <div className="column">
                                    <img className="avatar" src={data.avatar}/>
                                </div>

                                <a className="thumnail" onClick={this.onClickHandler}>
                                    <span> Name: {data.first_name}</span>{' '}
                                    <span>{data.last_name}</span><br/>
                                    <span>Country:{data.address.country}</span><br/>
                                    <span>Phone:{ data.phone_number}</span><br/>
                                    <span>Email:{ data.email}</span><br/>
                                </a>
                                    {this.state.isLoading ? <Spinner animation="border" />:null}

                                    {this.state.isShowData?
                                        <div className="show-data-fold-out"><span> Name: {data.first_name}</span><br/>
                                        <span>{data.last_name}</span><br/></div>
                                        :
                                        null
                                    }


                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}