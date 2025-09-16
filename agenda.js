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
});


