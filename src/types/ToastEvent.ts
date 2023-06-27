export interface ToastEvent {
    type: 'success' | 'error';
    message: string;
    duration?: number;
}
