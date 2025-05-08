import { LogOut, User, User2 } from 'lucide-react'
import React, { useContext, useEffect, useState } from 'react'
import { themes } from '../../db';
import UserContext from '../../context/userContext';
import { darkTheme, lightTheme, useThemeContext } from '../../context/themeContext';

const ThemeDropDown = () => {

    const [Data, setData] = useState(themes)
    const { setCurrentTheme } = useThemeContext()

    const handleSelect = (val) => {
        let theme = val?.target?.value || val
        setCurrentTheme(() => theme === "light" ? lightTheme : darkTheme);
    };


    return (
        <>
            <User2 />

            <select className='flex p-3  bg-neutral-900'
                onClick={(val) => handleSelect(val)}
            >
                {
                    Data?.map((val, index) => {

                        return (
                            <>

                                <option
                                    key={1 + index}
                                    value={val} >
                                    {val}
                                </option>
                            </>
                        )
                    })
                }
            </select>
        </>
    )
}

export default ThemeDropDown