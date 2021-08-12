import { useEffect, useState } from 'react';

export default function GetPost() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [post, setPost] = useState({});

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then((response) => response.json())
            .then((data) => {
                setLoading(false);
                setError('');
                setPost(data);
            })
            .catch(() => {
                setLoading(false);
                setError('There was an error!');
                setPost({});
            });
    }, []);

    return (
        <div>
            {loading ? 'loading...' : post.title}
            {error || null}
        </div>
    );
}
