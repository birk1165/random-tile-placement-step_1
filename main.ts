namespace SpriteKind {
    export const bomb = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    bob,
    assets.animation`anim_up`,
    200,
    true
    )
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    bob,
    assets.animation`anim_left`,
    200,
    true
    )
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    bob,
    assets.animation`anim_right`,
    200,
    true
    )
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    bob,
    assets.animation`anim_down`,
    200,
    true
    )
})
function make_map () {
    scene.setTile(2, assets.tile`tile_0`, true)
    scene.setTile(5, assets.tile`tile_1`, false)
    scene.setTile(9, assets.tile`tile_2`, false)
    scene.setTile(1, assets.tile`fire_hole`, false)
    scene.setTile(10, img`
        . . . . . . . c c . . . . . . . 
        . . . . c c c 6 5 c 6 6 . . . . 
        . . . . c 6 c 5 5 c 7 6 . . . . 
        . . . 6 c c 7 5 5 7 c 6 6 . . . 
        . . c c 7 7 7 7 7 5 7 7 c 6 . . 
        . 6 6 6 c 6 7 7 7 7 6 c c 6 6 . 
        c 7 7 7 6 c 7 c 6 7 6 7 7 7 7 6 
        c c c 6 6 6 c 6 6 6 6 7 7 6 6 6 
        . c c 7 6 6 6 6 6 7 7 7 7 c 6 . 
        . c 7 7 6 6 7 6 6 7 7 6 7 7 c . 
        . c c c c 7 7 6 f 7 7 c c c c . 
        . . . . c 7 c f f c 7 c . . . . 
        . . . . . 6 f e e e c . . . . . 
        . . . . . e e e e e e . . . . . 
        . . . . e e . e e . e e . . . . 
        . . . . . . . e e . . . . . . . 
        `, true)
    scene.setTile(6, assets.image`player_1`, true)
    scene.setTile(3, assets.image`spook`, false)
}
let bob: Sprite = null
scene.setBackgroundImage(assets.image`base_bg`)
bob = sprites.create(assets.image`player_1`, SpriteKind.Player)
controller.moveSprite(bob, 100, 100)
scene.cameraFollowSprite(bob)
scene.setTileMap(assets.image`level_0`, TileScale.Sixteen)
let tile_list = scene.getTilesByType(2)
for (let value of tile_list) {
    scene.setTileAt(tile_list._pickRandom(), 5)
    scene.setTileAt(tile_list._pickRandom(), 9)
}
scene.placeOnRandomTile(bob, 9)
make_map()
game.onUpdate(function () {
    if (!(controller.up.isPressed() || controller.right.isPressed() || (controller.down.isPressed() || controller.left.isPressed()))) {
        bob.setImage(assets.image`player_1`)
    }
})
