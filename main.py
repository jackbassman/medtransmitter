def on_received_number(receivedNumber):
    if receivedNumber == 0:
        basic.show_string("HELP")
        basic.pause(2000)
        basic.clear_screen()
    if receivedNumber == 1:
        basic.show_string("DINNER")
        basic.pause(2000)
        basic.clear_screen()
    if receivedNumber == 2:
        basic.show_icon(IconNames.YES)
        music.set_built_in_speaker_enabled(True)
        music.set_volume(255)
        soundExpression.giggle.play()
        basic.pause(2000)
        basic.clear_screen()
    if receivedNumber == 3:
        basic.show_string("SHAKE")
        music.play_melody("C5 A B G A F G E ", 120)
        music.set_built_in_speaker_enabled(True)
        music.set_volume(255)
        soundExpression.giggle.play()
        basic.pause(2000)
        basic.clear_screen()
    if receivedNumber == 4:
        basic.show_string("LOUD")
        music.set_built_in_speaker_enabled(True)
        music.set_volume(255)
        for index in range(3):
            music.start_melody(music.built_in_melody(Melodies.NYAN), MelodyOptions.ONCE)
        basic.pause(2000)
        basic.clear_screen()
radio.on_received_number(on_received_number)

def on_button_pressed_a():
    radio.send_number(0)
    basic.show_string("HELP")
    basic.pause(5000)
    basic.clear_screen()
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_gesture_logo_up():
    radio.send_number(2)
    basic.show_icon(IconNames.HEART)
    basic.pause(2000)
    basic.clear_screen()
input.on_gesture(Gesture.LOGO_UP, on_gesture_logo_up)

def on_gesture_tilt_left():
    radio.send_number(2)
    basic.show_string("LEFT")
    basic.pause(2000)
    basic.clear_screen()
input.on_gesture(Gesture.TILT_LEFT, on_gesture_tilt_left)

def on_sound_loud():
    radio.send_number(4)
    input.set_sound_threshold(SoundThreshold.LOUD, 130)
    led.enable(True)
    led.set_brightness(128)
    led.plot_bar_graph(input.sound_level(), 255)
input.on_sound(DetectedSound.LOUD, on_sound_loud)

def on_button_pressed_b():
    radio.send_number(1)
    basic.show_string("DINNER")
    basic.pause(5000)
    basic.clear_screen()
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_gesture_shake():
    if True:
        music.set_built_in_speaker_enabled(False)
        input.set_accelerometer_range(AcceleratorRange.TWO_G)
        radio.send_number(3)
        basic.show_number(input.acceleration(Dimension.STRENGTH))
        music.play_melody("C5 A B G A F G E ", 120)
        basic.pause(2000)
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

def on_gesture_tilt_right():
    radio.send_number(2)
    basic.show_string("RIGHT")
    basic.pause(2000)
    basic.clear_screen()
input.on_gesture(Gesture.TILT_RIGHT, on_gesture_tilt_right)

radio.set_group(1)
radio.set_transmit_power(7)

def on_forever():
    pass
basic.forever(on_forever)

def on_in_background():
    pass
control.in_background(on_in_background)
