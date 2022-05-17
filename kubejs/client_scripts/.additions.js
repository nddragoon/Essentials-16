onEvent('jei.subtypes', event => {
    event.useNBTKey('resourcefulbees:bee_jar', 'Entity')
})  

onEvent('jei.add.items', event => {
    //#region Bee Jars
    let bees = [
        'slimy',
        'redstone',
        'uranium',
        'tin',
        'sandy',
        'iron',
        'dragon',
        'nickel',
        'wither',
        'silver',
        'netherite',
        'diamond',
        'zinc',
        'coal',
        'emerald',
        'aluminum',
        'osmium',
        'copper',
        'lead'
    ]
    bees.forEach(bee => {
        event.add(Item.of('resourcefulbees:bee_jar', `{Entity:"resourcefulbees:${bee}_bee"}`))
    })
    //#endregion
})