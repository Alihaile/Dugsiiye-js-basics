var url = 'https://jsonplaceholder.typicode.com/posts';

let fetchPosts = async () => {
    try {
        let result = await fetch(url);

        if (!result.ok) {
            throw new Error(`HTTP error! status: ${result.status}, error message: ${result.statusText}`);
        }

        let data = await result.json();

        console.log("Fetch using async/await:", data.length, "posts successfully fetched.");
        console.log("Fetched Posts:", data);

    } catch (error) {
        console.log("Fetch Error: ", error);
    }
}

fetchPosts();