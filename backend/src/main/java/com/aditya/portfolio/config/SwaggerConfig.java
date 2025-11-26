package com.aditya.portfolio.config;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SwaggerConfig {

    @Bean
    public OpenAPI portfolioOpenAPI() {
        // Access endpoints at "http://localhost:8080/swagger-ui.html"
        return new OpenAPI()
                .info(new Info()
                        .title("Aditya Portfolio API")
                        .description("API documentation for my Java + Spring Boot powered portfolio backend.")
                        .version("1.0.0"));
    }
}
