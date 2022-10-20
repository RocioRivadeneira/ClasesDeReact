import { initializeApp } from "firebase/app";
import {
    getFirestore,
    collection,
    doc,
    getDoc,
    getDocs,
    query,
    where,
    addDoc,
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC60Q-0hwDtgCw0QDIqOGqX8y3uG8x0bWA",
    authDomain: "muebles-smith.firebaseapp.com",
    projectId: "muebles-smith",
    storageBucket: "muebles-smith.appspot.com",
    messagingSenderId: "264353348449",
    appId: "1:264353348449:web:108515e65101abc48b2320",
};

const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app);

export async function getItems() {
    const collectionRef = collection(firestore, "productos");
    let respuesta = await getDocs(collectionRef);

    let dataDocs = respuesta.docs.map((documento) => {
        let docFormateado = { ...documento.data(), id: documento.id };
        return docFormateado;
    });
    return dataDocs;
}

export async function getItem(idParams) {
    try {
        const docRef = doc(firestore, "productos", idParams);
        const docSnapshot = await getDoc(docRef);
        return { ...docSnapshot.data(), id: docSnapshot.id };
    } catch (error) {
        console.error(error);
    }
}

export async function getItemsByCategory(category) {
    const collectionRef = collection(firestore, "productos");
    const queryCategory = query(
        collectionRef,
        where("category", "==", category)
    );
    const respuesta = await getDocs(queryCategory);

    let dataDocs = respuesta.docs.map((documento) => {
        let docFormateado = { ...documento.data(), id: documento.id };
        return docFormateado;
    });
    return dataDocs;
}

export async function createBuyOrder(orderData) {
    const collectionRef = collection(firestore, "orders");
    let respuesta = await addDoc(collectionRef, orderData);

    return respuesta.id;
}

export async function exportDataToFirestore() {
    const data = [
        {
            id: 1,
            title: "EXPORT ITEM",
            price: 9800,
            stock: 0,
            category: "Habitacion",
            detail: "Hermosa casa en Barrio Golf Pinamar. Perfecta para unas cómodas vacaciones en familia",
            img: "/public/assets/images/cucheta.jpg",
        },
        {
            id: 2,
            offer: true,
            title: "EXPORT ITEM",
            price: 2500,
            detail: "Alquiler de casa de 6 ambientes, 4 dormitorios, pileta, galería, parrilla, Cañuelas Golf Club.",
            img: "/public/assets/images/estante-cocina.jpg",
            stock: 3,
            category: "Habitacion",
        },
        {
            id: 3,
            title: "EXPORT ITEM",
            price: 2500,
            detail: "Hermosa casa ubicada sobre un gran lote interno de 900m2, en una de las zonas mas lindas del barrio",
            img: "/public/assets/images/estante-comedor.jpg.jpg",
            stock: 7,
            category: "Habitacion",
        },
        {
            id: 5,
            title: "EXPORT ITEM",
            price: 9800,
            stock: 6,
            category: "Habitacion",
            detail: "Hermosa casa en Barrio Golf Pinamar. Perfecta para unas cómodas vacaciones en familia",
            img: "/public/assets/images/galeria1.jpg",
        },
        {
            id: 6,
            title: "EXPORT ITEM",
            price: 9800,
            stock: 6,
            category: "Habitacion",
            detail: "Hermosa casa en Barrio Golf Pinamar. Perfecta para unas cómodas vacaciones en familia",
            img: "/public/assets/images/galeria1.jpg",
        },
    ];

    const collectionRef = collection(firestore, "productos");

    for (let item of data) {
        const newDoc = await addDoc(collectionRef, item);
        console.log("Doc created", newDoc.id);
    }
}

export default app;
