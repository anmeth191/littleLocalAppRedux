import React from 'react'
import { connect } from 'react-redux';

class AddElement extends React.Component{
  state = {element:'' , schedule:'' , finalElement:'' , finalSchedule:'' }
  
handleSubmit = (event)=>{
    event.preventDefault();
    const data = this.state;
    this.props.addAction(data.element , data.schedule);
    //this.setState({finalElement:data.element , finalSchedule:data.schedule})
}

handleChange = (event)=>{
    this.setState({[event.target.name]:event.target.value , [event.target.name]:event.target.value})
}

render(){
  
    return(
      <div>
          <form onSubmit={this.handleSubmit}> 
          <input type="text" name="element" onChange={this.handleChange} placeholder="Enter Text"/>
          <input type="text" name="schedule" onChange={this.handleChange} placeholder="Enter Text"/>
          <button type="submit">Submit</button>
          </form>
        </div>
    )
}
}

const setNewElementProps = (dispatch) =>{

return{ addAction: (element , date) => { dispatch({type:'ADD_ITEM' , element:element , date:date })
}//end of the addAction
}//end of the return
}//end of the function setNewElementProps

export default connect(null, setNewElementProps)(AddElement);