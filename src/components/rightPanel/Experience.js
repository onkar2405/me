import { HiExternalLink } from "react-icons/hi";
import { ExperienceItem } from "../common/ExperienceItem";

export function Experience() {
  return (
    <>
      <section id="experience" className="mt-10">
        <h2 className="text-sm font-bold uppercase tracking-widest mb-6 text-slate-200 lg:sr-only">
          Experience
        </h2>
        <ExperienceItem
          title={"Software Engineer · "}
          endDate={null}
          s
          startDate={"June 2021"}
          isCurrentlyWorking={true}
          companyLink={"https://rajasoftwarelabs.com/"}
          companyName={"Raja Software Labs"}
          techStack={[
            "ReactJS",
            "EmberJS",
            "Javascript",
            "Java",
            "RestLi",
            "TailwindCSS",
            "SCSS",
            "HTML & CSS",
            "Rest APIs",
            "Git",
          ]}
          projects={[
            {
              projectName: "Linkedin Ads",
              link: "https://www.linkedin.com/campaignmanager/accounts/",
            },
            {
              projectName: "True pill",
              link: "https://www.truepill.com/",
            },
          ]}
        >
          <p className="text-slate-400 text-sm">
            I initially contributed to the{" "}
            <span className="text-slate-100">LinkedIn Campaign Manager</span>{" "}
            project by adding new features. Currently, I am leading the
            development of LinkedIn's internal{" "}
            <span className="text-slate-100">Trust Tools project</span>,
            focusing on migrating the web app from the{" "}
            <span className="text-slate-100">DustJS/Java Play</span>
            Framework to <span className="text-slate-100">EmberJS/RestLi</span>,
            ensuring they are both accessible and responsive. Configured an
            event tracker to monitor user activity for enhanced analytics and
            insights. Utilized Mirage to stub API responses, accelerating UI
            development by simulating backend data.
          </p>
        </ExperienceItem>
      </section>

      <div className="mt-10">
        <ExperienceItem
          title={"Intern · "}
          endDate={"Dec 2019"}
          startDate={"June 2019"}
          isCurrentlyWorking={false}
          companyLink={"https://shreeyansh.com/"}
          companyName={"Shreeyansh DB Softwate"}
          techStack={["PostgreSQL", "SQL", "Jenkins", "Nagios"]}
        >
          <p className="text-slate-400 text-sm">
            As part of my internship, I contributed to a database migration
            project focused on transitioning from{" "}
            <span className="text-slate-100">MSSQL</span> to{" "}
            <span className="text-slate-100">PostgreSQL</span>. My
            responsibilities included performing database assessments, executing
            the migration, and optimizing queries through query tuning. I
            leveraged my knowledge of Linux to develop shell scripts and create
            custom Nagios plugins to support the project’s infrastructure and
            ensure its smooth execution.
          </p>
        </ExperienceItem>
      </div>

      <a
        href="/assets/Resume.pdf"
        target="_blank"
        className="lg:pl-4 mt-10 flex text-slate-200 font-semibold gap-1 hover:text-teal-300 focus-visible:text-teal-300"
        rel="noreferrer"
      >
        <span>View full Resume </span>
        <HiExternalLink className="self-center" />
      </a>
    </>
  );
}
