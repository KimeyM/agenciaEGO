import axios from "axios";
export const GET_CARS = "GET_CARS";
export const ORDER_CARS = "ORDER_CARS";
export const SEDAN_HATCHBACK = "SEDAN_HATCHBACK";
export const PICKUPS = "PICKUPS";
export const SUVS = "SUVS";
export const PRODUCT_DETAIL = "PRODUCT_DETAIL";


export function getCars() {
    return async function (dispatch) {
        var allCars = await axios.get('https://challenge.agenciaego.tech/api/models/');
        return dispatch ({
            type: GET_CARS,
            payload: allCars.data
        });
    };
};

export function orderCars(payload) {
    return {
        type: ORDER_CARS,
        payload
    };
};

export function sedanHatchback() {
    return {
        type: SEDAN_HATCHBACK
    };
};

export function pickups() {
    return {
        type: PICKUPS
    };
};

export function suvs() {
    return {
        type: SUVS
    };
};

export function productDetail(id) {
	return async function (dispatch) {
		try {
			let json = await axios.get(`https://challenge.agenciaego.tech/api/models/${id}`);
			return dispatch({
				type: PRODUCT_DETAIL,
				payload: json.data,
			});
		} catch (error) {
			console.log(error);
		}
	};
}