// --- DATA MODUL SEMESTER GENAP & GASAL ---
const modulesData = {
    genap: {
        reguler: [
            { id: 1, title: "Pengantar Eksperimentasi", description: "", link: "Bab 1.pdf" },
            { id: 2, title: "Percepatan Gravitasi", description: "", link: "Bab 2.pdf" },
            { id: 3, title: "Viskositas", description: "", link: "Bab 3.pdf" },
            { id: 4, title: "Hukum Boyle", description: "", link: "Bab 4.pdf" },
            { id: 5, title: "Pendinginan Air", description: "", link: "Bab 5.pdf" },
            { id: 6, title: "Getaran Teredam", description: "", link: "Bab 6.pdf" },
            { id: 7, title: "Konstanta Pegas", description: "", link: "Bab 7.pdf" },
            { id: 8, title: "Aliran Air Dalam Pipa Kapiler", description: "", link: "Bab 8.pdf" },
            { id: 9, title: "Osilasi Batang", description: "", link: "Bab 9.pdf" },
            { id: 10, title: "Kesetaraan Kalor-Listrik", description: "", link: "Bab 10.pdf" },
            { id: 11, title: "Osiloskop", description: "", link: "Bab 11.pdf" }
        ],
        iup: [
            { id: 1, title: "INTRODUCTION TO EXPERIMENTATION ", description: "", link: "Chap1.pdf" },
            { id: 2, title: "Gravitational Acceleration", description: "", link: "Chap2.pdf" },
            { id: 3, title: "VISCOSITY OF LIQUID", description: "", link: "Chap3.pdf" },
            { id: 4, title: "Boyle’s Law", description: "", link: "Chap4.pdf" },
            { id: 5, title: "Cooling of water", description: "", link: "Chap5.pdf" },
            { id: 6, title: "Damped Oscillation", description: "", link: "Chap6.pdf" },
            { id: 7, title: "Spring Constant", description: "", link: "Chap7.pdf" },
            { id: 8, title: "Water Flow in Capillary Tube", description: "", link: "Chap8.pdf" },
            { id: 9, title: "Rod Oscillation", description: "", link: "Chap9.pdf" },
            { id: 10, title: "Heat-Electricity Equivalence", description: "", link: "Chap10.pdf" },
            { id: 11, title: "OSCILLOSCOPE", description: "", link: "Chap11.pdf" }
        ]
    },
    gasal: {
        reguler: [
            { id: 1, title: "Pengantar Eksperimentasi", description: "", link: "Bab 1.pdf" },
            { id: 2, title: "Percepatan Gravitasi", description: "", link: "Bab 2.pdf" },
            { id: 3, title: "Viskositas", description: "", link: "Bab 3.pdf" },
            { id: 4, title: "Hukum Boyle", description: "", link: "Bab 4.pdf" },
            { id: 5, title: "Pendinginan Air", description: "", link: "Bab 5.pdf" },
            { id: 6, title: "Getaran Teredam", description: "", link: "Bab 6.pdf" },
            { id: 7, title: "Konstanta Pegas", description: "", link: "Bab 7.pdf" },
            { id: 8, title: "Aliran Air Dalam Pipa Kapiler", description: "", link: "Bab 8.pdf" },
            { id: 9, title: "Osilasi Batang", description: "", link: "Bab 9.pdf" },
            { id: 10, title: "Kesetaraan Kalor-Listrik", description: "", link: "Bab 10.pdf" },
            { id: 11, title: "Osiloskop", description: "", link: "Bab 11.pdf" }
        ],
        iup: [
            { id: 1, title: "INTRODUCTION TO EXPERIMENTATION ", description: "", link: "Chap1.pdf" },
            { id: 2, title: "Gravitational Acceleration", description: "", link: "Chap2.pdf" },
            { id: 3, title: "VISCOSITY OF LIQUID", description: "", link: "Chap3.pdf" },
            { id: 4, title: "Boyle’s Law", description: "", link: "Chap4.pdf" },
            { id: 5, title: "Cooling of water", description: "", link: "Chap5.pdf" },
            { id: 6, title: "Damped Oscillation", description: "", link: "Chap6.pdf" },
            { id: 7, title: "Spring Constant", description: "", link: "Chap7.pdf" },
            { id: 8, title: "Water Flow in Capillary Tube", description: "", link: "Chap8.pdf" },
            { id: 9, title: "Rod Oscillation", description: "", link: "Chap9.pdf" },
            { id: 10, title: "Heat-Electricity Equivalence", description: "", link: "Chap10.pdf" },
            { id: 11, title: "OSCILLOSCOPE", description: "", link: "Chap11.pdf" }
        ]
    }
};

let currentSemester = 'genap';
let currentCategory = 'reguler';

// Elemen DOM Utama
const moduleContainer = document.getElementById('moduleContainer');
const searchModulInput = document.getElementById('searchModulInput');
const pageTitle = document.getElementById('pageTitle');
const modulListHeading = document.getElementById('modulListHeading');
const pageViews = document.querySelectorAll('.page-view');
const navLinks = document.querySelectorAll('.nav-link');

// Fungsi Render Modul
function displayModules(semester, category) {
    if (!moduleContainer) return;
    moduleContainer.innerHTML = '';
    const data = modulesData[semester][category];

    if (!data || data.length === 0) {
        moduleContainer.innerHTML = `<div class="no-results" style="grid-column: 1/-1; text-align: center; color: #94a3b8; padding: 40px;">Modul tidak ditemukan.</div>`;
        return;
    }

    data.forEach(modul => {
        const card = document.createElement('div');
        card.classList.add('module-card');
        card.innerHTML = `
            <div class="module-info">
                <h3>${modul.title}</h3>
                <p>${modul.description}</p>
            </div>
            <a href="${modul.link}" class="btn-access" download>Download PDF</a>
        `;
        moduleContainer.appendChild(card);
    });
}

// Tombol "Open" pada Kategori Modul
const openCategoryButtons = document.querySelectorAll('.open-category');
openCategoryButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        currentSemester = btn.getAttribute('data-semester');
        currentCategory = btn.getAttribute('data-category');

        pageViews.forEach(v => v.classList.remove('active'));
        document.getElementById('view-modul-list').classList.add('active');

        const semLabel = currentSemester === 'genap' ? 'Semester Gasal' : 'Semester Genap';
        const katLabel = currentCategory === 'reguler' ? 'Kelas Reguler' : 'Kelas IUP';
        
        pageTitle.innerText = `Modul ${semLabel} - ${katLabel}`;
        modulListHeading.innerText = `Daftar Modul (${semLabel} / ${katLabel})`;
        
        displayModules(currentSemester, currentCategory);
    });
});

// Tombol Kembali ke Kategori Berdasarkan Semester Aktif
const backBtn = document.getElementById('backToBeranda');
if (backBtn) {
    backBtn.addEventListener('click', () => {
        pageViews.forEach(v => v.classList.remove('active'));
        if (currentSemester === 'genap') {
            document.getElementById('view-genap-modul').classList.add('active');
            pageTitle.innerText = "Modul Semester Gasal";
        } else {
            document.getElementById('view-gasal-modul').classList.add('active');
            pageTitle.innerText = "Modul Semester Genap";
        }
        if (searchModulInput) searchModulInput.value = '';
    });
}

// Navigasi Sidebar Utama
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');

        const page = link.getAttribute('data-page');
        pageViews.forEach(v => v.classList.remove('active'));

        if (page === 'genap-modul') {
            document.getElementById('view-genap-modul').classList.add('active');
            pageTitle.innerText = "Modul Semester Gasal";
            currentSemester = 'genap';
        } else if (page === 'genap-jadwal') {
            document.getElementById('view-genap-jadwal').classList.add('active');
            pageTitle.innerText = "Schedule Semester Gasal";
        } else if (page === 'gasal-modul') {
            document.getElementById('view-gasal-modul').classList.add('active');
            pageTitle.innerText = "Modul Semester Genap";
            currentSemester = 'gasal';
        } else if (page === 'gasal-jadwal') {
            document.getElementById('view-gasal-jadwal').classList.add('active');
            pageTitle.innerText = "Schedule Semester Genap";
        } else if (page === 'peminjaman-alat') {
            document.getElementById('view-peminjaman-alat').classList.add('active');
            pageTitle.innerText = "Peminjaman Alat";
        }
    });
});

// Kontrol Sidebar Mobile/Desktop
const menuBtn = document.getElementById('menuBtn');
const dashboardContainer = document.getElementById('dashboardContainer');
const closeBtn = document.getElementById('closeBtn');
const overlay = document.getElementById('overlay');

if (menuBtn) {
    menuBtn.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            dashboardContainer.classList.toggle('sidebar-mobile-active');
            overlay.classList.toggle('active');
        } else {
            dashboardContainer.classList.toggle('sidebar-collapsed');
        }
    });
}

if (closeBtn) {
    closeBtn.addEventListener('click', () => {
        dashboardContainer.classList.remove('sidebar-mobile-active');
        overlay.classList.remove('active');
    });
}

if (overlay) {
    overlay.addEventListener('click', () => {
        dashboardContainer.classList.remove('sidebar-mobile-active');
        overlay.classList.remove('active');
    });
}

// Fitur Pencarian Real-time Modul
if (searchModulInput) {
    searchModulInput.addEventListener('input', (e) => {
        const keyword = e.target.value.toLowerCase();
        const data = modulesData[currentSemester][currentCategory];
        const filtered = data.filter(modul => 
            modul.title.toLowerCase().includes(keyword) || 
            modul.description.toLowerCase().includes(keyword)
        );

        moduleContainer.innerHTML = '';
        if (filtered.length === 0) {
            moduleContainer.innerHTML = `<div class="no-results" style="grid-column: 1/-1; text-align: center; color: #94a3b8; padding: 40px;">Modul tidak ditemukan.</div>`;
            return;
        }

        filtered.forEach(modul => {
            const card = document.createElement('div');
            card.classList.add('module-card');
            card.innerHTML = `
                <div class="module-info">
                    <h3>${modul.title}</h3>
                    <p>${modul.description}</p>
                </div>
                <a href="${modul.link}" class="btn-access" download>Download PDF</a>
            `;
            moduleContainer.appendChild(card);
        });
    });
}

// Fitur Akordion Sub-Menu Sidebar
const menuToggles = document.querySelectorAll('.menu-toggle');
menuToggles.forEach(toggle => {
    toggle.addEventListener('click', (e) => {
        e.preventDefault();
        const parentLi = toggle.parentElement;
        parentLi.classList.toggle('open');
    });
});


// ================== LOGIKA PRESENSI & FIREBASE ==================
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-app.js";
import { getFirestore, collection, addDoc, deleteDoc, doc, onSnapshot, getDocs } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-firestore.js";

// 🔐 CEK LOGIN
if (localStorage.getItem("isLogin") !== "true") {
    window.location.href = "login.html";
}

window.logout = function() {
    if (confirm("Yakin mau logout?")) {
        localStorage.removeItem("isLogin");
        localStorage.removeItem("userEmail");
        window.location.href = "login.html";
    }
}

const firebaseConfig = {
    apiKey: "AIzaSyDzCK1hF39bYcx16sc0hCoCfUOdhqtzeVo",
    authDomain: "presensi-app-aabb9.firebaseapp.com",
    projectId: "presensi-app-aabb9",
    storageBucket: "presensi-app-aabb9.firebasestorage.app",
    messagingSenderId: "881822154087",
    appId: "1:881822154087:web:bfb66e8629734e320203c2"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const loggedInEmail = localStorage.getItem("userEmail");
const isAsisten = (loggedInEmail === "asisten@gmail.com");

if (isAsisten) {
    const btnHapusSemua = document.getElementById("btnHapusSemua");
    if (btnHapusSemua) btnHapusSemua.style.display = "block";
}

let sortField = null;
let sortAsc = true;
let semuaData = [];
let currentData = [];
let presensiRowsPerPage = 10;
let presensiCurrentPage = 1;

window.sortTable = function(field) {
    const map = {
        "Nama": "nama",
        "NIU": "niu",
        "Kelas": "kelas",
        "Kode": "kodeJudul",
        "Waktu": "waktu"
    };

    let key = map[field];
    if (sortField === key) {
        sortAsc = !sortAsc;
    } else {
        sortField = key;
        sortAsc = true;
    }
    renderTablePresensi();
};

function getStartOfWeek(submitDate, kelas) {
    let date = new Date(submitDate);
    let day = date.getDay(); 
    let targetDay = 1; // Default Senin (Fisika)

    if (kelas === "Geofisika") {
        targetDay = 4; // Kamis
    } else if (kelas === "IUP Physics") {
        targetDay = 5; // Jumat
    }

    let diff = (day - targetDay + 7) % 7;
    date.setDate(date.getDate() - diff);
    date.setHours(0, 0, 0, 0);
    return date;
}

const formPresensi = document.getElementById("formData");
if (formPresensi) {
    formPresensi.addEventListener("submit", async function(e) {
        e.preventDefault();

        const nama = document.getElementById("Nama").value;
        const niu = document.getElementById("NIU").value;
        const kelas = document.getElementById("Kelas").value;
        const kodeJudul = document.getElementById("KodeJudul").value;
        const waktuSubmit = new Date();

        const startCurrentWeek = getStartOfWeek(waktuSubmit, kelas);

        let sudahAbsenMingguIni = false;
        semuaData.forEach(item => {
            if (String(item.niu).trim() === String(niu).trim() && item.kelas === kelas) {
                let waktuItem = new Date(item.waktuOriginal || item.waktu);
                let startItemWeek = getStartOfWeek(waktuItem, kelas);
                if (startItemWeek.getTime() === startCurrentWeek.getTime()) {
                    sudahAbsenMingguIni = true;
                }
            }
        });

        if (sudahAbsenMingguIni) {
            alert(`NIU ${niu} untuk kelas ${kelas} sudah pernah melakukan presensi pada minggu ini.`);
            return;
        }

        await addDoc(collection(db, "presensi"), {
            nama,
            niu,
            kelas,
            kodeJudul,
            waktuOriginal: waktuSubmit.toISOString(),
            waktu: waktuSubmit.toLocaleString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
                hour12: true
            })
        });
        
        alert("Presensi berhasil dikirim!");
        formPresensi.reset(); 
    });
}

function initRealtimePresensi() {
    onSnapshot(collection(db, "presensi"), (snapshot) => {
        semuaData = [];
        snapshot.forEach((docSnap) => {
            semuaData.push({
                id: docSnap.id,
                ...docSnap.data()
            });
        });
        renderTablePresensi();
    });
}

window.hapusData = async function(id) {
    if (!isAsisten) {
        alert("Akses ditolak! Hanya Asisten yang dapat menghapus data.");
        return;
    }
    if (confirm("Yakin mau hapus data ini?")) {
        await deleteDoc(doc(db, "presensi", id));
        alert("Data dihapus!");
    }
};

window.hapusSemua = async function() {
    if (!isAsisten) {
        alert("Akses ditolak! Hanya Asisten yang dapat menghapus semua data.");
        return;
    }
    if (confirm("Yakin mau hapus SEMUA data?")) {
        const querySnapshot = await getDocs(collection(db, "presensi"));
        const promises = querySnapshot.docs.map((docSnap) => deleteDoc(doc(db, "presensi", docSnap.id)));
        await Promise.all(promises);
        alert("Semua data berhasil dihapus!");
    }
};

initRealtimePresensi();

function renderTablePresensi() {
    let table = document.getElementById("dataTable");
    if (!table) return;
    table.innerHTML = "";

    const searchInputEl = document.getElementById("searchPresensiInput");
    const filterKodeEl = document.getElementById("filterKode");
    const filterTanggalEl = document.getElementById("filterTanggal");

    const keyword = searchInputEl ? searchInputEl.value.toLowerCase() : "";
    const kodeFilter = filterKodeEl ? filterKodeEl.value : "";
    const tanggalFilter = filterTanggalEl ? filterTanggalEl.value : "";

    currentData = semuaData.filter((item) => {
        if (
            keyword &&
            !item.nama.toLowerCase().includes(keyword) &&
            !String(item.niu).toLowerCase().includes(keyword) &&
            !item.kelas.toLowerCase().includes(keyword) &&
            !String(item.kodeJudul || "").toLowerCase().includes(keyword)
        ) return false;

        if (kodeFilter && item.kodeJudul !== kodeFilter) return false;

        if (tanggalFilter) {
            const tanggalData = new Date(item.waktuOriginal || item.waktu).toISOString().split("T")[0];
            if (tanggalData !== tanggalFilter) return false;
        }

        return true;
    });

    if (sortField) {
        currentData.sort((a, b) => {
            let valA = a[sortField] || "";
            let valB = b[sortField] || "";

            if (!isNaN(valA) && !isNaN(valB)) {
                return sortAsc ? valA - valB : valB - valA;
            }

            valA = String(valA).toLowerCase();
            valB = String(valB).toLowerCase();

            if (valA < valB) return sortAsc ? -1 : 1;
            if (valA > valB) return sortAsc ? 1 : -1;
            return 0;
        });
    }

    let start = (presensiCurrentPage - 1) * presensiRowsPerPage;
    let end = presensiRowsPerPage === "all" ? currentData.length : start + presensiRowsPerPage;

    let paginatedData = presensiRowsPerPage === "all"
        ? currentData
        : currentData.slice(start, end);

    paginatedData.forEach((item) => {
        let tombolAksi = isAsisten 
            ? `<button class="btn-delete" onclick="hapusData('${item.id}')">❌</button>` 
            : `<span style="color: #aaa; font-size: 12px;">-</span>`;

        let row = `
            <tr>
                <td>${item.nama}</td>
                <td>${item.niu}</td>
                <td>${item.kelas}</td>
                <td>${item.kodeJudul}</td>
                <td>${item.waktu}</td>
                <td>${tombolAksi}</td>
            </tr>
        `;
        table.innerHTML += row;
    });

    renderPaginationPresensi();
}

function renderPaginationPresensi() {
    const pagination = document.getElementById("pagination");
    if (!pagination) return;
    pagination.innerHTML = "";

    const totalPages = presensiRowsPerPage === "all"
        ? 1
        : Math.ceil(currentData.length / presensiRowsPerPage);

    if (totalPages <= 1) return;

    for (let i = 1; i <= totalPages; i++) {
        pagination.innerHTML += `
            <button onclick="goToPresensiPage(${i})" class="${i === presensiCurrentPage ? 'active' : ''}">
                ${i}
            </button>
        `;
    }
}

window.goToPresensiPage = function(page) {
    presensiCurrentPage = page;
    renderTablePresensi();
}

const sInput = document.getElementById("searchPresensiInput");
const fKode = document.getElementById("filterKode");
const fTgl = document.getElementById("filterTanggal");
const rPage = document.getElementById("rowsPerPage");

if (sInput) sInput.addEventListener("input", renderTablePresensi);
if (fKode) fKode.addEventListener("change", renderTablePresensi);
if (fTgl) fTgl.addEventListener("change", renderTablePresensi);
if (rPage) {
    rPage.addEventListener("change", function() {
        presensiRowsPerPage = this.value === "all" ? "all" : parseInt(this.value);
        presensiCurrentPage = 1; 
        renderTablePresensi();
    });
}

window.downloadExcel = function () {
    if (currentData.length === 0) {
        alert("Tidak ada data untuk didownload!");
        return;
    }

    let csv = "Nama,NIU,Kelas,Kode,Waktu\n";
    currentData.forEach(item => {
        csv += `${item.nama},${item.niu},${item.kelas},${item.kodeJudul || ""},${item.waktu}\n`;
    });

    const blob = new Blob([csv], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "data_presensi.csv";
    a.click();

    window.URL.revokeObjectURL(url);
};
