import { useEffect, useState, useCallback } from 'react';

import { Toast } from '../../../types/Toast';
import { ToastEvent } from '../../../types/ToastEvent';
import { toastEventManager } from '../../../utils/toast';

import { ToastMessage } from '../ToastMessage';

import { Container } from './styles';

export function ToastContainer() {
    const [messages, setMessages] = useState<Toast[]>([]);

    useEffect(() => {
        function handleAddToast({ type, message, duration }: ToastEvent) {
            setMessages((prevState) =>
                prevState.concat({
                    id: Math.random(),
                    type,
                    message,
                    duration: duration || 1000 * 3
                })
            );
        }

        toastEventManager.on('addtoast', handleAddToast);

        return () => {
            toastEventManager.removeListener('addtoast', handleAddToast);
        };
    }, []);

    const handleRemoveToast = useCallback((toastId: number) => {
        setMessages((prevState) =>
            prevState.filter((message) => message.id != toastId)
        );
    }, []);

    return (
        <Container>
            {messages.map((message) => (
                <ToastMessage
                    key={message.id}
                    message={message}
                    onRemoveToast={handleRemoveToast}
                />
            ))}
        </Container>
    );
}
