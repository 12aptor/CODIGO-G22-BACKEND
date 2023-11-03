import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails} from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
const AccordionSection = () => {
  return (
    <div className='accordion-section mb-30'>
       <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMore />} aria-controls="panel1a-content" id="panel1a-header">
          <div>Job Description</div>
        </AccordionSummary>
        <AccordionDetails>
          <div>
            As a UI Designer, you will work within a Design Delivery Team fused with UX, engineering, product, and data talent. You will help the team design beautiful interfaces that solve business challenges for our clients. We work with a number of Tier 1 banks on building web-based applications for AML, KYC, and Sanctions List management workflows. This role is ideal if you are looking to segue your career into the FinTech or Big Data arenas.
          </div>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMore />} aria-controls="panel2a-content" id="panel2a-header">
          <div>Responsibilities</div>
        </AccordionSummary>
        <AccordionDetails>
          <div>
            As a Product Designer, you will work within a Product Delivery Team fused with UX, engineering, product, and data talent.
            <ul className="jm-job-responsible-list mt-10">
              <li><i className="fa-thin fa-check"></i> Have sound knowledge of commercial activities.</li>
              <li><i className="fa-thin fa-check"></i> Build next-generation web applications with a focus on the client side.</li>
              <li><i className="fa-thin fa-check"></i> Work on multiple projects at once and consistently meet draft deadlines.</li>
              <li><i className="fa-thin fa-check"></i> Have already graduated or are currently in any year of study.</li>
              <li><i className="fa-thin fa-check"></i> Revise the work of previous designers to create a unified aesthetic for our brand materials.</li>
            </ul>
          </div>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMore />} aria-controls="panel3a-content" id="panel3a-header">
          <div>Qualification</div>
        </AccordionSummary>
        <AccordionDetails>
          <div>
            <ul className="jm-job-responsible-list">
              <li><i className="fa-thin fa-check"></i> B.C.A / M.C.A under National University course complete.</li>
              <li><i className="fa-thin fa-check"></i> 3 or more years of professional design experience.</li>
              <li><i className="fa-thin fa-check"></i> Have already graduated or are currently in any year of study.</li>
              <li><i className="fa-thin fa-check"></i> Advanced degree or equivalent experience in graphic and web design.</li>
            </ul>
          </div>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMore />} aria-controls="panel4a-content" id="panel4a-header">
          <div>Skills & Experience</div>
        </AccordionSummary>
        <AccordionDetails>
          <div>
            <ul className="jm-job-responsible-list">
              <li><i className="fa-thin fa-check"></i> Understanding of key Design Principal.</li>
              <li><i className="fa-thin fa-check"></i> Proficiency With HTML, CSS, Bootstrap.</li>
              <li><i className="fa-thin fa-check"></i> Web designing: 1 year (Preferred).</li>
              <li><i className="fa-thin fa-check"></i> WordPress: 1 year (Required).</li>
              <li><i className="fa-thin fa-check"></i> Experience designing and developing responsive design websites.</li>
            </ul>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default AccordionSection;
