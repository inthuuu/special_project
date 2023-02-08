import firebase from "../firebase";
import Title from "../Props/titleProbs";

const db = firebase.collection("/Loadsum");

class TitleService {
    getAll(teacherId: string) {
        return db.doc(teacherId).collection("specialProject");
    }

    create(title : Title, teacherId: string) {
        return db.doc(teacherId).collection("specialProject").add(title);
    }

    update(id: string, value: any) {
        return db.doc(id).update(value)
    }

    delete(id: string) {
        return db.doc(id).delete()
    }
}


export default new TitleService();