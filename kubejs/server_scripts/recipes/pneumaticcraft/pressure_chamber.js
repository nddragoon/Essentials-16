onEvent('recipes', event => {
    event.custom({
        type: 'pneumaticcraft:pressure_chamber',
        inputs: [
            Item.of('resourcefulbees:bee_jar', {"Entity": "resourcefulbees:rgbee_bee"}).weakNBT().toJson(),
            {
                type: "pneumaticcraft:stacked_item",
                tag: 'forge:storage_blocks/graphite',
                count: 64
            }
        ],
        pressure: 4.9,
        results: [
            {
                item: 'resourcefulbees:bee_jar',
                nbt: {
                    "Entity": "resourcefulbees:diamond_bee"
                }
            }
        ]
    })
})