radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        basic.showString("HELP")
        basic.pause(2000)
        basic.clearScreen()
    }
    if (receivedNumber == 1) {
        basic.showString("DINNER")
        basic.pause(2000)
        basic.clearScreen()
    }
    if (receivedNumber == 2) {
        basic.showIcon(IconNames.Yes)
        music.setBuiltInSpeakerEnabled(true)
        music.setVolume(255)
        soundExpression.giggle.play()
        basic.pause(2000)
        basic.clearScreen()
    }
    if (receivedNumber == 3) {
        basic.showString("SHAKE")
        music.playMelody("C5 A B G A F G E ", 120)
        music.setBuiltInSpeakerEnabled(true)
        music.setVolume(255)
        soundExpression.giggle.play()
        basic.pause(2000)
        basic.clearScreen()
    }
    if (receivedNumber == 4) {
        basic.showString("LOUD")
        music.setBuiltInSpeakerEnabled(true)
        music.setVolume(255)
        for (let index = 0; index < 3; index++) {
            music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
        }
        basic.pause(2000)
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(0)
    soundExpression.sad.play()
    basic.showString("HELP")
    music.playTone(262, music.beat(BeatFraction.Quarter))
    basic.pause(500)
    basic.clearScreen()
})
input.onGesture(Gesture.LogoUp, function () {
    radio.sendNumber(2)
    basic.showIcon(IconNames.Heart)
    basic.pause(1000)
    basic.clearScreen()
})
input.onGesture(Gesture.TiltLeft, function () {
    radio.sendNumber(5)
    basic.showString("LEFT")
    basic.pause(2000)
    basic.clearScreen()
})
input.onSound(DetectedSound.Loud, function () {
    input.setSoundThreshold(SoundThreshold.Loud, 128)
    radio.sendNumber(4)
    led.enable(true)
    led.setBrightness(128)
    led.plotBarGraph(
    input.soundLevel(),
    255
    )
    basic.pause(100)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(1)
    soundExpression.twinkle.play()
    basic.showString("DINNER")
    basic.pause(1000)
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    input.setAccelerometerRange(AcceleratorRange.FourG)
    if (true) {
        music.setBuiltInSpeakerEnabled(false)
        radio.sendNumber(3)
        basic.showNumber(input.acceleration(Dimension.Strength))
        basic.pause(2000)
    }
})
input.onGesture(Gesture.TiltRight, function () {
    radio.sendNumber(2)
    basic.showString("RIGHT")
    basic.pause(2000)
    basic.clearScreen()
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    music.stopAllSounds()
})
radio.setGroup(1)
radio.setTransmitPower(7)
basic.forever(function () {
	
})
control.inBackground(function () {
	
})
