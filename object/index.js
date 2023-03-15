let listStuden= [] ;
function addStudent() {
    let maSv = document.getElementById("maSv").value ;
    let Name = document.getElementById("name").value ;
    let GioiTinh = document.getElementById("GioiTinh").value ;
    let QueQuan = document.getElementById("QueQuan").value ;
    let id = Math.floor(Math.random() * 100)
console.log(id);
    let tableStudent = {
        id: id,
        maSv: maSv ,
        Name: Name ,
        GioiTinh: GioiTinh ,
        QueQuan: QueQuan ,  
    }
    listStuden.push(tableStudent) ;
    console.log(listStuden);
    hienthiDS() ;
}

function hienthiDS() {
    let ketqua = "" ;
        ketqua += `
        <tr>
        <td>ID</td>
        <td>maSv</td>
        <td>Tên</td>
        <td>Giới Tính</td>
        <td>Quê Quán</td>
        <td>Xóa</td>
      </tr>
        ` ; 
    for ( i = 0; i < listStuden.length; i++) {
        ketqua += ` 
        <tr>
        <td>${i+1}</td>
        <td>${listStuden[i].maSv}</td>
        <td>${listStuden[i].Name}</td>
        <td>${listStuden[i].GioiTinh}</td>
        <td>${listStuden[i].QueQuan}</td>
        <td onclick= "handleDelete(${i})"  >Xóa</td>
      </tr>
        `
    }
    document.getElementById("table").innerHTML = ketqua ;
}

function handleDelete(e) {
    listStuden.splice(e,1) ;
    hienthiDS() ;
}

// Object : Đối tượng  ( kiểu dữ liệu phức tạp - );
//         tham chiếu:(reference) dữ liệu lưu ở bộ nhớ heap; bộ nhớ động : array, object, function
//         tham trị : primitive : dữ liệu lưu ở bộ nhớ stack bộ nhớ tĩnh : kiểu dữ liệu nguyên thuỷ
//         thuộc tính: property :
//         hành động : method (phương thức.)

// CÁCH 1:   let obj2={...obj1} // spread
        //     // CÁCH 2:  let obj2=Object.assign({},obj1);// dùng Object. assign();
        //     //    CACHS 3: JSON
        //    // bản chất đang gán địa chỉ của obj1 cho obj2;
        //    let obj2=JSON.parse(JSON.stringify(obj1));
        //    obj1.name="Hồng";
        //    obj1.myhobbies.xemPhim="Nhà Bà Nam";// khi obj .name ="hồng " thì cái địa chỉ đấy đã thay đổi giá trị
        //    console.log(obj2);
        //    /* 
        //    các cách clone object: 
        //    deep clone (sâu); JSON.parse(JSON.stringify(obj1)); thuộc dạng deep clone 
        //    shallow clone (nông); {...obj1 } được gọi là shallow clone, Object .assign()  
        //    cách 1: toán tử spread
        //    cachs 2: dùng Object.assign();
        //    cách 3: chuyển về dạng JSON

        //     */
        // let person1 = {
        //     name: "hồng",
        //     age: 24
        // }
        // let person2 = {
        //     name: "huy",
        //     age: 24
        // }
        // let person3 = {
        //     name: "đòn",
        //     age: 24
        // }
        //  let person4 = {
        //         name: "đòn",
        //         age: 24
        //     }
            // function Person(name,age){
            //     this.name=name;
            //     this.age=age
            // }
            // let person1= new Person("huy",24);
            // let person2 = new Person("đòn",21);
            // console.log(person1);
            // console.log(person2);
            //  arrow function không có CONTEXT;
            /* let student1={
                name:"Ánh Linh",
                age:24,
                say:()=>{
                    console.log(this);
                    return this.name;
                },
                goodbye:function goodBye(){
                    console.log("this trong goodbye", this);
                    return this.name
                }
                
            }
            console.log(student1.say()); */
            /* 
            đối tượng . phương thức thì this đại diện cho đối tượng.
             */