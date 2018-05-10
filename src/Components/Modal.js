import React, { Component } from 'react';

import { ModalWrapper, ModalBox, Overlay, Textarea, Input, Title, Label, Select, SaveButton, CloseButton } from '../Styles/Modal'
import { checkRule } from '../Constants/Rules';

export default class Modal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: props.task ? props.task.nameTask : '',
            discription: props.task ? props.task.discription : ''
        }
    }

    onChange = () => {
        const { addTask, changeTask, task } = this.props,
        { name, discription } = this.state,
        boardId = this.select.value;
        if (boardId === task.board) changeTask(boardId, {...task, nameTask: name, discription})
        else addTask(boardId, {nameTask: name, discription})(task)
    }
    onCreat = () => {
        const { addTask } = this.props,
        { name, discription } = this.state,
        boardId = this.select.value;
        
        addTask(boardId, {nameTask: name, discription})()
    }
    render() {
        const { boards, task, toggleModal } = this.props,
        { name, discription } = this.state;

        return (
            <ModalWrapper visible>
                <ModalBox>
                    <Title > { task ? 'Cange Task' : 'New Task'}</Title>
                    <CloseButton onClick={toggleModal} />
                    <Label for="name">Name:</Label>
                    <Textarea name="name"
                        size="50px"
                        defaultValue={name} 
                        onChange={(e) => this.setState({ name: e.target.value})}/>

                    <Label for="discription">Discription:</Label>
                    <Textarea name="discription" 
                        defaultValue={discription} 
                        onChange={(e) => this.setState({ discription: e.target.value})}/>

                    <Select innerRef={x =>  this.select = x } 
                    defaultValue={task ? task.board : boards[0].id}>

                    { task ? 
                        boards.filter((item) => checkRule(task.board, item.id)).map((item, i) => <option key={item.id} value={item.id}>{item.name}</option>)
                        :
                        boards.map((item, i) => <option key={item.id} value={item.id}>{item.name}</option>)}
                    </Select>

                    { (name.length && discription.length) || task  ? 
                        <SaveButton onClick={task ? this.onChange : this.onCreat}>Save</SaveButton> 
                        : 
                        <SaveButton disabled >Save</SaveButton> }
                </ModalBox>
                <Overlay onClick={toggleModal}/>
            </ModalWrapper>
        )
    }
}