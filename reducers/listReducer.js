const initialList = {
    list:[{ id: 1 , action:'Mop the floors' , date:'next Monday'},
    { id: 2 , action:'Take Garbage' , date:'Every Sunday'},
    { id: 3 , action:'Take Dog out' , date:'Every Morning'},
    { id: 4 , action:'Go to Doctor' , date:'next Week on Friday'}]
}


const listReducer = ( state = initialList , action)=>{
    if(action.type === 'DELETE_ITEM'){
        let newElement = state.list.filter( element => {
            return action.id !== element.id
        })
         
        return{ state,list:newElement}
}
    return state
    
}

export default listReducer;