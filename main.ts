namespace smartData {


//% block="send data %data to register %register"
export function sendData(data: string, register: number){
    let save: string
    save = data
    serial.writeLine("saved your data : (" + data + ") to register : (" + (register) + ")")
    serial.writeLine("the next line is for the microbit to understand")
    serial.writeLine("")
    }
}
