onEvent('jei.hide.items', event => {
    materials = [
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
        'enderium',
        'netherite',
        'golden',
        'apatite',
        'cinnabar',
        'niter'
    ]
    
    removals = [
        'createaddition:zinc_sheet',
        'createdeco:zinc_sheet',
        'eidolon:lead_ore',
        'create:copper_ore',
        'create:zinc_ore',
        'occultism:copper_ore',
        'occultism:silver_ore',
        'tconstruct:copper_ore',
        'tconstruct:cobalt_ore',
        'projectred-exploration:ruby_ore',
        'projectred-exploration:sapphire_ore',
        'projectred-exploration:peridot_ore',
        'ars_nouveau:arcane_ore',
        'biggerreactos:yellorite_ore'
    ]

    for (element of materials) {
        removals.push(`thermal:${element}_plate`)
        removals.push(`thermal:${element}_ore`)
        removals.push(`createaddition:${element}_rod`)
        removals.push(`immersiveengineering:stick_${element}`)
        removals.push(`immersiveengineering:plate_${element}`)
        removals.push(`create:${element}_sheet`)
        removals.push(`immersiveengineering:ore_${element}`)
        removals.push(`projectred-exploration:${element}_ore`)
        removals.push(`mekanism:${element}_ore`)
    }

    removals.forEach(element => {
        event.hide(element)
    })
})
