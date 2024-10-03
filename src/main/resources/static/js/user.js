// Lắng nghe sự kiện click cho nút đăng ký
document.getElementById("sign-up-button").addEventListener("click", function() {
    // Lấy các form Đăng Nhập và Đăng Ký
    var signInForm = document.getElementById("sign-in-form");
    var signUpForm = document.getElementById("sign-up-form");

    // Ẩn form Đăng Nhập và hiển thị form Đăng Ký
    signInForm.classList.add("hidden");
    signUpForm.classList.remove("hidden");
});

// Lắng nghe sự kiện click cho nút đăng nhập
document.getElementById("sign-in-button1").addEventListener("click", function() {
    // Lấy các form Đăng Nhập và Đăng Ký
    var signInForm = document.getElementById("sign-in-form");
    var signUpForm = document.getElementById("sign-up-form");

    // Hiển thị form Đăng Nhập và ẩn form Đăng Ký
    signInForm.classList.remove("hidden");
    signUpForm.classList.add("hidden");
});

// Lắng nghe sự kiện gửi form Đăng Nhập
document.getElementById("sign-in-form").addEventListener("submit", function(event) {
    // Ngăn chặn reload trang
    event.preventDefault();

    // Lấy dữ liệu từ form
    var formData = new FormData(this);
    var data = {
        telephone: formData.get("telephone"), // Lấy số điện thoại từ trường nhập
        password: formData.get("password") // Lấy mật khẩu từ trường nhập
    };

    // Gửi yêu cầu đăng nhập đến backend
    fetch("/api/auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json" // Định dạng nội dung là JSON
        },
        body: JSON.stringify(data) // Chuyển đổi dữ liệu thành chuỗi JSON
    })
        .then(response => response.json()) // Chờ phản hồi từ server
        .then(data => {
            // Xử lý phản hồi từ backend
            if (data.success) {
                // Chuyển hướng nếu đăng nhập thành công
                window.location.href = "http://localhost:8080/home"; // Ví dụ chuyển đến trang chính
            } else {
                alert("Không đăng nhập được"); // Hiển thị thông báo lỗi
            }
        })
        .catch(error => console.error("Error:", error)); // Xử lý lỗi nếu có
});

// Lắng nghe sự kiện gửi form Đăng Ký
document.getElementById("sign-up-form").addEventListener("submit", function(event) {
    // Ngăn chặn reload trang
    event.preventDefault();

    // Lấy dữ liệu từ form
    var formData = new FormData(this);
    var data = {
        name: formData.get("name"), // Lấy tên từ trường nhập
        email: formData.get("email"), // Lấy email từ trường nhập
        telephone: formData.get("telephone"), // Lấy số điện thoại từ trường nhập
        password: formData.get("password"), // Lấy mật khẩu từ trường nhập
        confirmPassword: formData.get("confirmPassword") // Lấy xác nhận mật khẩu từ trường nhập
    };

    // Gửi yêu cầu đăng ký đến backend
    fetch("/api/auth/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json" // Định dạng nội dung là JSON
        },
        body: JSON.stringify(data) // Chuyển đổi dữ liệu thành chuỗi JSON
    })
        .then(response => response.json()) // Chờ phản hồi từ server
        .then(data => {
            // Xử lý phản hồi từ backend
            if (data.success) {
                alert("Đăng ký thành công!"); // Thông báo thành công
                // Hiển thị lại form Đăng Nhập
                document.getElementById("sign-in-form").classList.remove("hidden");
                document.getElementById("sign-up-form").classList.add("hidden");
            } else {
                alert("Sai"); // Hiển thị thông báo lỗi
            }
        })
        .catch(error => console.error("Error:", error)); // Xử lý lỗi nếu có
});
