namespace smartData {

//% block="retrieve data %registerReciever"
//% group="data handeling"
    export function retrieveData(registerReciever: number) {
        let registernumber: number
        let line: string
        registernumber = registerReciever
        line = serial.readLine(registernumber)
    }

    //% block="send data %data to register %register"
    //% group="data handeling"
    export function sendData(data: string, register: number) {
        let save: string
        save = data
        serial.writeLine("sDd:= " + data + " sdR:=+ " + register + " SmDNonu")
    }
}
