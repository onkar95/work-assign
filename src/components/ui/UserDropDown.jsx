import { LogOut, User } from 'lucide-react'
import React, { useContext, useEffect, useState } from 'react'
import { UserData } from '../../db';
import UserContext from '../../context/userContext';

const UserDropDown = () => {

    const [Data, setData] = useState(UserData)
    const { setSelectedUser } = useContext(UserContext);

    const handleSelect = (val) => {
        let userName = val?.target?.value || val
        const tabs = Data?.filter((tabs) => tabs.user === userName)
        setSelectedUser(() => tabs[0]);
    };

    useEffect(() => {
        handleSelect(Data[0].user)
    }, [])

    return (
        <select className='w-[100px] flex'
            onClick={(val) => handleSelect(val)}
            
        >
            {
                Data?.map((val, index) => {

                    return (
                        <>
                            <option
                                key={val.id + ' ' + 1 + index}
                                className='w-[400px]'
                                value={val.user} >

                                {val.user}
                            </option>
                        </>
                    )
                })
            }
        </select>
    )
}

export default UserDropDown