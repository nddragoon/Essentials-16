onEvent('recipes', event => {
    event.recipes.thermal.press(
        Item.of('resourcefulbees:bee_jar', {"Entity":"resourcefulbees:nickel_bee"}),
        [
            Item.of('resourcefulbees:bee_jar', {"Entity":"resourcefulbees:iron_bee"}).weakNBT(),
            'thermal:press_coin_die'
        ]
    )
})