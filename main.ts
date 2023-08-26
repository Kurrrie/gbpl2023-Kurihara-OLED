OLED.init(128, 64)
basic.forever(function () {
    for (let カウンター = 0; カウンター <= 4; カウンター++) {
        OLED.writeNumNewLine(カウンター)
        basic.pause(1000)
        OLED.clear()
    }
})
