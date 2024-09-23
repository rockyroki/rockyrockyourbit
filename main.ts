radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        music.play(music.stringPlayable("F A C5 F A C5 F A ", 180), music.PlaybackMode.InBackground)
        for (let index = 0; index < 4; index++) {
            basic.showIcon(IconNames.Heart)
            basic.showIcon(IconNames.SmallHeart)
        }
    }
})
input.onButtonPressed(Button.A, function () {
    direction = input.compassHeading()
    if (direction <= 5 || direction >= 355) {
        basic.showString("N")
        music.play(music.tonePlayable(698, music.beat(BeatFraction.Breve)), music.PlaybackMode.UntilDone)
    } else {
        basic.clearScreen()
        music.ringTone(0)
    }
})
input.onGesture(Gesture.SixG, function () {
    music.play(music.stringPlayable("C5 G C5 G C5 G C5 G ", 110), music.PlaybackMode.InBackground)
    for (let index = 0; index < 8; index++) {
        basic.showLeds(`
            . # . . .
            . # . . .
            . # . . .
            . . . . .
            . # . . .
            `)
        basic.showLeds(`
            . . . # .
            . . . # .
            . . . # .
            . . . . .
            . . . # .
            `)
    }
})
let direction = 0
music.play(music.stringPlayable("C D E C E G A G ", 170), music.PlaybackMode.InBackground)
basic.showString("safeRIDE")
radio.setGroup(1)
basic.forever(function () {
    if (input.isGesture(Gesture.TiltLeft)) {
        for (let index = 0; index < 4; index++) {
            basic.showLeds(`
                . . # . .
                . # . . .
                # # # # #
                . # . . .
                . . # # .
                `)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
        }
    } else if (input.isGesture(Gesture.TiltRight)) {
        for (let index = 0; index < 4; index++) {
            basic.showLeds(`
                . . # . .
                . . . # .
                # # # # #
                . . . # .
                . . # . .
                `)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
        }
    }
    basic.showLeds(`
        . # # # .
        # # # # #
        # # . # #
        # # # # #
        . # # # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.B)) {
        radio.sendNumber(1)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        music.stopAllSounds()
    }
})
