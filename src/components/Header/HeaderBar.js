import React, { useContext } from 'react';
import { DataContext } from '../../contexts/DataContext';
const HeaderBar = () => {
  const { dataType,dataTypes ,numOfCountries, toglleData} = useContext(DataContext);

    return ( 
      <header>
        <nav className="nav">
          <ul className="flex nav__ul">
            {
              dataTypes.map(data =>(
              <li className={dataType.id ===data.id ? 'active nav__li' : 'nav__li'} key={data.id}>
                <button onClick={()=>toglleData(data)}>Top {numOfCountries} countries: {data.text}</button>
                </li>
              ))
            }
          </ul>
        </nav>
      </header>
     );
  }

  export default HeaderBar;
 

