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
    },
    sensing_touchingobject: {
        defaultMessage: 'touching {TOUCHINGOBJECTMENU} ?',
        type: BOOLEAN_BLOCK
    },
    sensing_touchingcolor: {
        defaultMessage: 'touching color {COLOR} ?',
        type: BOOLEAN_BLOCK
    },
    sensing_coloristouchingcolor: {
        defaultMessage: 'color {COLOR} is touching {COLOR2} ?',
        type: BOOLEAN_BLOCK
    },
    sensing_distanceto: {
        defaultMessage: 'distance to {DISTANCETOMENU}',
        type: REPORTER_BLOCK
    },
    sensing_askandwait: {
        defaultMessage: 'ask {QUESTION} and wait'
    },
    sensing_answer: {
        defaultMessage: 'answer',
        type: REPORTER_BLOCK
    },
    sensing_keypressed: {
        defaultMessage: 'key {KEY_OPTION} pressed?',
        type: BOOLEAN_BLOCK
    },
    sensing_mousedown: {
        defaultMessage: 'mouse down?',
        type: BOOLEAN_BLOCK
    },
    sensing_mousex: {
        defaultMessage: 'mouse x',
        type: REPORTER_BLOCK
    },
    sensing_mousey: {
        defaultMessage: 'mouse y',
        type: REPORTER_BLOCK
    },
    sensing_setdragmode: {
        defaultMessage: 'set drag mode {DRAG_MODE}'
    },
    sensing_loudness: {
        defaultMessage: 'loudness',
        type: REPORTER_BLOCK
    },
    sensing_timer: {
        defaultMessage: 'timer',
        type: REPORTER_BLOCK
    },
    sensing_resettimer: {
        defaultMessage: 'reset timer'
    },
    sensing_of: {
        defaultMessage: '{PROPERTY} of {OBJECT}',
        type: REPORTER_BLOCK
    },
    sensing_current: {
        defaultMessage: 'current {CURRENTMENU}',
        type: REPORTER_BLOCK
    },
    sensing_dayssince2000: {
        defaultMessage: 'days since 2000',
        type: REPORTER_BLOCK
    },
    sensing_username: {
        defaultMessage: 'username',
        type: REPORTER_BLOCK
    },
    operator_add: {
        defaultMessage: '{NUM1} + {NUM2}',
        translationKey: 'OPERATORS_ADD',
        type: REPORTER_BLOCK
    },
    operator_subtract: {
        defaultMessage: '{NUM1} - {NUM2}',
        translationKey: 'OPERATORS_SUBTRACT',
        type: REPORTER_BLOCK
    },
    operator_multiply: {
        defaultMessage: '{NUM1} * {NUM2}',
        translationKey: 'OPERATORS_MULTIPLY',
        type: REPORTER_BLOCK
    },
    operator_divide: {
        defaultMessage: '{NUM1} / {NUM2}',
        translationKey: 'OPERATORS_DIVIDE',
        type: REPORTER_BLOCK
    },
    operator_random: {
        defaultMessage: 'pick random {FROM} to {TO}',
        translationKey: 'OPERATORS_RANDOM',
        type: REPORTER_BLOCK
    },
    operator_lt: {
        defaultMessage: '{OPERAND1} < {OPERAND2}',
        translationKey: 'OPERATORS_LT',
        type: BOOLEAN_BLOCK
    },
    operator_equals: {
        defaultMessage: '{OPERAND1} = {OPERAND2}',
        translationKey: 'OPERATORS_EQUALS',
        type: BOOLEAN_BLOCK
    },
    operator_gt: {
        defaultMessage: '{OPERAND1} > {OPERAND2}',
        translationKey: 'OPERATORS_GT',
        type: BOOLEAN_BLOCK
    },
    operator_and: {
        defaultMessage: '{OPERAND1} and {OPERAND2}',
        translationKey: 'OPERATORS_AND',
        type: BOOLEAN_BLOCK,
        boolArg: ['OPERAND1', 'OPERAND2']
    },
    operator_or: {
        defaultMessage: '{OPERAND1} or {OPERAND2}',
        translationKey: 'OPERATORS_OR',
        type: BOOLEAN_BLOCK,
        boolArg: ['OPERAND1', 'OPERAND2']
    },
    operator_not: {
        defaultMessage: 'not {OPERAND}',
        translationKey: 'OPERATORS_NOT',
        type: BOOLEAN_BLOCK,
        boolArg: ['OPERAND']
    },
    operator_join: {
        defaultMessage: 'join {STRING1} {STRING2}',
        translationKey: 'OPERATORS_JOIN',
        type: REPORTER_BLOCK
    },
    operator_letter_of: {
        defaultMessage: 'letter {LETTER} of {STRING}',
        translationKey: 'OPERATORS_LETTEROF',
        type: REPORTER_BLOCK
    },
    operator_length: {
        defaultMessage: 'length of {STRING}',
        translationKey: 'OPERATORS_LENGTH',
        type: REPORTER_BLOCK
    },
    operator_contains: {
        defaultMessage: '{STRING1} contains {STRING2} ?',
        translationKey: 'OPERATORS_CONTAINS',
        type: BOOLEAN_BLOCK
    },
    operator_mod: {
        defaultMessage: '{NUM1} mod {NUM2}',
        translationKey: 'OPERATORS_MOD',
        type: REPORTER_BLOCK
    },
    operator_round: {
        defaultMessage: 'round {NUM}',
        translationKey: 'OPERATORS_ROUND',
        type: REPORTER_BLOCK
    },
    operator_mathop: {
        defaultMessage: '{OPERATOR} of {NUM}',
        translationKey: 'OPERATORS_MATHOP',
        type: REPORTER_BLOCK
    },
    data_variable: {
        noTranslation: true
    },
    data_setvariableto: {
        defaultMessage: 'set {VARIABLE} to {VALUE}'
    },
    data_changevariableby: {
        defaultMessage: 'change {VARIABLE} by {VALUE}'
    },
    data_showvariable: {
        defaultMessage: 'show variable {VARIABLE}'
    },
    data_hidevariable: {
        defaultMessage: 'hide variable {VARIABLE}'
    },
    data_listcontents: {
        noTranslation: true
    },
    data_addtolist: {
        defaultMessage: 'add {ITEM} to {LIST}'
    },
    data_deleteoflist: {
        defaultMessage: 'delete {INDEX} of {LIST}'
    },
    data_deletealloflist: {
        defaultMessage: 'delete all of {LIST}'
    },
    data_insertatlist: {
        defaultMessage: 'insert {ITEM} at {INDEX} of {LIST}'
    },
    data_replaceitemoflist: {
        defaultMessage: 'replace item {INDEX} of {LIST} with {ITEM}'
    },
    data_itemoflist: {
        defaultMessage: 'item {INDEX} of {LIST}',
        type: REPORTER_BLOCK
    },
    data_itemnumoflist: {
        defaultMessage: 'item # of {ITEM} in {LIST}',
        type: REPORTER_BLOCK
    },
    data_lengthoflist: {
        defaultMessage: 'length of {LIST}',
        type: REPORTER_BLOCK
    },
    data_listcontainsitem: {
        defaultMessage: '{LIST} contains {ITEM} ?',
        type: BOOLEAN_BLOCK
    },
    data_showlist: {
        defaultMessage: 'show list {LIST}'
    },
    data_hidelist: {
        defaultMessage: 'hide list {LIST}'
    },
    procedures_definition: {
        defaultMessage: 'define {PROC}'
    },
    procedures_call: {
        noTranslation: true
    },
    argument_reporter_boolean: {
        noTranslation: true,
        type: BOOLEAN_BLOCK
    },
    argument_reporter_string_number: {
        noTranslation: true,
        type: REPORTER_BLOCK
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

const keyOptions = {
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
    event_whenkeypressed: keyOptions,
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
    },
    sensing_touchingobject: {
        _mouse_: {
            translationKey: 'SENSING_TOUCHINGOBJECT_POINTER',
            defaultMessage: 'mouse-pointer'
        },
        _edge_: {
            translationKey: 'SENSING_TOUCHINGOBJECT_EDGE',
            defaultMessage: 'edge'
        }
    },
    sensing_distanceto: {
        _mouse_: {
            translationKey: 'SENSING_DISTANCETO_POINTER',
            defaultMessage: 'mouse-pointer'
        }
    },
    sensing_keypressed: keyOptions,
    sensing_setdragmode: {
        draggable: {
            translationKey: 'SENSING_SETDRAGMODE_DRAGGABLE',
            defaultMessage: 'draggable'
        },
        'not draggable': {
            translationKey: 'SENSING_SETDRAGMODE_NOTDRAGGABLE',
            defaultMessage: 'not draggable'
        }
    },
    sensing_of: {
        _stage_: {
            translationKey: 'SENSING_OF_STAGE',
            defaultMessage: 'Stage'
        },
        'x position': {
            translationKey: 'SENSING_OF_XPOSITION',
            defaultMessage: 'x position'
        },
        'y position': {
            translationKey: 'SENSING_OF_YPOSITION',
            defaultMessage: 'y position'
        },
        direction: {
            translationKey: 'SENSING_OF_DIRECTION',
            defaultMessage: 'direction'
        },
        'costume #': {
            translationKey: 'SENSING_OF_COSTUMENUMBER',
            defaultMessage: 'costume #'
        },
        'costume name': {
            translationKey: 'SENSING_OF_COSTUMENAME',
            defaultMessage: 'costume name'
        },
        size: {
            translationKey: 'SENSING_OF_SIZE',
            defaultMessage: 'size'
        },
        volume: {
            translationKey: 'SENSING_OF_VOLUME',
            defaultMessage: 'volume'
        },
        'backdrop #': {
            translationKey: 'SENSING_OF_BACKDROPNUMBER',
            defaultMessage: 'backdrop #'
        },
        'backdrop name': {
            translationKey: 'SENSING_OF_BACKDROPNAME',
            defaultMessage: 'backdrop name'
        }
    },
    sensing_current: {
        YEAR: {
            translationKey: 'SENSING_CURRENT_YEAR',
            defaultMessage: 'year'
        },
        MONTH: {
            translationKey: 'SENSING_CURRENT_MONTH',
            defaultMessage: 'month'
        },
        DATE: {
            translationKey: 'SENSING_CURRENT_DATE',
            defaultMessage: 'date'
        },
        DAYOFWEEK: {
            translationKey: 'SENSING_CURRENT_DAYOFWEEK',
            defaultMessage: 'day of week'
        },
        HOUR: {
            translationKey: 'SENSING_CURRENT_HOUR',
            defaultMessage: 'hour'
        },
        MINUTE: {
            translationKey: 'SENSING_CURRENT_MINUTE',
            defaultMessage: 'minute'
        },
        SECOND: {
            translationKey: 'SENSING_CURRENT_SECOND',
            defaultMessage: 'second'
        }
    },
    operator_mathop: {
        abs: {
            translationKey: 'OPERATORS_MATHOP_ABS',
            defaultMessage: 'abs'
        },
        floor: {
            translationKey: 'OPERATORS_MATHOP_FLOOR',
            defaultMessage: 'floor'
        },
        ceiling: {
            translationKey: 'OPERATORS_MATHOP_CEILING',
            defaultMessage: 'ceiling'
        },
        sqrt: {
            translationKey: 'OPERATORS_MATHOP_SQRT',
            defaultMessage: 'sqrt'
        },
        sin: {
            translationKey: 'OPERATORS_MATHOP_SIN',
            defaultMessage: 'sin'
        },
        cos: {
            translationKey: 'OPERATORS_MATHOP_COS',
            defaultMessage: 'cos'
        },
        tan: {
            translationKey: 'OPERATORS_MATHOP_TAN',
            defaultMessage: 'tan'
        },
        asin: {
            translationKey: 'OPERATORS_MATHOP_ASIN',
            defaultMessage: 'asin'
        },
        acos: {
            translationKey: 'OPERATORS_MATHOP_ACOS',
            defaultMessage: 'acos'
        },
        atan: {
            translationKey: 'OPERATORS_MATHOP_ATAN',
            defaultMessage: 'atan'
        },
        ln: {
            translationKey: 'OPERATORS_MATHOP_LN',
            defaultMessage: 'ln'
        },
        log: {
            translationKey: 'OPERATORS_MATHOP_LOG',
            defaultMessage: 'log'
        },
        'e ^': {
            translationKey: 'OPERATORS_MATHOP_EEXP',
            defaultMessage: 'e ^'
        },
        '10 ^': {
            translationKey: 'OPERATORS_MATHOP_10EXP',
            defaultMessage: '10 ^'
        }
    }
};
