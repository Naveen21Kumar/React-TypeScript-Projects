import data from './data';

interface CategoriesProps {
  filterMenuItems: (category: string) => void;
}

const Categories = ({ filterMenuItems }: CategoriesProps) => {
  const categories = data.map((menu) => menu.category);
  const uniqueCategories = ['all', ...new Set(categories)];

  return (
    <div className='btn-container'>
      {uniqueCategories.map((category) => {
        return (
          <button
            type='button'
            className='btn'
            key={category}
            onClick={() => filterMenuItems(category)}>
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
