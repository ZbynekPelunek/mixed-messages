const createMessage = () => {

    const items = ['staff', 'sword', 'shield'];
    const creatures = ['dragon', 'corpse', 'dwarf'];
    const classes = ['warrior', 'hunter', 'mage'];

    console.log(`You looted ${items[0]} from ${creatures[0]} for a ${classes[0]}.`);
};

createMessage();