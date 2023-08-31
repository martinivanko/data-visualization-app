import React from 'react';
import { Typography } from 'antd';
const { Title } = Typography;

const styles = {
    card: {
        border: '1px solid #F0EFEF',
        borderRadius: '7px',
        padding: '20px 15px 7px'
    },
    cardTitle: {
        fontSize: '20px',
        fontWeight: 'bold',
        margin: 0
    }
} as { [key: string]: React.CSSProperties };

interface ICardProps {
    title: string;
    children?: React.ReactNode;
}

export const Card: React.FC<ICardProps> = (props) => {
    const { title, children } = props;
    return (
        <div style={styles.card}>
            <Title style={styles.cardTitle}>{title}</Title>
            {children}
        </div>
    );
};
