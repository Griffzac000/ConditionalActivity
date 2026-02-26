// ─────────────────────────────────────────────
//  FEATURE 1: Grade Calculator
//  Skills: querySelector, addEventListener, .value, if/else chain
// ─────────────────────────────────────────────


const scoreInput = document.querySelector("#scoreInput");
const gradeBtn = document.querySelector("#gradeBtn");
const gradeOutput = document.querySelector("#gradeOutput");



let score = undefined;
gradeBtn.addEventListener("click", (e) => {
    score = Number(scoreInput.value);
})



if (score >= 90) {
    gradeOutput.textContent = "🅰️ A — Excellent!";
}
else if (score >= 80) {
    gradeOutput.textContent = "🅱️ B — Great job!";
}
else if (score >= 70) {
    gradeOutput.textContent = "©️ C — Not bad!";
}
else if (score >= 60) {
    gradeOutput.textContent = "📝 D — Needs improvement";
}
else {
    gradeOutput.textContent = "❌ F — Let's study more";
}
gradeOutput.classList.add("active");



// ─────────────────────────────────────────────
//  FEATURE 2: Ticket Pricer
//  Skills: comparison operators, logical operators (&&), if/else
// ─────────────────────────────────────────────


const ageInput = document.querySelector("#ageInput");
const weekendSelect = document.querySelector("#weekendSelect");
const ticketBtn = document.querySelector("#ticketBtn");
const ticketOutput = document.querySelector("#ticketOutput");


ticketBtn.addEventListener("click", (e) => {

    const age = Number(ageInput.value);
    const weekend = weekendSelect.value;
    const isWeekend = weekend === "yes";

    let message = "";

    if (age < 0 || age > 120) {
        message = "⚠️ Please enter a valid age";
    }
    else if (age <= 5) {
        message = "🎈 Free! Kids 5 and under are free";
    }
    else if (age <= 12) {
        if (isWeekend) {
            message = "🎟️ Child Weekend: $8.00";
        } else {
            message = "🎟️ Child Weekday: $5.00";
        }
    }
    else if (age >= 65) {
        message = "👴 Senior Discount: $6.00";
    }
    else {
        if (isWeekend) {
            message = "🎟️ Adult Weekend: $15.00";
        } else {
            message = "🎟️ Adult Weekday: $10.00";
        }
    }

    ticketOutput.textContent = message;
    ticketOutput.classList.add("active");
});

// ─────────────────────────────────────────────
//  FEATURE 3: Day Planner
//  Skills: switch statement
// ─────────────────────────────────────────────


const daySelect = document.querySelector("#daySelect");
const dayBtn = document.querySelector("#dayBtn");
const dayOutput = document.querySelector("#dayOutput");



    dayBtn.addEventListener("click", () => {
        // Get selected day
        const day = daySelect.value;
        let message = "";
        // Switch statement
        switch (day) {
            case "monday":
                message = "💪 Chest day — hit the gym!";
                break;
            case "tuesday":
                message = "📚 Study session — review your notes";
                break;
            case "wednesday":
                message = "🎮 Hump day — game night!";
                break;
            case "thursday":
                message = "💻 Code day — work on a project";
                break;
            case "friday":
                message = "🎉 TGIF — movie night!";
                break;
            case "saturday":
                message = "🏀 Weekend vibes — play some sports";
                break;
            case "sunday":
                message = "😴 Rest day — recharge for the week";
                break;
            default:
                message = "🤔 Pick a day first!";
        }
        dayOutput.textContent = message;
        dayOutput.classList.add("active");
    });


// ─────────────────────────────────────────────
//  FEATURE 4 (BONUS): Temperature Advisor
//  Skills: if/else + logical operators (&&)
// ─────────────────────────────────────────────

const tempInput = document.querySelector("#tempInput");
const rainSelect = document.querySelector("#rainSelect");
const tempBtn = document.querySelector("#tempBtn");
const tempOutput = document.querySelector("#tempOutput");


tempBtn.addEventListener("click", () => {

    const temp = Number(tempInput.value);
    const rain = rainSelect.value;
    const isRaining = rain === "yes";

    let message = "";

    // Weather logic
    if (temp >= 85 && isRaining) {
        message = "🌧️ Hot & rainy — umbrella + light clothes";
    }
    else if (temp >= 85) {
        message = "☀️ It's hot — shorts, sunscreen, stay hydrated!";
    }
    else if (temp >= 60 && isRaining) {
        message = "🌂 Mild & rainy — bring a jacket and umbrella";
    }
    else if (temp >= 60) {
        message = "😎 Perfect weather — t-shirt and jeans!";
    }
    else if (temp >= 32 && isRaining) {
        message = "🥶 Cold & rainy — heavy coat and umbrella!";
    }
    else if (temp >= 32) {
        message = "🧥 It's chilly — wear a warm coat";
    }
    else {
        message = "❄️ Freezing! Bundle up — hat, gloves, heavy coat";
    }
    tempOutput.textContent = message;
    tempOutput.classList.add("active");
});