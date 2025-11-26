package com.aditya.portfolio.controller;

import com.aditya.portfolio.model.ProjectsWrapper;
import com.aditya.portfolio.service.ContentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/projects")
public class ProjectsController {

    @Autowired
    private ContentService contentService;

    @GetMapping
    public ProjectsWrapper getProjects() {
        return contentService.getProjects();
    }
}
