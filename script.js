// Escort profile data
const profiles = [
  {
    name: "Riya Sharma",
    city: "Delhi",
    image: "images/1000068323.jpg",
    phone: "918406837002"
  },
  {
    name: "Pooja Verma",
    city: "Mumbai",
    image: "images/1000068321.webp",
    phone: "918406837002"
  },
  {
    name: "Simran Kaur",
    city: "Chandigarh",
    image: "IMAGES/1000068324.jpg",
    phone: "918406837002"
  },
  {
    name: "Tanya Gupta",
    city: "Pune",
    image: "IMAGES/01 (1).jpeg",
    phone: "918406837002"
  },
  {
    name: "Priya Singh",
    city: "Kolkata",
    image: "IMAGES/01 (2).jpeg",
    phone: "918406837002"
  },
  {
    name: "Ayesha Khan",
    city: "Lucknow",
    image: "IMAGES/01 (3).jpeg",
    phone: "918406837002"
  },
  {
    name: "Megha Reddy",
    city: "Hyderabad",
    image: "IMAGES/01 (4).jpeg",
    phone: "918406837002"
  },
  {
    name: "Anjali Das",
    city: "Kolkata",
    image: "IMAGES/01 (5).jpeg",
    phone: "918406837002"
  },
  {
    name: "Neha Jain",
    city: "Jaipur",
    image: "IMAGES/01 (6).jpeg",
    phone: "918406837002"
  },
  {
    name: "Shalini Mehta",
    city: "Ahmedabad",
    image: "IMAGES/01 (7).jpeg",
    phone: "918406837002"
  },
  {
    name: "Kavita Yadav",
    city: "Bangalore",
    image: "IMAGES/01 (8).jpeg",
    phone: "918406837002"
  },
  {
    name: "Divya Patel",
    city: "Surat",
    image: "IMAGES/01 (9).jpeg",
    phone: "918406837002"
  },
  {
    name: "Tamanya Ray",
    city: "Haryana",
    image: "IMAGES/001.avif",
    phone: "918406837002"
  },
  {
    name: "Nisha Patel",
    city: "Punjab",
    image: "IMAGES/0012.avif",
    phone: "918406837002"
  },
  {
    name: "Sonam Gupta",
    city: "Surat",
    image: "IMAGES/120.jpg",
    phone: "918406837002"
  }
];

// Function to render the cards
const container = document.getElementById("profiles");

function renderProfiles() {
  container.innerHTML = "";
  profiles.forEach(profile => {
    container.innerHTML += `
      <div class="card">
        <img src="${profile.image}" alt="${profile.name}">
        <div class="card-content">
          <h3>${profile.name} ✅</h3>
          <p>${profile.city}</p>
          <p class="verified">Verified</p>
          <div class="card-buttons">
            <a href="https://wa.me/${profile.phone}" target="_blank">WhatsApp</a>
            <a class="call" href="tel:+${profile.phone}">Call Now</a>
          </div>
        </div>
      </div>
    `;
  });
}

renderProfiles();
