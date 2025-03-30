document.addEventListener("DOMContentLoaded", () => {
    // Logic 1: Dynamic Welcome Message
    const welcomeMessage = document.getElementById("welcome-message");
    const hours = new Date().getHours();
    if (hours < 12) {
        welcomeMessage.innerText = "Good Morning! Welcome to EnglishJourney!";
    } else if (hours < 18) {
        welcomeMessage.innerText = "Good Afternoon! Welcome to EnglishJourney!";
    } else {
        welcomeMessage.innerText = "Good Evening! Welcome to EnglishJourney!";
    }

    // Logic 2: Random English Tip of the Day
    const englishTips = [
        "Practice speaking every day to improve fluency.",
        "Read books and articles to enhance vocabulary.",
        "Watch English movies with subtitles for better understanding.",
        "Write a journal to practice sentence structure.",
        "Learn 5 new words daily and use them in sentences."
    ];
    const randomTip = englishTips[Math.floor(Math.random() * englishTips.length)];
    document.getElementById("english-tip").innerText = `Tip of the Day: ${randomTip}`;
});
