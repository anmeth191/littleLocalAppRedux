import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import AddElement from './AddElement';
class DisplayList extends React.Component{
    render(){
        return(<div>{this.props.newList.map( action =>{
            return(<div key={action.id}> <Link to={`/${action.id}`}>{action.element}</Link></div>)
        })} 
        <AddElement />
        </div>)}
}
const setPropsToMap = (state)=>{

    return{
        newList:state.list
    }
}
export default connect(setPropsToMap)(DisplayList);