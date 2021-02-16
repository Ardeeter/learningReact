import { addTodo } from '../redux/actions/todos'
import { connect } from 'react-redux'
import Forms from './Forms';


function mapState(state){
    return {
        todos: state.todos
    }
}

function mapDispatch(dispatch){
    return {
        addTodo: (value) => dispatch(addTodo(value))
    }
}

export default connect(mapState, mapDispatch)(Forms)