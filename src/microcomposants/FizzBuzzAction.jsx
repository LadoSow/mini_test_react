import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class FizzBuzzAction extends Component{    
    onFormActionClic = e => {
        if(e.target.value === "0"){
            var newAction = 1;
            this.props.onPropsChange(e.target.id, newAction);
        } else if (e.target.value === "1") {
            newAction = 0;
            this.props.onPropsChange(e.target.id, newAction);
        }
    };

    label(){
        const {action} = this.props;  
        return action===0 ? "Afficher FizzBuzz Nouvelle Exigence":"Afficher FizzBuzz Normal"
    }
    style(){
        const {action} = this.props;  
        return action===0 ? "btn-primary":"btn-info"
    }

    render() {
        const {action} = this.props;
        return (
        <div className="fizz-buzz-form">
            <div className="form-row">
            <div className="col">
                <button className={"btn btn-block " + this.style()} id="action" value={action} onClick={e => this.onFormActionClic(e)}> 
                    {this.label()}
                </button>
            </div>
            </div>
        </div>
        );
    }
}

FizzBuzzAction.propTypes = {
    action: PropTypes.number
};