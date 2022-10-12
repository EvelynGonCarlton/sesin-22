let sprite1 = game.createSprite(0, 0)
let enemy = game.createSprite(randint(1, 4), randint(1, 4))
basic.forever(function () {
    while (input.buttonIsPressed(Button.AB)) {
        sprite1.move(1)
    }
    while (input.buttonIsPressed(Button.A)) {
        sprite1.move(8)
    }
    while (input.buttonIsPressed(Button.B)) {
        sprite1.move(0)
    }
})
