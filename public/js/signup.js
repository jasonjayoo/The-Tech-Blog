async function newFormHandler(event){
    event.preventDefault();
    const name = document.querySelector('#new-user-name').value;
    const password = document.querySelector('#new-password').value;
    const response = await fetch('/api/user/signup', {
        method: 'POST',
        body: JSON.stringify({
            name,
            password
        }),
        headers: {
            'Content-Type': 'application/json'
        },
    });
    if (response.ok) {
        document.location.replace('/');
    } else {
        alert('Failed to add new user')
    }
}

document.querySelector('#sign-up-form').addEventListener('submit', newFormHandler);