//% color="#AAEE00" icon="\u2699"
//% block="ET: EDrive"
//% block.loc.nl="ET: EDrive"
namespace EtEdrive {

    //% block="ID"
    //% block.loc.nl="ID"
    export function id(): String {
        return "ET-EDrive"
    }

    //% block="set speed to %speed \\%"
    //% block.loc.nl="stel de snelheid in op %speed \\%"
    //% speed.min=0 speed.max=100 speed.defl=50
    export function setSpeed(speed: number) {
    }

    //% block="stop"
    //% block.loc.nl="stop"
    export function stop() {
    }

    //% block="a number from %min utai %max"
    //% block.loc.nl="een getal van %min t/m %max"
    //% max.defl=10
    export function randomInt(min: number, max: number): number {
        let i = 0
        if (min > max) {
            i = min
            min = max
            max = i
        }
        i = max - min + 1
        i = min + Math.floor(Math.random() * i)
        return i
    }

    //% block="wait %time sec"
    //% block.loc.nl="wacht %time sec"
    //% min.defl=1
    export function wait(time: number) {
        basic.pause(time * 1000)
    }

    //% color="#008800"
    //% block="comment: %dummy"
    //% block.loc.nl="uitleg: %dummy"
    //% min.defl="schrijf hier je uitleg"
    export function comment(dummy: string) {
    }

}
