onEvent('recipes', event => {
    event.custom({
        type: 'create:sandpaper_polishing',
        ingredients: [
            Item.of('resourcefulbees:bee_jar', {"Entity":"resourcefulbees:iron_bee"}).weakNBT().toJson()
        ],
        results: [
            {
                item: 'resourcefulbees:bee_jar',
                nbt: {"Entity":"resourcefulbees:silver_bee"}
            }
        ]
    })
})