// jQuery
$(document).ready(function () {
    // 愛心
    $(".item-icon").on("click", function (e) {
        e.preventDefault();
        $(this).find(".heart-border").toggleClass("d-none");
        $(this).find(".heart-full").toggleClass("d-none");
    });

    // 購物車 Modal
    $(function () {
        // remove Modal Event
        $("#removeModal").on("show.bs.modal", function (e) {
            var btn = $(e.relatedTarget);
            // console.log(btn);
            var title = btn.data("title");
            // console.log(title);
            var modal = $(this);
            modal.find(".modal-title").text("刪除 " + title);
        });
    });

});


// JS
// 表單驗證
(function () {
    'use strict';
    window.addEventListener('load', function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);

            // 讓下一頁 a 連結同時有檢查表單的功能
            var submitLink = document.querySelector('#submit-link');
            submitLink.addEventListener('click', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();