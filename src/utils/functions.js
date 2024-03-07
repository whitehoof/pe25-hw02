

export const getItemsFromLS = ( key ) => {
	return JSON.parse(localStorage.getItem(key)) || [];
}