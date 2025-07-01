$(document).ready(function () {
    $('#userMenuBtn').click(function () {
        $('#sideMenu').toggleClass('active');
        $('#sideMenu').toggleClass('menu-hide');
        $('.user-body-section').toggleClass('active');
    });
    $('.side-menu.menu-hide .side-menu-list .accordion-button, .side-menu .side-menu-list a img').click(function () {
        $('#sideMenu').addClass('active');
        $('#sideMenu').removeClass('menu-hide');
        $('.user-body-section').toggleClass('active');
    });
    $('#sideMenuCloseBtn').click(function () {
        $('#sideMenu').toggleClass('menu-hide');
        $('#sideMenu').toggleClass('active');
        $('.user-body-section').toggleClass('active');
    });
    $('#startFreeBtn').click(function () {
        $('.crm-card-section').toggle();
        $('.select-plan-section').toggle();
    });
    $('.get-start-btn').click(function () {
        $('.select-plan-section').toggle();
        $('.business-detail-section').toggle();
    });
});

/*-- best pricing selector scripts start --*/
var bestPricingSelector = $(".best-pricing-selector");
if (bestPricingSelector.length) {
    $(".best-pricing-monthly-btn").on("click", function () {
        $("#best-pricing-selector").prop("checked", false);
        $(".best-pricing-grid.monthly").css("display", "flex");
        $(".best-pricing-grid.yearly").css("display", "none");
        $(".best-pricing-monthly-btn").addClass("active");
        $(".best-pricing-yearly-btn").removeClass("active");
    });

    $(".best-pricing-yearly-btn").on("click", function () {
        $("#best-pricing-selector").prop("checked", true);
        $(".best-pricing-grid.monthly").css("display", "none");
        $(".best-pricing-grid.yearly").css("display", "flex");
        $(".best-pricing-monthly-btn").removeClass("active");
        $(".best-pricing-yearly-btn").addClass("active");
    });

    $("#best-pricing-selector").on("change", function () {
        if (this.checked) {
            $(".best-pricing-grid.monthly").css("display", "none");
            $(".best-pricing-grid.yearly").css("display", "flex");
            $(".best-pricing-monthly-btn").removeClass("active");
            $(".best-pricing-yearly-btn").addClass("active");
        } else {
            $(".best-pricing-grid.monthly").css("display", "flex");
            $(".best-pricing-grid.yearly").css("display", "none");
            $(".best-pricing-monthly-btn").addClass("active");
            $(".best-pricing-yearly-btn").removeClass("active");
        }
    });
}
/*-- best pricing selector scripts end --*/




$(document).ready(function () {
    $('#complete-payment-btn').click(function () {
        $('.payment-modal-content1').hide();
        $('.payment-modal-content2').show();
    });
    $('#confirm-payment-btn').click(function () {
        $('.payment-modal-content2').hide();
        $('.payment-modal-content3').show();
    });
    $('.renew-btn').click(function () {
        $('.payment-modal-content2').hide();
        $('.payment-modal-content3').hide();
        $('.payment-modal-content1').show();
    });
});

// $(document).ready(function() {
//     $('div').click(function() {
//       $('div').removeClass('active'); // Remove the "active" class from all divs
//       $(this).addClass('active'); // Add the "active" class to the clicked div
//     });
//   });

document.addEventListener('DOMContentLoaded', function () {
    var countElement = document.getElementById('count');
    var incrementButton = document.getElementById('increment');
    var decrementButton = document.getElementById('decrement');

    var count = 0;

    // Increment the count when the "+" button is clicked
    incrementButton.addEventListener('click', function () {
        count++;
        countElement.textContent = count;
    });

    // Decrement the count when the "-" button is clicked
    decrementButton.addEventListener('click', function () {
        if (count > 0) {
            count--;
            countElement.textContent = count;
        }
    });
});



