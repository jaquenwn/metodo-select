// Start sorting process
async function startSorting1() {
  if (isAnimating) return;

  isAnimating = true;
  sortSelectBtn.disabled = true;
  drawBtn.disabled = true;

  console.log("Iniciando ordenamiento...");
  console.log(
    "Cartas antes del ordenamiento:",
    currentCards.map((card) => card.toString())
  );

  // Clear previous log
  sortingLog = [];

  // Start selection sort
  const sortedCards = await selectionSort([...currentCards]);

  console.log(
    "Cartas después del ordenamiento:",
    sortedCards.map((card) => card.toString())
  );

  isAnimating = false;
  drawBtn.disabled = false;
}
// Start sorting process
async function startSorting2() {
  if (isAnimating) return;

  isAnimating = true;
  sortBblBtn.disabled = true;
  drawBtn.disabled = true;

  console.log("Iniciando ordenamiento...");
  console.log(
    "Cartas antes del ordenamiento:",
    currentCards.map((card) => card.toString())
  );

  // Clear previous log
  sortingLog = [];

  // Start selection sort
  const sortedCards = await bubbleSort([...currentCards]);

  console.log(
    "Cartas después del ordenamiento:",
    sortedCards.map((card) => card.toString())
  );

  isAnimating = false;
  drawBtn.disabled = false;
}




// Initialize the application
function init() {
  console.log("Aplicación inicializada");
  // Draw initial cards
  drawCards();
}

// Modal functions
function openModal() {
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}

function outsideClick(e) {
  if (e.target === modal) {
    modal.style.display = "none";
  }
}

// Start the application when DOM is loaded
document.addEventListener("DOMContentLoaded", init);

