// priority: 1000

onEvent('item.tags', event => {
    event.add('create:upright_on_belt', [
        'resourcefulbees:bee_jar',
        'kubejs:incomplete_slimy_bee',
        'kubejs:incomplete_lead_bee',
        'kubejs:incomplete_osmium_bee'
    ])
})

onEvent('entity_type.tags', event => {
    event.add('forge:golems/iron', 'minecraft:iron_golem')
    event.add('kubejs:wandering_trader', 'minecraft:wandering_trader')
})

onEvent('tags.fluids', event => {
    event.add('create:no_infinite_draining', /.*/)
    event.remove('create:no_infinite_draining', [
        'minecraft:water',
        'minecraft:lava',
        'minecraft:milk',
        'create:chocolate',
        'create:honey',
        'immersivepetroleum:oil',
        'pneumaticcraft:oil'
    ])
})
