package com.aditya.portfolio.controller;

import com.aditya.portfolio.model.About;
import com.aditya.portfolio.service.ContentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/about")
public class AboutController {

    @Autowired
    private ContentService contentService;

    @GetMapping
    public About getAbout() {
        return contentService.getAbout();
    }
}
