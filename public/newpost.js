const newPostHandler = async function(event) {
    const title = document.querySelector('input[name="post-title"]').value;
    const post = document.querySelector('input[name="post-text"]').value;

    await fetch(`/api/post`, {
        method: 'POST',
        body: JSON.stringify({
          title,
          post,
        }),
        headers: { 'Content-Type': 'application/json' },
      });
    
      document.location.replace('/dashboard');
}

document
  .querySelector('#new-post-form')
  .addEventListener('submit', newPostHandler);