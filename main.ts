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
        if (true) {
            basic.showString("LOUD")
            music.setBuiltInSpeakerEnabled(true)
            music.setVolume(255)
            for (let index = 0; index < 1; index++) {
                music.startMelody(music.builtInMelody(Melodies.Nyan), MelodyOptions.Once)
            }
            basic.pause(2000)
        }
    }
    if (input.logoIsPressed()) {
        if (receivedNumber == 5) {
            basic.showString("CLEAR")
            for (let index = 0; index < 5; index++) {
                soundExpression.yawn.play()
                music.stopAllSounds()
            }
        }
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(0)
    music.setBuiltInSpeakerEnabled(true)
    soundExpression.slide.play()
    basic.showString("HELP")
    soundExpression.slide.play()
    basic.pause(5000)
    basic.clearScreen()
})
input.onGesture(Gesture.LogoUp, function () {
    radio.sendNumber(2)
    basic.showIcon(IconNames.Heart)
    basic.pause(2000)
    basic.clearScreen()
})
input.onGesture(Gesture.TiltLeft, function () {
    radio.sendNumber(2)
    basic.showString("LEFT")
    basic.pause(2000)
    basic.clearScreen()
})
input.onSound(DetectedSound.Loud, function () {
    input.setSoundThreshold(SoundThreshold.Loud, 228)
    basic.showString("LOUD")
    radio.sendNumber(4)
    music.setBuiltInSpeakerEnabled(true)
    music.setVolume(255)
    music.ringTone(523)
    basic.pause(2000)
    music.stopAllSounds()
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(1)
    music.setBuiltInSpeakerEnabled(true)
    soundExpression.happy.play()
    basic.showString("DINNER")
    basic.pause(5000)
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    if (true) {
        radio.sendNumber(3)
        music.setBuiltInSpeakerEnabled(true)
        input.setAccelerometerRange(AcceleratorRange.FourG)
        music.playMelody("C5 A B G A F G E ", 120)
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
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    radio.sendNumber(5)
    soundExpression.twinkle.play()
    music.stopAllSounds()
    music.setBuiltInSpeakerEnabled(false)
})
radio.setGroup(1)
radio.setTransmitPower(7)
basic.forever(function () {
	
})
control.inBackground(function () {
	
})
