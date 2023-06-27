export interface Toast {
    id: number;
    type: 'success' | 'error';
    message: string;
    duration: number;
}
