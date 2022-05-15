onEvent('recipes', event => {
    // craft iron bee
    event.custom({
        "type": "occultism:ritual",
        "ritual_type": "occultism:craft",
        "activation_item": {
            "item": "resourcefulbees:bee_jar"
        },
        "pentacle_id": "occultism:craft_djinni",
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
})