function searchJobs() {
  const keyword = document.getElementById("keywordInput").value || "engineer";
  const location = document.getElementById("locationInput").value || "";

  document.getElementById("jobResults").innerHTML =
    "<p style='color:white'>Searching...</p>";

  const apiUrl = `http://api.lmiforall.org.uk/api/v1/vacancies/search?keywords=${encodeURIComponent(keyword)}&location=${encodeURIComponent(location)}&limit=10`;

  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) throw new Error("API failed");
      return response.json();
    })
    .then((data) => {
      const jobs = data.vacancies || data || [];
      if (!jobs || jobs.length === 0) throw new Error("No jobs");
      displayJobs(jobs, true);
    })
    .catch(() => {
      // fallback to mock data if API fails
      const mockJobs = [
        {
          title: "Registered Nurse",
          employer: "Lagos University Teaching Hospital",
          location: "Lagos, Nigeria",
          url: "#",
        },
        {
          title: "Nurse Practitioner",
          employer: "Federal Medical Centre",
          location: "Abuja, Nigeria",
          url: "#",
        },
        {
          title: "Software Engineer",
          employer: "Andela Nigeria",
          location: "Lagos, Nigeria",
          url: "#",
        },
        {
          title: "Frontend Developer",
          employer: "Interswitch Group",
          location: "Lagos, Nigeria",
          url: "#",
        },
        {
          title: "Data Analyst",
          employer: "Access Bank",
          location: "Abuja, Nigeria",
          url: "#",
        },
        {
          title: "Accountant",
          employer: "Deloitte Nigeria",
          location: "Lagos, Nigeria",
          url: "#",
        },
        {
          title: "Teacher",
          employer: "Corona Schools",
          location: "Lagos, Nigeria",
          url: "#",
        },
        {
          title: "Civil Engineer",
          employer: "Julius Berger",
          location: "Abuja, Nigeria",
          url: "#",
        },
        {
          title: "Doctor",
          employer: "National Hospital Abuja",
          location: "Abuja, Nigeria",
          url: "#",
        },
        {
          title: "Pharmacist",
          employer: "HealthPlus Nigeria",
          location: "Port Harcourt, Nigeria",
          url: "#",
        },
        {
          title: "Lawyer",
          employer: "Aluko & Oyebode",
          location: "Lagos, Nigeria",
          url: "#",
        },
        {
          title: "Architect",
          employer: "Cappa D'Alberto",
          location: "Lagos, Nigeria",
          url: "#",
        },
        {
          title: "Graphic Designer",
          employer: "Noah's Ark Communications",
          location: "Lagos, Nigeria",
          url: "#",
        },
        {
          title: "Electrical Engineer",
          employer: "Siemens Nigeria",
          location: "Lagos, Nigeria",
          url: "#",
        },
        {
          title: "Banker",
          employer: "Zenith Bank",
          location: "Lagos, Nigeria",
          url: "#",
        },
        {
          title: "Mechanical Engineer",
          employer: "Total Energies Nigeria",
          location: "Port Harcourt, Nigeria",
          url: "#",
        },
        {
          title: "Economist",
          employer: "Central Bank of Nigeria",
          location: "Abuja, Nigeria",
          url: "#",
        },
        {
          title: "Chef",
          employer: "Transcorp Hilton",
          location: "Abuja, Nigeria",
          url: "#",
        },
        {
          title: "Marketing Manager",
          employer: "MTN Nigeria",
          location: "Lagos, Nigeria",
          url: "#",
        },
        {
          title: "Project Manager",
          employer: "Shell Nigeria",
          location: "Port Harcourt, Nigeria",
          url: "#",
        },
      ];

      const filtered = mockJobs.filter((job) =>
        job.title.toLowerCase().includes(keyword.toLowerCase()),
      );

      displayJobs(
        filtered.length > 0 ? filtered : mockJobs.slice(0, 10),
        false,
      );
    });
}

function displayJobs(jobs, fromAPI) {
  if (!jobs || jobs.length === 0) {
    document.getElementById("jobResults").innerHTML =
      "<p style='color:white'>No jobs found. Try another search.</p>";
    return;
  }

  document.getElementById("jobResults").innerHTML = "";

  jobs.slice(0, 10).forEach((job) => {
    const title = job.title || job.jobTitle || "Job Title";
    const employer = job.employer || job.company || "Employer";
    const loc = job.location || job.job_city || "Nigeria";
    const applyLink =
      job.url ||
      job.applyLink ||
      `https://ng.indeed.com/jobs?q=${encodeURIComponent(title)}&l=Nigeria`;
    const summary = job.summary || "";
    document.getElementById("jobResults").innerHTML += `
      <div style="
      
        background-color:#2563a8;
        width: 100%;
        margin-bottom: 3px;
        padding: 10px;
        border-radius: 5px;
      ">
        <p style="color:white; font-size:18px; font-weight:bold; margin-bottom:5px;">
          ${title}
        </p>
        ${summary ? `<p style="color:#cce5ff; font-size:13px; margin:5px 0;">${summary}</p>` : ""}
        <p style="color:lightblue; margin:5px 0;">🏢 ${employer}</p>
        <p style="color:lightblue; margin:5px 0;">📍 ${loc}</p>
        <br>
        <a href="${applyLink}" target="_blank" style="text-decoration:none;">
          <button style="
            background-color: #1a4a8a;
            color: white;
            padding: 10px 25px;
            border-radius: 5px;
            border: 1px solid white;
            font-weight: bold;
            cursor: pointer;
            font-size: 14px;
          ">Apply Now</button>
        </a>
      </div>`;
  });
}

searchJobs();
