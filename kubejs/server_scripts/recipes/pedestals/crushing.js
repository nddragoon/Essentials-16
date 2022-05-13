onEvent('recipes', event => {
    function pedestalCrushing (input_tag, output, output_count) {
        event.custom({
            type: 'pedestals:pedestal_crushing',
            ingredient: {
                tag: input_tag
            },
            result: {
                item: output,
                count: output_count
            }
        })
    }

    { // Ore processing
        let metals = [
            'zinc',
            'cobalt'
        ]
        metals.forEach(metal => {
            pedestalCrushing(
                `forge:ores/${metal}`,
                `emendatusenigmatica:${metal}_dust`,
                2
            )
        })
    }
})