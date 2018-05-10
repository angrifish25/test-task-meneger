import React, { Component } from 'react';

import Board from './Board';
import Modal from './Modal';
import { BoardsArea, AppBox, AddButton } from '../Styles/App'

export default class App extends Component {
    state = {
        boards: [{
            name: 'New',
            id: 'new',
        },
        {
            name: 'Doing',
            id: 'doing',
        },
        {
            name: 'Done',
            id: 'done',
        }],
        tasks: {},
        hasEmptyTask: false,
        dragTask: null,
        modalVisible: false,
        choosenTask: null
    }

    componentWillMount() {
        const { boards, tasks } = this.state

        boards.forEach((board) => {
            tasks[board.id] = {
                tasks: []
            }
        })
    }
    addTask = (boardId, taskFromModal) => {
        const { tasks } = this.state,
        self = this;
        if (taskFromModal) {
            taskFromModal.timestamp = Date.now()
            this.toggleModal()
        }

        return function (task) {

            let oNewTask = taskFromModal;

            if (task && !task.hasOwnProperty('target')) {
                tasks[task.board].tasks = tasks[task.board].tasks.filter(item => {
                    if (item.timestamp === task.timestamp) {
                        oNewTask = oNewTask || item
                    }
                    return item.timestamp !== task.timestamp
                })
            }

            tasks[boardId].tasks.push(
                oNewTask ? oNewTask 
                :
                {
                    nameTask: '', 
                    discription: '',
                    timestamp: Date.now()
                }
            )
            self.setState({
                tasks,
                hasEmptyTask: true
            })
        }
    }
    onDrag = (task) => {
        this.setState({
            dragTask: task
        })
    }
    onDrop = (task) => {
        this.setState({
            dragTask: null
        })
        
    }
    removeTask = (boardId, timestamp) => {
        const { tasks } = this.state

        tasks[boardId].tasks = tasks[boardId].tasks.filter((item) => item.timestamp !== timestamp)
        this.setState({
            tasks
        })
    }

    changeTask = (boardId, oTask) => {
        const { tasks } = this.state

        tasks[boardId].tasks.forEach((item) => {
            if(item.timestamp === oTask.timestamp) {
                item.nameTask = oTask.nameTask
                item.discription = oTask.discription
            }
        })
        this.setState({
            tasks
        }, () => this.toggleModal())
    }
    changeNameTask = (boardId) => {
        const { tasks } = this.state,
        self = this;
        return function (timestamp, newName) {
            if (newName.length) {
                tasks[boardId].tasks.forEach((item) => {
                    if(item.timestamp === timestamp) item.nameTask = newName
                })
            } else tasks[boardId].tasks = tasks[boardId].tasks.filter((item) => item.timestamp !== timestamp)
            self.setState({
                tasks,
                hasEmptyTask: false
            })
        }
    }
    toggleModal = (choosenTask) => {
        const { modalVisible } = this.state
        this.setState({ modalVisible: !modalVisible, choosenTask: !choosenTask || choosenTask.hasOwnProperty('target') ? null : choosenTask })
    }
    render() {
        const { boards, tasks, dragTask, modalVisible, choosenTask } = this.state
        return (
            <AppBox>
                <AddButton onClick={this.toggleModal}>Add task</AddButton>
                <BoardsArea>
                    {boards.map((board, i) => 
                        <Board 
                            key={i}  
                            {...tasks[board.id]}
                            name={board.name}
                            id={board.id}
                            addTask={this.addTask(board.id)}
                            removeTask={this.removeTask}
                            toggleModal={this.toggleModal}
                            drag={{dragTask, onDrag: this.onDrag, onDrop: this.onDrop}}
                            changeNameTask={this.changeNameTask(board.id)}/>
                        )
                    }
                </BoardsArea>
                { modalVisible ? 
                    <Modal 
                    boards={boards} 
                    toggleModal={this.toggleModal} 
                    changeTask={this.changeTask} 
                    addTask={this.addTask} 
                    task={choosenTask}/> 
                    
                    : null 
                }
            </AppBox>
        )
    }
}