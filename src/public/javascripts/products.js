$(document).on('click', '#modalCloseButton', function onModalClose() {
    $('input,textarea,select').val('');
});
$(document).on('click', '#addProductFormResetButton', function onFormReset() {
    $('input,textarea,select').val('');
})
$(document).on('click', '#productEditButton', function showModal() {
    console.log('---here');
    $('#exampleModal1').modal('show');
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
                Swal.fire('Profile Added Successfully');
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Error While Adding Product! Please try again'
                });
            }
        })

    } else {
        alert('');
        Swal.fire('Please Fill All the Values');
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
$(document).on('click', '.commonProductDelete', function onProductDelete() {
    const pId = $(this).attr('data-pID');
    const URL = `/productDelete/${pId}`;

    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {
            $.ajax({
                url: URL,
                type: 'DELETE'
            }).then(response => {
                if (response.status == '200') {
                    Swal.fire(
                        'Deleted!',
                        'Product Deleted Successfully.',
                        'success'
                    )
                    location.reload(true);
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong! Please try again'
                    });
                }
            })

        }
    })

})

/*-------------Product Details Update Ajax-----------------------*/

$(document).on('click', '.commonProductEdit', function onUpdate() {
    const pID = $(this).attr('data-productID');
    const URL = `getOneProduct/${pID}`
    $.ajax({
        url: URL,
        type: 'get'
    }).then(data => {
        if (data.status == '200') {
            $('#p1').attr('src', `${data.data.productImage}`);
            $('#p2').val(`${data.data.productDescription}`);
            $('#p3').val(`${data.data.productPrice}`);
            $('#p4').val(`${data.data.productMOQ}`);
            $('#p5').append($('<option>', {
                value: `${data.data.productVisibility}`,
                text: `${data.data.productVisibility}`
            }))
            
        }
    })

})