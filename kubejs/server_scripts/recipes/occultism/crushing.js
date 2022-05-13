onEvent('recipes', event => {
    function occultismCrushing(input_tag, output, output_amount, ignore_multiplier) {
        event.custom({
            "type": "occultism:crushing",
            "ingredient": {
                "tag": input_tag
            },
            "result": {
                "item": output,
                "count": output_amount
            },
            "crushing_time": 200,
            "ignore_crushing_multiplier": ignore_multiplier
        })
    }
    
    event.replaceOutput({id: 'occultism:crushing/obsidian'}, 'emendatusenigmatica:obsidian_dust', '4x emendatusenigmatica:obsidian_dust')

    { // Ore processing
        let metals = [
            'aluminum',
            'lead',
            'nickel',
            'uranium',
            'osmium',
            'tin',
            'zinc',
            'cobalt',
            'cloggrum',
            'froststeel',
            'utherium',
            'regalium'
        ]
        metals.forEach(metal => {
            occultismCrushing(
                `forge:ores/${metal}`,
                `emendatusenigmatica:${metal}_dust`,
                2,
                false
            )
            occultismCrushing(
                `forge:ingots/${metal}`,
                `emendatusenigmatica:${metal}_dust`,
                1,
                true
            )
        })
    }
})