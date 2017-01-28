angular.module('starter.controllers', [])

.controller('MainCtrl', function($scope,$http,Commas,Dates,$ionicLoading) {
  $scope.reload=function(){
    $scope.mreload=false;
    $ionicLoading.show({
      template: 'Loading...'
    });

    $http({
      method:'GET',
      url:'http://125.21.84.129/pd/dash/getpd.php'
    })
    .success(function(result){
      if(result=='Could not connect to 10.10.24.16:')
      {
        alert("Error establishing connection to 10.10.24.16.Please try later");
      }
      else
      {
      $scope.pddata={count:result[0],amt:result[1],authcount:result[2],authamt:result[3],commcount:result[4],commamt:result[5],mcount:result[6],mamt:result[7]};
      }
    });

    $http({
      method:'GET',
      url:'http://125.21.84.129/pd/dash/getbms.php',
    })
    .success(function(result){
      if(result=='Could not connect to 10.10.24.16:')
      {
        alert("Error establishing connection to 10.10.24.16.Please tr later");
      }
      else
      {
        
      $scope.bmsdata={count:result[0],amt:result[1],authcount:result[2],authamt:result[3],commcount:result[4],commamt:result[5],mcount:result[6],mamt:result[7]};
      }
    });

    $http({
      method:'GET',
      url:'http://125.21.84.129/pd/dash/getdta.php',
    })
    .success(function(result){
      $scope.mreload=true;
      $ionicLoading.hide();
      if(result=='Could not connect to 10.10.24.16:')
      {
        alert("Error establishing connection to 10.10.24.16.Please tr later");
      }
      else
      {
        
      $scope.dtadata={count:result[0],amt:result[1],authcount:result[2],authamt:result[3],commcount:result[6],commamt:result[7],mcount:result[2],mamt:result[3]};
      }
    });

    $http({
      method:'GET',
      url:'http://125.21.84.129/pd/dash/getdwa.php',
    })
    .success(function(result){
      if(result=='Could not connect to 10.10.24.16:')
      {
        alert("Error establishing connection to 10.10.24.16.Please try later");
      }
      else
      {
      $scope.dwadata={count:result[0],amt:result[1],authcount:result[2],authamt:result[3],commcount:result[4],commamt:result[5],mcount:result[6],mamt:result[7]};
      }
    });
  }

  $scope.reload();

  $scope.getdwayetamt=function(){
    if($scope.dwadata)
    {
      return Math.round((parseFloat($scope.dwadata.amt)-parseFloat($scope.dwadata.mamt))*100)/100;
    }
    return 0;
  }

  $scope.getpdyetamt=function(){
    if($scope.pddata)
    {
      return Math.round((parseFloat($scope.pddata.amt)-parseFloat($scope.pddata.mamt))*100)/100;
    }
    return 0;
  }

  $scope.getbmsyetamt=function(){
    if($scope.bmsdata)
    {
      return Math.round((parseFloat($scope.bmsdata.amt)-parseFloat($scope.bmsdata.mamt))*100)/100;
    }
    return 0;
  }

  $scope.getdtayetamt=function(){
    if($scope.dtadata)
    {
      return Math.round((parseFloat($scope.dtadata.amt)-parseFloat($scope.dtadata.mamt))*100)/100;
    }
    return 0;
  }

  $scope.gettotyetamt=function(){
    return Math.round((parseFloat($scope.getpdyetamt())+parseFloat($scope.getbmsyetamt())+parseFloat($scope.getdwayetamt())+parseFloat($scope.getdtayetamt()))*100)/100;
  }

  $scope.getdwayetcount=function(){
    if($scope.dwadata)
    {
      return Math.round((parseFloat($scope.dwadata.count)-parseFloat($scope.dwadata.mcount))*100)/100;
    }
    return 0;
  }

  $scope.getpdyetcount=function(){
    if($scope.pddata)
    {
      return Math.round((parseFloat($scope.pddata.count)-parseFloat($scope.pddata.mcount))*100)/100;
    }
    return 0;
  }

  $scope.getbmsyetcount=function(){
    if($scope.bmsdata)
    {
      return Math.round((parseFloat($scope.bmsdata.count)-parseFloat($scope.bmsdata.mcount))*100)/100;
    }
    return 0;
  }

  $scope.getdtayetcount=function(){
    if($scope.dtadata)
    {
      return Math.round((parseFloat($scope.dtadata.count)-parseFloat($scope.dtadata.mcount))*100)/100;
    }
    return 0;
  }

  $scope.gettotyetcount=function(){
      return Math.round((parseFloat($scope.getpdyetcount())+parseFloat($scope.getbmsyetcount())+parseFloat($scope.getdwayetcount())+parseFloat($scope.getdtayetcount()))*100)/100;
  }

  $scope.totcount=function(){
    var tot=0;
    if($scope.pddata)
    {
      tot+=parseInt($scope.pddata.count);
    }
    if($scope.bmsdata)
    {
      tot+=parseInt($scope.bmsdata.count);
    }
    if($scope.dtadata)
    {
      tot+=parseInt($scope.dtadata.count);
    }
    if($scope.dwadata)
    {
      tot+=parseInt($scope.dwadata.count);
    }
    return tot;
  }

  $scope.totauthcount=function(){
    var tot=0;
    if($scope.pddata)
    {
      tot+=parseInt($scope.pddata.authcount);
    }
    if($scope.bmsdata)
    {
      tot+=parseInt($scope.bmsdata.authcount);
    }
    if($scope.dtadata)
    {
      tot+=parseInt($scope.dtadata.authcount);
    }
    if($scope.dwadata)
    {
      tot+=parseInt($scope.dwadata.authcount);
    }
    return tot;
  }

  $scope.totcommcount=function(){
    var tot=0;
    if($scope.pddata)
    {
      tot+=parseInt($scope.pddata.commcount);
    }
    if($scope.bmsdata)
    {
      tot+=parseInt($scope.bmsdata.commcount);
    }
    if($scope.dtadata)
    {
      tot+=parseInt($scope.dtadata.commcount);
    }
    if($scope.dwadata)
    {
      tot+=parseInt($scope.dwadata.commcount);
    }
    return tot;
  }

  $scope.totmcount=function(){
    var tot=0;
    if($scope.pddata)
    {
      tot+=parseInt($scope.pddata.mcount);
    }
    if($scope.bmsdata)
    {
      tot+=parseInt($scope.bmsdata.mcount);
    }
    if($scope.dtadata)
    {
      tot+=parseInt($scope.dtadata.mcount);
    }
    if($scope.dwadata)
    {
      tot+=parseInt($scope.dwadata.mcount);
    }
    return tot;
  }

  $scope.totamt=function(){
    var tot=0;
    if($scope.pddata)
    {
      tot+=parseFloat($scope.pddata.amt);
    }
    if($scope.bmsdata)
    {
      tot+=parseFloat($scope.bmsdata.amt);
    }
    if($scope.dtadata)
    {
      tot+=parseFloat($scope.dtadata.amt);
    }
    if($scope.dwadata)
    {
      tot+=parseFloat($scope.dwadata.amt);
    }
    return Math.round(tot*100)/100;
  }

  $scope.totauthamt=function(){
    var tot=0;
    if($scope.pddata)
    {
      tot+=parseFloat($scope.pddata.authamt);
    }
    if($scope.bmsdata)
    {
      tot+=parseFloat($scope.bmsdata.authamt);
    }
    if($scope.dtadata)
    {
      tot+=parseFloat($scope.dtadata.authamt);
    }
    if($scope.dwadata)
    {
      tot+=parseFloat($scope.dwadata.authamt);
    }
    return Math.round(tot*100)/100;
  }

  $scope.totcommamt=function(){
    var tot=0;
    if($scope.pddata)
    {
      tot+=parseFloat($scope.pddata.commamt);
    }
    if($scope.bmsdata)
    {
      tot+=parseFloat($scope.bmsdata.commamt);
    }
    if($scope.dtadata)
    {
      tot+=parseFloat($scope.dtadata.commamt);
    }
    if($scope.dwadata)
    {
      tot+=parseFloat($scope.dwadata.commamt);
    }
    return Math.round(tot*100)/100;
  }

  $scope.totmamt=function(){
    var tot=0;
    if($scope.pddata)
    {
      tot+=parseFloat($scope.pddata.mamt);
    }
    if($scope.bmsdata)
    {
      tot+=parseFloat($scope.bmsdata.mamt);
    }
    if($scope.dtadata)
    {
      tot+=parseFloat($scope.dtadata.mamt);
    }
    if($scope.dwadata)
    {
      tot+=parseFloat($scope.dwadata.mamt);
    }
    return Math.round(tot*100)/100;
  }
})

.controller('HomeCtrl', function($scope,$http,Commas,Dates,$ionicLoading) {
  $scope.Commas=Commas;
  $scope.Dates=Dates;

  $http({
      method:'GET',
      url:'http://125.21.84.129/pd/back/public/rbidata',
      params:{dated:'now'}
    }).success(function(data){
      $scope.rbidata=data;
    });
})

.controller('BillsCtrl', function($scope,$http,Commas,Dates,$ionicLoading) {
  $scope.Commas=Commas;
  $scope.Dates=Dates;
})

.controller('RbiCtrl', function($scope,$http,Commas,Dates,$ionicLoading) {
  $ionicLoading.show({
      template: 'Loading...'
    });
  $scope.Commas=Commas;
  $scope.Dates=Dates;

  $http({
    method:'GET',
    url:'http://125.21.84.129/pd/back/public/rbidata',
    params:{dated:'now'}
  }).success(function(result){
    $ionicLoading.hide();
    $scope.rbidata=result;
    $scope.selectdate=new Date(result.dated);
  });

  $scope.searchdate=function(selectdate){
    $ionicLoading.show({
      template: 'Loading...'
    });
    $http({
      method:'GET',
      url:'http://125.21.84.129/pd/back/public/rbidata',
      params:{dated:selectdate.toISOString().substring(0, 10)}
    }).success(function(result){
      $ionicLoading.hide();
      $scope.rbidata=result;
      $scope.selectdate=new Date(result.dated);
    });
  }
})

.controller('PdCtrl', function($scope,$http,Commas,Dates,$ionicLoading,$ionicActionSheet,$ionicPopup) {
  $ionicLoading.show({
      template: 'Loading...'
    });
  $scope.Commas=Commas;
  $scope.Dates=Dates;

  $scope.totals=function(chqs)
  {
    var amt=0.00;
    if(chqs)
    {
      for(var i=0;i<chqs.length;i++)
      {
        amt=amt+parseFloat(chqs[i]['partyamount']);
      }
    }
    return amt;
  }

  $http({
    method:'GET',
    url:'http://125.21.84.129/pddata.php'
  }).success(function(result){
    $ionicLoading.hide();
    $scope.chqs=result;
  });

  $scope.showPop=function(){
    var popUp=$ionicPopup.confirm({
      title:'Approve All',
      template:'Do you want to approve all cheques?'
    });

    popUp.then(function(res){
      if(res){
        $ionicLoading.show({
          template: 'Approving...'
        });
        $http({
          method:'POST',
          url:'http://125.21.84.129/pd/back/public/approve_pd',
          data:{chqs:$scope.chqs,rems:''}
        }).success(function(result){
            $http({
              method:'GET',
              url:'http://125.21.84.129/pddata.php'
            }).success(function(result){
              $ionicLoading.hide();
              $scope.chqs=result;
            });
        });
      }
    });
  }

  $scope.showAction=function(chq){
    $ionicActionSheet.show({
      buttons:[
        {'text':'Approve'}
      ],
      titleText:'Cheque No:'+chq.chequeno,
      cancelText:'Cancel',
      buttonClicked:function(){
        var chqarr=[];
        chqarr.push(chq);
        $ionicLoading.show({
          template: 'Approving...'
        });
        $http({
          method:'POST',
          url:'http://125.21.84.129/approvepd.php',
          data:{chqs:chqarr,rems:''}
        }).success(function(result){
            $http({
              method:'GET',
              url:'http://125.21.84.129/pddata.php'
            }).success(function(result){
              $ionicLoading.hide();
              $scope.chqs=result;
            });
        });
        return true;
      }
    });
  }
})

.controller('PaoCtrl', function($scope,$http,Commas,Dates,$ionicLoading,$ionicActionSheet,$ionicPopup) {
  $ionicLoading.show({
      template: 'Loading...'
    });
  $scope.Commas=Commas;
  $scope.Dates=Dates;

  $http({
    method:'GET',
    url:'http://125.21.84.129/bmsdata.php'
  }).success(function(result){
    $ionicLoading.hide();
    $scope.chqs=result;
    var ntotalnos=0;
    var ntotals=0;
    var ptotalnos=0;
    var ptotals=0;
    var totalnos=0;
    var totals=0;
    for(var i=0;i<result.length;i++)
    {
      ntotalnos+=parseInt(result[i][1]);
      ntotals+=parseFloat(result[i][2]);
      ptotalnos+=parseInt(result[i][3]);
      ptotals+=parseFloat(result[i][4]);
      totalnos+=(parseInt(result[i][1])+parseInt(result[i][3]));
      totals+=(parseFloat(result[i][2])+parseFloat(result[i][4]));
    }
    $scope.ntotalnos=ntotalnos;
    $scope.ntotals=ntotals;
    $scope.ptotalnos=ptotalnos;
    $scope.ptotals=ptotals;
    $scope.totalnos=totalnos;
    $scope.totals=totals;
  });

  $scope.ctotal=function(chq)
  {
    return parseInt(chq[1])+parseInt(chq[3]);
  }

  $scope.stotal=function(chq)
  {
    return parseFloat(chq[2])+parseFloat(chq[4]);
  }

  $scope.showPop=function(){
    var popUp=$ionicPopup.confirm({
      title:'Approve All',
      template:'Do you want to approve all bills?'
    });

    popUp.then(function(res){
      if(res){
        var chqarr=[];
        angular.forEach($scope.chqs,function(chq){
          chqarr.push(chq[5]);
        });
        $ionicLoading.show({
          template: 'Approving...'
        });
        $http({
          method:'POST',
          url:'http://125.21.84.129/approvepaodata.php',
          data:{chqs:chqarr,rems:''}
        }).success(function(result){
            $http({
              method:'GET',
              url:'http://125.21.84.129/bmsdata.php'
            }).success(function(result){
              $ionicLoading.hide();
              $scope.chqs=result;
              var ntotalnos=0;
              var ntotals=0;
              var ptotalnos=0;
              var ptotals=0;
              var totalnos=0;
              var totals=0;
              for(var i=0;i<result.length;i++)
              {
                ntotalnos+=parseInt(result[i][1]);
                ntotals+=parseFloat(result[i][2]);
                ptotalnos+=parseInt(result[i][3]);
                ptotals+=parseFloat(result[i][4]);
                totalnos+=(parseInt(result[i][1])+parseInt(result[i][3]));
                totals+=(parseFloat(result[i][2])+parseFloat(result[i][4]));
              }
              $scope.ntotalnos=ntotalnos;
              $scope.ntotals=ntotals;
              $scope.ptotalnos=ptotalnos;
              $scope.ptotals=ptotals;
              $scope.totalnos=totalnos;
              $scope.totals=totals;
            });
        });
      }
    });
  }

  $scope.showAction=function(chq){
    $ionicActionSheet.show({
      buttons:[
        {'text':'Approve'}
      ],
      titleText:chq[0],
      cancelText:'Cancel',
      buttonClicked:function(){
        var chqarr=[];
        chqarr.push(chq[5]);
        $ionicLoading.show({
          template: 'Approving...'
        });
        $http({
          method:'POST',
          url:'http://125.21.84.129/approvepaodata.php',
          data:{chqs:chqarr,rems:''}
        }).success(function(result){
            $http({
              method:'GET',
              url:'http://125.21.84.129/bmsdata.php'
            }).success(function(result){
              $ionicLoading.hide();
              $scope.chqs=result;
              var ntotalnos=0;
              var ntotals=0;
              var ptotalnos=0;
              var ptotals=0;
              var totalnos=0;
              var totals=0;
              for(var i=0;i<result.length;i++)
              {
                ntotalnos+=parseInt(result[i][1]);
                ntotals+=parseFloat(result[i][2]);
                ptotalnos+=parseInt(result[i][3]);
                ptotals+=parseFloat(result[i][4]);
                totalnos+=(parseInt(result[i][1])+parseInt(result[i][3]));
                totals+=(parseFloat(result[i][2])+parseFloat(result[i][4]));
              }
              $scope.ntotalnos=ntotalnos;
              $scope.ntotals=ntotals;
              $scope.ptotalnos=ptotalnos;
              $scope.ptotals=ptotals;
              $scope.totalnos=totalnos;
              $scope.totals=totals;
            });
        });
        return true;
      }
    });
  }
})

.controller('DtaCtrl', function($scope,$http,Commas,Dates,$ionicLoading,$ionicActionSheet,$ionicPopup) {
  $ionicLoading.show({
      template: 'Loading...'
    });
  $scope.Commas=Commas;
  $scope.Dates=Dates;

  $http({
    method:'GET',
    url:'http://125.21.84.129/impactdata.php'
  }).success(function(result){
    $ionicLoading.hide();
    $scope.chqs=result;
    var ntotalnos=0;
    var ntotals=0;
    var ptotalnos=0;
    var ptotals=0;
    var totalnos=0;
    var totals=0;
    for(var i=0;i<result.length;i++)
    {
      ntotalnos+=parseInt(result[i][1]);
      ntotals+=parseFloat(result[i][2]);
      ptotalnos+=parseInt(result[i][3]);
      ptotals+=parseFloat(result[i][4]);
      totalnos+=(parseInt(result[i][1])+parseInt(result[i][3]));
      totals+=(parseFloat(result[i][2])+parseFloat(result[i][4]));
    }
    $scope.ntotalnos=ntotalnos;
    $scope.ntotals=ntotals;
    $scope.ptotalnos=ptotalnos;
    $scope.ptotals=ptotals;
    $scope.totalnos=totalnos;
    $scope.totals=totals;
  });

  $scope.ctotal=function(chq)
  {
    return parseInt(chq[1])+parseInt(chq[3]);
  }

  $scope.stotal=function(chq)
  {
    return parseFloat(chq[2])+parseFloat(chq[4]);
  }

  $scope.showPop=function(){
    var popUp=$ionicPopup.confirm({
      title:'Approve All',
      template:'Do you want to approve all bills?'
    });

    popUp.then(function(res){
      if(res){
        var chqarr=[];
        angular.forEach($scope.chqs,function(chq){
          chqarr.push(chq[5]);
        });
        $ionicLoading.show({
          template: 'Approving...'
        });
        $http({
          method:'POST',
          url:'http://125.21.84.129/approvedtadata.php',
          data:{chqs:chqarr,rems:''}
        }).success(function(result){
            $http({
              method:'GET',
              url:'http://125.21.84.129/impactdata.php'
            }).success(function(result){
              $ionicLoading.hide();
              $scope.chqs=result;
              var ntotalnos=0;
              var ntotals=0;
              var ptotalnos=0;
              var ptotals=0;
              var totalnos=0;
              var totals=0;
              for(var i=0;i<result.length;i++)
              {
                ntotalnos+=parseInt(result[i][1]);
                ntotals+=parseFloat(result[i][2]);
                ptotalnos+=parseInt(result[i][3]);
                ptotals+=parseFloat(result[i][4]);
                totalnos+=(parseInt(result[i][1])+parseInt(result[i][3]));
                totals+=(parseFloat(result[i][2])+parseFloat(result[i][4]));
              }
              $scope.ntotalnos=ntotalnos;
              $scope.ntotals=ntotals;
              $scope.ptotalnos=ptotalnos;
              $scope.ptotals=ptotals;
              $scope.totalnos=totalnos;
              $scope.totals=totals;
            });
        });
      }
    });
  }

  $scope.showAction=function(chq){
    $ionicActionSheet.show({
      buttons:[
        {'text':'Approve'}
      ],
      titleText:chq[0],
      cancelText:'Cancel',
      buttonClicked:function(){
        var chqarr=[];
        chqarr.push(chq[5]);
        $ionicLoading.show({
          template: 'Approving...'
        });
        $http({
          method:'POST',
          url:'http://125.21.84.129/approvedtadata.php',
          data:{chqs:chqarr,rems:''}
        }).success(function(result){
            $http({
              method:'GET',
              url:'http://125.21.84.129/impactdata.php'
            }).success(function(result){
              $ionicLoading.hide();
              $scope.chqs=result;
              var ntotalnos=0;
              var ntotals=0;
              var ptotalnos=0;
              var ptotals=0;
              var totalnos=0;
              var totals=0;
              for(var i=0;i<result.length;i++)
              {
                ntotalnos+=parseInt(result[i][1]);
                ntotals+=parseFloat(result[i][2]);
                ptotalnos+=parseInt(result[i][3]);
                ptotals+=parseFloat(result[i][4]);
                totalnos+=(parseInt(result[i][1])+parseInt(result[i][3]));
                totals+=(parseFloat(result[i][2])+parseFloat(result[i][4]));
              }
              $scope.ntotalnos=ntotalnos;
              $scope.ntotals=ntotals;
              $scope.ptotalnos=ptotalnos;
              $scope.ptotals=ptotals;
              $scope.totalnos=totalnos;
              $scope.totals=totals;
            });
        });
        return true;
      }
    });
  }
})

.controller('DwaCtrl', function($scope,$http,Commas,Dates,$ionicLoading,$ionicActionSheet,$ionicPopup) {
  $ionicLoading.show({
      template: 'Loading...'
    });
  $scope.Commas=Commas;
  $scope.Dates=Dates;

  $http({
    method:'GET',
    url:'http://125.21.84.129/dwadata.php',
  })
  .success(function(result){
    $ionicLoading.hide();
    $scope.chqs=result[0];
    var ntotalnos=0;
    var ntotals=0;
    var ptotalnos=0;
    var ptotals=0;
    var totalnos=0;
    var totals=0;
    for(var i=0;i<result[0].length;i++)
    {
      ntotalnos+=parseInt(result[0][i][1]);
      ntotals+=parseFloat(result[0][i][2]);
      ptotalnos+=parseInt(result[0][i][3]);
      ptotals+=parseFloat(result[0][i][4]);
      totalnos+=(parseInt(result[0][i][3])+parseInt(result[0][i][1]));
      totals+=(parseFloat(result[0][i][4])+parseFloat(result[0][i][2]));
    }
    $scope.wchqs=result[1];
    var wntotalnos=0;
    var wntotals=0;
    var wptotalnos=0;
    var wptotals=0;
    var wtotalnos=0;
    var wtotals=0;
    for(var j=0;j<result[1].length;j++)
    {
      wntotalnos+=parseInt(result[1][j][1]);
      wntotals+=parseFloat(result[1][j][2]);
      wptotalnos+=parseInt(result[1][j][3]);
      wptotals+=parseFloat(result[1][j][4]);
      wtotalnos+=(parseInt(result[1][j][3])+parseInt(result[1][j][1]));
      wtotals+=(parseFloat(result[1][j][4])+parseFloat(result[1][j][2]));
    }
    $scope.wntotalnos=wntotalnos;
    $scope.wntotals=wntotals;
    $scope.wptotalnos=wptotalnos;
    $scope.wptotals=wptotals;
    $scope.wtotalnos=wtotalnos;
    $scope.totals=totals;
    $scope.ntotalnos=ntotalnos;
    $scope.ntotals=ntotals;
    $scope.ptotalnos=ptotalnos;
    $scope.ptotals=ptotals;
    $scope.totalnos=totalnos;
    $scope.totals=totals;
  });

  $scope.ctotal=function(chq)
  {
    return parseInt(chq[1])+parseInt(chq[3]);
  }

  $scope.stotal=function(chq)
  {
    return parseFloat(chq[2])+parseFloat(chq[4]);
  }

  $scope.showPop=function(){
    var popUp=$ionicPopup.confirm({
      title:'Approve All',
      template:'Do you want to approve all bills?'
    });

    popUp.then(function(res){
      if(res){
        var chqarr=[];
        angular.forEach($scope.chqs,function(chq){
          chqarr.push(chq[5]);
        });
        // $ionicLoading.show({
        //   template: 'Approving...'
        // });
        // $http({
        //   method:'POST',
        //   url:'http://125.21.84.129/approvedwadata.php',
        //   data:{chqs:chqarr,rems:''}
        // }).success(function(result){
        //     $http({
        //       method:'GET',
        //       url:'http://125.21.84.129/dwadata.php'
        //     }).success(function(result){
        //       $ionicLoading.hide();
        //       $scope.chqs=result;
        //       var ntotalnos=0;
        //       var ntotals=0;
        //       var ptotalnos=0;
        //       var ptotals=0;
        //       var totalnos=0;
        //       var totals=0;
        //       for(var i=0;i<result.length;i++)
        //       {
        //         ntotalnos+=parseInt(result[i][1]);
        //         ntotals+=parseFloat(result[i][2]);
        //         ptotalnos+=parseInt(result[i][3]);
        //         ptotals+=parseFloat(result[i][4]);
        //         totalnos+=(parseInt(result[i][1])+parseInt(result[i][3]));
        //         totals+=(parseFloat(result[i][2])+parseFloat(result[i][4]));
        //       }
        //       $scope.ntotalnos=ntotalnos;
        //       $scope.ntotals=ntotals;
        //       $scope.ptotalnos=ptotalnos;
        //       $scope.ptotals=ptotals;
        //       $scope.totalnos=totalnos;
        //       $scope.totals=totals;
        //     });
        // });
      }
    });
  }

  $scope.showAction=function(chq){
    $ionicActionSheet.show({
      buttons:[
        {'text':'Approve'}
      ],
      titleText:chq[0],
      cancelText:'Cancel',
      buttonClicked:function(){
        var chqarr=[];
        chqarr.push(chq[5]);
        // $ionicLoading.show({
        //   template: 'Approving...'
        // });
        // $http({
        //   method:'POST',
        //   url:'http://125.21.84.129/approvedwadata.php',
        //   data:{chqs:chqarr,rems:''}
        // }).success(function(result){
        //     $http({
        //       method:'GET',
        //       url:'http://125.21.84.129/dwadata.php'
        //     }).success(function(result){
        //       $ionicLoading.hide();
        //       $scope.chqs=result;
        //       var ntotalnos=0;
        //       var ntotals=0;
        //       var ptotalnos=0;
        //       var ptotals=0;
        //       var totalnos=0;
        //       var totals=0;
        //       for(var i=0;i<result.length;i++)
        //       {
        //         ntotalnos+=parseInt(result[i][1]);
        //         ntotals+=parseFloat(result[i][2]);
        //         ptotalnos+=parseInt(result[i][3]);
        //         ptotals+=parseFloat(result[i][4]);
        //         totalnos+=(parseInt(result[i][1])+parseInt(result[i][3]));
        //         totals+=(parseFloat(result[i][2])+parseFloat(result[i][4]));
        //       }
        //       $scope.ntotalnos=ntotalnos;
        //       $scope.ntotals=ntotals;
        //       $scope.ptotalnos=ptotalnos;
        //       $scope.ptotals=ptotals;
        //       $scope.totalnos=totalnos;
        //       $scope.totals=totals;
        //     });
        // });
        return true;
      }
    });
  }
});
