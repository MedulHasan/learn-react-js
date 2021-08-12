import { useEffect, useReducer } from 'react';

const initialState = {
    loading: true,
    error: '',
    post: {},
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'SUCCESS':
            return {
                loading: false,
                error: '',
                post: action.result,
            };
        case 'FAILED':
            return {
                loading: false,
                error: 'Error Occured...',
                post: {},
            };
        default:
            return state;
    }
};

export default function GetPost2() {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicod.com/posts/1')
            .then((response) => response.json())
            .then((data) => {
                dispatch({
                    type: 'SUCCESS',
                    result: data,
                });
            })
            .catch(() => {
                dispatch({
                    type: 'FAILED',
                });
            });
    }, []);

    return (
        <div>
            {state.loading ? 'loading here...' : state.post.title}
            {state.error || null}
        </div>
    );
}
