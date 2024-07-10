document.addEventListener("DOMContentLoaded", function() {
    // 假設我們有一個包含照片名稱的清單
    const photoList = [
        "440903.jpg",
        "440904.jpg",
        "440905.jpg",
        "440906.jpg",
        "440907.jpg",
        "440908.jpg",
        "440909.jpg",
        "440910.jpg",
        // 根據需要添加更多照片
    ];

    const photoContainer = document.getElementById("photo-container");

    photoList.forEach(photo => {
        const photoDiv = document.createElement("div");
        photoDiv.className = "photo";
        
        const img = document.createElement("img");
        img.src = `photos/${photo}`;
        img.alt = photo;

        // const caption = document.createElement("p");
        // caption.innerText = photo;

        photoDiv.appendChild(img);
        photoDiv.appendChild(caption);
        photoContainer.appendChild(photoDiv);
    });
});
