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
    
    // Course Information Modal
    const courseModal = document.getElementById('courseModal');
    const courseModalTitle = document.getElementById('courseModalTitle');
    const courseModalContent = document.getElementById('courseModalContent');
    
    // Individual Speaker Bio Modal
    const speakerBioModal = document.getElementById('speakerBioModal');
    const speakerBioImage = document.getElementById('speakerBioImage');
    const speakerBioName = document.getElementById('speakerBioName');
    const speakerBioTitle = document.getElementById('speakerBioTitle');
    const speakerBioOrganization = document.getElementById('speakerBioOrganization');
    const speakerBioText = document.getElementById('speakerBioText');
    
    // Speaker Modal (from index page)
    const speakerModal = document.getElementById('speakerModal');
    const modalSpeakerName = document.getElementById('modalSpeakerName');
    const modalSpeakerTitle = document.getElementById('modalSpeakerTitle');
    const modalSpeakerOrganization = document.getElementById('modalSpeakerOrganization');
    const modalSpeakerBio = document.getElementById('modalSpeakerBio');
    const modalSpeakerPhoto = document.querySelector('.speaker-modal-photo');
    const speakerModalClose = document.querySelector('.speaker-modal-close');
    
    // Speaker data (from index page)
    const speakerData = {
        keynote: {
            name: "MaryAnn Tierney",
            title: "Keynote Speaker",
            organization: "Former Acting Deputy Secretary, Department of Homeland Security",
            bio: "<p>MaryAnn spent 15 years with the Federal Emergency Management Agency as the Regional Administrator for FEMA Region 3. In January 2025 she served as the Acting Deputy Secretary of the Department of Homeland Security. MaryAnn served in a variety of roles across FEMA including as the Senior Official Performing the Duties of Deputy Administrator (2025), Acting Deputy Administrator (2021), Acting Regional Administrator for Region 2 (2013), and Associate Administrator for Mission Support (2017).</p><p>In addition to her permanent position, she is a qualified Federal Coordinating Officer (Type 1) and led one of FEMA's five National Incident Management Assistance Teams. She deployed to several Presidentially declared disasters to support survivors and communities and has served in senior coordinating roles for the Department of Homeland Security and National Security Council. MaryAnn has also worked in emergency management in New York City and Philadelphia.</p><p>She has a BA from American University, a MPA from New York University, and has completed the three primary professional military education courses for General and Flag officers. MaryAnn received the DHS Secretary's Outstanding Service Medal in 2021, the Presidential Rank Award, Distinguished Rank in 2022, and the DHS Secretary's Meritorious Service Silver Medal in 2023.</p><p>MaryAnn lives in South Philly with her husband, son, and dog; is an avid runner; and aspires to one day have a cooking show like Ina Garten.</p>",
            image: "https://github.com/MAwadalla04/DLS_website/blob/main/SRC/Headshots/MAT.jpg?raw=true"
        },
        counsel: {
            name: "Sonja Orgias, Esq.", 
            title: "Chief Counsel",
            organization: "New York City Emergency Management",
            bio: "<p>Sonja Orgias has served as the Chief Counsel of New York City Emergency Management since August 2022. Ms. Orgias joined the agency in 2015 as Director of Legal Affairs and was appointed to Deputy Chief Counsel in 2021 to oversee the expansion of the agency's legal operations.</p><p>In her role, Ms. Orgias oversees the Office of the Chief Counsel comprised of three units: Legal Affairs, DAFN Legal, and Records Management. She also provides legal guidance to the Commissioner, First Deputy Commissioner, and other executives.</p><p>As a native Brooklynite who is also a City employee, Ms. Orgias is attuned to the unique way that this city runs; the way that its agencies run; and, the expectations of the public.</p><p>She has overseen emergency legal operations in response to numerous incidents in and outside of NYC, including drafting executive orders for extreme weather events, multiple city-to-city agreements with NYC and other municipalities, drafting emergency contracts valued at more than $600 million for the procurement of goods and services during the COVID-19 response, and licenses needed for City operations during other emergency crises.</p><p>In addition, Ms. Orgias was instrumental in starting, and serving in a leadership role of, the inaugural Equity and Diversity Council at New York Emergency Management. Her work has facilitated discussions and raised issues related to diversity, equity, and inclusion, which are necessary components in addressing community needs during emergencies.</p><p>Prior to joining New York City Emergency Management, Ms. Orgias served as an Administrative Law Judge with the New York City Environmental Control Board – OATH and Assistant Counsel with FDNY. She has a background in bankruptcy, immigration, administrative law, and alternative dispute resolution.</p><p>Ms. Orgias received her Juris Doctor Degree from Hofstra University School of Law and her Bachelor's Degree from Boston University and is a proud Stuyvesant High School alumna. She is a member of the New York State Bar Association Committee on Mass Disaster Response. Ms. Orgias is admitted to practice in the State of New York, the Eastern and Southern Districts of New York, and the Supreme Court of the United States.</p>",
            image: "https://github.com/MAwadalla04/DLS_website/blob/main/SRC/Headshots/SO%20HS.png?raw=true",
            usePhoto: true
        },
        closing: {
            name: "Traci Wheelwright",
            title: "Deputy Chief Counsel",
            organization: "NYC Emergency Management",
            bio: "<p>Traci Wheelwright serves as Deputy Chief Counsel at NYC Emergency Management, where she leads a team of attorneys and professionals in providing strategic legal guidance on emergency response, civil rights, privacy, and procurement law. With over two decades of legal experience, Traci has built a distinguished career across city, state, and federal agencies, including the NYC Department of Transportation, Amtrak, the Long Island Railroad, and Nassau County.</p><p>Her expertise spans rulemaking, litigation, public contracting, and compliance. At NYCEM, she plays a critical role in shaping legal policy, managing document production and preservation efforts, and supporting the agency's emergency activations through legal research, contract development, and interagency coordination.</p><p>Traci is also a passionate mentor and advocate for professional development, having created and led mentorship programs throughout her career. She holds a J.D. from Hofstra University School of Law and an LL.M. Certificate in Real Estate from New York Law School. Her commitment to public service is matched by her global perspective—she is an avid traveler and lifelong learner with a deep appreciation for language and culture.</p>",
            image: "https://github.com/MAwadalla04/DLS_website/blob/main/SRC/Headshots/TW_HS.jpg?raw=true"
        }
    };
    
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
                    image: 'https://github.com/MAwadalla04/DLS_website/blob/main/SRC/Headshots/Aaron%20Friedman%20headshot.jpg?raw=true'
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
                    title: 'Director of AI/ML',
                    organization: 'New York City Office of Technology and Innovation',
                    bio: 'Jiahao Chen, PhD, is the Director of AI/ML at New York City\'s Office of Technology and Innovation. He oversees the implementation of NYC\'s AI Action Plan, the city\'s roadmap for responsible AI innovation. His work includes publishing guidance on the use of AI by city agencies, writing technical reference materials on classifying AI systems and AI risks, creating training materials for city staff on AI basics, developing the city\'s AI risk assessment process, and conducting public listening sessions on the city\'s use of AI. Jiahao holds a PhD in chemical physics from the University of Illinois at Urbana-Champaign. He was formerly research faculty at MIT working on scientific big data, a Senior Manager of Data Science, an Executive Director at JPMorgan AI Research, and the CTO and co-founder of Parity Technologies, a startup focused on algorithmic auditing solutions. Jiahao continues to be active in academic AI research, including serving as Ethics Chair for the Conference on Neural Information Processing Systems (NeurIPS), the world\'s largest academic AI conference. Jiahao was recently invited to speak at the American Bar Association\'s Annual Section of Labor & Employment Law Conference for his work on algorithmic auditing.',
                    image: 'https://github.com/MAwadalla04/DLS_website/blob/main/SRC/Headshots/CHEN_HS.png?raw=true'
                },
                {
                    name: 'Robert Wilson',
                    title: 'Director of Legal Affairs and Agency Privacy Officer',
                    organization: 'NYC Emergency Management',
                    bio: 'Robert Wilson is the Director of Legal Affairs and Agency Privacy Officer for New York City Emergency Management. During emergency operations he serves as an Emergency Support Function Coordinator for transportation, utility, and infrastructure matters and is a member of the Planning Section. With a decade of experience in the field of Emergency Management, he has been involved in numerous operations ranging from smaller localized incidents to the global COVID-19 Pandemic. He also serves as a member of the Artificial Intelligence Committee for New York City Emergency Management.',
                    image: 'https://github.com/MAwadalla04/DLS_website/blob/main/SRC/Headshots/Robert_Wilson_HS.JPG?raw=true'
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
                    image: 'https://github.com/MAwadalla04/DLS_website/blob/main/SRC/Headshots/Denisse_Mira_HS.png?raw=true'
                },
                {
                    name: 'Joshua Goldfein',
                    title: 'Staff Attorney, Homeless Rights Project',
                    organization: 'The Legal Aid Society',
                    bio: 'Joshua Goldfein is a Staff Attorney in The Legal Aid Society\'s Homeless Rights Project, where he represents homeless single adults and families in individual and group actions.',
                    image: 'https://github.com/MAwadalla04/DLS_website/blob/main/SRC/Headshots/Joshua_Goldfein_HS.png?raw=true'
                },
                {
                    name: 'Michael Ross',
                    title: 'Principal, Law Offices of Michael S. Ross',
                    organization: 'Adjunct Professor, Cardozo & Brooklyn Law Schools',
                    bio: 'Michael S. Ross is the principal of the Law Offices of Michael S. Ross, where he concentrates his practice in attorney ethics and professional responsibility matters.',
                    image: 'https://github.com/MAwadalla04/DLS_website/blob/main/SRC/Headshots/Ross%20headshot.jpg?raw=true'
                },
                {
                    name: 'Traci Wheelwright',
                    title: 'Deputy Chief Counsel',
                    organization: 'NYC Emergency Management',
                    bio: 'Traci Wheelwright serves as Deputy Chief Counsel at NYC Emergency Management, where she leads a team of attorneys and professionals in providing strategic legal guidance on emergency response, civil rights, privacy, and procurement law. With over two decades of legal experience, Traci has built a distinguished career across city, state, and federal agencies, including the NYC Department of Transportation, Amtrak, the Long Island Railroad, and Nassau County. Her expertise spans rulemaking, litigation, public contracting, and compliance. At NYCEM, she plays a critical role in shaping legal policy, managing document production and preservation efforts, and supporting the agency\'s emergency activations through legal research, contract development, and interagency coordination. Traci is also a passionate mentor and advocate for professional development, having created and led mentorship programs throughout her career. She holds a J.D. from Hofstra University School of Law and an LL.M. Certificate in Real Estate from New York Law School. Her commitment to public service is matched by her global perspective—she is an avid traveler and lifelong learner with a deep appreciation for language and culture.',
                    image: 'https://github.com/MAwadalla04/DLS_website/blob/main/SRC/Headshots/TW_HS.jpg?raw=true'
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
                    title: 'Senior Agency Counsel and FOIL Officer',
                    organization: 'NYC Emergency Management',
                    bio: 'Rob DeVoogd is Senior Agency Counsel and FOIL officer at New York City Emergency Management. He has been with the agency for 8 years.',
                    image: 'https://github.com/MAwadalla04/DLS_website/blob/main/SRC/Headshots/Rob%20DeVoogd%20Headshot.jpg?raw=true'
                }
            ]
        },
        'disabilities-panel': {
            title: 'Invisible Disabilities and Disaster Law Panel',
            speakers: [
                {
                    name: 'Dennis Boyd',
                    title: 'Attorney, Office of Chief Counsel',
                    organization: 'NYC Department of Emergency Management',
                    bio: 'Dennis Boyd grew up in New York City and attended Dartmouth College and Boston University School of Law. He works in the Office of Chief Counsel of New York City\'s Department of Emergency Management (NYCEM), where he oversees the Disability and Access and Functional Needs program. This entails a focus on agency compliance with human rights laws for people who tend to be most adversely affected during large scale emergencies, including people with disabilities, the elderly, children, non-English speakers, the unhoused and others. He has thirty-eight years\' experience handling trials and appeals, conducting trainings, lobbying and advocating for low-income New Yorkers, with the last thirty of those years focused primarily on the rights of people with disabilities. Before joining the City, he was with a local disability Protection and Advocacy law firm, trying cases and developing policy around de-institutionalization, access to housing, health care and public accommodations and on the implementation of the federal ADA, the Help America Vote Act, and on NYC Building Code revisions. He has also worked with individuals seeking accommodations on college and graduate school admission tests and on professional licensing exams, as well as in the areas of housing discrimination, elder law, social security benefits and estate planning.',
                    image: 'https://github.com/MAwadalla04/DLS_website/blob/main/SRC/Headshots/Dennis_Boyd\'s_HS.jpg?raw=true'
                },
                {
                    name: 'Dennis Debbaudt',
                    title: 'Invisible Disabilities & Disaster Law Expert',
                    organization: 'Organization TBD',
                    bio: 'Expert in addressing the needs of individuals with invisible disabilities in emergency planning and disaster response.',
                    image: 'https://github.com/MAwadalla04/DLS_website/blob/main/SRC/Headshots/Debbaudt%20Headshot.jpg?raw=true'
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
                    title: 'New York State Assemblymember',
                    organization: '52nd District',
                    bio: 'New York Assemblymember Jo Anne Simon has been fighting for the inclusion of people with disabilities her entire career. Through her Brooklyn, NY based law firm she has represented people with disabilities across the country. A graduate of Fordham University School of Law, Ms. Simon is known for her expertise on the Americans with Disabilities Act (ADA), particularly as it relates to higher education, high stakes testing and professional licensing bodies. She acted as lead counsel for the successful plaintiff in the seminal case of Bartlett v. New York State Board of Law Examiners. Ms. Simon was also an adjunct Associate Professor at Fordham Law School for nearly 20 years and served as staff attorney at Hofstra Law School\'s Disabilities Law Clinic from 1992-1996. Ms. Simon testified before the U.S. Senate in support of the ADA Amendments Act in 2008. She was instrumental in securing passage of California\'s AB-2122, advising the Assembly and testifying before the Senate in support of the bill to ban "flagging" the scores of test takers who received disability accommodations on the LSAT. Her work was also instrumental in the U.S. Department of Justice\'s decision to bring pattern and practice claims against the Law School Admission Council in DFEH, et al v. LSAC. Disability rights advocacy precedes her career in the law. Ms. Simon holds an MA in the Education of the Deaf from Gallaudet University and a BA Speech pathology from Iona College. She has worked as a teacher of deaf and deaf-blind students, as a postsecondary disability services provider and as a certified sign language interpreter for 20 years. She is a founding member of the Association on Higher Education And Disability (AHEAD). She regularly advises student with disabilities, their parents and school administrators and regularly associates with colleagues around the country in pursuing disability rights matters. Long active in civic affairs, in 2014 Ms. Simon was elected to the N.Y.S. Assembly for the 52nd District where she has led on issues such as the rights of women, children, and the elderly, the reduction of gun violence, environmental justice and resiliency and the rights of individuals with disabilities. She created and has organized Dyslexia Awareness Days at the New York State Capital for 10 years, passed a landscape shifting bill protecting rights of students with dyslexia and related learning disabilities and serves on the Steering Committee of the State Action Plan on Literacy. She has worked to increase the number of women in politics and government. She chairs the Assembly\'s Committee on Mental Health.',
                    image: 'https://github.com/MAwadalla04/DLS_website/blob/main/SRC/Headshots/JAS_HS.jpg?raw=true'
                },
                {
                    name: 'Kristine Hoffman',
                    title: 'Deputy Counsel',
                    organization: 'NYS Division of Homeland Security and Emergency Services',
                    bio: 'Kristine Hoffman is a Deputy Counsel for the NYS Division of Homeland Security and Emergency Services with 23 years of experience as an emergency management attorney. She has extensive expertise in law and policy across preparedness, response, recovery, and hazard mitigation portfolios. During her career as state legal counsel, she has advised and provided guidance to the Executive Chamber, state agencies, municipalities, and emergency management partners. During her tenure at DHSES she has authored portions of Executive Law Article 2-B, including the Intrastate Mutual Aid Program legislation, has trained county executives statewide, and co-authored more 200 State Disaster Emergency Executive Orders during major disasters. She has assisted in securing more than 30 Presidential major disaster declarations, developed FEMA policy interpretations benefiting New York, and assisted in the advancement of multimillion-dollar resilience projects. Prior to joining DHSES, Ms. Hoffman worked as attorney for the NYS Department of Health\'s Office of Health Emergency Preparedness, where she helped craft isolation and quarantine protocols and first-in-the-nation Alternate Care Site guidelines. She is a graduate of Siena College and Albany Law School.',
                    image: 'https://github.com/MAwadalla04/DLS_website/blob/main/SRC/Headshots/Hoffman_HS.jpeg?raw=true'
                },
                {
                    name: 'Saiena Shafiezadeh',
                    title: 'Invisible Disabilities & Disaster Law Expert',
                    organization: 'Organization TBD',
                    bio: 'Expert in addressing the needs of individuals with invisible disabilities in emergency planning and disaster response.',
                    image: 'https://github.com/MAwadalla04/DLS_website/blob/main/SRC/Headshots/Shafiezadeh%20Headshot.jpg?raw=true'
                }
            ]
        }
    };
    
    // Course information data
    const courseData = {
        'ethics-course': {
            title: 'Ethics in Disaster Law - Course Information',
            content: `
                <div class="cle-overview">
                    <h4>CLE Overview:</h4>
                    <p>This CLE explores the volatile landscape of ethics attorneys must navigate in their legal practice during and after emergencies or disasters — particularly in a world where emergency support systems (like FEMA) are underfunded or dismantled. Participants will examine their ethical obligations to clients, communities, and the court system while facing conflicting demands, unreliable systems, vulnerable populations, and legal uncertainties created by federal financial withdrawal.</p>
                </div>
                <h4>Learning Objectives:</h4>
                <ul>
                    <li>Understand ethical obligations in disaster and emergency situations</li>
                    <li>Navigate conflicts between client needs and community resources</li>
                    <li>Address ethical challenges when support systems are unreliable</li>
                    <li>Examine professional responsibility in vulnerable population contexts</li>
                    <li>Develop strategies for ethical decision-making under uncertainty</li>
                </ul>
                <h4>Course Details:</h4>
                <p><strong>Duration:</strong> 1.5 hours</p>
                <p><strong>CLE Credits:</strong> 1.5 Ethics credits (pending approval)</p>
                <p><strong>Format:</strong> Interactive panel discussion with Q&A</p>
                <p><strong>Target Audience:</strong> Attorneys, legal professionals, and emergency management personnel</p>
            `
        },
        'disabilities-course': {
            title: 'Invisible Disabilities and Disaster Law - Course Information',
            content: `
                <div class="cle-overview">
                    <h4>CLE Overview:</h4>
                    <p>This course examines the legal protections and accommodations needed for individuals with invisible disabilities during disasters and emergencies. Participants will explore how to ensure equitable access to emergency services, disaster relief, and legal protections for those with conditions that may not be immediately apparent but significantly impact their ability to navigate crisis situations.</p>
                </div>
                <h4>Learning Objectives:</h4>
                <ul>
                    <li>Understand legal protections for individuals with invisible disabilities</li>
                    <li>Learn about accommodation requirements in emergency situations</li>
                    <li>Explore intersection of disability law and disaster response</li>
                    <li>Develop strategies for inclusive emergency planning</li>
                    <li>Address barriers to accessing disaster relief services</li>
                </ul>
                <h4>Course Details:</h4>
                <p><strong>Duration:</strong> 1.5 hours</p>
                <p><strong>CLE Credits:</strong> 1.5 General credits (pending approval)</p>
                <p><strong>Format:</strong> Interactive panel discussion with Q&A</p>
                <p><strong>Target Audience:</strong> Attorneys, legal professionals, and emergency management personnel</p>
            `
        },
        'foil-course': {
            title: 'FOIL and Government Transparency - Course Information',
            content: `
                <div class="cle-overview">
                    <h4>CLE Overview:</h4>
                    <p>This course explores Freedom of Information Law (FOIL) applications in disaster and emergency situations. Participants will learn about public access to emergency management information, government transparency requirements during crises, and the balance between public disclosure and operational security in emergency response.</p>
                </div>
                <h4>Learning Objectives:</h4>
                <ul>
                    <li>Understand FOIL requirements in emergency contexts</li>
                    <li>Learn about exemptions and limitations during disasters</li>
                    <li>Explore public access to emergency management records</li>
                    <li>Develop strategies for effective FOIL requests in crisis situations</li>
                    <li>Address transparency vs. security considerations</li>
                </ul>
                <h4>Course Details:</h4>
                <p><strong>Duration:</strong> 1.5 hours</p>
                <p><strong>CLE Credits:</strong> 1.5 General credits (pending approval)</p>
                <p><strong>Format:</strong> Interactive panel discussion with Q&A</p>
                <p><strong>Target Audience:</strong> Attorneys, legal professionals, and emergency management personnel</p>
            `
        },
        'ai-course': {
            title: 'AI in Disaster Law - Course Information',
            content: `
                <div class="cle-overview">
                    <h4>CLE Overview:</h4>
                    <p>This course examines the intersection of artificial intelligence and disaster law, including privacy considerations, automated decision-making in emergency situations, and AI applications in emergency management. Participants will explore legal frameworks for AI use in crisis response and the ethical implications of automated systems in disaster scenarios.</p>
                </div>
                <h4>Learning Objectives:</h4>
                <ul>
                    <li>Understand AI applications in emergency management</li>
                    <li>Explore privacy and data protection issues</li>
                    <li>Learn about automated decision-making in crisis situations</li>
                    <li>Examine legal frameworks for AI in disaster response</li>
                    <li>Address ethical considerations of AI in emergency contexts</li>
                </ul>
                <h4>Course Details:</h4>
                <p><strong>Duration:</strong> 1.5 hours</p>
                <p><strong>CLE Credits:</strong> 1.5 General credits (pending approval)</p>
                <p><strong>Format:</strong> Interactive panel discussion with Q&A</p>
                <p><strong>Target Audience:</strong> Attorneys, legal professionals, and emergency management personnel</p>
            `
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
                        
                        // Add specific class for Robert DeVoogd's image
                        const imageClass = speaker.name === 'Rob DeVoogd' ? 'robert-devoogd-img' : '';
                        
                        speakerCard.innerHTML = `
                            <img src="${speaker.image}" alt="${speaker.name} headshot" class="${imageClass}">
                            <h4>${speaker.name}</h4>
                            <p class="speaker-title">${speaker.title}</p>
                            <p class="speaker-organization">${speaker.organization}</p>
                        `;
                        
                        // Add click event to show individual bio
                        speakerCard.addEventListener('click', function() {
                            showSpeakerBio(speaker);
                        });
                        
                        panelModalSpeakers.appendChild(speakerCard);
                    });
                    
                    panelModal.style.display = 'block';
                }
            });
        });
    }
    
    // Course Information Modal Functionality
    const clickableCourses = document.querySelectorAll('.clickable-course');
    if (clickableCourses.length > 0) {
        clickableCourses.forEach(course => {
            course.addEventListener('click', function() {
                const courseId = this.getAttribute('data-course');
                const course = courseData[courseId];
                
                if (course) {
                    courseModalTitle.textContent = course.title;
                    courseModalContent.innerHTML = course.content;
                    courseModal.style.display = 'block';
                }
            });
        });
    }
    
    // Function to show individual speaker bio
    function showSpeakerBio(speaker) {
        speakerBioImage.src = speaker.image;
        speakerBioImage.alt = speaker.name + ' headshot';
        
        // Add specific class for Robert DeVoogd's image
        if (speaker.name === 'Rob DeVoogd') {
            speakerBioImage.className = 'robert-devoogd-bio-img';
        } else {
            speakerBioImage.className = '';
        }
        
        speakerBioName.textContent = speaker.name;
        speakerBioTitle.textContent = speaker.title;
        speakerBioOrganization.textContent = speaker.organization;
        speakerBioText.textContent = speaker.bio;
        speakerBioModal.style.display = 'block';
    }
    
    // Function to open speaker modal (from index page)
    function openSpeakerModal(speakerType) {
        const speaker = speakerData[speakerType];
        
        if (speaker) {
            modalSpeakerName.textContent = speaker.name;
            modalSpeakerTitle.textContent = speaker.title;
            modalSpeakerOrganization.textContent = speaker.organization;
            modalSpeakerBio.innerHTML = speaker.bio;
            
            // Set photo
            if (speaker.image) {
                // Check if image is a PDF file
                if (speaker.image.toLowerCase().endsWith('.pdf')) {
                    // For PDF files, we'll use a placeholder with the person's initials
                    const nameParts = speaker.name.split(' ');
                    let initials = '';
                    if (nameParts.length >= 2) {
                        initials = nameParts[0].charAt(0) + nameParts[1].charAt(0);
                    } else {
                        initials = nameParts[0].charAt(0);
                    }
                    modalSpeakerPhoto.innerHTML = `<div class="speaker-initials">${initials}</div>`;
                } else {
                    modalSpeakerPhoto.innerHTML = `<img src="${speaker.image}" alt="${speaker.name}">`;
                }
            } else {
                modalSpeakerPhoto.innerHTML = '<i class="fas fa-user"></i>';
            }
            
            speakerModal.style.display = 'block';
        }
    }
    
    // Add event listeners to clickable speaker names
    const clickableSpeakers = document.querySelectorAll('.clickable-speaker');
    clickableSpeakers.forEach(speaker => {
        speaker.addEventListener('click', function() {
            const speakerType = this.getAttribute('data-speaker');
            openSpeakerModal(speakerType);
        });
    });
    
    // Close modal functionality
    const closeBtns = document.querySelectorAll('.close');
    closeBtns.forEach(closeBtn => {
        closeBtn.addEventListener('click', function() {
            panelModal.style.display = 'none';
            speakerBioModal.style.display = 'none';
            speakerModal.style.display = 'none';
            courseModal.style.display = 'none';
        });
    });
    
    // Close modal when clicking outside of it
    if (panelModal) {
        window.addEventListener('click', function(event) {
            if (event.target === panelModal) {
                panelModal.style.display = 'none';
            }
            if (event.target === speakerBioModal) {
                speakerBioModal.style.display = 'none';
            }
            if (event.target === speakerModal) {
                speakerModal.style.display = 'none';
            }
            if (event.target === courseModal) {
                courseModal.style.display = 'none';
            }
        });
    }
});


