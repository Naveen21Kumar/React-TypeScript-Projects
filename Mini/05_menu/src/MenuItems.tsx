import MenuItem from './MenuItem';
import type { Menu } from './types';

const MenuItems = ({ items }: { items: Menu[] }) => {
  return (
    <div className='section-center'>
      {items.map((item) => {
        return <MenuItem {...item} key={item.id} />;
      })}
    </div>
  );
};

export default MenuItems;
