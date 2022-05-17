onEvent('recipes', event => {
    event.blasting(
        Item.of('resourcefulbees:bee_jar', {"Entity":"resourcefulbees:coal_bee"}),
        Item.of('resourcefulbees:bee_jar', {"Entity":"resourcefulbees:forest_bee"}).weakNBT()
    )
})