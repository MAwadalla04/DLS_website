document.addEventListener('DOMContentLoaded', function() {
    // Calendar functionality - simple .ics file download
    const addToCalendarLink = document.getElementById('add-to-calendar');
    
    if (addToCalendarLink) {
        addToCalendarLink.addEventListener('click', function(e) {
            e.preventDefault();
            createCalendarFile();
        });
    }

    function createCalendarFile() {
        // Event details
        const eventTitle = 'Disaster Law Symposium';
        const eventDescription = 'Law in Crisis: Building Capacity, Compliance, and Community in Emergency Management';
        const eventLocation = 'Brooklyn Law School';
        const eventStartDate = '20251105T090000'; // Format: YYYYMMDDTHHMMSS
        const eventEndDate = '20251105T170000';   // Assuming it's an all-day event
        
        // Create an iCal file that works with any calendar app
        const icsContent = 'BEGIN:VCALENDAR\n' +
            'VERSION:2.0\n' +
            'BEGIN:VEVENT\n' +
            'URL:' + window.location.href + '\n' +
            'DTSTART:' + eventStartDate + '\n' +
            'DTEND:' + eventEndDate + '\n' +
            'SUMMARY:' + eventTitle + '\n' +
            'DESCRIPTION:' + eventDescription + '\n' +
            'LOCATION:' + eventLocation + '\n' +
            'END:VEVENT\n' +
            'END:VCALENDAR';
        
        // Create and download the file
        const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'disaster_law_symposium.ics';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Speaker data
    const speakerData = {
        keynote: {
            name: "TBD",
            title: "Keynote Speaker",
            organization: "To Be Announced",
            bio: "Our distinguished keynote speaker will be announced soon. This prominent legal expert will provide insights into the evolving landscape of disaster law and emergency management. Please check back for updates on our keynote presenter who will set the tone for this important symposium.",
            image: null
        },
        counsel: {
            name: "Sonja Orgias, Esq.", 
            title: "Chief Counsel",
            organization: "New York City Emergency Management",
            bio: "<p>Sonja Orgias has served as the Chief Counsel of New York City Emergency Management since August 2022. Ms. Orgias joined the agency in 2015 as Director of Legal Affairs and was appointed to Deputy Chief Counsel in 2021 to oversee the expansion of the agency's legal operations.</p><p>In her role, Ms. Orgias oversees the Office of the Chief Counsel comprised of three units: Legal Affairs, DAFN Legal, and Records Management. She also provides legal guidance to the Commissioner, First Deputy Commissioner, and other executives.</p><p>As a native Brooklynite who is also a City employee, Ms. Orgias is attuned to the unique way that this city runs; the way that its agencies run; and, the expectations of the public.</p><p>She has overseen emergency legal operations in response to numerous incidents in and outside of NYC, including drafting executive orders for extreme weather events, multiple city-to-city agreements with NYC and other municipalities, drafting emergency contracts valued at more than $600 million for the procurement of goods and services during the COVID-19 response, and licenses needed for City operations during other emergency crises.</p><p>In addition, Ms. Orgias was instrumental in starting, and serving in a leadership role of, the inaugural Equity and Diversity Council at New York Emergency Management. Her work has facilitated discussions and raised issues related to diversity, equity, and inclusion, which are necessary components in addressing community needs during emergencies.</p><p>Prior to joining New York City Emergency Management, Ms. Orgias served as an Administrative Law Judge with the New York City Environmental Control Board – OATH and Assistant Counsel with FDNY. She has a background in bankruptcy, immigration, administrative law, and alternative dispute resolution.</p><p>Ms. Orgias received her Juris Doctor Degree from Hofstra University School of Law and her Bachelor's Degree from Boston University and is a proud Stuyvesant High School alumna. She is a member of the New York State Bar Association Committee on Mass Disaster Response and the Judicial Screening Committee for the Kings County Democratic Party. Ms. Orgias is admitted to practice in the State of New York, the Eastern and Southern Districts of New York, and the Supreme Court of the United States.</p>",
            image: "SRC/Headshots/SO HS.png",
            usePhoto: true
        }
    };

    // Speaker Modal Functionality
    const speakerCards = document.querySelectorAll('.about-speaker-card');
    const modal = document.getElementById('speakerModal');
    const modalSpeakerName = document.getElementById('modalSpeakerName');
    const modalSpeakerTitle = document.getElementById('modalSpeakerTitle');
    const modalSpeakerOrganization = document.getElementById('modalSpeakerOrganization');
    const modalSpeakerBio = document.getElementById('modalSpeakerBio');
    const modalSpeakerPhoto = document.querySelector('.speaker-modal-photo');
    const closeBtn = document.querySelector('.speaker-modal-close');
    
    if (speakerCards.length > 0) {
        speakerCards.forEach(card => {
            card.addEventListener('click', function() {
                const speakerType = this.getAttribute('data-speaker');
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
                    
                    modal.style.display = 'block';
                }
            });
        });
    }
    
    // Close modal functionality
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            modal.style.display = 'none';
        });
    }
    
    // Close modal when clicking outside of it
    if (modal) {
        window.addEventListener('click', function(event) {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    }
});


