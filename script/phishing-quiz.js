function checkPhishingQuiz() {
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
    result.textContent = "Great job! You passed the quiz.";
    result.style.color = "green";
  } else if (score === 1) {
    result.textContent = "Almost there! Review the training and try again.";
    result.style.color = "orange";
  } else {
    result.textContent = "You need to study more about phishing.";
    result.style.color = "red";
  }
}
