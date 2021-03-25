def on_received_number(receivedNumber):
    if receivedNumber == 0:
        basic.show_icon(IconNames.HAPPY)
    if receivedNumber == 1:
        basic.show_icon(IconNames.SAD)
    if receivedNumber == 2:
        music.set_built_in_speaker_enabled(True)
        music.set_volume(255)
        soundExpression.giggle.play()
radio.on_received_number(on_received_number)

def on_button_pressed_a():
    radio.send_number(0)
    basic.show_icon(IconNames.HAPPY)
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
    basic.show_icon(IconNames.HEART)
    basic.pause(2000)
    basic.clear_screen()
input.on_gesture(Gesture.TILT_LEFT, on_gesture_tilt_left)

def on_button_pressed_b():
    radio.send_number(1)
    basic.show_icon(IconNames.SAD)
    basic.pause(5000)
    basic.clear_screen()
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_gesture_tilt_right():
    radio.send_number(2)
    basic.show_icon(IconNames.HEART)
    basic.pause(2000)
    basic.clear_screen()
input.on_gesture(Gesture.TILT_RIGHT, on_gesture_tilt_right)

radio.set_transmit_power(7)

def on_forever():
    pass
basic.forever(on_forever)
