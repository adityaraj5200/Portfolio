package com.aditya.portfolio.controller;

import com.aditya.portfolio.model.Experience;
import com.aditya.portfolio.service.ContentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/experience")
public class ExperienceController {

    @Autowired
    private ContentService contentService;

    @GetMapping
    public Experience getExperience() {
        return contentService.getExperience();
    }
}
