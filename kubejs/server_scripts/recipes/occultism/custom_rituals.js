onEvent('recipes', event => {
    // craft iron bee
    event.custom({
        "type": "occultism:ritual",
        "ritual_type": "occultism:craft",
        "activation_item": {
            "item": "resourcefulbees:bee_jar"
        },
        "pentacle_id": "occultism:craft_marid",
        "duration": 10,
        "entity_to_sacrifice": {
            "tag": "forge:golems/iron",
            "display_name": "ritual.occultism.sacrifice.iron_golem"
        },
        "ritual_dummy": {
            "item": "kubejs:ritual_dummy/craft_iron_bee"
        },
        "ingredients": [
            {
                "tag": "forge:storage_blocks/wax"
            },
            {
                "tag": "resourcefulbees:resourceful_honeycomb_block"
            },
            {
                "tag": "forge:storage_blocks/iron"
            },
            {
                "tag": "forge:storage_blocks/iron"
            }
        ],
        "result": {
            "item": "resourcefulbees:bee_jar",
            "nbt": {
                "Entity": "resourcefulbees:iron_bee"
            }
        }
    }).id('kubejs:occultism/ritual/craft_iron_bee')
    // Craft emerald bee
    event.custom({
        type: 'occultism:ritual',
        ritual_type: 'occultism:craft',
        activation_item: {
            item: 'minecraft:emerald_block'
        },
        pentacle_id: 'occultism:craft_marid',
        duration: 20,
        entity_to_sacrifice: {
            tag: 'kubejs:wandering_trader',
            display_name: 'ritual.occultism.sacrifice.wandering_trader'
        },
        ritual_dummy: {
            item: 'kubejs:ritual_dummy/craft_emerald_bee'
        },
        ingredients: [
            Item.of('resourcefulbees:bee_jar', {"Entity":"resourcefulbees:diamond_bee"}).weakNBT().toJson(),
            {
                item: 'minecraft:blast_furnace'
            },
            {
                item: 'minecraft:smoker'
            },
            {
                item: 'minecraft:cartography_table'
            },
            {
                item: 'minecraft:brewing_stand'
            },
            {
                item: 'minecraft:composter'
            },
            {
                item: 'minecraft:fletching_table'
            },
            {
                item: 'minecraft:lectern'
            },
            {
                item: 'minecraft:stonecutter'
            },
            {
                item: 'minecraft:loom'
            },
            {
                item: 'minecraft:smithing_table'
            },
            {
                item: 'minecraft:grindstone'
            }
        ],
        result: {
            "item": "resourcefulbees:bee_jar",
            "nbt": {
                "Entity": "resourcefulbees:emerald_bee"
            }
        }
    }).id('kubejs:occultism/ritual/craft_emerald_bee')
})