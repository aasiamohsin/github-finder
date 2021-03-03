import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Search extends Component {
    state = {
        text: ''
    }

    static propTypes = {
        btnText: PropTypes.string.isRequired,
        onSearch: PropTypes.func.isRequired,
        onClickClear: PropTypes.func.isRequired,
        showClear: PropTypes.bool.isRequired,
        showAlert: PropTypes.func.isRequired,
    }

    onChange = e => this.setState({[e.target.name]: e.target.value})
    onSubmit = e => {

        e.preventDefault()

        if(!this.state.text){
            this.props.showAlert('Please enter username')
        }
        else {
            this.props.onSearch(this.state.text)
            this.setState({ text: '' })
        }
    }
    render() {
        const { onClickClear, showClear, btnText } = this.props
        return (
            <div className = 'form'>
                <form onSubmit = {this.onSubmit}>
                    <input type="text"  name = 'text' placeholder = 'Search Users Profile'
                       value = {this.state.text}
                       onChange = {this.onChange}
                    />
                    <button className = 'search-btn' type = 'submit'><i className="fas fa-search"></i></button>
                </form>
                {
                 showClear &&
                <button className= 'clear-btn' onClick = {onClickClear}>{btnText}</button>
                }
            </div>
        )
    }
}