import {
    BOOLEAN_BLOCK, // eslint-disable-line no-unused-vars
    C_BLOCK,
    E_BLOCK,
    REPORTER_BLOCK
} from './block-enum.js';

export default {
    motion_movesteps: {
        defaultMessage: 'move {STEPS} steps'
    },
    motion_turnright: {
        isSpecialBlock: true
    },
    motion_turnnleft: {
        isSpecialBlock: true
    },
    motion_pointindirection: {
        defaultMessage: 'point in direction {DIRECTION}'
    },
    motion_pointtowards: {
        defaultMessage: 'point towards {TOWARDS}'
    },
    motion_gotoxy: {
        defaultMessage: 'go to x:{X} y:{Y}'
    },
    motion_goto: {
        defaultMessage: 'go to {TO}'
    },
    motion_glidesecstoxy: {
        defaultMessage: 'glide {SECS} secs to x:{X} y:{Y}'
    },
    motion_glideto: {
        defaultMessage: 'glide {SECS} secs to {TO}'
    },
    motion_changexby: {
        defaultMessage: 'change x by {DX}'
    },
    motion_setx: {
        defaultMessage: 'set x to {X}'
    },
    motion_changeyby: {
        defaultMessage: 'change y by {DY}'
    },
    motion_sety: {
        defaultMessage: 'set y to {Y}'
    },
    motion_ifonedgebounce: {
        defaultMessage: 'if on edge, bounce'
    },
    motion_setrotationstyle: {
        defaultMessage: 'set rotation style {STYLE}'
    },
    motion_xposition: {
        defaultMessage: 'x position',
        type: REPORTER_BLOCK
    },
    motion_yposition: {
        defaultMessage: 'y position',
        type: REPORTER_BLOCK
    },
    motion_direction: {
        defaultMessage: 'direction',
        type: REPORTER_BLOCK
    },
    looks_sayforsecs: {
        defaultMessage: 'say {MESSAGE} for {SECS} seconds'
    },
    looks_say: {
        defaultMessage: 'say {MESSAGE}'
    },
    looks_thinkforsecs: {
        defaultMessage: 'think {MESSAGE} for {SECS} seconds'
    },
    looks_think: {
        defaultMessage: 'think {MESSAGE}'
    },
    looks_show: {
        defaultMessage: 'show'
    },
    looks_hide: {
        defaultMessage: 'hide'
    },
    looks_changeeffectby: {
        defaultMessage: 'change {EFFECT} effect by {CHANGE}',
        defaultOptions: {
            category: 'looks'
        }
    },
    looks_seteffectto: {
        defaultMessage: 'set {EFFECT} effect to {VALUE}',
        defaultOptions: {
            category: 'looks'
        }
    },
    looks_cleargraphiceffects: {
        defaultMessage: 'clear graphic effects'
    },
    looks_changesizeby: {
        defaultMessage: 'change size by {CHANGE}'
    },
    looks_setsizeto: {
        defaultMessage: 'set size to {SIZE} %'
    },
    looks_size: {
        defaultMessage: 'size',
        type: REPORTER_BLOCK
    },
    looks_switchcostumeto: {
        defaultMessage: 'switch costume to {COSTUME}'
    },
    looks_nextcostume: {
        defaultMessage: 'next costume'
    },
    looks_switchbackdropto: {
        defaultMessage: 'switch backdrop to {BACKDROP}'
    },
    looks_gotofrontback: {
        defaultMessage: 'go to {FRONT_BACK} layer'
    },
    looks_goforwardbackwardlayers: {
        defaultMessage: 'go {FORWARD_BACKWARD} {NUM} layers'
    },
    looks_backdropnumbername: {
        defaultMessage: 'backdrop {NUMBER_NAME}',
        type: REPORTER_BLOCK
    },
    looks_costumenumbername: {
        defaultMessage: 'costume {NUMBER_NAME}',
        type: REPORTER_BLOCK
    },
    looks_switchbackdroptoandwait: {
        defaultMessage: 'switch backdrop to {BACKDROP} and wait'
    },
    looks_nextbackdrop: {
        defaultMessage: 'next backdrop',
        translationKey: 'LOOKS_NEXTBACKDROP_BLOCK'
    },
    sound_play: {
        defaultMessage: 'start sound {SOUND_MENU}',
    },
    sound_playuntildone: {
        defaultMessage: 'play sound {SOUND_MENU} until done'
    },
    sound_stopallsounds: {
        defaultMessage: 'stop all sounds'
    },
    sound_seteffectto: {
        defaultMessage: 'set {EFFECT} effect to {VALUE}',
        translationKey: 'SOUND_SETEFFECTO', // typo in scratch-blocks
        defaultOptions: {
            category: 'sound'
        }
    },
    sound_changeeffectby: {
        defaultMessage: 'change {EFFECT} effect by {VALUE}',
        defaultOptions: {
            category: 'sound'
        }
    },
    sound_cleareffects: {
        defaultMessage: 'clear sound effects'
    },
    sound_changevolumeby: {
        defaultMessage: 'change volume by {VOLUME}'
    },
    sound_setvolumeto: {
        defaultMessage: 'set volume to {VOLUME} %'
    },
    sound_volume: {
        defaultMessage: 'volume',
        type: REPORTER_BLOCK
    },
    event_whenflagclicked: {
        isSpecialBlock: true
    },
    event_whenthisspriteclicked: {
        defaultMessage: 'when this sprite clicked'
    },
    event_whenstageclicked: {
        defaultMessage: 'when stage clicked'
    },
    event_whenbroadcastreceived: {
        defaultMessage: 'when I receive {BROADCAST_OPTION}'
    },
    event_whenbackdropswitchesto: {
        defaultMessage: 'when backdrop switches to {BACKDROP}'
    },
    event_whengreaterthan: {
        defaultMessage: 'when {WHENGREATERTHANMENU} > {VALUE}'
    },
    event_broadcast: {
        defaultMessage: 'broadcast {BROADCAST_INPUT}'
    },
    event_broadcastandwait: {
        defaultMessage: 'broadcast {BROADCAST_INPUT} and wait'
    },
    event_whenkeypressed: {
        defaultMessage: 'when {KEY_OPTION} key pressed',
        defaultOptions: {
            category: 'events'
        }
    },
    control_forever: {
        defaultMessage: 'forever',
        type: C_BLOCK
    },
    control_repeat: {
        defaultMessage: 'repeat {TIMES}',
        type: C_BLOCK
    },
    control_if: {
        defaultMessage: 'if {CONDITION} then',
        type: C_BLOCK,
        boolArg: ['CONDITION']
    },
    control_if_else: {
        defaultMessage: 'if {CONDITION} then',
        translationKey: 'CONTROL_IF',
        type: E_BLOCK,
        boolArg: ['CONDITION']
    },
    control_else: {
        defaultMessage: 'else'
    },
    control_stop: {
        defaultMessage: 'stop {STOP_OPTION}'
    },
    control_wait: {
        defaultMessage: 'wait for {DURATION} seconds'
    },
    control_wait_until: {
        defaultMessage: 'wait until {CONDITION}',
        translationKey: 'CONTROL_WAITUNTIL',
        boolArg: ['CONDITION']
    },
    control_repeat_until: {
        defaultMessage: 'repeat until {CONDITION}',
        translationKey: 'CONTROL_REPEATUNTIL',
        type: C_BLOCK,
        boolArg: ['CONDITION']
    },
    control_start_as_clone: {
        defaultMessage: 'when I start as a clone',
        translationKey: 'CONTROL_STARTASCLONE'
    },
    control_create_clone_of: {
        defaultMessage: 'create clone of {CLONE_OPTION}',
        translationKey: 'CONTROL_CREATECLONEOF'
    },
    control_delete_this_clone: {
        defaultMessage: 'delete this clone',
        translationKey: 'CONTROL_DELETETHISCLONE'
    }
};

const effects = {
    COLOR: {
        translationKey: 'LOOKS_EFFECT_COLOR',
        defaultMessage: 'color'
    },
    FISHEYE: {
        translationKey: 'LOOKS_EFFECT_FISHEYE',
        defaultMessage: 'fisheye'
    },
    WHIRL: {
        translationKey: 'LOOKS_EFFECT_WHIRL',
        defaultMessage: 'whirl'
    },
    PIXELATE: {
        translationKey: 'LOOKS_EFFECT_PIXELATE',
        defaultMessage: 'pixelate'
    },
    MOSAIC: {
        translationKey: 'LOOKS_EFFECT_MOSAIC',
        defaultMessage: 'mosaic'
    },
    BRIGHTNESS: {
        translationKey: 'LOOKS_EFFECT_BRIGHTNESS',
        defaultMessage: 'brightness'
    },
    GHOST: {
        translationKey: 'LOOKS_EFFECT_GHOST',
        defaultMessage: 'ghost'
    }
};

const backdrops = {
    'next backdrop': {
        translationKey: 'LOOKS_NEXTBACKDROP',
        defaultMessage: 'next backdrop'
    },
    'previous backdrop': {
        translationKey: 'LOOKS_PREVIOUSBACKDROP',
        defaultMessage: 'previous backdrop'
    },
    'random backdrop': {
        translationKey: 'LOOKS_RANDOMBACKDROP',
        defaultMessage: 'random backdrop'
    }
};

const numberName = {
    number: {
        translationKey: 'LOOKS_NUMBERNAME_NUMBER',
        defaultMessage: 'number'
    },
    name: {
        translationKey: 'LOOKS_NUMBERNAME_NAME',
        defaultMessage: 'name'
    }
};

const soundEffects = {
    PITCH: {
        translationKey: 'SOUND_EFFECTS_PITCH',
        defaultMessage: 'pitch'
    },
    PAN: {
        translationKey: 'SOUND_EFFECTS_PAN',
        defaultMessage: 'pan'
    }
};

export const allMenus = {
    motion_pointtowards: {
        _mouse_: {
            translationKey: 'MOTION_POINTTOWARDS_POINTER',
            defaultMessage: 'mouse-pointer'
        },
        _random_: {
            translationKey: 'MOTION_POINTTOWARDS_RANDOM',
            defaultMessage: 'random position'
        }
    },
    motion_goto: {
        _mouse_: {
            translationKey: 'MOTION_GOTO_POINTER',
            defaultMessage: 'mouse-pointer'
        },
        _random_: {
            translationKey: 'MOTION_GOTO_RANDOM',
            defaultMessage: 'random position'
        }
    },
    motion_glideto: {
        _mouse_: {
            translationKey: 'MOTION_GLIDETO_POINTER',
            defaultMessage: 'mouse-pointer'
        },
        _random_: {
            translationKey: 'MOTION_GLIDETO_RANDOM',
            defaultMessage: 'random position'
        }
    },
    motion_setrotationstyle: {
        'left-right': {
            translationKey: 'MOTION_SETROTATIONSTYLE_LEFTRIGHT',
            defaultMessage: 'left-right'
        },
        'don\'t rotate': {
            translationKey: 'MOTION_SETROTATIONSTYLE_DONTROTATE',
            defaultMessage: 'don\'t rotate'
        },
        'all around': {
            translationKey: 'MOTION_SETROTATIONSTYLE_ALLAROUND',
            defaultMessage: 'all around'
        }
    },
    looks_changeeffectby: effects,
    looks_seteffectto: effects,
    looks_switchbackdropto: backdrops,
    looks_gotofrontback: {
        front: {
            translationKey: 'LOOKS_GOTOFRONTBACK_FRONT',
            defaultMessage: 'front'
        },
        back: {
            translationKey: 'LOOKS_GOTOFRONTBACK_BACK',
            defaultMessage: 'back'
        }
    },
    looks_goforwardbackwardlayers: {
        forward: {
            translationKey: 'LOOKS_GOFORWARDBACKWARDLAYERS_FORWARD',
            defaultMessage: 'forward'
        },
        backward: {
            translationKey: 'LOOKS_GOFORWARDBACKWARDLAYERS_BACKWARD',
            defaultMessage: 'backward'
        }
    },
    looks_backdropnumbername: numberName,
    looks_costumenumbername: numberName,
    looks_switchbackdroptoandwait: backdrops,
    sound_seteffectto: soundEffects,
    sound_changeeffectby: soundEffects,
    event_whengreaterthan: {
        LOUDNESS: {
            translationKey: 'EVENT_WHENGREATERTHAN_LOUDNESS',
            defaultMessage: 'loudness'
        },
        TIMER: {
            translationKey: 'EVENT_WHENGREATERTHAN_TIMER',
            defaultMessage: 'timer'
        }
    },
    event_whenkeypressed: {
        space: {
            translationKey: 'EVENT_WHENKEYPRESSED_SPACE',
            defaultMessage: 'space'
        },
        'up arrow': {
            translationKey: 'EVENT_WHENKEYPRESSED_UP',
            defaultMessage: 'up arrow'
        },
        'down arrow': {
            translationKey: 'EVENT_WHENKEYPRESSED_DOWN',
            defaultMessage: 'down arrow'
        },
        'right arrow': {
            translationKey: 'EVENT_WHENKEYPRESSED_RIGHT',
            defaultMessage: 'right arrow'
        },
        'left arrow': {
            translationKey: 'EVENT_WHENKEYPRESSED_LEFT',
            defaultMessage: 'left arrow'
        },
        any: {
            translationKey: 'EVENT_WHENKEYPRESSED_ANY',
            defaultMessage: 'any'
        }
    },
    control_stop: {
        all: {
            translationKey: 'CONTROL_STOP_ALL',
            defaultMessage: 'all'
        },
        'this script': {
            translationKey: 'CONTROL_STOP_THIS',
            defaultMessage: 'this script'
        },
        'other scripts in sprite': {
            translationKey: 'CONTROL_STOP_OTHER',
            defaultMessage: 'other scripts in sprite'
        }
    },
    control_create_clone_of: {
        _myself_: {
            translationKey: 'CONTROL_CREATECLONEOF_MYSELF',
            defaultMessage: 'myself'
        }
    }
};
