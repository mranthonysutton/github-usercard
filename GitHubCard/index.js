/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

// Obtain GitHub API using axios
// axios
//   .get("https://api.github.com/users/mranthonysutton")
//   .then(response => {
//     console.log(response);
//   })
//   .catch(error => {
//     console.log("Error obtaining dataset: ", error);
//   });

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

function githubProfile() {
  const cardContainer = document.querySelector(".cards"),
    card = document.createElement("div"),
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

  // Content
  profileImg.src = "https://source.unsplash.com/600x600/?headshot,man";
  profileName.textContent = "Anthony Sutton";
  userName.textContent = "mranthonysutton";
  location.textContent = "Location: Las Vegas, NV";
  profileLinkContainer.textContent = "Profile: ";
  profileURL.textContent = `profileLinkURLGOESHERE`;
  followers.textContent = "Followers: 5";
  following.textContent = "Following: 7";
  bio.textContent =
    "Percolator sit percolator doppio irish steamed con panna et aroma, at coffee strong est extra at americano aromatic. Froth acerbic cup aroma barista caramelization white roast, mug spoon carajillo grinder wings single origin coffee and crema trifecta aroma. Beans organic cappuccino rich crema, flavour, espresso fair trade aftertaste affogato siphon froth foam skinny so aged that extraction.";

  // Append Items
  cardContainer.appendChild(card);
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

githubProfile();

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
