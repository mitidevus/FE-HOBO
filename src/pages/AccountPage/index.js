import { useSelector } from 'react-redux';
import {selectUser} from '../../features/userSlice'
import  Axios  from 'axios';
import * as React from 'react';
import './style.scss';
import { getInfoUser } from '../../api/user/user.api';

function AccountPage() {

    const [inforUser,setInforUser]=React.useState({});

    const user=useSelector(selectUser)

    React.useEffect(()=>{
        getInfoUser(user._id).then(res => {
            if (res) {
                setInforUser(res.data)
            }
        })
    },[])



    return <>

        <div className='container text-center'>
            <br/>
            <div className="row justify-content-center">
                <div className="col-md-5">
                    <div className="wrapper">
                        <div className="row no-gutters">
                                <div className="user-section rounded-5">
                                    <h1>PROFILE PAGE</h1>
                                </div>
                        </div>
                    </div>
                </div>
            </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
            
            {/* <img src={inforUser.avatar} alt="#" style={{width:'30%'}}/> */}
            {/* <h1>{inforUser.email}</h1>
            <img src={inforUser.avatar} alt="harry potter" style={{ width: '400px', }}/> */}
            <br/>
            <div className="row justify-content-center">
                <div className="col-md-5">
                    <div className="wrapper">
                        <div className="row no-gutters">
                                <div className="user-wrap w-100 p-lg-5 p-4 rounded-5">
                                <img className='avar rounded-circle' src={inforUser.avatar} alt="#" />
                                <h3>{inforUser.username}</h3>
                                <p className="title">{inforUser.firstName} {inforUser.lastName}</p>
                                <p className='mail'>{inforUser.email}</p>
                                <p className='phone'>{inforUser.phoneNumber}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>;
}

export default AccountPage;
