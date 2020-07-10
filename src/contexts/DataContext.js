import React, { createContext, Component } from 'react';
import {  NUM_OF_COUNTRIES, DATA_TYPES } from '../const/const';

export const DataContext = createContext();

class DataContextProivder extends Component {
 
    state = {
            dataType: {...DATA_TYPES[0]},
            dataTypes:[...DATA_TYPES],
            numOfCountries:NUM_OF_COUNTRIES
      }
   
    changeDataType = (dataType) => this.setState({dataType})
    render() { 
        return ( 
            <DataContext.Provider value={{...this.state, toglleData: this.changeDataType}}>
                {this.props.children}
            </DataContext.Provider>
         );
    }
}
 
export default DataContextProivder;