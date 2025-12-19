function checkAnswers() {
  // Correct Answers Data
  const answers = {
    // Assignment 1
    q1: "c",
    q2: "b",
    q3: "d",
    q4: ["programming language", "language"],
    q6: ["high", "high-level", "high level"],

    // Assignment 2
    a2q1: "t",
    a2q2: "f",
    a2q3: "f",
    a2q4: "t",
    a2q5: "f",
    a2q6: "t",
    a2q7: "f",
    a2q8: "f",
    a2q9: "f",

    // Assignment 3 - Part A (T/F)
    a3q1: "t",
    a3q2: "f",
    a3q3: "t",
    a3q4: "t",
    a3q5: "f",
    a3q6: "t",
    a3q7: "t",
    a3q8: "t",
    a3q9: "t",
    a3q10: "f",

    // Assignment 3 - Part B (MCQ)
    a3q11: "b",
    a3q12: "b",
    a3q13: "b",
    a3q14: "b",
    a3q15: "b",
    a3q16: "a",
  };

  // Reset Styles
  document.querySelectorAll(".question-block").forEach((b) => {
    b.classList.remove("correct-block", "incorrect-block");
  });

  // --- Check Multiple Choice & T/F ---
  const mcqIds = [
    // A1
    "q1",
    "q2",
    "q3",
    // A2
    "a2q1",
    "a2q2",
    "a2q3",
    "a2q4",
    "a2q5",
    "a2q6",
    "a2q7",
    "a2q8",
    "a2q9",
    // A3 (Part A)
    "a3q1",
    "a3q2",
    "a3q3",
    "a3q4",
    "a3q5",
    "a3q6",
    "a3q7",
    "a3q8",
    "a3q9",
    "a3q10",
    // A3 (Part B)
    "a3q11",
    "a3q12",
    "a3q13",
    "a3q14",
    "a3q15",
    "a3q16",
  ];

  mcqIds.forEach((id) => {
    const selected = document.querySelector(`input[name="${id}"]:checked`);
    const block = document.getElementById(`${id}-block`);
    const reveal = document.getElementById(`${id}-ans`);

    if (reveal) reveal.style.display = "block";

    if (selected && selected.value === answers[id]) {
      block.classList.add("correct-block");
    } else {
      block.classList.add("incorrect-block");
    }
  });

  // --- Check Text Inputs (A1) ---
  const q4Val = document.getElementById("q4-input").value.toLowerCase().trim();
  const q4Block = document.getElementById("q4-block");
  document.getElementById("q4-ans").style.display = "block";

  if (answers.q4.includes(q4Val)) {
    q4Block.classList.add("correct-block");
  } else {
    q4Block.classList.add("incorrect-block");
  }

  const q6Val = document.getElementById("q6-input").value.toLowerCase().trim();
  const q6Block = document.getElementById("q6-block");
  document.getElementById("q6-ans").style.display = "block";

  if (answers.q6.includes(q6Val)) {
    q6Block.classList.add("correct-block");
  } else {
    q6Block.classList.add("incorrect-block");
  }

  // --- Reveal Code/Open Ended (All Assignments) ---
  const revealIds = [
    "q5-ans",
    "q7-ans",
    "q8-ans", // A1
    "a2q10-ans",
    "a2q11-ans", // A2
    "a4q1-ans",
    "a4q2-ans",
    "a4q3-ans", // A4 (New)
  ];

  revealIds.forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.style.display = "block";
  });

  window.scrollTo({ top: 0, behavior: "smooth" });
}
