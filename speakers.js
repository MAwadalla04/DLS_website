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
    
    // Speaker Tabs Functionality
    const speakerTabs = document.querySelectorAll('.speaker-tabs .tab-btn');
    const speakerPanels = document.querySelectorAll('.speaker-panels .panel');
    
    console.log('Found tabs:', speakerTabs.length);
    console.log('Found panels:', speakerPanels.length);
    
    if (speakerTabs.length > 0) {
        speakerTabs.forEach(tab => {
            tab.addEventListener('click', function() {
                console.log('Tab clicked:', this.textContent);
                
                // Remove active class from all tabs
                speakerTabs.forEach(tab => tab.classList.remove('active'));
                
                // Add active class to clicked tab
                this.classList.add('active');
                
                // Get the panel to show
                const panelId = this.getAttribute('data-panel');
                console.log('Panel ID:', panelId);
                
                // Hide all panels
                speakerPanels.forEach(panel => panel.classList.remove('active'));
                
                // Show the selected panel
                const selectedPanel = document.getElementById(panelId);
                console.log('Selected panel:', selectedPanel);
                if (selectedPanel) {
                    selectedPanel.classList.add('active');
                }
            });
        });
    }
    
    // Speaker Bio Modal Functionality
    const speakerNames = document.querySelectorAll('.speaker-name');
    const modal = document.getElementById('speakerModal');
    const modalSpeakerName = document.getElementById('modalSpeakerName');
    const modalSpeakerBio = document.getElementById('modalSpeakerBio');
    const closeBtn = document.querySelector('.close');
    
    if (speakerNames.length > 0) {
        speakerNames.forEach(speakerName => {
            speakerName.addEventListener('click', function() {
                const bio = this.getAttribute('data-bio');
                const name = this.textContent;
                
                modalSpeakerName.textContent = name;
                modalSpeakerBio.textContent = bio;
                modal.style.display = 'block';
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

