import { NUM_OF_COUNTRIES } from "../const/const"

export const topCases = ( countries ) =>{
    if(!countries){
        return []
    }
    const byDate =[...countries].sort((a,b) => new Date(b.date) - new Date(a.date));
    const noDuplicate = uniqeBy(byDate, `country_territory_code`)
    const byCases =[...noDuplicate].sort((a,b) => b.confirmed_cases -a.confirmed_cases)
    return byCases.slice( 0, NUM_OF_COUNTRIES )

}
export const topIncrease = ( countries ) =>{
    if(!countries){
        return []
    }
    return countries.slice( 0, NUM_OF_COUNTRIES )

}
export const topStable = ( countries ) =>{
    if(!countries){
        return []
    }
    return countries.slice( 0, NUM_OF_COUNTRIES )

}



export const uniqeBy = (array, key) =>{
    return array.filter((obj, pos, arr) => {
        return arr.map(mapObj => mapObj[key]).indexOf(obj[key]) === pos;
    });
}