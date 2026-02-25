function updateTime() {
    const clockElement = document.getElementById('clock');
    
    // We get the current Date
    const now = new Date();
    
    // Format options for the time
    const options = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
        fractionalSecondDigits: undefined
    };

    // Assuming local time formatting, but we can customize based on locale if needed
    const timeString = new Intl.DateTimeFormat('en-US', options).format(now);
    
    // Format the date part
    const dateOptions = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
    const dateString = new Intl.DateTimeFormat('en-US', dateOptions).format(now);

    clockElement.innerHTML = `
        <div style="font-size: 0.4em; color: var(--text-secondary); margin-bottom: 0px; text-transform: uppercase;">${dateString}</div>
        <div>${timeString}</div>
    `;
}

// Initial call
updateTime();

// Update every second
setInterval(updateTime, 1000);
