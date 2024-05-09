function Chuoi_hoanthien(str, limit=10){
    str = str.replace(/<[^>]*>/g,"");

    str=str.trim();

    str = str.replace(/ +/g, " ");

    let arr = str.split(" ");

    for(let i = 0; i<arr.length; i++){
        arr[i] = arr[i].charAt(0).toUpperCase()+arr[i].slice(1);
    }
    str = arr.join(" ");

    return str;
}
let str=`   võ đức    thuận    `
console.log(str);

str = Chuoi_hoanthien(str)
console.log(str);
