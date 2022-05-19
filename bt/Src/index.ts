class student {

    msv: string;
    name: string;
    age: number;
    gender: string;
    address: string;
    lop:string


    constructor(msv: string, name: string, age: number, gender: string, address: string, lop:string) {
        this.msv = msv;
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.address = address;
        this.lop = lop;
    }
}
class StudentService {
    protected data: Array<student> = new Array();
    constructor() {
        // gán thuộc tính data từ phương thức setData trả về mảng đối tượng
        this.data = this.setData();
    }
    // phương thức trả về mảng các đối tượng có sẵn
    setData(): Array<student> {
        let st1: student = {
            msv: 'B9220',
            name: 'Lê Khắc Thiện',
            age: 19,
            gender: 'Nữ',
            address: 'Chương Mỹ',
            lop: 'C2110H1',
        };
        let st2: student = {
            msv: "B9175",
            name: "Nguyễn Như Quỳnh",
            age: 19,
            gender: "Nữ",
            address: "Hà Nội",
            lop: 'C2110H2',
        };
        let st3: student = {
            msv: "B9170",
            name: "Trần Hải Đăng",
            age: 19,
            gender: "Nam",
            address: "Sóc Sơn",
            lop: 'C2110I1',
        };
        let data: Array<student> = new Array(st1, st2, st3);
        return data;
    }
    showListTotable(table_id: string = 'tbody-list'): void {
        let tbody: any = document.getElementById(table_id);
        let _tr = '';
        for (var obj of this.data) {
            _tr += `    
            <tr>
                <th>${obj.msv}</th>
                <td>${obj.lop}</td>
                <td>${obj.name}</td>
                <td>${obj.age}</td>
                <td>${obj.gender}</td>
                <td>${obj.address}</td>
            </tr>`;
        }
    tbody.innerHTML = _tr;
    }
}
var stdService = new StudentService();
stdService.showListTotable();