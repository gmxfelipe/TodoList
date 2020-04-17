import React, { Component } from 'react'

export class AddTodo extends Component {
    state = {
        title: ''
    }

    onChange = (e) => this.setState


    render() {
        return (
            <div>
                <form style={{ display: 'flex' }}> 
                    <input 
                    type="text" 
                    name="title" 
                    style={{ flex: '10', padding: '5px' }}
                    placeholder="Adicione um item..." 
                    value={this.state.title}
                    onChange={this.onChange}
                    />

                    <input 
                    type="submit" 
                    value="Enviar" 
                    className="btn"
                    style={{ flex: '1' }}
                    />
                </form>
            </div>
        )
    }
}

export default AddTodo
