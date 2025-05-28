function checkPasswordQuiz() {
  const q1 = document.querySelector('input[name="q1"]:checked');
  const q2 = document.querySelector('input[name="q2"]:checked');
  const result = document.getElementById("quiz-result");

  if (!q1 || !q2) {
    result.textContent = "Please answer all questions before submitting.";
    result.style.color = "red";
    return;
  }

  let score = 0;
  if (q1.value === "correct") score++;
  if (q2.value === "correct") score++;

  if (score === 2) {
    result.textContent = "Excellent! You know how to keep your passwords safe.";
    result.style.color = "green";
  } else if (score === 1) {
    result.textContent = "Not bad, but review the material and try again.";
    result.style.color = "orange";
  } else {
    result.textContent = "You need to learn more about password security.";
    result.style.color = "red";
  }
}
