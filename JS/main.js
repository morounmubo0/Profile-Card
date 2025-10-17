function updateTime(){
    const timeDisplay = document.getElementById('time-display');
    const now = new Date();
    const timeInMs = now.getTime();
    timeDisplay.textContent = `${timeInMs} ms`;
}

updateTime();
setInterval(updateTime, 1000);

document.getElementById('avatar-input').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file){
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('user-avatar').src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});

document.querySelectorAll('.social-link').forEach(link => {
    link.addEventListener('mouseenter', function(){
        this.style.transform = 'translateY(-3px) scale(1.05)';
    });

    link.addEventListener('mouseleave', function(){
        this.style.transform = 'transalteY(0) scale(1)';
    });
});