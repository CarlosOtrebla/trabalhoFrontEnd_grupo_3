 const inputName = document.getElementById('idName');
    const nameDisplay = document.getElementById('nameDisplay');

    inputName.addEventListener('input', function() {
      nameDisplay.textContent = this.value;
    });