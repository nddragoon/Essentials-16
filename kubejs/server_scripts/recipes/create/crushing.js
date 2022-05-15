onEvent('recipes', event => {
    event.recipes.createCrushing(
        Item.of('resourcefulbees:bee_jar', {"Entity": "resourcefulbees:sandy_bee"}),
        Item.of('resourcefulbees:bee_jar', {"Entity": "resourcefulbees:rocky_bee"}).weakNBT()
    )
})