import { useSelector } from 'react-redux';
import {selectUser} from '../../features/userSlice'
import  Axios  from 'axios';
import * as React from 'react';
import './style.css';

function AccountPage() {

    const [inforUser,setInforUser]=React.useState({});

    const user=useSelector(selectUser)
    //console.log(user.userId)
    React.useEffect(()=>{
        Axios.get(`http://localhost:2345/api/user/info/${user.userId}`)
        .then(res=>{
           setInforUser(res.data)

           console.log(inforUser.avatar)
        }).catch(err=>console.log(err))
    },[])



    return <>

        <div className='container'>
            <h1 className='title-postpage'>My account</h1>
            {/* <img src={inforUser.avatar} alt="#" style={{width:'30%'}}/> */}
            {/* <h1>{inforUser.email}</h1>
            <img src={inforUser.avatar} alt="harry potter" style={{ width: '400px', }}/> */}
            <div className="card">
                <img src={inforUser.avatar} alt="#" style={{width:'100%'}}/>
                <h1>{inforUser.username}</h1>
                <p className="title">{inforUser.firstName} {inforUser.lastName}</p>
                <p>{inforUser.email}</p>
                <p>{inforUser.phoneNumber}</p>
            </div>
        </div>
        
    </>;
}

export default AccountPage;
