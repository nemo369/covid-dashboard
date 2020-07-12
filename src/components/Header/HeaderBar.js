import React, { useContext } from 'react';
import { DataContext } from '../../contexts/DataContext';
import Icon from './Icon';
const HeaderBar = () => {
  const { dataType,dataTypes ,numOfCountries, toglleData} = useContext(DataContext);

    return ( 
      <header>
        <nav className="nav">
          <ul className="flex nav__ul">
            {
              dataTypes.map(data =>(
              <li className={dataType.id ===data.id ? 'active nav__li' : 'nav__li'} key={data.id}>
                <button onClick={()=>toglleData(data)}>Top {numOfCountries} countries:<br/> {data.text}</button>
                </li>
              ))
            }
          </ul>
        </nav>
        <h1 className="flex"><Icon/><span>Covid-19 Dashboard:</span></h1>
      </header>
     );
  }

  export default HeaderBar;
 

