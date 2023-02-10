const fs = require('fs');

const readData = filename => {
    const data = fs.readFileSync(filename);
    return data.toString().split('\r\n')
};
const showMessage = (name, buyItems, store) => {
    console.log(`Hi ${name}! How are you doing? By the way, we are run out of ${buyItems}. Please, could you go to ${store} and pick up all of that stuff?`);
};
const pickName = names => {
    return names[Math.floor(Math.random() * (names.length-1))];
};
const pickShopList = (shoplist, howManyItems) => {
    let items = [];
    let ind = 0;
    for (howManyItems; howManyItems > 0; howManyItems--) {
        ind = Math.floor(Math.random() * (shoplist.length-1));
        items.push(shoplist[ind]);
        shoplist.splice(ind, 1);
    };
    if (items.length > 1) items.splice(items.length-1, 1, "and "+items[items.length-1]);
    return items.join(', ');
};
const pickStore = stores => {
    return stores[Math.floor(Math.random() * (stores.length-1))];
};

const names_file="./names.txt";
const shoplist_file="./shopping-list.txt";
const stores_file="./stores.txt";

const names = readData(names_file);
const shoplist = readData(shoplist_file);
const stores = readData(stores_file);

// pick the random number of shopping items, from 1 to 5:
const howManyItems = Math.ceil(Math.random()*5);

showMessage(pickName(names),  pickShopList(shoplist, howManyItems), pickStore(stores));