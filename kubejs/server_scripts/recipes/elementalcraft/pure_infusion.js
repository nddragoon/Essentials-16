onEvent('recipes', event => {
    // element_amount is an integer
    // center_item is a json ingredient to support nbt
    // water, fire, earth, air are all items that go in their
    //     respective elemental pedestal
    // output is a json item to support nbt
    function pureInfusion (element_amount, center_item, water, fire, earth, air, output) {
        ingredients = [center_item]
        pedestal_items = [water, fire, earth, air]
        pedestal_items.forEach(item => {
            if (item.charAt() == '#') {
                item = item.slice(1)
                ingredients.push({tag: item})
            } else {
                ingredients.push({item:item})
            }
        })
        event.custom({
            type: 'elementalcraft:pureinfusion',
            element_amount: element_amount,
            ingredients: ingredients,
            output: output
        })
    }

    pureInfusion(
        60000,
        Item.of('resourcefulbees:bee_jar', {"Entity":"resourcefulbees:skeleton_bee"}).weakNBT().toJson(),
        'resourcefulbees:honey_fluid_bucket',
        'minecraft:wither_skeleton_skull',
        'minecraft:soul_sand',
        'minecraft:nether_star',
        {
            item: 'resourcefulbees:bee_jar',
            nbt: {"Entity":"resourcefulbees:wither_bee"}
        }
    )
})