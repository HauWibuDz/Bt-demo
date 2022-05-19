class student {
    constructor(msv, name, age, gender, address, lop) {
        this.msv = msv;
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.address = address;
        this.lop = lop;
    }
}
class StudentService {
    constructor() {
        this.data = new Array();
        // gán thuộc tính data từ phương thức setData trả về mảng đối tượng
        this.data = this.setData();
    }
    // phương thức trả về mảng các đối tượng có sẵn
    setData() {
        let st1 = {
            msv: 'B9220',
            name: 'Lê Khắc Thiện',
            age: 19,
            gender: 'Nữ',
            address: 'Chương Mỹ',
            lop: 'C2110H1',
        };
        let st2 = {
            msv: "B9175",
            name: "Nguyễn Như Quỳnh",
            age: 19,
            gender: "Nữ",
            address: "Hà Nội",
            lop: 'C2110H2',
        };
        let st3 = {
            msv: "B9170",
            name: "Trần Hải Đăng",
            age: 19,
            gender: "Nam",
            address: "Sóc Sơn",
            lop: 'C2110I1',
        };
        let data = new Array(st1, st2, st3);
        return data;
    }
    showListTotable(table_id = 'tbody-list') {
        let tbody = document.getElementById(table_id);
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
