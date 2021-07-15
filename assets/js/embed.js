$(document).ready(function () {


     const autoCompleteJS = new autoComplete({
		selector: "#autoComplete",
		placeHolder: "Search for Food...",
		   data: {
			   src: async (query) => {
			   
				   // Fetch Data from external Source
				   const source = await fetch(`https://quote.apcargoexpress.com/api?f=zip.lookup&q=${query}`);
				   // Data is array of `Objects` | `Strings`
				   const data = await source.json();
				   console.log(data)
				   return data.data;
			   
			   },
			   // Data 'Object' key to be searched
			   keys: ["label", "zip"]
		   },
		resultsList: {
			element: (list, data) => {
				if (!data.results.length) {
					// Create "No Results" message element
					const message = document.createElement("div");
					// Add class to the created element
					message.setAttribute("class", "no_result");
					// Add message text content
					message.innerHTML = `<span>Found No Results for "${data.query}"</span>`;
					// Append message element to the results list
					list.prepend(message);
				}
			},
			noResults: true,
		},
		resultItem: {
			highlight: true
		},
		events: {
			input: {
				selection: (event) => {
					const selection = event.detail.selection.value;
					console.log(selection)
					autoCompleteJS.input.value =  selection.label;
				}
			}
		}
	});



	const autoCompleteTo = new autoComplete({
		selector: "#autoComplete2",
		placeHolder: "Search for Food...",
		   data: {
			   src: async (query) => {
			   
				   // Fetch Data from external Source
				   const source = await fetch(`https://quote.apcargoexpress.com/api?f=zip.lookup&q=${query}`);
				   // Data is array of `Objects` | `Strings`
				   const data = await source.json();
				   console.log(data)
				   return data.data;
			   
			   },
			   // Data 'Object' key to be searched
			   keys: ["label", "zip"]
		   },
		resultsList: {
			element: (list, data) => {
				if (!data.results.length) {
					// Create "No Results" message element
					const message = document.createElement("div");
					// Add class to the created element
					message.setAttribute("class", "no_result");
					// Add message text content
					message.innerHTML = `<span>Found No Results for "${data.query}"</span>`;
					// Append message element to the results list
					list.prepend(message);
				}
			},
			noResults: true,
		},
		resultItem: {
			highlight: true
		},
		events: {
			input: {
				selection: (event) => {
					const selection = event.detail.selection.value;
					console.log(selection)
					autoCompleteTo.input.value =  selection.label;
				}
			}
		}
	});

});