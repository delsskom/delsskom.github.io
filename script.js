document.addEventListener("DOMContentLoaded", function () {
    const body = document.body;
    body.style.fontFamily = "Arial, sans-serif";
    body.style.margin = "0";
    body.style.padding = "0";
    body.style.backgroundImage = "url(bg.jpg)";
    body.style.backgroundSize = "cover";
    body.style.backgroundPosition = "center";
    body.style.backgroundRepeat = "no-repeat";
    body.style.minHeight = "100vh";
    body.style.display = "flex";
    body.style.flexDirection = "column";
    body.style.justifyContent = "space-between";

    const container = document.createElement("div");
    container.style.width = "80vw";
    container.style.background = "rgba(255, 255, 255, 0.9)";
    container.style.padding = "50px";
    container.style.display = "flex";
    container.style.alignItems = "center";
    container.style.justifyContent = "center";
    container.style.boxShadow = "0px 0px 15px rgba(0, 0, 0, 0.2)";
    container.style.borderLeft = "10px solid #1976d2";
    container.style.borderRadius = "10px";
    container.style.margin = "auto";
    container.style.marginTop = "5vh";
    container.style.position = "relative";
    
    const photoContainer = document.createElement("div");
    photoContainer.style.textAlign = "center";
    const photo = document.createElement("img");
    photo.src = "della.jpg";
    photo.alt = "Foto Saya";
    photo.style.width = "200px";
    photo.style.height = "200px";
    photo.style.borderRadius = "50%";
    photo.style.objectFit = "cover";
    photo.style.border = "5px solid #1976d2";
    
    const socialIcons = document.createElement("div");
    socialIcons.innerHTML = `
        <a href="https://www.youtube.com/@Dellamustifar-r3e" target="_blank">
            <img src="youtube.png" alt="YouTube" width="40" height="40">
        </a>
        <a href="https://github.com/delsskom" target="_blank">
            <img src="github.png" alt="GitHub" width="40" height="40">
        </a>
    `;
    photoContainer.appendChild(photo);
    photoContainer.appendChild(socialIcons);

    const content = document.createElement("div");
    content.style.marginLeft = "40px";
    content.innerHTML = `
        <h1 style="color: #1976d2; margin-bottom: 5px;">DELLA MUSTIFAR</h1>
        <p>MAHASISWA S1 ILMU KOMPUTER</p>
        <h2>Profil</h2>
        <p>Saya tertarik di bidang desain infografis</p>
        <h2>Pendidikan</h2>
        <p>1. Alumni SMAN 1 RAHA, MUNA</p>
        <p>2. Berkuliah di Universitas Halu Oleo menekuni Program Studi Ilmu Komputer</p>
        <h2>Pengalaman Organisasi</h2>
        <p>HMPS ILMU KOMPUTER, Divisi Danus</p>
        <h2>Keterampilan</h2>
        <p>- Menguasai Microsoft Word, Excel, dan PowerPoint</p>
        <p>- Desain grafis (Capcut, Canva)</p>
        <p>- Manajemen waktu dan kerja tim</p>
        <h2>Kontak</h2>
        <p>Email: dellamustifar.com</p>
        <p>Telepon: 085333276559</p>
    `;

    container.appendChild(photoContainer);
    container.appendChild(content);
    body.appendChild(container);
});
