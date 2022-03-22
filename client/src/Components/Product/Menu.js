import React from 'react';

const Menu = (props) => {
    const { icon, title, desc } = props;
    
    return (
        <div className="box-border flex flex-col items-center justify-center p-4 space-y-3 transition duration-700 ease-in-out transform bg-white border border-gray-200 hover:shadow-xl hover:scale-105 rounded-xl">
            <img className="w-24" src={icon} alt={title} />
                <h1 className="text-xl font-black text-center text-black poppins">{title}</h1>
            <p className="text-center text-gray-500">{desc.slice(0, 70)}</p>
        </div>
    )
}

export default Menu;
