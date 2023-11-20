xiamiBoard.initXiaMiBoard()
basic.forever(function () {
    xiamiBoard.OLEDshowUserNumber(xiamiBoard.readFlre(), 0, 0)
    if (xiamiBoard.readFlre() > 200) {
        music.ringTone(294)
    } else {
        music.stopAllSounds()
    }
})
basic.forever(function () {
    xiamiBoard.OLEDclear()
    basic.pause(500)
})
