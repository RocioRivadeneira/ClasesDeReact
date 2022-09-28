const data = [
    {
        id: 1,
        img: "/assets/images/galeria.jpg",
        title: "Juego de comedor",
        detail: "juego de mesa y 4 sillas de hierro modelo romano con 4 almohadones eco cuero talampaya color natural. Varios colores de tapiz",
        price: 60000,
        stock: 4,
    },
    {
        id: 2,
        img: "/assets/images/galeria1.jpg",
        title: "Cama con baulera",
        detail: "Cama Box Base Sommiers Cajones Madera Multifunción. Colores: Madera Clara / Madera Oscura / LaqueadoBlanco.",
        price: 30000,
        stock: 2,
    },
    {
        id: 3,
        img: "/assets/images/galeria2.jpg",
        title: "Parrilla",
        detail: "Parrilla móvil. Fogón incorporado y leñeroincorporado Pala, atizador de regalo y 2 tablas congrabado personalizado.",
        price: 50000,
        stock: 5,
    },
    {
        id: 4,
        img: "/assets/images/galeria3.jpg",
        title: "Juego de baño",
        detail: "Asegura durabilidad duradera con construcción de tubo acero. tratamiento cromado para mayor resistencia y fácil instalación y fácil manejo.",
        price: 20000,
        stock: 10,
    },
    {
        id: 5,
        img: "/assets/images/galeria4.jpg",
        title: "Disco Artesanal",
        detail: "Disco de acero, 3 patas desmontables se pueden usar en la parrilla en un mechero o directo al suelo. Las manijas son de hierro al igual que la tapa.",
        price: 25000,
        stock: 5,
    },
    {
        id: 6,
        img: "/assets/images/galeria5.jpg",
        title: "Porta Macetas",
        detail: " Soporte para macetas colgantes hay disponibles para 6, 5, 4 y 2 macetas. Vienen pintados de blanco o negro. Se pueden hacer de distintas formas artesanales",
        price: 10000,
        stock: 5,
    },
    {
        id: 7,
        img: "/assets/images/estante-cocina.jpg",
        title: "Estante de cocina",
        detail: "Estante organizador de hierro y madera extra fuerte para cocina. Madera de una pulgada de espesor , soporte de hierro reforzado.",
        price: 25000,
        stock: 5,
    },
    {
        id: 8,
        img: "/assets/images/cucheta.jpg",
        title: "Cucheta infantil",
        detail: " Incluye baranda y escalera. Color natural + kit de tornillos, arandelas y tuercas. Viene en color natural, lijadas, cepilladas y barnizadas, lista para usar.",
        price: 25000,
        stock: 5,
    },
    {
        id: 9,
        img: "/assets/images/estante-comedor.jpg",
        title: "Estante de Comedor",
        detail: "3 Repisas estantes flotantes de madera maciza resistente apta para tu sala o cocina. Puedes mantener tus espacios organizados.",
        price: 25000,
        stock: 5,
    },
    {
        id: 10,
        img: "/assets/images/juego-exterior.jpg",
        title: "Juego de exterior",
        detail: "Mesa y Bancos Fabricados con Tapas en Madera Petiribi y Estructura en Hierro Negro. Incluye mesa con sus respectivas 4 sillas.",
        price: 25000,
        stock: 5,
    },
    {
        id: 11,
        img: "/assets/images/maquillaje.jpg",
        title: "Mesa de maquillaje",
        detail: "Hecha con melamina, 6 cajones, silla en conjunto, estante en el lado derecho y espejo de 30cm*50cm con espejos laterales.",
        price: 25000,
        stock: 5,
    },
    {
        id: 12,
        img: "/assets/images/parrilla.jpg",
        title: "Parrilla movediza",
        detail: "Apta para carbón o leña, lugar para poner el fuego en el costado, parrilla con manija y ruedas de polipropileno. Se hace a medida.",
        price: 25000,
        stock: 5,
    },
];

export function getItems() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data);
        }, 2000);
    });
}

export function getItem(itemId) {
    return new Promise((resolve, reject) => {
        const item = data.find(({ id }) => id === itemId);

        setTimeout(() => resolve(item), 2000);
    });
}
