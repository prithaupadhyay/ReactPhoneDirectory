import React, { Component } from "react";
import "./ContactList.css";
import ContactItems from "./ContactItems";

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
                key: Date.now(),
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
                        <input className="uk-textarea uk-align-center uk-margin-top uk-margin-remove-bottom" type="text" pattern="[a-zA-Z0-9 ]+" id="inputfield" ref={(a) => this._inputElement = a} placeholder="Enter Contact Name">
                        </input>
                        <br></br>
                        <input className="uk-input uk-align-center uk-margin-remove-top uk-margin-remove-bottom" type="tel" pattern="[0-9]{10}" id="inputfieldnum" ref={(b) => this._inputElement2 = b} placeholder="Contact Number" ></input>
                        <br></br>
                        <button type="submit" className="uk-align-center uk-button uk-button-default uk-button-secondary uk-margin-remove-top">Add Contact</button>
                    </form>
                </div>
                <ContactItems entries={this.state.items} delete={this.deleteItem}/>
            </div>
        );
    }
}
 
export default ContactList;