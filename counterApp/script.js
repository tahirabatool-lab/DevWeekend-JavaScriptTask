   let count = 0;
        function updateUi() {
            document.getElementById('counter').innerText = count;
        }

        function increase() {
            count++;
            updateUi();
        }

        function decrease() {
            count--;
            updateUi();
        }

        function resetCounter() {
            count = 0;
            updateUi();
        }