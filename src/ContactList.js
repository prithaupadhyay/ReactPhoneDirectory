import React, { Component } from "react";
import "./ContactList.css"
import ContactItems from "./ContactItems"
 
class ContactList extends Component 
{
    constructor(props) 
    {
        super(props);
        this.state = {
            items: []
        };
     
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    addItem(e)
    {
        if(this._inputElement.value!=="")
        {
            var newItem ={
                text: this._inputElement.value,
                num: this._inputElement2.value,
                key: this._inputElement2.value,
            };

            this.setState((prevState) => {
                return {
                    items: prevState.items.concat(newItem)
                };
            });
    
            this._inputElement.value="";
            this._inputElement2.value="";
        }

        console.log(this.state.items);
        e.preventDefault();
         
    }

    deleteItem(key) 
    {
        var filteredItems = this.state.items.filter(function (item) {
          return (item.key !== key);
        });
       
        this.setState({
          items: filteredItems
        });
    }

    render() 
    {
        return (
            <div className="ContactListMain">
                <div className="header">
                    <form id="formfield" onSubmit={this.addItem}>
                        <input type="text" pattern="[a-zA-Z0-9 ]+" id="inputfield" ref={(a) => this._inputElement = a} placeholder="Enter Contact Name">
                        </input>
                        <br></br>
                        <input type="number" min="1111111111" max="9999999999" id="inputfieldnum" ref={(b) => this._inputElement2 = b} placeholder="Contact Number"></input>
                        <br></br>
                        <button type="submit">Add Contact</button>
                    </form>
                </div>
                <ContactItems entries={this.state.items} delete={this.deleteItem}/>
            </div>
        );
    }
}
 
export default ContactList;