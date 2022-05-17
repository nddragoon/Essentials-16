onEvent('recipes', event => {
    metals = [
        'copper',
        'aluminum',
        'lead',
        'nickel',
        'uranium',
        'osmium',
        'tin',
        'zinc',
        'cobalt',
        'thallasium',
        'regalium',
        'utherium',
        'froststeel',
        'cloggrum',
        'nebu',
        'iesnium'
    ]
    metals.forEach(metal => {
        event.recipes.bloodmagic.arc(
            `3x emendatusenigmatica:${metal}_fragment`,
            `#forge:ores/${metal}`,
            '#bloodmagic:arc/explosive'
        )
        event.recipes.bloodmagic.arc(
            `emendatusenigmatica:${metal}_gravel`,
            `emendatusenigmatica:${metal}_fragment`,
            '#bloodmagic:arc/resonator',
            [Item.of('bloodmagic:corrupted_tinydust').withChance(0.05)]
        )
        if (metal != 'iesnium') {
            event.recipes.bloodmagic.arc(
                `emendatusenigmatica:${metal}_dust`,
                `emendatusenigmatica:${metal}_gravel`,
                '#bloodmagic:arc/cuttingfluid'
            )
            event.recipes.bloodmagic.arc(
                `2x emendatusenigmatica:${metal}_dust`,
                `#forge:ores/${metal}`,
                '#bloodmagic:arc/cuttingfluid'
            )
            event.recipes.bloodmagic.arc(
                `emendatusenigmatica:${metal}_dust`,
                `#forge:ingots/${metal}`,
                '#bloodmagic:arc/explosive'
            )
        }
    })
    // Iesnium doesnt have an emendatus dust :(
    event.recipes.bloodmagic.arc(
        'occultism:iesnium_dust',
        'emendatusenigmatica:iesnium_gravel',
        '#bloodmagic:arc/cuttingfluid'
    )
    event.recipes.bloodmagic.arc(
        '2x occultism:iesnium_dust',
        '#forge:ores/iesnium',
        '#bloodmagic:arc/cuttingfluid'
    )
    event.recipes.bloodmagic.arc(
        'occultism:iesnium_dust',
        '#forge:ingots/iesnium',
        '#bloodmagic:arc/explosive'
    )
})
