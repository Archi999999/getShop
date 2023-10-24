import {RefObject, useRef} from "react";

export type KeysBtnRefs = '1'|'2'|'3'|'4'|'5'|'6'|'7'|'8'|'9'|'0'|'СТЕРЕТЬ'|'checkbox'|'confirm'|'closeBtn'|'inputPhone'

export type BtnRefsType = {
    [key in KeysBtnRefs]: RefObject<HTMLButtonElement> | RefObject<HTMLInputElement>
}

export function useBtnRefs(): BtnRefsType {
    return  {
        '1': useRef<HTMLButtonElement>(null),
        '2': useRef<HTMLButtonElement>(null),
        '3': useRef<HTMLButtonElement>(null),
        '4': useRef<HTMLButtonElement>(null),
        '5': useRef<HTMLButtonElement>(null),
        '6': useRef<HTMLButtonElement>(null),
        '7': useRef<HTMLButtonElement>(null),
        '8': useRef<HTMLButtonElement>(null),
        '9': useRef<HTMLButtonElement>(null),
        '0': useRef<HTMLButtonElement>(null),
        'СТЕРЕТЬ': useRef<HTMLButtonElement>(null),
        'checkbox': useRef<HTMLInputElement>(null),
        'confirm': useRef<HTMLButtonElement>(null),
        'closeBtn': useRef<HTMLButtonElement>(null),
        'inputPhone': useRef<HTMLInputElement>(null),
    }
}

type PathType = Exclude<KeysBtnRefs, 'inputPhone'>

type BtnPathTypes = {
    up: PathType
    right: PathType
    down: PathType
    left: PathType
}

type ButtonsPathType = {
    [key: string]: BtnPathTypes
}

export const btnPaths: ButtonsPathType = {
    '1': {
        up: 'confirm',
        right: '2',
        down: '4',
        left: 'closeBtn',
    },
    '2': {
        up: 'confirm',
        right: '3',
        down: '5',
        left: '1',
    },
    '3': {
        up: 'confirm',
        right: 'closeBtn',
        down: '6',
        left: '2',
    },
    '4': {
        up: '1',
        right: '5',
        down: '7',
        left: 'closeBtn',
    },
    '5': {
        up: '2',
        right: '6',
        down: '8',
        left: '4',
    },
    '6': {
        up: '3',
        right: 'closeBtn',
        down: '9',
        left: '5',
    },
    '7': {
        up: '4',
        right: '5',
        down: 'СТЕРЕТЬ',
        left: 'closeBtn',
    },
    '8': {
        up: '5',
        right: '9',
        down: 'СТЕРЕТЬ',
        left: '7',
    },
    '9': {
        up: '6',
        right: 'closeBtn',
        down: '0',
        left: '8',
    },
    '0': {
        up: '9',
        right: 'closeBtn',
        down: 'checkbox',
        left: 'СТЕРЕТЬ',
    },
    'СТЕРЕТЬ': {
        up: '8',
        right: '0',
        down: 'checkbox',
        left: 'closeBtn',
    },
    'checkbox': {
        up: 'СТЕРЕТЬ',
        right: 'closeBtn',
        down: 'confirm',
        left: 'closeBtn',
    },
    'confirm': {
        up: 'checkbox',
        right: 'closeBtn',
        down: '2',
        left: 'closeBtn',
    },
    'closeBtn': {
        up: 'closeBtn',
        right: '1',
        down: 'closeBtn',
        left: '3',
    },
}
