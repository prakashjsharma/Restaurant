import React from 'react'

const NavbarCategory = ({ filterData, UniqueMenuList }) => {
    return (
        <>
            <nav className='navbar'>
                <div className='btn-group'>
                    {UniqueMenuList.map((currElem) => {
                        return (
                            <button className='btn-group__item'
                                onClick={() => filterData(currElem)}>
                                {currElem}
                            </button>
                        )
                    })}
                </div>
            </nav>
        </>
    )
}

export default NavbarCategory
