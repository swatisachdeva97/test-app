import {React, Component} from 'react';
import { Spinner } from 'react-bootstrap';

export default class UserProfileContainer extends Component {

    state = {
        isLoading: false
    };


    CollapseHandler = ()=> {

        var coll = document.getElementsByClassName("collapsible");
        var i;
        for (i = 0; i < coll.length; i++) {
            coll[i].addEventListener("click", function () {
                this.classList.toggle("active");
                var content = this.nextElementSibling;
                if (content.style.display === "block") {
                    content.style.display = "none";
                } else {
                    content.style.display = "block";
                }
            });
        }
    };

    render() {
        let {userData} = this.props;
        return (
            <div className="container">
                <div className="row">

                    {
                        userData.map((data)=>(
                            <div >

                                <div className="column">
                                <img className="avatar" src={data.avatar}/>
                                </div>

                                <div className="thumnail">
                                    <span> Name: {data.first_name}</span>{' '}
                                    <span>{data.last_name}</span><br/>
                                    <span>Country:{data.address.country}</span><br/>
                                    <span>Phone:{ data.phone_number}</span><br/>
                                    <span>Email:{ data.email}</span><br/>

                                    <button className="collapsible" onClick={this.CollapseHandler}>
                                        AdditionalDetails...
                                    </button>


                                    <div className="content">
                                        <span>Title:{ data.employment.title}</span><br/>
                                        <span>Key_Skill:{ data.employment.key_skill}</span><br/>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}