// B1: Tạo mảng rỗng newStudents để tí thêm vào
let newStudents = [];
while (true) {
  // B2: Cho người dùng nhập vào dữ liệu
  let nameInput = prompt(` Hãy nhập tên của sinh viên mới:`);
  let ageInput = Number(prompt(` Hãy nhập tuổi :`));
  let idInput = prompt(` Hãy nhập ID :`);
  // B3: Tạo object students gồm các dữ liệu người dùng
  let students = {
    name: nameInput,
    age: ageInput,
    ID: idInput,
  };
  //B4: Push oject students vào arr NewStudents
  newStudents.push(students);

  //B5: Tạo prompt hỏi người dùng có muốn tiếp tục không? nếu không thì dừng lại
  let answer = prompt(` Bạn có muốn nhập thêm sinh viên không ? (y/n)`);
  if (answer.toLocaleLowerCase() !== `y`) {
    break;
  }

  //B6: In ra màn hình danh sách và thông tin của từng sinh viên dựa vào vòng lặp for
}
for (let i = 0; i < newStudents.length; i++) {
  let sv = newStudents[i];
  console.log(`Tên: ${sv.name}`);
  console.log(`Tuổi: ${sv.age}`);
  console.log(`ID: ${sv.ID}`);
}

//B7 :  Hỏi người dùng nhập ID của  sinh viên cần xóa

let deleteIdInput = prompt(` Hãy nhập ID của sinh viên cần xóa:`);

let deleteIndex = -1;
for (let i = 0; i < newStudents.length; i++) {
  if (newStudents[i].ID === deleteIdInput) {
    // arr newStudents , biến i là vị trí element trong arr , ID là property của từng object students
    deleteIndex = i;
    break;
  }
}

if (deleteIndex !== -1) {
  newStudents.splice(deleteIndex, 1);
  console.log(`Sinh viên có ID ${deleteIdInput} bị xóa khỏi danh sách!`);
} else {
  console.log(` Không tìm thấy ID sinh viên bạn nhập !`);
}

console.log(`====== Danh sách sinh viên sau khi xóa ========`);
for (let i = 0; i < newStudents.length; i++) {
  let sv = newStudents[i];
  console.log(`Tên: ${sv.name}`);
  console.log(`Tuổi: ${sv.age}`);
  console.log(`ID: ${sv.ID}`);
}
