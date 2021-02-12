const createMessage = () => {

    const items = ['staff', 'sword', 'shield', 'flail'];
    const creatures = ['a dragon', 'a corpse', 'a dwarf', 'an elf', 'a human', 'an undead'];
    const classes = ['Warrior', 'Hunter', 'Mage', 'Rogue', 'Death Knight'];
    const quality = ['a Common', 'an Uncommon', 'a Rare', 'an Epic', 'a Legendary']

    console.log(`Your ${selectRandomItem(classes)} looted ${selectRandomItem(quality)} ${selectRandomItem(items)} from ${selectRandomItem(creatures)}.`);
};

const selectRandomItem = arrOfItems => {

    return arrOfItems[Math.floor(Math.random() * arrOfItems.length)];
};

createMessage();