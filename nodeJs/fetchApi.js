
async function postData() {
    const todoObject = {
      userId: 111,
      title: "Some title",
      completed: false
    };
  
    const options = {
      method: 'POST',
      body: JSON.stringify(todoObject),
      headers: { 'Content-Type': 'application/json' }
    }
  
    const url = '/todos';
  
    try {
      const response = await fetch(url, options)
      const jsonResponse = await response.json();
      console.log('JSON response', jsonResponse);
    } catch(err) {
      console.log('ERROR', err);
    }
  }
  
  postData();