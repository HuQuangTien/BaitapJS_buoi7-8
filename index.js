let arrNumber = [11, 17, 19, 25, 17, 31, 37];


//Bài tập 3
document.getElementById('btnUpdate').onclick = function (e) {
    let giaTriGoc = +document.getElementById('giaTriGoc').value;
    let giaTriMoi = +document.getElementById('giaTriMoi').value;
    for (let i = 0; i < arrNumber.length; i++) {
        if (arrNumber[i] === giaTriGoc) {
            arrNumber[i] = giaTriMoi;
          break;
        }
    }
    document.getElementById('update-info').innerHTML = `[${arrNumber}]`;
}