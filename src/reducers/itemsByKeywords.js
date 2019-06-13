const initState = {
    searchByKeywordsIsFetching: false,
    data: [],
    err:''
}

const itemsByKeywords = (state = initState, action) => {
    switch (action.type) {
        case 'SEARCH_KW_START':
            return {
                ...state,
                searchByCtgIsFetching: true,
            }
        case 'SEARCH_KW_SUCCESS':
            return {
                ...state,
                searchByCtgIsFetching: false,
                data: action.items,
                err: ''
            }
        case 'SEARCH_CTG_FAIL':
            return {
                ...state,
                searchByCtgIsFetching: false,
                err: action.err
            }
        default:
            return state;
    }
}

export default itemsByKeywords;