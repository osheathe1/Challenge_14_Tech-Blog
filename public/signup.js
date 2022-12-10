const signupFormHandler = async function(event) {
    event.preventDefault();
  
      
    
      const usernameEl = document.querySelector('#username-signup-input');
      const passwordEl = document.querySelector('#password-signup-input');
    
      const response = await fetch('/api/user', {
        method: 'POST',
        body: JSON.stringify({
          username: usernameEl.value,
          password: passwordEl.value,
        }),
        headers: { 'Content-Type': 'application/json' },
        
      });
    
      if (response.ok) {
        document.location.replace('/dashboard');
        console.log(response)
      } else {
    }
};