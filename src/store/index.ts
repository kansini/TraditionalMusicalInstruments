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