

// if(umur >= 17){
//     console.log("Boleh membuat KTP")
// }else{
//     console.log("Belum boleh membuat KTP");
// }

// SIM A
// 17

// "Boleh Mengemudi" (PASSED)
// "Anda Tidak Punya Izin Mengemudi" 
// "Anda Tidak Cukup Umur" 
// "Anda Tidak Punya Izin Mengemudi dan Tidak Cukup Umur"

const age = 16;
const isHasLicense = true;

if(isHasLicense && age>=17){
    console.log("Boleh Mengemudi");
}else if(!isHasLicense && age>=17){
    console.log("Anda Tidak Punya Izin Mengemudi");
}else if(age<17 && isHasLicense){
    console.log("Anda Tidak Cukup Umur")
}else{
    console.log("Anda Tidak Punya Izin Mengemudi dan Tidak Cukup Umur")
}

let nilai = 90; // A
// 90-100 A
// 80-89 B
// 70-79 C
// 60-69 D
// 0-59 E


