package com.aditya.portfolio.model;

import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Experience {

    private List<ExperienceItem> experience;

    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    public static class ExperienceItem {
        private String company;
        private String position;
        private String duration;
        private String location;
        private List<String> description;
    }
}
