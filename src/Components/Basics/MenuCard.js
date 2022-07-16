import React from 'react';

const MenuCard = ({ menuData }) => {
    return (
        <>
            <section className='main-card--cointainer'>
                {menuData.map((currElement) => {
                    // Destructuring
                    const { id, category, name, description, price, image } = currElement

                    return (
                        <>
                            <div className='card-container' key={id}>
                                <div className='card'>
                                    <div className='card-body'>
                                        <span className='card-number card-circle'>{id}</span>
                                        <span className='card-author'>{category}</span>
                                        <h2 className='card-title'> {name} </h2>
                                        <span className='card-description'>
                                            {description}
                                        </span>
                                        <div className='card-read'> {price} </div>
                                        <img src={image} alt="images" className='card-media' />
                                    </div>

                                    <span className='card-tag'> Order Now </span>
                                </div>
                            </div>
                        </>
                    )
                })}
            </section>
        </>
    )
}

export default MenuCard
