import useDrupalData from '../api/api';

export default function TopHeaderMenu({ endpoint }) {
    const { data, isLoading, error } = useDrupalData(endpoint);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className="second-menu">
            <ul>
                {data?.data?.map((item) => (
                    <li key={item?.id}>
                        <a href={item?.attributes?.url}>{item?.attributes?.title}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}
