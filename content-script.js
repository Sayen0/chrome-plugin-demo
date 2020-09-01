(function() {
	setInterval(() => {
		console.log('======1=1===')
		if (document.querySelector("[data-test-id=\"AdGroupCreatives-loadMoreTweetsButton\"]")) {
			document.querySelector("[data-test-id=\"AdGroupCreatives-loadMoreTweetsButton\"]").click();
		}
		
	}, 1000)
})();