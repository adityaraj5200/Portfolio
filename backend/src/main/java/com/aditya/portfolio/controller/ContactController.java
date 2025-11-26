package com.aditya.portfolio.controller;

import com.aditya.portfolio.model.Contact;
import com.aditya.portfolio.service.ContentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/contact")
public class ContactController {

    @Autowired
    private ContentService contentService;

    @GetMapping
    public Contact getContact() {
        return contentService.getContact();
    }
}
