import React, { useState } from 'react'
import TodoList from './TodoList'
import TodoForm from './TodoForm'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Grid from '@material-ui/core/Grid'

function TodoApp() {
    const initialTodos = [
        { id: 1, task: 'Clean Fishtask', completed: false },
        { id: 2, task: 'Wash Car', completed: true },
        { id: 3, task: 'Grow Beard', completed: false },
    ];
    const [todos, setTodos] = useState(initialTodos)
    const addTodo = newTodoText => {
        setTodos([...todos, { id: 4, task: newTodoText, completed: false }])
    }
    return (
        <Paper style={{ padding: 0, margin: 0, height: '100vh', backgroundColor: '#fafafa' }} elevation={0}>
            <AppBar color='primary' position='static' style={{ height: '64px' }}>
                <Toolbar>
                    <Typography color='inherit'>
                        Todos with hooks
                    </Typography>
                </Toolbar>
            </AppBar>
            <Grid container>
                <Grid item xs={11} md={8} lg={4}>
                    <TodoForm addTodo={addTodo} />
                    <TodoList todos={todos} />
                </Grid>
            </Grid>
        </Paper>
    )
}

export default TodoApp

// -- TodoApp
//     -- TodoForm
//     -- TodoList
//         -- TodoItem