onEvent('recipes', event => {
    // input is a json ingredient
    // output it a json itemstack
    // aura_type is whether it needs a natural or crimson altar
    // catalyst is what catalyst to use
    // aura is the amount of aura to consume
    // time is the time in ticks for the recipe to take
    function natualAltar (input, output, aura_type, catalyst, aura, time) {
        event.custom({
            type: 'naturesaura:altar',
            input: input,
            output: output,
            aura_type: aura_type,
            catalyst: {
                item: catalyst
            },
            aura: aura,
            time: time
        })
    }

    natualAltar(
        Item.of('resourcefulbees:bee_jar', {"Entity":"resourcefulbees:iron_bee"}).weakNBT().toJson(),
        {
            item: 'resourcefulbees:bee_jar',
            nbt: {"Entity":"resourcefulbees:aluminum_bee"}
        },
        'naturesaura:overworld',
        'naturesaura:conversion_catalyst',
        50000,
        200
    )
})