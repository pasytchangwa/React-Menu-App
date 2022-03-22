import React, {useState} from "react";
import data from './data';
import Menu from "./component/Menu";
import Types from "./component/Types";
const allCategories = ['all', ...new Set(data.map((x) => x.category))];

function App() {
  const [menu, setMenu] = useState(data)
  const [categories, setCategories] = useState(allCategories);

  
  const handleClick = (value) => {
    if (value === 'all') {
      setMenu([...data]);
      return;
    }
    const newMenu = data.filter((y) => y.category === value)
    setMenu([...newMenu]);
  };

  return (
    <main>
      <section className="menu-section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline" />
        </div>
          <Types handleClick={handleClick} categories={categories} />
        <div className="section-center">
      {menu.map((food) => {
        return <Menu key={food.id} {...food}/>
      })}
        </div>
      </section>
    </main>
  );
}

export default App;
