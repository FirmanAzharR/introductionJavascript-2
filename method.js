/*
method 1.
string method indexOf
-mengembalikan posisi kemunculan pertama dari nilai yang ditentukan dalam string.
-mengembalikan -1 jika nilai yang dicari tidak ada.
-indexOf ==> case sensitive (huruf kecil dan besar dianggap berbeda);
-menerima indeks untuk memulai pencarian. tetapi tidak menerima ekspresi reguler
*/
let string = "saya sedang belajar javascript.";
var pos = string.indexOf(".");
console.log(pos);

/*
method 2.
string method search
-mencari string untuk nilai tertentu, dan mengembalikan posisi yang cocok.
-mengembalikan -1 jika nilai yang dicari tidak ada.
-search ==> case sensitive (huruf kecil dan besar dianggap berbeda);
-menerima string literal atau objek string dan ekspresi reguler. Tetapi tidak menerima indeks untuk memulai pencarian.
*/
let string2 = "saya sedang belajar javascript.";
var pos2 = string2.search(".");
console.log(pos2);

/*
method 3.
number method to string
mengubah tipe data ke string (kecuali undefined/null);
*/
const x = true;
const a = x.toString();
console.log(typeof x);
console.log(typeof a);

/*
method 4.
number method toPrecision
-memformat angka dengan panjang yang ditentukan.
-Titik desimal dan nol ditambahkan (jika diperlukan), untuk membuat panjang yang ditentukan.
*/
const number = 7.54321;
console.log(number.toPrecision(3));

/*
method 5.
array method pop
-menghapus elemen terakhir dari sebuah array, dan mengembalikan nilai elemen itu.
-pop ==> mengubah panjang array
*/
const games = ['pubg','cod','final fantasy'];
games.pop();
console.log(games);

/*
method 6.
number method to shift
-menghapus elemen pertama dari sebuah array, dan mengembalikan nilai elemen itu.
-pop ==> mengubah panjang array
*/
games.shift();
console.log(games);

/*
method 7.
array method concat
-menggabungkan array
*/
let game1 = ['mobile legends','sniper ghost warior 3'];
let game2 = ['NFS Rival'];
let game3 = ['devil may cry 5','pes 2021','metal gear'];
let game4 = game1.concat(game2);
console.log(game4);

/*
method 8.
array method find
-mencari nilai di dalam array dan mengembalikan nilai pertama yng memenuhi kondisi find.
-tidak memeriksa nilai yang tersisa jika sudah memenuhi kondisi find
*/
const dataArray = [1, 12, 10, 20, 14];
const found = dataArray.find(element => element > 14);
console.log(found);

/*
method 9.
array method filter
-membuat larik yang diisi dengan semua elemen larik yang lulus pengujian (disediakan sebagai fungsi).
-tidak menjalankan fungsi untuk elemen array tanpa nilai.
*/
function filterAray(value) {
    return value > 11 & value < 24;
  }
var filterNumber = [11, 15, 8, 20, 24].filter(filterAray);
console.log(filterNumber);

/*
method 10.
array method map
-membuat larik baru dengan hasil pemanggilan fungsi untuk setiap elemen larik.
-memanggil fungsi yang disediakan sekali untuk setiap elemen dalam larik, secara berurutan.
-map () tidak menjalankan fungsi untuk elemen array tanpa nilai.
*/
var arrNumb = [1,2,3,4,5];

var mapArr = arrNumb.map( (element) => {
 	return element.toString();   
});
console.log(arrNumb);