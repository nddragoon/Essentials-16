onEvent('recipes', event => {
    event.custom({
        type: 'powah:energizing',
        ingredients: [
            Item.of('resourcefulbees:bee_jar', {"Entity":"resourcefulbees:iron_bee"}).weakNBT().toJson(),
            {item:'minecraft:green_dye'}
        ],
        energy: 10000000,
        result: {
            item: 'resourcefulbees:bee_jar',
            nbt: {"Entity":"resourcefulbees:uranium_bee"}
        }
    })
})