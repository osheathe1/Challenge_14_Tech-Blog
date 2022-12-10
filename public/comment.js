const commentHandler = async function(event) {
    event.preventDefault();
  
    const postId = document.querySelector('input[name="post-id"]').value;
    const text = document.querySelector('textarea[name="comment-body"]').value;
  
    if (text) {
      await fetch('/api/comment', {
        method: 'POST',
        body: JSON.stringify({
          postId,
          text
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      document.location.reload();
    }
  };

  document.querySelector('#new-comment-form').addEventListener('submit', commentHandler);
  