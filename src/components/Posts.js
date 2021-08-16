import { useParams } from 'react-router-dom';

export default function Post() {
    const { category } = useParams();
    return (
        <div>
            <div>This is the post page - {category}</div>
        </div>
    );
}
