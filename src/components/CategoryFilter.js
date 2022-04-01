import React from "react";

function CategoryFilter({ categories, handleClick, filter, setFilter }) {
  const renderButtons = categories.map((cat, index) => {
    const className = cat === filter ? "selected" : null;
    
    return (
      <button className={className} onClick={()=> setFilter(cat)} key={index}>
        {cat}
      </button>
    );
  });

  return (
    <div className='categories'>
      <h5>Category filters</h5>
      {renderButtons}
    </div>
  );
}

export default CategoryFilter;

// import React from "react";

// function CategoryFilter({ categories, selectedCategory, onSelectCategory }) {
//   const categoryButtons = categories.map((category) => {
//     const className = category === selectedCategory ? "selected" : null;
//     return (
//       <button
//         key={category}
//         className={className}
//         onClick={() => onSelectCategory(category)}
//       >
//         {category}
//       </button>
//     );
//   });

//   return (
//     <div className="categories">
//       <h5>Category filters</h5>
//       {categoryButtons}
//     </div>
//   );
// }

// export default CategoryFilter;
