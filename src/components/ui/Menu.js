import React from 'react';

const Menu = ({menuItems, alignment}) => {
  return (
    <div className={alignment === 'column' ? 'flex flex-col justify-center p-4' : 'flex justify-center space-x-4 p-4'}>
      {menuItems.map((item) => (
        <a
          className={`px-4 py-2`}
          href={item.link}
        >
          {item.label}
        </a>
      ))}
    </div>
  );
};

export default Menu;
