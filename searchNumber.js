const nilaiAwal = 5;
const nilaiAkhir = 20;
const nilaiArray = [2, 25, 4, 14, 17, 30, 8];

let hasil = cekNilai(nilaiAwal,nilaiAkhir,nilaiArray);
console.log(hasil);

function cekNilai(nilaiAwal,nilaiAkhir,dataArray){
  if(nilaiAwal&&nilaiAkhir&&nilaiArray){
    
    if(typeof(nilaiAwal)=='number' && typeof(nilaiAkhir)=='number' && Array.isArray(dataArray)==true && dataArray.length>0){

        if(nilaiAwal<nilaiAkhir){
          let x = [];
          for(let i=0;i<dataArray.length;i++){
            if(dataArray[i]>nilaiAwal && dataArray[i]<nilaiAkhir){
              x.push(dataArray[i]);
            }
          }
          if(x.length>0){
             return x.sort((a,b) => a-b);
          }else{
             return 'Jumlah angka dalam dataArray tidak ada';
          }
        }else{
          return 'Nilai akhir harus lebih besar dari nilai awal';
        }

    }else{
      return 'input nilaiAwal,nilaiAkhir harus number dan dataArray harus array tidak kosong';
    }

  }else{
    return 'Nilai harus di isi';
  }
}