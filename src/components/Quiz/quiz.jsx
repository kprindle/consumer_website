import React, { useState, useEffect } from "react";
import "./quiz.css";

const Quiz = () => {
	let questionContainer, resultText, littleDude, resultContainer, dispensaryListContainer, resetButton, seeDispoBelow;
	let currentQuestion = 0;
	let lastClickTime = 0;
	let selectedAnswers = [];

	const quizData = [
		{
			question: "What is your previous experience with cannabis?",
			options: ["First Time", "Rare (yearly)", "Occasional (monthly)", "Daily"],
		},
		{
			question: "What is your desired experience?",
			options: ["Better Sleep", "More Relaxation", "More Creativity and Energy", "Better Focus"],
		},
		{
			question: "How do you like to consume cannabis?",
			options: ["Disposables", "Edibles", "Flower", "Infused Waters"],
		},
		{
			question: "Are you looking for a more mind or body effect?",
			options: ["Mind", "Body", "Balanced"],
		},
	];

	useEffect(() => {
		console.log("Script loaded");

		questionContainer = document.getElementById("question-container");
		resultText = document.getElementById("result-text");
		littleDude = document.getElementById("little-dude");
		resultContainer = document.getElementById("results-container");
		dispensaryListContainer = document.getElementById("dispensary-list-container");
		resetButton = document.getElementById("reset-button");
		seeDispoBelow = document.getElementById("see-dispo-below");

		const storedResults = localStorage.getItem("dycQuizResults");

		resetButton.addEventListener("click", () => {
			console.log;
			resetQuiz();
		});

		if (storedResults) {
			console.log("Found stored results");
			const results = JSON.parse(storedResults);
			displayResults(results);
		} else if (questionContainer) {
			startQuiz();
		} else {
			console.error("Required elements not found in DOM");
		}
	}, []);

	function getLittleDude(data) {
		littleDude.innerHTML = "";
		if (data.color.toLowerCase() === "yellow") {
			if (data.mindBodyBalance.toLowerCase() === "mind") {
				littleDude.innerHTML += `
                <img src="https://dycpublicdocumentsandagreements2.s3.us-east-2.amazonaws.com/mindbodybalancecolorcharacters/Icon-Type-1-Mind-yellow.png" class="feedback-icon" alt="Mind Icon">
            `;
			} else if (data.mindBodyBalance.toLowerCase() === "body") {
				littleDude.innerHTML += `
                <img src="https://dycpublicdocumentsandagreements2.s3.us-east-2.amazonaws.com/mindbodybalancecolorcharacters/Icon-Type-3-Body-yellow.png" class="feedback-icon" alt="Body Icon">
            `;
			} else if (data.mindBodyBalance.toLowerCase() === "balanced") {
				littleDude.innerHTML += `
                <img src="https://dycpublicdocumentsandagreements2.s3.us-east-2.amazonaws.com/mindbodybalancecolorcharacters/Icon-Type-2-Balance-yellow.png" class="feedback-icon" alt="Balance Icon">
            `;
			}
		} else if (data.color.toLowerCase() === "green") {
			if (data.mindBodyBalance.toLowerCase() === "mind") {
				littleDude.innerHTML += `
                <img src="https://dycpublicdocumentsandagreements2.s3.us-east-2.amazonaws.com/mindbodybalancecolorcharacters/Icon-Type-1-Mind-green.png" class="feedback-icon" alt="Mind Icon">
            `;
			} else if (data.mindBodyBalance.toLowerCase() === "body") {
				littleDude.innerHTML += `
                <img src="https://dycpublicdocumentsandagreements2.s3.us-east-2.amazonaws.com/mindbodybalancecolorcharacters/Icon-Type-3-Body-green.png" class="feedback-icon" alt="Body Icon">
            `;
			} else if (data.mindBodyBalance.toLowerCase() === "balanced") {
				littleDude.innerHTML += `
                <img src="https://dycpublicdocumentsandagreements2.s3.us-east-2.amazonaws.com/mindbodybalancecolorcharacters/Icon-Type-2-Balance-green.png" class="feedback-icon" alt="Balance Icon">
            `;
			}
		} else if (data.color.toLowerCase() === "blue") {
			if (data.mindBodyBalance.toLowerCase() === "mind") {
				littleDude.innerHTML += `
                <img src="https://dycpublicdocumentsandagreements2.s3.us-east-2.amazonaws.com/mindbodybalancecolorcharacters/Icon-Type-1-Mind-blue.png" class="feedback-icon" alt="Mind Icon">
            `;
			} else if (data.mindBodyBalance.toLowerCase() === "body") {
				littleDude.innerHTML += `
                <img src="https://dycpublicdocumentsandagreements2.s3.us-east-2.amazonaws.com/mindbodybalancecolorcharacters/Icon-Type-3-Body-blue.png" class="feedback-icon" alt="Body Icon">
            `;
			} else if (data.mindBodyBalance.toLowerCase() === "balanced") {
				littleDude.innerHTML += `
                <img src="https://dycpublicdocumentsandagreements2.s3.us-east-2.amazonaws.com/mindbodybalancecolorcharacters/Icon-Type-2-Balance-blue.png" class="feedback-icon" alt="Balance Icon">
            `;
			}
		} else if (data.color.toLowerCase() === "purple") {
			if (data.mindBodyBalance.toLowerCase() === "mind") {
				littleDude.innerHTML += `
                <img src="https://dycpublicdocumentsandagreements2.s3.us-east-2.amazonaws.com/mindbodybalancecolorcharacters/Icon-Type-1-Mind-purple.png" class="feedback-icon" alt="Mind Icon">
            `;
			} else if (data.mindBodyBalance.toLowerCase() === "body") {
				littleDude.innerHTML += `
                <img src="https://dycpublicdocumentsandagreements2.s3.us-east-2.amazonaws.com/mindbodybalancecolorcharacters/Icon-Type-3-Body-purple.png" class="feedback-icon" alt="Body Icon">
            `;
			} else if (data.mindBodyBalance.toLowerCase() === "balanced") {
				littleDude.innerHTML += `
                <img src="https://dycpublicdocumentsandagreements2.s3.us-east-2.amazonaws.com/mindbodybalancecolorcharacters/Icon-Type-2-Balance-purple.png" class="feedback-icon" alt="Balance Icon">
            `;
			}
		} else {
			if (data.mindBodyBalance.toLowerCase() === "mind") {
				littleDude.innerHTML += `
                <img src="https://dycpublicdocumentsandagreements2.s3.us-east-2.amazonaws.com/mindbodybalancecolorcharacters/Icon-Type-1-Mind-black.png" class="feedback-icon" alt="Mind Icon">
            `;
			} else if (data.mindBodyBalance.toLowerCase() === "body") {
				littleDude.innerHTML += `
                <img src="https://dycpublicdocumentsandagreements2.s3.us-east-2.amazonaws.com/mindbodybalancecolorcharacters/Icon-Type-3-Body-black.png" class="feedback-icon" alt="Body Icon">
            `;
			} else if (data.mindBodyBalance.toLowerCase() === "balanced") {
				littleDude.innerHTML += `
                <img src="https://dycpublicdocumentsandagreements2.s3.us-east-2.amazonaws.com/mindbodybalancecolorcharacters/Icon-Type-2-Balance-black.png" class="feedback-icon" alt="Balance Icon">
            `;
			}
		}
	}

	function goBack() {
		if (currentQuestion > 0) {
			currentQuestion--;
			selectedAnswers.pop();
			loadQuestion();
		}
	}

	function startQuiz() {
		try {
			console.log("Quiz started");
			if (!questionContainer) {
				console.error("Question container not found");
				return;
			}
			loadQuestion();
		} catch (error) {
			console.error("Error starting quiz:", error);
		}
	}

	function displayResults(data) {
		if (resultText && resultContainer && dispensaryListContainer) {
			resultText.innerHTML = `${data.color.toUpperCase()} ${data.mindBodyBalance.toUpperCase()} ${data.feedback.replace(
				"<br><br>See your personalized recommendations below.",
				""
			)}`;

			getLittleDude(data);
			questionContainer.style.display = "none";
			resetButton.style.display = "flex";
			resultContainer.style.display = "flex";
			seeDispoBelow.style.display = "flex";
			resultContainer.classList.add("fade-in-slow");
			resetButton.classList.add("fade-in-slow");
			seeDispoBelow.classList.add("fade-in-slow");
		}
	}

	function endQuiz() {
		try {
			console.log("Quiz ended");
			console.log("Selected Answers:", selectedAnswers);

			const queryParams = `q1=${selectedAnswers[0]}&q2=${selectedAnswers[1]}&q3=${selectedAnswers[2]}&q4=${selectedAnswers[3]}`;
			fetch(`https://dyc-api-5e43659cafec.herokuapp.com/api/v1/quiz/quiz-results/?${queryParams}`, {
				method: "GET",
			})
				.then((response) => response.json())
				.then((data) => {
					console.log("Feedback:", data);
					// Store results in localStorage
					localStorage.setItem("dycQuizResults", JSON.stringify(data));
					displayResults(data);
				})
				.catch((error) => {
					console.error("Error:", error);
				});
		} catch (error) {
			console.error("Error ending quiz:", error);
		}
	}

	function resetQuiz() {
		selectedAnswers = [];
		localStorage.removeItem("dycQuizResults");
		questionContainer.style.display = "flex";
		resultContainer.style.display = "none";
		questionContainer.classList.remove("fade-out");
		resultContainer.classList.remove("fade-in-slow");
		currentQuestion = 0;
		startQuiz();
	}

	function canClick() {
		const currentTime = Date.now();
		if (currentTime - lastClickTime >= 1000) {
			lastClickTime = currentTime;
			return true;
		}
		return false;
	}

	function loadQuestion() {
		if (!questionContainer) {
			console.error("Question container not found in loadQuestion");
			return;
		}

		questionContainer.classList.remove("fade-in");
		questionContainer.classList.add("fade-out");
		resetButton.style.display = "none";

		setTimeout(() => {
			try {
				const question = quizData[currentQuestion];
				let html = `<span class="question-title">${question.question}</span>`;
				for (let i = 0; i < question.options.length; i++) {
					html += `
                    <div class="questions" data-index="${question.options[i]}">
                        ${question.options[i]}
                    </div>
                `;
				}
				if (currentQuestion !== 0) {
					html += `<div class="back" id="back" data-index="${currentQuestion + 1}">Back</div>`;
				}
				questionContainer.innerHTML = html;

				// Add event listener to back button after setting innerHTML
				if (currentQuestion !== 0) {
					const backButton = questionContainer.querySelector("#back");
					if (backButton) {
						backButton.addEventListener("click", () => {
							console.log("Back button clicked");
							goBack();
						});
					}
				}

				const answerOptions = questionContainer.querySelectorAll(".questions");
				answerOptions.forEach((option) => {
					option.addEventListener("click", function (event) {
						if (canClick()) {
							handleAnswerSelection(event);
						}
					});
				});

				questionContainer.classList.remove("fade-out");
				questionContainer.classList.add("fade-in");
			} catch (error) {
				console.error("Error loading question:", error);
			}
		}, 300);
	}

	function handleAnswerSelection(event) {
		try {
			const selectedAnswer = event.target.dataset.index;
			selectedAnswers.push(selectedAnswer);

			questionContainer.classList.remove("fade-in");
			questionContainer.classList.add("fade-out");

			setTimeout(() => {
				if (currentQuestion < quizData.length - 1) {
					currentQuestion++;
					loadQuestion();
				} else {
					endQuiz();
				}
			}, 300);
		} catch (error) {
			console.error("Error handling answer selection:", error);
		}
	}

	return (
		<div class="main">
  <div class="quiz-header">
    <h1 class="quiz-title">Answer a 4 Question Quiz to Discover <strong>YOUR</strong> Color!</h1>
  </div>
  <div class="quiz-container">

    <div class="start-quiz">
    </div>
    <div class="question-container fade-in" id="question-container">
    </div>
  </div>
  <div class="results-container" id="results-container">
    <div class="result-text" id="result-text"></div>
    <div class="little-dude" id="little-dude"></div>
  </div>
  <div class="resetButtonContainer">
    <div class="resetButton" id="reset-button">Reset Quiz</div>
  </div>

</div>
	);
};

export default Quiz;
