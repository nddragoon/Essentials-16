onEvent('recipes', event => {
    metals = [
        ['cobalt', 'emendatusenigmatica:cobalt_ingot', 'emendatusenigmatica:cobalt_nugget'],
        ['thallasium', 'betterendforge:thallasium_ingot', 'betterendforge:thallasium_nugget'],
        ['iesnium', 'occultism:iesnium_ingot', 'occultism:iesnium_nugget'],
        ['regalium', 'undergarden:regalium_ingot', 'undergarden:regalium_nugget'],
        ['utherium', 'undergarden:regalium_ingot', 'undergarden:regalium_nugget'],
        ['froststeel', 'undergarden:froststeel_ingot', 'undergarden:froststeel_nugget'],
        ['cloggrum', 'undergarden:cloggrum_ingot', 'undergarden:cloggrum_nugget'],
        ['nebu', 'atum:nebu_ingot', 'atum:nebu_drop']
    ]
    metals.forEach(metal => {
        event.recipes.createCrushing(
            [
                `emendatusenigmatica:${metal[0]}_crushed`,
                Item.of(`2x emendatusenigmatica:${metal[0]}_crushed`).withChance(0.3),
                Item.of('minecraft:cobblestone').withChance(0.12)
            ],
            `#forge:ores/${metal[0]}`
        )
        event.recipes.createMilling(
            `emendatusenigmatica:${metal[0]}_crushed`,
            `#forge:ores/${metal[0]}`
        )
        event.smelting(
            metal[1],
            `emendatusenigmatica:${metal[0]}_crushed`
        )
        event.blasting(
            metal[1],
            `emendatusenigmatica:${metal[0]}_crushed`
        )
        event.recipes.createSplashing(
            [
                `10x ${metal[2]}`,
                Item.of(`5x ${metal[2]}`).withChance(0.5)
            ],
            `emendatusenigmatica:${metal[0]}_crushed`
        )
    })
})