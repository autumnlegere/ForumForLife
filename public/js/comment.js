const newCommHandler = async (event) => {
    event.preventDefault();

    var body = event.target.lastElementChild.querySelector('input').value;
    var conversation_id = event.target.getAttribute("convo-id");
    
    if (body && conversation_id) {
      const response = await fetch(`/api/comm`, {
        method: 'POST',
        body: JSON.stringify({ body, conversation_id }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.reload();
      } else {
        alert('Failed to create project');
      }
    }
  };

document
.querySelector('.new-comm')
.addEventListener('submit', newCommHandler);