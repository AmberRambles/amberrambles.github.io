document.getElementById("textbox").addEventListener("input", function() {
    const text = this.value;
    const wordCount = text.split(/\s+/).filter(word => word.length > 0).length;
    const goal = parseInt(document.querySelector('input[type="text"]').value, 10) || 0;
    const progressBar = document.querySelector('output p');

    if (goal > 0) {
        const percentage = Math.min((wordCount / goal) * 100, 100);
        progressBar.textContent = `You have written ${wordCount} words. Progress: ${percentage.toFixed(2)}% of your goal.`;
    } else {
        progressBar.textContent = `You have written ${wordCount} words. Set a goal to track your progress.`;
    }
});