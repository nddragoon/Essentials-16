onEvent('recipes', event => {
    event.recipes.createMechanicalCrafting(
        Item.of('resourcefulbees:bee_jar', {"Entity":"resourcefulbees:redstone_bee"}),
        [
            ' T T ',
            'LRJRO',
            ' PPP '
        ], {
            T: '#minecraft:trapdoors',
            O: 'minecraft:observer',
            R: '#forge:storage_blocks/redstone',
            J: Item.of('resourcefulbees:bee_jar', {"Entity":"resourcefulbees:coal_bee"}).weakNBT(),
            P: 'minecraft:piston',
            L: 'minecraft:lever'
        }
    )
})