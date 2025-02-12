const loginBtn = document.querySelector("#login");
const registerBtn = document.querySelector("#register");
const loginForm = document.querySelector(".login-form");
const registerForm = document.querySelector(".register-form");

loginBtn.addEventListener('click', () => {
    loginBtn.style.backgroundColor = "#21264D";
    registerBtn.style.backgroundColor = "rgba(255, 255, 255, 0.2)";

    loginForm.style.left = "50%";
    registerForm.style.left = "-50%";

    loginForm.style.opacity = "1";
    registerForm.style.opacity = "0";

    document.querySelector(".col-1").style.borderRadius = "0 30% 20% 0";

})

registerBtn.addEventListener('click', () => {
    loginBtn.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
    registerBtn.style.backgroundColor = "#21264D";

    loginForm.style.left = "150%";
    registerForm.style.left = "50%";

    loginForm.style.opacity = "0";
    registerForm.style.opacity = "1";

    document.querySelector(".col-1").style.borderRadius = "0 20% 30% 0";

})

// Lấy các phần tử img
const img1 = document.getElementById("image1");
const img2 = document.getElementById("image2");

// Danh sách các nguồn ảnh thay thế (có thể thay đổi tùy ý)
const imageSources = [
    ".",  // ảnh gốc
    "./assets/img/other_image.jpg"  // ảnh thay thế
];

// Biến để theo dõi trạng thái hiện tại
let isImage1Active = true;

// Hàm thay đổi ảnh
function switchImages() {
    if (isImage1Active) {
        img1.src = imageSources[1];  // Đổi ảnh 1 thành ảnh thay thế
        img2.src = imageSources[0];  // Đổi ảnh 2 về ảnh gốc
    } else {
        img1.src = imageSources[0];  // Đổi ảnh 1 về ảnh gốc
        img2.src = imageSources[1];  // Đổi ảnh 2 thành ảnh thay thế
    }
    isImage1Active = !isImage1Active;  // Đảo trạng thái
}

// Thực hiện thay đổi ảnh mỗi 2 giây
setInterval(switchImages, 2000);















