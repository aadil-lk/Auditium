async function runAudit() {

    const url = document.getElementById("url").value;
    const email = document.getElementById("email").value;

    const modules = Array.from(document.querySelectorAll(".modules input:checked"))
        .map(cb => cb.value);

    if (!url || modules.length === 0) {
        alert("Please enter URL and select at least one module.");
        return;
    }

    const btn = document.getElementById("auditBtn");
    btn.classList.add("loading");
    btn.disabled = true;

    try {

        const response = await fetch("https://aadillakhpatwala.app.n8n.cloud/webhook/start-audit", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ url, email, modules })
        });

        const data = await response.json();

        document.getElementById("report").innerHTML = data.report;
        renderDashboard(data.scores);

    } catch (error) {
        document.getElementById("report").innerHTML =
            "Something went wrong. Please try again.";
    }

    btn.classList.remove("loading");
    btn.disabled = false;
}


/* =========================
   DASHBOARD RENDER
========================= */

function renderDashboard(scores) {

    const overall = calculateOverall(scores);
    const grade = getGrade(overall);
    const risk = getRisk(overall);

    document.getElementById("overallScore").innerText = overall + "%";
    document.getElementById("grade").innerText = grade;
    document.getElementById("risk").innerText = risk;

    renderModuleChart(scores);
    renderDonut(overall);
}


/* =========================
   MODULE BAR CHART
========================= */

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
}


/* =========================
   DONUT CHART WITH CENTER TEXT
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
}


/* =========================
   CALCULATIONS
========================= */

function calculateOverall(scores) {
    const values = Object.values(scores);
    const total = values.reduce((a, b) => a + b, 0);
    return Math.round(total / values.length);
}

function getGrade(score) {
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