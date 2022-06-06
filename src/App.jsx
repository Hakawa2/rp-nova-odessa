import { useState } from 'react';
import './app.css';

import { MaleMenus, FemaleMenus } from './helpers/constants';

function App() {
  const [openMenu, setOpenMenu] = useState({ menuName: '', isOpen: false });
  const [selectCategory, selectedCategory] = useState({ pathName: '', imgPrefix: '', categoryPath: '', name: '' });
  const [array, setArray] = useState([]);

  const handleMenu = (menuName, isOpen) => {
    setOpenMenu({ menuName, isOpen })
  }

  const handleSelectCategory = (pathName, imgPrefix, categoryPath, quantity, name ) => {
    selectedCategory({pathName, imgPrefix, categoryPath, name});
    handleMenu('', false);
    setArray(Array.from(Array(quantity).keys()));
  }


  return (
    <div className="App">
      <header className="App-header">
        <div className='male-menu'>
          <span className='menu-indicator' onClick={() => handleMenu('male-menu', true)}>{MaleMenus.menuName}</span>
          {openMenu.menuName === 'male-menu' && openMenu.isOpen && 
            <ul>
              {MaleMenus.children.map((item) => (
                <li onClick={() => handleSelectCategory(MaleMenus.pathName, MaleMenus.imgPrefix, item.path, item.value, item.name)}>{item.name}</li>
              ))}
            </ul>}
        </div>
        <span className='separator'>|</span>
        <div className='female-menu'>
          <span className='menu-indicator' onClick={() => handleMenu('female-menu', true)}>{FemaleMenus.menuName}</span>
          {openMenu.menuName === 'female-menu' && openMenu.isOpen && 
            <ul>
              {FemaleMenus.children.map((item) => (
                <li onClick={() => handleSelectCategory(FemaleMenus.pathName, FemaleMenus.imgPrefix, item.path, item.value, item.name)}>{item.name}</li>
              ))}
            </ul>}
        </div>
      </header>
      {selectCategory.categoryPath && (
        <div className='disclaimer'>
          <h1>Essa é a categoria {selectCategory.name}</h1>
          <span>Para utilizar só mentalizar no "T" /nome da categoria e id da vestimenta exemplo</span>
          <span>/{selectCategory.name.toLocaleLowerCase()} 2</span>
        </div>
      )}
      {selectCategory.categoryPath && <div className='content'>
          {array.map((index) => (
             <div className='assets-container' key={index}>
              <img src={`../images/${selectCategory.categoryPath}/${selectCategory.pathName}/${selectCategory.imgPrefix}(${index}).jpg`} />
              <p>Id: {index}</p>
            </div>
          ))}
      </div>}
      <iframe 
        src="https://iframetester.com/" 
        loading="lazy" 
        allowFullScreen
        title="W3Schools Free Online Web Tutorials" />
    </div>
  )
}

export default App
