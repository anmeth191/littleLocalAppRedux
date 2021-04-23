import React from 'react'
import { connect } from 'react-redux';

class AddElement extends React.Component{
  state={
    element:'',
    date:''
  }

  handleSubmit =(event)=>{
  event.preventDefault();
  const { element , date } = this.state //destructure the element and date that was storaged in this.state.elemets and date
  //call as a prop the dispatch element properti and send the parameters that are going to be dispatched to the reducer
  this.props.disptachElement(element , date)
}

  handleEvent =(event)=>{
  //set the values for each input text in the elements and date 
  //NOTE: MAKE SURE THAT THE NAMES INPUT AND IN THE STATE ARE THE SAME
    this.setState({[event.target.name]:event.target.value , [event.target.name]:event.target.value})

  }

  render(){
    return(
      <div>
       <form onSubmit={this.handleSubmit}>
         <input type="text" name="element" placeholder="enter the task here" onChange={this.handleEvent}/>
         <input type="text" name="date" placeholder="enter when the task done" onChange={this.handleEvent}/>
         <button type="submit">Add Task</button>
         </form>
      </div>
    )
  }

}

const sendTaskToReducer = (dispatch)=>{
//dispatch the elements trought dispatchelement and add them into the reducer
  return{
   disptachElement: (element , date)=>{ dispatch({type:'ADD_ITEM' , element , date})}
  }
}
//NOTE: IF THERE IS NOT STATE TO SHOW THEN THE STATE IS NULL , AND THE DISPTACH IS NEX T
//IF YOU ONLY PUT THE DISPATCH THEN YOU GET AN ERROR THAT DISPATCH DOES NOT EXIST


export default connect(null,sendTaskToReducer)(AddElement);