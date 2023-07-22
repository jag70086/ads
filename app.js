// Get the progress element and loading message
const progressBar = document.getElementById('loadingBar');
const hmm = document.getElementById('hi');
const hmm1 = document.getElementById('hi1');
const hmm2 = document.getElementById('hi2');
const hmm3 = document.getElementById('hi3');
const hmm4 = document.getElementById('hi4');
const loadingMessage = document.getElementById('loadingMessage');
let load = document.getElementsByClassName('loading-bar-container')[0];
let links = document.getElementsByClassName('link-container')[0];
let titl = document.getElementsByClassName('title')[0];

// Function to simulate loading progress
function simulateLoading() {
  let progress = 0;
  const interval = setInterval(() => {
    progress += 2; // Adjust the increment value as needed
    progressBar.style.width = progress + '%';

    if (progress >= 100) {
      clearInterval(interval);
      loadingMessage.textContent = 'Links Fetched...';
      loadingMessage.style.opacity =0;
      load.style.opacity = 0;
      links.style.opacity = 0.85;
    }
  }, 100); // Adjust the interval time as needed
}

// Call the simulateLoading function after the page has loaded
window.onload = simulateLoading;


fetch('links.json')
.then(response => response.json())
.then(data => {
data.forEach((ele, i) => {
 let {link1, link2, link3, link4, link5, title} = ele ;
 hmm.href = link1
 hmm.innerText = link1
 titl.innerText = title
 hmm1.href = link2
hmm1.innerText = link2
hmm2.href = link3
hmm2.innerText = link3
hmm3.href = link4
hmm3.innerText = link4
hmm4.href = link5
hmm4.innerText = link5


  // Use the data to populate your website content, create links, etc.
})})
.catch(error => {
  console.error('Error fetching data:', error);
});