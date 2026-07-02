import MenuItem from './MenuItem';
import type { MenuComponentProps } from './types';

const Menu = ({ menu }: MenuComponentProps) => {
  return (
    <div className='section-center'>
      {menu.map((menuItem) => {
        return <MenuItem {...menuItem} key={menuItem.id} />;
      })}
    </div>
  );
};

export default Menu;
