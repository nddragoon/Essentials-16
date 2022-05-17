onEvent('recipes', event => {
    // energy is an integer of FE
    // core_input is a json ingredient
    // injector_inputs is an array of items or tags
    // tier is the minimum tier of injectors to use
    // output is a json item
    function fusionCrafting(energy, core_input, injector_inputs, tier, output) {
        ingredients = []
        injector_inputs.forEach(input => {
            if (input.charAt() == '#') {
                ingredients.push({tag: input.slice(1)})
            } else {
                ingredients.push({item: input})
            }
        })
        event.custom({
            type: 'draconicevolution:fusion_crafting',
            result: output,
            catalyst: core_input,
            total_energy: energy,
            tier: tier,
            ingredients: ingredients
        })
    }

    fusionCrafting(
        10000000,
        Item.of('resourcefulbees:bee_jar', {"Entity":"resourcefulbees:gold_bee"}).weakNBT().toJson(),
        [
            '#forge:storage_blocks/netherite',
            '#forge:storage_blocks/netherite',
            'draconicevolution:wyvern_core',
            'draconicevolution:wyvern_core',
            'resourcefulbees:wither_honeycomb_block',
            'resourcefulbees:wither_honeycomb_block'
        ],
        'WYVERN',
        {
            item: 'resourcefulbees:bee_jar',
            nbt: {"Entity":"resourcefulbees:netherite_bee"}
        }
    )
    fusionCrafting(
        100000000,
        Item.of('resourcefulbees:bee_jar', {"Entity":"resourcefulbees:ender_bee"}).weakNBT().toJson(),
        [
            'minecraft:dragon_egg',
            'betterendforge:aeternium_block',
            'minecraft:elytra',
            'minecraft:dragon_head',
            'draconicevolution:dragon_heart'
        ],
        'WYVERN',
        {
            item: 'resourcefulbees:bee_jar',
            nbt: {"Entity":"resourcefulbees:dragon_bee"}
        }
    )
})