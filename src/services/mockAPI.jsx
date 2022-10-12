import data from "../data/products.json";

export function getItems() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data);
        }, 1500);
    });
}

export function getItem(itemId) {
    return new Promise((resolve, reject) => {
        const item = data.find(({ id }) => id === parseInt(itemId));

        setTimeout(() => {
            if (item) resolve(item);
            else reject("Item no encontrado");
        }, 1500);
    });
}

export function getItemsByCategory(category) {
    return new Promise((resolve, reject) => {
        const items = data.filter((item) => {
            return item.category === category;
        });

        setTimeout(() => {
            if (items) resolve(items);
            else reject("Categoría no encontrada");
        }, 1500);
    });
}
