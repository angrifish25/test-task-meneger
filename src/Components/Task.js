import React, { Component } from 'react';

import { TaskBox, RemoveButton, InputTask, LabelTask } from '../Styles/Task'

export default class Task extends Component {
    
    state = {
        isFocus: false
    }

    onBlur = () => {
        const { changeNameTask, timestamp } = this.props,
        newName = this.input.value;
        this.setState({ isFocus: false})
        changeNameTask(timestamp, newName);
    }

    onDragStart = (e) => {
        const { onDrag, board, timestamp } = this.props;
        onDrag({
            timestamp,
            board
        })
    }
    componentDidMount() {
        const { nameTask } = this.props;
        if (!nameTask.length) this.input.focus();
    }
    onClickName = (event) => {
        const { nameTask } = this.props;
        if(event.target.tagName !== 'A' && nameTask.length) {
            const { toggleModal, board, timestamp, nameTask, discription} = this.props;
            toggleModal({timestamp, nameTask, discription, board});
        }
    }
    removeTask = () => {
        const { removeTask, board, timestamp} = this.props;
        removeTask(board, timestamp);
    }
    render() {
        const { isFocus } = this.state,
              { nameTask } = this.props;

        return (
            <TaskBox draggable={!!nameTask.length || isFocus} 
            onDragStart={(e) => this.onDragStart(e, this.props.board)} 
            onClick={this.onClickName}>

                    {!nameTask.length || isFocus ? 
                        <InputTask innerRef={x =>  this.input = x } onBlur={this.onBlur}  defaultValue={nameTask} /> 
                        :
                        <LabelTask >{nameTask}</LabelTask>}
                        
                    {nameTask.length ? <RemoveButton onClick={this.removeTask}/>  : null }
            </TaskBox>
        )
    }
}