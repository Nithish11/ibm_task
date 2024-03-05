angular.module('galleryApp', [])
  .controller('GalleryController', function() {
    this.images = [
    //   { src: '01.jpg', alt: 'Image 1', title: 'Image 1 Title', description: 'Description for Image 1' },
    //   { src: '02.jpg', alt: 'Image 2', title: 'Image 2 Title', description: 'Description for Image 2' },
    //   { src: '03.jpg', alt: 'Image 3', title: 'Image 3 Title', description: 'Description for Image 3' },
    //   { src: '04.jpg', alt: 'Image 1', title: 'Image 1 Title', description: 'Description for Image 1' },
    //   { src: '05.jpg', alt: 'Image 2', title: 'Image 2 Title', description: 'Description for Image 2' },
      { src: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg', alt: 'Image 3', title: 'Image 3 Title', description: 'Description for Image 3' },
      { src: 'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-james-wheeler-414612.jpg&fm=jpg', alt: 'Image 1', title: 'Image 1 Title', description: 'Description for Image 1' },
      { src: 'https://images.pexels.com/photos/17880230/pexels-photo-17880230/free-photo-of-calm.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', alt: 'Image 2', title: 'Image 2 Title', description: 'Description for Image 2' },
      { src: 'https://i.pinimg.com/550x/ce/ec/ae/ceecae08d531c4c7b1b3b23a6b891e89.jpg', alt: 'Image 3', title: 'Image 3 Title', description: 'Description for Image 3' },
      { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG3FBx7rhpZq53ZTcJZAKERYYiBeJqe0hgvudeq9T0oKMvVYpfFxb7z2zncuMHkJLnMnc&usqp=CAU', alt: 'Image 1', title: 'Image 1 Title', description: 'Description for Image 1' },
      { src: 'https://images.pexels.com/photos/325044/pexels-photo-325044.jpeg?cs=srgb&dl=pexels-chevanon-photography-325044.jpg&fm=jpg', alt: 'Image 2', title: 'Image 2 Title', description: 'Description for Image 2' },
      { src: 'https://www.shutterstock.com/image-photo/betta-fish-260nw-724577431.jpg', alt: 'Image 3', title: 'Image 3 Title', description: 'Description for Image 3' },
      { src: 'https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', alt: 'Image 1', title: 'Image 1 Title', description: 'Description for Image 1' },
      { src: 'https://images.pexels.com/photos/12174341/pexels-photo-12174341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', alt: 'Image 2', title: 'Image 2 Title', description: 'Description for Image 2' },
      { src: 'https://images.pexels.com/photos/17880230/pexels-photo-17880230/free-photo-of-calm.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', alt: 'Image 2', title: 'Image 2 Title', description: 'Description for Image 2' },
      { src: 'https://i.pinimg.com/550x/ce/ec/ae/ceecae08d531c4c7b1b3b23a6b891e89.jpg', alt: 'Image 3', title: 'Image 3 Title', description: 'Description for Image 3' },
      { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG3FBx7rhpZq53ZTcJZAKERYYiBeJqe0hgvudeq9T0oKMvVYpfFxb7z2zncuMHkJLnMnc&usqp=CAU', alt: 'Image 1', title: 'Image 1 Title', description: 'Description for Image 1' },
      { src: 'https://images.pexels.com/photos/325044/pexels-photo-325044.jpeg?cs=srgb&dl=pexels-chevanon-photography-325044.jpg&fm=jpg', alt: 'Image 2', title: 'Image 2 Title', description: 'Description for Image 2' },
      // Add more images here
    ];

    this.showDetails = function(image) {
      this.selectedImage = image;
    };

    this.closeDetails = function() {
      this.selectedImage = null;
    };
  });
