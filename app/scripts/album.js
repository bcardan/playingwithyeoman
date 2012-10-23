
function AlbumCtrl ($scope) {
	$scope.images = [
		{
			category : 'ones',
			image : '//s3.amazonaws.com/comfortimages/assets/images/image01.jpg', 
			thumbnail : '//s3.amazonaws.com/comfortimages/assets/images/thumb01.jpg', 
			description : 'Russel & Jana\'s Rehearsal dinner'
		},
		{
			category : 'twos',
			image : '//s3.amazonaws.com/comfortimages/assets/images/image02.jpg', 
			thumbnail : '//s3.amazonaws.com/comfortimages/assets/images/thumb02.jpg', 
			description : 'Russel & Jana\'s wedding'
		},
		{
			category : 'threes',
			image : '//s3.amazonaws.com/comfortimages/assets/images/image03.jpg', 
			thumbnail : '//s3.amazonaws.com/comfortimages/assets/images/thumb03.jpg', 
			description : 'Whitefish Montana'
		},
		{
			category : 'fours',
			image : '//s3.amazonaws.com/comfortimages/assets/images/image04.jpg', 
			thumbnail : '//s3.amazonaws.com/comfortimages/assets/images/thumb04.jpg', 
			description : 'Looking Good'
		},
		{
			category : 'fives',
			image : '//s3.amazonaws.com/comfortimages/assets/images/image05.jpg', 
			thumbnail : '//s3.amazonaws.com/comfortimages/assets/images/thumb05.jpg', 
			description : 'Bent and Bent'
		},
		{
			category : 'sixes',
			image : '//s3.amazonaws.com/comfortimages/assets/images/image06.jpg', 
			thumbnail : '//s3.amazonaws.com/comfortimages/assets/images/thumb06.jpg', 
			description : 'Bent and Alana'
		},
		{
			category : 'sevens',
			image : '//s3.amazonaws.com/comfortimages/assets/images/image07.jpg', 
			thumbnail : '//s3.amazonaws.com/comfortimages/assets/images/thumb07.jpg', 
			description : 'On the Phone'
		},
		{
			category : 'ones',
			image : '//s3.amazonaws.com/comfortimages/assets/images/image01.jpg', 
			thumbnail : '//s3.amazonaws.com/comfortimages/assets/images/thumb01.jpg', 
			description : 'Russel & Jana\'s Rehearsal dinner'
		},
		{
			category : 'twos',
			image : '//s3.amazonaws.com/comfortimages/assets/images/image02.jpg', 
			thumbnail : '//s3.amazonaws.com/comfortimages/assets/images/thumb02.jpg', 
			description : 'Russel & Jana\'s wedding'
		},
		{
			category : 'threes',
			image : '//s3.amazonaws.com/comfortimages/assets/images/image03.jpg', 
			thumbnail : '//s3.amazonaws.com/comfortimages/assets/images/thumb03.jpg', 
			description : 'Whitefish Montana'
		},
		{
			category : 'fours',
			image : '//s3.amazonaws.com/comfortimages/assets/images/image04.jpg', 
			thumbnail : '//s3.amazonaws.com/comfortimages/assets/images/thumb04.jpg', 
			description : 'Looking Good'
		},
		{
			category : 'fives',
			image : '//s3.amazonaws.com/comfortimages/assets/images/image05.jpg', 
			thumbnail : '//s3.amazonaws.com/comfortimages/assets/images/thumb05.jpg', 
			description : 'Bent and Bent'
		},
		{
			category : 'sixes',
			image : '//s3.amazonaws.com/comfortimages/assets/images/image06.jpg', 
			thumbnail : '//s3.amazonaws.com/comfortimages/assets/images/thumb06.jpg', 
			description : 'Bent and Alana'
		},
		{
			category : 'sevens',
			image : '//s3.amazonaws.com/comfortimages/assets/images/image07.jpg', 
			thumbnail : '//s3.amazonaws.com/comfortimages/assets/images/thumb07.jpg', 
			description : 'On the Phone'
		}
	]

	$scope.currentImage = _.first($scope.images);
	$scope.setCurrentImage = function(image) {
		$scope.currentImage = image;
	}
}