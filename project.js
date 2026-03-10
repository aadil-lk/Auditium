async function runAudit() {

const url = document.getElementById("url").value;
const email = document.getElementById("email").value;

    const modules = Array.from(document.querySelectorAll(".modules input:checked"))
        .map(cb => cb.value);
const modules = Array.from(document.querySelectorAll(".modules input:checked"))
.map(cb => cb.value);

    if (!url || modules.length === 0) {
        alert("Please enter URL and select at least one module.");
        return;
    }
if (!url || modules.length === 0) {
alert("Please enter URL and select at least one module.");
return;
}

/* START SCAN ANIMATION */
startScanAnimation();

const btn = document.getElementById("auditBtn");
btn.classList.add("loading");
btn.disabled = true;

try {

const response = await fetch("https://aadillakhpatwala.app.n8n.cloud/webhook/start-audit", {
method: "POST",
headers: { "Content-Type": "application/json" },
body: JSON.stringify({ url, email, modules })
});

    const btn = document.getElementById("auditBtn");
    btn.classList.add("loading");
    btn.disabled = true;
const data = await response.json();

    try {
/* FINISH ANIMATION */
finishScanAnimation();

        const response = await fetch("https://aadillakhpatwala.app.n8n.cloud/webhook/start-audit", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ url, email, modules })
        });
/* REPORT CONTENT */

        const data = await response.json();
document.getElementById("summaryBox").innerHTML = data.short_summary;
document.getElementById("fullReport").innerHTML = data.full_report;

        document.getElementById("report").innerHTML = data.report;
        renderDashboard(data.scores);
/* DASHBOARD */

    } catch (error) {
        document.getElementById("report").innerHTML =
            "Something went wrong. Please try again.";
    }
renderDashboard(data.scores);

} catch (error) {

document.getElementById("summaryBox").innerHTML =
"<p style='color:#ef4444'>Something went wrong. Please try again.</p>";

}

btn.classList.remove("loading");
btn.disabled = false;

    btn.classList.remove("loading");
    btn.disabled = false;
}


@@ -44,16 +59,17 @@ async function runAudit() {

function renderDashboard(scores) {

    const overall = calculateOverall(scores);
    const grade = getGrade(overall);
    const risk = getRisk(overall);
const overall = calculateOverall(scores);
const grade = getGrade(overall);
const risk = getRisk(overall);

document.getElementById("overallScore").innerText = overall + "%";
document.getElementById("grade").innerText = grade;
document.getElementById("risk").innerText = risk;

    document.getElementById("overallScore").innerText = overall + "%";
    document.getElementById("grade").innerText = grade;
    document.getElementById("risk").innerText = risk;
renderModuleChart(scores);
renderDonut(overall);

    renderModuleChart(scores);
    renderDonut(overall);
}


@@ -63,117 +79,127 @@ function renderDashboard(scores) {

function renderModuleChart(scores) {

    const ctx = document.getElementById("chart").getContext("2d");

    if (window.moduleChart) {
        window.moduleChart.destroy();
    }

    window.moduleChart = new Chart(ctx, {
        type: "bar",
        data: {
            labels: Object.keys(scores),
            datasets: [{
                data: Object.values(scores),
                borderRadius: 6,
                backgroundColor: Object.values(scores).map(score => {
                    if (score >= 80) return "#4CAF50";
                    if (score >= 60) return "#FFC107";
                    return "#F44336";
                })
            }]
        },
        options: {
            maintainAspectRatio: false,  // IMPORTANT FOR PERFECT HEIGHT
            indexAxis: 'y',
            animation: {
                duration: 1800,
                easing: 'easeOutCubic'
            },
            scales: {
                x: {
                    beginAtZero: true,
                    max: 100,
                    grid: {
                        color: "#e5e7eb"
                    }
                },
                y: {
                    grid: {
                        display: false
                    }
                }
            },
            plugins: {
                legend: { display: false }
            }
        }
    });
const ctx = document.getElementById("chart").getContext("2d");

if (window.moduleChart) {
window.moduleChart.destroy();
}

window.moduleChart = new Chart(ctx, {
type: "bar",
data: {
labels: Object.keys(scores),
datasets: [{
data: Object.values(scores),
borderRadius: 6,
backgroundColor: Object.values(scores).map(score => {
if (score >= 80) return "#4CAF50";
if (score >= 60) return "#FFC107";
return "#F44336";
})
}]
},
options: {
maintainAspectRatio: false,
indexAxis: 'y',
animation: {
duration: 1800,
easing: 'easeOutCubic'
},
scales: {
x: {
beginAtZero: true,
max: 100,
ticks:{ color:"#374151" },
grid:{ color:"#e5e7eb" }
},
y:{
ticks:{ color:"#374151" },
grid:{ display:false }
}
},
plugins: {
legend: { display: false }
}
}
});

}


/* =========================
   DONUT CHART WITH CENTER TEXT
   DONUT CHART
========================= */

function renderDonut(score) {

    const ctx = document.getElementById("overallDonut").getContext("2d");

    if (window.donutChart) {
        window.donutChart.destroy();
    }

    // Plugin for center percentage text
    const centerTextPlugin = {
        id: "centerText",
        beforeDraw(chart) {
            const { width } = chart;
            const { height } = chart;
            const ctx = chart.ctx;
            ctx.restore();

            const fontSize = (height / 160).toFixed(2);
            ctx.font = fontSize + "em sans-serif";
            ctx.textBaseline = "middle";
            ctx.fillStyle = "#111827";

            const text = score + "%";
            const textX = Math.round((width - ctx.measureText(text).width) / 2);
            const textY = height / 2;

            ctx.fillText(text, textX, textY);
            ctx.save();
        }
    };

    window.donutChart = new Chart(ctx, {
        type: "doughnut",
        data: {
            datasets: [{
                data: [score, 100 - score],
                borderWidth: 0,
                backgroundColor: [
                    score >= 80 ? "#4CAF50" :
                    score >= 60 ? "#FFC107" :
                    "#F44336",
                    "#e5e7eb"
                ]
            }]
        },
        options: {
            maintainAspectRatio: false,  // IMPORTANT
            cutout: "70%",
            animation: {
                duration: 1500,
                easing: "easeOutQuart"
            },
            plugins: {
                legend: { display: false }
            }
        },
        plugins: [centerTextPlugin]
    });
const ctx = document.getElementById("overallDonut").getContext("2d");

if (window.donutChart) {
window.donutChart.destroy();
}

const centerTextPlugin = {
id: "centerText",
beforeDraw(chart) {

const { width } = chart;
const { height } = chart;
const ctx = chart.ctx;

ctx.restore();

const fontSize = (height / 160).toFixed(2);
ctx.font = fontSize + "em sans-serif";
ctx.textBaseline = "middle";
ctx.fillStyle = "#111827";

const text = score + "%";
const textX = Math.round((width - ctx.measureText(text).width) / 2);
const textY = height / 2;

ctx.fillText(text, textX, textY);
ctx.save();

}
};

window.donutChart = new Chart(ctx, {
type: "doughnut",
data: {
datasets: [{
data: [score, 100 - score],
borderWidth: 0,
backgroundColor: [
score >= 80 ? "#4CAF50" :
score >= 60 ? "#FFC107" :
"#F44336",
"#e5e7eb"
]
}]
},
options: {
responsive: true,
maintainAspectRatio: false,

layout:{
padding:20
},

cutout:"70%",

animation:{
duration:1500,
easing:"easeOutQuart"
},

plugins:{
legend:{display:false}
}
},
plugins: [centerTextPlugin]
});

}


@@ -182,20 +208,105 @@ function renderDonut(score) {
========================= */

function calculateOverall(scores) {
    const values = Object.values(scores);
    const total = values.reduce((a, b) => a + b, 0);
    return Math.round(total / values.length);
const values = Object.values(scores);
const total = values.reduce((a, b) => a + b, 0);
return Math.round(total / values.length);
}

function getGrade(score) {
    if (score >= 85) return "A";
    if (score >= 70) return "B";
    if (score >= 55) return "C";
    return "D";
if (score >= 85) return "A";
if (score >= 70) return "B";
if (score >= 55) return "C";
return "D";
}

function getRisk(score) {
    if (score >= 80) return "Low";
    if (score >= 60) return "Medium";
    return "High";
}
if (score >= 80) return "Low";
if (score >= 60) return "Medium";
return "High";
}


/* =========================
   SCAN ANIMATION
========================= */

let scanInterval;
let dotsInterval;

function startScanAnimation(){

const status = document.getElementById("scanStatus");
const text = document.querySelector(".scan-text");
const progress = document.getElementById("scanProgress");

status.classList.remove("collapsed");

const steps = [
"Scanning Website",
"Checking Security Headers",
"Analyzing Accessibility",
"Evaluating Performance",
"Generating Compliance Report"
];

let i = 0;

/* DOT ANIMATION */

let dots = "";
dotsInterval = setInterval(()=>{
dots = dots.length < 3 ? dots + "." : "";
text.innerText = steps[i] + dots;
},400);


/* STEP PROGRESS */

scanInterval = setInterval(()=>{

i++;

if(i >= steps.length){
clearInterval(scanInterval);
return;
}

progress.style.width = Math.min((i+1)*20,95) + "%";

},1200);

}


function finishScanAnimation(){

const text = document.querySelector(".scan-text");
const progress = document.getElementById("scanProgress");

clearInterval(scanInterval);
clearInterval(dotsInterval);

progress.style.width = "100%";
text.innerText = "Audit Complete ✓";

setTimeout(()=>{
document.getElementById("scanStatus").classList.add("collapsed");
},1200);

}
function downloadPDF(){

const element = document.getElementById("report");

const opt = {
margin: 0.5,
filename: "Auditium_Report.pdf",
image: { type: "jpeg", quality: 0.98 },
html2canvas: { scale: 2 },
jsPDF: { unit: "in", format: "a4", orientation: "portrait" }
};

html2pdf().set(opt).from(element).save();

}

