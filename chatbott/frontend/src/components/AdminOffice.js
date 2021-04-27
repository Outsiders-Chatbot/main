import React from 'react'
import { UserContext } from '../contextProvider/contextProvider';
import { useHistory } from "react-router-dom";

function AdminOffice() {
    const {user,setuser} = React.useContext(UserContext)
    const history = useHistory();

    React.useEffect(() => {
        console.log('admin user',user);
        if(user.role=='user'){
            console.log('pushedd ');
            history.push('/')
        }

    }, [])

    return (
        <div>
            hello from the admin office how can i help you ?
        </div>
    )
}

export default AdminOffice
