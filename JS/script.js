// Ketika Hitung BMI diklik
function validateForm(){
    let beratBadan = document.getElementById('berat-badan').value;
    let tinggiBadan = document.getElementById('tinggi').value;
    let bmimeter = tinggiBadan/100;
    let bmi = beratBadan / (bmimeter*bmimeter)
    let inf = document.getElementById('information');
    let inf2 = document.getElementById('information-two')
    let hasilbmi = document.getElementById('hasil-bmi')
    let hasilbmi2 = document.getElementById('hasil-bmi2')
    let hasilbmi3 = document.getElementById('hasil-bmi3')
    let hasilbmi4 = document.getElementById('hasil-bmi4')

    document.getElementById('result').innerHTML = bmi.toFixed(2);
    if(bmi < 18.5) {
        inf.textContent = "Kekurangan berat badan";
        in2f.textContent = "Anda Kekurangan berat  badan"
    } else if(bmi >= 18.5 && bmi <= 24.9){
        inf.textContent = "Normal (ideal)";
        inf2.textContent = "Anda memiliki berat badan Normal (Ideal) ";
        hasilbmi.textContent = "Hasil BMI diantara 18.5 dan 24.9 ";
        hasilbmi2.textContent = "Anda  berada dalam kategori berat ideal.Tetap mengatur kalori makanan yang dikonsumsi dan berolahraga";
        hasilbmi3.textContent = " jika BMI Anda berada dalam kategori ini maka Anda disarankan untuk tentap mangatur kalori makanan yang dikonsumsi dan berolahraga";
        hasilbmi4.textContent = "BMI tidak sepenuhnya mewakili diagnosis menyeluruh dari kesehatan tubuh dan resiko penyakit seseorang. Anda perlu kosultasi lebih lanjut mengenai resiko dan kekhawatiran Anda terkait dengan berat badan Anda";
    } else if(bmi >= 25.0 && bmi <=29.9) {
        inf.textContent = "Kelebihan berat badan";
        inf2.textContent = "Anda memilki berat badan yang berlebih";
        hasilbmi.textContent = "Hasil BMI diantara 25 dan 29 ";
        hasilbmi2.textContent = "Anda  berada dalam kategori berat badan berlebih.Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalori makanan yang dikonsumsi dan berolahraga";
        hasilbmi3.textContent = "jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk menurunkan berat badan hingga batas normal"
        hasilbmi4.textContent = "BMI tidak sepenuhnya mewakili diagnosis menyeluruh dari kesehatan tubuh dan resiko penyakit seseorang. Anda perlu kosultasi lebih lanjut mengenai resiko dan kekhawatiran Anda terkait dengan berat badan Anda";
    }
    else {
        inf.textContent = "Kegemukan (Obesitas)";
        inf2.textContent = "Anda Kegemukan"
        inf2.textContent = "Anda Kegemukan(Obesitas)";
        hasilbmi.textContent = "Hasil BMI 30 ke atas ";
        hasilbmi2.textContent = "Anda  berada dalam kategori berat badan berlebih.Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalori makanan yang dikonsumsi dan berolahraga";
        hasilbmi3.textContent = "jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk menurunkan berat badan hingga batas normal"
        hasilbmi4.textContent = "BMI tidak sepenuhnya mewakili diagnosis menyeluruh dari kesehatan tubuh dan resiko penyakit seseorang. Anda perlu kosultasi lebih lanjut mengenai resiko dan kekhawatiran Anda terkait dengan berat badan Anda";
    }
}
    
console.log(beratBadan,tinggiBadan);
