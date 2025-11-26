package com.aditya.portfolio.service;

import com.aditya.portfolio.model.*;

public interface ContentService {

    About getAbout();

    Skills getSkills();

    Experience getExperience();

    ProjectsWrapper getProjects();

    Education getEducation();

    Contact getContact();
}
