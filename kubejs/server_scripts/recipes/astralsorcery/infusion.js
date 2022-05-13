onEvent('recipes', event => {
    metals = [
        ['copper'],
        ['aluminum'],
        ['silver'],
        ['lead'],
        ['nickel'],
        ['uranium'],
        ['osmium'],
        ['tin'],
        ['zinc'],
        ['cobalt'],
        ['thallasium', 'betterendforge:thallasium_ingot'],
        ['nebu', 'atum:nebu_ingot'],
        ['cloggrum', 'undergarden:cloggrum_ingot'],
        ['froststeel', 'undergarden:froststeel_ingot'],
        ['utherium', 'undergarden:utherium_ingot'],
        ['regalium', 'undergarden:regalium_ingot']
    ]
    metals.forEach(metal => {
        if (metal.length == 1) {
            metal.push(`emendatusenigmatica:${metal[0]}_ingot`)
        }
        event.custom({
            "type": "astralsorcery:infuser",
            "fluidInput": "astralsorcery:liquid_starlight",
            "input": {
                "tag": `forge:ores/${metal[0]}`
            },
            "output": {
                "item": metal[1],
                "count": 3
            },
            "consumptionChance": 0.1,
            "duration": 100,
            "consumeMultipleFluids": false,
            "acceptChaliceInput": true,
            "copyNBTToOutputs": false
        })
    })
})