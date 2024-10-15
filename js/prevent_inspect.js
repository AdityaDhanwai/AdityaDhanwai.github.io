document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    alert("Right-click is disabled on this page.");
});

document.addEventListener('keydown', function(e) {
    // Disable specific keyboard shortcuts like Ctrl + U, Ctrl + S, etc.
    if (e.ctrlKey && ['u', 's', 'c', 'i', 'j'].includes(e.key.toLowerCase())) {
        e.preventDefault();
        alert("Keyboard shortcuts are disabled on this page.");
    }

    // Disable F12 (Inspect element)
    if (e.key === 'F12') {
        e.preventDefault();
        alert("F12 is disabled on this page.");
    }
});

document.addEventListener('keydown', function(e) {
    // Prevent F12 (Inspect element)
    if (e.code === 'F12') {
        alert("F12 is disabled on this page.");
        e.preventDefault();
    }

    // Prevent Ctrl+Shift+I (Developer Tools)
    if (e.ctrlKey && e.shiftKey && e.code === 'KeyI') {
        alert("Ctrl+Shift+I is disabled on this page.");
        e.preventDefault();
    }

    // Prevent Ctrl+U (View Source)
    if (e.ctrlKey && e.code === 'KeyU') {
        alert("Ctrl+U is disabled on this page.");
        e.preventDefault();
    }

    // Prevent Ctrl+Shift+C (Inspect Element)
    if (e.ctrlKey && e.shiftKey && e.code === 'KeyC') {
        alert("Ctrl+Shift+C is disabled on this page.");
        e.preventDefault();
    }
});
