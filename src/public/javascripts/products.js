$(document).on('click', '#modalCloseButton', function onModalClose() {
    $('input,textarea,select').val('');
});
$(document).on('click', '#addProductFormResetButton', function onFormReset() {
    $('input,textarea,select').val('');
})

/*----------Adding Products AJAX---------*/
$(document).on('click', '#addProductButton', () => {
    const pTitle = $('#productTitle').val();
    const pPrice = $('#productPrice').val();
    const pMOQ = $('#productMOQ').val();
    const pDescription = $('#productDescription').val();
    const pVisibility = $('#productVisibility').val();;
    const pTransportation = $('#productTransportation').val();
    if (pTitle != '' && pPrice != '' && pMOQ != '' && pVisibility != '' && pTransportation != '') {

        let data = {};
        $.each($('#addProductForm').serializeArray(), function fieldValues() {
            data[this.name] = this.value;
        });
        const URL = `/addNewProduct`;
        if (pImage) data.productImage = `${pImage}`;
        $.ajax({
            url: URL,
            data,
            type: 'POST'
        }).then(response => {
            if (response.status == '200') {
                $('#modalCloseButton').trigger('click');
                swal({
                    title: 'Profile Added Successfully',
                    icon: 'success'
                });
            } else {
                alert('Error While Adding Product')
            }
        })

    } else {
        alert('Please Fill All the Values');
    }

})


/*---------- AJAX for Uploading Images---------*/

$(document).on('click', '#uploadImageBtn', function onImgUpload(e) {
    e.preventDefault();
    const pImage = document.getElementById('productImage').files[0].name;
    const URL = `/uploadProductImage`
    $.ajax({
        url: URL,
        data: pImage,
        type: 'POST'
    }).then(response => {
        if (response) {
            alert('Product Added Successfully');
        } else {
            alert('Error While Adding Product')
        }
    })
})

/*-------------Product Delete Ajax-----------------------*/
$(document).on('click', '#productDeleteButton', function onProductDelete() {
    const pId = $('#pIdHidden').val();
    const URL = `/productDelete/${pId}`;

    $.ajax({
        url: URL,
        type: 'DELETE'
    }).then(response => {
        if (response.status == '200') {
            alert('Product Deleted Successfully');
            location.reload(true);
        } else {
            alert('Error While Deleting Product');
        }
    })

})


