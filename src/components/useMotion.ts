import {reactive} from "vue";

interface IMotion {
    opacity: number;
    blur: number;
    y: number;

    [key: string]: any;
}

interface IMotionOption {
    initial: IMotion;
    enter: IMotion;
    leave: IMotion;
}

export default function () {
    const motionOption = reactive<IMotionOption>({
        initial: {
            opacity: 0,
            blur: 20,
            y: -80,
        },
        enter: {
            opacity: 1,
            blur: 0,
            y: 0,
        },
        leave: {
            opacity: 0,
            blur: 20,
            y: -32,
        }
    })
    return {
        motionOption
    }
}