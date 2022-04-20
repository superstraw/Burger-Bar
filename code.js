$(".category").on("click", "img", addToOrder);
$("#order").on("click", "img", removeFromOrder);

function addToOrder(){
    $('#order').append(this);
}

function removeFromOrder(){
    let targetLocation = $(this).attr("data-category");
    $(targetLocation).append(this);
}