document.addEventListener('DOMContentLoaded', function () {
    const caseStudies = [
        {
            title: 'Data cleaning in PostgreSQL',
            description: 'In this project, we take take raw housing data and transform it in SQL server to make it usable for analysis.',
            image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
            gitLink: 'https://github.com/titidollar/portfolioProjects.git'
        },
        {
            title: 'Machine learning project - CIBR (Content-Based Image Retrieval System)',
            description: 'This project implements a CBIR (Content-Based Image Retrieval) system that uses deep neural networks (VGG16, ResNet50, InceptionV3)' + 
                          ' to extract image features, followed by K-Means clustering, and a user interface for visual search.',
            image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
            gitLink: 'https://github.com/titidollar/project-CIBR.git'
        },
        {
            title: 'Exploratory Analysis and Data Modeling ',
            description: 'This project involves exploring and modeling two distinct datasets to perform' +
            ' a comprehensive data mining process, inspired by methodologies such as CRISP-DM or the KDD process.',
            image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
            gitLink: 'https://github.com/titidollar/exploratoryAnalysis.git'
        },
        {
            title: 'Online practice test platform',
            description: 'This project provides learners with an interactive platform to practice and assess their knowledge' +
            ' across different subjects of the school curriculum. It simulates real test conditions, helping students strengthen ' + 
            ' their understanding, track progress, and build confidence in preparation for exams.',
            image: 'premium_photo-1661333596510-33d60b54ad80.jpg',
            gitLink: 'https://suku.cm'
        },
        {
            title: 'Sale of Pre-Owned Japanese Cars',
            description: 'This project involves the sale of Japanese cars, covering the entire process from the online listing' +
            ' on the website to the delivery of the vehicle to the customer’s location.',
            image: '7tmuBl3EqoFKnygiawwpjq-3752bdeb80f2f64244c74cb2ebf48a36-beliebte-modelle-1100.jpg',
            gitLink: 'https://ichinomiyamotors.jp/'
        },
    ];

    const clients = [
        { name: 'ICHINOMIYA MOTORS', logo: 'logo.829413c3.png' },
        { name: 'Port Autonome de Douala', logo: 'port-autonome-de-douala-logo-png_seeklogo-440536.png' },
        { name: 'Desjardins', logo: 'img.icons8.png' },
        { name: 'SUKU', logo: 'sukuLogo01.82346b79.png' }
    ];

    const testimonials = [
        {     
           quote: 'Thierry consistently brings innovation, experience and dedication to every project. His contributions have been essential to our company’s success.',
           author: 'Rodrigue Lagoue, CEO of LAO'
        },
        {
           quote: 'Working with Thierry has been a great experience. He is reliable, collaborative, hardworker and always delivers on time.',
           author: 'Tchokonte Eugene, Colleague and Product Owner of LAO'
        }
    ];

    const caseStudiesContainer = document.querySelector('#case-studies .row');
    caseStudies.forEach(project => {
    const projectCard = `
        <div class="col-md-4 mb-4">
            <div class="card">
                <img src="${project.image}" class="card-img-top" alt="${project.title}">
                <div class="card-body">
                    <h5 class="card-title">${project.title}</h5>
                    <p class="card-text">${project.description}</p>
                    <a href="${project.gitLink}" class="btn btn-primary" target="_blank">View Project</a>
                </div>
            </div>
        </div>
    `;
    caseStudiesContainer.innerHTML += projectCard;
});
    
    const clientsContainer = document.querySelector('#clients .row');
    clients.forEach(client => {
        const clientLogo = `
            <div class="col-md-3 col-6 mb-4 text-center">
                <img src="${client.logo}" alt="${client.name}" class="client-logo">
                 <p class="mt-2">${client.name}</p>
            </div>
        `;
        clientsContainer.innerHTML += clientLogo;
    });

    const testimonialsContainer = document.querySelector('#testimonials .row');
    testimonials.forEach(testimonial => {
        const testimonialCard = `
            <div class="col-md-6 mb-4">
                <div class="card">
                    <div class="card-body">
                        <p class="card-text">"${testimonial.quote}"</p>
                        <footer class="blockquote-footer">${testimonial.author}</footer>
                    </div>
                </div>
            </div>
        `;
        testimonialsContainer.innerHTML += testimonialCard;
    });

     // Handle email and phone reveal
    const emailLink = document.getElementById('show-email');
    const phoneLink = document.getElementById('show-phone');
    const emailDiv = document.getElementById('my-email');
    const phoneDiv = document.getElementById('phone');

    if (emailLink && emailDiv) {
        emailLink.addEventListener('click', function (e) {
            e.preventDefault();
            emailDiv.classList.toggle('d-none');
        });
    }

    if (phoneLink && phoneDiv) {
        phoneLink.addEventListener('click', function (e) {
            e.preventDefault();
            phoneDiv.classList.toggle('d-none');
        });
    }


    // === EmailJS Configuration ===
    const SERVICE_ID = "service_lnrv3g9"; // Remplace par ton vrai ID
    const TEMPLATE_ID = "template_cpwcd9g";
    const PUBLIC_KEY = "IH0Mh0kqHJe4R79de";

    if (typeof emailjs !== 'undefined') {
        emailjs.init(PUBLIC_KEY);

        const form = document.getElementById('contact-form');
        if (form) {
            form.addEventListener('submit', function (e) {
                e.preventDefault();

                const templateParams = {
                    user_name: document.getElementById('user-name').value,
                    user_email: document.getElementById('user-email').value,
                    message: document.getElementById('user-message').value,
                    reply_to: document.getElementById('user-email').value
                };

                console.log("Nom :", document.getElementById('user-name').value);
                console.log("Email :", document.getElementById('user-email').value);
                console.log("Message :", document.getElementById('user-message').value);

                emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams)
                    .then(function (response) {
                        alert("Message envoyé avec succès !");
                        form.reset();
                    }, function (error) {
                        alert("Erreur lors de l'envoi du message : " + error.text);
                    });
            });
        }
    } else {
        console.error("EmailJS n’est pas chargé correctement.");
    }
});





