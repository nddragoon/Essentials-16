onEvent('recipes', event => {
    event.recipes.createMixing(
        Item.of('resourcefulbees:bee_jar', {"Entity":"resourcefulbees:zinc_bee"}),
        [
            Item.of('resourcefulbees:bee_jar', {"Entity":"resourcefulbees:iron_bee"}).weakNBT(),
            '8x create:andesite_alloy'
        ]
    ).superheated()
})