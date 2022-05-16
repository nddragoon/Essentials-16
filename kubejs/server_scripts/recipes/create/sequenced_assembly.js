// The base of this code was borrowed and slightly modified
// from Enigmatica 6 Expert. Thanks Niller!

onEvent('recipes', event => {
    const recipes = [
        { // Slimy Bee
            input: 'resourcefulbees:bee_jar',
            outputs: [
                Item.of('resourcefulbees:bee_jar', {"Entity": "resourcefulbees:slimy_bee"})
            ],
            transitionalItem: 'kubejs:incomplete_slimy_bee',
            loops: 10,
            sequence: [
                {
                    type: 'deploying',
                    input: 'xreliquary:slime_pearl'
                },
                {
                    type: 'deploying',
                    input: '#resourcefulbees:resourceful_honeycomb'
                },
                {
                    type: 'filling',
                    input: Fluid.of('tconstruct:earth_slime', 1000)
                }
            ]
        },
        { // Lead bee
            input: Item.of('resourcefulbees:bee_jar', {"Entity":"resourcefulbees:iron_bee"}).weakNBT(),
            outputs: [
                Item.of('resourcefulbees:bee_jar', {"Entity":"resourcefulbees:lead_bee"})
            ],
            transitionalItem: 'kubejs:incomplete_lead_bee',
            loops: 1,
            sequence: [
                {
                    type: 'deploying',
                    input: 'mekanism:hazmat_mask'
                },
                {
                    type: 'deploying',
                    input: 'mekanism:hazmat_gown'
                },
                {
                    type: 'deploying',
                    input: 'mekanism:hazmat_pants'
                },
                {
                    type: 'deploying',
                    input: 'mekanism:hazmat_boots'
                }
            ]
        },
        { // Osmium Bee
            input: Item.of('resourcefulbees:bee_jar', {"Entity":"resourcefulbees:iron_bee"}).weakNBT(),
            outputs: [
                Item.of('resourcefulbees:bee_jar', {"Entity":"resourcefulbees:osmium_bee"})
            ],
            transitionalItem: 'kubejs:incomplete_osmium_bee',
            loops: 4,
            sequence: [
                {
                    type: 'filling',
                    input: Fluid.of('create:potion', 250, {"Bottle":"REGULAR","Potion":"minecraft:strong_turtle_master"})
                },
                {
                    type: 'deploying',
                    input: 'mekanism:ultimate_control_circuit'
                }
            ]
        }
    ]
    
    recipes.forEach((recipe) => {
        let sequence = [];

        recipe.sequence.forEach((step) => {
            switch (step.type) {
                case 'deploying':
                    sequence.push(event.recipes.create.deploying(recipe.transitionalItem, [recipe.transitionalItem, step.input]))
                    break
                case 'cutting':
                    sequence.push(
                        event.recipes.create.cutting(recipe.transitionalItem, [recipe.transitionalItem, step.input]).processingTime(step.processingTime)
                    );
                    break
                case 'filling':
                    sequence.push(event.recipes.create.filling(recipe.transitionalItem, [recipe.transitionalItem, step.input]));
                    break
                case 'pressing':
                    sequence.push(event.recipes.create.pressing(recipe.transitionalItem, [recipe.transitionalItem, step.input]));
                    break
            }
        });

        event.recipes.create
            .sequenced_assembly(recipe.outputs, recipe.input, sequence)
            .loops(recipe.loops)
            .transitionalItem(recipe.transitionalItem)
    });
})