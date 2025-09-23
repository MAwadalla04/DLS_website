document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
    
    // Agenda Tabs Functionality (if needed)
    const agendaTabs = document.querySelectorAll('.agenda-tabs .tab-btn');
    const daySchedules = document.querySelectorAll('.day-schedule');
    
    if (agendaTabs.length > 0) {
        agendaTabs.forEach(tab => {
            tab.addEventListener('click', function() {
                // Remove active class from all tabs
                agendaTabs.forEach(tab => tab.classList.remove('active'));
                
                // Add active class to clicked tab
                this.classList.add('active');
                
                // Get the schedule to show
                const scheduleId = this.getAttribute('data-schedule');
                
                // Hide all schedules
                daySchedules.forEach(schedule => schedule.classList.remove('active'));
                
                // Show the selected schedule
                const selectedSchedule = document.getElementById(scheduleId);
                if (selectedSchedule) {
                    selectedSchedule.classList.add('active');
                }
            });
        });
    }
    
    // Panel Modal Functionality
    const viewPanelBtns = document.querySelectorAll('.view-panel-btn');
    const panelModal = document.getElementById('panelModal');
    const panelModalTitle = document.getElementById('panelModalTitle');
    const panelModalSpeakers = document.getElementById('panelModalSpeakers');
    const closeBtn = document.querySelector('.close');
    
    // Panel data
    const panelData = {
        'ai-panel': {
            title: 'AI in Disaster Law Panel',
            speakers: [
                {
                    name: 'Aaron Friedman',
                    title: 'Deputy Chief Privacy Officer',
                    organization: 'NYC Office of Information Privacy',
                    bio: 'Aaron Friedman is Deputy Chief Privacy Officer, has been part of the NYC Office of Information Privacy since 2019. He counsels agencies and the Chief Privacy Officer on privacy issues and teaches privacy law at Fordham Law School.',
                    image: 'SRC/Headshots/Aaron Friedman headshot.jpg'
                },
                {
                    name: 'Ginger Armbruster',
                    title: 'AI & Disaster Law Expert',
                    organization: 'Organization TBD',
                    bio: 'Expert in artificial intelligence applications in disaster law and emergency management.',
                    image: 'SRC/Headshots/Ginger Armbruster headshot.jpg'
                },
                {
                    name: 'Jiahao Chen',
                    title: 'AI & Disaster Law Expert',
                    organization: 'Organization TBD',
                    bio: 'Expert in artificial intelligence applications in disaster law and emergency management.',
                    image: 'SRC/Headshots/Jiahao Chen headshot.jpg'
                },
                {
                    name: 'Robert Wilson',
                    title: 'AI & Disaster Law Expert',
                    organization: 'Organization TBD',
                    bio: 'Expert in artificial intelligence applications in disaster law and emergency management.',
                    image: 'SRC/Headshots/Robert Wilson headshot.jpg'
                },
                {
                    name: 'Sarah Carrier',
                    title: 'AI & Disaster Law Expert',
                    organization: 'Organization TBD',
                    bio: 'Expert in artificial intelligence applications in disaster law and emergency management.',
                    image: 'SRC/Headshots/Sarah Carrier headshot.jpg'
                }
            ]
        },
        'ethics-panel': {
            title: 'Ethics in Disaster Law Panel',
            speakers: [
                {
                    name: 'Denisse Mira',
                    title: 'Senior Counsel, Ethics & Compliance Division',
                    organization: 'New York City Law Department',
                    bio: 'Denisse Mira is a Senior Counsel in the Ethics and Compliance Division at the New York City Law Department. Prior to joining the Ethics and Compliance Division, Denisse was a Vice President of Global Financial Crimes Compliance for a financial institution.',
                    image: 'SRC/Headshots/Denisse_Mira_HS.png'
                },
                {
                    name: 'Joshua Goldfein',
                    title: 'Staff Attorney, Homeless Rights Project',
                    organization: 'The Legal Aid Society',
                    bio: 'Joshua Goldfein is a Staff Attorney in The Legal Aid Society\'s Homeless Rights Project, where he represents homeless single adults and families in individual and group actions.',
                    image: 'SRC/Headshots/Joshua_Goldfein_HS.png'
                },
                {
                    name: 'Michael Ross',
                    title: 'Principal, Law Offices of Michael S. Ross',
                    organization: 'Adjunct Professor, Cardozo & Brooklyn Law Schools',
                    bio: 'Michael S. Ross is the principal of the Law Offices of Michael S. Ross, where he concentrates his practice in attorney ethics and professional responsibility matters.',
                    image: 'SRC/Headshots/Ross headshot.jpg'
                },
                {
                    name: 'Traci Wheelwright',
                    title: 'Ethics & Disaster Law Expert',
                    organization: 'Organization TBD',
                    bio: 'Expert in ethical frameworks and decision-making in disaster law and emergency management.',
                    image: 'SRC/Headshots/Traci Wheelwright headshot.jpg'
                }
            ]
        },
        'foil-panel': {
            title: 'FOIL and Government Transparency Panel',
            speakers: [
                {
                    name: 'Arya Sundaram',
                    title: 'FOIL & Government Transparency Expert',
                    organization: 'Organization TBD',
                    bio: 'Expert in Freedom of Information Law and government transparency in emergency situations.',
                    image: 'SRC/Headshots/Arya Sundaram headshot.jpg'
                },
                {
                    name: 'Elisa Lee',
                    title: 'FOIL & Government Transparency Expert',
                    organization: 'Organization TBD',
                    bio: 'Expert in Freedom of Information Law and government transparency in emergency situations.',
                    image: 'SRC/Headshots/Elisa Lee headshot.jpg'
                },
                {
                    name: 'Gwynne Hogan',
                    title: 'FOIL & Government Transparency Expert',
                    organization: 'Organization TBD',
                    bio: 'Expert in Freedom of Information Law and government transparency in emergency situations.',
                    image: 'SRC/Headshots/Gwynne Hogan headshot.jpg'
                },
                {
                    name: 'Rob DeVoogd',
                    title: 'FOIL & Government Transparency Expert',
                    organization: 'Organization TBD',
                    bio: 'Expert in Freedom of Information Law and government transparency in emergency situations.',
                    image: 'SRC/Headshots/Rob DeVoogd headshot.jpg'
                }
            ]
        },
        'disabilities-panel': {
            title: 'Invisible Disabilities and Disaster Law Panel',
            speakers: [
                {
                    name: 'Dennis Boyd',
                    title: 'Invisible Disabilities & Disaster Law Expert',
                    organization: 'Organization TBD',
                    bio: 'Expert in addressing the needs of individuals with invisible disabilities in emergency planning and disaster response.',
                    image: 'SRC/Headshots/Dennis Boyd headshot.jpg'
                },
                {
                    name: 'Dennis Debbaudt',
                    title: 'Invisible Disabilities & Disaster Law Expert',
                    organization: 'Organization TBD',
                    bio: 'Expert in addressing the needs of individuals with invisible disabilities in emergency planning and disaster response.',
                    image: 'SRC/Headshots/Dennis Debbaudt headshot.jpg'
                },
                {
                    name: 'Howard Rosenblum',
                    title: 'Invisible Disabilities & Disaster Law Expert',
                    organization: 'Organization TBD',
                    bio: 'Expert in addressing the needs of individuals with invisible disabilities in emergency planning and disaster response.',
                    image: 'SRC/Headshots/Howard Rosenblum headshot.jpg'
                },
                {
                    name: 'Jo Anne Simon',
                    title: 'Invisible Disabilities & Disaster Law Expert',
                    organization: 'Organization TBD',
                    bio: 'Expert in addressing the needs of individuals with invisible disabilities in emergency planning and disaster response.',
                    image: 'SRC/Headshots/Jo Anne Simon headshot.jpg'
                },
                {
                    name: 'Kristine Hoffman',
                    title: 'Invisible Disabilities & Disaster Law Expert',
                    organization: 'Organization TBD',
                    bio: 'Expert in addressing the needs of individuals with invisible disabilities in emergency planning and disaster response.',
                    image: 'SRC/Headshots/Kristine Hoffman headshot.jpg'
                },
                {
                    name: 'Saiena Shafiezadeh',
                    title: 'Invisible Disabilities & Disaster Law Expert',
                    organization: 'Organization TBD',
                    bio: 'Expert in addressing the needs of individuals with invisible disabilities in emergency planning and disaster response.',
                    image: 'SRC/Headshots/Saiena Shafiezadeh headshot.jpg'
                }
            ]
        }
    };
    
    if (viewPanelBtns.length > 0) {
        viewPanelBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                const panelId = this.getAttribute('data-panel');
                const panel = panelData[panelId];
                
                if (panel) {
                    panelModalTitle.textContent = panel.title;
                    panelModalSpeakers.innerHTML = '';
                    
                    panel.speakers.forEach(speaker => {
                        const speakerCard = document.createElement('div');
                        speakerCard.className = 'panel-speaker-card';
                        speakerCard.innerHTML = `
                            <img src="${speaker.image}" alt="${speaker.name} headshot">
                            <h4>${speaker.name}</h4>
                            <p class="speaker-title">${speaker.title}</p>
                            <p class="speaker-organization">${speaker.organization}</p>
                            <p class="speaker-bio">${speaker.bio}</p>
                        `;
                        panelModalSpeakers.appendChild(speakerCard);
                    });
                    
                    panelModal.style.display = 'block';
                }
            });
        });
    }
    
    // Close modal functionality
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            panelModal.style.display = 'none';
        });
    }
    
    // Close modal when clicking outside of it
    if (panelModal) {
        window.addEventListener('click', function(event) {
            if (event.target === panelModal) {
                panelModal.style.display = 'none';
            }
        });
    }
});


