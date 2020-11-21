 const name = [
    'Abigail', 'Alexandra', 'Alison',
    'Amanda', 'Angela', 'Bella',
    'Carol', 'Caroline', 'Carolyn',
    'Deirdre', 'Diana', 'Elizabeth',
    'Ella', 'Faith', 'Olivia', 'Penelope'];
    
    nameSeach('th',name,2,showResult);
    
    function nameSeach(string,dataName,max,callback){
        if(string&&dataName&&max){
            if(typeof(string)=='string' && Array.isArray(dataName) && typeof(max)=='number'){
                let x = dataName.length;
                let findName = [];
                for(let i=0;i<x;i++){
                    cari = dataName[i].toLowerCase().search(string.toLowerCase());
                    if(cari>=0){
                        findName.push(dataName[i]);
                    }
                }
                let result = callback(findName,max);
                console.log(result);
            }else{
                return 'input nama = string, batas pencarian = number, dataName = data array';
            }
        }else{
            return 'Data harus diisi';
        }
    }
    
    function showResult(nameResult, max){
        let y = nameResult.length;
        if(y>0){
            if(y>=max){
                let z = y-max; 
                for (let j = 0; j < z; j++) {
                    nameResult.pop();
                }
                return nameResult;
            }else{
                const maxSearch = `'${nameResult}' - Hanya ada ${y} nama di dalam hasil pencarian dataArray`;
                return maxSearch;
            }
        }else{
            const emptyName = 'Nama yang dicari tidak ada';
            return emptyName;
        }
    }
    
    
    
    