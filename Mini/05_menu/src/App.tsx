import { useState } from 'react';
import './App.css';
import menu from './data';
import MenuItems from './MenuItems';
import Categories from './Categories';

const allCategories = ['all', ...new Set(menu.map((item) => item.category))];

function App() {
  const [menuItems, setMenuItems] = useState(menu);

  const filterItems = (category: string) => {
    if (category === 'all') {
      setMenuItems(menu);
      return;
    }

    const newItems = menu.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className='menu'>
        <div className='title'>
          <h2>Our Menu</h2>
          <div className='title-underline'></div>
        </div>

        <Categories categories={allCategories} filterItems={filterItems} />
        <MenuItems items={menuItems} />
      </section>
    </main>
  );
}

export default App;
