import { LogOut, User, User2 } from 'lucide-react'
import React, { useContext, useEffect, useState } from 'react'
import { themes } from '../../db';
import UserContext from '../../context/userContext';
import { useThemeContext } from '../../context/themeContext';

const ThemeDropDown = () => {

    const [Data, setData] = useState(themes)
    const { setTheme } = useThemeContext()

    const handleSelect = (val) => {
        let theme = val?.target?.value || val
        setTheme(theme);
    };


    return (
        <>
            <User2 />

            <select className='flex p-3  bg-primary-1 text-secondary-3'
                onClick={(val) => handleSelect(val)}
            >
                {
                    Data?.map((val, index) => {

                        return (
                            <option
                                key={1 + index}
                                value={val} >
                                {val}
                            </option>
                        )
                    })
                }
            </select>
        </>
    )
}

export default ThemeDropDown