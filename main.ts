let RandomNumber = 0
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 2; index++) {
        music.playTone(440, music.beat(BeatFraction.Double))
        music.playTone(523, music.beat(BeatFraction.Whole))
        music.playTone(392, music.beat(BeatFraction.Double))
        music.rest(music.beat(BeatFraction.Whole))
        music.playTone(349, music.beat(BeatFraction.Whole))
        music.playTone(392, music.beat(BeatFraction.Whole))
    }
    music.playTone(440, music.beat(BeatFraction.Double))
    music.playTone(523, music.beat(BeatFraction.Whole))
    music.playTone(784, music.beat(BeatFraction.Double))
    music.playTone(698, music.beat(BeatFraction.Whole))
    music.playTone(523, music.beat(BeatFraction.Double))
    music.playTone(466, music.beat(BeatFraction.Half))
    music.playTone(440, music.beat(BeatFraction.Half))
    music.playTone(392, music.beat(BeatFraction.Whole))
})
input.onGesture(Gesture.Shake, function () {
    RandomNumber = randint(0, 3)
    if (RandomNumber == 3) {
        basic.showString("Good Day")
    }
    if (RandomNumber == 2) {
        basic.showString("Bad Day")
    }
    if (RandomNumber == 1) {
        basic.showString("Unclear")
    }
    if (RandomNumber == 0) {
        basic.showString("You figure it out")
    }
})
basic.forever(function () {
	
})
