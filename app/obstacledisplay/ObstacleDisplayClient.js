import React from 'react';

const ObstacleDisplayClient = ({ data }) => {
    return (
        <div>
            <h2>Data Display</h2>
            <ul>
                {data.map((item, index) => (
                    <li key={index}>
                        <strong>{item.title}</strong>: {item.description}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ObstacleDisplayClient;