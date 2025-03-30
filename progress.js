document.addEventListener("DOMContentLoaded", function () {
    // Simulated progress data
    const progressData = {
        lessonsCompleted: 15,
        totalLessons: 20,
        quizzesAttempted: 8,
        totalQuizzes: 10,
        timeSpent: "12 hours",
        achievements: [
            { name: "Grammar Master", image: "badge1.png" },
            { name: "Quiz Champion", image: "badge2.png" },
            { name: "Listening Pro", image: "badge3.png" }
        ],
        improvementTips: [
            "Practice daily for at least 30 minutes.",
            "Revisit completed lessons to reinforce concepts.",
            "Participate in the community chat for real-time practice."
        ]
    };

    // Update progress metrics
    document.getElementById("lessons-completed").textContent = `${progressData.lessonsCompleted} / ${progressData.totalLessons}`;
    document.getElementById("quizzes-attempted").textContent = `${progressData.quizzesAttempted} / ${progressData.totalQuizzes}`;
    document.getElementById("time-spent").textContent = progressData.timeSpent;

    // Update achievements
    const badgesContainer = document.getElementById("badges-container");
    progressData.achievements.forEach(achievement => {
        const badgeItem = document.createElement("div");
        badgeItem.classList.add("badge-item");
        badgeItem.innerHTML = `<img src="${achievement.image}" alt="${achievement.name}"><p>${achievement.name}</p>`;
        badgesContainer.appendChild(badgeItem);
    });

    // Update improvement tips
    const tipsList = document.getElementById("tips-list");
    progressData.improvementTips.forEach(tip => {
        const tipItem = document.createElement("li");
        tipItem.textContent = tip;
        tipsList.appendChild(tipItem);
    });

    // Download progress report functionality
    document.getElementById("download-report-btn").addEventListener("click", function () {
        const reportText = `
            Learning Progress Report - EnglishJourney

            Lessons Completed: ${progressData.lessonsCompleted} / ${progressData.totalLessons}
            Quizzes Attempted: ${progressData.quizzesAttempted} / ${progressData.totalQuizzes}
            Time Spent: ${progressData.timeSpent}

            Achievements:
            ${progressData.achievements.map(a => `- ${a.name}`).join("\n")}

            Improvement Tips:
            ${progressData.improvementTips.map(tip => `- ${tip}`).join("\n")}
        `;

        const blob = new Blob([reportText], { type: "text/plain" });
        const a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = "progress_report.txt";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    });
});
