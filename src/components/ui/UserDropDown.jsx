import { LogOut, User, User2 } from 'lucide-react'
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
        <>
            <User2 />

            <select className='flex p-3'
                onClick={(val) => handleSelect(val)}

            >
                {
                    Data?.map((val, index) => {

                        return (
                            <>

                                <option
                                    key={val.id + ' ' + 1 + index}
                                    value={val.user} >
                                    {val.user}
                                </option>
                            </>
                        )
                    })
                }
            </select>
        </>
    )
}

export default UserDropDown