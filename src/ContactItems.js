import React, {Component} from "react";
import "./ContactItems.css";

class ContactItems extends Component
{
    constructor(props)
    {
        super(props);

        this.createTask=this.createTask.bind(this);
    }

    delete(key) 
    {
        this.props.delete(key);
    }

    createTask(item){
        return <div className="uk-card uk-border-rounded uk-card-secondary uk-margin">
        <li className="uk-margin-left" key={item.key}>
            <div>
                <b>{item.text}</b>
                <div className="uk-align-right" onClick={() => this.delete(item.key)} > 
                    <span className="uk-icon-button uk-margin-right" uk-icon="trash"></span>
                </div>
            </div>
            {item.num}
        </li>
        </div>
    }


    render() {
        var contactEntries = this.props.entries;
        var listItems = contactEntries.map(this.createTask);
    
        return (
        <ul className="uk-list uk-list-large uk-list-striped">
            {listItems}
        </ul>
        );
    }
};
 
export default ContactItems;