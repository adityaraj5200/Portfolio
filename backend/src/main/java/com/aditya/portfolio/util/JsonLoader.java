package com.aditya.portfolio.util;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.io.InputStream;

@Component
public class JsonLoader {

    private final ObjectMapper mapper = new ObjectMapper();

    public <T> T loadJson(String path, Class<T> clazz) {
        try {
            ClassPathResource resource = new ClassPathResource(path);
            InputStream inputStream = resource.getInputStream();
            return mapper.readValue(inputStream, clazz);
        } catch (IOException e) {
            throw new RuntimeException("Failed to load JSON file: " + path, e);
        }
    }
}
