import React, {Component} from 'react';
import "./Card.css";

class Card extends Component{
    render(){
        return(
            <div className="card" id={'card' + this.props.info.id}>
                <Header title="Character Card" />
                <Body url={this.props.info.imageURL} imgAlt="Student photo" firstName={this.props.info.firstName} 
                    lastName={this.props.info.lastName} department={this.props.info.department}/>
                <Footer handleDelete={this.props.handleDelete} studentId={this.props.info.id}/>
            </div>
        );
    }
}

function Header(props){
    return(
        <div className="card-header">
            {props.title}
        </div>
    );
}

function Body(props){
    return(
        <div className="card-body">
            <img src={props.url} alt={props.alt}/>
            <div>
                <p>Image path: {props.url}</p>
                <p>First Name: {props.firstName}</p> 
                <p>Last Name: {props.lastName}</p>
                <p>Department: {props.department}</p>
            </div>
        </div>
    );
}

function Footer(props){
    return(
        <div className="card-footer">
            <button className="btn btn-danger" onClick={props.handleDelete.bind(this, props.studentId)}>DELETE</button>
            {/*<button className="btn btn-primary" onClick={props.handleUpdate.bind(this, props.studentId)}>UPDATE</button>*/}
        </div>
    );
}


// exposes Card to other files, enabling them to import
export default Card;