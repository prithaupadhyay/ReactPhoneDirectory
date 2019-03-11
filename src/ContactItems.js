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
        return <li key={item.key}><b>{item.text}</b><br></br>{item.num}
        <div className="deletebody" onClick={() => this.delete(item.key)} > 
        <button className="deleteoption">Delete</button></div>
        </li>
    }


render() 
{
    var contactEntries = this.props.entries;
    var listItems = contactEntries.map(this.createTask);
 
    return (
      <ul className="theList">
          {listItems}
      </ul>
    );
}
};
 
export default ContactItems;