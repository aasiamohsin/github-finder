import React, { Component } from 'react'

export class Search extends Component {
    state = {
        text: ''
    }

    onChange = e => this.setState({text: e.target.value})
    
    render() {
        return (
            <div>
                <form className = 'form' name = 'text'>
                    <input type="text"  placeholder = 'Search Users Profile'
                        onChange = {this.onChange}
                    />
                    <button className = 'search-btn' type = 'submit'><i className="fas fa-search"></i></button>
                </form>
            </div>
        )
    }
}