// Taken from Module 14 mini-project

const logout = async () => {
    const response = await fetch('/api/users/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/login');
      console.log('It works')
    } else {
      alert(response.statusText);
      console.log('Not working')
    }
  };
  
  document.querySelector('#logout').addEventListener('click', logout);