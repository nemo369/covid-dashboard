import React, { createContext, Component } from 'react';
import {  NUM_OF_COUNTRIES, DATA_TYPES } from '../const/const';

export const DataContext = createContext();

class DataContextProivder extends Component {
    state = {
            dataType:  JSON.parse(localStorage.getItem('dataType'))  || {...DATA_TYPES[0]},
            dataTypes:[...DATA_TYPES],
            numOfCountries:NUM_OF_COUNTRIES,
            country: null
      }
   
    changeDataType = (dataType) => {
        localStorage.setItem('dataType',JSON.stringify(dataType))
        this.setState({dataType})
        }
    setCountry = (country) => {
        this.setState({country})
        }
    render() { 
        return ( 
            <DataContext.Provider value={{...this.state, toglleData: this.changeDataType, changeCountry: this.setCountry}}>
                {this.props.children}
            </DataContext.Provider>
         );
    }
}
 
export default DataContextProivder;