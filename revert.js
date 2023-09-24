const worseFeed = document.getElementsByTagName('feed-container')[0];
const betterFeed = 'https://github.com/dashboard-feed';
fetch(betterFeed).then(
	response =>{
		if(!response.ok)
		{
			throw new Error("Revert Github Homepage: Error fetching old feed.");
		}	
		return response.text();
	}).then(htmlContent =>
	{
		const parser = new DOMParser();
		const doc = parser.parseFromString(htmlContent, 'text/html');

		//Old feed data
		const data = doc.querySelector('.application-main');
		if(data)
		{
			worseFeed.innerHTML = data.innerHTML;
		}
		else
		{
			throw new Error("Revert Github Homepage: Error fetching data from old feed.");
		}
	}).catch(error => {
		throw new Error("Revert Github Homepage: " + error);
	});
