package com.aditya.portfolio.controller;

import com.aditya.portfolio.model.Skills;
import com.aditya.portfolio.service.ContentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/skills")
public class SkillsController {

    @Autowired
    private ContentService contentService;

    @GetMapping
    public Skills getSkills() {
        return contentService.getSkills();
    }
}
