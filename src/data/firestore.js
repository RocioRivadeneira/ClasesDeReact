import { initializeApp } from "firebase/app";
import {
    getFirestore,
    collection,
    getDocs,
    doc,
    getDoc,
    query,
    where,
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

export default app;
