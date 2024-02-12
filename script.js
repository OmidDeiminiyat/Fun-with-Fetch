



fetch('https://dog.ceo/api/breeds/list/all')  // Object
.then(response => {
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
})
.then(data => {
  console.log(data);
  // Handle the retrieved data here
})
.catch(error => {
  console.error('There was a problem with your fetch operation:', error);
});



  fetch('https://dog.ceo/api/breeds/image/random/3')  // Array
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
    // Handle the retrieved data here
  })
  .catch(error => {
    console.error('There was a problem with your fetch operation:', error);
  });



  fetch('https://dog.ceo/api/breed/hound/images')  // Array
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
    // Handle the retrieved data here
  })
  .catch(error => {
    console.error('There was a problem with your fetch operation:', error);
  });

  



  fetch('https://dog.ceo/api/breed/hound/list')  // Array
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
    // Handle the retrieved data here
  })
  .catch(error => {
    console.error('There was a problem with your fetch operation:', error);
  });





  fetch('https://dog.ceo/api/breeds/image/random')  // Array
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
    // Handle the retrieved data here
  })
  .catch(error => {
    console.error('There was a problem with your fetch operation:', error);
  });

