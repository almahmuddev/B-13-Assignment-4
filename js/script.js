



// Complete Job Data
const jobsData = [
    { id: 1, company: "TechFlow", position: "Frontend Developer", location: "Remote", type: "Full-time", salary: "$80k - $95k", status: "none", description: "Building modern UI components with React and modern UI systems." },
    { id: 2, company: "DataViz Solutions", position: "JavaScript Engineer", location: "New York, NY", type: "Contract", salary: "$60 - $75/hr", status: "none", description: "Creating interactive dashboards and data visualizations." },
    { id: 3, company: "CloudPeak Systems", position: "Backend Developer", location: "San Francisco, CA", type: "Full-time", salary: "$120k - $140k", status: "none", description: "Developing APIs and optimizing databases." },
    { id: 4, company: "MobileFirst Labs", position: "React Native Developer", location: "Remote", type: "Part-time", salary: "$45 - $60/hr", status: "none", description: "Building cross-platform mobile applications." },
    { id: 5, company: "CyberSec Experts", position: "Security Analyst", location: "Austin, TX", type: "Full-time", salary: "$95k - $115k", status: "none", description: "Performing security audits and penetration testing." },
    { id: 6, company: "AI Innovation Labs", position: "ML Engineer", location: "Boston, MA", type: "Contract", salary: "$75 - $90/hr", status: "none", description: "Deploying and optimizing machine learning models." },
    { id: 7, company: "DevOps Pro Services", position: "DevOps Engineer", location: "Seattle, WA", type: "Full-time", salary: "$110k - $130k", status: "none", description: "Managing CI/CD pipelines and cloud infrastructure." },
    { id: 8, company: "UX Studio Collective", position: "UI/UX Designer", location: "Remote", type: "Full-time", salary: "$85k - $105k", status: "none", description: "Designing user-centered digital experiences." }
];

let jobs = [...jobsData];
let currentTab = "all";

// manipulation dom
const jobsContainer = document.getElementById("jobs-container");
const tabButtons = document.querySelectorAll(".tab-btn");
const totalCount = document.getElementById("available-count");
const interviewCountEl = document.getElementById("count-interview");
const rejectedCountEl = document.getElementById("count-rejected");
const jobTemplate = document.getElementById("job-card-part");
const emptyTemplate = document.getElementById("empty-state-template");

function updateCounts() {
    const interviewCount = jobs.filter(j => j.status === "interview").length;
    const rejectedCount = jobs.filter(j => j.status === "rejected").length;

    interviewCountEl.textContent = interviewCount;
    rejectedCountEl.textContent = rejectedCount;

    totalCount.textContent = jobs.length;
}

function createJobCard(job) {
    const clone = jobTemplate.cloneNode(true);
    clone.style.display = "";
    clone.removeAttribute("id");

    const card = clone.querySelector(".job-card");

    card.querySelector(".company-name").textContent = job.company;
    card.querySelector(".position").textContent = job.position;
    card.querySelector(".location").textContent = job.location;
    card.querySelector(".type").textContent = job.type;
    card.querySelector(".salary").textContent = job.salary;
    const statusText = card.querySelector(".status-text");

    if (job.status === "interview") {
        statusText.textContent = "Applied";
    } else if (job.status === "rejected") {
        statusText.textContent = "Rejected";
    } else {
        statusText.textContent = "Not Applied";
    }
    card.querySelector(".description").textContent = job.description;

    const interviewBtn = card.querySelector(".interview-btn");
    const rejectedBtn = card.querySelector(".rejected-btn");
    const deleteBtn = card.querySelector(".delete-btn");

    interviewBtn.addEventListener("click", () => updateStatus(job.id, "interview"));
    rejectedBtn.addEventListener("click", () => updateStatus(job.id, "rejected"));
    deleteBtn.addEventListener("click", () => deleteJob(job.id));

    interviewBtn.disabled = job.status === "interview";
    rejectedBtn.disabled = job.status === "rejected";

    return clone;
}

function renderJobs() {
    jobsContainer.innerHTML = "";

    const filteredJobs = jobs.filter(job =>
        currentTab === "all" ? true : job.status === currentTab
    );

    tabButtons.forEach(btn =>
        btn.classList.toggle("active", btn.dataset.tab === currentTab)
    );

    updateCounts();

    if (filteredJobs.length === 0) {
        jobsContainer.appendChild(emptyTemplate.content.cloneNode(true));
        return;
    }

    filteredJobs.forEach(job => {
        jobsContainer.appendChild(createJobCard(job));
    });
}

function updateStatus(id, status) {
    const job = jobs.find(j => j.id === id);
    if (!job) return;

    job.status = status;
    renderJobs();
}

function deleteJob(id) {
    jobs = jobs.filter(j => j.id !== id);
    renderJobs();
}

function init() {
    tabButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            currentTab = btn.dataset.tab;
            renderJobs();
        });
    });

    renderJobs();
}

document.addEventListener("DOMContentLoaded", init);