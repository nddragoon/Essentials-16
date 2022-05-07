onEvent('recipes', event => {
    metals = [
        'iron',
        'gold',
        'copper',
        'aluminum',
        'silver',
        'lead',
        'nickel',
        'uranium',
        'osmium',
        'tin',
        'zinc',
        'cobalt',
        'iridium',
        'bronze',
        'brass',
        'constantan',
        'electrum',
        'steel',
        'invar',
        'signalum',
        'lumium',
        'enderium'
    ]
    
    metals.forEach(element => {
        if (!(element in ['iron', 'gold'])) {
            event.replaceOutput(`#forge:ingots/${element}`, `emendatusenigmatica:${element}_ingot`)
            event.replaceInput(`#forge:ingots/${element}`, `#forge:ingots/${element}`)
            event.replaceOutput(`#forge:storage_blocks/${element}`, `emendatusenigmatica:${element}_block`)
            event.replaceInput(`#forge:storage_blocks/${element}`, `#forge:storage_blocks/${element}`)
            event.replaceOutput(`#forge:nuggets/${element}`, `emendatusenigmatica:${element}_nugget`)
            event.replaceInput(`#forge:nuggets/${element}`, `#forge:nuggets/${element}`)
        }
        event.replaceOutput(`#forge:gears/${element}`, `emendatusenigmatica:${element}_gear`)
        event.replaceInput(`#forge:gears/${element}`, `#forge:gears/${element}`)
        event.replaceOutput(`#forge:plates/${element}`, `emendatusenigmatica:${element}_plate`)
        event.replaceInput(`#forge:plates/${element}`, `#forge:plates/${element}`)
        event.replaceOutput(`#forge:rods/${element}`, `emendatusenigmatica:${element}_rod`)
        event.replaceInput(`#forge:rods/${element}`, `#forge:rods/${element}`)
        event.replaceOutput(`#forge:dusts/${element}`, `emendatusenigmatica:${element}_dust`)
        event.replaceInput(`#forge:dusts/${element}`, `#forge:dusts/${element}`)
    })

    // CCA rolling recipes fix

    {
        let additionsrecipes = [
            'createaddition:rolling/copper_ingot',
            'createaddition:rolling/brass_ingot',
            'createaddition:rolling/gold_ingot',
            'createaddition:rolling/iron_ingot',
            'createaddition:rolling/steel_ingot',
            'createaddition:rolling/copper_plate',
            'createaddition:rolling/aluminum_ingot'
        ]
        
        additionsrecipes.forEach(element => {
            event.remove({id: element})
        })

        let additionscustoms = [
            ['#forge:ingots/copper', 'emendatusenigmatica:copper_rod'],
            ['#forge:ingots/brass', 'emendatusenigmatica:brass_rod'],
            ['#forge:ingots/gold', 'emendatusenigmatica:gold_rod'],
            ['#forge:ingots/iron', 'emendatusenigmatica:iron_rod'],
            ['#forge:ingots/steel', 'emendatusenigmatica:steel_rod'],
            ['#forge:plates/copper', 'immersiveengineering:wire_copper'],
            ['#forge:ingots/aluminum', 'emendatusenigmatica:aluminum_rod']
        ]
        
        additionscustoms.forEach(element => {
            event.custom({
                "type": "createaddition:rolling",
                "input": element[0],
                "result": {
                    "item": element[1],
                    "count": 2
                }
            })
        })
    }
})
