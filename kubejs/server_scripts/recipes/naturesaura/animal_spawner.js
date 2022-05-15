onEvent('recipes', event => {
    function birthingAltar (items, entity, aura, time) {
        event.custom({
            type: 'naturesaura:animal_spawner',
            ingredients: items,
            entity: entity,
            aura: aura,
            time: time
        })
    }

    birthingAltar(
        [
            { item: 'naturesaura:birth_spirit' },
            { tag: 'resourcefulbees:resourceful_honeycomb_block' },
            { tag: 'minecraft:logs' },
            { tag: 'minecraft:saplings' }
        ],
        'resourcefulbees:forest_bee',
        120000,
        100
    )
})