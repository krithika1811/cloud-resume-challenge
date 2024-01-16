/*
	Photon by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1141px',  '1680px' ],
			large:    [ '981px',   '1140px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ '321px',   '480px'  ],
			xxsmall:  [ null,      '320px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Scrolly.
		$('.scrolly').scrolly();
	


// // Function to get and update visitor count
// function updateVisitorCount() {
//     fetch('https://lmxmuy7zdy5eo6rbnenykrlkke0befet.lambda-url.us-east-1.on.aws/', {
//         method: 'POST', // Use POST method for Lambda invocation
//         headers: {
//             'Content-Type': 'application/json',
//         },
//     })
//         .then(response => response.json())
//         .then(data => {
//             // Check if 'views' is defined in the response
//             if (data && data.views !== undefined) {
//                 // Update the counter display on the webpage
//                 document.getElementById("visitorCounter").innerHTML = "Visitor Count: " + data.views;
//             } else {
//                 console.error('Invalid response from Lambda function:', data);
//             }
//         })
//         .catch(error => console.error('Error getting visitor count:', error));
// }

// // Run the updateVisitorCount function when the page loads
// window.onload = updateVisitorCount;

// Function to get and update visitor count
// function updateVisitorCount() {
// 	fetch('https://lmxmuy7zdy5eo6rbnenykrlkke0befet.lambda-url.us-east-1.on.aws/counter', {
// 		method: 'POST', // Use POST method for Lambda invocation
// 		headers: {
// 			'Content-Type': 'application/json',
// 		},
// 	})
// 		.then(response => response.json())
// 		.then(data => {
// 			// Check if 'views' is defined in the response
// 			if (data && data.views !== undefined) {
// 				// Update the counter display on the webpage
// 				document.getElementById("visitorCounter").innerHTML = "Visitor Count: " + data.views;
// 			} else {
// 				console.error('Invalid response from Lambda function:', data);
// 			}
// 		})
// 		.catch(error => console.error('Error getting visitor count:', error));
// }

// // Run the updateVisitorCount function when the page loads
// window.onload = updateVisitorCount;
const counter = document.querySelector(".visitorCounter");
async function updateCounter() {
    let response = await fetch(
        "https://lmxmuy7zdy5eo6rbnenykrlkke0befet.lambda-url.us-east-1.on.aws/"
    );
    let data = await response.json();
    counter.innerHTML = `Views: ${data}`;
}
updateCounter();

})(jQuery);