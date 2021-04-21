import React from 'react';
import { connect } from 'react-redux';

class DisplayElement extends React.Component{
deleteElement = ()=>{
    const { id } = this.props;
    this.props.deleteItem(id)
    this.props.history.push('/');
}

    render(){
        const { action , date } = this.props.listElement;
        return(<div><h3>{action}</h3> <h4>{date}</h4> <button onClick={this.deleteElement}>Delete Item</button></div>)
    }
}

const setPropsToMap = (state , ownProps) =>{
 const { id } = ownProps.match.params;
 return { listElement: state.list.find( element => { return element.id === parseInt(id)}) , id: parseInt(id)}
}

const disptachAction = (dispatch)=>{
    return { deleteItem: (idUser)=>{dispatch({type:'DELETE_ITEM' , id: idUser})}}
}
export default connect(setPropsToMap , disptachAction)(DisplayElement);