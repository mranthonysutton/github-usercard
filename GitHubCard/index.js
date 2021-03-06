/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

// Obtain GitHub API using axios
api = axios
  .get("https://api.github.com/users/mranthonysutton")
  .then(response => {
    const cardGenerator = githubProfile(response);
    const cardContainer = document.querySelector(".cards");
    cardContainer.appendChild(cardGenerator);
  })
  .catch(error => {
    console.log("Error obtaining dataset: ", error);
  });

// Followers axios
followersAPI = axios
  .get("https://api.github.com/users/mranthonysutton/followers")
  .then(response => {
    // Push each URL to the empty array
    for (let i = 0; i < response.data.length; i++) {
      followersArray.push(response.data[i].url);
    }

    // Pass in each URL, and create a .get functionality for each new URL passed in.
    followersArray.forEach(arrayItem => {
      printAPI = axios
        .get(arrayItem)
        .then(response => {
          const cardGenerator = githubProfile(response);
          const cardContainer = document.querySelector(".cards");
          cardContainer.appendChild(cardGenerator);
        })
        .catch(error => console.log(error));
    });
  })
  .catch(error => {
    console.log("Error obtaining followers data", error);
  });

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

function githubProfile(githubAPI) {
  const card = document.createElement("div"),
    profileImg = document.createElement("img"),
    cardInformation = document.createElement("div"),
    profileName = document.createElement("h3"),
    userName = document.createElement("p"),
    location = document.createElement("p"),
    profileLinkContainer = document.createElement("p"),
    profileURL = document.createElement("a"),
    followers = document.createElement("p"),
    following = document.createElement("p"),
    bio = document.createElement("p");

  // Add Classes
  card.classList.add("card");
  cardInformation.classList.add("card-info");
  profileName.classList.add("name");
  userName.classList.add("username");

  // Add Content
  profileImg.src = githubAPI.data.avatar_url;
  profileName.textContent = githubAPI.data.name;
  userName.textContent = githubAPI.data.login;
  location.textContent = `Location: ${githubAPI.data.location}`;
  profileLinkContainer.textContent = `Profile: `;
  profileURL.textContent = githubAPI.data.html_url;
  profileURL.href = githubAPI.data.html_url;
  profileURL.target = "_blank";
  followers.textContent = `Followers: ${githubAPI.data.followers}`;
  following.textContent = `Following: ${githubAPI.data.following}`;
  bio.textContent = githubAPI.data.bio;

  // Append Items
  card.appendChild(profileImg);
  card.appendChild(cardInformation);
  cardInformation.appendChild(profileName);
  cardInformation.appendChild(userName);
  cardInformation.appendChild(location);
  cardInformation.appendChild(profileLinkContainer);
  profileLinkContainer.appendChild(profileURL);
  cardInformation.appendChild(followers);
  cardInformation.appendChild(following);
  cardInformation.appendChild(bio);

  return card;
}

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
