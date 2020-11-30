const initialState = {
    appliedFilters: []
};

const FILTER_BY_VALUE = "FILTER_BY_VALUE";

export const filterByValue = (payload, value) => ({
    type: FILTER_BY_VALUE,
    payload,
    value
});


const filterStore = (state = initialState, action) => {
    switch (action.type) {
        case FILTER_BY_VALUE:
            let newState = Object.assign({}, state);
            let value = action.value;
            let filteredValues = action.payload.items.filter(item => {
                return item.name.toLowerCase().includes(value);
            });

            let appliedFilters = state.appliedFilters;

            if (value) {
                appliedFilters = addFilterIfNotExists(FILTER_BY_VALUE, appliedFilters);

                newState.filteredItems = filteredValues;
                newState.filteredCount = newState.filteredItems.length;
            } else {
                appliedFilters = removeFilter(FILTER_BY_VALUE, appliedFilters);

                if (appliedFilters.length === 0) {
                    newState.filteredCount = newState.filteredItems.length;
                }
            }
            return newState;
        
        default:
            return state;

    }
};

export default filterStore;

function addFilterIfNotExists(filter, appliedFilters) {
    let index = appliedFilters.indexOf(filter);
    if (index===-1) appliedFilters.push(filter);

    return appliedFilters;
}

function removeFilter(filter, appliedFilters) {
    let index = appliedFilters.indexOf(filter);
    appliedFilters.splice(index, 1);
    return appliedFilters;
}
