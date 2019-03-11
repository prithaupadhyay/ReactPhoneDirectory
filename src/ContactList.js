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
    }

    addItem(e)
    {
        if(this._inputElement.value!=="")
        {
            var newItem ={
                text: this._inputElement.value,
                key:Date.now()
            };

            this.setState((prevState) => {
                return {
                    items: prevState.items.concat(newItem)
                };
            });
    
            this._inputElement.value="";
        }

        console.log(this.state.items);
        e.preventDefault();
         
    }

    render() 
    {
        return (
            <div className="ContactListMain">
                <div className="header">
                    <form id="formfield" onSubmit={this.addItem}>
                        <input id="inputfield" ref={(a) => this._inputElement = a} placeholder="Enter Contact(Name-0xxxxxxxxx)">
                        </input>
                        <button type="submit">Add Contact</button>
                    </form>
                </div>
                <ContactItems entries={this.state.items}/>
            </div>
        );
    }
}
 
export default ContactList;