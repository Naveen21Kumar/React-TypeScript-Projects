type CategoriesProps = {
  categories: string[];
  filterItems: (category: string) => void;
};

const Categories = ({ categories, filterItems }: CategoriesProps) => {
  return (
    <div className='btn-container'>
      {categories.map((category: string) => (
        <button
          className='btn'
          key={category}
          onClick={() => filterItems(category)}>
          {category}
        </button>
      ))}
    </div>
  );
};

export default Categories;
