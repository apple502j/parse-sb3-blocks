import specialMessages from './special-messages.gen.js';

export default Object.assign({
    default: {
        event_whenflagclicked: 'when {ICON} clicked',
        motion_turnleft: 'turn {ICON} {DEGREES} degrees',
        motion_turnright: 'turn {ICON} {DEGREES} degrees'
    }
}, specialMessages);

export const specialMessageMap = {
    else: 'control_else'
};
