//create an array as initial state to display elements in the DOM 
const initialList = {
    list:[{ id: 1 , element:'Mop the floors' , date:'next Monday'},
    { id: 2 , element:'Take Garbage' , date:'Every Sunday'},
    { id: 3 , element:'Take Dog out' , date:'Every Morning'},
    { id: 4 , element:'Go to Doctor' , date:'next Week on Friday'}]
}


//create the reducer and send the state and action params , the state is like the storage and the action is to
//disptach and action and update the state 
const listReducer = ( state = initialList , action)=>{
    //if the action type  is delete item it returns a new array of  objects 
    //ALWAYS REMEMBER TO DO NOT MUTATE THE STATE ALWAYS CREATE A NEW OBJECT OR ARRAY AND RETURN IT
    if(action.type === 'DELETE_ITEM'){
        // filter returns an new array with all the elements that match the criteria 
        //in this case the ids that are different at the one i want to delete
        let newElement = state.list.filter( element => {
            return action.id !== element.id
        })
         
        return{ ...state,list:newElement}
}  else if(action.type === 'ADD_ITEM'){
      
    //in this case concat returns a new onbejct and add it to tthe statelist , and with the spread operator//
    //we will add the rest of the elements in the array
    const newItem = state.list.concat({id:state.list.length + 1 , element:action.element , date:action.date})
    
    return{
        ...state , list:newItem
    }

} 
      
return state    
}

export default listReducer;//export the list reducer