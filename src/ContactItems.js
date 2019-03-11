import React, {Component} from "react";

class ContactItems extends Component
{
    createTask(item){
        return <li key={item.key}>{item.text}</li>
    }


render() 
{
    var todoEntries = this.props.entries;
    var listItems = todoEntries.map(this.createTasks);
 
    return (
      <ul className="theList">
          {listItems}
      </ul>
    );
}
};
 
export default TodoItems;