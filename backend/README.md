# 🚀 Aditya Raj — Portfolio Backend  
A lightweight, fast, and clean **Java + Spring Boot** backend powering my developer portfolio website.  
All portfolio content (About, Skills, Projects, Experience, Education, Contact) is served through well-structured REST APIs.

---

## 🛠️ Tech Stack

- **Java 17**
- **Spring Boot 3**
- **Spring Web (REST APIs)**
- **Jackson (JSON Parsing)**
- **Springdoc OpenAPI (Swagger UI)**
- **Maven**
- **Static JSON/YAML content storage**

[//]: # (- **Deployed on Render**)

---

## 📌 Project Overview

This backend serves the dynamic content for my portfolio website.  
Instead of hard-coding text in HTML, all portfolio data is stored in:

```

src/main/resources/content/*.json

```

and exposed via REST API endpoints.

This approach gives:
- Clean separation of data + presentation  
- Easy editing without code changes  
- Professional backend architecture  
- Strong credibility for recruiters  
- Real API documentation via Swagger  

---

## 📂 Folder Structure

```

backend/
│
├── src/main/java/com/aditya/portfolio/
│   ├── controller/         # REST controllers (About, Skills, Projects, etc.)
│   ├── service/            # ContentService interface
│   ├── service/impl/       # ContentServiceImpl (business logic)
│   ├── model/              # POJOs for JSON mapping
│   ├── util/               # JsonLoader + CustomException
│   ├── config/             # Swagger, CORS, WebConfig
│   └── PortfolioBackendApplication.java
│
└── src/main/resources/
├── content/            # All JSON files (about, skills, experience...)
├── static/             # (Optional) profile.jpg / resume
├── application.yml
└── banner.txt

```

---

## 🧩 Architecture Overview

```

Frontend (React / HTML)
|
|  fetch()
v
Spring Boot Backend
|
|  loads
v
JSON Content Files  --->  Returned as API responses

```

---

## 🔥 API Endpoints

| Resource      | Method | URL                       |
|---------------|--------|---------------------------|
| About         | GET    | `/api/v1/about`           |
| Skills        | GET    | `/api/v1/skills`          |
| Experience    | GET    | `/api/v1/experience`      |
| Projects      | GET    | `/api/v1/projects`        |
| Education     | GET    | `/api/v1/education`       |
| Contact       | GET    | `/api/v1/contact`         |

---

## 📘 Swagger API Documentation

Once the app is running:

👉 **Swagger UI:**  
```

[http://localhost:8080/swagger-ui.html](http://localhost:8080/swagger-ui.html)

```

👉 **OpenAPI Docs:**  
```

[http://localhost:8080/api-docs](http://localhost:8080/api-docs)

````

---

## 🚀 Running the Application Locally

### **1. Clone the repository**
```bash
git clone https://github.com/adityaraj5200/portfolio.git
cd portfolio
````

### **2. Build the project**

```bash
mvn clean install
```

### **3. Run the Spring Boot application**

```bash
mvn spring-boot:run
```

### **4. Test APIs**

Open your browser or Postman and visit:

```
http://localhost:8080/api/v1/about
```

---

## 🌐 Deployment Guide (Render)

This backend is optimized for free deployment on **Render**.

#### Steps:

1. Create a new Web Service on Render
2. Connect your GitHub repo
3. Set:

   * **Build Command:** `mvn clean install`
   * **Start Command:** `java -jar target/portfolio-backend-1.0.0.jar`
4. Deploy 🎉
5. Note your API base URL for frontend integration

---

## 🎨 Frontend Integration

The frontend (React, HTML, Vite, etc.) will call:

```js
fetch("https://your-backend.onrender.com/api/v1/about")
```

Populate sections dynamically:

* Hero
* About
* Skills
* Experience
* Projects
* Education
* Contact

This keeps your frontend **static + fast**, while still showcasing backend skills.

---

## 📌 Future Enhancements

* Add **contact form** with backend email service
* Add **blog engine** (Markdown → API → frontend)
* Add **rate limiting** for APIs
* Add **Redis caching layer**
* Add **unit tests (JUnit + MockMvc)**

---

## 👨‍💻 Author

**Aditya Raj**
Backend Engineer — Java | Spring Boot | Microservices

* LinkedIn: [https://www.linkedin.com/in/aditya-raj](https://www.linkedin.com/in/aditya-raj)
* GitHub: [https://github.com/aditya-raj](https://github.com/aditya-raj)

---

⭐ If you like this project, consider giving it a **star** on GitHub!
