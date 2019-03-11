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
        return <li key={item.key}>
        <div className=""><b>{item.text}</b>
        <div className="uk-align-right" onClick={() => this.delete(item.key)} > 
        <button className="deleteoption"><span uk-icon="icon:trash"></span>
        </button>
        </div>
        </div>
        {item.num}
        <br></br>
        <br></br>
        </li>
    }


render() 
{
    var contactEntries = this.props.entries;
    var listItems = contactEntries.map(this.createTask);
 
    return (
      <ul className="uk-card uk-card-secondary uk-margin-small">
         {listItems}
      </ul>
    );
}
};
 
export default ContactItems;