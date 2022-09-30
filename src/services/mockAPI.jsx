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
        let item = data.find(({ id }) => {
            return id === parseInt(itemId);
        });

        setTimeout(() => {
            if (item) resolve(item);
            else reject("item no encontrado");
        }, 1500);
    });
}

export function getItemsByCategory(category) {
    return new Promise((resolve, reject) => {
        let items = data.filter((item) => {
            return item.category === category;
        });

        setTimeout(() => {
            if (items.length) resolve(items);
            else reject("categoría no encontrada");
        }, 1500);
    });
}
