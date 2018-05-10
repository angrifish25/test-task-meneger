import React, { Component } from 'react';

import { BoardCol, Header, Body, AddButton } from '../Styles/Board';
import { checkRule } from '../Constants/Rules';
import Task from './Task';

export default class Board extends Component {

    state = {
       warning: false
    }

    onDragEnter = (event) => {
        event.preventDefault();
        const { drag } = this.props
        
        if(!checkRule(drag.dragTask.board, this.props.id)) {
            this.setState({
                warning: true
            })
        } 
    }
    onDragLeave = (event) => {
        event.preventDefault();
        this.setState({
            warning: false
        }) 
    }

    onDragDrop = (event) => {
        event.preventDefault();
        const { drag, addTask } = this.props;

        if(checkRule(drag.dragTask.board, this.props.id)) {
            addTask(drag.dragTask)
        }
        this.setState({
            warning: false
        })
    }

    onDragOver(event) {
        event.preventDefault()
    }

    render() {
        const { name, id, addTask, removeTask, changeNameTask, tasks, drag, toggleModal } = this.props,
        { warning } = this.state;

        return (
            <BoardCol warning={warning} 
                onDragLeave={this.onDragLeave} 
                onDragEnd={this.onDragLeave} 
                onDragOver={this.onDragOver} 
                onDragEnter={this.onDragEnter} 
                onDrop={this.onDragDrop}>
                
                <Header>
                    <span>{name}</span>
                    <AddButton onClick={addTask}/>
                </Header>
                <Body>
                    {tasks.map((item, i) => 
                        <Task 
                            key={i} changeNameTask={changeNameTask} 
                            toggleModal={toggleModal} 
                            removeTask={removeTask} 
                            board={id} 
                            onDrag={drag.onDrag} 
                            {...item}/>
                        )}
                </Body>
            </BoardCol>
        )
    }
}