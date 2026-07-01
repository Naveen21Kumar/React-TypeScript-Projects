import './App.css';
import { useState } from 'react';
import data from './data';
import Title from './Title';
import Categories from './Categories';
import Menu from './Menu';
import type { MenuProps } from './types';

function App() {
  const [menu, setMenu] = useState<MenuProps[]>(data);

  const filterMenuItems = (category: string) => {
    if (category === 'all') {
      setMenu(data);
      return;
    }
    const filteredItems = data.filter((item) => item.category === category);
    setMenu(filteredItems);
  };

  return (
    <main>
      <section className='menu'>
        <Title title='our menu' />
        <Categories filterMenuItems={filterMenuItems} />
        <Menu menu={menu} />
      </section>
    </main>
  );
}

export default App;
