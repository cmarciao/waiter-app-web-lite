import { EventManager } from '../lib/EventManager';
import { ToastEvent } from '../types/ToastEvent';

export const toastEventManager = new EventManager();

export function toast(toastEvent: ToastEvent) {
    toastEventManager.emit('addtoast', toastEvent);
}
