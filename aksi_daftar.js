function tetapkan_acara_klik(elm) {
	elm.addEventListener('click', daftar_diklik);
}

function daftar_diklik(evt) {
	elm = evt.target;
	ubah = document.createElement('input');
	ubah.type = 'text';
	ubah.value = elm.innerText;
	ubah.className = 'form-control'
	elm.removeChild(elm.firstChild)
	elm.appendChild(ubah)
	elm.removeEventListener('click', daftar_diklik)
	ubah.focus();
	ubah.addEventListener('blur', (evt) => {
		elm.removeChild(ubah)
		elm.innerHTML = ubah.value
		tetapkan_acara_klik(elm)
		if(ubah.value === '') { 
			dasar = elm.parentElement.parentElement
			dasar.removeChild(elm.parentElement)
		}
	})
}

function daftar_hilangkan(evt) {
	if (!evt.target.checked) { return }
	elm = evt.target.parentElement
	dasar = elm.parentElement
	tujuan = document.getElementById('selesai')
	elm.className = elm.className + " disabled"
	dasar.removeChild(elm)
	tujuan.appendChild(elm)
	evt.target.disabled = true
}

function tambah_kegiatan(evt) {
	tombol = evt.target;
	elm = tombol.parentElement;
	tambah = document.createElement('li')
	tambah.style = "border-color: rgba(255, 0, 0, .5)"
	tambah.className = "list-group-item"
	alat1 = document.createElement('input')
	alat1.type = "checkbox"
	alat1.className = "form-check-input"
	alat2 = document.createElement('span')
	alat2.className = "daftar w-75"
	alat2.innerHTML = "Kegiatan Baru"
	elm.removeChild(tombol);
	tambah.appendChild(alat1)
	tambah.appendChild(alat2)
	elm.appendChild(tambah)
	elm.appendChild(tombol)
	tetapkan_acara_klik(alat2)
	alat1.addEventListener('change', daftar_hilangkan)
	alat2.click()
}

function tancapkan_event() {
	daftar = document.getElementsByClassName('daftar');
	for(i=0;i < daftar.length;i++) {
		teman = daftar[i].previousElementSibling
		tetapkan_acara_klik(daftar[i]);
		teman.checked = false
		teman.addEventListener('change', daftar_hilangkan)
	}
	tombol = document.getElementsByClassName('btn-primary')
	tombol[0].onclick = tambah_kegiatan;
}

window.onload = tancapkan_event;