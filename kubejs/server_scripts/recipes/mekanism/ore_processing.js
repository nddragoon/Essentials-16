onEvent('recipes', event => {
    metals = [
        'aluminum',
        'cloggrum',
        'cobalt',
        'iesnium',
        'nebu',
        'nickel',
        'regalium',
        'silver',
        'thallasium',
        'utherium',
        'zinc',
        'froststeel'
    ]

    metals.forEach(metal => {
        // Chemical dissolution (5x)
        event.custom({
            type: 'mekanism:dissolution',
            itemInput: { tag: `forge:ores/${metal}` },
            gasInput: {
                gas: 'mekanism:sulfuric_acid',
                amount: 1
            },
            output: {
                slurry: `emendatusenigmatica:dirty_${metal}`,
                amount: 1000,
                chemicalType: 'slurry'
            }
        })

        // Chemical washing (from dirty slurry)
        event.custom({
            type: 'mekanism:washing',
            fluidInput: {
                tag: 'minecraft:water',
                amount: 5
            },
            slurryInput: {
                slurry: `emendatusenigmatica:dirty_${metal}`,
                amount: 1
            },
            output: {
                slurry: `emendatusenigmatica:clean_${metal}`,
                amount: 1
            }
        })

        // Crystallizing (from clean slurry)
        event.custom({
            type: 'mekanism:crystallizing',
            chemicalType: 'slurry',
            input: {
                slurry: `emendatusenigmatica:clean_${metal}`,
                amount: 200
            },
            output: { item: `emendatusenigmatica:${metal}_crystal` }
        })

        // Injecting (from crystal)
        event.custom({
            type: 'mekanism:injecting',
            itemInput: { ingredient: { item: `emendatusenigmatica:${metal}_crystal` } },
            gasInput: {
                gas: 'mekanism:hydrogen_chloride',
                amount: 1
            },
            output: { item: `emendatusenigmatica:${metal}_shard` }
        })

        // Injecting (from ore) (4x)
        event.custom({
            type: 'mekanism:injecting',
            itemInput: { ingredient: { tag: `forge:ores/${metal}` } },
            gasInput: {
                gas: 'mekanism:hydrogen_chloride',
                amount: 1
            },
            output: {
                item: `emendatusenigmatica:${metal}_shard`,
                count: 4
            }
        })

        // Purifying (from shard)
        event.custom({
            type: 'mekanism:purifying',
            itemInput: { ingredient: { item: `emendatusenigmatica:${metal}_shard` } },
            gasInput: {
                gas: 'mekanism:oxygen',
                amount: 1
            },
            output: { item: `emendatusenigmatica:${metal}_clump` }
        })

        // Purifying (from ore) (3x)
        event.custom({
            type: 'mekanism:purifying',
            itemInput: { ingredient: { tag: `forge:ores/${metal}` } },
            gasInput: {
                gas: 'mekanism:oxygen',
                amount: 1
            },
            output: {
                item: `emendatusenigmatica:${metal}_clump`,
                count: 3
            }
        })

        // Crushing (from clump)
        event.recipes.mekanismCrushing(
            `emendatusenigmatica:${metal}_dirty_dust`,
            `emendatusenigmatica:${metal}_clump`
        )

        if (metal != 'iesnium') {
            // Enriching (from dirty dust)
            event.recipes.mekanismEnriching(
                `emendatusenigmatica:${metal}_dust`,
                `emendatusenigmatica:${metal}_dirty_dust`,
            )

            // Enriching (from ore)
            event.recipes.mekanismEnriching(
                `2x emendatusenigmatica:${metal}_dust`,
                `#forge:ores/${metal}`
            )
        } else {
            // Enriching (from dirty dust)
            event.recipes.mekanismEnriching(
                'occultism:iesnium_dust',
                'emendatusenigmatica:iesnium_dirty_dust',
            )

            // Enriching (from ore)
            event.recipes.mekanismEnriching(
                '2x occultism:iesnium_dust',
                `#forge:ores/iesnium`
            )
        }
    })
})
