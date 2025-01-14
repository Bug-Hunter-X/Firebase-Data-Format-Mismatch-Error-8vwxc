function fetchDataAndHandleErrors() {
  firebase.database().ref('data').once('value', (snapshot) => {
    const data = snapshot.val();

    // Validate data type and structure
    if (!data || typeof data !== 'object' || !data.hasOwnProperty('key1') || typeof data.key1 !== 'string') {
      console.error('Error: Unexpected data format');
      // Handle error appropriately (e.g., display message to user, retry, etc.)
      return;
    }

    // Access data safely
    const key1Value = data.key1;
    console.log(key1Value);
  }, (error) => {
    console.error('Error fetching data:', error);
    // Handle error appropriately (e.g., display message to user, retry, etc.)
  });
} 