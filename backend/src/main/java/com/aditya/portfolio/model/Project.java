package com.aditya.portfolio.model;

import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Project {

    private String name;
    private List<String> techStack;
    private String description;
    private String github;
}
