onEvent('item.registry', event => {
    event.create('ritual_dummy/craft_iron_bee')
    .type('occultism:ritual_dummy')
    .texture('kubejs:item/ritual_dummy')
    event.create('incomplete_slimy_bee')
    event.create('incomplete_lead_bee')
    event.create('incomplete_osmium_bee')
})