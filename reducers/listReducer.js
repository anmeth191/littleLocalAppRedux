const initialList = {
    list:[{ id: 1 , element:'Mop the floors' , date:'next Monday'},
    { id: 2 , element:'Take Garbage' , date:'Every Sunday'},
    { id: 3 , element:'Take Dog out' , date:'Every Morning'},
    { id: 4 , element:'Go to Doctor' , date:'next Week on Friday'}]
}


const listReducer = ( state = initialList , action)=>{
    if(action.type === 'DELETE_ITEM'){
        let newElement = state.list.filter( element => {
            return action.id !== element.id
        })
         
        return{ ...state,list:newElement}
}  if(action.type === 'ADD_ITEM'){
   
   // let newList = Object.assign({} , state.list,...state.list,{id:5 , element:action.element , date:action.date})
   let newList = state.list.concat({id:state.list.length + 1 , element:action.element , date:action.date})
    return{...state , list:newList}
}   
    return state
    
}

export default listReducer;