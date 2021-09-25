let a_ha_sido_tocado = 0
input.onButtonPressed(Button.A, function () {
    a_ha_sido_tocado = 1
})
input.onButtonPressed(Button.B, function () {
    a_ha_sido_tocado = 2
})
basic.forever(function () {
    if (a_ha_sido_tocado == 1) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . # # # .
            . . # . .
            . . . . .
            `)
        basic.clearScreen()
        basic.pause(1)
        basic.showIcon(IconNames.Heart)
        basic.pause(1)
        basic.clearScreen()
        basic.showLeds(`
            . . . . .
            . # . # .
            . # # # .
            . . # . .
            . . . . .
            `)
        basic.pause(1)
        basic.clearScreen()
        basic.pause(1000)
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . #
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . #
            . . . # #
            . . . . #
            . . . . .
            `)
        basic.showLeds(`
            . . . . #
            . . . # #
            . . # # #
            . . . # #
            . . . . #
            `)
        basic.showLeds(`
            . . . # .
            . . # # .
            . # # # #
            . . # # .
            . . . # .
            `)
        basic.showLeds(`
            . . # . .
            . # # . .
            # # # # #
            . # # . .
            . . # . .
            `)
    }
})
