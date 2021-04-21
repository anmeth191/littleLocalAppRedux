import React from 'react'

class AddElement extends React.Component{
 state={ element:'', date:''}

 myChangeHandler = (event)=>{

let el = event.target.name;
let value = event.target.value;
this.setState({[el] : value})

}



handleSubmit = (event)=>{
event.preventDefault();
}


render(){
    console.log(this.state.date);
    return(
        <div>
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="enter element" name="element" onChange = {this.myChangeHandler} />
                <input type="text" placeholder="enter your date" name="date" onChange = {this.myChangeHandler} />
                <input type="submit" value="add element"/>
            </form>
            </div>
    )
}


}

export default AddElement;