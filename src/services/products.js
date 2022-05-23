import firestore from "../config/firestore";

const cleanDocument = (doc) => ({ id: doc.id, ...doc.data() });

// C(R)UD: GET ALL
export const getAll = async () => {
    const data = await firestore.collection("products").get();
    const cleaned = data.docs.map(cleanDocument);
    return cleaned;
};

// C(R)UD: GET one by ID
export const getID = async (id) => {
    const data = await firestore.collection("products").doc(id).get();

    if (!data.exists) {
        return null;
    }

    const cleaned = cleanDocument(data);
    return cleaned;
};

// (C)RUD: CREATE a record
export const createRecord = async (data) => {
    await firestore.collection("products").add(data);
};

// CR(U)D: UPDATE a record
export const updateRecord = async (id, field, value) => {
    await firestore.collection("products").doc(id).update(field, value);
}

// CRU(D): Delete a record
export const deleteRecord = async (id) => {
    await firestore.collection("products").doc(id).delete();
}