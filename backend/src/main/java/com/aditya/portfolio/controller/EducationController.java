package com.aditya.portfolio.controller;

import com.aditya.portfolio.model.Education;
import com.aditya.portfolio.service.ContentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/education")
public class EducationController {

    @Autowired
    private ContentService contentService;

    @GetMapping
    public Education getEducation() {
        return contentService.getEducation();
    }
}
