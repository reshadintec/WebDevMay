import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import WorkIcon from "@mui/icons-material/Work";
import "../styles/Experience.css";
function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#04518C">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2005-2009"
          iconStyle={{ background: "#04518C", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            {" "}
            Habibia High School, Kabul Afghanistan
          </h3>
          <p>
            Got my <span id="highSchool">High School Diploma</span> from one of
            Afghanistan's finest high schools. A place where previous Afghan
            politicans, musicians and legneds such as Hamed Karzai,Ahmad Zahir
            have studied.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2010-2014"
          iconStyle={{ background: "#04518C", color: "#fff" }}
          icon={<HistoryEduIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            {" "}
            Pune University, Pune, Mahrashtra India
          </h3>
          <p>
            After an entrance exam I got{" "}
            <span id="highSchool">
              Scholarship for Bachelor of Computer Science
            </span>{" "}
            in India and a new chapter had begun in my life. The road to become
            a programmer started here.{" "}
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2014-2015"
          iconStyle={{ background: "#003056", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            IT Officer, Ministry of Education, Kabul Afghanistan
          </h3>
          <p>
            First professional job after coming back home.One of my tasks was to
            create a new website for the Literacy Department of Ministry of
            Education. I finally managed to build it using{" "}
            <span id="highSchool">Joomla Content Management System.</span>
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2015-2017"
          iconStyle={{ background: "#003056", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title jobTitle">
            Digital Marketing Manager, HB Perfumes, Kabul Afghanistan
          </h3>
          <p>
            As a digital marketing manger, I was responsible for every digital
            move the company was making from the company's{" "}
            <span id="highSchool">Website </span>to its organic reach by the
            audience <span id="highSchool">SEO </span> and every{" "}
            <span id="highSchool">Adcampaign</span> we were running through the
            internet for our partners.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2017-2019"
          iconStyle={{ background: "#003056", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title jobTitle">
            Web & Campaign Developer, Statecorps, Istanbul Turkey
          </h3>
          <p>
            I was the main source for anything web related.{" "}
            <span id="highSchool">Marketing & Social Media Campaigns</span>,{" "}
            <span id="highSchool">Websites </span>
            for new branches in other countries, managing the existing websites
            and managing <span id="highSchool">Basic SEO </span>for all the
            websites specially <a href="http://www.statecorps.com.tr/en/">Statecorps Turkey </a>.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2022-2023"
          iconStyle={{ background: "#04518C", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            {" "}
            Web Developer, Intec Brussel, Belgium
          </h3>
          <p>
            I used to develop websites using <span id="highSchool">WordPress and Elementor</span> and in my first job interview in Belgium, I found out that I have to learn technologies and languages that are mainly used here. That is the reason I started the Web Development course in Intec where I learned <span id="highSchool">HTML, CSS, Javascript, ReactJS, NodeJS, ExpressJS MongoDB and NextJS. </span> I have created this personal-portfolio website using ReactJS.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
