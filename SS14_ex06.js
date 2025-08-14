let bookList = [];

while (true) {
  let userInput = Number(
    prompt(`Đây là quản lý danh sách sách! 
    Hãy nhập vào số (1-5) dưới đây:
    1. Thêm sách mới
    2. Hiển thị danh sách sách
    3. Tìm kiếm sách theo tên
    4. Xóa sách theo ID
    5. Thoát chương trình`)
  );

  if (isNaN(userInput) || userInput < 1 || userInput > 5) {
    console.log("Số bạn nhập vào không hợp lệ!");
    continue;
  }

  if (userInput === 1) {
    while (true) {
      let bookId = prompt(`Nhập ID sách:`);
      let bookName = prompt(`Nhập tên sách:`).trim().toLowerCase();
      let author = prompt(`Nhập tên tác giả:`).trim().toLowerCase();
      let publicationYear = prompt(`Nhập năm xuất bản:`);

      let book = {
        ID: bookId,
        name: bookName,
        author: author,
        publicationYear: publicationYear,
      };

      bookList.push(book);
      console.log("== Thêm sách thành công! ==");

      let more = prompt(`Bạn có muốn thêm cuốn sách khác không? (y/n)`);
      if (more.toLowerCase() !== "y") {
        break;
      }
    }
  }

  if (userInput === 2) {
    console.log("== Danh sách sách hiện có ==");
    if (bookList.length === 0) {
      console.log("Danh sách hiện đang trống.");
    } else {
      for (let book of bookList) {
        console.log(
          `ID: ${book.ID}, Tên: ${book.name}, Tác giả: ${book.author}, Năm XB: ${book.publicationYear}`
        );
      }
    }
  }

  if (userInput === 3) {
    let seach = prompt("Nhập tên sách cần tìm:").trim().toLowerCase();
    let found = false;
    for (let book of bookList) {
      if (book.name.includes(seach)) {
        console.log("== Tìm thấy sách ==");
        console.log(
          `ID: ${book.ID}, Tên: ${book.name}, Tác giả: ${book.author}, Năm XB: ${book.publicationYear}`
        );
        found = true;
        break;
      }
    }
    if (!found) {
      console.log("Tên sách bạn tìm không đúng!");
    }
  }

  if (userInput === 4) {
    let deleteId = prompt("Nhập ID sách cần xóa:");
    let deleteIndex = -1;
    for (let i = 0; i < bookList.length; i++) {
      if (bookList[i].ID === deleteId) {
        deleteIndex = i;
        break;
      }
    }
    if (deleteIndex !== -1) {
      bookList.splice(deleteIndex, 1);
      console.log("== Đã xóa sách thành công ==");
    } else {
      console.log("ID sách không tồn tại!");
    }
  }

  if (userInput === 5) {
    console.log("Tạm biệt bạn! Hẹn gặp lại ");
    break;
  }
}
