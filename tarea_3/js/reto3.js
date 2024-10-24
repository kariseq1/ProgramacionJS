function redirectToUrl() {
    const selector = document.getElementById('urlSelector');
    const selectedUrl = selector.value;

    if (selectedUrl) {
        window.location.href = selectedUrl;
    }
}

