// This code was borrowed and slightly modified from
// Enigmatica 6 Expert. Thanks Niller!

onEvent('recipes', event => {
    const recipes = [
        {
            input: 'resourcefulbees:bee_jar',
            outputs: [
                Item.of('resourcefulbees:bee_jar', {"Entity": "resourcefulbees:slimy_bee"})
            ],
            transitionalItem: 'kubejs:incomplete_slimy_bee',
            loops: 10,
            sequence: [
                {
                    type: 'deploying',
                    input: ['kubejs:incomplete_slimy_bee', 'xreliquary:slime_pearl'],
                    output: 'kubejs:incomplete_slimy_bee'
                },
                {
                    type: 'deploying',
                    input: ['kubejs:incomplete_slimy_bee', '#resourcefulbees:resourceful_honeycomb'],
                    output: 'kubejs:incomplete_slimy_bee'
                },
                {
                    type: 'filling',
                    input: ['kubejs:incomplete_slimy_bee', Fluid.of('tconstruct:earth_slime', 1000)],
                    output: 'kubejs:incomplete_slimy_bee'
                }
            ]
        }
    ]
    
    recipes.forEach((recipe) => {
        let sequence = [];

        recipe.sequence.forEach((step) => {
            switch (step.type) {
                case 'deploying':
                    sequence.push(event.recipes.create.deploying(step.output, step.input))
                    break
                case 'cutting':
                    sequence.push(
                        event.recipes.create.cutting(step.output, step.input).processingTime(step.processingTime)
                    );
                    break
                case 'filling':
                    sequence.push(event.recipes.create.filling(step.output, step.input));
                    break
                case 'pressing':
                    sequence.push(event.recipes.create.pressing(step.output, step.input));
                    break
            }
        });

        event.recipes.create
            .sequenced_assembly(recipe.outputs, recipe.input, sequence)
            .loops(recipe.loops)
            .transitionalItem(recipe.transitionalItem)
    });
})