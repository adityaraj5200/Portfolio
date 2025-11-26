package com.aditya.portfolio.service.impl;

import com.aditya.portfolio.model.*;
import com.aditya.portfolio.service.ContentService;
import com.aditya.portfolio.util.JsonLoader;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ContentServiceImpl implements ContentService {

    @Autowired
    private JsonLoader jsonLoader;

    @Override
    public About getAbout() {
        return jsonLoader.loadJson("content/about.json", About.class);
    }

    @Override
    public Skills getSkills() {
        return jsonLoader.loadJson("content/skills.json", Skills.class);
    }

    @Override
    public Experience getExperience() {
        return jsonLoader.loadJson("content/experience.json", Experience.class);
    }

    @Override
    public ProjectsWrapper getProjects() {
        return jsonLoader.loadJson("content/projects.json", ProjectsWrapper.class);
    }

    @Override
    public Education getEducation() {
        return jsonLoader.loadJson("content/education.json", Education.class);
    }

    @Override
    public Contact getContact() {
        return jsonLoader.loadJson("content/contact.json", Contact.class);
    }
}
