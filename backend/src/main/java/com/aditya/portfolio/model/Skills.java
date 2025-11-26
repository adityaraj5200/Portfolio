package com.aditya.portfolio.model;

import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Skills {

    private List<String> backend;
    private List<String> database;
    private List<String> csFundamentals;
    private List<String> tools;
}
