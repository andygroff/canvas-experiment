<!DOCTYPE html>
<html>
<head lang="en">
	<meta charset="UTF-8">
	<title>Canvas Test</title>
	<script src="https://code.jquery.com/jquery-2.1.4.min.js"></script>
	<script src="http://cdnjs.cloudflare.com/ajax/libs/gsap/1.17.0/TweenMax.min.js"></script>
	<script src="http://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/DrawSVGPlugin.js?r=5"></script>
	<script src="main.js"></script>

	<link rel="stylesheet" type="text/css" href="claudio.css"/>
	<link rel="stylesheet" type="text/css" href="main.css"/>
</head>
<body>

<header>

	<svg id="mainImage" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" ng-hide="onLoading" class="">
		<path class="path-out" fill="#01A093"
		      d="M457.8 345.5C423.5 410.9 354.9 455.4 276 455.4c-113.4 0-205.4-92-205.4-205.4S162.6 44.6 276 44.6 c55.9 0 106.6 22.3 143.6 58.6l53-7.6C426.8 37.4 355.8 0 276 0C137.9 0 26 111.9 26 250s111.9 250 250 250 c79.8 0 150.8-37.4 196.6-95.5L457.8 345.5z">
		</path>
		<path class="path-in" fill="#007574"
		      d="M457.8 345.5C423.5 410.9 354.9 455.4 276 455.4c-113.4 0-205.4-92-205.4-205.4S162.6 44.6 276 44.6 c55.9 0 106.6 22.3 143.6 58.6l5 51.3c-31.4-48.8-86.3-81.1-148.6-81.1c-97.6 0-176.7 79.1-176.7 176.7S178.4 426.7 276 426.7 c62.4 0 117.2-32.3 148.6-81.1L457.8 345.5z">
		</path>
		<polygon class="polygon" fill="#20ECBE" points="457.8,154.5 424.6,154.5 419.6,103.2 472.6,95.6">
		</polygon>
	</svg>

</header>

<canvas id="myCanvas" width="1100" height="1100" >
</canvas>

<div class="main">
	<h1 style="">CLAUDIO CALAUTTI</h1>

	<h2 style="">CREATIVE FRONT-END DEVELOPER</h2>
	<a href="/portfolio" class="morph-button" style="">
<span class="hex-900">
</span> <span class="hex-500">
</span> <span class="hex-200">
</span> <span class="text">VIEW PORTFOLIO</span>
	</a>
</div>

</body>
</html>