import { Toast } from '../../../types/Toast';

import checkCircleImg from '../../../assets/images/check-circle-icon.svg';
import errorImg from '../../../assets/images/error-icon.svg';

import { Container } from './styles';
import { useEffect } from 'react';

interface ToastMessageProps {
    message: Toast;
    onRemoveToast: (toastId: number) => void;
}

export function ToastMessage({ message, onRemoveToast }: ToastMessageProps) {
    useEffect(() => {
        const toastTimeout = setTimeout(() => {
            onRemoveToast(message.id);
        }, message.duration || 1000 * 3);

        return () => {
            clearTimeout(toastTimeout);
        };
    });

    return (
        <Container
            type={message.type}
            onClick={() => onRemoveToast(message.id)}
            tabIndex={0}
            role='button'
            time={message.duration / 1000}
        >
            {message.type === 'success' && <img src={checkCircleImg} alt="" />}
            {message.type === 'error' && <img src={errorImg} alt="" />}

            <p>{message.message}</p>
        </Container>
    );
}
