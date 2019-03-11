import React, {Component} from "react";
import "./ContactItems.css";

class ContactItems extends Component
{
    createTask(item){
        return <li key={item.key}>{item.text}
        <div class="deletebody"> 
        <button class="deleteoption">Delete</button></div>
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