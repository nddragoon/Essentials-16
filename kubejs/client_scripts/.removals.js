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
        'golden'
    ]
    
    removals = [
        'chiselsandbits:block_bit'
    ]

    for (element of materials) {
        removals.push(`thermal:${element}_plate`)
        removals.push(`createaddition:${element}_rod`)
        removals.push(`immersiveengineering:stick_${element}`)
        removals.push(`immersiveengineering:plate_${element}`)
        removals.push(`create:${element}_sheet`)
    }

    removals.forEach(element => {
        event.hide(element)
    })
})
