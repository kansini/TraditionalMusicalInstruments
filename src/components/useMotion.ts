import {reactive} from "vue";

interface IMotion {
    opacity: number;
    filter: string;
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
            filter: "blur(20px)",
            y: -60,
        },
        enter: {
            opacity: 1,
            filter: "blur(0px)",
            y: 0
        },
        leave: {
            opacity: 0,
            filter: "blur(20px)",
            y: -40,
        }
    })
    return {
        motionOption
    }
}