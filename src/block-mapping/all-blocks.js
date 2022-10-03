import { BOOLEAN_BLOCK, C_BLOCK, E_BLOCK, REPORTER_BLOCK } from './block-enum.js';

export default {
    motion_movesteps: {
        defaultMessage: 'move {STEPS} steps',
    },
    motion_turnright: {
        defaultMessage: 'turn {ICON} {DEGREES} degrees',
    },
    motion_turnleft: {
        defaultMessage: 'turn {ICON} {DEGREES} degrees',
    },
    motion_pointindirection: {
        defaultMessage: 'point in direction {DIRECTION}',
    },
    motion_pointtowards: {
        defaultMessage: 'point towards {TOWARDS}',
    },
    motion_gotoxy: {
        defaultMessage: 'go to x:{X} y:{Y}',
    },
    motion_goto: {
        defaultMessage: 'go to {TO}',
    },
    motion_glidesecstoxy: {
        defaultMessage: 'glide {SECS} secs to x:{X} y:{Y}',
    },
    motion_glideto: {
        defaultMessage: 'glide {SECS} secs to {TO}',
    },
    motion_changexby: {
        defaultMessage: 'change x by {DX}',
    },
    motion_setx: {
        defaultMessage: 'set x to {X}',
    },
    motion_changeyby: {
        defaultMessage: 'change y by {DY}',
    },
    motion_sety: {
        defaultMessage: 'set y to {Y}',
    },
    motion_ifonedgebounce: {
        defaultMessage: 'if on edge, bounce',
    },
    motion_setrotationstyle: {
        defaultMessage: 'set rotation style {STYLE}',
    },
    motion_xposition: {
        defaultMessage: 'x position',
        type: REPORTER_BLOCK,
    },
    motion_yposition: {
        defaultMessage: 'y position',
        type: REPORTER_BLOCK,
    },
    motion_direction: {
        defaultMessage: 'direction',
        type: REPORTER_BLOCK,
    },
    looks_sayforsecs: {
        defaultMessage: 'say {MESSAGE} for {SECS} seconds',
    },
    looks_say: {
        defaultMessage: 'say {MESSAGE}',
    },
    looks_thinkforsecs: {
        defaultMessage: 'think {MESSAGE} for {SECS} seconds',
    },
    looks_think: {
        defaultMessage: 'think {MESSAGE}',
    },
    looks_show: {
        defaultMessage: 'show',
    },
    looks_hide: {
        defaultMessage: 'hide',
    },
    looks_changeeffectby: {
        defaultMessage: 'change {EFFECT} effect by {CHANGE}',
        defaultOptions: {
            category: 'looks',
        },
    },
    looks_seteffectto: {
        defaultMessage: 'set {EFFECT} effect to {VALUE}',
        defaultOptions: {
            category: 'looks',
        },
    },
    looks_cleargraphiceffects: {
        defaultMessage: 'clear graphic effects',
    },
    looks_changesizeby: {
        defaultMessage: 'change size by {CHANGE}',
    },
    looks_setsizeto: {
        defaultMessage: 'set size to {SIZE} %',
    },
    looks_size: {
        defaultMessage: 'size',
        type: REPORTER_BLOCK,
    },
    looks_switchcostumeto: {
        defaultMessage: 'switch costume to {COSTUME}',
    },
    looks_nextcostume: {
        defaultMessage: 'next costume',
    },
    looks_switchbackdropto: {
        defaultMessage: 'switch backdrop to {BACKDROP}',
    },
    looks_gotofrontback: {
        defaultMessage: 'go to {FRONT_BACK} layer',
    },
    looks_goforwardbackwardlayers: {
        defaultMessage: 'go {FORWARD_BACKWARD} {NUM} layers',
    },
    looks_backdropnumbername: {
        defaultMessage: 'backdrop {NUMBER_NAME}',
        type: REPORTER_BLOCK,
    },
    looks_costumenumbername: {
        defaultMessage: 'costume {NUMBER_NAME}',
        type: REPORTER_BLOCK,
    },
    looks_switchbackdroptoandwait: {
        defaultMessage: 'switch backdrop to {BACKDROP} and wait',
    },
    looks_nextbackdrop: {
        defaultMessage: 'next backdrop',
        translationKey: 'LOOKS_NEXTBACKDROP_BLOCK',
    },
    sound_play: {
        defaultMessage: 'start sound {SOUND_MENU}',
    },
    sound_playuntildone: {
        defaultMessage: 'play sound {SOUND_MENU} until done',
    },
    sound_stopallsounds: {
        defaultMessage: 'stop all sounds',
    },
    sound_seteffectto: {
        defaultMessage: 'set {EFFECT} effect to {VALUE}',
        translationKey: 'SOUND_SETEFFECTO', // typo in scratch-blocks
        defaultOptions: {
            category: 'sound',
        },
    },
    sound_changeeffectby: {
        defaultMessage: 'change {EFFECT} effect by {VALUE}',
        defaultOptions: {
            category: 'sound',
        },
    },
    sound_cleareffects: {
        defaultMessage: 'clear sound effects',
    },
    sound_changevolumeby: {
        defaultMessage: 'change volume by {VOLUME}',
    },
    sound_setvolumeto: {
        defaultMessage: 'set volume to {VOLUME} %',
    },
    sound_volume: {
        defaultMessage: 'volume',
        type: REPORTER_BLOCK,
    },
    event_whenflagclicked: {
        defaultMessage: 'when {ICON} clicked',
    },
    event_whenthisspriteclicked: {
        defaultMessage: 'when this sprite clicked',
    },
    event_whenstageclicked: {
        defaultMessage: 'when stage clicked',
    },
    event_whenbroadcastreceived: {
        defaultMessage: 'when I receive {BROADCAST_OPTION}',
    },
    event_whenbackdropswitchesto: {
        defaultMessage: 'when backdrop switches to {BACKDROP}',
    },
    event_whengreaterthan: {
        defaultMessage: 'when {WHENGREATERTHANMENU} > {VALUE}',
    },
    event_broadcast: {
        defaultMessage: 'broadcast {BROADCAST_INPUT}',
    },
    event_broadcastandwait: {
        defaultMessage: 'broadcast {BROADCAST_INPUT} and wait',
    },
    event_whenkeypressed: {
        defaultMessage: 'when {KEY_OPTION} key pressed',
        defaultOptions: {
            category: 'events',
        },
    },
    control_forever: {
        defaultMessage: 'forever',
        type: C_BLOCK,
    },
    control_repeat: {
        defaultMessage: 'repeat {TIMES}',
        type: C_BLOCK,
    },
    control_if: {
        defaultMessage: 'if {CONDITION} then',
        type: C_BLOCK,
        boolArg: ['CONDITION'],
    },
    control_if_else: {
        defaultMessage: 'if {CONDITION} then',
        translationKey: 'CONTROL_IF',
        type: E_BLOCK,
        boolArg: ['CONDITION'],
    },
    control_else: {
        defaultMessage: 'else',
    },
    control_stop: {
        defaultMessage: 'stop {STOP_OPTION}',
    },
    control_wait: {
        defaultMessage: 'wait for {DURATION} seconds',
    },
    control_wait_until: {
        defaultMessage: 'wait until {CONDITION}',
        translationKey: 'CONTROL_WAITUNTIL',
        boolArg: ['CONDITION'],
    },
    control_repeat_until: {
        defaultMessage: 'repeat until {CONDITION}',
        translationKey: 'CONTROL_REPEATUNTIL',
        type: C_BLOCK,
        boolArg: ['CONDITION'],
    },
    control_start_as_clone: {
        defaultMessage: 'when I start as a clone',
        translationKey: 'CONTROL_STARTASCLONE',
    },
    control_create_clone_of: {
        defaultMessage: 'create clone of {CLONE_OPTION}',
        translationKey: 'CONTROL_CREATECLONEOF',
    },
    control_delete_this_clone: {
        defaultMessage: 'delete this clone',
        translationKey: 'CONTROL_DELETETHISCLONE',
    },
    sensing_touchingobject: {
        defaultMessage: 'touching {TOUCHINGOBJECTMENU} ?',
        type: BOOLEAN_BLOCK,
    },
    sensing_touchingcolor: {
        defaultMessage: 'touching color {COLOR} ?',
        type: BOOLEAN_BLOCK,
    },
    sensing_coloristouchingcolor: {
        defaultMessage: 'color {COLOR} is touching {COLOR2} ?',
        type: BOOLEAN_BLOCK,
    },
    sensing_distanceto: {
        defaultMessage: 'distance to {DISTANCETOMENU}',
        type: REPORTER_BLOCK,
    },
    sensing_askandwait: {
        defaultMessage: 'ask {QUESTION} and wait',
    },
    sensing_answer: {
        defaultMessage: 'answer',
        type: REPORTER_BLOCK,
    },
    sensing_keypressed: {
        defaultMessage: 'key {KEY_OPTION} pressed?',
        type: BOOLEAN_BLOCK,
    },
    sensing_mousedown: {
        defaultMessage: 'mouse down?',
        type: BOOLEAN_BLOCK,
    },
    sensing_mousex: {
        defaultMessage: 'mouse x',
        type: REPORTER_BLOCK,
    },
    sensing_mousey: {
        defaultMessage: 'mouse y',
        type: REPORTER_BLOCK,
    },
    sensing_setdragmode: {
        defaultMessage: 'set drag mode {DRAG_MODE}',
    },
    sensing_loudness: {
        defaultMessage: 'loudness',
        type: REPORTER_BLOCK,
    },
    sensing_timer: {
        defaultMessage: 'timer',
        type: REPORTER_BLOCK,
    },
    sensing_resettimer: {
        defaultMessage: 'reset timer',
    },
    sensing_of: {
        defaultMessage: '{PROPERTY} of {OBJECT}',
        type: REPORTER_BLOCK,
    },
    sensing_current: {
        defaultMessage: 'current {CURRENTMENU}',
        type: REPORTER_BLOCK,
    },
    sensing_dayssince2000: {
        defaultMessage: 'days since 2000',
        type: REPORTER_BLOCK,
    },
    sensing_username: {
        defaultMessage: 'username',
        type: REPORTER_BLOCK,
    },
    operator_add: {
        defaultMessage: '{NUM1} + {NUM2}',
        translationKey: 'OPERATORS_ADD',
        type: REPORTER_BLOCK,
    },
    operator_subtract: {
        defaultMessage: '{NUM1} - {NUM2}',
        translationKey: 'OPERATORS_SUBTRACT',
        type: REPORTER_BLOCK,
    },
    operator_multiply: {
        defaultMessage: '{NUM1} * {NUM2}',
        translationKey: 'OPERATORS_MULTIPLY',
        type: REPORTER_BLOCK,
    },
    operator_divide: {
        defaultMessage: '{NUM1} / {NUM2}',
        translationKey: 'OPERATORS_DIVIDE',
        type: REPORTER_BLOCK,
    },
    operator_random: {
        defaultMessage: 'pick random {FROM} to {TO}',
        translationKey: 'OPERATORS_RANDOM',
        type: REPORTER_BLOCK,
    },
    operator_lt: {
        defaultMessage: '{OPERAND1} < {OPERAND2}',
        translationKey: 'OPERATORS_LT',
        type: BOOLEAN_BLOCK,
    },
    operator_equals: {
        defaultMessage: '{OPERAND1} = {OPERAND2}',
        translationKey: 'OPERATORS_EQUALS',
        type: BOOLEAN_BLOCK,
    },
    operator_gt: {
        defaultMessage: '{OPERAND1} > {OPERAND2}',
        translationKey: 'OPERATORS_GT',
        type: BOOLEAN_BLOCK,
    },
    operator_and: {
        defaultMessage: '{OPERAND1} and {OPERAND2}',
        translationKey: 'OPERATORS_AND',
        type: BOOLEAN_BLOCK,
        boolArg: ['OPERAND1', 'OPERAND2'],
    },
    operator_or: {
        defaultMessage: '{OPERAND1} or {OPERAND2}',
        translationKey: 'OPERATORS_OR',
        type: BOOLEAN_BLOCK,
        boolArg: ['OPERAND1', 'OPERAND2'],
    },
    operator_not: {
        defaultMessage: 'not {OPERAND}',
        translationKey: 'OPERATORS_NOT',
        type: BOOLEAN_BLOCK,
        boolArg: ['OPERAND'],
    },
    operator_join: {
        defaultMessage: 'join {STRING1} {STRING2}',
        translationKey: 'OPERATORS_JOIN',
        type: REPORTER_BLOCK,
    },
    operator_letter_of: {
        defaultMessage: 'letter {LETTER} of {STRING}',
        translationKey: 'OPERATORS_LETTEROF',
        type: REPORTER_BLOCK,
    },
    operator_length: {
        defaultMessage: 'length of {STRING}',
        translationKey: 'OPERATORS_LENGTH',
        type: REPORTER_BLOCK,
    },
    operator_contains: {
        defaultMessage: '{STRING1} contains {STRING2} ?',
        translationKey: 'OPERATORS_CONTAINS',
        type: BOOLEAN_BLOCK,
    },
    operator_mod: {
        defaultMessage: '{NUM1} mod {NUM2}',
        translationKey: 'OPERATORS_MOD',
        type: REPORTER_BLOCK,
    },
    operator_round: {
        defaultMessage: 'round {NUM}',
        translationKey: 'OPERATORS_ROUND',
        type: REPORTER_BLOCK,
    },
    operator_mathop: {
        defaultMessage: '{OPERATOR} of {NUM}',
        translationKey: 'OPERATORS_MATHOP',
        type: REPORTER_BLOCK,
    },
    data_variable: {
        noTranslation: true,
    },
    data_setvariableto: {
        defaultMessage: 'set {VARIABLE} to {VALUE}',
    },
    data_changevariableby: {
        defaultMessage: 'change {VARIABLE} by {VALUE}',
    },
    data_showvariable: {
        defaultMessage: 'show variable {VARIABLE}',
    },
    data_hidevariable: {
        defaultMessage: 'hide variable {VARIABLE}',
    },
    data_listcontents: {
        noTranslation: true,
    },
    data_addtolist: {
        defaultMessage: 'add {ITEM} to {LIST}',
    },
    data_deleteoflist: {
        defaultMessage: 'delete {INDEX} of {LIST}',
    },
    data_deletealloflist: {
        defaultMessage: 'delete all of {LIST}',
    },
    data_insertatlist: {
        defaultMessage: 'insert {ITEM} at {INDEX} of {LIST}',
    },
    data_replaceitemoflist: {
        defaultMessage: 'replace item {INDEX} of {LIST} with {ITEM}',
    },
    data_itemoflist: {
        defaultMessage: 'item {INDEX} of {LIST}',
        type: REPORTER_BLOCK,
    },
    data_itemnumoflist: {
        defaultMessage: 'item # of {ITEM} in {LIST}',
        type: REPORTER_BLOCK,
    },
    data_lengthoflist: {
        defaultMessage: 'length of {LIST}',
        type: REPORTER_BLOCK,
    },
    data_listcontainsitem: {
        defaultMessage: '{LIST} contains {ITEM} ?',
        type: BOOLEAN_BLOCK,
    },
    data_showlist: {
        defaultMessage: 'show list {LIST}',
    },
    data_hidelist: {
        defaultMessage: 'hide list {LIST}',
    },
    procedures_definition: {
        defaultMessage: 'define {PROC}',
    },
    procedures_call: {
        noTranslation: true,
    },
    argument_reporter_boolean: {
        noTranslation: true,
        type: BOOLEAN_BLOCK,
    },
    argument_reporter_string_number: {
        noTranslation: true,
        type: REPORTER_BLOCK,
    },
    pen_clear: {
        defaultMessage: 'erase all',
        translationKey: 'pen.clear',
    },
    pen_stamp: {
        defaultMessage: 'stamp',
        translationKey: 'pen.stamp',
    },
    pen_penDown: {
        defaultMessage: 'pen down',
        translationKey: 'pen.penDown',
    },
    pen_penUp: {
        defaultMessage: 'pen up',
        translationKey: 'pen.penUp',
    },
    pen_setPenColorToColor: {
        defaultMessage: 'set pen color to {COLOR}',
        translationKey: 'pen.setColor',
    },
    pen_changePenColorParamBy: {
        defaultMessage: 'change pen {COLOR_PARAM} by {VALUE}',
        translationKey: 'pen.changeColorParam',
        remap: {
            COLOR_PARAM: 'colorParam',
        },
    },
    pen_setPenColorParamTo: {
        defaultMessage: 'set pen {COLOR_PARAM} to {VALUE}',
        translationKey: 'pen.setColorParam',
        remap: {
            COLOR_PARAM: 'colorParam',
        },
    },
    pen_changePenSizeBy: {
        defaultMessage: 'change pen size by {SIZE}',
        translationKey: 'pen.changeSize',
    },
    pen_setPenSizeTo: {
        defaultMessage: 'set pen size to {SIZE}',
        translationKey: 'pen.setSize',
    },
    music_playDrumForBeats: {
        defaultMessage: 'play drum {DRUM} for {BEATS} beats',
        translationKey: 'music.playDrumForBeats',
    },
    music_restForBeats: {
        defaultMessage: 'rest for {BEATS} beats',
        translationKey: 'music.restForBeats',
    },
    music_playNoteForBeats: {
        defaultMessage: 'play note {NOTE} for {BEATS} beats',
        translationKey: 'music.playNoteForBeats',
    },
    music_setInstrument: {
        defaultMessage: 'set instrument to {INSTRUMENT}',
        translationKey: 'music.setInstrument',
    },
    music_setTempo: {
        defaultMessage: 'set tempo to {TEMPO}',
        translationKey: 'music.setTempo',
    },
    music_changeTempo: {
        defaultMessage: 'change tempo by {TEMPO}',
        translationKey: 'music.changeTempo',
    },
    music_getTempo: {
        defaultMessage: 'tempo',
        translationKey: 'music.getTempo',
        type: REPORTER_BLOCK,
    },
    videoSensing_whenMotionGreaterThan: {
        defaultMessage: 'when video motion > {REFERENCE}',
        translationKey: 'videoSensing.whenMotionGreaterThan',
    },
    videoSensing_videoOn: {
        defaultMessage: 'video {ATTRIBUTE} on {SUBJECT}',
        translationKey: 'videoSensing.videoOn',
        type: REPORTER_BLOCK,
    },
    videoSensing_videoToggle: {
        defaultMessage: 'turn video {VIDEO_STATE}',
        translationKey: 'videoSensing.videoToggle',
    },
    videoSensing_setVideoTransparency: {
        defaultMessage: 'set video transparency to {TRANSPARENCY}',
        translationKey: 'videoSensing.setVideoTransparency',
    },
    text2speech_speakAndWait: {
        defaultMessage: 'speak {WORDS}',
        translationKey: 'text2speech.speakAndWaitBlock',
    },
    text2speech_setVoice: {
        defaultMessage: 'set voice to {VOICE}',
        translationKey: 'text2speech.setVoiceBlock',
        remap: {
            VOICE: 'voices',
        },
    },
    text2speech_setLanguage: {
        defaultMessage: 'set language to {LANGUAGE}',
        translationKey: 'text2speech.setLanguageBlock',
        remap: {
            LANGUAGE: 'languages',
        },
    },
    translate_getTranslate: {
        defaultMessage: 'translate {WORDS} to {LANGAUGE}',
        translationKey: 'translate.translateBlock',
        type: REPORTER_BLOCK,
        remap: {
            LANGUAGE: 'languages',
        },
    },
    translate_getViewerLanguage: {
        defaultMessage: 'language',
        translationKey: 'translate.viewerLanguage',
        type: REPORTER_BLOCK,
    },
    boost_motorOnFor: {
        defaultMessage: 'turn motor {MOTOR_ID} for {DURATION} seconds',
        translationKey: 'boost.motorOnFor',
    },
    boost_motorOnForRotation: {
        defaultMessage: 'turn motor {MOTOR_ID} for {ROTATION} rotations',
        translationKey: 'boost.motorOnForRotation',
    },
    boost_motorOn: {
        defaultMessage: 'turn motor {MOTOR_ID} on',
        translationKey: 'boost.motorOn',
    },
    boost_motorOff: {
        defaultMessage: 'turn motor {MOTOR_ID} off',
        translationKey: 'boost.motorOff',
    },
    boost_setMotorPower: {
        defaultMessage: 'set motor {MOTOR_ID} speed to {POWER} %',
        translationKey: 'boost.setMotorPower',
    },
    boost_setMotorDirection: {
        defaultMessage: 'set motor {MOTOR_ID} direction {MOTOR_DIRECTION}',
        translationKey: 'boost.setMotorDirection',
    },
    boost_getMotorPosition: {
        defaultMessage: 'motor {MOTOR_REPORTER_ID} position',
        translationKey: 'boost.getMotorPosition',
        type: REPORTER_BLOCK,
    },
    boost_whenColor: {
        defaultMessage: 'when {COLOR} brick seen',
        translationKey: 'boost.whenColor',
    },
    boost_seeingColor: {
        defaultMessage: 'seeing {COLOR} brick?',
        translationKey: 'boost.seeingColor',
        type: BOOLEAN_BLOCK,
    },
    boost_whenTilted: {
        defaultMessage: 'when tilted {TILT_DIRECTION_ANY}',
        translationKey: 'boost.whenTilted',
    },
    boost_getTiltAngle: {
        defaultMessage: 'tilt angle {TILT_DIRECTION}',
        translationKey: 'boost.getTiltAngle',
        type: REPORTER_BLOCK,
    },
    boost_setLightHue: {
        defaultMessage: 'set light color to {HUE}',
        translationKey: 'boost.setLightHue',
    },
    ev3_motorTurnClockwise: {
        defaultMessage: 'motor {PORT} turn this way for {TIME} seconds',
        translationKey: 'ev3.motorTurnClockwise',
        remap: {
            PORT: 'motorPorts',
        },
    },
    ev3_motorTurnCounterClockwise: {
        defaultMessage: 'motor {PORT} turn that way for {TIME} seconds',
        translationKey: 'ev3.motorTurnCounterClockwise',
        remap: {
            PORT: 'motorPorts',
        },
    },
    ev3_motorSetPower: {
        defaultMessage: 'motor {PORT} set power {POWER} %',
        translationKey: 'ev3.motorSetPower',
        remap: {
            PORT: 'motorPorts',
        },
    },
    ev3_getMotorPosition: {
        defaultMessage: 'motor {PORT} position',
        translationKey: 'ev3.getMotorPosition',
        type: REPORTER_BLOCK,
        remap: {
            PORT: 'motorPorts',
        },
    },
    ev3_whenButtonPressed: {
        defaultMessage: 'when button {PORT} pressed',
        translationKey: 'ev3.whenButtonPressed',
        remap: {
            PORT: 'sensorPorts',
        },
    },
    ev3_whenDistanceLessThan: {
        defaultMessage: 'when distance < {DISTANCE}',
        translationKey: 'ev3.whenDistanceLessThan',
    },
    ev3_whenBrightnessLessThan: {
        defaultMessage: 'when brightness < {DISTANCE}',
        translationKey: 'ev3.whenBrightnessLessThan',
    },
    ev3_buttonPressed: {
        defaultMessage: 'button {PORT} pressed?',
        translationKey: 'ev3.buttonPressed',
        type: BOOLEAN_BLOCK,
        remap: {
            PORT: 'sensorPorts',
        },
    },
    ev3_getDistance: {
        defaultMessage: 'distance',
        translationKey: 'ev3.getDistance',
        type: REPORTER_BLOCK,
    },
    ev3_getBrightness: {
        defaultMessage: 'brightness',
        translationKey: 'ev3.getBrightness',
        type: REPORTER_BLOCK,
    },
    ev3_beep: {
        defaultMessage: 'beep note {NOTE} for {TIME} secs',
        translationKey: 'ev3.beepNote',
    },
    gdxfor_whenGesture: {
        defaultMessage: 'when {GESTURE}',
        translationKey: 'gdxfor.whenGesture',
        remap: {
            GESTURE: 'gestureOptions',
        },
    },
    gdxfor_whenForcePushedOrPulled: {
        defaultMessage: 'when force sensor {PUSH_PULL}',
        translationKey: 'gdxfor.whenForcePushedOrPulled',
        remap: {
            PUSH_PULL: 'pushPullOptions',
        },
    },
    gdxfor_getForce: {
        defaultMessage: 'force',
        translationKey: 'gdxfor.getForce',
        type: REPORTER_BLOCK,
    },
    gdxfor_whenTilted: {
        defaultMessage: 'when tilted {TILT}',
        translationKey: 'gdxfor.whenTilted',
        remap: {
            TILT: 'tiltAnyOptions',
        },
    },
    gdxfor_isTilted: {
        defaultMessage: 'tilted {TILT}?',
        translationKey: 'gdxfor.isTilted',
        type: BOOLEAN_BLOCK,
        remap: {
            TILT: 'tiltAnyOptions',
        },
    },
    gdxfor_getTilt: {
        defaultMessage: 'tilt angle {TILT}',
        translationKey: 'gdxfor.getTilt',
        type: REPORTER_BLOCK,
        remap: {
            TILT: 'tiltOptions',
        },
    },
    gdxfor_isFreeFalling: {
        defaultMessage: 'falling?',
        translationKey: 'gdxfor.isFreeFalling',
        type: BOOLEAN_BLOCK,
    },
    gdxfor_getSpinSpeed: {
        defaultMessage: 'spin speed {DIRECTION}',
        translationKey: 'gdxfor.getSpin',
        type: REPORTER_BLOCK,
        remap: {
            DIRECTION: 'axisOptions',
        },
    },
    gdxfor_getAcceleration: {
        defaultMessage: 'acceleration {DIRECTION}',
        translationKey: 'gdxfor.getAcceleration',
        type: REPORTER_BLOCK,
        remap: {
            DIRECTION: 'axisOptions',
        },
    },
    makeymakey_whenMakeyKeyPressed: {
        defaultMessage: 'when {KEY} key pressed',
        translationKey: 'makeymakey.whenKeyPressed',
    },
    makeymakey_whenCodePressed: {
        defaultMessage: 'when {SEQUENCE} pressed in order',
        translationKey: 'makeymakey.whenKeysPressedInOrder',
    },
    microbit_whenButtonPressed: {
        defaultMessage: 'when {BTN} button pressed',
        translationKey: 'microbit.whenButtonPressed',
        remap: {
            BTN: 'buttons',
        },
    },
    microbit_isButtonPressed: {
        defaultMessage: '{BTN} button pressed?',
        translationKey: 'microbit.isButtonPressed',
        type: BOOLEAN_BLOCK,
        remap: {
            BTN: 'buttons',
        },
    },
    microbit_whenGesture: {
        defaultMessage: 'when {GESTURE}',
        translationKey: 'microbit.whenGesture',
        remap: {
            GESTURE: 'gestures',
        },
    },
    microbit_displaySymbol: {
        defaultMessage: 'display {MATRIX}',
        translationKey: 'microbit.displaySymbol',
    },
    microbit_displayText: {
        defaultMessage: 'display text {TEXT}',
        translationKey: 'microbit.displayText',
    },
    microbit_displayClear: {
        defaultMessage: 'clear display',
        translationKey: 'microbit.clearDisplay',
    },
    microbit_whenTilted: {
        defaultMessage: 'when tilted {DIRECTION}',
        translationKey: 'microbit.whenTilted',
        remap: {
            DIRECTION: 'tiltDirectionAny',
        },
    },
    microbit_isTilted: {
        defaultMessage: 'tilted {DIRECTION}?',
        translationKey: 'microbit.isTilted',
        type: BOOLEAN_BLOCK,
        remap: {
            DIRECTION: 'tiltDirectionAny',
        },
    },
    microbit_getTiltAngle: {
        defaultMessage: 'tilt angle {DIRECTION}',
        translationKey: 'microbit.tiltAngle',
        type: REPORTER_BLOCK,
        remap: {
            DIRECTION: 'tiltDirection',
        },
    },
    microbit_whenPinConnected: {
        defaultMessage: 'when pin {PIN} connected',
        translationKey: 'microbit.whenPinConnected',
        remap: {
            PIN: 'touchPins',
        },
    },
    wedo2_motorOnFor: {
        defaultMessage: 'turn {MOTOR_ID} on for {DURATION} seconds',
        translationKey: 'wedo2.motorOnFor',
    },
    wedo2_motorOn: {
        defaultMessage: 'turn {MOTOR_ID} on',
        translationKey: 'wedo2.motorOn',
    },
    wedo2_motorOff: {
        defaultMessage: 'turn {MOTOR_ID} off',
        translationKey: 'wedo2.motorOff',
    },
    wedo2_startMotorPower: {
        defaultMessage: 'set {MOTOR_ID} power to {POWER}',
        translationKey: 'wedo2.startMotorPower',
    },
    wedo2_setMotorDirection: {
        defaultMessage: 'set {MOTOR_ID} direction to {MOTOR_DIRECTION}',
        translationKey: 'wedo2.setMotorDirection',
    },
    wedo2_setLightHue: {
        defaultMessage: 'set light color to {HUE}',
        translationKey: 'wedo2.setLightHue',
    },
    wedo2_playNoteFor: {
        defaultMessage: 'play note {NOTE} for {DURATION} seconds',
        translationKey: 'wedo2.playNoteFor',
    },
    wedo2_whenDistance: {
        defaultMessage: 'when distance {OP} {REFERENCE}',
        translationKey: 'wedo2.whenDistance',
    },
    wedo2_whenTilted: {
        defaultMessage: 'when tilted {TILT_DIRECTION_ANY}',
        translationKey: 'wedo2.whenTilted',
    },
    wedo2_getDistance: {
        defaultMessage: 'distance',
        translationKey: 'wedo2.getDistance',
        type: REPORTER_BLOCK,
    },
    wedo2_isTilted: {
        defaultMessage: 'tilted {TILT_DIRECTION_ANY}?',
        translationKey: 'wedo2.isTilted',
        type: BOOLEAN_BLOCK,
    },
    wedo2_getTiltAngle: {
        defaultMessage: 'tilt angle {TILT_DIRECTION}',
        translationKey: 'wedo2.getTiltAngle',
        type: REPORTER_BLOCK,
    },
};

const effects = {
    COLOR: {
        translationKey: 'LOOKS_EFFECT_COLOR',
        defaultMessage: 'color',
    },
    FISHEYE: {
        translationKey: 'LOOKS_EFFECT_FISHEYE',
        defaultMessage: 'fisheye',
    },
    WHIRL: {
        translationKey: 'LOOKS_EFFECT_WHIRL',
        defaultMessage: 'whirl',
    },
    PIXELATE: {
        translationKey: 'LOOKS_EFFECT_PIXELATE',
        defaultMessage: 'pixelate',
    },
    MOSAIC: {
        translationKey: 'LOOKS_EFFECT_MOSAIC',
        defaultMessage: 'mosaic',
    },
    BRIGHTNESS: {
        translationKey: 'LOOKS_EFFECT_BRIGHTNESS',
        defaultMessage: 'brightness',
    },
    GHOST: {
        translationKey: 'LOOKS_EFFECT_GHOST',
        defaultMessage: 'ghost',
    },
};

const backdrops = {
    'next backdrop': {
        translationKey: 'LOOKS_NEXTBACKDROP',
        defaultMessage: 'next backdrop',
    },
    'previous backdrop': {
        translationKey: 'LOOKS_PREVIOUSBACKDROP',
        defaultMessage: 'previous backdrop',
    },
    'random backdrop': {
        translationKey: 'LOOKS_RANDOMBACKDROP',
        defaultMessage: 'random backdrop',
    },
};

const numberName = {
    number: {
        translationKey: 'LOOKS_NUMBERNAME_NUMBER',
        defaultMessage: 'number',
    },
    name: {
        translationKey: 'LOOKS_NUMBERNAME_NAME',
        defaultMessage: 'name',
    },
};

const soundEffects = {
    PITCH: {
        translationKey: 'SOUND_EFFECTS_PITCH',
        defaultMessage: 'pitch',
    },
    PAN: {
        translationKey: 'SOUND_EFFECTS_PAN',
        defaultMessage: 'pan',
    },
};

const keyOptions = {
    space: {
        translationKey: 'EVENT_WHENKEYPRESSED_SPACE',
        defaultMessage: 'space',
    },
    'up arrow': {
        translationKey: 'EVENT_WHENKEYPRESSED_UP',
        defaultMessage: 'up arrow',
    },
    'down arrow': {
        translationKey: 'EVENT_WHENKEYPRESSED_DOWN',
        defaultMessage: 'down arrow',
    },
    'right arrow': {
        translationKey: 'EVENT_WHENKEYPRESSED_RIGHT',
        defaultMessage: 'right arrow',
    },
    'left arrow': {
        translationKey: 'EVENT_WHENKEYPRESSED_LEFT',
        defaultMessage: 'left arrow',
    },
    any: {
        translationKey: 'EVENT_WHENKEYPRESSED_ANY',
        defaultMessage: 'any',
    },
};

const colorParam = {
    color: {
        translationKey: 'pen.colorMenu.color',
        defaultMessage: 'color',
    },
    saturation: {
        translationKey: 'pen.colorMenu.saturation',
        defaultMessage: 'saturation',
    },
    brightness: {
        translationKey: 'pen.colorMenu.brightness',
        defaultMessage: 'brightness',
    },
    transparency: {
        translationKey: 'pen.colorMenu.transparency',
        defaultMessage: 'transparency',
    },
};

const assignKey = (o, keyPrefix) => {
    for (const k of Object.keys(o)) o[k].translationKey = `${keyPrefix}.${k}`;
    return o;
};

const translateLanguages = assignKey(
    {
        sq: {
            defaultMessage: 'Albanian',
        },
        am: {
            defaultMessage: 'Amharic',
        },
        ar: {
            defaultMessage: 'Arabic',
        },
        hy: {
            defaultMessage: 'Armenian',
        },
        az: {
            defaultMessage: 'Azerbaijani',
        },
        eu: {
            defaultMessage: 'Basque',
        },
        be: {
            defaultMessage: 'Belarusian',
        },
        bg: {
            defaultMessage: 'Bulgarian',
        },
        ca: {
            defaultMessage: 'Catalan',
        },
        'zh-tw': {
            defaultMessage: 'Chinese (Traditional)',
        },
        hr: {
            defaultMessage: 'Croatian',
        },
        cs: {
            defaultMessage: 'Czech',
        },
        da: {
            defaultMessage: 'Danish',
        },
        nl: {
            defaultMessage: 'Dutch',
        },
        en: {
            defaultMessage: 'English',
        },
        eo: {
            defaultMessage: 'Esperanto',
        },
        et: {
            defaultMessage: 'Estonian',
        },
        fi: {
            defaultMessage: 'Finnish',
        },
        fr: {
            defaultMessage: 'French',
        },
        gl: {
            defaultMessage: 'Galician',
        },
        de: {
            defaultMessage: 'German',
        },
        el: {
            defaultMessage: 'Greek',
        },
        ht: {
            defaultMessage: 'Haitian Creole',
        },
        hi: {
            defaultMessage: 'Hindi',
        },
        hu: {
            defaultMessage: 'Hungarian',
        },
        is: {
            defaultMessage: 'Icelandic',
        },
        id: {
            defaultMessage: 'Indonesian',
        },
        ga: {
            defaultMessage: 'Irish',
        },
        it: {
            defaultMessage: 'Italian',
        },
        ja: {
            defaultMessage: 'Japanese',
        },
        kn: {
            defaultMessage: 'Kannada',
        },
        ko: {
            defaultMessage: 'Korean',
        },
        ku: {
            defaultMessage: 'Kurdish (Kurmanji)',
        },
        la: {
            defaultMessage: 'Latin',
        },
        lv: {
            defaultMessage: 'Latvian',
        },
        lt: {
            defaultMessage: 'Lithuanian',
        },
        mk: {
            defaultMessage: 'Macedonian',
        },
        ms: {
            defaultMessage: 'Malay',
        },
        ml: {
            defaultMessage: 'Malayalam',
        },
        mt: {
            defaultMessage: 'Maltese',
        },
        mi: {
            defaultMessage: 'Maori',
        },
        mr: {
            defaultMessage: 'Marathi',
        },
        mn: {
            defaultMessage: 'Mongolian',
        },
        my: {
            defaultMessage: 'Myanmar (Burmese)',
        },
        fa: {
            defaultMessage: 'Persian',
        },
        pl: {
            defaultMessage: 'Polish',
        },
        pt: {
            defaultMessage: 'Portuguese',
        },
        ro: {
            defaultMessage: 'Romanian',
        },
        ru: {
            defaultMessage: 'Russian',
        },
        gd: {
            defaultMessage: 'Scots Gaelic',
        },
        sr: {
            defaultMessage: 'Serbian',
        },
        sk: {
            defaultMessage: 'Slovak',
        },
        sl: {
            defaultMessage: 'Slovenian',
        },
        es: {
            defaultMessage: 'Spanish',
        },
        sv: {
            defaultMessage: 'Swedish',
        },
        te: {
            defaultMessage: 'Telugu',
        },
        th: {
            defaultMessage: 'Thai',
        },
        tr: {
            defaultMessage: 'Turkish',
        },
        uk: {
            defaultMessage: 'Ukrainian',
        },
        uz: {
            defaultMessage: 'Uzbek',
        },
        vi: {
            defaultMessage: 'Vietnamese',
        },
        cy: {
            defaultMessage: 'Welsh',
        },
        zu: {
            defaultMessage: 'Zulu',
        },
        he: {
            defaultMessage: 'Hebrew',
        },
        'zh-cn': {
            defaultMessage: 'Chinese (Simplified)',
        },
    },
    'special.translate'
);

// Used by buildscript
export const _unkeyedTextToSpeechLanguages = {
    ar: {
        defaultMessage: 'Arabic',
    },
    'zh-cn': {
        defaultMessage: 'Chinese (Mandarin)',
    },
    da: {
        defaultMessage: 'Danish',
    },
    nl: {
        defaultMessage: 'Dutch',
    },
    en: {
        defaultMessage: 'English',
    },
    fr: {
        defaultMessage: 'French',
    },
    de: {
        defaultMessage: 'German',
    },
    hi: {
        defaultMessage: 'Hindi',
    },
    is: {
        defaultMessage: 'Icelandic',
    },
    it: {
        defaultMessage: 'Italian',
    },
    ja: {
        defaultMessage: 'Japanese',
    },
    ko: {
        defaultMessage: 'Korean',
    },
    nb: {
        defaultMessage: 'Norwegian',
    },
    pl: {
        defaultMessage: 'Polish',
    },
    'pt-br': {
        defaultMessage: 'Portuguese (Brazilian)',
    },
    pt: {
        defaultMessage: 'Portuguese (European)',
    },
    ro: {
        defaultMessage: 'Romanian',
    },
    ru: {
        defaultMessage: 'Russian',
    },
    es: {
        defaultMessage: 'Spanish (European)',
    },
    'es-419': {
        defaultMessage: 'Spanish (Latin American)',
    },
    sv: {
        defaultMessage: 'Swedish',
    },
    tr: {
        defaultMessage: 'Turkish',
    },
    cy: {
        defaultMessage: 'Welsh',
    },
};
const ttsLanguages = assignKey(_unkeyedTextToSpeechLanguages, 'special.tts');

const boostMotorId = {
    A: {
        defaultMessage: 'A',
    },
    B: {
        defaultMessage: 'B',
    },
    C: {
        defaultMessage: 'C',
    },
    D: {
        defaultMessage: 'D',
    },
    AB: {
        defaultMessage: 'AB',
    },
    ALL: {
        defaultMessage: 'ABCD',
    },
};

const boostColor = {
    red: {
        translationKey: 'boost.color.red',
        defaultMessage: 'red',
    },
    blue: {
        translationKey: 'boost.color.blue',
        defaultMessage: 'blue',
    },
    green: {
        translationKey: 'boost.color.green',
        defaultMessage: 'green',
    },
    yellow: {
        translationKey: 'boost.color.yellow',
        defaultMessage: 'yellow',
    },
    white: {
        translationKey: 'boost.color.white',
        defaultMessage: 'white',
    },
    black: {
        translationKey: 'boost.color.black',
        defaultMessage: 'black',
    },
    any: {
        translationKey: 'boost.color.any',
        defaultMessage: 'any color',
    },
};

const boostTilt = {
    up: {
        translationKey: 'boost.tiltDirection.up',
        defaultMessage: 'up',
    },
    down: {
        translationKey: 'boost.tiltDirection.down',
        defaultMessage: 'down',
    },
    left: {
        translationKey: 'boost.tiltDirection.left',
        defaultMessage: 'left',
    },
    right: {
        translationKey: 'boost.tiltDirection.right',
        defaultMessage: 'right',
    },
};

const ev3MotorPorts = {
    0: {
        defaultMessage: 'A',
    },
    1: {
        defaultMessage: 'B',
    },
    2: {
        defaultMessage: 'C',
    },
    3: {
        defaultMessage: 'D',
    },
};

const ev3SensorPorts = {
    0: {
        defaultMessage: '1',
    },
    1: {
        defaultMessage: '2',
    },
    2: {
        defaultMessage: '3',
    },
    3: {
        defaultMessage: '4',
    },
};

const gdxforTilt = {
    front: {
        translationKey: 'gdxfor.tiltDirectionMenu.front',
        defaultMessage: 'front',
    },
    back: {
        translationKey: 'gdxfor.tiltDirectionMenu.back',
        defaultMessage: 'back',
    },
    left: {
        translationKey: 'gdxfor.tiltDirectionMenu.left',
        defaultMessage: 'left',
    },
    right: {
        translationKey: 'gdxfor.tiltDirectionMenu.right',
        defaultMessage: 'right',
    },
};

const gdxforTiltAny = Object.assign({}, gdxforTilt, {
    any: {
        translationKey: 'gdxfor.tiltDirectionMenu.any',
        defaultMessage: 'any',
    },
});

const gdxforAxis = {
    x: {
        defaultMessage: 'x',
    },
    y: {
        defaultMessage: 'y',
    },
    z: {
        defaultMessage: 'z',
    },
};

const makeMakeymakeyCombs = (keyPrefix, ...combinations) =>
    Object.fromEntries(
        combinations.map(c => [
            c.toUpperCase(),
            {
                defaultMessage: c,
                translationKey: `${keyPrefix}.${c.replace(/ /g, '.')}`,
            },
        ])
    );

const makeymakeySequences = makeMakeymakeyCombs(
    'special.makeymakey',
    'left up right',
    'right up left',
    'left right',
    'right left',
    'up down',
    'down up',
    'up right down left',
    'up left down right',
    'up up down down left right left right'
);

const microbitButtons = {
    A: {
        defaultMessage: 'A',
    },
    B: {
        defaultMessage: 'B',
    },
    any: {
        translationKey: 'microbit.buttonsMenu.any',
        defaultMessage: 'any',
    },
};

const microbitTilt = {
    front: {
        translationKey: 'microbit.tiltDirectionMenu.front',
        defaultMessage: 'front',
    },
    back: {
        translationKey: 'microbit.tiltDirectionMenu.back',
        defaultMessage: 'back',
    },
    left: {
        translationKey: 'microbit.tiltDirectionMenu.left',
        defaultMessage: 'left',
    },
    right: {
        translationKey: 'microbit.tiltDirectionMenu.right',
        defaultMessage: 'right',
    },
};

const microbitTiltAny = Object.assign({}, microbitTilt, {
    any: {
        translationKey: 'microbit.tiltDirectionMenu.any',
        defaultMessage: 'any',
    },
});

const wedo2Motors = {
    motor: {
        translationKey: 'wedo2.motorId.default',
        defaultMessage: 'motor',
    },
    'motor A': {
        translationKey: 'wedo2.motorId.a',
        defaultMessage: 'motor A',
    },
    'motor B': {
        translationKey: 'wedo2.motorId.b',
        defaultMessage: 'motor B',
    },
    'all motors': {
        translationKey: 'wedo2.motorId.all',
        defaultMessage: 'all motors',
    },
};

const wedo2Tilt = {
    up: {
        translationKey: 'wedo2.tiltDirection.up',
        defaultMessage: 'up',
    },
    down: {
        translationKey: 'wedo2.tiltDirection.down',
        defaultMessage: 'down',
    },
    left: {
        translationKey: 'wedo2.tiltDirection.left',
        defaultMessage: 'left',
    },
    right: {
        translationKey: 'wedo2.tiltDirection.right',
        defaultMessage: 'right',
    },
};

const wedo2TiltAny = Object.assign({}, wedo2Tilt, {
    any: {
        translationKey: 'wedo2.tiltDirection.any',
        defaultMessage: 'any',
    },
});

export const allMenus = {
    motion_pointtowards: {
        _mouse_: {
            translationKey: 'MOTION_POINTTOWARDS_POINTER',
            defaultMessage: 'mouse-pointer',
        },
        _random_: {
            translationKey: 'MOTION_POINTTOWARDS_RANDOM',
            defaultMessage: 'random position',
        },
    },
    motion_goto: {
        _mouse_: {
            translationKey: 'MOTION_GOTO_POINTER',
            defaultMessage: 'mouse-pointer',
        },
        _random_: {
            translationKey: 'MOTION_GOTO_RANDOM',
            defaultMessage: 'random position',
        },
    },
    motion_glideto: {
        _mouse_: {
            translationKey: 'MOTION_GLIDETO_POINTER',
            defaultMessage: 'mouse-pointer',
        },
        _random_: {
            translationKey: 'MOTION_GLIDETO_RANDOM',
            defaultMessage: 'random position',
        },
    },
    motion_setrotationstyle: {
        'left-right': {
            translationKey: 'MOTION_SETROTATIONSTYLE_LEFTRIGHT',
            defaultMessage: 'left-right',
        },
        "don't rotate": {
            translationKey: 'MOTION_SETROTATIONSTYLE_DONTROTATE',
            defaultMessage: "don't rotate",
        },
        'all around': {
            translationKey: 'MOTION_SETROTATIONSTYLE_ALLAROUND',
            defaultMessage: 'all around',
        },
    },
    looks_changeeffectby: effects,
    looks_seteffectto: effects,
    looks_switchbackdropto: backdrops,
    looks_gotofrontback: {
        front: {
            translationKey: 'LOOKS_GOTOFRONTBACK_FRONT',
            defaultMessage: 'front',
        },
        back: {
            translationKey: 'LOOKS_GOTOFRONTBACK_BACK',
            defaultMessage: 'back',
        },
    },
    looks_goforwardbackwardlayers: {
        forward: {
            translationKey: 'LOOKS_GOFORWARDBACKWARDLAYERS_FORWARD',
            defaultMessage: 'forward',
        },
        backward: {
            translationKey: 'LOOKS_GOFORWARDBACKWARDLAYERS_BACKWARD',
            defaultMessage: 'backward',
        },
    },
    looks_backdropnumbername: numberName,
    looks_costumenumbername: numberName,
    looks_switchbackdroptoandwait: backdrops,
    sound_seteffectto: soundEffects,
    sound_changeeffectby: soundEffects,
    event_whengreaterthan: {
        LOUDNESS: {
            translationKey: 'EVENT_WHENGREATERTHAN_LOUDNESS',
            defaultMessage: 'loudness',
        },
        TIMER: {
            translationKey: 'EVENT_WHENGREATERTHAN_TIMER',
            defaultMessage: 'timer',
        },
    },
    event_whenkeypressed: keyOptions,
    control_stop: {
        all: {
            translationKey: 'CONTROL_STOP_ALL',
            defaultMessage: 'all',
        },
        'this script': {
            translationKey: 'CONTROL_STOP_THIS',
            defaultMessage: 'this script',
        },
        'other scripts in sprite': {
            translationKey: 'CONTROL_STOP_OTHER',
            defaultMessage: 'other scripts in sprite',
        },
    },
    control_create_clone_of: {
        _myself_: {
            translationKey: 'CONTROL_CREATECLONEOF_MYSELF',
            defaultMessage: 'myself',
        },
    },
    sensing_touchingobject: {
        _mouse_: {
            translationKey: 'SENSING_TOUCHINGOBJECT_POINTER',
            defaultMessage: 'mouse-pointer',
        },
        _edge_: {
            translationKey: 'SENSING_TOUCHINGOBJECT_EDGE',
            defaultMessage: 'edge',
        },
    },
    sensing_distanceto: {
        _mouse_: {
            translationKey: 'SENSING_DISTANCETO_POINTER',
            defaultMessage: 'mouse-pointer',
        },
    },
    sensing_keypressed: keyOptions,
    sensing_setdragmode: {
        draggable: {
            translationKey: 'SENSING_SETDRAGMODE_DRAGGABLE',
            defaultMessage: 'draggable',
        },
        'not draggable': {
            translationKey: 'SENSING_SETDRAGMODE_NOTDRAGGABLE',
            defaultMessage: 'not draggable',
        },
    },
    sensing_of: {
        _stage_: {
            translationKey: 'SENSING_OF_STAGE',
            defaultMessage: 'Stage',
        },
        'x position': {
            translationKey: 'SENSING_OF_XPOSITION',
            defaultMessage: 'x position',
        },
        'y position': {
            translationKey: 'SENSING_OF_YPOSITION',
            defaultMessage: 'y position',
        },
        direction: {
            translationKey: 'SENSING_OF_DIRECTION',
            defaultMessage: 'direction',
        },
        'costume #': {
            translationKey: 'SENSING_OF_COSTUMENUMBER',
            defaultMessage: 'costume #',
        },
        'costume name': {
            translationKey: 'SENSING_OF_COSTUMENAME',
            defaultMessage: 'costume name',
        },
        size: {
            translationKey: 'SENSING_OF_SIZE',
            defaultMessage: 'size',
        },
        volume: {
            translationKey: 'SENSING_OF_VOLUME',
            defaultMessage: 'volume',
        },
        'backdrop #': {
            translationKey: 'SENSING_OF_BACKDROPNUMBER',
            defaultMessage: 'backdrop #',
        },
        'backdrop name': {
            translationKey: 'SENSING_OF_BACKDROPNAME',
            defaultMessage: 'backdrop name',
        },
    },
    sensing_current: {
        YEAR: {
            translationKey: 'SENSING_CURRENT_YEAR',
            defaultMessage: 'year',
        },
        MONTH: {
            translationKey: 'SENSING_CURRENT_MONTH',
            defaultMessage: 'month',
        },
        DATE: {
            translationKey: 'SENSING_CURRENT_DATE',
            defaultMessage: 'date',
        },
        DAYOFWEEK: {
            translationKey: 'SENSING_CURRENT_DAYOFWEEK',
            defaultMessage: 'day of week',
        },
        HOUR: {
            translationKey: 'SENSING_CURRENT_HOUR',
            defaultMessage: 'hour',
        },
        MINUTE: {
            translationKey: 'SENSING_CURRENT_MINUTE',
            defaultMessage: 'minute',
        },
        SECOND: {
            translationKey: 'SENSING_CURRENT_SECOND',
            defaultMessage: 'second',
        },
    },
    operator_mathop: {
        abs: {
            translationKey: 'OPERATORS_MATHOP_ABS',
            defaultMessage: 'abs',
        },
        floor: {
            translationKey: 'OPERATORS_MATHOP_FLOOR',
            defaultMessage: 'floor',
        },
        ceiling: {
            translationKey: 'OPERATORS_MATHOP_CEILING',
            defaultMessage: 'ceiling',
        },
        sqrt: {
            translationKey: 'OPERATORS_MATHOP_SQRT',
            defaultMessage: 'sqrt',
        },
        sin: {
            translationKey: 'OPERATORS_MATHOP_SIN',
            defaultMessage: 'sin',
        },
        cos: {
            translationKey: 'OPERATORS_MATHOP_COS',
            defaultMessage: 'cos',
        },
        tan: {
            translationKey: 'OPERATORS_MATHOP_TAN',
            defaultMessage: 'tan',
        },
        asin: {
            translationKey: 'OPERATORS_MATHOP_ASIN',
            defaultMessage: 'asin',
        },
        acos: {
            translationKey: 'OPERATORS_MATHOP_ACOS',
            defaultMessage: 'acos',
        },
        atan: {
            translationKey: 'OPERATORS_MATHOP_ATAN',
            defaultMessage: 'atan',
        },
        ln: {
            translationKey: 'OPERATORS_MATHOP_LN',
            defaultMessage: 'ln',
        },
        log: {
            translationKey: 'OPERATORS_MATHOP_LOG',
            defaultMessage: 'log',
        },
        'e ^': {
            translationKey: 'OPERATORS_MATHOP_EEXP',
            defaultMessage: 'e ^',
        },
        '10 ^': {
            translationKey: 'OPERATORS_MATHOP_10EXP',
            defaultMessage: '10 ^',
        },
    },
    pen_changePenColorParamBy: colorParam,
    pen_setPenColorParamTo: colorParam,
    music_playDrumForBeats: {
        1: {
            translationKey: 'music.drumSnare',
            defaultMessage: '(1) Snare Drum',
        },
        2: {
            translationKey: 'music.drumBass',
            defaultMessage: '(2) Bass Drum',
        },
        3: {
            translationKey: 'music.drumSideStick',
            defaultMessage: '(3) Side Stick',
        },
        4: {
            translationKey: 'music.drumCrashCymbal',
            defaultMessage: '(4) Crash Cymbal',
        },
        5: {
            translationKey: 'music.drumOpenHiHat',
            defaultMessage: '(5) Open Hi-Hat',
        },
        6: {
            translationKey: 'music.drumClosedHiHat',
            defaultMessage: '(6) Closed Hi-Hat',
        },
        7: {
            translationKey: 'music.drumTambourine',
            defaultMessage: '(7) Tambourine',
        },
        8: {
            translationKey: 'music.drumHandClap',
            defaultMessage: '(8) Hand Clap',
        },
        9: {
            translationKey: 'music.drumClaves',
            defaultMessage: '(9) Claves',
        },
        10: {
            translationKey: 'music.drumWoodBlock',
            defaultMessage: '(10) Wood Block',
        },
        11: {
            translationKey: 'music.drumCowbell',
            defaultMessage: '(11) Cowbell',
        },
        12: {
            translationKey: 'music.drumTriangle',
            defaultMessage: '(12) Triangle',
        },
        13: {
            translationKey: 'music.drumBongo',
            defaultMessage: '(13) Bongo',
        },
        14: {
            translationKey: 'music.drumConga',
            defaultMessage: '(14) Conga',
        },
        15: {
            translationKey: 'music.drumCabasa',
            defaultMessage: '(15) Cabasa',
        },
        16: {
            translationKey: 'music.drumGuiro',
            defaultMessage: '(16) Guiro',
        },
        17: {
            translationKey: 'music.drumVibraslap',
            defaultMessage: '(17) Vibraslap',
        },
        18: {
            translationKey: 'music.drumCuica',
            defaultMessage: '(18) Cuica',
        },
    },
    music_setInstrument: {
        1: {
            translationKey: 'music.instrumentPiano',
            defaultMessage: '(1) Piano',
        },
        2: {
            translationKey: 'music.instrumentElectricPiano',
            defaultMessage: '(2) Electric Piano',
        },
        3: {
            translationKey: 'music.instrumentOrgan',
            defaultMessage: '(3) Organ',
        },
        4: {
            translationKey: 'music.instrumentGuitar',
            defaultMessage: '(4) Guitar',
        },
        5: {
            translationKey: 'music.instrumentElectricGuitar',
            defaultMessage: '(5) Electric Guitar',
        },
        6: {
            translationKey: 'music.instrumentBass',
            defaultMessage: '(6) Bass',
        },
        7: {
            translationKey: 'music.instrumentPizzicato',
            defaultMessage: '(7) Pizzicato',
        },
        8: {
            translationKey: 'music.instrumentCello',
            defaultMessage: '(8) Cello',
        },
        9: {
            translationKey: 'music.instrumentTrombone',
            defaultMessage: '(9) Trombone',
        },
        10: {
            translationKey: 'music.instrumentClarinet',
            defaultMessage: '(10) Clarinet',
        },
        11: {
            translationKey: 'music.instrumentSaxophone',
            defaultMessage: '(11) Saxophone',
        },
        12: {
            translationKey: 'music.instrumentFlute',
            defaultMessage: '(12) Flute',
        },
        13: {
            translationKey: 'music.instrumentWoodenFlute',
            defaultMessage: '(13) Wooden Flute',
        },
        14: {
            translationKey: 'music.instrumentBassoon',
            defaultMessage: '(14) Bassoon',
        },
        15: {
            translationKey: 'music.instrumentChoir',
            defaultMessage: '(15) Choir',
        },
        16: {
            translationKey: 'music.instrumentVibraphone',
            defaultMessage: '(16) Vibraphone',
        },
        17: {
            translationKey: 'music.instrumentMusicBox',
            defaultMessage: '(17) Music Box',
        },
        18: {
            translationKey: 'music.instrumentSteelDrum',
            defaultMessage: '(18) Steel Drum',
        },
        19: {
            translationKey: 'music.instrumentMarimba',
            defaultMessage: '(19) Marimba',
        },
        20: {
            translationKey: 'music.instrumentSynthLead',
            defaultMessage: '(20) Synth Lead',
        },
        21: {
            translationKey: 'music.instrumentSynthPad',
            defaultMessage: '(21) Synth Pad',
        },
    },
    videoSensing_videoOn: {
        motion: {
            translationKey: 'videoSensing.motion',
            defaultMessage: 'motion',
        },
        direction: {
            translationKey: 'videoSensing.direction',
            defaultMessage: 'direction',
        },
        Stage: {
            translationKey: 'videoSensing.stage',
            defaultMessage: 'stage',
        },
        'this sprite': {
            translationKey: 'videoSensing.sprite',
            defaultMessage: 'sprite',
        },
    },
    videoSensing_videoToggle: {
        off: {
            translationKey: 'videoSensing.off',
            defaultMessage: 'off',
        },
        on: {
            translationKey: 'videoSensing.on',
            defaultMessage: 'on',
        },
        'on-flipped': {
            translationKey: 'videoSensing.onFlipped',
            defaultMessage: 'on flipped',
        },
    },
    translate_getTranslate: translateLanguages,
    text2speech_setLanguage: ttsLanguages,
    text2speech_setVoice: {
        ALTO: {
            translationKey: 'text2speech.alto',
            defaultMessage: 'alto',
        },
        TENOR: {
            translationKey: 'text2speech.tenor',
            defaultMessage: 'tenor',
        },
        SQUEAK: {
            translationKey: 'text2speech.squeak',
            defaultMessage: 'squeak',
        },
        GIANT: {
            translationKey: 'text2speech.giant',
            defaultMessage: 'giant',
        },
        KITTEN: {
            translationKey: 'text2speech.kitten',
            defaultMessage: 'kitten',
        },
    },
    boost_motorOnFor: boostMotorId,
    boost_motorOnForRotation: boostMotorId,
    boost_motorOn: boostMotorId,
    boost_motorOff: boostMotorId,
    boost_setMotorPower: boostMotorId,
    boost_setMotorDirection: Object.assign(
        {
            'this way': {
                translationKey: 'boost.motorDirection.forward',
                defaultMessage: 'this way',
            },
            'that way': {
                translationKey: 'boost.motorDirection.backward',
                defaultMessage: 'that way',
            },
            reverse: {
                translationKey: 'boost.motorDirection.reverse',
                defaultMessage: 'reverse',
            },
        },
        boostMotorId
    ),
    boost_getMotorPosition: {
        A: {
            defaultMessage: 'A',
        },
        B: {
            defaultMessage: 'B',
        },
        C: {
            defaultMessage: 'C',
        },
        D: {
            defaultMessage: 'D',
        },
    },
    boost_whenColor: boostColor,
    boost_seeingColor: boostColor,
    boost_whenTilted: Object.assign({}, boostTilt, {
        any: {
            translationKey: 'boost.tiltDirection.any',
            defaultMessage: 'any',
        },
    }),
    boost_getTiltAngle: boostTilt,
    ev3_motorTurnClockwise: ev3MotorPorts,
    ev3_motorTurnCounterClockwise: ev3MotorPorts,
    ev3_motorSetPower: ev3MotorPorts,
    ev3_getMotorPosition: ev3MotorPorts,
    ev3_whenButtonPressed: ev3SensorPorts,
    ev3_buttonPressed: ev3SensorPorts,
    gdxfor_whenGesture: {
        shaken: {
            translationKey: 'gdxfor.shaken',
            defaultMessage: 'shaken',
        },
        'started falling': {
            translationKey: 'gdxfor.startedFalling',
            defaultMessage: 'started falling',
        },
        'turned face up': {
            translationKey: 'gdxfor.turnedFaceUp',
            defaultMessage: 'turned face up',
        },
        'turned face down': {
            translationKey: 'gdxfor.turnedFaceDown',
            defaultMessage: 'turned face down',
        },
    },
    gdxfor_whenForcePushedOrPulled: {
        pushed: {
            translationKey: 'gdxfor.pushed',
            defaultMessage: 'pushed',
        },
        pulled: {
            translationKey: 'gdxfor.pulled',
            defaultMessage: 'pulled',
        },
    },
    gdxfor_whenTilted: gdxforTiltAny,
    gdxfor_isTilted: gdxforTiltAny,
    gdxfor_getTilt: gdxforTilt,
    gdxfor_getSpinSpeed: gdxforAxis,
    gdxfor_getAcceleration: gdxforAxis,
    makeymakey_whenMakeyKeyPressed: {
        SPACE: {
            translationKey: 'makeymakey.spaceKey',
            defaultMessage: 'space',
        },
        UP: {
            translationKey: 'makeymakey.upArrow',
            defaultMessage: 'up arrow',
        },
        DOWN: {
            translationKey: 'makeymakey.downArrow',
            defaultMessage: 'down arrow',
        },
        RIGHT: {
            translationKey: 'makeymakey.rightArrow',
            defaultMessage: 'right arrow',
        },
        LEFT: {
            translationKey: 'makeymakey.leftArrow',
            defaultMessage: 'left arrow',
        },
        w: {
            defaultMessage: 'w',
        },
        a: {
            defaultMessage: 'a',
        },
        s: {
            defaultMessage: 's',
        },
        d: {
            defaultMessage: 'd',
        },
        f: {
            defaultMessage: 'f',
        },
        g: {
            defaultMessage: 'g',
        },
    },
    makeymakey_whenCodePressed: makeymakeySequences,
    microbit_whenButtonPressed: microbitButtons,
    microbit_isButtonPressed: microbitButtons,
    microbit_whenGesture: {
        moved: {
            translationKey: 'microbit.gesturesMenu.moved',
            defaultMessage: 'moved',
        },
        shaken: {
            translationKey: 'microbit.gesturesMenu.shaken',
            defaultMessage: 'shaken',
        },
        jumped: {
            translationKey: 'microbit.gesturesMenu.jumped',
            defaultMessage: 'jumped',
        },
    },
    microbit_whenTilted: microbitTiltAny,
    microbit_isTilted: microbitTiltAny,
    microbit_getTiltAngle: microbitTilt,
    microbit_whenPinConnected: {
        0: {
            defaultMessage: '0',
        },
        1: {
            defaultMessage: '1',
        },
        2: {
            defaultMessage: '2',
        },
    },
    wedo2_motorOnFor: wedo2Motors,
    wedo2_motorOn: wedo2Motors,
    wedo2_motorOff: wedo2Motors,
    wedo2_startMotorPower: wedo2Motors,
    wedo2_setMotorDirection: Object.assign({}, wedo2Motors, {
        'this way': {
            translationKey: 'wedo2.motorDirection.forward',
            defaultMessage: 'this way',
        },
        'that way': {
            translationKey: 'wedo2.motorDirection.backward',
            defaultMessage: 'that way',
        },
        reverse: {
            translationKey: 'wedo2.motorDirection.reverse',
            defaultMessage: 'reverse',
        },
    }),
    wedo2_whenDistance: {
        '<': {
            defaultMessage: '<',
        },
        '>': {
            defaultMessage: '>',
        },
    },
    wedo2_whenTilted: wedo2TiltAny,
    wedo2_isTilted: wedo2TiltAny,
    wedo2_getTiltAngle: wedo2Tilt,
};
