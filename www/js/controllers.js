angular.module('starter.controllers', [])

  .controller('FikralarCtrl', function ($scope, $http) {
    // Fıkra kategorisi için json aşağıdaki kod ile çağırılır ve jsonveri isimli değişkene atanır.
    $http.get('json/fikra_kategori.json').success(function (data) {
      $scope.jsonveri = data;
    });
  })

  .controller('FikraIcerigiCtrl', function ($scope, $ionicModal, $http, $stateParams, basliklar) {
    
    //tıklanan kategori/başlık service.js kullanılarak aşağıdaki kod ile kategori isimli değişkene atanır.
    $scope.kategori = basliklar.get($stateParams.baslikId);

    $http.get('json/fikra_kategori.json').success(function (data) {
      $scope.kategoriveri = data;
    });

    $http.get('json/fikra.json').success(function (data) {
      $scope.jsonveri = data;



      // modal tanımlaması
      $ionicModal.fromTemplateUrl('templates/fikramodal.html', {
        scope: $scope
      }).then(function (modal) {
        $scope.modal = modal;
      });

      // Triggered in the login modal to close it
      $scope.closeLogin = function () {
        $scope.modal.hide();
      };

      $scope.anil = function (gelenveri) {

        $scope.modal.show();
        $scope.berke = gelenveri;
      }
    });
  })

  .controller('BilmecelerCtrl', function ($scope, $http) {
    $http.get('json/bilmeceler_kategori.json').success(function (data) {
      $scope.jsonveri = data;
    });
  })


  .controller('BilmeceIcerigiCtrl', function ($scope, $ionicModal, $http, $stateParams, basliklar, $ionicPopup, $timeout) {

    $scope.kategori = basliklar.get($stateParams.baslikId);

    $http.get('json/bilmeceler_kategori.json').success(function (data) {
      $scope.kategoriveri = data;
    });

    $http.get('json/bilmeceler.json').success(function (data) {
      $scope.jsonveri = data;

      $scope.showAlert = function(gelenveri) {
         var alertPopup = $ionicPopup.alert({
           title: 'Cevap:',
           template: gelenveri
         });
      }

    })
  })

  .controller('ProfilCtrl', function ($scope) {
    $scope.options = {
      loop: true,
      effect: 'coverflow',
      speed: 500,
    }

    $scope.$on("$ionicSlides.sliderInitialized", function (event, data) {
      // data.slider is the instance of Swiper
      $scope.slider = data.slider;
    });

    $scope.$on("$ionicSlides.slideChangeStart", function (event, data) {
      console.log('Slide change is beginning');
    });

    $scope.$on("$ionicSlides.slideChangeEnd", function (event, data) {
      // note: the indexes are 0-based
      $scope.activeIndex = data.slider.activeIndex;
      $scope.previousIndex = data.slider.previousIndex;
    });
  });
