const questionBank = [
    // --- Tingkat 1: Mudah (Konsep Dasar & Definisi) ---
    // (Sumber: Mekanika Tanah 1 - Bab 1-3)
    {
        question: "Apa definisi dari 'Angka Pori' (Void Ratio)?",
        options: [
            "Volume total dibagi volume butiran padat.",
            "Volume pori dibagi volume butiran padat.",
            "Volume pori dibagi volume total.",
            "Berat air dibagi berat butiran padat."
        ],
        answer: "Volume pori dibagi volume butiran padat."
    },
    {
        question: "Apa definisi dari 'Porositas' (Porosity)?",
        options: [
            "Volume pori dibagi volume total.",
            "Volume pori dibagi volume butiran padat.",
            "Berat total dibagi volume total.",
            "Volume air dibagi volume pori."
        ],
        answer: "Volume pori dibagi volume total."
    },
    {
        question: "Batas Atterberg yang memisahkan kondisi plastis dan semi-padat disebut...",
        options: [
            "Batas Cair (Liquid Limit)",
            "Batas Plastis (Plastic Limit)",
            "Batas Susut (Shrinkage Limit)",
            "Indeks Plastisitas (Plasticity Index)"
        ],
        answer: "Batas Susut (Shrinkage Limit)"
    },
    {
        question: "Indeks Plastisitas (PI) dihitung dengan rumus...",
        options: [
            "Batas Cair (LL) + Batas Plastis (PL)",
            "Batas Cair (LL) - Batas Susut (SL)",
            "Batas Cair (LL) - Batas Plastis (PL)",
            "Batas Plastis (PL) - Batas Susut (SL)"
        ],
        answer: "Batas Cair (LL) - Batas Plastis (PL)"
    },
    {
        question: "Menurut sistem klasifikasi USCS, simbol 'SW' berarti...",
        options: [
            "Lempung berpasir (Sandy Clay)",
            "Pasir berlanau (Silty Sand)",
            "Pasir bergradasi baik (Well-graded Sand)",
            "Pasir bergradasi buruk (Poorly-graded Sand)"
        ],
        answer: "Pasir bergradasi baik (Well-graded Sand)"
    },
    {
        question: "Menurut sistem klasifikasi USCS, simbol 'CH' berarti...",
        options: [
            "Kerikil berlempung (Clayey Gravel)",
            "Lempung anorganik plastisitas tinggi (Inorganic Clay, High Plasticity)",
            "Lempung anorganik plastisitas rendah (Inorganic Clay, Low Plasticity)",
            "Lanau organik (Organic Silt)"
        ],
        answer: "Lempung anorganik plastisitas tinggi (Inorganic Clay, High Plasticity)"
    },
    {
        question: "Proses pengendapan butiran tanah di dalam air, di mana butiran yang lebih besar mengendap lebih dulu, disebut...",
        options: [
            "Kompaksi",
            "Konsolidasi",
            "Sedimentasi",
            "Permeabilitas"
        ],
        answer: "Sedimentasi"
    },
    {
        question: "Alat yang digunakan di laboratorium untuk menentukan distribusi ukuran butir tanah berbutir halus adalah...",
        options: [
            "Ayakan standar (Sieve analysis)",
            "Tes hidrometer (Hydrometer test)",
            "Tes batas Atterberg",
            "Tes triaksial"
        ],
        answer: "Tes hidrometer (Hydrometer test)"
    },
    {
        question: "Sebuah tanah memiliki kadar air (w) = 20%, dan berat volume kering (γd) = 15 kN/m³. Berapa berat volume basahnya (γ)? (Asumsikan γw = 9.81 kN/m³)",
        options: [
            "18.0 kN/m³",
            "17.0 kN/m³",
            "15.0 kN/m³",
            "21.0 kN/m³"
        ],
        answer: "18.0 kN/m³" // Rumus: γ = γd * (1 + w)
    },
    {
        question: "Apa yang dimaksud dengan 'Derajat Kejenuhan' (Degree of Saturation, S)?",
        options: [
            "Volume air dibagi volume pori.",
            "Volume air dibagi volume total.",
            "Berat air dibagi berat total.",
            "Volume pori dibagi volume butiran."
        ],
        answer: "Volume air dibagi volume pori."
    },
    {
        question: "Jika S = 100%, tanah tersebut dalam kondisi...",
        options: [
            "Kering",
            "Lembab",
            "Jenuh (Saturated)",
            "Kering udara"
        ],
        answer: "Jenuh (Saturated)"
    },
    {
        question: "Apa nama lain untuk kurva distribusi ukuran butir?",
        options: [
            "Kurva kompaksi",
            "Kurva konsolidasi",
            "Kurva gradasi",
            "Kurva Mohr"
        ],
        answer: "Kurva gradasi"
    },
    {
        question: "Koefisien Keseragaman (Cu) dihitung sebagai...",
        options: [
            "D60 / D10",
            "D30 / D10",
            "(D30)² / (D60 * D10)",
            "D60 - D10"
        ],
        answer: "D60 / D10"
    },
    {
        question: "Tanah disebut 'bergradasi buruk' (Poorly-graded) jika...",
        options: [
            "Memiliki rentang ukuran butir yang sangat lebar.",
            "Memiliki butiran yang hampir seragam ukurannya.",
            "Memiliki nilai Cu > 4 dan 1 < Cc < 3.",
            "Memiliki plastisitas tinggi."
        ],
        answer: "Memiliki butiran yang hampir seragam ukurannya."
    },
    {
        question: "Aktivitas (Activity) lempung didefinisikan sebagai...",
        options: [
            "PI / (% fraksi ukuran lempung)",
            "LL / PL",
            "SL / PI",
            "w / Gs"
        ],
        answer: "PI / (% fraksi ukuran lempung)"
    },
    {
        question: "Mineral lempung yang memiliki potensi pengembangan (swelling) paling tinggi adalah...",
        options: [
            "Kaolinit",
            "Illit",
            "Montmorillonit",
            "Halloysit"
        ],
        answer: "Montmorillonit"
    },
    {
        question: "Struktur tanah di mana partikel-partikel kecil menempel pada partikel yang lebih besar seperti 'kartu remi' disebut...",
        options: [
            "Sarang lebah (Honeycomb)",
            "Terflokulasi (Flocculated)",
            "Terdispersi (Dispersed)",
            "Butiran tunggal (Single-grained)"
        ],
        answer: "Terflokulasi (Flocculated)"
    },
    {
        question: "Proses pemadatan tanah dengan cara mekanis (getaran, tumbukan) untuk mengeluarkan udara disebut...",
        options: [
            "Kompaksi",
            "Konsolidasi",
            "Permeabilitas",
            "Kuat geser"
        ],
        answer: "Kompaksi"
    },
    {
        question: "Tes laboratorium standar untuk menentukan hubungan kadar air dan berat volume kering maksimum adalah...",
        options: [
            "Tes Proctor",
            "Tes Triaksial",
            "Tes Geser Langsung",
            "Tes Permeabilitas"
        ],
        answer: "Tes Proctor"
    },
    {
        question: "Kadar air di mana tanah mencapai kepadatan kering maksimum disebut...",
        options: [
            "Batas Cair",
            "Kadar Air Optimum (OMC)",
            "Kadar Air Jenuh",
            "Batas Plastis"
        ],
        answer: "Kadar Air Optimum (OMC)"
    },
    {
        question: "Kemampuan tanah untuk meloloskan air disebut...",
        options: [
            "Porositas",
            "Kompaksibilitas",
            "Permeabilitas",
            "Kapilaritas"
        ],
        answer: "Permeabilitas"
    },
    {
        question: "Hukum yang mengatur aliran air laminar melalui tanah adalah...",
        options: [
            "Hukum Hooke",
            "Hukum Darcy",
            "Hukum Stokes",
            "Prinsip Boussinesq"
        ],
        answer: "Hukum Darcy"
    },
    {
        question: "Dalam Hukum Darcy (v = ki), 'k' adalah...",
        options: [
            "Koefisien konsolidasi",
            "Koefisien permeabilitas",
            "Koefisien kompresibilitas",
            "Gradien hidrolik"
        ],
        answer: "Koefisien permeabilitas"
    },
    {
        question: "Garis dalam jaring aliran (flownet) yang menunjukkan titik-titik dengan tinggi energi total yang sama disebut...",
        options: [
            "Garis aliran (Flow line)",
            "Garis ekipotensial (Equipotential line)",
            "Garis freatik (Phreatic line)",
            "Isobar"
        ],
        answer: "Garis ekipotensial (Equipotential line)"
    },
    {
        question: "Kenaikan air di dalam pori-pori kecil tanah akibat tegangan permukaan disebut...",
        options: [
            "Remesan (Seepage)",
            "Kapilaritas",
            "Likuefaksi",
            "Konsolidasi"
        ],
        answer: "Kapilaritas"
    },
    {
        question: "Prinsip yang menyatakan bahwa tegangan total di suatu titik dalam tanah dibagi menjadi tegangan efektif dan tekanan air pori adalah...",
        options: [
            "Prinsip Terzaghi",
            "Prinsip Mohr-Coulomb",
            "Prinsip Darcy",
            "Prinsip Boussinesq"
        ],
        answer: "Prinsip Terzaghi"
    },
    {
        question: "Dalam persamaan σ = σ' + u, 'u' adalah...",
        options: [
            "Tegangan total",
            "Tegangan efektif",
            "Tekanan air pori",
            "Tegangan geser"
        ],
        answer: "Tekanan air pori"
    },
    {
        question: "Apa yang dimaksud dengan 'kondisi cepat' (quick condition) atau pasir hisap?",
        options: [
            "Kondisi dimana tegangan geser nol.",
            "Kondisi dimana tanah sangat padat.",
            "Kondisi dimana tegangan efektif menjadi nol.",
            "Kondisi dimana air mengalir sangat cepat."
        ],
        answer: "Kondisi dimana tegangan efektif menjadi nol."
    },
    {
        question: "Distribusi tegangan vertikal di bawah beban titik di permukaan, menurut teori elastis, dihitung menggunakan persamaan...",
        options: [
            "Terzaghi",
            "Boussinesq",
            "Westergaard",
            "Newmark"
        ],
        answer: "Boussinesq"
    },
    {
        question: "Grafik yang digunakan untuk menentukan peningkatan tegangan vertikal di bawah sudut luasan persegi panjang yang dibebani merata adalah...",
        options: [
            "Grafik Mohr",
            "Grafik Casagrande",
            "Grafik Fadum",
            "Grafik Taylor"
        ],
        answer: "Grafik Fadum"
    },
    {
        question: "Proses keluarnya air dari pori-pori tanah berbutir halus akibat pembebanan, yang menyebabkan penurunan volume, disebut...",
        options: [
            "Kompaksi",
            "Konsolidasi",
            "Kuat geser",
            "Permeabilitas"
        ],
        answer: "Konsolidasi"
    },
    {
        question: "Kuat geser tanah (τ) menurut kriteria keruntuhan Mohr-Coulomb adalah...",
        options: [
            "τ = c' + σ' tan(φ')",
            "τ = c' - σ' tan(φ')",
            "τ = σ' + c' tan(φ')",
            "τ = c' / (σ' tan(φ'))"
        ],
        answer: "τ = c' + σ' tan(φ')"
    },
    {
        question: "Dalam kriteria Mohr-Coulomb, 'c'' adalah...",
        options: [
            "Sudut geser dalam efektif",
            "Kohesi efektif",
            "Tegangan normal efektif",
            "Indeks plastisitas"
        ],
        answer: "Kohesi efektif"
    },

    // --- Tingkat 2: Sedang (Perhitungan Dasar & Aplikasi) ---
    // (Sumber: Mekanika Tanah 1 & 2 - Bab 4-10)
    {
        question: "Sebuah sampel tanah jenuh (S=100%) memiliki kadar air (w) = 30% dan Berat Jenis (Gs) = 2.7. Berapa angka porinya (e)?",
        options: [
            "0.60",
            "0.81",
            "0.90",
            "1.11"
        ],
        answer: "0.81" // Rumus: Se = wG -> (1)e = (0.30)(2.7) -> e = 0.81
    },
    {
        question: "Dari soal sebelumnya (e=0.81, Gs=2.7), berapa berat volume jenuh (γsat) tanah tersebut? (Asumsikan γw = 9.81 kN/m³)",
        options: [
            "15.1 kN/m³",
            "18.8 kN/m³",
            "19.1 kN/m³",
            "21.3 kN/m³"
        ],
        answer: "19.1 kN/m³" // Rumus: γsat = ((Gs + e) / (1 + e)) * γw = ((2.7 + 0.81) / (1 + 0.81)) * 9.81 = 19.1
    },
    {
        question: "Tes 'Standard Penetration Test' (SPT) di lapangan menghasilkan nilai N. Nilai N ini sering digunakan untuk memperkirakan...",
        options: [
            "Permeabilitas tanah",
            "Kepadatan relatif pasir dan konsistensi lempung",
            "Batas cair lempung",
            "Kadar air optimum"
        ],
        answer: "Kepadatan relatif pasir dan konsistensi lempung"
    },
    {
        question: "Dalam tes permeabilitas 'Falling Head', parameter yang diukur adalah...",
        options: [
            "Jumlah air yang terkumpul dalam waktu tertentu.",
            "Penurunan tinggi tekan (head) dalam tabung selama interval waktu tertentu.",
            "Gaya yang diperlukan untuk mendorong air.",
            "Perubahan volume sampel tanah."
        ],
        answer: "Penurunan tinggi tekan (head) dalam tabung selama interval waktu tertentu."
    },
    {
        question: "Dua lapisan tanah (k1 = 2x10⁻³ cm/s, k2 = 4x10⁻⁴ cm/s) dialiri air secara vertikal (tegak lurus lapisan). Berapa koefisien permeabilitas ekuivalen (keq,v)?",
        options: [
            "1.2x10⁻³ cm/s",
            "6.7x10⁻⁴ cm/s",
            "2.4x10⁻³ cm/s",
            "Tidak bisa dihitung tanpa tebal lapisan"
        ],
        answer: "Tidak bisa dihitung tanpa tebal lapisan" // Rumus keq,v = (H1+H2) / (H1/k1 + H2/k2)
    },
    {
        question: "Dua lapisan tanah (k1 = 2x10⁻³ cm/s, H1=2m; k2 = 4x10⁻⁴ cm/s, H2=3m) dialiri air secara horizontal (sejajar lapisan). Berapa koefisien permeabilitas ekuivalen (keq,h)?",
        options: [
            "1.04x10⁻³ cm/s",
            "1.2x10⁻³ cm/s",
            "8.8x10⁻⁴ cm/s",
            "6.7x10⁻⁴ cm/s"
        ],
        answer: "1.04x10⁻³ cm/s" // Rumus: keq,h = (k1H1 + k2H2) / (H1 + H2) = (2e-3*2 + 4e-4*3) / (2+3) = 1.04e-3
    },
    {
        question: "Suatu lapisan tanah setebal 5m memiliki γsat = 19 kN/m³. Muka air tanah berada di permukaan. Berapa tegangan total (σ) di dasar lapisan?",
        options: [
            "95.0 kN/m²",
            "49.05 kN/m²",
            "45.95 kN/m²",
            "19.0 kN/m²"
        ],
        answer: "95.0 kN/m²" // σ = γsat * H = 19 * 5 = 95
    },
    {
        question: "Dari soal sebelumnya (H=5m, γsat=19 kN/m³, MAT di permukaan), berapa tegangan efektif (σ') di dasar lapisan? (Asumsikan γw = 9.81 kN/m³)",
        options: [
            "95.0 kN/m²",
            "49.05 kN/m²",
            "45.95 kN/m²",
            "144.05 kN/m²"
        ],
        answer: "45.95 kN/m²" // σ' = (γsat - γw) * H = (19 - 9.81) * 5 = 45.95
    },
    {
        question: "Jika muka air tanah pada soal sebelumnya turun ke dasar lapisan (tanah menjadi basah, γ = 18 kN/m³), berapa tegangan efektif (σ') di dasar lapisan?",
        options: [
            "90.0 kN/m²",
            "40.95 kN/m²",
            "18.0 kN/m²",
            "0 kN/m²"
        ],
        answer: "90.0 kN/m²" // Jika MAT di dasar, u = 0. Maka σ' = σ = γ * H = 18 * 5 = 90
    },
    {
        question: "Peningkatan tegangan vertikal (Δσz) di bawah pusat pondasi lingkaran fleksibel berdiameter B dengan beban merata q adalah...",
        options: [
            "Δσz = q * (1 - (z / (R² + z²)^0.5)³)",
            "Δσz = q / (B * z)",
            "Δσz = q * (1 - (1 / ((R/z)² + 1)^1.5))",
            "Δσz = q * I (dimana I dari grafik Fadum)"
        ],
        answer: "Δσz = q * (1 - (1 / ((R/z)² + 1)^1.5))" // Ini adalah bentuk lain dari persamaan Boussinesq untuk lingkaran
    },
    {
        question: "Sebuah beban titik P = 1000 kN bekerja di permukaan. Menurut Boussinesq, berapa peningkatan tegangan vertikal (Δσz) pada kedalaman z = 5m tepat di bawah beban (r=0)?",
        options: [
            "95.5 kN/m²",
            "19.1 kN/m²",
            "0 kN/m²",
            "Tidak bisa dihitung, r=0 menyebabkan pembagian dengan nol."
        ],
        answer: "19.1 kN/m²" // Rumus: Δσz = (3P / (2πz²)) * (1 / (1 + (r/z)²)^2.5). Jika r=0, Δσz = 3P / (2πz²) = 3*1000 / (2*π*5²) = 19.098
    },
    {
        question: "Apa yang dimaksud dengan tanah 'Normally Consolidated' (NC)?",
        options: [
            "Tanah yang sedang mengalami konsolidasi.",
            "Tanah yang belum pernah mengalami beban lebih besar dari beban efektif saat ini.",
            "Tanah yang sudah dipadatkan secara mekanis.",
            "Tanah yang memiliki OCR = 1.5"
        ],
        answer: "Tanah yang belum pernah mengalami beban lebih besar dari beban efektif saat ini."
    },
    {
        question: "Apa yang dimaksud dengan tanah 'Overconsolidated' (OC)?",
        options: [
            "Tanah yang memiliki OCR = 1.",
            "Tanah yang bebannya sedang dikurangi.",
            "Tanah yang pernah mengalami beban efektif lebih besar dari beban efektif saat ini.",
            "Tanah yang sangat jenuh air."
        ],
        answer: "Tanah yang pernah mengalami beban efektif lebih besar dari beban efektif saat ini."
    },
    {
        question: "'Overconsolidation Ratio' (OCR) didefinisikan sebagai...",
        options: [
            "Tegangan efektif saat ini / Tegangan prakonsolidasi",
            "Tegangan prakonsolidasi / Tegangan efektif saat ini",
            "Indeks Kompresi / Indeks Rebound",
            "Batas Cair / Batas Plastis"
        ],
        answer: "Tegangan prakonsolidasi / Tegangan efektif saat ini"
    },
    {
        question: "Kemiringan kurva e-log(σ') pada bagian 'virgin compression' (garis lurus) disebut...",
        options: [
            "Koefisien Konsolidasi (Cv)",
            "Indeks Kompresi (Cc)",
            "Indeks Rebound (Cs atau Cr)",
            "Koefisien Kompresibilitas (av)"
        ],
        answer: "Indeks Kompresi (Cc)"
    },
    {
        question: "Penurunan konsolidasi primer (Sc) untuk lempung *Normally Consolidated* dihitung menggunakan...",
        options: [
            "Sc = (H / (1+e₀)) * Cc * log((σ₀' + Δσ') / σ₀')",
            "Sc = (H / (1+e₀)) * Cs * log((σ₀' + Δσ') / σ₀')",
            "Sc = (H / (1+e₀)) * Cv * t",
            "Sc = av * Δσ' * H"
        ],
        answer: "Sc = (H / (1+e₀)) * Cc * log((σ₀' + Δσ') / σ₀')"
    },
    {
        question: "Dalam tes Odometer, parameter 'Koefisien Konsolidasi' (Cv) menentukan...",
        options: [
            "Besarnya total penurunan.",
            "Kecepatan terjadinya penurunan.",
            "Besarnya tegangan prakonsolidasi.",
            "Kuat geser tanah."
        ],
        answer: "Kecepatan terjadinya penurunan."
    },
    {
        question: "Waktu yang dibutuhkan untuk mencapai 50% konsolidasi (t50) berbanding lurus dengan...",
        options: [
            "Cv dan (Hdr)²",
            "(Hdr)² dan berbanding terbalik dengan Cv",
            "Cv dan berbanding terbalik dengan (Hdr)²",
            "Hdr dan berbanding terbalik dengan Cv"
        ],
        answer: "(Hdr)² dan berbanding terbalik dengan Cv" // Rumus: t = (Tv * Hdr²) / Cv
    },
    {
        question: "Dalam tes konsolidasi, 'Hdr' (panjang drainase terpanjang) untuk sampel dengan drainase ganda (atas dan bawah) adalah...",
        options: [
            "Tinggi total sampel (H)",
            "Setengah tinggi sampel (H/2)",
            "Dua kali tinggi sampel (2H)",
            "Tinggi sampel dibagi luas (H/A)"
        ],
        answer: "Setengah tinggi sampel (H/2)"
    },
    {
        question: "Jenis tes triaksial di mana sampel dikonsolidasi terhadap tegangan sel (σ3) dan kemudian digeser tanpa drainase (air pori diukur) adalah...",
        options: [
            "Unconsolidated-Undrained (UU)",
            "Consolidated-Drained (CD)",
            "Consolidated-Undrained (CU)",
            "Direct Shear (DS)"
        ],
        answer: "Consolidated-Undrained (CU)"
    },
    {
        question: "Jenis tes triaksial yang mensimulasikan kondisi pembebanan jangka panjang (fully drained) pada tanah adalah...",
        options: [
            "Unconsolidated-Undrained (UU)",
            "Consolidated-Drained (CD)",
            "Consolidated-Undrained (CU)",
            "Unconfined Compression (UC)"
        ],
        answer: "Consolidated-Drained (CD)"
    },
    {
        question: "Untuk lempung jenuh *normally consolidated* dalam tes UU (total stress), sudut gesernya (φu) kira-kira...",
        options: [
            "0 derajat",
            "30 derajat",
            "Sama dengan φ'",
            "Tergantung pada tegangan sel"
        ],
        answer: "0 derajat" // Teori φu = 0
    },
    {
        question: "Kuat geser tak terdrainase (undrained shear strength, cu) dari lempung jenuh NC dalam tes UU sama dengan...",
        options: [
            "Setengah dari tegangan deviator saat runtuh (qf / 2)",
            "Tegangan sel (σ3)",
            "Tegangan efektif",
            "Nol"
        ],
        answer: "Setengah dari tegangan deviator saat runtuh (qf / 2)" // cu = (σ1 - σ3) / 2
    },
    {
        question: "Tes 'Unconfined Compression' (UC) pada dasarnya adalah tes Triaksial UU dengan...",
        options: [
            "σ1 = 0",
            "σ3 = 0",
            "u = 0",
            "σ1 = σ3"
        ],
        answer: "σ3 = 0"
    },
    {
        question: "Dalam tes geser langsung (Direct Shear), bidang keruntuhan...",
        options: [
            "Dipaksa terjadi pada bidang horizontal.",
            "Merupakan bidang terlemah alami.",
            "Berorientasi 45 + φ/2.",
            "Tidak dapat ditentukan."
        ],
        answer: "Dipaksa terjadi pada bidang horizontal."
    },
    {
        question: "Parameter tekanan air pori 'B' dari Skempton mengukur...",
        options: [
            "Respon tekanan air pori akibat perubahan tegangan deviator.",
            "Respon tekanan air pori akibat perubahan tegangan keliling (confining pressure).",
            "Rasio antara kohesi dan adhesi.",
            "Kapasitas daya dukung."
        ],
        answer: "Respon tekanan air pori akibat perubahan tegangan keliling (confining pressure)." // Δu = B * Δσ3
    },
    {
        question: "Parameter tekanan air pori 'A' dari Skempton mengukur...",
        options: [
            "Respon tekanan air pori akibat perubahan tegangan deviator.",
            "Respon tekanan air pori akibat perubahan tegangan keliling.",
            "Tegangan prakonsolidasi.",
            "Indeks likuiditas."
        ],
        answer: "Respon tekanan air pori akibat perubahan tegangan deviator." // Δu = A * Δ(σ1 - σ3)
    },
    {
        question: "Apa perbedaan utama antara tekanan tanah 'Aktif' (Active) dan 'Pasif' (Passive)?",
        options: [
            "Aktif terjadi saat dinding bergerak menjauhi tanah, Pasif saat dinding bergerak menuju tanah.",
            "Aktif terjadi saat dinding bergerak menuju tanah, Pasif saat dinding bergerak menjauhi tanah.",
            "Aktif untuk pasir, Pasif untuk lempung.",
            "Aktif jangka pendek, Pasif jangka panjang."
        ],
        answer: "Aktif terjadi saat dinding bergerak menjauhi tanah, Pasif saat dinding bergerak menuju tanah."
    },
    {
        question: "Koefisien tekanan tanah 'At-Rest' (K₀) untuk tanah *normally consolidated* sering diestimasi menggunakan rumus Jaky:",
        options: [
            "K₀ = 1 + sin(φ')",
            "K₀ = 1 - sin(φ')",
            "K₀ = tan²(45 - φ'/2)",
            "K₀ = (1 - sin(φ')) * (OCR)^0.5"
        ],
        answer: "K₀ = 1 - sin(φ')"
    },
    {
        question: "Koefisien tekanan tanah aktif (Ka) menurut teori Rankine (dinding licin, tanah horizontal) adalah...",
        options: [
            "Ka = tan²(45 + φ'/2)",
            "Ka = 1 - sin(φ')",
            "Ka = tan²(45 - φ'/2)",
            "Ka = 1 / (1 + sin(φ'))"
        ],
        answer: "Ka = tan²(45 - φ'/2)" // Ka = (1-sinφ')/(1+sinφ') = tan²(45-φ'/2)
    },
    {
        question: "Koefisien tekanan tanah pasif (Kp) menurut teori Rankine (dinding licin, tanah horizontal) adalah...",
        options: [
            "Kp = tan²(45 + φ'/2)",
            "Kp = 1 / (1 - sin(φ'))",
            "Kp = tan²(45 - φ'/2)",
            "Kp = 1 - sin(φ')"
        ],
        answer: "Kp = tan²(45 + φ'/2)"
    },
    {
        question: "Untuk lempung jenuh (kondisi tak terdrainase, φu = 0), Ka dan Kp keduanya bernilai...",
        options: [
            "0",
            "1.0",
            "0.5",
            "Tak terhingga"
        ],
        answer: "1.0" // tan²(45 - 0/2) = 1 dan tan²(45 + 0/2) = 1
    },
    {
        question: "Pada lempung jenuh (φu = 0), tekanan tanah aktif (σa) pada kedalaman z adalah...",
        options: [
            "σa = (γz) - 2cu",
            "σa = (γz) + 2cu",
            "σa = 0.5 * γz",
            "σa = 2cu"
        ],
        answer: "σa = (γz) - 2cu"
    },
    {
        question: "Zona retak tarik (tension crack) pada lempung jenuh (φu=0) di belakang dinding penahan tanah terjadi hingga kedalaman (zc) sebesar...",
        options: [
            "zc = 2cu / γ",
            "zc = 4cu / γ",
            "zc = cu / γ",
            "zc = γ / (2cu)"
        ],
        answer: "zc = 2cu / γ" // Dimana σa = 0
    },

    // --- Tingkat 3: Sulit (Analisis & Perhitungan Kompleks) ---
    // (Sumber: Mekanika Tanah 2 - Bab 11-15)
    {
        question: "Dalam analisis stabilitas lereng, 'Faktor Keamanan' (FS) umumnya didefinisikan sebagai...",
        options: [
            "Gaya penggerak / Gaya penahan",
            "Momen penahan / Momen penggerak",
            "Kuat geser yang tersedia / Tegangan geser yang bekerja",
            "Semua jawaban di atas benar (tergantung metode)"
        ],
        answer: "Semua jawaban di atas benar (tergantung metode)" // FS = Momen Penahan / Momen Penggerak (Metode Irisan), FS = τf / τ (Definisi)
    },
    {
        question: "Untuk lereng tak terhingga (infinite slope) pada tanah granular kering (c=0) dengan kemiringan lereng β, Faktor Keamanan (FS) adalah...",
        options: [
            "FS = tan(β) / tan(φ')",
            "FS = tan(φ') / tan(β)",
            "FS = 1.0",
            "FS = c / (γz * sinβ)"
        ],
        answer: "FS = tan(φ') / tan(β)"
    },
    {
        question: "Untuk lereng tak terhingga pada lempung jenuh (φu=0) dengan kemiringan lereng β dan kedalaman lapisan H, Faktor Keamanan (FS) adalah...",
        options: [
            "FS = cu / (γH * sin(β) * cos(β))",
            "FS = γH / cu",
            "FS = tan(β) / cu",
            "FS = cu / (γH * sin²(β))"
        ],
        answer: "FS = cu / (γH * sin(β) * cos(β))" // τ = γH*sinβ*cosβ; τf = cu
    },
    {
        question: "Metode analisis stabilitas lereng yang paling sederhana untuk bidang longsor lingkaran pada lempung jenuh (φu=0) adalah...",
        options: [
            "Metode Bishop yang Disederhanakan",
            "Metode Janbu",
            "Metode Fellenius (Metode Irisan Biasa)",
            "Metode Massa (Mass Procedure)"
        ],
        answer: "Metode Massa (Mass Procedure)" // FS = (cu * L * R) / (W * x)
    },
    {
        question: "Metode Fellenius (Metode Irisan Biasa) mengabaikan...",
        options: [
            "Gaya geser antar irisan.",
            "Gaya normal antar irisan.",
            "Berat irisan.",
            "Gaya geser dan gaya normal antar irisan."
        ],
        answer: "Gaya geser dan gaya normal antar irisan."
    },
    {
        question: "Metode Bishop yang Disederhanakan (Simplified Bishop's Method) lebih akurat daripada Metode Fellenius karena...",
        options: [
            "Memenuhi kesetimbangan gaya vertikal dan mengabaikan geser antar irisan.",
            "Memenuhi kesetimbangan gaya horizontal dan vertikal.",
            "Menggunakan bidang longsor non-sirkular.",
            "Mengabaikan berat irisan."
        ],
        answer: "Memenuhi kesetimbangan gaya vertikal dan mengabaikan geser antar irisan."
    },
    {
        question: "Metode analisis stabilitas lereng yang memenuhi *semua* kondisi kesetimbangan (gaya horizontal, vertikal, dan momen) adalah...",
        options: [
            "Metode Fellenius",
            "Metode Bishop yang Disederhanakan",
            "Metode Spencer",
            "Metode Culmann"
        ],
        answer: "Metode Spencer"
    },
    {
        question: "Apa yang dimaksud dengan 'Daya Dukung Ultimit' (Ultimate Bearing Capacity, qu) dari pondasi?",
        options: [
            "Beban maksimum yang dapat ditanggung tanah sebelum runtuh geser.",
            "Beban yang menyebabkan penurunan sebesar 25 mm.",
            "Beban yang diizinkan oleh peraturan bangunan.",
            "Tegangan prakonsolidasi tanah."
        ],
        answer: "Beban maksimum yang dapat ditanggung tanah sebelum runtuh geser."
    },
    {
        question: "Daya Dukung Izin (Allowable Bearing Capacity, q_all) dihitung sebagai...",
        options: [
            "q_all = qu / FS",
            "q_all = qu - q (beban overburden)",
            "q_all = qu * FS",
            "q_all = (qu - q) / FS + q"
        ],
        answer: "q_all = (qu - q) / FS + q" // Ini adalah q_all(netto) yang dikonversi ke bruto. q_all(net) = (qu - q) / FS.
    },
    {
        question: "Menurut persamaan daya dukung Terzaghi untuk pondasi lajur, 'qu' adalah...",
        options: [
            "qu = c'Nc + qNq + 0.5γBNγ",
            "qu = 1.3c'Nc + qNq + 0.4γBNγ",
            "qu = 1.3c'Nc + qNq + 0.3γBNγ",
            "qu = c'Nc"
        ],
        answer: "qu = c'Nc + qNq + 0.5γBNγ"
    },
    {
        question: "Dalam persamaan daya dukung Terzaghi, 'q' adalah...",
        options: [
            "Beban merata pondasi.",
            "Tegangan overburden efektif di dasar pondasi (γD_f).",
            "Berat volume tanah di bawah pondasi.",
            "Lebar pondasi."
        ],
        answer: "Tegangan overburden efektif di dasar pondasi (γD_f)."
    },
    {
        question: "Faktor daya dukung (Nc, Nq, Nγ) dalam persamaan Terzaghi hanya bergantung pada...",
        options: [
            "Kohesi (c')",
            "Sudut geser dalam (φ')",
            "Lebar pondasi (B)",
            "Kohesi (c') dan sudut geser dalam (φ')"
        ],
        answer: "Sudut geser dalam (φ')"
    },
    {
        question: "Untuk pondasi di atas lempung jenuh (kondisi tak terdrainase, φu=0), persamaan daya dukung Terzaghi disederhanakan menjadi...",
        options: [
            "qu = 5.7cu + q",
            "qu = 1.3cu",
            "qu = 0.5γBNγ",
            "qu = qNq"
        ],
        answer: "qu = 5.7cu + q" // Karena untuk φ=0, Nc=5.7 (atau 5.14), Nq=1, Nγ=0
    },
    {
        question: "Pengaruh muka air tanah (MAT) pada daya dukung paling signifikan jika MAT berada...",
        options: [
            "Jauh di bawah dasar pondasi.",
            "Di antara permukaan tanah dan dasar pondasi, atau sedikit di bawah dasar pondasi.",
            "Jauh di atas permukaan tanah.",
            "MAT tidak mempengaruhi daya dukung."
        ],
        answer: "Di antara permukaan tanah dan dasar pondasi, atau sedikit di bawah dasar pondasi."
    },
    {
        question: "Jika MAT berada di dasar pondasi, suku 'qNq' dalam persamaan daya dukung dihitung menggunakan 'q' sebagai...",
        options: [
            "γ * Df",
            "γ' * Df",
            "γsat * Df",
            "0"
        ],
        answer: "γ * Df" // Jika di dasar, q = γ*Df. Suku γBNγ yang terpengaruh
    },
    {
        question: "Jika MAT berada di dasar pondasi, suku '0.5γBNγ' dalam persamaan daya dukung dihitung menggunakan 'γ' sebagai...",
        options: [
            "γ (berat volume basah)",
            "γsat (berat volume jenuh)",
            "γ' (berat volume efektif/apung)",
            "γd (berat volume kering)"
        ],
        answer: "γ' (berat volume efektif/apung)" // γ' = γsat - γw
    },
    {
        question: "Jenis keruntuhan daya dukung yang terjadi pada tanah yang sangat padat (dense sand) atau lempung kaku (stiff clay) adalah...",
        options: [
            "General Shear Failure",
            "Local Shear Failure",
            "Punching Shear Failure",
            "Consolidation Failure"
        ],
        answer: "General Shear Failure"
    },
    {
        question: "Jenis keruntuhan daya dukung yang terjadi pada tanah yang sangat lepas (loose sand) atau lempung lunak (soft clay) adalah...",
        options: [
            "General Shear Failure",
            "Local Shear Failure",
            "Punching Shear Failure",
            "Local atau Punching Shear Failure"
        ],
        answer: "Local atau Punching Shear Failure"
    },
    {
        question: "Untuk mengakomodasi 'Local Shear Failure', parameter c' dan φ' yang digunakan dalam persamaan Terzaghi harus...",
        options: [
            "Dikalikan 2/3",
            "Dibagi 2/3",
            "Tidak diubah",
            "Dikalikan 1.5"
        ],
        answer: "Dikalikan 2/3" // c_adj = (2/3)c' dan tan(φ_adj) = (2/3)tan(φ')
    },
    {
        question: "Penurunan pondasi yang terjadi segera setelah pembebanan, akibat distorsi elastis tanah, disebut...",
        options: [
            "Penurunan Segera (Immediate / Elastic Settlement)",
            "Penurunan Konsolidasi Primer",
            "Penurunan Konsolidasi Sekunder",
            "Penurunan Total"
        ],
        answer: "Penurunan Segera (Immediate / Elastic Settlement)"
    },
    {
        question: "Penurunan konsolidasi sekunder (Secondary Consolidation / Creep) terjadi...",
        options: [
            "Selama proses keluarnya air pori (disipasi u).",
            "Segera setelah beban diterapkan.",
            "Setelah disipasi kelebihan tekanan air pori selesai (setelah konsolidasi primer).",
            "Hanya pada tanah pasir."
        ],
        answer: "Setelah disipasi kelebihan tekanan air pori selesai (setelah konsolidasi primer)."
    },
    {
        question: "Penurunan elastis (Se) dari pondasi fleksibel di atas lempung jenuh dihitung menggunakan E (Modulus Elastisitas) dalam kondisi...",
        options: [
            "Terdrainase (Drained, E')",
            "Tak Terdrainase (Undrained, Eu)",
            "Efektif",
            "Total"
        ],
        answer: "Tak Terdrainase (Undrained, Eu)"
    },
    {
        question: "Pondasi tiang (pile foundation) umumnya digunakan ketika...",
        options: [
            "Tanah permukaan sangat kuat.",
            "Beban struktur sangat ringan.",
            "Tanah permukaan lunak dan tidak mampu menahan beban dengan pondasi dangkal.",
            "Muka air tanah sangat dalam."
        ],
        answer: "Tanah permukaan lunak dan tidak mampu menahan beban dengan pondasi dangkal."
    },
    {
        question: "Daya dukung ultimit (Qu) dari sebuah tiang pancang adalah jumlah dari...",
        options: [
            "Tahanan Ujung (Point Bearing, Qp) dan Tahanan Gesek Selimut (Skin Friction, Qs)",
            "Beban mati dan beban hidup",
            "Tahanan aktif dan pasif",
            "Penurunan elastis dan konsolidasi"
        ],
        answer: "Tahanan Ujung (Point Bearing, Qp) dan Tahanan Gesek Selimut (Skin Friction, Qs)"
    },
    {
        question: "Tahanan ujung (Qp) pada tiang pancang di tanah pasir dihitung berdasarkan...",
        options: [
            "Kuat geser tak terdrainase (cu)",
            "Tegangan efektif overburden di ujung tiang (q') dan Nq*",
            "Indeks kompresi (Cc)",
            "Koefisien permeabilitas (k)"
        ],
        answer: "Tegangan efektif overburden di ujung tiang (q') dan Nq*" // Qp = Ap * q' * Nq*
    },
    {
        question: "Tahanan gesek selimut (Qs) pada tiang pancang di tanah lempung jenuh (metode α) dihitung berdasarkan...",
        options: [
            "Tegangan geser efektif",
            "Kohesi (cu) dan faktor adhesi (α)",
            "Sudut geser dalam (φ')",
            "Tegangan lateral (K)"
        ],
        answer: "Kohesi (cu) dan faktor adhesi (α)" // Qs = Σ (p * ΔL * α * cu)
    },
    {
        question: "Untuk tiang kelompok (pile group), efisiensi kelompok (η) seringkali...",
        options: [
            "Selalu lebih besar dari 1",
            "Selalu sama dengan 1",
            "Bisa kurang dari 1, terutama pada lempung.",
            "Tidak relevan untuk desain"
        ],
        answer: "Bisa kurang dari 1, terutama pada lempung."
    },
    {
        question: "Penyelidikan tanah (Soil Exploration) yang paling umum untuk mendapatkan sampel 'tak terganggu' (undisturbed sample) pada lempung adalah...",
        options: [
            "Standard Penetration Test (SPT)",
            "Cone Penetration Test (CPT)",
            "Pengeboran dengan Tabung Dinding Tipis (Thin-Walled Tube / Shelby Tube)",
            "Auger Boring"
        ],
        answer: "Pengeboran dengan Tabung Dinding Tipis (Thin-Walled Tube / Shelby Tube)"
    },
    {
        question: "Cone Penetration Test (CPT) mengukur dua parameter utama, yaitu...",
        options: [
            "Nilai N dan kadar air",
            "Tahanan konus (qc) dan Tahanan gesek lokal (fs)",
            "Kohesi (c) dan sudut geser (φ)",
            "Permeabilitas (k) dan koefisien konsolidasi (cv)"
        ],
        answer: "Tahanan konus (qc) dan Tahanan gesek lokal (fs)"
    }
];
