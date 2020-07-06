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
