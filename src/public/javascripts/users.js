// function submitRegisterForm(event) {
//     const process = event.target.id;
//     const data = {};
//     // eslint-disable-next-line func-names
//     $.each($('#registerationForm').serializeArray(), function () {
//         data[this.name] = this.value;
//     });
//     console.log('---data--', data);
//     $.ajax({
//         url: '/register',
//         data,
//         type: 'POST'
//     }).then(res => {
//         if (res) {
//             console.log('------ajax respnose-----', res);
//         } else {
//             console.log('------ajax Fail-----');
//         }

//     })
// }
// $(document).on('click', '#btnSubmit', (e) => {
//     submitRegisterForm(e);
// })