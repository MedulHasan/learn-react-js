import { useState } from 'react';

function Todo() {
    const [todo, setTodo] = useState({
        title: '',
        description: '',
    });
    // const [warning, setWarning] = useState(null);

    /* const handleInput = (e) => {
        const inputValue = e.target.value;
        const updatedwarning = inputValue.includes('.js')
            ? 'You need JavaScript skill to complete the task. Do You Have it?'
            : null;
        setTodo(inputValue);
        setWarning(updatedwarning);
    }; */

    const { title, description } = todo;
    return (
        <div>
            <p>{title}</p>
            <p>
                <input
                    type="text"
                    value={title}
                    onChange={(e) =>
                        setTodo({
                            ...todo,
                            title: e.target.value,
                        })
                    }
                />
            </p>
            <p>
                <textarea
                    name="todo"
                    value={description}
                    onChange={(e) =>
                        setTodo({
                            ...todo,
                            description: e.target.value,
                        })
                    }
                />
            </p>
            {/* <h2>{warning || 'Good Choice!'}</h2> */}
        </div>
    );
}

export default Todo;
