input.buttonA.onEvent(ButtonEvent.Click, function () {
    pause(500)
    reading = pins.A1.analogRead()
    voltage = reading * (1000 / 340)
    console.logValue("reading", reading)
    console.logValue("voltage", voltage)
    if (voltage >= 1400) {
        light.setAll(0x00ff00)
        music.baDing.play()
    }
    if (voltage >= 750 && voltage <= 1399) {
        light.graph(voltage, 1500)
        music.pewPew.play()
    }
    if (voltage >= 0 && voltage <= 499) {
        light.graph(voltage, 1500)
        music.powerDown.play()
    }
})
input.buttonB.onEvent(ButtonEvent.Click, function () {
    pause(500)
    reading = pins.A1.analogRead()
    voltage = reading * (1000 / 340)
    console.logValue("voltage", voltage)
    console.logValue("reading", reading)
    if (voltage >= 1400) {
        light.setAll(0x00ff00)
        music.baDing.play()
    }
    if (voltage >= 500 && voltage <= 1399) {
        light.graph(voltage, 1500)
        music.pewPew.play()
    }
    if (voltage >= 0 && voltage <= 500) {
        light.setAll(0xff0000)
        music.powerDown.play()
    }
    pause(500)
})
/**
 * The variable 'reading' takes the raw analog input from pin A1. The next line converts that reading to rough 'millivoltage'
 */
/**
 * 3 volts gives a reading of about 1023, so 1 volt should read around 340 (340 = 1024 / 3). Using this ratio and multiplying the number by 1000 should convert the number to millivolts before doing the division by 340. Millivolts is easier math and gives a more precise reading, to get volts divide by 1000.
 */
let voltage = 0
let reading = 0
music.setVolume(179)
