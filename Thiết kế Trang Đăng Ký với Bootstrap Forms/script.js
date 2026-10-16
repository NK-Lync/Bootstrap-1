
const registrationForm = document.getElementById("registrationForm");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");
const passwordFeedback = document.getElementById("passwordFeedback");
const formMessage = document.getElementById("formMessage");

// Kiểm tra mật khẩu và xác nhận mật khẩu
function checkPassword() {
    if (confirmPasswordInput.value === "") {
        passwordFeedback.textContent = "";
        confirmPasswordInput.setCustomValidity("");
        return;
    }

    if (passwordInput.value !== confirmPasswordInput.value) {
        passwordFeedback.textContent = "Mật khẩu xác nhận không khớp.";
        passwordFeedback.className = "form-text text-danger";
        confirmPasswordInput.setCustomValidity("Mật khẩu xác nhận không khớp.");
    } else {
        passwordFeedback.textContent = "Mật khẩu khớp.";
        passwordFeedback.className = "form-text text-success";
        confirmPasswordInput.setCustomValidity("");
    }
}

passwordInput.addEventListener("input", checkPassword);
confirmPasswordInput.addEventListener("input", checkPassword);

// Xử lý khi nhấn nút Đăng ký
registrationForm.addEventListener("submit", function (event) {
    event.preventDefault();

    checkPassword();

    if (!registrationForm.checkValidity()) {
        registrationForm.reportValidity();
        return;
    }

    formMessage.className = "alert alert-success";
    formMessage.textContent =
        "Đăng ký thành công! Đây là thông báo minh họa, dữ liệu chưa được lưu.";

    // Đưa thông báo vào tầm nhìn người dùng
    formMessage.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
});
