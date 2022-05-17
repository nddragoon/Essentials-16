onEvent('recipes', event => {
    event.custom({
        type: 'interactio:item_lightning',
        inputs: [
            Item.of('resourcefulbees:bee_jar', {"Entity":"resourcefulbees:iron_bee"}).weakNBT().toJson()
        ],
        output: {
            entries: [
                {
                    result: {
                        item: 'resourcefulbees:bee_jar',
                        nbt: {"Entity":"resourcefulbees:copper_bee"}
                    },
                    weight: 1
                }
            ]
        }
    })
})