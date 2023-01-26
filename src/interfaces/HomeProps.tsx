//กำหนดชนิดข้อมูลให้กับ component

export interface HomeProps {
    profileList: {
        name: String;
        lastName: String;
        email: String;
        typePersonnel: String;
    }[]
}
