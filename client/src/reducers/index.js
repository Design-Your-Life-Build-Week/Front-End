const initialState = {
    categories: [
        {name: "fitness",
        activities: [
            {"name": "Running", dateCreated: "09212019", starRating: 5, id: 456},
            {"name": "Swimming", dateCreated: "09212019", starRating: 5, id: 456},
            {"name": "Zumba", dateCreated: "09302019", starRating: 5, id: 456}
        ],
        dateCreated: '',
        id: 123
        },
    ],
 
}

function reducer(state = initialState, action) {
    switch(action.type){
        default:
            return state;
    }
}

export default reducer;