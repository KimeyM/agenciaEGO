import { GET_CARS, ORDER_CARS, SEDAN_HATCHBACK, PICKUPS, SUVS, PRODUCT_DETAIL } from "./actions";
const initialState = {
  cars: [],
  allCars: [],
  details: [],
  detailsFeatures: [],
  detailsHighlights: [],
}
  
export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_CARS:
            return {
                ...state,
                cars: action.payload,
                allCars: action.payload,
            };
        case PRODUCT_DETAIL:
            return {
              ...state,
              details: action.payload,
              detailsFeatures: action.payload.model_features,
              detailsHighlights: action.payload.model_highlights,
            };
        case ORDER_CARS:
            let sortedCars =
            action.payload === 'price_asc' ?
              state.cars.sort(function (a, b){
                if (a.price > b.price) return 1;
                if (b.price > a.price) return -1;
                return 0;
              }) :
            action.payload === 'price_desc' ?
              state.cars.sort(function (a, b){
                if (a.price > b.price) return -1;
                return 0;
              }) :
            action.payload === 'oldest' ?
              state.cars.sort(function (a, b){
                if (a.year > b.year) return 1;
                if (b.year > a.year) return -1;
                return 0;
              }) :
            action.payload === 'newest' ?
              state.cars.sort(function (a, b){
                if (a.year > b.year) return -1;
                return 0;
              }) :
              state.cars.sort(function (a, b){
                if (a.id > b.id) return 1;
                if (b.id > a.id) return -1;
                return 0;
              })
            return {
              ...state,
              cars: sortedCars
            };
        case SEDAN_HATCHBACK:
          let sedan = state.allCars.filter(car => car.segment === 'Sedan' || car.segment === 'Hatchback');
          return {
            ...state,
            cars: sedan
          };
        case PICKUPS:
          let pickups = state.allCars.filter(car => car.segment === 'Pickups y Comerciales');
          return {
            ...state,
            cars: pickups
          };
          case SUVS:
            let suvs = state.allCars.filter(car => car.segment === 'SUVs');
            return {
              ...state,
              cars: suvs
            };
        default:
            return state;
    }
}