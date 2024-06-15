import {defineStore} from "pinia";

export const useMuteStore = defineStore('mute', {
    state: () => ({
        isMute: false
    }),
    actions: {
        toggleMute() {
            this.isMute = !this.isMute;
        }
    }
})
export const useCursorStore = defineStore('cursor', {
    state: () => ({
        text: '八音',
        size: 'large'
    }),
    actions: {
        setCursor(size: string = 'large', text: string = '八音') {
            if (size === 'default') {
                this.text = '八音';
                this.size = 'large';
            } else {
                this.text = text;
                this.size = size;
            }

        }
    }
})
export const useBgStore = defineStore('bg', {
    state: () => ({
        bgIndex: 0
    })
})
export const useCurrentStore = defineStore('current', {
    state: () => ({
        current: -1
    }),
    actions: {
        setCurrent(current: number) {
            this.current = current;
        }
    }
})