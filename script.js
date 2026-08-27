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

// Elemen DOM
const moduleContainer = document.getElementById('moduleContainer');
const searchInput = document.getElementById('searchInput');
const pageTitle = document.getElementById('pageTitle');
const modulListHeading = document.getElementById('modulListHeading');
const pageViews = document.querySelectorAll('.page-view');
const navLinks = document.querySelectorAll('.nav-link');

// Fungsi Render Modul
function displayModules(semester, category) {
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
            <a href="${modul.link}" class="btn-access" target="_blank">Open</a>
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
document.getElementById('backToBeranda').addEventListener('click', () => {
    pageViews.forEach(v => v.classList.remove('active'));
    if (currentSemester === 'genap') {
        document.getElementById('view-genap-modul').classList.add('active');
        pageTitle.innerText = "Modul Semester Gasal";
    } else {
        document.getElementById('view-gasal-modul').classList.add('active');
        pageTitle.innerText = "Modul Semester Genap";
    }
    searchInput.value = '';
});

// Navigasi Sidebar Utama (Sub-menu)
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
        } else if (page === 'pengaturan') {
            document.getElementById('view-pengaturan').classList.add('active');
            pageTitle.innerText = "Pengaturan";
        }
    });
});

// Fitur Ganti Warna Wallpaper
const colorButtons = document.querySelectorAll('.color-btn');
colorButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const color = btn.getAttribute('data-color');
        document.documentElement.style.setProperty('--bg-color', color);
    });
});

// Kontrol Sidebar Mobile/Desktop
const menuBtn = document.getElementById('menuBtn');
const dashboardContainer = document.getElementById('dashboardContainer');
const closeBtn = document.getElementById('closeBtn');
const overlay = document.getElementById('overlay');

menuBtn.addEventListener('click', () => {
    if (window.innerWidth <= 768) {
        dashboardContainer.classList.toggle('sidebar-mobile-active');
        overlay.classList.toggle('active');
    } else {
        dashboardContainer.classList.toggle('sidebar-collapsed');
    }
});

closeBtn.addEventListener('click', () => {
    dashboardContainer.classList.remove('sidebar-mobile-active');
    overlay.classList.remove('active');
});

overlay.addEventListener('click', () => {
    dashboardContainer.classList.remove('sidebar-mobile-active');
    overlay.classList.remove('active');
});

// Fitur Pencarian Real-time Modul Berdasarkan Semester & Kategori Aktif
searchInput.addEventListener('input', (e) => {
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
            <a href="${modul.link}" class="btn-access" target="_blank">Open</a>
        `;
        moduleContainer.appendChild(card);
    });
});
// --- FITUR AKordion / Buka-Tutup Sub-Menu Sidebar ---
const menuToggles = document.querySelectorAll('.menu-toggle');
menuToggles.forEach(toggle => {
    toggle.addEventListener('click', (e) => {
        e.preventDefault();
        const parentLi = toggle.parentElement;
        parentLi.classList.toggle('open');
    });
});