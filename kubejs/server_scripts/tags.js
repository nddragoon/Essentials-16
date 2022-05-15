// priority: 1000

onEvent('entity_type.tags', event => {
    event.add('forge:golems/iron', 'minecraft:iron_golem')
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
